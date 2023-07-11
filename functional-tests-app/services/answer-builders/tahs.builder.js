import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class TahsAnswerBuilder {
    
    async tahsAnswer (userData, expectedAnswerType) {

        let answer;
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;

        switch (expectedAnswerType) {
            case 'tahs': 
                if (userData.consumerProfile.memberStatus.toLowerCase() === 'active' 
                    && userData.consumerProfile.corpCode === 'U135') {
                    answer = 'You can check your current Take a Healthy Step (TAHS) status on the [Incentives with Take a Healthy Step](#/main/content/rewards-and-incentives-dashboard).';
                } else {
                    answer = 'ERROR: PLAN IS NOT ACTIVE OR CORPID IS NOT U135';
                }
                break;
            case 'notahs':
                answer = 'I am sorry I am unable to answer this question. Please rephrase your question, or type **“help”** to chat with a live concierge.';
                followUpQuestion = [];
                break;
        }

        return { answer, followUpQuestion }
    }
}

export const builder = new TahsAnswerBuilder();
