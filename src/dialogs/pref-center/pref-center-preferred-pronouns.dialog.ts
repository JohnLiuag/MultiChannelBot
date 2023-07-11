import { ActivityTypes, StatePropertyAccessor, UserState, ActionTypes } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext, ListStyle, ChoicePrompt, TextPrompt } from 'botbuilder-dialogs';

import { USER_AUTH_PROPERTY, USER_PROFILE_PROPERTY } from '../../common/constants';
import { IUserProfile } from '../../common/interfaces/user-profile.interface';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CONSUMER_PROFILE_PROPERTY } from '../../common/constants';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { PrefCenterService } from './pref-center.service';
import { IPrefCenterOptions } from './interfaces/pref-center.interface';

export const PREF_CENTER_PREFERRED_PRONOUNS = 'PREF_CENTER_PREFERRED_PRONOUNS';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const CHOICE_PROMPT = 'CHOICE_PROMPT';
const TEXT_PROMPT = 'TEXT_PROMPT';

export class PrefCenterPreferredPronounsDialog extends CancelAndHelpDialog {
    private userProfileAccessor: StatePropertyAccessor<IUserProfile>;
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;
    private prefCenterService: PrefCenterService;

    constructor(id: string, userState: UserState) {
        super(id || PREF_CENTER_PREFERRED_PRONOUNS);
        this.userProfileAccessor = userState.createProperty<IUserProfile>(USER_PROFILE_PROPERTY);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
        this.prefCenterService = new PrefCenterService();

        this.addDialog(new ChoicePrompt(CHOICE_PROMPT));
        this.addDialog(new TextPrompt(TEXT_PROMPT));
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.preferredPronounsStep.bind(this),
            this.notListedPronounsStep.bind(this),
            this.finalStep.bind(this)
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
        const consumerProfile: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        let message: string;

        if (consumerProfile.eligibilityType === 'CHIP') {
            stepContext.values['isEligibilityTypeChip'] = true;
            message = `I'd be happy to help you with updating your child's pronouns!`;
            await stepContext.context.sendActivity(message);
        } else {
            message = `I'd be happy to help you with that!`;
            await stepContext.context.sendActivity(message);
        }
        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
        message = `Please choose one of the options below, or type **"cancel"** if you would prefer not to provide this information at this time.`;
        await stepContext.context.sendActivity(message);
        await stepContext.context.sendActivity({type: ActivityTypes.Typing});

        const prefCenterOptions: IPrefCenterOptions = await this.prefCenterService.getPrefCenterOptions(userAuth.token)
            .catch(() => null);

        if (!!prefCenterOptions && !!prefCenterOptions.preferenceOption && !!prefCenterOptions.preferenceOption.pronouns) {
            const choiceOptions = prefCenterOptions.preferenceOption.pronouns.map((item) => {
                return {
                    value: item,
                    title: item,
                }
            })

            return await stepContext.prompt(CHOICE_PROMPT,
                {
                    style: ListStyle.suggestedAction,
                },
                choiceOptions.map(el => {
                    return {
                        value: el.value,       // used for validation
                        action: {
                            type: ActionTypes.ImBack,
                            title: el.title,   // caption for button
                            value: el.title,
                        }
                    }
                })
            );
        } else {
            return await stepContext.next({isSuccess: false});
        }
    }

    private async preferredPronounsStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        if (stepContext.result) {
            const selectedOption = stepContext.result.value;
            const cancelOption = 'Choose not to disclose';
            const notListedOption = 'Not Listed';
            let message: string;

            if (selectedOption === cancelOption) {
                return await stepContext.next({isSuccess: true});
            }

            if (selectedOption === notListedOption) {
                message = `Please provide your preferred pronouns now, or type **"cancel"** if you would prefer not to provide this information at this time.`;
                stepContext.values['isNotListedOption'] = true;
                return await stepContext.prompt(TEXT_PROMPT, message);
            }

            const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
            const updatedPreferredPronouns = await this.prefCenterService.updatePreferredPronouns(selectedOption, userAuth.token)
                .catch(() => null);

            if (!!updatedPreferredPronouns) {
                message = `Thank you for providing that information!`;
                await stepContext.context.sendActivity(message);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                if (stepContext.values['isEligibilityTypeChip']) {
                    message = `Providing the information above is voluntary. UPMC Health Plan has controls around physical and electronic access to Protected and Personal Health Information to protect your child’s privacy. ` +
                        `They include policies, rules, and technical measures. UPMC Health Plan will never use the personal information provided above for underwriting. Your child’s personal information will not be used to deny your child treatment, services, coverage, or benefits. ` +
                        `From time to time, UPMC Health Plan may share this personal information to help provide the best care for your child. It might also be shared for routine activities, such as: \n` +
                        `&#183; To better communicate with you and your child. \n` +
                        `&#183; Arranging for health care for you and your covered family members. \n` +
                        `&#183; Making payments to doctors, hospitals, and other health care providers for your child’s care. \n` +
                        `&#183; Performing certain health care operations including quality initiatives.`
                } else {
                    message = `Providing the information above is voluntary. UPMC Health Plan has controls around physical and electronic access to Protected and Personal Health Information to protect your privacy. ` +
                        `They include policies, rules, and technical measures. UPMC Health Plan will never use the personal information provided above for underwriting. Your personal information will not be used to deny your treatment, services, coverage, or benefits. ` +
                        `From time to time, UPMC Health Plan may share this personal information to help provide the best care for you. It might also be shared for routine activities, such as: \n` +
                        `&#183; To better communicate with you. \n` +
                        `&#183; Arranging for health care for you and your covered family members. \n` +
                        `&#183; Making payments to doctors, hospitals, and other health care providers for your care. \n` +
                        `&#183; Performing certain health care operations including quality initiatives.`;
                }
                await stepContext.context.sendActivity(message);
                return await stepContext.next({isSuccess: true});
            } else {
                return await stepContext.next({isSuccess: false});
            }
        }
        return await stepContext.next({isSuccess: true});
    }

    private async notListedPronounsStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        if (stepContext.result && stepContext.values['isNotListedOption']) {
            const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
            const enteredPronounsOption = stepContext.result;
            const isNotListedOption = true;
            const updatedPreferredPronouns = await this.prefCenterService.updatePreferredPronouns(enteredPronounsOption, userAuth.token, isNotListedOption)
                .catch(() => null);
            let message: string;

            if (!!updatedPreferredPronouns) {
                message = `Thank you for providing that information!`;
                await stepContext.context.sendActivity(message);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                message = `Providing the information above is voluntary. UPMC Health Plan has controls around physical and electronic access to Protected and Personal Health Information to protect your privacy. ` +
                    `They include policies, rules, and technical measures. UPMC Health Plan will never use the personal information provided above for underwriting. Your personal information will not be used to deny your treatment, services, coverage, or benefits. ` +
                    `From time to time, UPMC Health Plan may share this personal information to help provide the best care for you. It might also be shared for routine activities, such as: \n` +
                    `&#183; To better communicate with you. \n` +
                    `&#183; Arranging for health care for you and your covered family members. \n` +
                    `&#183; Making payments to doctors, hospitals, and other health care providers for your care. \n` +
                    `&#183; Performing certain health care operations including quality initiatives.`;
                await stepContext.context.sendActivity(message);
                return await stepContext.next({isSuccess: true});
            } else {
                return await stepContext.next({isSuccess: false});
            }
        } else {
            return await stepContext.next({isSuccess: stepContext.result.isSuccess})
        }
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        if (!stepContext.result) {
            return await stepContext.endDialog({success: true});
        }
        return await stepContext.endDialog({success: stepContext.result.isSuccess});
    }
}

