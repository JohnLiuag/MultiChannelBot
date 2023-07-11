function ActionObject (actionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.channelId = "webchat";
    this.from = {
        "id": ""
    };
    this.text = actionText;
}

export const yes = new ActionObject("YES");
export const no = new ActionObject("NO");

export const buttons = ['YES', 'NO'];
