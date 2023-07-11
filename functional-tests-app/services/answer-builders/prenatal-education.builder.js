import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class PrenatalEducationAssessmentFormAnswerBuilder {
    
    async prenatalEducationAssessmentFormAnswer (userData, expectedAnswerType) {

        let answer = [];
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        const eligibilityType = userData.consumerProfile.eligibilityType.toLowerCase();

        switch (expectedAnswerType) {
            case 'form':
                if (['commercial', 'chip'].includes(eligibilityType)) {
                    answer[0] = `You may be eligible for reimbursement up to $65 for completing prenatal education courses, including Lamaze, Lamaze Refresher, Breastfeeding, and Prepared Childbirth.`;
                    answer[1] = `[Click here](#/main/content/assessment-landing?contentId=c0c22263-6867-444b-b52f-02899b3b3c6a) to fill out the Prenatal Education Reimbursement Form.`;
                    followUpQuestion = [];
                } else {
                    answer[0] = 'ERROR: PLAN IS NEITHER COMMERCIAL NOR CHIP';
                }
                break;
            case 'other':
                if (!['commercial', 'chip'].includes(eligibilityType)) {
                    answer = `The requested form is not applicable to your plan.`;
                } else {
                    answer[0] = 'ERROR: PLAN IS NOT IN OTHER GROUP';
                }
                break;
        }

        return { answer, followUpQuestion }
    }
}

export const builder = new PrenatalEducationAssessmentFormAnswerBuilder();
