import { ActivityTypes, StatePropertyAccessor, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY, USER_AUTH_PROPERTY } from '../../../common/constants';
import { IUserAuth } from '../../../common/interfaces/user-auth.interface';
import { IConsumerProfile } from '../../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../../cancel-and-help.dialog';
import { ISubscription } from '../../../common/interfaces/subscription.interface';

import { BillingService } from '../billing.service';
import { CommonService } from '../../../common/services/common.service';

export const BILLING_AUTOPAY_PREMIUM = 'BILLING_AUTOPAY_PREMIUM';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';


export class BillingAutopayPremiumDialog extends CancelAndHelpDialog {
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;

    private billingService: BillingService;
    private commonService: CommonService;

    constructor(id: string, userState: UserState) {
        super(id || BILLING_AUTOPAY_PREMIUM);
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
        let isSuccess: boolean;
        const profile: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});

        await this.commonService.getAllPlans(profile.memberId.substring(0, 9), profile, userAuth.token, userAuth.token2)
        .then(async (json: ISubscription[]) => {
            return await this.billingService.getBillingAutopayMessage(json, profile.memberId, userAuth.token, userAuth.token2);
        }).then(async (message) => {
            isSuccess = true;
            await stepContext.context.sendActivity(message);
        }).catch(async () => {
            isSuccess = true;
            const message = `We don't have this information yet.<br>` +
            `Once your invoice is available, you can view your current balance, `+
            `make a payment, or set up autopay by visiting the billing portal. \n` +
            `<br>` +
            `[Premium Payments](#/main/content/view-pay-premium-bills)`;
            await stepContext.context.sendActivity(message);
        });

        return await stepContext.next({isSuccess});
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: stepContext.result.isSuccess });
    }
}
