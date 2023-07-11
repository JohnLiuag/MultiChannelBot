import { StatePropertyAccessor, TurnContext, UserState, MessageFactory, ConversationState, ActivityTypes } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY, USER_AUTH_PROPERTY } from '../../../common/constants';
import { IUserAuth } from '../../../common/interfaces/user-auth.interface';
import { IConsumerProfile } from '../../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../../cancel-and-help.dialog';
import { BenefitCoverageService } from '../benefit-coverage.service';
import { GetBenefitCoverageDialog, GET_BENEFIT_COVERAGE } from './web/get-benefit-coverage.dialog';
import { BenefitLevelsTelephonyDialog, BENEFIT_LEVELS_DIALOG } from './telephony/benefit-levels.dialog';
import { voiceModel } from '../../../common/voice-model/voice-model';
import { LiveChatTransitionDialog, LIVE_CHAT_TRANSITION } from '../../live-chat-transition/live-chat-transition.dialog';
import { CommonService } from '../../../common/services/common.service';

export const BENEFIT_COVERAGE_DEDUCTIBLE_OOP = 'BENEFIT_COVERAGE_DEDUCTIBLE_OOP';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';


export class BenefitCoverageDeductibleOopDialog extends CancelAndHelpDialog {
    private consumerProfileAccessor:  StatePropertyAccessor<IConsumerProfile>;
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;

    private benefitCoverageService: BenefitCoverageService;
    private commonService: CommonService;

    constructor(id: string, userState: UserState, conversationState: ConversationState) {
        super(id || BENEFIT_COVERAGE_DEDUCTIBLE_OOP);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);

        this.benefitCoverageService = new BenefitCoverageService();
        this.commonService = new CommonService();

        this.addDialog(new LiveChatTransitionDialog(LIVE_CHAT_TRANSITION, userState, conversationState)),
        this.addDialog(new BenefitLevelsTelephonyDialog(BENEFIT_LEVELS_DIALOG));
        this.addDialog(new GetBenefitCoverageDialog(GET_BENEFIT_COVERAGE, conversationState));
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this),
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const profile: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        let userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});

        switch (stepContext.context.activity.channelId.toLowerCase()) {
            /*
            case 'telephony': {
                return await this.telephonyResponse(userProfile, userAuth, stepContext);
            }
            case 'emulator': {
                return await this.telephonyResponse(userProfile, userAuth, stepContext);
                break;
            }
            */
            default: {
                return await this.webResponse(profile, userAuth, stepContext);
                // await stepContext.context.sendActivity('response for default channel');
            }
        }
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: stepContext.result ? stepContext.result['isSuccess'] : false });
    }

    /*
    async telephonyResponse(userProfile: IUserProfile, userAuth: IUserAuth, stepContext: WaterfallStepContext<any>): Promise<DialogTurnResult | any> {
        const deductibleStatus = stepContext.options['isOutOfPocket'] ? 'outOfPocket' : 'deductible';
        return Promise.all([
            this.benefitCoverageService.getAllPlans(userProfile.memberId.substring(0, 9), userAuth.token),
            this.benefitCoverageService.getSpendingSummary(userProfile.memberId, userAuth.token, userAuth.token2),
        ])
        .catch(async (err)=> {
            const message = 'We dont have this information';
            await stepContext.context.sendActivity(
                MessageFactory.text(
                    message,
                    voiceModel(message)
                )
            );
            return [];
        })
        .then(async ([eligibilityCoverage, spendingSummary]) => {
            if (eligibilityCoverage && spendingSummary) {
                const ivrMessageData = this.benefitCoverageService.getBenefitCoverageInfoIvr(spendingSummary, eligibilityCoverage, userProfile.memberId, deductibleStatus);
                if (ivrMessageData['doesUserHaveDeductible']) {
                    return stepContext.beginDialog(BENEFIT_LEVELS_DIALOG, ivrMessageData);
                } else {
                    const message = `your plan does not have a ${ ivrMessageData['coverageTypeName'] }`;
                    await stepContext.context.sendActivity(
                        MessageFactory.text(
                            message,
                            voiceModel(message)
                        )
                    );
                    return await stepContext.next({isSuccess: true});
                }
            } else {
                return await stepContext.next({isSuccess: false});
            }

        })
    }
    */

    async webResponse(profile: IConsumerProfile, userAuth: IUserAuth, stepContext) {
        let isSuccess: boolean;
        const deductibleStatus = stepContext.options['isOutOfPocket'] ? 'outOfPocket' : 'deductible';

        const [eligibilityCoverageResObj, spendingSummaryResObj] = await Promise.allSettled([
            this.commonService.getAllPlans(profile.memberId.substring(0, 9), profile, userAuth.token, userAuth.token2),
            this.benefitCoverageService.getSpendingSummary(profile.memberId, userAuth.token, userAuth.token2)
        ]);

        if (eligibilityCoverageResObj.status === 'fulfilled') {
            const currentPlan = eligibilityCoverageResObj.value.find(el => el.memberId === profile.memberId);
            if (currentPlan && currentPlan.eligibilities && currentPlan.eligibilities.length) {
                const eligibility = currentPlan.eligibilities.some(el => el.eligibilityStatus === 'Active')
                    ? currentPlan.eligibilities.find(el => el.eligibilityStatus === 'Active')
                    : currentPlan.eligibilities[0];
                    const eligibilityTypesWithSpendingSummary = ['medicare', 'commercial'];
                    const benefitLevels = eligibility.benefitLevels;
                    const doesUserHaveSpendingSummaryRecord = !(benefitLevels.length === 1 && benefitLevels[0].benefitLevel === 'DFAULT');
                    const doesUserHaveSpedingSummaryNavItem = eligibilityTypesWithSpendingSummary.includes(eligibility.eligibilityTypeDescription.toLowerCase());
                    if (!doesUserHaveSpendingSummaryRecord || !doesUserHaveSpedingSummaryNavItem) {
                        let message = 'Your plan does not have a deductible.';
                        if (deductibleStatus === 'outOfPocket') {
                            message = 'Your plan does not have an out-of-pocket maximum.';
                        }
                        await stepContext.context.sendActivity(message);
                        return await stepContext.next({isSuccess: true});
                    }
                    const planStatus = eligibility.eligibilityStatus;
                    isSuccess = true;
                    switch (planStatus) {
                        case 'Active':
                            if (spendingSummaryResObj.status === 'fulfilled') {
                                return await stepContext.beginDialog(GET_BENEFIT_COVERAGE, { spendingSummaryData: spendingSummaryResObj.value, eligibilityData: eligibilityCoverageResObj.value, memberId: profile.memberId, deductibleStatus: deductibleStatus });
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
            let message = 'Your plan does not have a deductible.';
            if (deductibleStatus === 'outOfPocket') {
                message = 'Your plan does not have an out-of-pocket maximum.';
            }
            await stepContext.context.sendActivity(message);
        }
        return await stepContext.next({isSuccess});
    }
}
