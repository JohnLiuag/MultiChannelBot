import {setTimeout} from "timers/promises";
import { auth } from './auth.service.js';
import { reporter } from './reporter.service.js';
import Conversation from './conversation.service.js';


class User {

    constructor(credentials) {
        this.credentials = credentials;
        this.conversation = new Conversation();
    }

    async getUserToken(userId) {
        return auth.getJwtToken(userId);   
    }

    async startChat(userToken, consumerProfile, platform, context) {
        
        await this.conversation.getChatToken(consumerProfile, platform); //get chatToken and conversationId
        this.conversation.setURL(this.conversation.chatTokenData.conversationId); //Adjust conversationId to a chat session
        this.conversation.setBearerToken(this.conversation.chatTokenData.token); //Adjust chatToken to a chat session

        //The next requests start conversation
        await this.conversation.sendUserToken(consumerProfile, userToken.token);
        await this.conversation.sendConsumerProfile(consumerProfile);
        const token2 = await auth.getJwtTokenForAssociateMember(consumerProfile, userToken);
        await this.conversation.sendUserToken2(consumerProfile, token2);
        await this.conversation.startConversation(consumerProfile);
        await setTimeout(2000); //timeout provides an additional time to start chat session before first question is asked

        this.reportRequests(context); 
    }

    reportRequests(context) {
        reporter.printResults(context);
    }
}

export const user = new User();
