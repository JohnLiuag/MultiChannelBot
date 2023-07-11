function ActionObject (actionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.channelId = "webchat";
    this.from = {
        "id": ""
    };
    this.text = actionText;
}

export const payPremiumBill = new ActionObject("Pay Premium Bill");
export const payMedicalBill = new ActionObject("Pay Medical Bill");
export const upmcFacility = new ActionObject("UPMC Facility");
export const otherFacility = new ActionObject("Other Facility");