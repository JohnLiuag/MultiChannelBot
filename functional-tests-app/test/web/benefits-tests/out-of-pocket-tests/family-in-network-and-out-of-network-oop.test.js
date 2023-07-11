import { user } from '../../../../services/user.service.js';
import { validate } from '../../../../services/validator.service.js';
import { environmentVariables } from '../../../../env.variables.js';
import { collector } from '../../../../services/data-collector-service.js';
import { builder } from '../../../../services/answer-builders/benefits.builder.js';
import { randomizer } from '../../../../services/question-randomizer.service.js'
import * as action from '../../../../test-data/prompts/yes-no-actions.test-data.js';
import * as questions from '../../../../test-data/questions/benefits-questions.test-data.js';
import * as postSchema from '../../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../../test-data/schemas/benefits.schemas.js';


let userData;
let userId; 
const oopRandomQuestion = randomizer.getRandomQuestion(questions.outOfPocketQuestionsArray);

suite('Out-Of-Pocket Tests: Family In-network and Out-of-network', function () {
    
    suiteSetup(async function () {
        userId = environmentVariables.user.tstmem7;
        userData = await collector.getData(userId, ['benefits']);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(oopRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.benefitsAnswer(userData, 'outOfPocket', 'active');
        const postMessage = await user.conversation.postMessage(oopRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.firstLevelAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answers.firstLevelAnswer);
        validate.answer(getAnswer.followUpQuestion[0], expectedAnswer.answers.secondLevelQuestion);
        validate.buttons(getAnswer.buttons, expectedAnswer.buttons);
        validate.done();

        const clickYesButton = await user.conversation.postMessage(action.yes, userData.consumerProfile, this);
        
        validate.statusCode(clickYesButton.response.status, 200);
        validate.jsonSchema(clickYesButton.json, postSchema.postMessage);
        validate.done();

        const getSecondAnswer = await user.conversation.getActivity(clickYesButton.json.id);
        
        validate.statusCode(getSecondAnswer.response.status, 200);
        validate.jsonSchema(getSecondAnswer.json, answerSchema.answer);
        validate.answer(getSecondAnswer.answer, expectedAnswer.answers.secondLevelAnswer);
        validate.followUpQuestions(getSecondAnswer.followUpQuestion, expectedAnswer.answers.followUpQuestion);
        validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
