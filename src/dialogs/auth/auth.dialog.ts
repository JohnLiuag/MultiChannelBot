import { UserState, StatePropertyAccessor } from 'botbuilder';
import {
    ChoicePrompt,
    ConfirmPrompt,
    NumberPrompt,
    TextPrompt,
    DialogTurnResult,
    WaterfallDialog,
    WaterfallStepContext,
    PromptValidatorContext
} from 'botbuilder-dialogs';

import { CancelAndHelpDialog } from '../cancel-and-help.dialog';
import { AuthService } from './auth.service';
import { IUserProfile } from '../../common/interfaces/user-profile.interface';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { USER_AUTH_PROPERTY, USER_PROFILE_PROPERTY } from '../../common/constants';

const authService = new AuthService();

export const AUTH = 'AUTH';

const CHOICE_PROMPT = 'CHOICE_PROMPT';
const CONFIRM_PROMPT = 'CONFIRM_PROMPT';
const TEXT_PROMPT = 'TEXT_PROMPT';
const NAME_PROMPT = 'NAME_PROMPT';
const DATE_PROMPT = 'DATE_PROMPT';
const NUMBER_PROMPT = 'NUMBER_PROMPT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

export class AuthDialog extends CancelAndHelpDialog {
    private userProfileAccessor: StatePropertyAccessor<IUserProfile>;
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;

    constructor(id: string, userState: UserState) {
        super(id || AUTH);
        this.userProfileAccessor = userState.createProperty<IUserProfile>(USER_PROFILE_PROPERTY);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);

        this.initialDialogId = WATERFALL_DIALOG;
        this.addDialog(new TextPrompt(NAME_PROMPT));
        this.addDialog(new TextPrompt(TEXT_PROMPT));
        this.addDialog(new TextPrompt(DATE_PROMPT, this.dateOfBirthValidator.bind(this)));
        this.addDialog(new ChoicePrompt(CHOICE_PROMPT));
        this.addDialog(new ConfirmPrompt(CONFIRM_PROMPT));
        this.addDialog(new NumberPrompt(NUMBER_PROMPT));

        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.authConfirm.bind(this),
            this.firstNameStep.bind(this),
            this.lastNameStep.bind(this),
            this.birthdayDateStep.bind(this),
            this.summaryStep.bind(this)
        ]));

    }

    async authConfirm(step: WaterfallStepContext): Promise<DialogTurnResult> {
        const message = 'Before we get started we would like verify some information. What is your first name?';
        return await step.prompt(TEXT_PROMPT, message);
    }

    async firstNameStep(step: WaterfallStepContext): Promise<DialogTurnResult> {
        if (step.result) {
            step.values['firstName'] = step.result;
            const message = 'Next, what is your last name?';
            return await step.prompt(TEXT_PROMPT, message);
        } else {
            return await step.next(-1);
        }
    }

    async lastNameStep(step: WaterfallStepContext): Promise<DialogTurnResult> {
        if (step.result) {
            step.values['lastName'] = step.result;
            let message = 'And finally, what is your date of birth? For example August 15, 1995.';
            let errorMessage = 'Sorry, the date is not valid. Please, try again';
            const promptOptions = {
                prompt: message,
                retryPrompt: errorMessage
            };
            return await step.prompt(DATE_PROMPT, promptOptions);
        } else {
            return await step.next(-1);
        }
    }

    async birthdayDateStep(step: WaterfallStepContext): Promise<DialogTurnResult> {
        if (step.result) {
            step.values['birthdayDate'] = step.result;
            return await step.next();
        } else {
            return await step.next(-1);
        }
    }

    async summaryStep(step: WaterfallStepContext): Promise<DialogTurnResult> {
        let isSuccess: boolean;
        if (step.values['firstName'] && step.values['lastName'] && step.values['birthdayDate']) {
            let userProfile: IUserProfile = await this.userProfileAccessor.get(step.context, {});
            let userAuth: IUserAuth = await this.userAuthAccessor.get(step.context, {});
            const birthdayDate = this.dateFormatter(step.values['birthdayDate']);
            const authenticatedUser = await authService.authenticateUser(step.values['firstName'], step.values['lastName'], birthdayDate);

            if (authenticatedUser) {
                userProfile.memberId = authenticatedUser.memberId;
                userAuth.token = authenticatedUser.authToken;
                isSuccess = true;
                await step.context.sendActivity(`Hello ${authenticatedUser.fullName}! We have successfully matched your information.`);
                // TODO: when the authorization completed successfully, we should continue with the previous intent
            } else {
                const message = `I'm sorry, I can not find a user with this data. Please try to spell your name.`; // TODO add "say support" for contact live support
                await step.context.sendActivity(message);
            }
        } else {
            await step.context.sendActivity(`I'm sorry, but you have to try to authorize again. The data is wrong or missing`);
        }
        return await step.endDialog({success: isSuccess, options: step.options});
    }

    dateOfBirthValidator(prompt: PromptValidatorContext<any>): Promise<boolean> {
        const date = this.dateStructurizer(prompt.recognized.value);
        if (date && new Date(date.year + '-' + date.month + '-' + date.day)) { // TODO fix the validation
            return Promise.resolve(true);
        }
        return Promise.resolve(false);
    }

    dateStructurizer(dateOfBirth: string) { // Change date format for 'getMembersSearchList' request
        let dateOfBirthArr = dateOfBirth.toLowerCase().split(/[\s-]+/);
        if (dateOfBirthArr.length && dateOfBirthArr.length > 2) {
            let monthOfBirthName = dateOfBirthArr[0];
            let dayOfBirth = dateOfBirthArr[1].replace(/\D/g, '');
            let yearOfBirth: string;
            if (dayOfBirth.length < 2) { dayOfBirth = '0' + dayOfBirth; };
            let monthsNames = [
                'january',
                'february',
                'march',
                'april',
                'may',
                'june',
                'july',
                'august',
                'september',
                'october',
                'november',
                'december'
            ];
            let numbers = {
                'zero': 0,
                'and': 0,
                'oh': 0,
                'one': 1,
                'two': 2,
                'three': 3,
                'four': 4,
                'five': 5,
                'six': 6,
                'seven': 7,
                'eight': 8,
                'nine': 9
            };
            let monthIndex = monthsNames.indexOf(monthOfBirthName);
            let monthOfBirth: string;
            if (monthIndex !== -1) { // TODO replace to validator
                if (monthIndex < 9) {
                    monthOfBirth = '0' + (monthIndex + 1);
                } else {
                    monthOfBirth = (monthIndex + 1).toString();
                }
            }
            dateOfBirthArr = dateOfBirthArr.map(el => {
                let x = numbers[el];
                if (x != null) {
                    el = x;
                    return el;
                } else {
                    return el;
                }
            });
            let dateOfBirthStr = dateOfBirthArr.join('');
            yearOfBirth = dateOfBirthStr.slice(dateOfBirthStr.length - 4);
            let dateObj = {
                day: dayOfBirth,
                month: monthOfBirth,
                year: yearOfBirth
            };
            return dateObj;
        } else {
            return null;
        }
    }

    dateFormatter(date: string) {
        let dateObject = this.dateStructurizer(date);
        let dateFormatted = dateObject.month + '/' + dateObject.day + '/' + dateObject.year;
        return dateFormatted;
    }
}
