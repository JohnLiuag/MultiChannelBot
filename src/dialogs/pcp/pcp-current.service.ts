import { config } from '../../common/config';
import { logger } from '../../common/logger';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { IPcp } from './interfaces/pcp-current.interface';
import { CommonService } from '../../common/services/common.service';

export class PCPCurrentService {
    private commonService: CommonService;

    constructor() {
        this.commonService = new CommonService();
    }

    async getPCPData(subscriberNumber: string, profile: IConsumerProfile, token: string): Promise<IPcp> {
        const tpaData = this.commonService.getTpaData(subscriberNumber, profile);
        config.headers.Authorization = `Bearer ${token}`;
        let requestURL: string = `${config.baseURL}SubscriberProvider/api/PCPs`;
        const params = {
            memberId: subscriberNumber,
            shouldShowImputedPcp: 'true',
            tpaId: tpaData.tpaId,
            tpaDiv: tpaData.tpaDiv,
            tpaClient: tpaData.tpaClient
        }
        requestURL += '?' + new URLSearchParams(params).toString();

        const response = await fetch(requestURL, {
            method: 'GET',
            headers: config.headers
        }).then(this.checkStatus);
        return response;
    }

    getPCPDetailedInfo(currentPCPInfo: IPcp, shouldShowImputedPCPName?: boolean, imputedPCPName?: string): string {
        const phoneNumberOnlyNumbers = currentPCPInfo.officePhoneNumber ? currentPCPInfo.officePhoneNumber.replace(/\D/g, '') : null;
        const officeNumberFormatted = phoneNumberOnlyNumbers ? phoneNumberOnlyNumbers.slice(0,3) + '-' + phoneNumberOnlyNumbers.slice(3,6) + '-'  + phoneNumberOnlyNumbers.slice(6,15) : '';

        return (currentPCPInfo.officeName ? `**${currentPCPInfo.officeName}** \n` : ``) +
            (shouldShowImputedPCPName ?
                    (currentPCPInfo.providerName ? `Assigned PCP: ${currentPCPInfo.providerName} \n` : ``) +
                    (imputedPCPName ? `PCP from your recent claims: ${imputedPCPName} \n` : ``)
                : currentPCPInfo.providerName ? `${currentPCPInfo.providerName} \n` : ``) +
            (currentPCPInfo.officeAddress1 ? `${currentPCPInfo.officeAddress1} \n` : ``) +
            (currentPCPInfo.officeAddress2 ? `${currentPCPInfo.officeAddress2} \n` : ``) +
            (currentPCPInfo.officeCity ? `${currentPCPInfo.officeCity}, ` : ``) +
            (currentPCPInfo.officeState ? `${currentPCPInfo.officeState} ` : ``) +
            (currentPCPInfo.officeZipCode ? `${currentPCPInfo.officeZipCode} \n` : ``) +
            (`${officeNumberFormatted }`);
    }

    getFindCareRedirectURL(consumerProfile: IConsumerProfile, token: string): string {
        let id = '';
        if (['chc', 'medicaid'].includes(consumerProfile.eligibilityType.toLowerCase())) {
            id = consumerProfile.employeeNumber;
        } else {
            id = consumerProfile.memberId;
        }
        return `<a href="${config.findCareBaseURL}find?memberid=${id}#id_token=${token}" target="_blank">Find Care</a>`;
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
