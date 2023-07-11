export class MemberElgibilityInformation {
    /** Adding other required properties to Service response
     *  it is Applicable to both Dental and Medical Plan.
     */
    mapElgibilityData(eligibilityInformation: IEligibilities, data: { isTpaMemeber: boolean, coverageType: string }) {
        eligibilityInformation.displayPlanName = this.getPlanName(eligibilityInformation, data),
            eligibilityInformation.employerName = this.getEmployerName(eligibilityInformation) || '',
            eligibilityInformation.coverageType = data.coverageType,
            eligibilityInformation.sortOrder = data.coverageType === CoverageTypes.Medical ? 1 : 2,
            eligibilityInformation.isPcpVisible = this.checkConditionToShowPcp(eligibilityInformation),
            eligibilityInformation.network = eligibilityInformation.networkDescription || 'Your Network',
            eligibilityInformation.copayInformation =
            this.setCopayObject(eligibilityInformation.copay, eligibilityInformation.otherBenefits),
            eligibilityInformation.cocCode = eligibilityInformation.planBenefits
            .find(benefit => benefit.benefit.toLowerCase() === 'coc') && eligibilityInformation.planBenefits
                .find(benefit => benefit.benefit.toLowerCase() === 'coc').benefitValue,
            eligibilityInformation.endDate = eligibilityInformation.endDate && eligibilityInformation.endDate === '9999-12-31T00:00:00'
                ? '' : eligibilityInformation.endDate,
            eligibilityInformation.planEndDate = eligibilityInformation.planEndDate &&
                eligibilityInformation.planEndDate === '9999-12-31T00:00:00' ? '' : eligibilityInformation.planEndDate,
            eligibilityInformation.coveredMembersFirstNames = '';
        return eligibilityInformation;
    }
    checkConditionToShowPcp(eligibilityInformation: IEligibilities): boolean {
        // if (GROUP_ID_TO_TOGGLE_PCP.indexOf(eligibilityInformation.groupNumber) !== -1) {
        //     return false;
        // }
        return true;
    }
    setCopayObject(copayData, otherBenefits): Array<ICopayList> {
        const copay: Array<ICopayList> = [];
        for (const key in copayData) {
            if (copayData.hasOwnProperty(key)) {
                if (copayData[key]) {
                    const copays = {
                        displayText: this.formatCopayKeyName(key),
                        copayValue: this.checkDollarSymbol(copayData[key])
                    };
                    copay.push(copays);
                }
            }
        } for (const key in otherBenefits) {
            if (otherBenefits.hasOwnProperty('upmcanywherecare')) {
                if (otherBenefits['upmcanywherecare']) {
                    const copays = {
                        displayText: this.formatCopayKeyName(key),
                        copayValue: this.checkDollarSymbol(otherBenefits[key])
                    };
                    copay.push(copays);
                }
            }
        }
        return copay;
    }
    checkDollarSymbol(value: string) {
        if (value.indexOf('$') === -1) {
            return `$${value.trim()}`;
        }
        return value.trim();
    }
    private formatCopayKeyName(key: string): string {
        let copayName = '';
        switch (key.toLowerCase()) {
            case 'urgentcare': copayName = 'Urgent care visits'; break;
            case 'pcp': copayName = 'PCP'; break;
            case 'preventive': copayName = 'Preventive care'; break;
            case 'primary': copayName = 'Primary care visits'; break;
            case 'specialist': copayName = 'Specialist visits'; break;
            case 'emergency': copayName = 'Emergency room visits'; break;
            case 'upmcanywherecare': copayName = 'UPMC AnywhereCare visits'; break;
            default: copayName = ''; break;
        }
        return copayName;
    }
    getPlanName(rawElgibilityData: IEligibilities, params?: { isTpaMemeber: boolean, coverageType: string }): string {
        // const datepipe = new DatePipe('en-US');
        // const startDate = datepipe.transform(rawElgibilityData.planStartDate, 'yyyy/MM/dd');
        // let planName = '';
        // switch (params.coverageType) {
        //     case CoverageTypes.Dental:
        //         const dentalRider = rawElgibilityData.memberRiders.filter(ele => ele.riderType === 'DE');
        //         planName = dentalRider.length ? dentalRider[0].riderDescription : params.coverageType;
        //         break;
        //     case CoverageTypes.Medical:
        //         if (params.isTpaMemeber) {
        //             planName = rawElgibilityData.subGroupCategoryName;
        //         } else if (rawElgibilityData.planTypeDescription === 'UPMC FOR YOU') {
        //             planName = `UPMC <em>for You</em>`;
        //         } else if (new Date(startDate) > new Date('2016/01/01')) {
        //             planName = rawElgibilityData.coverageDescription1 !== '' ? rawElgibilityData.coverageDescription1 :
        //                 rawElgibilityData.planTypeDescription;
        //         } else { planName = rawElgibilityData.planTypeDescription; } break;
        //     default: planName = '';
        //         break;
        // }
        // return planName;
        return '';
    }

    getEmployerName(eligibilityInformation: IEligibilities): string {
        if (eligibilityInformation.eligibilityTypeDescription &&
            PLAN_DESCRIPTION_TO_EMPLOYER_NAME.indexOf(eligibilityInformation.eligibilityTypeDescription.toLowerCase()) !== -1 ||
            PLAN_TYPES_TO_SHOW_EMPLOYER.indexOf(eligibilityInformation.planType) !== -1) {
            return '';
        } else {
            return eligibilityInformation.groupName;
        }
    }
}

export class VisionAndValueAddedBenefitsInformation {
    static setEligibilityInformation(eligibilityInformation: IEligibilities, valueAddedBenefits?: Array<IRiderList>) {
        if (eligibilityInformation.memberRiders.length) {
            const source = eligibilityInformation.coverageType;
            eligibilityInformation.displayPlanName = eligibilityInformation.hasEssentialBenefits ? 'Pediatric Essential Benefits' :
                valueAddedBenefits ? valueAddedBenefits[0].riderDescription :
                    this.getVisionPlanName(eligibilityInformation.memberRiders),
                eligibilityInformation.employerName = '',
                eligibilityInformation.coverageType = eligibilityInformation.hasEssentialBenefits ? CoverageTypes.Pediatric :
                    valueAddedBenefits ? CoverageTypes.ValueAddedBenefits : CoverageTypes.Vision,
                eligibilityInformation.sortOrder = eligibilityInformation.hasEssentialBenefits ? 5 : valueAddedBenefits ? 4 : 3,
                eligibilityInformation.source = source,
                eligibilityInformation.isPcpVisible = false,
                eligibilityInformation.network = eligibilityInformation.genericCodeDescription || 'Your Network',
                eligibilityInformation.copayInformation = [],
                eligibilityInformation.coveredMembersFirstNames = '';
            return eligibilityInformation;
        }
    }
    private static  getVisionPlanName(riderList) {
        const visionRiders = riderList.filter(ele => RiderListOfVisionPlan.indexOf(ele.riderType) !== -1);
        let visionPlanName = '';
        switch (visionRiders.length && visionRiders[0].riderType) {
            case 'MV': visionPlanName = 'UPMC Vision Care'; break;
            // case 'EV': visionPlanName = 'Pediatric Essential Benefits'; break;
            case 'NV': visionPlanName = visionRiders[0].riderDescription; break;
            case 'CV': visionPlanName = visionRiders[0].riderDescription; break;
            case 'VI': visionPlanName = visionRiders[0].riderDescription; break;
            default: visionPlanName = CoverageTypes.Vision; break;
        }
        return visionPlanName;
    }
}


export interface IEligibilities extends Eligibilities {
    isMostRecent: boolean;
    displayPlanName?: string;
    copayInformation?: ICopayList[];
    employerName?: string;
    sortOrder?: number;
    coverageType?: string;
    network?: string;
    isPcpVisible?: boolean;
    genericCodeDescription?: string;
    cocCode: string;
    coveredMembersFirstNames?: string;
    hasEssentialBenefits?: boolean;
    source?: string;
    coveredMembersArray?: any;
    dependentInfo?: IHasDependents;
    isDigitalFirstMember?: boolean;

}

export interface IHasDependents {
    hasDependents: boolean;
    age: number;
}

export interface ICopayList {
    displayText: string;
    copayValue: string;
}

export interface Eligibilities {


    eligibilityStatus: string;
    startDate: string;
    endDate: string;
    planStartDate: string;
    planEndDate: string;
    groupName: string;
    groupNumber: string;
    planCode: string;
    planCodeDescription: string;
    terminationReason: string;
    subGroupNumber: string;
    planType: string;
    planTypeDescription: string;
    memberRiders: MemberRiders[];
    coverageDescription1: string;
    pcpRequired: string;
    corpId: string;
    groupAddress: Address;
    subGroupName: string;
    subGroupCategory: string;
    subGroupCategoryName: string;
    billType: string;
    eligibilityTypeCode: string;
    eligibilityTypeDescription: string;
    incentiveTypeId: string;
    incentiveTypeDescription: string;
    wellnessLevelId: string;
    wellnessLevelDescription: string;
    hixFamilyId: string;
    hixPolicyId: string;
    hixMemberId: string;
    shopEin: string;
    consumerConnectId: string;
    riders: string;
    cdhs: Cdhs[];
    otherEligibilities: OtherEligibilities[];
    miscellaneousStatusCode: string;
    entity: string;
    preExistingConditionFlag: string;
    preExistingConditionFromDte: number;
    preExistingConditionThruDte: number;
    qualifyingEvtCd: string;
    pensionAmt: number;
    transitionEffectiveDate: number;
    accumulatorType: string;
    outOfPocketAccumulatorType: string;
    benefitDescription1: string;
    benefitDescription2: string;
    companyCode: string;
    groupAssociationCode: string;
    groupAgePolicy: string;
    qualHealthPlanId: string;
    hixSource: string;
    coverageGroupType: string;
    deductible: string;
    mhLimits: string;
    copay: Copay;
    displayPlanCodeDescription: string;
    coinsurance: string;
    otherBenefits: any;
    hasMedical: boolean;
    hasAnyDental: boolean;
    hasAnyVision: boolean;
    hasDentalAdvantage: boolean;
    hasDentalPediatric: boolean;
    hasPediatric: boolean;
    hasCdh: boolean;
    hasValueAddedBenefits: boolean;
    hasNva: boolean;
    hasDVNva: boolean;
    hasVisionAdvantage: boolean;
    hasRx: boolean;
    hasVisionCare: boolean;
    isMostRecent: boolean;
    isPcpVisible?: boolean;
    genericCodeDescription?: string;
    cocCode: string;
    benefitLevels: BenefitLevel[];
    networkDescription: string;
    planBenefits: IPlanBenefits[];

}

interface Cdhs {
    hasCDH: string;
    groupCode: string;
    groupName: string;
    subGroupCode: string;
    subGroupName: string;
    planCode: string;
    planDescription: string;
    employeeId: string;
    startDate: string;
    endDate: string;
    benefitType: string;
    benefitTypeDescription: string;
    hraPayor: string;
    bankName: string;
    bankingException: string;
    isPharmacyIntegrated: string;
    acsFlag: string;
    acsCustId: string;
    acsEmpId: string;
    benefitAdminId: string;
    pbsFlag: string;
    hiaFundType: string;
    healthIncentiveType: string;
    ufDedPct: number;
    cmbioufDed: string;
    cmbifufDed: string;
    evl1Flag: string;
    benefitStatus: string;
    evolution1EmployeeCode: string;
}

export interface Address {
    addressType: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zipCode: string;
    zipExtension: string;
}
export interface MemberRiders {
    riderType: string;
    riderCode: string;
    riderDescription: string;
    riderDocumentURI: string;
    riderEffectiveDate: string;
    riderTerminationDate: string;
}

export interface BenefitLevel {
    benefitLevel: string;
}

export interface IPlanBenefits {
    benefit: string;
    benefitDescription: string;
    benefitValue: string;
}

export interface Copay {
    urgentCare: string;
    pcp: string;
    preventive: string;
    primary: string;
    obGyn: string;
    chiro: string;
    specialist: string;
    emergency: string;
    mentalHealth: string;
    majorMedical: string;
}

export interface OtherEligibilities {
    hasOtherEligibility: string;
    startDate: string;
    startDate_d: number;
    endDate: string;
    endDate_d: number;
    benefitType: string;
    benefitTypeDescription: string;
    amountPerPay: number;
    annualAmount: number;
    employerContribution: number;
    terminationReason: string;
}


export enum CoverageTypes {
    Medical = 'Medical',
    Dental = 'Dental',
    Vision = 'Vision',
    ValueAddedBenefits = 'Value Added Benefits',
    Pediatric = 'Pediatric'
}

export const PLAN_DESCRIPTION_TO_EMPLOYER_NAME: Array<string> = ['medicare', 'medicare advantage', 'medicaid', 'snp', 'chip'];
export const PLAN_TYPES_TO_SHOW_EMPLOYER: Array<string> = ['I', 'J', 'N', 'O'];
export const TPA_KEY_UPMC = 'B9FD6ED7-3B7B-450F-94A6-D5707EC631FF';

export const RiderListOfVisionPlan = ['MV', 'EV', 'EB', 'CV', 'NV', 'VI'];
export const RiderListOfValueAddedBenefits = ['VCEA', 'VCDD', 'DDEA', 'TDEA', 'TCDD', 'TCEA'];


export interface IRiderList {
    riderType: string;
    riderCode: string;
    riderDescription: string;
    riderDocumentURI: string;
    riderEffectiveDate: string;
    riderTerminationDate: string;
}

export interface IHasDependents {
    hasDependents: boolean;
    age: number;
}

export enum RelationshipCodes {
    SB = 'SB',
    SP = 'SP',
    DE = 'DE',
    DP = 'DP'
}


export interface IMemberRiders {
    riderType: string;
    riderCode: string;
    riderDescription: string;
    riderDocumentURI: string;
    riderEffectiveDate: string;
    riderTerminationDate: string;
}
