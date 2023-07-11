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
const oopRandomQuestion = randomizer.getRandomQuestion(questions.oopQuestionsArray);
const oopLimitRandomQuestion = randomizer.getRandomQuestion(questions.oopLimitQuestionsArray);
const otcMedicationRandomQuestion = randomizer.getRandomQuestion(questions.otcMedicationQuestionsArray);
const participtingProviderRandomQuestion = randomizer.getRandomQuestion(questions.participatingProviderQuestionsArray);
const pAndTCommitteeRandomQuestion = randomizer.getRandomQuestion(questions.pAndTCommitteeQuestionsArray);
const pointOfServiceRandomQuestion = randomizer.getRandomQuestion(questions.pointOfServiceQuestionsArray);
const ppoRandomQuestion = randomizer.getRandomQuestion(questions.ppoQuestionsArray);
const premiumRandomQuestion = randomizer.getRandomQuestion(questions.premiumQuestionsArray);
const prescriptionDrugRandomQuestion = randomizer.getRandomQuestion(questions.prescriptionDrugQuestionsArray);
const preventiveCareRandomQuestion = randomizer.getRandomQuestion(questions.preventiveCareQuestionsArray);

suite("FAQ Tests: 51-60", function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatsasha;
        userData = await collector.getData(userId, []);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });
    
    test(oopRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(oopRandomQuestion, userData.consumerProfile, this);
            
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.outOfPocket);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(oopLimitRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(oopLimitRandomQuestion, userData.consumerProfile, this);
            
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.outOfPocketLimit);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(otcMedicationRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(otcMedicationRandomQuestion, userData.consumerProfile, this);
            
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.overTheCounterMedication);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(participtingProviderRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(participtingProviderRandomQuestion, userData.consumerProfile, this);
            
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.participatingProvider);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(pAndTCommitteeRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(pAndTCommitteeRandomQuestion, userData.consumerProfile, this);
            
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.pharmacyAndTherapeuticsCommittee);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(pointOfServiceRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(pointOfServiceRandomQuestion, userData.consumerProfile, this);
            
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.pointOfService);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(ppoRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(ppoRandomQuestion, userData.consumerProfile, this);
            
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.prefferedProviderOrganization);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(premiumRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(premiumRandomQuestion, userData.consumerProfile, this);
            
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answersArray[0], answer.premiumPart1);
        validate.answer(getAnswer.answersArray[1], answer.premiumPart2);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(prescriptionDrugRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(prescriptionDrugRandomQuestion, userData.consumerProfile, this);
            
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.prescriptionDrug);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    test(preventiveCareRandomQuestion.text, async function () {
    
        const postMessage = await user.conversation.postMessage(preventiveCareRandomQuestion, userData.consumerProfile, this);
            
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.faq);
        validate.answer(getAnswer.answer, answer.preventiveCare);
        validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
