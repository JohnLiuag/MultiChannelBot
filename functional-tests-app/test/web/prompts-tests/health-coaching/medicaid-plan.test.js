import { user } from '../../../../services/user.service.js';
import { validate } from '../../../../services/validator.service.js';
import { environmentVariables } from '../../../../env.variables.js';
import { collector } from '../../../../services/data-collector-service.js';
import { builder } from '../../../../services/answer-builders/prompts.builder.js';
import * as questions from '../../../../test-data/questions/prompts-questions.test-data.js';
import * as answerSchema from '../../../../test-data/schemas/prompts.schemas.js';


let userData;
let userId; 

suite('Prompts Tests: Medicaid plan -> Health Coaching is not included in menu ', function () {

    suiteSetup(async function () {
        if (environmentVariables.server != 'STAGE') {
            userId = environmentVariables.user.chatbrenda; 
            userData = await collector.getData(userId, ['liveChatStatus', 'liveChatWorkingHours', 'eligibility', 'benefits', 'idCards', 'spendingAccounts']);
            await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
        } else {
            this.skip();
        }
    });

    test("Health Coaching is not included in menu", async function () {
        
        const expectedAnswer = await builder.promptsAnswer(userData, 'common');
        const getFirstMessage = await user.conversation.getActivity(expectedAnswer.FIRST_MESSAGE_ID);

        validate.statusCode(getFirstMessage.response.status, 200);
        validate.jsonSchema(getFirstMessage.json, answerSchema.greetingMessage);
        validate.answer(getFirstMessage.answer, expectedAnswer.answers.answer);
        validate.doesNotInclude(getFirstMessage.buttons, questions.healthCoaching.text);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});