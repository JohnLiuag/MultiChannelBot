function ActionObject (action) {
    this.locale = "en-EN";
    this.type = "message";
    this.channelId = "webchat";
    this.from = {
        "id": ""
    };
    this.textFormat = "plain";
    this.text = action;
}

export const yes = new ActionObject("I'd like to connect with a concierge.");
export const no = new ActionObject("Not now");
export const buttons = ["Not now", "I'd like to connect with a concierge."];
export const callUsSendMessageButtons = ["Call Us", "Send a message", "Not now"];

//First level live chat topics
export const myMedicalCoverage = new ActionObject("My medical coverage");
export const myDentalCoverage = new ActionObject("My dental coverage");
export const myVisionCoverage = new ActionObject("My vision coverage");
export const flexibleSpendingAccount = new ActionObject("Flexible spending account");
export const pregnancySupport = new ActionObject("Pregnancy support");
export const healthCoaching = new ActionObject("Health coaching");
export const workPartners = new ActionObject("WorkPartners");

//Pregnancy support live chat sub topics
export const maternityProgramOverview = new ActionObject("Maternity program overview");
export const discomfortsOfPregnancy = new ActionObject("Discomforts of pregnancy");
export const prenatalClasses = new ActionObject("Prenatal classes");
export const pregnancyRelatedConcerns = new ActionObject("Pregnancy-related concerns");
export const questionsAboutMyBaby = new ActionObject("Questions about my baby");
export const aTopicNotListedHere = new ActionObject("A topic not listed here");
export const findingAMaternityProvider = new ActionObject("Finding a maternity provider");
export const whenToCallMyDoctor = new ActionObject("When to call my doctor");
export const depression = new ActionObject("Depression");
export const postPregnancyRelatedConcerns = new ActionObject("Post-pregnancy related concerns");
export const breastFeedingAndBottleFeeding = new ActionObject("Breast-feeding and bottle-feeding");

//Health coaching live chat sub topics
export const lifestyleHealthGeneral = new ActionObject("Lifestyle Health (General)");
export const physicalHealthGeneral = new ActionObject("Physical Health (General)");
export const anxiety = new ActionObject("Anxiety");
export const nutrition = new ActionObject("Nutrition");
export const heartHealth = new ActionObject("Heart Health");
export const substanceAbuse = new ActionObject("Substance Abuse");
export const stress = new ActionObject("Stress");
export const lowBackPain = new ActionObject("Low Back Pain");
export const grief = new ActionObject("Grief");
export const behavioralHealthGeneral = new ActionObject("Behavioral Health (General)");
export const weightManagement = new ActionObject("Weight Management");
export const diabetes = new ActionObject("Diabetes");
export const physycalActivity = new ActionObject("Physical Activity");
export const breathing = new ActionObject("Breathing");
export const adhd = new ActionObject("ADHD");
export const tobaccoCessation = new ActionObject("Tobacco Cessation");
export const oncology = new ActionObject("Oncology");
export const painManagement = new ActionObject("Pain Management");

//Live chat is not available
export const callUs = new ActionObject("Call Us");
export const sendMessage = new ActionObject("Send a message");
export const notNow = new ActionObject("Not now");