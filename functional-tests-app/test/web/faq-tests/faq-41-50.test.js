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
const medicareRandomQuestion = randomizer.getRandomQuestion(questions.medicareQuestionsArray);
const medicareAdvantageRandomQuestion = randomizer.getRandomQuestion(questions.medicareAdvantageQuestionsArray);
const partARandomQuestion = randomizer.getRandomQuestion(questions.partAQuestionsArray);
const partBRandomQuestion = randomizer.getRandomQuestion(questions.partBQuestionsArray);
const partCRandomQuestion = randomizer.getRandomQuestion(questions.partCQuestionsArray);
const partDRandomQuestion = randomizer.getRandomQuestion(questions.partDQuestionsArray);
const ncqaRandomQuestion = randomizer.getRandomQuestion(questions.ncqaQuestionsArray);
const networkRandomQuestion = randomizer.getRandomQuestion(questions.networkQuestionsArray);
const nonParticipatingProviderRandomQuestion = randomizer.getRandomQuestion(questions.nonParticipatingProviderQuestionsArray);
const enrollmentRandomQuestion = randomizer.getRandomQuestion(questions.enrollmentQuestionsArray);

suite("FAQ Tests: 41-50", function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatsasha;
        userData = await collector.getData(userId, []);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(medicareRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(medicareRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.medicare);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(medicareAdvantageRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(medicareAdvantageRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answersArray[0], answer.medicareAdvantagePart1);
        validate.answer(getAnswer.answersArray[1], answer.medicareAdvantagePart2);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(partARandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(partARandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.medicarePartA);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(partBRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(partBRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.medicarePartB);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(partCRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(partCRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answersArray[0], answer.medicarePartCPart1);
        validate.answer(getAnswer.answersArray[1], answer.medicarePartCPart2);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(partDRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(partDRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.medicarePartD);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(ncqaRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(ncqaRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.nationalCommitteeForQualityAssrance);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(networkRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(networkRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.network);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(nonParticipatingProviderRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(nonParticipatingProviderRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.nonParticipatingProvider);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(enrollmentRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(enrollmentRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.openEnrollment);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
