function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

const whoIsMyPcp = new QuestionObject("Who is my PCP?");
const whoIsAssignedAsMyPcp = new QuestionObject("Who is assigned as my PCP?");
const doIHaveAPcp = new QuestionObject("Do I have a PCP?");
const whoIsMyPrimaryDoctor = new QuestionObject("Who is my primary doctor?");
const whoIsMyPrimaryCareDoctor = new QuestionObject("Who is my primary care doctor?");
const whoIsMyPrimaryCarePhysician = new QuestionObject("Who is my primary care physician?");
const doIHaveAPrimaryDoctor = new QuestionObject("Do I have a primary doctor?");
const doIHaveAPrimaryCareDoctor = new QuestionObject("Do I have a primary care doctor?");
const doIHaveAPrimaryCarePhysician = new QuestionObject("Do I have a primary care physician?");
const canIUpdateMyPcp = new QuestionObject("Can I update my PCP?");
const canIUpdateMyPrimaryCarePhysician = new QuestionObject("Can I update my primary care physician?");
const howDoIUpdateMyPrimaryCarePhysician = new QuestionObject("How do I update my primary care physician?");
const howDoIUpdateMyDoctor = new QuestionObject("How do I update my doctor?");
const howDoIUpdateMyPcp = new QuestionObject("How do I update my PCP?");
const howCanIFindMyPcp = new QuestionObject("How can I find my PCP?");
const howCanIFindMyAssignedPcp = new QuestionObject("How can I find my assigned PCP?");
const whereDoIFindMyPcp = new QuestionObject("Where do I find my PCP?");
const whereDoIFindMyAssignedPcp = new QuestionObject("Where do I find my assigned PCP?");
const whereDoIUpdateMyPcp = new QuestionObject("Where do I update my PCP?");
const whereDoIUpdateMyPrimaryCarePhysician = new QuestionObject("Where do I update my primary care physician?");
const whereDoIUpdateMyPrimaryDoctor = new QuestionObject("Where do I update my primary doctor?");
const howDoIChangeMyPcp = new QuestionObject("How do I change my PCP?");
const howDoIChangeMyDoctor = new QuestionObject("How do I change my doctor?");
const howDoIChangeMyPrimaryCarePhysician = new QuestionObject("How do I change my primary care physician?");
const doIHaveAnyPcp = new QuestionObject("Do I have any PCP?");

export const currentPcpQuestionsArray = [
    whoIsMyPcp,
    whoIsAssignedAsMyPcp,
    doIHaveAPcp,
    whoIsMyPrimaryDoctor,
    whoIsMyPrimaryCareDoctor,
    whoIsMyPrimaryCarePhysician,
    doIHaveAPrimaryDoctor,
    doIHaveAPrimaryCareDoctor,
    doIHaveAPrimaryCarePhysician,
    canIUpdateMyPcp,
    canIUpdateMyPrimaryCarePhysician,
    howDoIUpdateMyPrimaryCarePhysician,
    howDoIUpdateMyDoctor,
    howDoIUpdateMyPcp,
    howCanIFindMyPcp,
    howCanIFindMyAssignedPcp,
    whereDoIFindMyPcp,
    whereDoIFindMyAssignedPcp,
    whereDoIUpdateMyPcp,
    whereDoIUpdateMyPrimaryCarePhysician,
    whereDoIUpdateMyPrimaryDoctor,
    howDoIChangeMyPcp,
    howDoIChangeMyDoctor,
    howDoIChangeMyPrimaryCarePhysician,
    doIHaveAnyPcp
];



