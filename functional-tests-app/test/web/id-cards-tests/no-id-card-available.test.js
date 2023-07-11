import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/id-cards.builder.js';
import { builder as builder2 } from '../../../services/answer-builders/live-chat.builder.js';
import { randomizer } from '../../../services/question-randomizer.service.js';
import * as questions from '../../../test-data/questions/id-cards-questions.test-data.js';
import * as liveChatAction from '../../../test-data/prompts/live-chat.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/id-card.schemas.js';


let userData;
let userId; 
const generalIdCardRandomQuestion = randomizer.getRandomQuestion(questions.generalIdCardQuestionsArray);
const upmcHealthPlanIdCardRandomQuestion = randomizer.getRandomQuestion(questions.upmcHealthPlanIdCardQuestionsArray);

suite('ID Card Tests: No ID Card available', function () {
    
    suiteSetup(async function () {
        userId = environmentVariables.user.chatmary;
        userData = await collector.getData(userId, ['eligibility', 'idCards']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(generalIdCardRandomQuestion.text, async function () {

        const expectedIdCardAnswer = await builder.idCardsAnswer(userData, 'active', 'does not have id card', generalIdCardRandomQuestion.text);
        const expectedliveChatAnswer = await builder2.liveChatAnswer(userData);
        const postMessage = await user.conversation.postMessage(generalIdCardRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getChatBotResponse = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getChatBotResponse.response.status, 200);
        validate.jsonSchema(getChatBotResponse.json, answerSchema.noAvailableIdCard);
        validate.answer(getChatBotResponse.answer, expectedIdCardAnswer.answers.hereIsYourIdCardAnswer);
        validate.buttons(getChatBotResponse.buttons, liveChatAction.buttons);
        validate.done();
        
        const clickNoActionButton = await user.conversation.postMessage(liveChatAction.no, userData.consumerProfile, this);
        
        validate.statusCode(clickNoActionButton.response.status, 200);
        validate.jsonSchema(clickNoActionButton.json, postSchema.postMessage);
        validate.done();
        
        const getNoActionReponse = await user.conversation.getActivity(clickNoActionButton.json.id);

        validate.statusCode(getNoActionReponse.response.status, 200);
        validate.jsonSchema(getNoActionReponse.json, answerSchema.clickNoLiveChatButton);
        validate.followUpQuestions(getNoActionReponse.followUpQuestion, expectedliveChatAnswer.followUpQuestion);
        validate.done();
    });

    test(upmcHealthPlanIdCardRandomQuestion.text, async function () {

        const expectedIdCardAnswer = await builder.idCardsAnswer(userData, 'active', 'does not have id card', upmcHealthPlanIdCardRandomQuestion.text);
        const expectedliveChatAnswer = await builder2.liveChatAnswer(userData);
        const postMessage = await user.conversation.postMessage(upmcHealthPlanIdCardRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getChatBotResponse = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getChatBotResponse.response.status, 200);
        validate.jsonSchema(getChatBotResponse.json, answerSchema.noAvailableIdCard);
        validate.answer(getChatBotResponse.answer, expectedIdCardAnswer.answers.hereIsYourIdCardAnswer);
        validate.buttons(getChatBotResponse.buttons, liveChatAction.buttons);
        validate.done();
        
        const clickNoActionButton = await user.conversation.postMessage(liveChatAction.no, userData.consumerProfile, this);
        
        validate.statusCode(clickNoActionButton.response.status, 200);
        validate.jsonSchema(clickNoActionButton.json, postSchema.postMessage);
        validate.done();
        
        const getNoActionReponse = await user.conversation.getActivity(clickNoActionButton.json.id);
        
        validate.statusCode(getNoActionReponse.response.status, 200);
        validate.jsonSchema(getNoActionReponse.json, answerSchema.clickNoLiveChatButton);
        validate.followUpQuestions(getNoActionReponse.followUpQuestion, expectedliveChatAnswer.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
