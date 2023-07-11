import { user } from '../../../../services/user.service.js';
import { validate } from '../../../../services/validator.service.js';
import { environmentVariables } from '../../../../env.variables.js';
import { collector } from '../../../../services/data-collector-service.js';
import { builder } from '../../../../services/answer-builders/prompts.builder.js';
import * as questions from '../../../../test-data/questions/prompts-questions.test-data.js';
import * as postSchema from '../../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../../test-data/schemas/prompts.schemas.js';


let userData;
let userId; 

suite('Prompts Tests: CHC plan -> Health Coaching is included in menu ', function () {

    suiteSetup(async function () {
        if (environmentVariables.server != 'STAGE') {
            userId = environmentVariables.user.delucat; 
            userData = await collector.getData(userId, ['liveChatStatus', 'liveChatWorkingHours', 'eligibility', 'benefits', 'idCards', 'spendingAccounts']);
            await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
        } else {
            this.skip();
        }
    });

    test("Health Coaching is included in menu", async function () {
        
        const expectedAnswer = await builder.promptsAnswer(userData, 'common');
        const getFirstMessage = await user.conversation.getActivity(expectedAnswer.FIRST_MESSAGE_ID);

        validate.statusCode(getFirstMessage.response.status, 200);
        validate.jsonSchema(getFirstMessage.json, answerSchema.greetingMessage);
        validate.answer(getFirstMessage.answer, expectedAnswer.answers.answer);
        validate.includes(getFirstMessage.buttons, questions.healthCoaching.text);
        validate.done();

        if (userData.liveChatStatus && userData.liveChatStatus.contents.length != 0 && userData.liveChatStatus.contents[0].value.embeddedContent === '<div>true</div>') {
            const clickFirstLevelPrompt = await user.conversation.postMessage(questions.healthCoaching, userData.consumerProfile, this);
                
            validate.statusCode(clickFirstLevelPrompt.response.status, 200);
            validate.jsonSchema(clickFirstLevelPrompt.json, postSchema.postMessage);
            validate.done();

            const getSecondLevelPrompts = await user.conversation.getActivity(clickFirstLevelPrompt.json.id);

            validate.statusCode(getSecondLevelPrompts.response.status, 200);
            validate.jsonSchema(getSecondLevelPrompts.json, answerSchema.subprompts);
            validate.buttons(getSecondLevelPrompts.buttons, expectedAnswer.subPromptButtons.healthCoaching);
            validate.done();
        }
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});