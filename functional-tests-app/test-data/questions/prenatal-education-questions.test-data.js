function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

const iNeedTheLamazeReimbursementForm = new QuestionObject("I need the lamaze reimbursement form.");
const iNeedThePrenatalEducationForm = new QuestionObject("I need the prenatal education form.");
const iNeedThePrenatalEducationReimbursementForm = new QuestionObject("I need the prenatal education reimbursement form.");
const iNeedTheBreastfeedingReimbursementForm = new QuestionObject("I need the breastfeeding reimbursement form.");
const iNeedTheBreastfeedingClassReimbursementForm = new QuestionObject("I need the breastfeeding class reimbursement form.");
const iNeedThePreparedChildbirthReimbursementForm = new QuestionObject("I need the prepared childbirth reimbursement form.");
const iNeedTheChildbirthClassForm = new QuestionObject("I need the childbirth class form.");
const doYouCoverLamaze = new QuestionObject("Do you cover lamaze?");
const doYouCoverLamazeClasses = new QuestionObject("Do you cover lamaze classes?");
const doYouCoverLamazeRefreshers = new QuestionObject("Do you cover lamaze refreshers?");
const doYouCoverPrenatalEducation = new QuestionObject("Do you cover prenatal education?");
const doYouCoverPrenatalClasses = new QuestionObject("Do you cover prenatal classes?");
const doYouCoverBreastfeedingClasses = new QuestionObject("Do you cover breastfeeding classes?");
const doYouCoverPreparedChildbirthClasses = new QuestionObject("Do you cover prepared childbirth classes?");
const doYouCoverChildbirthClasses = new QuestionObject("Do you cover childbirth classes?");
const isLamazeCovered = new QuestionObject("Is lamaze covered?");
const isLamazeEducationCovered = new QuestionObject("Is lamaze education covered?");
const isPrenatalEducationCovered = new QuestionObject("Is prenatal education covered?");
const isChildbirthEducationCovered = new QuestionObject("Is childbirth education covered?");
const isChildbirthClassCovered = new QuestionObject("Is childbirth class covered?");
const isBreastfeedingClassCovered = new QuestionObject("Is breastfeeding class covered?");
const canIBeReimbursedForLamaze = new QuestionObject("Can I be reimbursed for lamaze?");
const canIBeReimbursedForLamazeClasses = new QuestionObject("Can I be reimbursed for lamaze classes?");
const canIBeReimbursedForLamazeRefreshers = new QuestionObject("Can I be reimbursed for lamaze refreshers?");
const canIBeReimbursedForPrenatalEducation = new QuestionObject("Can I be reimbursed for prenatal education?");
const canIBeReimbursedForPrenatalClasses = new QuestionObject("Can I be reimbursed for prenatal classes?");
const canIBeReimbursedForBreastfeedingClasses = new QuestionObject("Can I be reimbursed for breastfeeding classes?");
const canIBeReimbursedForPreparedChildbirthClasses = new QuestionObject("Can I be reimbursed for prepared childbirth classes?");
const canIBeReimbursedForChildbirthClasses = new QuestionObject("Can I be reimbursed for childbirth classes?");
const canIGetReimbursedForLamaze = new QuestionObject("Can I get reimbursed for lamaze?");
const canIGetReimbursedForLamazeClasses = new QuestionObject("Can I get reimbursed for lamaze classes?");
const canIGetReimbursedForLamazeRefreshers = new QuestionObject("Can I get reimbursed for lamaze refreshers?");
const canIGetReimbursedForPrenatalEducation = new QuestionObject("Can I get reimbursed for prenatal education?");
const canIGetReimbursedForPrenatalClasses = new QuestionObject("Can I get reimbursed for prenatal classes?");
const canIGetReimbursedForBreastfeedingClasses = new QuestionObject("Can I get reimbursed for breastfeeding classes?");
const canIGetReimbursedForPreparedChildbirthClasses = new QuestionObject("Can I get reimbursed for prepared childbirth classes?");
const canIGetReimbursedForChildbirthClasses = new QuestionObject("Can I get reimbursed for childbirth classes?");
const whatDoYouCoverForLamaze = new QuestionObject("What do you cover for lamaze?");
const whatDoYouCoverForLamazeClasses = new QuestionObject("What do you cover for lamaze classes?");
const whatDoYouCoverForLamazeRefreshers = new QuestionObject("What do you cover for lamaze refreshers?");
const whatDoYouCoverForPrenatalEducation = new QuestionObject("What do you cover for prenatal education?");
const whatDoYouCoverForPrenatalClasses = new QuestionObject("What do you cover for prenatal classes?");
const whatDoYouCoverForBreastfeedingClasses = new QuestionObject("What do you cover for breastfeeding classes?");
const whatDoYouCoverForPreparedChildbirthClasses = new QuestionObject("What do you cover for prepared childbirth classes?");
const whatDoYouCoverForChildbirthClasses = new QuestionObject("What do you cover for childbirth classes?");
const whatIsCoveredForLamaze = new QuestionObject("What is covered for lamaze?");
const whatIsCoveredForLamazeClasses = new QuestionObject("What is covered for lamaze classes?");
const whatIsCoveredForLamazeRefreshers = new QuestionObject("What is covered for lamaze refreshers?");
const whatIsCoveredForPrenatalEducation = new QuestionObject("What is covered for prenatal education?");
const whatIsCoveredForPrenatalClasses = new QuestionObject("What is covered for prenatal classes?");
const whatIsCoveredForBreastfeedingClasses = new QuestionObject("What is covered for breastfeeding classes?");
const whatIsCoveredForPreparedChildbirthClasses = new QuestionObject("What is covered for prepared childbirth classes?");
const whatIsCoveredForChildbirthClasses = new QuestionObject("What is covered for childbirth classes?");
const whereIsTheLamazeReimbursementForm = new QuestionObject("Where is the lamaze reimbursement form?");
const whereIsThePrenatalEducationForm = new QuestionObject("Where is the prenatal education form?");
const whereIsThePrenatalEducationReimbursementForm = new QuestionObject("Where is the prenatal education reimbursement form?");
const whereIsTheBreastfeedingReimbursementForm = new QuestionObject("Where is the breastfeeding reimbursement form?");
const whereIsTheBreastfeedingClassReimbursementForm = new QuestionObject("Where is the breastfeeding class reimbursement form?");
const whereIsThePreparedChildbirthReimbursementForm = new QuestionObject("Where is the prepared childbirth reimbursement form?");
const whereIsTheChildbirthClassForm = new QuestionObject("Where is the childbirth class form?");

export const prenatalEducationAssessmnetFormQuestionsArray = [
    iNeedTheLamazeReimbursementForm,
    iNeedThePrenatalEducationForm,
    iNeedThePrenatalEducationReimbursementForm,
    iNeedTheBreastfeedingReimbursementForm,
    iNeedTheBreastfeedingClassReimbursementForm,
    iNeedThePreparedChildbirthReimbursementForm,
    iNeedTheChildbirthClassForm,
    doYouCoverLamaze,
    doYouCoverLamazeClasses,
    doYouCoverLamazeRefreshers,
    doYouCoverPrenatalEducation,
    doYouCoverPrenatalClasses,
    doYouCoverBreastfeedingClasses,
    doYouCoverPreparedChildbirthClasses,
    doYouCoverChildbirthClasses,
    isLamazeCovered,
    isLamazeEducationCovered,
    isPrenatalEducationCovered,
    isChildbirthEducationCovered,
    isChildbirthClassCovered,
    isBreastfeedingClassCovered,
    canIBeReimbursedForLamaze,
    canIBeReimbursedForLamazeClasses,
    canIBeReimbursedForLamazeRefreshers,
    canIBeReimbursedForPrenatalEducation,
    canIBeReimbursedForPrenatalClasses,
    canIBeReimbursedForBreastfeedingClasses,
    canIBeReimbursedForPreparedChildbirthClasses,
    canIBeReimbursedForChildbirthClasses,
    canIGetReimbursedForLamaze,
    canIGetReimbursedForLamazeClasses,
    canIGetReimbursedForLamazeRefreshers,
    canIGetReimbursedForPrenatalEducation,
    canIGetReimbursedForPrenatalClasses,
    canIGetReimbursedForBreastfeedingClasses,
    canIGetReimbursedForPreparedChildbirthClasses,
    canIGetReimbursedForChildbirthClasses,
    whatDoYouCoverForLamaze,
    whatDoYouCoverForLamazeClasses,
    whatDoYouCoverForLamazeRefreshers,
    whatDoYouCoverForPrenatalEducation,
    whatDoYouCoverForPrenatalClasses,
    whatDoYouCoverForBreastfeedingClasses,
    whatDoYouCoverForPreparedChildbirthClasses,
    whatDoYouCoverForChildbirthClasses,
    whatIsCoveredForLamaze,
    whatIsCoveredForLamazeClasses,
    whatIsCoveredForLamazeRefreshers,
    whatIsCoveredForPrenatalEducation,
    whatIsCoveredForPrenatalClasses,
    whatIsCoveredForBreastfeedingClasses,
    whatIsCoveredForPreparedChildbirthClasses,
    whatIsCoveredForChildbirthClasses,
    whereIsTheLamazeReimbursementForm,
    whereIsThePrenatalEducationForm,
    whereIsThePrenatalEducationReimbursementForm,
    whereIsTheBreastfeedingReimbursementForm,
    whereIsTheBreastfeedingClassReimbursementForm,
    whereIsThePreparedChildbirthReimbursementForm,
    whereIsTheChildbirthClassForm
];