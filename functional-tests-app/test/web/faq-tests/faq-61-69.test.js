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
const primaryCareProviderRandomQuestion = randomizer.getRandomQuestion(questions.primaryCareProviderQuestionsArray);
const pffsRandomQuestion = randomizer.getRandomQuestion(questions.pffsQuestionsArray);
const priorAuthorizationRandomQuestion = randomizer.getRandomQuestion(questions.priorAuthorizationQuestionsArray);
const providerRandomQuestion = randomizer.getRandomQuestion(questions.providerQuestionsArray);
const quantityLimitRandomQuestion = randomizer.getRandomQuestion(questions.quantityLimitQuestionsArray);
const riderRandomQuestion = randomizer.getRandomQuestion(questions.riderQuestionsArray);
const reimbursementRandomQuestion = randomizer.getRandomQuestion(questions.reimbursementQuestionsArray);
const stepTherapyRandomQuestion = randomizer.getRandomQuestion(questions.stepTherapyQuestionsArray);
const specialistRandomQuestion = randomizer.getRandomQuestion(questions.specialistQuestionsArray);

suite("FAQ Tests: 61-69", function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatsasha;
        userData = await collector.getData(userId, []);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });
    
    test(primaryCareProviderRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(primaryCareProviderRandomQuestion, userData.consumerProfile, this);
            
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answersArray[0], answer.primaryCareProviderPart1);
        validate.answer(getAnswer.answersArray[1], answer.primaryCareProviderPart2);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(pffsRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(pffsRandomQuestion, userData.consumerProfile, this);
            
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.privateFreeForService);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(priorAuthorizationRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(priorAuthorizationRandomQuestion, userData.consumerProfile, this);
            
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answersArray[0], answer.priorAuthorizationPart1);
        validate.answer(getAnswer.answersArray[1], answer.priorAuthorizationPart2);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(providerRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(providerRandomQuestion, userData.consumerProfile, this);
            
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.provider);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(quantityLimitRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(quantityLimitRandomQuestion, userData.consumerProfile, this);
            
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.quantityLimit);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(riderRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(riderRandomQuestion, userData.consumerProfile, this);
            
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.rider);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(reimbursementRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(reimbursementRandomQuestion, userData.consumerProfile, this);
            
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.reimbursement);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(stepTherapyRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(stepTherapyRandomQuestion, userData.consumerProfile, this);
            
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.stepTherapy);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(specialistRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(specialistRandomQuestion, userData.consumerProfile, this);
            
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.specialist);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
