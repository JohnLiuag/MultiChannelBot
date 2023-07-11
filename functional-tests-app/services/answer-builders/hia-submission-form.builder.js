import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class HiaSubmissionFormAnswerBuilder {
    
    async hiaSubmissionFormAnswer (userData, expectedAnswerType) {

        let answer = [];
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        const activePlan = userData.eligibility[0].eligibilities.filter(eligibilities => eligibilities.eligibilityStatus.toLowerCase() === 'active');
        const eligibilityPlan = activePlan.length === 1 ? activePlan[0] : userData.eligibility[0].eligibilities[0];
        const eligibilityType = eligibilityPlan.eligibilityTypeDescription.toLowerCase();
        const corpId = eligibilityPlan.corpId;
        const hasHia = eligibilityPlan.incentiveTypeDescription && eligibilityPlan.incentiveTypeDescription === 'HIA';
    
        switch (expectedAnswerType) {
            case 'hia form':
                if (eligibilityType === 'commercial' && hasHia && corpId != 'U249') {
                    answer[0] = `You can submit the Health Incentive Account Submission Form to request credit for healthy activities that you've completed, such as a dental exam, vision exam, or flu shot (if not received at your doctor's office).`;
                    answer[1] = `[Click here](#/main/content/assessment-landing?contentId=cd6bc907-ea2d-43ff-83ce-c68f8c42cbc8) to fill out the Health Incentive Account Submission Form.`;
                    followUpQuestion = [];
                } else {
                    answer[0] = 'ERROR: PLAN IS NOT COMMERCIAL OR hasHIA: false OR corpId: U249';
                }
                break;
            case 'hia pdf form':
                if (eligibilityType === 'commercial' && corpId === 'U249') {
                    let pdfFileLink;
                    userData.forms.contents.forEach(element => {
                        for (const section in element.value) {
                            if (element.value[section].includes('Incentive Submission Form')) {
                                pdfFileLink = `<a href="${ element.value[section].match(/https:\/\/.+\.pdf/g) }" target="_blank">Incentive Submission Form</a>`;
                            }
                            
                        }
                    })
                    answer[0] = `You can submit the Health Incentive Account Submission Form to request credit for healthy activities that you've completed, such as a dental exam, vision exam, or flu shot (if not received at your doctor's office).`;
                    answer[1] = `Click below to open the Health Incentive Account Submission Form.`;
                    answer[2] = pdfFileLink;
                    followUpQuestion = [];
                } else {
                    answer[0] = 'ERROR: PLAN IS NOT COMMERCIAL OR CORP ID NOT U249';
                }
                break;
            case 'other':
                if (!(eligibilityType === 'commercial' && corpId === 'U249') && !(eligibilityType === 'commercial' && hasHia && corpId != 'U249')) {
                    //answer = '';
                    answer = `The form you've requested is not applicable to your plan.`;
                } else {
                    answer = 'ERROR: PLAN IS NOT IN OTHER GROUP';
                }
                break;
        }

        return { answer, followUpQuestion }
    }
}

export const builder = new HiaSubmissionFormAnswerBuilder();
