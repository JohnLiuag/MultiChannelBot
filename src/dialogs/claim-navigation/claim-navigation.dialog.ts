import { StatePropertyAccessor, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CONSUMER_PROFILE_PROPERTY, USER_AUTH_PROPERTY } from '../../common/constants';
import { ISubscription } from '../../common/interfaces/subscription.interface';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { CommonService } from '../../common/services/common.service';

export const CLAIM_NAVIGATION = 'CLAIM_NAVIGATION';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

export class ClaimNavigationDialog extends CancelAndHelpDialog {
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private commonService: CommonService;

    constructor(id: string, userState: UserState) {
        super(id || CLAIM_NAVIGATION);
        this.commonService = new CommonService();
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        // TODO: add dialog for each channel for current intent
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this)
        ]));
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
        this.initialDialogId = WATERFALL_DIALOG;
    }
    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        let medicalPlans: ISubscription[];
        let dentalVisionPlans: ISubscription[];
        let medicalRequest = new Promise((resolve, reject) => { resolve(null) });
        let dentalRequest = new Promise((resolve, reject) => { resolve(null) });
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
        const consumer: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});

        if (consumer.memberId) {
            medicalRequest = this.commonService.getAllPlans(
                consumer.memberId.substring(0, 9),
                consumer,
                userAuth.token,
                userAuth.token2
            );
        }
        if (consumer.dentalVisionMemberId) {
            dentalRequest = this.commonService.getAllPlans(
                consumer.dentalVisionMemberId.substring(0, 9),
                consumer,
                userAuth.token,
                userAuth.token2
            );
        }
        const [medicalResponse, dentalResponse] = await Promise.allSettled([
            medicalRequest,
            dentalRequest
        ]);
        if (medicalResponse.status === 'fulfilled' && medicalResponse.value) {
            medicalPlans = medicalResponse.value as ISubscription[];
        }
        if (dentalResponse.status === 'fulfilled' && dentalResponse.value) {
            dentalVisionPlans = dentalResponse.value as ISubscription[];
        }
        const commonWellness = (consumer.eligibilityType.toLowerCase() === 'wellness'
            || consumer.eligibilityType.toLowerCase() === 'non medical');
        const TermedMedical = medicalPlans != undefined && medicalPlans.length > 0
        && medicalPlans.some(x => x.eligibilities.some(c => c.eligibilityStatus == 'Termed' && (['commercial', 'dentalvision','medicare','vision', 'snp'].includes(c.eligibilityTypeDescription.toLowerCase()))))
        && consumer.hasWellness && !(consumer.eligibilityType.toLowerCase() === 'non medical');

        const TermedVisionDental = dentalVisionPlans != undefined && dentalVisionPlans.length > 0
        && dentalVisionPlans.some(x => x.eligibilities.some(c => c.eligibilityStatus == 'Termed' && ['dentalvision'].includes(c.eligibilityTypeDescription.toLowerCase())))
        && consumer.hasWellness && !(consumer.eligibilityType.toLowerCase() === 'non medical');
        if ((consumer.eligibilityType.toLowerCase() === 'chc'
            || consumer.eligibilityType.toLowerCase() === 'chip'
            || consumer.eligibilityType.toLowerCase() === 'medicaid')
            || ((consumer.hasRx || consumer.hasVisionCare || consumer.hasVision || consumer.hasVisionAdvantage || consumer.hasDentalAdvantage) && consumer.eligibilityType.toLowerCase() === 'dentalvision')
            )
             {
            await stepContext.context.sendActivity(`You can view your recent claims here: [Claims](#/main/content/medical-claims).`);
        }
        else if ((consumer.eligibilityType.toLowerCase() === 'commercial'
            || consumer.eligibilityType.toLowerCase() === 'medicare'
            || consumer.eligibilityType.toLowerCase() === 'snp'
                )
            || (commonWellness && (consumer.hasVisionAdvantage || consumer.hasVisionCare || consumer.hasDentalAdvantage ))
            || TermedMedical
            || TermedVisionDental
        ) {
            await stepContext.context.sendActivity(`You can view your EOBs by visiting [Claims and EOBs](#/main/content/medical-claims).`);
        }
        else if (['non medical', 'wellness'].includes(consumer.eligibilityType.toLowerCase())) {
            await stepContext.context.sendActivity(`Your plan does not include coverage for services. Please check with your primary insurance carrier to view your claims.`);
        }
        return await stepContext.next();
    }
    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: true });
    }
}


