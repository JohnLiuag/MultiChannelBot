import { TimexProperty } from '@microsoft/recognizers-text-data-types-timex-expression';
import { InputHints, MessageFactory } from 'botbuilder';
import { DateTimePrompt, DateTimeResolution, DialogTurnResult, PromptValidatorContext, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';

export const WHO_IS_MY_PCP = 'WHO_IS_MY_PCP';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

export class WhoIsMyPcpDialog extends CancelAndHelpDialog {

    constructor(id: string) {
        super(id || WHO_IS_MY_PCP);
        // TODO: add dialog for each channel for current intent
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
                this.initialStep.bind(this),
                this.finalStep.bind(this)
            ]));

        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        switch (stepContext.context.activity.channelId) {
            // TODO: beginDialog for current channel
            case 'emulator': {
                await stepContext.context.sendActivity('some imprtant response about PCP');
                break;
            }
            // case 'sms': {
            //     await stepContext.context.sendActivity('some imprtant response');
            //     break;
            // }
            // case 'facebook': {
            //     await facebookActivityHandler.run(context);
            //     break;
            // }
            // case 'alexa': {
            //     await alexaActivityHandler.run(context);
            //     break;
            // }
            default: {
                await stepContext.context.sendActivity('some important response2');
            }
        }

        return await stepContext.next();
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        ///
        return await stepContext.endDialog();
    }
}
