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

suite('Live Chat Tests: Transition to Health coaching -> Physical Health (General)', function () {

    suiteSetup(async function () {if (environmentVariables.server != 'STAGE') {
            userId = environmentVariables.user.chatjimmy;
            userData = await collector.getData(userId, ['liveChatStatus', 'liveChatWorkingHours']);
            userName = `${userData.consumerProfile.firstName} ${userData.consumerProfile.lastName}`;
            await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
        } else {
            this.skip();
        }
    });

    test(`${questions.agent.text}, ${questions.escalation.text}, ${questions.iNeedAssistance.text}`, async function () {
        
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
        /////
        const postSecondMessage = await user.conversation.postMessage(questions.escalation, userData.consumerProfile, this);
        
        validate.statusCode(postSecondMessage.response.status, 200);
        validate.jsonSchema(postSecondMessage.json, postSchema.postMessage);
        validate.done();
        
        const getSecondChatBotResponse = await user.conversation.getActivity(postSecondMessage.json.id);

        validate.statusCode(getSecondChatBotResponse.response.status, 200);
        validate.jsonSchema(getSecondChatBotResponse.json, answerSchema.liveChatOfferAnswer);
        validate.buttons(getSecondChatBotResponse.buttons, liveChat.buttons);
        validate.done();

        const clickSecondNoActionButton = await user.conversation.postMessage(liveChat.no, userData.consumerProfile, this);
        
        validate.statusCode(clickSecondNoActionButton.response.status, 200);
        validate.jsonSchema(clickSecondNoActionButton.json, postSchema.postMessage);
        validate.done();
        
        const getSecondNoActionReponse = await user.conversation.getActivity(clickSecondNoActionButton.json.id);

        validate.statusCode(getSecondNoActionReponse.response.status, 200);
        validate.jsonSchema(getSecondNoActionReponse.json, answerSchema.clickNoLiveChatButton);
        validate.answer(getSecondNoActionReponse.followUpQuestion[0], expectedAnswer.followUpQuestion[0]);
        validate.answer(getSecondNoActionReponse.followUpQuestion[1], expectedAnswer.followUpQuestion[1]);
        validate.done();
        //////
        const postThirdMessage = await user.conversation.postMessage(questions.iNeedAssistance, userData.consumerProfile, this);
        
        validate.statusCode(postThirdMessage.response.status, 200);
        validate.jsonSchema(postThirdMessage.json, postSchema.postMessage);
        validate.done();
        
        const getThirdChatBotResponse = await user.conversation.getActivity(postThirdMessage.json.id);

        validate.statusCode(getThirdChatBotResponse.response.status, 200);
        validate.jsonSchema(getThirdChatBotResponse.json, answerSchema.liveChatOfferAnswer);
        validate.buttons(getThirdChatBotResponse.buttons, liveChat.buttons);
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
        
        validate.statusCode(clickYesActionButton.response.status, 200);
        validate.jsonSchema(clickYesActionButton.json, postSchema.postMessage);
        validate.done();
        
        const getTopicReponse = await user.conversation.getActivity(selectTopic.json.id);
        validate.statusCode(getTopicReponse.response.status, 200);
        validate.jsonSchema(getTopicReponse.json, answerSchema.liveChatHealthCoaching); 
        validate.buttons(getTopicReponse.buttons, expectedAnswer.topics.healthCoachingTopics);
        validate.done();

        const selectSubTopic = await user.conversation.postMessage(liveChat.physicalHealthGeneral, userData.consumerProfile, this);
        
        validate.statusCode(clickYesActionButton.response.status, 200);
        validate.jsonSchema(clickYesActionButton.json, postSchema.postMessage);
        validate.done();

        const getSubTopicReponse = await user.conversation.getActivity(selectSubTopic.json.id);
        
        validate.statusCode(getSubTopicReponse.response.status, 200);
        validate.jsonSchema(getSubTopicReponse.json, answerSchema.liveChatSubTopicTransition);
        validate.answer(getSubTopicReponse.transitionData.selectedSubject, liveChat.healthCoaching.text);
        validate.answer(getSubTopicReponse.transitionData.selectedSubTopic, liveChat.physicalHealthGeneral.text);
        validate.buttons(getSubTopicReponse.transitionData.questionsBeforeTransition, [`${userName}: ${questions.escalation.text}`, `${userName}: ${questions.iNeedAssistance.text}`]);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
