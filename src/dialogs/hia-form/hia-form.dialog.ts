import { ActivityTypes, StatePropertyAccessor, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY, USER_AUTH_PROPERTY } from '../../common/constants';
import { IEligibility, ISubscription } from '../../common/interfaces/subscription.interface';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';
import { HiaFormService } from './hia-form.service';
import { CommonService } from '../../common/services/common.service';

export const HIA_FORM = 'HIA_FORM';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const REIMBURSEMENTS_AND_PAYMENTS_CONTENT_ID = '2106';

export class HiaFormDialog extends CancelAndHelpDialog {
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;
    private hiaFormService: HiaFormService;
    private commonService: CommonService;

    constructor(id: string, userState: UserState) {
        super(id || HIA_FORM);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
        this.hiaFormService = new HiaFormService();
        this.commonService = new CommonService();

        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this),
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
        const consumer: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        const memberId = consumer.mc400MemberId || consumer.dentalVisionMemberId;
        const isCommercial = consumer.eligibilityType.toLowerCase() === 'commercial';
        if (isCommercial) {
            let allPlans: ISubscription[] = await this.commonService.getAllPlans(
                memberId.substring(0, 9),
                consumer,
                userAuth.token,
                userAuth.token2
            ).catch(err => []);

            if (!allPlans.length) {
                await stepContext.context.sendActivity('We are unable to display this information at this time.');
                return stepContext.next();
            }

            const currentSubscription: ISubscription = allPlans.find(el => el.memberId === memberId);
            let eligibility: IEligibility = currentSubscription.eligibilities.find( el => el.eligibilityStatus === 'Active');
            if (!eligibility) {
                eligibility = currentSubscription.eligibilities[0];
            }
            const hasHia = eligibility.incentiveTypeDescription?.toLowerCase() === 'hia';
            if (hasHia && eligibility.corpId !== 'U249') { // CM where hasHIA: true (except U249)
                let messageFirst = `You can submit the Health Incentive Account Submission Form to request credit for healthy activities that you've completed, such as a dental exam, vision exam, or flu shot (if not received at your doctor's office).`;
                let messageSecond = '[Click here](#/main/content/assessment-landing?contentId=cd6bc907-ea2d-43ff-83ce-c68f8c42cbc8) to fill out the Health Incentive Account Submission Form.';
                await stepContext.context.sendActivity(messageFirst);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(messageSecond);
                return stepContext.next();
            } else if (eligibility.corpId === 'U249') { // CM (U249 only)
                let messageFirst = `You can submit the Health Incentive Account Submission Form to request credit for healthy activities that you've completed, such as a dental exam, vision exam, or flu shot (if not received at your doctor's office).`;
                let messageSecond = 'Click below to open the Health Incentive Account Submission Form.';
                let messageThird = '';
                let contentResponse = await this.hiaFormService.getContent(REIMBURSEMENTS_AND_PAYMENTS_CONTENT_ID, userAuth.token)
                    .catch(err => { });
                let errorMessage = 'We are unable to display this information at this time.';
                if (!contentResponse) {
                    await stepContext.context.sendActivity(errorMessage);
                    return stepContext.next();
                } else {
                    let linkText = 'Incentive Submission Form';
                    let sectionContent: string;
                    let linkUrl: string;
                    contentResponse.contents.find(el => {
                        Object.values(el.value).find((val: string) => {
                            if (val.includes(linkText)) {
                                sectionContent = val;
                                return true;
                            }
                        });
                    });
                    if (sectionContent) {
                        let startIndex = sectionContent.indexOf('http');
                        let endIndex = sectionContent.indexOf('"', startIndex);
                        linkUrl = sectionContent.substring(startIndex, endIndex);
                    }
                    if (!linkUrl) {
                        await stepContext.context.sendActivity(errorMessage);
                        return stepContext.next();
                    }
                     else {
                        messageThird = `<a href="${linkUrl}" target="_blank">${linkText}</a>`;
                     }
                }
                await stepContext.context.sendActivity(messageFirst);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(messageSecond);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(messageThird);
                return stepContext.next();
            } else {
                let message = `The form you've requested is not applicable to your plan.`;
                await stepContext.context.sendActivity(message);
                return stepContext.next({isSuccess: true});
            }
        } else { // For all other LOBs (all eligibility)
            let message = `The form you've requested is not applicable to your plan.`;
            await stepContext.context.sendActivity(message);
            return stepContext.next({isSuccess: true});
        }
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: stepContext.result ? stepContext.result['isSuccess'] : false });
    }
}
