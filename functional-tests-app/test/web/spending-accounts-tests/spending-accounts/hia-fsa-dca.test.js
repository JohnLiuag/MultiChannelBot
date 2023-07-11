import { user } from '../../../../services/user.service.js';
import { validate } from '../../../../services/validator.service.js';
import { environmentVariables } from '../../../../env.variables.js';
import { collector } from '../../../../services/data-collector-service.js';
import { builder } from '../../../../services/answer-builders/spending-accounts.builder.js';
import { randomizer } from '../../../../services/question-randomizer.service.js';
import * as questions from '../../../../test-data/questions/spending-accounts-questions.test-data.js';
import * as action from '../../../../test-data/prompts/spending-accounts-actions.test-data.js';
import * as postSchema from '../../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../../test-data/schemas/spending-accounts.schemas.js';


let userData;
let userId; 
const hiaRandomQuestion = randomizer.getRandomQuestion(questions.hiaQuestionsArray);
const fsaRandomQuestion = randomizer.getRandomQuestion(questions.fsaQuestionsArray);
const dcaRandomQuestion = randomizer.getRandomQuestion(questions.dcaQuestionsArray);
const qtaRandomQuestion = randomizer.getRandomQuestion(questions.qtaQuestionsArray);
const generalSpendingAccountsRandomQuestion = randomizer.getRandomQuestion(questions.generalSpendingAccountsQuestionsArray);

suite('Spending Account Tests: HIA, FSA, DCA', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.lesnbry;
        userData = await collector.getData(userId, ['eligibility', 'medicareFlexCard', 'spendingAccounts']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(hiaRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.spendingAccountsAnswer(userData, 'hia');
        const postMessage = await user.conversation.postMessage(hiaRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.spendingAccountWithPrompts);
        validate.answer(getAnswer.answersArray[0], expectedAnswer.answers.answer[0]);
        validate.answer(getAnswer.answersArray[1], expectedAnswer.answers.answer[1]);
        validate.answer(getAnswer.answersArray[2], expectedAnswer.answers.uniqueFollowUpQuestion);
        validate.buttons(getAnswer.buttons, expectedAnswer.buttons);
        validate.done();

        const selectSpendingAccount = await user.conversation.postMessage(action.hia, userData.consumerProfile, this);

        validate.statusCode(selectSpendingAccount.response.status, 200);
        validate.jsonSchema(selectSpendingAccount.json, postSchema.postMessage);
        validate.done();

        const getPromptAnswer = await user.conversation.getActivity(selectSpendingAccount.json.id);
        
        validate.statusCode(getPromptAnswer.response.status, 200);
        validate.jsonSchema(getPromptAnswer.json, answerSchema.spendingAccountWithPrompts);
        validate.answer(getPromptAnswer.answersArray[0], expectedAnswer.answers.answer[0]);
        validate.answer(getPromptAnswer.answersArray[1], expectedAnswer.answers.answer[1]);
        validate.answer(getPromptAnswer.answersArray[2], expectedAnswer.answers.uniqueFollowUpQuestion);
        validate.buttons(getPromptAnswer.buttons, expectedAnswer.buttons);
        validate.done();

        const selectAskAboutSomethingElse = await user.conversation.postMessage(action.askAboutSomethingElse, userData.consumerProfile, this);

        validate.statusCode(selectAskAboutSomethingElse.response.status, 200);
        validate.jsonSchema(selectAskAboutSomethingElse.json, postSchema.postMessage);
        validate.done();

        const getFinalAnswer = await user.conversation.getActivity(selectAskAboutSomethingElse.json.id);
        
        validate.statusCode(getFinalAnswer.response.status, 200);
        validate.jsonSchema(getFinalAnswer.json, answerSchema.spendingAccounts);
        validate.followUpQuestions(getFinalAnswer.followUpQuestion, expectedAnswer.answers.followUpQuestion);
        validate.done();
    });

    test(fsaRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.spendingAccountsAnswer(userData, 'fsa');
        const postMessage = await user.conversation.postMessage(fsaRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.spendingAccountWithPrompts);
        validate.answer(getAnswer.answersArray[0], expectedAnswer.answers.answer[0]);
        validate.answer(getAnswer.answersArray[1], expectedAnswer.answers.answer[1]);
        validate.answer(getAnswer.answersArray[2], expectedAnswer.answers.uniqueFollowUpQuestion);
        validate.buttons(getAnswer.buttons, expectedAnswer.buttons);
        validate.done();

        const selectSpendingAccount = await user.conversation.postMessage(action.fsa, userData.consumerProfile, this);

        validate.statusCode(selectSpendingAccount.response.status, 200);
        validate.jsonSchema(selectSpendingAccount.json, postSchema.postMessage);
        validate.done();

        const getPromptAnswer = await user.conversation.getActivity(selectSpendingAccount.json.id);
        
        validate.statusCode(getPromptAnswer.response.status, 200);
        validate.jsonSchema(getPromptAnswer.json, answerSchema.spendingAccountWithPrompts);
        validate.answer(getPromptAnswer.answersArray[0], expectedAnswer.answers.answer[0]);
        validate.answer(getPromptAnswer.answersArray[1], expectedAnswer.answers.answer[1]);
        validate.answer(getPromptAnswer.answersArray[2], expectedAnswer.answers.uniqueFollowUpQuestion);
        validate.buttons(getPromptAnswer.buttons, expectedAnswer.buttons);
        validate.done();

        const selectAskAboutSomethingElse = await user.conversation.postMessage(action.askAboutSomethingElse, userData.consumerProfile, this);

        validate.statusCode(selectAskAboutSomethingElse.response.status, 200);
        validate.jsonSchema(selectAskAboutSomethingElse.json, postSchema.postMessage);
        validate.done();

        const getFinalAnswer = await user.conversation.getActivity(selectAskAboutSomethingElse.json.id);
        
        validate.statusCode(getFinalAnswer.response.status, 200);
        validate.jsonSchema(getFinalAnswer.json, answerSchema.spendingAccounts);
        validate.followUpQuestions(getFinalAnswer.followUpQuestion, expectedAnswer.answers.followUpQuestion);
        validate.done();
    });

    test(dcaRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.spendingAccountsAnswer(userData, 'dca');
        const postMessage = await user.conversation.postMessage(dcaRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.spendingAccountWithPrompts);
        validate.answer(getAnswer.answersArray[0], expectedAnswer.answers.answer[0]);
        validate.answer(getAnswer.answersArray[1], expectedAnswer.answers.answer[1]);
        validate.answer(getAnswer.answersArray[2], expectedAnswer.answers.uniqueFollowUpQuestion);
        validate.buttons(getAnswer.buttons, expectedAnswer.buttons);
        validate.done();

        const selectSpendingAccount = await user.conversation.postMessage(action.dca, userData.consumerProfile, this);

        validate.statusCode(selectSpendingAccount.response.status, 200);
        validate.jsonSchema(selectSpendingAccount.json, postSchema.postMessage);
        validate.done();

        const getPromptAnswer = await user.conversation.getActivity(selectSpendingAccount.json.id);
        
        validate.statusCode(getPromptAnswer.response.status, 200);
        validate.jsonSchema(getPromptAnswer.json, answerSchema.spendingAccountWithPrompts);
        validate.answer(getPromptAnswer.answersArray[0], expectedAnswer.answers.answer[0]);
        validate.answer(getPromptAnswer.answersArray[1], expectedAnswer.answers.answer[1]);
        validate.answer(getPromptAnswer.answersArray[2], expectedAnswer.answers.uniqueFollowUpQuestion);
        validate.buttons(getPromptAnswer.buttons, expectedAnswer.buttons);
        validate.done();

        const selectAskAboutSomethingElse = await user.conversation.postMessage(action.askAboutSomethingElse, userData.consumerProfile, this);

        validate.statusCode(selectAskAboutSomethingElse.response.status, 200);
        validate.jsonSchema(selectAskAboutSomethingElse.json, postSchema.postMessage);
        validate.done();

        const getFinalAnswer = await user.conversation.getActivity(selectAskAboutSomethingElse.json.id);
        
        validate.statusCode(getFinalAnswer.response.status, 200);
        validate.jsonSchema(getFinalAnswer.json, answerSchema.spendingAccounts);
        validate.followUpQuestions(getFinalAnswer.followUpQuestion, expectedAnswer.answers.followUpQuestion);
        validate.done();
    });

    test(generalSpendingAccountsRandomQuestion.text, async function () {
    
        const expectedAnswer = await builder.spendingAccountsAnswer(userData, 'multiple-general');
        const postMessage = await user.conversation.postMessage(generalSpendingAccountsRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.spendingAccounts);
        validate.answer(getAnswer.answersArray[0], expectedAnswer.answers.answer[0]);
        validate.answer(getAnswer.answersArray[1], expectedAnswer.answers.answer[1]);
        validate.answer(getAnswer.answersArray[2], expectedAnswer.answers.answer[2]);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.answers.followUpQuestion);
        validate.done();
    });

    test(qtaRandomQuestion.text, async function () {
    
        const expectedAnswer = await builder.spendingAccountsAnswer(userData, 'no requested account');
        const expectedAnswer2 = await builder.spendingAccountsAnswer(userData, 'fsa');
        const postMessage = await user.conversation.postMessage(qtaRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.noRequestedSpendingAccountAnswer);
        validate.answer(getAnswer.answersArray[0], expectedAnswer.answers.answer[0]);
        validate.answer(getAnswer.answersArray[1], expectedAnswer.answers.answer[1]);
        validate.answer(getAnswer.answersArray[2], expectedAnswer.answers.uniqueFollowUpQuestion);
        validate.buttons(getAnswer.buttons, expectedAnswer.buttons);
        validate.done();

        const selectSpendingAccount = await user.conversation.postMessage(action.fsa, userData.consumerProfile, this);

        validate.statusCode(selectSpendingAccount.response.status, 200);
        validate.jsonSchema(selectSpendingAccount.json, postSchema.postMessage);
        validate.done();

        const getPromptAnswer = await user.conversation.getActivity(selectSpendingAccount.json.id);
        
        validate.statusCode(getPromptAnswer.response.status, 200);
        validate.jsonSchema(getPromptAnswer.json, answerSchema.spendingAccountWithPrompts);
        validate.answer(getPromptAnswer.answersArray[0], expectedAnswer2.answers.answer[0]);
        validate.answer(getPromptAnswer.answersArray[1], expectedAnswer2.answers.answer[1]);
        validate.answer(getPromptAnswer.answersArray[2], expectedAnswer2.answers.uniqueFollowUpQuestion);
        validate.buttons(getPromptAnswer.buttons, expectedAnswer2.buttons);
        validate.done();

        const selectAskAboutSomethingElse = await user.conversation.postMessage(action.askAboutSomethingElse, userData.consumerProfile, this);

        validate.statusCode(selectAskAboutSomethingElse.response.status, 200);
        validate.jsonSchema(selectAskAboutSomethingElse.json, postSchema.postMessage);
        validate.done();

        const getFinalAnswer = await user.conversation.getActivity(selectAskAboutSomethingElse.json.id);
        
        validate.statusCode(getFinalAnswer.response.status, 200);
        validate.jsonSchema(getFinalAnswer.json, answerSchema.spendingAccounts);
        validate.followUpQuestions(getFinalAnswer.followUpQuestion, expectedAnswer.answers.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
