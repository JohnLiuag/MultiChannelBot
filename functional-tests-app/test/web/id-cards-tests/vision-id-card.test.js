import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/id-cards.builder.js';
import { randomizer } from '../../../services/question-randomizer.service.js';
import * as questions from '../../../test-data/questions/id-cards-questions.test-data.js';
import * as idCard from '../../../test-data/prompts/id-cards.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/id-card.schemas.js';


let userData;
let userId; 
const generalIdCardRandomQuestion = randomizer.getRandomQuestion(questions.generalIdCardQuestionsArray);
const visionIdCardRandomQuestion = randomizer.getRandomQuestion(questions.visionIdCardQuestionsArray);
const dentalIdCardRandomQuestion = randomizer.getRandomQuestion(questions.dentalIdCardQuestionsArray);

suite('ID Card Tests: User with Vision ID Card', function () {
    
    suiteSetup(async function () {
        userId = environmentVariables.user.chatadam;
        userData = await collector.getData(userId, ['eligibility', 'idCards']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(generalIdCardRandomQuestion.text, async function () {

        const expectedIdCardAnswer = await builder.idCardsAnswer(userData, 'active', 'has id card', generalIdCardRandomQuestion.text, idCard.idCardsIds.vision);
        const postMessage = await user.conversation.postMessage(generalIdCardRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getIdCardButton = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getIdCardButton.response.status, 200);
        validate.jsonSchema(getIdCardButton.json, answerSchema.buttons);
        validate.answer(getIdCardButton.answer, expectedIdCardAnswer.answers.firstFollowUpQuestion);
        validate.buttons(getIdCardButton.buttons, expectedIdCardAnswer.buttons);
        validate.done();
        
        const clickIdCardButton = await user.conversation.postMessage(idCard.visionIdCard, userData.consumerProfile, this);
        
        validate.statusCode(clickIdCardButton.response.status, 200);
        validate.jsonSchema(clickIdCardButton.json, postSchema.postMessage);
        validate.done();

        const getChatBotResponse = await user.conversation.getActivity(clickIdCardButton.json.id);

        validate.statusCode(getChatBotResponse.response.status, 200);
        validate.jsonSchema(getChatBotResponse.json, answerSchema.clickIdCardWithoutPrompt);
        validate.url(getChatBotResponse.urls, expectedIdCardAnswer.idCardUrl);
        validate.followUpQuestions(getChatBotResponse.followUpQuestion, expectedIdCardAnswer.answers.secondFollowUpQuestion);
        validate.done();
    });

    test(visionIdCardRandomQuestion.text, async function () {

        const expectedIdCardAnswer = await builder.idCardsAnswer(userData, 'active', 'has id card', visionIdCardRandomQuestion.text);    
        const postMessage = await user.conversation.postMessage(visionIdCardRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getChatBotResponse = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getChatBotResponse.response.status, 200);
        validate.jsonSchema(getChatBotResponse.json, answerSchema.requestIdCardWithoutPrompt);
        validate.answer(getChatBotResponse.answersArray[0], expectedIdCardAnswer.answers.hereIsYourIdCardAnswer);
        validate.url(getChatBotResponse.urls, expectedIdCardAnswer.idCardUrl);
        validate.followUpQuestions(getChatBotResponse.followUpQuestion, expectedIdCardAnswer.answers.secondFollowUpQuestion);
        validate.done();
    });

    test(dentalIdCardRandomQuestion.text, async function () {

        const expectedIdCardAnswer = await builder.idCardsAnswer(userData, 'active', 'has id card', dentalIdCardRandomQuestion.text);
        const postMessage = await user.conversation.postMessage(dentalIdCardRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getChatBotResponse = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getChatBotResponse.response.status, 200);
        validate.jsonSchema(getChatBotResponse.json, answerSchema.requestIdCardWithoutPrompt);
        validate.answer(getChatBotResponse.answer, expectedIdCardAnswer.answers.hereIsYourIdCardAnswer);
        validate.followUpQuestions(getChatBotResponse.followUpQuestion, expectedIdCardAnswer.answers.secondFollowUpQuestion);
        validate.done();
    });
    
    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
