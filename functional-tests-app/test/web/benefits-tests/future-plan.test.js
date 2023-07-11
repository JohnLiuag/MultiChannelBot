import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/coinsurance.builder.js';
import { builder as builder2 } from '../../../services/answer-builders/benefits.builder.js';
import { builder as builder3 } from '../../../services/answer-builders/live-chat.builder.js';
import * as questions from '../../../test-data/questions/benefits-questions.test-data.js';
import { randomizer } from '../../../services/question-randomizer.service.js'
import * as liveChatAction from '../../../test-data/prompts/live-chat.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/benefits.schemas.js';


let userData;
let userId; 
const coinsuranceRandomQuestion = randomizer.getRandomQuestion(questions.coinsuranceQuestionsArray);
const deductibleRandomQuestion = randomizer.getRandomQuestion(questions.deductibleQuestionsArray);
const oopRandomQuestion = randomizer.getRandomQuestion(questions.outOfPocketQuestionsArray);

suite('Benefits Tests: Future plan', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatdebra;
        userData = await collector.getData(userId, ['benefits']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(coinsuranceRandomQuestion.text, async function () {
    
        const expectedAnswer = await builder.coinsuranceAnswer(userData, 'future active');
        const expectedLiveChatAnswer = await builder3.liveChatAnswer(userData);
        const postMessage = await user.conversation.postMessage(coinsuranceRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getChatBotResponse = await user.conversation.getActivity(postMessage.json.id);

        validate.statusCode(getChatBotResponse.response.status, 200);
        validate.jsonSchema(getChatBotResponse.json, answerSchema.liveChatOfferAnswer);
        validate.answer(getChatBotResponse.answer, expectedAnswer.answer);
        validate.buttons(getChatBotResponse.buttons, liveChatAction.buttons);
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

    test(deductibleRandomQuestion.text, async function () {
    
        const expectedAnswer = await builder2.benefitsAnswer(userData, 'deductible', 'future active');
        const expectedLiveChatAnswer = await builder3.liveChatAnswer(userData);
        const postMessage = await user.conversation.postMessage(deductibleRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getChatBotResponse = await user.conversation.getActivity(postMessage.json.id);

        validate.statusCode(getChatBotResponse.response.status, 200);
        validate.jsonSchema(getChatBotResponse.json, answerSchema.liveChatOfferAnswer);
        validate.answer(getChatBotResponse.answer, expectedAnswer.answers.firstLevelAnswer);
        validate.buttons(getChatBotResponse.buttons, liveChatAction.buttons);
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

    test(oopRandomQuestion.text, async function () {
    
        const expectedAnswer = await builder2.benefitsAnswer(userData, 'outOfPocket', 'future active');
        const expectedLiveChatAnswer = await builder3.liveChatAnswer(userData);
        const postMessage = await user.conversation.postMessage(oopRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getChatBotResponse = await user.conversation.getActivity(postMessage.json.id);

        validate.statusCode(getChatBotResponse.response.status, 200);
        validate.jsonSchema(getChatBotResponse.json, answerSchema.liveChatOfferAnswer);
        validate.answer(getChatBotResponse.answer, expectedAnswer.answers.firstLevelAnswer);
        validate.buttons(getChatBotResponse.buttons, liveChatAction.buttons);
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

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
