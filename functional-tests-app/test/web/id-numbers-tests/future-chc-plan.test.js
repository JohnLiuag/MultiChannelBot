import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/id-numbers.builder.js';
import { randomizer } from '../../../services/question-randomizer.service.js';
import * as questions from '../../../test-data/questions/id-numbers-questions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/id-number.schemas.js';


let userData;
let userId; 
const generalIdNumbersRandomQuestion = randomizer.getRandomQuestion(questions.generalIdNumbersQuestionsArray);
const visionIdNumbersRandomQuestion = randomizer.getRandomQuestion(questions.visionIdNumbersQuestionsArray);
const dentalIdNumbersRandomQuestion = randomizer.getRandomQuestion(questions.dentalIdNumbersQuestionsArray);

suite('ID Numbers Tests: Future CHC plan (Medical)', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatbotdarryl;
        userData = await collector.getData(userId);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(generalIdNumbersRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.idNumbersAnswer(userData, generalIdNumbersRandomQuestion.text, 'termed/futureactive');
        const postMessage = await user.conversation.postMessage(generalIdNumbersRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.termedFutureAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(visionIdNumbersRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.idNumbersAnswer(userData, visionIdNumbersRandomQuestion.text, 'termed/futureactive');
        const postMessage = await user.conversation.postMessage(visionIdNumbersRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.termedFutureAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(dentalIdNumbersRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.idNumbersAnswer(userData, dentalIdNumbersRandomQuestion.text, 'termed/futureactive');
        const postMessage = await user.conversation.postMessage(dentalIdNumbersRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.noDentalVisionCoverageAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
