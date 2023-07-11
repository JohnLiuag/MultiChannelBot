// service for working with ccd endpoints
// and getting authorization for CCD services

import { URLSearchParams } from 'url';
import { config } from '../config';
import { logger } from '../logger';

// amount of seconds before token's expiration;
// If the time before expiration is less, then we need to renew the token
const MIN_TIME_BEFORE_EXPIRATION = 5 * 60;

const delay = ms => new Promise(res => setTimeout(res, ms));

export class RopcService {
    // TODO: may be should be implemented as shared state for horizontal scalability
    private static instance: RopcService;
    private ropcTokenExpiresTime: number;
    private ropcData: IRopcResponseObj;
    private isInPending: boolean;

    constructor() {
        if (RopcService.instance) {
            return RopcService.instance;
        }
        RopcService.instance = this;
    }

    async getToken(): Promise<string> {
        if (this.ropcTokenExpiresTime) {
            const expDate = new Date(this.ropcTokenExpiresTime * 1000);
            const timeBeforeExpiration = (expDate.getTime() - Date.now()) / 1000;
            if (timeBeforeExpiration < MIN_TIME_BEFORE_EXPIRATION) {
                await this.updateROPCAccessToken();
            }
        } else {
            if (this.isInPending) {
                // not to create new tokens for fast successive requests
                await delay(400);
                return this.getToken();
            }
            await this.updateROPCAccessToken();
        }
        // console.log(this.ropcData.idToken);
        return this.ropcData.idToken;
    }

    private async getROPCAccessToken(): Promise<void> {
        // DEV/TEST/STAGE:
        // https://upmchptst.b2clogin.com/upmchptst.onmicrosoft.com/b2c_1a_ropc_authdev/oauth2/v2.0/token
        // PROD:
        // https://login.upmchp.com/upmchp.onmicrosoft.com/B2C_1A_ROPC_AUTH/oauth2/v2.0/token
        this.isInPending = true;
        const ropcWellKnown = await (await fetch(config.ropcWellKnown)).json();
        // const ropcWellKnown = await ropcWellKnownResponse.json();
        const requestURL = ropcWellKnown['token_endpoint'];
        const body = new URLSearchParams({
            'client_id': process.env.B2CClientId,
            'scope': `openid ${process.env.B2CClientId} offline_access`,
            'username': process.env.B2CAppUsername,
            'password': process.env.B2CAppPassword,
            'grant_type': 'password',
            'response_type': 'id_token'
        });

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        };

        const ropcResponse = await fetch(requestURL, { method: 'POST', body, headers }).then(this.checkStatus) as IRopcResponse;
        if (!ropcResponse) return null;
        this.ropcData = {
            accessToken: ropcResponse.access_token,
            idToken: ropcResponse.id_token,
            refreshToken: ropcResponse.refresh_token,
            expiresIn: ropcResponse.expires_in,
        }
        const tokenObj: any = JSON.parse(Buffer.from(this.ropcData.idToken.split('.')[1], 'base64').toString());
        this.ropcTokenExpiresTime = tokenObj['exp'];
        this.isInPending = false;
    }

    private async updateROPCAccessToken(): Promise<void> {

        if (!this.ropcData?.refreshToken) {
            // TODO: there may be a situation where the token has already been requested by a previous request,
            // but has not yet been received. then we do not need to get a new one, but we need to wait for the result ..
            return this.getROPCAccessToken();
        }

        const ropcWellKnown = await (await fetch(config.ropcWellKnown)).json();
        const requestURL = ropcWellKnown['token_endpoint'];
        const body = new URLSearchParams({
            'client_id': process.env.B2CClientId,
            'resource': process.env.B2CClientId,
            'grant_type': 'refresh_token',
            'response_type': 'id_token',
            'refresh_token': this.ropcData.refreshToken,
        });
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        };
        let ropcResponse = await fetch(requestURL, { method: 'POST', body, headers }).then(this.checkStatus) as IRopcResponse;

        if (ropcResponse) {
            this.ropcData = {
                accessToken: ropcResponse.access_token,
                idToken: ropcResponse.id_token,
                refreshToken: ropcResponse.refresh_token,
                expiresIn: ropcResponse.expires_in,
            }
            const tokenObj: any = JSON.parse(Buffer.from(this.ropcData.idToken.split('.')[1], 'base64').toString());
            this.ropcTokenExpiresTime = tokenObj['exp'];
        } else {
            // for cases when the refresh token becomes expired, we will again go through the procedure for obtaining a token
            await this.getROPCAccessToken();
        }
    }

    private checkStatus(res: Response) {
        if (res.ok) { // res.status >= 200 && res.status < 300
            return res.json();
        } else {
            // TODO inform user that something went wrong
            logger.error(res.status + ': ' + res.statusText + ' ' + res.url);
            return null;
        }
    }
}
