import { ActivityTypes, StatePropertyAccessor, UserState, ActionTypes } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext, ListStyle, ChoicePrompt } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY, USER_AUTH_PROPERTY } from '../../../common/constants';
import { IConsumerProfile } from '../../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../../cancel-and-help.dialog';
import { ISubscription } from '../../../common/interfaces/subscription.interface';
import { IUserAuth } from '../../../common/interfaces/user-auth.interface';
import { IInvoices } from '../interfaces/invoices.interface';
import { BillingService } from '../billing.service';
import { BILLING_MEDICAL } from '../billing-medical/billing-medical.dialog';
import { CommonService } from '../../../common/services/common.service';

export const BILLING_GENERAL = 'BILLING_GENERAL';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const CHOICE_PROMPT = 'CHOICE_PROMPT';


export class BillingGeneralDialog extends CancelAndHelpDialog {
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private billingService: BillingService;
    private commonService: CommonService;
    constructor(id: string, userState: UserState) {
        super(id || BILLING_GENERAL);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.billingService = new BillingService();
        this.commonService = new CommonService();
        this.addDialog(new ChoicePrompt(CHOICE_PROMPT));
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.selectBillTypeStep.bind(this),
            this.selectFacilityStep.bind(this),
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


        if (userDoesHavePremiumBilling && isPolicyHolderUser) {
            const message = `What are you trying pay for?`;
            await stepContext.context.sendActivity(message);
            const choiceOptions = [{
                title: 'Pay Medical Bill',
                value: 'Pay Medical Bill'
            },
            {
                title: 'Pay Premium Bill',
                value: 'Pay Premium Bill'
            }];

            return await stepContext.prompt(CHOICE_PROMPT,
                {
                    style: ListStyle.suggestedAction,
                },
                choiceOptions.map(el => {
                    return {
                        value: el.value,
                        action: {
                            type: ActionTypes.ImBack,
                            title: el.title,
                            value: el.title,
                        },
                    }
                })
            );
        } else {
            return await stepContext.replaceDialog(BILLING_MEDICAL);
        }
    }

    private async selectBillTypeStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        if ((stepContext.result && stepContext.result.value) && (stepContext.result.value.toLowerCase() === 'pay premium bill')) {
            const profile: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
            const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
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
        }
        if ((stepContext.result && stepContext.result.value) && (stepContext.result.value.toLowerCase() === 'pay medical bill')) {
            const message = `Can you tell me what medical or hospital bill you are trying to pay?`;
            await stepContext.context.sendActivity(message);
            const choiceOptions = [{
                title: 'Other Facility',
                value: 'Other Facility'
            },
            {
                title: 'UPMC Facility',
                value: 'UPMC Facility'
            }];

            return await stepContext.prompt(CHOICE_PROMPT,
                {
                    style: ListStyle.suggestedAction,
                },
                choiceOptions.map(el => {
                    return {
                        value: el.value,
                        action: {
                            type: ActionTypes.ImBack,
                            title: el.title,
                            value: el.title,
                        },
                    }
                })
            );
        }
    }

    private async selectFacilityStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        if ((stepContext.result && stepContext.result.value) && (stepContext.result.value.toLowerCase() === 'upmc facility')) {
            const firstMessage = `Have a MyUPMC account? The easiest way to pay your hospital or physician bill is on ` +
                `<a href="https://myupmc.upmc.com/" target="_blank">MyUPMC</a>.`;
            const secondMessage = `If you have received a bill in mail, you can also pay your bill here. \n` +
                `<br>` +
                `<a href="https://www.upmc.com/patients-visitors/paying-bill/bill-pay" target="_blank">Pay Your UPMC Bill</a>`;
            await stepContext.context.sendActivity(firstMessage);
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            await stepContext.context.sendActivity(secondMessage);
            return stepContext.next();
        }
        if ((stepContext.result && stepContext.result.value) && (stepContext.result.value.toLowerCase() === 'other facility')) {
            const firstMessage = `If you have a bill from a provider or facility other than UPMC, you should pay the provider directly.`;
            const secondMessage = `Please check your bill for a website, phone number, or address where payment can be made.`;
            await stepContext.context.sendActivity(firstMessage);
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            await stepContext.context.sendActivity(secondMessage);
            return stepContext.next();
        }
        return await stepContext.endDialog({ success: true });
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: true });
    }
}
