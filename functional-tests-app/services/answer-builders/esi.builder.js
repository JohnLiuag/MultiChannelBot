import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class EsiAnswerBuilder {
    
    async esiAnswer (userData, planStatus, expectedAnswerType) {
        let answer;
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        const link = '[Pharmacy and Prescriptions](#/main/content/prescriptions)';
        const activeFuturePlanAnswer = `You can check for coverage, find the price of a medication, find a pharmacy, and sign up for home delivery by visiting the **Express Scripts** portal, which you can access here: ${ link }`;
        const termedPlanAnswer = `Your plan isn't active, but you can still view your medication history and manage your home delivery by visiting the **Express Scripts** portal here: ${ link }`;
        const negativeAnswer = 'Your pharmacy benefits are not administered by UPMC Health Plan. Please contact your pharmacy benefit administrator for questions related to prescription coverage and costs.';
        const memberStatus = userData.consumerProfile.memberStatus || userData.consumerProfile.dvMemberStatus;
        const status = memberStatus.toLowerCase();
        const hasRx = userData.consumerProfile.hasRx;
        
        switch (planStatus) {
            case 'active':
                if (status === 'active') {
                    switch (expectedAnswerType) {
                        case 'true':
                            if (hasRx) {
                                answer = activeFuturePlanAnswer;
                            } else {
                                answer = 'ERROR: HAS RX IS FALSE';
                            }
                            break;
                        case 'false':
                            if (!hasRx) {
                                answer = negativeAnswer;
                            } else {
                                answer = 'ERROR: HAS RX IS TRUE';
                            }
                            break;
                    }
                } else {
                    answer = 'ERROR: PLAN IS NOT ACTIVE'
                }
                break;
            case 'future':
                if (status === 'futureactive') {
                    switch (expectedAnswerType) {
                        case 'true':
                            if (hasRx) {
                                answer = activeFuturePlanAnswer;
                            } else {
                                answer = 'ERROR: HAS RX IS FALSE';
                            }
                            break;
                        case 'false':
                            if (!hasRx) {
                                answer = negativeAnswer;
                            } else {
                                answer = 'ERROR: HAS RX IS TRUE';
                            }
                            break;
                    }
                } else {
                    answer = 'ERROR: PLAN IS NOT FUTURE'
                }
                break;
            case 'termed':
                if (status === 'termed') {
                    switch (expectedAnswerType) {
                        case 'true':
                            if (hasRx) {
                                answer = termedPlanAnswer;
                            } else {
                                answer = 'ERROR: HAS RX IS FALSE';
                            }
                            break;
                        case 'false':
                            if (!hasRx) {
                                answer = negativeAnswer;
                            } else {
                                answer = 'ERROR: HAS RX IS TRUE';
                            }
                            break;
                    }
                } else {
                    answer = 'ERROR: PLAN IS NOT TERMED'
                }
                break;
        }

        return { answer, followUpQuestion }
    }
}

export const builder = new EsiAnswerBuilder();
