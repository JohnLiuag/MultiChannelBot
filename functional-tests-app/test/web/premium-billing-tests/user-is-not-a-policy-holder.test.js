import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/premium-billing.builder.js';
import { randomizer } from '../../../services/question-randomizer.service.js';
import * as questions from '../../../test-data/questions/premium-billing-questions.test-data.js';
import * as action from '../../../test-data/prompts/premium-billing-actions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/premium-billings.schemas.js';


let userData;
let userId; 
const premiumBillingRandomQuestion = randomizer.getRandomQuestion(questions.premiumBillingQuestionsArray);
const generalPremiumBillingRandomQuestion = randomizer.getRandomQuestion(questions.generalPremiumBillingQuestionsArray);
const medicalPremiumBillingRandomQuestion = randomizer.getRandomQuestion(questions.medicalBillingQuestionsArray);
const premiumBillingAutopayRandomQuestion = randomizer.getRandomQuestion(questions.premiumBillingAutopayQuestionsArray);

suite('Premiums Tests: user is not a policy holder', function () {
    
    suiteSetup(async function () {
        userId = environmentVariables.user.blackmi123;
        userData = await collector.getData(userId, ['invoices']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });
    
    test(premiumBillingRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.premiumBillingAnswer(userData, 'not policy holder');
        const postMessage = await user.conversation.postMessage(premiumBillingRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.premiumBillingAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answers.answer[0]);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(generalPremiumBillingRandomQuestion.text, async function () {
    
        const expectedAnswer = await builder.premiumBillingAnswer(userData, 'upmc facility');
        const postMessage = await user.conversation.postMessage(generalPremiumBillingRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getMedicalPrompts = await user.conversation.getActivity(postMessage.json.id);

        validate.statusCode(getMedicalPrompts.response.status, 200);
        validate.jsonSchema(getMedicalPrompts.json, answerSchema.premiumBillingAnswerWithPrompts);
        validate.answer(getMedicalPrompts.answer, expectedAnswer.answers.medicalQuestion);
        validate.buttons(getMedicalPrompts.buttons, expectedAnswer.buttons.medicalPrompts);

        const clickUpmcFacility = await user.conversation.postMessage(action.upmcFacility, userData.consumerProfile, this);
        
        validate.statusCode(clickUpmcFacility.response.status, 200);
        validate.jsonSchema(clickUpmcFacility.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(clickUpmcFacility.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.premiumBillingAnswer);
        validate.answer(getAnswer.answersArray[0], expectedAnswer.answers.answer[0]);
        validate.answer(getAnswer.answersArray[1], expectedAnswer.answers.answer[1]);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(generalPremiumBillingRandomQuestion.text, async function () {
    
        const expectedAnswer = await builder.premiumBillingAnswer(userData, 'other facility');
        const postMessage = await user.conversation.postMessage(generalPremiumBillingRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getMedicalPrompts = await user.conversation.getActivity(postMessage.json.id);

        validate.statusCode(getMedicalPrompts.response.status, 200);
        validate.jsonSchema(getMedicalPrompts.json, answerSchema.premiumBillingAnswerWithPrompts);
        validate.answer(getMedicalPrompts.answer, expectedAnswer.answers.medicalQuestion);
        validate.buttons(getMedicalPrompts.buttons, expectedAnswer.buttons.medicalPrompts);

        const clickUpmcFacility = await user.conversation.postMessage(action.otherFacility, userData.consumerProfile, this);
        
        validate.statusCode(clickUpmcFacility.response.status, 200);
        validate.jsonSchema(clickUpmcFacility.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(clickUpmcFacility.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.premiumBillingAnswer);
        validate.answer(getAnswer.answersArray[0], expectedAnswer.answers.answer[0]);
        validate.answer(getAnswer.answersArray[1], expectedAnswer.answers.answer[1]);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(medicalPremiumBillingRandomQuestion.text, async function () {
    
        const expectedAnswer = await builder.premiumBillingAnswer(userData, 'upmc facility');
        const postMessage = await user.conversation.postMessage(medicalPremiumBillingRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getMedicalPrompts = await user.conversation.getActivity(postMessage.json.id);

        validate.statusCode(getMedicalPrompts.response.status, 200);
        validate.jsonSchema(getMedicalPrompts.json, answerSchema.premiumBillingAnswerWithPrompts);
        validate.answer(getMedicalPrompts.answer, expectedAnswer.answers.medicalQuestion);
        validate.buttons(getMedicalPrompts.buttons, expectedAnswer.buttons.medicalPrompts);

        const clickUpmcFacility = await user.conversation.postMessage(action.upmcFacility, userData.consumerProfile, this);
        
        validate.statusCode(clickUpmcFacility.response.status, 200);
        validate.jsonSchema(clickUpmcFacility.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(clickUpmcFacility.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.premiumBillingAnswer);
        validate.answer(getAnswer.answersArray[0], expectedAnswer.answers.answer[0]);
        validate.answer(getAnswer.answersArray[1], expectedAnswer.answers.answer[1]);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(medicalPremiumBillingRandomQuestion.text, async function () {
    
        const expectedAnswer = await builder.premiumBillingAnswer(userData, 'other facility');
        const postMessage = await user.conversation.postMessage(medicalPremiumBillingRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getMedicalPrompts = await user.conversation.getActivity(postMessage.json.id);

        validate.statusCode(getMedicalPrompts.response.status, 200);
        validate.jsonSchema(getMedicalPrompts.json, answerSchema.premiumBillingAnswerWithPrompts);
        validate.answer(getMedicalPrompts.answer, expectedAnswer.answers.medicalQuestion);
        validate.buttons(getMedicalPrompts.buttons, expectedAnswer.buttons.medicalPrompts);

        const clickOtherFacility = await user.conversation.postMessage(action.otherFacility, userData.consumerProfile, this);
        
        validate.statusCode(clickOtherFacility.response.status, 200);
        validate.jsonSchema(clickOtherFacility.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(clickOtherFacility.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.premiumBillingAnswer);
        validate.answer(getAnswer.answersArray[0], expectedAnswer.answers.answer[0]);
        validate.answer(getAnswer.answersArray[1], expectedAnswer.answers.answer[1]);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(premiumBillingAutopayRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.premiumBillingAnswer(userData, 'not policy holder');
        const postMessage = await user.conversation.postMessage(premiumBillingAutopayRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.premiumBillingAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answers.answer[0]);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
