import { config } from '../../common/config';
import { logger } from '../../common/logger';
import { ISubscription } from '../../common/interfaces/subscription.interface';
import { IInvoices } from './interfaces/invoices.interface';
import { ISpendingAccounts } from './interfaces/spending-accounts.interface';
import { IFlexAccountResponse } from '../flex-account/flex-account.interface';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';

export class BillingService {

    constructor() {}

    async getInvoices(memberId: string, token: string, token2: string): Promise<IInvoices> {
        const headers = {
            'Cache-Control': 'no-cache',
            'Authorization' : `Bearer ${token}`,
            'Api-Key': config.headers['Api-Key'],
            'Ocp-Apim-Subscription-Key': config.headers['Ocp-Apim-Subscription-Key'],
            'Authorization2': token2
        }
        const requestURL: string = `${config.baseURL}Invoices/api/Billing/${memberId}`;
        const response = await fetch(requestURL, {
            method: 'GET',
            headers
        }).then(this.checkStatus);

        return response;
    }

    async getSpendingAccounts(token: string): Promise<ISpendingAccounts> {
        config.headers.Authorization = `Bearer ${ token }`;
        const requestURL: string = `${config.baseURL}SpendingAccounts/api/transactions?request.shouldGetAllTransactions=false`;
        const response = await fetch(requestURL, {
            method: 'GET',
            headers: config.headers
        }).then(this.checkStatus);

        return response;
    }

    async getFlexSpendingAccounts(token: string): Promise<IFlexAccountResponse> {
        config.headers.Authorization = `Bearer ${ token }`;
        const requestURL: string = `${config.baseURL}SpendingAccounts/api/rewardaccount`;
        const response = await fetch(requestURL, {
            method: 'GET',
            headers: config.headers
        }).then(this.checkStatus);

        return response;
    }

    getLatestInvoice(invoicesJson: IInvoices) {
        return invoicesJson.arBillingMaster.reduce((a, b) => {
            return new Date(a.invoiceDate) > new Date(b.invoiceDate) ? a : b;
        });
    }

    async getBillingAutopayMessage(json: ISubscription[], memberId: string, token: string, token2: string): Promise<string> {
        let message: string;
        const currentUser: ISubscription = json.find(el => el.memberId === memberId);
        if (!currentUser) {
            return `response from services doesn't contain any data`;
        }

        const eligibility = currentUser.eligibilities;
        const eligibilityTypeDescription = eligibility[0].eligibilityTypeDescription.toLowerCase();
        const userDoesHavePremiumBilling = eligibility[0].billType === 'I'
            && (eligibilityTypeDescription === 'chip' || currentUser.age > 17)
            && !(eligibilityTypeDescription === 'snp')
            && !(eligibilityTypeDescription === 'chip' && (['KIDS1E', 'KISDS1W', 'KIDS01'].includes(eligibility[0].groupNumber)))
            && !(eligibility[0].corpId === 'U250' || eligibility[0].corpId === 'U281');
        const isPolicyHolderUser = memberId.slice(-2) === '01';

        if (isPolicyHolderUser) {
            if (userDoesHavePremiumBilling) {
                const userDoesHaveAutopay = currentUser.autoPayIndicator;
                let invoices: IInvoices;
                try {
                    invoices = await this.getInvoices(memberId, token, token2);
                } catch {
                    message = `We don't have this information yet.<br>` +
                    `Once your invoice is available, you can view your current balance, `+
                    `make a payment, or set up autopay by visiting the billing portal. \n` +
                    `<br>` +
                    `[Premium Payments](#/main/content/view-pay-premium-bills)`;
                }
                const userDoesHaveInvoices = invoices.arBillingMaster.length;

                if (userDoesHaveInvoices && ['Marketplace', 'Commercial', 'CHIP', 'Medicare'].includes(eligibility[0].eligibilityTypeDescription)) {
                    if (userDoesHaveAutopay) {
                        message = `Your account is currently set up for autopay. ` +
                            `You can view your current balance, make a payment, or change your autopay settings by visiting the billing portal. \n` +
                            `<br>` +
                            `[Premium Payments](#/main/content/view-pay-premium-bills)`;
                    } else {
                        message = `Your account is not currently set up for autopay. ` +
                            `You can set up autopay, view your current balance, or make a one-time payment by visiting the billing portal. \n` +
                            `<br>` +
                            `[Premium Payments](#/main/content/view-pay-premium-bills)`;
                    }
                } else {
                    message = `We don't have this information yet. Once your invoice is available, ` +
                        `you can view your current balance, make a payment, or set up autopay by visiting the billing portal. \n` +
                        `<br>` +
                        `[Premium Payments](#/main/content/view-pay-premium-bills)`;
                }

            } else {
                message = `With this type of coverage, `+
                    `you do not pay a monthly premium directly to UPMC Health Plan. `+
                    `No premium payment is required.`;
            }
        } else {
            message = `Premium information can only be accessed by the subscriber of the policy.`;
        }

        return message;
    }

    checkStatus(res: Response) {
        if (res.ok) { // res.status >= 200 && res.status < 300
            return res.json();
        } else {
            logger.error(res.status + ': ' + res.statusText + ' ' + res.url);
            throw new Error(res.status + ': ' + res.statusText);
        }
    }
}
