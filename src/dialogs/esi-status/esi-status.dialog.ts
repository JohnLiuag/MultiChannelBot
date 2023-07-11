import { StatePropertyAccessor, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY } from '../../common/constants';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';

export const ESI_STATUS = 'ESI_STATUS';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

export class EsiStatusDialog extends CancelAndHelpDialog {
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;

    constructor(id: string, userState: UserState) {
        super(id || ESI_STATUS);
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

        if (consumer.hasRx) {
            if (['Active', 'FutureActive'].includes(consumer.memberStatus)
                || ['Active', 'FutureActive'].includes(consumer.dvMemberStatus)) {
                message = `You can check for coverage, find the price of a medication, find a pharmacy, and sign up ` +
                    `for home delivery by visiting the **Express Scripts** portal, which you can access here: [Pharmacy and Prescriptions](#/main/content/prescriptions)`;
            } else {
                message = `Your plan isn't active, but you can still view your medication history and manage your ` +
                    `home delivery by visiting the **Express Scripts** portal here: [Pharmacy and Prescriptions](#/main/content/prescriptions)`;
            }
        } else {
            message = `Your pharmacy benefits are not administered by UPMC Health Plan. Please contact your ` +
                `pharmacy benefit administrator for questions related to prescription coverage and costs.`;
        }

        await stepContext.context.sendActivity(message);
        return await stepContext.next();
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: true });
    }
}
