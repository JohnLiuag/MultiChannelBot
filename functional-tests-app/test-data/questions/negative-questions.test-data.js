function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

const howCanIGetToTheLibrary = new QuestionObject("How can I get to the library?");
const whereCanIGetPizza = new QuestionObject("Where can I get pizza?");

export const negativeQuestionsArray = [
    howCanIGetToTheLibrary,
    whereCanIGetPizza
];
