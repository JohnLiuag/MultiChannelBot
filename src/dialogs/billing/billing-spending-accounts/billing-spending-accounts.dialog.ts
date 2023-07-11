import { ActivityTypes, ConversationState, StatePropertyAccessor, UserState, ActionTypes } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext, TextPrompt, ChoicePrompt, ListStyle } from 'botbuilder-dialogs';

import { USER_AUTH_PROPERTY, CONSUMER_PROFILE_PROPERTY } from '../../../common/constants';
import { IUserAuth } from '../../../common/interfaces/user-auth.interface';
import { IConsumerProfile } from '../../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../../cancel-and-help.dialog';
import { BillingService } from '../billing.service';
import { FLEX_ACCOUNT } from '../../flex-account/flex-account.dialog';
import { LiveChatTransitionDialog, LIVE_CHAT_TRANSITION } from '../../live-chat-transition/live-chat-transition.dialog';
import { ISpendingAccounts, ISpendingAccountsDialogData } from '../interfaces/spending-accounts.interface';
import { IFlexAccountResponse } from '../../flex-account/flex-account.interface';

export const BILLING_SPENDING_ACCOUNTS = 'BILLING_SPENDING_ACCOUNTS';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

const TEXT_PROMPT = 'TEXT_PROMPT';
const CHOICE_PROMPT = 'CHOICE_PROMPT';

export class BillingSpendingAccountsDialog extends CancelAndHelpDialog {
    private spendingAccountMessagesMap = {
        HRA: {
            accountTypeId: 1,
            accountTypeTitle: 'HRA',
            message: (availableBalance: number) => `Your HRA balance is **$${availableBalance.toFixed(2)}**.`
        },
        HSA: {
            accountTypeId: 2,
            accountTypeTitle: 'HSA',
            message: (availableBalance: number) => `Your Health Spending Account (HSA) balance is **$${availableBalance.toFixed(2)}**.`
        },
        HIA: {
            accountTypeId: 3,
            accountTypeTitle: 'HIA',
            message: (availableBalance: number) => `Your HIA balance is **$${availableBalance.toFixed(2)}**.`
        },
        FSA: {
            accountTypeId: 4,
            accountTypeTitle: 'FSA',
            message: (availableBalance: number) => `Your Flexible Spending Account (FSA) balance is **$${availableBalance.toFixed(2)}**.`
        },
        TRN: { // Has also "QTA" type name which is common with "PKG"
            accountTypeId: 5,
            accountTypeTitle: 'Commuter TRN',
            message: (availableBalance: number) => `Your commuter transit QTA balance is **$${availableBalance.toFixed(2)}**.`
        },
        DCA: {
            accountTypeId: 6,
            accountTypeTitle: 'DCFSA',
            message: (availableBalance: number) => `Your Dependent Care FSA balance is **$${availableBalance.toFixed(2)}**.`
        },
        PKG: { // Has also "QTA" type name which is common with "TRN"
            accountTypeId: 7,
            accountTypeTitle: 'Commuter PKG',
            message: (availableBalance: number) => `Your commuter parking QTA balance is **$${availableBalance.toFixed(2)}**.`
        }
    };
    private spendingAccountsTypesMap = {
        1 : 'HRA',
        2 : 'HSA',
        3 : 'HIA',
        4 : 'FSA',
        5 : 'TRN',
        6 : 'DCA',
        7 : 'PKG'
    };
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;
    private billingService: BillingService;

    constructor(id: string, userState: UserState, conversationState: ConversationState) {
        super(id || BILLING_SPENDING_ACCOUNTS);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);

        this.billingService = new BillingService();

        this.addDialog(new TextPrompt(TEXT_PROMPT));
        this.addDialog(new ChoicePrompt(CHOICE_PROMPT));
        this.addDialog(new LiveChatTransitionDialog(LIVE_CHAT_TRANSITION, userState, conversationState));
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.sendSelectedAccountTypeMessageStep.bind(this),
            this.finalStep.bind(this)
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
        const consumer: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        const questionSpendingAccountsType: string = stepContext.options['spendingAccountsType'];
        const questionFlexSpendingAccountsType: string = stepContext.options['questionFlexSpendingAccountsType'];
        const isGeneralSAQuestion: boolean = !questionSpendingAccountsType && !questionFlexSpendingAccountsType;
        const isUserAskingFlexAccount: boolean = stepContext.options['isUserAskingFlexAccount'];
        const additionalPrompt = {
            title: 'Ask about something else',
            value: 'Ask about something else'
        };
        let spendingAccountsData: ISpendingAccounts;
        let hasUserFlexSpendingAccounts: boolean;

        try {
            spendingAccountsData = await this.billingService.getSpendingAccounts(userAuth.token);
            hasUserFlexSpendingAccounts = await this.checkHasUserFlexSpendingAccounts(userAuth.token, consumer);
        } catch (err) {
            let message = `I am unable to provide this information at this time.`;
            await stepContext.context.sendActivity(message);
            message = `You can type **“help”** to chat with a concierge.`;
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            await stepContext.context.sendActivity(message);
            return await stepContext.endDialog({ success: false });
        }

        // If user has flex spending accounts data it means that user doesn't have regular spending accounts types and we must redirect him to the FLEX_ACCOUNT dialog
        if (hasUserFlexSpendingAccounts) {
            return await stepContext.replaceDialog(FLEX_ACCOUNT, {questionSpendingAccountsType});
        }

        const isSingleSpendingAccount = spendingAccountsData.spendingAccounts?.length === 1;
        const isMultipleAccounts = spendingAccountsData.spendingAccounts?.length > 1;
        const isNoSpendingAccounts = !spendingAccountsData.spendingAccounts?.length;

        if (isSingleSpendingAccount) {
            let availableBalance: number;
            let accountTypeId: number;
            let isHSAAdminSource: boolean;
            let userHasAccountType: string;

            spendingAccountsData.spendingAccounts.map((spendingAccount) => {
                availableBalance = spendingAccount.availableBalance;
                accountTypeId = spendingAccount.accountType.id;
                userHasAccountType = this.spendingAccountsTypesMap[accountTypeId];
                isHSAAdminSource = ['EmployerHSA', 'BenefitWallet'].includes(spendingAccount.accountType.dataSource);
            });

            if (isUserAskingFlexAccount && !isHSAAdminSource) {
                const spendingAccountsMappedData: Array <ISpendingAccountsDialogData> = [{ availableBalance, accountTypeId }];
                stepContext.values['spendingAccountsMappedData'] = spendingAccountsMappedData;
                const firstMessage = `It appears you are not enrolled in this type of account.`;
                const secondMessage = `However, I see you have another Spending Account.`;
                const thirdMessage = `Would you like to see the balance of a different Spending Account?`;
                await stepContext.context.sendActivity(firstMessage);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(secondMessage);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(thirdMessage);

                const choiceOptions = [{
                    title: userHasAccountType,
                    value: userHasAccountType
                },
                additionalPrompt];

                return await this.sendChoicePrompts(stepContext, choiceOptions, [additionalPrompt]);
            }

            if (isUserAskingFlexAccount && isHSAAdminSource) {
                const firstMessage = `It appears you are not enrolled in this type of account.`;
                const secondMessage = `However, I see that you have an HSA through another administrator. Please contact your employer regarding HSA banking arrangements.`;
                await stepContext.context.sendActivity(firstMessage);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(secondMessage);
                return stepContext.next();
            }

            if (isHSAAdminSource && (isGeneralSAQuestion
                || questionSpendingAccountsType === 'HSA')) {
                const firstMessage = `Health Savings Account (HSA) information is only available for UPMC Consumer Advantage accounts.`;
                const secondMessage = `Please contact your employer regarding HSA banking arrangements.`;
                await stepContext.context.sendActivity(firstMessage);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(secondMessage);
                return stepContext.next();
            }

            if (isHSAAdminSource &&
                (questionSpendingAccountsType && questionSpendingAccountsType !== 'HSA' || questionFlexSpendingAccountsType)) {
                const firstMessage = `It appears you are not enrolled in this type of account.`;
                const secondMessage = `However, I see that you have an HSA through another administrator. Please contact your employer regarding HSA banking arrangements.`;
                await stepContext.context.sendActivity(firstMessage);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(secondMessage);
                return stepContext.next();
            }

            if (isGeneralSAQuestion
                || (questionSpendingAccountsType === userHasAccountType)
                || (questionSpendingAccountsType === 'QTA' && (userHasAccountType === 'TRN' || userHasAccountType === 'PKG'))
                || (questionSpendingAccountsType === 'HRA/TRN/PKG' && (userHasAccountType === 'HRA' || userHasAccountType === 'TRN' || userHasAccountType === 'PKG'))) {
                const firstMessage = this.spendingAccountMessagesMap[this.spendingAccountsTypesMap[accountTypeId]].message(availableBalance);
                const secondMessage = `Check your [Spending Accounts](#/main/content/spending-accounts) to learn more.`;
                await stepContext.context.sendActivity(firstMessage);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(secondMessage);
                return stepContext.next();
            } else {
                const spendingAccountsMappedData: Array <ISpendingAccountsDialogData> = [{ availableBalance, accountTypeId }];
                stepContext.values['spendingAccountsMappedData'] = spendingAccountsMappedData;
                const firstMessage = `It appears you are not enrolled in this type of account.`;
                const secondMessage = `However, I see you have another Spending Account.`;
                const thirdMessage = `Would you like to see the balance of a different Spending Account?`;
                await stepContext.context.sendActivity(firstMessage);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(secondMessage);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(thirdMessage);

                const choiceOptions = [{
                    title: userHasAccountType,
                    value: userHasAccountType
                },
                additionalPrompt];

                return await this.sendChoicePrompts(stepContext, choiceOptions, [additionalPrompt]);
            }
        }

        if (isMultipleAccounts) {
            let userHasAccountTypesList: Array <string> = [];
            let spendingAccountsMappedData: Array <ISpendingAccountsDialogData> = [];
            let userHasHSAAdminSource: boolean;

            spendingAccountsData.spendingAccounts.map((spendingAccount) => {
                const isHSAAdminSource = ['EmployerHSA', 'BenefitWallet'].includes(spendingAccount.accountType.dataSource);

                if (!isHSAAdminSource) {
                    userHasAccountTypesList.push(
                        this.spendingAccountsTypesMap[spendingAccount.accountType.id]
                    );
                    spendingAccountsMappedData.push({
                        availableBalance: spendingAccount.availableBalance,
                        accountTypeId: spendingAccount.accountType.id,
                        accountType: this.spendingAccountsTypesMap[spendingAccount.accountType.id]
                    });
                } else {
                    userHasHSAAdminSource = true;
                }
            });

            stepContext.values['spendingAccountsMappedData'] = spendingAccountsMappedData;
            stepContext.values['isMultipleSpendingAccounts'] = true;

            if (isUserAskingFlexAccount) {
                const firstMessage = `It appears you are not enrolled in this type of account.`;
                const secondMessage = `However, I see you have another Spending Account.`;
                const thirdMessage = `Would you like to see the balance of a different Spending Account?`;
                await stepContext.context.sendActivity(firstMessage);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(secondMessage);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(thirdMessage);

                let choiceOptions = userHasAccountTypesList.map(accountType => {
                    return {
                        title: accountType,
                        value: accountType
                    }
                });

                choiceOptions.push(additionalPrompt);

                return await this.sendChoicePrompts(stepContext, choiceOptions, [additionalPrompt]);
            }

            if (questionSpendingAccountsType === 'HSA' && userHasHSAAdminSource) {
                const firstMessage = `Health Savings Account (HSA) information is only available for UPMC Consumer Advantage accounts.`;
                const secondMessage = `Please contact your employer regarding HSA banking arrangements.`;
                const thirdMessage = `Would you like to see the balance of a different Spending Account?`;
                await stepContext.context.sendActivity(firstMessage);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(secondMessage);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(thirdMessage);

                let choiceOptions = userHasAccountTypesList.map(accountType => {
                    return {
                        title: accountType,
                        value: accountType
                    }
                });

                choiceOptions.push(additionalPrompt);

                return await this.sendChoicePrompts(stepContext, choiceOptions, [additionalPrompt]);
            }

            if (questionSpendingAccountsType === 'QTA' && (userHasAccountTypesList.includes('TRN') || userHasAccountTypesList.includes('PKG'))) {
                if (userHasAccountTypesList.includes('TRN') && userHasAccountTypesList.includes('PKG')) {
                    let listOfAccountsBallance: Array <string> = [];

                    spendingAccountsMappedData.forEach(account => {
                        const accountMessageData = this.spendingAccountMessagesMap[account.accountType];
                        listOfAccountsBallance.push(`${ accountMessageData.accountTypeTitle }: **$${ account.availableBalance.toFixed(2)}**`);
                    });

                    const firstMessage = `You have more than one Spending Account. Here are your Spending Account balances.`;
                    const secondMessage = `${ listOfAccountsBallance.join(' \n') }`;
                    const thirdMessage = `Check your [Spending Accounts](#/main/content/spending-accounts) to learn more.`;
                    await stepContext.context.sendActivity(firstMessage);
                    await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                    await stepContext.context.sendActivity(secondMessage);
                    await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                    await stepContext.context.sendActivity(thirdMessage);
                    return await stepContext.next();
                } else {
                    let hasAccountTypeQTA: string;
                    if (userHasAccountTypesList.includes('TRN')) {
                        hasAccountTypeQTA = 'TRN';
                    } else if (userHasAccountTypesList.includes('PKG')) {
                        hasAccountTypeQTA = 'PKG';
                    }

                    const availableBalance = spendingAccountsMappedData.find(item => item.accountType === hasAccountTypeQTA).availableBalance;
                    const firstMessage = this.spendingAccountMessagesMap[hasAccountTypeQTA].message(availableBalance);
                    const secondMessage = `Check your [Spending Accounts](#/main/content/spending-accounts) to learn more.`;
                    const thirdMessage = `Would you like to see the balance of a different Spending Account?`;
                    await stepContext.context.sendActivity(firstMessage);
                    await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                    await stepContext.context.sendActivity(secondMessage);
                    await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                    await stepContext.context.sendActivity(thirdMessage);

                    let choiceOptions = userHasAccountTypesList.map(accountType => {
                        return {
                            title: accountType,
                            value: accountType
                        }
                    });

                    choiceOptions.push(additionalPrompt);

                    return await this.sendChoicePrompts(stepContext, choiceOptions, [additionalPrompt]);
                }
            }

            if (questionSpendingAccountsType === 'HRA/TRN/PKG') {
                if ((userHasAccountTypesList.includes('HRA') || userHasAccountTypesList.includes('TRN') || userHasAccountTypesList.includes('PKG'))) {
                    const reimbursementAccountTypesList: Array <string> = [];
                    if (userHasAccountTypesList.includes('HRA')) reimbursementAccountTypesList.push('HRA');
                    if (userHasAccountTypesList.includes('TRN')) reimbursementAccountTypesList.push('TRN');
                    if (userHasAccountTypesList.includes('PKG')) reimbursementAccountTypesList.push('PKG');

                    if (reimbursementAccountTypesList.length === 1) {
                        const availableBalance = spendingAccountsMappedData.find(item => item.accountType === reimbursementAccountTypesList[0]).availableBalance;
                        const firstMessage = this.spendingAccountMessagesMap[reimbursementAccountTypesList[0]].message(availableBalance);
                        const secondMessage = `Check your [Spending Accounts](#/main/content/spending-accounts) to learn more.`;
                        const thirdMessage = `Would you like to see the balance of a different Spending Account?`;
                        await stepContext.context.sendActivity(firstMessage);
                        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                        await stepContext.context.sendActivity(secondMessage);
                        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                        await stepContext.context.sendActivity(thirdMessage);

                        let choiceOptions = userHasAccountTypesList.map(accountType => {
                            return {
                                title: accountType,
                                value: accountType
                            }
                        });

                        choiceOptions.push(additionalPrompt);

                        return await this.sendChoicePrompts(stepContext, choiceOptions, [additionalPrompt]);
                    } else {
                        let listOfAccountsBallance: Array <string> = [];
                        spendingAccountsMappedData.forEach(account => {
                            const accountMessageData = this.spendingAccountMessagesMap[account.accountType];
                            listOfAccountsBallance.push(`${ accountMessageData.accountTypeTitle }: **$${ account.availableBalance.toFixed(2)}**`);
                        });

                        const firstMessage = `You have more than one Spending Account. Here are your Spending Account balances.`;
                        const secondMessage = `${ listOfAccountsBallance.join(' \n') }`;
                        const thirdMessage = `Check your [Spending Accounts](#/main/content/spending-accounts) to learn more.`;
                        await stepContext.context.sendActivity(firstMessage);
                        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                        await stepContext.context.sendActivity(secondMessage);
                        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                        await stepContext.context.sendActivity(thirdMessage);
                        return await stepContext.next();
                    }
                } else {
                    const firstMessage = `It appears you are not enrolled in this type of account.`;
                    const secondMessage = `However, I see you have another Spending Account.`;
                    const thirdMessage = `Would you like to see the balance of a different Spending Account?`;
                    await stepContext.context.sendActivity(firstMessage);
                    await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                    await stepContext.context.sendActivity(secondMessage);
                    await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                    await stepContext.context.sendActivity(thirdMessage);

                    let choiceOptions = userHasAccountTypesList.map(accountType => {
                        return {
                            title: accountType,
                            value: accountType
                        }
                    });

                    choiceOptions.push(additionalPrompt);

                    return await this.sendChoicePrompts(stepContext, choiceOptions, [additionalPrompt]);
                }
            }

            if (questionSpendingAccountsType && userHasAccountTypesList.includes(questionSpendingAccountsType)) {
                const availableBalance = spendingAccountsMappedData.find(item => item.accountType === questionSpendingAccountsType).availableBalance;
                const firstMessage = this.spendingAccountMessagesMap[questionSpendingAccountsType].message(availableBalance);
                const secondMessage = `Check your [Spending Accounts](#/main/content/spending-accounts) to learn more.`;
                const thirdMessage = `Would you like to see the balance of a different Spending Account?`;
                await stepContext.context.sendActivity(firstMessage);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(secondMessage);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(thirdMessage);

                let choiceOptions = userHasAccountTypesList.map(accountType => {
                    return {
                        title: accountType,
                        value: accountType
                    }
                });

                choiceOptions.push(additionalPrompt);

                return await this.sendChoicePrompts(stepContext, choiceOptions, [additionalPrompt]);

            } else if (questionSpendingAccountsType && !userHasAccountTypesList.includes(questionSpendingAccountsType)) {
                const firstMessage = `It appears you are not enrolled in this type of account.`;
                const secondMessage = `However, I see you have another Spending Account.`;
                const thirdMessage = `Would you like to see the balance of a different Spending Account?`;
                await stepContext.context.sendActivity(firstMessage);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(secondMessage);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(thirdMessage);

                let choiceOptions = userHasAccountTypesList.map(accountType => {
                    return {
                        title: accountType,
                        value: accountType
                    }
                });

                choiceOptions.push(additionalPrompt);

                return await this.sendChoicePrompts(stepContext, choiceOptions, [additionalPrompt]);

            } else {
                if (spendingAccountsMappedData.length > 1) {
                    let listOfAccountsBallance: Array <string> = [];

                    spendingAccountsMappedData.forEach(account => {
                        const accountMessageData = this.spendingAccountMessagesMap[account.accountType];
                        listOfAccountsBallance.push(`${ accountMessageData.accountTypeTitle }: **$${ account.availableBalance.toFixed(2)}**`);
                    });

                    const firstMessage = `You have more than one Spending Account. Here are your Spending Account balances.`;
                    const secondMessage = `${ listOfAccountsBallance.join(' \n') }`;
                    const thirdMessage = `Check your [Spending Accounts](#/main/content/spending-accounts) to learn more.`;
                    await stepContext.context.sendActivity(firstMessage);
                    await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                    await stepContext.context.sendActivity(secondMessage);
                    await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                    await stepContext.context.sendActivity(thirdMessage);
                    return await stepContext.next();
                } else {
                    const firstMessage = this.spendingAccountMessagesMap[spendingAccountsMappedData[0].accountType]
                        .message(spendingAccountsMappedData[0].availableBalance);
                    const secondMessage = `Check your [Spending Accounts](#/main/content/spending-accounts) to learn more.`;
                    await stepContext.context.sendActivity(firstMessage);
                    await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                    await stepContext.context.sendActivity(secondMessage);
                    return await stepContext.next();
                }
            }
        }

        if (isNoSpendingAccounts) {
            const message = 'I do not see a spending account associated with this plan. Would you like to chat with a concierge?';
            await stepContext.context.sendActivity(message);
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            return await stepContext.beginDialog(LIVE_CHAT_TRANSITION);
        }
    }

    private async sendSelectedAccountTypeMessageStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        if ((stepContext.result && stepContext.result.value)
            && (Object.values(this.spendingAccountsTypesMap).includes(stepContext.result.value))
            && !stepContext.values['isMultipleSpendingAccounts']) {
            const selectedSpendingAccountType: string = stepContext.result.value;
            const selectedSpendingAccountId: number = this.spendingAccountMessagesMap[selectedSpendingAccountType].accountTypeId;
            const spendingAccountsMappedData: Array <ISpendingAccountsDialogData> = stepContext.values['spendingAccountsMappedData'];
            const selectedSpendingAccountBalance: number = spendingAccountsMappedData.find(item => item.accountTypeId === selectedSpendingAccountId).availableBalance;
            const firstMessage = this.spendingAccountMessagesMap[selectedSpendingAccountType].message(selectedSpendingAccountBalance);
            const secondMessage = `Check your [Spending Accounts](#/main/content/spending-accounts) to learn more.`;
            await stepContext.context.sendActivity(firstMessage);
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            await stepContext.context.sendActivity(secondMessage);
        }
        if ((stepContext.result && stepContext.result.value)
            && (Object.values(this.spendingAccountsTypesMap).includes(stepContext.result.value))
            && stepContext.values['isMultipleSpendingAccounts']) { // If user has multiple spending accounts by requirements we should loop prompts
            const selectedSpendingAccountType: string = stepContext.result.value;
            return await stepContext.replaceDialog(BILLING_SPENDING_ACCOUNTS, {spendingAccountsType: selectedSpendingAccountType });
        }
        return stepContext.next({isSuccess: true});
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        if (!stepContext.result) {
            return await stepContext.endDialog({success: true});
        }
        return await stepContext.endDialog({ success: stepContext.result.isSuccess });
    }

    private async sendChoicePrompts(
        stepContext: WaterfallStepContext,
        choiceOptions: Array <{ title: string, value: string }>,
        additionalPrompts?: Array<{ title: string, value: string }>
    ): Promise<DialogTurnResult> {

        if (additionalPrompts) {
            await stepContext.context.sendActivity({ type: 'event', name: 'custom_event/prompts_type', value: {
                type: 'standalone_prompts',
                list: additionalPrompts
            }});
        }

        return await stepContext.prompt(CHOICE_PROMPT,
            {
                style: ListStyle.suggestedAction,
            },
            choiceOptions.map(el => {
                return {
                    value: el.value,
                    action: {
                        type: ActionTypes.ImBack,
                        title: el.title,
                        value: el.title,
                    },
                }
            })
        );
    }

    private async checkHasUserFlexSpendingAccounts(token: string, consumer: IConsumerProfile): Promise<boolean> {
        const eligibilityType: string = consumer.eligibilityType.toLowerCase();
        let flexSpendingAccountsData: IFlexAccountResponse;
        if (['medicare', 'snp'].includes(eligibilityType)) {
            flexSpendingAccountsData =  await this.billingService.getFlexSpendingAccounts(token)
                .catch(() => { return null; });
            return !!flexSpendingAccountsData?.rewardAccount;
        } else {
            return false;
        }
    }
}
