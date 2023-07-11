import { ActivityTypes, StatePropertyAccessor, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CONSUMER_PROFILE_PROPERTY } from '../../common/constants';

export const MYUPMC_REDIRECTS = 'MYUPMC_REDIRECTS';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

export class MyUpmcRedirectsDialog extends CancelAndHelpDialog {
    public consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;

    constructor(id: string, userState: UserState) {
        super(id || MYUPMC_REDIRECTS);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);


        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this),
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        let questionType: 'current' | 'schedule' | 'results' = stepContext.options['redirectType'];
        let message: string;
        let isSuccess = false;
        const consumer: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});

        switch (questionType) {
            case 'current':
                if (consumer.eligibilityType.toLowerCase() === 'chip') {
                    message = `If your child has an appointment with a UPMC provider, you can view or change your child's appointment by logging in to ` +
                        `<a href="https://upmcchld.consumeridp.us-1.healtheintent.com/saml2/sso/login?authenticationRequestId=56520793-9e10-4879-b1ab-3ff21525646c/" target="_blank">myCHP</a>.`;
                    await stepContext.context.sendActivity(message);
                    await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                    message = `If your child's appointment is not with a UPMC provider, please contact your child's provider regarding the appointment.`;
                    await stepContext.context.sendActivity(message);
                    break;
                } else {
                    message = `If you have an appointment with a UPMC provider, you can view or change your appointment by logging in to ` +
                        `<a href="https://myupmc.upmc.com/" target="_blank">MyUPMC</a>.`;
                    await stepContext.context.sendActivity(message);
                    await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                    message = `If your appointment is not with a UPMC provider, please contact your provider regarding the appointment.`;
                    await stepContext.context.sendActivity(message);
                    break;
                }
            case 'schedule':
                if (consumer.eligibilityType.toLowerCase() === 'chip') {
                    message = `If you would like to schedule an appointment with a UPMC doctor whom your child has seen before, you can do so by logging in to ` +
                        `<a href="https://upmcchld.consumeridp.us-1.healtheintent.com/saml2/sso/login?authenticationRequestId=56520793-9e10-4879-b1ab-3ff21525646c/" target="_blank">myCHP</a>.`;
                    await stepContext.context.sendActivity(message);
                    await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                    message = `You can also find a new doctor and schedule appointments online by visiting ` +
                        `<a href="https://providers.upmc.com/" target="_blank">Find a Doctor</a>.`;
                    await stepContext.context.sendActivity(message);
                    break;
                } else {
                    message = `If you would like to schedule an appointment with a UPMC doctor whom you've seen before, you can do so by logging in to ` +
                        `<a href="https://myupmc.upmc.com/" target="_blank">MyUPMC</a>.`;
                    await stepContext.context.sendActivity(message);
                    await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                    message = `You can also find a new doctor and schedule appointments online by visiting ` +
                        `<a href="https://providers.upmc.com/" target="_blank">Find a Doctor</a>.`;
                    await stepContext.context.sendActivity(message);
                    await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                    message = `If you can't find your provider there, please contact your doctor's office to schedule an appointment. ` +
                        `You can also type **"help"** to chat with a concierge for further assistance.`;
                    await stepContext.context.sendActivity(message);
                    break;
                }
            case 'results':
                if (consumer.eligibilityType.toLowerCase() === 'chip') {
                    message = `If your child's testing was ordered or done by a UPMC provider, you can check your child's test results by logging in to ` +
                        `<a href="https://upmcchld.consumeridp.us-1.healtheintent.com/saml2/sso/login?authenticationRequestId=56520793-9e10-4879-b1ab-3ff21525646c/" target="_blank">myCHP</a>.`;
                    await stepContext.context.sendActivity(message);
                    await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                    message = `If your child's testing was ordered or done outside of UPMC, please contact your child's doctor to get their test results.`
                    await stepContext.context.sendActivity(message);
                    await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                    message = `Please note that your child's test results will only be viewable online for members under age 13.`
                    await stepContext.context.sendActivity(message);                    
                    break;
                } else {
                    message = `If your testing was ordered or done by a UPMC provider, you can check your test results by logging in to ` +
                        `<a href="https://myupmc.upmc.com/" target="_blank">MyUPMC</a>.`;
                    await stepContext.context.sendActivity(message);
                    await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                    message = `If your testing was ordered or done outside of UPMC, please contact your doctor to get your test results.`;
                    await stepContext.context.sendActivity(message);
                    break;
                }
        }

        return await stepContext.next({ isSuccess });

    }


    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: stepContext.result.isSuccess });
    }
}
