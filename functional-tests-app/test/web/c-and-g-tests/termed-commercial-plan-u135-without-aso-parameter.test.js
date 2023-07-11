import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/c-and-g.builder.js';
import { randomizer } from '../../../services/question-randomizer.service.js';
import * as questions from '../../../test-data/questions/c-and-g-questions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/c-and-g.schemas.js';


let userData;
let userId; 
const cAndGAssessmentsRandomQuestion = randomizer.getRandomQuestion(questions.cAndGQuestionsArray);

suite('C&G Assessments Tests: Termed Commercial plan + corpId: U135 + without isAso parameter', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chattracey;
        userData = await collector.getData(userId, ['eligibility']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(cAndGAssessmentsRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.cAndGAnswer(userData, 'cm aso');
        const postMessage = await user.conversation.postMessage(cAndGAssessmentsRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.cAndGAnswer);
        validate.answer(getAnswer.answersArray[0], expectedAnswer.answer[0]);
        validate.answer(getAnswer.answersArray[1], expectedAnswer.answer[1]);
        validate.answer(getAnswer.answersArray[2], expectedAnswer.answer[2]);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
