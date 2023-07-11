export interface ITelemetryData {
    reasonOfFailure?: string;
    intent?: string;
    isTransitionSuccessful?: boolean;
    reasonOfFailedTransition?: string;
    isTransitionToLiveChatOver?: boolean;
    isChoicePrompt?: boolean;
    isFirstQuestion?: boolean;
}

export interface ITelemetryTextLog {
    reasonOfFailure?: string;
    lastMessageFromUser: string;
    lastMessagesFromBot: Array<string>;
    intent: string;
    isFirstQuestion: boolean;
}

export interface ITelemetryFailedAnswering {
    lastMessageFromUser: string;
    reason?: string;
}

export interface ITelemetryLiveChatData {
    transitionSuccess: boolean;
    reasonOfFailedTransition: string;
    lastMessages: Array<string>;
}

export interface IAnalyticsData {
    timeStamp:Date,
    userId: string,
    channel: string,
    intent: string,
    userQuestion: string,
    botAnswer: string,
    reasonOfFailure?: string,
    lastMessageFromUser: string,
    lastMessagesFromBot: Array<string>,    
    isFirstQuestion: boolean
}

export interface IDialogData {
    timeStamp:Date,
    userId: string,
    channel: string,
    userQuestion: string,
    botAnswer: string
}