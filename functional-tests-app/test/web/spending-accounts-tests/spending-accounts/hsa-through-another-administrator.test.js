import { user } from '../../../../services/user.service.js';
import { validate } from '../../../../services/validator.service.js';
import { environmentVariables } from '../../../../env.variables.js';
import { collector } from '../../../../services/data-collector-service.js';
import { builder } from '../../../../services/answer-builders/spending-accounts.builder.js';
import { randomizer } from '../../../../services/question-randomizer.service.js';
import * as questions from '../../../../test-data/questions/spending-accounts-questions.test-data.js';
import * as postSchema from '../../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../../test-data/schemas/spending-accounts.schemas.js';


let userData;
let userId;
const fsaRandomQuestion = randomizer.getRandomQuestion(questions.fsaQuestionsArray);
const hsaRandomQuestion = randomizer.getRandomQuestion(questions.hsaQuestionsArray);
const generalSpendingAccountsRandomQuestion = randomizer.getRandomQuestion(questions.generalSpendingAccountsQuestionsArray);

suite('Spending Account Tests: HSA through another administrator', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.shoukar;
        userData = await collector.getData(userId, ['eligibility', 'medicareFlexCard', 'spendingAccounts']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(hsaRandomQuestion.text, async function () {
    
        const expectedAnswer = await builder.spendingAccountsAnswer(userData, 'another administrator');
        const postMessage = await user.conversation.postMessage(hsaRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.spendingAccounts);
        validate.answer(getAnswer.answersArray[0], expectedAnswer.answers.answer[0]);
        validate.answer(getAnswer.answersArray[1], expectedAnswer.answers.answer[1]);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.answers.followUpQuestion);
        validate.done();
    });

    test(generalSpendingAccountsRandomQuestion.text, async function () {
    
        const expectedAnswer = await builder.spendingAccountsAnswer(userData, 'another administrator');
        const postMessage = await user.conversation.postMessage(generalSpendingAccountsRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.spendingAccounts);
        validate.answer(getAnswer.answersArray[0], expectedAnswer.answers.answer[0]);
        validate.answer(getAnswer.answersArray[1], expectedAnswer.answers.answer[1]);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.answers.followUpQuestion);
        validate.done();
    });

    test(fsaRandomQuestion.text, async function () {
    
        const expectedAnswer = await builder.spendingAccountsAnswer(userData, 'no requested account');
        const postMessage = await user.conversation.postMessage(fsaRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.noRequestedSpendingAccountAnswer);
        validate.answer(getAnswer.answersArray[0], expectedAnswer.answers.answer[0]);
        validate.answer(getAnswer.answersArray[1], expectedAnswer.answers.answer[1]);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.answers.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
