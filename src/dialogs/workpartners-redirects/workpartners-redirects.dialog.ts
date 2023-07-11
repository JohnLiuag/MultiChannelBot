import { StatePropertyAccessor, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY } from '../../common/constants';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';

export const WORKPARTNERS_REDIRECTS = 'WORKPARTNERS_REDIRECTS';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

export class WorkpartnersRedirectsDialog extends CancelAndHelpDialog {

    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;

    constructor(id: string, userState: UserState) {
        super(id || WORKPARTNERS_REDIRECTS);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);

        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this),
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const consumer: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        let questionType: 'check_loa' | 'loa' | 'workers_comp' = stepContext.options['questionType'];
        let message: string;
        let isSuccess: boolean;

        if (consumer.corpCode === 'U135') {
            isSuccess = true;
            switch (questionType) {
                case 'check_loa':
                    if ([consumer.memberStatus, consumer.dvMemberStatus].includes('Active')) {
                        message = `You can check on the status of your current request for a leave of absence and view past requests using the link below. \n` +
                            `<br>` +
                            `[View absence status and history](#/main/content/combined-status-and-history)`;
                    } else {
                        isSuccess = false;
                        message = 'I am sorry I am unable to answer this question. Please rephrase your question, or type **“help”** to chat with a live concierge.';
                    }
                    break;
                case 'loa':
                    message = `If you need to request a leave of absence from work, please click on the link below. \n` +
                        `<br>` +
                        `[Request an absence from work](#/main/content/combined-request-an-absence)`;
                    break;
                case 'workers_comp':
                    message = `If you have sustained an injury or illness related to your employment, you can learn more about Workers' Compensation and file a claim by clicking the link below. \n` +
                        `<br>` +
                        `[Workers' Compensation](#/main/content/workers-comp-dashboard)`;
                    break;
            }
        } else {
            message = 'I am sorry I am unable to answer this question. Please rephrase your question, or type **“help”** to chat with a live concierge.';
        }
        await stepContext.context.sendActivity(message);
        return await stepContext.next({ isSuccess });
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: stepContext.result.isSuccess });
    }
}
