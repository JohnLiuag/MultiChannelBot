import 'dotenv/config';
import {testUsers} from './test-data/testUsers.js';

let getEnvironmentVariablesForServer = (server = 'DEV') => {
    switch (server) {
        case 'DEV':
            return {
                domain: 'https://apitst.upmchp.com/dev.',
                subscriptionKey: process.env.SUBSCRIPTION_KEY_DEV_TEST,
                webChatSecret: process.env.WEBCHAT_SECRET_DEV,
                directLineSecret: process.env.DIRECTLINE_SECRET_DEV,
                apiKey: process.env.API_KEY,
                clientID: process.env.CLIENT_ID,
                scope: process.env.SCOPE,
                username: process.env.USER_NAME,
                password: process.env.PASSWORD,
                user: testUsers,
                server: server
            };
        case 'TEST':
            return {
                domain: 'https://apitst.upmchp.com/tst.',
                subscriptionKey: process.env.SUBSCRIPTION_KEY_DEV_TEST,
                webChatSecret: process.env.WEBCHAT_SECRET_TEST,
                directLineSecret: process.env.DIRECTLINE_SECRET_TEST,
                apiKey: process.env.API_KEY,
                clientID: process.env.CLIENT_ID,
                scope: process.env.SCOPE,
                username: process.env.USER_NAME,
                password: process.env.PASSWORD,
                user: testUsers,
                server: server
            };
        case 'STAGE':
            return {
                domain: 'https://api.upmchp.com/stg.',
                subscriptionKey: process.env.SUBSCRIPTION_KEY_STAGE,
                webChatSecret: process.env.WEBCHAT_SECRET_STAGE,
                directLineSecret: process.env.DIRECTLINE_SECRET_STAGE,
                apiKey: process.env.API_KEY,
                clientID: process.env.CLIENT_ID,
                scope: process.env.SCOPE,
                username: process.env.USER_NAME,
                password: process.env.PASSWORD,
                user: testUsers,
                server: server
            };
        default:
            throw new Error('Invalid SERVER environment variable is passed to the test script');
    }
};

export const environmentVariables = getEnvironmentVariablesForServer(process.env.SERVER)
