import { user } from "../../../services/user.service.js";
import { validate } from "../../../services/validator.service.js";
import { environmentVariables } from "../../../env.variables.js"
import { collector } from '../../../services/data-collector-service.js';
import * as questions from "../../../test-data/questions/faq-questions.test-data.js";
import * as answer from "../../../test-data/answers/faq-answers.test-data.js";
import * as postSchema from '../../../test-data/schemas/post-message.schemas.js';
import * as answerSchema from '../../../test-data/schemas/faq.schemas.js';


let userData;
let userId; 

suite("FAQ Tests: intents recognition" , function () {

    suiteSetup(async function () {
        userId = environmentVariables.user.chatsasha;
        userData = await collector.getData(userId, []);      
        await user.startChat(userData.userToken, userData.consumerProfile, 'web', this);
    });
    
// 1-10
    questions.allowedAmountQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answersArray[0], answer.allowedAmountPart1);
            validate.answer(getAnswer.answersArray[1], answer.allowedAmountPart2);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.appealQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.appeal);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.balanceBillQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.balanceBilling);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });
    
    questions.benefitPeriodQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.benefitPeriod);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.brandNameDrugQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.brandNameDrug);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.brokerQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.broker);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.cocQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.brokerCertificateOfCoverage);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.claimQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.claim);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.cobraQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answersArray[0], answer.cobraPart1);
            validate.answer(getAnswer.answersArray[1], answer.cobraPart2);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.coinsuranceQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.coinsurance);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });
//FAQ 11-20
    questions.cdhpQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.consumerDirectedHealthPlan);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.copaymentQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.copayment);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.coveredServiceQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.coveredService);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.deductibleQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.deductible);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.dependentQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answersArray[0], answer.dependentPart1);
            validate.answer(getAnswer.answersArray[1], answer.dependentPart2);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.drugListQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answersArray[0], answer.drugListPart1);
            validate.answer(getAnswer.answersArray[1], answer.drugListPart2);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.dmeQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.durableMedicalEquipment);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.effectiveDateQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.effectiveDate);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.emergencyMedicalConditionQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.emergencyMedicalCondition);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.eapQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.employeeAssistanceProgram);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });
// 21-30
    questions.eahmoQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.enchancedAccessHealthMaintanceOrganization);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.excludedServiceQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.excludedService);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.epoQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.exclusiveProviderOrganization);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.eobQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.explanationOfBenefits);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });
    
    questions.fsaQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answersArray[0], answer.flexibleSpendingAccountPart1);
            validate.answer(getAnswer.answersArray[1], answer.flexibleSpendingAccountPart2);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.formularyQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.formulary);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.genericMedicationQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answersArray[0], answer.genericMedicationPart1);
            validate.answer(getAnswer.answersArray[1], answer.genericMedicationPart2);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });
   
    questions.grievenceQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.grievence);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.hmoQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.healthMaintenanceOrganization);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });
    
    questions.hraQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.healthReimbursementAccount);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });
//FAQ 31-40
    questions.hsaQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            
            validate.answer(getAnswer.answersArray[0], answer.healthSavingsAccountPart1);
            validate.answer(getAnswer.answersArray[1], answer.healthSavingsAccountPart2);
            validate.answer(getAnswer.answersArray[2], answer.healthSavingsAccountPart3);
            validate.answer(getAnswer.answersArray[3], answer.healthSavingsAccountPart4);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.hipaaQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answersArray[0], answer.hipaaPart1);
            validate.answer(getAnswer.answersArray[1], answer.hipaaPart2);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.homeHealthCareQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.homeHealthCare);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.hospiceServicesQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.hospiceServices);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.hospitalizationQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.hospitalization);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.idCardQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.idCard);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.individualPolicyQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.individualPolicy);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.inNetworkQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.inNetwork);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.medicalAssistanceQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.medicalAssistance);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.medicalNecessaryQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.medicalNecessary);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });
//FAQ 41-50

    questions.medicareQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.medicare);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.medicareAdvantageQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answersArray[0], answer.medicareAdvantagePart1);
            validate.answer(getAnswer.answersArray[1], answer.medicareAdvantagePart2);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.partAQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.medicarePartA);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.partBQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.medicarePartB);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.partCQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answersArray[0], answer.medicarePartCPart1);
            validate.answer(getAnswer.answersArray[1], answer.medicarePartCPart2);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.partDQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.medicarePartD);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.ncqaQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.nationalCommitteeForQualityAssrance);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.networkQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.network);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.nonParticipatingProviderQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.nonParticipatingProvider);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });

    questions.enrollmentQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
            
            validate.statusCode(postMessage.response.status, 200);
            validate.jsonSchema(postMessage.json, postSchema.postMessage);
            validate.done();
            
            const getAnswer = await user.conversation.getActivity(postMessage.json.id);
            
            validate.statusCode(getAnswer.response.status, 200);
            validate.jsonSchema(getAnswer.json, answerSchema.faq);
            validate.answer(getAnswer.answer, answer.openEnrollment);
            validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
            validate.done();
        });
    });
//FAQ 51-60
    questions.oopQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
                
                validate.statusCode(postMessage.response.status, 200);
                validate.jsonSchema(postMessage.json, postSchema.postMessage);
                validate.done();
                
                const getAnswer = await user.conversation.getActivity(postMessage.json.id);
                
                validate.statusCode(getAnswer.response.status, 200);
                validate.jsonSchema(getAnswer.json, answerSchema.faq);
                validate.answer(getAnswer.answer, answer.outOfPocket);
                validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
                validate.done();
        });
    });

    questions.oopLimitQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
                
                validate.statusCode(postMessage.response.status, 200);
                validate.jsonSchema(postMessage.json, postSchema.postMessage);
                validate.done();
                
                const getAnswer = await user.conversation.getActivity(postMessage.json.id);
                
                validate.statusCode(getAnswer.response.status, 200);
                validate.jsonSchema(getAnswer.json, answerSchema.faq);
                validate.answer(getAnswer.answer, answer.outOfPocketLimit);
                validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
                validate.done();
        });
    });

    questions.otcMedicationQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
                
                validate.statusCode(postMessage.response.status, 200);
                validate.jsonSchema(postMessage.json, postSchema.postMessage);
                validate.done();
                
                const getAnswer = await user.conversation.getActivity(postMessage.json.id);
                
                validate.statusCode(getAnswer.response.status, 200);
                validate.jsonSchema(getAnswer.json, answerSchema.faq);
                validate.answer(getAnswer.answer, answer.overTheCounterMedication);
                validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
                validate.done();
        });
    });

    questions.participatingProviderQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
                
                validate.statusCode(postMessage.response.status, 200);
                validate.jsonSchema(postMessage.json, postSchema.postMessage);
                validate.done();
                
                const getAnswer = await user.conversation.getActivity(postMessage.json.id);
                
                validate.statusCode(getAnswer.response.status, 200);
                validate.jsonSchema(getAnswer.json, answerSchema.faq);
                validate.answer(getAnswer.answer, answer.participatingProvider);
                validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
                validate.done();
        });
    });

    questions.pAndTCommitteeQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
                
                validate.statusCode(postMessage.response.status, 200);
                validate.jsonSchema(postMessage.json, postSchema.postMessage);
                validate.done();
                
                const getAnswer = await user.conversation.getActivity(postMessage.json.id);
                
                validate.statusCode(getAnswer.response.status, 200);
                validate.jsonSchema(getAnswer.json, answerSchema.faq);
                validate.answer(getAnswer.answer, answer.pharmacyAndTherapeuticsCommittee);
                validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
                validate.done();
        });
    });

    questions.pointOfServiceQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
                
                validate.statusCode(postMessage.response.status, 200);
                validate.jsonSchema(postMessage.json, postSchema.postMessage);
                validate.done();
                
                const getAnswer = await user.conversation.getActivity(postMessage.json.id);
                
                validate.statusCode(getAnswer.response.status, 200);
                validate.jsonSchema(getAnswer.json, answerSchema.faq);
                validate.answer(getAnswer.answer, answer.pointOfService);
                validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
                validate.done();
        });
    });

    questions.ppoQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
                
                validate.statusCode(postMessage.response.status, 200);
                validate.jsonSchema(postMessage.json, postSchema.postMessage);
                validate.done();
                
                const getAnswer = await user.conversation.getActivity(postMessage.json.id);
                
                validate.statusCode(getAnswer.response.status, 200);
                validate.jsonSchema(getAnswer.json, answerSchema.faq);
                validate.answer(getAnswer.answer, answer.prefferedProviderOrganization);
                validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
                validate.done();
        });
    });

    questions.premiumQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
                
                validate.statusCode(postMessage.response.status, 200);
                validate.jsonSchema(postMessage.json, postSchema.postMessage);
                validate.done();
                
                const getAnswer = await user.conversation.getActivity(postMessage.json.id);
                
                validate.statusCode(getAnswer.response.status, 200);
                validate.jsonSchema(getAnswer.json, answerSchema.faq);
                validate.answer(getAnswer.answersArray[0], answer.premiumPart1);
                validate.answer(getAnswer.answersArray[1], answer.premiumPart2);
                validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
                validate.done();
        });
    });

    questions.prescriptionDrugQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
                
                validate.statusCode(postMessage.response.status, 200);
                validate.jsonSchema(postMessage.json, postSchema.postMessage);
                validate.done();
                
                const getAnswer = await user.conversation.getActivity(postMessage.json.id);
                
                validate.statusCode(getAnswer.response.status, 200);
                validate.jsonSchema(getAnswer.json, answerSchema.faq);
                validate.answer(getAnswer.answer, answer.prescriptionDrug);
                validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
                validate.done();
        });
    });

    questions.preventiveCareQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
                
                validate.statusCode(postMessage.response.status, 200);
                validate.jsonSchema(postMessage.json, postSchema.postMessage);
                validate.done();
                
                const getAnswer = await user.conversation.getActivity(postMessage.json.id);
                
                validate.statusCode(getAnswer.response.status, 200);
                validate.jsonSchema(getAnswer.json, answerSchema.faq);
                validate.answer(getAnswer.answer, answer.preventiveCare);
                validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
                validate.done();
        });
    });
//FAQ 61-69
    questions.primaryCareProviderQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
                
                validate.statusCode(postMessage.response.status, 200);
                validate.jsonSchema(postMessage.json, postSchema.postMessage);
                validate.done();
                
                const getAnswer = await user.conversation.getActivity(postMessage.json.id);
                
                validate.statusCode(getAnswer.response.status, 200);
                validate.jsonSchema(getAnswer.json, answerSchema.faq);
                validate.answer(getAnswer.answersArray[0], answer.primaryCareProviderPart1);
                validate.answer(getAnswer.answersArray[1], answer.primaryCareProviderPart2);
                validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
                validate.done();
        });
    });

    questions.pffsQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
                
                validate.statusCode(postMessage.response.status, 200);
                validate.jsonSchema(postMessage.json, postSchema.postMessage);
                validate.done();
                
                const getAnswer = await user.conversation.getActivity(postMessage.json.id);
                
                validate.statusCode(getAnswer.response.status, 200);
                validate.jsonSchema(getAnswer.json, answerSchema.faq);
                validate.answer(getAnswer.answer, answer.privateFreeForService);
                validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
                validate.done();
        });
    });

    questions.priorAuthorizationQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
                
                validate.statusCode(postMessage.response.status, 200);
                validate.jsonSchema(postMessage.json, postSchema.postMessage);
                validate.done();
                
                const getAnswer = await user.conversation.getActivity(postMessage.json.id);
                
                validate.statusCode(getAnswer.response.status, 200);
                validate.jsonSchema(getAnswer.json, answerSchema.faq);
                validate.answer(getAnswer.answersArray[0], answer.priorAuthorizationPart1);
                validate.answer(getAnswer.answersArray[1], answer.priorAuthorizationPart2);
                validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
                validate.done();
        });
    });

    questions.providerQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
                
                validate.statusCode(postMessage.response.status, 200);
                validate.jsonSchema(postMessage.json, postSchema.postMessage);
                validate.done();
                
                const getAnswer = await user.conversation.getActivity(postMessage.json.id);
                
                validate.statusCode(getAnswer.response.status, 200);
                validate.jsonSchema(getAnswer.json, answerSchema.faq);
                validate.answer(getAnswer.answer, answer.provider);
                validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
                validate.done();
        });
    });

    questions.quantityLimitQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
                
                validate.statusCode(postMessage.response.status, 200);
                validate.jsonSchema(postMessage.json, postSchema.postMessage);
                validate.done();
                
                const getAnswer = await user.conversation.getActivity(postMessage.json.id);
                
                validate.statusCode(getAnswer.response.status, 200);
                validate.jsonSchema(getAnswer.json, answerSchema.faq);
                validate.answer(getAnswer.answer, answer.quantityLimit);
                validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
                validate.done();
        });
    });

    questions.riderQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
                
                validate.statusCode(postMessage.response.status, 200);
                validate.jsonSchema(postMessage.json, postSchema.postMessage);
                validate.done();
                
                const getAnswer = await user.conversation.getActivity(postMessage.json.id);
                
                validate.statusCode(getAnswer.response.status, 200);
                validate.jsonSchema(getAnswer.json, answerSchema.faq);
                validate.answer(getAnswer.answer, answer.rider);
                validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
                validate.done();
        });
    });

    questions.reimbursementQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
                
                validate.statusCode(postMessage.response.status, 200);
                validate.jsonSchema(postMessage.json, postSchema.postMessage);
                validate.done();
                
                const getAnswer = await user.conversation.getActivity(postMessage.json.id);
                
                validate.statusCode(getAnswer.response.status, 200);
                validate.jsonSchema(getAnswer.json, answerSchema.faq);
                validate.answer(getAnswer.answer, answer.reimbursement);
                validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
                validate.done();
        });
    });

    questions.stepTherapyQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
                
                validate.statusCode(postMessage.response.status, 200);
                validate.jsonSchema(postMessage.json, postSchema.postMessage);
                validate.done();
                
                const getAnswer = await user.conversation.getActivity(postMessage.json.id);
                
                validate.statusCode(getAnswer.response.status, 200);
                validate.jsonSchema(getAnswer.json, answerSchema.faq);
                validate.answer(getAnswer.answer, answer.stepTherapy);
                validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
                validate.done();
        });
    });

    questions.specialistQuestionsArray.forEach((question) => {
        test(question.text, async function () {
        
            const postMessage = await user.conversation.postMessage(question, userData.consumerProfile, this);
                
                validate.statusCode(postMessage.response.status, 200);
                validate.jsonSchema(postMessage.json, postSchema.postMessage);
                validate.done();
                
                const getAnswer = await user.conversation.getActivity(postMessage.json.id);
                
                validate.statusCode(getAnswer.response.status, 200);
                validate.jsonSchema(getAnswer.json, answerSchema.faq);
                validate.answer(getAnswer.answer, answer.specialist);
                validate.followUpQuestions(getAnswer.followUpQuestion, answer.followUpQuestion);
                validate.done();
        });
    });

    suiteTeardown(async function () {
        await user.conversation.teardown(this);
    });
});
