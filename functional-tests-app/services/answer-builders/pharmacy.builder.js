import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class PharmacyAnswerBuilder {
    
    async pharmacyAnswer (userData, expectedAnswerType, answerSubtype) {
        
        let answer = `Here is your pharmacy processing information. BIN: 003858`;
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        let hasRx;
        let planType
        let isMarketplace;
        let eligibilities = [];
        userData.eligibility.forEach(data => {
            let eligibilityPlan
            const activePlan = data.eligibilities.filter(eligibilities => eligibilities.eligibilityStatus.toLowerCase() === 'active');
            if (activePlan.length === 1) {
                eligibilityPlan = activePlan[0];
            } else {
                eligibilityPlan = data.eligibilities[0];
            }
            eligibilities.push(eligibilityPlan);
        })
            
        if (eligibilities.length > 1) {
            eligibilities.forEach(eligibility => {
                if (eligibility.eligibilityTypeDescription.toLowerCase() != 'dentalvision') {
                    planType = eligibility.eligibilityTypeDescription;
                    hasRx = eligibility.hasRx;
                    isMarketplace = eligibility.corpId.toLowerCase() === 'exch' || eligibility.corpId.toLowerCase() === 'oexc' ? true : false;      
                } 
            })
        } else {
            planType = eligibilities[0].eligibilityTypeDescription;
            hasRx = eligibilities[0].hasRx;
            isMarketplace = eligibilities[0].corpId.toLowerCase() === 'exch' || eligibilities[0].corpId.toLowerCase() === 'oexc' ? true : false; 
        }

        switch (expectedAnswerType) {
            case 'pmdc': //Commercial (when hasRX: true), CHIP, and Individual/Marketplace
                switch (answerSubtype) {
                    case 'commercial':
                        if (hasRx && planType.toLowerCase() === 'commercial') {
                            answer = answer + ' PCN: A4 Rx Group: PMDC';
                        } else {
                            answer = 'ERROR: TYPE IS NOT COMMERCIAL'
                        }
                        break;
                    case 'chip':
                        if (hasRx && planType.toLowerCase() === 'chip') {
                            answer = answer + ' PCN: A4 Rx Group: PMDC';
                        } else {
                            answer = 'ERROR: TYPE IS NOT CHIP'
                        }
                        break;
                    case 'marketplace':
                        if (hasRx && isMarketplace) {
                            answer = answer + ' PCN: A4 Rx Group: PMDC';
                        } else {
                            answer = 'ERROR: TYPE IS NOT MARKETPLACE'
                        }
                        break;
                }
                break;
            case 'pmda': //Medicare (when hasRX: true) and SNP
                switch (answerSubtype) {
                    case 'medicare':
                        if (hasRx && planType.toLowerCase() === 'medicare') {
                            answer = answer + ' PCN: MD Rx Group: PMDA';
                        } else {
                            answer = 'ERROR: TYPE IS NOT MEDICARE'
                        }
                        break;
                    case 'snp':
                        if (hasRx && planType.toLowerCase() === 'snp') {
                            answer = answer + ' PCN: MD Rx Group: PMDA';
                        } else {
                            answer = 'ERROR: TYPE IS NOT SNP'
                        }
                        break;
                }
                break;
            case 'pmde': //Medicare (when hasRX: false)
                if (!hasRx && planType.toLowerCase() === 'medicare') {
                    answer = answer + ' PCN: A4 Rx Group: PMDE';
                } else {
                    answer = 'ERROR: TYPE IS NOT MEDICARE'
                }
                break;
            case 'pmdm': //CHC and Medicaid
            switch (answerSubtype) {
                case 'chc':
                    if (hasRx && planType.toLowerCase() === 'chc') {
                        answer = answer + ' PCN: A4 Rx Group: PMDM';
                    } else {
                        answer = 'ERROR: TYPE IS NOT CHC'
                    }
                    break;
                case 'medicaid':
                    if (hasRx && planType.toLowerCase() === 'medicaid') {
                        answer = answer + ' PCN: A4 Rx Group: PMDM';
                    } else {
                        answer = 'ERROR: TYPE IS NOT MEDICAID'
                    }
                    break;
            }
            break;
            case 'other': //Any LOB other than Medicare when hasRx: false
                if (!hasRx && planType.toLowerCase() != 'medicare') {
                    answer = 'Your pharmacy benefits are not administered by UPMC Health Plan. Please contact your pharmacy benefit administrator for more information.';
                } else {
                    answer = 'ERROR: TYPE IS WRONG'
                }
                break;
        }

        return { answer, followUpQuestion };
    }
}

export const builder = new PharmacyAnswerBuilder();