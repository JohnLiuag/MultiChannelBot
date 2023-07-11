import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class FormsAnswerBuilder {

    async formsAnswer (userData, formType, expectedAnswerType) {
        
        let answer;
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        const profile = userData.consumerProfile;
        const fluTypesArray = ['chip', 'medicare', 'snp', 'medicaid', 'commercial'];
        const rdrTypesArray = ['chip', 'medicare', 'snp', 'medicaid', 'commercial', 'dentalvision'];
        const corpIdsArray = ['A809', 'C005', 'C093', 'E151', 'H050', 'P049', 'R503', 'U035', 'H612', 'W135'];
        let eligibilityType = profile.eligibilityType.toLowerCase();
        const memberStatus = profile.memberStatus || profile.dvMemberStatus;
        const eligibilityStatus = memberStatus.toLowerCase();
        const corpCode = profile.corpCode ? profile.corpCode.toLowerCase() : '';
        const hasVisionCareClaimForm = profile.hasVisionCare;
        const hasVisionAdvantageForm = profile.hasVisionAdvantage;
        const hasDentalForm = profile.dvPartitionRiderTypes.includes('DE') && (profile.dentalVisionPlanType && ['A','N', 'E'].includes(profile.dentalVisionPlanType)) ? true : false;
        let hasCovidForm;
        let hasOutOfNetworkForm;

        const fluRdrFormsNegativeAnswer = 'The requested form is not available. Would you like to chat with a concierge for more information?';
        const negativeAnswer = 'The requested form is not available. Type **“help”** to chat with a concierge.';
        const formsLinks = {
            flu: '#/main/content/assessment-landing?contentId=e84c7e09-450d-47bd-a8dc-21d5c61d3fa9',
            rdr: '#/main/content/common-assessment-landing-form?formId=prd',
            dental: '#/main/content/assessment-landing?contentId=e9e32c07-fe66-40a1-bebc-ff9fd5d01a09',
            vision: '#/main/content/assessment-landing?contentId=a770c303-b62f-4c98-b7e4-5c4eb6f0f3ce',
            general: '#/main/content/commonly-used-forms',
            covid: '#/main/content/assessment-landing?contentId=3d35a762-605a-41c4-9fd5-cb7434460e9f',
            oon: ''
        }

        userData.forms.contents.forEach(element => {
            for (const section in element.value) {
                if (element.value[section].includes('Out-of-Network Care Claim Form')) {
                    formsLinks.oon = element.value[section].match(/#.+Id=\S+\b/g);
                    hasOutOfNetworkForm = true
                }
                if (element.value[section].includes(formsLinks.covid)) {
                    hasCovidForm = true
                }
            }
        })
        
        switch(formType) {
            case 'general':
                switch(expectedAnswerType) {
                    case 'non wellness':
                        if (eligibilityType != 'wellness') {
                            answer = `You can find commonly used forms by visiting [Forms and Guides](${ formsLinks.general }).`;
                        } else {
                            answer = 'ERROR: PLAN IS WELLNESS'
                        }
                        break;
                    case 'wellness':
                        if (eligibilityType === 'wellness') {
                            answer = 'I am sorry I am unable to answer this question. Please rephrase your question, or type **“help”** to chat with a live concierge.';
                        } else {
                            answer = 'ERROR: PLAN IS NOT WELLNESS'
                        }
                        break;
                    }
                    break;
            case 'flu':
                switch(expectedAnswerType) {
                    case 'available':
                        if (fluTypesArray.includes(eligibilityType) && !corpIdsArray.includes(corpCode)) {
                            answer = `To fill out Flu Shot Reimbursement Form, you can navigate to [Forms and Guides](${ formsLinks.flu }).`;
                        } else {
                            answer = 'ERROR: THERE IS NO FLU FORM'
                        }
                        break;
                    case 'unavailable':
                        if (!fluTypesArray.includes(eligibilityType) || corpIdsArray.includes(corpCode)) {
                            answer = fluRdrFormsNegativeAnswer;
                        } else {
                            answer = 'ERROR: THERE IS FLU FORM'
                        }
                        break;
                }
                break;
            case 'rdr':
                switch(expectedAnswerType) {
                    case 'available':
                        if (rdrTypesArray.includes(eligibilityType)) {
                            answer = `To fill out HIPAA Designee Form, you can navigate to [Forms and Guides](${ formsLinks.rdr }).`;
                        } else {
                            answer = 'ERROR: THERE IS NO RDR FORM';
                        }
                        break;
                    case 'unavailable':
                        if (!rdrTypesArray.includes(eligibilityType)) {
                            answer = fluRdrFormsNegativeAnswer;
                        } else {
                            answer = 'ERROR: THERE IS RDR FORM';
                        }
                        break;
                }
                break;
            case 'dental':
                switch(expectedAnswerType) {
                    case 'available':
                        if (hasDentalForm) {
                            answer = `To fill out the Out-of-Network Care Dental Advantage Claim Form, you can navigate to [Forms and Guides](${ formsLinks.dental }).`;
                        } else {
                            answer = 'ERROR: DENTAL FORM IS UNAVAILABLE';
                        }
                        break;
                    case 'unavailable':
                        if (!hasDentalForm) {
                            answer = negativeAnswer;
                        } else {
                            answer = 'ERROR: DENTAL FORM IS AVAILABLE';
                        }
                        break;
                }
                break;
            case 'vision':
                switch(expectedAnswerType) {
                    case 'available':
                        if (hasVisionCareClaimForm) {
                            answer = `To fill out the Out-of-Network Vision Care Claim Form, you can navigate to [Forms and Guides](${ formsLinks.vision }).`;
                        } else if (hasVisionAdvantageForm) {
                            answer = `To download the Out-of-Network Vision Advantage Claim Form, you can navigate to [Forms and Guides](${ formsLinks.general}).`
                        } else {
                            answer = 'ERROR: VISION FORM IS UNAVAILABLE';
                        }
                        break;
                    case 'unavailable':
                        if (!hasVisionCareClaimForm && !hasVisionAdvantageForm) {
                            answer = negativeAnswer;
                        } else {
                            answer = 'ERROR: VISION FORM IS AVAILABLE';
                        }
                        break;
                }
                break;
            case 'covid':
                switch(expectedAnswerType) {
                    case 'available':
                        if (hasCovidForm) {
                            answer = `To fill out the COVID-19 Home Test Reimbursement Form, you can navigate to [Forms and Guides](${ formsLinks.covid }) page.`;
                        } else {
                            answer = 'ERROR: COVID FORM IS UNAVAILABLE';
                        }
                        break;
                    case 'unavailable':
                        if (!hasCovidForm) {
                            answer = negativeAnswer;
                        } else {
                            answer = 'ERROR: VISION FORM IS AVAILABLE';
                        }
                        break;
                }
                break;
            case 'oon':
                switch(expectedAnswerType) {
                    case 'available':
                        if (hasOutOfNetworkForm) {
                            answer = `To fill out the Out-of-Network Care Claim Form, you can navigate to [Forms and Guides](${ formsLinks.oon }).`;
                        } else {
                            answer = 'ERROR: OUT OF NETWORK FORM IS UNAVAILABLE';
                        }
                        break;
                    case 'unavailable':
                        if (!hasOutOfNetworkForm) {
                            answer = negativeAnswer;
                        } else {
                            answer = 'ERROR: OUT OF NETWORK FORM IS AVAILABLE';
                        }
                        break;
                }
                break;
        }
        return { answer, followUpQuestion };
    }
}

export const builder = new FormsAnswerBuilder();