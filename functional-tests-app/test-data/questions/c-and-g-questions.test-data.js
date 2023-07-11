function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

const howDoIFileAnAppeal = new QuestionObject("How do I file an appeal?");
const howDoIFileAComplaint = new QuestionObject("How do I file a complaint?");
const howDoIFileAGrievance = new QuestionObject("How do I file a grievance?");
const whereCanIFileAnAppeal = new QuestionObject("Where can I file an appeal?");
const whereCanIFileAComplaint = new QuestionObject("Where can I file a complaint?");
const whereCanIFileAGrievance = new QuestionObject("Where can I file a grievance?");
const iNeedToFileAnAppeal = new QuestionObject("I need to file an appeal.");
const iNeedToFileAComplaint = new QuestionObject("I need to file a complaint.");
const iNeedToFileAGrievance = new QuestionObject("I need to file a grievance.");
const iWantToFileAnAppeal = new QuestionObject("I want to file an appeal.");
const iWantToFileAComplaint = new QuestionObject("I want to file a complaint.");
const iWantToFileAGrievance = new QuestionObject("I want to file a grievance.");
const canIFileAnAppeal = new QuestionObject("Can I file an appeal?");
const canIFileAComplaint = new QuestionObject("Can I file a complaint?");
const canIFileAGrievance = new QuestionObject("Can I file a grievance?");
const appeal = new QuestionObject("Appeal");
const complaint = new QuestionObject("Complaint");
const grievance = new QuestionObject("Grievance");
const adverseBenefitDetermination = new QuestionObject("Adverse benefit determination");
const benefitDetermination = new QuestionObject("Benefit determination");
const whereDoIFileAnAppeal = new QuestionObject("Where do I file an appeal?");
const whereDoIFileAComplaint = new QuestionObject("Where do I file a complaint?");
const whereDoIFileAGrievance = new QuestionObject("Where do I file a grievance?");

export const cAndGQuestionsArray = [
    howDoIFileAnAppeal,
    howDoIFileAComplaint,
    howDoIFileAGrievance,
    whereCanIFileAnAppeal,
    whereCanIFileAComplaint,
    whereCanIFileAGrievance,
    iNeedToFileAnAppeal,
    iNeedToFileAComplaint,
    iNeedToFileAGrievance,
    iWantToFileAnAppeal,
    iWantToFileAComplaint,
    iWantToFileAGrievance,
    canIFileAnAppeal,
    canIFileAComplaint,
    canIFileAGrievance,
    appeal,
    complaint,
    grievance,
    adverseBenefitDetermination,
    benefitDetermination,
    whereDoIFileAnAppeal,
    whereDoIFileAComplaint,
    whereDoIFileAGrievance
];