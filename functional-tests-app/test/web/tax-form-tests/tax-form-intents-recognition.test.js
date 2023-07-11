import { user } from '../../../services/user.service.js';
import { validate } from '../../../services/validator.service.js';
import { environmentVariables } from '../../../env.variables.js';
import { collector } from '../../../services/data-collector-service.js';
import { builder } from '../../../services/answer-builders/tax-form.builder.js';
import * as questions from '../../../test-data/questions/tax-form-questions.test-data.js';
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/tax-form.schemas.js';


let userData;
let userId; 

suite('TAX Form Tests: intents recognition', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.scolega;
        userData = await collector.getData(userId, ['eligibility', 'taxForm']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    questions.taxFormQuestionsArray.forEach((question) => {
        test(question.text, async function () {
            
            const expectedAnswer = await builder.taxFormAnswer(userData, 'holder-1095B');
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.taxFormAnswerWithLink);
            validate.answer(getAnswer.answer, expectedAnswer.answer);
            validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
            validate.done();
            
            if (getAnswer.urls.length > 0) {
                const openTaxForm = await user.conversation.getFile(getAnswer.urls);
            
                validate.answer(openTaxForm, expectedAnswer.fileData);
                validate.done();
            }
            
        });
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
