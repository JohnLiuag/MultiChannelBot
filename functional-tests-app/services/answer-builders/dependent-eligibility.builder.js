import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class DependentEligibilityAnswerBuilder {

    async dependentEligibilityAnswer (userData, question, planStatus, answerType, exception) {
        
        let answer = [];
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        let members = {
            medical: [],
            dental: [],
            vision: [],
        };
        const planCoverageTypesList = [];
        const isWellness = userData.consumerProfile.hasWellness;
        const isNonMedical = userData.consumerProfile.eligibilityType.toLowerCase() === 'non medical' ? true : false;
        const dentalExceptionPlanTypes = ['medicaid', 'chc', 'chip', 'medicare'];
        const visionExceptionPlanTypes = ['medicaid', 'chc', 'chip'];
        let hasDentalExceptionPlanType;
        let hasVisionExceptionPlanType;
        let isMedical;
        let isValueAdded;
        //let medicalPlanStartDate;
        //let dvPlanStartDate;
        //let medicalStartDate;
        //let dvStartDate;
        //let endDate;
        //let planEndDate;
        let medicalPlanStartDate;
        let medicalStartDate;
        if (userData.consumerProfile.medicalEligibilityStartDate) {
            medicalPlanStartDate = new Date(userData.consumerProfile.medicalEligibilityStartDate);
            medicalStartDate = new Intl.DateTimeFormat('en-US', {month:'2-digit',day:'2-digit', year:'numeric'}).format(medicalPlanStartDate);
        }
        let dvPlanStartDate;
        let dvStartDate;
        if (userData.consumerProfile.dvEligibilityStartDate) {
            dvPlanStartDate = new Date(userData.consumerProfile.dvEligibilityStartDate);
            dvStartDate = new Intl.DateTimeFormat('en-US', {month:'2-digit',day:'2-digit', year:'numeric'}).format(dvPlanStartDate);
        }
        const medicalPlanEndDate = userData.consumerProfile.medicalEligibilityEndDate ? new Date(userData.consumerProfile.medicalEligibilityEndDate) : '';
        const dvPlanEndDate = userData.consumerProfile.dvEligibilityEndDate ? new Date(userData.consumerProfile.dvEligibilityEndDate) : '';
        const endDate = medicalPlanEndDate || dvPlanEndDate;
        const planEndDate = new Intl.DateTimeFormat('en-US', {month:'2-digit',day:'2-digit', year:'numeric'}).format(endDate);
        const startDate = medicalStartDate || dvStartDate;
        const hasDifferentAffectiveDates = (medicalPlanStartDate && dvPlanStartDate) && (medicalPlanStartDate.valueOf() != dvPlanStartDate.valueOf()) ? true : false
        userData.dependentEligibility.forEach(element => {
            element.forEach(key => {
                const userName = `${key.firstName} ${key.lastName}`;
                key.eligibilities.forEach(eligibility => {
                    if (eligibility.hasMedical) {
                        isMedical = true;
                    };
                    if (eligibility.hasValueAddedBenefits) {
                        isValueAdded = true;
                    };     
                    if (['active', 'futureactive'].includes(eligibility.eligibilityStatus.toLowerCase())) {
                        eligibility.hasMedical && !members.medical.includes(userName) ? members.medical.push(userName) : '';
                        eligibility.hasAnyVision && !members.vision.includes(userName) ? members.vision.push(userName) : '';
                        eligibility.hasAnyDental && !members.dental.includes(userName) ? members.dental.push(userName) : '';
                        /*if (eligibility.eligibilityTypeDescription.toLowerCase() === 'dentalvision') {
                            //dvStartDate = new Date(eligibility.startDate);
                            //dvPlanStartDate = new Intl.DateTimeFormat('en-US', {month:'2-digit',day:'2-digit', year:'numeric'}).format(dvStartDate);
                        } else {
                            //!medicalStartDate ? medicalStartDate = new Date(eligibility.startDate) : '';
                            //medicalPlanStartDate = new Intl.DateTimeFormat('en-US', {month:'2-digit',day:'2-digit', year:'numeric'}).format(medicalStartDate);
                        }*/
                        if (dentalExceptionPlanTypes.includes(eligibility.eligibilityTypeDescription.toLowerCase())) {
                            hasDentalExceptionPlanType = true;
                        }
                        if (visionExceptionPlanTypes.includes(eligibility.eligibilityTypeDescription.toLowerCase())) {
                            hasVisionExceptionPlanType = true;
                        }
                    }
                    if (eligibility.eligibilityStatus.toLowerCase() === 'termed') {
                        const endDatesArray = [];
                        if (endDatesArray.length === 0) { //get endDate only from the first met termed plan.
                            endDatesArray.push(eligibility.endDate);
                        };
                        //endDate = new Date(eligibility.endDate);
                        //planEndDate = new Intl.DateTimeFormat('en-US', {month:'2-digit',day:'2-digit', year:'numeric'}).format(endDate);
                    }
                })
            })
        })
        //const hasDifferentAffectiveDates = (medicalStartDate && dvStartDate) && (medicalStartDate.valueOf() != dvStartDate.valueOf()) ? true : false
        
        let intent;
        let type;
        if (question.includes('dental')) {
            intent = 'dental';
            type = 'dental';
        } else if (question.includes('vision')) {
            intent = 'vision';
            type = 'vision';
        } else {
            intent = 'general';
            type = 'medical';
        };
        if (intent === 'general') {
            if (members.medical.length != 0) {
                members.medical = members.medical.join(', ');
                answer.push(`Medical - Members Covered: ${ members.medical }.`);
                planCoverageTypesList.push('medical');
                if (hasDifferentAffectiveDates) {
                    answer.push(`Your ${ planCoverageTypesList.shift() } coverage began on ${ medicalStartDate }`);
                }
            };
            if (members.vision.length != 0) {
                members.vision = members.vision.join(', ');
                members.vision = answer.push(`Vision - Members Covered: ${ members.vision }.`);
                planCoverageTypesList.push('vision')
            };
            if (members.dental.length != 0) {
                members.dental = members.dental.join(', ');
                answer.push(`Dental - Members Covered: ${ members.dental }.`);
                planCoverageTypesList.push('dental')
            };
            if (hasDifferentAffectiveDates) {
                answer.push(`Your ${ planCoverageTypesList.join(' and ') } coverage began on ${ dvStartDate }`);
            } else {
                answer.push(`Your ${ planCoverageTypesList.join(', ').replace(/, ([^,]*)$/, ' and $1') } coverage began on ${ startDate }`);
            }
        } else {
            if (intent === 'dental' || intent === 'vision') {
                if (members[intent].length != 0) {
                    members[intent] = members[intent].join(', ');
                    answer.push(`${ intent.charAt(0).toUpperCase() + intent.slice(1) } - Members Covered: ${ members[intent] }. Your ${ intent } coverage began on ${ dvStartDate }`);
                } else {
                    answer.push(`Your plan does not include ${ intent } coverage.`);
                }
            }
        }
        switch (planStatus) {
            case 'active':
                switch (answerType) {
                    case 'individual':
                        if (userData.dependentEligibility[0].length === 1) {               
                            switch (exception) {
                                case 'exception':
                                    answer = [];
                                    if ((intent === 'dental' && hasDentalExceptionPlanType) || (intent === 'vision' && hasVisionExceptionPlanType)) { 
                                        answer.push(`Your medical plan includes coverage for some ${ intent } services. Would you like to chat with a concierge for more information?`);
                                    } else {
                                        answer.push('ERROR: PLAN IS NOT MEDICAL, CHC, MEDICARE OR CHIP PLAN');
                                    }
                                    break;
                                default:
                                    if (!answer.includes(`Your plan does not include ${ intent } coverage.`)) {
                                        answer = [];
                                        answer.push(`You are the only person currently covered on your policy. Your policy began on ${ medicalStartDate }.`);
                                    }
                                    break;
                            }
                        } else {
                            answer = 'ERROR: DEPENDENT ELIGIBILITY PLAN IS NOT INDIVIDUAL';
                        }
                        break;
                    case 'family':
                        if(!answer.includes(`Your plan does not include ${ intent } coverage.`)) {
                            answer.unshift('The following individuals are covered on your policy:');
                        }
                        break;
                    case 'wellness/non-medical':
                        answer = [];
                        if (isWellness || isNonMedical) {
                            answer.push(`Your plan does not include ${ type } coverage. Would you like to chat with a concierge for more information?`);
                        } else {
                            answer.push('ERROR: IT IS NOT WELLNESS/NON-MEDICAL CASE');
                        }
                        break;
                    case 'value added':
                        if (isValueAdded) {
                            answer = [];
                            answer.push('You have coverage for some dental and vision services included in your medical plan. Would you like to chat with a concierge for more information?');
                        } else {
                            answer.push('ERROR: IT IS NOT VALUE ADDED CASE');
                        }
                        break;
                }
                break;
            case 'termed':
                answer = [];
                if (intent === 'general') {
                    answer.push(`Your plan is not currently active. Your coverage ended on ${ planEndDate }`);
                } else if (intent === 'dental' || intent === 'vision') {
                    if (members[intent].length != 0) {
                        answer.push(`Your ${ intent } plan is not currently active. Your ${ intent } coverage ended on ${ planEndDate }`);
                    } else {
                        answer.push(`Your plan does not include ${ intent } coverage.`);
                    }
                }  
                break;
            case 'future':
                const startDate = medicalStartDate || dvStartDate;
                switch (answerType) {
                    case 'individual':
                        if (intent === 'general') {
                            answer = [];
                            answer.push(`Your plan is not yet active. Your coverage will begin on ${ startDate }`);
                        } else if (intent === 'dental' || intent === 'vision') {
                            if (members[type].length != 0) {
                                answer = [];
                                answer.push(`Your ${type} plan is not yet active. Your ${type} coverage will begin on ${ startDate }`);
                            }
                        }
                        break;
                    case 'family':         
                        if (intent === 'general') {
                            answer.unshift('Your plan is not yet active. Once it is, the individuals below will be covered on your policy (unless you make changes prior to your effective date): ');
                            answer[answer.length - 1] = answer[answer.length - 1].replace(/began/g, 'will begin'); 
                        } else if (intent === 'dental' || intent === 'vision') {
                            if (members[intent].length != 0) {
                                answer.unshift(`Your ${intent} plan is not yet active. Once it is, the individuals below will be covered on your policy (unless you make changes prior to your effective date):`);
                                answer[1] = answer[1].replace(/began/g, 'will begin');
                            } 
                        }
                        break;
                }
            break;                
        }
        answer = answer.join(' ');
        return { answer, followUpQuestion };
    }
}

export const builder = new DependentEligibilityAnswerBuilder();