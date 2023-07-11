import { config } from '../../common/config';
import { logger } from '../../common/logger';

import { IPrefCenterOptions } from './interfaces/pref-center.interface';

export class PrefCenterService {
    constructor() {}

    async updatePreferredName(preferredName: string, token: string): Promise<any> {
        config.headers.Authorization = `Bearer ${ token }`;
        const body = JSON.stringify([{
            op: 'add',
            path: '/personalPreferences/preferredName',
            value: preferredName
        },
        {
            op: 'add',
            path: '/memberProfile/prefix',
            value: ''
        }]);

        const requestURL: string = `${config.baseURL}PreferenceCenter/api/Preferences`;
        const response = await fetch(requestURL, {
            method: 'PATCH',
            headers: config.headers,
            body
        }).then(this.checkStatus);

        return response;
    }

    async getPrefCenterOptions(token: string): Promise<IPrefCenterOptions> {
        config.headers.Authorization = `Bearer ${ token }`;
        const requestURL: string = `${config.baseURL}PreferenceCenter/api/PreferenceOptions`;
        const response = await fetch(requestURL, {
            method: 'GET',
            headers: config.headers
        }).then(this.checkStatus);
        return response.json();
    }

    async updatePreferredPronouns(preferredPronouns: string, token: string, isNotListedOption?: boolean ): Promise<any> {
        config.headers.Authorization = `Bearer ${ token }`;
        let body: string;
        if (isNotListedOption) {
            body = JSON.stringify([
            {
                op: 'add',
                path: '/personalPreferences/pronoun',
                value: 'Not Listed'
            },
            {
                op: 'add',
                path: '/personalPreferences/pronounOther',
                value: preferredPronouns
            }]);
        } else {
            body = JSON.stringify([{
                op: 'add',
                path: '/personalPreferences/pronoun',
                value: preferredPronouns
            }]);
        };

        const requestURL: string = `${config.baseURL}PreferenceCenter/api/Preferences`;
        const response = await fetch(requestURL, {
            method: 'PATCH',
            headers: config.headers,
            body
        }).then(this.checkStatus);

        return response;
    }

    checkStatus(res: Response) {
        if (res.ok) { // res.status >= 200 && res.status < 300
            return res;
        } else {
            logger.error(res.status + ': ' + res.statusText + ' ' + res.url);
            throw new Error(res.status + ': ' + res.statusText);
        }
    }
}