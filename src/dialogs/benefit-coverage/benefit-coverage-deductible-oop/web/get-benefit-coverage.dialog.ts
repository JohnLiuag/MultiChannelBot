import { ActivityTypes, ConversationState, StatePropertyAccessor } from 'botbuilder';
import {
    ChoicePrompt,
    DialogTurnResult,
    WaterfallDialog,
    WaterfallStepContext,
} from 'botbuilder-dialogs';

import { CancelAndHelpDialog } from '../../../cancel-and-help.dialog';
import { BenefitCoverageService } from '../../benefit-coverage.service';
import { IBenefitCoverageData } from '../../interfaces/benefit-coverage-data-interface';
import { ITelemetryData } from '../../../../common/interfaces/telemetry.interface';
import { TELEMETRY_DATA_PROPERTY } from '../../../../common/constants';

export const GET_BENEFIT_COVERAGE = 'GET_BENEFIT_COVERAGE';

const CHOICE_PROMPT = 'CHOICE_PROMPT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

export class GetBenefitCoverageDialog extends CancelAndHelpDialog {

    private benefitCoverageService: BenefitCoverageService;
    private telemetryDataAccessor: StatePropertyAccessor<ITelemetryData>;

    constructor(id: string, conversationState: ConversationState) {
        super(id || GET_BENEFIT_COVERAGE);

        this.benefitCoverageService = new BenefitCoverageService();
        this.telemetryDataAccessor = conversationState.createProperty<ITelemetryData>(TELEMETRY_DATA_PROPERTY);

        this.initialDialogId = WATERFALL_DIALOG;
        this.addDialog(new ChoicePrompt(CHOICE_PROMPT));
        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.firstLevelStep.bind(this),
            this.secondLevelStep.bind(this),
            this.thirdLevelStep.bind(this),
        ]));
    }

    async firstLevelStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const { spendingSummaryData, eligibilityData, memberId, deductibleStatus } = stepContext.options as any;
        const coverageData: IBenefitCoverageData = await this.benefitCoverageService.getBenefitCoverageData(spendingSummaryData, eligibilityData, memberId, deductibleStatus);
        const levelsNumber = coverageData.levelTablesArr?.length;
        await stepContext.context.sendActivity(coverageData.introMessage);
        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
        await stepContext.context.sendActivity(coverageData.levelTablesArr[0]);
        if (levelsNumber === 1) {
            return await stepContext.endDialog({ isSuccess: true });
        } else {
            stepContext.values['coverageData'] = coverageData;
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            return await stepContext.prompt(CHOICE_PROMPT, coverageData.levelQuestionsArr[0], ['Yes', 'No']);
        }
    }

    async secondLevelStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        if (['yes', 'no'].includes(stepContext.result?.value?.toLowerCase())) {
            const telemetryData = await this.telemetryDataAccessor.get(stepContext.context, {});
            telemetryData.isChoicePrompt = true;
        }
        if (stepContext.result && stepContext.result.value === 'Yes') {
            const coverageData = stepContext.values['coverageData'];
            const levelsNumber = coverageData.levelTablesArr?.length;
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            await stepContext.context.sendActivity(coverageData.levelTablesArr[1]);
            if (levelsNumber === 2) {
                return await stepContext.endDialog({ isSuccess: true });
            } else {
                stepContext.values['coverageData'] = coverageData;
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                return await stepContext.prompt(CHOICE_PROMPT, coverageData.levelQuestionsArr[1], ['Yes', 'No']);
            }
        } else {
            return await stepContext.endDialog({ isSuccess: true });
        }
    }

    async thirdLevelStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        if (['yes', 'no'].includes(stepContext.result?.value?.toLowerCase())) {
            const telemetryData = await this.telemetryDataAccessor.get(stepContext.context, {});
            telemetryData.isChoicePrompt = true;
        }
        if (stepContext.result && stepContext.result.value === 'Yes') {
            const coverageData = stepContext.values['coverageData'];
            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
            await stepContext.context.sendActivity(coverageData.levelTablesArr[2]);
        }
        return await stepContext.endDialog({ isSuccess: true });
    }
}
