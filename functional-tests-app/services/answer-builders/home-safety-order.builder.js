import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class HomeSafetyOrderAnswerBuilder {

    async homeSafetyOrderAnswer (userData, expectedAnswerType) {

        let answer = [];
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        const memberStatus = userData.consumerProfile.memberStatus || userData.consumerProfile.dvMemberStatus;
        const status = memberStatus.toLowerCase();
        const eligibilityType = userData.consumerProfile.eligibilityType.toLowerCase();
        let hasHomeSafetyForm;

        if (userData.homeSafetyForm) {
            const content = JSON.stringify(userData.homeSafetyForm);
            hasHomeSafetyForm = content.includes('#/main/content/assessment-landing?contentId=6ecc970b-439b-4af8-807e-f427df573a47'); 
        }
        
        switch (expectedAnswerType) {
            case 'medicare':
                if (eligibilityType === 'medicare' && hasHomeSafetyForm && status === 'active') {
                    answer[0] = `You may be eligible for up to three home safety products each year at no additional cost.`;
                    answer[1] = `[Click here](#/main/content/assessment-landing?contentId=6ecc970b-439b-4af8-807e-f427df573a47) to place an order. You can also type **"help"** to chat with a concierge for more information and verify your eligibility.`;
                    followUpQuestion = [];
                } else {
                    answer[0] = 'ERROR: PLAN IS NOT MADICARE/ACTIVE OR NO HOME SAFETY FORM';
                }
                break;
            case 'snp':
                if (eligibilityType === 'snp' && status === 'active') {
                    answer[0] = 'You are eligible for up to six home safety products per year at no additional cost.';
                    answer[1] = 'Please contact your care manager to place an order. You can also type **"help"** to chat with a concierge for more information.'
                    followUpQuestion = [];
                } else {
                    answer[0] = 'ERROR: PLAN IS NOT SNP/ACTIVE';
                }
                break;
            case 'other':
                if (!(['medicare', 'snp'].includes(eligibilityType) && status === 'active') || (eligibilityType === 'medicare' && status === 'active' && !hasHomeSafetyForm)) {
                    answer = `The form you've requested is not applicable to your plan.`;
                } else {
                    answer = 'ERROR: PLAN IS ACTIVE MEDICARE/SNP';
                }
                break;
        }

        return { answer, followUpQuestion }
    }
}

export const builder = new HomeSafetyOrderAnswerBuilder();
