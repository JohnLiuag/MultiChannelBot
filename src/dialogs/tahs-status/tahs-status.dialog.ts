import { StatePropertyAccessor, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY } from '../../common/constants';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';

export const TAHS_STATUS = 'TAHS_STATUS';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

export class TahsStatusDialog extends CancelAndHelpDialog {
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;

    constructor(id: string, userState: UserState) {
        super(id || TAHS_STATUS);
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
        let isSuccess: boolean;

        if (consumer.corpCode === 'U135' && [consumer.memberStatus, consumer.memberStatus].includes('Active')) {
            isSuccess = true;
            message = 'You can check your current Take a Healthy Step (TAHS) status on the [Incentives with Take a Healthy Step](#/main/content/rewards-and-incentives-dashboard).';
        } else {
            message = 'I am sorry I am unable to answer this question. Please rephrase your question, or type **“help”** to chat with a live concierge.';
        }

        await stepContext.context.sendActivity(message);
        return await stepContext.next({isSuccess});
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: stepContext.result.isSuccess });
    }
}
