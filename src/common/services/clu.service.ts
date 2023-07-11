import { config } from 'dotenv';
import * as path from 'path';

import { logger } from '../../common/logger';

const ENV_FILE = path.join(__dirname, '../..', '.env');
config({ path: ENV_FILE });

export async function getCluResult(utterance: string) {
    const requestURL = `${process.env['CluAPIHostName']}language/:analyze-conversations?api-version=2022-10-01-preview`;
    const headers = {
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'en-US,en;q=0.5',
            'Content-Type': 'application/json; charset=utf-8',
            'Ocp-Apim-Subscription-Key': process.env.CognitiveServiceAPIKey,
            'Apim-Request-Id': process.env.CluAppID,
    };
    const body = JSON.stringify({
        'kind': 'Conversation',
        'analysisInput': {
            'conversationItem': {
                'id': '1',
                'text': utterance,
                'modality': 'text',
                'language': 'en-us',
                'participantId': '1'
            }
        },
        'parameters': {
            'projectName': process.env.CluProjectName,
            'verbose': true,
            'deploymentName': 'production',
            'stringIndexType': 'TextElement_V8'
        }
    });
    return await fetch(requestURL, { method: 'POST', body, headers })
    .then((response: Response) => {
        if (response.ok) {
            return response.json();
        } else {
            logger.error(response.status + ': ' + response.statusText + ' ' + response.url);
            return null;
        }
    })
    .catch((error) => {
        console.log('CLU Error message: ', error);
        logger.error('CLU Service unavailable: ' + error);
        return null;
    });
}
