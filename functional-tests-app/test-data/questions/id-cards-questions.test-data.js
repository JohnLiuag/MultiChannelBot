function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.channelId = "webchat";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

export const whereCanIFindMyIdCard = new QuestionObject("Where can I find my ID card?");
const whereIsMyIdCard = new QuestionObject("Where is my ID card?");
const iNeedAnIdCard = new QuestionObject("I need an ID card.");
const iLostMyIdCard = new QuestionObject("I lost my ID card.");
const iLostMyMemberId = new QuestionObject("I lost my member ID.");
const canYouSendMeAnIdCard = new QuestionObject("Can you send me an ID card?");
const canYouSendMeIdCard = new QuestionObject("Can you send ID card?");
const iDCard = new QuestionObject("I'd Card");
const card = new QuestionObject("Card");
const cards = new QuestionObject("Cards");
const doIHaveAnyIdCards = new QuestionObject("Do I have any ID Cards?");
const couldIViewTheCardsOnline = new QuestionObject("Could I view the cards online?");
const canIViewTheCardsOnline = new QuestionObject("Can I view the cards online?");
const canIViewIdCardOnline = new QuestionObject("Can I view ID card online?");
const couldIViewIdCardOnline = new QuestionObject("Could I view ID card online?");

export const generalIdCardQuestionsArray = [
    whereCanIFindMyIdCard,
    whereIsMyIdCard,
    iNeedAnIdCard,
    iLostMyIdCard,
    iLostMyMemberId,
    canYouSendMeAnIdCard,
    canYouSendMeIdCard,
    iDCard,
    card,
    cards,
    doIHaveAnyIdCards,
    couldIViewTheCardsOnline,
    canIViewTheCardsOnline,
    canIViewIdCardOnline,
    couldIViewIdCardOnline
];

const iNeedAUpmcHealthPlanIdCard = new QuestionObject("I need a UPMC Health Plan ID card.");
const canYouSendMeAUpmcHealthPlanIdCard = new QuestionObject("Can you send me a UPMC Health Plan ID card?");
const canISeeMyUpmcHealthPlanIdCard = new QuestionObject("Can I see my UPMC Health Plan ID card?");
const isThereAUpmcHealthPlanIdCard = new QuestionObject("Is there a UPMC Health Plan ID card?");
const DoIHaveAUpmcHealthPlanIdCard = new QuestionObject("Do I have a UPMC Health Plan ID card?");
const upmcHealthPlanIdCard = new QuestionObject("UPMC Health Plan ID card");

export const upmcHealthPlanIdCardQuestionsArray = [
    iNeedAUpmcHealthPlanIdCard,
    canYouSendMeAUpmcHealthPlanIdCard,
    canISeeMyUpmcHealthPlanIdCard,
    isThereAUpmcHealthPlanIdCard,
    DoIHaveAUpmcHealthPlanIdCard,
    upmcHealthPlanIdCard
];

export const iNeedADentalIdCard = new QuestionObject("I need a dental ID card.");
const canYouSendMeADentalIdCard = new QuestionObject("Can you send me a dental ID card?");
const canISeeMyDentalIdCard = new QuestionObject("Can I see my dental ID card?");
const isThereADentalIdCard = new QuestionObject("Is there a dental ID card?");
const DoIHaveADentalIdCard = new QuestionObject("Do I have a dental ID card?");
const dentalIdCard = new QuestionObject("Dental ID card");

export const dentalIdCardQuestionsArray = [
    iNeedADentalIdCard,
    canYouSendMeADentalIdCard,
    canISeeMyDentalIdCard,
    isThereADentalIdCard,
    DoIHaveADentalIdCard,
    dentalIdCard
];

const iNeedADentalDiscountIdCard = new QuestionObject("I need a dental discount ID card.");
const canYouSendMeADentalDiscountIdCard = new QuestionObject("Can you send me a dental discount ID card?");
const canISeeMyDentalDiscountIdCard = new QuestionObject("Can I see my dental discount ID card?");
const isThereADentalDiscountIdCard = new QuestionObject("Is there a dental discount ID card?");
const DoIHaveADentalDiscountIdCard = new QuestionObject("Do I have a dental discount ID card?");
const dentalDiscountIdCard = new QuestionObject("Dental discount ID card");

export const dentalDiscountIdCardQuestionsArray = [
    iNeedADentalDiscountIdCard,
    canYouSendMeADentalDiscountIdCard,
    canISeeMyDentalDiscountIdCard,
    isThereADentalDiscountIdCard,
    DoIHaveADentalDiscountIdCard,
    dentalDiscountIdCard
];

const iNeedAVisionIdCard = new QuestionObject("I need a vision ID card.");
const canYouSendMeAVisionIdCard = new QuestionObject("Can you send me a vision ID card?");
const canISeeMyVisionIdCard = new QuestionObject("Can I see my vision ID card?");
const isThereAVisionIdCard = new QuestionObject("Is there a vision ID card?");
const DoIHaveAVisionIdCard = new QuestionObject("Do I have a vision ID card?");
const visionIdCard = new QuestionObject("Vision ID card");

export const visionIdCardQuestionsArray = [
    iNeedAVisionIdCard,
    canYouSendMeAVisionIdCard,
    canISeeMyVisionIdCard,
    isThereAVisionIdCard,
    DoIHaveAVisionIdCard,
    visionIdCard
];

export const iNeedAnAssistAmericaIdCard = new QuestionObject("I need an assist america ID card.");
const canYouSendMeAnAssistAmericaIdCard = new QuestionObject("Can you send me an assist america ID card?");
const canISeeMyAssistAmericaIdCard = new QuestionObject("Can I see my assist america ID card?");
const isThereAnAssistAmericaIdCard = new QuestionObject("Is there an assist america ID card?");
const DoIHaveAnAssistAmericaIdCard = new QuestionObject("Do I have an assist america ID card?");
const assistAmericaIdCard = new QuestionObject("Assist America ID card");

export const assistAmericaIdCardQuestionsArray = [
    iNeedAnAssistAmericaIdCard,
    canYouSendMeAnAssistAmericaIdCard,
    canISeeMyAssistAmericaIdCard,
    isThereAnAssistAmericaIdCard,
    DoIHaveAnAssistAmericaIdCard,
    assistAmericaIdCard
];

//Other scopes questions
export const isMyCoverageActive = new QuestionObject("Is my coverage active?");
export const isMyDentalCoverageActive = new QuestionObject("Is my dental coverage active?");
export const isMyVisionCoverageActive = new QuestionObject("Is my vision coverage active?");
export const whatIsMyDeductible = new QuestionObject("What is my deductible?");
export const whatIsMyOut_Of_Pocket_Maximum = new QuestionObject("What is my out-of-pocket maximum?");
export const whatIsMyCoinsurance = new QuestionObject("What is my coinsurance?");
export const whatIsMyMonthlyPremium = new QuestionObject("What is my monthly premium?");
export const whatIsAllowedAmount = new QuestionObject("What is allowed amount?");

