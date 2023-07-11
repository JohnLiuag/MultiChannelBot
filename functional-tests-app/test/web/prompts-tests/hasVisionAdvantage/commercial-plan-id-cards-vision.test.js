import { user } from '../../../../services/user.service.js';
import { validate } from '../../../../services/validator.service.js';
import { environmentVariables } from '../../../../env.variables.js';
import { collector } from '../../../../services/data-collector-service.js';
import { builder } from '../../../../services/answer-builders/prompts.builder.js';
import { builder as builder2 } from '../../../../services/answer-builders/id-cards.builder.js';
import * as question from '../../../../test-data/questions/prompts-questions.test-data.js';
import * as postSchema from '../../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../../test-data/schemas/prompts.schemas.js';


let userData;
let userId; 

suite.skip('Prompts Tests: Commercial visionadvantageonly plan ID Cards -> Vision || Skip reason: data issue. The user does not have this data within Umbraco', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.visionadvantageonly;
        userData = await collector.getData(userId, ['eligibility', 'benefits', 'idCards', 'spendingAccounts']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test("ID Cards -> Vision", async function () {
        
        const expectedAnswer = await builder.promptsAnswer(userData, 'common', 'idCards');
        const expectedSubAnswer = await builder2.idCardsAnswer(userData, 'active', 'has id card', question.vision.text);
        const getFirstMessage = await user.conversation.getActivity(expectedAnswer.FIRST_MESSAGE_ID);

        validate.statusCode(getFirstMessage.response.status, 200);
        validate.jsonSchema(getFirstMessage.json, answerSchema.greetingMessage);
        validate.answer(getFirstMessage.answer, expectedAnswer.answers.answer);
        validate.buttons(getFirstMessage.buttons, expectedAnswer.promptButtons);
        validate.done();

        const clickFirstLevelPrompt = await user.conversation.postMessage(question.idCards, userData.consumerProfile, this);
            
        validate.statusCode(clickFirstLevelPrompt.response.status, 200);
        validate.jsonSchema(clickFirstLevelPrompt.json, postSchema.postMessage);
        validate.done();

        const getSecondLevelPrompts = await user.conversation.getActivity(clickFirstLevelPrompt.json.id);

        validate.statusCode(getSecondLevelPrompts.response.status, 200);
        validate.jsonSchema(getSecondLevelPrompts.json, answerSchema.subprompts);
        validate.answer(getSecondLevelPrompts.answer, expectedAnswer.answers.idCardsFollowUpQuestion);
        validate.buttons(getSecondLevelPrompts.buttons, expectedAnswer.subPromptButtons.idCards);
        validate.done();

        const clickSecondLevelPrompt = await user.conversation.postMessage(question.vision, userData.consumerProfile, this);
            
        validate.statusCode(clickSecondLevelPrompt.response.status, 200);
        validate.jsonSchema(clickSecondLevelPrompt.json, postSchema.postMessage);
        validate.done();

        const getAnswer = await user.conversation.getActivity(clickSecondLevelPrompt.json.id);

        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.idCardAnswerWithPrompt);
        validate.answer(getAnswer.idCardAnswer, expectedSubAnswer.answers.hereIsYourIdCardAnswer);
        validate.url(getAnswer.urls, expectedSubAnswer.idCardUrl);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedSubAnswer.answers.secondFollowUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
