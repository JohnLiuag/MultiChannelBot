import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/network-search.builder.js';
import { randomizer } from '../../../services/question-randomizer.service.js'
import * as questions from '../../../test-data/questions/network-search-questions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/network-search.schemas.js';


let userData;
let userId; 
const networkSearchRandomQuestion = randomizer.getRandomQuestion(questions.networkSearchQuestionsArray);

suite('Network Search Tests (Web): user with active DentalVision plan', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatedward;
        userData = await collector.getData(userId);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(networkSearchRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.networkSearchAnswer(userData, 'web', 'active', environmentVariables.domain);
        const postMessage = await user.conversation.postMessage(networkSearchRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.networkSearchAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
