import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class AnocAnswerBuilder {

    async anocAnswer (userData, planStatus, expectedAnswerType) {

        let answer;
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        const memberStatus = userData.consumerProfile.memberStatus || userData.consumerProfile.dvMemberStatus;
        const status = memberStatus.toLowerCase();
        const eligibilityType = userData.consumerProfile.eligibilityType.toLowerCase();
        const activePlanLink = '[Plans and Coverage](#/main/content/your-coverage-and-benefits)';
        const futurePlanLink = '[Plans and Coverage](#/main/content/your-coverage-and-benefits?coverage=future)';

        switch (planStatus) {
            case 'active':
                if (status === 'active') {
                    switch (expectedAnswerType) {
                        case 'medicare/snp':
                            if (['medicare', 'snp'].includes(eligibilityType)) {
                                answer = `You can learn more about upcoming changes to your Medicare plan by reviewing your **Annual Notice of Change (ANOC)** document. You can find your ANOC here by selecting your **Medical** plan: ${ activePlanLink }`;
                            } else {
                                answer = 'ERROR: PLAN IS NEITHER MEDICARE NOR SNP';
                            }
                            break;
                        case 'other':
                            if (!['medicare', 'snp', 'wellness', 'non medical'].includes(eligibilityType)) {
                                answer = `You can view your coverage details here: ${ activePlanLink }`;
                            } else {
                                answer = 'ERROR: PLAN IS MEDICARE OR SNP'
                            }
                            break;
                    }
                } else {
                    answer = 'ERROR: PLAN IS NOT ACTIVE';
                }
                break;
                case 'future':
                    if (status === 'futureactive') {
                        switch (expectedAnswerType) {
                            case 'medicare/snp':
                                if (['medicare', 'snp'].includes(eligibilityType)) {
                                    answer = `You can learn more about upcoming changes to your Medicare plan by reviewing your **Annual Notice of Change (ANOC)** document. You can find your ANOC here by selecting your **Medical** plan: ${ futurePlanLink }`;
                                } else {
                                    answer = 'ERROR: PLAN IS NEITHER MEDICARE NOR SNP';
                                }
                                break;
                            case 'other':
                                if (!['medicare', 'snp', 'wellness', 'non medical'].includes(eligibilityType)) {
                                    answer = `You can view your coverage details here: ${ futurePlanLink }`;
                                } else {
                                    answer = 'ERROR: PLAN IS MEDICARE OR SNP'
                                }
                                break;
                        }
                    } else {
                        answer = 'ERROR: PLAN STATUS IS NOT FUTURE'
                    }
                    break;
            case 'termed':
                if (status === 'termed') {
                    switch (expectedAnswerType) {
                        case 'medicare/snp':
                            if (['medicare', 'snp'].includes(eligibilityType)) {
                                answer = 'Your coverage is not currently active. If you have questions about this, please type **"help"** to chat with a live concierge.';
                            } else {
                                answer = 'ERROR: PLAN IS NEITHER MEDICARE NOR SNP'
                            }
                            break;
                        case 'other':
                            if (!['medicare', 'snp', 'wellness', 'non medical'].includes(eligibilityType)) {
                                answer = 'Your coverage is not currently active. If you have questions about this, please type **"help"** to chat with a live concierge.'
                            } else {
                                answer = 'ERROR: PLAN IS MEDICARE OR SNP'
                            }
                            break;
                    }
                } else {
                    answer = 'ERROR: PLAN STATUS IS NOT TERMED'
                }
                break;
            case 'wellness/non medical':
                if (['wellness', 'non medical'].includes(eligibilityType)) {
                    answer = 'Your plan does not include coverage for medical services. If you have questions about this, please type **"help"** to chat with a live concierge.';
                } else {
                    answer = 'ERROR: PLAN IS NEITHER WELLNESS NOR NON MEDICAL'
                }
                break;
        }

        return { answer, followUpQuestion }
    }
}

export const builder = new AnocAnswerBuilder();
