function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

const howMuchDoIOwe = new QuestionObject("How much do I owe?");
const howMuchDoINeedToPay = new QuestionObject("How much do I need to pay?");
const whatDoIOweThisMonth = new QuestionObject("What do I owe this month?");
const whatDoINeedToPay = new QuestionObject("What do I need to pay?");
const whatIsMyPayment = new QuestionObject("What is my payment?");
const whatIsMyMonthlyPayment = new QuestionObject("What is my monthly payment?");
const howMuchIsDue = new QuestionObject("How much is due?");
const whatIsMyAmountDue = new QuestionObject("What is my amount due?");
const whatIsDue = new QuestionObject("What is due?");
const payBill = new QuestionObject("Pay bill");
const payMyBill = new QuestionObject("Pay my bill");
const payBills = new QuestionObject("Pay bills");
const billing = new QuestionObject("Billing");
const billingQuestion = new QuestionObject("Billing question");
const iHaveAQuestionAboutMyBill = new QuestionObject("I have a question about my bill");
const canYouHelpMePayMyBill = new QuestionObject("Can you help me pay my bill");
const helpMePayMyBill = new QuestionObject("Help me pay my bill");
const payments = new QuestionObject("Payments");
const payment = new QuestionObject("Payment");
const makeAPayment = new QuestionObject("Make a payment");
const makingAPayment = new QuestionObject("Making a payment");
const howDoIReviewPaymentsMade = new QuestionObject("How do I review payments made");
const canIChangeMyPaymentMethod = new QuestionObject("Can I change my payment method");
const howCanIMakeAPayment = new QuestionObject("how can I make a payment");
const canIMakeAPayment = new QuestionObject("can I make a payment");
const canIReviewMyPayments = new QuestionObject("can I review my payments");
const payInvoice = new QuestionObject("Pay invoice");
const payMyInvoice = new QuestionObject("Pay my invoice");
const billAndStatements = new QuestionObject("Bill and statements");
const payStatement = new QuestionObject("Pay statement");
const payMyStatement = new QuestionObject("Pay my statement");
const iNeedToPayMyBill = new QuestionObject("I need to pay my bill");
const iWantToPayMyBill = new QuestionObject("I want to pay my bill");
const whereDoIPayMyBill = new QuestionObject("Where do I pay my bill?");
const whereCanIPayMyBill = new QuestionObject("Where can I pay my bill?");
const howDoIPayMyBill = new QuestionObject("How do I pay my bill?");
const copyOfBill = new QuestionObject("Copy of bill");
const iNeedACopyOfMyBill = new QuestionObject("I need a copy of my bill");
const lookingForBill = new QuestionObject("Looking for bill");
const lookingForMyBill = new QuestionObject("Looking for my bill");
const imLookingForMyBill = new QuestionObject("I'm looking for my bill");
const iAmLookingForMyBill = new QuestionObject("I am looking for my bill");
const whereIsMyBill = new QuestionObject("Where is my bill?");
const whereCanISeeMyBill = new QuestionObject("Where can I see my bill?");
const whereCanIFindMyBill = new QuestionObject("Where can I find my bill?");
const bill = new QuestionObject("Bill");
const howToPayABill = new QuestionObject("How to pay a bill");
const paymt = new QuestionObject("Paymt");
const paymnt = new QuestionObject("Paymnt");

export const generalPremiumBillingQuestionsArray = [
    howMuchDoIOwe,
    howMuchDoINeedToPay,
    whatDoIOweThisMonth,
    whatDoINeedToPay,
    whatIsMyPayment,
    whatIsMyMonthlyPayment,
    howMuchIsDue,
    whatIsMyAmountDue,
    whatIsDue,
    payBill,
    payMyBill,
    payBills,
    billing,
    billingQuestion,
    iHaveAQuestionAboutMyBill,
    canYouHelpMePayMyBill,
    helpMePayMyBill,
    payments,
    payment,
    makeAPayment,
    makingAPayment,
    howDoIReviewPaymentsMade,
    canIChangeMyPaymentMethod,
    howCanIMakeAPayment,
    canIMakeAPayment,
    canIReviewMyPayments,
    payInvoice,
    payMyInvoice,
    billAndStatements,
    payStatement,
    payMyStatement,
    iNeedToPayMyBill,
    iWantToPayMyBill,
    whereDoIPayMyBill,
    whereCanIPayMyBill,
    howDoIPayMyBill,
    copyOfBill,
    iNeedACopyOfMyBill,
    lookingForBill,
    lookingForMyBill,
    imLookingForMyBill,
    iAmLookingForMyBill,
    whereIsMyBill,
    whereCanISeeMyBill,
    whereCanIFindMyBill,
    bill,
    howToPayABill,
    paymt,
    paymnt
];

const whatIsMyMonthlyPremium = new QuestionObject("What is my monthly premium?");
const whatIsMyPremium = new QuestionObject("What is my premium?");
const howMucIsMyPremium = new QuestionObject("How much is my premium?");
const howMuchIsMyInsurance = new QuestionObject("How much is my insurance?");
const howMuchDoIPayForInurance = new QuestionObject("How much do I pay for insurance?");
const whatIsMyPremiumThisMonth = new QuestionObject("What is my premium this month?");
const whatIMyPremiumDue = new QuestionObject("What is my premium due?");
const premiumBalance = new QuestionObject("Premium Balance");
const payNewPremium = new QuestionObject("Pay new premium");
const iLikeToPayNewPremium = new QuestionObject("I like to pay new premium");
const iWouldLikeToPayNewPremium = new QuestionObject("I would like to pay new premium");
const iWouldLikeToPayMyNewPremium = new QuestionObject("I would like to pay my new premium");
const iLikeToPayMyNewPremium = new QuestionObject("I like to pay my new premium");
const doIHavePremium = new QuestionObject("Do I have a premium?");
const doIOwePremium = new QuestionObject("Do I owe a premium?");
const whatDoIOweForMyPremium = new QuestionObject("What do I owe for my premium?");
const whatDoIOweForMyInsurance = new QuestionObject("What do I owe for my insurance?");
const whatIsMyPlanPremium = new QuestionObject("What is my plan premium?");
const iAmTryingToPayMyPremium = new QuestionObject("I am trying to pay my premium");

export const premiumBillingQuestionsArray = [
    whatIsMyMonthlyPremium,
    whatIsMyPremium,
    howMucIsMyPremium,
    howMuchIsMyInsurance,
    howMuchDoIPayForInurance,
    whatIsMyPremiumThisMonth,
    whatIMyPremiumDue,
    premiumBalance,
    payNewPremium,
    iLikeToPayNewPremium,
    iWouldLikeToPayNewPremium,
    iWouldLikeToPayMyNewPremium,
    iLikeToPayMyNewPremium,
    doIHavePremium,
    doIOwePremium,
    whatDoIOweForMyPremium,
    whatDoIOweForMyInsurance,
    whatIsMyPlanPremium,
    iAmTryingToPayMyPremium,
];

const payMedicalBill = new QuestionObject("Pay medical bill");
const payDoctorBill = new QuestionObject("Pay doctor bill");
const payDrBill = new QuestionObject("Pay dr bill");
const payHospitalBill = new QuestionObject("Pay hospital bill");
const paySurgeryBill = new QuestionObject("Pay surgery bill");
const payMyPhysicianBill = new QuestionObject("Pay my physician bill");
const setUpPaymentPlan = new QuestionObject("Set up payment plan");
const checkPaymentPlan = new QuestionObject("Check payment plan");
const paymentPlan = new QuestionObject("Payment plan");
const hospitalBill = new QuestionObject("Hospital bill");
const doctorBill = new QuestionObject("Doctor bill");
const labBill = new QuestionObject("Lab bill");
const surgeryBill = new QuestionObject("Surgery bill");
const drBill = new QuestionObject("Dr bill");
const physicianBill = new QuestionObject("Physician bill");
const easymatchCode = new QuestionObject("EasyMatchCode");
const easyMatchCode = new QuestionObject("Easy match code");
const myEasyMatchCode = new QuestionObject("myEasyMatch code");
const billingStatement = new QuestionObject("Billing statement");
const doctorStatement = new QuestionObject("Doctor statement");
const hospitalStatement = new QuestionObject("Hospital statement");
const physicianStatement = new QuestionObject("Physician statement");
const labStatement = new QuestionObject("Lab statement");
const howMuchDoIOweInMedicalBills = new QuestionObject("How much do I owe in medical bills");

export const medicalBillingQuestionsArray = [
    payMedicalBill,
    payDoctorBill,
    payDrBill,
    payHospitalBill,
    paySurgeryBill,
    payMyPhysicianBill,
    setUpPaymentPlan,
    checkPaymentPlan,
    paymentPlan,
    hospitalBill,
    doctorBill,
    labBill,
    surgeryBill,
    drBill,
    physicianBill,
    easymatchCode,
    easyMatchCode,
    myEasyMatchCode,
    billingStatement,
    doctorStatement,
    hospitalStatement,
    physicianStatement,
    labStatement,
    howMuchDoIOweInMedicalBills
];

const amIOnAutopay = new QuestionObject("Am I on autopay?");
const amISetUpOnAutopay = new QuestionObject("Am I set up on autopay?");
const amISetUpForAutopay = new QuestionObject("Am I set up for autopay?");
const isAutopayTurnedOn = new QuestionObject("Is autopay turned on?");
const amIOnAutomaticPayments = new QuestionObject("Am I on automatic payments?");
const amISetUpForAutomaticPayments = new QuestionObject("Am I set up for automatic payments?");
const amISetUpOnAutomaticPayments = new QuestionObject("Am I set up on automatic payments?");
const howDoISetUpAutopay = new QuestionObject("How do I set up autopay?");
const howDoITurnOnAutopay = new QuestionObject("How do I turn on autopay?");
const howDoIGoOnAutopay = new QuestionObject("How do I go on autopay?");
const howDoIGetOnAutopay = new QuestionObject("How do I get on autopay?");
const howDoISetUpAutomaticPayments = new QuestionObject("How do I set up automatic payments?");
const howDoITurnOnAutomaticPayments = new QuestionObject("How do I turn on automatic payments?");
const howDoIGoOnAutomaticPayments = new QuestionObject("How do I go on automatic payments?");
const howDoIGetOnAutomaticPayments = new QuestionObject("How do I get on automatic payments?");
const whereDoIGoForAutopay = new QuestionObject("Where do I go for autopay?");
const whereDoISetUpAutopay = new QuestionObject("Where do I set up autopay?");
const whereCanISetUpAutopay = new QuestionObject("Where can I set up autopay?");
const whereDoIGoForAutomaticPayments = new QuestionObject("Where do I go for automatic payments?");
const whereDoISetUpAutomaticPayments = new QuestionObject("Where do I set up automatic payments?");
const whereCanISetUpAutomaticPayments = new QuestionObject("Where can I set up automatic payments?");
const iThoughtIWasOnAutopay = new QuestionObject("I thought I was on autopay");
const iThinkIAmOnAutopay = new QuestionObject("I think I'm on autopay");
const checkAutopayStatus = new QuestionObject("Check autopay status");
const checkAutopayEnrollment = new QuestionObject("Check autopay enrollment");
const checkAutopay = new QuestionObject("Check autopay");
const amIOnAutoDraft = new QuestionObject("Am I on auto draft?");
const amIOnAutodraft = new QuestionObject("Am I on autodraft?");
const amIOnApa = new QuestionObject("Am I on APA?");
const amISetUpForApa = new QuestionObject("Am I set up for APA?");
const amIOnAppa = new QuestionObject("Am I on APPA?");
const amIsetUpForAppa = new QuestionObject("Am I set up for APPA?");
const autopay = new QuestionObject("Autopay");
const autopayment = new QuestionObject("Autopayment");
const autopayments = new QuestionObject("Autopayments");
const whatIsMyAutopay = new QuestionObject("What is my autopay?");
const whatIsMyAutopayment = new QuestionObject("What is my autopayment?");
const whatIsAutopayment = new QuestionObject("What is autopayment?");
const whatIsAutopayments = new QuestionObject("What is autopayments?");
const whereAreAutopayments = new QuestionObject("What are autopayments?");
const autoPay = new QuestionObject("Auto pay");
const autoPayment = new QuestionObject("Auto payment");
const whatIsMyAutoPay = new QuestionObject("What is my auto pay?");
const whatIsMyAutoPayment = new QuestionObject("What is my auto payment?");
const whatIsAutoPayment = new QuestionObject("What is auto payment?");
const whatIsAutoPayments = new QuestionObject("What is auto payments?");
const whatAreAutopayments = new QuestionObject("What are auto payments?");
const amIOnAutoPay = new QuestionObject("Am I on auto pay?");
const amISetUpOnAutoPay = new QuestionObject("Am I set up on auto pay?");
const amISetUpForAutoPay = new QuestionObject("Am I set up for auto pay?");
const isAutoPayTurnedOn = new QuestionObject("Is auto pay turned on?");
const howDoISetUpAutoPay = new QuestionObject("How do I set up auto pay?");
const howDoITurnOnAutoPay = new QuestionObject("How do I turn on auto pay?");
const howDoIGetOnAutoPay = new QuestionObject("How do I get on auto pay?");
const whereDoIGoForAutoPay = new QuestionObject("Where do I go for auto pay?");
const whereDoISetUpAutoPay = new QuestionObject("Where do I set up auto pay?");
const whereCanISetUpAutoPay = new QuestionObject("Where can I set up auto pay?");
const iThoughtIWasOnAutoPay = new QuestionObject("I thought I was on auto pay");
const iThinkIAmOnAutoPay = new QuestionObject("I think I'm on auto pay");
const checkAutoPayStatus = new QuestionObject("Check auto pay status");
const checkAutoPayEnrollment = new QuestionObject("Check auto pay enrollment");
const checkAutoPay = new QuestionObject("Check auto pay");

export const premiumBillingAutopayQuestionsArray = [
    amIOnAutopay,
    amISetUpOnAutopay,
    amISetUpForAutopay,
    isAutopayTurnedOn,
    amIOnAutomaticPayments,
    amISetUpForAutomaticPayments,
    amISetUpOnAutomaticPayments,
    howDoISetUpAutopay,
    howDoITurnOnAutopay,
    howDoIGoOnAutopay,
    howDoIGetOnAutopay,
    howDoISetUpAutomaticPayments,
    howDoITurnOnAutomaticPayments,
    howDoIGoOnAutomaticPayments,
    howDoIGetOnAutomaticPayments,
    whereDoIGoForAutopay,
    whereDoISetUpAutopay,
    whereCanISetUpAutopay,
    whereDoIGoForAutomaticPayments,
    whereDoISetUpAutomaticPayments,
    whereCanISetUpAutomaticPayments,
    iThoughtIWasOnAutopay,
    iThinkIAmOnAutopay,
    checkAutopayStatus,
    checkAutopayEnrollment,
    checkAutopay,
    amIOnAutoDraft,
    amIOnAutodraft,
    amIOnApa,
    amISetUpForApa,
    amIOnAppa,
    amIsetUpForAppa,
    autopay,
    autopayment,
    autopayments,
    whatIsMyAutopay,
    whatIsMyAutopayment,
    whatIsAutopayment,
    whatIsAutopayments,
    whereAreAutopayments,
    autoPay,
    autoPayment,
    whatIsMyAutoPay,
    whatIsMyAutoPayment,
    whatIsAutoPayment,
    whatIsAutoPayments,
    whatAreAutopayments,
    amIOnAutoPay,
    amISetUpOnAutoPay,
    amISetUpForAutoPay,
    isAutoPayTurnedOn,
    howDoISetUpAutoPay,
    howDoITurnOnAutoPay,
    howDoIGetOnAutoPay,
    whereDoIGoForAutoPay,
    whereDoISetUpAutoPay,
    whereCanISetUpAutoPay,
    iThoughtIWasOnAutoPay,
    iThinkIAmOnAutoPay,
    checkAutoPayStatus,
    checkAutoPayEnrollment,
    checkAutoPay
];

