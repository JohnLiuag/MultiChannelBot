import { StatePropertyAccessor, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { USER_AUTH_PROPERTY } from '../../common/constants';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';
import { CovidFormService } from './covid-form.service';

export const COVID_FORM = 'COVID_FORM';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const REIMBURSEMENTS_AND_PAYMENTS_CONTENT_ID = '2106';

export class CovidFormDialog extends CancelAndHelpDialog {
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private covidFormService: CovidFormService;

    constructor(id: string, userState: UserState) {
        super(id || COVID_FORM);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.covidFormService = new CovidFormService();

        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this),
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
        let message: string;

        let contentResponse = await this.covidFormService.getContent(REIMBURSEMENTS_AND_PAYMENTS_CONTENT_ID, userAuth.token)
            .catch(err => { });

        let notAvailableMessage = 'The requested form is not available. Type **“help”** to chat with a concierge.';

        if (!contentResponse) {
            message = notAvailableMessage;
        } else {
            let link = '#/main/content/assessment-landing?contentId=3d35a762-605a-41c4-9fd5-cb7434460e9f';
            if (JSON.stringify(contentResponse).includes(link)) {
                message = `To fill out the COVID-19 Home Test Reimbursement Form, you can navigate ` +
                    `to [Forms and Guides](${link}) page.`;
            } else {
                message = notAvailableMessage;
            }
        }

        await stepContext.context.sendActivity(message);
        return await stepContext.next();
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: true });
    }
}
