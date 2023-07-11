import { ActionTypes, ConversationState, StatePropertyAccessor, UserState } from 'botbuilder';
import { ChoicePrompt, DialogTurnResult, FoundChoice, ListStyle, PromptValidatorContext, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY, CONVERSATION_DATA_PROPERTY, USER_AUTH_PROPERTY } from '../../common/constants';
import { IConversationData } from '../../common/interfaces/conversation-data.interface';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';
import { InitialChatService } from './initial-chat.service';
import { IPromptsResponse } from './interfaces.ts/prompts-response';
import { ITelemetryData } from '../../common/interfaces/telemetry.interface';
import { TELEMETRY_DATA_PROPERTY } from '../../common/constants';


interface ChatOption {
    key: string;
    value: string;
}

const PROMPT_MESSAGES = {
    common: 'Great! Which topic would you like to learn more about?',
    IDC: 'Great! Which ID card would you like to see?',
}
const CHOICE_PROMPT = 'CHOICE_PROMPT';
const customPromptValidator = async (promptContext: PromptValidatorContext<FoundChoice>) => {
    return Promise.resolve(true);
}

export const INITIAL_CHAT = 'INITIAL_CHAT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

export class InitialChatDialog extends CancelAndHelpDialog {
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private conversationDataAccessor: StatePropertyAccessor<IConversationData>;
    private telemetryDataAccessor: StatePropertyAccessor<ITelemetryData>;

    private initialChatService: InitialChatService;

    constructor(id: string, userState: UserState, conversationState: ConversationState) {
        super(id || INITIAL_CHAT);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.conversationDataAccessor = userState.createProperty<IConversationData>(CONVERSATION_DATA_PROPERTY);
        this.telemetryDataAccessor = conversationState.createProperty<ITelemetryData>(TELEMETRY_DATA_PROPERTY);

        this.initialChatService = new InitialChatService();

        this.addDialog(new ChoicePrompt(CHOICE_PROMPT, customPromptValidator));
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.secondStep.bind(this),
            this.finalStep.bind(this),
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const consumer: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
        const conversationData: IConversationData = await this.conversationDataAccessor.get(stepContext.context, {});

        const welcomeMessage = `Hello${consumer && consumer.firstName ? ' ' + consumer.firstName : ''}, welcome to UPMC Health Plan. I’m your Virtual Concierge. ` +
            `What would you like help with?`;
        const menuMessage = 'You can choose an option below or type a message in the chat.';
        let message = '';

        let optionResponse: IPromptsResponse | any = await this.initialChatService.getTopPrompts(userAuth.token, userAuth.token2)
            .catch(err => { });
        let options: ChatOption[] = optionResponse?.contents?.map(el => el.value)
            .map(re => ({ key: re.key1, value: re.value1 }));

        if (options?.length) {
            conversationData.hasMenuOptions = true;
            await stepContext.context.sendActivity({ type: 'event', name: 'data_transfer/info_log', value: {description: 'first prompts', options}});
            stepContext.values['topOptions'] = options;
            message = conversationData.isUserGreeted ?  menuMessage : welcomeMessage + ' ' + menuMessage;
            conversationData.isUserGreeted = true;
            return await stepContext.prompt(CHOICE_PROMPT,
                {
                    prompt: message,
                    style: ListStyle.suggestedAction,
                },
                options.map(el => {
                    return {
                        value: el.value,       // used for validation
                        action: {
                            type: ActionTypes.ImBack,
                            title: el.value,   // caption for button
                            value: el.value,
                        }
                    }
                })
            );
        } else {
            message = conversationData.isUserGreeted ?  'You can type your message below.' : welcomeMessage;
            conversationData.isUserGreeted = true;
            await stepContext.context.sendActivity(message);
            return await stepContext.endDialog();
        }
    }

    private async secondStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const conversationData: IConversationData = await this.conversationDataAccessor.get(stepContext.context, {});
        if (stepContext.result && stepContext.values['topOptions'].some(el => el.value === stepContext.context.activity.text)) {
            const telemetryData = await this.telemetryDataAccessor.get(stepContext.context, {});
            telemetryData.isChoicePrompt = true;
            const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
            let currentOption: ChatOption = stepContext.values['topOptions'][stepContext.result.index];

            if (currentOption && ['PS', 'LHC'].includes(currentOption.key)) {
                /*
                    { key: 'LHC', value: 'Health Coaching' },
                    { key: 'PS', value: 'Pregnancy Support' }
                */
                conversationData.currentLiveChatOption = currentOption;
                return await stepContext.endDialog({ nextIntent: 'LiveChat_Transition' });
            }
            // save user choice
            let setOptionResponse: { isSuccess: boolean } = await this.initialChatService.setTopPrompt(
                currentOption.key,
                userAuth.token,
                userAuth.token2,
            ).catch(err => { });

            if (setOptionResponse?.isSuccess) {
                // get second level of prompts
                let optionResponse: IPromptsResponse | any = await this.initialChatService.getSecondPrompts(userAuth.token, userAuth.token2)
                    .catch(err => { });
                let options: ChatOption[] = optionResponse?.contents?.map(el => el.value)
                    .map(re => ({ key: re.key1, value: re.value1 }));

                if (options) {
                    await stepContext.context.sendActivity({ type: 'event', name: 'data_transfer/info_log', value: {description: 'second prompts', options}});
                    stepContext.values['secondOptions'] = options;
                    return await stepContext.prompt(CHOICE_PROMPT,
                        {
                            prompt: PROMPT_MESSAGES[currentOption.key] || PROMPT_MESSAGES.common,
                            style: ListStyle.suggestedAction,
                        },
                        options.map(el => {
                            return {
                                value: el.key,       // used for validation
                                action: {
                                    type: ActionTypes.ImBack,
                                    title: el.key,   // caption for button
                                    value: el.key,
                                }
                            }
                        })
                    );
                }
            }
            // TODO: provide answer if ChatBot service is down or we can't get second menus
            await stepContext.context.sendActivity('An error occurred while executing this task');
            return stepContext.endDialog();
        } else {
            // end current dialog (go to main dialog with next message)
            const message = stepContext.context.activity.text;
            return await stepContext.endDialog({ nextMessage: message });
        }
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const telemetryData = await this.telemetryDataAccessor.get(stepContext.context, {});
        if (stepContext.result) {
            telemetryData.isChoicePrompt = true;
            let currentOption: ChatOption = stepContext.values['secondOptions'][stepContext.result.index];
            let message = currentOption.value;

            return await stepContext.endDialog({ nextMessage: message });
        } else {
            // end current dialog (go to main dialog with next message)
            const message = stepContext.context.activity.text;
            return await stepContext.endDialog({ nextMessage: message });
        }
    }
}
