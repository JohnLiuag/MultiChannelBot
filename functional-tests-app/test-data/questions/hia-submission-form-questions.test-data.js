function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

const howDoISubmitForHIACredit = new QuestionObject("How do I submit for HIA credit?");
const howDoISubmitForHealthyUCredit = new QuestionObject("How do I submit for HealthyU credit?");
const whereDoISubmitForHIACredit = new QuestionObject("Where do I submit for HIA credit?");
const whereDoISubmitForHealthyUCredit = new QuestionObject("Where do I submit for HealthyU credit?");
const howDoIRequestHIACredit = new QuestionObject("How do I request HIA credit?");
const howDoIRequestHealthyUCredit = new QuestionObject("How do I request HealthyU credit?");
const whereDoIRequestHIACredit = new QuestionObject("Where do I request HIA credit?");
const whereDoIRequestHealthyUCredit = new QuestionObject("Where do I request HealthyU credit?");
const howDoIGetHIACredit = new QuestionObject("How do I get HIA credit?");
const howDoIGetHealthyUCredit = new QuestionObject("How do I get HealthyU credit?");
const whereIsTheHIAForm = new QuestionObject("Where is the HIA form?");
const whereIsTheHealthyUForm = new QuestionObject("Where is the HealthyU form?");
const whereIsTheIncentiveSubmissionForm = new QuestionObject("Where is the incentive submission form?");
const canYouSendMeTheHIAForm = new QuestionObject("Can you send me the HIA form?");
const canYouSendMeTheHealthyUForm = new QuestionObject("Can you send me the HealthyU form?");
const canYouSendMeTheHealthyUCreditForm = new QuestionObject("Can you send me the HealthyU credit form?");
const canYouSendMeTheIncentiveSubmissionForm = new QuestionObject("Can you send me the incentive submission form?");
const iNeedTheHIAForm = new QuestionObject("I need the HIA form");
const iNeedTheHealthyUForm = new QuestionObject("I need the HealthyU form");
const iNeedTheHealthyUCreditForm = new QuestionObject("I need the HealthyU credit form");
const iNeedTheIncentiveSubmissionForm = new QuestionObject("I need the incentive submission form");
const hIASubmissionForm = new QuestionObject("HIA submission form");
const healthyUSubmissionForm = new QuestionObject("HealthyU submission form");
const hIACreditForm = new QuestionObject("HIA credit form");
const healthyUCreditForm = new QuestionObject("HealthyU credit form");

export const hiaSubmissionFormQuestionsArray = [
    howDoISubmitForHIACredit,
    howDoISubmitForHealthyUCredit,
    whereDoISubmitForHIACredit,
    whereDoISubmitForHealthyUCredit,
    howDoIRequestHIACredit,
    howDoIRequestHealthyUCredit,
    whereDoIRequestHIACredit,
    whereDoIRequestHealthyUCredit,
    howDoIGetHIACredit,
    howDoIGetHealthyUCredit,
    whereIsTheHIAForm,
    whereIsTheHealthyUForm,
    whereIsTheIncentiveSubmissionForm,
    canYouSendMeTheHIAForm,
    canYouSendMeTheHealthyUForm,
    canYouSendMeTheHealthyUCreditForm,
    canYouSendMeTheIncentiveSubmissionForm,
    iNeedTheHIAForm,
    iNeedTheHealthyUForm,
    iNeedTheHealthyUCreditForm,
    iNeedTheIncentiveSubmissionForm,
    hIASubmissionForm,
    healthyUSubmissionForm,
    hIACreditForm,
    healthyUCreditForm
];