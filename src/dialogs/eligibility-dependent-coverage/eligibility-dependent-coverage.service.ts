import { ISubscription } from './interfaces/subscription.interface';
import { config } from '../../common/config';
import { logger } from '../../common/logger';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import {
    IEligibilities,
    IHasDependents,
    IMemberRiders,
    IRiderList,
    MemberElgibilityInformation,
    RelationshipCodes,
    RiderListOfValueAddedBenefits,
    TPA_KEY_UPMC,
    VisionAndValueAddedBenefitsInformation
} from './models';
import { IAssociatedMember } from '../../common/interfaces/associated-member.interface';

export enum CoverageTypes {
    Medical = 'Medical',
    Dental = 'Dental',
    Vision = 'Vision',
    ValueAddedBenefits = 'Value Added Benefits',
    Pediatric = 'Pediatric'
}

export enum Status {
    Active = 'Active',
    Termed = 'Termed',
    FutureActive = 'FutureActive'
}

export enum EligibilityPlanTypes {
    E = 'E',
    Y = 'Y',
    W = 'W'
}

export type PlanType = 'Medical' | 'Dental' | 'Vision';

/*
FYI
Since the result on the Consumer-Portal page is specified in the PBI acceptance criteria,
the logic for this dialog was copied from the Consumer-Portal.
In some places, it may look not optimal. But this was left intentionally,
that in case of expansion/change of requirements, it was easier to adapt the code to the behavior in the  Consumer-Portal
*/

export class EligibilityCoverageService {

    async getAssociatedMemberId(memberId: string, token: string, token2: string): Promise<IAssociatedMember> {
        config.headers.Authorization = `Bearer ${token}`;
        const requestURL: string = `${config.baseURL}consumerportal/api/AssociatedMemberId/${memberId}`;
        const response = await fetch(requestURL, {
            method: 'GET',
            headers: token2 ? { ...config.headers, 'Authorization2': token2 } : config.headers,
        }).then(this.checkStatus);

        return response;
    }

    async getConsumerProfile(token: string, token2: string): Promise<IConsumerProfile> {
        config.headers.Authorization = `Bearer ${token}`;
        const requestURL: string = `${config.baseURL}consumerportal/api/consumerprofile`;
        const response = await fetch(requestURL, {
            method: 'GET',
            headers: token2 ? { ...config.headers, 'Authorization2': token2 } : config.headers,
        }).then(this.checkStatus);

        return response;
    }

    async getDelegatedAccessToken(medicalMemberIdWithTpa: string, token: string): Promise<{ jwt: string }> {
        config.headers.Authorization = `Bearer ${token}`;
        const requestURL: string = `${config.baseURL}authorization/api/delegatedaccesstokensforassociatemember`;

        const response = await fetch(requestURL, {
            method: 'POST',
            headers: config.headers,
            body: JSON.stringify({ medicalMemberIdWithTpa })
        }).then(this.checkStatus);

        return response;
    }

    getDualCoverageMessage(): { message: string, isSuccess: boolean, isLiveChat: boolean } {
        return {
            message: `Our records indicate that you have more than one active plan. \n` +
                `Would you like to chat with a concierge for more information?`,
            isSuccess: true,
            isLiveChat: false
        };

    }

    filterCoveredMembersByPlan(
        coverage: ISubscription,
        medicalPlans: ISubscription[],
        dentalVisionPlans: ISubscription[],
    ) {
        let coveredMembers: ISubscription[] = [];
        if (coverage.eligibilities[0].coverageType === CoverageTypes.Medical ||
            coverage.eligibilities[0].coverageType === CoverageTypes.ValueAddedBenefits ||
            coverage.eligibilities[0].coverageType === CoverageTypes.Pediatric) {
            coveredMembers = this.filterMembersByStatus(coverage, medicalPlans);
        } else if (coverage.eligibilities[0].coverageType === CoverageTypes.Dental) {
            coveredMembers = this.filterMembersByStatus(coverage, dentalVisionPlans);
        } else if (coverage.eligibilities[0].coverageType === CoverageTypes.Vision) {
            const coveredMembersSource = coverage.eligibilities[0].source === CoverageTypes.Medical ?
                medicalPlans :
                dentalVisionPlans;
            coveredMembers = this.filterMembersByStatus(coverage, coveredMembersSource);
        }
        return coveredMembers;
    }

    // NEW METHOD TO FILTER THE MEMBERS
    filterMembersByStatus(selectedPlan: ISubscription, members: ISubscription[]): ISubscription[] {
        let coveredMembers: ISubscription[] = [];
        const filteredMembers = this.filterCoveredMembers(members,
            selectedPlan.eligibilities[0].eligibilityStatus, selectedPlan.eligibilities[0].startDate,
            selectedPlan.eligibilities[0].endDate);

        switch (selectedPlan.eligibilities[0].coverageType) {
            case CoverageTypes.Medical:
                coveredMembers = filteredMembers.filter(v => v.eligibilities[0].hasMedical);
                break;
            case CoverageTypes.Dental: coveredMembers = filteredMembers.filter(v => v.eligibilities[0].hasDentalAdvantage);
                break;
            case CoverageTypes.Vision: coveredMembers = filteredMembers.filter(v => v.eligibilities[0].hasVisionAdvantage
                || v.eligibilities[0].hasVisionCare);
                break;
            case CoverageTypes.ValueAddedBenefits:
            case 'ValueAdded': coveredMembers = filteredMembers.filter(v => v.eligibilities[0].hasValueAddedBenefits);
                break;
            case CoverageTypes.Pediatric: coveredMembers = filteredMembers.filter(v => v.eligibilities[0].hasPediatric);
                break;

            default: coveredMembers = filteredMembers.filter(v => v.eligibilities[0].hasMedical);
                break;
        }
        return coveredMembers;
    }

    /**
     * Filters the Raw Covered Members Based on  the selected eligibility Status and start Date.
     * @param members
     * @param status
     * @param startDate
     */
    filterCoveredMembers(members: ISubscription[], status: string, startDate: string, endDate: string): ISubscription[] {
        const membersClone: ISubscription[] = JSON.parse(JSON.stringify(members));
        return membersClone.filter(v => {
            v.eligibilities = v.eligibilities.filter(x => {
                if (endDate) {
                    return x.eligibilityStatus === status &&
                        new Date(x.startDate) >= new Date(startDate) && new Date(x.endDate) <= new Date(endDate);
                } else {
                    return x.eligibilityStatus === status &&
                        new Date(x.startDate) >= new Date(startDate);
                }
            });
            if (v.eligibilities.length) {
                return true;
            }
            return false;
        });
    }

    getDependentCoverageMessage(
        consumerProfile: IConsumerProfile,
        medicalPlans: ISubscription[],
        dentalVisionPlans: ISubscription[],
        planType: PlanType,
    ): { message: string, isSuccess: boolean, isLiveChat: boolean } {
        let memberElgibilityInformation = new MemberElgibilityInformation();
        let listOfPlans: any[] = [];

        if (medicalPlans && medicalPlans.length) {
            const cloneData: ISubscription[] = JSON.parse(JSON.stringify(medicalPlans));
            const medicalMember = medicalPlans;
            medicalMember.forEach(member => member.eligibilities.map(v => {
                v = memberElgibilityInformation.mapElgibilityData(v, {
                    // isTpaMemeber: !(consumerProfile.tpaKey === TPA_KEY_UPMC),  // previous solution, but we don't use isTpaMemeber
                    isTpaMemeber: true,
                    coverageType: CoverageTypes.Medical
                });
            }));

            this.processPlans({ subscriptions: medicalMember, type: CoverageTypes.Medical },
                consumerProfile,
                listOfPlans);
        }

        if (dentalVisionPlans && dentalVisionPlans.length) {
            const cloneData: ISubscription[] = JSON.parse(JSON.stringify(dentalVisionPlans));
            const dentalMember = dentalVisionPlans;
            dentalMember.forEach(member => member.eligibilities.map(v => {
                v = memberElgibilityInformation.mapElgibilityData(v, {
                    // isTpaMemeber: !(consumerProfile.tpaKey === TPA_KEY_UPMC),    // previous solution, but we don't use isTpaMemeber now
                    isTpaMemeber: true,
                    coverageType: CoverageTypes.Dental
                });
            }));
            this.processPlans({ subscriptions: dentalMember, type: CoverageTypes.Dental },
                consumerProfile,
                listOfPlans);
        }

        let currentPlan: ISubscription;
        let eligibilityStatus: string;
        let resultMessage: { message: string, isLiveChat: boolean };
        switch (planType) {
            case 'Medical':
                resultMessage = this.getMedicalMessage(listOfPlans, medicalPlans, dentalVisionPlans, consumerProfile);
                break;
            case 'Dental':
            case 'Vision':
                currentPlan = listOfPlans.find(el => el.eligibilities[0].coverageType === planType);
                eligibilityStatus = currentPlan ? currentPlan.eligibilities[0].eligibilityStatus : '';
                resultMessage = this.getDVMessage(
                    currentPlan,
                    currentPlan ? this.filterCoveredMembersByPlan(
                        currentPlan,
                        medicalPlans,
                        dentalVisionPlans,
                    ) : [],
                    planType,
                    listOfPlans,
                    consumerProfile);
                break;
        }

        return { ...resultMessage, isSuccess: true };
    }

    getMedicalMessage(
        listOfPlans: ISubscription[],
        medicalPlans: ISubscription[],
        dentalVisionPlans: ISubscription[],
        consumerProfile: IConsumerProfile,
    ): { message: string, isLiveChat: boolean } {
        const planType = 'Medical';
        let message: string;
        let isLiveChat: boolean;
        const planTypePart = '';
        let currentUserPlan = listOfPlans[0]

        const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        if (currentUserPlan && currentUserPlan.eligibilities && currentUserPlan.eligibilities.length) {
            let plansByStartDate: any = {};
            listOfPlans.forEach(plan => {
                let startDate = plan.eligibilities[0].startDate;
                plansByStartDate[startDate]
                    ? plansByStartDate[startDate].push(plan)
                    : plansByStartDate[startDate] = [plan];
            });
            let effectiveDate = new Date(currentUserPlan.eligibilities[0].startDate).toLocaleDateString('en-US', dateOptions);
            let coveredMembers: ISubscription[] = this.filterCoveredMembersByPlan(
                currentUserPlan,
                medicalPlans,
                dentalVisionPlans,
            )
            if (currentUserPlan.eligibilities[0].eligibilityStatus === 'Termed') {
                currentUserPlan.eligibilities.sort((a: IEligibilities, b: IEligibilities) => {
                    return new Date(a.endDate) > new Date(b.endDate) ? -1 : 1;
                });
                let planEndDate = new Date(currentUserPlan.eligibilities[0].endDate).toLocaleDateString('en-US', dateOptions);
                message = `Your plan is not currently active. Your coverage ended on ${planEndDate}`
            } else if (currentUserPlan.eligibilities[0].eligibilityStatus === 'FutureActive') {
                if (coveredMembers.length > 1 || coveredMembers[0].memberId.substring(9) !== '01') {
                    message = `Your plan is not yet active. Once it is, the individuals below will be covered on your policy (unless you make changes prior to your effective date): \n`;
                    Object.keys(plansByStartDate).forEach((key, i) => {
                        let effectiveDate = new Date(key).toLocaleDateString('en-US', dateOptions);
                        // here should be empty line before next block if i > 0.
                        // But render can't show it correctly. Therefore the implementation has been removed.
                        message += this.getListAllPlans(plansByStartDate[key], medicalPlans, dentalVisionPlans, effectiveDate, true);
                    });
                } else {    // FutureActive - only the member asking is on policy
                    message = `Your plan is not yet active. Your coverage will begin on ${effectiveDate}`;
                };
            } else {    // Active
                if (coveredMembers.length > 1 || coveredMembers[0].memberId.substring(9) !== '01') {
                    message = `The following individuals are covered on your policy:`;
                    Object.keys(plansByStartDate).forEach((key, i) => {
                        let effectiveDate = new Date(key).toLocaleDateString('en-US', dateOptions);
                        // here should be empty line before next block if i > 0.
                        // But render can't show it correctly. Therefore the implementation has been removed.
                        message += this.getListAllPlans(plansByStartDate[key], medicalPlans, dentalVisionPlans, effectiveDate);
                    });
                } else {
                    message = `You are the only person currently covered on your policy. Your policy began on ${effectiveDate}.`
                }
            }
        } else {
            if (consumerProfile.eligibilityType.toLowerCase() === 'non medical' || consumerProfile.hasWellness) {
                message = `Your plan does not include medical coverage. Would you like to chat with a concierge for more information?`;
                isLiveChat = true;
            } else {
                // TODO: ! not in requirement
                message = `Your plan does not include medical coverage.`;
            }
        }
        return { message, isLiveChat };
    }

    getListAllPlans(
        listOfPlans: ISubscription[],
        medicalPlans: ISubscription[],
        dentalVisionPlans: ISubscription[],
        effectiveDate: string,
        isFuture?: boolean,
    ): string {
        let message = ''
        let types: string[] = [];
        listOfPlans.forEach(el => {
            let planType = el.eligibilities[0].coverageType;
            types.push(planType);
            let coveredMembersList = this.filterCoveredMembersByPlan(
                el,
                medicalPlans,
                dentalVisionPlans,
            ).map(el => el.firstName + ' ' + el.lastName).join(', ');
            message = `${message} \n` +
                `${planType} - Members Covered: ${coveredMembersList}.`;
        });
        types = types.map(el => el.toLowerCase());
        let typeString = types.length <= 1 ? types : types.slice(0, -1).join(', ') + ' and ' + types.slice(-1);
        if (isFuture) {
            message = message + ` \n` +
            `Your ${typeString} coverage will begin on ${effectiveDate}`;
        } else {
            message = message + ` \n` +
            `Your ${typeString} coverage began on ${effectiveDate}`;
        }
        return message;
    }

    getDVMessage(
        currentUserPlan: ISubscription,
        coveredMembers: ISubscription[],
        planType: PlanType,
        listOfPlans: ISubscription[],
        consumerProfile: IConsumerProfile,
    ): { message: string, isLiveChat: boolean } {
        let message: string;
        let isLiveChat: boolean;
        const planTypePart = planType.toLowerCase();
        const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        if (currentUserPlan && currentUserPlan.eligibilities && currentUserPlan.eligibilities.length) {
            if (currentUserPlan.eligibilities[0].eligibilityStatus === 'Termed') {
                let planEndDate = new Date(currentUserPlan.eligibilities[0].endDate).toLocaleDateString('en-US', dateOptions);
                message = `Your ${planTypePart} plan is not currently active. Your ${planTypePart} coverage ended on ${planEndDate}`
            } else if (currentUserPlan.eligibilities[0].eligibilityStatus === 'FutureActive') {
                let effectiveDate = new Date(currentUserPlan.eligibilities[0].startDate).toLocaleDateString('en-US', dateOptions);
                if (coveredMembers.length > 1 || coveredMembers[0].memberId.substring(9) !== '01') {    // TODO: check amd fix 01
                    const coveredMembersList = coveredMembers.map(el => el.firstName + ' ' + el.lastName).join(', ');
                    message = `Your ${planTypePart} plan is not yet active. Once it is, the individuals below will be covered on your policy (unless you make changes prior to your effective date): \n` +
                        `${planType} - Members Covered: ${coveredMembersList}. \n` +
                        `Your ${planTypePart} coverage will begin on ${effectiveDate}`;
                } else {    // FutureActive - only the member asking is on policy
                    message = `Your ${planTypePart} plan is not yet active. Your ${planTypePart} coverage will begin on ${effectiveDate}`;
                };
            } else {    // Active
                let effectiveDate = new Date(currentUserPlan.eligibilities[0].startDate).toLocaleDateString('en-US', dateOptions);
                if (coveredMembers.length > 1 || coveredMembers[0].memberId.substring(9) !== '01') {
                    const coveredMembersList = coveredMembers.map(el => el.firstName + ' ' + el.lastName).join(', ');
                    message = `The following individuals are covered on your policy: \n` +
                        `${planType} - Members Covered: ${coveredMembersList}. \n` +
                        `Your ${planTypePart} coverage began on ${effectiveDate}`;
                } else {
                    message = `You are the only person currently covered on your policy. Your policy began on ${effectiveDate}.`
                }
            }
        } else {
            message = `Your plan does not include ${planTypePart} coverage.`;   // default value;
            if (consumerProfile.eligibilityType.toLowerCase() === 'non medical' || consumerProfile.hasWellness) {
                // 4) For Non-Medical & Wellness, if no dental/vision eligibility returned: "Your plan does not include [medical/dental/vision] coverage. Would you like to chat with a concierge for more information?"
                message = `Your plan does not include ${planTypePart} coverage. Would you like to chat with a concierge for more information?`;
                isLiveChat = true;
            }

            // TODO: implement this requirenment
            // 3) For dental/vision if specific eligibility cannot be identified: Would you like to chat with a concierge for more information?

            // 3.0) If no vision history for any individual on the plan:
            // Your plan does not include vision coverage.
            if (listOfPlans.some(plan => plan.eligibilities[0].coverageType === CoverageTypes.Medical)) {
                message = `Your plan does not include ${planTypePart} coverage.`;
                isLiveChat = false;
            }

            // 2) For CHC, CHIP, & Medicaid: Your medical plan includes coverage for some vision services. Would you like to chat with a concierge for more information?
            // (Click Yes to transfer to live agent)
            // Vision - CHC, CHIP, & Medicaid:
            // Dental - CHC, CHIP, Medicare & Medicaid
            if (listOfPlans.some(plan => {
                const eligibilityType = plan.eligibilities[0].eligibilityTypeDescription;
                return (planType === 'Vision' && ['medicaid', 'chc', 'chip'].includes(eligibilityType.toLowerCase())
                    || planType === 'Dental' && ['medicaid', 'medicare', 'chc', 'chip'].includes(eligibilityType.toLowerCase()))
            })) {
                message = `Your medical plan includes coverage for some ${planTypePart} services. Would you like to chat with a concierge for more information?`;
                isLiveChat = true;
            }


            // 1) For members with Value Added Dental/Vision: You have coverage for some dental and vision services included in your medical plan. Would you like to chat with a concierge for more information?
            // (Click Yes to transfer to live agent)
            if (listOfPlans.some(plan => plan.eligibilities[0].coverageType === CoverageTypes.ValueAddedBenefits)) {
                message = `You have coverage for some dental and vision services included in your medical plan. \n` +
                    ` Would you like to chat with a concierge for more information?`;
                isLiveChat = true;
            }
        }
        return { message, isLiveChat };
    }

    processPlans(
        response: { subscriptions: ISubscription[], type: string } | any,
        consumerProfile: IConsumerProfile,
        listOfPlans: any[],
    ) {
        if (response.subscriptions) {
            // this.isWellness = false;
            const dataClone: ISubscription[] = JSON.parse(JSON.stringify(response.subscriptions));
            const currentPlan = response.type === CoverageTypes.Medical ?
                dataClone.find(v => v.memberId === consumerProfile.mc400MemberId) :
                dataClone.find(v => v.memberId === consumerProfile.dentalVisionMemberId);

            const eligibilityStatus = currentPlan.eligibilities.some(el => el.eligibilityStatus === 'Active')
                ? 'Active'
                : currentPlan.eligibilities[0].eligibilityStatus;

            currentPlan.eligibilities = currentPlan.eligibilities.filter(v => v.eligibilityStatus === eligibilityStatus);
            if (currentPlan.eligibilities.length > 1) {
                currentPlan.eligibilities.sort((a: IEligibilities, b: IEligibilities) => {
                    return new Date(a.startDate) < new Date(b.startDate) ? -1 : 1;
                });
            }
            if (currentPlan.eligibilities.length) {
                if (currentPlan.eligibilities[0].coverageType === 'Medical' && response.type === 'Medical') {
                    currentPlan.eligibilities[0].dependentInfo =
                        this.checkDependentsandAge(response.subscriptions,
                            consumerProfile.mc400MemberId.substring(0, 9),
                            {
                                isSubscriber: consumerProfile.mc400MemberId.substring(9) === '01',
                                status: eligibilityStatus
                            });
                    const valueAddedBenefits = this.getValueAddedBenifits(currentPlan.eligibilities[0]);
                    this.checkEssentialBenefits(currentPlan, dataClone, listOfPlans);
                    this.addValueAddedBenefitsRToListOfPlans(valueAddedBenefits, currentPlan, dataClone, listOfPlans);
                    this.addVisionElgibilityInformationToListOfPlans(currentPlan, dataClone, listOfPlans);
                    currentPlan.coveredMembers = this.setCoveredMemberNames
                        (dataClone, 'Medical', eligibilityStatus,
                            currentPlan.eligibilities[0].startDate, currentPlan.eligibilities[0].endDate);

                } else {
                    currentPlan.eligibilities[0].dependentInfo =
                        this.checkDependentsandAge(response.subscriptions,
                            consumerProfile.dentalVisionMemberId.substring(0, 9),
                            {
                                isSubscriber: consumerProfile.dentalVisionMemberId.substring(9) === '01',
                                status: eligibilityStatus
                            });
                    this.addVisionElgibilityInformationToListOfPlans(currentPlan, dataClone, listOfPlans);
                    currentPlan.coveredMembers = this.setCoveredMemberNames(
                        dataClone, 'Dental', eligibilityStatus,
                        currentPlan.eligibilities[0].startDate, currentPlan.eligibilities[0].endDate);

                }
                this.sortCards(currentPlan, listOfPlans);
            } else {
                // this.setEmptyState();
            }
        } else {
            /*
            if (response.hasMedicalEligibilityError) {
                this.hasMedicalEligibilityError = response.hasMedicalEligibilityError;
            }
            if (response.hasDentalEligibilityError) {
                this.hasDentalEligibilityError = response.hasDentalEligibilityError;
            }
            this.emptyState();
            */
        }
    };

    checkEssentialBenefits(
        memberEligibility: ISubscription,
        dataClone: ISubscription[],
        listOfPlans: any[],
    ): void {
        if (memberEligibility.eligibilities[0].memberRiders && memberEligibility.eligibilities[0].coverageType === CoverageTypes.Medical) {
            if (this.checkEssentialBenefitRider(memberEligibility.eligibilities[0].memberRiders)) {
                const essentialData: ISubscription = JSON.parse(JSON.stringify(memberEligibility));
                essentialData.eligibilities[0].hasEssentialBenefits = true;

                essentialData.eligibilities[0] = VisionAndValueAddedBenefitsInformation
                    .setEligibilityInformation(essentialData.eligibilities[0]);
                // this.benefits = essentialData;
                const names = this.setCoveredMemberNames
                    (dataClone, 'Pediatric',
                        memberEligibility.eligibilities[0].eligibilityStatus,
                        essentialData.eligibilities[0].startDate,
                        essentialData.eligibilities[0].endDate);
                essentialData.coveredMembers = names;
                if (names.length) {
                    this.sortCards(essentialData, listOfPlans);
                }
            }
        }
    }

    addValueAddedBenefitsRToListOfPlans(
        valueAddedBenefits: Array<IRiderList>,
        memberEligibilityInfo: ISubscription,
        dataClone: ISubscription[],
        listOfPlans: any[],
    ) {
        if (valueAddedBenefits.length) {
            const addedBenefits: ISubscription = JSON.parse(JSON.stringify(memberEligibilityInfo));

            addedBenefits.eligibilities[0] = VisionAndValueAddedBenefitsInformation.
                setEligibilityInformation(addedBenefits.eligibilities[0], valueAddedBenefits);

            const names = this.setCoveredMemberNames
                (dataClone, 'ValueAdded', Status.Active,
                    addedBenefits.eligibilities[0].startDate, addedBenefits.eligibilities[0].endDate);
            addedBenefits.coveredMembers = names;
            this.sortCards(addedBenefits, listOfPlans);
        }
    }

    addVisionElgibilityInformationToListOfPlans(
        memberEligibilityInfo: ISubscription,
        dataClone: ISubscription[],
        listOfPlans: any[],
    ) {
        const visionEligibilityInformation = this.checkVisionEligibility(memberEligibilityInfo.eligibilities[0]);
        if (visionEligibilityInformation) {
            const vision: ISubscription = JSON.parse(JSON.stringify(memberEligibilityInfo));

            vision.eligibilities[0] = VisionAndValueAddedBenefitsInformation
                .setEligibilityInformation(vision.eligibilities[0]);

            vision.coveredMembers = this.setCoveredMemberNames(
                dataClone, 'Vision',
                vision.eligibilities[0].eligibilityStatus,
                vision.eligibilities[0].startDate, vision.eligibilities[0].endDate);
            this.sortCards(vision, listOfPlans);
        }
    }

    checkVisionEligibility(eligibility: IEligibilities) {
        return eligibility.hasNva || eligibility.hasDVNva || eligibility.hasVisionAdvantage;
    }

    sortCards(plan: ISubscription, listOfPlans: any[]) {
        if (plan.eligibilities[0].planType === EligibilityPlanTypes.W ||
            plan.eligibilities[0].planType === EligibilityPlanTypes.Y && plan.eligibilities[0].coverageType === CoverageTypes.Medical) {
            // this.isWellness = true;
            return;
        }
        if (plan.eligibilities[0].coverageType === CoverageTypes.Dental &&
            !plan.eligibilities[0].memberRiders.filter(ele => ele.riderType === 'DE').length) {
            return;
        }
        listOfPlans.push(plan);
    }

    setCoveredMemberNames(members: ISubscription[], Type: string, status: string, startDate: string, endDate: string) {
        let name = '';
        const filteredMembers = this.filterCoveredMembers(JSON.parse(JSON.stringify(members)), status, startDate, endDate);
        if (filteredMembers.length) {
            filteredMembers.forEach((m, i) => {
                if (m.eligibilities.length) {
                    switch (Type) {
                        case 'Medical':
                            if (m.eligibilities[0].hasMedical) {
                                name += this.getNameConcat(filteredMembers.length, i, m);
                            }
                            break;
                        case 'Dental':
                            if (m.eligibilities[0].hasDentalAdvantage) {
                                name += this.getNameConcat(filteredMembers.length, i, m);
                            }
                            break;
                        case 'Vision':
                            if (m.eligibilities[0].hasVisionAdvantage || m.eligibilities[0].hasVisionCare) {
                                name += this.getNameConcat(filteredMembers.length, i, m);
                            }
                            break;
                        case 'ValueAdded':
                            if (m.eligibilities[0].hasValueAddedBenefits) {
                                name += this.getNameConcat(filteredMembers.length, i, m);
                            }
                            break;
                        case 'Pediatric':
                            if (m.eligibilities[0].hasPediatric) {
                                name += this.getNameConcat(filteredMembers.length, i, m);
                            }
                            break;

                        default:
                            break;
                    }
                }
            });
        }

        return name;
    }

    getNameConcat(length: number, index: number, member: ISubscription) {
        return length > 1 && length - 1 !== index ? `${member.firstName}, ` : `${member.firstName}`;
    }

    checkEssentialBenefitRider(riderList: IMemberRiders[]): boolean {
        return !!riderList.filter(rider => ['EB', 'EV'].indexOf(rider.riderType) !== -1).length;
    }

    getValueAddedBenifits(eligibility: IEligibilities): IRiderList[] {
        return eligibility.coverageType === CoverageTypes.Medical && eligibility.hasValueAddedBenefits ?
            this.getValueAddedRiderInformation(eligibility) : [];
    }

    getValueAddedRiderInformation(eligibility: IEligibilities) {
        return eligibility.memberRiders.filter(rider => RiderListOfValueAddedBenefits.includes(rider.riderCode));
    }

    // Using in Past Current and future coverage and we also need to use in details and benefits.
    checkDependentsandAge(coveredMembers: Array<ISubscription>, subscriberNumber: string,
        filter: { isSubscriber: boolean, status: string }): IHasDependents {
        const age: number[] = [];
        const members = coveredMembers.filter(v => v.eligibilities.filter(x => x.eligibilityStatus === filter.status).length);
        if (filter.isSubscriber) {
            members.filter(member => member.relationshipCode === RelationshipCodes.DE)
                .forEach(member => { age.push(member.age); });
        } else {
            members.forEach(member => {
                if (member.subscriberNumber === subscriberNumber) {
                    age.push(member.age);
                }
            });
        }
        return {
            hasDependents: age.length ? true : false,
            age: age.length ? Math.max(...age) : 0
        };
    }

    checkStatus(res: Response) {
        if (res.ok) { // res.status >= 200 && res.status < 300
            return res.json();
        } else {
            logger.error(res.status + ': ' + res.statusText + ' ' + res.url);
            throw new Error(res.status + ': ' + res.statusText);
        }
    }

}
