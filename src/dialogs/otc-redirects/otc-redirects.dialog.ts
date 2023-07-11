import { ActivityTypes, StatePropertyAccessor, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY } from '../../common/constants';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';

export const OTC_REDIRECTS = 'OTC_REDIRECTS';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

export class OtcRedirectDialog extends CancelAndHelpDialog {

    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;

    constructor(id: string, userState: UserState) {
        super(id || OTC_REDIRECTS);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);

        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this),
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const consumer: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        let message: string;
        const consumerStatus: string[] = ['Active', 'FutureActive', '', 'Termed'];

        if (consumer.memberStatus === 'Termed' && (consumer.eligibilityType === 'SNP' || consumer.eligibilityType === 'Medicare')) {
            message = 'Your coverage is not currently active, so you are not eligible to place an order for over-the-counter (OTC) items at this time.';
            await stepContext.context.sendActivity(message);
            return await stepContext.next({ isSuccess: true });
        } else {
            if (consumerStatus.includes(consumer.memberStatus)) {
                switch (consumer.eligibilityType) {
                    case 'SNP':
                        if (consumer.memberStatus === 'FutureActive') {
                            message = `Your coverage isn\'t active yet. Once it is, you can order Over-the-Counter (OTC) items online by ` +
                                `visiting [UPMC for Life Complete Care HMO SNP Shop Healthy Card](#/main/content/spending-accounts) and clicking the link to the UPMC for Life OTC page.`;
                            await stepContext.context.sendActivity(message);

                        } else {
                            message = `You can order Over-the-Counter (OTC) items online by ` +
                                `visiting [UPMC for Life Complete Care HMO SNP Shop Healthy Card](#/main/content/spending-accounts) and clicking the link to the UPMC for Life OTC page.`;
                            await stepContext.context.sendActivity(message);
                        }
                        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                        message = `You can also view the OTC Catalog by clicking the link below. ` +
                            `<a href="https://websolutionscdn.blob.core.windows.net/mhol/Speningaccount/2023_UPMC_Shop_Healthy_Member_Catalog.pdf" target="_blank">UPMC for Life Shop Healthy Card Catalog</a>`;
                        await stepContext.context.sendActivity(message);
                        break;
                    case 'Medicare':
                        if (consumer.memberStatus === 'FutureActive') {
                            message = `Your coverage isn\'t active yet. Once it is, you can order Over-the-Counter (OTC) items online by ` +
                                `visiting [UPMC for Life Flex Spend Card](#/main/content/spending-accounts) and clicking the link to the UPMC for Life OTC page.`;
                            await stepContext.context.sendActivity(message);
                        } else {
                            message = `You can order Over-the-Counter (OTC) items online by ` +
                                `visiting [UPMC for Life Flex Spend Card](#/main/content/spending-accounts) and clicking the link to the UPMC for Life OTC page.`;
                            await stepContext.context.sendActivity(message);
                        }
                        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                        message = `You can also view the OTC Catalog by clicking the link below. ` +
                            `<a href="https://websolutionscdn.blob.core.windows.net/mhol/Speningaccount/2023_UPMC_Member_Catalog_Final.pdf" target="_blank">UPMC for Life Flex Spend Card Catalog</a>`;
                        await stepContext.context.sendActivity(message);
                        break;
                    default:
                        message = 'There is no OTC catalog associated with your plan.';
                        await stepContext.context.sendActivity(message);
                        return await stepContext.next({ isSuccess: true });
                }
            }

        }

        return await stepContext.next({ isSuccess: false });
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: stepContext.result.isSuccess });
    }
}
