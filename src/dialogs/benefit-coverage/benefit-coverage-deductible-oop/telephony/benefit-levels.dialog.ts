import { UserState } from 'botbuilder';
import {
    DialogSet,
    DialogTurnStatus,
    NumberPrompt,
    WaterfallDialog,
    WaterfallStepContext,
} from 'botbuilder-dialogs';
import { MessageFactory } from 'botbuilder';
import { CancelAndHelpDialog } from '../../../cancel-and-help.dialog';
import { voiceModel } from '../../../../common/voice-model/voice-model';

export const BENEFIT_LEVELS_DIALOG = 'BENEFIT_LEVELS_DIALOG';

const NUMBER_PROMPT = 'NUMBER_PROMPT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

export class BenefitLevelsTelephonyDialog extends CancelAndHelpDialog {

    constructor(id: string) {
        super(id || BENEFIT_LEVELS_DIALOG);

        this.addDialog(new NumberPrompt(NUMBER_PROMPT));

        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.levelOneNetworkStep.bind(this),
            this.levelTwoNetworkStep.bind(this)
        ]));

        this.initialDialogId = WATERFALL_DIALOG;
    }

    async levelOneNetworkStep(step: WaterfallStepContext<any>) {
        const benefitLevelsData = step.options;
        let message = '';

        if (benefitLevelsData.benefitLevelLabels.length > 1) {
            message = benefitLevelsData.firstTextMessage + benefitLevelsData.firstTextQuestion + '. If yes, press 1. If no, say MENU';
            return await step.prompt(NUMBER_PROMPT,
                MessageFactory.text(
                    message,
                    voiceModel(message),
                    'ignoringInput'
                )
            );
        } else {
            message = benefitLevelsData.firstTextMessage;
            await step.prompt(NUMBER_PROMPT,
                MessageFactory.text(
                    message,
                    voiceModel(message),
                    'ignoringInput'
                )
            );
            return await step.endDialog();
        }
    }

    async levelTwoNetworkStep(step) {
        if (+step.result === 1) {
            const benefitLevelsData = step.options;
            const message = benefitLevelsData.secondTextMessage;
            await step.prompt(NUMBER_PROMPT,
                MessageFactory.text(
                    message,
                    voiceModel(message),
                    'ignoringInput'
                )
            );

            return await step.endDialog({isSuccess: true});
        } else {
            return await step.endDialog({isSuccess: true});
        }
    }
}
