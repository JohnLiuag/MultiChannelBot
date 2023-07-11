import endpoints from '../constants/endpoints.js';
import Request from './request.service.js';
import { environmentVariables } from '../env.variables.js';

const TIME_TO_EXPIRATION = 5 * 60; //5 min

class Ropc extends Request{

    instance;
    ropcTokenExpiresTime;
    ropcData = {
        idToken: '',
        refreshToken: '',
        expiresIn: '',
    };

    constructor() {
        super();
        if (Ropc.instance) {
            return Ropc.instance;
        }
        Ropc.instance = this;
    }
    
    async getToken() {
        if (this.ropcTokenExpiresTime) {
            const expDate = new Date(this.ropcTokenExpiresTime * 1000);
            const timeBeforeExpiration = (expDate.getTime() - Date.now()) / 1000;
            if (timeBeforeExpiration < TIME_TO_EXPIRATION) {
                await this.refreshRopcToken();
            }
        } else {
            await this.refreshRopcToken();
        }       
        return this.ropcData.idToken;
    }

    async getRopcToken() {
        
        const body = new URLSearchParams({
            'client_id': environmentVariables.clientID,
            'scope': environmentVariables.scope,
            'username': environmentVariables.username,
            'password': environmentVariables.password,
            'grant_type': 'password',
            'response_type': 'token id_token',
        });

        let {response, json } = await this.POSTurlSearchParams(endpoints.tokens.ID_TOKEN, body);
        this.ropcData = {
            idToken: json.id_token,
            refreshToken: json.refresh_token,
            expiresIn: json.expires_in,
        }
        const tokenObj = JSON.parse(Buffer.from(this.ropcData.idToken.split('.')[1], 'base64').toString());
        this.ropcTokenExpiresTime = tokenObj['exp'];
    }

    async refreshRopcToken() {

        if (!this.ropcData.refreshToken) {
            return this.getRopcToken();
        }

        const body = new URLSearchParams({
            'client_id': environmentVariables.clientID,
            'resource': environmentVariables.clientID,
            'grant_type': 'refresh_token',
            'response_type': 'token id_token',
            'reftesh_token': this.ropcData.refreshToken
        });

        let {response, json } = await this.POSTurlSearchParams(endpoints.tokens.ID_TOKEN, body);
        
        if (!json) {
            this.ropcData = {
                idToken: json.id_token,
                refreshToken: json.refresh_token,
                expiresIn: json.expires_in,
            }
            const tokenObj = JSON.parse(Buffer.from(this.ropcData.idToken.split('.')[1], 'base64').toString());
            this.ropcTokenExpiresTime = tokenObj['exp'];
        } else {
            await this.getRopcToken();
        }
    }
}

export default Ropc;