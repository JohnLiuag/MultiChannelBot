import { UserState, StatePropertyAccessor, ActionTypes, ActivityTypes, ConversationState } from 'botbuilder';
import {
    ChoicePrompt,
    NumberPrompt,
    TextPrompt,
    DialogTurnResult,
    WaterfallDialog,
    WaterfallStepContext,
    ListStyle,
    PromptValidatorContext,
    FoundChoice
} from 'botbuilder-dialogs';
import { CONSUMER_PROFILE_PROPERTY, USER_AUTH_PROPERTY } from '../../../common/constants';
import { IUserAuth } from '../../../common/interfaces/user-auth.interface';
import { IConsumerProfile } from '../../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../../cancel-and-help.dialog';
import { EligibilityIdCardService } from '../eligibility-id-card.service';
import { IIdCardType } from '../interfaces/idCardTypes.interface';
import { ITelemetryData } from '../../../common/interfaces/telemetry.interface';
import { TELEMETRY_DATA_PROPERTY } from '../../../common/constants';

export const GET_ID_CARD = 'GET_ID_CARD';

const CHOICE_PROMPT = 'CHOICE_PROMPT';
const CHOICE_CARD = 'CHOICE_CARD';
const TEXT_PROMPT = 'TEXT_PROMPT';
const NUMBER_PROMPT = 'NUMBER_PROMPT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

const customPromptValidator = async (promptContext: PromptValidatorContext<FoundChoice>) => {
    return Promise.resolve(true);
}

const ID_CARD_TYPES = [
    {
        id: 0,
        name: 'UPMC Health Plan ID Card',
        caption: 'UPMC Health Plan ID Card',
    }, {
        id: 1,
        name: 'Dental',
        caption: 'Dental ID Card',
    }, {
        id: 2,
        name: 'Vision',
        caption: 'Vision ID Card',
    }, {
        id: 3,
        name: 'Assist America',
        caption: 'Assist America ID Card',
    }, {
        id: 4,
        name: 'Dental Discount Plan',
        caption: 'Dental Discount ID Card',
    }
]

export class GetIdCardDialog extends CancelAndHelpDialog {
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;
    private telemetryDataAccessor: StatePropertyAccessor<ITelemetryData>;

    private eligibilityIdCardService: EligibilityIdCardService;

    constructor(id: string, userState: UserState, conversationState: ConversationState) {
        super(id || GET_ID_CARD);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
        this.telemetryDataAccessor = conversationState.createProperty<ITelemetryData>(TELEMETRY_DATA_PROPERTY);

        this.eligibilityIdCardService = new EligibilityIdCardService();

        this.initialDialogId = WATERFALL_DIALOG;
        this.addDialog(new TextPrompt(TEXT_PROMPT));
        this.addDialog(new ChoicePrompt(CHOICE_CARD, customPromptValidator));
        this.addDialog(new ChoicePrompt(CHOICE_PROMPT));
        this.addDialog(new NumberPrompt(NUMBER_PROMPT));

        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.askStep.bind(this),
            this.choiceStep.bind(this),
            this.showCard.bind(this),
        ]));

    }

    async askStep(step: WaterfallStepContext): Promise<DialogTurnResult> {
        const { isNotFirstAsk, idCardType } = step.options as any;

        if (idCardType || !isNotFirstAsk) {
            return await step.next();
        }

        const message = 'Would you like to see a different ID card?';
        // TODO: add adaptive card
        await step.context.sendActivity({type: ActivityTypes.Typing});
        return await step.prompt(CHOICE_PROMPT, message, ['YES', 'NO']);

    }

    async choiceStep(step: WaterfallStepContext): Promise<DialogTurnResult> {
        const { idCardTypes, isNotFirstAsk, idCardType } = step.options as any;

        if (idCardType) {
            return await step.next();
        }
        if (['yes', 'no'].includes(step.result?.value?.toLowerCase())) {
            const telemetryData = await this.telemetryDataAccessor.get(step.context, {});
            telemetryData.isChoicePrompt = true;
        }
        const message = 'Which ID card do you need?';
        if (!isNotFirstAsk || (step.result && step.result.value === 'YES')) {
            return await step.prompt(CHOICE_CARD,
                {
                    prompt: message,
                    style: ListStyle.suggestedAction,
                }, idCardTypes.map(card => {
                    return {
                        value: card.idCardType.name,
                        action: {
                            type: ActionTypes.ImBack,
                            title: card.idCardType.name,
                            value: card.idCardType.name,
                        }
                    }
                })
            );
        } else {
            return await step.endDialog({ isSuccess: true });
        }
    }

    async showCard(step: WaterfallStepContext): Promise<DialogTurnResult> {
        let { idCardTypes, idCardType } = step.options as any;
        let idCardTypeObj: IIdCardType;

        const message = step.context.activity.text;
        if (message && !idCardType && !step.result?.value) {
            // button don't pressed, we should handle this case
            return step.endDialog({ nextMessage: message });
        }

        if (idCardTypes.some(el => el.idCardType.name.toLowerCase() === step.result?.value?.toLowerCase())) {
            const telemetryData = await this.telemetryDataAccessor.get(step.context, {});
            telemetryData.isChoicePrompt = true;
        }

        if (idCardType) {
            idCardTypeObj = ID_CARD_TYPES.find(el => el.name === idCardType);
            idCardTypeObj.isNeedOnFileMessage = true;
        } else {
            idCardTypeObj = ID_CARD_TYPES.find(el => el.name === step.result.value);
            idCardTypeObj.isNeedOnFileMessage = false;
        }

        // Dental & Dental Discount case
        let isAvailableCard: boolean = idCardTypes.some(el => el.idCardType.id === idCardTypeObj.id);
        if (!isAvailableCard && idCardTypeObj.id === 1) {
            // we need dental or dental discount and it's not available
            if (idCardTypes.some(el => el.idCardType.id === 4)) {
                let message = 'Your coverage includes a dental discount plan. You can use this ID card to receive a discount on Class I, II, or III dental services at participating providers.';
                await step.context.sendActivity(message);
                idCardTypeObj = ID_CARD_TYPES.find(el => el.id === 4);
                isAvailableCard = true;
            }
        }
        if (!isAvailableCard) {
            let message = `Your ${idCardTypeObj.caption || idCardTypeObj.name} is currently unavailable.`;
            await step.context.sendActivity(message);
            if (idCardTypes.length > 1) {
                return await step.replaceDialog(WATERFALL_DIALOG, { idCardTypes, isNotFirstAsk: true });
            } else {
                return await step.endDialog({ isSuccess: true });
            }
        }

        if (idCardTypeObj) { // step.result
            let userAuth: IUserAuth = await this.userAuthAccessor.get(step.context, {});
            const consumerProfile: IConsumerProfile = await this.consumerProfileAccessor.get(step.context, {})
            const cardResponse = await this.eligibilityIdCardService.getIDCardResponse(idCardTypeObj, consumerProfile, userAuth.token, userAuth.token2);

            if (cardResponse.success && idCardTypeObj.isNeedOnFileMessage) {
                await step.context.sendActivity(`Here is your ${idCardTypeObj.caption} on file.`);
                await step.context.sendActivity({type: ActivityTypes.Typing});
            }
            await step.context.sendActivity(cardResponse.message);

            if (idCardTypes.length > 1) {
                return await step.replaceDialog(WATERFALL_DIALOG, { idCardTypes, isNotFirstAsk: true });
            } else {
                return await step.endDialog({ isSuccess: true });
            }

        } else {
            return await step.endDialog({ isSuccess: false });
        }
    }
}
