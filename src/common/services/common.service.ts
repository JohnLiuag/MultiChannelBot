import { ISubscription } from "../interfaces/subscription.interface";
import { IConsumerProfile } from "../interfaces/user-profile.interface";

import { config } from '../../common/config';
import { logger } from '../../common/logger';


export class CommonService {
    private static instance: CommonService;
    microServicesUrl: string;

    constructor() {
        if (CommonService.instance) {
            return CommonService.instance;
        }
        CommonService.instance = this;
    }

    async getAllPlans(subscriberNumber: string, profile: IConsumerProfile, token: string, token2: string): Promise<ISubscription[]> {
        config.headers.Authorization = `Bearer ${token}`;
        let requestURL: string = `${config.baseURL}Subscriber/api/Subscription/${subscriberNumber}`;
        let tpaData = this.getTpaData(subscriberNumber, profile);
        const params = {
            limitEligibilityHistory: 'true',
            tpaId: tpaData.tpaId,
            tpaDiv: tpaData.tpaDiv,
            tpaClient: tpaData.tpaClient
        }
        requestURL += '?' + new URLSearchParams(params).toString();

        const response = await fetch(requestURL, {
            method: 'GET',
            headers: token2 ? { ...config.headers, 'Authorization2': token2 } : config.headers,
        }).then(this.checkStatus);

        return response;
    }

    getTpaData(memberId: string, profile: IConsumerProfile): {tpaId: string, tpaDiv: string, tpaClient: string} {
        if (profile.dentalVisionMemberId?.indexOf(memberId) === 0) {
            return {
                tpaId: profile.dentalVisionTpaId,
                tpaDiv:profile.dentalVisionTpaDiv,
                tpaClient: profile.dentalVisionTpaClient
            }
        } else {
            return {
                tpaId: profile.medicalTpaId,
                tpaDiv:profile.medicalTpaDiv,
                tpaClient: profile.medicalTpaClient
            }
        }
    }

    checkStatus(res: Response) {
        if (res.ok) { // res.status >= 200 && res.status < 300
            return res.json();
        } else {
            logger.error(res.status + ': ' + res.statusText + ' ' + res.url);
            throw new Error(res.status + ': ' + res.statusText);
        }
    }
}
