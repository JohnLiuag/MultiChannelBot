import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class GymMembershipsAnswerBuilder {

    async gymMembershipsAnswer (userData, planStatus, expectedAnswerType) {

        let answer;
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        const memberStatus = userData.consumerProfile.memberStatus || userData.consumerProfile.dvMemberStatus;
        const status = memberStatus.toLowerCase();
        const eligibilityType = userData.consumerProfile.eligibilityType.toLowerCase();
        const silverSneakersLink = '<a href="https://www.silversneakers.com" target="_blank">SilverSneakers website</a>';
        const activeFitDirectLink = '<a href="https://www.activeandfitdirect.com/fitness/wellness" target="_blank">Active&Fit Direct</a>';

        switch (planStatus) {
            case 'active':
                if (status === 'active') {
                    switch (expectedAnswerType) {
                        case 'Silver Sneakers':
                            answer = [];
                            if (['medicare', 'snp'].includes(eligibilityType)) {
                                answer[0] = `As a member, you have access to SilverSneakers&#174; fitness benefits. Take advantage of free gym memberships, live online fitness classes, and more. To learn more, please visit the ${ silverSneakersLink }, or call <a href="tel:1-888-423-4632">1-888-423-4632</a> (TTY: 711) Monday through Friday, 8 a.m. to 8 p.m. ET.`;
                                answer[1] = `There is no coinsurance, copayment, or deductible for the SilverSneakers fitness benefit.`;
                                followUpQuestion = [];
                            } else {
                                answer[0] = 'ERROR: PLAN IS NEITHER MADICARE NOR SNP';
                            }
                            break;
                        case 'Active & Fit Direct':
                            if (['commercial', 'medicaid', 'chc'].includes(eligibilityType)) {
                                answer = `As a member, you are eligible to join Active&Fit Direct, which gives you access to more than 11,000 standard fitness centers and/or more than 4,500 premium exercise studios, plus more than 6,500 digital workout videos, for a low monthly fee with no long-term contract. To learn more, please visit ${ activeFitDirectLink }.`;
                                followUpQuestion = [];
                            } else {
                                answer = 'ERROR: PLAN IS NOT COMMERCIAL/MEDICAID/CHC';
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
                        case 'Silver Sneakers':
                            answer = [];
                            if (['medicare', 'snp'].includes(eligibilityType)) {
                                answer[0] = `Your coverage isn't active yet. Once it is, you can take advantage of free gym memberships, live online fitness classes, and more. To learn more, please visit the ${ silverSneakersLink }, or call <a href="tel:1-888-423-4632">1-888-423-4632</a> (TTY: 711) Monday through Friday, 8 a.m. to 8 p.m. ET.`;
                                answer[1] = `There is no coinsurance, copayment, or deductible for the SilverSneakers fitness benefit.`;
                                followUpQuestion = [];
                            } else {
                                answer[0] = 'ERROR: PLAN IS NEITHER MADICARE NOR SNP';
                            }
                            break;
                        case 'Active & Fit Direct':
                            if (['commercial', 'medicaid', 'chc'].includes(eligibilityType)) {
                                answer = `Your coverage isn't active yet. Once it is, you will be eligible to join Active&Fit Direct, which gives you access to more than 11,000 standard fitness centers and/or more than 4,500 premium exercise studios, plus more than 6,500 digital workout videos, for a low monthly fee with no long-term contract. To learn more, please visit ${ activeFitDirectLink }.`;
                                followUpQuestion = [];
                            } else {
                                answer = 'ERROR: PLAN IS NOT COMMERCIAL/MEDICAID/CHC';
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
                        case 'Silver Sneakers':
                            if (['medicare', 'snp'].includes(eligibilityType)) {
                                answer = `Your coverage is not active, so you don't currently have access to SilverSneakers through your UPMC <i>for Life</i> plan. If you have insurance through a different carrier, you can check your SilverSneakers eligibility by visiting the ${ silverSneakersLink }, or call <a href="tel:1-888-423-4632">1-888-423-4632</a> (TTY: 711) Monday through Friday, 8 a.m. to 8 p.m. ET.`;
                            } else {
                                answer = 'ERROR: PLAN IS NEITHER MADICARE NOR SNP';
                            }
                            break;
                        case 'Active & Fit Direct':
                            if (['commercial', 'medicaid', 'chc'].includes(eligibilityType)) {
                                answer = `Your coverage is not active, so you don't currently have access to Active&Fit Direct through your UPMC Health Plan coverage.`;
                            } else {
                                answer = 'ERROR: PLAN IS NOT COMMERCIAL/MEDICAID/CHC';
                            }
                            break;
                    }
                } else {
                    answer = 'ERROR: PLAN STATUS IS NOT TERMED'
                }
                break;
            case 'other':
                if (['chip', 'wellness', 'non medical', 'dentalvision'].includes(eligibilityType)) {
                    answer = `You are not currently eligible for any gym membership discounts through UPMC Health Plan.`;
                } else {
                    answer = 'ERROR: PLAN IS NOT CHIP/WELLNESS/NON MEDICAL/DENTALVISION';
                }
                break;
        }

        return { answer, followUpQuestion }
    }
}

export const builder = new GymMembershipsAnswerBuilder();
