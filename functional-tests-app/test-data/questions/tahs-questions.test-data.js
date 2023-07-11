function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

const whatIsMyTahsStatus = new QuestionObject("What is my TAHS status?");
const haveIMetMyTahsRequirements = new QuestionObject("Have I met my TAHS requirements?");
const didIMeetMyTahsRequirements = new QuestionObject("Did I meet my TAHS requirements?");
const checkTahsStatus = new QuestionObject("Check TAHS status");
const didIreceiveCreditForFluShot = new QuestionObject("Did I receive credit for flu shot?");
const didIreceiveCreditForPapSmear = new QuestionObject("Did I receive credit for pap smear?");
const didIreceiveCreditForGynecologicalExam = new QuestionObject("Did I receive credit for gynecological exam?");
const didIreceiveCreditForGyneExam = new QuestionObject("Did I receive credit for gyne exam?");
const didIreceiveCreditForColonoscopy = new QuestionObject("Did I receive credit for colonoscopy?");
const didIreceiveCreditForColonCancerScreening = new QuestionObject("Did I receive credit for colon cancer screening?");
const didIreceiveCreditForPhysycal = new QuestionObject("Did I receive credit for physical?");
const didIreceiveCreditForWellnessVisit = new QuestionObject("Did I receive credit for wellness visit?");
const didIreceiveCreditForActivity = new QuestionObject("Did I receive credit for activity?");
const didIreceiveCreditForWalk = new QuestionObject("Did I receive credit for walk?");
const didIreceiveCreditForPCPVisit = new QuestionObject("Did I receive credit for PCP visit?");
const didIreceiveCreditForGyneVisit = new QuestionObject("Did I receive credit for gyne visit?");
const didIreceiveCreditForDentalCleaning = new QuestionObject("Did I receive credit for dental cleaning?");
const didIreceiveCreditForDentalExam = new QuestionObject("Did I receive credit for dental exam?");
const didIreceiveCreditForDentalVisit = new QuestionObject("Did I receive credit for dental visit?");
const didIreceiveCreditForVisionExam = new QuestionObject("Did I receive credit for vision exam?");
const didIreceiveCreditForEyeExam = new QuestionObject("Did I receive credit for eye exam?");
const didIreceiveCreditForBiometricScreening = new QuestionObject("Did I receive credit for biometric screening?");
const doIHaveCreditForFluShot = new QuestionObject("Do I have credit for flu shot?");
const doIHaveCreditForPapSmear = new QuestionObject("Do I have credit for pap smear?");
const doIHaveCreditForGynecologicalExam = new QuestionObject("Do I have credit for gynecological exam?");
const doIHaveCreditForGyneExam = new QuestionObject("Do I have credit for gyne exam?");
const doIHaveCreditForColonoscopy = new QuestionObject("Do I have credit for colonoscopy?");
const doIHaveCreditForColonCancerScreening = new QuestionObject("Do I have credit for colon cancer screening?");
const doIHaveCreditForPhysycal = new QuestionObject("Do I have credit for physical?");
const doIHaveCreditForWellnessVisit = new QuestionObject("Do I have credit for wellness visit?");
const doIHaveCreditForActivity = new QuestionObject("Do I have credit for activity?");
const doIHaveCreditForWalk = new QuestionObject("Do I have credit for walk?");
const doIHaveCreditForPCPVisit = new QuestionObject("Do I have credit for PCP visit?");
const doIHaveCreditForGyneVisit = new QuestionObject("Do I have credit for gyne visit?");
const doIHaveCreditForDentalCleaning = new QuestionObject("Do I have credit for dental cleaning?");
const doIHaveCreditForDentalExam = new QuestionObject("Do I have credit for dental exam?");
const doIHaveCreditForDentalVisit = new QuestionObject("Do I have credit for dental visit?");
const doIHaveCreditForVisionExam = new QuestionObject("Do I have credit for vision exam?");
const doIHaveCreditForEyeExam = new QuestionObject("Do I have credit for eye exam?");
const doIHaveCreditForBiometricScreening = new QuestionObject("Do I have credit for biometric screening?");
const howManyPointsDoIHave = new QuestionObject("How many points do I have?");
const howManyTahsPointsDoIHave = new QuestionObject("How many TAHS points do I have?");
const howManyHealthyStepPointsDoIHave = new QuestionObject("How many healthy step points do I have?");
const howManyPointsHaveIEarned = new QuestionObject("How many points have I earned?");
const howManyTahsPointsHaveIEarned = new QuestionObject("How many TAHS points have I earned?");
const howManyHealthyStepPointsHaveIEarned = new QuestionObject("How many healthy step points have I earned?");
const howManyTahsPointsDoINeed = new QuestionObject("How many TAHS points do I need?");
const howManyPointsDoINeed = new QuestionObject("How many points do I need?");
const howManyHealthyStepPointsDoINeed = new QuestionObject("How many healthy step points do I need?");
const whatActivitiesDidIReceiveCreditFor = new QuestionObject("What activities did I receive credit for?");
const whatDidIReceiveCreditFor = new QuestionObject("What did I receive credit for?");
const whatWasICredidedFor = new QuestionObject("What was I credited for?");
const whatHaveIBeenCredidedFor = new QuestionObject("What have I been credited for?");
const whereCanISeeMyCredits = new QuestionObject("Where can I see my credits?");
const whereCanISeeMyPoints = new QuestionObject("Where can I see my points?");
const whereCanISeeMyTahsPoints = new QuestionObject("Where can I see my TAHS points?");
const whereCanISeeMyHealthyStepPoints = new QuestionObject("Where can I see my healthy step points?");
const whereCanISeeMyTotalPoints = new QuestionObject("Where can I see my total points?");
const whatAreMyTotalPoints = new QuestionObject("What are my total points?");
const whatIsMyPointTotal = new QuestionObject("What is my point total?");
const takeAHealthyStep = new QuestionObject("Take a Healthy Step");
const healthyStep = new QuestionObject("Healthy Steps");
const healthStep = new QuestionObject("Health Steps");
const biometricScreening = new QuestionObject("Biometric screening");
const tahs = new QuestionObject("TAHS");

export const tahsQuestionsArray = [
    whatIsMyTahsStatus,
    haveIMetMyTahsRequirements,
    didIMeetMyTahsRequirements,
    checkTahsStatus,
    didIreceiveCreditForFluShot,
    didIreceiveCreditForPapSmear,
    didIreceiveCreditForGynecologicalExam,
    didIreceiveCreditForGyneExam,
    didIreceiveCreditForColonoscopy,
    didIreceiveCreditForColonCancerScreening,
    didIreceiveCreditForPhysycal,
    didIreceiveCreditForWellnessVisit,
    didIreceiveCreditForActivity,
    didIreceiveCreditForWalk,
    didIreceiveCreditForPCPVisit,
    didIreceiveCreditForGyneVisit,
    didIreceiveCreditForDentalCleaning,
    didIreceiveCreditForDentalExam,
    didIreceiveCreditForDentalVisit,
    didIreceiveCreditForVisionExam,
    didIreceiveCreditForEyeExam,
    didIreceiveCreditForBiometricScreening,
    doIHaveCreditForFluShot,
    doIHaveCreditForPapSmear,
    doIHaveCreditForGynecologicalExam,
    doIHaveCreditForGyneExam,
    doIHaveCreditForColonoscopy,
    doIHaveCreditForColonCancerScreening,
    doIHaveCreditForPhysycal,
    doIHaveCreditForWellnessVisit,
    doIHaveCreditForActivity,
    doIHaveCreditForWalk,
    doIHaveCreditForPCPVisit,
    doIHaveCreditForGyneVisit,
    doIHaveCreditForDentalCleaning,
    doIHaveCreditForDentalExam,
    doIHaveCreditForDentalVisit,
    doIHaveCreditForVisionExam,
    doIHaveCreditForEyeExam,
    doIHaveCreditForBiometricScreening,
    howManyPointsDoIHave,
    howManyTahsPointsDoIHave,
    howManyHealthyStepPointsDoIHave,
    howManyPointsHaveIEarned,
    howManyTahsPointsHaveIEarned,
    howManyHealthyStepPointsHaveIEarned,
    howManyTahsPointsDoINeed,
    howManyPointsDoINeed,
    howManyHealthyStepPointsDoINeed,
    whatActivitiesDidIReceiveCreditFor,
    whatDidIReceiveCreditFor,
    whatWasICredidedFor,
    whatHaveIBeenCredidedFor,
    whereCanISeeMyCredits,
    whereCanISeeMyPoints,
    whereCanISeeMyTahsPoints,
    whereCanISeeMyHealthyStepPoints,
    whereCanISeeMyTotalPoints,
    whatAreMyTotalPoints,
    whatIsMyPointTotal,
    takeAHealthyStep,
    healthyStep,
    healthStep,
    biometricScreening,
    tahs,
];

