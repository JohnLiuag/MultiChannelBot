import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/negative.builder.js';
import * as questions from '../../../test-data/questions/negative-questions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/negative-answer.schemas.js';


let userData;
const userId = environmentVariables.user.chatphyl;

suite('Negative Questions Tests', function () {

    suiteSetup(async function () {
        userData = await collector.getData(userId); 
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });
    
    questions.negativeQuestionsArray.forEach((question) => {
        test(question.text, async function () {
            
            const expectedAnswer = await builder.negativeAnswer();
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.negativeAnswer);
            validate.answer(getAnswer.answer, expectedAnswer);
            validate.done();
        });
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
