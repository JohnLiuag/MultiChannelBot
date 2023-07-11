import { user } from '../../../../services/user.service.js';
import { validate } from '../../../../services/validator.service.js';
import { environmentVariables } from '../../../../env.variables.js';
import { collector } from '../../../../services/data-collector-service.js';
import { builder } from '../../../../services/answer-builders/prompts.builder.js';
import { builder as builder2 } from '../../../../services/answer-builders/live-chat.builder.js';
import * as questions from '../../../../test-data/questions/prompts-questions.test-data.js';
import * as liveChat from '../../../../test-data/prompts/live-chat.test-data.js';
import * as postSchema from '../../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../../test-data/schemas/prompts.schemas.js';


let userData;
let userId; 

suite('Prompts Tests: Pregnancy Support -> Live chat is not available', function () {

    suiteSetup(async function () {
        if (environmentVariables.server != 'STAGE') {
            userId = environmentVariables.user.delucat;  
            userData = await collector.getData(userId, ['liveChatStatus', 'liveChatWorkingHours', 'eligibility', 'benefits', 'idCards', 'spendingAccounts']);
            await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
        } else {
            this.skip();
        }
    });

    test("Pregnancy Support -> Call Us", async function () {
        
        const expectedAnswer = await builder.promptsAnswer(userData, 'common');
        const expectedAnswer2 = await builder2.liveChatAnswer(userData);
        const getFirstMessage = await user.conversation.getActivity(expectedAnswer.FIRST_MESSAGE_ID);

        validate.statusCode(getFirstMessage.response.status, 200);
        validate.jsonSchema(getFirstMessage.json, answerSchema.greetingMessage);
        validate.answer(getFirstMessage.answer, expectedAnswer.answers.answer);
        validate.buttons(getFirstMessage.buttons, expectedAnswer.promptButtons);
        validate.done();

        const clickFirstLevelPrompt = await user.conversation.postMessage(questions.pregnancySupport, userData.consumerProfile, this);
            
        validate.statusCode(clickFirstLevelPrompt.response.status, 200);
        validate.jsonSchema(clickFirstLevelPrompt.json, postSchema.postMessage);
        validate.done();

        const getSecondLevelPrompts = await user.conversation.getActivity(clickFirstLevelPrompt.json.id);
        
        validate.statusCode(getSecondLevelPrompts.response.status, 200);
        validate.jsonSchema(getSecondLevelPrompts.json, answerSchema.liveChatIsNotAvailable);
        validate.answer(getSecondLevelPrompts.answer, expectedAnswer2.answer);
        validate.buttons(getSecondLevelPrompts.buttons, liveChat.callUsSendMessageButtons);
        validate.done();

        const clickCallUsButton = await user.conversation.postMessage(liveChat.callUs, userData.consumerProfile, this);
        
        validate.statusCode(clickCallUsButton.response.status, 200);
        validate.jsonSchema(clickCallUsButton.json, postSchema.postMessage);
        validate.done();

        const getCallUsReponse = await user.conversation.getActivity(clickCallUsButton.json.id);

        validate.statusCode(getCallUsReponse.response.status, 200);
        validate.jsonSchema(getCallUsReponse.json, answerSchema.callUsSendMessage);
        validate.answer(getCallUsReponse.transitionData, expectedAnswer2.buttons.contactUs);
        validate.answer(getCallUsReponse.followUpQuestion[0], expectedAnswer2.followUpQuestion[0]);
        validate.answer(getCallUsReponse.followUpQuestion[1], expectedAnswer2.followUpQuestion[1]);
        validate.done();
    });

    test("Pregnancy Support -> Send Message", async function () {
        
        const expectedAnswer = await builder.promptsAnswer(userData, 'common');
        const expectedAnswer2 = await builder2.liveChatAnswer(userData);
        const postMenu = await user.conversation.postMessage(questions.menu, userData.consumerProfile, this);
        
        const getRestartedMenu = await user.conversation.getActivity(postMenu.json.id);
        
        validate.statusCode(getRestartedMenu.response.status, 200);
        validate.jsonSchema(getRestartedMenu.json, answerSchema.greetingMessage);
        validate.answer(getRestartedMenu.answer, expectedAnswer.answers.restartedMenuAnswer);
        validate.buttons(getRestartedMenu.buttons, expectedAnswer.promptButtons);
        validate.done();

        const clickFirstLevelPrompt = await user.conversation.postMessage(questions.pregnancySupport, userData.consumerProfile, this);
            
        validate.statusCode(clickFirstLevelPrompt.response.status, 200);
        validate.jsonSchema(clickFirstLevelPrompt.json, postSchema.postMessage);
        validate.done();

        const getSecondLevelPrompts = await user.conversation.getActivity(clickFirstLevelPrompt.json.id);

        validate.statusCode(getSecondLevelPrompts.response.status, 200);
        validate.jsonSchema(getSecondLevelPrompts.json, answerSchema.liveChatIsNotAvailable);
        validate.answer(getSecondLevelPrompts.answer, expectedAnswer2.answer);
        validate.buttons(getSecondLevelPrompts.buttons, liveChat.callUsSendMessageButtons);
        validate.done();

        const clickSendMessageButton = await user.conversation.postMessage(liveChat.sendMessage, userData.consumerProfile, this);
        
        validate.statusCode(clickSendMessageButton.response.status, 200);
        validate.jsonSchema(clickSendMessageButton.json, postSchema.postMessage);
        validate.done();

        const getSendMessageReponse = await user.conversation.getActivity(clickSendMessageButton.json.id);

        validate.statusCode(getSendMessageReponse.response.status, 200);
        validate.jsonSchema(getSendMessageReponse.json, answerSchema.callUsSendMessage);
        validate.answer(getSendMessageReponse.transitionData, expectedAnswer2.buttons.sendMessage);
        validate.answer(getSendMessageReponse.followUpQuestion[0], expectedAnswer2.followUpQuestion[0]);
        validate.answer(getSendMessageReponse.followUpQuestion[1], expectedAnswer2.followUpQuestion[1]);
        validate.done();     
    });

    test("Health Coaching -> Not now", async function () {
        
        const expectedAnswer = await builder.promptsAnswer(userData, 'common');
        const expectedAnswer2 = await builder2.liveChatAnswer(userData);
        const postMenu = await user.conversation.postMessage(questions.menu, userData.consumerProfile, this);
        
        const getRestartedMenu = await user.conversation.getActivity(postMenu.json.id);
        
        validate.statusCode(getRestartedMenu.response.status, 200);
        validate.jsonSchema(getRestartedMenu.json, answerSchema.greetingMessage);
        validate.answer(getRestartedMenu.answer, expectedAnswer.answers.restartedMenuAnswer);
        validate.buttons(getRestartedMenu.buttons, expectedAnswer.promptButtons);
        validate.done();

        const clickFirstLevelPrompt = await user.conversation.postMessage(questions.pregnancySupport, userData.consumerProfile, this);
            
        validate.statusCode(clickFirstLevelPrompt.response.status, 200);
        validate.jsonSchema(clickFirstLevelPrompt.json, postSchema.postMessage);
        validate.done();

        const getSecondLevelPrompts = await user.conversation.getActivity(clickFirstLevelPrompt.json.id);

        validate.statusCode(getSecondLevelPrompts.response.status, 200);
        validate.jsonSchema(getSecondLevelPrompts.json, answerSchema.liveChatIsNotAvailable);
        validate.answer(getSecondLevelPrompts.answer, expectedAnswer2.answer);
        validate.buttons(getSecondLevelPrompts.buttons, liveChat.callUsSendMessageButtons);
        validate.done();

        const clickNotNowButton = await user.conversation.postMessage(liveChat.notNow, userData.consumerProfile, this);
        
        validate.statusCode(clickNotNowButton.response.status, 200);
        validate.jsonSchema(clickNotNowButton.json, postSchema.postMessage);
        validate.done();

        const getNotNowReponse = await user.conversation.getActivity(clickNotNowButton.json.id);

        validate.statusCode(getNotNowReponse.response.status, 200);
        validate.jsonSchema(getNotNowReponse.json, answerSchema.notNowAnswer);
        validate.answer(getNotNowReponse.followUpQuestion[0], expectedAnswer2.followUpQuestion[0]);
        validate.answer(getNotNowReponse.followUpQuestion[1], expectedAnswer2.followUpQuestion[1]);
        validate.done();     
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
