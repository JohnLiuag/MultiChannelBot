function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

export const isMyCoverageActive = new QuestionObject("Is my coverage active?");
const doIhaveCoverage = new QuestionObject("Do I have coverage?");
const doIhaveActiveCoverage = new QuestionObject("Do I have active coverage?");
const isMyPlanActive = new QuestionObject("Is my coverage active?");
const amICovered = new QuestionObject("Am I covered?");
const whenDoesMyCoverageStart = new QuestionObject("When does my coverage start?");
const whatIsMyStartDate = new QuestionObject("What is my start date?");
const whenDoesMyPlanStart = new QuestionObject("When does my plan start?");
const whenDoesCoverageStart = new QuestionObject("When does coverage start?");
const whenDoesInsuranceStart = new QuestionObject("When does insurance start?");
const whenIsMyCoverageEffective = new QuestionObject("When is my coverage effective?");
const whatIsMyEffectiveDate = new QuestionObject("What is my effective date?");
const whenIsMyEffectiveDate = new QuestionObject("When is my effective date?");
const whenIsMyStartDate = new QuestionObject("When is my start date?");
const isMyPlanTerminated = new QuestionObject("Is my plan terminated?");
const isMyPlanInactive = new QuestionObject("Is my plan inactive?");
const isMyCoverageTerminated = new QuestionObject("Is my coverage terminated?");
const doIHaveInsurance = new QuestionObject("Do I have insurance?");
const isMyInsuranceActive = new QuestionObject("Is my insurance active?");
const whenDoesMyInsuranceStart = new QuestionObject("When does my insurance start?");
const whenWillMyPlanStart = new QuestionObject("When will my plan start?");
const whenWillMyCoverageStart = new QuestionObject("When will my coverage start?");
const whenWillMyCoverageBegin = new QuestionObject("When will my coverage begin?");
const amIInsured = new QuestionObject("Am I insured?");
const whyIsMyCoverageTerminated = new QuestionObject("Why is my coverage terminated?");
const whyIsMyPlanTerminated = new QuestionObject("Why is my plan terminated?");
const whyIsntMyCoverageActive = new QuestionObject("Why isn't my coverage active?");
const whenDidMyCoverageEnd = new QuestionObject("When did my coverage end?");
const whenDidMyInsuranceEnd = new QuestionObject("When did my insurance end?");
const whenDidMyPlanEnd = new QuestionObject("When did my plan end?");
const whenDidMyCoverageTerminate = new QuestionObject("When did my coverage terminate?");
const whenWasMyCoverageTerminated = new QuestionObject("When was my coverage terminated?");
const whenDidMyInsuranceTerminate = new QuestionObject("When did my insurance terminate?");
const whenWasMyInsuranceTerminated = new QuestionObject("When was my insurance terminated?");
const whenDidMyPlanTerminate = new QuestionObject("When did my plan terminate?");
const whenWasMyPlanTerminated = new QuestionObject("When was my plan terminated?");
const coverageIsGoodTill = new QuestionObject("Coverage is good till?");
const coveragePeriod = new QuestionObject("Coverage period");
const howLongDoIHaveCoverageFor = new QuestionObject("How long do I have coverage for?");
const myCoverage = new QuestionObject("My coverage");
const myMedicalCoverage = new QuestionObject("My medical coverage");
const doIHaveActiveMedicalCoverage = new QuestionObject("Do I have active medical coverage?");
const doIHaveMedicalCoverage = new QuestionObject("Do I have medical coverage?");
const myMedical = new QuestionObject("My medical");

export const generalEligibilityQuestionsArray = [
    isMyCoverageActive,
    doIhaveCoverage,
    doIhaveActiveCoverage,
    isMyPlanActive,
    amICovered,
    whenDoesMyCoverageStart,
    whatIsMyStartDate,
    whenDoesMyPlanStart,
    whenDoesCoverageStart,
    whenDoesInsuranceStart,
    whenIsMyCoverageEffective,
    whatIsMyEffectiveDate,
    whenIsMyEffectiveDate,
    whenIsMyStartDate,
    isMyPlanTerminated,
    isMyPlanInactive,
    isMyCoverageTerminated,
    doIHaveInsurance,
    isMyInsuranceActive,
    whenDoesMyInsuranceStart,
    whenWillMyPlanStart,
    whenWillMyCoverageStart,
    whenWillMyCoverageBegin,
    amIInsured,
    whyIsMyCoverageTerminated,
    whyIsMyPlanTerminated,
    whyIsntMyCoverageActive,
    whenDidMyCoverageEnd,
    whenDidMyInsuranceEnd,
    whenDidMyPlanEnd,
    whenDidMyCoverageTerminate,
    whenWasMyCoverageTerminated,
    whenDidMyInsuranceTerminate,
    whenWasMyInsuranceTerminated,
    whenDidMyPlanTerminate,
    whenWasMyPlanTerminated,
    coverageIsGoodTill,
    coveragePeriod,
    howLongDoIHaveCoverageFor,
    myCoverage,
    myMedicalCoverage,
    doIHaveActiveMedicalCoverage,
    doIHaveMedicalCoverage,
    myMedical
];

const isMyDentalCoverageActive = new QuestionObject("Is my dental coverage active?");
const doIhaveDentalCoverage = new QuestionObject("Do I have dental coverage?");
const doIhaveDentalInsurance = new QuestionObject("Do I have dental insurance?");
const isMyDentalInsuranceActive = new QuestionObject("Is my dental insurance active?");
const amIDentalActive = new QuestionObject("Is my dental active?");
const whenDidMyDentalCoverageStart = new QuestionObject("When did my dental coverage start?");
const whenDidMyDentalPlanStart = new QuestionObject("When did my dental plan start?");
const whenDidMyDentalInsuranceStart = new QuestionObject("When did my dental insurance start?");
const whatsMyDentalCoverage = new QuestionObject("What's my dental coverage?");
const amICoveredForDental = new QuestionObject("Am I covered for dental?");
const myDentalCoverage = new QuestionObject("My dental coverage");
const myDental = new QuestionObject("My dental");

export const dentalEligibilityQuestionsArray = [
    isMyDentalCoverageActive,
    doIhaveDentalCoverage,
    doIhaveDentalInsurance,
    isMyDentalInsuranceActive,
    amIDentalActive,
    whenDidMyDentalCoverageStart,
    whenDidMyDentalPlanStart,
    whenDidMyDentalInsuranceStart,
    whatsMyDentalCoverage,
    amICoveredForDental,
    myDentalCoverage,
    myDental
];

const isMyVisionCoverageActive = new QuestionObject("Is my vision coverage active?");
const doIhaveVisionCoverage = new QuestionObject("Do I have vision coverage?");
const doIhaveVisionInsurance = new QuestionObject("Do I have vision insurance?");
const isMyVisionInsuranceActive = new QuestionObject("Is my vision insurance active?");
const amIVisionActive = new QuestionObject("Is my vision active?");
const whenDidMyVisionCoverageStart = new QuestionObject("When did my vision coverage start?");
const whenDidMyVisionPlanStart = new QuestionObject("When did my vision plan start?");
const whenDidMyVisionInsuranceStart = new QuestionObject("When did my vision insurance start?");
const whatsMyVisionCoverage = new QuestionObject("What's my vision coverage?");
const amICoveredForVision = new QuestionObject("Am I covered for vision?");
const myVisionCoverage = new QuestionObject("My vision coverage");
const visionEligibility = new QuestionObject("Vision eligibility");
const myVision = new QuestionObject("My vision");
const doIHaveVisionBenefits = new QuestionObject("Do I have vision benefits?");
const doIHaveAVisionDiscount = new QuestionObject("Do I have a vision discount?");
const doIGetADiscountForAVisionExam = new QuestionObject("Do I get a discount for a vision exam?");
const doIGetADiscountForAnEyeExam = new QuestionObject("Do I get a discount for an eye exam?");
const doIGetADiscountForGlasses = new QuestionObject("Do I get a discount for glasses?");
const doIGetADiscountForContacts = new QuestionObject("Do I get a discount for contacts?");
const areThereAnyDiscountsForVisionExams = new QuestionObject("Are there any discounts for vision exams?");
const areThereAnyDiscountsForEyeExams = new QuestionObject("Are there any discounts for eye exams?");
const areThereAnyDiscountsForGlasses = new QuestionObject("Are there any discounts for glasses?");
const areThereAnyDiscountsForContacts = new QuestionObject("Are there any discounts for contacts?");
const whatKindOfVisionCoverageDoIHave = new QuestionObject("What kind of vision coverage do I have?");
const whatKindOfVisionBenefitsDoIHave = new QuestionObject("What kind of vision benefits do I have?");

export const visionEligibilityQuestionsArray = [
    isMyVisionCoverageActive,
    doIhaveVisionCoverage,
    doIhaveVisionInsurance,
    isMyVisionInsuranceActive,
    amIVisionActive,
    whenDidMyVisionCoverageStart,
    whenDidMyVisionPlanStart,
    whenDidMyVisionInsuranceStart,
    whatsMyVisionCoverage,
    amICoveredForVision,
    myVisionCoverage,
    visionEligibility,
    myVision,
    doIHaveVisionBenefits,
    doIHaveAVisionDiscount,
    doIGetADiscountForAVisionExam,
    doIGetADiscountForAnEyeExam,
    doIGetADiscountForGlasses,
    doIGetADiscountForContacts,
    areThereAnyDiscountsForVisionExams,
    areThereAnyDiscountsForEyeExams,
    areThereAnyDiscountsForGlasses,
    areThereAnyDiscountsForContacts,
    whatKindOfVisionCoverageDoIHave,
    whatKindOfVisionBenefitsDoIHave
];

const doIHaveWellnessCoverage = new QuestionObject("Do I have wellness coverage?");
const doIHaveAWellnessPlan = new QuestionObject("Do I have a wellness plan?");
const whenDidMyWellnessPlanStart = new QuestionObject("When did my wellness plan start?");
const amIOnAWellnessPlan = new QuestionObject("Am I on a wellness plan?");
const doesMyPlanIncludeWellness = new QuestionObject("Does my plan include wellness?");
const whatWellnessCoverageDoIHave = new QuestionObject("What wellness coverage do I have?");
const doIHaveWellnessBenefits = new QuestionObject("Do I have wellness benefits?");
const isMyWellnessPlanActive = new QuestionObject("Is my wellness plan active?");
const hasMyWellnessCoverageStarted = new QuestionObject("Has my wellness coverage started?");
const wellnessCoverage = new QuestionObject("Wellness coverage");
const wellness = new QuestionObject("Wellness");
const wellnessOnly = new QuestionObject("Wellness only");
const wellnessBenefits = new QuestionObject("Wellness benefits");
const wellnessPlanBenefits = new QuestionObject("Wellness plan benefits");
const wellnessInformation = new QuestionObject("Wellness information");
const wellnessEligibility = new QuestionObject("Wellness eligibility");

export const wellnessEligibilityQuestionsArray = [
    doIHaveWellnessCoverage,
    doIHaveAWellnessPlan,
    whenDidMyWellnessPlanStart,
    amIOnAWellnessPlan,
    doesMyPlanIncludeWellness,
    whatWellnessCoverageDoIHave,
    doIHaveWellnessBenefits,
    isMyWellnessPlanActive,
    hasMyWellnessCoverageStarted,
    wellnessCoverage,
    wellness,
    wellnessOnly,
    wellnessBenefits,
    wellnessPlanBenefits,
    wellnessInformation,
    wellnessEligibility
];
