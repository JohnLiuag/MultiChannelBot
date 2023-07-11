import { ActivityTypes, StatePropertyAccessor, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY, USER_AUTH_PROPERTY } from '../../common/constants';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';

import { PCPCurrentService } from './pcp-current.service';
import { IPcpResponse } from './interfaces/pcp-current.interface';

export const PCP_CURRENT = 'PCP_CURRENT';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';


export class PcpCurrentDialog extends CancelAndHelpDialog {
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;

    private pcpCurrentService: PCPCurrentService;

    constructor(id: string, userState: UserState) {
        super(id || PCP_CURRENT);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);

        this.pcpCurrentService = new PCPCurrentService();

        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this)
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        let isSuccess: boolean = true;
        const consumer: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
        let message: string;

        if (['non medical', 'wellness', 'dentalvision'].includes(consumer.eligibilityType.toLowerCase())) {
            message = `Your plan does not include medical coverage, so no PCP selection is required with your plan.`
            await stepContext.context.sendActivity(message);
        } else {
            if  (['Active', 'FutureActive'].includes(consumer.memberStatus)
            || ['Active', 'FutureActive'].includes(consumer.dvMemberStatus)) {
                const pcpInfo: IPcpResponse = await this.pcpCurrentService.getPCPData(consumer.memberId, consumer, userAuth.token)
                .catch(async (err) => {
                    return null;
                });

                if (!pcpInfo) {
                    message = `I am unable to find the requested information. Please type **"help"** to chat with a concierge for further assistance.`;
                    await stepContext.context.sendActivity(message);
                    isSuccess = false;
                } else {
                    const findCareLink = this.pcpCurrentService.getFindCareRedirectURL(consumer, userAuth.token);
                    if (pcpInfo?.currentPcp || pcpInfo?.imputedPcp) {
                        if (pcpInfo.imputedPcp && !pcpInfo.currentPcp) {    // has ONLY an imputed PCP and no assigned PCP
                            await stepContext.context.sendActivity(`You haven't selected a PCP yet, but our records show that the provider below may be your PCP.`);
                            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                            await stepContext.context.sendActivity(this.pcpCurrentService.getPCPDetailedInfo(pcpInfo.imputedPcp));
                            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                            await stepContext.context.sendActivity(`If needed, here is a link for you to update your PCP. \n` +
                                findCareLink
                            );
                        } else if (pcpInfo.imputedPcp?.providerNumber !== pcpInfo.currentPcp?.providerNumber) { // assigned and imputed PCPs that are different
                            if (pcpInfo.currentPcp?.officeId === pcpInfo.imputedPcp?.officeId) {
                                const shouldShowImputedPCPName = true;
                                await stepContext.context.sendActivity(`Your **PCP's** information is below.`);
                                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                                await stepContext.context.sendActivity(this.pcpCurrentService.getPCPDetailedInfo(pcpInfo.currentPcp, shouldShowImputedPCPName, pcpInfo.imputedPcp.providerName));
                                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                                await stepContext.context.sendActivity(`Your assigned PCP is different than the PCP from your claims records.`);
                                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                                await stepContext.context.sendActivity(`If needed, here is a link for you to update your PCP. \n` +
                                    findCareLink
                                );
                                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                                await stepContext.context.sendActivity(`If you need any further assistance, please type **"help"** to chat with a concierge.`);
                                isSuccess = false;
                            } else {
                                await stepContext.context.sendActivity(`You have an assigned PCP, but our records indicate that you may be seeing a different provider.`);
                                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                                await stepContext.context.sendActivity(`If needed, here is a link for you to update your PCP. \n` +
                                    findCareLink
                                );
                                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                                await stepContext.context.sendActivity(`If you need any further assistance, please type **"help"** to chat with a concierge.`);
                                isSuccess = false;
                            }
                        } else {    // PCP is assigned
                            await stepContext.context.sendActivity(`Your **PCP's** information is below.`);
                            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                            await stepContext.context.sendActivity(this.pcpCurrentService.getPCPDetailedInfo(pcpInfo.currentPcp));
                            await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                            await stepContext.context.sendActivity(`If needed, here is a link for you to update your PCP. \n` +
                                findCareLink
                            );
                        }
                    } else {    // NO PCP is assigned
                        await stepContext.context.sendActivity(`You don't have any PCP selected for your plan.`);
                        await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                        await stepContext.context.sendActivity(`Here is a link for you to select your PCP. \n` +
                            findCareLink
                        );
                    }
                }
            } else {    // termed
                await stepContext.context.sendActivity(`Your coverage is not active, so no PCP selection is required.`);
                await stepContext.context.sendActivity({type: ActivityTypes.Typing});
                await stepContext.context.sendActivity(`If you have further questions, you can type **"help"** to chat with a concierge.`);
                isSuccess = false;
            }
        }

        return await stepContext.next({isSuccess});
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: stepContext.result.isSuccess });
    }
}
