function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

const whatIsMiIdNumber = new QuestionObject("What is my ID number?");
const whatIsMyId = new QuestionObject("What is my ID?");
const whatIsMyMemberId = new QuestionObject("What is my member ID?");
const policyNumber = new QuestionObject("Policy number");
const whereCanIFindMyPolicyNumber = new QuestionObject("Where can I find my policy number?");
const healthInsurancePolicyNumber = new QuestionObject("Health insurance policy number");

export const generalIdNumbersQuestionsArray = [
    whatIsMiIdNumber,
    whatIsMyId,
    whatIsMyMemberId,
    policyNumber,
    whereCanIFindMyPolicyNumber,
    healthInsurancePolicyNumber,
];

const whatIsMyDentalIdNumber = new QuestionObject("What is my dental ID number?");
const whatIsMyDentalId = new QuestionObject("What is my dental ID?");
const whatIsMyDentalMemberId = new QuestionObject("What is my dental member ID?");
const whatIsMyMemberIdForDental = new QuestionObject("What is my member ID for dental?");

export const dentalIdNumbersQuestionsArray = [
    whatIsMyDentalIdNumber,
    whatIsMyDentalId,
    whatIsMyDentalMemberId,
    whatIsMyMemberIdForDental
];

const whatIsMyVisionIdNumber = new QuestionObject("What is my vision ID number?");
const whatIsMyVisionId = new QuestionObject("What is my vision ID?");
const whatIsMyVisionMemberId = new QuestionObject("What is my vision member ID?");
const whatIsMyMemberIdForVision = new QuestionObject("What is my member ID for vision?");

export const visionIdNumbersQuestionsArray = [
    whatIsMyVisionIdNumber,
    whatIsMyVisionId,
    whatIsMyVisionMemberId,
    whatIsMyMemberIdForVision
];
