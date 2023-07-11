import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/forms.builder.js';
import { randomizer } from '../../../services/question-randomizer.service.js';
import * as questions from '../../../test-data/questions/forms-questions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/forms.schemas.js';


let userData;
let userId; 
const fluFormRandomQuestion = randomizer.getRandomQuestion(questions.fluFormQuestionsArray);
const rdrFormRandomQuestion = randomizer.getRandomQuestion(questions.rdrFormQuestionsArray);

suite('Assessments Tests: user with flu and rdr forms (Active SNP plan)', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatjersey;
        userData = await collector.getData(userId, ['forms']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(fluFormRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.formsAnswer(userData, 'flu', 'available');
        const postMessage = await user.conversation.postMessage(fluFormRandomQuestion, userData.consumerProfile, this);
        
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

    test(rdrFormRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.formsAnswer(userData, 'rdr', 'available');
        const postMessage = await user.conversation.postMessage(rdrFormRandomQuestion, userData.consumerProfile, this);
        
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

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
