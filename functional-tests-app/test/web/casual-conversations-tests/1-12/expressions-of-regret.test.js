import { user } from '../../../../services/user.service.js';
import { validate } from '../../../../services/validator.service.js';
import { environmentVariables } from '../../../../env.variables.js';
import { collector } from '../../../../services/data-collector-service.js';
import { builder } from '../../../../services/answer-builders/casual-conversations.builder.js';
import { randomizer } from '../../../../services/question-randomizer.service.js'
import * as questions from '../../../../test-data/questions/casual-conversations-questions.test-data.js';
import * as postSchema from '../../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../../test-data/schemas/casual-conversations.schemas.js';


let userData;
let userId; 
const casualConversationsRandomQuestion = randomizer.getRandomQuestion(questions.expressionsOfRegretQuestionsArray);

suite('Casual conversation: Expressions of regret', function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.delucat2;
        userData = await collector.getData(userId);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });

    test(casualConversationsRandomQuestion.text, async function () {
        
        const expectedAnswer = await builder.casualConversationsAnswer('expressions of regret');
        const postMessage = await user.conversation.postMessage(casualConversationsRandomQuestion, userData.consumerProfile, this);
        
        validate.statusCode(postMessage.response.status, 200);
        validate.jsonSchema(postMessage.json, postSchema.postMessage);
        validate.done();
        
        const getAnswer = await user.conversation.getActivity(postMessage.json.id);
        
        validate.statusCode(getAnswer.response.status, 200);
        validate.jsonSchema(getAnswer.json, answerSchema.casualConversationsAnswer);
        validate.answer(getAnswer.answer, expectedAnswer.answer);
            validate.followUpQuestions(getAnswer.followUpQuestion, expectedAnswer.followUpQuestion);
            validate.done();
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
