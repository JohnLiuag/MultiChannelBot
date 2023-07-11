import { user } from '../../../../services/user.service.js';
import { validate } from '../../../../services/validator.service.js';
import { environmentVariables } from '../../../../env.variables.js';
import { collector } from '../../../../services/data-collector-service.js';
import { builder } from '../../../../services/answer-builders/prompts.builder.js';
import { builder as builder2 } from '../../../../services/answer-builders/benefits.builder.js';
import * as question from '../../../../test-data/questions/prompts-questions.test-data.js';
import * as action from '../../../../test-data/prompts/yes-no-actions.test-data.js';
import * as postSchema from '../../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../../test-data/schemas/prompts.schemas.js';


let userData;
let userId; 

suite('Prompts Tests: Commercial testnicole plan Medical Coverage -> Deductible', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.testnicole;
        userData = await collector.getData(userId, ['eligibility', 'benefits', 'idCards', 'spendingAccounts']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test("Medical Coverage -> Deductible", async function () {
        
        const expectedAnswer = await builder.promptsAnswer(userData, 'common', 'medical coverage');
        const expectedSubAnswer = await builder2.benefitsAnswer(userData, 'deductible', 'active');
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

        const clickSecondLevelPrompt = await user.conversation.postMessage(question.deductible, userData.consumerProfile, this);
            
        validate.statusCode(clickSecondLevelPrompt.response.status, 200);
        validate.jsonSchema(clickSecondLevelPrompt.json, postSchema.postMessage);
        validate.done();

        const getAnswer = await user.conversation.getActivity(clickSecondLevelPrompt.json.id);

        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.deductibleOopAnswer);
        validate.answer(getAnswer.answer, expectedSubAnswer.answers.firstLevelAnswer);
        validate.answer(getAnswer.followUpQuestion[0], expectedSubAnswer.answers.secondLevelQuestion);
        validate.buttons(getAnswer.buttons, expectedSubAnswer.buttons);
        validate.done();

        const clickNoButton = await user.conversation.postMessage(action.no, userData.consumerProfile, this);
        
        validate.statusCode(clickNoButton.response.status, 200);
        validate.jsonSchema(clickNoButton.json, postSchema.postMessage);
        validate.done();

        const noButtonAnswer = await user.conversation.getActivity(clickNoButton.json.id);
        
        validate.statusCode(noButtonAnswer.response.status, 200);
        validate.jsonSchema(noButtonAnswer.json, answerSchema.deductibleOopAnswer);
        validate.followUpQuestions(noButtonAnswer.followUpQuestion, expectedSubAnswer.answers.followUpQuestion);
        validate.done();
    });
    
    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
