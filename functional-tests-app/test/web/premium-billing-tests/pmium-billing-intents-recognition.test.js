import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/premium-billing.builder.js';
import * as questions from '../../../test-data/questions/premium-billing-questions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/premium-billings.schemas.js';


let userData;
let userId; 

suite('Premiums Tests: intents recognition', function () {
    
    suiteSetup(async function () {
        userId = environmentVariables.user.chatjimmy;
        userData = await collector.getData(userId, ['invoices']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });
    
    questions.premiumBillingQuestionsArray.forEach((question) => {
        test(question.text, async function () {
            
            const expectedAnswer = await builder.premiumBillingAnswer(userData, 'no premium');
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.premiumBillingAnswer);
            validate.answer(getAnswer.answer, expectedAnswer.answers.answer[0]);
            validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
            validate.done();
        });
    });

    questions.premiumBillingAutopayQuestionsArray.forEach((question) => {
        test(question.text, async function () {
            
            const expectedAnswer = await builder.premiumBillingAnswer(userData, 'no premium');
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.premiumBillingAnswer);
            validate.answer(getAnswer.answer, expectedAnswer.answers.answer[0]);
            validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
            validate.done();
        });
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
