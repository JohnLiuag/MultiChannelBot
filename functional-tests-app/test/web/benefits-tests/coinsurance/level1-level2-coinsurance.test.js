import { user } from '../../../../services/user.service.js';
import { validate } from '../../../../services/validator.service.js';
import { environmentVariables } from '../../../../env.variables.js';
import { collector } from '../../../../services/data-collector-service.js';
import { builder } from '../../../../services/answer-builders/coinsurance.builder.js';
import { randomizer } from '../../../../services/question-randomizer.service.js'
import * as questions from '../../../../test-data/questions/benefits-questions.test-data.js';
import * as postSchema from '../../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../../test-data/schemas/benefits.schemas.js';


let userData;
let userId; 
const coinsuranceRandomQuestion = randomizer.getRandomQuestion(questions.coinsuranceQuestionsArray);

suite('Coinsurance Tests: Level 1 + Level 2', function () {
    
    suiteSetup(async function () {
        userId = environmentVariables.user.chatkasey;
        userData = await collector.getData(userId, ['benefits']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(coinsuranceRandomQuestion.text, async function () {
    
        const expectedAnswer = await builder.coinsuranceAnswer(userData, 'active');
        const postMessage = await user.conversation.postMessage(coinsuranceRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.coinsuranceAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
