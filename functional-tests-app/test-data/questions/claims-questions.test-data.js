function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

const whereIsMyEobs = new QuestionObject("Where are my EOBs?");
const whereAreMyExplanationOfBenefits = new QuestionObject("Where are my Explanation of Benefits?");
const whereAreMyEobDocuments = new QuestionObject("Where are my EOB documents?");
const whereAreMyExplanationOfBenefitDocuments = new QuestionObject("Where are my explanation of benefit documents?");
const whereIsMyEob = new QuestionObject("Where is my EOB?");
const whereIsMyExplanationOfBenefits = new QuestionObject("Where is my Explanation of Benefits?");
const showMeMyEobs = new QuestionObject("Show me my EOBs");
const showMeMyEobDocuments = new QuestionObject("Show me my EOB documents");
const takeMeToMyEobs = new QuestionObject("Take me to my EOBs");
const takeMeToMyEob = new QuestionObject("Take me to my EOB");
const takeMeToMyExplanationOfBenefits = new QuestionObject("Take me to my explanation of benefits");
const doIHaveEobs = new QuestionObject("Do I have EOBs?");
const doIHaveAnEob = new QuestionObject("Do I have an EOB?");
const doIHaveAnExplanationOfBenefits = new QuestionObject("Do I have an explanation of benefits?");
const doIHaveExplanationOfBenefits = new QuestionObject("Do I have explanations of benefits?");
const iWantToSeeMyEob = new QuestionObject("I want to see my EOB");
const iWantToSeeMyEobs = new QuestionObject("I want to see my EOBs");
const iWantToSeeMyExplanationOfBenefits = new QuestionObject("I want to see my explanation of benefits");
const isThereAnEobForMyClaim = new QuestionObject("Is there an EOB for my claim?");
const areThereEobsForMyClaims = new QuestionObject("Are there EOBs for my claims?");
const iNeedMyEob = new QuestionObject("I need my EOB");
const iNeedMyEobs = new QuestionObject("I need my EOBs");
const iNeedMyExplanationOfBenefits = new QuestionObject("I need my explanation of benefits");
const whereAreMyClaims = new QuestionObject("Where are my claims?");
const wheereIsMyClaim = new QuestionObject("Where is my claim?");
const whereCanISeeMyClaim = new QuestionObject("Where can I see my claim?");
const whereCanISeeMyClaims = new QuestionObject("Where can I see my claims?");
const whereCanIViewMyClaim = new QuestionObject("Where can I view my claim?");
const whereCanIViewMyClaims = new QuestionObject("Where can I view my claims?");
const canYouShowMeMyClaim = new QuestionObject("Can you show me my claim?");
const canYouShowMeMyClaims = new QuestionObject("Can you show me my claims?");
const iAmLookingForMyEobsOnline = new QuestionObject("I am looking for my EOB's online");

export const claimsQuestionsArray = [
    whereIsMyEobs,
    whereAreMyExplanationOfBenefits,
    whereAreMyEobDocuments,
    whereAreMyExplanationOfBenefitDocuments,
    whereIsMyEob,
    whereIsMyExplanationOfBenefits,
    showMeMyEobs,
    showMeMyEobDocuments,
    takeMeToMyEobs,
    takeMeToMyEob,
    takeMeToMyExplanationOfBenefits,
    doIHaveEobs,
    doIHaveAnEob,
    doIHaveAnExplanationOfBenefits,
    doIHaveExplanationOfBenefits,
    iWantToSeeMyEob,
    iWantToSeeMyEobs,
    iWantToSeeMyExplanationOfBenefits,
    isThereAnEobForMyClaim,
    areThereEobsForMyClaims,
    iNeedMyEob,
    iNeedMyEobs,
    iNeedMyExplanationOfBenefits,
    whereAreMyClaims,
    wheereIsMyClaim,
    whereCanISeeMyClaim,
    whereCanISeeMyClaims,
    whereCanIViewMyClaim,
    whereCanIViewMyClaims,
    canYouShowMeMyClaim,
    canYouShowMeMyClaims,
    iAmLookingForMyEobsOnline
];



