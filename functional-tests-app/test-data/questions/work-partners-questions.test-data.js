function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

const canIFileWorkersComp = new QuestionObject("Can I file worker's comp?");
const canIFileForWorkersComp = new QuestionObject("Can I file for worker's comp?");
const canIFileForWorkersCompensation = new QuestionObject("Can I file for worker's compensation?");
const canIFileForWorkerComp = new QuestionObject("Can I file for worker comp?");
const canIFileForWorkerCompensation = new QuestionObject("Can I file for worker compensation?");
const canIFileWorkerComp = new QuestionObject("Can I file for work comp?");
const howDoIFileWorkersComp = new QuestionObject("How do I file worker's comp?");
const howDoIFileForWorkersComp = new QuestionObject("How do I file for worker's comp?");
const howDoIFileForWorkersCompensation = new QuestionObject("How do I file for worker's compensation?");
const howDoIFileForWorkerComp = new QuestionObject("How do I file for worker comp?");
const howDoIFileForWorkerCompensation = new QuestionObject("How do I file for worker compensation?");
const howDoIFileForWorkComp = new QuestionObject("How do I file for work comp?");
const whereCanIFileWorkersComp = new QuestionObject("Where can I file worker's comp?");
const whereCanIFileForWorkersComp = new QuestionObject("Where can I file for worker's comp?");
const whereCanIFileForWorkersCompensation = new QuestionObject("Where can I file for worker's compensation?");
const whereCanIFileForWorkerComp = new QuestionObject("Where can I file for worker comp?");
const whereCanIFileForWorkerCompensation = new QuestionObject("Where can I file for worker compensation?");
const whereCanIFileWorkComp = new QuestionObject("Where can I file for work comp?");
const whereDoIFileWorkersComp = new QuestionObject("Where do I file worker's comp?");
const whereDoIFileForWorkersComp = new QuestionObject("Where do I file for worker's comp?");
const whereDoIFileForWorkersCompensation = new QuestionObject("Where do I file for worker's compensation?");
const whereDoIFileWorkerComp = new QuestionObject("Where do I file worker comp?");
const whereDoIFileForWorkerCompensation = new QuestionObject("Where do I file for worker compensation?");
const whereDoIFileForWorkComp = new QuestionObject("Where do I file for work comp?");
const fileWorkersComp = new QuestionObject("File worker's comp");
const fileWorkersCompClaim = new QuestionObject("File worker's comp claim");
const fileWorkersCompensation = new QuestionObject("File worker's compensation");
const fileWorkersCompensationClaim = new QuestionObject("File worker's compensation claim");
const fileWorkComp = new QuestionObject("File work comp");
const fileWorkCompClaim = new QuestionObject("File work comp claim");
const fileWorkerComp = new QuestionObject("File worker comp");
const fileWorkerCompClaim = new QuestionObject("File worker comp claim");
const iWasInjuredAtWork = new QuestionObject("I was injured at work");
const iWasHurtAtWork = new QuestionObject("I was hurt at work");
const workInjury = new QuestionObject("Work injury");
const workplaceInjury = new QuestionObject("Workplace injury");
const workersComp = new QuestionObject("Worker's comp");
const workersCompensation = new QuestionObject("Worker's compensation");
const workComp = new QuestionObject("Work comp");
const workerComp = new QuestionObject("Worker comp");
const workerCompensation = new QuestionObject("Worker compensation");

export const compensationQuestionsArray = [
    canIFileWorkersComp,
    canIFileForWorkersComp,
    canIFileForWorkersCompensation,
    canIFileForWorkerComp,
    canIFileForWorkerCompensation,
    canIFileWorkerComp,
    howDoIFileWorkersComp,
    howDoIFileForWorkersComp,
    howDoIFileForWorkersCompensation,
    howDoIFileForWorkerComp,
    howDoIFileForWorkerCompensation,
    howDoIFileForWorkComp,
    whereCanIFileWorkersComp,
    whereCanIFileForWorkersComp,
    whereCanIFileForWorkersCompensation,
    whereCanIFileForWorkerComp,
    whereCanIFileForWorkerCompensation,
    whereCanIFileWorkComp,
    whereDoIFileWorkersComp,
    whereDoIFileForWorkersComp,
    whereDoIFileForWorkersCompensation,
    whereDoIFileWorkerComp,
    whereDoIFileForWorkerCompensation,
    whereDoIFileForWorkComp,
    fileWorkersComp,
    fileWorkersCompClaim,
    fileWorkersCompensation,
    fileWorkersCompensationClaim,
    fileWorkComp,
    fileWorkCompClaim,
    fileWorkerComp,
    fileWorkerCompClaim,
    iWasInjuredAtWork,
    iWasHurtAtWork,
    workInjury,
    workplaceInjury,
    workersComp,
    workersCompensation,
    workComp,
    workerComp,
    workerCompensation,
];

const whereDoIFileALeave = new QuestionObject("Where do I file a leave?");
const whereDoIFileALeaveOfAbsence = new QuestionObject("Where do I file a leave of absence?");
const whereDoIFileALoa = new QuestionObject("Where do I file a LOA?");
const whereDoIFileForALeave = new QuestionObject("Where do I file for a leave?");
const whereDoIFileForALeaveOfAbsence = new QuestionObject("Where do I file for a leave of absence?");
const whereDoIFileForALoa = new QuestionObject("Where do I file for a LOA?");
const whereDoIFileForMaternityLeave = new QuestionObject("Where do I file for maternity leave?");
const howDoIFileALeave = new QuestionObject("How do I file a leave?");
const howDoIFileALoa = new QuestionObject("How do I file a LOA?");
const howDoIFileALeaveOfAbsence = new QuestionObject("How do I file a leave of absence?");
const howDoIFileForALeave = new QuestionObject("How do I file for a leave?");
const howDoIFileForALoa = new QuestionObject("How do I file for a LOA?");
const howDoIFileForALeaveOfAbsence = new QuestionObject("How do I file for a leave of absence?");
const howDoIFileForMaternityLeave = new QuestionObject("How do I file for maternity leave?");
const howCanIFileALeave = new QuestionObject("How can I file a leave?");
const howCanIFileALoa = new QuestionObject("How can I file a LOA?");
const howCanIFileALeaveOfAbsence = new QuestionObject("How can I file a leave of absence?");
const howCanIFileForALeave = new QuestionObject("How can I file for a leave?");
const howCanIFileForALoa = new QuestionObject("How can I file for a LOA?");
const howCanIFileForALeaveOfAbsence = new QuestionObject("How can I file for a leave of absence?");
const howCanIFileForMaternityLeave = new QuestionObject("How can I file for maternity leave?");
const fileALeave = new QuestionObject("File a leave");
const fileALoa = new QuestionObject("File a LOA");
const fileALeaveOfAbsence = new QuestionObject("File a leave of absence");
const fileLeave = new QuestionObject("File leave");
const fileLoa = new QuestionObject("File LOA");
const fileLeaveOfAbsence = new QuestionObject("File leave of absence");
const fileMaternityLeave = new QuestionObject("File maternity leave");
const requestLeave = new QuestionObject("Request leave");
const requestLoa = new QuestionObject("Request LOA");
const requestLeaveOfAbsence = new QuestionObject("Request leave of absence");
const requestMaternityLeave = new QuestionObject("Request maternity leave");
const iNeedToFileALeave = new QuestionObject("I need to file a leave");
const iNeedToFileALoa = new QuestionObject("I need to file a LOA");
const iNeedToFileALeaveOfAbsence = new QuestionObject("I need to file a leave of absence");
const iNeedToTakeALeave = new QuestionObject("I need to take a leave");
const iNeedToTakeALoa = new QuestionObject("I need to take a LOA");
const iNeedToTakeALeaveOfAbsence = new QuestionObject("I need to take a leave of absence");
const iNeedToFileForMaternityLeave = new QuestionObject("I need to file for maternity leave");
const fileFmla = new QuestionObject("File FMLA");
const fileForFmla = new QuestionObject("File for FMLA");
const requestFmla = new QuestionObject("Request FMLA");
const howCanIFileFmla = new QuestionObject("How can I file FMLA?");
const howCanIFileForFmla = new QuestionObject("How can I file for FMLA?");
const howDoIFileFmla = new QuestionObject("How do I file FMLA?");
const howDoIFileForFmla = new QuestionObject("How do I file for FMLA?");
const whereDoIFileFmla = new QuestionObject("Where do I file FMLA?");
const whereDoIFileForFmla = new QuestionObject("Where do I file for FMLA?");
const iNeedToFileFmla = new QuestionObject("I need to file FMLA");
const iNeedToFileForFmla = new QuestionObject("I need to file for FMLA");

export const leaveFileQuestionsArray = [
    whereDoIFileALeave,
    whereDoIFileALeaveOfAbsence,
    whereDoIFileALoa,
    whereDoIFileForALeave,
    whereDoIFileForALeaveOfAbsence,
    whereDoIFileForALoa,
    whereDoIFileForMaternityLeave,
    howDoIFileALeave,
    howDoIFileALoa,
    howDoIFileALeaveOfAbsence,
    howDoIFileForALeave,
    howDoIFileForALoa,
    howDoIFileForALeaveOfAbsence,
    howDoIFileForMaternityLeave,
    howCanIFileALeave,
    howCanIFileALoa,
    howCanIFileALeaveOfAbsence,
    howCanIFileForALeave,
    howCanIFileForALoa,
    howCanIFileForALeaveOfAbsence,
    howCanIFileForMaternityLeave,
    fileALeave,
    fileALoa,
    fileALeaveOfAbsence,
    fileLeave,
    fileLoa,
    fileLeaveOfAbsence,
    fileMaternityLeave,
    requestLeave,
    requestLoa,
    requestLeaveOfAbsence,
    requestMaternityLeave,
    iNeedToFileALeave,
    iNeedToFileALoa,
    iNeedToFileALeaveOfAbsence,
    iNeedToTakeALeave,
    iNeedToTakeALoa,
    iNeedToTakeALeaveOfAbsence,
    iNeedToFileForMaternityLeave,
    fileFmla,
    fileForFmla,
    requestFmla,
    howCanIFileFmla,
    howCanIFileForFmla,
    howDoIFileFmla,
    howDoIFileForFmla,
    whereDoIFileFmla,
    whereDoIFileForFmla,
    iNeedToFileFmla,
    iNeedToFileForFmla,
]

const checkLeave = new QuestionObject("Check leave");
const checkLoa = new QuestionObject("Check LOA");
const checkLeaveOfAbsence = new QuestionObject("Check leave of absence");
const checkLeaveStatus = new QuestionObject("Check leave status");
const checkLoaStatus = new QuestionObject("Check LOA status");
const checkLeaveOfAbsenceStatus = new QuestionObject("Check leave of absence status");
const checkStatusOfLeave = new QuestionObject("Check status of leave");
const checkStatusOfLoa = new QuestionObject("Check status of LOA");
const checkStatusOfLeaveOfAbsence = new QuestionObject("Check status of leave of absence");
const checkLeaveRequest = new QuestionObject("Check leave request");
const checkLoaRequest = new QuestionObject("Check LOA request");
const checkLeaveOfAbsenceRequest = new QuestionObject("Check leave of absence request");
const checkMAternityLeave = new QuestionObject("Check maternity leave");
const checkMAternityLeaveStatus = new QuestionObject("Check maternity leave status");
const whatIsMyLeaveStatus = new QuestionObject("What is my leave status?");
const whatIsMyLoaStatus = new QuestionObject("What is my LOA status?");
const whatIsMyLeaveOfAbsenceStatus = new QuestionObject("What is my leave of absence status?");
const whatIsMyMaternityLeaveStatus = new QuestionObject("What is my maternity leave status?");
const wasMyLeaveApproved = new QuestionObject("Was my leave approved?");
const wasMyLoaApproved = new QuestionObject("Was my LOA approved?");
const wasMyLeaveOfAbsenceApproved = new QuestionObject("Was my leave of absence approved?");
const wasMyMaternityLeaveApproved = new QuestionObject("Was my maternity leave approved?");
const whereCanICheckMyLeaveStatus = new QuestionObject("Where can I check my leave status?");
const whereCanICheckMyLoaStatus = new QuestionObject("Where can I check my LOA status?");
const whereCanICheckMyLeaveOfAbsenceStatus = new QuestionObject("Where can I check my leave of absence status?");
const whereCanICheckMyMaternityLeave = new QuestionObject("Where can I check my maternity leave?");
const whereCanISeeMyLeave = new QuestionObject("Where can I see my leave?");
const whereCanISeeMyLeaves = new QuestionObject("Where can I see my leaves?");
const whereCanISeeMyLoa = new QuestionObject("Where can I see my LOA?");
const whereCanISeeMyLoas = new QuestionObject("Where can I see my LOAs?");
const whereCanISeeMyLeaveOfAbsence = new QuestionObject("Where can I see my leave of absence?");
const whereCanISeeMyLeavesOfAbsence = new QuestionObject("Where can I see my leaves of absence?");
const whereCanISeeMyLeaveOfAbsences = new QuestionObject("Where can I see my leave of absences?");
const whereCanISeeMyMaternityLeave = new QuestionObject("Where can I see my maternity leave?");
const checkFmlaStatus = new QuestionObject("Check FMLA status");
const checkOnFmla = new QuestionObject("Check on FMLA");
const wasMyFmlaApproved = new QuestionObject("Was my FMLA approved?");
const whereCanISeeMyFmla = new QuestionObject("Where can I see my FMLA?");
const checkAbsenceStatus = new QuestionObject("check absence status");
const absenceStatus = new QuestionObject("absence status");

export const leaveStatusQuestionsArray = [
    checkLeave,
    checkLoa,
    checkLeaveOfAbsence,
    checkLeaveStatus,
    checkLoaStatus,
    checkLeaveOfAbsenceStatus,
    checkStatusOfLeave,
    checkStatusOfLoa,
    checkStatusOfLeaveOfAbsence,
    checkLeaveRequest,
    checkLoaRequest,
    checkLeaveOfAbsenceRequest,
    checkMAternityLeave,
    checkMAternityLeaveStatus,
    whatIsMyLeaveStatus,
    whatIsMyLoaStatus,
    whatIsMyLeaveOfAbsenceStatus,
    whatIsMyMaternityLeaveStatus,
    wasMyLeaveApproved,
    wasMyLoaApproved,
    wasMyLeaveOfAbsenceApproved,
    wasMyMaternityLeaveApproved,
    whereCanICheckMyLeaveStatus,
    whereCanICheckMyLoaStatus,
    whereCanICheckMyLeaveOfAbsenceStatus,
    whereCanICheckMyMaternityLeave,
    whereCanISeeMyLeave,
    whereCanISeeMyLeaves,
    whereCanISeeMyLoa,
    whereCanISeeMyLoas,
    whereCanISeeMyLeaveOfAbsence,
    whereCanISeeMyLeavesOfAbsence,
    whereCanISeeMyLeaveOfAbsences,
    whereCanISeeMyMaternityLeave,
    checkFmlaStatus,
    checkOnFmla,
    wasMyFmlaApproved,
    whereCanISeeMyFmla,
    checkAbsenceStatus,
    absenceStatus
]