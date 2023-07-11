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
let userName;
let userId; 

suite('Live Chat Tests: Live chat is not available', function () {

    suiteSetup(async function () {if (environmentVariables.server != 'STAGE') {
            userId = environmentVariables.user.delucat;
            userData = await collector.getData(userId, ['liveChatStatus', 'liveChatWorkingHours']);
            userName = `${userData.consumerProfile.firstName} ${userData.consumerProfile.lastName}`;
            await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
        } else {
            this.skip();
        }
    });

    test(questions.agent.text, async function () {
        
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
        validate.jsonSchema(getYesActionReponse.json, answerSchema.liveChatIsNotAvailable);
        validate.answer(getYesActionReponse.answer, expectedAnswer.answer);
        validate.buttons(getYesActionReponse.buttons, liveChat.callUsSendMessageButtons);
        validate.done();

        const clickCallUsButton = await user.conversation.postMessage(liveChat.callUs, userData.consumerProfile, this);
        
        validate.statusCode(clickYesActionButton.response.status, 200);
        validate.jsonSchema(clickYesActionButton.json, postSchema.postMessage);
        validate.done();

        const getCallUsReponse = await user.conversation.getActivity(clickCallUsButton.json.id);

        validate.statusCode(getCallUsReponse.response.status, 200);
        validate.jsonSchema(getCallUsReponse.json, answerSchema.callUsSendMessage);
        validate.answer(getCallUsReponse.transitionData, expectedAnswer.buttons.contactUs);
        validate.answer(getCallUsReponse.followUpQuestion[0], expectedAnswer.followUpQuestion[0]);
        validate.answer(getCallUsReponse.followUpQuestion[1], expectedAnswer.followUpQuestion[1]);
        validate.done();     
    });

    test(questions.iNeedAssistance.text, async function () {
        
        const expectedAnswer = await builder.liveChatAnswer(userData);
        const postMessage = await user.conversation.postMessage(questions.iNeedAssistance, userData.consumerProfile, this);
        
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
        validate.jsonSchema(getYesActionReponse.json, answerSchema.liveChatIsNotAvailable);
        validate.answer(getYesActionReponse.answer, expectedAnswer.answer);
        validate.buttons(getYesActionReponse.buttons, liveChat.callUsSendMessageButtons);
        validate.done();

        const clickSendMessageButton = await user.conversation.postMessage(liveChat.sendMessage, userData.consumerProfile, this);
        
        validate.statusCode(clickSendMessageButton.response.status, 200);
        validate.jsonSchema(clickSendMessageButton.json, postSchema.postMessage);
        validate.done();

        const getSendMessageReponse = await user.conversation.getActivity(clickSendMessageButton.json.id);

        validate.statusCode(getSendMessageReponse.response.status, 200);
        validate.jsonSchema(getSendMessageReponse.json, answerSchema.callUsSendMessage);
        validate.answer(getSendMessageReponse.transitionData, expectedAnswer.buttons.sendMessage);
        validate.answer(getSendMessageReponse.followUpQuestion[0], expectedAnswer.followUpQuestion[0]);
        validate.answer(getSendMessageReponse.followUpQuestion[1], expectedAnswer.followUpQuestion[1]);
        validate.done();     
    });

    test(questions.escalation.text, async function () {
        
        const expectedAnswer = await builder.liveChatAnswer(userData);
        const postMessage = await user.conversation.postMessage(questions.escalation, userData.consumerProfile, this);
        
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
        validate.jsonSchema(getYesActionReponse.json, answerSchema.liveChatIsNotAvailable);
        validate.answer(getYesActionReponse.answer, expectedAnswer.answer);
        validate.buttons(getYesActionReponse.buttons, liveChat.callUsSendMessageButtons);
        validate.done();

        const clickNotNowButton = await user.conversation.postMessage(liveChat.notNow, userData.consumerProfile, this);
        
        validate.statusCode(clickNotNowButton.response.status, 200);
        validate.jsonSchema(clickNotNowButton.json, postSchema.postMessage);
        validate.done();

        const getNotNowReponse = await user.conversation.getActivity(clickNotNowButton.json.id);

        validate.statusCode(getNotNowReponse.response.status, 200);
        validate.jsonSchema(getNotNowReponse.json, answerSchema.notNowAnswer);
        validate.answer(getNotNowReponse.followUpQuestion[0], expectedAnswer.followUpQuestion[0]);
        validate.answer(getNotNowReponse.followUpQuestion[1], expectedAnswer.followUpQuestion[1]);
        validate.done();       
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
