import { Dialog } from "botbuilder-dialogs";
import { BotTelemetryClient } from 'botbuilder';

import { ITelemetryData, ITelemetryTextLog, ITelemetryFailedAnswering, ITelemetryLiveChatData, IAnalyticsData, IDialogData } from '../interfaces/telemetry.interface';
import { logger } from "../logger";
import { config } from "../config";

export class TelemetryService {
    private telemetryClient: BotTelemetryClient;

    constructor(dialog: Dialog) {
        this.telemetryClient = dialog.telemetryClient;
    }

    public sendTextLogToTelemetry(telemetryData: ITelemetryData, dialogData: IDialogData, lastMessageFromUser: string, lastMessagesFromBot: Array<string>, token?:string, token2?: string) {      
        let addInfo = telemetryData.intent ? telemetryData.intent : 'prompt choice';
        lastMessageFromUser = telemetryData.isChoicePrompt ? lastMessageFromUser + ' - ' + '[' + addInfo + ']' : lastMessageFromUser;
        let telemetryTextLog: ITelemetryTextLog = {
            reasonOfFailure: telemetryData.reasonOfFailure,
            lastMessageFromUser,
            lastMessagesFromBot,
            intent: telemetryData.intent,
            isFirstQuestion: telemetryData.isFirstQuestion
        };
        this.telemetryClient.trackEvent({
            name: 'messageLogs',
            properties: telemetryTextLog
        });
        let analyticsData: IAnalyticsData = {
            timeStamp: dialogData.timeStamp,
            userId: dialogData.userId,
            channel: dialogData.channel,
            userQuestion: dialogData.userQuestion,
            botAnswer: dialogData.botAnswer,
            intent: telemetryData.intent,            
            reasonOfFailure : telemetryData.reasonOfFailure,             
            isFirstQuestion: telemetryData.isFirstQuestion,            
            lastMessageFromUser,
            lastMessagesFromBot  
        };
        let eventValues = {
            eventName: 'messageLogs',
            eventData: analyticsData
        };
        if (token) {
            this.sendMessageLogsToEventHub(eventValues, token, token2);
        }        
    }

    public sendTransitionToLiveChatDataToTelemetry(telemetryData: ITelemetryData, lastMessages: Array<string>) {
        if (telemetryData.isTransitionToLiveChatOver) {
            let telemetryLiveChatData: ITelemetryLiveChatData = {
                transitionSuccess: telemetryData.isTransitionSuccessful,
                reasonOfFailedTransition: telemetryData.reasonOfFailedTransition,
                lastMessages
            }
            this.telemetryClient.trackEvent({
                name: 'liveChatTransitionLogs',
                properties: telemetryLiveChatData
            });
        }
    }

    public sendFailedAnsweringToTelemetry(reason: string, lastMessageFromUser: string) {
        let telemetryFailedAnswering: ITelemetryFailedAnswering = {
            lastMessageFromUser,
            reason
        };
        this.telemetryClient.trackEvent({
            name: 'failedAnsweringLogs',
            properties: telemetryFailedAnswering
        });
    }

    private async sendMessageLogsToEventHub(eventDataObj: any, token:string, token2: string) {
        
        const requestURL: string = `${config.baseURL}ChatBot/api/analytics/chatbotlog`;        
        const messageLogBody = JSON.stringify(eventDataObj);
        config.headers.Authorization = `Bearer ${ token }`;
        return await fetch(requestURL, {
            method: 'POST',
            body: messageLogBody,
            headers: token2 ? { ...config.headers, 'Authorization2': token2 } : config.headers,
        }).then((response: Response) => {
            if (response.ok) {
                return response.json();
            } else {
                logger.error(response.status + ': ' + response.statusText + ' ' + response.url);
                return null;
            }
        })
        .catch((error) => {
            console.log('Telemetry Service To Event-hub Error Message: ', error);
            logger.error('Telemetry Service To Event-hub: ' + error);
            return null;
        });
    }
}
