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

suite('Live Chat Tests: Request words (intents recognition)', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatjimmy;
        userData = await collector.getData(userId, ['liveChatStatus', 'liveChatWorkingHours']);
        userName = `${userData.consumerProfile.firstName} ${userData.consumerProfile.lastName}`;
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    questions.livechatQuestionsArray.forEach((question) => {
        test(question.text, async function () {
            
            const expectedAnswer = await builder.liveChatAnswer(userData);
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getChatBotResponse = await user.conversation.getActivity(postMessage.json.id);

            validate.statusCode(getChatBotResponse.response.status, 200);
            validate.jsonSchema(getChatBotResponse.json, answerSchema.liveChatOfferAnswer);
            validate.buttons(getChatBotResponse.buttons, liveChat.buttons);
            validate.done();

            const clickNoActionButton = await user.conversation.postMessage(liveChat.no, userData.consumerProfile, this);
            
            validate.statusCode(clickNoActionButton.response.status, 200);
            validate.jsonSchema(clickNoActionButton.json, postSchema.postMessage);
            validate.done();
            
            const getNoActionReponse = await user.conversation.getActivity(clickNoActionButton.json.id);

            validate.statusCode(getNoActionReponse.response.status, 200);
            validate.jsonSchema(getNoActionReponse.json, answerSchema.clickNoLiveChatButton);
            validate.answer(getNoActionReponse.followUpQuestion[0], expectedAnswer.followUpQuestion[0]);
        validate.answer(getNoActionReponse.followUpQuestion[1], expectedAnswer.followUpQuestion[1]);
            validate.done();
        });
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
