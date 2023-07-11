import { ActivityTypes, StatePropertyAccessor, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY, USER_AUTH_PROPERTY } from '../../../common/constants';
import { IUserAuth } from '../../../common/interfaces/user-auth.interface';
import { IConsumerProfile } from '../../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../../cancel-and-help.dialog';
import { ISubscription } from '../../../common/interfaces/subscription.interface';
import { IInvoices } from '../interfaces/invoices.interface';
import { BillingService } from '../billing.service';
import { CommonService } from '../../../common/services/common.service';

export const BILLING_MONTHLY_PREMIUM = 'BILLING_MONTHLY_PREMIUM';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';


export class BillingMonthlyPremiumDialog extends CancelAndHelpDialog {
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private billingService: BillingService;
    private commonService: CommonService;

    constructor(id: string, userState: UserState) {
        super(id || BILLING_MONTHLY_PREMIUM);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.billingService = new BillingService();
        this.commonService = new CommonService();
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this)
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const profile: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
        let subscriptionData: ISubscription[];

        try {
            subscriptionData = await this.commonService.getAllPlans(profile.memberId.substring(0, 9), profile, userAuth.token, userAuth.token2);
        } catch {
            const message = `We don't have this information yet.<br>` +
            `Once your invoice is available, you can view your current balance, `+
            `make a payment, or set up autopay by visiting the billing portal. \n` +
            `<br>` +
            `[Premium Payments](#/main/content/view-pay-premium-bills)`;
            await stepContext.context.sendActivity(message);
            return await stepContext.endDialog({ success: true });
        }

        const currentUser: ISubscription = subscriptionData.find(el => el.memberId === profile.memberId);
        const eligibility = currentUser.eligibilities;
        const eligibilityTypeDescription = eligibility[0].eligibilityTypeDescription.toLowerCase();
        const userDoesHavePremiumBilling = eligibility[0].billType === 'I'
            && (eligibilityTypeDescription === 'chip' || currentUser.age > 17)
            && !(eligibilityTypeDescription === 'snp')
            && !(eligibilityTypeDescription === 'chip' && (['KIDS1E', 'KISDS1W', 'KIDS01'].includes(eligibility[0].groupNumber)))
            && !(eligibility[0].corpId === 'U250' || eligibility[0].corpId === 'U281');
        const isPolicyHolderUser = profile.memberId.slice(-2) === '01';

        if (isPolicyHolderUser) {
            if (userDoesHavePremiumBilling) {
                let invoices: IInvoices;
                try {
                    invoices = await this.billingService.getInvoices(profile.memberId, userAuth.token, userAuth.token2);
                } catch {
                    const message = `We don't have this information yet.<br>` +
                    `Once your invoice is available, you can view your current balance, `+
                    `make a payment, or set up autopay by visiting the billing portal. \n` +
                    `<br>` +
                    `[Premium Payments](#/main/content/view-pay-premium-bills)`;
                    await stepContext.context.sendActivity(message);
                    return await stepContext.endDialog({ success: true });
                }
                const invoice = this.billingService.getLatestInvoice(invoices);
                if (+invoice.currentBalance > 0) {
                    const firstMessage = `Your total amount due is **$${invoice.currentBalance.toFixed(2)}**.`;
                    const secondMessage = `You can view your current balance, make a payment, `+
                        `or set up autopay by visiting the billing portal. \n` +
                        `<br>` +
                        `[Premium Payments](#/main/content/view-pay-premium-bills)`;
                    await stepContext.context.sendActivity(firstMessage);
                    await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                    await stepContext.context.sendActivity(secondMessage);
                    return stepContext.next();
                } else {
                    const firstMessage = `Your current balance is **$0**.`;
                    const secondMessage = `You can view your current balance, make a payment, ` +
                        `or set up autopay by visiting the billing portal. \n` +
                        `<br>` +
                        `[Premium Payments](#/main/content/view-pay-premium-bills)`;
                    await stepContext.context.sendActivity(firstMessage);
                    await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                    await stepContext.context.sendActivity(secondMessage);
                    return stepContext.next();
                }
            } else {
                const message = `With this type of coverage, `+
                    `you do not pay a monthly premium directly to UPMC Health Plan. `+
                    `No premium payment is required.`;
                await stepContext.context.sendActivity(message);
                return stepContext.next();
            }
        } else {
            const message = `Premium information can only be accessed by the subscriber of the policy.`;
            await stepContext.context.sendActivity(message);
            return stepContext.next();
        }
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: true });
    }
}
