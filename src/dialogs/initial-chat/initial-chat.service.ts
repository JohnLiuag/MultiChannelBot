import { config } from '../../common/config';
import { logger } from '../../common/logger';
import { IPromptsResponse } from './interfaces.ts/prompts-response';

const GUID_PROMPTS_TOP = '2380ab98-1b49-404c-97dc-b8a248566b75';
const GUID_PROMPTS_SECOND = '86c14622-c9e6-4546-862d-6df87206fe0b';


export class InitialChatService {
    constructor() {}

    async getTopPrompts(token: string, token2: string): Promise<IPromptsResponse> {
        config.headers.Authorization = `Bearer ${ token }`;
        const requestURL: string = `${config.baseURL}UmbracoCMS/api/ContentData/${GUID_PROMPTS_TOP}`;
        const response = await fetch(requestURL, {
            method: 'GET',
            headers: token2 ? { ...config.headers, 'Authorization2': token2 } : config.headers,
        }).then(this.checkStatus);

        return response;
    }

    async getSecondPrompts(token: string, token2: string): Promise<IPromptsResponse> {
        config.headers.Authorization = `Bearer ${ token }`;
        const requestURL: string = `${config.baseURL}UmbracoCMS/api/ContentData/${GUID_PROMPTS_SECOND}`;
        const response = await fetch(requestURL, {
            method: 'GET',
            headers: token2 ? { ...config.headers, 'Authorization2': token2 } : config.headers,
        }).then(this.checkStatus);

        return response;
    }

    async setTopPrompt(key: string, token: string, token2: string): Promise<any> {
        config.headers.Authorization = `Bearer ${ token }`;
        const requestURL: string = `${config.baseURL}ChatBot/api/setselectedchatBotPrompt?chatBotPrompt=${key}`;
        const response = await fetch(requestURL, {
            method: 'POST',
            headers: token2 ? { ...config.headers, 'Authorization2': token2 } : config.headers,
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
