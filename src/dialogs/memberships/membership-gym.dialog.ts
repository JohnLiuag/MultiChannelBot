import { UserState, StatePropertyAccessor, ActivityTypes } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CONSUMER_PROFILE_PROPERTY } from '../../common/constants';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';

export const MEMBERSHIP_GYM = 'MEMBERSHIP_GYM';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

export class MembershipGymDialog extends CancelAndHelpDialog {
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;
    
    constructor(id: string, userState: UserState) {
        super(id || MEMBERSHIP_GYM);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this)
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const consumerProfile: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        const memberStatus = consumerProfile.memberStatus?.length ? consumerProfile.memberStatus : consumerProfile.dvMemberStatus;
        let isSuccess: boolean;
        let message: string;

        if(['Medicare', 'SNP'].includes(consumerProfile.eligibilityType)) {
            if (memberStatus === 'Active') {
                message = `As a member, you have access to SilverSneakers&#174; fitness benefits. Take advantage of free gym memberships, live online fitness classes, and more. ` +
                `To learn more, please visit the <a href="https://www.silversneakers.com" target="_blank">SilverSneakers website</a>, ` + 
                `or call <a href="tel:1-888-423-4632">1-888-423-4632</a> (TTY: 711) Monday through Friday, 8 a.m. to 8 p.m. ET.`;
                await stepContext.context.sendActivity(message);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                message = `There is no coinsurance, copayment, or deductible for the SilverSneakers fitness benefit.`;
                await stepContext.context.sendActivity(message);
                isSuccess = false;
                return await stepContext.next({isSuccess});
            }
            if (memberStatus === 'Termed') {
                message = `Your coverage is not active, so you don't currently have access to SilverSneakers through your UPMC <i>for Life</i> plan. ` +
                `If you have insurance through a different carrier, you can check your SilverSneakers eligibility by visiting the <a href="https://www.silversneakers.com" target="_blank">SilverSneakers website</a>, ` +
                `or call <a href="tel:1-888-423-4632">1-888-423-4632</a> (TTY: 711) Monday through Friday, 8 a.m. to 8 p.m. ET.`;
                await stepContext.context.sendActivity(message);
                isSuccess = true;
                return await stepContext.next({isSuccess});
            }
            if (memberStatus === 'FutureActive') {
                message = `Your coverage isn't active yet. Once it is, you can take advantage of free gym memberships, live online fitness classes, and more. To learn more, please visit the <a href="https://www.silversneakers.com" target="_blank">SilverSneakers website</a>, ` +
                `or call <a href="tel:1-888-423-4632">1-888-423-4632</a> (TTY: 711) Monday through Friday, 8 a.m. to 8 p.m. ET.`;
                await stepContext.context.sendActivity(message);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                message = `There is no coinsurance, copayment, or deductible for the SilverSneakers fitness benefit.`;
                await stepContext.context.sendActivity(message);
                isSuccess = false;
                return await stepContext.next({isSuccess});
            }
        } else if (['Commercial', 'Medicaid', 'CHC'].includes(consumerProfile.eligibilityType)) {
            if (memberStatus === 'Active') {
                message = `As a member, you are eligible to join Active&Fit Direct, which gives you access to more than 11,000 standard fitness centers and/or more than 4,500 premium exercise studios, plus more than 6,500 digital workout videos, for a low monthly fee with no long-term contract. ` + 
                `To learn more, please visit <a href="https://www.activeandfitdirect.com/fitness/wellness" target="_blank">Active&Fit Direct</a>.`;
                await stepContext.context.sendActivity(message);
                isSuccess = false;
                return await stepContext.next({isSuccess});
            }
            if (memberStatus === 'Termed') {
                message = `Your coverage is not active, so you don't currently have access to Active&Fit Direct through your UPMC Health Plan coverage.`;
                await stepContext.context.sendActivity(message);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                isSuccess = true;
                return await stepContext.next({isSuccess});
            }
            if (memberStatus === 'FutureActive') {
                message = `Your coverage isn't active yet. Once it is, you will be eligible to join Active&Fit Direct, which gives you access to more than 11,000 standard fitness centers and/or more than 4,500 premium exercise studios, plus more than 6,500 digital workout videos, for a low monthly fee with no long-term contract. ` +
                `To learn more, please visit <a href="https://www.activeandfitdirect.com/fitness/wellness" target="_blank">Active&Fit Direct</a>.`;
                await stepContext.context.sendActivity(message);
                isSuccess = false;
                return await stepContext.next({isSuccess});
            }
        } else {
            message = `You are not currently eligible for any gym membership discounts through UPMC Health Plan.`;
            await stepContext.context.sendActivity(message);
            isSuccess = true;
            return await stepContext.next({isSuccess});
        }
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: stepContext.result.isSuccess });
    }
}
