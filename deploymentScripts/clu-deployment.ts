/*
    DOCUMENTATION:

    Back up and recover your conversational language understanding models:
    https://learn.microsoft.com/en-us/azure/cognitive-services/language-service/conversational-language-understanding/how-to/fail-over

    API docs:
    https://learn.microsoft.com/en-us/rest/api/language/2022-05-01/conversational-analysis-authoring

    Main steps:

    1) Import to a new project
    POST {ENDPOINT}/language/authoring/analyze-conversations/projects/{PROJECT-NAME}/:import?api-version={API-VERSION}

    2) Train your model
    POST {ENDPOINT}/language/authoring/analyze-conversations/projects/{PROJECT-NAME}/:train?api-version={API-VERSION}

    3) Deploy your model
    PUT {ENDPOINT}/language/authoring/analyze-conversations/projects/{PROJECT-NAME}/deployments/{DEPLOYMENT-NAME}?api-version={API-VERSION}

*/

import fetch from 'node-fetch';
import { config } from 'dotenv';
import * as path from 'path';


const ENV_FILE = path.join(__dirname, '..', '.env');
config({ path: ENV_FILE });
// const API_VERSION = '2022-05-01';
const API_VERSION = '2022-10-01-preview';
const DEPLOYMENT_NAME = 'production';
const MODEL_DATE = (new Date()).toISOString().slice(0, 19).split(':').join('.');
//  TODO: make MODEL_NAME dynamic. add date, number (increasing into date), author
const MODEL_NAME = `model_${MODEL_DATE}_${process.env.DEVELOPER || ''}`;
const delay = async (ms: number) => new Promise(res => setTimeout(res, ms));

import * as cluModel from '../cognitive-resources/UPMCHP-MEMBERBOT-CLU-DEV.json';

enum Job {
    Import = 'import',
    Train = 'train',
    Deploy = 'deploy',
}

/*
Example of running script with command line parameters:
node ./deploymentScripts/clu-deployment.js CLU_API_HOST_NAME=https://eastus.api.cognitive.microsoft.com/ PROJECT_NAME=CLU-TEST-NAME APIM_KEY=123456789abcdefghijkl000
*/

// convert command line parameters to an object
const argv = process.argv.slice(2);
const argvObj = argv.reduce((obj, el) => {
    const keyValue = el.split('=');
    if (keyValue.length < 2) return obj;
    obj[keyValue[0]] = keyValue[1];
    return obj;
}, {});
// if (!['test', 'staging', 'production'].includes(process.env['NODE_ENV'] as string)
//     && !(process.env.CluProjectName_QA && process.env.CognitiveServiceAPIKey_QA)) {
//     console.log('CLU should not be deployed in auto-deploy for dev environments');
//     process.exit(0);
// }

// settings for environment
const CLU_API_HOST_NAME = argvObj['CLU_API_HOST_NAME'] || process.env.CluAPIHostName;
if (!CLU_API_HOST_NAME) {
    console.warn('CLU_API_HOST_NAME parameter is not provided');
    process.exit(1);
}
const PROJECT_NAME = argvObj['PROJECT_NAME'] || process.env.CluProjectName_QA;
if (!PROJECT_NAME) {
    console.warn('PROJECT_NAME parameter is not provided');
    process.exit(1);
}
const APIM_KEY = argvObj['APIM_KEY'] || process.env.CognitiveServiceAPIKey_QA;
if (!APIM_KEY) {
    console.warn('APIM_KEY parameter is not provided');
    process.exit(1);
}

// settings for the method of getting the job status (GJS)
const IMPORT_GJS_ATTEMPTS = 10;
const IMPORT_GJS_TIMEOUT = 2000;
const TRAIN_GJS_ATTEMPTS = 20;
const TRAIN_GJS_TIMEOUT = 6000;
const DEPLOY_GJS_ATTEMPTS = 10;
const DEPLOY_GJS_TIMEOUT = 3000;
const MAX_NUMBER_OF_MODELS = 10; // 10 in documentation


(async () => {
    // 1 - get number of models in project
    // 2 - remove model if needed
    const modelsResp = await getListModels();
    if (modelsResp) {
        if (modelsResp.value?.length >= MAX_NUMBER_OF_MODELS) {
            console.log('\n> CLU: deleting a model');

            const modelLabel = modelsResp.value[0].label
            const deleteResult = await deleteModel(modelLabel);
            if (deleteResult === 'success') {
                console.log(`> removed model "${modelLabel}"`);
            } else {
                console.error(`> ERROR while deleting model "${modelLabel}"`);
                process.exit(1);
            }
        }
    }

    console.log('\n> CLU project import process has been started');
    const importResult = await submitJob(Job.Import, IMPORT_GJS_ATTEMPTS, IMPORT_GJS_TIMEOUT);
    if (importResult !== 'succeeded') process.exit(1);

    console.log('\n> CLU project training process has been started');
    const trainResult = await submitJob(Job.Train, TRAIN_GJS_ATTEMPTS, TRAIN_GJS_TIMEOUT);
    if (trainResult !== 'succeeded') process.exit(1);

    console.log('\n> CLU project deployment process has been started');
    const deployResult = await submitJob(Job.Deploy, DEPLOY_GJS_ATTEMPTS, DEPLOY_GJS_TIMEOUT);
    if (deployResult !== 'succeeded') process.exit(1);
    console.log('\n!! CLU was DEPLOYED !!!\n');
    console.log('project name:', PROJECT_NAME, DEPLOYMENT_NAME);
    process.exit(0);
})()

async function submitImportJob() {
    const requestURL = `${CLU_API_HOST_NAME}language/authoring/analyze-conversations/projects/${PROJECT_NAME}/:import?api-version=${API_VERSION}`;
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Ocp-Apim-Subscription-Key': APIM_KEY,
    };

    return await fetch(requestURL, { method: 'POST', body: JSON.stringify(cluModel), headers })
        .then(async (response: Response) => {
            if (response.ok) {
                return response.headers.get('operation-location');
            } else {
                console.error(response.status + ': ' + response.statusText + ' ' + response.url);
                console.log(await response.text());
                return null;
            }
        })
        .catch((error) => {
            console.error('CLU Error message: ', error);
        });
}

async function getJobStatus(url: string) {
    const requestURL: string = url;
    const headers = {
        'Accept': '*/*',
        'Content-Type': 'application/json; charset=utf-8',
        'Ocp-Apim-Subscription-Key': APIM_KEY,
    };
    return await fetch(requestURL, { headers: headers, method: 'GET' })
        .then(async (response: Response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.error(response.status + ': ' + response.statusText + ' ' + response.url);
                console.log(await response.text());
                return null;
            }
        }).catch((error) => {
            console.error('CLU Error message: ', error);
        });
}

async function submitTrainJob(modelName: string) {
    const requestURL = `${CLU_API_HOST_NAME}language/authoring/analyze-conversations/projects/${PROJECT_NAME}/:train?api-version=${API_VERSION}`;
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Ocp-Apim-Subscription-Key': APIM_KEY,
    };
    const body = JSON.stringify({
        "modelLabel": modelName,
        "trainingMode": "standard",
        "trainingConfigVersion": "latest",
        "evaluationOptions": {
            "kind": "percentage",
            "testingSplitPercentage": 0,
            "trainingSplitPercentage": 100
        }
    });

    return await fetch(requestURL, { method: 'POST', body, headers })
        .then(async (response: Response) => {
            if (response.ok) {
                return response.headers.get('operation-location');
            } else {
                console.error(response.status + ': ' + response.statusText + ' ' + response.url);
                console.log(await response.text());
                return null;
            }
        })
        .catch((error) => {
            console.error('CLU Error message: ', error);
        });
}

async function getListModels() {
    const requestURL = `${CLU_API_HOST_NAME}language/authoring/analyze-conversations/projects/${PROJECT_NAME}/models?api-version=${API_VERSION}`;
    const headers = {
        'Accept': '*/*',
        'Content-Type': 'application/json; charset=utf-8',
        'Ocp-Apim-Subscription-Key': APIM_KEY,
    };
    return await fetch(requestURL, { headers: headers, method: 'GET' })
        .then(async (response: Response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.error(response.status + ': ' + response.statusText + ' ' + response.url);
                console.log(await response.text());
                return null;
            }
        }).catch((error) => {
            console.error('CLU Error message: ', error);
        });
}

async function deleteModel(trainedModelLabel: string) {
    const requestURL = `${CLU_API_HOST_NAME}language/authoring/analyze-conversations/projects/${PROJECT_NAME}/models/${trainedModelLabel}?api-version=${API_VERSION}`;
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Ocp-Apim-Subscription-Key': APIM_KEY,
    };

    return await fetch(requestURL, { method: 'DELETE', headers })
        .then(async (response: Response) => {
            if (response.ok && response.status === 204) {
                return 'success';
            } else {
                console.error(response.status + ': ' + response.statusText + ' ' + response.url);
                console.log(await response.text());
                return null;
            }
        })
        .catch((error) => {
            console.error('CLU Error message: ', error);
        });
}

async function submitDeployJob(modelName: string) {
    const requestURL = `${CLU_API_HOST_NAME}language/authoring/analyze-conversations/projects/${PROJECT_NAME}/deployments/${DEPLOYMENT_NAME}?api-version=${API_VERSION}`;
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Ocp-Apim-Subscription-Key': APIM_KEY,
    };
    const body = JSON.stringify({
        "trainedModelLabel": modelName
    });

    return await fetch(requestURL, { method: 'PUT', body, headers })
        .then(async (response: Response) => {
            if (response.ok) {
                return response.headers.get('operation-location');
            } else {
                console.error(response.status + ': ' + response.statusText + ' ' + response.url);
                console.log(await response.text());
                return null;
            }
        })
        .catch((error) => {
            console.error('CLU Error message: ', error);
        });
}


async function submitJob(job, attempts = 10, timeout = 5000) {
    let submitJobMethod: Promise<any>;
    let submitJobResult: any;
    switch (job) {
        case Job.Import:
            submitJobMethod = submitImportJob();
            break;
        case Job.Train:
            submitJobMethod = submitTrainJob(MODEL_NAME);
            break;
        case Job.Deploy:
            submitJobMethod = submitDeployJob(MODEL_NAME);
            break;
        default:
            // submitJobMethod = () => {};
            return new Error('Wrong job name')
    }

    submitJobResult = await submitJobMethod;

    if (!submitJobResult) {
        console.error(`> CLU ${job} job was failed`);
        return;
    }
    // console.log(`> ${job} job response:`, submitJobResult);
    let jobStatus = await getJobStatus(submitJobResult as string);
    let counter: number = 0;
    console.log(`> get JobStatus for ${job}:`, jobStatus.status);
    while (jobStatus.status !== 'succeeded' && counter < attempts) {
        await delay(timeout);
        counter++;
        jobStatus = await getJobStatus(submitJobResult as string);
        console.log(`> get JobStatus for ${job}:`, jobStatus.status);
    }
    if (counter === attempts) {
        console.error(' !!! something went wrong (long running process)');
        console.error(`> CLU ${job} job was failed`);
        return;
    }
    console.error(`> CLU ${job} job finished successfully`);
    return jobStatus.status;
}