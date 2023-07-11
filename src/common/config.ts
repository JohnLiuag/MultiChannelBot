import { config as dotenv} from 'dotenv';
import * as path from 'path';

const ENV_FILE = path.join(__dirname, '../..', '.env');
dotenv({ path: ENV_FILE });

const env = process.env.NODE_ENV || 'development';
const API_KEY = 'K89hNzdiNzBjMzMwNDczGHllODE5NWNlMDk3MzNlWER';
const OCP_APIM_SUBSCRIPTION_KEY = process.env['OcpApimSubscriptionKey'];


const config_temp = {
    default: {
        // put parameters here that are the same for different environments
    },
    development: {
        findCareBaseURL: 'https://findcaredev.upmchp.com/',
        liveChatBaseURL: 'https://chatdev.upmchp.com/',
        ropcWellKnown: 'https://upmchptst.b2clogin.com/upmchptst.onmicrosoft.com/b2c_1a_ropc_authdev/v2.0/.well-known/openid-configuration',
        logLevel: 'debug',
        baseURL: 'https://apitst.upmchp.com/dev.',
        headers: {  // for CP microservices
            'Content-Type': 'application/json',
            'Api-Key': API_KEY,
            'Ocp-Apim-Subscription-Key': OCP_APIM_SUBSCRIPTION_KEY,
            'Authorization': '',
        }
    },
    test: {
        findCareBaseURL: 'https://findcaretst.upmchp.com/',
        liveChatBaseURL: 'https://chattst.upmchp.com/',
        ropcWellKnown: 'https://upmchptst.b2clogin.com/upmchptst.onmicrosoft.com/b2c_1a_ropc_authdev/v2.0/.well-known/openid-configuration',
        logLevel: 'info',
        baseURL: 'https://apitst.upmchp.com/tst.',
        headers: {
            'Content-Type': 'application/json',
            'Api-Key': API_KEY,
            'Ocp-Apim-Subscription-Key': OCP_APIM_SUBSCRIPTION_KEY,
            'Authorization': '',
        }
    },
    staging: {
        findCareBaseURL: 'https://findcarestg.upmchp.com/',
        liveChatBaseURL: 'https://chatstg.upmchp.com/',
        ropcWellKnown: 'https://upmchptst.b2clogin.com/upmchptst.onmicrosoft.com/b2c_1a_ropc_authdev/v2.0/.well-known/openid-configuration',
        logLevel: 'error',
        baseURL: 'https://api.upmchp.com/stg.',
        headers: {
            'Content-Type': 'application/json',
            'Api-Key': API_KEY,
            'Ocp-Apim-Subscription-Key': OCP_APIM_SUBSCRIPTION_KEY,
            'Authorization': '',
        }
    },
    production: {
        findCareBaseURL: 'https://findcare.upmchp.com/',
        liveChatBaseURL: 'https://chat.upmchp.com/',
        ropcWellKnown: 'https://login.upmchp.com/upmchp.onmicrosoft.com/B2C_1A_ROPC_AUTH/v2.0/.well-known/openid-configuration',
        logLevel: 'error',
        baseURL: 'https://api.upmchp.com/',
        headers: {
            'Content-Type': 'application/json',
            'Api-Key': API_KEY,
            'Ocp-Apim-Subscription-Key': OCP_APIM_SUBSCRIPTION_KEY,
            'Authorization': '',
        }
    }
};

export const config: {
    findCareBaseURL: string,
    liveChatBaseURL: string,
    ropcWellKnown: string,
    logLevel: string,
    baseURL: string,
    headers: {[key: string]: string}
} = {
    ...config_temp.default,
    ...config_temp[env]
}
