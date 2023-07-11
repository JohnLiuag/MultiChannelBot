import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/home-safety-order.builder.js';
import { randomizer } from '../../../services/question-randomizer.service.js';
import * as questions from '../../../test-data/questions/home-safety-order-questions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/home-safety-order.schemas.js';


let userData;
let userId; 
const homeSafetyOrderRandomQuestion = randomizer.getRandomQuestion(questions.homeSafetyOrderQuestionsArray);

suite('Home Safety Order Tests: Active Medicare plan with form', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.hickben;
        userData = await collector.getData(userId, ['homeSafetyForm']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(homeSafetyOrderRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.homeSafetyOrderAnswer(userData, 'medicare');
        const postMessage = await user.conversation.postMessage(homeSafetyOrderRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.homeSafetyOrderAnswer);
        validate.answer(getAnswer.answersArray[0], expectedAnswer.answer[0]);
        validate.answer(getAnswer.answersArray[1], expectedAnswer.answer[1]);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
