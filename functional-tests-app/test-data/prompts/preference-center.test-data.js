function ActionObject (actionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.channelId = "webchat";
    this.from = {
        "id": ""
    };
    this.text = actionText;
}

export const choseNotToDisclose = new ActionObject("Choose not to disclose");
export const notListed = new ActionObject("Not Listed");
export const theyThem = new ActionObject("They/Them");
export const heHim = new ActionObject("He/Him");
export const sheHer = new ActionObject("She/Her");
