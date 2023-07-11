import * as ACData from "adaptivecards-templating";
import { CardFactory } from "botbuilder";
import { Attachment } from 'botframework-schema';

import * as gotoLiveChatJson from "../../resources/cards/goto-livechat.card.json";


export class AdaptiveCardsService {
    private static instance: AdaptiveCardsService;
    private gotoLiveChatTemplate: ACData.Template;

    constructor() {
        if (AdaptiveCardsService.instance) {
            return AdaptiveCardsService.instance;
        }
        AdaptiveCardsService.instance = this;

        this.gotoLiveChatTemplate = new ACData.Template(gotoLiveChatJson);
    }

    getGotoLiveChatCard(message: string): Attachment {
        let cardData = this.gotoLiveChatTemplate.expand({
            $root: {
                'message': message
            }
        });
        return CardFactory.adaptiveCard(cardData)
    }
}
