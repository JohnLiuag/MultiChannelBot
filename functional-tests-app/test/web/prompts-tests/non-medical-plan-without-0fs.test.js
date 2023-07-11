import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/prompts.builder.js';
import { builder as builder2 } from '../../../services/answer-builders/coinsurance.builder.js';
import { builder as builder3 } from '../../../services/answer-builders/benefits.builder.js';
import * as question from '../../../test-data/questions/prompts-questions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/prompts.schemas.js';


let userData;
let userId; 

suite('Prompts Tests: Non medical plan (Plan code != 0FS)', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.testmary;
        userData = await collector.getData(userId, ['eligibility', 'benefits', 'idCards', 'spendingAccounts']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test("Medical Coverage -> Coinsurance", async function () {
        
        const expectedAnswer = await builder.promptsAnswer(userData, 'common', 'medical coverage');
        const expectedSubAnswer = await builder2.coinsuranceAnswer(userData, 'active');
        const getFirstMessage = await user.conversation.getActivity(expectedAnswer.FIRST_MESSAGE_ID);

        validate.statusCode(getFirstMessage.response.status, 200);
        validate.jsonSchema(getFirstMessage.json, answerSchema.greetingMessage);
        validate.answer(getFirstMessage.answer, expectedAnswer.answers.answer);
        validate.buttons(getFirstMessage.buttons, expectedAnswer.promptButtons);
        validate.done();

        const clickFirstLevelPrompt = await user.conversation.postMessage(question.medicalCoverage, userData.consumerProfile, this);
            
        validate.statusCode(clickFirstLevelPrompt.response.status, 200);
        validate.jsonSchema(clickFirstLevelPrompt.json, postSchema.postMessage);
        validate.done();

        const getSecondLevelPrompts = await user.conversation.getActivity(clickFirstLevelPrompt.json.id);

        validate.statusCode(getSecondLevelPrompts.response.status, 200);
        validate.jsonSchema(getSecondLevelPrompts.json, answerSchema.subprompts);
        validate.answer(getSecondLevelPrompts.answer, expectedAnswer.answers.firstFollowUpQuestion);
        validate.buttons(getSecondLevelPrompts.buttons, expectedAnswer.subPromptButtons.medicalCoverage);
        validate.done();

        const clickSecondLevelPrompt = await user.conversation.postMessage(question.coinsurance, userData.consumerProfile, this);
            
        validate.statusCode(clickSecondLevelPrompt.response.status, 200);
        validate.jsonSchema(clickSecondLevelPrompt.json, postSchema.postMessage);
        validate.done();

        const getAnswer = await user.conversation.getActivity(clickSecondLevelPrompt.json.id);

        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.coinsuranceAnswer);
        validate.answer(getAnswer.answer, expectedSubAnswer.answer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedSubAnswer.followUpQuestion);
        validate.done();
    });

    test("Medical Coverage -> Deductible", async function () {
        
        const expectedAnswer = await builder.promptsAnswer(userData, 'common', 'medical coverage');
        const expectedSubAnswer = await builder3.benefitsAnswer(userData, 'deductible', 'active');
        const postMenu = await user.conversation.postMessage(question.menu, userData.consumerProfile, this);
        
        const getRestartedMenu = await user.conversation.getActivity(postMenu.json.id);
        
        validate.statusCode(getRestartedMenu.response.status, 200);
        validate.jsonSchema(getRestartedMenu.json, answerSchema.greetingMessage);
        validate.answer(getRestartedMenu.answer, expectedAnswer.answers.restartedMenuAnswer);
        validate.buttons(getRestartedMenu.buttons, expectedAnswer.promptButtons);
        validate.done();

        const clickFirstLevelPrompt = await user.conversation.postMessage(question.medicalCoverage, userData.consumerProfile, this);
            
        validate.statusCode(clickFirstLevelPrompt.response.status, 200);
        validate.jsonSchema(clickFirstLevelPrompt.json, postSchema.postMessage);
        validate.done();

        const getSecondLevelPrompts = await user.conversation.getActivity(clickFirstLevelPrompt.json.id);

        validate.statusCode(getSecondLevelPrompts.response.status, 200);
        validate.jsonSchema(getSecondLevelPrompts.json, answerSchema.subprompts);
        validate.answer(getSecondLevelPrompts.answer, expectedAnswer.answers.firstFollowUpQuestion);
        validate.buttons(getSecondLevelPrompts.buttons, expectedAnswer.subPromptButtons.medicalCoverage);
        validate.done();

        const clickSecondLevelPrompt = await user.conversation.postMessage(question.deductible, userData.consumerProfile, this);
            
        validate.statusCode(clickSecondLevelPrompt.response.status, 200);
        validate.jsonSchema(clickSecondLevelPrompt.json, postSchema.postMessage);
        validate.done();

        const getAnswer = await user.conversation.getActivity(clickSecondLevelPrompt.json.id);

        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.deductibleOopAnswer);
        validate.answer(getAnswer.answer, expectedSubAnswer.answers.firstLevelAnswer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedSubAnswer.answers.followUpQuestion);
        validate.done();
    });

    test("Medical Coverage -> Out of Pocket", async function () {
        
        const expectedAnswer = await builder.promptsAnswer(userData, 'common', 'medical coverage');
        const expectedSubAnswer = await builder3.benefitsAnswer(userData, 'outOfPocket', 'active');
        const postMenu = await user.conversation.postMessage(question.menu, userData.consumerProfile, this);
        
        const getRestartedMenu = await user.conversation.getActivity(postMenu.json.id);
        
        validate.statusCode(getRestartedMenu.response.status, 200);
        validate.jsonSchema(getRestartedMenu.json, answerSchema.greetingMessage);
        validate.answer(getRestartedMenu.answer, expectedAnswer.answers.restartedMenuAnswer);
        validate.buttons(getRestartedMenu.buttons, expectedAnswer.promptButtons);
        validate.done();

        const clickFirstLevelPrompt = await user.conversation.postMessage(question.medicalCoverage, userData.consumerProfile, this);
            
        validate.statusCode(clickFirstLevelPrompt.response.status, 200);
        validate.jsonSchema(clickFirstLevelPrompt.json, postSchema.postMessage);
        validate.done();

        const getSecondLevelPrompts = await user.conversation.getActivity(clickFirstLevelPrompt.json.id);

        validate.statusCode(getSecondLevelPrompts.response.status, 200);
        validate.jsonSchema(getSecondLevelPrompts.json, answerSchema.subprompts);
        validate.answer(getSecondLevelPrompts.answer, expectedAnswer.answers.firstFollowUpQuestion);
        validate.buttons(getSecondLevelPrompts.buttons, expectedAnswer.subPromptButtons.medicalCoverage);
        validate.done();

        const clickSecondLevelPrompt = await user.conversation.postMessage(question.out_Of_Pocket_Max, userData.consumerProfile, this);
            
        validate.statusCode(clickSecondLevelPrompt.response.status, 200);
        validate.jsonSchema(clickSecondLevelPrompt.json, postSchema.postMessage);
        validate.done();

        const getAnswer = await user.conversation.getActivity(clickSecondLevelPrompt.json.id);

        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.deductibleOopAnswer);
        validate.answer(getAnswer.answer, expectedSubAnswer.answers.firstLevelAnswer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedSubAnswer.answers.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
