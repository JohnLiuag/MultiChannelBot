import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class CoinsuranceAnswerBuilder {

    async coinsuranceAnswer (userData, planStatus) {
        
        let answer;
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        const memberStatus = userData.consumerProfile.memberStatus || userData.consumerProfile.dvMemberStatus;
        const eligibilityStatus = memberStatus.toLowerCase();
        const eligibilityType = userData.consumerProfile.eligibilityType.toLowerCase();

        switch (planStatus) {
            case 'active':
                if (eligibilityStatus === 'active') {
                    const isSpendingSummaryButton = ['medicare', 'commercial'].includes(eligibilityType);
                    //const doesUserHaveSpendingSummaryRecord = !(benefitLevels.length === 1 && benefitLevels[0].benefitLevel === 'DFAULT');
                    //TODO investigate Julia's code within Chatbot repo
                    const benefitLevelLabels = [];
                    const memberCoinsurancePercentages = [];
                    
                    if (!userData.benefitLevelInfos && !isSpendingSummaryButton) {
                        answer = `Your plan does not have a coinsurance.`;
                    } else if (!userData.benefitLevelInfos) {
                        answer = `We are unable to display spending summary information at this time. If you have questions about this, I can transfer you to a health care concierge. Would you like to chat with a concierge for more information?`; 
                    } else {
                        userData.benefitLevelInfos.forEach(key => {
                            benefitLevelLabels.push(key.benefitLevelLabel);
                            key.memberCoinsurancePercentage ? memberCoinsurancePercentages.push(key.memberCoinsurancePercentage) : '';
                        });
                        if (memberCoinsurancePercentages.length === 0) {
                            answer = `Your plan does not have a coinsurance.`;
                        } else if (benefitLevelLabels.length === 1) {
                            answer = `~~s~~ | Benefit Level | Coins Amount | | --- | --- | | ${ benefitLevelLabels[0] } | ${ memberCoinsurancePercentages[0] } | `;
                        } else if (benefitLevelLabels.length > 1) {
                            answer = `~~s~~ | Benefit Level | Coins Amount | | --- | --- | | ${ benefitLevelLabels[0] } | ${ memberCoinsurancePercentages[0] } | | ${ benefitLevelLabels[1] } | ${ memberCoinsurancePercentages[1] } | `;
                        };
                    };
                } else {
                    answer = 'ERROR: PLAN IS NOT ACTIVE';
                }
                break;
            case 'termed':
                if (eligibilityStatus === 'termed') {
                    answer = 'Your plan is not currently active.';
                } else {
                    answer = 'ERROR: PLAN IS NOT TERMED';
                }
                break;
            case 'future active':
                if (eligibilityStatus === 'futureactive') {
                    answer = 'Your plan is not yet active. Would you like to chat with a concierge about your future coverage?';
                } else {
                    answer = 'ERROR: PLAN IS NOT FUTURE';
                }
                break;                      
        }
        return { answer, followUpQuestion };
    }
}

export const builder = new CoinsuranceAnswerBuilder();