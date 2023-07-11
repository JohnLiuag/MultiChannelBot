import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class PremiumBillingAnswerBuilder {

    async premiumBillingAnswer (userData, expectedAnswerType) {

        const answers = {
            answer: [],
            generalQuestion: 'What are you trying pay for?',
            medicalQuestion: 'What type of medical bill do you want to pay?',
            payMedicalBillQuestion: 'Can you tell me what medical or hospital bill you are trying to pay?',
        }
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        const buttons = {
            generalPrompts: ['Pay Premium Bill', 'Pay Medical Bill'],
            medicalPrompts: ['Other Facility', 'UPMC Facility'],
        }
        const link = '[Premium Payments](#/main/content/view-pay-premium-bills)';
        const profile = userData.consumerProfile;
        const memberId = profile.medicalMemberId || profile.dentalVisionMemberId;
        const eligibilityType = profile.eligibilityType.toLowerCase();
        const isPolicyHolder = memberId.slice(-2) === '01';
        const hasAccessToPremium = profile.billType === 'I' 
            && (eligibilityType !== 'chip' && profile.age > 17 || eligibilityType === 'chip')
            && !(eligibilityType === 'snp')
            && !(eligibilityType === 'chip' && (['KIDS1E', 'KISDS1W', 'KIDS01'].includes(profile.groupNumber)))
            && !(['U250', 'U281'].includes(profile.corpCode));
        
        switch (expectedAnswerType) {
            case 'premium billing':
                if (isPolicyHolder && hasAccessToPremium && userData.invoices.status === 200) {
                    const invoices = userData.invoices.json.arBillingMaster;
                    const latestInvoiceDate = new Date(Math.max(...invoices.map(e => new Date(e.invoiceDate))));
                    let currentBalance;
                    invoices.forEach(el => {
                        const date = new Date(el.invoiceDate);
                        if (latestInvoiceDate.valueOf() === date.valueOf()) {
                            currentBalance = el.currentBalance;
                        }
                    });
                    currentBalance = currentBalance.toFixed(2);
                    answers.answer[0] = currentBalance != 0 ? `Your total amount due is **$${ currentBalance }**.` : `Your current balance is **$0**.`;
                    answers.answer[1] = `You can view your current balance, make a payment, or set up autopay by visiting the billing portal. <br>${ link }`;
                } else {
                    answers.answer[0] = 'ERROR: USER IS POLICY HOLDER OR DOES NO HAVE PREMIUMS OR INVOICE IS NOT AVAILABLE';
                }
                break;
            case 'upmc facility':
                answers.answer[0] = 'Have a MyUPMC account? The easiest way to pay your hospital or physician bill is on <a href="https://myupmc.upmc.com/" target="_blank">MyUPMC</a>.';
                answers.answer[1] = 'If you have received a bill in mail, you can also pay your bill here. <br><a href="https://www.upmc.com/patients-visitors/paying-bill/bill-pay" target="_blank">Pay Your UPMC Bill</a>';
                break;
            case 'other facility':
                answers.answer[0] = 'If you have a bill from a provider or facility other than UPMC, you should pay the provider directly.';
                answers.answer[1] = 'Please check your bill for a website, phone number, or address where payment can be made.';
                break;
            case 'premium billing autopay':
                if (isPolicyHolder && hasAccessToPremium && userData.invoices.status === 200) {
                    const userEligibilityData = userData.dependentEligibility[0].filter(eligibility => eligibility.memberId === memberId);
                    const autopayIndicator = userEligibilityData[0].autoPayIndicator;
                    if (autopayIndicator) {
                        answers.answer[0] = `Your account is currently set up for autopay. You can view your current balance, make a payment, or change your autopay settings by visiting the billing portal. <br>${ link }`;
                    } else if (!autopayIndicator) {
                        answers.answer[0] = `Your account is not currently set up for autopay. You can set up autopay, view your current balance, or make a one-time payment by visiting the billing portal. <br>${ link }`;
                    }
                } else {
                    answers.answer[0] = 'ERROR: USER IS POLICY HOLDER OR DOES NO HAVE PREMIUMS OR INVOICE IS NOT AVAILABLE';
                }
                break;
            case 'not policy holder':
                if (!isPolicyHolder) {
                    answers.answer[0] = 'Premium information can only be accessed by the subscriber of the policy.';
                } else {
                    answers.answer[0] = 'ERROR: USER IS POLICY HOLDER';
                }
                break;
            case 'no invoice':
                if (userData.invoices.status != 200) {
                    answers.answer[0] = `We don't have this information yet.<br>Once your invoice is available, you can view your current balance, make a payment, or set up autopay by visiting the billing portal. <br>${ link }`;
                } else {
                    answers.answer[0] = 'ERROR: INVOICE IS AVAILABLE';
                }
                break;
            case 'no premium':
                if (!hasAccessToPremium) {
                    answers.answer[0] = 'With this type of coverage, you do not pay a monthly premium directly to UPMC Health Plan. No premium payment is required.';
                } else {
                    answers.answer[0] = 'ERROR: USER HAS PREMIUMS';
                }
                break;
        }
        
        return { answers, followUpQuestion, buttons }
    }
}

export const builder = new PremiumBillingAnswerBuilder();