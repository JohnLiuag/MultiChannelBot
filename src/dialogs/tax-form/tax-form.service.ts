import { config } from '../../common/config';
import { ISubscription } from '../../common/interfaces/subscription.interface';
import { logger } from '../../common/logger';


export class TaxFormService {
    constructor() {
    };

    async getDocumetMetadata(subscriberNumber: string, year: string, token: string, token2: string): Promise<any> {
        const body = {
            'sourceSystemKey':'hp-1095b',
            'indexedFields': [
                {
                    'key':'DocumentType',
                    'value':'1095-B'
                },{
                    'key':'Year',
                    'value': year
                },{
                    'key':'SubscriberNumber',
                    'value': subscriberNumber
                }
            ]
        }

        config.headers.Authorization = `Bearer ${token}`;
        const requestURL: string = `${config.baseURL}documents/api/FileNetDocumentsMetadata`;
        // const requestURL: string = `https://apitst.upmchp.com/tst.documents/api/FileNetDocumentsMetadata`;
        const response = await fetch(requestURL, {
            method: 'POST',
            // headers: config.headers
            headers: token2 ? { ...config.headers, 'Authorization2': token2 } : config.headers,
            body: JSON.stringify(body),
        }).then(this.checkStatus);

        return response;
    }

    async getDocument(documentId: string, sourceSystemKey: string, token: string): Promise<ISubscription[]> {
        config.headers.Authorization = `Bearer ${token}`;
        let requestURL: string = `${config.baseURL}documents/api/FileNetDocuments`;
        const params = {
            documentId,
            sourceSystemKey,
            sessionToken: token,
        }
        requestURL += '?' + ( new URLSearchParams( params ) ).toString();

        const response = await fetch(requestURL, {
            method: 'GET',
            headers: config.headers,
        }).then(async (response) => {
            const blob = await response.arrayBuffer();
            return `data:application/pdf;base64,${Buffer.from(blob).toString('base64')}`;
        }).catch(err => {
            logger.error(err.status + ': ' + err.statusText + ' ' + err.url);
            return null;
        });

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
