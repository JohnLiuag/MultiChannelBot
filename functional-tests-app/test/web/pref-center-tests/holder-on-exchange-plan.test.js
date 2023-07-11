import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/pref-center.builder.js';
import { randomizer } from '../../../services/question-randomizer.service.js';
import * as questions from '../../../test-data/questions/pref-center-questions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/pref-center.schemas.js';


let userData;
let userId; 
const emailUpdateRandomQuestion = randomizer.getRandomQuestion(questions.emailQuestionsArray);
const addressUpdateRandomQuestion = randomizer.getRandomQuestion(questions.addressQuestionsArray);
const phoneNumberUpdateRandomQuestion = randomizer.getRandomQuestion(questions.phoneNumberQuestionsArray);
const paperlessCommunicationsRandomQuestion = randomizer.getRandomQuestion(questions.paperlessCommunicationsQuestionsArray);

suite('Pref Center Tests: Holder with on-exchange plan', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatbetsy;
        userData = await collector.getData(userId);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(emailUpdateRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.prefCenterAnswer(userData, 'email');
        const postMessage = await user.conversation.postMessage(emailUpdateRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.prefCenterAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(addressUpdateRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.prefCenterAnswer(userData, 'address', 'holder-on-exchange');
        const postMessage = await user.conversation.postMessage(addressUpdateRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.prefCenterAnswer);
        validate.answer(getAnswer.answersArray[0], expectedAnswer.answer[0]);
        validate.answer(getAnswer.answersArray[1], expectedAnswer.answer[1]);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(phoneNumberUpdateRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.prefCenterAnswer(userData, 'phone number');
        const postMessage = await user.conversation.postMessage(phoneNumberUpdateRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.prefCenterAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(paperlessCommunicationsRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.prefCenterAnswer(userData, 'paperless');
        const postMessage = await user.conversation.postMessage(paperlessCommunicationsRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.prefCenterAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
