import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/dependent-eligibility.builder.js';
import { builder as builder2 } from '../../../services/answer-builders/live-chat.builder.js';
import { randomizer } from '../../../services/question-randomizer.service.js';
import * as questions from '../../../test-data/questions/dependent-eligibility-questions.test-data.js';
import * as liveChatAction from '../../../test-data/prompts/live-chat.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/depending-eligibility.schemas.js';


let userData;
let userId; 
const generalDependentEligibilityRandomQuestion = randomizer.getRandomQuestion(questions.generalDependentEligibilityQuestionsArray);
const dentalDependentEligibilityRandomQuestion = randomizer.getRandomQuestion(questions.dentalDependentEligibilityQuestionsArray);
const visionDependentEligibilityRandomQuestion = randomizer.getRandomQuestion(questions.visionDependentEligibilityQuestionsArray);

suite('Dependent Eligibility Tests: Non-medical coverage', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chaterin;
        userData = await collector.getData(userId, ['dependentEligibility']);
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(generalDependentEligibilityRandomQuestion.text, async function () {
    
        const expectedAnswer = await builder.dependentEligibilityAnswer(userData, generalDependentEligibilityRandomQuestion.text, 'active', 'wellness/non-medical');
        const expectedLiveChatAnswer = await builder2.liveChatAnswer(userData);
        const postMessage = await user.conversation.postMessage(generalDependentEligibilityRandomQuestion, userData.consumerProfile, this);
        
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
        validate.followUpQuestions(getNoActionReponse.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(dentalDependentEligibilityRandomQuestion.text, async function () {
    
        const expectedAnswer = await builder.dependentEligibilityAnswer(userData, dentalDependentEligibilityRandomQuestion.text, 'active', 'wellness/non-medical');
        const expectedLiveChatAnswer = await builder2.liveChatAnswer(userData);
        const postMessage = await user.conversation.postMessage(dentalDependentEligibilityRandomQuestion, userData.consumerProfile, this);
        
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
        validate.followUpQuestions(getNoActionReponse.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(visionDependentEligibilityRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.dependentEligibilityAnswer(userData, visionDependentEligibilityRandomQuestion.text, 'active', 'wellness/non-medical');
        const expectedLiveChatAnswer = await builder2.liveChatAnswer(userData);
        const postMessage = await user.conversation.postMessage(visionDependentEligibilityRandomQuestion, userData.consumerProfile, this);
        
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
        validate.followUpQuestions(getNoActionReponse.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
