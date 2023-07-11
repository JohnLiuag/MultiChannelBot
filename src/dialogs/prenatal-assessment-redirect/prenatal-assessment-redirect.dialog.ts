import { ActivityTypes, StatePropertyAccessor, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY } from '../../common/constants';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';

export const PRENATAL_ASSESSMENT_REDIRECTS = 'PRENATAL_ASSESSMENT_REDIRECTS';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

export class PrenatalAssessmentRedirectDialog extends CancelAndHelpDialog {

    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;

    constructor(id: string, userState: UserState) {
        super(id || PRENATAL_ASSESSMENT_REDIRECTS);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);

        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this),
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const consumer: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        let message: string;
        let isSuccess = false;

        if (consumer.eligibilityType.toLowerCase() === 'commercial' ||
            consumer.eligibilityType.toLowerCase() === 'chip') {
            message = 'You may be eligible for reimbursement up to $65 for completing prenatal education courses, including Lamaze, Lamaze Refresher, Breastfeeding, and Prepared Childbirth.'
            await stepContext.context.sendActivity(message);
            await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
            message = '[Click here](#/main/content/assessment-landing?contentId=c0c22263-6867-444b-b52f-02899b3b3c6a) to fill out the Prenatal Education Reimbursement Form.'
            await stepContext.context.sendActivity(message);
        } else {
            isSuccess = true;
            message = 'The requested form is not applicable to your plan.'
            await stepContext.context.sendActivity(message);
        }
        return await stepContext.next({ isSuccess });

    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: stepContext.result.isSuccess });
    }
}
