function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

const whatIsMySpendingAccountBalance = new QuestionObject("What is my spending account balance?");
const whatAreMySpendingAccountBalances = new QuestionObject("What are my spending account balances?");
const whatAreMyAccountBalances = new QuestionObject("What are my account balances?");
const whereAreMySpendingAccountBalances = new QuestionObject("Where are my spending account balances?");
const whereAreMyAccountBalances = new QuestionObject("Where are my account balances?");
const whereCanIFindMySpendingAccounts = new QuestionObject("Where can I find my spending accounts?");
const canYouTellMeMySpendingAccountBalances = new QuestionObject("Can you tell me my spending account balances?");
const canYouTellMeMyAccountBalances = new QuestionObject("Can you tell me my account balances?");
const canYouProvideMySpendingAccountBalances = new QuestionObject("Can you provide my spending account balances?");
const canYouProvideMyAccountBalances = new QuestionObject("Can you provide my account balances?");
const spendingAccountBalances = new QuestionObject("Spending account balances");
const upmcConsumerAdvantage = new QuestionObject("UPMC Consumer Advantage");
const consumerAdvantage = new QuestionObject("Consumer Advantage");
const consumerAdvantageAccount = new QuestionObject("Consumer Advantage account");
const spendingCard = new QuestionObject("Spending card");

export const generalSpendingAccountsQuestionsArray = [
    whatIsMySpendingAccountBalance,
    whatAreMySpendingAccountBalances,
    whatAreMyAccountBalances,
    whereAreMySpendingAccountBalances,
    whereAreMyAccountBalances,
    whereCanIFindMySpendingAccounts,
    canYouTellMeMySpendingAccountBalances,
    canYouTellMeMyAccountBalances,
    canYouProvideMySpendingAccountBalances,
    canYouProvideMyAccountBalances,
    spendingAccountBalances,
    upmcConsumerAdvantage,
    consumerAdvantage,
    consumerAdvantageAccount,
    spendingCard
];

const whatIsMyFsaBalance = new QuestionObject("What is my FSA balance?");
const whatIsMyFlexibleSpendingAccountBalance = new QuestionObject("What is my Flexible Spending Account balance?");
const howMuchIsInMyFsa = new QuestionObject("How much is in my FSA?");
const whatIsInMyFsa = new QuestionObject("What is in my FSA?");
const fsaCard = new QuestionObject("FSA Card");
const hcfsa = new QuestionObject("HCFSA");

export const fsaQuestionsArray = [
    whatIsMyFsaBalance,
    whatIsMyFlexibleSpendingAccountBalance,
    howMuchIsInMyFsa,
    whatIsInMyFsa,
    fsaCard,
    hcfsa
];

const whatIsMyHsaBalance = new QuestionObject("What is my HSA balance?");
const whatIsMyHealthSpendingAccountBalance = new QuestionObject("What is my Health Spending Account balance?");
const howMuchIsInMyHsa = new QuestionObject("How much is in my HSA?");
const whatIsInMyHsa = new QuestionObject("What is in my HSA?");
const hsaCard = new QuestionObject("HSA Card");
const hsaDebtCard = new QuestionObject("HSA debt card");
const hsaDebitCard = new QuestionObject("HSA debit card");
const hsaWithdrawal = new QuestionObject("HSA withdrawal");

export const hsaQuestionsArray = [
    whatIsMyHsaBalance,
    whatIsMyHealthSpendingAccountBalance,
    howMuchIsInMyHsa,
    whatIsInMyHsa,
    hsaCard,
    hsaDebtCard,
    hsaDebitCard,
    hsaWithdrawal
];

const howMuchIsInMyTransitAccount = new QuestionObject("How much is in my transit account?");
const howMuchIsInMyTransitReimbursementAccount = new QuestionObject("How much is in my transit reimbursement account?");
const howMuchIsInMyCommuterTransitAccount = new QuestionObject("How much is in my commuter transit account?");
const howMuchIsInMyCommuterTransitQta = new QuestionObject("How much is in my commuter transit QTA?");
const howMuchIsInMyCommuterTransitQtaAccount = new QuestionObject("How much is in my commuter transit QTA account?");
const whatIsMyTransitAccountBalance = new QuestionObject("What is my transit account balance?");
const whatIsMyTransitReimbursementAccountBalance = new QuestionObject("What is my transit reimbursement account balance?");
const whatIsMyTransitBalance = new QuestionObject("What is my transit balance?");
const whatIsMyCommuterTransitAccountBalance = new QuestionObject("What is my commuter transit account balance?");
const whatIsMyCommuterTransitBalance = new QuestionObject("What is my commuter transit balance?");
const whatIsMyCommuterTransitQtaBalance = new QuestionObject("What is my commuter transit QTA balance?");
const whereCanIFindMyTransitAccountBalance = new QuestionObject("Where can I find my transit account balance?");
const whereCanIFindMyTransitReimbursementAccount = new QuestionObject("Where can I find my transit reimbursement account?");
const whereCanIFindMyTransitBalance = new QuestionObject("Where can I find my transit balance?");
const whereCanIFindMyCommuterTransitAccountBalance = new QuestionObject("Where can I find my commuter transit account balance?");
const whereCanIFindMyCommuterTransitQtaBalance = new QuestionObject("Where can I find my commuter transit QTA balance?");
const doIHaveATransitAccount = new QuestionObject("Do I have a transit account?");
const doIHaveATransitReimbursemnetAccount = new QuestionObject("Do I have a transit reimbursement account?");
const doIHaveACommuterTransitAccount = new QuestionObject("Do I have a commuter transit account?");
const doIHaveACommuterTransitQta = new QuestionObject("Do I have a commuter transit QTA?");
const doIHaveACommuterTransitQtaAccount = new QuestionObject("Do I have a commuter transit QTA account?");
const whatIsInMyTransitAccount = new QuestionObject("What is in my transit account?");
const whatIsInMyTransitReimbursementAccount = new QuestionObject("What is in my transit reimbursement account?");
const whatIsMyTrnBalance = new QuestionObject("What is my TRN balance?");
const whatIsInMyTrnAccount = new QuestionObject("What is in my TRN account?");
const whatIsInMyCommuterTransitAccount = new QuestionObject("What is in my commuter transit account?");
const whatIsInMyCommuterTransitQTA = new QuestionObject("What is in my commuter transit QTA?");
const doIHaveATrnAccount = new QuestionObject("Do I have a TRN account?");
const howMuchIsInMyTrnAccount = new QuestionObject("How much is in my TRN account?");
const whatIsMyTrnAccountBalance = new QuestionObject("What is my TRN account balance?");
const whereCanIFindMyTrnAccountBalance = new QuestionObject("Where can I find my TRN account balance?");
const whereCanIFindMyTrnBalance = new QuestionObject("Where can I find my TRN balance?");
const howMuchIsInMyTrn = new QuestionObject("How much is in my TRN?");

export const trnQuestionsArray = [
    howMuchIsInMyTransitAccount,
    howMuchIsInMyTransitReimbursementAccount,
    howMuchIsInMyCommuterTransitAccount,
    howMuchIsInMyCommuterTransitQta,
    howMuchIsInMyCommuterTransitQtaAccount,
    whatIsMyTransitAccountBalance,
    whatIsMyTransitReimbursementAccountBalance,
    whatIsMyTransitBalance,
    whatIsMyCommuterTransitAccountBalance,
    whatIsMyCommuterTransitBalance,
    whatIsMyCommuterTransitQtaBalance,
    whereCanIFindMyTransitAccountBalance,
    whereCanIFindMyTransitReimbursementAccount,
    whereCanIFindMyTransitBalance,
    whereCanIFindMyCommuterTransitAccountBalance,
    whereCanIFindMyCommuterTransitQtaBalance,
    doIHaveATransitAccount,
    doIHaveATransitReimbursemnetAccount,
    doIHaveACommuterTransitAccount,
    doIHaveACommuterTransitQta,
    doIHaveACommuterTransitQtaAccount,
    whatIsInMyTransitAccount,
    whatIsInMyTransitReimbursementAccount,
    whatIsMyTrnBalance,
    whatIsInMyTrnAccount,
    whatIsInMyCommuterTransitAccount,
    whatIsInMyCommuterTransitQTA,
    doIHaveATrnAccount,
    howMuchIsInMyTrnAccount,
    whatIsMyTrnAccountBalance,
    whereCanIFindMyTrnAccountBalance,
    whereCanIFindMyTrnBalance,
    howMuchIsInMyTrn,
];

const howMuchIsInMyParkingAccount = new QuestionObject("How much is in my parking account?");
const howMuchIsInMyParkingReimbursementAccount = new QuestionObject("How much is in my parking reimbursement account?");
const howMuchIsInMyCommuterParkingAccount = new QuestionObject("How much is in my commuter parking account?");
const howMuchIsInMyCommuterParkingQta = new QuestionObject("How much is in my commuter parking QTA?");
const howMuchIsInMyCommuterParkingQtaAccount = new QuestionObject("How much is in my commuter parking QTA account?");
const whatIsMyParkingtAccountBalance = new QuestionObject("What is my parking account balance?");
const whatIsMyParkingReimbursementAccountBalance = new QuestionObject("What is my parking reimbursement account balance?");
const whatIsMyParkingBalance = new QuestionObject("What is my parking balance?");
const whatIsMyCommuterParkingAccountBalance = new QuestionObject("What is my commuter parking account balance?");
const whatIsMyCommuterParkingBalance = new QuestionObject("What is my commuter parking balance?");
const whatIsMyCommuterParkingQTABalance = new QuestionObject("What is my commuter parking QTA balance?");
const whereCanIFindMyParkingAccountBalance = new QuestionObject("Where can I find my parking account balance?");
const whereCanIFindMyParkingReimbursementAccount = new QuestionObject("Where can I find my parking reimbursement account?");
const whereCanIFindMyParkingBalance = new QuestionObject("Where can I find my parking balance?");
const whereCanIFindMyCommuterParkingAccountBalance = new QuestionObject("Where can I find my commuter parking account balance?");
const whereCanIFindMyCommuterParkingQtaBalance = new QuestionObject("Where can I find my commuter parking QTA balance?");
const doIHaveAParkingAccount = new QuestionObject("Do I have a parking account?");
const doIHaveAParkingReimbursemnetAccount = new QuestionObject("Do I have a parking reimbursement account?");
const doIHaveACommuterParkingAccount = new QuestionObject("Do I have a commuter parking account?");
const doIHaveACommuterParkingQta = new QuestionObject("Do I have a commuter parking QTA?");
const doIHaveACommuterParkingQtaAccount = new QuestionObject("Do I have a commuter parking QTA account?");
const whatIsInMyParkingAccount = new QuestionObject("What is in my parking account?");
const whatIsInMyParkingReimbursementAccount = new QuestionObject("What is in my parking reimbursement account?");
const whatIsMyPkgBalance = new QuestionObject("What is my PKG balance?");
const whatIsInMyPkgAccount = new QuestionObject("What is in my PKG account?");
const whatIsInMyCommuterParkingAccount = new QuestionObject("What is in my commuter parking account?");
const whatIsInMyCommuterParkingQTA = new QuestionObject("What is in my commuter parking QTA?");
const doIHaveAPkgAccount = new QuestionObject("Do I have a PKG account?");
const whatIsMyPkgAccountBalance = new QuestionObject("What is my PKG account balance?");
const whereCanIFindMyPkgAccountBalance = new QuestionObject("Where can I find my PKG account balance?");
const whereCanIFindMyPkgBalance = new QuestionObject("Where can I find my PKG balance?");
const howMuchIsInMyPkgAccount = new QuestionObject("How much is in my PKG account?");
const howMuchIsInMyPkg = new QuestionObject("How much is in my PKG?");

export const pkgQuestionsArray = [
    howMuchIsInMyParkingAccount,
    howMuchIsInMyParkingReimbursementAccount,
    howMuchIsInMyCommuterParkingAccount,
    howMuchIsInMyCommuterParkingQta,
    howMuchIsInMyCommuterParkingQtaAccount,
    whatIsMyParkingtAccountBalance,
    whatIsMyParkingReimbursementAccountBalance,
    whatIsMyParkingBalance,
    whatIsMyCommuterParkingAccountBalance,
    whatIsMyCommuterParkingBalance,
    whatIsMyCommuterParkingQTABalance,
    whereCanIFindMyParkingAccountBalance,
    whereCanIFindMyParkingReimbursementAccount,
    whereCanIFindMyParkingBalance,
    whereCanIFindMyCommuterParkingAccountBalance,
    whereCanIFindMyCommuterParkingQtaBalance,
    doIHaveAParkingAccount,
    doIHaveAParkingReimbursemnetAccount,
    doIHaveACommuterParkingAccount,
    doIHaveACommuterParkingQta,
    doIHaveACommuterParkingQtaAccount,
    whatIsInMyParkingAccount,
    whatIsInMyParkingReimbursementAccount,
    whatIsMyPkgBalance,
    whatIsInMyPkgAccount,
    whatIsInMyCommuterParkingAccount,
    whatIsInMyCommuterParkingQTA,
    doIHaveAPkgAccount,
    whatIsMyPkgAccountBalance,
    whereCanIFindMyPkgAccountBalance,
    whereCanIFindMyPkgBalance,
    howMuchIsInMyPkgAccount,
    howMuchIsInMyPkg,
];

const whatIsMyQtaAccountBalance = new QuestionObject("What is my QTA account balance?");
const whatIsMyQtaBalance = new QuestionObject("What is my QTA balance?");
const whereCanIFindMyQtaAccountBalance = new QuestionObject("Where can I find my QTA account balance?");
const whereCanIFindMyQtaBalance = new QuestionObject("Where can I find my QTA balance?");
const whatIsInMyQtaAccount = new QuestionObject("What is in my QTA account?");
const doIHaveAQta = new QuestionObject("Do I have a QTA?");
const doIHaveAQtaAccount = new QuestionObject("Do I have a QTA account?");
const howMuchIsInMyQtaAccount = new QuestionObject("How much is in my QTA account?");

export const qtaQuestionsArray = [ //applies to TRN/PKG spending accounts questions scope
    whatIsMyQtaAccountBalance,
    whatIsMyQtaBalance,
    whereCanIFindMyQtaAccountBalance,
    whereCanIFindMyQtaBalance,
    whatIsInMyQtaAccount,
    doIHaveAQta,
    doIHaveAQtaAccount,
    howMuchIsInMyQtaAccount
]

const howMuchIsInMyDependentCareAccount = new QuestionObject("How much is in my dependent care account?");
const howMuchIsInMyDcaAccount = new QuestionObject("How much is in my DCA account?");
const howMuchIsInMyDca = new QuestionObject("How much is in my DCA?");
const howMuchIsInMyDcfsa = new QuestionObject("How much is in my DCFSA?");
const howMuchIsInMyDependentCareFsa = new QuestionObject("How much is in my dependent care FSA?");
const whatIsMyDependentCareBalance = new QuestionObject("What is my dependent care balance?");
const whatIsMyDependentCareAccountBalance = new QuestionObject("What is my dependent care account balance?");
const whatIsMyDcaBalance = new QuestionObject("What is my DCA balance?");
const whatIsMyDcfsaBalance = new QuestionObject("What is my DCFSA balance?");
const whatIsMyDependentCareFsaBalance = new QuestionObject("What is my dependent care FSA balance?");
const whereCanIFindMyDependentCareAccount = new QuestionObject("Where can I find my dependent care account?");
const whereCanIFindMyDependentCareBalance = new QuestionObject("Where can I find my dependent care balance?");
const whereCanIFindMyDependentCareAccountBalnce = new QuestionObject("Where can I find my dependent care account balance?");
const whereCanIFindMyDcaBalance = new QuestionObject("Where can I find my DCA balance?");
const whereCanIFindMyDca = new QuestionObject("Where can I find my DCA?");
const whereCanIFindMyDcfsa = new QuestionObject("Where can I find my DCFSA?");
const whereCanIFindMyDcfsaBalance = new QuestionObject("Where can I find my DCFSA balance?");
const whereIsMyDca = new QuestionObject("Where is my DCA?");
const whereIsMyDependentCareAccount = new QuestionObject("Where is my dependent care account?");
const whereIsMyDfsa = new QuestionObject("Where is my DCFSA?");
const whereIsMyDependentCareFsa = new QuestionObject("Where is my dependent care FSA?");
const doIHaveADependentCareAccount = new QuestionObject("Do I have a dependent care account?");
const doIHaveADependentCare = new QuestionObject("Do I have dependent care?");
const doIHaveADca = new QuestionObject("Do I have a DCA?");
const doIHaveADcfsa = new QuestionObject("Do I have a DCFSA?");
const doIHaveADependentCareFsa = new QuestionObject("Do I have a dependent care FSA?");
const whatIsInMyDependentCare = new QuestionObject("What is in my dependent care?");
const whatIsInMyDependentCareAccount = new QuestionObject("What is in my dependent care account?");
const whatIsInMyDca = new QuestionObject("What is in my DCA?");
const whatIsInMyDcfsa = new QuestionObject("What is in my DCFSA?");
const whatIsInMyDependentCareFsa = new QuestionObject("What is in my dependent care FSA?");
const dcfsa = new QuestionObject("DCFSA");

export const dcaQuestionsArray = [
    howMuchIsInMyDependentCareAccount,
    howMuchIsInMyDcaAccount,
    howMuchIsInMyDca,
    howMuchIsInMyDcfsa,
    howMuchIsInMyDependentCareFsa,
    whatIsMyDependentCareBalance,
    whatIsMyDependentCareAccountBalance,
    whatIsMyDcaBalance,
    whatIsMyDcfsaBalance,
    whatIsMyDependentCareFsaBalance,
    whereCanIFindMyDependentCareAccount,
    whereCanIFindMyDependentCareBalance,
    whereCanIFindMyDependentCareAccountBalnce,
    whereCanIFindMyDcaBalance,
    whereCanIFindMyDca,
    whereCanIFindMyDcfsa,
    whereCanIFindMyDcfsaBalance,
    whereIsMyDca,
    whereIsMyDependentCareAccount,
    whereIsMyDfsa,
    whereIsMyDependentCareFsa,
    doIHaveADependentCareAccount,
    doIHaveADependentCare,
    doIHaveADca,
    doIHaveADcfsa,
    doIHaveADependentCareFsa,
    whatIsInMyDependentCare,
    whatIsInMyDependentCareAccount,
    whatIsInMyDca,
    whatIsInMyDcfsa,
    whatIsInMyDependentCareFsa,
    dcfsa
]

const howMuchIsInMyReimbursementAccount = new QuestionObject("How much is in my reimbursement account?"); //Unique qeneral question for RTN/PKG/HRA accounts only
const whatIsMyReimbursementAccountBalance = new QuestionObject("What is my reimbursement account balance?");
const whatIsMyReimbursementAccount = new QuestionObject("What is in my reimbursement account?");
const whereIsMyReimbursementAccount = new QuestionObject("Where is my reimbursement account?");

export const generalTrnPkgHraSpendingAccountsQuestionsArray = [
    howMuchIsInMyReimbursementAccount,
    whatIsMyReimbursementAccountBalance,
    whatIsMyReimbursementAccount,
    whereIsMyReimbursementAccount,
];

const whatIsMyHraBalance = new QuestionObject("What is my HRA balance?");
const whatIsInMyHra = new QuestionObject("What is in my HRA?");
const whatIsInMyHraAccount = new QuestionObject("What is in my HRA account?");
const howMuchIsInMyHra = new QuestionObject("How much is in my HRA?");
const howMuchIsInMyHraAccount = new QuestionObject("How much is in my HRA account?");
const whereDoIFindMyHra = new QuestionObject("Where do I find my HRA?");
const whereDoIFindMyHraAccount = new QuestionObject("Where do I find my HRA account?");
const whereDoIFindMyHraAccountBalance = new QuestionObject("Where do I find my HRA account balance?");
const whereIsMyHra = new QuestionObject("Where is my HRA?");
const whereIsMyHraAccount = new QuestionObject("Where is my HRA account?");
const hraBalance = new QuestionObject("HRA balance");
const hraAccountBalance = new QuestionObject("HRA account balance");
const whatIsTheBalanceOfMyHra = new QuestionObject("What is the balance of my HRA?");
const whatIsTheBalanceOfMyHraAccount = new QuestionObject("What is the balance of my HRA account?");
const whatIsMyHraAmount = new QuestionObject("What is my HRA amount?");
const healthReimbursementAccount = new QuestionObject("Health reimbursement account");
const whatIsMyHealthReimbursementAccountBalance = new QuestionObject("What is my Health reimbursement account balance?");
const howMuchIsInMyHealthReimbursementAccount = new QuestionObject("How much is in my Health reimbursement account?");
const healthReimburesementArrangement = new QuestionObject("Health reimbursement arrangement");

export const hraQuestionsArray = [
    whatIsMyHraBalance,
    whatIsInMyHra,
    whatIsInMyHraAccount,
    howMuchIsInMyHra,
    howMuchIsInMyHraAccount,
    whereDoIFindMyHra,
    whereDoIFindMyHraAccount,
    whereDoIFindMyHraAccountBalance,
    whereIsMyHra,
    whereIsMyHraAccount,
    hraBalance,
    hraAccountBalance,
    whatIsTheBalanceOfMyHra,
    whatIsTheBalanceOfMyHraAccount,
    whatIsMyHraAmount,
    healthReimbursementAccount,
    whatIsMyHealthReimbursementAccountBalance,
    howMuchIsInMyHealthReimbursementAccount,
    healthReimburesementArrangement
]

const whatIsMyHiaBalance = new QuestionObject("What is my HIA balance?");
const whatIsMyHia = new QuestionObject("What is in my HIA?");
const whatIsMyHiaAccount = new QuestionObject("What is in my HIA account?");
const hiaIHaveAQtaAccount = new QuestionObject("How much is in my HIA?");
const howMuchIsInMyHia = new QuestionObject("How much is in my HIA account?");
const whereDoIFindMyHia = new QuestionObject("Where do I find my HIA?");
const whereDoIFindMyHiaAccount = new QuestionObject("Where do I find my HIA account?");
const whereDoIFindMyHiaBalance = new QuestionObject("Where do I find my HIA balance?");
const whereDoIFindMyHiaAccountBalance = new QuestionObject("Where do I find my HIA account balance?");
const whereIsMyHia = new QuestionObject("Where is my HIA?");
const whereIsMyHiaAccount = new QuestionObject("Where is my HIA account?");
const hiaBalance = new QuestionObject("HIA balance");
const hiaAccountBalance = new QuestionObject("HIA account balance");
const whatIsTheBalanceOfMyHia = new QuestionObject("What is the balance of my HIA?");
const whatIsTheBalanceOfMyHiaAccount = new QuestionObject("What is the balance of my HIA account?");
const whatIsMyHiaAmount = new QuestionObject("What is my HIA amount?");
const whatIsMyIncentiveBalance = new QuestionObject("What is my incentive balance?");
const WhatIsMyIncentiveAccountBalance = new QuestionObject("What is my incentive account balance?");
const whereIsMyIncentiveAccount = new QuestionObject("Where is my incentive account?");
const whereIsMyHealtyIncentiveAccount = new QuestionObject("Where is my healthy incentive account?");
const whereIsMyHealthIncentiveAccount = new QuestionObject("Where is my health incentive account?");
const healthIncentiveAccount = new QuestionObject("Health Incentive account");
const healthyIncentiveAccount = new QuestionObject("Healthy incentive account");
const healthyUAccount = new QuestionObject("HealthyU account");
const healthyUBalanece = new QuestionObject("HealthyU balance");
const whatIsMyHealthIncentiveAccount = new QuestionObject("What is my health incentive balance?");
const whatIsMyHealthyIncentiveAccount = new QuestionObject("What is my healthy incentive balance?");
const howMuchIsInMyHealthIncentiveAccount = new QuestionObject("How much is in my health incentive account?");
const howMuchIsInMyHealthyIncentiveAccount = new QuestionObject("How much is in my healthy incentive account?");
const whatIsMyHealthUBalance = new QuestionObject("What is my HealthyU balance?");
const howMuchIsInMyHealthUAccounter = new QuestionObject("How much is in my HealthyU account?");
const whereIsMyHealthyUAccount = new QuestionObject("Where is my HealthyU account?");

export const hiaQuestionsArray = [
    whatIsMyHiaBalance,
    whatIsMyHia,
    whatIsMyHiaAccount,
    hiaIHaveAQtaAccount,
    howMuchIsInMyHia,
    whereDoIFindMyHia,
    whereDoIFindMyHiaAccount,
    whereDoIFindMyHiaBalance,
    whereDoIFindMyHiaAccountBalance,
    whereIsMyHia,
    whereIsMyHiaAccount,
    hiaBalance,
    hiaAccountBalance,
    whatIsTheBalanceOfMyHia,
    whatIsTheBalanceOfMyHiaAccount,
    whatIsMyHiaAmount,
    whatIsMyIncentiveBalance,
    WhatIsMyIncentiveAccountBalance,
    whereIsMyIncentiveAccount,
    whereIsMyHealtyIncentiveAccount,
    whereIsMyHealthIncentiveAccount,
    healthIncentiveAccount,
    healthyIncentiveAccount,
    healthyUAccount,
    healthyUBalanece,
    whatIsMyHealthIncentiveAccount,
    whatIsMyHealthyIncentiveAccount,
    howMuchIsInMyHealthIncentiveAccount,
    howMuchIsInMyHealthyIncentiveAccount,
    whatIsMyHealthUBalance,
    howMuchIsInMyHealthUAccounter,
    whereIsMyHealthyUAccount,
]

const whatIsMyFlexBalance = new QuestionObject("What is my flex balance?");
const whatIsMyFlexSpendBalance = new QuestionObject("What is my flex  spend balance?");
const whatIsMyFlexCardBalance = new QuestionObject("What is my flex card balance?");
const howMuchIsInMyFlexAccount = new QuestionObject("How much is in my flex account?");
const howMuchIsMyFlexAccount = new QuestionObject("How much is my flex account?");
const howMuchIsInMyFlexSpendAccount = new QuestionObject("How much is in my flex spend account?");
const howMuchIsInMySpendAccount = new QuestionObject("How much is in my spend account?");
const whatIsInMyFlexAccount = new QuestionObject("What is in my flex account?");
const whatIsInMyFlexSpendAccount = new QuestionObject("What is in my flex spend account?");
const whatIsInMySpendAccount = new QuestionObject("What is in my spend account?");
const whereIsMyFlexBalance = new QuestionObject("Where is my flex balance?");
const whereIsMyFlexCardBalance = new QuestionObject("Where is my flex card balance?");
const whereIsMyFlexSpendBalance = new QuestionObject("Where is my flex spend balance?");
const whereIsMySpendBalance = new QuestionObject("Where is my spend balance?");
const whereCanICheckMyFlexBalance = new QuestionObject("Where can I check my flex balance?");
const whereCanICheckMyFlexSpendBalance = new QuestionObject("Where can I check my flex spend balance?");
const whereCanICheckMySpendBalance = new QuestionObject("Where can I check my spend balance?");
const canIGetMyFlexBalance = new QuestionObject("Can I get my flex balance?");
const canIGetMyFlexSpendBalance = new QuestionObject("Can I get my flex spend balance?");
const canIGetMySpendBalance = new QuestionObject("Can I get my spend balance?");
const flexSpend = new QuestionObject("Flex spend");
const flexSpendAccount = new QuestionObject("Flex spend account");
const flexAccount = new QuestionObject("Flex account");
const spendAccount = new QuestionObject("Spend account");
const flexCard = new QuestionObject("Flex card");
const flexBalance = new QuestionObject("Flex balance");
const whereCanIUseMyFlexAccount = new QuestionObject("When can I use my flex account?");
const whereCanIUseMyFlexSpendAccount = new QuestionObject("When can I use my flex spend account?");
const whereCanIUseMySpendAccount = new QuestionObject("When can I use my spend account?");
const whereCanIUseMySpendCard = new QuestionObject("When can I use my spend card?");
const whereCanIUseMyFlexSpendCard = new QuestionObject("When can I use my flex spend card?");
const whereCanIStartUsingMyFlexAccount = new QuestionObject("When can I start using my flex account?");
const whereCanIStartUsingMyFlexSpendAccount = new QuestionObject("When can I start using my flex spend account?");
const whereCanIStartUsingMySpendAccount = new QuestionObject("When can I start using my spend account?");
const whereCanIStartUsingMySpendCard = new QuestionObject("When can I start using my spend card?");
const whereCanIStartUsingMyFlexSpendCard = new QuestionObject("When can I start using my flex spend card?");
const howCanIActivateMyFlexAccount = new QuestionObject("How can I activate my flex account?");
const howCanIActivateMyFlexSpendAccount = new QuestionObject("How can I activate my flex spend account?");
const howCanIActivateMySpendAccount = new QuestionObject("How can I activate my spend account?");
const howCanIActivateMySpendCard = new QuestionObject("How can I activate my spend card?");
const howCanIActivateMyFlexSpendCard = new QuestionObject("How can I activate my flex spend card?");
const activateFlexAccount = new QuestionObject("Activate flex account");
const activateFlexSpendAccount = new QuestionObject("Activate flex spend account");
const activateSpendAccount = new QuestionObject("Activate spend account");
const activateSpendCard = new QuestionObject("Activate spend card");
const howDoIActivateMyFlexAccount = new QuestionObject("How do I activate my flex account?");
const howDoIActivateMyFlexSpendAccount = new QuestionObject("How do I activate my flex spend account?");
const howDoIActivateMySpendAccount = new QuestionObject("How do I activate my spend account?");
const howDoIActivateMySpendCard = new QuestionObject("How do I activate my spend card?");
const howDoIActivateMyFlexSpendCard = new QuestionObject("How do I activate my flex spend card?");
const howToActivateMyFlexAccount = new QuestionObject("How to activate my flex account");
const howToActivateMyFlexSpendAccount = new QuestionObject("How to activate my flex spend account");
const howToActivateMySpendAccount = new QuestionObject("How to activate my spend account");
const howToActivateMySpendCard = new QuestionObject("How to activate my spend card");
const howToActivateMyFlexSpendCard = new QuestionObject("How to activate my flex spend card");
const activateMyFlexAccount = new QuestionObject("Activate my flex account");
const activateMyFlexSpendAccount = new QuestionObject("Activate my flex spend account");
const activateMySpendAccount = new QuestionObject("Activate my spend account");
const activateMySpendCard = new QuestionObject("Activate my spend card");
const whereDoIActivateMyFlexAccount = new QuestionObject("Where do I activate my flex account?");
const whereDoIActivateMyFlexSpendAccount = new QuestionObject("Where do I activate my flex spend account?");
const whereDoIActivateMySpendAccount = new QuestionObject("Where do I activate my spend account?");
const whereDoIActivateMySpendCard = new QuestionObject("Where do I activate my spend card?");
const whereDoIActivateMyFlexSpendCard = new QuestionObject("Where do I activate my flex spend card?");
const iWhatnToSeeMyFlexCard = new QuestionObject("I want to see my flex card");
const showMyMyFlexCard = new QuestionObject("Show me my flex card");
const whereIsMyFlexCard = new QuestionObject("Where is my flex card");
const whereCanIFindMyFlexCard = new QuestionObject("Where can I find my flex card");
const whereCanIUseMyFlexCard = new QuestionObject("when can I use my flex card?");
const whereCanIUseMyMedicareFlexCard = new QuestionObject("when can i use my medicare flex card?");
const howDoIActivateMyFlexCard = new QuestionObject("How do I activate my flex card?");
const activateMyFlexCard = new QuestionObject("Activate my flex card");
const flexCards = new QuestionObject("Flex Cards");

export const flexSpendCardQuestionsArray = [
    whatIsMyFlexBalance,
    whatIsMyFlexSpendBalance,
    whatIsMyFlexCardBalance,
    howMuchIsInMyFlexAccount,
    howMuchIsMyFlexAccount,
    howMuchIsInMyFlexSpendAccount,
    howMuchIsInMySpendAccount,
    whatIsInMyFlexAccount,
    whatIsInMyFlexSpendAccount,
    whatIsInMySpendAccount,
    whereIsMyFlexBalance,
    whereIsMyFlexCardBalance,
    whereIsMyFlexSpendBalance,
    whereIsMySpendBalance,
    whereCanICheckMyFlexBalance,
    whereCanICheckMyFlexSpendBalance,
    whereCanICheckMySpendBalance,
    canIGetMyFlexBalance,
    canIGetMyFlexSpendBalance,
    canIGetMySpendBalance,
    flexSpend,
    flexSpendAccount,
    flexAccount,
    spendAccount,
    flexCard,
    flexBalance,
    whereCanIUseMyFlexAccount,
    whereCanIUseMyFlexSpendAccount,
    whereCanIUseMySpendAccount,
    whereCanIUseMySpendCard,
    whereCanIUseMyFlexSpendCard,
    whereCanIStartUsingMyFlexAccount,
    whereCanIStartUsingMyFlexSpendAccount,
    whereCanIStartUsingMySpendAccount,
    whereCanIStartUsingMySpendCard,
    whereCanIStartUsingMyFlexSpendCard,
    howCanIActivateMyFlexAccount,
    howCanIActivateMyFlexSpendAccount,
    howCanIActivateMySpendAccount,
    howCanIActivateMySpendCard,
    howCanIActivateMyFlexSpendCard,
    activateFlexAccount,
    activateFlexSpendAccount,
    activateSpendAccount,
    activateSpendCard,
    howDoIActivateMyFlexAccount,
    howDoIActivateMyFlexSpendAccount,
    howDoIActivateMySpendAccount,
    howDoIActivateMySpendCard,
    howDoIActivateMyFlexSpendCard,
    howToActivateMyFlexAccount,
    howToActivateMyFlexSpendAccount,
    howToActivateMySpendAccount,
    howToActivateMySpendCard,
    howToActivateMyFlexSpendCard,
    activateMyFlexAccount,
    activateMyFlexSpendAccount,
    activateMySpendAccount,
    activateMySpendCard,
    whereDoIActivateMyFlexAccount,
    whereDoIActivateMyFlexSpendAccount,
    whereDoIActivateMySpendAccount,
    whereDoIActivateMySpendCard,
    whereDoIActivateMyFlexSpendCard,
    iWhatnToSeeMyFlexCard,
    showMyMyFlexCard,
    whereIsMyFlexCard,
    whereCanIFindMyFlexCard,
    whereCanIUseMyFlexCard,
    whereCanIUseMyMedicareFlexCard,
    howDoIActivateMyFlexCard,
    activateMyFlexCard,
    flexCards,
]

const whereCanIUseMyShopHealthyCard = new QuestionObject("When can I use my shop healthy card?");
const whereCanIUseMyHealthyCard = new QuestionObject("When can I use my healthy card?");
const whereCanIStartUsingMyShopHealthyCard = new QuestionObject("When can I start using my shop healthy card?");
const whereCanIStartingUsingMyHealthyCard = new QuestionObject("When can I starting using my healthy card?");
const howCanIActivateMyShopHealthyCard = new QuestionObject("How can I activate my shop healthy card?");
const howCanIActivateMyHealthyCard = new QuestionObject("How can I activate my healthy card?");
const activateShopHealthyCard = new QuestionObject("Activate shop healthy card");
const activateHealthyCard = new QuestionObject("Activate healthy card");
const howDoIActivateMyShopHealthyCard = new QuestionObject("How do I activate my shop healthy card?");
const howDoIActivateMyHealthyCard = new QuestionObject("How do I activate my healthy card?");
const howToActivateMyShopHealthyCard = new QuestionObject("How to activate my shop healthy card");
const howToActivateMyHealthyCard = new QuestionObject("How to activate my healthy card");
const activateMyShopHealthyCard = new QuestionObject("Activate my shop healthy card");
const activateMyHealthyCard = new QuestionObject("Activate my healthy card");
const whereDoIActivateMyShopHealthyCard = new QuestionObject("Where do I activate my shop healthy card?");
const whereDoIActivateMyHealthyCard = new QuestionObject("Where do I activate my healthy card?");
const howDoICheckTheBalanceOnThePurpleShopHealthyCardOnThisApp = new QuestionObject("How do i check the balance on the purple shop healthy card on this app?");
const howDoICheckTheBalanceOnThePurpleShopHealthyCard = new QuestionObject("How do I check the balance on the purple shop healthy card");
const howDoICheckTheBalanceOnTheShopHealthyCard = new QuestionObject("How do I check the balance on the shop healthy card");
const shopHealthyCard = new QuestionObject("Shop Healthy Card");
const shopHealthCard = new QuestionObject("Shop Health Card");
const healthyCardBalance = new QuestionObject("Healthy Card Balance");
const shopHealtyBalance = new QuestionObject("Shop Healthy Balance");
const healthyCard = new QuestionObject("Healthy card");
const completeCareShopHealthyCard = new QuestionObject("Complete Care Shop Healthy Card");

export const shopHealthyCardQuestionsArray = [
    whereCanIUseMyShopHealthyCard,
    whereCanIUseMyHealthyCard,
    whereCanIStartUsingMyShopHealthyCard,
    whereCanIStartingUsingMyHealthyCard,
    howCanIActivateMyShopHealthyCard,
    howCanIActivateMyHealthyCard,
    activateShopHealthyCard,
    activateHealthyCard,
    howDoIActivateMyShopHealthyCard,
    howDoIActivateMyHealthyCard,
    howToActivateMyShopHealthyCard,
    howToActivateMyHealthyCard,
    activateMyShopHealthyCard,
    activateMyHealthyCard,
    whereDoIActivateMyShopHealthyCard,
    whereDoIActivateMyHealthyCard,
    howDoICheckTheBalanceOnThePurpleShopHealthyCardOnThisApp,
    howDoICheckTheBalanceOnThePurpleShopHealthyCard,
    howDoICheckTheBalanceOnTheShopHealthyCard,
    shopHealthyCard,
    shopHealthCard,
    healthyCardBalance,
    shopHealtyBalance,
    healthyCard,
    completeCareShopHealthyCard
]

const whatIsMyOtcBalance = new QuestionObject("What is my OTC balance?");
const howMuchIsInMyOtcBalance = new QuestionObject("How much is my OTC balance?");
const howMuchIsInMyOtcAccount = new QuestionObject("How much is in my OTC account?");
const whatIsInMyOtcAccount = new QuestionObject("What is in my OTC account?");
const whereIsMyOtcBalance = new QuestionObject("Where is my OTC balance?");
const whereCanICheckMyOtcBalance = new QuestionObject("Where can I check my OTC balance?");
const canIGetMyOtcBalance = new QuestionObject("Can I get my OTC balance?");
const otcBalance = new QuestionObject("OTC balance");
const whereCanIUseMyOtcAccount = new QuestionObject("When can I use my OTC account?");
const whereCanIStartUsingMyOtcAccount = new QuestionObject("When can I start using my OTC account?");
const howCanIActivateMyOtcAccount = new QuestionObject("How can I activate my OTC account?");
const activateOtcAccount = new QuestionObject("Activate OTC account");
const howDoIActivateMyOtcAccount = new QuestionObject("How do I activate my OTC account?");
const howToActivateMyOtcAccount = new QuestionObject("How to activate my OTC account");
const activateMyOtcAccount = new QuestionObject("Activate my OTC account");
const whereDoIActivateMyOtcAccount = new QuestionObject("Where do I activate my OTC account?");
const whatIsMySpendBalance = new QuestionObject("What is my spend balance?");

export const otcSpendingAccountsQuestionsArray = [ //applies to Flex Spend & Shop Healthy spending accounts questions scope //  Spending accounts scope
    whatIsMyOtcBalance,
    howMuchIsInMyOtcBalance,
    howMuchIsInMyOtcAccount,
    whatIsInMyOtcAccount,
    whereIsMyOtcBalance,
    whereCanICheckMyOtcBalance,
    canIGetMyOtcBalance,
    otcBalance,
    whereCanIUseMyOtcAccount,
    whereCanIStartUsingMyOtcAccount,
    howCanIActivateMyOtcAccount,
    activateOtcAccount,
    howDoIActivateMyOtcAccount,
    howToActivateMyOtcAccount,
    activateMyOtcAccount,
    whereDoIActivateMyOtcAccount,
    whatIsMySpendBalance,
];