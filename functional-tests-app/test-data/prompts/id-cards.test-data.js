function CardsObject (card) {
    this.locale = "en-EN";
    this.type = "message";
    this.channelId = "webchat";
    this.from = {
        "id": ""
    };
    this.textFormat = "plain";
    this.text = card   
}

export const upmcHealthPlanIdCard = new CardsObject("UPMC Health Plan ID Card");
export const dentalIdCard = new CardsObject("Dental");
export const visionIdCard = new CardsObject("Vision");
export const assistAmericaIdCard = new CardsObject("Assist America");
export const dentalDiscountIdCard = new CardsObject("Dental Discount Plan");

export const idCardsIds = {
    upmcHealthPlan: 0,
    dental: 1,
    vision: 2,
    assistAmerica: 3,
    dentalDiscount: 4
}