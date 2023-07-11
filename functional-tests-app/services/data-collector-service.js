import endpoints from '../constants/endpoints.js'; 
import Request from './request.service.js';
import { environmentVariables } from '../env.variables.js';
import { user } from './user.service.js';
import fs from 'fs';

class DataCollector extends Request {

    getHeaders (userToken) {

        let headers = {
            'Content-Type': 'application/json',
            'Api-Key': environmentVariables.apiKey,
            'Ocp-Apim-Subscription-Key': environmentVariables.subscriptionKey,
            Authorization: `Bearer ${ userToken.token }`,
        };
        let dynamicHeaders;

        if (userToken.token2) {
            dynamicHeaders = {
                Authorization2: userToken.token2,
            }
        }

        headers = { ...headers, ...dynamicHeaders };
        
        return headers;
    }

    async getConsumerProfile(userToken) {

        const url = `${ endpoints.baseURL }consumerportal/api/consumerprofile`;
        this.jsonHeaders = this.getHeaders(userToken);
        let { response, json } = await this.GET(url, this.jsonHeaders);
        
        return json;
    }

    async getEligibility(consumerProfile, userToken) {
        
        const userIds = [];
        const eligibilities = [];
        consumerProfile.medicalMemberId ? userIds.push(consumerProfile.medicalMemberId) : '';
        consumerProfile.dentalVisionMemberId ? userIds.push(consumerProfile.dentalVisionMemberId) : '';
        this.jsonHeaders = this.getHeaders(userToken);
        
        for (let id of userIds) {
            const url = `${ endpoints.baseURL }Subscriber/api/Subscription/${ id.slice(0, -2) }?limitEligibilityHistory=true`;
            const { json } = await this.GET(url, this.jsonHeaders);
            const userEligibilityPlans = json.filter(json => json.personNumber === id.slice(-2));
            eligibilities.push(userEligibilityPlans[0]);
        }

        return eligibilities;
    }

    async getDependentEligibility(consumerProfile, userToken) {

        const userIds = [];
        const eligibilities = [];
        const holderMemberInfo = consumerProfile.policyHolderMemberInfo;
        holderMemberInfo.medicalMemberId ? userIds.push(holderMemberInfo.medicalMemberId) : '';
        holderMemberInfo.dentalVisionMemberId ? userIds.push(holderMemberInfo.dentalVisionMemberId) : '';
        this.jsonHeaders = this.getHeaders(userToken);

        for (let id of userIds) {
            const url = `${ endpoints.baseURL }Subscriber/api/Subscription/${ id.slice(0, -2) }?limitEligibilityHistory=true`;
            const { response, json } = await this.GET(url, this.jsonHeaders);
            eligibilities.push(json);
        }
        
        return eligibilities;
    }

    async getHixStatus(memberId, userToken) {
        
        this.jsonHeaders = this.getHeaders(userToken);
        const url = `${ endpoints.baseURL }Invoices/api/Hix/${ memberId }`;
        const { json } = await this.GET(url, this.jsonHeaders);
        const currentDate = new Date(); 
        
        const hixStatus = json.hixStatus.filter(function(hix) {
            const statusEffectiveDate = hix.statusEffectiveDate ? new Date(hix.statusEffectiveDate) : '';
            const statusClosedDate = hix.statusClosedDate ? new Date(hix.statusClosedDate) : '';
            return (statusEffectiveDate && statusEffectiveDate <= currentDate) && (!statusClosedDate || statusClosedDate >= currentDate);
        })

        return hixStatus;
    }

    async getSpendingSummary(memberId, userToken) {

        const url = `${ endpoints.baseURL }spendingsummary/api/CurrentSpendingSummary/${ memberId }`;
        this.jsonHeaders = this.getHeaders(userToken);
        let { response, json } = await this.GET(url, this.jsonHeaders);
        
        return json.benefitLevelInfos;
    }

    async getSpendingAccounts(userToken) {
        
        const url = `${ endpoints.baseURL }SpendingAccounts/api/transactions?request.shouldGetAllTransactions=false`;
        this.jsonHeaders = this.getHeaders(userToken);
        let { response, json } = await this.GET(url, this.jsonHeaders);
        
        return json.spendingAccounts;
    }

    async getDualCoverageInfo(memberId, userToken) {

        const url = `${ endpoints.baseURL }consumerportal/api/AssociatedMemberId/${ memberId }`;
        this.jsonHeaders = this.getHeaders(userToken);
        let { response, json } = await this.GET(url, this.jsonHeaders);
        
        return json;
    }

    async getIdCardsInfo(memberId, userToken) {

        const url = `${ endpoints.baseURL }IDCard/api/types/${ memberId }`;
        this.jsonHeaders = this.getHeaders(userToken);
        let { response, json } = await this.GET(url, this.jsonHeaders);

        return json.idCardTypes;
    }

    async getIdCardUrl(userData, cardId) {
    
        let memberId;
        let idCardsUrls = [];
        let dentalDiscountCardUrl;

        const idCardDetails = {
            medicalSubscriberId: '',
            dentalSubscriberId: '',
            hasVisionInMedical: false,
        };

        idCardDetails.medicalSubscriberId = userData.consumerProfile.mc400MemberId || '';
        idCardDetails.dentalSubscriberId = userData.consumerProfile.dentalVisionMemberId || '';
        idCardDetails.hasVisionInMedical = userData.consumerProfile.hasNva; 

        switch (cardId) {
            case 0:
                memberId = idCardDetails.medicalSubscriberId;
                break;
            case 1:
                memberId = idCardDetails.dentalSubscriberId;
                break;
            case 2:
                if (idCardDetails.hasVisionInMedical) {
                    memberId = idCardDetails.medicalSubscriberId;
                } else {
                    memberId = idCardDetails.dentalSubscriberId;
                }
                break;
            default:
                memberId = '';
                break;
        }
    
        function getIdCardEndPoint(cardId, memberId, side) {

            // side = 'front' | 'back' | 'both'
            let url = '';
            let format = 'png';     // png/pdf/jpeg
            let device = 'mobile';  // 'mobile' or 'web'. Bot uses 'mobile'

            switch (cardId) {
                case 0:
                    url = `${endpoints.baseURL}IdCard/api/idcards/${memberId}/${format}/${side}?isBase64format=true`;
                    break;
                case 1:
                    url = `${endpoints.baseURL}IdCard/api/DentalIDCards/${memberId}/${format}?face=${side}&device=${device}`;
                    break;
                case 2:
                    url = `${endpoints.baseURL}IDCard/api/visionidcards/${memberId}/${format}?face=${side}&device=${device}`;
                    break;
                default:
                    url = '';
                    break;
            }
            return url;
        }

        this.headers = this.getHeaders(userData.userToken);

        if ([0, 1, 2].includes(cardId)) {
            const urlFormat = 'data:image/png;base64,';
            const getFaceCardUrlPromise = this.GET(getIdCardEndPoint(cardId, memberId, 'front'), this.jsonHeaders);
            const getBackCardUrlPromise = this.GET(getIdCardEndPoint(cardId, memberId, 'back'), this.jsonHeaders);
            const getFaceCardUrl = getFaceCardUrlPromise;
            const getBackCardUrl = getBackCardUrlPromise;
            getFaceCardUrl.response.status === 200 ? idCardsUrls.push(`${ urlFormat }${ getFaceCardUrl.json }`) : '';
            getBackCardUrl.response.status === 200 ? idCardsUrls.push(`${ urlFormat }${ getBackCardUrl.json }`) : '';
        } else if (cardId === 3) {
            idCardsUrls.push('https://websolutionscdn.blob.core.windows.net/membermobile/idcards-png/Assist_America_frontSide.png');
            idCardsUrls.push('https://websolutionscdn.blob.core.windows.net/membermobile/idcards-png/Assist_America_backSide.png');
        } else if (cardId === 4) {
            const contentId = 2247;
            const url = `${endpoints.baseURL}UmbracoCMS/api/ContentData/${ contentId }`;
            const { response, json } = await this.GET(url, this.jsonHeaders);
            dentalDiscountCardUrl = json.contents[0].value.section1.split('href="')[1].split('"')[0];
            idCardsUrls.push(dentalDiscountCardUrl);
        }
        return idCardsUrls;
    }

    async getInvoicesData (userToken, memberId) {
        
        const url = `${ endpoints.baseURL }Invoices/api/Billing/${ memberId }`;
        this.jsonHeaders = this.getHeaders(userToken);
        const { response, json } = await this.GET(url, this.jsonHeaders);
        const status = response.status;
        
        return { status, json };
    }

    async getLiveChatStatus (userToken) {
        
        const url = `${ endpoints.baseURL }UmbracoCMS/api/ContentData/c77aca39-40fd-4521-b893-02a1e2a92927`;
        this.jsonHeaders = this.getHeaders(userToken);
        const { response, json } = await this.GET(url, this.jsonHeaders);
        
        return json;
    }

    async getLiveChatWorkingHours (userToken) {
        
        const url = `${ endpoints.baseURL }UmbracoCMS/api/ContentData/93fb2ad4-f037-4b1c-95a1-2e742e58308c`;
        this.jsonHeaders = this.getHeaders(userToken);
        const { response, json } = await this.GET(url, this.jsonHeaders);
        
        return json;
    }

    async getForms (userToken) {
        
        const url = `${ endpoints.baseURL }UmbracoCMS/api/ContentData/2106`;
        this.jsonHeaders = this.getHeaders(userToken);
        const { response, json } = await this.GET(url, this.jsonHeaders);
        
        return json;
    }

    async getHomeSafetyForm (userToken) {
        
        const url = `${ endpoints.baseURL }UmbracoCMS/api/ContentData/2080`;
        this.jsonHeaders = this.getHeaders(userToken);
        const { response, json } = await this.GET(url, this.jsonHeaders);
        
        return json;
    }

    async getNvaDiscountPlanForm (userToken) {
        
        const url = `${ endpoints.baseURL }UmbracoCMS/api/ContentData/2183`;
        this.jsonHeaders = this.getHeaders(userToken);
        const { response, json } = await this.GET(url, this.jsonHeaders);
        let pdfFileLink;
        const status = response.status;
        
        if (status === 200) {
            json.contents.forEach(element => {
                for (const section in element.value) {
                    if (element.value[section].includes('NVA EyeEssential Discount Plan')) {
                        pdfFileLink = `<a href="${ element.value[section].match(/https:\/\/.+\.pdf/g) }" target="_blank">NVA EyeEssential Discount Plan</a>`;
                    }
                }
            })
        }
        
        return { pdfFileLink, status }
    }

    async getVisionDiscountSchedule (consumerProfile, eligibility, userToken) {

        const activePlan = eligibility[0].eligibilities.filter(eligibilities => eligibilities.eligibilityStatus.toLowerCase() === 'active');
        const eligibilityPlan = activePlan.length === 1 ? activePlan[0] : eligibility[0].eligibilities[0];
        let medicalPartitionRiders = [];
                eligibilityPlan.memberRiders.forEach (rider => {
                    medicalPartitionRiders.push({
                        type: rider.riderType,
                        code: rider.riderCode
                    },)
                })
            
        const getDataUrl = `${ endpoints.baseURL }documents/api/search`;
        this.jsonHeaders = this.getHeaders(userToken);
        let body = {
            year: consumerProfile.planStartDate.slice(0, 4),
            eligibilityType: consumerProfile.eligibilityType, // "Commercial"
            careType: 'medical',
            medicalPartitionRiders: medicalPartitionRiders,
            documentTypes: [{name: 'benefits'}]
        }
        const documentData = await this.POST(getDataUrl, body, this.jsonHeaders);
        const getFileUrl = `${ endpoints.baseURL }documents/api/BlobDocument?fileName=${ documentData.json.documents[0]?.documentUrl }`;
        const fileData = await this.GETBLOB(getFileUrl, this.jsonHeaders);
        
        return fileData;
    }

    async getPcpInfo(userToken, memberId) {

        const url = `${ endpoints.baseURL }SubscriberProvider/api/PCPs?memberId=${ memberId }&shouldShowImputedPcp=true`
        this.jsonHeaders = this.getHeaders(userToken);
        let { response, json } = await this.GET(url, this.jsonHeaders);
        const status = response.status;
        
        return { status, json };
    }

    async getMedicareFlexCard(userToken) {
        
        const url = `${ endpoints.baseURL }SpendingAccounts/api/rewardaccount`;
        this.jsonHeaders = this.getHeaders(userToken);
        let { response, json } = await this.GET(url, this.jsonHeaders);
        const status = response.status;

        return { status, json };
    }

    async getTaxForm(userToken, consumerProfile) {
        
        const memberId = consumerProfile.medicalMemberId || consumerProfile.dentalVisionMemberId;
        const url = `${ endpoints.baseURL }documents/api/FileNetDocumentsMetadata`;
        this.jsonHeaders = this.getHeaders(userToken);
        const currentYear = new Date().getFullYear();
        const previousYear = currentYear - 1;
        const body = {
            "sourceSystemKey": "hp-1095b",
            "indexedFields": [
                {
                    "key": "DocumentType",
                    "value": "1095-B"
                },
                {
                    "key": "Year",
                    "value": previousYear
                },
                {
                    "key": "SubscriberNumber",
                    "value": memberId.slice(0, -2)
                }
            ]
        }
        const { response, json } = await this.POST(url, body, this.jsonHeaders);
        let documentId;
        let fileData;
        json.forEach(element => {
            element.indexedFields.forEach(file => {
                file.key === 'Year' && file.value === previousYear.toString() ? documentId = element.documentId : '';
            });
        })
        const status = response.status;
        const fileUrl = `${ endpoints.baseURL }documents/api/FileNetDocuments?request.sessionToken=${ userToken.token }&request.sourceSystemKey=hp-1095b&request.documentId=${ documentId }`;
        if (documentId) {
            fileData = await this.GETBLOB(fileUrl, this.jsonHeaders);
        }
        
        return { status, json, fileData };
    }

    async getMenuStatus(userToken) {

        const url = `${ endpoints.baseURL }UmbracoCMS/api/ContentData/2380ab98-1b49-404c-97dc-b8a248566b75`;
        this.jsonHeaders = this.getHeaders(userToken);
        let { response, json } = await this.GET(url, this.jsonHeaders);
        let menuStatus;
        json.contents ? menuStatus = json.contents.length > 0 : '';
        
        return menuStatus;
    }

    async getPreferencesData(userToken) {
        const url = `${ endpoints.baseURL }PreferenceCenter/api/Preferences`;
        this.jsonHeaders = this.getHeaders(userToken);
        let { response, json } = await this.GET(url, this.jsonHeaders);
        const preferredName = json.preferences.personalPreferences.preferredName;

        return { preferredName }
    }

    async updatePreferredName(userToken) {
        const url = `${ endpoints.baseURL }PreferenceCenter/api/Preferences`;
        this.jsonHeaders = this.getHeaders(userToken);
        const body = [
            {
                "op": "replace",
                "path": "/personalPreferences/preferredName",
                "value": "1"
            }
        ]

        const { response, json } = await this.PATCH(url, body, this.jsonHeaders);
        
        return { response, json }
    }

    async collectData (userId, requestedData = [], data = {}) {

        !data.userToken ? data.userToken = await user.getUserToken(userId) : '';
        !data.consumerProfile ? data.consumerProfile = await this.getConsumerProfile(data.userToken): '';
        !data.menuStatus ? data.menuStatus = await this.getMenuStatus(data.userToken): '';

        const memberId = data.consumerProfile.medicalMemberId || data.consumerProfile.dentalVisionMemberId;

        requestedData.includes('eligibility') ? data.eligibility = await this.getEligibility(data.consumerProfile, data.userToken) : '';
        requestedData.includes('dependentEligibility') ? data.dependentEligibility = await this.getDependentEligibility(data.consumerProfile, data.userToken) : '';
        requestedData.includes('hixStatus') ? data.hixStatus = await this.getHixStatus(memberId, data.userToken) : '';
        requestedData.includes('spendingAccounts') ? data.spendingAccounts = await this.getSpendingAccounts(data.userToken) : '';
        requestedData.includes('benefits') ? data.benefitLevelInfos = await this.getSpendingSummary(memberId, data.userToken) : '';
        requestedData.includes('idCards') ? data.idCardsInfo = await this.getIdCardsInfo(memberId, data.userToken) : '';
        requestedData.includes('dualInfo') ? data.dualCoverageInfo = await this.getDualCoverageInfo(memberId, data.userToken) : '';
        requestedData.includes('invoices') ? data.invoices = await this.getInvoicesData(data.userToken, memberId) : '';
        requestedData.includes('liveChatStatus') ? data.liveChatStatus = await this.getLiveChatStatus(data.userToken) : '';
        requestedData.includes('liveChatWorkingHours') ? data.liveChatWorkingHours = await this.getLiveChatWorkingHours(data.userToken) : '';
        requestedData.includes('forms') ? data.forms = await this.getForms(data.userToken) : '';
        requestedData.includes('medicareFlexCard') ? data.medicareFlexCard = await this.getMedicareFlexCard(data.userToken) : '';
        requestedData.includes('taxForm') ? data.taxForm = await this.getTaxForm(data.userToken, data.consumerProfile) : '';
        requestedData.includes('pcp') ? data.pcp = await this.getPcpInfo(data.userToken, memberId) : '';
        requestedData.includes('homeSafetyForm') ? data.homeSafetyForm = await this.getHomeSafetyForm(data.userToken) : '';
        requestedData.includes('visionDiscountPlan') ? data.visionDiscountPlan = await this.getNvaDiscountPlanForm(data.userToken) : '';
        requestedData.includes('visionDiscountSchedule') ? data.visionDiscountSchedule = await this.getVisionDiscountSchedule(data.consumerProfile, data.eligibility, data.userToken) : '';
        
        return data;
    }
   
    async getData (userId, requestedData = [], deleteSecondToken) {
        
        let data = {};
        let fileData;
        const memberId = userId.dualMemberIdWithTpa || userId.medicalMemberIdWithTpa || userId.dvMemberIdWithTpa;
        const TEMP_STORAGE = './test-data/temp-users-data';
        const requiredAdditionalData = []

        try {
            fileData = fs.readFileSync(`${ TEMP_STORAGE }/${ memberId }.json`,'utf8');
        } catch (err) {}
        
        if (fileData) {
            data = JSON.parse(fileData);
            requestedData.includes('eligibility') && !data.eligibility ? requiredAdditionalData.push('eligibility') : '';
            requestedData.includes('dependentEligibility') && !data.dependentEligibility ? requiredAdditionalData.push('dependentEligibility') : '';
            requestedData.includes('hixStatus') && !data.hixStatus ? requiredAdditionalData.push('hixStatus') : '';
            requestedData.includes('spendingAccounts') && !data.spendingAccounts ? requiredAdditionalData.push('spendingAccounts') : '';
            requestedData.includes('benefits') && !data.benefitLevelInfos ? requiredAdditionalData.push('benefits') : '';
            requestedData.includes('idCards') && !data.idCardsInfo ? requiredAdditionalData.push('idCards') : '';
            requestedData.includes('dualInfo') && !data.dualCoverageInfo ? requiredAdditionalData.push('dualInfo') : '';
            requestedData.includes('invoices') && !data.invoices ? requiredAdditionalData.push('invoices') : '';
            requestedData.includes('liveChatStatus') && !data.liveChatStatus ? requiredAdditionalData.push('liveChatStatus') : '';
            requestedData.includes('liveChatWorkingHours') && !data.liveChatWorkingHours ? requiredAdditionalData.push('liveChatWorkingHours') : '';
            requestedData.includes('forms') && !data.forms ? requiredAdditionalData.push('forms') : '';
            requestedData.includes('medicareFlexCard') && !data.medicareFlexCard ? requiredAdditionalData.push('medicareFlexCard') : '';
            requestedData.includes('taxForm') && !data.taxForm ? requiredAdditionalData.push('taxForm') : '';
            requestedData.includes('pcp') && !data.pcp ? requiredAdditionalData.push('pcp') : '';
            requestedData.includes('homeSafetyForm') && !data.homeSafetyForm ? requiredAdditionalData.push('homeSafetyForm') : '';
            requestedData.includes('visionDiscountPlan') && !data.visionDiscountPlan ? requiredAdditionalData.push('visionDiscountPlan') : '';
            requestedData.includes('visionDiscountSchedule') && !data.visionDiscountSchedule ? requiredAdditionalData.push('visionDiscountSchedule') : '';

            data = await this.collectData(userId, requiredAdditionalData, data);
        } else {
            data = await this.collectData(userId, requestedData, {});
        }
        
        data = JSON.stringify(data);

        fs.writeFile(`${ TEMP_STORAGE }/${ memberId }.json`, data, (err) => {
            if (err) {
              console.error(err);
            }
        });
        
        data = JSON.parse(data);
        
        return data;
    }
}

export const collector = new DataCollector();
