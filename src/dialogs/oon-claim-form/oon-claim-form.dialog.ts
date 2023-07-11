import { StatePropertyAccessor, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY, USER_AUTH_PROPERTY } from '../../common/constants';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';
import { OonClaimFormService } from './oon-claim-form.service';

export const OON_CLAIM_FORM = 'OON_CLAIM_FORM';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const REIMBURSEMENTS_AND_PAYMENTS_CONTENT_ID = '2106';

export class OonClaimFormDialog extends CancelAndHelpDialog {
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private oonClaimFormService: OonClaimFormService;

    constructor(id: string, userState: UserState) {
        super(id || OON_CLAIM_FORM);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.oonClaimFormService = new OonClaimFormService();

        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this),
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const formType: 'dental' | 'vision' = stepContext.options['formType'];
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
        let message: string;

        let contentResponse = await this.oonClaimFormService.getContent(REIMBURSEMENTS_AND_PAYMENTS_CONTENT_ID, userAuth.token)
            .catch(err => { });

        let link: string;
        let notAvailableMessage = 'The requested form is not available. Type **“help”** to chat with a concierge.';

        if (!contentResponse) {
            message = notAvailableMessage;
        } else if (formType === 'dental') {
            link = '#/main/content/assessment-landing?contentId=e9e32c07-fe66-40a1-bebc-ff9fd5d01a09';
            if (JSON.stringify(contentResponse).includes(link)) {
                message = `To fill out the Out-of-Network Care Dental Advantage Claim Form, you can navigate ` +
                    `to [Forms and Guides](${link}).`;
            } else {
                message = notAvailableMessage;
            }
        } else {    // formType === 'vision'
            link = '#/main/content/assessment-landing?contentId=a770c303-b62f-4c98-b7e4-5c4eb6f0f3ce';
            let linkName = 'UPMC Vision Advantage Out-of-Network Claim Form';
            let link2 = '#/main/content/commonly-used-forms';
            if (JSON.stringify(contentResponse).includes(link)) {
                message = `To fill out the Out-of-Network Vision Care Claim Form, you can navigate ` +
                    `to [Forms and Guides](${link}).`;
            } else if (JSON.stringify(contentResponse).includes(linkName)) {
                message = `To download the Out-of-Network Vision Advantage Claim Form, you can navigate ` +
                    `to [Forms and Guides](${link2}).`;
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
