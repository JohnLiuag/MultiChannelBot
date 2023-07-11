import { environmentVariables } from '../env.variables.js';
const baseURL = environmentVariables.domain;

const tokens = Object.freeze({
    ID_TOKEN: 'https://upmchptst.b2clogin.com/upmchptst.onmicrosoft.com/b2c_1a_ropc_authdev/oauth2/v2.0/token',
    CHAT_TOKEN: 'https://directline.botframework.com/v3/directline/conversations',
    GENERATE_TOKEN: 'https://directline.botframework.com/v3/directline/tokens/generate',
    REFRESH_CHAT_TOKEN: 'https://directline.botframework.com/v3/directline/tokens/refresh',
});

export default Object.freeze({
    baseURL,
    tokens
});
