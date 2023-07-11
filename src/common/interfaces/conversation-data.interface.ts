export interface IConversationData {
    isUserGreeted?: boolean;
    hasMenuOptions?: boolean;
    currentLiveChatOption?: {
        key: string;
        value: string;
    };
}
