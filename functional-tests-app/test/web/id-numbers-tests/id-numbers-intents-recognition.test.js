import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/id-numbers.builder.js';
import * as questions from '../../../test-data/questions/id-numbers-questions.test-data.js';
import * as action from '../../../test-data/prompts/id-cards-actions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/id-number.schemas.js';


let userData;
let userId; 

suite('ID Numbers Tests: intents recognition', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatphyl;
        userData = await collector.getData(userId, ['idCards']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    questions.generalIdNumbersQuestionsArray.forEach((question) => {
        test(question.text, async function () {
            
            const expectedAnswer = await builder.idNumbersAnswer(userData, question.text, 'active', 'medicaid/chc');
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.idNumberAnswer);
            validate.answer(getAnswer.answer, expectedAnswer.answer);
            validate.buttons(getAnswer.buttons, action.buttons);
            validate.done();

            const clickNoActionButton = await user.conversation.postMessage(action.no, userData.consumerProfile, this);
            
            validate.statusCode(clickNoActionButton.response.status, 200);
            validate.jsonSchema(clickNoActionButton.json, postSchema.postMessage);
            validate.done();
            
            const getNoActionReponse = await user.conversation.getActivity(clickNoActionButton.json.id);

            validate.statusCode(getNoActionReponse.response.status, 200);
            validate.jsonSchema(getNoActionReponse.json, answerSchema.clickNoActionButton);
            validate.answer(getNoActionReponse.followUpQuestion[0], expectedAnswer.followUpQuestion[0]);
            validate.answer(getNoActionReponse.followUpQuestion[1], expectedAnswer.followUpQuestion[1]);
            validate.done();
        });
    });

    questions.visionIdNumbersQuestionsArray.forEach((question) => {
        test(question.text, async function () {
            
            const expectedAnswer = await builder.idNumbersAnswer(userData, question.text, 'active', 'medicaid/chc');
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.idNumberAnswer);
            validate.answer(getAnswer.answer, expectedAnswer.answer);
            validate.buttons(getAnswer.buttons, action.buttons);
            validate.done();

            const clickNoActionButton = await user.conversation.postMessage(action.no, userData.consumerProfile, this);
            
            validate.statusCode(clickNoActionButton.response.status, 200);
            validate.jsonSchema(clickNoActionButton.json, postSchema.postMessage);
            validate.done();
            
            const getNoActionReponse = await user.conversation.getActivity(clickNoActionButton.json.id);

            validate.statusCode(getNoActionReponse.response.status, 200);
            validate.jsonSchema(getNoActionReponse.json, answerSchema.clickNoActionButton);
            validate.answer(getNoActionReponse.followUpQuestion[0], expectedAnswer.followUpQuestion[0]);
            validate.answer(getNoActionReponse.followUpQuestion[1], expectedAnswer.followUpQuestion[1]);
            validate.done();
        });
    });

    questions.dentalIdNumbersQuestionsArray.forEach((question) => {
        test(question.text, async function () {
            
            const expectedAnswer = await builder.idNumbersAnswer(userData, question.text, 'active', 'medicaid/chc');
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.idNumberAnswer);
            validate.answer(getAnswer.answer, expectedAnswer.answer);
            validate.buttons(getAnswer.buttons, action.buttons);
            validate.done();

            const clickNoActionButton = await user.conversation.postMessage(action.no, userData.consumerProfile, this);
            
            validate.statusCode(clickNoActionButton.response.status, 200);
            validate.jsonSchema(clickNoActionButton.json, postSchema.postMessage);
            validate.done();
            
            const getNoActionReponse = await user.conversation.getActivity(clickNoActionButton.json.id);

            validate.statusCode(getNoActionReponse.response.status, 200);
            validate.jsonSchema(getNoActionReponse.json, answerSchema.clickNoActionButton);
            validate.answer(getNoActionReponse.followUpQuestion[0], expectedAnswer.followUpQuestion[0]);
            validate.answer(getNoActionReponse.followUpQuestion[1], expectedAnswer.followUpQuestion[1]);
            validate.done();
        });
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
