function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

const whereAreMyForms = new QuestionObject("Where are my forms?");
const whereAreForms = new QuestionObject("Where are forms?");
const whereCanIFindForms = new QuestionObject("Where can I find forms?");
const canYouShowMeForms = new QuestionObject("Can you show me forms?");
const canYouTakeMeToForms = new QuestionObject("Can you take me to forms?");
const whatFormsDoIHave = new QuestionObject("What forms do I have?");
const iNeedAForm = new QuestionObject("I need a form");
const iNeedForms = new QuestionObject("I need forms");
const iNeedCommonForms = new QuestionObject("I need common forms");
const iNeedCommonlyUsedForms = new QuestionObject("I need commonly used forms");
const iNeedFrequentlyUsedForms = new QuestionObject("I need frequently used forms");
const whereAreCommonlyUsedForms = new QuestionObject("Where are commonly used forms?");
const whereAreFrequentlyUsedForms = new QuestionObject("Where are frequently used forms?");
const whereAreCommonForms = new QuestionObject("Where are common forms?");
const whatFormsAreAvailable = new QuestionObject("What forms are available?");
const whatFormAreOnMyAccount = new QuestionObject("What forms are on my account?");
const iNeedToFillOutAForm = new QuestionObject("I need to fill out a form");
const fillOutForm = new QuestionObject("Fill out form");
const generalForms = new QuestionObject("General forms");
const showMeForms = new QuestionObject("Show me forms");
const showMeMyForms = new QuestionObject("Show me my forms");
const iNeedToCompleteAForm = new QuestionObject("I need to complete a form");
const iNeedToSubmitAForm = new QuestionObject("I need to submit a form");

export const generalFormQuestionsArray = [
    whereAreMyForms,
    whereAreForms,
    whereCanIFindForms,
    canYouShowMeForms,
    canYouTakeMeToForms,
    whatFormsDoIHave,
    iNeedAForm,
    iNeedForms,
    iNeedCommonForms,
    iNeedCommonlyUsedForms,
    iNeedFrequentlyUsedForms,
    whereAreCommonlyUsedForms,
    whereAreFrequentlyUsedForms,
    whereAreCommonForms,
    whatFormsAreAvailable,
    whatFormAreOnMyAccount,
    iNeedToFillOutAForm,
    fillOutForm,
    generalForms,
    showMeForms,
    showMeMyForms,
    iNeedToCompleteAForm,
    iNeedToSubmitAForm,
];

const fluShotReimburesementForm = new QuestionObject("Flu Shot Reimbursement Form");
const fluShotForm = new QuestionObject("Flu Shot Form");
const howCanIGetReimbrsedForMyFluShot = new QuestionObject("How can I get reimbursed for my flu shot?");
const canIBeReimbursedForFluShot = new QuestionObject("Can I be reimbursed for flu shot?");
const fluShotReimburesement = new QuestionObject("Flu Shot Reimbursement");
const influenzaShot = new QuestionObject("Influenza shot");
const influenzaVaccine = new QuestionObject("Influenza vaccine");
const reimbursementForFluShot = new QuestionObject("Reimbursement for flu shot");
const howDoISubmitMyFluVaccineReceiptForReimberesement = new QuestionObject("How do I submit my flu vaccine receipt for reimbursement?");

export const fluFormQuestionsArray = [
    fluShotReimburesementForm,
    fluShotForm,
    howCanIGetReimbrsedForMyFluShot,
    canIBeReimbursedForFluShot,
    fluShotReimburesement,
    influenzaShot,
    influenzaVaccine,
    reimbursementForFluShot,
    howDoISubmitMyFluVaccineReceiptForReimberesement
];

const hippaDesigneeForm = new QuestionObject("HIPAA Designee Form");
const personalRepresentativeDesignationForm = new QuestionObject("Personal Representative Designation Form");
const canIAddAPersonalRepresentativeToMyAccount = new QuestionObject("Can I add a personal representative to my account?");
const canIDesignateARepresentative = new QuestionObject("Can I designate a representative?");
const howDoIAddAPersonalRepresentative = new QuestionObject("How do I add a personal representative?");
const hippaDesignation = new QuestionObject("HIPAA Designation");
const hippaForm = new QuestionObject("HIPAA Form");
const prdForm = new QuestionObject("PRD Form");
const whereCanIFindPrdForm = new QuestionObject("Where can I find PRD form?");
const whereCanIFindPersonalRepresentativeForm = new QuestionObject("Where can I find personal representative form?");
const whereCanIFindHippaForm = new QuestionObject("Where can I find HIPAA form?");

export const rdrFormQuestionsArray = [
    hippaDesigneeForm,
    personalRepresentativeDesignationForm,
    canIAddAPersonalRepresentativeToMyAccount,
    canIDesignateARepresentative,
    howDoIAddAPersonalRepresentative,
    hippaDesignation,
    hippaForm,
    prdForm,
    whereCanIFindPrdForm,
    whereCanIFindPersonalRepresentativeForm,
    whereCanIFindHippaForm
];

const dentalReimburesementForm = new QuestionObject("Dental reimbursement form");
const dentalClaimForm = new QuestionObject("Dental claim form");
const dentalAdvantageReimbursementForm = new QuestionObject("Dental advantage reimbursement form");
const dentalAdvantageClaimForm = new QuestionObject("Dental advantage claim form");
const oonDentalForm = new QuestionObject("OON dental form");
const outOfNetworkDentalForm = new QuestionObject("Out of network dental form");
const outOfNetworkDentalClaimForm = new QuestionObject("Out of network dental claim form");
const outOfNetworkDentalReimbursementForm = new QuestionObject("Out of network dental reimbursement form");
const outOfNetworkDentalClaimReimbursementForm = new QuestionObject("Out of network dental claim reimbursement form");
const oonDentalClaimForm = new QuestionObject("OON dental claim form");
const oonDentalClaimReimbursementForm = new QuestionObject("OON dental claim reimbursement form");
const oonDentalReimbursementForm = new QuestionObject("OON dental reimbursement form");
const whereCanIFindTheDentalForm = new QuestionObject("Where can I find the dental form?");
const whereCanIFindTheDentalClaimForm = new QuestionObject("Where can I find the dental claim form?");
const whereCanIFindTheDentalReimbursementForm = new QuestionObject("Where can I find the dental reimbursement form?");
const whereCanIFindTheDentalClaimReimbursementForm = new QuestionObject("Where can I find the dental claim reimbursement form?");
const showMeDentalForm = new QuestionObject("Show me dental form");
const showDentalForm = new QuestionObject("Show dental form");
const showDentalClaimForm = new QuestionObject("Show dental claim form");
const showDentalReimbursementForm = new QuestionObject("Show dental reimbursement form");
const showDentalClaimReimbursementForm = new QuestionObject("Show dental claim reimbursement form");
const howCanISubmitForReimbursedForDentalClaim = new QuestionObject("How can I submit for reimbursement for dental claim?");
const howCanIGetReimbursedForDentalClaim = new QuestionObject("How can I get reimbursed for dental claim?");
const canIGetReimbursedForDentalClaim = new QuestionObject("Can I get reimbursed for dental claim?");
const takeMeToTheDentalForm = new QuestionObject("Take me to the dental form");
const takeMeToTheDentalReimbursementForm = new QuestionObject("Take me to the dental reimbursement form");
const takeMeToTheDentalClaimForm = new QuestionObject("Take me to the dental claim form");
const takeMeToTheDentalClaimReimbursementForm = new QuestionObject("Take me to the dental claim reimbursement form");

export const dentalFormQuestionsArray = [
    dentalReimburesementForm,
    dentalClaimForm,
    dentalAdvantageReimbursementForm,
    dentalAdvantageClaimForm,
    oonDentalForm,
    outOfNetworkDentalForm,
    outOfNetworkDentalClaimForm,
    outOfNetworkDentalReimbursementForm,
    outOfNetworkDentalClaimReimbursementForm,
    oonDentalClaimForm,
    oonDentalClaimReimbursementForm,
    oonDentalReimbursementForm,
    whereCanIFindTheDentalForm,
    whereCanIFindTheDentalClaimForm,
    whereCanIFindTheDentalReimbursementForm,
    whereCanIFindTheDentalClaimReimbursementForm,
    showMeDentalForm,
    showDentalForm,
    showDentalClaimForm,
    showDentalReimbursementForm,
    showDentalClaimReimbursementForm,
    howCanISubmitForReimbursedForDentalClaim,
    howCanIGetReimbursedForDentalClaim,
    canIGetReimbursedForDentalClaim,
    takeMeToTheDentalForm,
    takeMeToTheDentalReimbursementForm,
    takeMeToTheDentalClaimForm,
    takeMeToTheDentalClaimReimbursementForm
];

const visionReimburesementForm = new QuestionObject("Vision reimbursement form");
const visionClaimForm = new QuestionObject("Vision claim form");
const visionAdvantageReimbursementForm = new QuestionObject("Vision advantage reimbursement form");
const visionAdvantageClaimForm = new QuestionObject("Vision advantage claim form");
const oonVisionForm = new QuestionObject("OON vision form");
const outOfNetworkVisionForm = new QuestionObject("Out of network vision form");
const outOfNetworkVisionClaimForm = new QuestionObject("Out of network vision claim form");
const outOfNetworkVisionReimbursementForm = new QuestionObject("Out of network vision reimbursement form");
const outOfNetworkVisionClaimReimbursementForm = new QuestionObject("Out of network vision claim reimbursement form");
const oonVisionClaimForm = new QuestionObject("OON vision claim form");
const oonVisionClaimReimbursementForm = new QuestionObject("OON vision claim reimbursement form");
const oonVisionReimbursementForm = new QuestionObject("OON vision reimbursement form");
const whereCanIFindTheVisionForm = new QuestionObject("Where can I find the vision form?");
const whereCanIFindTheVisionClaimForm = new QuestionObject("Where can I find the vision claim form?");
const whereCanIFindTheVisionReimbursementForm = new QuestionObject("Where can I find the vision reimbursement form?");
const whereCanIFindTheVisionClaimReimbursementForm = new QuestionObject("Where can I find the vision claim reimbursement form?");
const showMeVisionForm = new QuestionObject("Show me vision form");
const showVisionForm = new QuestionObject("Show vision form");
const showVisionClaimForm = new QuestionObject("Show vision claim form");
const showVisionReimbursementForm = new QuestionObject("Show vision reimbursement form");
const showVisionClaimReimbursementForm = new QuestionObject("Show vision claim reimbursement form");
const howCanISubmitForReimbursedForVisionClaim = new QuestionObject("How can I submit for reimbursement for vision claim?");
const howCanIGetReimbursedForVisionClaim = new QuestionObject("How can I get reimbursed for vision claim?");
const canIGetReimbursedForVisionClaim = new QuestionObject("Can I get reimbursed for vision claim?");
const takeMeToTheVisionForm = new QuestionObject("Take me to the vision form");
const takeMeToTheVisionReimbursementForm = new QuestionObject("Take me to the vision reimbursement form");
const takeMeToTheVisionClaimForm = new QuestionObject("Take me to the vision claim form");
const takeMeToTheVisionClaimReimbursementForm = new QuestionObject("Take me to the vision claim reimbursement form");
const canIGetReimbursementForGlasses = new QuestionObject("Can I get reimbursed for glasses?");
const canIGetReimbursementForContacts = new QuestionObject("Can I get reimbursed for contacts?");
const canIGetReimbursementForEyeExam = new QuestionObject("Can I get reimbursed for eye exam?");
const reimbursementForGlasses = new QuestionObject("Reimbursement for glasses");
const reimbursementForContacts = new QuestionObject("Reimbursement for contacts");
const reimbursementForEyeExam = new QuestionObject("Reimbursement for eye exam");
const reimbursementForVisionExam = new QuestionObject("Reimbursement for vision exam");
const formForGlasses = new QuestionObject("form for glasses");
const formForContacts = new QuestionObject("form for contacts");
const formForVision = new QuestionObject("form for vision");

export const visionFormQuestionsArray = [
    visionReimburesementForm,
    visionClaimForm,
    visionAdvantageReimbursementForm,
    visionAdvantageClaimForm,
    oonVisionForm,
    outOfNetworkVisionForm,
    outOfNetworkVisionClaimForm,
    outOfNetworkVisionReimbursementForm,
    outOfNetworkVisionClaimReimbursementForm,
    oonVisionClaimForm,
    oonVisionClaimReimbursementForm,
    oonVisionReimbursementForm,
    whereCanIFindTheVisionForm,
    whereCanIFindTheVisionClaimForm,
    whereCanIFindTheVisionReimbursementForm,
    whereCanIFindTheVisionClaimReimbursementForm,
    showMeVisionForm,
    showVisionForm,
    showVisionClaimForm,
    showVisionReimbursementForm,
    showVisionClaimReimbursementForm,
    howCanISubmitForReimbursedForVisionClaim,
    howCanIGetReimbursedForVisionClaim,
    canIGetReimbursedForVisionClaim,
    takeMeToTheVisionForm,
    takeMeToTheVisionReimbursementForm,
    takeMeToTheVisionClaimForm,
    takeMeToTheVisionClaimReimbursementForm,
    canIGetReimbursementForGlasses,
    canIGetReimbursementForContacts,
    canIGetReimbursementForEyeExam,
    reimbursementForGlasses,
    reimbursementForContacts,
    reimbursementForEyeExam,
    reimbursementForVisionExam,
    formForGlasses,
    formForContacts,
    formForVision
];

const covidTest = new QuestionObject("Covid test");
const covidTestReimbursement = new QuestionObject("Covid test reimbursement");
const covidNineteenTest = new QuestionObject("Covid-19 test");
const covidNineteenTestReimbursement = new QuestionObject("Covid-19 test reimbursement");
const covidForm = new QuestionObject("Covid form");
const covidNineteenForm = new QuestionObject("Covid-19 form");
const covidReimbursementForm = new QuestionObject("Covid reimbursement form");
const covidNineteenReimbursementForm = new QuestionObject("Covid-19 reimbursement form");
const covidHomeTestReimbirsementForm = new QuestionObject("Covid home test reimbursement form");
const covidNineteenHomeTestReimbirsementForm = new QuestionObject("Covid-19 home test reimbursement form");
const covidNineteenHomeTest = new QuestionObject("Covid-19 home test");
const covidHomeTest = new QuestionObject("Covid home test");
const whereCanIFindTheCovidReimbursementForm = new QuestionObject("Where can I find the covid reimbursement form?");
const whereCanIFindTheCovidNineteenReimbursementForm = new QuestionObject("Where can I find the covid-19 reimbursement form?");
const whereCanIFindTheCovidNineteenTestReimbursementForm = new QuestionObject("Where can I find the covid-19 test reimbursement form?");
const whereCanIFindTheCovidNineteenTestForm = new QuestionObject("Where can I find the covid-19 test form?");
const whereIsTheCovidForm = new QuestionObject("Where is the covid form?");
const whereIsTheCovidNineteenForm = new QuestionObject("Where is the covid-19 form?");
const whereIsTheCovidTestReimbursementForm = new QuestionObject("Where is the covid test reimbursement form?");
const whereIsTheCovidNineteenTestReimbursementForm = new QuestionObject("Where is the covid-19 test reimbursement form?");
const canISeeTheCovidReimbursementForm = new QuestionObject("Can I see the covid reimbursement form?");
const canISeeTheCovidForm = new QuestionObject("Can I see the covid form?");
const canISeeTheCovidNineteenHomeTestReimbursementForm = new QuestionObject("Can I see the covid-19 home test reimbursement form?");
const submitCovidForm = new QuestionObject("Submit covid form");
const submitCovidNineteenHomeTestReimbursementForm = new QuestionObject("Submit covid-19 home test reimbursement form");
const doesUpmcReimburseCovidTests = new QuestionObject("Does UPMC reimburse covid tests?");
const doesUpmcReimburseCovidNineteenTests = new QuestionObject("Does UPMC reimburse covid-19 tests?");
const doesUpmcReimburseCovidNineteenHomeTests = new QuestionObject("Does UPMC reimburse covid-19 home tests?");
const doYouCoverCovidTests = new QuestionObject("Do you cover covid tests?");
const doYouCoverCovidNineteenHomeTests = new QuestionObject("Do you cover covid-19 home tests?");
const areCovidTestsCovered = new QuestionObject("Are covid tests covered?");
const areAtHomeCovidTestsCovered = new QuestionObject("Are at home covid tests covered?");
const areAtHomeCovidNineteenTestsCovered = new QuestionObject("Are at home covid-19 tests covered?");

export const covidFormQuestionsArray = [
    covidTest,
    covidTestReimbursement,
    covidNineteenTest,
    covidNineteenTestReimbursement,
    covidForm,
    covidNineteenForm,
    covidReimbursementForm,
    covidNineteenReimbursementForm,
    covidHomeTestReimbirsementForm,
    covidNineteenHomeTestReimbirsementForm,
    covidNineteenHomeTest,
    covidHomeTest,
    whereCanIFindTheCovidReimbursementForm,
    whereCanIFindTheCovidNineteenReimbursementForm,
    whereCanIFindTheCovidNineteenTestReimbursementForm,
    whereCanIFindTheCovidNineteenTestForm,
    whereIsTheCovidForm,
    whereIsTheCovidNineteenForm,
    whereIsTheCovidTestReimbursementForm,
    whereIsTheCovidNineteenTestReimbursementForm,
    canISeeTheCovidReimbursementForm,
    canISeeTheCovidForm,
    canISeeTheCovidNineteenHomeTestReimbursementForm,
    submitCovidForm,
    submitCovidNineteenHomeTestReimbursementForm,
    doesUpmcReimburseCovidTests,
    doesUpmcReimburseCovidNineteenTests,
    doesUpmcReimburseCovidNineteenHomeTests,
    doYouCoverCovidTests,
    doYouCoverCovidNineteenHomeTests,
    areCovidTestsCovered,
    areAtHomeCovidTestsCovered,
    areAtHomeCovidNineteenTestsCovered,
];

const whereCanIFindReimbursementForm = new QuestionObject("Where can I find reimbursement form?");
const whereIsReimbursementForm = new QuestionObject("Where is reimbursement form?");
const whereIsOonReimbursementForm = new QuestionObject("Where is OON reimbursement form?");
const oonReimbursementForm = new QuestionObject("OON reimbursement form");
const whereCanIFindOonClaimForm = new QuestionObject("Where can I find OON claim form?");
const whereCanIFindOonClaimReimbursementForm = new QuestionObject("Where can I find OON claim reimbursement form?");
const oonClaimReimbursementForm = new QuestionObject("OON claim reimbursement form");
const outOfNetworkReimbursementForm = new QuestionObject("Out of network reimbursement form");
const outOfNetworkForm = new QuestionObject("Out of network form");
const whereCanIFindOutOfNetworkClaimForm = new QuestionObject("Where can I find out of network claim form?");
const whereCanIFindOutOfNetworkReimbursementForm = new QuestionObject("Where can I find out of network reimbursement form?");
const whereIsOutOfNetworkReimbursementForm = new QuestionObject("Where is out of network reimbursement form?");
const showOonClaimForm = new QuestionObject("Show OON claim form");
const showOutOfNetworkClaimForm = new QuestionObject("Show out of network claim form");
const showReimbursementForm = new QuestionObject("Show reimbursement form");
const howCanIGetReimbursedForClaim = new QuestionObject("How can I get reimbursed for a claim?");
const howCanIGetReimbursedForOtOfNetworkServices = new QuestionObject("How can I get reimbursed for out of network services?");
const howCanIGetReimbursedForOonServices = new QuestionObject("How can I get reimbursed for OON services?");
const howCanIGetReimbursedForOonClaim = new QuestionObject("How can I get reimbursed for OON claim?");
const howCanIGetReimbursedForOutOfNetwork = new QuestionObject("How can I get reimbursed for out of network claim?");
const howDoISubmitAnApprovedOutOfNetworkClaim = new QuestionObject("How do I submit an approved out of network claim?");
const howDoISubmitAnOutOfNetworkClaim = new QuestionObject("How do I submit an out of network claim?");
const oonClaimForm = new QuestionObject("OON Claim Form");

export const outOfNetworkFormQuestionsArray = [
    whereCanIFindReimbursementForm,
    whereIsReimbursementForm,
    whereIsOonReimbursementForm,
    oonReimbursementForm,
    whereCanIFindOonClaimForm,
    whereCanIFindOonClaimReimbursementForm,
    oonClaimReimbursementForm,
    outOfNetworkReimbursementForm,
    outOfNetworkForm,
    whereCanIFindOutOfNetworkClaimForm,
    whereCanIFindOutOfNetworkReimbursementForm,
    whereIsOutOfNetworkReimbursementForm,
    showOonClaimForm,
    showOutOfNetworkClaimForm,
    showReimbursementForm,
    howCanIGetReimbursedForClaim,
    howCanIGetReimbursedForOtOfNetworkServices,
    howCanIGetReimbursedForOonServices,
    howCanIGetReimbursedForOonClaim,
    howCanIGetReimbursedForOutOfNetwork,
    howDoISubmitAnApprovedOutOfNetworkClaim,
    howDoISubmitAnOutOfNetworkClaim,
    oonClaimForm
];
