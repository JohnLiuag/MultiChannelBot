function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

const whoIsCoveredOnMyPolicy = new QuestionObject("Who is covered on my policy?");
const whoIsOnMyPolicy = new QuestionObject("Who is on my policy?");
const whoIsOnMyPlan = new QuestionObject("Who is on my plan?");
const whoIsInsuredOnMyPlan = new QuestionObject("Who is insured on my plan?");
const areMyDependentsCovered = new QuestionObject("Are my dependents covered?");
const areMyKidsCovered = new QuestionObject("Are my kids covered?");
const areMyChildrenCovered = new QuestionObject("Are my children covered?");
const isMyHusbandCovered = new QuestionObject("Is my husband covered?");
const isMyWifeCovered = new QuestionObject("Is my wife covered?");
const isMyPartnerCovered = new QuestionObject("Is my partner covered?");
const isMySonCovered = new QuestionObject("Is my son covered?");
const isMyDaughterCovered = new QuestionObject("Is my daughter covered?");
const areMyDependentsOnMyPlan = new QuestionObject("Are my dependents on my plan?");
const areMyKidsOnMyPlan = new QuestionObject("Are my kids on my plan?");
const areMyChildrenOnMyPlan = new QuestionObject("Are my children on my plan?");
const isMyHusbandOnMyPlan = new QuestionObject("Is my husband on my plan?");
const isMyWifeOnMyPlan = new QuestionObject("Is my wife on my plan?");
const isMyPartnerOnMyPlan = new QuestionObject("Is my partner on my plan?");
const isMySonOnMyPlan = new QuestionObject("Is my son on my plan?");
const isMyDaughterOnMyPlan = new QuestionObject("Is my daughter on my plan?");
const areMyDependentsInsured = new QuestionObject("Are my dependents insured?");
const areMyKidsInsured = new QuestionObject("Are my kids insured?");
const areMyChildrenInsured = new QuestionObject("Are my children insured?");
const isMyHusbandInsured = new QuestionObject("Is my husband insured?");
const isMyWifeInsured = new QuestionObject("Is my wife insured?");
const isMyPartnerInsured = new QuestionObject("Is my partner insured?");
const isMySonInsured = new QuestionObject("Is my son insured?");
const isMydaughterInsured = new QuestionObject("Is my daughter insured?");
const isMyStepDaughterCovered = new QuestionObject("Is my step-daughter covered?");
const isMyStepSonCovered = new QuestionObject("Is my step-son covered?");
const isMyStepChildCovered = new QuestionObject("Is my step-child covered?");
const AreMyStepDaughtersCovered = new QuestionObject("Are my step-daughters covered?");
const AreMyStepSonsCovered = new QuestionObject("Are my step-sons covered?");
const AreMyStepChildrenCovered = new QuestionObject("Are my step-children covered?");
const AreMyStepKidsCovered = new QuestionObject("Are my step-kids covered?");
const IsMyStepKidCovered = new QuestionObject("Is my step-kid covered?");
const isMyBabyCovered = new QuestionObject("Is my baby covered?");
const isMyStepDaughterOnMyPlan = new QuestionObject("Is my step-daughter on my plan?");
const isMyStepSonOnMyPlan = new QuestionObject("Is my step-son on my plan?");
const isMyStepChildOnMyPlan = new QuestionObject("Is my step-child on my plan?");
const AreMyStepDaughtersOnMyPlan = new QuestionObject("Are my step-daughters on my plan?");
const AreMyStepSonsOnMyPlan = new QuestionObject("Are my step-sons on my plan?");
const AreMyStepChildrenOnMyPlan = new QuestionObject("Are my step-children on my plan?");
const AreMyStepKidsOnMyPlan = new QuestionObject("Are my step-kids on my plan?");
const isMyStepKidOnMyPlan = new QuestionObject("Is my step-kid on my plan?");
const isMyBabyOnMyPlan = new QuestionObject("Is my baby on my plan?");

export const generalDependentEligibilityQuestionsArray = [
    whoIsCoveredOnMyPolicy,
    whoIsOnMyPolicy,
    whoIsOnMyPlan,
    whoIsInsuredOnMyPlan,
    areMyDependentsCovered,
    areMyKidsCovered,
    areMyChildrenCovered,
    isMyHusbandCovered,
    isMyWifeCovered,
    isMyPartnerCovered,
    isMySonCovered,
    isMyDaughterCovered,
    areMyDependentsOnMyPlan,
    areMyKidsOnMyPlan,
    areMyChildrenOnMyPlan,
    isMyHusbandOnMyPlan,
    isMyWifeOnMyPlan,
    isMyPartnerOnMyPlan,
    isMySonOnMyPlan,
    isMyDaughterOnMyPlan,
    areMyDependentsInsured,
    areMyKidsInsured,
    areMyChildrenInsured,
    isMyHusbandInsured,
    isMyWifeInsured,
    isMyPartnerInsured,
    isMySonInsured,
    isMydaughterInsured,
    isMyStepDaughterCovered,
    isMyStepSonCovered,
    isMyStepChildCovered,
    AreMyStepDaughtersCovered,
    AreMyStepSonsCovered,
    AreMyStepChildrenCovered,
    AreMyStepKidsCovered,
    IsMyStepKidCovered,
    isMyBabyCovered,
    isMyStepDaughterOnMyPlan,
    isMyStepSonOnMyPlan,
    isMyStepChildOnMyPlan,
    AreMyStepDaughtersOnMyPlan,
    AreMyStepSonsOnMyPlan,
    AreMyStepChildrenOnMyPlan,
    AreMyStepKidsOnMyPlan,
    isMyStepKidOnMyPlan,
    isMyBabyOnMyPlan,
];

const whoIsCoveredOnMyDentalPolicy = new QuestionObject("Who is covered on dental policy?");
const whoIsOnMyDentalPolicy = new QuestionObject("Who is on my dental policy?");
const whoIsOnMyDentalPlan = new QuestionObject("Who is on my dental plan?");
const whoIsInsuredOnMyDentalPlan = new QuestionObject("Who is insured on my dental plan?");
const areMyDependentsCoveredOnMyDentalPlan = new QuestionObject("Are my dependents covered on my dental plan?");
const areMyKidsCoveredOnMyDentalPlan = new QuestionObject("Are my kids covered on my dental plan?");
const areMyChildrenCoveredOnMyDentalPlan = new QuestionObject("Are my children covered on my dental plan?");
const areMyDependentsOnMyDentalPlan = new QuestionObject("Are my dependents on my dental plan?");
const isMyHusbandOnMyDentalPlan = new QuestionObject("Is my husband on my dental plan?");
const isMyWifeOnMyDentalPlan = new QuestionObject("Is my wife on my dental plan?");
const isMyPartnerOnMyDentalPlan = new QuestionObject("Is my partner on my dental plan?");
const isMySpouseOnMyDentalPlan = new QuestionObject("Is my spouse on my dental plan?");
const isMySonCoveredOnMyDentalPlan = new QuestionObject("Is my son on my dental plan?");
const isMyDaughterCoveredOnMyDentalPlan = new QuestionObject("Is my daughter on my dental plan?");
const doMyDependentsHaveDentalInsurance = new QuestionObject("Do my dependents have dental insurance?");
const doMyKidsHaveDentalInsurance = new QuestionObject("Do my kids have dental insurance?");
const doMyChildrenHaveDentalInsurance = new QuestionObject("Do my children have dental insurance?");
const doesMyHusbandHaveDentalInsurance = new QuestionObject("Does my husband have dental insurance?");
const doesMyWifeHaveDentalInsurance = new QuestionObject("Does my wife have dental insurance?");
const doesMyPartnerHaveDentalInsurance = new QuestionObject("Does my partner have dental insurance?");
const doesMySonHaveDentalInsurance = new QuestionObject("Does my son have dental insurance?");
const areMyDependentsInsuredUnderDentalPlan = new QuestionObject("Are my dependents insured under dental plan?");
const areMyKidsInsuredUnderDentalPlan = new QuestionObject("Are my kids insured under dental plan?");
const areMyChildrenInsuredUnderDentalPlan = new QuestionObject("Are my children insured under dental plan?");
const isMyHusbandInsuredUnderDentalPlan = new QuestionObject("Is my husband insured under dental plan?");
const isMyWifeInsuredUnderDentalPlan = new QuestionObject("Is my wife insured under dental plan?");
const isMyPartnerInsuredUnderDentalPlan = new QuestionObject("Is my partner insured under dental plan?");
const isMySonInsuredUnderDentalPlan = new QuestionObject("Is my son insured under dental plan?");
const isMydaughterInsuredUnderDentalPlan = new QuestionObject("Is my daughter insured under dental plan?");

export const dentalDependentEligibilityQuestionsArray = [
    whoIsCoveredOnMyDentalPolicy,
    whoIsOnMyDentalPolicy,
    whoIsOnMyDentalPlan,
    whoIsInsuredOnMyDentalPlan,
    areMyDependentsCoveredOnMyDentalPlan,
    areMyKidsCoveredOnMyDentalPlan,
    areMyChildrenCoveredOnMyDentalPlan,
    areMyDependentsOnMyDentalPlan,
    isMyHusbandOnMyDentalPlan,
    isMyWifeOnMyDentalPlan,
    isMyPartnerOnMyDentalPlan,
    isMySpouseOnMyDentalPlan,
    isMySonCoveredOnMyDentalPlan,
    isMyDaughterCoveredOnMyDentalPlan,
    doMyDependentsHaveDentalInsurance,
    doMyKidsHaveDentalInsurance,
    doMyChildrenHaveDentalInsurance,
    doesMyHusbandHaveDentalInsurance,
    doesMyWifeHaveDentalInsurance,
    doesMyPartnerHaveDentalInsurance,
    doesMySonHaveDentalInsurance,
    areMyDependentsInsuredUnderDentalPlan,
    areMyKidsInsuredUnderDentalPlan,
    areMyChildrenInsuredUnderDentalPlan,
    isMyHusbandInsuredUnderDentalPlan,
    isMyWifeInsuredUnderDentalPlan,
    isMyPartnerInsuredUnderDentalPlan,
    isMySonInsuredUnderDentalPlan,
    isMydaughterInsuredUnderDentalPlan,
];

const whoIsCoveredOnMyVisionPolicy = new QuestionObject("Who is covered on vision policy?");
const whoIsOnMyVisionPolicy = new QuestionObject("Who is on my vision policy?");
const whoIsOnMyVisionPlan = new QuestionObject("Who is on my vision plan?");
const whoIsInsuredOnMyVisionPlan = new QuestionObject("Who is insured on my vision plan?");
const areMyDependentsCoveredOnMyVisionPlan = new QuestionObject("Are my dependents covered on my vision plan?");
const areMyKidsCoveredOnMyVisionPlan = new QuestionObject("Are my kids covered on my vision plan?");
const areMyChildrenCoveredOnMyVisionPlan = new QuestionObject("Are my children covered on my vision plan?");
const areMyDependentsOnMyVisionPlan = new QuestionObject("Are my dependents on my vision plan?");
const isMyHusbandOnMyVisionPlan = new QuestionObject("Is my husband on my vision plan?");
const isMyWifeOnMyVisionPlan = new QuestionObject("Is my wife on my vision plan?");
const isMyPartnerOnMyVisionPlan = new QuestionObject("Is my partner on my vision plan?");
const isMySpouseOnMyVisionPlan = new QuestionObject("Is my spouse on my vision plan?");
const isMySonCoveredOnMyVisionPlan = new QuestionObject("Is my son on my vision plan?");
const isMyDaughterCoveredOnMyVisionPlan = new QuestionObject("Is my daughter on my vision plan?");
const doMyDependentsHaveVisionInsurance = new QuestionObject("Do my dependents have vision insurance?");
const doMyKidsHaveVisionInsurance = new QuestionObject("Do my kids have vision insurance?");
const doMyChildrenHaveVisionInsurance = new QuestionObject("Do my children have vision insurance?");
const doesMyHusbandHaveVisionInsurance = new QuestionObject("Does my husband have vision insurance?");
const doesMyWifeHaveVisionInsurance = new QuestionObject("Does my wife have vision insurance?");
const doesMyPartnerHaveVisionInsurance = new QuestionObject("Does my partner have vision insurance?");
const doesMySonHaveVisionInsurance = new QuestionObject("Does my son have vision insurance?");
const areMyDependentsInsuredUnderVisionPlan = new QuestionObject("Are my dependents insured under vision plan?");
const areMyKidsInsuredUnderVisionPlan = new QuestionObject("Are my kids insured under vision plan?");
const areMyChildrenInsuredUnderVisionPlan = new QuestionObject("Are my children insured under vision plan?");
const isMyHusbandInsuredUnderVisionPlan = new QuestionObject("Is my husband insured under vision plan?");
const isMyWifeInsuredUnderVisionPlan = new QuestionObject("Is my wife insured under vision plan?");
const isMyPartnerInsuredUnderVisionPlan = new QuestionObject("Is my partner insured under vision plan?");
const isMySonInsuredUnderVisionPlan = new QuestionObject("Is my son insured under vision plan?");
const isMydaughterInsuredUnderVisionPlan = new QuestionObject("Is my daughter insured under vision plan?");

export const visionDependentEligibilityQuestionsArray = [
    whoIsCoveredOnMyVisionPolicy,
    whoIsOnMyVisionPolicy,
    whoIsOnMyVisionPlan,
    whoIsInsuredOnMyVisionPlan,
    areMyDependentsCoveredOnMyVisionPlan,
    areMyKidsCoveredOnMyVisionPlan,
    areMyChildrenCoveredOnMyVisionPlan,
    areMyDependentsOnMyVisionPlan,
    isMyHusbandOnMyVisionPlan,
    isMyWifeOnMyVisionPlan,
    isMyPartnerOnMyVisionPlan,
    isMySpouseOnMyVisionPlan,
    isMySonCoveredOnMyVisionPlan,
    isMyDaughterCoveredOnMyVisionPlan,
    doMyDependentsHaveVisionInsurance,
    doMyKidsHaveVisionInsurance,
    doMyChildrenHaveVisionInsurance,
    doesMyHusbandHaveVisionInsurance,
    doesMyWifeHaveVisionInsurance,
    doesMyPartnerHaveVisionInsurance,
    doesMySonHaveVisionInsurance,
    areMyDependentsInsuredUnderVisionPlan,
    areMyKidsInsuredUnderVisionPlan,
    areMyChildrenInsuredUnderVisionPlan,
    isMyHusbandInsuredUnderVisionPlan,
    isMyWifeInsuredUnderVisionPlan,
    isMyPartnerInsuredUnderVisionPlan,
    isMySonInsuredUnderVisionPlan,
    isMydaughterInsuredUnderVisionPlan,
];
