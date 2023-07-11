import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/prompts.builder.js';
import { builder as builder2 } from '../../../services/answer-builders/eligibility.builder.js';
import * as questions from '../../../test-data/questions/prompts-questions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/prompts.schemas.js';


let userData;
let userId; 

suite('Prompts Tests: Menu words intents recognition', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.numberman;
        userData = await collector.getData(userId, ['eligibility', 'benefits', 'idCards', 'spendingAccounts']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    questions.menuWordsQuestionsArray.forEach((question) => {
        test(question.text, async function () {
            const expectedAnswer = await builder.promptsAnswer(userData, 'common', 'coverage status');
            const expectedSubAnswer = await builder2.eligibilityAnswer(userData, questions.medical.text, 'active');

            const postMessage = await user.conversation.postMessage(questions.isMyCoverageActive, userData.consumerProfile, this);
                
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();

            const getAnswer = await user.conversation.getActivity(postMessage.json.id);

            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.eligibilityAnswer);
            validate.answer(getAnswer.answer, expectedSubAnswer.answer);
            validate.followUpQuestions(getAnswer.followUpQuestion, expectedSubAnswer.followUpQuestion);
            validate.done();

            const requestMenu = await user.conversation.postMessage(question, userData.consumerProfile, this);
                
            validate.statusCode(requestMenu.response.status, 200);
            validate.jsonSchema(requestMenu.json, postSchema.postMessage);
            validate.done();

            const getMenu = await user.conversation.getActivity(requestMenu.json.id);

            validate.statusCode(getMenu.response.status, 200);
            validate.jsonSchema(getMenu.json, answerSchema.greetingMessage);
            validate.buttons(getMenu.buttons, expectedAnswer.promptButtons);
            validate.done();
        });
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
