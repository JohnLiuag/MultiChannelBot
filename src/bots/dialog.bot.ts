import {
    ActivityHandler,
    BotState,
    ConversationState,
    StatePropertyAccessor,
    UserState,
    MessageFactory,
    Activity,
    ActivityTypes,
    TurnContext
} from 'botbuilder';
import { Dialog, DialogState } from 'botbuilder-dialogs';

import { MainDialog } from '../dialogs/main.dialog';
import { voiceModel } from '../common/voice-model/voice-model';
import { IConsumerProfile, IUserProfile } from '../common/interfaces/user-profile.interface';
import { IUserAuth } from '../common/interfaces/user-auth.interface';
import { IDialogData, ITelemetryData } from '../common/interfaces/telemetry.interface';
import {
    CONSUMER_PROFILE_PROPERTY,
    USER_AUTH_PROPERTY,
    USER_PROFILE_PROPERTY,
    TELEMETRY_DATA_PROPERTY,
    CHAT_LOG_PROPERTY,
    CONVERSATION_DATA_PROPERTY
} from '../common/constants';
import { IChatLog } from '../common/interfaces/chat-log.interface';
import { CallLogService } from '../common/call-log/call-log.service'
import { TelemetryService } from '../common/services/telemetry.service';
import { IConversationData } from '../common/interfaces/conversation-data.interface';

const MIN_TIME_BETWEEN_BUBBLES = 1000;
const delay = async (ms: number) => new Promise(res => setTimeout(res, ms));
const callDelay = async (context: TurnContext, lastMsgTimeData: Map<string, Date>): Promise<any> => {
    const convId = context.activity.conversation.id;
    if (!lastMsgTimeData.get(convId)) {
        lastMsgTimeData.set(convId, new Date());
    }
    const diff = Math.abs((new Date()).getTime() - lastMsgTimeData.get(convId).getTime());
    if (diff < MIN_TIME_BETWEEN_BUBBLES) {
        await delay(MIN_TIME_BETWEEN_BUBBLES - diff);
    }
    return Promise.resolve();
}

export class DialogBot extends ActivityHandler {

    private callLogService: CallLogService;
    private telemetryService: TelemetryService;
    private conversationState: BotState;
    private userState: BotState;
    private dialog: Dialog;
    private chatLogAccessor: StatePropertyAccessor<IChatLog>;
    private dialogStateAccessor: StatePropertyAccessor<DialogState>;
    public userProfileAccessor: StatePropertyAccessor<IUserProfile>;
    public consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;
    private conversationDataAccessor: StatePropertyAccessor<IConversationData>;
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private telemetryDataAccessor: StatePropertyAccessor<ITelemetryData>;
    private lastMsgTimeData = new Map<string, Date>();
    /**
     *
     * @param {BotState} conversationState
     * @param {BotState} userState
     * @param {Dialog} dialog
     */
    constructor(conversationState: BotState, userState: BotState, dialog: Dialog) {
        super();

        this.chatLogAccessor = conversationState.createProperty<IChatLog>(CHAT_LOG_PROPERTY);
        this.callLogService = new CallLogService();
        this.userProfileAccessor = userState.createProperty<IUserProfile>(USER_PROFILE_PROPERTY);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
        this.conversationDataAccessor = userState.createProperty<IConversationData>(CONVERSATION_DATA_PROPERTY);
        this.telemetryDataAccessor = conversationState.createProperty<ITelemetryData>(TELEMETRY_DATA_PROPERTY);
        if (!conversationState) {
            throw new Error('[DialogBot]: Missing parameter. conversationState is required');
        }
        if (!userState) {
            throw new Error('[DialogBot]: Missing parameter. userState is required');
        }
        if (!dialog) {
            throw new Error('[DialogBot]: Missing parameter. dialog is required');
        }

        this.conversationState = conversationState as ConversationState;
        this.userState = userState as UserState;
        this.dialog = dialog;
        this.telemetryService = new TelemetryService(dialog);
        // const telemetryClient = this.dialog.telemetryClient;
        this.dialogStateAccessor = this.conversationState.createProperty<DialogState>('DialogState');

        this.onEvent(async (context, next) => {
            if (context.activity.name === 'data_transfer/token') {
                const userAuth: IUserAuth = await this.userAuthAccessor.get(context, {});
                const userProfile: IUserProfile = await this.userProfileAccessor.get(context, {});
                userAuth.token = context.activity.value;
                userProfile.name = context.activity.from.name;
                userProfile.memberId = context.activity.from.id;
            }
            if (context.activity.name === 'data_transfer/token2') {
                const userAuth: IUserAuth = await this.userAuthAccessor.get(context, {});
                userAuth.token2 = context.activity.value;
            }
            if (context.activity.name === 'data_transfer/consumerprofile') {
                const profile: IConsumerProfile = context.activity.value;
                profile.memberId = profile.medicalMemberId || profile.dentalVisionMemberId;
                await this.consumerProfileAccessor.set(context, profile);
            }
            if (context.activity.name === 'custom_event/startConversation') {
                let conversationData: IConversationData = await this.conversationDataAccessor.get(context, {});
                Object.keys(conversationData).forEach((key) => {
                    // we need to reset this data as it may not be empty from the last conversation
                    conversationData[key] = null;
                });
                await (dialog as MainDialog).run(context, conversationState.createProperty<DialogState>('DialogState'), true);
            }
            if (context.activity.name === 'custom_event/restartLiveChatSession') {
                await (dialog as MainDialog).run(context, conversationState.createProperty<DialogState>('DialogState'), false, true);
            }
            // Redirect to live support in Telephony channel goes below
            const eventValue = context.activity.value;
            const isHandoffActivity = context.activity.name === 'handoff.status';
            const isHandoffActivitySucceeded = isHandoffActivity && eventValue['state'] === 'accepted';
            const isHandoffActivityFailed = isHandoffActivity && eventValue['state'] === 'failed';

            // See https://docs.microsoft.com/en-us/azure/bot-service/bot-service-design-pattern-handoff-human?view=azure-bot-service-4.0 to learn more about handoff
            if (isHandoffActivitySucceeded) {
                // Hand off has been accepted by the target successfully
                // Bot is no more in the loop.
                console.log('User has been connected to live support.');
            }
            if (isHandoffActivityFailed) {
                // Hand off has failed.
                // Bot is still connected to end user.
                console.log('User connection to live support failed. Bot still on the line!');
                let message = 'Sorry, customer service representative is not available now';
                await context.sendActivity(
                    MessageFactory.text(
                        message,
                        voiceModel(message)
                    )
                );
            }
            await next();
        });

        this.onMessage(async (context, next) => {
            context.sendActivity({type: ActivityTypes.Typing});
            this.lastMsgTimeData.set(context.activity.conversation.id, context.activity.timestamp);
            const chatLog: IChatLog = await this.chatLogAccessor.get(context, { messages: [] });
            const userProfile = await this.userProfileAccessor.get(context, {});
            let message: string;
            if (!context.activity.text && context.activity.value) {
                message = `${userProfile.name}: ${JSON.stringify(context.activity.value)}`;
            } else {
                message = `${userProfile.name}: ${context.activity.text}`;
            }
            chatLog.messages.push(message);

            context.onSendActivities(this.outgoingHandler.bind(this));
            // context.onSendActivities(async (ctx, activities, next): SendActivitiesHandler => {
            //     // Log activities before sending them.
            //     activities.filter(a => a.type === 'message').forEach(a => console.log);

            //     // Allow the send process to continue.
            //     next();
            // });

            await (this.dialog as MainDialog).run(context, this.dialogStateAccessor);
            await next();
        });

        this.onDialog(async (context, next) => {
            const chatLog: IChatLog = await this.chatLogAccessor.get(context, { messages: [] });
            if (context.activity.type === 'message') {
                this.handleTelemetryLogs(context, chatLog);
            }

            if (chatLog.messages.length) {
                const profile = await this.consumerProfileAccessor.get(context, {});
                this.callLogService.addDiscussionTopics(profile, chatLog.messages, context.activity.conversation.id);
            }

            await this.conversationState.saveChanges(context, false);
            await this.userState.saveChanges(context, false);
            await next();
        });

        this.onMembersRemoved(async (context, next) => {
            const membersRemoved = context.activity.membersRemoved;
            for (let cnt = 0; cnt < membersRemoved.length; ++cnt) {
                if (membersRemoved[cnt].id !== context.activity.recipient.id) {
                    await this.conversationState.clear(context);
                    await this.userState.clear(context);
                    await this.conversationState.saveChanges(context);
                    await this.userState.saveChanges(context);
                }
            }
            await next();
        });
        setInterval(() => {
            this.lastMsgTimeData.clear();
        }, 24 * 3600 * 1000);
    }

    async handleTelemetryLogs(context, chatLog) {
        const telemetryData = await this.telemetryDataAccessor.get(context, {});
        let lastMessages: Array<string> = [];
        let lastMessagesFromBot: Array<string> = [];
        let lastMessageFromUser = '';
        let messagesFromLog: Array<string> = chatLog.messages;
        let isLastMessageFromBotReady = false;
        if (messagesFromLog.length) {
            for (let i = messagesFromLog.length - 1; i >= 0; i--) {
                if (messagesFromLog[i] && !(isLastMessageFromBotReady && lastMessageFromUser && lastMessages.length === 10)) {
                    let messageData = messagesFromLog[i].split(': ', 2);
                    let messageAuthor = messageData[0];
                    let messageText = messageData[1];
                    if (messageText) {
                        if (messageAuthor !== 'Chatbot' && !lastMessageFromUser) {
                            lastMessageFromUser = messageText;
                        }
                        if (lastMessages.length !== 10) {
                            lastMessages.push(messagesFromLog[i]);
                        }
                        if (messageAuthor === 'Chatbot' && !isLastMessageFromBotReady) {
                            lastMessagesFromBot.push(messageText);
                        } else if (lastMessagesFromBot.length) {
                            isLastMessageFromBotReady = true;
                        }
                    }
                }
            }
        }
        lastMessagesFromBot = lastMessagesFromBot.reverse();
        lastMessages = lastMessages.reverse();
        if (lastMessageFromUser && lastMessagesFromBot.length) {
            const userAuth: IUserAuth = await this.userAuthAccessor.get(context, {});
            let dialogData: IDialogData = {
                timeStamp: context.activity.timestamp,
                userId: context.activity.from.id,
                channel: context.activity.channelId,
                userQuestion: (context.activity.text || '').trim(),
                botAnswer: (context.activity.value || '').trim()
            };
            this.telemetryService.sendTextLogToTelemetry(telemetryData, dialogData, lastMessageFromUser, lastMessagesFromBot, userAuth.token, userAuth.token2);
        }
        if (telemetryData.isTransitionToLiveChatOver && lastMessages.length) {
            this.telemetryService.sendTransitionToLiveChatDataToTelemetry(telemetryData, lastMessages);
            telemetryData.isTransitionToLiveChatOver = false;
        }
        if (telemetryData.intent === 'None' && lastMessageFromUser) { // TODO to call the tracking not only in this case
            let reason = 'Intent was not recognized';
            this.telemetryService.sendFailedAnsweringToTelemetry(reason, lastMessageFromUser);
        }
        telemetryData.reasonOfFailedTransition = '';
        telemetryData.isChoicePrompt = false;
        telemetryData.isFirstQuestion = false;
    }

    async outgoingHandler(context, activities: Partial<Activity>[], next) {
        activities.filter(el => el.type === ActivityTypes.Message).forEach(async (activity) => {
            let message: string;
            if (!activity.text && (activity.attachments || activity.suggestedActions)) {
                if (activity.attachments) {
                    message = `Chatbot: [attachment sent]`;
                } else if (activity.suggestedActions) {
                    message = `Chatbot: [suggested actions sent]`;
                }
            } else {
                message = `Chatbot: ${activity.text}`;
            }

            const chatLog: IChatLog = await this.chatLogAccessor.get(context, { messages: [] });
            chatLog.messages.push(message);
        });
        if (activities.some(el => el.type === ActivityTypes.Message)) {
            await callDelay(context, this.lastMsgTimeData);
            this.lastMsgTimeData.set(context.activity.conversation.id, new Date());
        }
        await next();
    }
}
