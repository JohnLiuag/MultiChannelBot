import { user } from '../../../../services/user.service.js';
import { validate } from '../../../../services/validator.service.js';
import { environmentVariables } from '../../../../env.variables.js';
import { collector } from '../../../../services/data-collector-service.js';
import { builder } from '../../../../services/answer-builders/eligibility.builder.js';
import { builder as builder2 } from '../../../../services/answer-builders/live-chat.builder.js';
import { randomizer } from '../../../../services/question-randomizer.service.js';
import * as questions from '../../../../test-data/questions/eligibility-questions.test-data.js';
import * as liveChatAction from '../../../../test-data/prompts/live-chat.test-data.js';
import * as postSchema from '../../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../../test-data/schemas/eligibility.schemas.js';


let userData;
let userId; 
const generalEligibilityRandomQuestion = randomizer.getRandomQuestion(questions.generalEligibilityQuestionsArray);
const dentalEligibilityRandomQuestion = randomizer.getRandomQuestion(questions.dentalEligibilityQuestionsArray);
const visionEligibilityRandomQuestion = randomizer.getRandomQuestion(questions.visionEligibilityQuestionsArray);
const wellnessEligibilityRandomQuestion = randomizer.getRandomQuestion(questions.wellnessEligibilityQuestionsArray);

suite('Eligibility Tests: Active value added plan', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.testnicole;
        userData = await collector.getData(userId, ['eligibility']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(generalEligibilityRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.eligibilityAnswer(userData, generalEligibilityRandomQuestion.text, 'active');
        const postMessage = await user.conversation.postMessage(generalEligibilityRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.eligibilityAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(dentalEligibilityRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.eligibilityAnswer(userData, dentalEligibilityRandomQuestion.text, 'active');
        const expectedLiveChatAnswer = await builder2.liveChatAnswer(userData);
        const postMessage = await user.conversation.postMessage(dentalEligibilityRandomQuestion, userData.consumerProfile, this);
        
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

    test(visionEligibilityRandomQuestion.text, async function () {
    
        const expectedAnswer = await builder.eligibilityAnswer(userData, visionEligibilityRandomQuestion.text, 'active');
        const expectedLiveChatAnswer = await builder2.liveChatAnswer(userData);
        const postMessage = await user.conversation.postMessage(visionEligibilityRandomQuestion, userData.consumerProfile, this);
        
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

    test(wellnessEligibilityRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.eligibilityAnswer(userData, wellnessEligibilityRandomQuestion.text, 'active');
        const postMessage = await user.conversation.postMessage(wellnessEligibilityRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.eligibilityAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
