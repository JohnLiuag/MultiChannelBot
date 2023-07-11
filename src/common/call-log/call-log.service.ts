
import { config } from '../config';
import { logger } from '../logger';
import { IConsumerProfile } from '../interfaces/user-profile.interface';
import { RopcService } from '../services/ropc.service';
import { IAddDiscussionTopicsRequestBody, IGetReferenceIdRequestBody, IGetReferenceIdResponse } from './call-log.interface';
import { getReferenceIdRequestBodyTpl } from './constants';
import { CommonService } from '../services/common.service';

const delay = ms => new Promise(res => setTimeout(res, ms));
// service for working with CallLog endpoints
export class CallLogService {
    private static instance: CallLogService;
    private ropcService: RopcService;
    private commonService: CommonService;
    public cache: SimpleCache | RedisCacheCCD;
    private ttlInSeconds: number;
    constructor(redisClient?: any, ttlInSeconds?: number) {
        if (CallLogService.instance) {
            return CallLogService.instance;
        }
        CallLogService.instance = this;

        if (redisClient) {
            this.cache = new RedisCacheCCD(redisClient, ttlInSeconds);
        } else {
            this.cache = new SimpleCache();
        }
        this.ropcService = new RopcService();
        this.commonService = new CommonService();
    }

    // Get Reference id of a CallLog
    async getReferenceId(profile: IConsumerProfile): Promise<IGetReferenceIdResponse> {
        const token = await this.ropcService.getToken();
        const tpaData = this.commonService.getTpaData(profile.memberId, profile);
        config.headers.Authorization = `Bearer ${token}`;
        const requestBody: IGetReferenceIdRequestBody = {
            ...getReferenceIdRequestBodyTpl,
            callerId: profile.memberId,
            callerName: profile.firstName + ' ' + profile.lastName,
            contacts: [{
                name: profile.firstName + ' ' + profile.lastName,
                id: profile.memberId,
                phoneNumber: '',
            }],
            tpaClient: tpaData.tpaClient,
            tpaId: tpaData.tpaId,
            tpaDiv: tpaData.tpaDiv,
        };
        const requestURL: string = `${config.baseURL}CallLog/api/CallLog`;
        const response = await fetch(requestURL, {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: config.headers,
        }).then(this.checkStatus) as IGetReferenceIdResponse;
        return response;
    }

    // Add NEW Discussion topics to CallLog
    async addDiscussionTopics(
        profile: IConsumerProfile,
        messages: Array<string>,
        conversationId: string
    ): Promise<any> {
        const token = await this.ropcService.getToken();
        const tpaData = this.commonService.getTpaData(profile.memberId, profile);
        let  cachedData = await this.cache.get(conversationId);
        let  isInProgress = await this.cache.inProgress.has(conversationId)
        if (isInProgress) {
            // simple and fast solution, but not always working correctly for all cases.
            // There should be an implementation of the queue ..
            await delay(400);
            return this.addDiscussionTopics(profile, messages, conversationId);
        } else if ( !cachedData?.referenceId) {
            isInProgress = true;
            await this.cache.inProgress.add(conversationId);
            const getReferenceIdRespo: IGetReferenceIdResponse = await this.getReferenceId(profile);
            await this.cache.set(conversationId, { referenceId: getReferenceIdRespo.callLog.referenceId });
        }

        cachedData = await this.cache.get(conversationId);
        const currentDate = new Date();
        const requestBody: IAddDiscussionTopicsRequestBody = {
            referenceId: cachedData.referenceId,
            interactionId: '',
            tpaClient: tpaData.tpaClient,
            tpaId: tpaData.tpaId,
            tpaDiv: tpaData.tpaDiv,
            callLogDiscussions: [
                {
                    discussionId: cachedData?.discussionId || '',   // For the first requeest of the chat it should be empty. On subsequent requests of the
                                                                    // same chat, it should have value. Value should be {ReferenceId-01-01}. Example : 2222000015-01-01
                    memberId: profile.memberId,
                    memberName: profile.firstName + ' ' + profile.lastName,
                    documentType: 'MEDICAL',
                    subReferenceType: 'MB',
                    dob: profile.dateOfBirth,
                    memberIdType: null,
                    isArchived: false,
                    topics: [
                        {
                            // topicId: '',
                            discussionDate: currentDate,             // TODO: update  ex: 2022-08-11 ?
                            discussionTime: currentDate,
                            discussionTopic: 'ChatBot',
                            conciergeId: 'chatbot_app',
                            discussionSubtopic: {
                                subtopicName: 'Chat Transcript',
                                environment: 'CCD',                  // are these properties required? --> YES
                                categoryCode: 'CCD',
                                activityCode: 'CCDXXX',
                                callReason: '',
                                // quickSelectUIFormat: '',
                                // quickSelectFields: [],
                                // requiredFields: [],
                            },
                            notes: [
                                {
                                    notes: messages.join('\n\n'),    // collect messages here
                                    noteDate: currentDate,
                                    noteTime: currentDate,
                                    addedBy: 'chatbot_app',
                                    isArchived: false,               // always false
                                    isDraft: true,                   // "always false" ?
                                }
                            ],
                        }
                    ]
                }
            ]
        };
        config.headers.Authorization = `Bearer ${token}`;
        const requestURL: string = `${config.baseURL}CallLog/api/CallLog/Chatbot/Topics/${cachedData.referenceId}`;
        const response = await fetch(requestURL, {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: config.headers,
        }).then(this.checkStatus) as any;
        if (!cachedData?.discussionId) {
            await this.cache.update(conversationId, { discussionId: response.discussions[0].id });
        }
        if (isInProgress) {
            await this.cache.inProgress.delete(conversationId)
        }

        return response;
    }

    /*
    currently not used
    using of it under discussion
    */
    async submitCallLog(callLogId: string, profile): Promise<any> {

        const token = await this.ropcService.getToken();
        config.headers.Authorization = `Bearer ${token}`;
        const requestBody = {
            tpaClient: profile.tpaClient,
            tpaId: profile.tpaId,
            tpaDiv: profile.tpaDiv,
        };

        const requestURL: string = `${config.baseURL}CallLog/SubmitCutLog/${callLogId}`;
        const response = await fetch(requestURL, {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: config.headers,
        }).then(this.checkStatus) as IGetReferenceIdResponse;

        return response;
    }

    private checkStatus(res: Response) {
        if (res.ok) { // res.status >= 200 && res.status < 300
            return res.json();
        } else {
            logger.error(res.status + ': ' + res.statusText + ' ' + res.url);
            throw new Error(res.status + ': ' + res.statusText);
        }
    }
}

class SimpleCache {
    public inProgress: Set<string>;
    private keys: Array<string>;
    private map: Map<string, IConversationInfo>;
    private maxSize: number;

    constructor() {
        this.map = new Map<string, IConversationInfo>();
        this.inProgress = new Set<string>();
        this.maxSize = 5000;
        this.keys = [];
    }

    async get(key: string): Promise<IConversationInfo> {
        // this.map.set(key, { discussionId: '2222700113-01-01', referenceId: '2222700113' })
        return Promise.resolve(this.map.get(key));
    }

    async update(key: string, value: IConversationInfo) {
        this.map.set(key, {
            ...this.map.get(key),
            ...value,
        });
        return Promise.resolve();
    }

    async set(key: string, value: IConversationInfo) {
        if (this.map.size >= this.maxSize) {
            // clear
            for (let i = 0; i++; i < 20) {
                this.map.delete(this.keys[i]);
            }
            this.keys = this.keys.slice(20);
        }
        if (!this.map.has(key)) {
            this.keys.push(key);
        }
        return Promise.resolve(this.map.set(key, value));
    }
}

class RedisCacheCCD {
    public inProgress: RedisSet;
    private redisClient: any;
    private ttlInSeconds: number;

    constructor(redisClient: any, ttlInSeconds: number) {
        this.redisClient = redisClient;
        this.inProgress = new RedisSet('chatbot:ccd:inprogerss', redisClient);
        this.ttlInSeconds = ttlInSeconds ? ttlInSeconds : 24 * 60 * 60;
    }

    async get(key: string): Promise<IConversationInfo> {
        return this.redisClient.hGetAll(key);
    }

    async update(key: string, value: IConversationInfo) {
        return this.redisClient.hSet(key, value);
    }

    async set(key: string, value: IConversationInfo) {
        let result = await this.redisClient.hSet(key, value);
        this.redisClient.expire(key, this.ttlInSeconds);
        return result;
    }
}

class RedisSet {
    private redisClient: any;
    private name: string;

    constructor(name: string, redisClient: any) {
        this.redisClient = redisClient;
        this.name = name;
    }

    async add(value: string) {
        return this.redisClient.sAdd(this.name, value);
    }

    async has(value: string) {
        return this.redisClient.sIsMember(this.name, value);
    }

    async delete(value: string) {
        return this.redisClient.sRem(this.name, value);
    }
}

interface IConversationInfo {
    referenceId?: string;
    discussionId?: string;
}
