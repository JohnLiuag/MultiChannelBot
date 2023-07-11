export interface IUserProfile {
    // authToken?: string;
    memberId?: string;
    name?: string;
    // surname?: string;
    // navItems?: string;
}
export interface IConsumerProfile {
    medicalTpaClient?: string,
    medicalTpaId?: string,
    medicalTpaDiv?: string,
    medicalTpaKey?: string,
    medicalTpaName?: string,
    dentalVisionTpaClient?: string,
    dentalVisionTpaId?: string,
    dentalVisionTpaDiv?: string,
    dentalVisionTpaKey?: string,
    dentalVisionTpaName?: string,
    medicalEligibilityStartDate?: string,
    medicalEligibilityEndDate?: string,
    planCode?: string,
    groupNumber?: string,
    subGroupNumber?: string,
    planStartDate?: string,
    corpCode?: string;
    username?: string,
    memberId?: string,
    lineOfBusinessKeys?: string[],
    identifiers?: [],
    lifeSolutions?: { productKeys: [] },
    absenceManagement?: {},
    shortTermDisability?: {},
    workersComp?: {},
    absence?: {},
    wellnessProfile?: {},
    hasLifeSolutions?: boolean,
    hasAbsenceManagement?: boolean,
    hasShortTermDisability?: boolean,
    hasWorkersComp?: boolean,
    hasAbsence?: boolean,
    hasWorkPartnersProductsOnly?: boolean,
    firstName?: string,
    lastName?: string,
    middleName?: string,
    dateOfBirth?: string,
    age?: number,
    gender?: string,
    emailId?: string,
    phone?: string,
    homeAddress1?: string,
    homeCity?: string,
    homeState?: string,
    homeZip?: string,
    mc400MemberId?: string
    medicalMemberId?: string
    employeeNumber?: string
    relationshipCode?: string,
    memberStatus?: string,
    dvMemberStatus?: string,
    dentalVisionMemberId?: string,
    dentalVisionPlanType?: string,
    dentalVisionCoverageGroupCode?: string,
    dvGroupName?: string,
    medicalPartitionRiderCodes?: [],
    dvPartitionRiderCodes?: string[],
    medicalPartitionRiderTypes?: Array<string>,
    dvPartitionRiderTypes?: string[],
    eligibilityType?: string,
    wellnessLevelId?: number,
    incentiveTypeId?: number,
    hasReferrals?: boolean,
    memberInfo?: {
        hasCdh: boolean,
        hasPreviousHsaAccount: boolean,
        hasPreviousHiaAccount: boolean,
        hasMostRecentEligibility: boolean,
        hasEligibilityWithIn180Days: boolean,
        hasCurrentDvEligibility: boolean,
        hasMostRecentDvEligibility: boolean
    },
    policyHolderMemberInfo?: {
        dentalVisionMemberId: string,
        firstName: string,
        lastName: string,
        middleName: string,
        gender: string,
        dateOfBirth: string,
        homeAddress1: string,
        homeCity: string,
        homeState: string,
        homeZip: string,
        phone: string
    },
    hasHealthInsurance?: boolean,
    hasVision?: boolean,
    hasVisionAdvantage?: boolean,
    hasVisionCare?: boolean,
    hasNva?: boolean,
    hasDvNva?: boolean,
    hasDentalAdvantage?: boolean,
    hasMedicalInsurance?: boolean,
    hasIndividualInsurance?: boolean,
    hasGroupHealthInsurance?: boolean,
    hasGovernmentInsurance?: boolean,
    hasWellness?: boolean,
    hasRx?: boolean,
    hasFsa?: boolean,
    hasValueAddedBenefit?: boolean,
    dvEligibilityStartDate?: string,
    dvEligibilityEndDate?: string,
    evolution1Flag?: boolean,
    hadMedicalInsuranceWithinLast3Years?: boolean,
    hadDVInsuranceWithinLast3Years?: boolean,
    isDigitalFirstMember?: boolean
}
