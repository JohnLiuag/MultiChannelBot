import { StatePropertyAccessor, UserState, ActionTypes, ConversationState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext, DialogTurnStatus, TextPrompt, ChoicePrompt, ListStyle } from 'botbuilder-dialogs';

import { USER_AUTH_PROPERTY, TELEMETRY_DATA_PROPERTY } from '../../common/constants';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';
import { LiveChatTransitionService } from '../live-chat-transition/live-chat-transition.service';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CONSUMER_PROFILE_PROPERTY } from '../../common/constants';
import { IChatLog } from '../../common/interfaces/chat-log.interface';
import { ITelemetryData } from '../../common/interfaces/telemetry.interface';
import { CallLogService } from '../../common/call-log/call-log.service';


export const LIVE_CHAT_STEPS = 'LIVE_CHAT_STEPS';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

const TEXT_PROMPT = 'TEXT_PROMPT';
const CHOICE_PROMPT = 'CHOICE_PROMPT';

export class GetLiveChatStepsDialog extends CancelAndHelpDialog {
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private liveChatTransitionService: LiveChatTransitionService;
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;
    private telemetryDataAccessor: StatePropertyAccessor<ITelemetryData>;
    private callLogService: CallLogService;

    constructor(id: string, userState: UserState, conversationState: ConversationState) {
        super(id || LIVE_CHAT_STEPS);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
        this.telemetryDataAccessor = conversationState.createProperty<ITelemetryData>(TELEMETRY_DATA_PROPERTY);
        this.liveChatTransitionService = new LiveChatTransitionService();
        this.callLogService = new CallLogService();

        this.addDialog(new TextPrompt(TEXT_PROMPT));
        this.addDialog(new ChoicePrompt(CHOICE_PROMPT));
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.subTopicStep.bind(this),
            this.finalStep.bind(this)
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const promptMessageText = 'I\'ll get you connected. Please choose a topic, ' +
            'or type **"cancel"** to return to your Virtual Concierge.';
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
        const chatTopicsResp = await this.liveChatTransitionService.getLiveChatTopics(userAuth.token);

        if (stepContext.options['liveChatContinueOption']) {
            return await stepContext.next();
        }

        if (chatTopicsResp && chatTopicsResp.contents.length) {
            const choiceOptions = chatTopicsResp.contents.map((topic) => {
                return {
                    value: topic.value.key1,
                    title: topic.value.value1,
                    sortOrder: topic.sortOrder
                }
            }).sort((a, b) => b.sortOrder - a.sortOrder);

            stepContext.values['liveChatMainTopics'] = choiceOptions;

            return await stepContext.prompt(CHOICE_PROMPT,
                {
                    prompt: promptMessageText,
                    style: ListStyle.suggestedAction,
                },
                choiceOptions.map(el => {
                    return {
                        value: el.value,       // used for validation
                        action: {
                            type: ActionTypes.ImBack,
                            title: el.title,   // caption for button
                            value: el.title,
                        }
                    }
                })
            );
        } else {
            const message = 'Live Chat is currently unavailable. Please try again later.';
            await stepContext.context.sendActivity(message);
            return await stepContext.endDialog({ success: true });
        }
    }

    private async subTopicStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
        const healthCoachingTopicKey = 'LHC';
        const pregnancySupportTopicKey = 'PS';
        const telemetryData = await this.telemetryDataAccessor.get(stepContext.context, {});
        const liveChatContinueOption = stepContext.options['liveChatContinueOption'];
        let currentOption = stepContext.result;
        if (liveChatContinueOption) {
            currentOption = {
                value: liveChatContinueOption.key,
                title: liveChatContinueOption.value
            }
        }
        if (currentOption) {
            telemetryData.isChoicePrompt = true;
            stepContext.values['selectedLiveChatTopicValue'] = currentOption;
            let chatSubTopicsResp;
            let choiceOptions;

            if ([healthCoachingTopicKey, pregnancySupportTopicKey].includes(currentOption.value)) {
                chatSubTopicsResp = await this.liveChatTransitionService.getLiveChatSubTopics(userAuth.token, currentOption.value);
            } else {
                const savedTopicStatus = await this.liveChatTransitionService.saveLiveChatTopic(userAuth.token, currentOption.value);
                stepContext.values['setselectedchatoptionDebug'] = savedTopicStatus; // TODO: remove this line for prod (it here debugging)

                if (savedTopicStatus.isSuccess) {
                    return await stepContext.next();
                } else {
                    const message = 'Live Chat is currently unavailable. Please try again later.';
                    telemetryData.isTransitionSuccessful = false;
                    telemetryData.reasonOfFailedTransition = 'Transition failed because chat topic have not saved';

                    await stepContext.context.sendActivity(message);
                    return await stepContext.endDialog({ success: true });
                }
            }

            if (chatSubTopicsResp && chatSubTopicsResp.contents.length) {
                choiceOptions = chatSubTopicsResp.contents.map((topic) => {
                    return {
                        value: topic.value.key1,
                        title: topic.value.value1,
                        sortOrder: topic.sortOrder
                    }
                }).sort((a, b) => b.sortOrder - a.sortOrder);

                stepContext.values['liveChatSubTopics'] = choiceOptions;

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
            } else {
                const message = 'Live Chat is currently unavailable. Please try again later.';
                await stepContext.context.sendActivity(message);
                return await stepContext.endDialog({ success: true });
            }
        } else {
            return await stepContext.endDialog({ success: true });
        }
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const telemetryData = await this.telemetryDataAccessor.get(stepContext.context, {});
        telemetryData.isTransitionToLiveChatOver = true;
        if (stepContext.result || stepContext.values) {
            telemetryData.isChoicePrompt = true;
            const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
            const liveChatTopic = stepContext.values['selectedLiveChatTopicValue'].title
                || stepContext.values['liveChatMainTopics']
                    .find( el => el.value === stepContext.values['selectedLiveChatTopicValue'].value).title;
            const liveChatSubTopic = !stepContext.result ? '' : stepContext.values['liveChatSubTopics']
                .find( el => el.value === stepContext.result.value).title;
            const consumer: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
            const lastTwoMessagesInLog = this.getLastTwoMessages(stepContext.options['chatLog']);
            const isMobileLiveChat = stepContext.context.activity.channelId === 'directline';
            const cachedData = await this.callLogService.cache.get(stepContext.context.activity.conversation.id);
            const referenceId = cachedData ? cachedData.referenceId : null;

            const liveChatURL = await this.liveChatTransitionService.getLiveChatStartURL(userAuth.token, consumer, liveChatTopic, liveChatSubTopic, lastTwoMessagesInLog[0], lastTwoMessagesInLog[1], isMobileLiveChat, referenceId);
            telemetryData.isTransitionSuccessful = true;

            // TODO: three lines below for testing purposes (should be removed for prod version)
            await stepContext.context.sendActivity({ type: 'event', name: 'data_transfer/livechat_topic_selection', value: liveChatTopic});
            await stepContext.context.sendActivity({ type: 'event', name: 'data_transfer/livechat_sub_topic_selection', value: liveChatSubTopic});
            await stepContext.context.sendActivity({ type: 'event', name: 'data_transfer/livechat_last_messages', value: lastTwoMessagesInLog});

            await stepContext.context.sendActivity({ type: 'event', name: 'data_transfer/livechat_start', value: liveChatURL});

            // TODO: this code for UIT testers (should be removed for prod version)
            const liveChatTransitionDataLog = {
                selectedSubject: liveChatTopic,
                selectedSubTopic: liveChatSubTopic,
                questionsBeforeTransition: [lastTwoMessagesInLog[0], lastTwoMessagesInLog[1]],
                setselectedchatoptionDebug: stepContext.values['setselectedchatoptionDebug'],
                chatBotRefId: referenceId
            };
            await stepContext.context.sendActivity({ type: 'event', name: 'data_transfer/livechat_start_logs', value: liveChatTransitionDataLog });

            return await stepContext.endDialog({ success: false });
        }
        telemetryData.isTransitionSuccessful = false;
        telemetryData.reasonOfFailedTransition = 'Final step was not completed';
        return await stepContext.endDialog({ success: true });
    }

    private getLastTwoMessages(messagesLog: IChatLog): Array<any> {
        let  userMessages = messagesLog.messages.filter(message => {
            if (message) {
                let messageData = message.split(': ', 2);
                let messageAuthor = messageData[0];
                let messageText = messageData[1];
                if ((messageAuthor !== 'Chatbot') && (!['yes', 'no', 'not now'].includes(messageText.toLowerCase()))) {
                    return message;
                }
            }
        });

        const lastTwoMessages = userMessages.slice(userMessages.length - 2);

        return lastTwoMessages;
    }
}
