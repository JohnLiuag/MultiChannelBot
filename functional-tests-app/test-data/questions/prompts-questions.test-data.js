function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

//First level prompts
export const idCards = new QuestionObject("ID Cards");
export const medicalCoverage = new QuestionObject("Medical Coverage");
export const coverageStatus = new QuestionObject("Coverage Status");
export const spendingAccounts = new QuestionObject("Spending Accounts");

//Medical Coverage questions
export const deductible = new QuestionObject("Deductible?");
export const out_Of_Pocket_Max = new QuestionObject("Out of Pocket Max?");
export const coinsurance = new QuestionObject("Coinsurance?");

//Coverage Status & ID Cards questions
export const medical = new QuestionObject("Medical");
export const dental = new QuestionObject("Dental");
export const vision = new QuestionObject("Vision");
export const assistAmerica = new QuestionObject("Assist America");
export const dentalDiscount = new QuestionObject("Value Added Plan");

//Spending accounts questions
export const hsa = new QuestionObject("HSA");
export const fsa = new QuestionObject("FSA");
export const dca = new QuestionObject("DCA");
export const trn = new QuestionObject("TRN");
export const pkg = new QuestionObject("PKG");
export const hia = new QuestionObject("HIA");
export const hra = new QuestionObject("HRA");
export const flexSpendCard = new QuestionObject("Flex Spend Card");
export const shopHealthyCard = new QuestionObject("Shop Healthy Card");

export const pregnancySupport = new QuestionObject("Pregnancy Support");
export const healthCoaching = new QuestionObject("Health Coaching");

export const cancel = new QuestionObject("cancel");

export const menu = new QuestionObject("menu");
const me_u = new QuestionObject("Me u");
const mebu = new QuestionObject("Mebu");
const menus = new QuestionObject("Menus");
const menue = new QuestionObject("Menue");
const meni = new QuestionObject("Meni");
const startOver = new QuestionObject("Start over");

export const menuWordsQuestionsArray = [
    menu,
    me_u,
    mebu,
    menus,
    menue,
    meni,
    startOver
]

export const isMyCoverageActive = new QuestionObject("Is my coverage active?");