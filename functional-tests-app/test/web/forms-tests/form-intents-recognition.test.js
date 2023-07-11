import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/forms.builder.js';
import { builder as builder2 } from '../../../services/answer-builders/live-chat.builder.js';
import * as questions from '../../../test-data/questions/forms-questions.test-data.js';
import * as liveChatAction from '../../../test-data/prompts/live-chat.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/forms.schemas.js';


let userData;
let userId;

suite('Assessments Tests: intents recognition', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatjosh;
        userData = await collector.getData(userId, ['forms']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    questions.generalFormQuestionsArray.forEach((question) => {
        test(question.text, async function () {
            
            const expectedAnswer = await builder.formsAnswer(userData, 'general', 'non wellness');
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.form);
            validate.answer(getAnswer.answer, expectedAnswer.answer);
            validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
            validate.done();
        });
    });

    questions.dentalFormQuestionsArray.forEach((question) => {
        test(question.text, async function () {
            
            const expectedAnswer = await builder.formsAnswer(userData, 'dental', 'available');
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.form);
            validate.answer(getAnswer.answer, expectedAnswer.answer);
            validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
            validate.done();
        });
    });

    questions.visionFormQuestionsArray.forEach((question) => {
        test(question.text, async function () {
            
            const expectedAnswer = await builder.formsAnswer(userData, 'vision', 'available');
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.form);
            validate.answer(getAnswer.answer, expectedAnswer.answer);
            validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
            validate.done();
        });
    });

    questions.fluFormQuestionsArray.forEach((question) => {
        test(question.text, async function () {
            
            const expectedAnswer = await builder.formsAnswer(userData, 'flu', 'unavailable');
            const expectedLiveChatAnswer = await builder2.liveChatAnswer(userData);
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
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
    });

    questions.rdrFormQuestionsArray.forEach((question) => {
        test(question.text, async function () {
            
            const expectedAnswer = await builder.formsAnswer(userData, 'rdr', 'available');
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.form);
            validate.answer(getAnswer.answer, expectedAnswer.answer);
            validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
            validate.done();
        });
    });

    questions.covidFormQuestionsArray.forEach((question) => {
        test(question.text, async function () {
            
            const expectedAnswer = await builder.formsAnswer(userData, 'covid', 'unavailable');
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.form);
            validate.answer(getAnswer.answer, expectedAnswer.answer);
            validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
            validate.done();
        });
    });

    questions.outOfNetworkFormQuestionsArray.forEach((question) => {
        test(question.text, async function () {
            
            const expectedAnswer = await builder.formsAnswer(userData, 'oon', 'unavailable');
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.form);
            validate.answer(getAnswer.answer, expectedAnswer.answer);
            validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
            validate.done();
        });
    });


    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
