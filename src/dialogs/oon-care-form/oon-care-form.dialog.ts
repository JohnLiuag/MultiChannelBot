import { StatePropertyAccessor, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { USER_AUTH_PROPERTY } from '../../common/constants';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';
import { OonCareFormService } from './oon-care-form.service';

export const OON_CARE_FORM = 'OON_CARE_FORM';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const REIMBURSEMENTS_AND_PAYMENTS_CONTENT_ID = '2106';

export class OonCareFormDialog extends CancelAndHelpDialog {
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private oonCareFormService: OonCareFormService;

    constructor(id: string, userState: UserState) {
        super(id || OON_CARE_FORM);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.oonCareFormService = new OonCareFormService();

        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this),
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
        let message: string;
        let linkText = 'Out-of-Network Care Claim Form';
        let sectionContent: string;
        let link: string;

        let contentResponse = await this.oonCareFormService.getContent(REIMBURSEMENTS_AND_PAYMENTS_CONTENT_ID, userAuth.token)
            .catch(err => { });

        let notAvailableMessage = 'The requested form is not available. Type **“help”** to chat with a concierge.';

        if (!contentResponse) {
            message = notAvailableMessage;
        } else {
            contentResponse.contents.find(el => {
                Object.values(el.value).find((val: string) => {
                    if (val.includes(linkText)) {
                        sectionContent = val;
                        return true;
                    }
                });
            });
            if (sectionContent) {
                let startIndex = sectionContent.indexOf('#/main/');
                let endIndex = sectionContent.indexOf('"', startIndex);
                link = sectionContent.substring(startIndex, endIndex);
            }
            if (link) {
                message = `To fill out the Out-of-Network Care Claim Form, you can navigate ` +
                    `to [Forms and Guides](${link}).`;
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
