function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

const whereCanISeeMyAppointments = new QuestionObject("Where can I see my appointments?");
const whereCanICheckMyAppointments = new QuestionObject("Where can I check my appointments?");
const iThoughtIScheduledAnAppointment = new QuestionObject("I thought I scheduled an appointment.");
const iThinkIScheduledAnAppointment = new QuestionObject("I think I scheduled an appointment.");
const didIAlreadyScheduleAnAppointment = new QuestionObject("Did I already schedule an appointment?");
const canISeeMyScheduledAppointments = new QuestionObject("Can I see my scheduled appointments?");
const canISeeAListOfMyAppointments = new QuestionObject("Can I see a list of my appointments?");
const canISeeMyAppointments = new QuestionObject("Can I see my appointments?");
const iWantToCheckMyAppointments = new QuestionObject("I want to check my appointments.");
const iNeedToCancelMyAppointment = new QuestionObject("I need to cancel my appointment.");
const iWantToCancelMyAppointment = new QuestionObject("I want to cancel my appointment.");
const appointments = new QuestionObject("Appointments");
const scheduledAppointments = new QuestionObject("Scheduled appointments");
const currentAppointments = new QuestionObject("Current appointments");
const currentlyScheduledAppointments = new QuestionObject("Currently scheduled appointments");
const cancelAppointment = new QuestionObject("Cancel appointment");
const cancelAppointments = new QuestionObject("Cancel appointments");
const howDoISeeMyAppointments = new QuestionObject("How do I see my appointments?");
const howDoISeeMyScheduledAppointments = new QuestionObject("How do I see my scheduled appointments?");
const howCanIReviewMyAppointments = new QuestionObject("How can I review my appointments?");

export const currentAppointmentQuestionsArray = [
    whereCanISeeMyAppointments,
    whereCanICheckMyAppointments,
    iThoughtIScheduledAnAppointment,
    iThinkIScheduledAnAppointment,
    didIAlreadyScheduleAnAppointment,
    canISeeMyScheduledAppointments,
    canISeeAListOfMyAppointments,
    canISeeMyAppointments,
    iWantToCheckMyAppointments,
    iNeedToCancelMyAppointment,
    iWantToCancelMyAppointment,
    appointments,
    scheduledAppointments,
    currentAppointments,
    currentlyScheduledAppointments,
    cancelAppointment,
    cancelAppointments,
    howDoISeeMyAppointments,
    howDoISeeMyScheduledAppointments,
    howCanIReviewMyAppointments
];

const iNeedToMakeAnAppointment = new QuestionObject("I need to make an appointment.");
const iNeedToScheduleAnAppointment = new QuestionObject("I need to schedule an appointment.");
const canIScheduleAnAppointment = new QuestionObject("Can I schedule an appointment?");
const canYouScheduleAnAppointmentForMe = new QuestionObject("Can you schedule an appointment for me?");
const whereCanIScheduleAnAppointment = new QuestionObject("Where can I schedule an appointment?");
const whereCanIMakeAnAppointment = new QuestionObject("Where can I make an appointment?");
const whereCanIMakeAnAppointmentToSeeMyDoctor = new QuestionObject("Where can I make an appointment to see my doctor?");
const howDoIScheduleAnAppointment = new QuestionObject("How do I schedule an appointment?");
const howDoIMakeAnAppointment = new QuestionObject("How do I make an appointment?");
const howDoIMakeAnAppointmentToSeeMyDoctor = new QuestionObject("How do I make an appointment to see my doctor?");
const scheduleAppointment = new QuestionObject("Schedule appointment");
const newAppointment = new QuestionObject("New appointment");
const makeAppointment = new QuestionObject("Make appointment");
const iNeedAnAppointment = new QuestionObject("I need an appointment.");

export const scheduleAnAppointmentQuestionsArray = [
    iNeedToMakeAnAppointment,
    iNeedToScheduleAnAppointment,
    canIScheduleAnAppointment,
    canYouScheduleAnAppointmentForMe,
    whereCanIScheduleAnAppointment,
    whereCanIMakeAnAppointment,
    whereCanIMakeAnAppointmentToSeeMyDoctor,
    howDoIScheduleAnAppointment,
    howDoIMakeAnAppointment,
    howDoIMakeAnAppointmentToSeeMyDoctor,
    scheduleAppointment,
    newAppointment,
    makeAppointment,
    iNeedAnAppointment
];

const iNeedToSeeMyTestResults = new QuestionObject("I need to see my test results.");
const iNeedToCheckMyTestResults = new QuestionObject("I need to check my test results.");
const iWantToSeeMyTestResults = new QuestionObject("I want to see my test results.");
const iWantToCheckMyTestResults = new QuestionObject("I want to check my test results. ");
const whereCanISeeMyTestResults = new QuestionObject("Where can I see my test results?");
const whereCanICheckMyTestResults = new QuestionObject("Where can I check my test results?");
const didYouGetMyTestResults = new QuestionObject("Did you get my test results?");
const didYouReceiveMyTestResults = new QuestionObject("Did you receive my test results?");
const haveYouGottenMyTestResults = new QuestionObject("Have you gotten my test results?");
const haveYouReceivedMyTestResults = new QuestionObject("Have you received my test results?");
const areMyTestResultsBack = new QuestionObject("Are my test results back?");
const areMyTestResultsBackYet = new QuestionObject("Are my test results back yet?");
const didMyTestResultsComeBackYet = new QuestionObject("Did my test results come back yet?");
const testResults = new QuestionObject("Test results");
const labResults = new QuestionObject("Lab results");
const labWorkResults = new QuestionObject("Lab work results");
const bloodWorkResults = new QuestionObject("Blood work results");
const resultsFromTesting = new QuestionObject("Results from testing");
const resultsFromLabWork = new QuestionObject("Results from lab work");
const resultsOfTesting = new QuestionObject("Results of testing");
const resultsOfLabWork = new QuestionObject("Results of lab work");
const resultsFromMyScan = new QuestionObject("Results from my scan");
const resultsFromMyXRay = new QuestionObject("Results from my x-ray");
const resultsOfMyScan = new QuestionObject("Results of my scan");
const resultsOfMyXRay = new QuestionObject("Results of my x-ray");
const xRayResults = new QuestionObject("X-ray results");
const scanResults = new QuestionObject("Scan results");
const areMyResultsBackYet = new QuestionObject("Are my results back yet?");
const areMyResultsReady = new QuestionObject("Are my results ready?");
const areMyTestResultsReady = new QuestionObject("Are my test results ready?");

export const testResultsQuestionsArray = [
    iNeedToSeeMyTestResults,
    iNeedToCheckMyTestResults,
    iWantToSeeMyTestResults,
    iWantToCheckMyTestResults,
    whereCanISeeMyTestResults,
    whereCanICheckMyTestResults,
    didYouGetMyTestResults,
    didYouReceiveMyTestResults,
    haveYouGottenMyTestResults,
    haveYouReceivedMyTestResults,
    areMyTestResultsBack,
    areMyTestResultsBackYet,
    didMyTestResultsComeBackYet,
    testResults,
    labResults,
    labWorkResults,
    bloodWorkResults,
    resultsFromTesting,
    resultsFromLabWork,
    resultsOfTesting,
    resultsOfLabWork,
    resultsFromMyScan,
    resultsFromMyXRay,
    resultsOfMyScan,
    resultsOfMyXRay,
    xRayResults,
    scanResults,
    areMyResultsBackYet,
    areMyResultsReady,
    areMyTestResultsReady
];