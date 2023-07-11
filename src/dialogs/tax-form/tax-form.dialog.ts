import { ActivityTypes, StatePropertyAccessor, UserState } from 'botbuilder';
import { DialogTurnResult, WaterfallDialog, WaterfallStepContext } from 'botbuilder-dialogs';

import { CONSUMER_PROFILE_PROPERTY, USER_AUTH_PROPERTY } from '../../common/constants';
import { IEligibility, ISubscription } from '../../common/interfaces/subscription.interface';
import { IUserAuth } from '../../common/interfaces/user-auth.interface';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { CancelAndHelpDialog } from '../cancel-and-help.dialog';
import { TaxFormService } from './tax-form.service';
import { CommonService } from '../../common/services/common.service';

export const TAX_FORM = 'TAX_FORM';
const WATERFALL_DIALOG = 'WATERFALL_DIALOG';

export class TaxFormDialog extends CancelAndHelpDialog {
    private userAuthAccessor: StatePropertyAccessor<IUserAuth>;
    private consumerProfileAccessor: StatePropertyAccessor<IConsumerProfile>;
    private taxFormService: TaxFormService;
    private commonService: CommonService;

    constructor(id: string, userState: UserState) {
        super(id || TAX_FORM);
        this.userAuthAccessor = userState.createProperty<IUserAuth>(USER_AUTH_PROPERTY);
        this.consumerProfileAccessor = userState.createProperty<IConsumerProfile>(CONSUMER_PROFILE_PROPERTY);
        this.taxFormService = new TaxFormService();
        this.commonService = new CommonService();

        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.finalStep.bind(this),
        ]));
        this.initialDialogId = WATERFALL_DIALOG;
    }

    private async initialStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        const userAuth: IUserAuth = await this.userAuthAccessor.get(stepContext.context, {});
        const consumer: IConsumerProfile = await this.consumerProfileAccessor.get(stepContext.context, {});
        let message: string;
        let messageForOthers: string = 'With your type of coverage, you will not receive a **1095** form from UPMC Health Plan.';
        const year: number = (new Date()).getFullYear() - 1;    // getting form for previous year
        let noFileMessage = `**1095-B** Forms for ${year} will be available on MyHealth Online by 1/31/${year + 1}. Once it's ready, you can locate your 1095-B in [Forms and Guides](#/main/content/commonly-used-forms).`;
        let currentSubscription: ISubscription;

        if (consumer.corpCode === 'EXCH') {
            message = `Your **1095-A** Form will be available by 1/31/${year + 1}. You can find the form by visiting <a href="https://pennie.com/" target="_blank">Pennie</a>.`;
        } else {
            const memberId = consumer.mc400MemberId || consumer.dentalVisionMemberId;
            let allPlans: ISubscription[] = await this.commonService.getAllPlans(
                memberId.substring(0, 9),
                consumer,
                userAuth.token,
                userAuth.token2
            ).catch(err => []);

            if (allPlans?.length) {
                currentSubscription = allPlans.find(el => el.memberId === memberId);
                const eligibility: IEligibility = currentSubscription.eligibilities[0];

                if (memberId.slice(-2) === '01') {
                    // for policy holder
                    if (['OEXC', 'S036', 'F275'].includes(eligibility.corpId)
                        || (eligibility.eligibilityTypeDescription.toLowerCase() === 'commercial'
                        && eligibility.isAso === false)) {
                        const documentsMetadata: Array<IFileMetadata> = await this.taxFormService.getDocumetMetadata(
                            memberId.substring(0, 9),
                            String(year),
                            userAuth.token,
                            userAuth.token2
                        ).catch(err => null);
                        if (documentsMetadata) {
                            const fileMetadate: IFileMetadata = documentsMetadata.find( el => {
                                return el.indexedFields.some( (el: IIndexedField) => {
                                    return el.key === 'Year' && el.value === String(year);
                                })
                            })

                            if (fileMetadate) {
                                let documentId = fileMetadate.documentId;
                                let sourceSystemKey = 'hp-1095b';
                                const base64File = await this.taxFormService.getDocument(documentId, sourceSystemKey, userAuth.token)
                                    .catch(err => null);

                                if (base64File) {
                                    const reply: any = { type: ActivityTypes.Message };
                                    reply.text = 'You can download your **1095-B** form below.';
                                    reply.attachments = [
                                        {
                                            name: 'Affordable Care Act 1095-B Coverage Document',
                                            contentType: 'application/pdf',
                                            contentUrl: base64File
                                        }
                                    ];
                                    message = reply;
                                } else {
                                    message = noFileMessage;
                                }
                            } else {
                                message = noFileMessage;
                            }
                        } else {
                            // NO FILE
                            message = noFileMessage;
                        }
                    } else if (eligibility.corpId === 'U135') {
                        message = 'Your **1095-C** Form will be available on HR Direct under Benefits > Document Records by early March.';
                    } else {
                        message = messageForOthers;
                    }
                } else {
                    // for dependents
                    if (['OEXC', 'S036', 'F275'].includes(eligibility.corpId)
                        || (eligibility.eligibilityTypeDescription.toLowerCase() === 'commercial'
                        && eligibility.isAso === false)) {
                        message = '**1095-B** Forms are only available to policy holders.';
                    } else if (eligibility.corpId === 'U135') {
                        message = '**1095-C** Forms are only available to policy holders.';
                    } else {
                        message = messageForOthers;
                    }
                }
            } else {
                message = messageForOthers;
            }
        }

        await stepContext.context.sendActivity(message);
        return await stepContext.next();
    }

    private async finalStep(stepContext: WaterfallStepContext): Promise<DialogTurnResult> {
        return await stepContext.endDialog({ success: true });
    }
}
