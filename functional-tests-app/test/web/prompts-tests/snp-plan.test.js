import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/prompts.builder.js';
import { builder as builder2 } from '../../../services/answer-builders/eligibility.builder.js';
import { builder as builder3 } from '../../../services/answer-builders/id-cards.builder.js';
import { builder as builder4 } from '../../../services/answer-builders/coinsurance.builder.js';
import { builder as builder5 } from '../../../services/answer-builders/benefits.builder.js';
import * as action from '../../../test-data/prompts/id-cards-actions.test-data.js';
import * as question from '../../../test-data/questions/prompts-questions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/prompts.schemas.js';


let userData;
let userId; 

suite('Prompts Tests: SNP plan', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.test21tdc;
        userData = await collector.getData(userId, ['eligibility', 'benefits', 'idCards', 'spendingAccounts']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test("Coverage Status -> Medical", async function () {
        
        const expectedAnswer = await builder.promptsAnswer(userData, 'common', 'coverage status');
        const expectedSubAnswer = await builder2.eligibilityAnswer(userData, question.medical.text, 'active');
        const getFirstMessage = await user.conversation.getActivity(expectedAnswer.FIRST_MESSAGE_ID);

        validate.statusCode(getFirstMessage.response.status, 200);
        validate.jsonSchema(getFirstMessage.json, answerSchema.greetingMessage);
        validate.answer(getFirstMessage.answer, expectedAnswer.answers.answer);
        validate.buttons(getFirstMessage.buttons, expectedAnswer.promptButtons);
        validate.done();

        const clickFirstLevelPrompt = await user.conversation.postMessage(question.coverageStatus, userData.consumerProfile, this);
            
        validate.statusCode(clickFirstLevelPrompt.response.status, 200);
        validate.jsonSchema(clickFirstLevelPrompt.json, postSchema.postMessage);
        validate.done();

        const getSecondLevelPrompts = await user.conversation.getActivity(clickFirstLevelPrompt.json.id);

        validate.statusCode(getSecondLevelPrompts.response.status, 200);
        validate.jsonSchema(getSecondLevelPrompts.json, answerSchema.subprompts);
        validate.answer(getSecondLevelPrompts.answer, expectedAnswer.answers.firstFollowUpQuestion);
        validate.buttons(getSecondLevelPrompts.buttons, expectedAnswer.subPromptButtons.coverageStatus);
        validate.done();

        const clickSecondLevelPrompt = await user.conversation.postMessage(question.medical, userData.consumerProfile, this);
            
        validate.statusCode(clickSecondLevelPrompt.response.status, 200);
        validate.jsonSchema(clickSecondLevelPrompt.json, postSchema.postMessage);
        validate.done();

        const getAnswer = await user.conversation.getActivity(clickSecondLevelPrompt.json.id);

        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.eligibilityAnswer);
        validate.answer(getAnswer.answer, expectedSubAnswer.answer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedSubAnswer.followUpQuestion);
        validate.done();
    });

    test("Coverage Status -> Vision", async function () {
        
        const expectedAnswer = await builder.promptsAnswer(userData, 'common', 'coverage status');
        const expectedSubAnswer = await builder2.eligibilityAnswer(userData, question.vision.text, 'active');
        const postMenu = await user.conversation.postMessage(question.menu, userData.consumerProfile, this);
        
        const getRestartedMenu = await user.conversation.getActivity(postMenu.json.id);
        
        validate.statusCode(getRestartedMenu.response.status, 200);
        validate.jsonSchema(getRestartedMenu.json, answerSchema.greetingMessage);
        validate.answer(getRestartedMenu.answer, expectedAnswer.answers.restartedMenuAnswer);
        validate.buttons(getRestartedMenu.buttons, expectedAnswer.promptButtons);
        validate.done();

        const clickFirstLevelPrompt = await user.conversation.postMessage(question.coverageStatus, userData.consumerProfile, this);
            
        validate.statusCode(clickFirstLevelPrompt.response.status, 200);
        validate.jsonSchema(clickFirstLevelPrompt.json, postSchema.postMessage);
        validate.done();

        const getSecondLevelPrompts = await user.conversation.getActivity(clickFirstLevelPrompt.json.id);

        validate.statusCode(getSecondLevelPrompts.response.status, 200);
        validate.jsonSchema(getSecondLevelPrompts.json, answerSchema.subprompts);
        validate.answer(getSecondLevelPrompts.answer, expectedAnswer.answers.firstFollowUpQuestion);
        validate.buttons(getSecondLevelPrompts.buttons, expectedAnswer.subPromptButtons.coverageStatus);
        validate.done();

        const clickSecondLevelPrompt = await user.conversation.postMessage(question.vision, userData.consumerProfile, this);
            
        validate.statusCode(clickSecondLevelPrompt.response.status, 200);
        validate.jsonSchema(clickSecondLevelPrompt.json, postSchema.postMessage);
        validate.done();

        const getAnswer = await user.conversation.getActivity(clickSecondLevelPrompt.json.id);

        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.eligibilityAnswer);
        validate.answer(getAnswer.answer, expectedSubAnswer.answer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedSubAnswer.followUpQuestion);
        validate.done();
    });

    test("ID Cards -> Assist America", async function () {
        
        const expectedAnswer = await builder.promptsAnswer(userData, 'common', 'idCards');
        const expectedSubAnswer = await builder3.idCardsAnswer(userData, 'active', 'has id card', question.assistAmerica.text);
        const postMenu = await user.conversation.postMessage(question.menu, userData.consumerProfile, this);
        
        const getRestartedMenu = await user.conversation.getActivity(postMenu.json.id);
        
        validate.statusCode(getRestartedMenu.response.status, 200);
        validate.jsonSchema(getRestartedMenu.json, answerSchema.greetingMessage);
        validate.answer(getRestartedMenu.answer, expectedAnswer.answers.restartedMenuAnswer);
        validate.buttons(getRestartedMenu.buttons, expectedAnswer.promptButtons);
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

        const clickSecondLevelPrompt = await user.conversation.postMessage(question.assistAmerica, userData.consumerProfile, this);
            
        validate.statusCode(clickSecondLevelPrompt.response.status, 200);
        validate.jsonSchema(clickSecondLevelPrompt.json, postSchema.postMessage);
        validate.done();

        const getAnswer = await user.conversation.getActivity(clickSecondLevelPrompt.json.id);

        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.idCardAnswerWithPrompt);
        validate.answer(getAnswer.answersArray[0], expectedSubAnswer.answers.hereIsYourIdCardAnswer);
        validate.url(getAnswer.urls, expectedSubAnswer.idCardUrl);
        validate.answer(getAnswer.answersArray[1], expectedSubAnswer.answers.thirdFollowUpQuestion);
        validate.buttons(getAnswer.buttons, action.buttons);
        validate.done();

        const clickNoActionButton = await user.conversation.postMessage(action.no, userData.consumerProfile, this);
        
        validate.statusCode(clickNoActionButton.response.status, 200);
        validate.jsonSchema(clickNoActionButton.json, postSchema.postMessage);
        validate.done();

        const clickNoActionAnswer = await user.conversation.getActivity(clickNoActionButton.json.id);

        validate.statusCode(clickNoActionAnswer.response.status, 200);
        validate.jsonSchema(clickNoActionAnswer.json, answerSchema.idCardAnswerWithPrompt);
        validate.followUpQuestions(clickNoActionAnswer.followUpQuestion, expectedSubAnswer.answers.secondFollowUpQuestion);
        validate.done();
    });

    test("ID Cards -> Medical", async function () {
        
        const expectedAnswer = await builder.promptsAnswer(userData, 'common', 'idCards');
        const expectedSubAnswer = await builder3.idCardsAnswer(userData, 'active', 'has id card', question.medical.text);
        const postMenu = await user.conversation.postMessage(question.menu, userData.consumerProfile, this);
        
        const getRestartedMenu = await user.conversation.getActivity(postMenu.json.id);
        
        validate.statusCode(getRestartedMenu.response.status, 200);
        validate.jsonSchema(getRestartedMenu.json, answerSchema.greetingMessage);
        validate.answer(getRestartedMenu.answer, expectedAnswer.answers.restartedMenuAnswer);
        validate.buttons(getRestartedMenu.buttons, expectedAnswer.promptButtons);
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
       
        const clickSecondLevelPrompt = await user.conversation.postMessage(question.medical, userData.consumerProfile, this);
            
        validate.statusCode(clickSecondLevelPrompt.response.status, 200);
        validate.jsonSchema(clickSecondLevelPrompt.json, postSchema.postMessage);
        validate.done();

        const getAnswer = await user.conversation.getActivity(clickSecondLevelPrompt.json.id);

        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.idCardAnswerWithPrompt);
        validate.answer(getAnswer.answersArray[0], expectedSubAnswer.answers.hereIsYourIdCardAnswer);
        validate.url(getAnswer.urls, expectedSubAnswer.idCardUrl);
        validate.answer(getAnswer.answersArray[1], expectedSubAnswer.answers.thirdFollowUpQuestion);
        validate.buttons(getAnswer.buttons, action.buttons);
        validate.done();

        const clickNoActionButton = await user.conversation.postMessage(action.no, userData.consumerProfile, this);
        
        validate.statusCode(clickNoActionButton.response.status, 200);
        validate.jsonSchema(clickNoActionButton.json, postSchema.postMessage);
        validate.done();

        const clickNoActionAnswer = await user.conversation.getActivity(clickNoActionButton.json.id);

        validate.statusCode(clickNoActionAnswer.response.status, 200);
        validate.jsonSchema(clickNoActionAnswer.json, answerSchema.idCardAnswerWithPrompt);
        validate.followUpQuestions(clickNoActionAnswer.followUpQuestion, expectedSubAnswer.answers.secondFollowUpQuestion);
        validate.done();
    });

    test("Medical Coverage -> Coinsurance", async function () {
        
        const expectedAnswer = await builder.promptsAnswer(userData, 'common', 'medical coverage');
        const expectedSubAnswer = await builder4.coinsuranceAnswer(userData, 'active');
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
        const expectedSubAnswer = await builder5.benefitsAnswer(userData, 'deductible', 'active');
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
        const expectedSubAnswer = await builder5.benefitsAnswer(userData, 'outOfPocket', 'active');
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
