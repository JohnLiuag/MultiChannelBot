import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/work-partners.builder.js';
import { randomizer } from '../../../services/question-randomizer.service.js'
import * as questions from '../../../test-data/questions/work-partners-questions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/work-partners.schemas.js';


let userData;
let userId; 
const compensationRandomQuestion = randomizer.getRandomQuestion(questions.compensationQuestionsArray);
const leaveFileRandomQuestion = randomizer.getRandomQuestion(questions.leaveFileQuestionsArray);
const leaveStatusRandomQuestion = randomizer.getRandomQuestion(questions.leaveStatusQuestionsArray);

suite('Work Partners Tests: Active plan with U135 (dual)', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.lesnbry2;
        userData = await collector.getData(userId);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(compensationRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.workPartnersAnswer(userData, 'compensation');
        const postMessage = await user.conversation.postMessage(compensationRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.workPartnersAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(leaveFileRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.workPartnersAnswer(userData, 'leaveFile');
        const postMessage = await user.conversation.postMessage(leaveFileRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.workPartnersAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(leaveStatusRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.workPartnersAnswer(userData, 'leaveStatus');
        const postMessage = await user.conversation.postMessage(leaveStatusRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.workPartnersAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
