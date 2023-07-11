import { StatePropertyAccessor, TurnContext, UserState, ConversationState, ActivityTypes } from 'botbuilder';
import { DialogTurnResult, DialogTurnStatus, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY, USER_AUTH_PROPERTY } from '../../common/constants';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';
import { EligibilityCoverageService, PlanType } from './eligibility-dependent-coverage.service';
import { ISubscription } from './interfaces/subscription.interface';
import { IAssociatedMember } from '../../common/interfaces/associated-member.interface';
import { LiveChatTransitionDialog, LIVE_CHAT_TRANSITION } from '../live-chat-transition/live-chat-transition.dialog';
import { CommonService } from '../../common/services/common.service';

export const ELIGIBILITY_DEPENDENT_COVERAGE = 'ELIGIBILITY_DEPENDENT_COVERAGE';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

export class EligibilityDependentCoverageDialog extends CancelAndHelpDialog {
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;

    private eligibilityCoverageService: EligibilityCoverageService;
    private commonService: CommonService;

    constructor(id: string, userState: UserState, conversationState: ConversationState) {
        super(id || ELIGIBILITY_DEPENDENT_COVERAGE);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);

        this.eligibilityCoverageService = new EligibilityCoverageService();
        this.commonService = new CommonService();

        this.addDialog(new LiveChatTransitionDialog(LIVE_CHAT_TRANSITION, userState, conversationState)),
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this),
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        let planType: PlanType = stepContext.options['planType'];
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
        const consumer: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});

        let currentProfile: IConsumerProfile = consumer;
        let medicalRequest = new Promise((resolve, reject) => { resolve(null) });
        let dentalRequest = new Promise((resolve, reject) => { resolve(null) });
        let medicalPlans: ISubscription[];
        let dentalVisionPlans: ISubscription[];
        let associatedMember: IAssociatedMember;

        let message: string;
        let isSuccess: boolean;
        let isLiveChat: boolean;

        if (consumer.mc400MemberId && consumer.hasMedicalInsurance) {
            medicalRequest = this.commonService.getAllPlans(
                consumer.mc400MemberId.substring(0, 9),
                consumer,
                userAuth.token,
                userAuth.token2
            );
        }
        if (consumer.dentalVisionMemberId) {
            dentalRequest = this.commonService.getAllPlans(
                consumer.dentalVisionMemberId.substring(0, 9),
                consumer,
                userAuth.token,
                userAuth.token2
            );
        }

        const [medicalResponse, dentalResponse, associatedMemberResponse] = await Promise.allSettled([
            medicalRequest,
            dentalRequest,
            this.eligibilityCoverageService.getAssociatedMemberId(consumer.memberId, userAuth.token, userAuth.token2),
        ]);

        if (medicalResponse.status === 'fulfilled' && medicalResponse.value) {
            medicalPlans = medicalResponse.value as ISubscription[];
        }

        if (dentalResponse.status === 'fulfilled' && dentalResponse.value) {
            dentalVisionPlans = dentalResponse.value as ISubscription[];
        }

        if (associatedMemberResponse.status === 'fulfilled' && associatedMemberResponse.value) {
            associatedMember = associatedMemberResponse.value as IAssociatedMember;
        }

        if (associatedMember && associatedMember.empIs && associatedMember.empIs.length > 1) {
            const notWellnessEmpi = associatedMember.empIs.filter(empi => empi.lineOfBusiness !== 'Wellness');
            if (notWellnessEmpi.length > 1) {
                message = `Our records indicate that you have more than one active plan. \n` +
                    `Would you like to chat with a concierge for more information?`;
                isLiveChat = true;
                isSuccess = true;
            } else {
                // here we have only one not wellness (based on the fact that there cannot be more than one wellness)
                // take associatedMemberId not from wellness and contionue with it
                // take consumerProfile
                // take plans for received consumerProfile
                // contimue with new set of plans

                if (![
                    consumer.mc400MemberId,
                    consumer.dentalVisionMemberId
                ].includes(notWellnessEmpi[0].associatedMemberId)) {
                    // get different plans if current plan is wellnes
                    await this.eligibilityCoverageService.getDelegatedAccessToken(
                            notWellnessEmpi[0].associatedMemberId + notWellnessEmpi[0].tpaClient + notWellnessEmpi[0].tpaId + notWellnessEmpi[0].tpaDiv,
                            userAuth.token
                        ).then(tokenResponse => {
                            const token2 = tokenResponse.jwt;
                            // getting consumer profile
                            return this.eligibilityCoverageService.getConsumerProfile(userAuth.token, token2);
                        }).then(async (consumerProfile: IConsumerProfile) => {
                            currentProfile = consumerProfile;
                            if (consumerProfile.mc400MemberId && consumerProfile.hasMedicalInsurance) {
                                medicalRequest = this.commonService.getAllPlans(
                                    consumerProfile.mc400MemberId.substring(0, 9),
                                    consumerProfile,
                                    userAuth.token,
                                    userAuth.token2
                                );
                            }
                            if (consumerProfile.dentalVisionMemberId) {
                                dentalRequest = this.commonService.getAllPlans(
                                    consumerProfile.dentalVisionMemberId.substring(0, 9),
                                    consumerProfile,
                                    userAuth.token,
                                    userAuth.token2
                                );
                            }
                            // getting new plans for received consumerProfile
                            const [medicalResponse2, dentalResponse2] = await Promise.allSettled([
                                medicalRequest,
                                dentalRequest,
                            ]);

                            if (medicalResponse2.status === 'fulfilled' && medicalResponse2.value) {
                                medicalPlans = medicalResponse2.value as ISubscription[];
                            }

                            if (dentalResponse2.status === 'fulfilled' && dentalResponse2.value) {
                                dentalVisionPlans = dentalResponse2.value as ISubscription[];
                            }
                        })
                        .catch(async (error) => {
                            message = `We are unable to display this information at this time. If you have a question about this I can transfer you to the health care concierge.`;
                            isLiveChat = true;
                            isSuccess = false;
                        })
                } else {
                    // here we on not wellness account, so we can continue with it
                }

            }
        }

        if (!isLiveChat) {
            ({ message, isSuccess, isLiveChat } = this.eligibilityCoverageService.getDependentCoverageMessage(
                currentProfile, medicalPlans, dentalVisionPlans, planType
            ));
        }

        await stepContext.context.sendActivity(message);
        if (isLiveChat) {
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            return await stepContext.beginDialog(LIVE_CHAT_TRANSITION);
        } else {
            return await stepContext.next({ isSuccess });
        }
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        if (!stepContext.result) {
            return await stepContext.endDialog({ success: true });
        }
        return await stepContext.endDialog({ success: stepContext.result.isSuccess });
    }
}
