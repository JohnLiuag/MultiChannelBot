function ActionObject (actionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.channelId = "webchat";
    this.from = {
        "id": ""
    };
    this.text = actionText;
}

export const fsa = new ActionObject("FSA");
export const hsa = new ActionObject("HSA");
export const hia = new ActionObject("HIA");
export const hra = new ActionObject("HRA");
export const pkg = new ActionObject("PKG");
export const trn = new ActionObject("TRN");
export const dca = new ActionObject("DCA");
export const flexSpendCard = new ActionObject("Flex Spend Card");
export const shopHealthyCard = new ActionObject("Shop Healthy Card");
export const askAboutSomethingElse = new ActionObject("Ask about something else");


