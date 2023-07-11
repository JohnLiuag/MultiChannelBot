import { StatePropertyAccessor, UserState, ConversationState, ActionTypes, ActivityTypes } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext, TextPrompt, ChoicePrompt, ListStyle } from 'botbuilder-dialogs';

import { USER_AUTH_PROPERTY } from '../../common/constants';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';
import { ITelemetryData } from '../../common/interfaces/telemetry.interface';
import { TELEMETRY_DATA_PROPERTY } from '../../common/constants';


export const LIVE_CHAT_UNAVAILABLE = 'LIVE_CHAT_UNAVAILABLE';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

const TEXT_PROMPT = 'TEXT_PROMPT';
const CHOICE_PROMPT = 'CHOICE_PROMPT';

export class LiveChatUnavailableDialog extends CancelAndHelpDialog {
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private telemetryDataAccessor: StatePropertyAccessor<ITelemetryData>;

    constructor(id: string, userState: UserState, conversationState: ConversationState) {
        super(id || LIVE_CHAT_UNAVAILABLE);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.telemetryDataAccessor = conversationState.createProperty<ITelemetryData>(TELEMETRY_DATA_PROPERTY);

        this.addDialog(new TextPrompt(TEXT_PROMPT));
        this.addDialog(new ChoicePrompt(CHOICE_PROMPT));
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.choiceResultStep.bind(this),
            this.finalStep.bind(this)
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        let liveChatAvailableHoursMessage = stepContext.options['liveChatAvailableHoursMessage'];
        liveChatAvailableHoursMessage = liveChatAvailableHoursMessage.replace('<br/>','');
        const firstMessageText = `Live Chat is currently unavailable. Available hours are: ${ liveChatAvailableHoursMessage }`;
        const secondMessageText = 'You can call or send a secure message. How would you like to get in touch?';
        const additionalPrompt = {
            title: 'Not now',
            url: null
        };
        const choiceOptions = [
            {
                title: 'Call Us',
                url: '/main/content/contact-us'
            },
            {
                title: 'Send a message',
                url: '/main/content/message-center'
            },
            additionalPrompt
        ];

        await stepContext.context.sendActivity(firstMessageText);
        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
        await stepContext.context.sendActivity(secondMessageText);
        await stepContext.context.sendActivity({ type: 'event', name: 'custom_event/prompts_type', value: {
            type: 'standalone_prompts',
            list: [additionalPrompt]
        }});

        return await stepContext.prompt(CHOICE_PROMPT,
            {
                style: ListStyle.suggestedAction,
            },
            choiceOptions.map(el => {
                return {
                    value: el.url ? el.url : el.title,
                    action: {
                        type: ActionTypes.ImBack,
                        title: el.title,
                        value: el.title,
                    }
                }
            })
        );
    }

    private async choiceResultStep(stepContext: WaterfallStepContext) {
        const telemetryData = await this.telemetryDataAccessor.get(stepContext.context, {});
        telemetryData.isChoicePrompt = true;
        if (stepContext.result && stepContext.result.value.toLowerCase() !== 'not now') {
            await stepContext.context.sendActivity({ type: 'event', name: 'custom_event/openRedirectUrl', value: stepContext.result.value });
        }
        return await stepContext.next({ success: true });
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: true });
    }

}
