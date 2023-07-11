import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class SpendingAccountsAnswerBuilder {

    async spendingAccountsAnswer (userData, expectedAnswerType, expectedStatus) {

        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        let answers = {
            answer: [],
            uniqueFollowUpQuestion: 'Would you like to see the balance of a different Spending Account?',
            followUpQuestion: followUpQuestion
        }
        let buttons = [];
        const linkText = 'Check your [Spending Accounts](#/main/content/spending-accounts) to learn more.';
        const linkText2 = '[Spending Accounts](#/main/content/spending-accounts)'; //Used for hsa through another administrator flow
        const activePlan = userData.eligibility[0].eligibilities.filter(eligibilities => eligibilities.eligibilityStatus.toLowerCase() === 'active');
        const eligibilityPlan = activePlan.length === 1 ? activePlan[0] : userData.eligibility[0].eligibilities[0];
        const eligibilityType = eligibilityPlan.eligibilityTypeDescription.toLowerCase();
        const eligibilityStatus = eligibilityPlan.eligibilityStatus.toLowerCase();
        const pbpCode = eligibilityPlan.currentContractNumber + '-' + eligibilityPlan.currentPBPIdentifier;
        const medicareAnnualMemberPbpCodes = ['H3907-002', 'H3907-046', 'H3907-050', 'H3907-052', 'H3907-037', 'H3907-049', 'H3907-029', 'H5533-011', 'H5533-009', 'H5533-012', 'H5533-013', 'H5533-014'];
        const medicareRewardsMemberPbpCodes = ['H3907-006', 'H5533-003', 'H5533-005', 'H5533-008', 'H3907-802', 'H5533-801', 'H5533-802'];
        const snpMemberPbpCodes = ['H4279-001', 'H4279-004', 'H7123-001'];
        const spendingAccounts = {};
        let availableBalance;
        let hasExternalHsa;
        
        if (userData.spendingAccounts) {
            userData.spendingAccounts.forEach(key => {
                let spendingAccountType = key.accountType.type;
                let type = key.accountType.type.toLowerCase();
                ['fsa', 'hcfsa'].includes(type) ? type = 'fsa' : ''; //dynamic store FSA key only
                type === 'trn' ? spendingAccountType = 'Commuter TRN' : ''; //define special type description for multiple spending accounts answer 
                type === 'dca' ? spendingAccountType = 'DCFSA' : ''; //define special type description for multiple spending accounts answer 
                type === 'pkg' ? spendingAccountType = 'Commuter PKG' : ''; //define special type description for multiple spending accounts answer 
                key.availableBalance || key.availableBalance === 0 ? availableBalance = key.availableBalance.toFixed(2) : '';
                spendingAccounts[type] = {
                    id: key.accountType.id,
                    type: type,
                    typeDescription: spendingAccountType,
                    availableBalance: availableBalance,
                }
                !['EmployerHSA', 'BenefitWallet'].includes(key.accountType.dataSource) ? buttons.push(key.accountType.type) : '';
                ['EmployerHSA', 'BenefitWallet'].includes(key.accountType.dataSource) ? hasExternalHsa = true : '';
            });
        }
        if (userData.medicareFlexCard.status === 200 && ['medicare', 'snp'].includes(eligibilityType)) {
            if (medicareAnnualMemberPbpCodes.includes(pbpCode) || medicareRewardsMemberPbpCodes.includes(pbpCode)) {
                spendingAccounts.flexSpendCard = {
                    typeDescription: 'Flex Spend Card',
                    beginningBalance: userData.medicareFlexCard.json.rewardAccount.beginningBalance,
                    availableBalance: userData.medicareFlexCard.json.rewardAccount.availableBalance,
                }
                buttons.push('Flex Spend Card')
            } else if (snpMemberPbpCodes.includes(pbpCode)) {
                spendingAccounts.shopHealthyCard = {
                    typeDescription: 'Shop Healthy Card',
                    beginningBalance: userData.medicareFlexCard.json.rewardAccount.beginningBalance,
                    availableBalance: userData.medicareFlexCard.json.rewardAccount.availableBalance,
                }
                buttons.push('Shop Healthy Card')
            }
        }
        buttons.push(`Ask about something else`); //Adding last button
        
        switch(expectedAnswerType) {
            case 'fsa':
                if (spendingAccounts.fsa) {
                    answers.answer[0] = `Your Flexible Spending Account (FSA) balance is **$${ spendingAccounts.fsa.availableBalance }**.`;
                    answers.answer[1] = `${ linkText }`;
                } else {
                    answers.answer[0] = `ERROR: THIS USER DOES NOT HAVE FSA`;
                }
                break;
            case 'hsa':
                if (spendingAccounts.hsa) {
                    answers.answer[0] = `Your Health Spending Account (HSA) balance is **$${ spendingAccounts.hsa.availableBalance }**.`;
                    answers.answer[1] = `${ linkText }`;
                } else {
                    answers.answer[0] = `ERROR: THIS USER DOES NOT HAVE HSA`;
                }
                break;
            case 'trn':
                if (spendingAccounts.trn) {
                    answers.answer[0] = `Your commuter transit QTA balance is **$${ spendingAccounts.trn.availableBalance }**.`;
                    answers.answer[1] = `${ linkText }`;
                } else {
                    answers.answer[0] = `ERROR: THIS USER DOES NOT HAVE TRN`;
                }
                break;
            case 'pkg':
                if (spendingAccounts.pkg) {
                    answers.answer[0] = `Your commuter parking QTA balance is **$${ spendingAccounts.pkg.availableBalance }**.`;
                    answers.answer[1] = `${ linkText }`;
                } else {
                    answers.answer[0] = `ERROR: THIS USER DOES NOT HAVE PKG`;
                }
                break;
            case 'dca':
                if (spendingAccounts.dca) {
                    answers.answer[0] = `Your Dependent Care FSA balance is **$${ spendingAccounts.dca.availableBalance }**.`;
                    answers.answer[1] = `${ linkText }`;
                } else {
                    answers.answer[0] = `ERROR: THIS USER DOES NOT HAVE DCA`;
                }
                break;         
            case 'hra':
                if (spendingAccounts.hra) {
                    answers.answer[0] = `Your HRA balance is **$${ spendingAccounts.hra.availableBalance }**.`;
                    answers.answer[1] = `${ linkText }`;
                } else {
                    answers.answer[0] = `ERROR: THIS USER DOES NOT HAVE HRA`;
                }
                break;
            case 'hia':
                if (spendingAccounts.hia) {
                    answers.answer[0] = `Your HIA balance is **$${ spendingAccounts.hia.availableBalance }**.`;
                    answers.answer[1] = `${ linkText }`;
                } else {
                    answers.answer[0] = `ERROR: THIS USER DOES NOT HAVE HIA`;
                }
                break;
            case 'another administrator':
                if (hasExternalHsa) {
                    answers.answer[0] = `Health Savings Account (HSA) information is only available for UPMC Consumer Advantage accounts.`;
                    answers.answer[1] = `Please contact your employer regarding HSA banking arrangements.`;
                } else {
                    answers.answer[0] = `ERROR: NO ANOTHER ADMINISTRATOR`;
                }
                break;
            case 'no requested account':
                answers.answer[0] = `It appears you are not enrolled in this type of account.`;
                if (!hasExternalHsa) {
                    answers.answer[1] = `However, I see you have another Spending Account.`;
                } else {
                    answers.answer[1] = 'However, I see that you have an HSA through another administrator. Please contact your employer regarding HSA banking arrangements.'
                }
                break;
            case 'no spending accounts':
                if (Object.keys(spendingAccounts).length === 0) {
                    answers.answer = 'I do not see a spending account associated with this plan. Would you like to chat with a concierge?';
                } else {
                    answers.answer = 'ERROR: THIS USER HAS SPENDING ACCOUNTS';
                }
                break;
            case 'medicare-annual':
                if (eligibilityType === 'medicare' && eligibilityStatus === 'active') {
                    if (medicareAnnualMemberPbpCodes.includes(pbpCode)) {
                        answers.answer[0] = `Your beginning balance on your **UPMC <i>for Life</i> Flex Spend Card** is **$${ spendingAccounts.flexSpendCard.beginningBalance }**.`;
                        answers.answer[1] = `You currently have an available balance of **$${ spendingAccounts.flexSpendCard.availableBalance }**.`;
                        answers.answer[2] = `To learn more, visit ${ linkText2 }.`;
                        answers.followUpQuestion = [];
                    } else {
                        answers.answer[0] = 'ERROR: PBP CODE IS NOT FROM ANNUAL GROUP';
                    }
                } else {
                    answers.answer[0] = 'ERROR: PLAN TYPE IS NOT MEDICARE OR NOT ACTIVE';
                }
                break;
            case 'medicare-rewards':
                if (eligibilityType === 'medicare' && eligibilityStatus === 'active') {
                    if (medicareRewardsMemberPbpCodes.includes(pbpCode)) {
                        answers.answer[0] = `Your current balance is **$${ spendingAccounts.flexSpendCard.availableBalance }**. You can complete eligible activities to earn your rewards.`;
                        answers.answer[1] = `To learn more, visit ${ linkText2 }.`;
                    } else {
                        answers.answer[0] = 'ERROR: PBP CODE IS NOT FROM REWARDS GROUP';
                    }
                } else {
                    answers.answer[0] = 'ERROR: PLAN TYPE IS NOT MEDICARE OR NOT ACTIVE';
                }
                break;
            case 'snp':
                if (eligibilityType === 'snp' && eligibilityStatus === 'active') {
                    if (snpMemberPbpCodes.includes(pbpCode)) {
                        answers.answer[0] = `Your beginning balance for this quarter on your **UPMC <i>for Life</i> Complete Care Shop Healthy Card** is **$${ spendingAccounts.shopHealthyCard.beginningBalance }**.`;
                        answers.answer[1] = `You currently have an available balance of **$${ spendingAccounts.shopHealthyCard.availableBalance }**.`;
                        answers.answer[2] = `Your card will be reloaded quarterly (every 3 months), but any unused funds will expire and will not roll over.`;
                        answers.answer[3] = `To learn more, visit ${ linkText2 }.`;
                    } else {
                        answers.answer[0] = 'ERROR: PBP CODE IS NOT FROM SNP GROUP';
                    }
                } else {
                    answers.answer[0] = 'ERROR: PLAN TYPE IS NOT SNP OR NOT ACTIVE';
                }
                break;
            case 'no mc flex data':
                if (userData.medicareFlexCard.status != 200) {
                    answers.answer[0] = 'I am unable to provide this information at this time.';
                    answers.answer[1] = 'You can type **“help”** to chat with a concierge.';
                    answers.followUpQuestion = [];
                } else {
                    answers.answer[0] = 'ERROR: SERVICE RESPONSE STATUS IS 200';
                }
                break;
            case 'multiple-general':
                const multipleSpendingAccountsAnswer = [];
                if (userData.spendingAccounts.length > 1) {
                    answers.answer[0] = 'You have more than one Spending Account. Here are your Spending Account balances.';
                    for (const account in spendingAccounts) {
                        if (hasExternalHsa && Object.keys(spendingAccounts).length === 2) {
                            answers.answer[1] = `Your ${ spendingAccounts[account].typeDescription } balance is **$${ spendingAccounts[account].availableBalance }**.`;
                        } else {
                            multipleSpendingAccountsAnswer.push(`${ spendingAccounts[account].typeDescription }: **$${ spendingAccounts[account].availableBalance }**`);                           
                        }
                    }
                    answers.answer[1] = multipleSpendingAccountsAnswer.join(' ');
                    answers.answer[2] = `${ linkText }`;
                } else {
                    answers.answer = 'ERROR: THIS USER HAS 0 OR 1 SPENDING ACCOUNT ONLY';
                }
                break;
        }
        return { answers, buttons };
    }
}

export const builder = new SpendingAccountsAnswerBuilder();
