import { user } from '../../../../services/user.service.js';
import { validate } from '../../../../services/validator.service.js';
import { environmentVariables } from '../../../../env.variables.js';
import { collector } from '../../../../services/data-collector-service.js';
import { builder } from '../../../../services/answer-builders/spending-accounts.builder.js';
import { builder as builder2 } from '../../../../services/answer-builders/live-chat.builder.js';
import { randomizer } from '../../../../services/question-randomizer.service.js';
import * as questions from '../../../../test-data/questions/spending-accounts-questions.test-data.js';
import * as liveChatAction from '../../../../test-data/prompts/live-chat.test-data.js';
import * as postSchema from '../../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../../test-data/schemas/spending-accounts.schemas.js';


let userData;
let userId; 
const flexSpendCardRandomQuestion = randomizer.getRandomQuestion(questions.flexSpendCardQuestionsArray);
const shopHealthyCardRandomQuestion = randomizer.getRandomQuestion(questions.shopHealthyCardQuestionsArray);
const otcSpendingAccountsRandomQuestion = randomizer.getRandomQuestion(questions.otcSpendingAccountsQuestionsArray);
const generalSpendingAccountsRandomQuestion = randomizer.getRandomQuestion(questions.generalSpendingAccountsQuestionsArray);

suite('Spending Account (MC Flex Card) Tests: Future DentalVision plan', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatkait;
        userData = await collector.getData(userId, ['eligibility', 'medicareFlexCard', 'spendingAccounts']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(flexSpendCardRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.spendingAccountsAnswer(userData, 'no spending accounts');
        const expectedLiveChatAnswer = await builder2.liveChatAnswer(userData);
        const postMessage = await user.conversation.postMessage(flexSpendCardRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);

        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.liveChatOfferAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answers.answer);
        validate.buttons(getAnswer.buttons, liveChatAction.buttons);
        validate.done();

        const clickNoActionButton = await user.conversation.postMessage(liveChatAction.no, userData.consumerProfile, this);
        
        validate.statusCode(clickNoActionButton.response.status, 200);
        validate.jsonSchema(clickNoActionButton.json, postSchema.postMessage);
        validate.done();
        
        const getNoActionReponse = await user.conversation.getActivity(clickNoActionButton.json.id);

        validate.statusCode(getNoActionReponse.response.status, 200);
        validate.jsonSchema(getNoActionReponse.json, answerSchema.clickNoLiveChatButton);
        validate.followUpQuestions(getNoActionReponse.followUpQuestion, expectedLiveChatAnswer.followUpQuestion);
        validate.done();
    });

    test(shopHealthyCardRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.spendingAccountsAnswer(userData, 'no spending accounts');
        const expectedLiveChatAnswer = await builder2.liveChatAnswer(userData);
        const postMessage = await user.conversation.postMessage(shopHealthyCardRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);

        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.liveChatOfferAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answers.answer);
        validate.buttons(getAnswer.buttons, liveChatAction.buttons);
        validate.done();

        const clickNoActionButton = await user.conversation.postMessage(liveChatAction.no, userData.consumerProfile, this);
        
        validate.statusCode(clickNoActionButton.response.status, 200);
        validate.jsonSchema(clickNoActionButton.json, postSchema.postMessage);
        validate.done();
        
        const getNoActionReponse = await user.conversation.getActivity(clickNoActionButton.json.id);

        validate.statusCode(getNoActionReponse.response.status, 200);
        validate.jsonSchema(getNoActionReponse.json, answerSchema.clickNoLiveChatButton);
        validate.followUpQuestions(getNoActionReponse.followUpQuestion, expectedLiveChatAnswer.followUpQuestion);
        validate.done();
    });

    test(otcSpendingAccountsRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.spendingAccountsAnswer(userData, 'no spending accounts');
        const expectedLiveChatAnswer = await builder2.liveChatAnswer(userData);
        const postMessage = await user.conversation.postMessage(otcSpendingAccountsRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);

        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.liveChatOfferAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answers.answer);
        validate.buttons(getAnswer.buttons, liveChatAction.buttons);
        validate.done();

        const clickNoActionButton = await user.conversation.postMessage(liveChatAction.no, userData.consumerProfile, this);
        
        validate.statusCode(clickNoActionButton.response.status, 200);
        validate.jsonSchema(clickNoActionButton.json, postSchema.postMessage);
        validate.done();
        
        const getNoActionReponse = await user.conversation.getActivity(clickNoActionButton.json.id);

        validate.statusCode(getNoActionReponse.response.status, 200);
        validate.jsonSchema(getNoActionReponse.json, answerSchema.clickNoLiveChatButton);
        validate.followUpQuestions(getNoActionReponse.followUpQuestion, expectedLiveChatAnswer.followUpQuestion);
        validate.done();
    });

    test(generalSpendingAccountsRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.spendingAccountsAnswer(userData, 'no mc flex data');
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

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
