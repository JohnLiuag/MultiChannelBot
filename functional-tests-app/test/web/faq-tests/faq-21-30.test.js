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
const eahmoRandomQuestion = randomizer.getRandomQuestion(questions.eahmoQuestionsArray);
const excludedServiceRandomQuestion = randomizer.getRandomQuestion(questions.excludedServiceQuestionsArray);
const epoRandomQuestion = randomizer.getRandomQuestion(questions.epoQuestionsArray);
const eobRandomQuestion = randomizer.getRandomQuestion(questions.eobQuestionsArray);
const fsaRandomQuestion = randomizer.getRandomQuestion(questions.fsaQuestionsArray);
const formularyRandomQuestion = randomizer.getRandomQuestion(questions.formularyQuestionsArray);
const genericMedicationRandomQuestion = randomizer.getRandomQuestion(questions.genericMedicationQuestionsArray);
const grievenceDateRandomQuestion = randomizer.getRandomQuestion(questions.grievenceQuestionsArray);
const hmoRandomQuestion = randomizer.getRandomQuestion(questions.hmoQuestionsArray);
const hraRandomQuestion = randomizer.getRandomQuestion(questions.hraQuestionsArray);

suite("FAQ Tests: 21-30", function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatsasha;
        userData = await collector.getData(userId, []);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });
    
    test(eahmoRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(eahmoRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.enchancedAccessHealthMaintanceOrganization);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(excludedServiceRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(excludedServiceRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.excludedService);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(epoRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(epoRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.exclusiveProviderOrganization);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(eobRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(eobRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.explanationOfBenefits);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(fsaRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(fsaRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answersArray[0], answer.flexibleSpendingAccountPart1);
        validate.answer(getAnswer.answersArray[1], answer.flexibleSpendingAccountPart2);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(formularyRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(formularyRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.formulary);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(genericMedicationRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(genericMedicationRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answersArray[0], answer.genericMedicationPart1);
        validate.answer(getAnswer.answersArray[1], answer.genericMedicationPart2);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(grievenceDateRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(grievenceDateRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.grievence);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(hmoRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(hmoRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.healthMaintenanceOrganization);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(hraRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(hraRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.healthReimbursementAccount);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
