import { StatePropertyAccessor, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY } from '../../common/constants';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';

export const GENERAL_FORMS = 'GENERAL_FORMS';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

/*
    the simplest dialogue consisting of one answer for which there is no condition.
    Theoretically, for this it was not necessary to create a dialogue, but it was easier
    to immediately send an answer from the main dialogue, or even include the answer in the QnA database.
    But given the high probability in the future of the complication of the requirements for this dialog,
    the implementation looks exactly like this (at the moment it is somewhat redundant)
*/
export class GeneralFormsDialog extends CancelAndHelpDialog {
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;

    constructor(id: string, userState: UserState) {
        super(id || GENERAL_FORMS);
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

        if (consumer.eligibilityType.toLowerCase() === 'wellness') {
            message = `I am sorry I am unable to answer this question. Please rephrase your question, or type **“help”** to chat with a live concierge.`;
        } else {
            message = `You can find commonly used forms by visiting [Forms and Guides](#/main/content/commonly-used-forms).`;
        }

        await stepContext.context.sendActivity(message);
        return await stepContext.next();
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: true });
    }
}
