import { config } from '../../common/config';
import { logger } from '../../common/logger';
import { IFlexAccountResponse } from './flex-account.interface';
import { ISpendingAccounts } from '../billing/interfaces/spending-accounts.interface';


export class FlexAccountService {
    constructor() {
    };

    async getFlexSpendingAccounts(token: string): Promise<IFlexAccountResponse> {
        config.headers.Authorization = `Bearer ${ token }`;
        const requestURL: string = `${config.baseURL}SpendingAccounts/api/rewardaccount`;
        const response = await fetch(requestURL, {
            method: 'GET',
            headers: config.headers
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

    checkStatus(res: Response) {
        if (res.ok) { // res.status >= 200 && res.status < 300
            return res.json();
        } else {
            logger.error(res.status + ': ' + res.statusText + ' ' + res.url);
            throw new Error(res.status + ': ' + res.statusText);
        }
    }
}
