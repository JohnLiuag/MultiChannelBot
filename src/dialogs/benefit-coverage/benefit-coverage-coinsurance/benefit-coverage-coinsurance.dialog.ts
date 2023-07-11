import { ActivityTypes, ConversationState, StatePropertyAccessor, TurnContext, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY, USER_AUTH_PROPERTY } from '../../../common/constants';
import { IUserAuth } from '../../../common/interfaces/user-auth.interface';
import { IConsumerProfile } from '../../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../../cancel-and-help.dialog';
import { BenefitCoverageService } from '../benefit-coverage.service';
import { LiveChatTransitionDialog, LIVE_CHAT_TRANSITION } from '../../live-chat-transition/live-chat-transition.dialog';
import { CommonService } from '../../../common/services/common.service';

export const BENEFIT_COVERAGE_COINSURANCE = 'BENEFIT_COVERAGE_COINSURANCE';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';


export class BenefitCoverageCoinsuranceDialog extends CancelAndHelpDialog {
    private consumerProfileAccessor:  StatePropertyAccessor<IConsumerProfile>;
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;

    private benefitCoverageService: BenefitCoverageService;
    private commonService: CommonService;

    constructor(id: string, userState: UserState, conversationState: ConversationState) {
        super(id || BENEFIT_COVERAGE_COINSURANCE);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);

        this.benefitCoverageService = new BenefitCoverageService();
        this.commonService = new CommonService();

        this.addDialog(new LiveChatTransitionDialog(LIVE_CHAT_TRANSITION, userState, conversationState)),
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this),
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const profile: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
        return await this.webAndTelephonyResponse(profile, userAuth, stepContext);
    }

    async webAndTelephonyResponse(profile: IConsumerProfile, userAuth, stepContext) {
        let isSuccess: boolean;

        const [eligibilityCoverageResObj, spendingSummaryResObj] = await Promise.allSettled([
            this.commonService.getAllPlans(profile.memberId.substring(0, 9), profile, userAuth.token, userAuth.token2),
            this.benefitCoverageService.getSpendingSummary(profile.memberId, userAuth.token, userAuth.token2)
        ]);

        if (eligibilityCoverageResObj.status === 'fulfilled') {
            const currentPlan = eligibilityCoverageResObj.value.find(el => el.memberId === profile.memberId);
            if (currentPlan && currentPlan.eligibilities &&  currentPlan.eligibilities.length) {
                const eligibility = currentPlan.eligibilities.some(el => el.eligibilityStatus === 'Active')
                    ? currentPlan.eligibilities.find(el => el.eligibilityStatus === 'Active')
                    : currentPlan.eligibilities[0];
                    const eligibilityTypesWithSpendingSummary = ['medicare', 'commercial'];
                    const benefitLevels = eligibility.benefitLevels;
                    const doesUserHaveSpendingSummaryRecord = !(benefitLevels.length === 1 && benefitLevels[0].benefitLevel === 'DFAULT');
                    const doesUserHaveSpedingSummaryNavItem = eligibilityTypesWithSpendingSummary.includes(eligibility.eligibilityTypeDescription.toLowerCase());
                    if (!doesUserHaveSpendingSummaryRecord || !doesUserHaveSpedingSummaryNavItem) {
                        let message = 'Your plan does not have a coinsurance.';
                        await stepContext.context.sendActivity(message);
                        return await stepContext.next({isSuccess: true});
                    }
                    const planStatus = eligibility.eligibilityStatus;
                    isSuccess = true;
                    switch (planStatus) {
                        case 'Active':
                            if (spendingSummaryResObj.status === 'fulfilled') {
                                const message = this.benefitCoverageService.getBenefitCoverageCoinsuranceInfo(spendingSummaryResObj.value, eligibilityCoverageResObj.value, profile.memberId);
                                await stepContext.context.sendActivity(message);
                            } else {
                                const message = `We are unable to display spending summary information at this time. \n` +
                                    `If you have questions about this, I can transfer you to a health care concierge. \n` +
                                    `Would you like to chat with a concierge for more information?`;
                                await stepContext.context.sendActivity(message);
                                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                                return await stepContext.beginDialog(LIVE_CHAT_TRANSITION);
                            }
                            break;
                        case 'Termed':
                            await stepContext.context.sendActivity('Your plan is not currently active.');
                            break;
                        case 'FutureActive':
                            const message = 'Your plan is not yet active. Would you like to chat with a concierge about your future coverage?';
                            await stepContext.context.sendActivity(message);
                            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                            return await stepContext.beginDialog(LIVE_CHAT_TRANSITION);
                        default:
                            isSuccess = false;
                    }
            } else {
                isSuccess = false;
            }
        } else {
            isSuccess = false;
        }
        if (!isSuccess) {
            await stepContext.context.sendActivity('Your plan does not have a coinsurance.');
        }
        return await stepContext.next({isSuccess});
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: true });   // TODO: add a correct determinate of success
    }
}
