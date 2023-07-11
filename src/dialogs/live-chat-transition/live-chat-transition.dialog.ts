import { StatePropertyAccessor, UserState, ActionTypes, ConversationState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext, ListStyle, ChoicePrompt } from 'botbuilder-dialogs';

import { USER_AUTH_PROPERTY, CHAT_LOG_PROPERTY, TELEMETRY_DATA_PROPERTY, CONVERSATION_DATA_PROPERTY } from '../../common/constants';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';
import { LiveChatTransitionService } from '../live-chat-transition/live-chat-transition.service';
import { LIVE_CHAT_STEPS, GetLiveChatStepsDialog } from './live-chat-transition-steps.dialog';
import { LIVE_CHAT_UNAVAILABLE, LiveChatUnavailableDialog } from './live-chat-transition-unavailable.dialog';
import { IChatLog } from '../../common/interfaces/chat-log.interface';
import { ITelemetryData } from '../../common/interfaces/telemetry.interface';
import { IConversationData } from '../../common/interfaces/conversation-data.interface';


export const LIVE_CHAT_TRANSITION = 'LIVE_CHAT_TRANSITION';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

const CHOICE_PROMPT = 'CHOICE_PROMPT';

export class LiveChatTransitionDialog extends CancelAndHelpDialog {
    private chatLogAccessor: StatePropertyAccessor<IChatLog>;
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private liveChatTransitionService: LiveChatTransitionService;
    private telemetryDataAccessor: StatePropertyAccessor<ITelemetryData>;
    private conversationDataAccessor: StatePropertyAccessor<IConversationData>;
    private chatLog: IChatLog;

    constructor(id: string, userState: UserState, conversationState: ConversationState) {
        super(id || LIVE_CHAT_TRANSITION);
        this.chatLogAccessor = conversationState.createProperty<IChatLog>(CHAT_LOG_PROPERTY);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.telemetryDataAccessor = conversationState.createProperty<ITelemetryData>(TELEMETRY_DATA_PROPERTY);
        this.conversationDataAccessor = userState.createProperty<IConversationData>(CONVERSATION_DATA_PROPERTY);
        this.liveChatTransitionService = new LiveChatTransitionService();

        this.addDialog(new ChoicePrompt(CHOICE_PROMPT));
        this.addDialog(new GetLiveChatStepsDialog(LIVE_CHAT_STEPS, userState, conversationState));
        this.addDialog(new LiveChatUnavailableDialog(LIVE_CHAT_UNAVAILABLE, userState, conversationState));
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.dialogStep.bind(this),
            this.finalStep.bind(this)
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext) {
        const conversationData: IConversationData = await this.conversationDataAccessor.get(stepContext.context, {});
        const choiceOptions = [{title: 'Not now', value: 'No'}, {title: 'I\'d like to connect with a concierge.', value: 'transitionToLiveChat'}];
        const isRestartLiveChat = stepContext.options['isRestartLiveChatDialog'];
        stepContext.options['chatLog'] = await this.chatLogAccessor.get(stepContext.context, { messages: [] });

        if (isRestartLiveChat) {
            return await stepContext.next({ value: 'transitionToLiveChat' });
        }
        if (conversationData.currentLiveChatOption) {
            stepContext.options['liveChatContinueOption'] = conversationData.currentLiveChatOption;
            conversationData.currentLiveChatOption = null;
            return await stepContext.next();
        }

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
                    }
                }
            })
        );
    }

    private async dialogStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const telemetryData = await this.telemetryDataAccessor.get(stepContext.context, {});
        telemetryData.isChoicePrompt = true;

        if (stepContext.result && stepContext.result.value === 'transitionToLiveChat'
            || stepContext.options['liveChatContinueOption']) {
            const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});

            const liveChatAvailabilityResp = await this.liveChatTransitionService.getIsLiveChatAvailable(userAuth.token);
            const isLiveChatAvailable = liveChatAvailabilityResp?.contents?.length > 0;

            if (isLiveChatAvailable) {
                return await stepContext.beginDialog(LIVE_CHAT_STEPS, {
                    chatLog: stepContext.options['chatLog'],
                    liveChatContinueOption: stepContext.options['liveChatContinueOption'],
                });
            } else {
                telemetryData.isTransitionSuccessful = false;
                telemetryData.reasonOfFailedTransition = 'Live chat is unavailable';
                telemetryData.isTransitionToLiveChatOver = true;
                const liveChatAvailabilityHoursResp = await this.liveChatTransitionService.getLiveChatAvailableHours(userAuth.token);
                const liveChatAvailableHoursMessage = liveChatAvailabilityHoursResp.contents[0].value.embeddedContent;
                return await stepContext.beginDialog(LIVE_CHAT_UNAVAILABLE, {liveChatAvailableHoursMessage});
            }
        } else {
            telemetryData.isTransitionSuccessful = false;
            telemetryData.reasonOfFailedTransition = 'User declined transition';
            telemetryData.isTransitionToLiveChatOver = true;
            return await stepContext.next({ success: true });
        }
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const telemetryData = await this.telemetryDataAccessor.get(stepContext.context, {});
        return await stepContext.endDialog({ isSuccess: stepContext.result.success, success: stepContext.result.success });
    }
}
