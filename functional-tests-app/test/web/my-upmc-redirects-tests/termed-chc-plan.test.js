import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/my-upmc-redirects.builder.js';
import { randomizer } from '../../../services/question-randomizer.service.js'
import * as questions from '../../../test-data/questions/my-upmc-redirects-questions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/my-upmc-redirects.schemas.js';


let userData;
let userId; 
const currentAppointmentRandomQuestion = randomizer.getRandomQuestion(questions.currentAppointmentQuestionsArray);
const scheduleAnAppointmentRandomQuestion = randomizer.getRandomQuestion(questions.scheduleAnAppointmentQuestionsArray);
const testResultsRandomQuestion = randomizer.getRandomQuestion(questions.testResultsQuestionsArray);

suite('MyUPMC Redirects Tests: Termed CHC plan', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatmike;
        userData = await collector.getData(userId);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(currentAppointmentRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.myUpmcRedirectsAnswer(userData, 'current appointment', 'other');
        const postMessage = await user.conversation.postMessage(currentAppointmentRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.myUpmcRedirectsAnswer);
        validate.answer(getAnswer.answersArray[0], expectedAnswer.answer[0]);
        validate.answer(getAnswer.answersArray[1], expectedAnswer.answer[1]);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(scheduleAnAppointmentRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.myUpmcRedirectsAnswer(userData, 'schedule an appointment', 'other');
        const postMessage = await user.conversation.postMessage(scheduleAnAppointmentRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.myUpmcRedirectsAnswer);
        validate.answer(getAnswer.answersArray[0], expectedAnswer.answer[0]);
        validate.answer(getAnswer.answersArray[1], expectedAnswer.answer[1]);
        validate.answer(getAnswer.answersArray[2], expectedAnswer.answer[2]);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(testResultsRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.myUpmcRedirectsAnswer(userData, 'test results', 'other');
        const postMessage = await user.conversation.postMessage(testResultsRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.myUpmcRedirectsAnswer);
        validate.answer(getAnswer.answersArray[0], expectedAnswer.answer[0]);
        validate.answer(getAnswer.answersArray[1], expectedAnswer.answer[1]);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
