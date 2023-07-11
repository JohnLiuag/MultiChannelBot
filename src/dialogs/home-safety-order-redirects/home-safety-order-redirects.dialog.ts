import { ActivityTypes, StatePropertyAccessor, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY, USER_AUTH_PROPERTY } from '../../common/constants';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';
import { HomeSafetyFormService } from './home-safety-form.service';

export const HOME_SAFETY_ORDER_REDIRECTS = 'HOME_SAFETY_ORDER_REDIRECTS';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const HOME_SAFETY_CONTENT_ID = '2080';

export class HomeSafetyOrderRedirectDialog extends CancelAndHelpDialog {

    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;
    private homeSafetyFormService: HomeSafetyFormService;
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;

    constructor(id: string, userState: UserState) {
        super(id || HOME_SAFETY_ORDER_REDIRECTS);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
        this.homeSafetyFormService = new HomeSafetyFormService();

        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this),
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const consumer: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});

        let message: string;
        let notApplicableMessage = `The form you've requested is not applicable to your plan. `
        let isSuccess = false;
        
        if (consumer.eligibilityType.toLowerCase() === 'medicare' && consumer.memberStatus === 'Active') {
            let contentResponse = await this.homeSafetyFormService.getContent(HOME_SAFETY_CONTENT_ID, userAuth.token)
            .catch(err => { });
            if (!contentResponse) {
                message = `I'm sorry, an error occurred on our end. We are unable to display this information right now. ` +
                    `I can transfer you to a concierge for further assistance. Type **"help"** to connect with them.`
                await stepContext.context.sendActivity(message);
            } else {
                let link = '#/main/content/assessment-landing?contentId=6ecc970b-439b-4af8-807e-f427df573a47';
                if (JSON.stringify(contentResponse).includes(link)) {
                    message = `You may be eligible for up to three home safety products each year at no additional cost. `;
                    await stepContext.context.sendActivity(message);
                    await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                    message = '[Click here](#/main/content/assessment-landing?contentId=6ecc970b-439b-4af8-807e-f427df573a47) to place an order. ' +
                        `You can also type **"help"** to chat with a concierge for more information and verify your eligibility.`;
                    await stepContext.context.sendActivity(message);
                } else {
                    message = notApplicableMessage;
                    await stepContext.context.sendActivity(message);
                    isSuccess = true;
                }
            }
        } else if (consumer.eligibilityType.toLowerCase() === 'snp' && consumer.memberStatus === 'Active') {
            message = `You are eligible for up to six home safety products per year at no additional cost. `;
            await stepContext.context.sendActivity(message);
            await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
            message = `Please contact your care manager to place an order. You can also type **"help"** to chat with a concierge for more information. `;
            await stepContext.context.sendActivity(message);
        } else {
            message = notApplicableMessage;
            await stepContext.context.sendActivity(message);
            isSuccess = true
        }


        return await stepContext.next({ isSuccess });
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: stepContext.result.isSuccess });
    }
}
