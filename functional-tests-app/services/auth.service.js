import endpoints from '../constants/endpoints.js';
import Request from './request.service.js';
import Ropc from './ropc.service.js';
import { collector } from './data-collector-service.js';
import { environmentVariables } from '../env.variables.js';


class Authorization extends Request {

    async getJwtToken(userId) {
        
        const ropcService = new Ropc();
        let token;
        let token2;
        let dualPlanBody;

        this.jsonHeaders = {
            'Content-Type': 'application/json',
            'Authorization': await ropcService.getToken(),
            'api-key' : environmentVariables.apiKey,
            'Ocp-Apim-Subscription-Key' : environmentVariables.subscriptionKey
        };
        
        let body = {};
        userId.medicalMemberIdWithTpa ? body.medicalMemberIdWithTpa = userId.medicalMemberIdWithTpa : '';
        userId.dvMemberIdWithTpa ? body.dvMemberIdWithTpa = userId.dvMemberIdWithTpa : '';
        
       /*
        let body = {
            'medicalMemberIdWithTpa': userId.memberId + userId.tpaClient + userId.tpaId + userId.tpaDiv,
            'dvMemberIdWithTpa': ''
        };

        if (userId.hasMixedConsumerProfile) {
            body.dvMemberIdWithTpa = userId.dvMemberId + userId.tpaClient + userId.tpaId + userId.tpaDiv;
        } else if (userId.dvMemberId){
            body.medicalMemberIdWithTpa = '';
            body.dvMemberIdWithTpa = userId.dvMemberId + userId.tpaClient + userId.tpaId + userId.tpaDiv;
        }
        */
        const url = `${endpoints.baseURL}Authorization/api/delegatedaccesstokens`;
        const firstToken = await this.POST(url, body, this.jsonHeaders); 
        
        token = firstToken.json.jwt
        
        const memberId = userId.medicalMemberIdWithTpa || userId.dvMemberIdWithTpa;
        
        if (userId.dualMemberIdWithTpa) {
            dualPlanBody = { //TODO check how it will be working for DUAL after fix DUAL on MHOL
                'medicalMemberIdWithTpa': memberId,
            };
            
            body = { ...body, ...dualPlanBody };
            
            const secondToken = await this.POST(url, body, this.jsonHeaders);
            
            token2 = secondToken.json.jwt
            
            return { token, token2 };
        } else {
            return { token };
        }
    }

    async getJwtTokenForAssociateMember (consumerProfile, userToken){

        const url = `${ endpoints.baseURL }authorization/api/delegatedaccesstokensforassociatemember`;
        const body = {
            'medicalMemberIdWithTpa': consumerProfile.memberId + consumerProfile.tpaClient + consumerProfile.tpaId + consumerProfile.tpaDiv,
        }
        this.jsonHeaders = collector.getHeaders(userToken);
        const token = await this.POST(url, body, this.jsonHeaders);
        
        return token.json.jwt;
    }
}

export const auth = new Authorization();
