import { ActivityTypes, StatePropertyAccessor, UserState, ActionTypes, ConversationState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext, ChoicePrompt, ListStyle } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY, USER_AUTH_PROPERTY } from '../../common/constants';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';
import { ISubscription } from '../../common/interfaces/subscription.interface';
import { IFlexAccountResponse } from './flex-account.interface';
import { FlexAccountService } from './flex-account.service';
import { BILLING_SPENDING_ACCOUNTS } from '../billing/billing-spending-accounts/billing-spending-accounts.dialog';
import { LiveChatTransitionDialog, LIVE_CHAT_TRANSITION } from '../live-chat-transition/live-chat-transition.dialog';
import { CommonService } from '../../common/services/common.service';

export const FLEX_ACCOUNT = 'FLEX_ACCOUNT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';
const CHOICE_PROMPT = 'CHOICE_PROMPT';

export class FlexAccountDialog extends CancelAndHelpDialog {
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;
    private flexAccountService: FlexAccountService;
    private commonService: CommonService;
    private medicareRewardsPBPCodes = [
        'H3907-006',
        'H5533-003',
        'H5533-005',
        'H5533-008',
        'H3907-802',
        'H5533-801',
        'H5533-802',
    ];
    private medicarePBPCodes = [
        'H3907-002',
        'H3907-046',
        'H3907-050',
        'H3907-052',
        'H3907-037',
        'H3907-049',
        'H3907-029',
        'H5533-011',
        'H5533-009',
        'H5533-012',
        'H5533-013',
        'H5533-014',
    ];
    private snpPBPCodes = [
        'H4279-001',
        'H4279-004',
        'H7123-001',
    ];
    private accountTypesList = [
        'Shop Healthy Card',
        'Flex Spend Card'
    ];

    constructor(id: string, userState: UserState, conversationState: ConversationState) {
        super(id || FLEX_ACCOUNT);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
        this.flexAccountService = new FlexAccountService();
        this.commonService = new CommonService();

        this.addDialog(new ChoicePrompt(CHOICE_PROMPT));
        this.addDialog(new LiveChatTransitionDialog(LIVE_CHAT_TRANSITION, userState, conversationState));
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.sendSelectedAccountTypeMessageStep.bind(this),
            this.finalStep.bind(this),
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
        const consumer: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        const questionFlexSpendingAccountsType: string = stepContext.options['flexSpendingAccountsType'];
        const questionSpendingAccountsType: string = stepContext.options['questionSpendingAccountsType'];
        const isGeneralSAQuestion = !questionFlexSpendingAccountsType && !questionSpendingAccountsType;
        let message: string;
        let flexAccountResp: IFlexAccountResponse;
        let allPlans: ISubscription[];
        let currentPlan: ISubscription;
        let userHasAccountType: string;
        let regularAccountsResult;

        let eligibilityType: string = consumer.eligibilityType.toLowerCase();

        try {
            regularAccountsResult = await this.flexAccountService.getSpendingAccounts(userAuth.token);
        } catch (error) {
            const message = `I do not see a spending account associated with this plan. Would you like to chat with a concierge?`;
            await stepContext.context.sendActivity(message);
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            return await stepContext.beginDialog(LIVE_CHAT_TRANSITION);
        }

        // If user has regular spending accounts data it means that user doesn't have flex spending account and we must redirect him to the BILLING_SPENDING_ACCOUNTS dialog
        if (regularAccountsResult.spendingAccounts && regularAccountsResult.spendingAccounts.length >= 1) {
            return await stepContext.replaceDialog(BILLING_SPENDING_ACCOUNTS, {isUserAskingFlexAccount: true, questionFlexSpendingAccountsType});
        }

        if (['medicare', 'snp'].includes(eligibilityType) && ['FutureActive', 'Active'].includes(consumer.memberStatus)) {

            const memberId = consumer.mc400MemberId || consumer.dentalVisionMemberId;
            const [subscriptionsResult, flexAccountResult] = await Promise.allSettled([
                this.commonService.getAllPlans(
                    memberId.substring(0, 9),
                    consumer,
                    userAuth.token,
                    userAuth.token2
                ),
                this.flexAccountService.getFlexSpendingAccounts(userAuth.token),
            ]);

            if (flexAccountResult.status === 'fulfilled' && flexAccountResult.value) {
                flexAccountResp = flexAccountResult.value as IFlexAccountResponse;
            }

            if (subscriptionsResult.status === 'fulfilled' && subscriptionsResult.value) {
                allPlans = subscriptionsResult.value as ISubscription[];
                currentPlan = allPlans.find( el => el.memberId === memberId);
            }

            const eligibility = currentPlan.eligibilities.some(el => el.eligibilityStatus === 'Active')
            ? currentPlan.eligibilities.find(el => el.eligibilityStatus === 'Active')
            : currentPlan.eligibilities[0];
            const pbpCode: string = eligibility.currentContractNumber + '-' + eligibility.currentPBPIdentifier;

            if (flexAccountResp?.rewardAccount) {
                const availableBalance = flexAccountResp?.rewardAccount.availableBalance || 0;
                const beginningBalance = flexAccountResp?.rewardAccount.beginningBalance || 0;
                if (eligibilityType === 'snp' && this.snpPBPCodes.includes(pbpCode)) {
                    if (isGeneralSAQuestion || questionFlexSpendingAccountsType === 'ShopCard') {
                        message = `Your beginning balance for this quarter on your **UPMC <i>for Life</i> Complete Care Shop Healthy Card** is **$${beginningBalance}**.`;
                        await stepContext.context.sendActivity(message);
                        message = `You currently have an available balance of **$${availableBalance}**.`;
                        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                        await stepContext.context.sendActivity(message);
                        message = `Your card will be reloaded quarterly (every 3 months), but any unused funds will expire and will not roll over.`;
                        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                        await stepContext.context.sendActivity(message);
                        message = `To learn more, visit [Spending Accounts](#/main/content/spending-accounts).`;
                        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                        await stepContext.context.sendActivity(message);
                        return await stepContext.next();
                    } else {
                        userHasAccountType = 'Shop Healthy Card';
                        stepContext.values['availableBalance'] = availableBalance;
                        stepContext.values['beginningBalance'] = beginningBalance;
                        return await this.sendFlexAccountPrompt(stepContext, userHasAccountType);
                    }
                } else if (this.medicarePBPCodes.includes(pbpCode)) {
                    if (isGeneralSAQuestion || questionFlexSpendingAccountsType === 'FlexCard') {
                        /* medicare */
                        message = `Your beginning balance on your **UPMC <i>for Life</i> Flex Spend Card** is **$${beginningBalance}**.`;
                        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                        await stepContext.context.sendActivity(message);
                        message = `You currently have an available balance of **$${availableBalance}**.`;
                        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                        await stepContext.context.sendActivity(message);
                        message = `To learn more, visit [Spending Accounts](#/main/content/spending-accounts).`;
                        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                        await stepContext.context.sendActivity(message);
                        return await stepContext.next();
                    } else {
                        userHasAccountType = 'Flex Spend Card';
                        stepContext.values['availableBalance'] = availableBalance;
                        stepContext.values['beginningBalance'] = beginningBalance;
                        return await this.sendFlexAccountPrompt(stepContext, userHasAccountType);
                    }
                } else if (this.medicareRewardsPBPCodes.includes(pbpCode)) {
                    if (isGeneralSAQuestion || questionFlexSpendingAccountsType === 'FlexCard') {
                        /* medicare */
                        message = `Your current balance is **$${availableBalance}**. You can complete eligible activities to earn your rewards.`;
                        await stepContext.context.sendActivity(message);
                        message = `To learn more, visit [Spending Accounts](#/main/content/spending-accounts).`;
                        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                        await stepContext.context.sendActivity(message);
                        return await stepContext.next();
                    } else {
                        userHasAccountType = 'Flex Spend Card';
                        stepContext.values['availableBalance'] = availableBalance;
                        stepContext.values['beginningBalance'] = beginningBalance;
                        stepContext.values['isRewardFlexCardBalance'] = true;
                        return await this.sendFlexAccountPrompt(stepContext, userHasAccountType);
                    }
                } else {
                    message = `I am unable to provide this information at this time.`;
                    await stepContext.context.sendActivity(message);
                    message = `You can type **“help”** to chat with a concierge.`;
                    await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                    await stepContext.context.sendActivity(message);
                    return await stepContext.endDialog({ success: false });
                }
            } else {
                message = `I am unable to provide this information at this time.`;
                await stepContext.context.sendActivity(message);
                message = `You can type **“help”** to chat with a concierge.`;
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(message);
                return await stepContext.endDialog({ success: false });
            }
        } else {
            const message = `I do not see a spending account associated with this plan. Would you like to chat with a concierge?`;
            await stepContext.context.sendActivity(message);
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            return await stepContext.beginDialog(LIVE_CHAT_TRANSITION);
        }
    }

    private async sendSelectedAccountTypeMessageStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        let message: string;
        if ((stepContext.result && stepContext.result.value) && (this.accountTypesList.includes(stepContext.result.value))) {
            if (stepContext.result.value === 'Shop Healthy Card') {
                message = `Your beginning balance for this quarter on your **UPMC <i>for Life</i> Complete Care Shop Healthy Card** is **$${stepContext.values['beginningBalance']}**.`;
                await stepContext.context.sendActivity(message);
                message = `You currently have an available balance of **$${stepContext.values['availableBalance']}**.`;
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(message);
                message = `Your card will be reloaded quarterly (every 3 months), but any unused funds will expire and will not roll over.`;
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(message);
                message = `To learn more, visit [Spending Accounts](#/main/content/spending-accounts).`;
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(message);
            }
            if (stepContext.result.value === 'Flex Spend Card' && !stepContext.values['isRewardFlexCardBalance']) {
                message = `Your beginning balance on your **UPMC <i>for Life</i> Flex Spend Card** is **$${stepContext.values['beginningBalance']}**.`;
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(message);
                message = `You currently have an available balance of **$${stepContext.values['availableBalance']}**.`;
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(message);
                message = `To learn more, visit [Spending Accounts](#/main/content/spending-accounts).`;
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(message);
            }
            if (stepContext.result.value === 'Flex Spend Card' && stepContext.values['isRewardFlexCardBalance']) {
                message = `Your current balance is **$${stepContext.values['availableBalance']}**. You can complete eligible activities to earn your rewards.`;
                await stepContext.context.sendActivity(message);
                message = `To learn more, visit [Spending Accounts](#/main/content/spending-accounts).`;
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(message);
            }
        }
        return await stepContext.next({isSuccess: true});
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: stepContext.result.isSuccess });
    }

    private async sendFlexAccountPrompt(stepContext: WaterfallStepContext, userHasFlexAccountType: string): Promise<DialogTurnResult> {
        const firstMessage = `It appears you are not enrolled in this type of account.`;
        const secondMessage = `However, I see you have another Spending Account.`;
        const thirdMessage = `Would you like to see the balance of a different Spending Account?`;
        await stepContext.context.sendActivity(firstMessage);
        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
        await stepContext.context.sendActivity(secondMessage);
        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
        await stepContext.context.sendActivity(thirdMessage);

        const additionalPrompt = {
            title: 'Ask about something else',
            value: 'Ask about something else'
        };

        const choiceOptions = [{
            title: userHasFlexAccountType,
            value: userHasFlexAccountType
        },
        additionalPrompt];

        await stepContext.context.sendActivity({ type: 'event', name: 'custom_event/prompts_type', value: {
            type: 'standalone_prompts',
            list: [additionalPrompt]
        }});

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
}
