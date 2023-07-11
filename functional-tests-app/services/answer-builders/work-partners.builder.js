import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class WorkPartnersAnswerBuilder {
    
    async workPartnersAnswer (userData, expectedAnswerType) {

        let answer;
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        const memberStatus = userData.consumerProfile.memberStatus || userData.consumerProfile.dvMemberStatus;
        const eligibilityStatus = memberStatus.toLowerCase();
       
        switch (expectedAnswerType) {
            case 'compensation':
                if (userData.consumerProfile.corpCode === 'U135') {
                    answer = `If you have sustained an injury or illness related to your employment, you can learn more about Workers' Compensation and file a claim by clicking the link below. <br>[Workers' Compensation](#/main/content/workers-comp-dashboard)`;
                } else {
                    answer = 'ERROR: CORPID IS NOT U135';
                }
                break;
            case 'leaveFile':
                if (userData.consumerProfile.corpCode === 'U135') {
                    answer = `If you need to request a leave of absence from work, please click on the link below. <br>[Request an absence from work](#/main/content/combined-request-an-absence)`;
                } else {
                    answer = 'ERROR: CORPID IS NOT U135';
                }
                break;
            case 'leaveStatus':
                if (eligibilityStatus === 'active') {
                    if (userData.consumerProfile.corpCode === 'U135') {
                        answer = `You can check on the status of your current request for a leave of absence and view past requests using the link below. <br>[View absence status and history](#/main/content/combined-status-and-history)`;
                    } else {
                        answer = 'ERROR: CORPID IS NOT U135';
                    }
                } else {
                    answer = 'ERROR: PLAN IS NOT ACTIVE';
                }
                break;
            case 'other': 
                if (userData.consumerProfile.corpCode != 'U135' || ['futureactive', 'termed'].includes(eligibilityStatus)) {
                    answer = 'I am sorry I am unable to answer this question. Please rephrase your question, or type **“help”** to chat with a live concierge.';
                    followUpQuestion = [];
                } else {
                    answer = 'ERROR: CORPID IS U135';
                }
                break;
        }

        return { answer, followUpQuestion }
    }
}

export const builder = new WorkPartnersAnswerBuilder();
