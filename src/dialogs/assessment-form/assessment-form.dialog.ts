import { ActivityTypes, ConversationState, StatePropertyAccessor, TurnContext, UserState } from 'botbuilder';
import { DialogTurnResult, DialogTurnStatus, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY } from '../../common/constants';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';
import { LiveChatTransitionDialog, LIVE_CHAT_TRANSITION } from '../live-chat-transition/live-chat-transition.dialog';

type AssessmentType = 'FluShot' | 'PRD';

export const ASSESSMENT_FORM = 'ASSESSMENT_FORM';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

export class AssessmentFormDialog extends CancelAndHelpDialog {
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;

    constructor(id: string, userState: UserState, conversationState: ConversationState) {
        super(id || ASSESSMENT_FORM);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);

        this.addDialog(new LiveChatTransitionDialog(LIVE_CHAT_TRANSITION, userState, conversationState)),
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this),
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const assessmentType: AssessmentType = stepContext.options['assessmentType'];
        const consumer: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});

        let message = '';

        const fluEligibilityTypes: string[] = ['CHIP', 'Medicare', 'SNP', 'Medicaid', 'Commercial'];
        const prdEligibilityTypes: string[] = ['CHIP', 'Medicare', 'SNP', 'Medicaid', 'Commercial', 'DentalVision'];
        const excludedCorpCodes: string[] = ['A809', 'C005', 'C093', 'E151', 'H050', 'P049', 'R503', 'U035', 'H612', 'W135'];
        const allowedStatuses: string[] = ['Active', 'FutureActive', 'Termed'];

        switch (assessmentType) {
            case 'FluShot':
                // CHIP, Medicare, SNP, Medicaid, Commercial (NOT Contains Corp ID: A809, C005, C093, E151, H050, P049, R503, U035, H612, W135)
                if (fluEligibilityTypes.includes(consumer.eligibilityType)) {
                    if (consumer.eligibilityType !== 'Commercial' || !excludedCorpCodes.includes(consumer.corpCode)) {
                        message = `To fill out Flu Shot Reimbursement Form, you can navigate to [Forms and Guides](#/main/content/assessment-landing?contentId=e84c7e09-450d-47bd-a8dc-21d5c61d3fa9).`;
                    }
                }
                break;
            case 'PRD':
                // CHIP, Medicare, SNP, Medicaid, Commercial (Active, Future Active, Termed), DentalVision
                if (prdEligibilityTypes.includes(consumer.eligibilityType)) {
                    if (consumer.eligibilityType !== 'Commercial'
                        || allowedStatuses.includes(consumer.memberStatus)
                        || allowedStatuses.includes(consumer.dvMemberStatus)) {
                        message = `To fill out HIPAA Designee Form, you can navigate to [Forms and Guides](#/main/content/common-assessment-landing-form?formId=prd).`;
                    }
                }
                break;
        }
        if (message) {
            await stepContext.context.sendActivity(message);
            return await stepContext.next();
        } else {
            message = 'The requested form is not available. Would you like to chat with a concierge for more information?';
            await stepContext.context.sendActivity(message);
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            return await stepContext.beginDialog(LIVE_CHAT_TRANSITION);
        }
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: true });
    }
}
