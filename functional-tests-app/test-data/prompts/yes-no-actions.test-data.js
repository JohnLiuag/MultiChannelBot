function ActionObject (actionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.channelId = "webchat";
    this.from = {
        "id": ""
    };
    this.text = actionText;
}

export const yes = new ActionObject("Yes");
export const no = new ActionObject("No");
