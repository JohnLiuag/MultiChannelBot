import { ActivityTypes, StatePropertyAccessor, UserState } from "botbuilder";
import { CancelAndHelpDialog } from "../cancel-and-help.dialog";
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from "botbuilder-dialogs";
import { CONSUMER_PROFILE_PROPERTY } from "../../common/constants";
import { IConsumerProfile } from "../../common/interfaces/user-profile.interface";

export const FLEXCARD_FAQ = 'FLEXCARD_FAQ';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

export class FlexCardFAQDialog extends CancelAndHelpDialog {
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;

    constructor(id: string, userState: UserState) {
        super(id || FLEXCARD_FAQ);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);

        this.initialDialogId = WATERFALL_DIALOG;
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this)
        ]));
    }

    async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        let isSuccess: boolean = true;
        const questionType: 'medical' | 'unused' | 'dental' | 'new' | 'eligible_stores' | 'walmart' | 'giant' = stepContext.options['questionType'];
        const consumer: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        let message = 'We are unable to provide this information right now. If you have questions about how your spending account can be used, please type **"help"** to chat with a concierge.';

        switch (questionType) {
            case 'medical':
                if (consumer.eligibilityType.toLowerCase() === 'medicare') {
                    message = `You cannot use your UPMC for Life Flex Spend card to pay copayments, deductibles, or other fees to medical providers. You can use the card to pay for over-the-counter products and dental, vision, and hearing services. ` +
                        `<a href="https://www.upmchealthplan.com/medicare/members/upmc-flex-card.aspx" target="_blank">Click here</a> to see covered services, covered retail products, and the mail-order catalog. `
                } else if (consumer.eligibilityType.toLowerCase() === 'snp') {
                    message = `You cannot use your UPMC for Life Complete Care (HMO SNP) Shop Healthy card to pay copayments and other fees to medical providers. You can use the card to pay for covered over-the-counter products and healthy foods. ` +
                        `<a href="https://www.upmchealthplan.com/snp/members/upmc-shop-healthy-card.aspx" target="_blank">Click here</a> to see covered healthy foods, covered retail products, and the mail-order catalog. `
                } else {
                    isSuccess = false
                }
                await stepContext.context.sendActivity(message);
                break;
            case 'unused':
                if (consumer.eligibilityType.toLowerCase() === 'medicare') {
                    message = `You can use your UPMC for Life Flex Spend card funds at any time throughout the year. Any unused funds will not roll over at the end of the year.`

                } else if (consumer.eligibilityType.toLowerCase() === 'snp') {
                    message = `With your UPMC for Life Shop Healthy card, you will receive a quarterly (every three months) allowance that can be used at any time throughout the quarter. Any unused funds will not roll over to the next quarter.`
                } else {
                    isSuccess = false;
                }
                await stepContext.context.sendActivity(message);
                break;
            case 'dental':
                if (consumer.eligibilityType.toLowerCase() === 'medicare') {
                    if (stepContext.context.activity.channelId === 'webchat') {
                        message = `You can use your UPMC for Life Flex Spend funds to pay out-of-pocket costs for dental services. You can use your card only at providers that accept MasterCard. If needed, you can also pay out-of-pocket and submit for reimbursement by visiting the [UPMC for Life Flex Spend Card](#/main/content/spending-accounts) page and clicking the link to the UPMC for Life Flex Spend Card Portal.`
                    }
                    if (stepContext.context.activity.channelId === 'directline') {
                        message = `You can use your UPMC for Life Flex Spend funds to pay out-of-pocket costs for dental services. You can use your card only at providers that accept MasterCard. If needed, you can also pay out-of-pocket and submit for reimbursement by visiting [UPMC for Life Flex Spend Card](#/main/content/spending-accounts) and tapping Submit Reimbursement.`
                    }
                } else if (consumer.eligibilityType.toLowerCase() === 'snp') {
                    message = `Your UPMC for Life Shop Healthy Card cannot be used to pay for dental services.`
                } else {
                    isSuccess = false;
                }
                await stepContext.context.sendActivity(message);
                break;
            case 'new':
                if (consumer.eligibilityType.toLowerCase() === 'medicare') {
                    message = `A Health Care Concierge can request a new UPMC For Life Flex Spend card for you. If you need to request one, please type **"help"** to chat with a concierge.`
                } else if (consumer.eligibilityType.toLowerCase() === 'snp') {
                    message = `A Health Care Concierge can request a new Shop Healthy card for you. If you need to request one, please type **"help"** to chat with a concierge. `
                }
                isSuccess = false;
                await stepContext.context.sendActivity(message);
                break;
            case 'eligible_stores':
                if (consumer.eligibilityType.toLowerCase() === 'medicare') {
                    message = `You can use your UPMC for Life Flex Spend Card to pay for out-of-pocket dental, vision, and hearing services only at providers that accept Mastercard. You can also use your card to pay for covered over-the-counter products at any participating retail location, including Giant Eagle, Kroger, Rite Aid, Walgreens, and Walmart.  To learn more, please click the link below to open the UPMC for Life Flex Spend OTC catalog.`
                    await stepContext.context.sendActivity(message);
                    await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                    message = `<a href="https://websolutionscdn.blob.core.windows.net/mhol/Speningaccount/2023_UPMC_Member_Catalog_Final.pdf" target="_blank">UPMC for Life Flex Spend Card Catalog</a>`;
                    await stepContext.context.sendActivity(message);
                } else if (consumer.eligibilityType.toLowerCase() === 'snp') {
                    message = `You can use your Shop Healthy Card to pay for covered over-the-counter products and healthy foods at any participating retail location, including Giant Eagle, Kroger, Rite Aid, Walgreens, and Walmart.  To learn more, please click the link below to open the UPMC for Life Shop Healthy OTC catalog.`
                    await stepContext.context.sendActivity(message);
                    await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                    message = `<a href="https://websolutionscdn.blob.core.windows.net/mhol/Speningaccount/2023_UPMC_Shop_Healthy_Member_Catalog.pdf" target="_blank">UPMC for Life Shop Healthy Card Catalog</a>`;
                    await stepContext.context.sendActivity(message);
                } else {
                    isSuccess = false;
                }
                await stepContext.context.sendActivity(message);
                break;
            case 'walmart':
                if (consumer.eligibilityType.toLowerCase() === 'medicare') {
                    if (stepContext.context.activity.channelId === 'webchat') {
                        message = `Your UPMC for Life Flex Spend card can be used at Walmart for covered over-the-counter (OTC) items. Your funds can also be used at Walmart Vision Centers, but your card may not work at all locations. ` +
                            `If it doesn't work, you can submit out-of-pocket expenses for reimbursement by visiting the [UPMC for Life Flex Spend Card](#/main/content/spending-accounts) and clicking the link to the UPMC for Life Flex Spend Card Portal.`
                    } else if (stepContext.context.activity.channelId === 'directline') {
                        message = `Your UPMC for Life Flex Spend card can be used at Walmart for covered over-the-counter (OTC) products. Your funds can also be used at Walmart Vision Centers, but your card may not work at all locations. If it doesn't work, you can submit out-of-pocket purchases for reimbursement by visiting [UPMC for Life Flex Spend Card](#/main/content/spending-accounts) and tapping Submit Reimbursement.`
                    }
                } else if (consumer.eligibilityType.toLowerCase() === 'snp') {
                    message = `Your UPMC for Life Complete Care (HMO SNP) Shop Healthy card can be used to purchase covered over-the-counter (OTC) items and healthy foods at Walmart. At checkout, simply swipe your Shop Healthy Card to pay for covered products. After swiping your card, if you still owe a remaining amount, you can use another form of payment to complete your transaction.`
                } else {
                    isSuccess = false;
                }
                await stepContext.context.sendActivity(message);
                break;
            case 'giant':
                if (consumer.eligibilityType.toLowerCase() === 'medicare') {
                    message = `Giant Eagle is an eligible retailer, but your UPMC for Life Flex Spend card cannot be used at self-checkout registers at this time.`
                } else if (consumer.eligibilityType.toLowerCase() === 'snp') {
                    message = `Giant Eagle is an eligible retailer, but your UPMC for Life Complete Care (HMO SNP) Shop Healthy Card cannot be used at self-checkout registers at this time.`
                } else {
                    isSuccess = false;
                }
                await stepContext.context.sendActivity(message);
                break;
        }

        return await stepContext.next({ isSuccess });
    }



    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: stepContext.result.isSuccess });
    }

}