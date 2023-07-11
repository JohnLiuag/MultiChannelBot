import { StatePropertyAccessor, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY } from '../../common/constants';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { USER_AUTH_PROPERTY } from '../../common/constants';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';

import { EligibilityPharmacyProcessingService } from '../eligibility-pharmacy-processing/eligibility-pharmacy-processing.service';
import { CommonService } from '../../common/services/common.service';

export const ELIGIBILITY_PHARMACY_PROCESSING = 'ELIGIBILITY_PHARMACY_PROCESSING';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';


export class EligibilityPharmacyProcessingDialog extends CancelAndHelpDialog {
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;

    private eligibilityPharmacyService: EligibilityPharmacyProcessingService;
    private commonService: CommonService;

    constructor(id: string, userState: UserState) {
        super(id || ELIGIBILITY_PHARMACY_PROCESSING);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);

        this.eligibilityPharmacyService = new EligibilityPharmacyProcessingService();
        this.commonService = new CommonService();

        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this)
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        let isSuccess: boolean;
        const consumer: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});

        const plansData = await this.commonService.getAllPlans(consumer.memberId.substring(0, 9), consumer, userAuth.token, userAuth.token2);

        await this.eligibilityPharmacyService.getEligibilityPharmacyMessage(plansData, consumer.memberId).then(async (message) => {
            isSuccess = true;
            await stepContext.context.sendActivity(message);
        }).catch(async () => {
            isSuccess = false;
            const message = `We don't have this information.`;
            await stepContext.context.sendActivity(message);
        });

        return await stepContext.next({isSuccess});
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: stepContext.result.isSuccess });
    }
}
