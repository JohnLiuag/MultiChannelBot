function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

const whereAreMyNewBenefits = new QuestionObject("What are my new benefits?");
const whatChangedWithMyPlan = new QuestionObject("What changed with my plan?");
const isMyPlanChanging = new QuestionObject("Is my plan changing?");
const whereCanISeeMyPlanChanges = new QuestionObject("Where can I see my plan changes?");
const whereIsMyAnoc = new QuestionObject("Where is my ANOC?");
const canIReadMyAnoc = new QuestionObject("Can I read my ANOC?");
const seeAnoc = new QuestionObject("See ANOC");
const whereIsMyAnnualNoticeOfChange = new QuestionObject("Where is my Annual Notice of Change?");
const canIReadMyAnnualNoticeOfChange = new QuestionObject("Can I read my Annual Notice of Change?");
const seeAnnualNoticeOfChange = new QuestionObject("See Annual Notice of Change");
const showMeMyAnoc = new QuestionObject("Show me my ANOC");
const showMeMyAnnualNoticeOfChange = new QuestionObject("Show me my Annual Notice of Change");
const whereIsAnoc = new QuestionObject("Where is ANOC");
const whereIsAnnualNoticeOfChange = new QuestionObject("Where is Annual Notice of Change?");
const iAmLookingForMyAnoc = new QuestionObject("I'm looking for my ANOC");
const iAmLookingForMyAnnualNoticeOfChange = new QuestionObject("I'm looking for my Annual Notice of Change");
const doINeedToDoAnythingToChangeMyPlan = new QuestionObject("Do I need to do anything to change my plan?");
const doINeedToDoAnythingToKeepMyPlan = new QuestionObject("Do I need to do anything to keep my plan?");
const doINeedToDoSomethingToChangeMyPlan = new QuestionObject("Do I need to do something to change my plan?");
const doINeedToDoSomethingToKeepMyPlan = new QuestionObject("Do I need to do something to keep my plan?");
const whatDoINeedToDoToChangeMyPlan = new QuestionObject("What do I need to do to change my plan?");
const whatDoINeedToDoToKeepMyPlan = new QuestionObject("What do I need to do to keep my plan?");

export const anocQuestionsArray = [
    whereAreMyNewBenefits,
    whatChangedWithMyPlan,
    isMyPlanChanging,
    whereCanISeeMyPlanChanges,
    whereIsMyAnoc,
    canIReadMyAnoc,
    seeAnoc,
    whereIsMyAnnualNoticeOfChange,
    canIReadMyAnnualNoticeOfChange,
    seeAnnualNoticeOfChange,
    showMeMyAnoc,
    showMeMyAnnualNoticeOfChange,
    whereIsAnoc,
    whereIsAnnualNoticeOfChange,
    iAmLookingForMyAnoc,
    iAmLookingForMyAnnualNoticeOfChange,
    doINeedToDoAnythingToChangeMyPlan,
    doINeedToDoAnythingToKeepMyPlan,
    doINeedToDoSomethingToChangeMyPlan,
    doINeedToDoSomethingToKeepMyPlan,
    whatDoINeedToDoToChangeMyPlan,
    whatDoINeedToDoToKeepMyPlan
];

