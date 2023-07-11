import { ActivityTypes, ConversationState, StatePropertyAccessor, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY, USER_AUTH_PROPERTY } from '../../common/constants';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';
import { EligibilityCoverageService } from './eligibility-coverage.service';
import { ISubscription } from '../../common/interfaces/subscription.interface';
import { IAssociatedMember, IempI } from '../../common/interfaces/associated-member.interface';
import { LiveChatTransitionDialog, LIVE_CHAT_TRANSITION } from '../live-chat-transition/live-chat-transition.dialog';
import { IHixStatusResponse } from '../../common/interfaces/hix-status.interface';
import { CommonService } from '../../common/services/common.service';

export const ELIGIBILITY_COVERAGE = 'ELIGIBILITY_COVERAGE';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';


export class EligibilityCoverageDialog extends CancelAndHelpDialog {
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;

    private eligibilityCoverageService: EligibilityCoverageService;
    private commonService: CommonService;

    constructor(id: string, userState: UserState, conversationState: ConversationState) {
        super(id || ELIGIBILITY_COVERAGE);
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
        let planType: 'medical' | 'dental' | 'vision' | 'wellness' = stepContext.options['planType'];
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
        const consumer: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        let currentProfile: IConsumerProfile = consumer;

        let message: string | Array<string>;
        let isLiveChat: boolean;
        let isSuccess: boolean;

        let medicalRequest = new Promise((resolve, reject) => { resolve(null) });
        let dentalRequest = new Promise((resolve, reject) => { resolve(null) });
        let medicalPlans: ISubscription[];
        let dentalVisionPlans: ISubscription[];
        let associatedMember: IAssociatedMember;
        let delegatedAccessToken: string;

        if (consumer.mc400MemberId) {
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
                userAuth.token2,
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
            const activeMedicalPlans: Array<IempI> = associatedMember.empIs.filter(empi => {
                return !['dentalvision', 'wellness', 'non medical' /*, 'nonmedical', 'non-medical'*/].includes(empi.lineOfBusiness.toLocaleLowerCase())
                    && this.isActiveEmpi(empi);
            });

            const currentEmpi: IempI = associatedMember.empIs.find(empi => empi.isCurrentEligibilityInfo);
            let activePlan: IempI;
            let currentPlanIsTermed = new Date(currentEmpi.eligibilityEndDate).getTime() < Date.now();
            if (currentPlanIsTermed) {
                // current plan is termed
                // search for a suitable active plan if the current one is already termed
                ['dentalvision', 'non medical', 'wellness'].some(lob => { // sequence is important here
                    activePlan = associatedMember.empIs.find(empi => {
                        return empi.lineOfBusiness.toLocaleLowerCase() === lob
                            && this.isActiveEmpi(empi);
                    })
                    return !!activePlan;
                })
            }
            if (activeMedicalPlans.length > 1) {
                message = `Our records indicate that you have more than one active plan.`;
                await stepContext.context.sendActivity(message);
                message = `Would you like to chat with a live concierge for further assistance?`;
                await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                isLiveChat = true;
                isSuccess = true;
            } else if ((currentEmpi.lineOfBusiness.toLocaleLowerCase() === 'wellness' || currentPlanIsTermed)
                && (activeMedicalPlans.length > 0 || activePlan)) {
                // here we have only one "medical"
                // take associatedMemberId and contionue with it
                // take consumerProfile
                // take plans for received consumerProfile
                // consimue with new set of plans
                let nextActivePlan = activeMedicalPlans[0] || activePlan;

                if (![
                    consumer.mc400MemberId,
                    consumer.dentalVisionMemberId
                ].includes(activeMedicalPlans[0].associatedMemberId)) {
                    // get different plans if current plan is wellnes
                    await this.eligibilityCoverageService.getDelegatedAccessToken(
                            nextActivePlan.associatedMemberId + nextActivePlan.tpaClient + nextActivePlan.tpaId + nextActivePlan.tpaDiv,
                            userAuth.token
                        ).then(tokenResponse => {
                            delegatedAccessToken = tokenResponse.jwt;
                            // getting consumer profile
                            return this.eligibilityCoverageService.getConsumerProfile(userAuth.token, delegatedAccessToken);
                        }).then(async (consumerProfile: IConsumerProfile) => {
                            currentProfile = consumerProfile;
                            if (consumerProfile.mc400MemberId) {
                                medicalRequest = this.commonService.getAllPlans(
                                    consumerProfile.mc400MemberId.substring(0, 9),
                                    consumerProfile,
                                    userAuth.token,
                                    delegatedAccessToken
                                );
                            }
                            if (consumerProfile.dentalVisionMemberId) {
                                dentalRequest = this.commonService.getAllPlans(
                                    consumerProfile.dentalVisionMemberId.substring(0, 9),
                                    consumerProfile,
                                    userAuth.token,
                                    delegatedAccessToken
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
                            message = `We are unable to display this information at this time.`;
                            isLiveChat = true;
                            isSuccess = false;
                        })
                }
            }
        }

        if (!isLiveChat) {
            let isEXC: boolean = ['OEXC', 'EXCH'].includes(currentProfile.corpCode);
            let isVisionCare: boolean = currentProfile.hasVisionCare === true; // include hasNva || hasDvNva
            let isActive: boolean = currentProfile.memberStatus === 'Active' ||
                (currentProfile.dvMemberStatus === 'Active' && currentProfile.eligibilityType === 'DentalVision');

            if (planType === 'vision' && isActive &&
                (isEXC ||
                (isVisionCare && ['commercial', 'wellness', 'dentalvision', 'non medical'].includes(currentProfile.eligibilityType.toLowerCase())))
            ) {
                // 409852 Eligibility - Vision Discount Eligibility
                ({ message, isSuccess } = await this.eligibilityCoverageService.getVisionDiscountMessage(
                    currentProfile,
                    userAuth.token,
                    userAuth.token2
                ))
            }

            if (!message && currentProfile.memberId?.slice(-2) === '01'
                && planType !== 'wellness'
                && ['OEXC', 'EXCH'].includes(currentProfile.corpCode)
                && currentProfile.eligibilityType.toLowerCase() === 'commercial') {
                // HIX Status case
                const hixResponse: IHixStatusResponse = await this.eligibilityCoverageService.getHixStatus(
                    currentProfile.memberId,
                    userAuth.token,
                    delegatedAccessToken || userAuth.token2
                ).catch(err => {
                    return null;
                });

                if (hixResponse) {
                    const hixStatus = this.eligibilityCoverageService.getMostRecentHixStatus(hixResponse.hixStatus);
                    ({ message, isSuccess } = this.eligibilityCoverageService.getHixMessage(hixStatus, currentProfile));
                }
            }

            if (!message /* no message on HIX status */) {
                if (medicalPlans || dentalVisionPlans) {
                    const eligibilityType = currentProfile.eligibilityType;
                    isSuccess = true;
                    if (planType === 'wellness' || eligibilityType.toLowerCase() === 'wellness') {
                        ({ message, isLiveChat, isSuccess } = this.eligibilityCoverageService.getWellnessMessage(currentProfile, planType, medicalPlans, dentalVisionPlans));
                    } else {
                        if (['non medical'].includes(eligibilityType.toLowerCase())) {
                            message = this.eligibilityCoverageService.getEligibilityCoverageExceptionMessage(planType);
                            isLiveChat = true;
                        } else {
                            ({ message, isLiveChat, isSuccess } = this.eligibilityCoverageService.getEligibilityCoverage(
                                currentProfile,
                                medicalPlans,
                                dentalVisionPlans,
                                planType,
                            ));
                        }
                    }
                } else {
                    if (currentProfile.eligibilityType.toLowerCase() === 'wellness') { // && (planType === 'wellness' || planType === 'medical')
                        ({ message, isLiveChat } = this.eligibilityCoverageService.getWellnessMessage(currentProfile, planType));
                        isSuccess = !isLiveChat;
                    } else if (['non medical', 'wellness'].includes(currentProfile.eligibilityType.toLowerCase())) {
                        message = this.eligibilityCoverageService.getEligibilityCoverageExceptionMessage(planType);
                        isLiveChat = true;
                        isSuccess = false;
                    } else {
                        message = 'I am unable to find this information at this time. Would you like to chat with a concierge for more information?';
                        isLiveChat = true;
                        isSuccess = false;
                    }
                }
            }

        }

        if (Array.isArray(message)) {
            await stepContext.context.sendActivity(message[0]);
            message.shift();
            for (const msg of message) {
                await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                await stepContext.context.sendActivity(msg);
            }
        } else {
            await stepContext.context.sendActivity(message);
        }
        if (isLiveChat) {
            await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
            return await stepContext.beginDialog(LIVE_CHAT_TRANSITION);
        } else {
            return await stepContext.next({ isSuccess });
        }
    }

    private isActiveEmpi(empi: IempI): boolean {
        return (new Date(empi.eligibilityStartDate)).getTime() < Date.now()
            && (empi.eligibilityEndDate ? (new Date(empi.eligibilityEndDate)).getTime() > Date.now() : true);
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: stepContext.result.isSuccess });
    }
}
