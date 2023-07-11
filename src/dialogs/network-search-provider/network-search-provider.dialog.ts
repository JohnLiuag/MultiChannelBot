import { UserState, StatePropertyAccessor } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';
import { config } from '../../common/config';
import { USER_AUTH_PROPERTY } from '../../common/constants';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CONSUMER_PROFILE_PROPERTY } from '../../common/constants';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';

export const NETWORK_SEARCH_PROVIDER = 'NETWORK_SEARCH_PROVIDER';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

export class NetworkSearchProviderDialog extends CancelAndHelpDialog {
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;

    constructor(id: string, userState: UserState) {
        super(id || NETWORK_SEARCH_PROVIDER);

        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this)
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
        const profile: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        const isWebchat = stepContext.context.activity.channelId === 'webchat';
        let message: string;

        if (profile.memberStatus === 'Active'
            || profile.dvMemberStatus === 'Active') {
            if (isWebchat) {
                message = `You can find participating providers and facilities by clicking <a href="${config.findCareBaseURL}find?memberid=${profile.memberId}#id_token=${userAuth.token}" target="_blank">Find Care</a>.`;
                await stepContext.context.sendActivity(message);
                return await stepContext.next();
            } else {
                message = `You can find participating providers and facilities by tapping <a href="${config.findCareBaseURL}find?memberid=${profile.memberId}#id_token=${userAuth.token}" target="_blank">Find Care</a>.`;
                await stepContext.context.sendActivity(message);
                return await stepContext.next();
            }
        } else {
            if (isWebchat) {
                message = `Your coverage is not currently active. If you'd like to browse the directory anyway, you can do so by visiting <a href="${config.findCareBaseURL}find?memberid=${profile.memberId}#id_token=${userAuth.token}" target="_blank">Find Care</a>.`;
                await stepContext.context.sendActivity(message);
                return await stepContext.next();
            } else {
                message = `Your coverage is not currently active. If you'd like to browse the directory anyway, you can do so by visiting the [Care](content/care) section. Once you're there, tap Search Doctors or Providers to search the provider directory.`;
                await stepContext.context.sendActivity(message);
                return await stepContext.next();
            }
        }

    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: true });
    }
}
