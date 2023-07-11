import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class PromptsAnswerBuilder {
    
    async promptsAnswer (userData, introMessageType, selectedScope) {
        
        const FIRST_MESSAGE_ID = '0000003'; //Hardcoded first message id.
        
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        let answers = {
            answer: `Hello ${userData.consumerProfile.firstName}, welcome to UPMC Health Plan. I’m your Virtual Concierge. What would you like help with? You can choose an option below or type a message in the chat.`,
            subPromptAnswer: '',
            restartedMenuAnswer: 'You can choose an option below or type a message in the chat.',//TODO put coma before 'or type a message in the chat.'
            firstFollowUpQuestion: 'Great! Which topic would you like to learn more about?',
            idCardsFollowUpQuestion: 'Great! Which ID card would you like to see?',
            secondFollowUpQuestion: followUpQuestion
        };
        let promptButtons = [];

        let subPromptButtons = {
            coverageStatus: [],
            medicalCoverage: [],
            idCards: [],
            spendingAccounts: [],
            healthCoaching: ['Lifestyle Health (General)', 'Behavioral Health (General)', 'Physical Health (General)', 'Weight Management', 'Anxiety', 'Diabetes', 'Nutrition', 'Depression', 'Heart Health', 'Physical Activity', 'Substance Abuse', 'Breathing', 'Stress', 'ADHD', 'Low Back Pain', 'Tobacco Cessation', 'Grief', 'Oncology', 'Pain Management'],
            pregnancySupport: ['Maternity program overview', 'Finding a maternity provider', 'Discomforts of pregnancy', 'When to call my doctor', 'Prenatal classes', 'Depression', 'Pregnancy-related concerns', 'Post-pregnancy related concerns', 'Questions about my baby', 'Breast-feeding and bottle-feeding', 'A topic not listed here'],
        };

        const activePlan = userData.eligibility[0].eligibilities.filter(eligibilities => eligibilities.eligibilityStatus.toLowerCase() === 'active');
        let eligibilityPlan;
        if (activePlan.length === 1) {
            eligibilityPlan = activePlan[0];
        } else {
            eligibilityPlan = userData.eligibility[0].eligibilities[0];
        }
        const pbpCode = eligibilityPlan.currentContractNumber + '-' + eligibilityPlan.currentPBPIdentifier;
        const memberStatus = userData.consumerProfile.memberStatus || userData.consumerProfile.dvMemberStatus;
        const eligibilityStatus = memberStatus.toLowerCase();
        const planCode = userData.consumerProfile.planCode;
        const eligibilityTypes = ['chc', 'chip', 'commercial', 'medicaid', 'medicare', 'snp'];
        const pregnancySupportEligibilityTypes = ['chip', 'medicaid', 'medicare', 'snp', 'commercial'];
        const healthCoachingEligibilityTypes = ['chc', 'medicare', 'wellness', 'snp', 'commercial'];
        const eligibilityType = userData.consumerProfile.eligibilityType.toLowerCase();
        const hasMedical = userData.consumerProfile.hasMedicalInsurance || eligibilityTypes.includes(eligibilityType) || (eligibilityType === 'non medical' && planCode != '0FS');
        const hasDental = userData.consumerProfile.hasDentalAdvantage || userData.consumerProfile.planType === "I";
        const hasVision = userData.consumerProfile.hasVision || userData.consumerProfile.hasVisionAdvantage || userData.consumerProfile.hasVisionCare;
        const hasWellness = userData.consumerProfile.hasWellness;
        const isNonMedical = userData.consumerProfile.eligibilityType.toLowerCase() === 'non medical' ? true : false;
        const hasAssistAmerica = !['chc', 'chip', 'medicaid', 'non medical', 'wellness'].includes(eligibilityType) && !['T', 'Q'].includes(userData.consumerProfile.planType);
        const hasDentalDiscount = ['VCDD', 'DDEA'].some(type => userData.consumerProfile.medicalPartitionRiderCodes.includes(type));
        const hasFlexSpendCard = ['H3907-002', 'H3907-046', 'H3907-050', 'H3907-052', 'H3907-037', 'H3907-049', 'H3907-029', 'H5533-011', 'H5533-009', 'H5533-012', 'H5533-013', 'H5533-014', 'H3907-006', 'H5533-003', 'H5533-005', 'H5533-008', 'H3907-802', 'H5533-801', 'H5533-802'].includes(pbpCode);
        const hasShopHealthyCard = ['H4279-001', 'H4279-004', 'H7123-001'].includes(pbpCode);

        let hasHRA;
        let hasHSA;
        let hasHIA;
        let hasFSA;
        let hasTRN;
        let hasDCA;
        let hasPKG;
        
        if (userData.spendingAccounts) {
            userData.spendingAccounts.forEach(key => {
                key.accountType.id === 1 && key.accountType.type.toLowerCase() === 'hra' ? hasHRA = true : '';
                key.accountType.id === 2 && key.accountType.type.toLowerCase() === 'hsa' ? hasHSA = true : '';
                key.accountType.id === 3 && key.accountType.type.toLowerCase() === 'hia' ? hasHIA = true : '';
                key.accountType.id === 4 && key.accountType.type.toLowerCase() === 'fsa' ? hasFSA = true : '';
                key.accountType.id === 5 && key.accountType.type.toLowerCase() === 'trn' ? hasTRN = true : '';
                key.accountType.id === 6 && key.accountType.type.toLowerCase() === 'dca' ? hasDCA = true : '';
                key.accountType.id === 7 && key.accountType.type.toLowerCase() === 'pkg' ? hasPKG = true : '';
            });
        }
        
        switch (introMessageType) {
            case 'common':
                if (!hasWellness || (!isNonMedical && planCode != '0FS')) {
                    eligibilityTypes.includes(eligibilityType) || (eligibilityType === 'non medical' && planCode != '0FS') ? promptButtons.push('Medical Coverage') : '';
                    hasMedical || hasDental || hasVision ? promptButtons.push('Coverage Status') : '';
                    eligibilityStatus === 'active' && userData.idCardsInfo.length != 0 ? promptButtons.push('ID Cards') : '';
                    hasHRA || hasHSA || hasHIA || hasFSA || hasTRN || hasDCA || hasPKG || hasFlexSpendCard || hasShopHealthyCard ? promptButtons.push('Spending Accounts') : '';
                    (pregnancySupportEligibilityTypes.includes(eligibilityType) && planCode != 'R503') || planCode === 'U135' ? promptButtons.push('Pregnancy Support') : '';
                    (healthCoachingEligibilityTypes.includes(eligibilityType) && !['P924', 'R503'].includes(planCode)) || planCode === 'U135' ? promptButtons.push('Health Coaching') : '';
                } else {
                    answers.answer = 'ERROR: PLAN IS WELLNESS OF NON MEDICAL'
                }   
                break;
            case 'special': //For Wellness & Non Medical case
                if (hasWellness || (isNonMedical && planCode === '0FS')) {
                    //answers.answer = answers.answer[1].replace(' You can choose an option below or type a message in the chat.', '');
                    answers.answer = answers.answer.replace(' You can choose an option below or type a message in the chat.', '');
                } else {
                    answers.answer = 'ERROR: PLAN IS NOT WELLNESS OF NON MEDICAL'
                }
                break;
        }

        switch (selectedScope) {
            case 'coverage status':
                hasMedical ? subPromptButtons.coverageStatus.push('Medical') : '';
                hasDental ? subPromptButtons.coverageStatus.push('Dental') : '';
                hasVision ? subPromptButtons.coverageStatus.push('Vision') : '';
                break;
            case 'medical coverage':
                if (eligibilityTypes.includes(eligibilityType) || (eligibilityType === 'non medical' && planCode === '0FS')) {
                    subPromptButtons.medicalCoverage.push('Coinsurance', 'Deductible', 'Out of Pocket Max');
                }
                break;
            case 'idCards':
                if (eligibilityStatus === 'active') {
                    userData.idCardsInfo.forEach(card => {
                        card.idCardType.id === 0 ? subPromptButtons.idCards.push('Medical') : '';
                        card.idCardType.id === 1 ? subPromptButtons.idCards.push('Dental') : '';
                        card.idCardType.id === 2 ? subPromptButtons.idCards.push('Vision') : '';
                        card.idCardType.id === 3 ? subPromptButtons.idCards.push('Assist America') : '';
                        card.idCardType.id === 4 ? subPromptButtons.idCards.push('Value Added Plan') : '';
                    })
                } else {
                    subPromptButtons.idCards.push('ERROR: PLAN IS NO ACTIVE. NO ID CARDS SHOULD BE SHOWN')
                }
                break;
            case 'spending accounts':
                hasHRA ? subPromptButtons.spendingAccounts.push('HRA') : '';
                hasHSA ? subPromptButtons.spendingAccounts.push('HSA') : '';
                hasHIA ? subPromptButtons.spendingAccounts.push('HIA') : '';
                hasFSA ? subPromptButtons.spendingAccounts.push('FSA') : '';
                hasTRN ? subPromptButtons.spendingAccounts.push('TRN') : '';
                hasDCA ? subPromptButtons.spendingAccounts.push('DCA') : '';
                hasPKG ? subPromptButtons.spendingAccounts.push('PKG') : '';
                hasFlexSpendCard ? subPromptButtons.spendingAccounts.push('Flex Spend Card') : '';
                hasShopHealthyCard ? subPromptButtons.spendingAccounts.push('Shop Healthy Card ') : '';
                break;
            case 'health coaching':
                
                break;
        }

        return { answers, promptButtons, subPromptButtons, FIRST_MESSAGE_ID }
    }
}

export const builder = new PromptsAnswerBuilder();
