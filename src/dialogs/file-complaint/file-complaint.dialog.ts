import { ActivityTypes, StatePropertyAccessor, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY, USER_AUTH_PROPERTY } from '../../common/constants';
import { IEligibility, ISubscription } from '../../common/interfaces/subscription.interface';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';
import { CommonService } from '../../common/services/common.service';

export const FILE_COMPLAINT = 'FILE_COMPLAINT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

export class FileComplaintDialog extends CancelAndHelpDialog {
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;
    private commonService: CommonService;

    constructor(id: string, userState: UserState) {
        super(id || FILE_COMPLAINT);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
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
        let messageFirst: string;
        let messageLink: string = `[Appeal or Grievance Submission Form](#/main/content/assessment-landing?contentId=28783f65-1dcb-40a0-93f8-25b11526b6cc&type=cg_adverse)`;
        let messageLast: string;

        if (['Medicare', 'SNP'].includes(consumer.eligibilityType)) { // Medicare/SNP
            messageFirst = 'You can file an **appeal or grievance** online by using the link below.';
            messageLast = '**If this is an urgent or expedited appeal or grievance request, please call Member Services so we can assist you. [Click here](#/main/content/contact-us) for the phone number.**';
            await stepContext.context.sendActivity(messageFirst);
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            await stepContext.context.sendActivity(messageLink);
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            await stepContext.context.sendActivity(messageLast);
            return stepContext.next();
        } else if (['Medicaid', 'CHC', 'CHIP'].includes(consumer.eligibilityType)) {
            messageFirst = 'You can file a **complaint or grievance** online by using the link below.';
            messageLink = `[Complaint or Grievance Submission Form](#/main/content/assessment-landing?contentId=28783f65-1dcb-40a0-93f8-25b11526b6cc&type=cg_adverse)`;
            messageLast = '**If this is an urgent or expedited complaint or grievance request, please call Member Services so we can assist you. [Click here](#/main/content/contact-us) for the phone number.**';
            await stepContext.context.sendActivity(messageFirst);
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            await stepContext.context.sendActivity(messageLink);
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            await stepContext.context.sendActivity(messageLast);
            return stepContext.next();
        } else {
            let currentSubscription: ISubscription;
            const memberId = consumer.mc400MemberId || consumer.dentalVisionMemberId;
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
            currentSubscription = allPlans.find(el => el.memberId === memberId);
            let eligibility: IEligibility = currentSubscription.eligibilities.find( el => el.eligibilityStatus === 'Active');
            if (!eligibility) {
                eligibility = currentSubscription.eligibilities[0];
            }
            const isCommercial = eligibility.eligibilityTypeDescription.toLowerCase() === 'commercial';

            if (isCommercial && eligibility.isAso !== false && eligibility.corpId !== 'SC77') { // CM ASO (except SC77)
                messageFirst = 'You can file an **appeal for adverse benefit determination** online by using the link below.';
                messageLast = '**If this is an urgent or expedited request, please call Member Services so we can assist you. [Click here](#/main/content/contact-us) for the phone number.**';
                await stepContext.context.sendActivity(messageFirst);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(messageLink);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(messageLast);
                return stepContext.next();
            } else if ((isCommercial && eligibility.isAso === false) || eligibility.corpId === 'SC77') { // CM FI (including F275) + Corp ID SC77
                messageFirst = 'You can file a **complaint, grievance, or appeal** online by using the link below.';
                messageLast = '**If this is an urgent or expedited appeal or grievance request, please call Member Services so we can assist you. [Click here](#/main/content/contact-us) for the phone number.**';
                await stepContext.context.sendActivity(messageFirst);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(messageLink);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(messageLast);
                return stepContext.next();
            } else {
                messageFirst = `You can't file a complaint or appeal online yet, but that feature will be coming soon! In the meantime, you can call the Health Care Concierge team using the number on your ID card or start a live chat for further assistance.`;
                messageLast = 'Please type **"help"** to chat with a live concierge, or [click here](#/main/content/contact-us) for the phone number.';
                await stepContext.context.sendActivity(messageFirst);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(messageLast);
                return stepContext.next();
            }
        }
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: false });
    }
}
