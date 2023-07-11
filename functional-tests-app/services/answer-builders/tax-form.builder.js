import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class TaxFormAnswerBuilder {
    
    async taxFormAnswer (userData, expectedAnswerType) {

        let answer;
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        const fileData = userData.taxForm.fileData;
        const currentYear = new Date().getFullYear();
        const previousYear = currentYear - 1;
        const activePlan = userData.eligibility[0].eligibilities.filter(eligibilities => eligibilities.eligibilityStatus.toLowerCase() === 'active');
        const eligibilityPlan = activePlan.length === 1 ? activePlan[0] : userData.eligibility[0].eligibilities[0];
        const eligibilityType = eligibilityPlan.eligibilityTypeDescription.toLowerCase();
        const memberId = userData.consumerProfile.medicalMemberId || userData.consumerProfile.dentalVisionMemberId;
        const isPolicyHolder = memberId.slice(-2) === '01';
        const corpId = eligibilityPlan.corpId;

        switch (expectedAnswerType) {
            case 'holder-1095B': 
                if (isPolicyHolder && (['OEXC', 'S036', 'F275'].includes(corpId) || (eligibilityType === 'commercial' && !eligibilityPlan.isAso))) {        
                    if (userData.taxForm.status === 200 && userData.taxForm.fileData) {
                        answer = `You can download your **1095-B** form below.`;
                    } else {
                        answer = `**1095-B** Forms for ${ previousYear } will be available on MyHealth Online by 1/31/${ currentYear }. Once it's ready, you can locate your 1095-B in [Forms and Guides](#/main/content/commonly-used-forms).`;
                    }
                } else {
                    answer = `ERROR: USER IS NOT POLICY HOLDER`;
                }
                break;
            case 'dependent-1095B': 
                if (!isPolicyHolder && (['OEXC', 'S036', 'F275'].includes(corpId) || (eligibilityType === 'commercial' && !eligibilityPlan.isAso))) {
                    answer = `**1095-B** Forms are only available to policy holders.`;
                } else {
                    answer = `ERROR: USER IS NOT DEPENDENT`;
                }
                break;
            case 'holder-1095C':
                if (isPolicyHolder && corpId === 'U135') {
                    answer = `Your **1095-C** Form will be available on HR Direct under Benefits > Document Records by early March.`;
                } else {
                    answer = `ERROR: USER IS NOT POLICY HOLDER`;
                }
                break;
            case 'dependent-1095C':
                if (!isPolicyHolder && corpId === 'U135') {
                    answer = `**1095-C** Forms are only available to policy holders.`;
                } else {
                    answer = `ERROR: USER IS NOT DEPENDENT`;
                }
                break;
            case 'onexchange 1095A':
                if (corpId === 'EXCH') {
                    answer = `Your **1095-A** Form will be available by 1/31/${ currentYear }. You can find the form by visiting <a href="https://pennie.com/" target="_blank">Pennie</a>.`;
                } else {
                    answer = `ERROR: USER IS NOT DEPENDENT`;
                }
                break;
            case 'other':
                if (!(['OEXC', 'S036', 'F275', 'U135', 'EXCH'].includes(corpId) || (eligibilityType === 'commercial' && !eligibilityPlan.isAso))
                || !corpId === 'U135') {
                    answer = `With your type of coverage, you will not receive a **1095** form from UPMC Health Plan.`;
                } else {
                    answer = `ERROR: USER APPLIES TO 1095B OR 1095C CASE`;
                }
                break;
        }

        return { answer, followUpQuestion, fileData }
    }
}

export const builder = new TaxFormAnswerBuilder();
