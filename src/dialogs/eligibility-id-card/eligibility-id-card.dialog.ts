import { ActivityTypes, ConversationState, StatePropertyAccessor, TurnContext, UserState } from 'botbuilder';
import { DialogTurnResult, DialogTurnStatus, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY, USER_AUTH_PROPERTY } from '../../common/constants';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';
import { EligibilityIdCardService } from './eligibility-id-card.service';
import { IIdCardType, IIdCardTypes } from './interfaces/idCardTypes.interface';
import { GetIdCardDialog, GET_ID_CARD } from './web/get-id-card.dialog';
import { ISubscription } from '../../common/interfaces/subscription.interface';
import { LiveChatTransitionDialog, LIVE_CHAT_TRANSITION } from '../live-chat-transition/live-chat-transition.dialog';
import { CommonService } from '../../common/services/common.service';

export const ELIGIBILITY_ID_CARD = 'ELIGIBILITY_ID_CARD';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';


export class EligibilityIdCardDialog extends CancelAndHelpDialog {
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;

    private eligibilityIdCardService: EligibilityIdCardService;
    private commonService: CommonService;

    constructor(id: string, userState: UserState, conversationState: ConversationState) {
        super(id || ELIGIBILITY_ID_CARD);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.eligibilityIdCardService = new EligibilityIdCardService();
        this.commonService = new CommonService();

        this.addDialog(new LiveChatTransitionDialog(LIVE_CHAT_TRANSITION, userState, conversationState)),
        this.addDialog(new GetIdCardDialog(GET_ID_CARD, userState, conversationState));
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this),
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const consumer: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});

        const idCardType: string = stepContext.options['idCardType'];
        return await this.webResponse(consumer, userAuth, stepContext, idCardType);
    }

    private async webResponse(
        consumer: IConsumerProfile,
        userAuth: IUserAuth,
        stepContext: WaterfallStepContext,
        idCardType?: string,
    ) {
        let isSuccess: boolean;
        let idCardTypesRes: IIdCardTypes;
        let eligibilityCoverageRes: ISubscription[];
        let currentUserPlan: ISubscription;
        let message: string;
        let messageTemplate = [
            `You can view and print your ID card on MyHealth Online by going to Your Insurance, then ID cards. Select the ID card you need and click "print" to view printable temporary ID card. You can also access your member ID card on the UPMC Health Plan app.`,
            //IF MEMBER HAS VISION AND/OR DENTAL
            `Please note that ID cards are not issued for dental or vision coverage. However, you can view a digital ID card on MyHealth Online or on the UPMC Health Plan app if needed.`,
            //THEN
            `Would you like to see a digital version of your ID card?`,
            // If yes - Chatbot: Which ID card do you need?
            // Present buttons based on drop-down choices that are available for member under Your Insurance > ID Cards > Card Type `
        ];

        [eligibilityCoverageRes, idCardTypesRes] = await Promise.all([
            this.commonService.getAllPlans(consumer.memberId.substring(0, 9), consumer, userAuth.token, userAuth.token2),
            this.eligibilityIdCardService.getIdCardTypes(consumer.memberId, userAuth.token, userAuth.token2),
        ])
            .catch(async (err) => {
                // await stepContext.context.sendActivity('We dont have this information');
                return [];
            })

        if (eligibilityCoverageRes) {
            currentUserPlan = eligibilityCoverageRes.find(el => el.memberId === consumer.memberId);
            if (currentUserPlan.eligibilities && currentUserPlan.eligibilities.length) {
                if (currentUserPlan.eligibilities.some( el => el.eligibilityStatus === 'Active')) {
                    if (idCardTypesRes && idCardTypesRes.idCardTypes && idCardTypesRes.idCardTypes.length) {
                        return await stepContext.beginDialog(GET_ID_CARD, { idCardTypes: idCardTypesRes.idCardTypes, idCardType });
                    } else {
                        message = `There are currently no ID cards available for your plan. If you're a new member, please note that ID cards will be sent within 10 business days of your effective date.`;
                        await stepContext.context.sendActivity(message);
                        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                        await stepContext.context.sendActivity('Would you like to chat with a concierge for more information?');
                        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                        return await stepContext.beginDialog(LIVE_CHAT_TRANSITION);
                    }
                } else if (currentUserPlan.eligibilities.some( el => el.eligibilityStatus === 'FutureActive')) {
                    message = 'Please note that if your coverage is not yet effective, your ID card may not be available. You should receive your ID card within 14 business days of your start date.';
                    await stepContext.context.sendActivity(message);
                    await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                    message = 'You can view and print your ID card here: [ID Cards](#/main/content/id-cards)';
                    await stepContext.context.sendActivity(message);
                } else {
                    message = `Your coverage is not currently active. \n` +
                        `Would you like to chat with a concierge for more information?`
                    await stepContext.context.sendActivity( message);
                    await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                    return await stepContext.beginDialog(LIVE_CHAT_TRANSITION);
                }
            }
        } else {
            if (idCardType) {
                message = `Your ${idCardType} ID card is currently unavailable.`;
            } else {
                message = 'We are unable to display this information at this time.';
            }
            await stepContext.context.sendActivity(message);
        }

        return await stepContext.next({ isSuccess: false });
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        if (!stepContext.result) {
            // for cases when it's not message but action subnit on adaptive cards
            return await stepContext.endDialog({ success: true });
        }
        return await stepContext.endDialog({
            success: stepContext.result.isSuccess,
            nextMessage: stepContext.result.nextMessage,
        });   // TODO: add a correct determinate of success
    }
}
