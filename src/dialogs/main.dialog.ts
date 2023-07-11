import { Activity, InputHints, StatePropertyAccessor, TurnContext, UserState, ConversationState, ActivityTypes } from 'botbuilder';
import {
    DialogSet,
    DialogState,
    DialogTurnResult,
    DialogTurnStatus,
    TextPrompt,
    WaterfallDialog,
    WaterfallStepContext
} from 'botbuilder-dialogs';

import * as spellCheckExceptions from '../resources/spell-check-exceptions.json';

import { AuthDialog, AUTH } from './auth/auth.dialog';
import { AssessmentFormDialog, ASSESSMENT_FORM } from './assessment-form/assessment-form.dialog';
import { IUserAuth } from '../common/interfaces/user-auth.interface';
import { IBingSpellCheckResponse } from './interfaces';
import { ICluResult } from '../common/interfaces/clu.interface';
import { IQuestionAnsweringResponse } from '../common/interfaces/questionAnswering.interface';
import { ITelemetryData } from '../common/interfaces/telemetry.interface';
import { USER_AUTH_PROPERTY, TELEMETRY_DATA_PROPERTY, CONVERSATION_DATA_PROPERTY } from '../common/constants';
import { EligibilityCoverageDialog, ELIGIBILITY_COVERAGE } from './eligibility-coverage/eligibility-coverage.dialog';
import { BenefitCoverageCoinsuranceDialog, BENEFIT_COVERAGE_COINSURANCE } from './benefit-coverage/benefit-coverage-coinsurance/benefit-coverage-coinsurance.dialog';
import { BenefitCoverageDeductibleOopDialog, BENEFIT_COVERAGE_DEDUCTIBLE_OOP } from './benefit-coverage/benefit-coverage-deductible-oop/benefit-coverage-deductible-oop.dialog';
import { WhoIsMyPcpDialog, WHO_IS_MY_PCP } from './who-Is-my-pcp/who-Is-my-pcp.dialog';
import { EligibilityIdCardDialog, ELIGIBILITY_ID_CARD } from './eligibility-id-card/eligibility-id-card.dialog';
import { BillingMonthlyPremiumDialog, BILLING_MONTHLY_PREMIUM } from './billing/billing-monthly-premium/billing-monthly-premium.dialog';
import { BillingMedicalDialog, BILLING_MEDICAL } from './billing/billing-medical/billing-medical.dialog';
import { BillingGeneralDialog, BILLING_GENERAL } from './billing/billing-general/billing-general.dialog';
import { EligibilityDependentCoverageDialog, ELIGIBILITY_DEPENDENT_COVERAGE } from './eligibility-dependent-coverage/eligibility-dependent-coverage.dialog';
import { BillingSpendingAccountsDialog, BILLING_SPENDING_ACCOUNTS } from './billing/billing-spending-accounts/billing-spending-accounts.dialog';
import { EligibilityPharmacyProcessingDialog, ELIGIBILITY_PHARMACY_PROCESSING } from './eligibility-pharmacy-processing/eligibility-pharmacy-processing.dialog';
import { InitialChatDialog, INITIAL_CHAT } from './initial-chat/initial-chat.dialog';
import { ClaimNavigationDialog, CLAIM_NAVIGATION } from './claim-navigation/claim-navigation.dialog';
import { LiveChatTransitionDialog, LIVE_CHAT_TRANSITION } from './live-chat-transition/live-chat-transition.dialog';
import { GetIdNumberDialog, ID_NUMBER } from './get-id-number/get-id-number.dialog';
import { TahsStatusDialog, TAHS_STATUS } from './tahs-status/tahs-status.dialog';
import { AnocStatusDialog, ANOC_STATUS } from './anoc-status/anoc-status.dialog';
import { EsiStatusDialog, ESI_STATUS } from './esi-status/esi-status.dialog';
import { OonClaimFormDialog, OON_CLAIM_FORM } from './oon-claim-form/oon-claim-form.dialog';
import { GeneralFormsDialog, GENERAL_FORMS } from './general-forms/general-forms.dialog';
import { BillingAutopayPremiumDialog, BILLING_AUTOPAY_PREMIUM } from './billing/billing-autopay-premium/billing-autopay-premium.dialog';
import { OonCareFormDialog, OON_CARE_FORM } from './oon-care-form/oon-care-form.dialog';
import { CovidFormDialog, COVID_FORM } from './covid-form/covid-form.dialog';
import { PcpCurrentDialog, PCP_CURRENT } from './pcp/pcp-current.dialog';
import { FlexAccountDialog, FLEX_ACCOUNT } from './flex-account/flex-account.dialog';
import { WorkpartnersRedirectsDialog, WORKPARTNERS_REDIRECTS } from './workpartners-redirects/workpartners-redirects.dialog';
import { TaxFormDialog, TAX_FORM } from './tax-form/tax-form.dialog';
import { PrefCenterUpdatesDialog, PREF_CENTER_UPDATES } from './pref-center-updates/pref-center-updates.dialog'
import { OtcRedirectDialog, OTC_REDIRECTS } from './otc-redirects/otc-redirects.dialog';
import { NetworkSearchProviderDialog, NETWORK_SEARCH_PROVIDER } from './network-search-provider/network-search-provider.dialog';
import { MembershipGymDialog, MEMBERSHIP_GYM } from './memberships/membership-gym.dialog';
import { FileComplaintDialog, FILE_COMPLAINT} from './file-complaint/file-complaint.dialog';
import { HiaFormDialog, HIA_FORM} from './hia-form/hia-form.dialog';
import { PrefCenterPreferredNameDialog, PREF_CENTER_PREFERRED_NAME } from './pref-center/pref-center-preferred-name.dialog';
import { PrefCenterPreferredPronounsDialog, PREF_CENTER_PREFERRED_PRONOUNS } from './pref-center/pref-center-preferred-pronouns.dialog';

import { RopcService } from '../common/services/ropc.service';
import { CancelAndHelpDialog } from './cancel-and-help.dialog';
import { IConversationData } from '../common/interfaces/conversation-data.interface';
import { HomeSafetyOrderRedirectDialog, HOME_SAFETY_ORDER_REDIRECTS } from './home-safety-order-redirects/home-safety-order-redirects.dialog';
import { PrenatalAssessmentRedirectDialog, PRENATAL_ASSESSMENT_REDIRECTS } from './prenatal-assessment-redirect/prenatal-assessment-redirect.dialog';
import { MYUPMC_REDIRECTS, MyUpmcRedirectsDialog } from './myupmc-redirects/myupmc-redirects.dialog';
import { FLEXCARD_FAQ, FlexCardFAQDialog } from './flexcard-faqs/flexcard-faqs.dialog';

export const MAIN_DIALOG = 'MAIN_DIALOG';
const MAIN_WATERFALL_DIALOG = 'MAIN_WATERFALL_DIALOG';

export class MainDialog extends CancelAndHelpDialog {
    private ropcService: RopcService;
    private spellCheck: any;
    private questionAnswering: (u: string) => Promise<any>;
    private getCluResult: (u: string) => Promise<any>;

    private conversationDataAccessor: StatePropertyAccessor<IConversationData>;
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private telemetryDataAccessor: StatePropertyAccessor<ITelemetryData>;
    private intentsRequiringAuth: Array<string> = [
        'Eligibility_My_Coverage',
        'Eligibility_Coverage_Vision',
        'Eligibility_Coverage_Dental',
        'Eligibility_PharmacyProcessing',
        'BenefitCoverage_My_Coinsurance',
        'BenefitCoverage_My_Deductible',
        'BenefitCoverage_OutOfPocketMax',
        'Billing_MonthlyPremium',
        'Billing_SpendingAccounts'
    ];

    private definitions: Object = {
        Eligibility_Coverage: 'The effective date is **the date on which your coverage becomes active.**',
        BenefitCoverage_Coinsurance: 'Coinsurance is **the portion of the cost of covered medical services that are paid by a member after they meet any applicable plan deductible(s).** Coinsurance amounts are typically a percentage of the cost and they may vary by service type.',
        BenefitCoverage_Deductible: 'A deductible is **a fixed amount that a member must pay for covered medical services before the Health Plan will pay benefits**.'
    }

    private noneIntentAnswers: Object = {
        1: `I'm sorry, I didn't understand that. Please rephrase your question.`,
        2: `Please rephrase your question, or type **“help”** to chat with a concierge.`,
        3: `I didn't understand that. I can transfer you to a concierge for further assistance. Type **"help"** to connect with them.`
    }

    private didntUnderstandMessageText = `I am sorry I am unable to answer this question. ` +
    `Please rephrase your question, or type “help” to chat with a live concierge.`;

    private getEntity(entityArr: Array<any>, category: string): string {
        const mainEntity = entityArr.find(el => el.category === category);
        const entity = mainEntity?.extraInformation?.length ? mainEntity.extraInformation[0]?.key : '';
        return entity;
    }

    private async handleCluIntent (intent: string, stepContext: WaterfallStepContext, cluPrediction = {} ) {
         switch (intent) {
            case 'Initial_Chat':
                return await stepContext.beginDialog(INITIAL_CHAT);
            case 'PRD_Form':
                return await stepContext.beginDialog(ASSESSMENT_FORM, { assessmentType: 'PRD' });
            case 'FluShot_Form':
                return await stepContext.beginDialog(ASSESSMENT_FORM, { assessmentType: 'FluShot' });
            case 'OON_Vision_Form':
                return await stepContext.beginDialog(OON_CLAIM_FORM, { formType: 'vision' });
            case 'OON_Dental_Form':
                return await stepContext.beginDialog(OON_CLAIM_FORM, { formType: 'dental' });
            case 'OON_Care_Form':
                return await stepContext.beginDialog(OON_CARE_FORM);
            case 'Covid_Form':
                return await stepContext.beginDialog(COVID_FORM);
            case 'Tax_Form':
                return await stepContext.beginDialog(TAX_FORM);
            case 'General_Forms':
                return await stepContext.beginDialog(GENERAL_FORMS);
            case 'WorkPartners_Check_LOA':
                return await stepContext.beginDialog(WORKPARTNERS_REDIRECTS, { questionType: 'check_loa' });
            case 'WorkPartners_LOA':
                return await stepContext.beginDialog(WORKPARTNERS_REDIRECTS, { questionType: 'loa' });
            case 'WorkPartners_WorkersComp':
                return await stepContext.beginDialog(WORKPARTNERS_REDIRECTS, { questionType: 'workers_comp' });
            case 'FlexAccount':
                let flexSpendingAccountsType = this.getEntity(cluPrediction['entities'], 'SpendingAccountsType');;
                return await stepContext.beginDialog(FLEX_ACCOUNT, { flexSpendingAccountsType });
            case 'Eligibility_My_Coverage':
                return await stepContext.beginDialog(ELIGIBILITY_COVERAGE, { planType: 'medical' });
            case 'Eligibility_DependentCoverage':
                return await stepContext.beginDialog(ELIGIBILITY_DEPENDENT_COVERAGE, { planType: 'Medical' });
            case 'Eligibility_DependentCoverageType':
                let planType: string = this.getEntity(cluPrediction['entities'], 'PlanType');
                return await stepContext.beginDialog(ELIGIBILITY_DEPENDENT_COVERAGE, { planType });
            case 'BenefitCoverage_My_Coinsurance':
                return await stepContext.beginDialog(BENEFIT_COVERAGE_COINSURANCE);
            case 'Eligibility_Coverage_Vision':
                return await stepContext.beginDialog(ELIGIBILITY_COVERAGE, { planType: 'vision' });
            case 'Eligibility_Coverage_Dental':
                return await stepContext.beginDialog(ELIGIBILITY_COVERAGE, { planType: 'dental' });
            case 'Eligibility_Coverage_Wellness':
                return await stepContext.beginDialog(ELIGIBILITY_COVERAGE, { planType: 'wellness' });
            case 'Eligibility_ID_Card':
                return await stepContext.beginDialog(ELIGIBILITY_ID_CARD);
            case 'ID_Card':
                let idCardType: string = this.getEntity(cluPrediction['entities'], 'IDCardType');
                return await stepContext.beginDialog(ELIGIBILITY_ID_CARD, { idCardType });
            case 'BenefitCoverage_My_Deductible':
                return await stepContext.beginDialog(BENEFIT_COVERAGE_DEDUCTIBLE_OOP, { isOutOfPocket: false });
            case 'BenefitCoverage_OutOfPocketMax':
                return await stepContext.beginDialog(BENEFIT_COVERAGE_DEDUCTIBLE_OOP, { isOutOfPocket: true });
            case 'Billing_MonthlyPremium':
                return await stepContext.beginDialog(BILLING_MONTHLY_PREMIUM);
            case 'Billing_SpendingAccounts':
                let spendingAccountsType: string = this.getEntity(cluPrediction['entities'], 'SpendingAccountsType');
                return await stepContext.beginDialog(BILLING_SPENDING_ACCOUNTS, { spendingAccountsType });
            case 'Billing_AutopayPremium':
                return await stepContext.beginDialog(BILLING_AUTOPAY_PREMIUM);
            case 'Billing_Medical':
                return await stepContext.beginDialog(BILLING_MEDICAL);
            case 'Billing_General':
                return await stepContext.beginDialog(BILLING_GENERAL);
            case 'Eligibility_PharmacyProcessing':
                return await stepContext.beginDialog(ELIGIBILITY_PHARMACY_PROCESSING);
            case 'ID_Number_Dental':
                return await stepContext.beginDialog(ID_NUMBER, { idNumberType: 'dental' });
            case 'ID_Number_Vision':
                return await stepContext.beginDialog(ID_NUMBER, { idNumberType: 'vision' });
            case 'ID_Number_Medical':
                return await stepContext.beginDialog(ID_NUMBER, { idNumberType: 'medical' });
            case 'TAHS_Status':
                return await stepContext.beginDialog(TAHS_STATUS);
            case 'ANOC_Status':
                return await stepContext.beginDialog(ANOC_STATUS);
            case 'ESI_Status':
                return await stepContext.beginDialog(ESI_STATUS);
            case 'WhoIsMyPCP':
                return await stepContext.beginDialog(WHO_IS_MY_PCP);
            case 'ClaimsNavigation':
                return await stepContext.beginDialog(CLAIM_NAVIGATION);
            case 'PCP_Current':
                return await stepContext.beginDialog(PCP_CURRENT);
            case 'LiveChat_Transition':
                const isRestartLiveChatDialog = stepContext.options['isRestartLiveChatDialog'];
                return await stepContext.beginDialog(LIVE_CHAT_TRANSITION, { isRestartLiveChatDialog });
            case 'Pref_Center_Email':
                return await stepContext.beginDialog(PREF_CENTER_UPDATES, { updateType: 'email' });
            case 'Pref_Center_Phone':
                return await stepContext.beginDialog(PREF_CENTER_UPDATES, { updateType: 'phone' });
            case 'Pref_Center_Paperless':
                return await stepContext.beginDialog(PREF_CENTER_UPDATES, { updateType: 'paperless' });
            case 'Pref_Center_Address':
                return await stepContext.beginDialog(PREF_CENTER_UPDATES, { updateType: 'address' });
            case 'OTC_Catalog':
                return await stepContext.beginDialog(OTC_REDIRECTS);
            case 'Home_Safety_Order':
                return await stepContext.beginDialog(HOME_SAFETY_ORDER_REDIRECTS);
            case 'Eligibility_Coverage': {
                const message = this.definitions['Eligibility_Coverage'];
                await stepContext.context.sendActivity(message);
                return await stepContext.next({ success: true, nextIntent: false });
            }
            case 'BenefitCoverage_Coinsurance': {
                const message = this.definitions['BenefitCoverage_Coinsurance'];
                await stepContext.context.sendActivity(message);
                return await stepContext.next({ success: true, nextIntent: false });
            }
            case 'BenefitCoverage_Deductible': {
                const message = this.definitions['BenefitCoverage_Deductible'];
                await stepContext.context.sendActivity(message);
                return await stepContext.next({ success: true, nextIntent: false });
            }
            case 'Membership_Gym':
                return await stepContext.beginDialog(MEMBERSHIP_GYM);
            case 'NetworkSearch_Provider':
                return await stepContext.beginDialog(NETWORK_SEARCH_PROVIDER);
            case 'FileComplaint':
                return await stepContext.beginDialog(FILE_COMPLAINT);
            case 'HIA_Form':
                return await stepContext.beginDialog(HIA_FORM);
            case 'Prenatal_Assessment':
                return await stepContext.beginDialog(PRENATAL_ASSESSMENT_REDIRECTS);
            case 'FlexCard_MedicalServices':
                return await stepContext.beginDialog(FLEXCARD_FAQ, { questionType: 'medical' });
            case 'FlexCard_UnusedFunds':
                return await stepContext.beginDialog(FLEXCARD_FAQ, { questionType: 'unused' });
            case 'FlexCard_DentalServices':
                return await stepContext.beginDialog(FLEXCARD_FAQ, { questionType: 'dental' });
            case 'FlexCard_NewCard':
                return await stepContext.beginDialog(FLEXCARD_FAQ, { questionType: 'new' });
            case 'FlexCard_EligibleStores':
                return await stepContext.beginDialog(FLEXCARD_FAQ, { questionType: 'eligible_stores' });
            case 'FlexCard_Walmart':
                return await stepContext.beginDialog(FLEXCARD_FAQ, { questionType: 'walmart' });
            case 'FlexCard_GiantEagle':
                return await stepContext.beginDialog(FLEXCARD_FAQ, { questionType: 'giant' });
            case 'Current_Appointments':
                 return await stepContext.beginDialog(MYUPMC_REDIRECTS, { redirectType: 'current' });
            case 'Schedule_Appointment':
                 return await stepContext.beginDialog(MYUPMC_REDIRECTS, { redirectType: 'schedule' });
            case 'PrefCenter_PreferredName':
                return await stepContext.beginDialog(PREF_CENTER_PREFERRED_NAME);
            case 'PrefCenter_PreferredPronouns':
                return await stepContext.beginDialog(PREF_CENTER_PREFERRED_PRONOUNS);
            case 'Test_Results':
                 return await stepContext.beginDialog(MYUPMC_REDIRECTS, { redirectType: 'results' });
            default:
                // TODO: add desired behavior or update message
                // Catch all for unhandled intents
                let message = this.noneIntentAnswers[3];
                if (stepContext.options['noneIntentCounter'] < 3) {
                    message = this.noneIntentAnswers[stepContext.options['noneIntentCounter']];
                }
                await stepContext.context.sendActivity(message, message, InputHints.IgnoringInput);
                return await stepContext.next();
        }
    }

    constructor(getCluResult: (utterance: string) => Promise<any>, questionAnswering: (utterance: string) => Promise<any>, spellCheck: any, userState: UserState, conversationState: ConversationState) {
        super(MAIN_DIALOG);
        this.ropcService = new RopcService();
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.telemetryDataAccessor = conversationState.createProperty<ITelemetryData>(TELEMETRY_DATA_PROPERTY);
        this.conversationDataAccessor = userState.createProperty<IConversationData>(CONVERSATION_DATA_PROPERTY);

        this.getCluResult = getCluResult;
        this.spellCheck = spellCheck;
        this.questionAnswering = questionAnswering;

        this.addDialog(new AuthDialog(AUTH, userState));
        this.addDialog(new InitialChatDialog(INITIAL_CHAT, userState, conversationState));
        this.addDialog(new AssessmentFormDialog(ASSESSMENT_FORM, userState, conversationState));
        this.addDialog(new OonClaimFormDialog(OON_CLAIM_FORM, userState));
        this.addDialog(new OonCareFormDialog(OON_CARE_FORM, userState));
        this.addDialog(new CovidFormDialog(COVID_FORM, userState));
        this.addDialog(new GeneralFormsDialog(GENERAL_FORMS, userState));
        this.addDialog(new FlexAccountDialog(FLEX_ACCOUNT, userState, conversationState));
        this.addDialog(new EligibilityCoverageDialog(ELIGIBILITY_COVERAGE, userState, conversationState));
        this.addDialog(new EligibilityDependentCoverageDialog(ELIGIBILITY_DEPENDENT_COVERAGE, userState, conversationState));
        this.addDialog(new EligibilityIdCardDialog(ELIGIBILITY_ID_CARD, userState, conversationState));
        this.addDialog(new BenefitCoverageCoinsuranceDialog(BENEFIT_COVERAGE_COINSURANCE, userState, conversationState));
        this.addDialog(new BenefitCoverageDeductibleOopDialog(BENEFIT_COVERAGE_DEDUCTIBLE_OOP, userState, conversationState));
        this.addDialog(new BillingMonthlyPremiumDialog(BILLING_MONTHLY_PREMIUM, userState));
        this.addDialog(new BillingSpendingAccountsDialog(BILLING_SPENDING_ACCOUNTS, userState, conversationState));
        this.addDialog(new BillingAutopayPremiumDialog(BILLING_AUTOPAY_PREMIUM, userState));
        this.addDialog(new BillingMedicalDialog(BILLING_MEDICAL, userState));
        this.addDialog(new BillingGeneralDialog(BILLING_GENERAL, userState));
        this.addDialog(new EligibilityPharmacyProcessingDialog(ELIGIBILITY_PHARMACY_PROCESSING, userState));
        this.addDialog(new GetIdNumberDialog(ID_NUMBER, userState, conversationState));
        this.addDialog(new TahsStatusDialog(TAHS_STATUS, userState));
        this.addDialog(new AnocStatusDialog(ANOC_STATUS, userState));
        this.addDialog(new EsiStatusDialog(ESI_STATUS, userState));
        this.addDialog(new PcpCurrentDialog(PCP_CURRENT, userState));
        this.addDialog(new NetworkSearchProviderDialog(NETWORK_SEARCH_PROVIDER, userState));
        this.addDialog(new LiveChatTransitionDialog(LIVE_CHAT_TRANSITION, userState, conversationState));
        this.addDialog(new WhoIsMyPcpDialog(WHO_IS_MY_PCP)); // TODO: in same way add root dialogs for each intent
        this.addDialog(new WorkpartnersRedirectsDialog(WORKPARTNERS_REDIRECTS, userState));
        this.addDialog(new MembershipGymDialog(MEMBERSHIP_GYM, userState));
        this.addDialog(new TaxFormDialog(TAX_FORM, userState));
        this.addDialog(new PrefCenterPreferredNameDialog(PREF_CENTER_PREFERRED_NAME, userState));
        this.addDialog(new PrefCenterPreferredPronounsDialog(PREF_CENTER_PREFERRED_PRONOUNS, userState));
        this.addDialog(new TextPrompt('TextPrompt'))
            .addDialog(new WaterfallDialog(MAIN_WATERFALL_DIALOG, [
                this.introStep.bind(this),
                this.actStep.bind(this),
                this.finalStep.bind(this)
            ]));
        this.addDialog(new ClaimNavigationDialog(CLAIM_NAVIGATION, userState));
        this.addDialog(new PrefCenterUpdatesDialog(PREF_CENTER_UPDATES, userState));
        this.addDialog(new OtcRedirectDialog(OTC_REDIRECTS, userState));
        this.addDialog(new FileComplaintDialog(FILE_COMPLAINT, userState));
        this.addDialog(new HomeSafetyOrderRedirectDialog(HOME_SAFETY_ORDER_REDIRECTS, userState));
        this.addDialog(new HiaFormDialog(HIA_FORM, userState));
        this.addDialog(new PrenatalAssessmentRedirectDialog(PRENATAL_ASSESSMENT_REDIRECTS, userState));
        this.addDialog(new FlexCardFAQDialog(FLEXCARD_FAQ, userState))
        this.addDialog(new MyUpmcRedirectsDialog(MYUPMC_REDIRECTS, userState));

        this.initialDialogId = MAIN_WATERFALL_DIALOG;
    }

    /**
     * The run method handles the incoming activity (in the form of a DialogContext) and passes it through the dialog system.
     * If no dialog is active, it will start the default dialog.
     * @param {TurnContext} context
     * @param {boolean} [isChatInit=false] true if we need run Initial_Chat intent
     * @param {boolean} [isLiveChatTransitionInit=false] true if we need run LiveChat_Transition intent
     */
    public async run(context: TurnContext, accessor: StatePropertyAccessor<DialogState>, isChatInit?: boolean, isLiveChatTransitionInit?: boolean) {
        const dialogSet = new DialogSet(accessor);
        dialogSet.add(this);
        const dialogContext = await dialogSet.createContext(context);
        const results = await dialogContext.continueDialog();
        if (results && (results.status === DialogTurnStatus.empty)) {
            if (isChatInit && ['directline', 'webchat'].includes(context.activity.channelId)) {
                // TODO: may be will be better move greating for all channels to Initial_Chat dialog ...
                await dialogContext.beginDialog(this.id, { nextIntent: 'Initial_Chat' });
            } else {
                await dialogContext.beginDialog(this.id);
            }
        }

        if (isLiveChatTransitionInit) {
            await dialogContext.beginDialog(this.id, { nextIntent: 'LiveChat_Transition', isRestartLiveChatDialog: true });
        }
    }

    private async introStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const conversationData: IConversationData = await this.conversationDataAccessor.get(stepContext.context, {});
        let messageText = (stepContext.options as any).restartMsg;
        if (!('restartMsg' in stepContext.options)) {
            if (stepContext.context.activity.text) {
                // this is where we get after we return to the dialog after onTurnErrorHandler
                return await stepContext.next({nextMessage: stepContext.context.activity.text});
            }
            // theoretically, there is no case left when the dialogue could get into this place
            messageText = 'What can I help you with?';
            const telemetryData = await this.telemetryDataAccessor.get(stepContext.context, {});
            telemetryData.intent = 'Unhandled_Error';
        }
        if (stepContext.options && (stepContext.options as any).nextIntent
            || (stepContext.options as any).nextMessage) {
            return await stepContext.next();
        } else if (messageText) {
            if ((stepContext.options as any).isCancel) {
                const telemetryData = await this.telemetryDataAccessor.get(stepContext.context, {});
                telemetryData.intent = 'Cancel';
            }
            if (conversationData.hasMenuOptions) {
                await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                await stepContext.context.sendActivity(messageText);
                await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                messageText = `You can type your message below, or type **"menu"** to see more topics.`;
                return await stepContext.prompt('TextPrompt', { prompt: messageText });
            } else {
                await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                return await stepContext.prompt('TextPrompt', { prompt: messageText });
            }
        } else {
            return await stepContext.prompt('TextPrompt', { prompt: '' });
        }
    }

    private async actStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult | Partial<Activity>> {
        let intent: string;
        let cluScore = 0;
        const MIN_CLU_SCORE = 0.7;
        let qaScore = 0;
        let isFAQ = false;
        let isCasualConversations = false;
        const MIN_QA_SCORE = 0.7;
        let maybePrivateQuestion = false;
        let isNoneIntent = false;
        let utterance = stepContext.context.activity.text;
        const telemetryData = await this.telemetryDataAccessor.get(stepContext.context, {});
        let cluPrediction: {[key: string]: any};
        let cluResult: ICluResult;
        let qaResult: IQuestionAnsweringResponse;
        telemetryData.isFirstQuestion = true;

        if (stepContext.options['nextIntent']) {
            intent = stepContext.options['nextIntent'];
            telemetryData.intent = intent;
            return await this.handleCluIntent(intent, stepContext);
        } else {
            telemetryData.intent = '';
            utterance = stepContext.options['nextMessage'] || utterance;
            let offsetDelta = 0;
            let utteranceArr = utterance.toLowerCase().replace(/[^'\w\-\&]/g, ' ').split(' ').filter(Boolean);
            let doesUtteranceContainException = spellCheckExceptions.exceptions.some((r: string) => utteranceArr.includes(r));
            if (!doesUtteranceContainException) {
                const bingSpellCheckResponse: IBingSpellCheckResponse = await this.spellCheck(utterance);
                if (bingSpellCheckResponse) {
                    bingSpellCheckResponse.flaggedTokens.forEach(token => {
                        let misspelledWord = token.token;
                        let suggestedWord = token.suggestions[0].suggestion;
                        let offset = token.offset + offsetDelta;
                        utterance = utterance.substring(0, offset) + suggestedWord + utterance.substring(offset + misspelledWord.length);
                        offsetDelta = offsetDelta + suggestedWord.length - misspelledWord.length;
                    });
                }
            }
            cluResult = await this.getCluResult(utterance);
            if (!cluResult) {
                const errMessage = 'We are unable to display this information at this time.';
                await stepContext.context.sendActivity(errMessage);
                telemetryData.intent = 'Service_Is_Down';
                return stepContext.next({ success: true });
            }

            intent = cluResult.result.prediction.topIntent;
            cluScore = cluResult.result.prediction.intents[0].confidenceScore; // TODO find by category
            cluPrediction = cluResult.result.prediction || {};
            qaResult = await this.questionAnswering(utterance);
            if (!qaResult) {
                const errMessage = 'We are unable to display this information at this time.';
                await stepContext.context.sendActivity(errMessage);
                telemetryData.intent = 'Service_Is_Down';
                return stepContext.next({ success: true });
            }
            if (qaResult?.answers.length) {
                qaScore = qaResult.answers[0].confidenceScore;
                isFAQ = qaResult.answers[0].source === 'Editorial';
                isCasualConversations = qaResult.answers[0].source === 'CasualConversations.tsv';
            }
            isNoneIntent = intent.toLowerCase() === 'none';
            maybePrivateQuestion = !isNoneIntent && !isCasualConversations && /^my\s|\smy\s|^i\s|\si\s/g.test(utterance.toLowerCase());
        }

        const doesIntentRequireAuth = this.intentsRequiringAuth.includes(intent);
        if (doesIntentRequireAuth) {
            const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
            if (!userAuth.token) {
                return await stepContext.beginDialog(AUTH, { nextIntent: intent });
            }
        }

        if (cluScore >= MIN_CLU_SCORE && (maybePrivateQuestion || Number(cluScore.toFixed(3)) >= qaScore)) { // TODO change logic of comparision luis and qna score after moving to CLU
            telemetryData.intent = intent;
            if (isNoneIntent) {
                telemetryData.intent = 'None';
                stepContext.options['noneIntentCounter'] = stepContext.options['noneIntentCounter'] ? stepContext.options['noneIntentCounter'] + 1 : 1;
            } else {
                stepContext.options['noneIntentCounter'] = 0;
            }
            return await this.handleCluIntent(intent, stepContext, cluPrediction);
        } else if (qaScore >= MIN_QA_SCORE) {
            if (isFAQ) {
                telemetryData.intent = 'FAQs';
            } else if (isCasualConversations) {
                telemetryData.intent = 'Casual Conversations';
            }
            const message = qaResult.answers[0].answer;
            const splitMsg = message.split('##separator##');
            for (let i = 0; i < splitMsg.length; i++) {
                if (splitMsg[i].slice(0, 1) === '\n') {
                    splitMsg[i] = splitMsg[i].substring(1);
                }
                if (splitMsg[i].slice(-1) === '\n') {
                    splitMsg[i] = splitMsg[i].substring(0, splitMsg[i].length - 1);
                }
                await stepContext.context.sendActivity({ type: ActivityTypes.Typing });
                await stepContext.context.sendActivity(splitMsg[i], InputHints.IgnoringInput);
            }
            stepContext.options['noneIntentCounter'] = 0;
            return await stepContext.next({ success: isFAQ });
        } else {
            telemetryData.intent = 'None';
            stepContext.options['noneIntentCounter'] = stepContext.options['noneIntentCounter'] ? stepContext.options['noneIntentCounter'] + 1 : 1;
            let message = this.noneIntentAnswers[3];
            if (stepContext.options['noneIntentCounter'] < 3) {
                message = this.noneIntentAnswers[stepContext.options['noneIntentCounter']];
            }
            await stepContext.context.sendActivity(message, message, InputHints.IgnoringInput);
            return await stepContext.next();
        }
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        let restartMsg: string = '';   // Exist but empty;
        console.log('!! stepContext.result', stepContext.result);
        if (stepContext.result && stepContext.result.message) {
            await stepContext.context.sendActivity(stepContext.result.message);
        } else if (stepContext.result && stepContext.result.success && !stepContext.result.nextIntent) {
            // TODO: need refactoring here. restartMsg now used for follow up questions with additional logic
            restartMsg = 'What would you like to chat about?';
        }
        return await stepContext.replaceDialog(this.initialDialogId,
            {
                restartMsg,
                nextIntent: stepContext.result?.options?.nextIntent || stepContext.result?.nextIntent,
                nextMessage: stepContext.result?.nextMessage,
                noneIntentCounter: stepContext.options['noneIntentCounter']
            }
        );
    }
}
