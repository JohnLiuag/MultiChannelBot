import { ActivityTypes, StatePropertyAccessor, UserState } from "botbuilder";
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from "botbuilder-dialogs";

import { CONSUMER_PROFILE_PROPERTY } from "../../common/constants";
import { IConsumerProfile } from "../../common/interfaces/user-profile.interface";
import { CancelAndHelpDialog } from "../cancel-and-help.dialog";

export const PREF_CENTER_UPDATES = 'PREF_CENTER_UPDATES';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

export class PrefCenterUpdatesDialog extends CancelAndHelpDialog {
    public consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;

    constructor(id: string, userState: UserState) {
        super(id || PREF_CENTER_UPDATES);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);

        this.initialDialogId = WATERFALL_DIALOG;
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this)
        ]));
    }

    async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        let isSuccess: boolean = true;
        const updateType: 'email' | 'paperless' | 'phone' | 'address' = stepContext.options['updateType'];
        const consumer: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        let message;

        switch  (updateType) {
            case 'email':
                message = `You can update your email address by visiting the [Preference Center](#/main/content/preference).`;
                break;
            case 'phone':
                message = `You can update your phone number by visiting the [Preference Center](#/main/content/preference).`;
                break;
            case 'paperless':
                message = `You can update your communication preferences and opt in to paperless communications by visiting the [Preference Center](#/main/content/preference).`;
                break;
            case 'address':
                const memberId = consumer.mc400MemberId || consumer.dentalVisionMemberId;
                const isPolicyHolder = memberId.slice(-2) === '01';

                if (consumer.corpCode === 'U135') {
                    if (isPolicyHolder) {
                        message = `You can change your address by updating it on HR Direct under Personal Info > Contact Info.`;
                        await stepContext.context.sendActivity(message);
                        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                        message = `Your address will be updated with the Health Plan automatically, usually within a few business days.`;
                        // await stepContext.context.sendActivity(message);
                    } else {
                        message = `To change the address for everyone on the plan, the policy holder will need to update it through HR Direct.`;
                        await stepContext.context.sendActivity(message);
                        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                        message = `However, if you need to update only your address for confidentiality reasons, you can submit a form to request that change. ` +
                            `If this is the case, please type **"help"** to chat with a live concierge.`;
                        isSuccess = false;
                    }
                } else if (['wellness', 'non medical', 'dentalvision'].includes(consumer.eligibilityType.toLowerCase())
                    || (!['EXCH', 'OEXC'].includes(consumer.corpCode) && consumer.eligibilityType.toLowerCase() === 'commercial')) {
                    if (isPolicyHolder) {
                        message = `Because of your plan's specifics, you are unable change your address online. To update this address, please contact your employer.`;
                    } else {
                        message = `Because of your plan's specifics, you are unable change your address online. ` +
                            `To update this address, the policy holder will need to contact their employer.`;
                        await stepContext.context.sendActivity(message);
                        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                        message = `However, if you need to update only your address for confidentiality reasons, you can submit a form to request that change. ` +
                            `If this is the case, please type **"help"** to chat with a live concierge.`;
                        isSuccess = false;
                    }
                } else if (consumer.corpCode === `EXCH`) {  // on-exchange)
                    if (isPolicyHolder) {
                        message = `Because of your plan's specifics, you are unable change your address online.`;
                        await stepContext.context.sendActivity(message);
                        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                        message = `To update this address, please visit ` +
                            `<a href="https://www.pennie.com" target="_blank">Pennie</a>` +
                            ` or call Pennie at \n<a href="tel:1-844-844-8040">1-844-844-8040</a>.`;
                    } else {
                        message = `To change the address for everyone on the plan, the policy holder will need to update the address through Pennie.`;
                        await stepContext.context.sendActivity(message);
                        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                        message = `However, if you need to update only your address for confidentiality reasons, you can submit a form to request that change. ` +
                            `If this is the case, please type **"help"** to chat with a live concierge.`;
                        isSuccess = false;
                    }
                } else if (consumer.corpCode === `OEXC`) {   // off-exchange
                    isSuccess = false;
                    if (isPolicyHolder) {
                        message = `To update your address, please complete and submit this secure ` +
                            `<a href="https://www.upmchealthplan.com/Off_Marketplace_Address_Verification.html" target="_blank">contact form</a>` +
                            `, or type **"help"** to chat with a live concierge.`;
                    } else {
                        message = `To change the address for everyone on the plan, the policy holder can contact the Health Plan.`;
                        await stepContext.context.sendActivity(message);
                        await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                        message = `However, if you need to update only your address for confidentiality reasons, you can submit a form to request that change. ` +
                        `If this is the case, please type **"help"** to chat with a live concierge.`;
                    }
                } else if (consumer.eligibilityType.toLowerCase() === 'chip') {
                        message = `You can update your address by contacting your county assistance office, or by chatting with a live concierge. ` +
                        `Please type **"help"** if you would like to chat with a live concierge.`;
                        isSuccess = false;
                } else if (['medicare', 'snp'].includes(consumer.eligibilityType.toLowerCase())) {
                    message = `You can update your address by contacting Medicare, or by chatting with a live concierge. ` +
                    `Please type **"help"** if you would like to chat with a live concierge.`;
                    isSuccess = false;
                } else if (['medicaid', 'chc'].includes(consumer.eligibilityType.toLowerCase())) {
                    message = `Because of your plan's specifics, you are unable change your address online. To update your address, ` +
                        `please contact your county assistance office.`;
                }
        }

        await stepContext.context.sendActivity(message);
        return await stepContext.next({isSuccess});
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: stepContext.result.isSuccess });
    }

}
