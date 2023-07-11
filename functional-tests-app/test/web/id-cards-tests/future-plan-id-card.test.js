import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/id-cards.builder.js';
import { randomizer } from '../../../services/question-randomizer.service.js';
import * as questions from '../../../test-data/questions/id-cards-questions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/id-card.schemas.js';


let userData;
let userId; 
const generalIdCardRandomQuestion = randomizer.getRandomQuestion(questions.generalIdCardQuestionsArray);
const assistAmericaIdCardRandomQuestion = randomizer.getRandomQuestion(questions.assistAmericaIdCardQuestionsArray);

suite('ID Card Tests: User with future plan (ID Card)', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatdebra;
        userData = await collector.getData(userId, ['eligibility', 'idCards']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(generalIdCardRandomQuestion.text, async function () {

        const expectedIdCardAnswer = await builder.idCardsAnswer(userData, 'future active');
        const postMessage = await user.conversation.postMessage(generalIdCardRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getChatBotResponse = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getChatBotResponse.response.status, 200);
        validate.jsonSchema(getChatBotResponse.json, answerSchema.futureAnswer);
        validate.answer(getChatBotResponse.answersArray[0], expectedIdCardAnswer.answers.hereIsYourIdCardAnswer);
        validate.answer(getChatBotResponse.answersArray[1], expectedIdCardAnswer.answers.followUpText);
        validate.followUpQuestions(getChatBotResponse.followUpQuestion, expectedIdCardAnswer.answers.secondFollowUpQuestion);
        validate.done();
    });

    test(assistAmericaIdCardRandomQuestion.text, async function () {

        const expectedIdCardAnswer = await builder.idCardsAnswer(userData, 'future active');
        const postMessage = await user.conversation.postMessage(assistAmericaIdCardRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getChatBotResponse = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getChatBotResponse.response.status, 200);
        validate.jsonSchema(getChatBotResponse.json, answerSchema.futureAnswer);
        validate.answer(getChatBotResponse.answersArray[0], expectedIdCardAnswer.answers.hereIsYourIdCardAnswer);
        validate.answer(getChatBotResponse.answersArray[1], expectedIdCardAnswer.answers.followUpText);
        validate.followUpQuestions(getChatBotResponse.followUpQuestion, expectedIdCardAnswer.answers.secondFollowUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
