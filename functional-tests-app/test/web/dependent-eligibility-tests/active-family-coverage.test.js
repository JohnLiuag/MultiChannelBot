import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/dependent-eligibility.builder.js';
import { randomizer } from '../../../services/question-randomizer.service.js';
import * as questions from '../../../test-data/questions/dependent-eligibility-questions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/depending-eligibility.schemas.js';


let userData;
let userId; 
const generalDependentEligibilityRandomQuestion = randomizer.getRandomQuestion(questions.generalDependentEligibilityQuestionsArray);
const dentalDependentEligibilityRandomQuestion = randomizer.getRandomQuestion(questions.dentalDependentEligibilityQuestionsArray);
const visionDependentEligibilityRandomQuestion = randomizer.getRandomQuestion(questions.visionDependentEligibilityQuestionsArray);

suite('Dependent Eligibility Tests: Active family coverage', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatjill;
        userData = await collector.getData(userId, ['dependentEligibility']);
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(generalDependentEligibilityRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.dependentEligibilityAnswer(userData, generalDependentEligibilityRandomQuestion.text, 'active', 'family');
        const postMessage = await user.conversation.postMessage(generalDependentEligibilityRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.dependingEligibilityAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(dentalDependentEligibilityRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.dependentEligibilityAnswer(userData, dentalDependentEligibilityRandomQuestion.text, 'active', 'family');
        const postMessage = await user.conversation.postMessage(dentalDependentEligibilityRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.dependingEligibilityAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    test(visionDependentEligibilityRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.dependentEligibilityAnswer(userData, visionDependentEligibilityRandomQuestion.text, 'active', 'family');
        const postMessage = await user.conversation.postMessage(visionDependentEligibilityRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.dependingEligibilityAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
        validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
