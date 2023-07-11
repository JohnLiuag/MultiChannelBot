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

suite('Live Chat Tests: Transition to Vision support (1 question)', function () {

    suiteSetup(async function () {if (environmentVariables.server != 'STAGE') {
            userId = environmentVariables.user.turnkim;
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
        validate.jsonSchema(getYesActionReponse.json, answerSchema.topicsOfferAnswer);
        validate.answer(getYesActionReponse.answer, expectedAnswer.answer);
        validate.buttons(getYesActionReponse.buttons, expectedAnswer.topics.mainTopics);
        validate.done();

        const selectTopic = await user.conversation.postMessage(liveChat.myVisionCoverage, userData.consumerProfile, this);
        
        validate.statusCode(clickYesActionButton.response.status, 200);
        validate.jsonSchema(clickYesActionButton.json, postSchema.postMessage);
        validate.done();
        
        const getTopicReponse = await user.conversation.getActivity(selectTopic.json.id);
        
        validate.statusCode(getTopicReponse.response.status, 200);
        validate.jsonSchema(getTopicReponse.json, answerSchema.liveChatTransition);
        validate.answer(getTopicReponse.transitionData.selectedSubject, liveChat.myVisionCoverage.text);
        validate.answer(getTopicReponse.transitionData.selectedSubTopic, '');
        validate.buttons(getTopicReponse.transitionData.questionsBeforeTransition, [`${userName}: ${questions.agent.text}`, null]);
        validate.done();    
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
