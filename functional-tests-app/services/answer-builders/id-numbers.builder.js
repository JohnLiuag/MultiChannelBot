import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class IdNumbersAnswerBuilder {

    async idNumbersAnswer (userData, question, planStatus, expectedAnswerType) {
    
        let answer;
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        const idCardfollowUpQuestion = 'Would you like to see your ID card?';
        const profile = userData.consumerProfile;
        const medicalMemberId = profile.medicalMemberId ? profile.medicalMemberId : '';
        const dvMemberId = profile.dentalVisionMemberId ? profile.dentalVisionMemberId : '';
        const eligibilityType = profile.eligibilityType.toLowerCase();
        const eligibilityStatus = profile.memberStatus || profile.dvMemberStatus;
        const hasDental = profile.hasDentalAdvantage;
        const hasVision = profile.hasVision;
        let memberId;
        let intent;
        question = question.toLowerCase();
        if (question.includes('dental')) {
            intent = 'dental';
        } else if (question.includes('vision')) {
            intent = 'vision';
        } else {
            intent = 'general';
        }
        
        if (['medicaid', 'chc'].includes(eligibilityType)) {
            memberId = profile.medicalMemberId || profile.dentalVisionMemberId;
        } else if (['wellness', 'non medical', 'chip', 'snp'].includes(eligibilityType)) {
            memberId = medicalMemberId;
        } else if (eligibilityType === 'dentalvision'
            || (eligibilityType != 'medicare' && ['dental', 'vision'].includes(intent))) {
            memberId = dvMemberId;
        } else if (eligibilityType === 'medicare' && ['dental', 'vision'].includes(intent)) {
            memberId = medicalMemberId;
        } else if ((intent === 'general' && !['medicaid', 'chc', 'dentalvision'].includes(eligibilityType))) {
            memberId = medicalMemberId;
        }

        const termedFutureAnswer = `Your ID number is ${memberId}.`;
        const generalAnswer = `Your ID number is ${memberId}. You can also find this information on your [ID Card](#/main/content/id-cards). Would you like to see your ID card?`;
        const specialAnswer = `Your ${ intent } ID number is ${memberId}. You can also find this information on your [ID Card](#/main/content/id-cards). Would you like to see your ID card?`;
        const exceptionAnswer = `You do not have ${ intent } coverage, but your plan might include some coverage for those services. You can type "ID Number" to see your medical ID, or type "help" to chat with a live concierge.`;
        
        switch (planStatus) {
            case 'active':
                if (eligibilityStatus.toLowerCase() === 'active') {
                    switch (expectedAnswerType) {
                        case 'wellness/non-medical':
                            if (['wellness', 'non medical'].includes(eligibilityType)) {
                                answer = termedFutureAnswer;
                            } else {
                                answer = 'ERROR: PLAN IS NOT WELLNESS/NON-MEDICAL';
                            }
                            break;
                        case 'dentalvision':
                            if (eligibilityType === 'dentalvision') {
                                if (intent === 'general') {
                                    answer = generalAnswer;
                                } else if (['dental', 'vision'].includes(intent)) {
                                    if ((intent === 'dental' && hasDental) || (intent === 'vision' && hasVision))
                                    {
                                        answer = specialAnswer;
                                    } else {
                                        answer = exceptionAnswer;
                                    }
                                }   
                            } else {
                                answer = 'ERROR: PLAN IS NOT DENTALVISION';
                            }
                            break;
                        case 'medicaid/chc':
                            if (['medicaid', 'chc'].includes(eligibilityType)) {   
                                answer = `You can find this information on your [ID Card](#/main/content/id-cards). Would you like to see your ID card?`;
                            } else {
                                answer = 'ERROR: PLAN IS NOT MEDICAID/CHC';
                            }
                            break;
                        case 'chip':
                            if (eligibilityType === 'chip') {
                                if (intent === 'general') {
                                    answer = generalAnswer;
                                } else if (['dental', 'vision'].includes(intent)) {
                                    if ((intent === 'dental' && hasDental) || (intent === 'vision' && hasVision)) {
                                        answer = specialAnswer;
                                    } else {
                                        answer = exceptionAnswer;
                                    }
                                }
                            } else {
                                answer = 'ERROR: PLAN IS NOT CHIP';
                            }
                            break;
                        case 'general':
                            if (intent === 'general' && !['medicaid', 'chc', 'dentalvision'].includes(eligibilityType)) {
                                answer = generalAnswer;
                            } else {
                                answer = 'ERROR: INTENT IS NOT GENERAL OR PLAN IS MEDICAID/CHC/DENTALVISION';
                            }
                            break;
                        case 'special':
                            if ((intent === 'dental' && hasDental) || (intent === 'vision' && hasVision)) {
                                answer = specialAnswer;
                            } else {
                                answer = exceptionAnswer;
                            }
                            break;
                    }
                } else {
                    answer = 'ERROR: PLAN IS NOT ACTIVE';
                }
                break;
            case 'termed/futureactive':
                if (['termed', 'futureactive'].includes(eligibilityStatus.toLowerCase())) {
                    if (['medicaid', 'chc'].includes(eligibilityType)) {
                        if (eligibilityStatus.toLowerCase() === 'termed') {
                            answer = `Your coverage is not currently active. You can contact the County Assistance Office for more information, or type "help" to chat with a live concierge.`;
                        } else if (eligibilityStatus.toLowerCase() === 'futureactive') {
                            answer = `Your coverage is not currently active. You will receive an ID card with your ID number within 7-10 business days of your plan's start date. You can also type "help" to chat with a live concierge for more information.`;
                        }
                    } else if ((intent === 'dental' && !hasDental) || (intent === 'vision' && !hasVision)) {
                        answer = exceptionAnswer;
                    } else {
                        answer = termedFutureAnswer;
                    }
                } else {
                    answer = 'ERROR: PLAN IS NEITHER TERMED NOR FUTURE';
                }
                break;    
        }
        
        return { answer, followUpQuestion, idCardfollowUpQuestion }
    }
}

export const builder = new IdNumbersAnswerBuilder();