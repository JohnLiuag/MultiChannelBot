import {setTimeout} from "timers/promises";
import Request from './request.service.js';
import url from '../constants/endpoints.js';
import { reporter } from './reporter.service.js';
import { environmentVariables } from '../env.variables.js';

const TIME_TO_EXPIRATION = 5 * 60; //5 min

class Conversation extends Request {

    chatTokenExpiresTime;
    chatTokenData = {
        conversationId: '',
        token: '',
        refreshToken: '',
        expiresIn: '',
    };

    constructor() {
        super();
    }

    async generateChatToken(consumerProfile, platform) {
        
        const chatBotToken = platform === 'web' ? environmentVariables.webChatSecret : environmentVariables.directLineSecret;
        const userId = consumerProfile.medicalMemberId || consumerProfile.dentalVisionMemberId;
        const body = {
            "user": {
                "id": userId,
                "name": `${consumerProfile.firstName} ${consumerProfile.lastName}`
            }
        };
        this.jsonHeaders = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ chatBotToken }`
        };
        const {response, json } = await this.POST(url.tokens.GENERATE_TOKEN, body, this.jsonHeaders);
        
        return json;
    }

    async getChatToken(consumerProfile, platform) {

        const chatData = await this.generateChatToken(consumerProfile, platform);
        const body = {
            "user": {}
        };
        this.jsonHeaders = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${chatData.token}`,
        };
        const { response, json } = await this.POST(url.tokens.CHAT_TOKEN, body, this.jsonHeaders);

        this.chatTokenData = {
            conversationId: json.conversationId,
            token: json.token,
            refreshToken: json.token,
            expiresIn: json.expires_in,
        }

        const tokenObj = JSON.parse(Buffer.from(this.chatTokenData.token.split('.')[1], 'base64').toString());
        this.chatTokenExpiresTime = tokenObj['exp'];
    }

    async refresChatToken (chatToken) {

        const body = {
            "user": {}
        };
        this.jsonHeaders = {
            'Content-Type': 'application/json',
            'Authorization': chatToken,
        };
        const { response, json } = await this.POST(url.tokens.REFRESH_CHAT_TOKEN, body, this.jsonHeaders);

        this.chatTokenData = {
            conversationId: json.conversationId,
            token: json.token,
            refreshToken: json.token,
            expiresIn: json.expires_in,
        }
        const tokenObj = JSON.parse(Buffer.from(this.chatTokenData.token.split('.')[1], 'base64').toString());
        this.chatTokenExpiresTime = tokenObj['exp'];

        return this.setBearerToken(json.token);
    }
    
    getBody (consumerProfile, name, value = '') {
        
        const userId = consumerProfile.medicalMemberId || consumerProfile.dentalVisionMemberId;
        
        return {
            "from": {
                "id": userId,
                "name": `${consumerProfile.firstName} ${consumerProfile.lastName}` 
            },
            "name": name,
            "type": "event",
            "value": value
        }
    }
    
    async sendUserToken(consumerProfile, userToken) {
        
        const body = this.getBody(consumerProfile, "data_transfer/token", userToken);
        
        return await this.POST(this.url, body);
    }

    async sendUserToken2(consumerProfile, userToken) {  //used to request data for dual plan
        
        const body = this.getBody(consumerProfile, "data_transfer/token2", userToken);
        
        return await this.POST(this.url, body);
    }

    async sendConsumerProfile(consumerProfile) {
        
        const body = this.getBody(consumerProfile, "data_transfer/consumerprofile", consumerProfile);
        
        return await this.POST(this.url, body);
    }

    async startConversation(consumerProfile) {
        
        const body = this.getBody(consumerProfile, "custom_event/startConversation");
        
        return await this.POST(this.url, body);
    }

    async postMessage(body, consumerProfile) {

        const userId = consumerProfile.medicalMemberId || consumerProfile.dentalVisionMemberId;
        const dynamicMemberId = {
            "from": {
                "id": userId
            }
        };
        const messageBody = { ...body, ...dynamicMemberId };
        let postMessage;
        let retryCounter = 0;
        if (this.chatTokenExpiresTime) {
            const expDate = new Date(this.chatTokenExpiresTime * 1000);
            const timeBeforeExpiration = (expDate.getTime() - Date.now()) / 1000;
            if (timeBeforeExpiration < TIME_TO_EXPIRATION) {
                await this.refresChatToken(this.jsonHeaders.Authorization);
            }
        }
        do {
            retryCounter++;
            postMessage = await this.POSTmessage(this.url, messageBody);
        } while (postMessage.response.status === 502 && retryCounter < 3); //add 3 attampts

        return postMessage;
    }

    async getActivity(activityId) {
        
        await setTimeout(2000); //set an additional timeout to let bot complete the answer so we don't miss any part of a response
        
        const watermark = activityId.slice(-7);
        const { response, json } = await this.GETactivity(this.url, super.jsonHeaders, watermark);
        
        //Remove answer element from a bot's response if it doesn't apply to a current watermark (common issue on post message retry on error 502)
        json.activities = json.activities.filter(function (element, replyToId) {
            return (element.replyToId.includes(watermark));
        });
        
        let answer = [];
        let answersArray = [];
        let urls = [];
        let buttons = [];
        let followUpQuestion = [];
        let transitionData; //used for live-chat transfer activities
        const followUpQuestionsArray = [
            'Would you like to see your', //deductible/oop next level follow up question
            'What would you like to chat about?', //common 1st follow up question
            'You can type your message below, or type **"menu"** to see more topics.' //common 2nd follow up question
        ];
        const exceptionFollowUpQuestionsArray = [
            'Would you like to see your ID card?', //Id numbers follow up question
            'Would you like to see a different ID card?' //Id cards follow up question
        ]
        
        json.activities.forEach(element => {
            if (element.text) { //collect answers and follow up questions
                const hasFollowUpText = followUpQuestionsArray.some(text => element.text.includes(text)) && !exceptionFollowUpQuestionsArray.some(text => element.text.includes(text)) 
                hasFollowUpText ? followUpQuestion.push(element.text) : (answer.push(element.text), answersArray.push(element.text));
            }
            if (element.suggestedActions) { //collect buttons
                element.suggestedActions.actions.forEach(action => {
                    buttons.push(action.value);
                })
            }
            if (element.attachments) { //collect id cards urls
                element.attachments.forEach(attachment => {
                    attachment.contentUrl ? urls.push(attachment.contentUrl) : '';
                    if (attachment.content) {
                        attachment.content.body.forEach(key => {
                            urls.push(key.url);
                        })
                    }
                })
            }
            element.name === 'data_transfer/livechat_start_logs' ? transitionData = element.value : ''; //used for live-chat transfer activities 
            element.name === 'custom_event/openRedirectUrl' ? transitionData = element.value : ''; //used for live-chat transfer activities
        });
       
        answer = answer.join(' ');
        
        return { response, json, answer, answersArray, followUpQuestion, buttons, transitionData, urls };
    }

    async getFile(fileUrl) {
        const fileData = this.GETBLOB(fileUrl[0], this.jsonHeaders)
        return fileData;
    }
    
    async teardown(context) {
        reporter.printResults(context);
    }
}

export default Conversation;
