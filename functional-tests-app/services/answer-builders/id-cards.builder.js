import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";
import { collector } from '../data-collector-service.js';


class IdCardsAnswerBuilder {

    async idCardsAnswer (userData, planStatus, expectedAnswerType, question, cardId) {
        
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        const answers = {
            hereIsYourIdCardAnswer: '',
            firstFollowUpQuestion: 'Which ID card do you need?',
            secondFollowUpQuestion: followUpQuestion,
            thirdFollowUpQuestion: 'Would you like to see a different ID card?',
            dentalDiscountAnswer: '',
            followUpText: ''
        };
        let buttons = [];
        let hasDentalIdCard = false;
        let hasDentalDiscountIdCard = false;
        let isRequestedIdCard = false;
        let idCardUrl;
        const memberStatus = userData.consumerProfile.memberStatus || userData.consumerProfile.dvMemberStatus;
        const eligibilityStatus = memberStatus.toLowerCase();
        const riders = userData.consumerProfile.medicalPartitionRiderCodes;
        const idCardsArray = ['UPMC Health Plan', 'Dental', 'Vision', 'Assist America', 'Dental Discount'];

        switch(planStatus) {
            case 'active':
                if (eligibilityStatus === 'active') {
                    switch(expectedAnswerType) {
                        case 'has id card':
                            question = question.toLowerCase();
                            if (question.includes('dental discount') || question.includes('value added plan') || cardId === 4) {
                                cardId = 4;
                                answers.hereIsYourIdCardAnswer = 'Here is your Dental Discount ID Card on file.';
                            } else if (question.includes('assist america') || cardId === 3) {
                                cardId = 3;
                                answers.hereIsYourIdCardAnswer = 'Here is your Assist America ID Card on file.'
                            } else if (question.includes('vision') || cardId === 2) {
                                cardId = 2;
                                answers.hereIsYourIdCardAnswer = 'Here is your Vision ID Card on file.'
                            } else if (question.includes('dental') || cardId === 1) {
                                cardId = 1;
                                answers.hereIsYourIdCardAnswer = 'Here is your Dental ID Card on file.'
                            } else if (question.includes('upmc health plan') || question.includes('medical') || cardId === 0) {
                                cardId = 0;
                                answers.hereIsYourIdCardAnswer = 'Here is your UPMC Health Plan ID Card on file.'
                            };
                            userData.idCardsInfo.forEach(idCard => {
                                buttons.push(idCard.idCardType.name);
                                idCard.idCardType.id === cardId ? isRequestedIdCard = true : '';
                                idCard.idCardType.id === 1 ? hasDentalIdCard = true : '';
                                idCard.idCardType.id === 4 ? hasDentalDiscountIdCard = true : '';     
                            });
                            if (cardId === 1 
                                && hasDentalIdCard === false 
                                && hasDentalDiscountIdCard === true
                                && (riders.includes('VCDD') || riders.includes('DDEA'))) {
                                answers.dentalDiscountAnswer = 'Your coverage includes a dental discount plan. You can use this ID card to receive a discount on Class I, II, or III dental services at participating providers.';
                                answers.hereIsYourIdCardAnswer = 'Here is your Dental Discount ID Card on file.';
                                cardId = 4;
                            };
                            if (!isRequestedIdCard && !hasDentalDiscountIdCard) {
                                    answers.hereIsYourIdCardAnswer = `Your ${ idCardsArray[cardId] } ID Card is currently unavailable.`;
                            } else {
                                idCardUrl = await collector.getIdCardUrl(userData, cardId);
                                if (idCardUrl.length === 0) {
                                    answers.hereIsYourIdCardAnswer = 'The ID card you requested is currently unavailable.';
                                };
                            };
                            break;
                        case 'does not have id card':
                            if (userData.idCardsInfo.length === 0) {
                                answers.hereIsYourIdCardAnswer = `There are currently no ID cards available for your plan. If you're a new member, please note that ID cards will be sent within 10 business days of your effective date. Would you like to chat with a concierge for more information?`;
                            } else {
                                answers.hereIsYourIdCardAnswer = 'ERROR: USER HAS ID CARD';
                            }
                            break;
                        case 'not available':
                            if (!userData.idCardsInfo) {
                                answers.hereIsYourIdCardAnswer = `Your ID card is not currently available.`;
                            } else {
                                answers.hereIsYourIdCardAnswer = 'ERROR: USER HAS ID CARD';
                            }
                            break;
                    }
                } else {
                    answers.hereIsYourIdCardAnswer = 'ERROR: PLAN IS NOT ACTIVE';
                }    
                break;
            case 'termed':
                if (eligibilityStatus === 'termed') {
                    answers.hereIsYourIdCardAnswer = `Your coverage is not currently active. Would you like to chat with a concierge for more information?`; 
                } else {
                    answers.hereIsYourIdCardAnswer = 'ERROR: PLAN IS NOT TERMED';
                }
                break;
            case 'future active':
                if (eligibilityStatus === 'futureactive') {
                    answers.hereIsYourIdCardAnswer = `Please note that if your coverage is not yet effective, your ID card may not be available. You should receive your ID card within 14 business days of your start date.`;
                    answers.followUpText = 'You can view and print your ID card here: [ID Cards](#/main/content/id-cards)'
                    answers.secondFollowUpQuestion = [];
                } else {
                    answers.hereIsYourIdCardAnswer = 'ERROR: PLAN IS NOT FUTURE';
                }
                break;
        }
        return { answers, buttons, idCardUrl };
    }
}

export const builder = new IdCardsAnswerBuilder();