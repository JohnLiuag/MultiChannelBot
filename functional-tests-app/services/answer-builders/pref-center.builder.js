import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class PrefCenterAnswerBuilder {
    
    async prefCenterAnswer (userData, expectedAnswerType, expectedAnswerSubType) {

        let answer;
        let followUpQuestion;
        let finalAnswer;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        const link = `[Preference Center](#/main/content/preference)`;
        const dependentUserAnswer = `However, if you need to update only your address for confidentiality reasons, you can submit a form to request that change. If this is the case, please type **"help"** to chat with a live concierge.`;
        const corpCode = userData.consumerProfile.corpCode.toLowerCase();
        const eligibilityType = userData.consumerProfile.eligibilityType.toLowerCase();
        const memberId = userData.consumerProfile.medicalMemberId || userData.consumerProfile.dentalVisionMemberId;
        const isPolicyHolder = memberId.slice(-2) === '01';
        let buttons;

        switch (expectedAnswerType) {
            case 'email':  
                answer = `You can update your email address by visiting the ${ link }.`;
                break;   
            case 'phone number':
                answer = `You can update your phone number by visiting the ${ link }.`;
                break;
            case 'paperless':
                answer = `You can update your communication preferences and opt in to paperless communications by visiting the ${ link }.`;
                break;
            case 'address':
                answer = [];
                switch (expectedAnswerSubType) {
                    case 'holder-u135':
                        if (isPolicyHolder && corpCode === 'u135') {
                            answer[0] = 'You can change your address by updating it on HR Direct under Personal Info > Contact Info.';
                            answer[1] = 'Your address will be updated with the Health Plan automatically, usually within a few business days.'
                        } else {
                            answer[0] = 'ERROR: USER IS NOT POLICY HOLDER OR CORP CODE IS NOT U135';
                        }
                        break;
                    case 'dependent-u135':
                        if (!isPolicyHolder && corpCode === 'u135') {
                            answer[0] = 'To change the address for everyone on the plan, the policy holder will need to update it through HR Direct.';
                            answer[1] = dependentUserAnswer;
                        } else {
                            answer[0] = 'ERROR: USER IS POLICY HOLDER OR CORP CODE IS NOT U135';
                        }
                        break;
                    case 'holder-commercial/wellness/non-medical/dentalvision':
                        if (isPolicyHolder && ((eligibilityType === 'commercial' && !['u135', 'exch', 'oexc'].includes(corpCode)) || (['wellness', 'non medical', 'dentalvision'].includes(eligibilityType) && corpCode != 'U135'))) {
                            answer[0] = `Because of your plan's specifics, you are unable change your address online. To update this address, please contact your employer.`;
                        } else {
                            answer[0] = 'ERROR: USER IS NOT VALID';
                        }
                        break;
                    case 'dependent-commercial/wellness/non-medical/dentalvision':
                        if (!isPolicyHolder && ((eligibilityType === 'commercial' && !['u135', 'exch', 'oexc'].includes(corpCode)) || (['wellness', 'non medical', 'dentalvision'].includes(eligibilityType) && corpCode != 'U135'))) {
                            answer[0] = `Because of your plan's specifics, you are unable change your address online. To update this address, the policy holder will need to contact their employer.`
                            answer[1] = dependentUserAnswer;
                        } else {
                            answer[0] = 'ERROR: USER IS NOT VALID';
                        }
                        break;
                    case 'holder-on-exchange':
                        if (isPolicyHolder && corpCode === 'exch') {
                            answer[0] = `Because of your plan's specifics, you are unable change your address online.`;
                            answer[1] = `To update this address, please visit <a href=\"https://www.pennie.com\" target=\"_blank\">Pennie</a> or call Pennie at <a href=\"tel:1-844-844-8040\">1-844-844-8040</a>.`;
                        } else {
                            answer[0] = 'ERROR: USER IS NOT POLICY HOLDER OR CORP CODE IS NOT EXCH';
                        }
                        break;
                    case 'dependent-on-exchange':
                        if (!isPolicyHolder && corpCode === 'exch') {
                            answer[0] = `To change the address for everyone on the plan, the policy holder will need to update the address through Pennie.`;
                            answer[1] = dependentUserAnswer;
                        } else {
                            answer[0] = 'ERROR: USER IS POLICY HOLDER OR CORP CODE IS NOT EXCH';
                        }
                        break;
                    case 'holder-off-exchange':
                        if (isPolicyHolder && corpCode === 'oexc') {
                            answer[0] = `To update your address, please complete and submit this secure <a href=\"https://www.upmchealthplan.com/Off_Marketplace_Address_Verification.html\" target=\"_blank\">contact form</a>, or type **"help"** to chat with a live concierge.`
                        } else {
                            answer[0] = 'ERROR: USER IS NOT POLICY HOLDER OR CORP CODE IS NOT OEXC';
                        }
                        break;
                    case 'dependent-off-exchange':
                        if (!isPolicyHolder && corpCode === 'oexc') {
                            answer[0] = `To change the address for everyone on the plan, the policy holder can contact the Health Plan.`;
                            answer[1] = dependentUserAnswer;
                        } else {
                            answer[0] = 'ERROR: USER IS POLICY HOLDER OR CORP CODE IS NOT OEXC';
                        }
                        break;
                    case 'chip/medicare/snp':
                        if (['chip', 'medicare', 'snp'].includes(eligibilityType)) {
                            answer[0] = `You can update your address by contacting your county assistance office, or by chatting with a live concierge. Please type **"help"** if you would like to chat with a live concierge.`;
                        } else {
                            answer[0] = 'ERROR: PLAN IS NON OF CHIP/MEDICARE/SNP';
                        }
                        break;
                    case 'chc/medicaid':
                        if (['chc', 'medicaid'].includes(eligibilityType)) {
                            answer[0] = `Because of your plan's specifics, you are unable change your address online. To update your address, please contact your county assistance office.`;
                        } else {
                            answer[0] = 'ERROR: PLAN IS NON OF CHC/MEDICAID';
                        }
                        break;
                }
            break;
            case 'preferred name':
                const firstBubble = `I'd be happy to help you with that! Your preferred name will be viewable to UPMC Health Plan's Member Services team but may not be available to all Health Plan departments.`;
                finalAnswer = 'Thank you for providing that information!';
                switch (expectedAnswerSubType) {
                    case 'commercial/wellness/dentalvision':
                        if ((eligibilityType === 'commercial' && !['OEXC', 'exch'].includes(corpCode)) || ['wellness', 'dentalvision'].includes(eligibilityType)) {
                            answer[0] = firstBubble;
                            answer[1] = 'Please note that your name on record can only be edited by contacting your employer.';
                            answer[2] = `What is your preferred name?`;
                            followUpQuestion = [];
                        } else {
                            answer[0] = `ERROR: PLAN IS NOT COMMERCIAL WITH CORP ID != ANY OF ['OEXC', 'EXCH'] OR NOT WELLNESS ONLY OR NOT DV ONLY`;
                        }
                        break;
                    case 'commercial on-exchnage':
                        if (eligibilityType === 'commercial' && corpCode === 'exch') {
                            answer[0] = firstBubble;
                            answer[1] = `Please note that your name on record can only be edited by visiting <a href=\"https://www.pennie.com\" target=\"_blank\">Pennie</a> or by calling Pennie at <a href=\"tel:1-844-844-8040\">1-844-844-8040</a>.`;
                            answer[2] = `What is your preferred name?`;
                            followUpQuestion = [];
                        } else {
                            answer[0] = `ERROR: PLAN IS NOT EXCH COMMERCIAL`;
                        }
                        break
                    }
                    case 'commercial off-exchnage':
                        if (eligibilityType === 'commercial' && corpCode === 'oexc') {
                            answer[0] = firstBubble;
                            answer[1] = `Please note that your name on record can be edited by completing and submitting this secure <a href=\"https://www.upmchealthplan.com/marketplace_Documentation.html\" target=\"_blank\">contact form</a>, or  by contacting UPMC Health Plan toll free at <a href=\"tel:1-855-489-3494\">1-855-489-3494</a>.`;
                            answer[2] = `What is your preferred name?`;
                            followUpQuestion = [];
                        } else {
                            answer[0] = `ERROR: PLAN IS NOT OEXC COMMERCIAL`;
                        }
                        break
                    case 'medicare/snp':
                        if (['medicare', 'snp'].includes(eligibilityType)) {
                            answer[0] = firstBubble;
                            answer[1] = `Please note that your name on record can only be edited by contacting <a href=\"https://www.ssa.gov\" target=\"_blank\">Social Security Administration</a>.`;
                            answer[2] = `What is your preferred name?`;
                            followUpQuestion = [];
                        } else {
                            answer[0] = `ERROR: PLAN IS NOT MEDICARE OR SNP`;
                        }
                        break
                    case 'medicaid/chc':
                        if (['medicaid', 'chc'].includes(eligibilityType)) {
                            answer[0] = firstBubble;
                            answer[1] = `Please note that your name on record can only be edited by contacting the County Assistance Office.`;
                            answer[2] = `What is your preferred name?`;
                            followUpQuestion = [];
                        } else {
                            answer[0] = `ERROR: PLAN IS NOT MEDICAID OR CHC`;
                        }
                        break
                    case 'chip':
                        if (eligibilityType === 'chip') {
                            answer[0] = firstBubble;
                            answer[1] = `Please note that your name on record can be edited by contacting your County Assistance Office or a live Member Service Concierge. Contact UPMC Health Plan toll free at <a href=\"tel:1-800-650-8762\">1-800-650-8762</a>.`;
                            answer[2] = `What is your preferred name?`;
                            followUpQuestion = [];
                        } else {
                            answer[0] = `ERROR: PLAN IS NOT MEDICAID OR CHC`;
                        }
                        break
                break;
            case 'preferred pronouns':
                buttons = ['Choose not to disclose', 'Not Listed', 'They/Them', 'He/Him', 'She/Her'];
                answer = {
                    chipFirstAnswer: [
                        `I'd be happy to help you with updating your child's pronouns!`,
                        `Please choose one of the options below, or type "cancel" if you would prefer not to provide this information at this time.`
                    ],
                    otherFirstAnswer: [
                        `I'd be happy to help you with that!`,
                        `Please choose one of the options below, or type **"cancel"** if you would prefer not to provide this information at this time.`
                    ],
                    notListedAnswer: `Please provide your preferred pronouns now, or type **"cancel"** if you would prefer not to provide this information at this time.`,
                    chipFinalAnswer: [
                        `Thank you for providing that information!`,
                        `Providing the information above is voluntary.  UPMC Health Plan has controls around physical and electronic access to Protected and Personal Health Information to protect your child's privacy. They include policies, rules, and technical measures. UPMC Health Plan will never use the personal information provided above for underwriting. Your child's personal information will not be used to deny your child treatment, services, coverage, or benefits.  From time to time, UPMC Health Plan may share this personal information to help provide the best care for your child.  It might also be shared for routine activities, such as: * To better communicate with you and your child. * Arranging for health care for you and your covered family members. * Making payments to doctors, hospitals, and other health care providers for your child's care. * Performing certain health care operations including quality initiatives.`
                    ],
                    otherFinalAnswer: [
                        `Thank you for providing that information!`,
                        `Providing the information above is voluntary.  UPMC Health Plan has controls around physical and electronic access to Protected and Personal Health Information to protect your privacy. They include policies, rules, and technical measures. UPMC Health Plan will never use the personal information provided above for underwriting. Your personal information will not be used to deny you treatment, services, coverage, or benefits.  From time to time, UPMC Health Plan may share this personal information to help provide the best care for you.  It might also be shared for routine activities, such as: * To better communicate with you. * Arranging for health care for you and your covered family members. * Making payments to doctors, hospitals, and other health care providers for your care. * Performing certain health care operations including quality initiatives.`
                    ]
                };
                break;
        }

        return { answer, finalAnswer, followUpQuestion, buttons }     
    }
}

export const builder = new PrefCenterAnswerBuilder();
