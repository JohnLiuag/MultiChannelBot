import { StatePropertyAccessor, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY } from '../../common/constants';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';

export const ANOC_STATUS = 'ANOC_STATUS';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

export class AnocStatusDialog extends CancelAndHelpDialog {
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;

    constructor(id: string, userState: UserState) {
        super(id || ANOC_STATUS);
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

        if (['non medical', 'wellness'].includes(consumer.eligibilityType.toLowerCase())) {
            message = 'Your plan does not include coverage for medical services. ' +
                'If you have questions about this, please type **"help"** to chat with a live concierge.'
        } else if (['Active', 'FutureActive'].includes(consumer.memberStatus)
            || ['Active', 'FutureActive'].includes(consumer.dvMemberStatus)) {
            let link: string;
            if ([consumer.memberStatus, consumer.dvMemberStatus].includes('Active')) {
                link = '#/main/content/your-coverage-and-benefits';
            } else {
                link = '#/main/content/your-coverage-and-benefits?coverage=future';
            }

            if (['Medicare', 'SNP'].includes(consumer.eligibilityType)) {
                // if MC/SNP and active or future active:
                message = `You can learn more about upcoming changes to your Medicare plan by reviewing your **Annual Notice of Change (ANOC)** document. ` +
                    `You can find your ANOC here by selecting your **Medical** plan: [Plans and Coverage](${link})`;
            } else {
                // for all other active or future active members (except wellness or non-medical):
                message = `You can view your coverage details here: [Plans and Coverage](${link})`;
            }
        } else {
            // Termed (also if MC/SNP and termed)
            message = 'Your coverage is not currently active. If you have questions about this, please type **"help"** to chat with a live concierge.';
        }
        await stepContext.context.sendActivity(message);
        return await stepContext.next();
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: true });
    }
}
