import { config } from '../../common/config';
import { logger } from '../../common/logger';
import { CommonService } from '../../common/services/common.service';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { ILiveChatAvailable, ILiveChatAvailableHours, ILiveChatSubTopics, ILiveChatToken, ILiveChatTokenRequestData, ILiveChatTopicPosted, ILiveChatTopics } from './interfaces/live-chat-transition.interface';

export class LiveChatTransitionService {
    private commonService: CommonService;

    constructor() {
        this.commonService = new CommonService();
    }

    async getIsLiveChatAvailable(token: string): Promise<ILiveChatAvailable> {
        config.headers.Authorization = `Bearer ${ token }`;
        const requestURL: string = `${config.baseURL}UmbracoCMS/api/ContentData/c77aca39-40fd-4521-b893-02a1e2a92927`;
        const response = await fetch(requestURL, {
            method: 'GET',
            headers: config.headers
        }).then(this.checkStatus);

        return response;
    }

    async getLiveChatAvailableHours(token: string): Promise<ILiveChatAvailableHours> {
        config.headers.Authorization = `Bearer ${ token }`;
        const requestURL: string = `${config.baseURL}UmbracoCMS/api/ContentData/93fb2ad4-f037-4b1c-95a1-2e742e58308c`;
        const response = await fetch(requestURL, {
            method: 'GET',
            headers: config.headers
        }).then(this.checkStatus);

        return response;
    }

    async getLiveChatTopics(token: string): Promise<ILiveChatTopics> {
        config.headers.Authorization = `Bearer ${ token }`;
        const requestURL: string = `${config.baseURL}UmbracoCMS/api/ContentData/06864b17-34da-4537-a514-7c32bf75043e`;
        const response = await fetch(requestURL, {
            method: 'GET',
            headers: config.headers
        }).then(this.checkStatus);

        return response;
    }

    async saveLiveChatTopic(token: string, chatTopicKey: string): Promise<ILiveChatTopicPosted> {
        config.headers.Authorization = `Bearer ${ token }`;
        const chatOptionRequestURL: string = `${config.baseURL}Chat/api/setselectedchatoption?chatOption=${chatTopicKey}`;
        const response = await fetch(chatOptionRequestURL, {
            method: 'POST',
            headers: config.headers
        }).then(this.checkStatus);

        return response;
    }

    async getLiveChatSubTopics(token: string, chatTopicKey: string): Promise<ILiveChatSubTopics> {
        config.headers.Authorization = `Bearer ${ token }`;

        const savedTopicStatus = await this.saveLiveChatTopic(token, chatTopicKey);
        let response;

        if (savedTopicStatus.isSuccess) {
            const chatSubTopicsRequestURL: string = `${config.baseURL}UmbracoCMS/api/ContentData/dcdfdaf8-f6b5-475d-8781-08ba55966355`;
            response = await fetch(chatSubTopicsRequestURL, {
                method: 'GET',
                headers: config.headers
            }).then(this.checkStatus);
        } else {
            response = [];
        }

        return response;
    }

    async getLiveChatToken(token: string, consumerInfo: IConsumerProfile, chatTopic: string, chatSubTopic: string, userQuestion1: string, userQuestion2: string, isMobileLiveChat: boolean, referenceId: string): Promise<ILiveChatToken> {
        const tpaData = this.commonService.getTpaData(consumerInfo.memberId, consumerInfo);
        const data: ILiveChatTokenRequestData = {
            'chatBotRefId': referenceId,
            'chatBotQuestions': [{
                'question1': userQuestion1,
                'question2': userQuestion2,
            }],
            'applicationKey': isMobileLiveChat ? 'MemberMobileApp' : 'ConsumerPortalWebApp',
            'firstName': consumerInfo.firstName,
            'lastName': consumerInfo.lastName,
            'nickName': consumerInfo.firstName,
            'email': consumerInfo.emailId || '',
            'subject': chatTopic,
            'chatTopic': chatSubTopic,
            'lobName': 'Chat_Testing',
            'memberId': consumerInfo.memberId,
            'vnumber': '',
            'callerType': 'Member',
            'userId': '',
            'tpaClient': tpaData.tpaClient,
            'tpaDiv': tpaData.tpaDiv,
            'tpaId': tpaData.tpaId
        };

        config.headers.Authorization = `Bearer ${ token }`;
        const requestURL: string = `${config.baseURL}Chat/api/v3/start`;
        const response = await fetch(requestURL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: config.headers
        }).then(this.checkStatus);

        return await response;
    }

    async getLiveChatStartURL(token: string, consumerInfo: IConsumerProfile, chatTopic: string, chatSubTopic: string, userQuestion1: string, userQuestion2: string, isMobileLiveChat: boolean, referenceId: string): Promise<string> {
        const chatTokenResponse: ILiveChatToken = await this.getLiveChatToken(token, consumerInfo, chatTopic, chatSubTopic, userQuestion1, userQuestion2, isMobileLiveChat, referenceId);

        let startChatUrl = '';
        if (chatTokenResponse && chatTokenResponse.success) {
            startChatUrl = `${config.liveChatBaseURL}#/livechat/${chatTokenResponse.token}?sessionToken=${token}&eligibilityType=${consumerInfo.eligibilityType}`
        }

        return startChatUrl;
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
