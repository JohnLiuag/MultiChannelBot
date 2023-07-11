//FAQ 1-10

function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

const whatIsAllowedAmount = new QuestionObject("What is allowed amount?");
const whatDoesAllowedAmountMean = new QuestionObject("What does allowed amount mean?");
const whatIsAnAllowedAmount = new QuestionObject("What is an allowed amount?");
export const allowedAmountQuestionsArray = [
    whatIsAllowedAmount, 
    whatDoesAllowedAmountMean, 
    whatIsAnAllowedAmount
];

const whatIsAnAppeal = new QuestionObject("What is an appeal?");
const whatIsAppeal = new QuestionObject("What is appeal?");
const whatDoesAppealMean = new QuestionObject("What does appeal mean?");
export const appealQuestionsArray = [
    whatIsAnAppeal, 
    whatIsAppeal, 
    whatDoesAppealMean
];

const whatIsBalanceBilling = new QuestionObject("What is balance billing?");
const whatDoesBalanceBillingMean = new QuestionObject("What does balance billing mean?");
const whatIsBalanceBill = new QuestionObject("What is balance bill?");
export const balanceBillQuestionsArray = [
    whatIsBalanceBilling, 
    whatDoesBalanceBillingMean, 
    whatIsBalanceBill
];

const whatIsABenefitPeriod = new QuestionObject("What is a benefit period?");
const whatIsBenefitPeriod = new QuestionObject("What is benefit period?");
const whatDoesBenefitPeriodMean = new QuestionObject("What does benefit period mean?");
export const benefitPeriodQuestionsArray = [
    whatIsABenefitPeriod,
    whatIsBenefitPeriod,
    whatDoesBenefitPeriodMean
];

const whatIsABrand_NameDrug = new QuestionObject("What is a brand-name drug?");
const whatIsABrandNameDrug = new QuestionObject("What is a brand name drug?");
const whatDoesBrand_NameDrugMean = new QuestionObject("What does brand-name drug mean?");
const whatDoesBrandNameDrugMean = new QuestionObject("What does brand name drug mean?");
export const brandNameDrugQuestionsArray = [
    whatIsABrand_NameDrug,
    whatIsABrandNameDrug,
    whatDoesBrand_NameDrugMean,
    whatDoesBrandNameDrugMean
];

const whatIsABroker = new QuestionObject("What is a broker?");
const whatIsBroker = new QuestionObject("What is broker?");
const whatDoesBrokerMean = new QuestionObject("What does broker mean?");
export const brokerQuestionsArray = [
    whatIsABroker,
    whatIsBroker,
    whatDoesBrokerMean
];

const whatIsACertificateOfCoverage = new QuestionObject("What is a Certificate of Coverage?");
const whatDoesCertificateOfCoverageMean = new QuestionObject("What does Certificate of Coverage mean?");
const whatIsACoc = new QuestionObject("What is a COC?");
const whatDoesCocMean = new QuestionObject("What does COC mean?");
const whatDoesCocStandFor = new QuestionObject("What does COC stand for?");
export const cocQuestionsArray = [
    whatIsACertificateOfCoverage,
    whatDoesCertificateOfCoverageMean,
    whatIsACoc,
    whatDoesCocMean,
    whatDoesCocStandFor
];

const whatIsAClaim = new QuestionObject("What is a claim?");
const whatDoesClaimMean = new QuestionObject("What does claim mean?");
export const claimQuestionsArray = [
    whatIsAClaim,
    whatDoesClaimMean
];

const whatIsCobra = new QuestionObject("What is COBRA?");
const whatDoesCobraMean = new QuestionObject("What does COBRA mean?");
export const cobraQuestionsArray = [
    whatIsCobra,
    whatDoesCobraMean
];

const whatIsCoinsurance = new QuestionObject("What is coinsurance?");
const whatDoesCoinsuranceMean = new QuestionObject("What does coinsurance mean?");
export const coinsuranceQuestionsArray = [
    whatIsCoinsurance,
    whatDoesCoinsuranceMean
];

//FAQ 11-20

const whatIsAConsumer_DirectedHealthPlan = new QuestionObject("What is a Consumer-Directed Health Plan?");
const whatIsConsumer_DirectedHealthPlan = new QuestionObject("What is Consumer-Directed Health Plan?");
const whatIsAConsumerDirectedHealthPlan = new QuestionObject("What is a Consumer Directed Health Plan?");
const whatIsConsumerDirectedHealthPlan = new QuestionObject("What is Consumer Directed Health Plan?");
const whatDoesConsumer_DirectedHealthPlanMean = new QuestionObject("What does Consumer-Directed Health Plan mean?");
const whatDoesConsumerDirectedHealthPlanMean = new QuestionObject("What does Consumer Directed Health Plan mean?");
const whatDoesCdhpMean = new QuestionObject("What does CDHP mean?");
const whatIsCdhp = new QuestionObject("What is CDHP?");
export const cdhpQuestionsArray = [
    whatIsAConsumer_DirectedHealthPlan,
    whatIsConsumer_DirectedHealthPlan,
    whatIsAConsumerDirectedHealthPlan,
    whatIsConsumerDirectedHealthPlan,
    whatDoesConsumer_DirectedHealthPlanMean,
    whatDoesConsumerDirectedHealthPlanMean,
    whatDoesCdhpMean,
    whatIsCdhp
];

const whatIsACopayment = new QuestionObject("What is a copayment?");
const whatIsACopay = new QuestionObject("What is a copay?");
const whatIsCopayment = new QuestionObject("What is copayment?");
const whatIsCopay = new QuestionObject("What is copay?");
const whatDoesCopaymentMean = new QuestionObject("What does copayment mean?");
const whatDoesCopayMean = new QuestionObject("What does copay mean?");
export const copaymentQuestionsArray = [
    whatIsACopayment,
    whatIsACopay,
    whatIsCopayment,
    whatIsCopay,
    whatDoesCopaymentMean,
    whatDoesCopayMean
];

const whatIsCoveredService = new QuestionObject("What is covered service?");
const whatIsACoveredService = new QuestionObject("What is a covered service?");
const whatDoesCoveredServiceMean = new QuestionObject("What does covered service mean?");
export const coveredServiceQuestionsArray = [
    whatIsCoveredService,
    whatIsACoveredService,
    whatDoesCoveredServiceMean
];

const whatIsADeductible = new QuestionObject("What is a deductible?");
const whatIsDeductible = new QuestionObject("What is deductible?");
const whatDoesDeductibleMean = new QuestionObject("What does deductible mean?");
export const deductibleQuestionsArray = [
    whatIsADeductible,
    whatIsDeductible,
    whatDoesDeductibleMean
];

const whatIsADependent = new QuestionObject("What is a dependent?");
const whatIsDependent = new QuestionObject("What is dependent?");
const whatDoesDependentMean = new QuestionObject("What does dependent mean?");
const whoIsADependent = new QuestionObject("Who is a dependent?");
const whoAreDependents = new QuestionObject("Who are dependents?");
export const dependentQuestionsArray = [
    whatIsADependent,
    whatIsDependent,
    whatDoesDependentMean,
    whoIsADependent,
    whoAreDependents
];

const whatIsADrugList = new QuestionObject("What is a drug list?");
const whatIsDrugList = new QuestionObject("What is drug list?");
const whatDoesDrugListMean = new QuestionObject("What does drug list mean?");
const whatDoesADrugListMean = new QuestionObject("What does a drug list mean?");
export const drugListQuestionsArray = [
    whatIsADrugList,
    whatIsDrugList,
    whatDoesDrugListMean,
    whatDoesADrugListMean
];

const whatIsDurableMedicalEquipment = new QuestionObject("What is durable medical equipment?");
const whatDoesDurableMedicalEquipmentMean = new QuestionObject("What does durable medical equipment mean?");
const whatIsDme = new QuestionObject("What is DME?");
const whatDoesDmeMean = new QuestionObject("What does DME mean?");
const whatDoesDmeStandFor = new QuestionObject("What does DME stand for?");
export const dmeQuestionsArray = [
    whatIsDurableMedicalEquipment,
    whatDoesDurableMedicalEquipmentMean,
    whatIsDme,
    whatDoesDmeMean,
    whatDoesDmeStandFor
];

const whatIsAnEffectiveDate = new QuestionObject("What is an effective date?");
const whatIsAEffectiveDate = new QuestionObject("What is a effective date?");
const whatIsEffectiveDate = new QuestionObject("What is effective date?");
const whatDoesEffectiveDateMean = new QuestionObject("What does effective date mean?");
export const effectiveDateQuestionsArray = [
    whatIsAnEffectiveDate,
    whatIsAEffectiveDate,
    whatIsEffectiveDate,
    whatDoesEffectiveDateMean
];

const whatIsAnEmergencyMedicalCondition = new QuestionObject("What is an emergency medical condition?");
const whatIsAEmergencyMedicalCondition = new QuestionObject("What is a emergency medical condition?");
const whatIsEmergencyMedicalCondition = new QuestionObject("What is emergency medical condition?");
const whatDoesEmergencyMedicalConditionMean = new QuestionObject("What does emergency medical condition mean?");
export const emergencyMedicalConditionQuestionsArray = [
    whatIsAnEmergencyMedicalCondition,
    whatIsAEmergencyMedicalCondition,
    whatIsEmergencyMedicalCondition,
    whatDoesEmergencyMedicalConditionMean
];

const whatIsAnEmployeeAssistanceProgram = new QuestionObject("What is an Employee Assistance Program?");
const whatIsTheEmployeeAssistanceProgram = new QuestionObject("What is the Employee Assistance Program?");
const whatIsAEmployeeAssistanceProgram = new QuestionObject("What is a Employee Assistance Program?");
const whatIsEmployeeAssistanceProgram = new QuestionObject("What is Employee Assistance Program?");
const whatDoesEmployeeAssistanceProgramMean = new QuestionObject("What does Employee Assistance Program mean?");
const whatDoesEapMean = new QuestionObject("What does EAP mean?");
const whatIsAnEap = new QuestionObject("What is an EAP?");
const whatIsEap = new QuestionObject("What is EAP?");
const whatIsAEap = new QuestionObject("What is a EAP?");
export const eapQuestionsArray = [
    whatIsAnEmployeeAssistanceProgram,
    whatIsTheEmployeeAssistanceProgram,
    whatIsAEmployeeAssistanceProgram,
    whatIsEmployeeAssistanceProgram,
    whatDoesEmployeeAssistanceProgramMean,
    whatDoesEapMean,
    whatIsAnEap,
    whatIsEap,
    whatIsAEap
];

//FAQ 21-30

const whatIsAnEnchancedAccessHealthMaintanceOrganization = new QuestionObject("What is an Enhanced Access Health Maintance Organization?");
const whatIsAEnchancedAccessHealthMaintanceOrganization = new QuestionObject("What is a Enhanced Access Health Maintenance Organization?");
const whatIsEnchancedAccessHealthMaintanceOrganization = new QuestionObject("What is Enhanced Access Health Maintenance Organization?");
const whatDoesEnchancedAccessHealthMaintanceOrganizationMean = new QuestionObject("What does Enhanced Access Health Maintenance Organization mean?");
const whatDoesEahmoMean = new QuestionObject("What does EAHMO mean?");
const whatIsEahmo = new QuestionObject("What is EAHMO?");
const whatIsAnEahmo = new QuestionObject("What is an EAHMO?");
const whatIsAEahmo = new QuestionObject("What is a EAHMO?");
export const eahmoQuestionsArray = [
    whatIsAnEnchancedAccessHealthMaintanceOrganization,
    whatIsAEnchancedAccessHealthMaintanceOrganization,
    whatIsEnchancedAccessHealthMaintanceOrganization,
    whatDoesEnchancedAccessHealthMaintanceOrganizationMean,
    whatDoesEahmoMean,
    whatIsEahmo,
    whatIsAnEahmo,
    whatIsAEahmo
];

const whatIsAnExcludedService = new QuestionObject("What is an excluded service?");
const whatAreExcludedServices = new QuestionObject("What are excluded services?");
const whatIsExcludedService = new QuestionObject("What is excluded service?");
const whatIsExcludedServices = new QuestionObject("What is excluded services?");
const whatDoesExcludedServiceMean = new QuestionObject("What does excluded service mean?");
const whatDoesExcludedServicesMean = new QuestionObject("What does excluded services mean?");
export const excludedServiceQuestionsArray = [
    whatIsAnExcludedService,
    whatAreExcludedServices,
    whatIsExcludedService,
    whatIsExcludedServices,
    whatDoesExcludedServiceMean,
    whatDoesExcludedServicesMean
];

const whatIsAnExclusiveProviderOrganization = new QuestionObject("What is an Exclusive Provider Organization?");
const whatIsAExclusiveProviderOrganization = new QuestionObject("What is a Exclusive Provider Organization?");
const whatIsExclusiveProviderOrganization = new QuestionObject("What is Exclusive Provider Organization?");
const whatDoesExclusiveProviderOrganizationMean = new QuestionObject("What does Exclusive Provider Organization mean?");
const whatDoesEpoMean = new QuestionObject("What does EPO mean?");
const whatDoesEpoStandFor = new QuestionObject("What does EPO stand for?");
const whatIsAnEpo = new QuestionObject("What is an EPO?");
const whatIsEpo = new QuestionObject("What is EPO?");
const whatIsAEpo = new QuestionObject("What is a EPO?");
export const epoQuestionsArray = [
    whatIsAnExclusiveProviderOrganization,
    whatIsAExclusiveProviderOrganization,
    whatIsExclusiveProviderOrganization,
    whatDoesExclusiveProviderOrganizationMean,
    whatDoesEpoMean,
    whatDoesEpoStandFor,
    whatIsAnEpo,
    whatIsEpo,
    whatIsAEpo
];

const whatIsAnExplanationOfBenefits = new QuestionObject("What is an explanation of benefits?");
const whatIsAExplanationOfBenefits = new QuestionObject("What is a explanation of benefits?");
const whatIsExplanationOfBenefits = new QuestionObject("What is explanation of benefits?");
const whatDoesExplanationOfBenefitsMean = new QuestionObject("What does explanation of benefits mean?");
const whatDoesEobMean = new QuestionObject("What does EOB mean?");
const whatIsEob = new QuestionObject("What is EOB?");
const whatIsAnEob = new QuestionObject("What is an EOB?");
const whatIsAEob = new QuestionObject("What is a EOB?");
const whatDoesEobStandFor = new QuestionObject("What does EOB stand for?");
export const eobQuestionsArray = [
    whatIsAnExplanationOfBenefits,
    whatIsAExplanationOfBenefits,
    whatIsExplanationOfBenefits,
    whatDoesExplanationOfBenefitsMean,
    whatDoesEobMean,
    whatIsEob,
    whatIsAnEob,
    whatIsAEob,
    whatDoesEobStandFor
];

const whatIsAFlexibleSpendingAccount = new QuestionObject("What is a Flexible Spending Account?");
const whatIsFlexibleSpendingAccount = new QuestionObject("What is Flexible Spending Account?");
const whatDoesFlexibleSpendingAccountMean = new QuestionObject("What does Flexible Spending Account mean?");
const whatIsAnFsa = new QuestionObject("What is an FSA?");
const whatIsAFsa = new QuestionObject("What is a FSA?");
const whatDoesFsaMean = new QuestionObject("What does FSA mean?");
const whatDoesFsaStendFor = new QuestionObject("What does FSA stand for?");
export const fsaQuestionsArray = [
    whatIsAFlexibleSpendingAccount,
    whatIsFlexibleSpendingAccount,
    whatDoesFlexibleSpendingAccountMean,
    whatIsAnFsa,
    whatIsAFsa,
    whatDoesFsaMean,
    whatDoesFsaStendFor
];

const whatIsAFormulary = new QuestionObject("What is a formulary?");
const whatIsFormulary = new QuestionObject("What is formulary?");
const whatIsTheFormulary = new QuestionObject("What is the formulary?");
const whatDoesFormularyMean = new QuestionObject("What does formulary mean?");
export const formularyQuestionsArray = [
    whatIsAFormulary,
    whatIsFormulary,
    whatIsTheFormulary,
    whatDoesFormularyMean
];

const whatIsAGenericMedication = new QuestionObject("What is a generic medication?");
const whatIsGenericMedication = new QuestionObject("What is generic medication?");
const whatIsGeneric = new QuestionObject("What is generic?");
const whatDoesGenericMean = new QuestionObject("What does generic mean?");
const whatDoesGenericMedicationMean = new QuestionObject("What does generic medication mean?");
export const genericMedicationQuestionsArray = [
    whatIsAGenericMedication,
    whatIsGenericMedication,
    whatIsGeneric,
    whatDoesGenericMean,
    whatDoesGenericMedicationMean
];

const whatIsAGrievence = new QuestionObject("What is a grievance?");
const whatIsGrievence = new QuestionObject("What is grievance?");
const whatDoesGrievenceMean = new QuestionObject("What does grievance mean?");
export const grievenceQuestionsArray = [
    whatIsAGrievence,
    whatIsGrievence,
    whatDoesGrievenceMean
];

const whatIsAHealthMaintenanceOrganization = new QuestionObject("What is a Health Maintenance Organization?");
const whatIsHealthMaintenanceOrganization = new QuestionObject("What is Health Maintenance Organization?");
const whatIsTheHealthMaintenanceOrganization = new QuestionObject("What is the Health Maintenance Organization?");
const whatDoesHealthMaintenanceOrganizationMean = new QuestionObject("What does Health Maintenance Organization mean?");
const whatDoesHmoStandFor = new QuestionObject("What does HMO stand for?");
const whatDoesHmoMean = new QuestionObject("What does HMO mean?");
const whatIsAnHmo = new QuestionObject("What is an HMO?");
const whatIsAHmo = new QuestionObject("What is a HMO?");
const whatIsHmo = new QuestionObject("What is HMO?");
export const hmoQuestionsArray = [
    whatIsAHealthMaintenanceOrganization,
    whatIsHealthMaintenanceOrganization,
    whatIsTheHealthMaintenanceOrganization,
    whatDoesHealthMaintenanceOrganizationMean,
    whatDoesHmoStandFor,
    whatDoesHmoMean,
    whatIsAnHmo,
    whatIsAHmo,
    whatIsHmo
];

const whatIsAHealthReimbursementAccount = new QuestionObject("What is a Health Reimbursement Account?");
const whatIsHealthReimbursementAccount = new QuestionObject("What is Health Reimbursement Account?");
const whatIsTheHealthReimbursementAccount = new QuestionObject("What is the Health Reimbursement Account?");
const whatAreHealthReimbursementAccounts = new QuestionObject("What are Health Reimbursement Accounts?");
const whatDoesHealthReimbursementAccountMean = new QuestionObject("What does Health Reimbursement Account mean?");
const whatDoesHraStandFor = new QuestionObject("What does HRA stand for?");
const whatDoesHraMean = new QuestionObject("What does HRA mean?");
const WhatIsAnHra = new QuestionObject("What is an HRA?");
const whatIsAHra = new QuestionObject("What is a HRA?");
const whatIsHra = new QuestionObject("What is HRA?");
export const hraQuestionsArray = [
    whatIsAHealthReimbursementAccount,
    whatIsHealthReimbursementAccount,
    whatIsTheHealthReimbursementAccount,
    whatAreHealthReimbursementAccounts,
    whatDoesHealthReimbursementAccountMean,
    whatDoesHraStandFor,
    whatDoesHraMean,
    WhatIsAnHra,
    whatIsAHra,
    whatIsHra
];

//FAQ 31-40

const whatIsAHealthSavingsAccount = new QuestionObject("What is a Health Savings Account?");
const whatIsAnHealthSavingsAccount = new QuestionObject("What is an Health Savings Account?");
const whatIsHealthSavingsAccount = new QuestionObject("What is Health Savings Account?");
const whatAreHealthSavingsAccounts = new QuestionObject("What are Health Savings Accounts?");
const whatDoesHealthSavingsAccountMean = new QuestionObject("What does Health Savings Account mean?");
const whatDoesHsaMean = new QuestionObject("What does HSA mean?");
const whatDoesHsaStandFor = new QuestionObject("What does HSA stand for?");
const WhatIsAnHsa = new QuestionObject("What is an HSA?");
const whatIsAHsa = new QuestionObject("What is a HSA?");
const whatIsHsa = new QuestionObject("What is HSA?");
export const hsaQuestionsArray = [
    whatIsAHealthSavingsAccount,
    whatIsAnHealthSavingsAccount,
    whatIsHealthSavingsAccount,
    whatAreHealthSavingsAccounts,
    whatDoesHealthSavingsAccountMean,
    whatDoesHsaMean,
    whatDoesHsaStandFor,
    WhatIsAnHsa,
    whatIsAHsa,
    whatIsHsa
];

const whatIsHipaa = new QuestionObject("What is HIPAA?");
const whatDoesHipaaMean = new QuestionObject("What does HIPAA mean?");
const whatDoesHipaaStandFor = new QuestionObject("What does HIPAA stand for?");
const whatIsTheHealthInsurancePortabilityAndAccountabilityAct = new QuestionObject("What is the Health Insurance Portability and Accountability Act?");
const whatDoesHealthInsurancePortabilityAndAccountabilityActMean = new QuestionObject("What does Health Insurance Portability and Accountability Act mean?");
const whatIsHealthInsurancePortabilityAndAccountabilityAct = new QuestionObject("What is Health Insurance Portability and Accountability Act?");
export const hipaaQuestionsArray = [
    whatIsHipaa,
    whatDoesHipaaMean,
    whatDoesHipaaStandFor,
    whatIsTheHealthInsurancePortabilityAndAccountabilityAct,
    whatDoesHealthInsurancePortabilityAndAccountabilityActMean,
    whatIsHealthInsurancePortabilityAndAccountabilityAct
];

const whatIsHomeHealthCare = new QuestionObject("What is home health care?");
const whatDoesHomeHealthCareMean = new QuestionObject("What does home health care mean?");
export const homeHealthCareQuestionsArray = [
    whatIsHomeHealthCare,
    whatDoesHomeHealthCareMean
];

const whatAreHospiceServices = new QuestionObject("What are hospice services?");
const whatIsHospiceServices = new QuestionObject("What is hospice services?");
const whatDoesHospiceServicesMean = new QuestionObject("What does hospice services mean?");
export const hospiceServicesQuestionsArray = [
    whatAreHospiceServices,
    whatIsHospiceServices,
    whatDoesHospiceServicesMean
];

const whatIsHospitalization = new QuestionObject("What is hospitalization?");
const whatDoesHospitalizationMean = new QuestionObject("What does hospitalization mean?");
export const hospitalizationQuestionsArray = [
    whatIsHospitalization,
    whatDoesHospitalizationMean
];

const whatIsAnIdCard = new QuestionObject("What is an ID card?");
const whatIsAIdCard = new QuestionObject("What is a ID card?");
const whatIsIdCard = new QuestionObject("What is ID card?");
const whatDoesIdCardMean = new QuestionObject("What does ID card mean?");
export const idCardQuestionsArray = [
    whatIsAnIdCard,
    whatIsAIdCard,
    whatIsIdCard,
    whatDoesIdCardMean
];

const whatIsAnIndividualPolicy = new QuestionObject("What is an individual policy?");
const whatIsAIndividualPolicy = new QuestionObject("What is a individual policy?");
const whatIsIndividualPolicy = new QuestionObject("What is individual policy?");
const whatDoesIndividualPolicyMean = new QuestionObject("What does individual policy mean?");
export const individualPolicyQuestionsArray = [
    whatIsAnIndividualPolicy,
   whatIsAIndividualPolicy,
    whatIsIndividualPolicy,
    whatDoesIndividualPolicyMean
];

const whatIsIn_Network = new QuestionObject("What is in-network?");
const whatDoesIn_NetworkMean = new QuestionObject("What does in-network mean?");
const whatIsInNetwork = new QuestionObject("What is in network?");
const whatDoesInNetworkMean = new QuestionObject("What does in network mean?");
export const inNetworkQuestionsArray = [
    whatIsIn_Network,
    whatDoesIn_NetworkMean,
    whatIsInNetwork,
    whatDoesInNetworkMean
];

const whatIsMedicalAssistance = new QuestionObject("What is medical assistance?");
const whatDoesMedicalAssistanceMean = new QuestionObject("What does medical assistance mean?");
const whatIsMedicaid = new QuestionObject("What is Medicaid?");
const whatDoesMedicaidMean = new QuestionObject("What does Medicaid mean?");
export const medicalAssistanceQuestionsArray = [
    whatIsMedicalAssistance,
    whatDoesMedicalAssistanceMean,
    whatIsMedicaid,
    whatDoesMedicaidMean
];

const whatIsMedicalNecessary = new QuestionObject("What is medical necessary?");
const whatDoesMedicalNecessaryMean = new QuestionObject("What does medical necessary mean?");
export const medicalNecessaryQuestionsArray = [
    whatIsMedicalNecessary,
    whatDoesMedicalNecessaryMean
];

//FAQ 41-50

const whatIsMedicare = new QuestionObject("What is Medicare?");
const whatDoesMedicareMean = new QuestionObject("What does Medicare mean?");
export const medicareQuestionsArray = [
    whatIsMedicare,
    whatDoesMedicareMean
];

const whatIsMedicareAdvantage = new QuestionObject("What is Medicare Advantage?");
const whatDoesMedicareAdvantageMean = new QuestionObject("What does Medicare Advantage mean?");
export const medicareAdvantageQuestionsArray = [
    whatIsMedicareAdvantage,
    whatDoesMedicareAdvantageMean
];

const whatIsMedicarePartA = new QuestionObject("What is Medicare Part A?");
const whatDoesMedicarePartAMean = new QuestionObject("What does Medicare Part A mean?");
const whatIsPartA = new QuestionObject("What is Part A?");
const whatDoesPartAMean = new QuestionObject("What does Part A mean?");
export const partAQuestionsArray = [
    whatIsMedicarePartA,
    whatDoesMedicarePartAMean,
    whatIsPartA,
    whatDoesPartAMean
];

const whatIsMedicarePartB = new QuestionObject("What is Medicare Part B?");
const whatDoesMedicarePartBMean = new QuestionObject("What does Medicare Part B mean?");
const whatIsPartB = new QuestionObject("What is Part B?");
const whatDoesPartBMean = new QuestionObject("What does Part B mean?");
export const partBQuestionsArray = [
    whatIsMedicarePartB,
    whatDoesMedicarePartBMean,
    whatIsPartB,
    whatDoesPartBMean
];

const whatIsMedicarePartC = new QuestionObject("What is Medicare Part C?");
const whatDoesMedicarePartCMean = new QuestionObject("What does Medicare Part C mean?");
const whatIsPartC = new QuestionObject("What is Part C?");
const whatDoesPartCMean = new QuestionObject("What does Part C mean?");
export const partCQuestionsArray = [
    whatIsMedicarePartC,
    whatDoesMedicarePartCMean,
    whatIsPartC,
    whatDoesPartCMean
];

const whatIsMedicarePartD = new QuestionObject("What is Medicare Part D?");
const whatDoesMedicarePartDMean = new QuestionObject("What does Medicare Part D mean?");
const whatIsPartD = new QuestionObject("What is Part D?");
const whatDoesPartDMean = new QuestionObject("What does Part D mean?");
export const partDQuestionsArray = [
    whatIsMedicarePartD,
    whatDoesMedicarePartDMean,
    whatIsPartD,
    whatDoesPartDMean
];

const whatIsNcqa = new QuestionObject("What is NCQA?");
const whatDoesNcqaMean = new QuestionObject("What does NCQA mean?");
const whatDoesNcqaStandFor = new QuestionObject("What does NCQA stand for?");
const whatIsTheNationalCommitteeForQualityAssrance = new QuestionObject("What is the National Committee for Quality Assurance?");
const whatIsNationalCommitteeForQualityAssrance = new QuestionObject("What is National Committee for Quality Assurance?");
const whatDoesNationalCommitteeForQualityAssranceMean = new QuestionObject("What does National Committee for Quality Assurance mean?");
export const ncqaQuestionsArray = [
    whatIsNcqa,
    whatDoesNcqaMean,
    whatDoesNcqaStandFor,
    whatIsTheNationalCommitteeForQualityAssrance,
    whatIsNationalCommitteeForQualityAssrance,
    whatDoesNationalCommitteeForQualityAssranceMean
];

const whatIsANetwork = new QuestionObject("What is a network?");
const whatIsNetwork = new QuestionObject("What is network?");
const whatDoesNetworkMean = new QuestionObject("What does network mean?");
export const networkQuestionsArray = [
    whatIsANetwork,
    whatIsNetwork,
    whatDoesNetworkMean
];

const whatIsANon_ParticipatingProvider = new QuestionObject("What is a non-participating provider?");
const whatIsNon_ParticipatingProvider = new QuestionObject("What is non-participating provider?");
const whatDoesNon_ParticipatingProviderMean = new QuestionObject("What does non-participating provider mean?");
export const nonParticipatingProviderQuestionsArray = [
    whatIsANon_ParticipatingProvider,
    whatIsNon_ParticipatingProvider,
    whatDoesNon_ParticipatingProviderMean
];

const whatIsOpenEnrollment = new QuestionObject("What is open enrollment?");
const whatDoesOpenEnrollmentMean = new QuestionObject("What does open enrollment mean?");
export const enrollmentQuestionsArray = [
    whatIsOpenEnrollment,
    whatDoesOpenEnrollmentMean
];

//FAQ 51-60

const whatIsOut_Of_Pocket = new QuestionObject("What is out-of-pocket?");
const whatIsOutOfPocket = new QuestionObject("What is out of pocket?");
const whatDoesOut_Of_PocketMean = new QuestionObject("What does out-of-pocket mean?");
const whatDoesOutOfPocketMean = new QuestionObject("What does out of pocket mean?");
const whatIsOop = new QuestionObject("What is OOP?");
const whatDoesOopMean = new QuestionObject("What does OOP mean?");
export const oopQuestionsArray = [
    whatIsOut_Of_Pocket,
    whatIsOutOfPocket,
    whatDoesOut_Of_PocketMean,
    whatDoesOutOfPocketMean,
    whatIsOop,
    whatDoesOopMean
];

const whatDoesOut_Of_PocketLimitMean = new QuestionObject("What does out-of-pocket limit mean?");
const whatDoesOutOfPocketLimitMean = new QuestionObject("What does out of pocket limit mean?");
const whatIsOut_Of_PocketLimit = new QuestionObject("What is out-of-pocket limit?");
const whatIsOutOfPocketLimit = new QuestionObject("What is out of pocket limit?");
const whatIsAnOut_Of_PocketLimit = new QuestionObject("What is an out-of-pocket limit?");
const whatIsAnOutOfPocketLimit = new QuestionObject("What is an out of pocket limit?");
const whatIsAOut_Of_PocketLimit = new QuestionObject("What is a out-of-pocket limit?");
const whatIsAOutOfPocketLimit = new QuestionObject("What is a out of pocket limit?");
const whatDoesOut_Of_PocketMaximumMean = new QuestionObject("What does out-of-pocket maximum mean?");
const whatDoesOutOfPocketMaximumMean = new QuestionObject("What does out of pocket maximum mean?");
const whatDoesOut_Of_PocketMaxMean = new QuestionObject("What does out of pocket max mean?");
const whatIsOut_Of_PocketMaximum = new QuestionObject("What is out-of-pocket maximum?");
const whatIsOutOfPocketMaximum = new QuestionObject("What is out of pocket maximum?");
const whatIsOut_Of_PocketMax = new QuestionObject("What is out-of-pocket max?");
const whatIsOutOfPocketMax = new QuestionObject("What is out of pocket max?");
const whatIsAnOut_Of_PocketMaximum = new QuestionObject("What is an out-of-pocket maximum?");
const whatIsAnOutOfPocketMaximum = new QuestionObject("What is an out of pocket maximum?");
const whatIsAnOut_Of_PocketMax = new QuestionObject("What is an out-of-pocket max?");
const whatIsAnOutOfPocketMax = new QuestionObject("What is an out of pocket max?");
const whatIsOopMax = new QuestionObject("What is OOP max?");
const whatDoesOopMaxMean = new QuestionObject("What does OOP max mean?");
const whatIsOopLimit = new QuestionObject("What is OOP limit?");
const whatDoesOopLimitMean = new QuestionObject("What does OOP limit mean?");
const whatIsAnOopMax = new QuestionObject("What is an OOP max?");
const whatIsAOopMax = new QuestionObject("What is a OOP max?");
const whatIsAnOopLimit = new QuestionObject("What is an OOP limit?");
const whatIsOopMaximum = new QuestionObject("What is OOP maximum?");
const whatDoesOopMaximumMean = new QuestionObject("What does OOP maximum mean?");
export const oopLimitQuestionsArray = [
    whatDoesOut_Of_PocketLimitMean,
    whatDoesOutOfPocketLimitMean,
    whatIsOut_Of_PocketLimit,
    whatIsOutOfPocketLimit,
    whatIsAnOut_Of_PocketLimit,
    whatIsAnOutOfPocketLimit,
    whatIsAOut_Of_PocketLimit,
    whatIsAOutOfPocketLimit,
    whatDoesOut_Of_PocketMaximumMean,
    whatDoesOutOfPocketMaximumMean,
    whatDoesOut_Of_PocketMaxMean,
    whatIsOut_Of_PocketMaximum,
    whatIsOutOfPocketMaximum,
    whatIsOut_Of_PocketMax,
    whatIsOutOfPocketMax,
    whatIsAnOut_Of_PocketMaximum,
    whatIsAnOutOfPocketMaximum,
    whatIsAnOut_Of_PocketMax,
    whatIsAnOutOfPocketMax,
    whatIsOopMax,
    whatDoesOopMaxMean,
    whatIsOopLimit,
    whatDoesOopLimitMean,
    whatIsAnOopMax,
    whatIsAOopMax,
    whatIsAnOopLimit,
    whatIsOopMaximum,
    whatDoesOopMaximumMean
];

const whatIsAnOver_The_CounterMedication = new QuestionObject("What is an over-the-counter medication?");
const whatIsAnOverTheCounterMedication = new QuestionObject("What is an over the counter medication?");
const whatIsAnOtcMedication = new QuestionObject("What is an OTC medication?");
const whatIsAOver_The_CounterMedication = new QuestionObject("What is a over-the-counter medication?");
const whatIsAOverTheCounterMedication = new QuestionObject("What is a over the counter medication?");
const whatIsAOtcMedication = new QuestionObject("What is a OTC medication?");
const whatDoesOver_The_CounterMedicationMean = new QuestionObject("What does over-the-counter medication mean?");
const whatDoesOverTheCounterMedicationMean = new QuestionObject("What does over the counter medication mean?");
const whatDoesOtcMedicationMean = new QuestionObject("What does OTC medication mean?");
const whatDoesOver_The_CounterMean = new QuestionObject("What does over-the-counter mean?");
const whatDoesOverTheCounterMean = new QuestionObject("What does over the counter mean?");
const whatDoesOtcMean = new QuestionObject("What does OTC mean?");
const whatDoesOtcStandFor = new QuestionObject("What does OTC stand for?");
const whatDoesOtcMedicationStandFor = new QuestionObject("What does OTC medication stand for?");
export const otcMedicationQuestionsArray = [
    whatIsAnOver_The_CounterMedication,
    whatIsAnOverTheCounterMedication,
    whatIsAnOtcMedication,
    whatIsAOver_The_CounterMedication,
    whatIsAOverTheCounterMedication,
    whatIsAOtcMedication,
    whatDoesOver_The_CounterMedicationMean,
    whatDoesOverTheCounterMedicationMean,
    whatDoesOtcMedicationMean,
    whatDoesOver_The_CounterMean,
    whatDoesOverTheCounterMean,
    whatDoesOtcMean,
    whatDoesOtcStandFor,
    whatDoesOtcMedicationStandFor
];

const whatIsAParticipatingProvider = new QuestionObject("What is a participating provider?");
const whatIsParticipatingProvider = new QuestionObject("What is participating provider?");
const whatDoesParticipatingProviderMean = new QuestionObject("What does participating provider mean?");
export const participatingProviderQuestionsArray = [
    whatIsAParticipatingProvider,
    whatIsParticipatingProvider,
    whatDoesParticipatingProviderMean
];

const whatIsThePharmacy_And_TherapeuticsCommittee = new QuestionObject("What is the Pharmacy & Therapeutics Committee?");
const whatIsAPharmacy_And_TherapeuticsCommittee = new QuestionObject("What is a Pharmacy & Therapeutics Committee?");
const whatIsPharmacy_And_TherapeuticsCommittee = new QuestionObject("What is Pharmacy & Therapeutics Committee?");
const whatIsPharmacyAndTherapeuticsCommittee = new QuestionObject("What is Pharmacy and Therapeutics Committee?");
const whatIsThePharmacyAndTherapeuticsCommittee = new QuestionObject("What is the Pharmacy and Therapeutics Committee?");
const whatIsAPharmacAndTherapeuticsCommittee = new QuestionObject("What is a Pharmacy and Therapeutics Committee?");
const whatIsTheP_And_TCommittee = new QuestionObject("What is P&T Committee?");
const whatIsTheP_And_T = new QuestionObject("What is P&T?");
const whatDoesP_And_TMean = new QuestionObject("What does P&T mean?");
const whatDoesP_And_TCommitteeMean = new QuestionObject("What does P&T Committee mean?");
export const pAndTCommitteeQuestionsArray = [
    whatIsThePharmacy_And_TherapeuticsCommittee,
    whatIsAPharmacy_And_TherapeuticsCommittee,
    whatIsPharmacy_And_TherapeuticsCommittee,
    whatIsPharmacyAndTherapeuticsCommittee,
    whatIsThePharmacyAndTherapeuticsCommittee,
    whatIsAPharmacAndTherapeuticsCommittee,
    whatIsTheP_And_TCommittee,
    whatIsTheP_And_T,
    whatDoesP_And_TMean,
    whatDoesP_And_TCommitteeMean
];

const whatIsPoint_Of_Service = new QuestionObject("What is Point-of-Service?");
const whatIsPointOfService = new QuestionObject("What is Point of Service?");
const whatDoesPoint_Of_ServiceMean = new QuestionObject("What does Point-of-Service mean?");
const whatDoesPointOfServiceMean = new QuestionObject("What does Point of Service mean?");
const whatIsPos = new QuestionObject("What is POS?");
const whatDoesPosMean = new QuestionObject("What does POS mean?");
const whatDoesPosStandFor = new QuestionObject("What does POS stand for?");
export const pointOfServiceQuestionsArray = [
    whatIsPoint_Of_Service,
    whatIsPointOfService,
    whatDoesPoint_Of_ServiceMean,
    whatDoesPointOfServiceMean,
    whatIsPos,
    whatDoesPosMean,
    whatDoesPosStandFor
];

const whatIsAPrefferedProviderOrganization = new QuestionObject("What is a Preferred Provider Organization?");
const whatIsPrefferedProviderOrganization = new QuestionObject("What is Preferred Provider Organization?");
const whatDoesPrefferedProviderOrganizationMean = new QuestionObject("What does Preferred Provider Organization mean?");
const whatIsAPpo = new QuestionObject("What is a PPO?");
const whatIsPpo = new QuestionObject("What is PPO?");
const whatDoesPpoMean = new QuestionObject("What does PPO mean?");
const whatDoesPpoStandFor = new QuestionObject("What does PPO stand for?");
export const ppoQuestionsArray = [
    whatIsAPrefferedProviderOrganization,
    whatIsPrefferedProviderOrganization,
    whatDoesPrefferedProviderOrganizationMean,
    whatIsAPpo,
    whatIsPpo,
    whatDoesPpoMean,
    whatDoesPpoStandFor
];

const whatIsAPremium = new QuestionObject("What is a premium?");
const whatIsPremium = new QuestionObject("What is premium?");
const whatDoesPremiumMean = new QuestionObject("What does premium mean?");
export const premiumQuestionsArray = [
    whatIsAPremium,
    whatIsPremium,
    whatDoesPremiumMean
];

const whatIsAPrescriptionDrug = new QuestionObject("What is a prescription drug?");
const whatIsPrescriptionDrug = new QuestionObject("What is prescription drug?");
const whatArePrescriptionDrugs = new QuestionObject("What are prescription drugs?");
const whatDoesPrescriptionDrugMean = new QuestionObject("What does prescription drug mean?");
export const prescriptionDrugQuestionsArray = [
    whatIsAPrescriptionDrug,
    whatIsPrescriptionDrug,
    whatArePrescriptionDrugs,
    whatDoesPrescriptionDrugMean
];

const whatIsPreventiveCare = new QuestionObject("What is preventive care?");
const whatDoesPreventiveCareMean = new QuestionObject("What does preventive care mean?");
const whatIsPreventativeCare = new QuestionObject("What is preventative care?");
const whatDoesPreventativeCareMean = new QuestionObject("What does preventative care mean?");
export const preventiveCareQuestionsArray = [
    whatIsPreventiveCare,
    whatDoesPreventiveCareMean,
    whatIsPreventativeCare,
    whatDoesPreventativeCareMean
];

//FAQ 61-69

const whatIsAPrimaryCareProvider = new QuestionObject("What is a primary care provider?");
const whatIsPrimaryCareProvider = new QuestionObject("What is primary care provider?");
const whatDoesPrimaryCareProviderMean = new QuestionObject("What does primary care provider mean?");
const whatIsAPcp = new QuestionObject("What is a PCP?");
const whatIsPcp = new QuestionObject("What is PCP?");
const whatDoesPcpMean = new QuestionObject("What does PCP mean?");
const whatDoesPcpStandFor = new QuestionObject("What does PCP stand for?");
export const primaryCareProviderQuestionsArray = [
    whatIsAPrimaryCareProvider,
    whatIsPrimaryCareProvider,
    whatDoesPrimaryCareProviderMean,
    whatIsAPcp,
    whatIsPcp,
    whatDoesPcpMean,
    whatDoesPcpStandFor
];

const whatIsPrivateFree_For_Service = new QuestionObject("What is Private Fee-for-Service?");
const whatDoesPrivateFree_For_ServiceMean = new QuestionObject("What does Private Fee-for-Service mean?");
const whatDoesPffsMean = new QuestionObject("What does PFFS mean?");
const whatIsPffs = new QuestionObject("What is PFFS?");
const whatDoesPffsStandFor = new QuestionObject("What does PFFS stand for?");
export const pffsQuestionsArray = [
    whatIsPrivateFree_For_Service,
    whatDoesPrivateFree_For_ServiceMean,
    whatDoesPffsMean,
    whatIsPffs,
    whatDoesPffsStandFor
];

const whatIsAPriorAuthorization = new QuestionObject("What is a prior authorization?");
const whatIsAPriorAuth = new QuestionObject("What is a prior auth?");
const whatIsPriorAuthorization = new QuestionObject("What is prior authorization?");
const whatIsPriorAuth = new QuestionObject("What is prior auth?");
const whatDoesPriorAuthorizationMean = new QuestionObject("What does prior authorization mean?");
const whatDoesPriorAuthMean = new QuestionObject("What does prior auth mean?");
export const priorAuthorizationQuestionsArray = [
    whatIsAPriorAuthorization,
    whatIsAPriorAuth,
    whatIsPriorAuthorization,
    whatIsPriorAuth,
    whatDoesPriorAuthorizationMean,
    whatDoesPriorAuthMean
];

const whatIsAProvider = new QuestionObject("What is a provider?");
const whatIsProvider = new QuestionObject("What is provider?");
const whatDoesProviderMean = new QuestionObject("What does provider mean?");
export const providerQuestionsArray = [
    whatIsAProvider,
    whatIsProvider,
    whatDoesProviderMean
];

const whatIsAQuantityLimit = new QuestionObject("What is a quantity limit?");
const whatIsQuantityLimit = new QuestionObject("What is quantity limit?");
const whatDoesQuantityLimitMean = new QuestionObject("What does quantity limit mean?");
export const quantityLimitQuestionsArray = [
    whatIsAQuantityLimit,
    whatIsQuantityLimit,
    whatDoesQuantityLimitMean
];

const whatIsARider = new QuestionObject("What is a rider?");
const whatIsRider = new QuestionObject("What is rider?");
const whatDoesRiderMean = new QuestionObject("What does rider mean?");
export const riderQuestionsArray = [
    whatIsARider,
    whatIsRider,
    whatDoesRiderMean
];

const whatIsReimbursement = new QuestionObject("What is reimbursement?");
const whatDoesReimbursementMean = new QuestionObject("What does reimbursement mean?");
export const reimbursementQuestionsArray = [
    whatIsReimbursement,
    whatDoesReimbursementMean
];

const whatIsStepTherapy = new QuestionObject("What is step therapy?");
const whatDoesStepTherapyMean = new QuestionObject("What does step therapy mean?");
export const stepTherapyQuestionsArray = [
    whatIsStepTherapy,
    whatDoesStepTherapyMean
];

const whatIsASpecialist = new QuestionObject("What is a specialist?");
const whatIsSpecialist = new QuestionObject("What is specialist?");
const whatDoesSpecialistMean = new QuestionObject("What does specialist mean?");
export const specialistQuestionsArray = [
    whatIsASpecialist,
    whatIsSpecialist,
    whatDoesSpecialistMean
];

