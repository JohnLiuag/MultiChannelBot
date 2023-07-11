import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class CAndGAnswerBuilder {
    
    async cAndGAnswer (userData, expectedAnswerType) {

        let answer = [];
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        const eligibility = userData.eligibility[0].eligibilities[0];
        const eligibilityType = eligibility.eligibilityTypeDescription.toLowerCase();
        const corpId = eligibility.corpId;
        const isAso = !eligibility.hasOwnProperty('isAso') || eligibility.isAso ? true : false;
        const link = `[Appeal or Grievance Submission Form](#/main/content/assessment-landing?contentId=28783f65-1dcb-40a0-93f8-25b11526b6cc&type=cg_adverse)`;
        const link2 = `[Complaint or Grievance Submission Form](#/main/content/assessment-landing?contentId=28783f65-1dcb-40a0-93f8-25b11526b6cc&type=cg_adverse)`;
        const contactUsLink = `(#/main/content/contact-us)`;

        switch (expectedAnswerType) {
            case 'medicare/snp':
                if (['medicare', 'snp'].includes(eligibilityType)) {
                    answer[0] = `You can file an **appeal or grievance** online by using the link below.`;
                    answer[1] = link;
                    answer[2] = `**If this is an urgent or expedited appeal or grievance request, please call Member Services so we can assist you. [Click here]${ contactUsLink } for the phone number.**`;
                    followUpQuestion = [];
                } else {
                    answer[0] = 'ERROR: PLAN IS NEITHER MADICARE NOR SNP';
                }
                break;
            case 'cm fi':
                if (eligibilityType === 'commercial' && (!isAso || corpId === 'SC77')) {
                    answer[0] = `You can file a **complaint, grievance, or appeal** online by using the link below.`;
                    answer[1] = link;
                    answer[2] = `**If this is an urgent or expedited appeal or grievance request, please call Member Services so we can assist you. [Click here]${ contactUsLink } for the phone number.**`
                    followUpQuestion = [];
                } else {
                    answer[0] = 'ERROR: PLAN IS NOT COMMERCIAL FI';
                }
                break;
            case 'cm aso':
                if (eligibilityType === 'commercial' && isAso && corpId != 'SC77') {
                    answer[0] = `You can file an **appeal for adverse benefit determination** online by using the link below.`;
                    answer[1] = link;
                    answer[2] = `**If this is an urgent or expedited request, please call Member Services so we can assist you. [Click here]${ contactUsLink } for the phone number.**`
                    followUpQuestion = [];
                } else {
                    answer[0] = 'ERROR: PLAN IS NOT COMMERCIAL ASO';
                }
                break;
            case 'medicaid/chc/chip':
                if (['medicaid', 'chc', 'chip'].includes(eligibilityType)) {
                    answer[0] = `You can file a **complaint or grievance** online by using the link below.`;
                    answer[1] = link2;
                    answer[2] = `**If this is an urgent or expedited complaint or grievance request, please call Member Services so we can assist you. [Click here]${ contactUsLink } for the phone number.**`;
                    followUpQuestion = [];
                } else {
                    answer[0] = 'ERROR: PLAN IS IN OTHER GROUP';
                }
                break;
            case 'other':
                if (['wellness', 'non medical', 'dentalvision'].includes(eligibilityType)) {
                    answer[0] = `You can't file a complaint or appeal online yet, but that feature will be coming soon! In the meantime, you can call the Health Care Concierge team using the number on your ID card or start a live chat for further assistance.`;
                    answer[1] = `Please type **"help"** to chat with a live concierge, or [click here]${ contactUsLink } for the phone number.`;
                    followUpQuestion = [];
                } else {
                    answer[0] = 'ERROR: PLAN IS IN OTHER GROUP';
                }
                break;
        }

        return { answer, followUpQuestion }
    }
}

export const builder = new CAndGAnswerBuilder();
