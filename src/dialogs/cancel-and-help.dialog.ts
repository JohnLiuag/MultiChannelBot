import { InputHints } from 'botbuilder';
import { ComponentDialog, DialogContext, DialogTurnResult, DialogTurnStatus } from 'botbuilder-dialogs';

import { MAIN_DIALOG } from './main.dialog';

/**
 * This base class watches for common phrases like "help" and "cancel" and takes action on them
 * BEFORE they reach the normal bot logic.
 */
export class CancelAndHelpDialog extends ComponentDialog {
    constructor(id: string) {
        super(id);
    }

    public async onContinueDialog(innerDc: DialogContext): Promise<DialogTurnResult> {
        const result = await this.interrupt(innerDc);
        if (result) {
            return result;
        }
        return await super.onContinueDialog(innerDc);
    }

    private async interrupt(innerDc: DialogContext): Promise<DialogTurnResult | undefined> {
        if (innerDc.context.activity.text) {
            const text = innerDc.context.activity.text.toLowerCase();

            switch (text.trim()) {
                // case 'help': // Has conflicts with current LUIS intent "LiveChat_Transition"
                case '?':
                    const helpMessageText = 'Show help here';
                    await innerDc.context.sendActivity(helpMessageText, helpMessageText, InputHints.ExpectingInput);
                    return { status: DialogTurnStatus.waiting };
                case 'cancel':
                case 'quit':
                    const cancelMessageText = 'Cancelling...';
                    // await innerDc.context.sendActivity(cancelMessageText, cancelMessageText, InputHints.IgnoringInput);
                    await innerDc.cancelAllDialogs();
                    return await innerDc.beginDialog(MAIN_DIALOG, { restartMsg: 'What would you like to chat about?', isCancel: true });
                case 'menu':
                case 'me u':
                case 'mebu':
                case 'menue':
                case 'meni':
                case 'start over':
                case 'menus':
                    await innerDc.cancelAllDialogs();
                    return await innerDc.beginDialog(MAIN_DIALOG, { nextIntent: 'Initial_Chat' });
            }
        }
    }
}
