import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/current-pcp.builder.js';
import { randomizer } from '../../../services/question-randomizer.service.js'
import * as questions from '../../../test-data/questions/current-pcp-questions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/current-pcp.schemas.js';


let userData;
let userId; 
const currentPcpRandomQuestion = randomizer.getRandomQuestion(questions.currentPcpQuestionsArray);

suite('PCP Tests: Future DentalVision plan', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatkait;
        userData = await collector.getData(userId, ['pcp']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(currentPcpRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.currentPcpAnswer(userData, 'wellness/non medical/dv');
        const postMessage = await user.conversation.postMessage(currentPcpRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.currentPcpAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
