import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/coinsurance.builder.js';
import { builder as builder2 } from '../../../services/answer-builders/benefits.builder.js';
import * as questions from '../../../test-data/questions/benefits-questions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/benefits.schemas.js';


let userData;
let userId; 

suite('Benefits Tests: intents recognition', function () {
    
    suiteSetup(async function () {
        userId = environmentVariables.user.chatbotwellness;
        userData = await collector.getData(userId, ['benefits']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    questions.coinsuranceQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const expectedAnswer = await builder.coinsuranceAnswer(userData, 'active');
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
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
    });

    questions.deductibleQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const expectedAnswer = await builder2.benefitsAnswer(userData, 'deductible', 'active');
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.answer);
            validate.answer(getAnswer.answer, expectedAnswer.answers.firstLevelAnswer);
            validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.answers.followUpQuestion);
            validate.done();
        });
    });

    questions.outOfPocketQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const expectedAnswer = await builder2.benefitsAnswer(userData, 'outOfPocket', 'active');
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.answer);
            validate.answer(getAnswer.answer, expectedAnswer.answers.firstLevelAnswer);
            validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.answers.followUpQuestion);
            validate.done();
        });
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
