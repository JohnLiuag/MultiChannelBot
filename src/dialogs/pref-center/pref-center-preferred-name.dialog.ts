import { ActivityTypes, StatePropertyAccessor, UserState, ActionTypes } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext, ListStyle, ChoicePrompt, TextPrompt } from 'botbuilder-dialogs';

import { USER_AUTH_PROPERTY, USER_PROFILE_PROPERTY } from '../../common/constants';
import { IUserProfile } from '../../common/interfaces/user-profile.interface';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CONSUMER_PROFILE_PROPERTY } from '../../common/constants';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { PrefCenterService } from './pref-center.service';

export const PREF_CENTER_PREFERRED_NAME = 'PREF_CENTER_PREFERRED_NAME';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const CHOICE_PROMPT = 'CHOICE_PROMPT';
const TEXT_PROMPT = 'TEXT_PROMPT';


export class PrefCenterPreferredNameDialog extends CancelAndHelpDialog {
    private userProfileAccessor: StatePropertyAccessor<IUserProfile>;
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;
    private prefCenterService: PrefCenterService;
    constructor(id: string, userState: UserState) {
        super(id || PREF_CENTER_PREFERRED_NAME);
        this.userProfileAccessor = userState.createProperty<IUserProfile>(USER_PROFILE_PROPERTY);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
        this.prefCenterService = new PrefCenterService();
        this.addDialog(new ChoicePrompt(CHOICE_PROMPT));
        this.addDialog(new TextPrompt(TEXT_PROMPT));
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.preferredNameStep.bind(this),
            this.finalStep.bind(this)
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const userProfile: IUserProfile = await this.userProfileAccessor.get(stepContext.context, {});
        const consumerProfile: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        let message: string;
        
        if (['commercial', 'wellness', 'dentalvision'].includes(consumerProfile.eligibilityType.toLowerCase())
            && !['OEXC', 'EXCH'].includes(consumerProfile.corpCode)) {
            message = `I'd be happy to help you with that! Your preferred name will be viewable to UPMC Health Plan’s Member Services team but may not be available to all Health Plan departments.`;
            await stepContext.context.sendActivity(message);
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            message = `Please note that your name on record can only be edited by contacting your employer.`;
            await stepContext.context.sendActivity(message);
        }
        if (['EXCH'].includes(consumerProfile.corpCode)) {
            message = `I'd be happy to help you with that! Your preferred name will be viewable to UPMC Health Plan’s Member Services team but may not be available to all Health Plan departments.`;
            await stepContext.context.sendActivity(message);
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            message = `Please note that your name on record can only be edited by visiting <a href="https://www.pennie.com" target="_blank">Pennie</a> or by calling Pennie at <a href="tel:1-844-844-8040">1-844-844-8040</a>.`;
            await stepContext.context.sendActivity(message);
        }
        if (['OEXC'].includes(consumerProfile.corpCode)) {
            message = ` I'd be happy to help you with that! Your preferred name will be viewable to UPMC Health Plan’s Member Services team but may not be available to all Health Plan departments.`;
            await stepContext.context.sendActivity(message);
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            message = `Please note that your name on record can be edited by completing and submitting this secure <a href="https://www.upmchealthplan.com/marketplace_Documentation.html" target="_blank">contact form</a>, or by contacting UPMC Health Plan toll free at <a href="tel:1-855-489-3494">1-855-489-3494</a>.`;
            await stepContext.context.sendActivity(message);
        }
        if (['Medicare', 'SNP'].includes(consumerProfile.eligibilityType)) {
            message = `I'd be happy to help you with that! Your preferred name will be viewable to UPMC Health Plan’s Member Services team but may not be available to all Health Plan departments.`;
            await stepContext.context.sendActivity(message);
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            message = `Please note that your name on record can only be edited by contacting <a href="https://www.ssa.gov" target="_blank">Social Security Administration</a>.`;
            await stepContext.context.sendActivity(message);
        }
        if (['Medicaid', 'CHC'].includes(consumerProfile.eligibilityType)) {
            message = `I'd be happy to help you with that! Your preferred name will be viewable to UPMC Health Plan’s Member Services team but may not be available to all Health Plan departments.`;
            await stepContext.context.sendActivity(message);
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            message = `Please note that your name on record can only be edited by contacting the County Assistance Office.`;
            await stepContext.context.sendActivity(message);
        }
        if (['CHIP'].includes(consumerProfile.eligibilityType)) {
            message = `I'd be happy to help you with that! Your child’s preferred name will be viewable to UPMC Health Plan’s Member Services team, but may not be available to all Health Plan departments or the Department of Human Services (DHS).`;
            await stepContext.context.sendActivity(message);
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            message = `Please note that your child’s name on record can be edited by contacting your County Assistance Office or a live Member Service Concierge. Contact UPMC Health Plan toll free at <a href="tel:1-800-650-8762">1-800-650-8762</a>, or the Statewide Customer Service Center at <a href="tel:1-877-395-8930">1-877-395-8930</a>. Call <a href="tel:215-560-7226">215-560-7226</a> if you are in Philadelphia.`;
            await stepContext.context.sendActivity(message);
        }

        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
        message = `What is your preferred name?`;
        return await stepContext.prompt(TEXT_PROMPT, message);
    }
    private async preferredNameStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        if (stepContext.result) {
            const preferredName = stepContext.result;
            const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
            const updatedPreferredNameData = await this.prefCenterService.updatePreferredName(preferredName, userAuth.token)
                .catch(() => null);

            if (!!updatedPreferredNameData) {
                const message = `Thank you for providing that information!`;
                await stepContext.context.sendActivity(message);
                return await stepContext.next({isSuccess: true});
            } else {
                return await stepContext.next({isSuccess: false});
            }
        }
    }
    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        if (!stepContext.result) {
            return await stepContext.endDialog({success: true});
        }
        return await stepContext.endDialog({success: stepContext.result.isSuccess});
    }
}
