import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class BenefitsAnswerBuilder {

    async benefitsAnswer (userData, coverageType, planStatus) {
        
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        let answers = {
            firstLevelAnswer: '',
            secondLevelAnswer: '',
            thirdLevelAnswer: '',
            secondLevelQuestion: '',
            thirdLevelQuestion: '',
            followUpQuestion: followUpQuestion,
        };
        const buttons = ['Yes', 'No'];
        const eligibilityType = userData.consumerProfile.eligibilityType.toLowerCase();
        const memberStatus = userData.consumerProfile.memberStatus || userData.consumerProfile.dvMemberStatus;
        const eligibilityStatus = memberStatus.toLowerCase();
        const isSpendingSummaryButton = ['medicare', 'commercial'].includes(eligibilityType);
        switch (planStatus) {
            case 'active':
                if (eligibilityStatus === 'active') {
                    const cardsMapping = {
                        showDeductibleCard: `deductibleCard`,
                        showOutOfPocketCard: `outOfPocketCard`,
                        showPartBDrugCard: `partBDrugCard`,
                        showTierTwoCard: `showTierTwoCard`
                    };
                    let totalCard;
                    let planType;
                    const coverageTypeMapping = {
                        outOfPocket: `showOutOfPocketCard`,
                        deductible: `showDeductibleCard`
                    };
                    const coverageTypeTextMapping = {
                        outOfPocket: `Out-of-pocket maximum`,
                        deductible: `Deductible`
                    };
                    const coverageTypeName = coverageTypeTextMapping[coverageType];
                    const cardTextObj = {};
                    const benefitLevelLabels = [];
                    const currentCard = coverageTypeMapping[coverageType];
                    const article = ['a', 'an'];
                    if (userData.benefitLevelInfos) {
                        userData.benefitLevelInfos.forEach(key => {
                            if (key && Object.keys(key).length !== 0) {
                                benefitLevelLabels.push(key.benefitLevelLabel);
                                if (key[currentCard]) {
                                    totalCard = key[cardsMapping[currentCard]].totalAmount;
                                    planType = key[cardsMapping[currentCard]].hasFamily ? `family` : `individual`;

                                    if (!cardTextObj[key.benefitLevelLabel]) {
                                        cardTextObj[key.benefitLevelLabel] = [];
                                    }
                                    cardTextObj[key.benefitLevelLabel].push(
                                        `~~s~~ | ${key.benefitLevelLabel} | Amount | | --- | --- | | Total | $${totalCard.maximumAmount} | | Amount applied | $${totalCard.appliedAmount} | | Amount remaining | $${totalCard.remainingAmount} | `
                                    );
                                }
                                answers.firstLevelAnswer = cardTextObj[benefitLevelLabels[0]] ? `Here are the details for your ${planType} ${coverageTypeName}: ${cardTextObj[benefitLevelLabels[0]]}` : `Here are the details for your ${planType} ${coverageTypeName}: You do not have a ${benefitLevelLabels[0].toLowerCase()} ${coverageTypeName.toLowerCase()}.`;
                                answers.secondLevelAnswer = cardTextObj[benefitLevelLabels[1]] ? cardTextObj[benefitLevelLabels[1]][0] : '';
                                answers.thirdLevelAnswer = cardTextObj[benefitLevelLabels[2]] ? cardTextObj[benefitLevelLabels[2]][0] : '';
                                answers.secondLevelQuestion = cardTextObj[benefitLevelLabels[1]] ?  `Would you like to see your ${benefitLevelLabels[1].toLowerCase()} ${coverageTypeName.toLowerCase()}?` : '';
                                answers.thirdLevelQuestion = cardTextObj[benefitLevelLabels[2]] ? `Would you like to see your ${benefitLevelLabels[2].toLowerCase()} ${coverageTypeName.toLowerCase()}?` : '';
                            }
                        })
                    };
                    if (cardTextObj && Object.keys(cardTextObj).length === 0 || !userData.benefitLevelInfos) {
                        if (coverageTypeName === 'Out-of-pocket maximum') {
                            answers.firstLevelAnswer = `Your plan does not have ${article[1]} ${coverageTypeName.toLowerCase()}.`;
                        } else {
                            answers.firstLevelAnswer = `Your plan does not have ${article[0]} ${coverageTypeName.toLowerCase()}.`;
                        } 
                    }
                    break;
                } else {
                    answers.firstLevelAnswer = 'ERROR: PLAN IS NOT ACTIVE';
                }
                
            case 'termed':
                if (eligibilityStatus === 'termed') {
                    answers.firstLevelAnswer = 'Your plan is not currently active.';
                } else {
                    answers.firstLevelAnswer = 'ERROR: PLAN IS NOT TERMED'
                };
                break;
            case 'future active':
                if (eligibilityStatus === 'futureactive') {
                    answers.firstLevelAnswer  = 'Your plan is not yet active. Would you like to chat with a concierge about your future coverage?'; 
                } else {
                    answers.firstLevelAnswer = 'ERROR: PLAN IS NOT FUTURE'
                };
                break;
            case 'without benefits':
                if (!userData.benefitLevelInfos) {
                    answers.firstLevelAnswer = 'Your plan is not currently active. What else can I do for you?';
                } else {
                    answers.firstLevelAnswer = 'ERROR: PLAN HAS BENEFITS'
                }
                break;
            case 'ss error':
                if (isSpendingSummaryButton && !userData.benefitLevelInfos) {
                    answers.firstLevelAnswer = `We are unable to display spending summary information at this time. If you have questions about this, I can transfer you to a health care concierge. Would you like to chat with a concierge for more information?`; 
                } else {
                    answers.firstLevelAnswer = 'ERROR: NO SPENDING SUMMARY ERROR';
                }
                break;
        }
        return { answers, buttons };
    }
}

export const builder = new BenefitsAnswerBuilder();