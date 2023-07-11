function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

const whatIsMyCoinsurance = new QuestionObject("What is my coinsurance?");
const whatIsMyCoins = new QuestionObject("What is my coins?");
const whatDoIPayAfterMyDeuctible = new QuestionObject("What do I pay after my deductible?");
const howMuchDoIPayAfterDeductible = new QuestionObject("How much do I pay after deductible?");
const doIHaveCoinsurance = new QuestionObject("Do I have coinsurance?");
const howMchCoinsuranceDoIPay = new QuestionObject("How much coinsurance do I pay?");
const whatIsAmountOfCoinsurance = new QuestionObject("What is amount of coinsurance?");
const whatIsLevelOneCoinsurance = new QuestionObject("What is level 1 coinsurance?");
const whatIsLevelTwoCoinsurance = new QuestionObject("What is level 2 coinsurance?");
const whatIsInNetworkCoinsurance = new QuestionObject("What is in network coinsurance?");
const whatIsOutOfNetworkCoinsurance = new QuestionObject("What is out of network coinsurance?");
const whatIsOonkCoinsurance = new QuestionObject("What is OON coinsurance?");
const isThereAnyCoinsuranceThatIOwe = new QuestionObject("Is there any coinsurance that I owe?");

export const coinsuranceQuestionsArray = [
    whatIsMyCoinsurance,
    whatIsMyCoins,
    whatDoIPayAfterMyDeuctible,
    howMuchDoIPayAfterDeductible,
    doIHaveCoinsurance,
    howMchCoinsuranceDoIPay,
    whatIsAmountOfCoinsurance,
    whatIsLevelOneCoinsurance,
    whatIsLevelTwoCoinsurance,
    whatIsInNetworkCoinsurance,
    whatIsOutOfNetworkCoinsurance,
    whatIsOonkCoinsurance,
    isThereAnyCoinsuranceThatIOwe
];

const whatIsMyDeductible = new QuestionObject("What is my deductible?");
const haveIMetMyDeductible = new QuestionObject("Have I met my deductible?");
const didIMetMyDeductible = new QuestionObject("Did I meet my deductible?");
const howMuchIsLeftOnMyDeductible = new QuestionObject("How much is left on my deductible?");
const whatDoIHaveToPayForMyDeductible = new QuestionObject("What do I have to pay for my deductible?");
const doIHaveDeductible = new QuestionObject("Do I have a deductible?");
const spendingSummary = new QuestionObject("Spending summary");

export const deductibleQuestionsArray = [
    whatIsMyDeductible,
    haveIMetMyDeductible,
    didIMetMyDeductible,
    howMuchIsLeftOnMyDeductible,
    whatDoIHaveToPayForMyDeductible,
    doIHaveDeductible,
    spendingSummary
];

const whatIsMyOut_Of_Pocket_Maximum = new QuestionObject("What is my out-of-pocket maximum?");
const whatIsMyOutOfPocketMaximum = new QuestionObject("What is my out of pocket maximum?");
const whatIsMyOut_Of_PocketMax = new QuestionObject("What is my out-of-pocket max?");
const whatIsMyOutOfPocketMax = new QuestionObject("What is my out of pocket max?");
const whatIsMyOop = new QuestionObject("What is my OOP?");
const whatIsMyOopMax = new QuestionObject("What is my OOP max?");
const didIMeetMyOut_Of_Pocket_Maximum = new QuestionObject("Did I meet my out-of-pocket maximum?");
const didIMeetMyOut_Of_Pocket_Max = new QuestionObject("Did I meet my out-of-pocket max?");
const didIMeetMyOop = new QuestionObject("Did I meet my OOP?");
const didIMeetMyOopMax = new QuestionObject("Did I meet my OOP max?");
const howMuchDoIHaveToPayWithMyPlan = new QuestionObject("How much do I have to pay with my plan?");
const whatIsMyPlanMaximum = new QuestionObject("What is my plan maximum?");
const whatIsMyPlanMax = new QuestionObject("What is my plan max?");
export const outOfPocketQuestionsArray = [
    whatIsMyOut_Of_Pocket_Maximum,
    whatIsMyOutOfPocketMaximum,
    whatIsMyOut_Of_PocketMax,
    whatIsMyOutOfPocketMax,
    whatIsMyOop,
    whatIsMyOopMax,
    didIMeetMyOut_Of_Pocket_Maximum,
    didIMeetMyOut_Of_Pocket_Max,
    didIMeetMyOop,
    didIMeetMyOopMax,
    howMuchDoIHaveToPayWithMyPlan,
    whatIsMyPlanMaximum,
    whatIsMyPlanMax
];