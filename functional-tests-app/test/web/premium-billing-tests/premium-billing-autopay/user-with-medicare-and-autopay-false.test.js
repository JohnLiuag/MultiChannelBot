import { user } from '../../../../services/user.service.js';
import { validate } from '../../../../services/validator.service.js';
import { environmentVariables } from '../../../../env.variables.js';
import { collector } from '../../../../services/data-collector-service.js';
import { builder } from '../../../../services/answer-builders/premium-billing.builder.js';
import { randomizer } from '../../../../services/question-randomizer.service.js';
import * as questions from '../../../../test-data/questions/premium-billing-questions.test-data.js';
import * as postSchema from '../../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../../test-data/schemas/premium-billings.schemas.js';


let userData;
let userId;
const premiumBillingAutopayRandomQuestion = randomizer.getRandomQuestion(questions.premiumBillingAutopayQuestionsArray);

suite('Premiums Tests: user with Medicare plan (autoPayIndicator: false)', function () {
    
    suiteSetup(async function () {
        userId = environmentVariables.user.chatjoshua;
        userData = await collector.getData(userId, ['dependentEligibility', 'invoices']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });
    
    test(premiumBillingAutopayRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.premiumBillingAnswer(userData, 'premium billing autopay');
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
