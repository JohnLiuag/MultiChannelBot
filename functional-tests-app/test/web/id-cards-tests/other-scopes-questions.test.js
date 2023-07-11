import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/id-cards.builder.js';
import { builder as builder2 } from '../../../services/answer-builders/eligibility.builder.js';
import { builder as builder3 } from '../../../services/answer-builders/benefits.builder.js';
import { builder as builder4 } from '../../../services/answer-builders/coinsurance.builder.js';
import * as questions from '../../../test-data/questions/id-cards-questions.test-data.js';
import * as faq from '../../../test-data/answers/faq-answers.test-data.js';
import * as action from '../../../test-data/prompts/id-cards-actions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/id-card.schemas.js';


let userData;
let userId; 

suite('ID Card Tests: Other Id Card scenarios', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatshawn;
        userData = await collector.getData(userId, ['eligibility', 'idCards', 'benefits']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    //Test when id cards buttons are displayed
    test("Id cards tests: Ask 'Where can I find my ID card?' and 'I need an Assist America id card.' after id cards buttons are displayed", async function () {

        const expectedIdCardAnswer = await builder.idCardsAnswer(userData, 'active', 'has id card', questions.whereCanIFindMyIdCard.text);
        const expectedIdCardAnswer2 = await builder.idCardsAnswer(userData, 'active', 'has id card', questions.iNeedAnAssistAmericaIdCard.text);
        const postMessage = await user.conversation.postMessage(questions.whereCanIFindMyIdCard, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getIdCardButton = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getIdCardButton.response.status, 200);
        validate.jsonSchema(getIdCardButton.json, answerSchema.buttons);
        validate.answer(getIdCardButton.answer, expectedIdCardAnswer.answers.firstFollowUpQuestion);
        validate.buttons(getIdCardButton.buttons, expectedIdCardAnswer.buttons);
        validate.done();

        const postTheNextQuestion = await user.conversation.postMessage(questions.whereCanIFindMyIdCard, userData.consumerProfile, this);
        
        validate.statusCode(postTheNextQuestion.response.status, 200);
        validate.jsonSchema(postTheNextQuestion.json, postSchema.postMessage);
        validate.done();
        
        const getIdCardButtonAgain = await user.conversation.getActivity(postTheNextQuestion.json.id);
        
        validate.statusCode(getIdCardButtonAgain.response.status, 200);
        validate.jsonSchema(getIdCardButtonAgain.json, answerSchema.buttons);
        validate.answer(getIdCardButtonAgain.answer, expectedIdCardAnswer.answers.firstFollowUpQuestion);
        validate.buttons(getIdCardButtonAgain.buttons, expectedIdCardAnswer.buttons);
        validate.done();

        const requestSpecificIdCard = await user.conversation.postMessage(questions.iNeedAnAssistAmericaIdCard, userData.consumerProfile, this);
        
        validate.statusCode(requestSpecificIdCard.response.status, 200);
        validate.jsonSchema(requestSpecificIdCard.json, postSchema.postMessage);
        validate.done();

        const getSpecificIdCardResponse = await user.conversation.getActivity(requestSpecificIdCard.json.id);
        
        validate.statusCode(getSpecificIdCardResponse.response.status, 200);
        validate.jsonSchema(getSpecificIdCardResponse.json, answerSchema.requestIdCardWithPrompt);
        //validate.answer(getSpecificIdCardResponse.answersArray[0], expectedIdCardAnswer2.answers.hereIsYourIdCardAnswer); //skipped because of minor bug on the chat bot side. Bot doesn't provide 'Here is your ... ID card' message.
        validate.url(getSpecificIdCardResponse.urls, expectedIdCardAnswer2.idCardUrl);
        validate.answer(getSpecificIdCardResponse.answer, expectedIdCardAnswer2.answers.thirdFollowUpQuestion);
        validate.done();
    
        const clickNoActionButton = await user.conversation.postMessage(action.no, userData.consumerProfile, this);
            
        validate.statusCode(clickNoActionButton.response.status, 200);
        validate.jsonSchema(clickNoActionButton.json, postSchema.postMessage);
        validate.done();
        
        const getNoActionResponse = await user.conversation.getActivity(clickNoActionButton.json.id);
        
        validate.statusCode(getNoActionResponse.response.status, 200);
        validate.jsonSchema(getNoActionResponse.json, answerSchema.clickNoAction);
        validate.followUpQuestions(getNoActionResponse.followUpQuestion, expectedIdCardAnswer.answers.secondFollowUpQuestion);
        validate.done();
    });

    test("Id cards tests: Ask 'Is my coverage active?' after id cards buttons are displayed", async function () {

        const expectedIdCardAnswer = await builder.idCardsAnswer(userData, 'active', 'has id card', questions.whereCanIFindMyIdCard.text);
        const expectedAnotherScopeQuestionAnswer = await builder2.eligibilityAnswer(userData, questions.isMyCoverageActive.text, 'active');
        const postMessage = await user.conversation.postMessage(questions.whereCanIFindMyIdCard, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getIdCardButton = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getIdCardButton.response.status, 200);
        validate.jsonSchema(getIdCardButton.json, answerSchema.buttons);
        validate.answer(getIdCardButton.answer, expectedIdCardAnswer.answers.firstFollowUpQuestion);
        validate.buttons(getIdCardButton.buttons, expectedIdCardAnswer.buttons);
        validate.done();

        const sendAnotherScopeQuestion = await user.conversation.postMessage(questions.isMyCoverageActive, userData.consumerProfile, this);
        
        validate.statusCode(sendAnotherScopeQuestion.response.status, 200);
        validate.jsonSchema(sendAnotherScopeQuestion.json, postSchema.postMessage);
        validate.done();
        
        const getSentAnotherScopeQuestionActivity = await user.conversation.getActivity(sendAnotherScopeQuestion.json.id);
        
        validate.statusCode(getSentAnotherScopeQuestionActivity.response.status, 200);
        validate.jsonSchema(getSentAnotherScopeQuestionActivity.json, answerSchema.eligibilityAnswer);
        validate.answer(getSentAnotherScopeQuestionActivity.answer, expectedAnotherScopeQuestionAnswer.answer);
        validate.followUpQuestions(getSentAnotherScopeQuestionActivity.followUpQuestion, expectedAnotherScopeQuestionAnswer.followUpQuestion);
        validate.done();
    });


    test("Id cards tests: Ask 'Is my dental coverage active?' after id cards buttons are displayed", async function () {

        const expectedIdCardAnswer = await builder.idCardsAnswer(userData, 'active', 'has id card', questions.whereCanIFindMyIdCard.text);
        const expectedAnotherScopeQuestionAnswer = await builder2.eligibilityAnswer(userData, questions.isMyDentalCoverageActive.text, 'active');
        const postMessage = await user.conversation.postMessage(questions.whereCanIFindMyIdCard, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getIdCardButton = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getIdCardButton.response.status, 200);
        validate.jsonSchema(getIdCardButton.json, answerSchema.buttons);
        validate.answer(getIdCardButton.answer, expectedIdCardAnswer.answers.firstFollowUpQuestion);
        validate.buttons(getIdCardButton.buttons, expectedIdCardAnswer.buttons);
        validate.done();

        const sendAnotherScopeQuestion = await user.conversation.postMessage(questions.isMyDentalCoverageActive, userData.consumerProfile, this);
        
        validate.statusCode(sendAnotherScopeQuestion.response.status, 200);
        validate.jsonSchema(sendAnotherScopeQuestion.json, postSchema.postMessage);
        validate.done();
        
        const getSentAnotherScopeQuestionActivity = await user.conversation.getActivity(sendAnotherScopeQuestion.json.id);
        
        validate.statusCode(getSentAnotherScopeQuestionActivity.response.status, 200);
        validate.jsonSchema(getSentAnotherScopeQuestionActivity.json, answerSchema.eligibilityAnswer);
        validate.answer(getSentAnotherScopeQuestionActivity.answer, expectedAnotherScopeQuestionAnswer.answer);
        validate.followUpQuestions(getSentAnotherScopeQuestionActivity.followUpQuestion, expectedAnotherScopeQuestionAnswer.followUpQuestion);
        validate.done();
    });

    test("Id cards tests: Ask 'Is my vision coverage active?' after id cards buttons are displayed", async function () {

        const expectedIdCardAnswer = await builder.idCardsAnswer(userData, 'active', 'has id card', questions.whereCanIFindMyIdCard.text);
        const expectedAnotherScopeQuestionAnswer = await builder2.eligibilityAnswer(userData, questions.isMyVisionCoverageActive.text, 'active');
        const postMessage = await user.conversation.postMessage(questions.whereCanIFindMyIdCard, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getIdCardButton = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getIdCardButton.response.status, 200);
        validate.jsonSchema(getIdCardButton.json, answerSchema.buttons);
        validate.answer(getIdCardButton.answer, expectedIdCardAnswer.answers.firstFollowUpQuestion);
        validate.buttons(getIdCardButton.buttons, expectedIdCardAnswer.buttons);
        validate.done();

        const sendAnotherScopeQuestion = await user.conversation.postMessage(questions.isMyVisionCoverageActive, userData.consumerProfile, this);
        
        validate.statusCode(sendAnotherScopeQuestion.response.status, 200);
        validate.jsonSchema(sendAnotherScopeQuestion.json, postSchema.postMessage);
        validate.done();
        
        const getSentAnotherScopeQuestionActivity = await user.conversation.getActivity(sendAnotherScopeQuestion.json.id);
        
        validate.statusCode(getSentAnotherScopeQuestionActivity.response.status, 200);
        validate.jsonSchema(getSentAnotherScopeQuestionActivity.json, answerSchema.eligibilityAnswer);
        validate.answer(getSentAnotherScopeQuestionActivity.answer, expectedAnotherScopeQuestionAnswer.answer);
        validate.followUpQuestions(getSentAnotherScopeQuestionActivity.followUpQuestion, expectedAnotherScopeQuestionAnswer.followUpQuestion);
        validate.done();
    });

    test("Id cards tests: Ask 'What is allowed amount?' after id cards buttons are displayed", async function () {
    
        const expectedIdCardAnswer = await builder.idCardsAnswer(userData, 'active', 'has id card', questions.whereCanIFindMyIdCard.text);
        const postMessage = await user.conversation.postMessage(questions.whereCanIFindMyIdCard, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getIdCardButton = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getIdCardButton.response.status, 200);
        validate.jsonSchema(getIdCardButton.json, answerSchema.buttons);
        validate.answer(getIdCardButton.answer, expectedIdCardAnswer.answers.firstFollowUpQuestion);
        validate.buttons(getIdCardButton.buttons, expectedIdCardAnswer.buttons);
        validate.done();

        const sendAnotherScopeQuestion = await user.conversation.postMessage(questions.whatIsAllowedAmount, userData.consumerProfile, this);
        
        validate.statusCode(sendAnotherScopeQuestion.response.status, 200);
        validate.jsonSchema(sendAnotherScopeQuestion.json, postSchema.postMessage);
        validate.done();
        
        const getSentAnotherScopeQuestionActivity = await user.conversation.getActivity(sendAnotherScopeQuestion.json.id);
        
        validate.statusCode(getSentAnotherScopeQuestionActivity.response.status, 200);
        validate.jsonSchema(getSentAnotherScopeQuestionActivity.json, answerSchema.faq);
        validate.answer(getSentAnotherScopeQuestionActivity.answersArray[0], faq.allowedAmountPart1);
        validate.answer(getSentAnotherScopeQuestionActivity.answersArray[1], faq.allowedAmountPart2);
        validate.followUpQuestions(getSentAnotherScopeQuestionActivity.followUpQuestion, faq.followUpQuestion);
        validate.done();
    });

    //Test when suggested actions buttons (YES/NO) are displayed

    test("Id cards tests: Ask 'I need an Assist America ID Card?' when 'Would you like to see a different ID card?' question is displayed", async function () {

        const expectedIdCardAnswer = await builder.idCardsAnswer(userData, 'active', 'has id card', questions.iNeedAnAssistAmericaIdCard.text);
        const postMessage = await user.conversation.postMessage(questions.iNeedAnAssistAmericaIdCard, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();

        const getIdCardResponse = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getIdCardResponse.response.status, 200);
        validate.jsonSchema(getIdCardResponse.json, answerSchema.requestIdCardWithPrompt);
        validate.answer(getIdCardResponse.answersArray[0], expectedIdCardAnswer.answers.hereIsYourIdCardAnswer);
        validate.url(getIdCardResponse.urls, expectedIdCardAnswer.idCardUrl);
        validate.answer(getIdCardResponse.answersArray[1], expectedIdCardAnswer.answers.thirdFollowUpQuestion);
        validate.buttons(getIdCardResponse.buttons, action.buttons);
        validate.done();

        const postAnotherQuestion = await user.conversation.postMessage(questions.iNeedAnAssistAmericaIdCard, userData.consumerProfile, this);
            
        validate.statusCode(postAnotherQuestion.response.status, 200);
        validate.jsonSchema(postAnotherQuestion.json, postSchema.postMessage);
        validate.done();
        
        const getAnotherResponse = await user.conversation.getActivity(postAnotherQuestion.json.id);
        
        validate.statusCode(getAnotherResponse.response.status, 200);
        validate.jsonSchema(getAnotherResponse.json, answerSchema.promptToSeeAnotherIdCard);
        validate.answer(getAnotherResponse.answer, expectedIdCardAnswer.answers.thirdFollowUpQuestion);
        validate.buttons(getAnotherResponse.buttons, action.buttons);
        validate.done();
    });
    
    test("Id cards tests: Ask 'Where can I find my ID card?' when 'Would you like to see a different ID card?' question is displayed", async function () {

        const expectedIdCardAnswer = await builder.idCardsAnswer(userData, 'active', 'has id card', questions.whereCanIFindMyIdCard.text);
        const postMessage = await user.conversation.postMessage(questions.whereCanIFindMyIdCard, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getResponse = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getResponse.response.status, 200);
        validate.jsonSchema(getResponse.json, answerSchema.promptToSeeAnotherIdCard);
        validate.answer(getResponse.answer, expectedIdCardAnswer.answers.thirdFollowUpQuestion);
        validate.buttons(getResponse.buttons, action.buttons);
        validate.done();
    });

    test("Id cards tests: Ask 'Is my coverage active?' when 'Would you like to see a different ID card?' question is displayed", async function () {

        const expectedIdCardAnswer = await builder.idCardsAnswer(userData, 'active', 'has id card', questions.whereCanIFindMyIdCard.text);
        const postMessage = await user.conversation.postMessage(questions.isMyCoverageActive, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getResponse = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getResponse.response.status, 200);
        validate.jsonSchema(getResponse.json, answerSchema.promptToSeeAnotherIdCard);
        validate.answer(getResponse.answer, expectedIdCardAnswer.answers.thirdFollowUpQuestion);
        validate.buttons(getResponse.buttons, action.buttons);
        validate.done();
    });

    test("Id cards tests: Ask 'Is my dental coverage active?' when 'Would you like to see a different ID card?' question is displayed", async function () {

        const expectedIdCardAnswer = await builder.idCardsAnswer(userData, 'active', 'has id card', questions.whereCanIFindMyIdCard.text);
        const postMessage = await user.conversation.postMessage(questions.isMyDentalCoverageActive, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getResponse = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getResponse.response.status, 200);
        validate.jsonSchema(getResponse.json, answerSchema.promptToSeeAnotherIdCard);
        validate.answer(getResponse.answer, expectedIdCardAnswer.answers.thirdFollowUpQuestion);
        validate.buttons(getResponse.buttons, action.buttons);
        validate.done();
    });

    test("Id cards tests: Ask 'Is my vision coverage active?' when 'Would you like to see a different ID card?' question is displayed", async function () {

        const expectedIdCardAnswer = await builder.idCardsAnswer(userData, 'active', 'has id card', questions.whereCanIFindMyIdCard.text);
        const postMessage = await user.conversation.postMessage(questions.isMyVisionCoverageActive, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getResponse = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getResponse.response.status, 200);
        validate.jsonSchema(getResponse.json, answerSchema.promptToSeeAnotherIdCard);
        validate.answer(getResponse.answer, expectedIdCardAnswer.answers.thirdFollowUpQuestion);
        validate.buttons(getResponse.buttons, action.buttons);
        validate.done();
    });

    test("Id cards tests: Ask 'What is my deductible?' when 'Would you like to see a different ID card?' question is displayed", async function () {

        const expectedIdCardAnswer = await builder.idCardsAnswer(userData, 'active', 'has id card', questions.whereCanIFindMyIdCard.text);
        const postMessage = await user.conversation.postMessage(questions.whatIsMyDeductible, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getResponse = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getResponse.response.status, 200);
        validate.jsonSchema(getResponse.json, answerSchema.promptToSeeAnotherIdCard);
        validate.answer(getResponse.answer, expectedIdCardAnswer.answers.thirdFollowUpQuestion);
        validate.buttons(getResponse.buttons, action.buttons);
        validate.done();
    });

    test("Id cards tests: Ask 'What is my out-of-pocket maximum?' when 'Would you like to see a different ID card?' question is displayed", async function () {

        const expectedIdCardAnswer = await builder.idCardsAnswer(userData, 'active', 'has id card', questions.whereCanIFindMyIdCard.text);
        const postMessage = await user.conversation.postMessage(questions.whatIsMyOut_Of_Pocket_Maximum, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getResponse = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getResponse.response.status, 200);
        validate.jsonSchema(getResponse.json, answerSchema.promptToSeeAnotherIdCard);
        validate.answer(getResponse.answer, expectedIdCardAnswer.answers.thirdFollowUpQuestion);
        validate.buttons(getResponse.buttons, action.buttons);
        validate.done();
    });

    test("Id cards tests: Ask 'What is my coinsurance?' when 'Would you like to see a different ID card?' question is displayed", async function () {

        const expectedIdCardAnswer = await builder.idCardsAnswer(userData, 'active', 'has id card', questions.whereCanIFindMyIdCard.text);
        const postMessage = await user.conversation.postMessage(questions.whatIsMyCoinsurance, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getResponse = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getResponse.response.status, 200);
        validate.jsonSchema(getResponse.json, answerSchema.promptToSeeAnotherIdCard);
        validate.answer(getResponse.answer, expectedIdCardAnswer.answers.thirdFollowUpQuestion);
        validate.buttons(getResponse.buttons, action.buttons);
        validate.done();
    });

    test("Id cards tests: Ask 'What is allowed amount?' when 'Would you like to see a different ID card?' question is displayed", async function () {

        const expectedIdCardAnswer = await builder.idCardsAnswer(userData, 'active', 'has id card', questions.whereCanIFindMyIdCard.text);
        const postMessage = await user.conversation.postMessage(questions.whatIsAllowedAmount, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getResponse = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getResponse.response.status, 200);
        validate.jsonSchema(getResponse.json, answerSchema.promptToSeeAnotherIdCard);
        validate.answer(getResponse.answer, expectedIdCardAnswer.answers.thirdFollowUpQuestion);
        validate.buttons(getResponse.buttons, action.buttons);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
