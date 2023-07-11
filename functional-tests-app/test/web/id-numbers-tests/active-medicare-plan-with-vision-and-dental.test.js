import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/id-numbers.builder.js';
import { builder as builder2 } from '../../../services/answer-builders/id-cards.builder.js';
import { randomizer } from '../../../services/question-randomizer.service.js';
import * as questions from '../../../test-data/questions/id-numbers-questions.test-data.js';
import * as action from '../../../test-data/prompts/id-cards-actions.test-data.js';
import * as idCard from '../../../test-data/prompts/id-cards.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/id-number.schemas.js';


let userData;
let userId; 
const generalIdNumbersRandomQuestion = randomizer.getRandomQuestion(questions.generalIdNumbersQuestionsArray);
const visionIdNumbersRandomQuestion = randomizer.getRandomQuestion(questions.visionIdNumbersQuestionsArray);
const dentalIdNumbersRandomQuestion = randomizer.getRandomQuestion(questions.dentalIdNumbersQuestionsArray);

suite('ID Numbers Tests: Active Medicare plan (Vision) and DentalVision plan (Dental) ', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.krealb;
        userData = await collector.getData(userId, ['idCards']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(generalIdNumbersRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.idNumbersAnswer(userData, generalIdNumbersRandomQuestion.text, 'active', 'general');
        const postMessage = await user.conversation.postMessage(generalIdNumbersRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.idNumberAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.buttons(getAnswer.buttons, action.buttons);
        validate.done();

        const clickNoActionButton = await user.conversation.postMessage(action.no, userData.consumerProfile, this);
        
        validate.statusCode(clickNoActionButton.response.status, 200);
        validate.jsonSchema(clickNoActionButton.json, postSchema.postMessage);
        validate.done();
        
        const getNoActionReponse = await user.conversation.getActivity(clickNoActionButton.json.id);

        validate.statusCode(getNoActionReponse.response.status, 200);
        validate.jsonSchema(getNoActionReponse.json, answerSchema.clickNoActionButton);
        validate.followUpQuestions(getNoActionReponse.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(visionIdNumbersRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.idNumbersAnswer(userData, visionIdNumbersRandomQuestion.text, 'active', 'special');
        const postMessage = await user.conversation.postMessage(visionIdNumbersRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.idNumberAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.buttons(getAnswer.buttons, action.buttons);
        validate.done();

        const clickNoActionButton = await user.conversation.postMessage(action.no, userData.consumerProfile, this);
        
        validate.statusCode(clickNoActionButton.response.status, 200);
        validate.jsonSchema(clickNoActionButton.json, postSchema.postMessage);
        validate.done();
        
        const getNoActionReponse = await user.conversation.getActivity(clickNoActionButton.json.id);

        validate.statusCode(getNoActionReponse.response.status, 200);
        validate.jsonSchema(getNoActionReponse.json, answerSchema.clickNoActionButton);
        validate.followUpQuestions(getNoActionReponse.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(dentalIdNumbersRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.idNumbersAnswer(userData, dentalIdNumbersRandomQuestion.text, 'active', 'special');
        const postMessage = await user.conversation.postMessage(dentalIdNumbersRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.idNumberAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.buttons(getAnswer.buttons, action.buttons);
        validate.done();

        const clickNoActionButton = await user.conversation.postMessage(action.no, userData.consumerProfile, this);
        
        validate.statusCode(clickNoActionButton.response.status, 200);
        validate.jsonSchema(clickNoActionButton.json, postSchema.postMessage);
        validate.done();
        
        const getNoActionReponse = await user.conversation.getActivity(clickNoActionButton.json.id);

        validate.statusCode(getNoActionReponse.response.status, 200);
        validate.jsonSchema(getNoActionReponse.json, answerSchema.clickNoActionButton);
        validate.followUpQuestions(getNoActionReponse.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(generalIdNumbersRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.idNumbersAnswer(userData, generalIdNumbersRandomQuestion.text, 'active', 'general');
        const expectedIdCardAnswer = await builder2.idCardsAnswer(userData, 'active', 'has id card', generalIdNumbersRandomQuestion.text, idCard.idCardsIds.upmcHealthPlan);
        const postMessage = await user.conversation.postMessage(generalIdNumbersRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.idNumberAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.buttons(getAnswer.buttons, action.buttons);
        validate.done();

        const clickYesActionButton = await user.conversation.postMessage(action.yes, userData.consumerProfile, this);
        
        validate.statusCode(clickYesActionButton.response.status, 200);
        validate.jsonSchema(clickYesActionButton.json, postSchema.postMessage);
        validate.done();
        
        const getIdCard = await user.conversation.getActivity(clickYesActionButton.json.id);

        validate.statusCode(getIdCard.response.status, 200);
        validate.jsonSchema(getIdCard.json, answerSchema.requestIdCardWithPrompt);
        validate.answer(getIdCard.answer, expectedIdCardAnswer.answers.hereIsYourIdCardAnswer);
        validate.url(getIdCard.urls, expectedIdCardAnswer.idCardUrl);
        validate.answer(getIdCard.followUpQuestion[0], expectedIdCardAnswer.answers.secondFollowUpQuestion[0]);
        validate.answer(getIdCard.followUpQuestion[1], expectedIdCardAnswer.answers.secondFollowUpQuestion[1]);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
