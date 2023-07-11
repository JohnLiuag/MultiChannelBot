import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/live-chat.builder.js';
import * as questions from '../../../test-data/questions/live-chat-questions.test-data.js';
import * as liveChat from '../../../test-data/prompts/live-chat.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/live-chat.schemas.js';


let userData;
let userId; 

suite('Live Chat Tests: "Cancel" command', function () {

    suiteSetup(async function () {
        if (environmentVariables.server != 'STAGE') {   
            userId = environmentVariables.user.chatjimmy;       
            userData = await collector.getData(userId, ['liveChatStatus', 'liveChatWorkingHours']);
            await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
        } else {
            this.skip();
        }
    });

    test('Type Cancel after first level topic appeared', async function () {
        
        const expectedAnswer = await builder.liveChatAnswer(userData);
        const postMessage = await user.conversation.postMessage(questions.agent, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getChatBotResponse = await user.conversation.getActivity(postMessage.json.id);

        validate.statusCode(getChatBotResponse.response.status, 200);
        validate.jsonSchema(getChatBotResponse.json, answerSchema.liveChatOfferAnswer);
        validate.buttons(getChatBotResponse.buttons, liveChat.buttons);
        validate.done();

        const clickYesActionButton = await user.conversation.postMessage(liveChat.yes, userData.consumerProfile, this);
        
        validate.statusCode(clickYesActionButton.response.status, 200);
        validate.jsonSchema(clickYesActionButton.json, postSchema.postMessage);
        validate.done();
        
        const getYesActionReponse = await user.conversation.getActivity(clickYesActionButton.json.id);

        validate.statusCode(getYesActionReponse.response.status, 200);
        validate.jsonSchema(getYesActionReponse.json, answerSchema.topicsOfferAnswer);
        validate.answer(getYesActionReponse.answer, expectedAnswer.answer);
        validate.buttons(getYesActionReponse.buttons, expectedAnswer.topics.mainTopics);
        validate.done();

        const typeCancel = await user.conversation.postMessage(questions.cancel, userData.consumerProfile, this);
        
        validate.statusCode(typeCancel.response.status, 200);
        validate.jsonSchema(typeCancel.json, postSchema.postMessage);
        validate.done();

        const getCancelReponse = await user.conversation.getActivity(typeCancel.json.id);
        
        validate.statusCode(getCancelReponse.response.status, 200);
        validate.jsonSchema(getCancelReponse.json, answerSchema.cancelAnswer);
        validate.answer(getCancelReponse.followUpQuestion[0], expectedAnswer.followUpQuestion[0]);
        validate.answer(getCancelReponse.followUpQuestion[1], expectedAnswer.followUpQuestion[1]);
        validate.done();
    });

    test('Type Cancel after Pregnancy support sub-topics appeared', async function () {
        
        const expectedAnswer = await builder.liveChatAnswer(userData);
        const postMessage = await user.conversation.postMessage(questions.agent, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getChatBotResponse = await user.conversation.getActivity(postMessage.json.id);

        validate.statusCode(getChatBotResponse.response.status, 200);
        validate.jsonSchema(getChatBotResponse.json, answerSchema.liveChatOfferAnswer);
        validate.buttons(getChatBotResponse.buttons, liveChat.buttons);
        validate.done();

        const clickYesActionButton = await user.conversation.postMessage(liveChat.yes, userData.consumerProfile, this);
        
        validate.statusCode(clickYesActionButton.response.status, 200);
        validate.jsonSchema(clickYesActionButton.json, postSchema.postMessage);
        validate.done();
        
        const getYesActionReponse = await user.conversation.getActivity(clickYesActionButton.json.id);

        validate.statusCode(getYesActionReponse.response.status, 200);
        validate.jsonSchema(getYesActionReponse.json, answerSchema.topicsOfferAnswer);
        validate.answer(getYesActionReponse.answer, expectedAnswer.answer);
        validate.buttons(getYesActionReponse.buttons, expectedAnswer.topics.mainTopics);
        validate.done();

        const selectTopic = await user.conversation.postMessage(liveChat.pregnancySupport, userData.consumerProfile, this);
        
        validate.statusCode(selectTopic.response.status, 200);
        validate.jsonSchema(selectTopic.json, postSchema.postMessage);
        validate.done();
        
        const getTopicReponse = await user.conversation.getActivity(selectTopic.json.id);

        validate.statusCode(getTopicReponse.response.status, 200);
        validate.jsonSchema(getTopicReponse.json, answerSchema.liveChatPregnancySupport); 
        validate.buttons(getTopicReponse.buttons, expectedAnswer.topics.pregnancyTopics);
        validate.done();

        const typeCancel = await user.conversation.postMessage(questions.cancel, userData.consumerProfile, this);
        
        validate.statusCode(typeCancel.response.status, 200);
        validate.jsonSchema(typeCancel.json, postSchema.postMessage);
        validate.done();

        const getCancelReponse = await user.conversation.getActivity(typeCancel.json.id);
        
        validate.statusCode(getCancelReponse.response.status, 200);
        validate.jsonSchema(getCancelReponse.json, answerSchema.cancelAnswer);
        validate.answer(getCancelReponse.followUpQuestion[0], expectedAnswer.followUpQuestion[0]);
        validate.answer(getCancelReponse.followUpQuestion[1], expectedAnswer.followUpQuestion[1]);
        validate.done();
    });

    test('Type Cancel after Health Coaching sub-topics appeared', async function () {
        
        const expectedAnswer = await builder.liveChatAnswer(userData);
        const postMessage = await user.conversation.postMessage(questions.agent, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getChatBotResponse = await user.conversation.getActivity(postMessage.json.id);

        validate.statusCode(getChatBotResponse.response.status, 200);
        validate.jsonSchema(getChatBotResponse.json, answerSchema.liveChatOfferAnswer);
        validate.buttons(getChatBotResponse.buttons, liveChat.buttons);
        validate.done();

        const clickYesActionButton = await user.conversation.postMessage(liveChat.yes, userData.consumerProfile, this);
        
        validate.statusCode(clickYesActionButton.response.status, 200);
        validate.jsonSchema(clickYesActionButton.json, postSchema.postMessage);
        validate.done();
        
        const getYesActionReponse = await user.conversation.getActivity(clickYesActionButton.json.id);

        validate.statusCode(getYesActionReponse.response.status, 200);
        validate.jsonSchema(getYesActionReponse.json, answerSchema.topicsOfferAnswer);
        validate.answer(getYesActionReponse.answer, expectedAnswer.answer);
        validate.buttons(getYesActionReponse.buttons, expectedAnswer.topics.mainTopics);
        validate.done();

        const selectTopic = await user.conversation.postMessage(liveChat.healthCoaching, userData.consumerProfile, this);
        
        validate.statusCode(selectTopic.response.status, 200);
        validate.jsonSchema(selectTopic.json, postSchema.postMessage);
        validate.done();
        
        const getTopicReponse = await user.conversation.getActivity(selectTopic.json.id);

        validate.statusCode(getTopicReponse.response.status, 200);
        validate.jsonSchema(getTopicReponse.json, answerSchema.liveChatHealthCoaching); 
        validate.buttons(getTopicReponse.buttons, expectedAnswer.topics.healthCoachingTopics);
        validate.done();

        const typeCancel = await user.conversation.postMessage(questions.cancel, userData.consumerProfile, this);
        
        validate.statusCode(typeCancel.response.status, 200);
        validate.jsonSchema(typeCancel.json, postSchema.postMessage);
        validate.done();

        const getCancelReponse = await user.conversation.getActivity(typeCancel.json.id);
        
        validate.statusCode(getCancelReponse.response.status, 200);
        validate.jsonSchema(getCancelReponse.json, answerSchema.cancelAnswer);
        validate.answer(getCancelReponse.followUpQuestion[0], expectedAnswer.followUpQuestion[0]);
        validate.answer(getCancelReponse.followUpQuestion[1], expectedAnswer.followUpQuestion[1]);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
