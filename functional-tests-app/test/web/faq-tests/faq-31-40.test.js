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
const hsaRandomQuestion = randomizer.getRandomQuestion(questions.hsaQuestionsArray);
const hipaaRandomQuestion = randomizer.getRandomQuestion(questions.hipaaQuestionsArray);
const homeHealthCareRandomQuestion = randomizer.getRandomQuestion(questions.homeHealthCareQuestionsArray);
const hospiceServicesRandomQuestion = randomizer.getRandomQuestion(questions.hospiceServicesQuestionsArray);
const hospitalizationRandomQuestion = randomizer.getRandomQuestion(questions.hospitalizationQuestionsArray);
const idCardRandomQuestion = randomizer.getRandomQuestion(questions.idCardQuestionsArray);
const individualPolicyRandomQuestion = randomizer.getRandomQuestion(questions.individualPolicyQuestionsArray);
const inNetworkRandomQuestion = randomizer.getRandomQuestion(questions.inNetworkQuestionsArray);
const medicalAssistanceRandomQuestion = randomizer.getRandomQuestion(questions.medicalAssistanceQuestionsArray);
const medicalNecessaryRandomQuestion = randomizer.getRandomQuestion(questions.medicalNecessaryQuestionsArray);

suite("FAQ Tests: 31-40", function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatsasha;
        userData = await collector.getData(userId, []);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });
    
    test(hsaRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(hsaRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        
        validate.answer(getAnswer.answersArray[0], answer.healthSavingsAccountPart1);
        validate.answer(getAnswer.answersArray[1], answer.healthSavingsAccountPart2);
        validate.answer(getAnswer.answersArray[2], answer.healthSavingsAccountPart3);
        validate.answer(getAnswer.answersArray[3], answer.healthSavingsAccountPart4);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(hipaaRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(hipaaRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answersArray[0], answer.hipaaPart1);
        validate.answer(getAnswer.answersArray[1], answer.hipaaPart2);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(homeHealthCareRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(homeHealthCareRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.homeHealthCare);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(hospiceServicesRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(hospiceServicesRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.hospiceServices);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(hospitalizationRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(hospitalizationRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.hospitalization);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(idCardRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(idCardRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.idCard);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(individualPolicyRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(individualPolicyRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.individualPolicy);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(inNetworkRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(inNetworkRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.inNetwork);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(medicalAssistanceRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(medicalAssistanceRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.medicalAssistance);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(medicalNecessaryRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(medicalNecessaryRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.medicalNecessary);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
