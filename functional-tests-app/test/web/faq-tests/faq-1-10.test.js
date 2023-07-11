import { user } from "../../../services/user.service.js";
import { validate } from "../../../services/validator.service.js";
import { environmentVariables } from "../../../env.variables.js"
import { collector } from '../../../services/data-collector-service.js';
import { randomizer } from '../../../services/question-randomizer.service.js'
import * as questions from "../../../test-data/questions/faq-questions.test-data.js";
import * as answer from "../../../test-data/answers/faq-answers.test-data.js";
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/faq.schemas.js';


let userData;
let userId;
const allowedAmountRandomQuestion = randomizer.getRandomQuestion(questions.allowedAmountQuestionsArray);
const appealRandomQuestion = randomizer.getRandomQuestion(questions.appealQuestionsArray);
const balanceBillRandomQuestion = randomizer.getRandomQuestion(questions.balanceBillQuestionsArray);
const benefitPeriodRandomQuestion = randomizer.getRandomQuestion(questions.benefitPeriodQuestionsArray);
const brandNameDrugRandomQuestion = randomizer.getRandomQuestion(questions.brandNameDrugQuestionsArray);
const brokerRandomQuestion = randomizer.getRandomQuestion(questions.brokerQuestionsArray);
const cocRandomQuestion = randomizer.getRandomQuestion(questions.cocQuestionsArray);
const claimRandomQuestion = randomizer.getRandomQuestion(questions.claimQuestionsArray);
const cobraRandomQuestion = randomizer.getRandomQuestion(questions.cobraQuestionsArray);
const coinsuranceRandomQuestion = randomizer.getRandomQuestion(questions.coinsuranceQuestionsArray);

suite("FAQ Tests: 1-10", function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatsasha;
        userData = await collector.getData(userId, []);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });
    
// 1-10
    test(allowedAmountRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(allowedAmountRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answersArray[0], answer.allowedAmountPart1);
        validate.answer(getAnswer.answersArray[1], answer.allowedAmountPart2);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(appealRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(appealRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.appeal);
        validate.answer(getAnswer.followUpQuestion[0], answer.followUpQuestion[0]);
        validate.answer(getAnswer.followUpQuestion[1], answer.followUpQuestion[1]);
        validate.done();
    });

    test(balanceBillRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(balanceBillRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.balanceBilling);
        validate.answer(getAnswer.followUpQuestion[0], answer.followUpQuestion[0]);
        validate.answer(getAnswer.followUpQuestion[1], answer.followUpQuestion[1]);
        validate.done();
    });

    test(benefitPeriodRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(benefitPeriodRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.benefitPeriod);
        validate.answer(getAnswer.followUpQuestion[0], answer.followUpQuestion[0]);
        validate.answer(getAnswer.followUpQuestion[1], answer.followUpQuestion[1]);
        validate.done();
    });

    test(brandNameDrugRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(brandNameDrugRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.brandNameDrug);
        validate.answer(getAnswer.followUpQuestion[0], answer.followUpQuestion[0]);
        validate.answer(getAnswer.followUpQuestion[1], answer.followUpQuestion[1]);
        validate.done();
    });

    test(brokerRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(brokerRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.broker);
        validate.answer(getAnswer.followUpQuestion[0], answer.followUpQuestion[0]);
        validate.answer(getAnswer.followUpQuestion[1], answer.followUpQuestion[1]);
        validate.done();
    });

    test(cocRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(cocRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.brokerCertificateOfCoverage);
        validate.answer(getAnswer.followUpQuestion[0], answer.followUpQuestion[0]);
        validate.answer(getAnswer.followUpQuestion[1], answer.followUpQuestion[1]);
        validate.done();
    });

    test(claimRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(claimRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.claim);
        validate.answer(getAnswer.followUpQuestion[0], answer.followUpQuestion[0]);
        validate.answer(getAnswer.followUpQuestion[1], answer.followUpQuestion[1]);
        validate.done();
    });

    test(cobraRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(cobraRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answersArray[0], answer.cobraPart1);
        validate.answer(getAnswer.answersArray[1], answer.cobraPart2);
        validate.answer(getAnswer.followUpQuestion[0], answer.followUpQuestion[0]);
        validate.answer(getAnswer.followUpQuestion[1], answer.followUpQuestion[1]);
        validate.done();
    });

    test(coinsuranceRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(coinsuranceRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.coinsurance);
        validate.answer(getAnswer.followUpQuestion[0], answer.followUpQuestion[0]);
        validate.answer(getAnswer.followUpQuestion[1], answer.followUpQuestion[1]);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
