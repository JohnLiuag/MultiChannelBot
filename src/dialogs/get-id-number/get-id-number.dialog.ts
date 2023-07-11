import { ActivityTypes, StatePropertyAccessor, UserState, ConversationState } from "botbuilder";
import { ChoicePrompt, DialogTurnResult, WaterfallDialog, WaterfallStepContext } from "botbuilder-dialogs";
import { USER_AUTH_PROPERTY, CONSUMER_PROFILE_PROPERTY } from "../../common/constants";

import { IUserAuth } from "../../common/interfaces/user-auth.interface";
import { IConsumerProfile } from "../../common/interfaces/user-profile.interface";
import { CancelAndHelpDialog } from "../cancel-and-help.dialog";
import { EligibilityIdCardService } from "../eligibility-id-card/eligibility-id-card.service";
import { IIdCardType } from "../eligibility-id-card/interfaces/idCardTypes.interface";
import { ITelemetryData } from '../../common/interfaces/telemetry.interface';
import { TELEMETRY_DATA_PROPERTY } from '../../common/constants';

export const ID_NUMBER = 'ID_NUMBER';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const CHOICE_PROMPT = 'CHOICE_PROMPT';

export class GetIdNumberDialog extends CancelAndHelpDialog {
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;
    private telemetryDataAccessor: StatePropertyAccessor<ITelemetryData>;

    private eligibilityIdCardService: EligibilityIdCardService;
    benefitCoverageService: any;
    eligibility: any;

    constructor(id: string, userState: UserState, conversationState: ConversationState) {
        super(id || ID_NUMBER);

        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
        this.telemetryDataAccessor = conversationState.createProperty<ITelemetryData>(TELEMETRY_DATA_PROPERTY);

        this.eligibilityIdCardService = new EligibilityIdCardService();

        this.initialDialogId = WATERFALL_DIALOG;
        this.addDialog(new ChoicePrompt(CHOICE_PROMPT));
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.showCard.bind(this),
            this.finalStep.bind(this)
        ]));
    }

    async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {

        const idNumberType: 'medical' | 'dental' | 'vision' = stepContext.options['idNumberType'];
        const consumer: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        let message;
        let messageForFutureCHC = `Your coverage is not currently active. You will receive an ID card with your ID number within 7-10 business days of your plan's start date.` +
            ` You can also type "help" to chat with a live concierge for more information.`;
        let messageForTermedCHC = `Your coverage is not currently active. You can contact the County Assistance Office for more information, or type "help" to chat with a live concierge.`;
        let askChoicePrompt: boolean = false;

        if (['non medical', 'wellness'].includes(consumer.eligibilityType.toLowerCase())) {
            message = `Your ID number is ${consumer.medicalMemberId}.`;
        } else if (['chc', 'medicaid'].includes(consumer.eligibilityType.toLowerCase())) {
            if (consumer.memberStatus === 'Active') {
                message = `You can find this information on your [ID Card](#/main/content/id-cards).\n` +
                    `Would you like to see your ID card?`;
                askChoicePrompt = true;
            } else if (consumer.memberStatus === 'FutureActive') {
                message = messageForFutureCHC;
            } else {
                message = messageForTermedCHC;
            }
        } else if (idNumberType === 'medical') {
            let idNumber: string;
            if (consumer.eligibilityType.toLowerCase() === 'dentalvision' && consumer.dvMemberStatus === 'Active') {
                idNumber = consumer.dentalVisionMemberId;
            } else if (consumer.memberStatus === 'Active') {
                idNumber = consumer.medicalMemberId; //
            }

            if (idNumber) { // Active
                message = `Your ID number is ${idNumber}. You can also find this information on your [ID Card](#/main/content/id-cards).\n` +
                    `Would you like to see your ID card?`;
                askChoicePrompt = true;
            } else { // Termed and FUtureActive
                message = `Your ID number is ${consumer.memberId || consumer.dentalVisionMemberId}.`;
            }
        } else {
            // we here if this is not an exception case and we have specific question for dental/vision number
            if (consumer.eligibilityType.toLowerCase() === 'medicare') {
                // 1) for medicare users
                if ((idNumberType === 'vision' && (consumer.hasDvNva || consumer.hasNva))
                    || (idNumberType === 'dental' && consumer.hasDentalAdvantage)) {
                    if (consumer.memberStatus === 'Active') {
                        message = `Your ${idNumberType} ID number is ${consumer.medicalMemberId}. You can also find this information on your [ID Card](#/main/content/id-cards).\n` +
                            `Would you like to see your ID card?`;
                        askChoicePrompt = true;
                    } else { //  Termed and FUtureActive
                        message = `Your ID number is ${consumer.medicalMemberId}.`;
                        askChoicePrompt = false;
                    }
                } else {
                    message = `You do not have ${idNumberType} coverage, but your plan might include some coverage for those services. ` +
                        `You can type "ID Number" to see your medical ID, or type "help" to chat with a live concierge.`;
                }
            } else {
                // check if we have needed plan.
                if (idNumberType === 'vision' && (consumer.hasDvNva || consumer.hasNva || consumer.hasVisionAdvantage)) {
                    if (consumer.hasDvNva || consumer.dvPartitionRiderTypes ? consumer.dvPartitionRiderTypes.includes('VI') : false) {
                        // vision in dentalVision plan
                        // const riderListOfVisionPlan = ['MV', 'EV', 'EB', 'CV', 'NV', 'VI'];
                        let idNumber: string;
                        if (consumer.eligibilityType.toLowerCase() === 'medicare') {
                            idNumber = consumer.medicalMemberId;
                        } else {
                            idNumber = consumer.dentalVisionMemberId
                        }
                        switch (consumer.dvMemberStatus) {
                            case 'Active':
                                message = `Your ${idNumberType} ID number is ${idNumber}. You can also find this information on your [ID Card](#/main/content/id-cards).\n` +
                                    `Would you like to see your ID card?`;
                                    askChoicePrompt = true;
                                break;
                            case 'FutureActive':
                            case 'Termed':
                            default:
                                message = `Your ID number is ${idNumber}.`;
                                askChoicePrompt = false;
                        }
                    } else {
                        // vision in medical plan
                        switch (consumer.memberStatus) {
                            case 'Active':
                                message = `Your ${idNumberType} ID number is ${consumer.medicalMemberId}. You can also find this information on your [ID Card](#/main/content/id-cards).\n` +
                                    `Would you like to see your ID card?`;
                                    askChoicePrompt = true;
                                break;
                            case 'FutureActive':
                            case 'Termed':
                            default:
                                message = `Your ID number is ${consumer.medicalMemberId}.`;
                        }
                    }
                } else if (idNumberType === 'dental' && consumer.hasDentalAdvantage) {
                    if (consumer.medicalPartitionRiderTypes.includes('DE')) {
                        // this should not be applied to Medicare because it is done above
                        // I'm not sure that there are cases when a dental plan is inside a medical ... but just in case, I'll leave this part of the code
                        switch (consumer.memberStatus) {
                            case 'Active':
                                message = `Your ${idNumberType} ID number is ${consumer.medicalMemberId}. You can also find this information on your [ID Card](#/main/content/id-cards).\n` +
                                    `Would you like to see your ID card?`;
                                    askChoicePrompt = true;
                                break;
                            case 'FutureActive':
                            case 'Termed':
                            default:
                                message = `Your ID number is ${consumer.medicalMemberId}.`;
                        }
                    } else {
                        // dental in dentalVision plan
                        let idNumber: string;
                        if (consumer.eligibilityType.toLowerCase() === 'medicare') {
                            idNumber = consumer.medicalMemberId;
                        } else {
                            idNumber = consumer.dentalVisionMemberId
                        }
                        switch (consumer.dvMemberStatus) {
                            case 'Active':
                                message = `Your ${idNumberType} ID number is ${idNumber}. You can also find this information on your [ID Card](#/main/content/id-cards).\n` +
                                    `Would you like to see your ID card?`;
                                    askChoicePrompt = true;
                                break;
                            case 'FutureActive':
                            case 'Termed':
                            default:
                                message = `Your ID number is ${idNumber}.`;
                        }
                    }
                } else {
                    message = `You do not have ${idNumberType} coverage, but your plan might include some coverage for those services. ` +
                        `You can type "ID Number" to see your medical ID, or type "help" to chat with a live concierge.`;
                }
            }
        }

        if (askChoicePrompt) {
            return await stepContext.prompt(CHOICE_PROMPT, message, ['YES', 'NO']);
        } else {
            await stepContext.context.sendActivity(message);
            return await stepContext.next();
        }
    }


    public async showCard(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        if (['yes', 'no'].includes(stepContext.result?.value?.toLowerCase())) {
            const telemetryData = await this.telemetryDataAccessor.get(stepContext.context, {});
            telemetryData.isChoicePrompt = true;
        }
        const idNumberType: string = stepContext.options['idNumberType'];
        const ID_CARD_TYPES = {
            medical: {
                id: 0,
                name: 'UPMC Health Plan ID Card',
                caption: 'UPMC Health Plan ID Card',
            },
            dental: {
                id: 1,
                name: 'Dental',
                caption: 'Dental ID Card',
            },
            vision: {
                id: 2,
                name: 'Vision',
                caption: 'Vision ID Card',
            }
        };
        const idCardTypeObj: IIdCardType = ID_CARD_TYPES[idNumberType];

        if (idCardTypeObj && stepContext.result && stepContext.result.value === 'YES') {
            let userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
            const consumerProfile: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {})
            const cardResponse = await this.eligibilityIdCardService.getIDCardResponse(idCardTypeObj, consumerProfile, userAuth.token, userAuth.token2);

            if (cardResponse.success) {
                await stepContext.context.sendActivity(`Here is your ${idCardTypeObj.caption} on file.`);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            }
            await stepContext.context.sendActivity(cardResponse.message);
            return await stepContext.next();
        }
        return await stepContext.next();
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: true });
    }

}


