import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/prompts.builder.js';
import { builder as builder2 } from '../../../services/answer-builders/spending-accounts.builder.js';
import * as question from '../../../test-data/questions/prompts-questions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/prompts.schemas.js';


let userData;
let userId; 

suite('Prompts Tests: Spending Account -> Flex Spend Card (PBP H3907-008 (Rewards))', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.sundjoh;
        userData = await collector.getData(userId, ['eligibility', 'benefits', 'idCards', 'spendingAccounts', 'medicareFlexCard']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test("Spending Accounts -> Flex Spend Card (PBP H3907-008 (Rewards))", async function () {
        
        const expectedAnswer = await builder.promptsAnswer(userData, 'common', 'spending accounts');
        const expectedSubAnswer = await builder2.spendingAccountsAnswer(userData, 'active', 'medicare-rewards');
        const getFirstMessage = await user.conversation.getActivity(expectedAnswer.FIRST_MESSAGE_ID);

        validate.statusCode(getFirstMessage.response.status, 200);
        validate.jsonSchema(getFirstMessage.json, answerSchema.greetingMessage);
        validate.answer(getFirstMessage.answer, expectedAnswer.answers.answer);
        validate.buttons(getFirstMessage.buttons, expectedAnswer.promptButtons);
        validate.done();

        const clickFirstLevelPrompt = await user.conversation.postMessage(question.spendingAccounts, userData.consumerProfile, this);
            
        validate.statusCode(clickFirstLevelPrompt.response.status, 200);
        validate.jsonSchema(clickFirstLevelPrompt.json, postSchema.postMessage);
        validate.done();

        const getSecondLevelPrompts = await user.conversation.getActivity(clickFirstLevelPrompt.json.id);

        validate.statusCode(getSecondLevelPrompts.response.status, 200);
        validate.jsonSchema(getSecondLevelPrompts.json, answerSchema.subprompts);
        validate.answer(getSecondLevelPrompts.answer, expectedAnswer.answers.firstFollowUpQuestion);
        validate.buttons(getSecondLevelPrompts.buttons, expectedAnswer.subPromptButtons.spendingAccounts);
        validate.done();

        const clickSecondLevelPrompt = await user.conversation.postMessage(question.flexSpendCard, userData.consumerProfile, this);
            
        validate.statusCode(clickSecondLevelPrompt.response.status, 200);
        validate.jsonSchema(clickSecondLevelPrompt.json, postSchema.postMessage);
        validate.done();

        const getAnswer = await user.conversation.getActivity(clickSecondLevelPrompt.json.id);

        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.spendingAccountsAnswer);
        validate.answer(getAnswer.answersArray[0], expectedSubAnswer.answers.answer[0]);
        validate.answer(getAnswer.answersArray[1], expectedSubAnswer.answers.answer[1]);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedSubAnswer.answers.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
