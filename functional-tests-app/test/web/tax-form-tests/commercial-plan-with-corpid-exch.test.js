import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/tax-form.builder.js';
import { randomizer } from '../../../services/question-randomizer.service.js';
import * as questions from '../../../test-data/questions/tax-form-questions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/tax-form.schemas.js';


let userData;
let userId; 
const taxFormRandomQuestion = randomizer.getRandomQuestion(questions.taxFormQuestionsArray);

suite('TAX Form Tests: Commercial plan with corpId: exch', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatbetsy;
        userData = await collector.getData(userId, ['eligibility', 'taxForm']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(taxFormRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.taxFormAnswer(userData, 'onexchange 1095A');
        const postMessage = await user.conversation.postMessage(taxFormRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.taxFormAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
