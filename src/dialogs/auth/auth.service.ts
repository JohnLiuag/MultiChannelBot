import { URLSearchParams } from 'url';

import { IMember, IMembersSearchList } from '../../common/interfaces/members-search-list.interface';
import { logger } from '../../common/logger';

export class AuthService {
    baseURL = 'https://apitst.upmchp.com/tst.';
    ocpApimSubscriptionKey = 'd4322f00f9364ca8b95a362115a33c43';
    apiKey = 'MjU2ZDE1N2QtNDI0Yy00MmZlLWJmZTctYzBmNzM1Y2Y3NzVh';

    accessToken = '';
    authorizationToken = '';
    ropcTokenExpiresTime: number;
    ropcData: IRopcResponseObj;
    minTimeBeforeExpiration: number = 5 * 60; // amount of seconds before token's expiration; If the time before expiration is less, then we need to renew the token

    constructor() { };

    async getROPCAccessToken(): Promise<void> {
        // TODO: change the way you handle errors. the dialog should respond to errors appropriately
        // TODO: requestURL we should get from token_endpoint property in the response from endpoint below:
        // https://upmchptst.b2clogin.com/upmchptst.onmicrosoft.com/b2c_1a_ropc_authdev/v2.0/.well-known/openid-configuration
        // https://upmchptst.b2clogin.com/upmchptst.onmicrosoft.com/b2c_1a_ropc_authtst/v2.0/.well-known/openid-configuration
        // https://upmchptst.b2clogin.com/upmchptst.onmicrosoft.com/b2c_1a_ropc_authstg/v2.0/.well-known/openid-configuration
        // PROD ----
        const requestURL = 'https://upmchptst.b2clogin.com/upmchptst.onmicrosoft.com/b2c_1a_ropc_authdev/oauth2/v2.0/token';
        const body = new URLSearchParams({
            'client_id': process.env.B2CClientId,
            'scope': `openid ${process.env.B2CClientId} offline_access`,
            'username': process.env.B2CAppUsername,
            'password': process.env.B2CAppPassword,
            'grant_type': 'password',
            'response_type': 'token id_token'
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
    }

    async updateROPCAccessToken(): Promise<void> {
        const requestURL = 'https://upmchptst.b2clogin.com/upmchptst.onmicrosoft.com/b2c_1a_ropc_authdev/oauth2/v2.0/token';
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
            this.getROPCAccessToken();
        }
    }

    async getMembersSearchList(userFirstName: string, userLastName: string, dateOfBirth: string): Promise<IMembersSearchList> {
        const requestURL = `${this.baseURL}Subscriber/api/members`;
        const body = new URLSearchParams({
            'firstName': userFirstName,
            'lastName': userLastName,
            'dateOfBirth': dateOfBirth,
            'tpaId': '000001',
            'tpaDiv': '0001',
            'tpaClient': '000001',
            'shouldUseFuzzySearch': 'true'
        });
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Authorization': `Bearer ${this.ropcData.idToken}`,
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept': '*/*',
            'Connection': 'keep-alive',
            'Ocp-Apim-Subscription-Key': this.ocpApimSubscriptionKey,
            'api-key': this.apiKey
        };
        const response = await fetch(requestURL, { method: 'POST', body, headers }).then(this.checkStatus);
        return response;
    }

    async getAuthorizationToken(memberId: string): Promise<string> {
        const requestURL = `${this.baseURL}Authorization/api/delegatedaccesstokens`;
        const body = new URLSearchParams({
            'medicalMemberId': memberId,
            'tpaClient': '000001',
            'tpaId': '000001',
            'tpaDiv': '0001'
        });
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Authorization': `Bearer ${this.ropcData.idToken}`,
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept': '*/*',
            'Connection': 'keep-alive',
            'Ocp-Apim-Subscription-Key': this.ocpApimSubscriptionKey,
            'api-key': this.apiKey
        };
        const response = await fetch(requestURL, { method: 'POST', body, headers }).then(this.checkStatus);
        return response['jwt'];
    }

    async getMemberProfile(memberId: string, authToken: string): Promise<any> {
        const requestURL = `${this.baseURL}DigitalConcierge/api/members/${memberId}`;
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Authorization': `Bearer ${this.ropcData.idToken}`,
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept': '*/*',
            'Connection': 'keep-alive',
            'Ocp-Apim-Subscription-Key': this.ocpApimSubscriptionKey,
            'api-key': this.apiKey,
            'Authorization2': authToken,
        };
        return await fetch(requestURL, { method: 'GET', headers }).then(this.checkStatus);
    }

    async authenticateUser(firstName: string, lastName: string, birthdayDate: string): Promise<any> {
        let membersSearchList: IMembersSearchList;
        let memberData: IMember;
        let userProfileData: any;
        let userAuthToken: string;

        if (this.ropcTokenExpiresTime) {
            const expDate = new Date(this.ropcTokenExpiresTime * 1000);
            const nowDate = new Date();
            const timeBeforeExpiration = (expDate.getTime() - Date.now()) / 1000;
            if (timeBeforeExpiration < this.minTimeBeforeExpiration) {
                await this.updateROPCAccessToken();
            }
        } else {
            await this.getROPCAccessToken(); // TODO call this method only if ROPC token is absent or expired
        }

        membersSearchList = await this.getMembersSearchList(firstName, lastName, birthdayDate);

        if (membersSearchList && membersSearchList['count'] >= 1) {
            // TODO: if count > 1 then map array and specify user by additional questions (zipcode / medicateId or etc)
            memberData = membersSearchList['members'][0];
            userAuthToken = await this.getAuthorizationToken(memberData['memberId']);
            userProfileData = await this.getMemberProfile(memberData['memberId'], userAuthToken);
            userProfileData.authToken = userAuthToken;
            return userProfileData;
        } else {
            return null;
        }
    }

    checkStatus(res: Response) {
        if (res.ok) { // res.status >= 200 && res.status < 300
            return res.json();
        } else {
            // TODO inform user that something went wrong
            logger.error(res.status + ': ' + res.statusText + ' ' + res.url);
            return null;
        }
    }
}
