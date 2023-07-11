import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class OtcAnswerBuilder {

    async otcAnswer (userData, planStatus, expectedAnswerType) {

        let answer;
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        const memberStatus = userData.consumerProfile.memberStatus || userData.consumerProfile.dvMemberStatus;
        const status = memberStatus.toLowerCase();
        const eligibilityType = userData.consumerProfile.eligibilityType.toLowerCase();
        let snpBaseAnswer = `You can order Over-the-Counter (OTC) items online by visiting [UPMC for Life Complete Care HMO SNP Shop Healthy Card](#/main/content/spending-accounts) and clicking the link to the UPMC for Life OTC page.`;
        let medicareBaseAnswer = `You can order Over-the-Counter (OTC) items online by visiting [UPMC for Life Flex Spend Card](#/main/content/spending-accounts) and clicking the link to the UPMC for Life OTC page.`;
        const medicareCatalogMessage = `You can also view the OTC Catalog by clicking the link below. <a href="https://websolutionscdn.blob.core.windows.net/mhol/Speningaccount/2023_UPMC_Member_Catalog_Final.pdf" target="_blank">UPMC for Life Flex Spend Card Catalog</a>`;
        const snpCatalogMessage = `You can also view the OTC Catalog by clicking the link below. <a href="https://websolutionscdn.blob.core.windows.net/mhol/Speningaccount/2023_UPMC_Shop_Healthy_Member_Catalog.pdf" target="_blank">UPMC for Life Shop Healthy Card Catalog</a>`;
                                                                                                                                          

        switch (planStatus) {
            case 'active':
                answer = [];
                if (status === 'active') {
                    switch (expectedAnswerType) {
                        case 'snp':
                            if (eligibilityType === 'snp') {
                                answer[0] = snpBaseAnswer;
                                answer[1] = snpCatalogMessage;
                                followUpQuestion = [];
                            } else {
                                answer[0] = 'ERROR: PLAN IS NOT SNP';
                            }
                            break;
                        case 'medicare':
                            if (eligibilityType === 'medicare') {
                                answer[0] = medicareBaseAnswer;
                                answer[1] = medicareCatalogMessage;
                                followUpQuestion = [];
                            } else {
                                answer[0] = 'ERROR: PLAN IS NOT MEDICARE';
                            }
                            break;  
                    }
                } else {
                    answer = 'ERROR: PLAN IS NOT ACTIVE';
                }
                break;
            case 'future':
                answer = [];
                if (status === 'futureactive') {
                    switch (expectedAnswerType) {
                        case 'snp':
                            if (eligibilityType === 'snp') {
                                snpBaseAnswer = snpBaseAnswer.charAt(0).toLowerCase() + snpBaseAnswer.slice(1);
                                answer[0] = `Your coverage isn't active yet. Once it is, ${ snpBaseAnswer }`;
                                answer[1] = snpCatalogMessage;
                                followUpQuestion = [];
                            } else {
                                answer[0] = 'ERROR: PLAN IS NOT SNP';
                            }
                            break;
                        case 'medicare':
                            if (eligibilityType === 'medicare') {
                                medicareBaseAnswer = medicareBaseAnswer.charAt(0).toLowerCase() + medicareBaseAnswer.slice(1);
                                answer[0] = `Your coverage isn't active yet. Once it is, ${ medicareBaseAnswer }`;
                                answer[1] = medicareCatalogMessage;
                                followUpQuestion = [];
                            } else {
                                answer[0] = 'ERROR: PLAN IS NOT MEDICARE';
                            }
                            break;  
                    }
                } else {
                    answer = 'ERROR: PLAN STATUS IS NOT FUTURE'
                }
                break;
            case 'termed':
                if (status === 'termed') {
                    if (['medicare', 'snp'].includes(eligibilityType)) {
                        answer = 'Your coverage is not currently active, so you are not eligible to place an order for over-the-counter (OTC) items at this time.';
                    } else {
                        answer = 'ERROR: PLAN IS NEITHER MEDICARE NOR SNP'
                    }
                } else {
                    answer = 'ERROR: PLAN STATUS IS NOT TERMED'
                }
                break;
            case 'other':
                if (!['medicare', 'snp'].includes(eligibilityType)) {
                    answer = 'There is no OTC catalog associated with your plan.';
                } else {
                    answer = 'ERROR: PLAN IS MEDICARE OR SNP'
                }
                break;
        }

        return { answer, followUpQuestion }
    }
}

export const builder = new OtcAnswerBuilder();
