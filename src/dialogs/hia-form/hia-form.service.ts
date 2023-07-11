import { config } from '../../common/config';
import { ISubscription } from '../../common/interfaces/subscription.interface';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { logger } from '../../common/logger';


export class HiaFormService {
    constructor() {};

    async getContent(id: number | string, token: string) {
        config.headers.Authorization = `Bearer ${token}`;
        const requestURL: string = `${config.baseURL}UmbracoCMS/api/ContentData/${id}`;
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
