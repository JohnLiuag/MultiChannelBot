import { ActivityTypes, UserState, ActionTypes } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext, ListStyle, ChoicePrompt } from 'botbuilder-dialogs';

import { CancelAndHelpDialog } from '../../cancel-and-help.dialog';

export const BILLING_MEDICAL = 'BILLING_MEDICAL';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const CHOICE_PROMPT = 'CHOICE_PROMPT';


export class BillingMedicalDialog extends CancelAndHelpDialog {
    constructor(id: string, userState: UserState) {
        super(id || BILLING_MEDICAL);
        this.addDialog(new ChoicePrompt(CHOICE_PROMPT));
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.selectFacilityStep.bind(this),
            this.finalStep.bind(this)
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const message = `What type of medical bill do you want to pay?`;
        await stepContext.context.sendActivity(message);
        const choiceOptions = [{
            title: 'Other Facility',
            value: 'Other Facility'

        },
        {
            title: 'UPMC Facility',
            value: 'UPMC Facility'
        }];

        return await stepContext.prompt(CHOICE_PROMPT,
            {
                style: ListStyle.suggestedAction,
            },
            choiceOptions.map(el => {
                return {
                    value: el.value,
                    action: {
                        type: ActionTypes.ImBack,
                        title: el.title,
                        value: el.title,
                    },
                }
            })
        );
    }

    private async selectFacilityStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        if ((stepContext.result && stepContext.result.value) && (stepContext.result.value.toLowerCase() === 'upmc facility')) {
            const firstMessage = `Have a MyUPMC account? The easiest way to pay your hospital or physician bill is on ` +
                `<a href="https://myupmc.upmc.com/" target="_blank">MyUPMC</a>.`;
            const secondMessage = `If you have received a bill in mail, you can also pay your bill here. \n` +
                `<br>` +
                `<a href="https://www.upmc.com/patients-visitors/paying-bill/bill-pay" target="_blank">Pay Your UPMC Bill</a>`;
            await stepContext.context.sendActivity(firstMessage);
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            await stepContext.context.sendActivity(secondMessage);
            return stepContext.next();
        }
        if ((stepContext.result && stepContext.result.value) && (stepContext.result.value.toLowerCase() === 'other facility')) {
            const firstMessage = `If you have a bill from a provider or facility other than UPMC, you should pay the provider directly.`;
            const secondMessage = `Please check your bill for a website, phone number, or address where payment can be made.`;
            await stepContext.context.sendActivity(firstMessage);
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            await stepContext.context.sendActivity(secondMessage);
            return stepContext.next();
        }
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: true });
    }
}
