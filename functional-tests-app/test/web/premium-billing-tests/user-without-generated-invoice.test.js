import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/premium-billing.builder.js';
import { randomizer } from '../../../services/question-randomizer.service.js';
import * as questions from '../../../test-data/questions/premium-billing-questions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/premium-billings.schemas.js';


let userData;
let userId; 
const premiumBillingRandomQuestion = randomizer.getRandomQuestion(questions.premiumBillingQuestionsArray);
const premiumBillingAutopayRandomQuestion = randomizer.getRandomQuestion(questions.premiumBillingAutopayQuestionsArray);

suite('Premiums Tests: user without generated invoice', function () {
    
    suiteSetup(async function () {
        userId = environmentVariables.user.chatjer;
        userData = await collector.getData(userId, ['invoices']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });
    
    test(premiumBillingRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.premiumBillingAnswer(userData, 'no invoice');
        const postMessage = await user.conversation.postMessage(premiumBillingRandomQuestion, userData.consumerProfile, this);
        
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

    test(premiumBillingAutopayRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.premiumBillingAnswer(userData, 'no invoice');
        const postMessage = await user.conversation.postMessage(premiumBillingAutopayRandomQuestion, userData.consumerProfile, this);
        
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

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
