import { user } from '../../../../services/user.service.js';
import { validate } from '../../../../services/validator.service.js';
import { environmentVariables } from '../../../../env.variables.js';
import { collector } from '../../../../services/data-collector-service.js';
import { builder } from '../../../../services/answer-builders/benefits.builder.js';
import { randomizer } from '../../../../services/question-randomizer.service.js'
import * as questions from '../../../../test-data/questions/benefits-questions.test-data.js';
import * as postSchema from '../../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../../test-data/schemas/benefits.schemas.js';


let userData;
let userId; 
const deductibleRandomQuestion = randomizer.getRandomQuestion(questions.deductibleQuestionsArray);

suite('Deductible Tests: Individual In-network', function () {
    
    suiteSetup(async function () {
        userId = environmentVariables.user.leisai;
        userData = await collector.getData(userId, ['benefits']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(deductibleRandomQuestion.text, async function () {
    
        const expectedAnswer = await builder.benefitsAnswer(userData, 'deductible', 'active');
        const postMessage = await user.conversation.postMessage(deductibleRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.firstLevelAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answers.firstLevelAnswer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.answers.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
