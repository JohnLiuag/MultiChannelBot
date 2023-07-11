import { config } from 'dotenv';
import * as path from 'path';

import { logger } from '../../common/logger'

const ENV_FILE = path.join(__dirname, '../..', '.env');
config({ path: ENV_FILE });

export async function questionAnswering(utterance: string) {

    let requestURL = `${process.env['QuestionAnsweringEndpoint']}language/:query-knowledgebases`;
    const params = {
        'projectName': process.env['QuestionAnsweringProjectName'],
        'api-version': '2021-10-01',
        'deploymentName': 'production',
    };

    requestURL += "?" + new URLSearchParams(params).toString();

    return await fetch(requestURL, {
        method: 'POST',
        headers: {
            'Ocp-Apim-Subscription-Key': process.env['CognitiveServiceAPIKey'],
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'top': 3,
            'question': utterance,
            'includeUnstructuredSources': true,
            'confidenceScoreThreshold': 0.5,
            'answerSpanRequest': {
                'enable': true,
                'topAnswersWithSpan': 1,
                'confidenceScoreThreshold': 0.5
            },

        })
    }).then((response: Response) => {
        if (response.ok) {
            return response.json();
        } else {
            logger.error(response.status + ': ' + response.statusText + ' ' + response.url);
            return null;
        }
    });
}
