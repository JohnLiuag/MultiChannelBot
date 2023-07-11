import { ActivityTypes } from 'botbuilder';
import { IEligibility, ISubscription } from '../../common/interfaces/subscription.interface';
import { IAssociatedMember } from '../../common/interfaces/associated-member.interface';
import { IConsumerProfile } from '../../common/interfaces/user-profile.interface';
import { IHixStatus, IHixStatusResponse } from '../../common/interfaces/hix-status.interface';
import { config } from '../../common/config';
import { logger } from '../../common/logger';

interface IPlansByType {
    medical: {active: string, futureTermDate: string, future: string, termed: string},
    dental: {active: string, futureTermDate: string, future: string, termed: string},
    vision: {active: string, futureTermDate: string, future: string, termed: string}
}

export class EligibilityCoverageService {

    async getAssociatedMemberId(memberId: string, token: string, token2: string): Promise<IAssociatedMember> {
        config.headers.Authorization = `Bearer ${token}`;
        const requestURL: string = `${config.baseURL}consumerportal/api/AssociatedMemberId/${memberId}`;
        const response = await fetch(requestURL, {
            method: 'GET',
            headers: token2 ? { ...config.headers, 'Authorization2': token2 } : config.headers,
        }).then(this.checkStatus);

        return response;
    }
    async getHixStatus(memberId: string, token: string, token2: string): Promise<IHixStatusResponse> {
        config.headers.Authorization = `Bearer ${token}`;
        const requestURL: string = `${config.baseURL}Invoices/api/Hix/${memberId}`;
        const response = await fetch(requestURL, {
            method: 'GET',
            headers: token2 ? { ...config.headers, 'Authorization2': token2 } : config.headers,
        }).then(this.checkStatus);

        return response;
    }
    async getConsumerProfile(token: string, token2: string): Promise<IConsumerProfile> {
        config.headers.Authorization = `Bearer ${token}`;
        const requestURL: string = `${config.baseURL}consumerportal/api/consumerprofile`;
        const response = await fetch(requestURL, {
            method: 'GET',
            headers: token2 ? { ...config.headers, 'Authorization2': token2 } : config.headers,
        }).then(this.checkStatus);

        return response;
    }

    async getDelegatedAccessToken(medicalMemberIdWithTpa: string, token: string): Promise<{ jwt: string }> {
        config.headers.Authorization = `Bearer ${token}`;
        const requestURL: string = `${config.baseURL}authorization/api/delegatedaccesstokensforassociatemember`;

        const response = await fetch(requestURL, {
            method: 'POST',
            headers: config.headers,
            body: JSON.stringify({ medicalMemberIdWithTpa })
        }).then(this.checkStatus);

        return response;
    }

    getHixMessage(hixStatusObj: IHixStatus, profile: IConsumerProfile): {message: string | Array<string>, isSuccess: boolean} {
        let message: string | Array<string>;
        let isSuccess: boolean;
        switch (hixStatusObj.statusCode) {
            case 'P01':
                message = [
                    `Your coverage is currently pending until your payment is received. You can make a payment online by visiting [Premium Payments](#/main/content/view-pay-premium-bills).`,
                    `If you made your payment recently, please note that it can take up to 24 hours for it to be applied to your account.`
                ];
                isSuccess = false;
                break;
            case 'C01':
            case 'C02':
                message = [
                    `Your coverage has been voided.`,
                    `If you have questions about this, please type **"help"** to chat with a live concierge.`
                ];
                isSuccess = false;
                break;
            case 'A01':
                message = '';
                break;
            case 'E01':
                message = [
                    `We have received your initial payment, but your coverage hasn't started yet.`,
                    `If you have any questions about this, please type **"help"** to chat with a live concierge.`
                ];
                isSuccess = true;
                break;
            case 'T30':
            case 'T31':
                const date = this.getLocaleDateString((new Date()).toString());
                message = [
                    `Your coverage is currently active as of ${date}. However, your account is past due. Please make a payment as soon as possible to avoid any disruptions in coverage. You can make a payment online by visiting [Premium Payments](#/main/content/view-pay-premium-bills).`,
                    `If you made your payment recently, please note that it can take up to 24 hours for it to be applied to your account.`
                ];
                isSuccess = false;
                break;
            case 'T60':
                message = [
                    `Your coverage is currently active, but your account is more than 30 days past due. Please make a payment as soon as possible to avoid any disruptions in coverage. You can make a payment online by visiting [Premium Payments](#/main/content/view-pay-premium-bills).`,
                    `If you made your payment recently, please note that it can take up to 24 hours for it to be applied to your account. If you are in urgent need of a prescription, please type **"help"** to chat with a live concierge.`
                ];
                isSuccess = false;
                break;
            case 'T90':
                message = [
                    `Your coverage is currently active, but your account is more than 60 days past due. Please make a payment as soon as possible to avoid any disruptions in coverage. You can make a payment online by visiting [Premium Payments](#/main/content/view-pay-premium-bills).`,
                    `If you made your payment recently, please note that it can take up to 24 hours for it to be applied to your account. If you are in urgent need of a prescription, please type **"help"** to chat with a live concierge.`
                ];
                isSuccess = false;
                break;
            case 'T01':
            case 'T02':
            case 'T03':
                let endDate = this.getLocaleDateString(profile.medicalEligibilityEndDate);
                message = [
                    `Your plan is not currently active. Your coverage ended on ${endDate}.`,
                    `If you have questions about this, please type **"help"** to chat with a live concierge.`
                ];
                isSuccess = false;
                break;
        }
        return { message, isSuccess };
    }

    getMostRecentHixStatus(hixStatuses: Array<IHixStatus>): IHixStatus {
        let hixStatusObj: IHixStatus
        const currentHixStatus = hixStatuses.find(el => {
            return (new Date(el.statusEffectiveDate)).getTime() < Date.now()
                && (el.statusClosedDate ? (new Date(el.statusClosedDate)).getTime() > Date.now() : true);
        });

        if (currentHixStatus) {
            hixStatusObj = currentHixStatus;
        } else {
            let mostRecentHixStatus = hixStatuses[0];
            hixStatuses.forEach( el => {
                if (el.statusClosedDate &&
                    (new Date(el.statusClosedDate).getTime()) > (new Date(mostRecentHixStatus.statusClosedDate).getTime())) {
                    mostRecentHixStatus = el;
                }
            });
            hixStatusObj = mostRecentHixStatus;
        }
        return hixStatusObj;
    }

    getEligibilityCoverage(
        consumerProfile: IConsumerProfile,
        medicalInfo: ISubscription[],
        dentalVisionInfo: ISubscription[],
        planType: 'medical' | 'dental' | 'vision',
    ): { message: string | Array<string>, isLiveChat: boolean, isSuccess: boolean }  {
        let message: string | Array<string>;
        let isLiveChat: boolean;
        let isSuccess: boolean = true;

        if (!medicalInfo && !dentalVisionInfo) {
            return {
                message: `Response from services doesn't contain any data.`,
                isLiveChat: false,
                isSuccess: false
            }
        }

        const activePlanDataArr = this.getPlanData('Active', consumerProfile, medicalInfo, dentalVisionInfo);
        const featurePlanDataArr = this.getPlanData('FutureActive', consumerProfile, medicalInfo, dentalVisionInfo);
        const termedPlanDataArr = this.getPlanData('Termed', consumerProfile, medicalInfo, dentalVisionInfo);

        if (planType === 'medical') {

            if (activePlanDataArr.length || featurePlanDataArr.length || termedPlanDataArr.length) {
                ({ message, isLiveChat, isSuccess } =  this.getMedicalMessage(
                    consumerProfile,
                    activePlanDataArr,
                    featurePlanDataArr,
                    termedPlanDataArr
                ));
            } else {
                // TODO  or check eligibilityType for wellness?
                if (consumerProfile.eligibilityType.toLowerCase() === 'non medical' || consumerProfile.hasWellness) {
                    message = `Your plan does not include medical coverage. Would you like to chat with a concierge for more information?`;
                    isLiveChat = true;
                } else {
                    // TODO: ! not in requirement
                    message = `Your plan does not include medical coverage.`;
                }
            }
        } else { /* dental or  vision question*/
            ({ message, isLiveChat, isSuccess } =  this.getDVMessage(
                consumerProfile,
                activePlanDataArr,
                featurePlanDataArr,
                termedPlanDataArr,
                planType
            ));
        }
        return { message, isLiveChat, isSuccess };
    }

    getTermedContactMessage(message: string, consumer: IConsumerProfile): string {
        let contact: string;
        switch (consumer.eligibilityType.toLowerCase()) {
            case `commercial`: contact = `your employer.`; break;
            case `medicaid`: contact = `DHS Statewide Customer Service Center at 1-877-395-8930.`; break;
            case `chc`: contact = `DHS Statewide Customer Service Center at 1-877-395-8930.`; break;
            case `medicare`: contact = `Medicare at 1-800-MEDICARE (1-800-633-4227) or type **"help"** to chat with concierge.`; break;
            case `snp`: contact = `Medicare at 1-800-MEDICARE (1-800-633-4227) or type **"help"** to chat with concierge.`; break;
            default: contact = `your employer.`; break;
        }

        return `${ message }\n` +
            `For more information on why your coverage has ended, please contact: ${ contact }`;
    }

    getExceptionCoverageMessage(
        message: string,
        type: 'dental' | 'vision',
        eligibilityType: string): { message: string, isLiveChat: boolean} {

        let isLiveChat = false;
        if (type === 'vision') {
            if ([`medicaid`, `chc`, `chip`].includes(eligibilityType.toLocaleLowerCase())) {
                message = `Your medical plan includes coverage for some vision services. \n` +
                        `Would you like to chat with a concierge for more information?`;
                isLiveChat = true;
            }
        }
        if (type === 'dental') {
            if ([`medicaid`, `chc`, `medicare`, `chip`].includes(eligibilityType.toLocaleLowerCase())) {
                message = `Your medical plan includes coverage for some dental services. \n` +
                        `Would you like to chat with a concierge for more information?`;
                isLiveChat = true;
            }
        }
        return { message, isLiveChat };
    }

    getDVMessage(
        consumer: IConsumerProfile,
        activePlanDataArr: IEligibility[],
        featurePlanDataArr: IEligibility[],
        termedPlanDataArr: IEligibility[],
        type: 'dental' | 'vision'
    ): { message: string | Array<string>, isLiveChat: boolean, isSuccess: boolean } {
        let message: string | Array<string> = '';
        let isLiveChat: boolean;
        let isSuccess: boolean = true;

        let plans: IPlansByType =this.getPlansByType(
            activePlanDataArr,
            featurePlanDataArr,
            termedPlanDataArr
        )

        if (plans[type].active) {
            message = `Your ${type} coverage is currently active. Your coverage began on ${plans[type].active}.`;
            let futureTermDateMessage: string;
            let futureTermDateresponse = this.getFutureTermDateMessage(consumer, plans[type].futureTermDate);
            if (futureTermDateresponse) {
                ({futureTermDateMessage, isSuccess} = { ...futureTermDateresponse});
            }

            if (futureTermDateMessage) {
                if (Array.isArray(futureTermDateMessage)) {
                    message = [message, ...futureTermDateMessage];
                } else if (futureTermDateMessage) {
                    message = [message, futureTermDateMessage];
                }
            }
        } else if (plans[type].future) {
            if (['non medical', 'wellness'].includes(consumer.eligibilityType.toLocaleLowerCase())) {
                // user has wellness-only/non-medical coverage but has a future active date for medical/dental/vision coverage
                const planWord = consumer.eligibilityType.toLocaleLowerCase() === 'wellness'
                    ? 'wellness-only'
                    : 'non-medical';
                message = `You currently have ${planWord} coverage. `;
            }
            message += `Your ${type} coverage will begin on ${plans[type].future}. \n` +
            `Please note that any services rendered prior to that date will not be covered by your plan.`;
        } else {
            if (['medical', 'dental', 'vision'].some( elType => plans[elType].active)) {
                ({ message, isLiveChat } = this.getExceptionCoverageMessage(message, type, consumer.eligibilityType));
            }
            if (!['medical', 'dental', 'vision'].some( elType => plans[elType].active || plans[elType].future)) {
                // this exeption apply only if user doesn't have any of avtive or future
                if (consumer.corpCode === `EXCH` /* on-exchange */
                    || (consumer.corpCode === `OEXC` || consumer.eligibilityType.toLowerCase() === 'chip')) { /* off-exchange */

                    message = `Your plan does not include ${type} coverage.`;
                }
            }
            if (plans[type].termed) {
                message = `Your ${ type } coverage is not currently active. Your coverage ended on ${plans[type].termed}.`;
                message = this.getTermedContactMessage(message, consumer);
            } else {
                if (['non medical', 'wellness'].includes(consumer.eligibilityType.toLocaleLowerCase())) {
                    message = `Your plan does not include ${type} coverage. Would you like to chat with a concierge for more information?`;
                    isLiveChat = true;
                }
                if (consumer.hasValueAddedBenefit) {
                    message = `You have coverage for some dental and vision services included in your medical plan. \n` +
                    `Would you like to chat with a concierge for more information? `;
                    isLiveChat = true;
                }
                if (!message) {
                    //  we have empty answer for DentalVision when ask about vision but have only dental
                    //  but it will probably be a relevant answer for other cases if there is no other answer
                    message = `Your plan does not include ${ type } coverage.`;
                }
            }

        }

        return { message, isLiveChat, isSuccess };
    }

    getFutureTermDateMessage(consumer: IConsumerProfile, date: string): { futureTermDateMessage: string, isSuccess: boolean} {
        let isSuccess: boolean = true;
        let message: string;
        if (!date) {
            return null;
        }

        if (consumer.eligibilityType === 'DentalVision' || (consumer.eligibilityType === 'Commercial' && !['OEXC', 'EXCH'].includes(consumer.corpCode))) {
            message = `Right now, you have a future termination date of ${date}. \n` +
                `However, it's possible that your group's coverage hasn't been renewed yet. ` +
                `You can check back closer to that date to verify that your coverage has been renewed.`;
        } else if (consumer.corpCode === 'OEXC' || ['Medicare', 'SNP'].includes(consumer.eligibilityType)) {
            message = `Right now, you have a future termination date of ${date}. \n` +
                `If you have any questions about this, please type **"help"** to chat with a live concierge.`;
            isSuccess = false;
        } else if (consumer.corpCode === 'EXCH') {
            message = `Right now, you have a future termination date of ${date}. \n` +
            `If you have any questions about this, please outreach to <a href="https://www.pennie.com" target="_blank">Pennie</a> online ` +
            `or by phone at \n<a href="tel:1-844-844-8040">1-844-844-8040</a> for more information.`;
        } if (['Medicaid', 'CHC', 'CHIP'].includes(consumer.eligibilityType)) {
            message = `Right now, you have a future termination date of ${date}. \n` +
            `If you have any questions about this, please outreach to your county assistance office for more information.`;
        }
        return { futureTermDateMessage: message, isSuccess };
    }

    getWellnessMessage(
        consumer: IConsumerProfile,
        planType: 'wellness' | 'medical' | 'dental' | 'vision',
        medicalInfo?: ISubscription[],
        dentalVisionInfo?: ISubscription[],
    ): { message: string | Array<string>, isLiveChat: boolean, isSuccess: boolean } {
        const type = 'wellness';
        let message: string | Array<string> = '';
        let isLiveChat = false;
        let isSuccess = true;
        let timeOfPlan: 'termed' | 'active' | 'future';
        let startDate: string;
        let endDate: string;
        let hasWellness: boolean;

        if (consumer.eligibilityType.toLowerCase() === 'wellness') {
            // wellness-only plan
            hasWellness = true;
        }
        if (consumer.lineOfBusinessKeys.includes('wellness') || consumer.hasWellness) {
            // wellness in medical
            hasWellness = true;
        }

        if (!hasWellness) {
            message = 'Your plan does not include wellness coverage.';
            isLiveChat = false;
            return { message, isLiveChat, isSuccess };
        }

        if (new Date(consumer.medicalEligibilityEndDate) < new Date()) {
            timeOfPlan = 'termed';
            endDate = this.getLocaleDateString(consumer.medicalEligibilityEndDate);
        } else if (consumer.medicalEligibilityStartDate) {
            startDate = this.getLocaleDateString(consumer.medicalEligibilityStartDate);
            if (consumer.medicalEligibilityEndDate.slice(0, 4) !== '9999') {
                endDate = this.getLocaleDateString(consumer.medicalEligibilityEndDate);
            }
            if (new Date(consumer.medicalEligibilityStartDate) < new Date()) {
                timeOfPlan = 'active';
            } else {
                timeOfPlan = 'future';
            }
        }

        switch (timeOfPlan) {
            case 'termed':
                if (['dental', 'vision'].includes(planType)) {
                    message = `Your past plan did not include ${planType} coverage, but you did have a wellness plan through your employer. ` +
                        `Your wellness coverage ended on ${endDate}.`;
                } else {
                    message = `Your wellness coverage is not currently active. Your coverage ended on ${endDate}.`;
                }
                break;
            case 'active':
                let message1: string;
                if (planType === 'wellness') {
                    message1 = `You currently have a wellness plan. Your wellness coverage began on ${startDate}.`;
                } else {
                    if (['dental', 'vision'].includes(planType)) {
                        message1 = `Your plan does not include ${planType} coverage, but you do have a wellness plan through your employer. `
                            + `Your wellness coverage began on ${startDate}.`;
                    } else {    // planType === 'medical'
                        message1 = `Your plan does not include medical, dental, or vision coverage, but you do have a wellness plan through your employer. `
                            + `Your wellness coverage began on ${startDate}.`;
                    }
                }
                if (endDate) {
                    let futureTermDateMessage: string;
                    if (consumer.eligibilityType.toLowerCase() === 'wellness') {
                        // wellness-only plan
                        futureTermDateMessage = `Right now, you have a future termination date of ${endDate}. \n` +
                        `However, it's possible that your group's coverage hasn't been renewed yet. ` +
                        `You can check back closer to that date to verify that your wellness coverage has been renewed.`
                    } else {
                        // ({futureTermDateMessage, isSuccess} = this.getFutureTermDateMessage(consumer, endDate));
                        let futureTermDateresponse = this.getFutureTermDateMessage(consumer, endDate);
                        if (futureTermDateresponse) {
                            ({futureTermDateMessage, isSuccess} = { ...futureTermDateresponse});
                        }
                    }
                    message  = [message1, futureTermDateMessage];
                    if (medicalInfo) {
                        let currentSubscription = medicalInfo.find(el => el.memberId === consumer.medicalMemberId);
                        let futureEligibilities = currentSubscription.eligibilities.filter(el => el.eligibilityStatus === 'FutureActive');
                        if (futureEligibilities?.length) {
                            // don't needed second message if FutureActive if exist
                            message  = message1;
                            isSuccess = true; // turn flag ON if it was turned off in method getFutureTermDateMessage
                        }
                    }
                } else {
                    message  = message1;
                }
                break;
            case 'future':
                if (['dental', 'vision'].includes(planType)) {
                    message = `Your future plan does not include medical, dental, or vision coverage, ` +
                        `but you will have a wellness plan through your employer. ` +
                        `Your wellness coverage will begin on ${startDate}.`;
                } else {
                    if (consumer.eligibilityType.toLowerCase() === 'wellness') {
                        message =  `Your wellness coverage will begin on ${startDate}.`;
                    } else {
                        message = `Your wellness coverage is not currently active. Your coverage will begin on ${startDate}.`;
                    }
                }
                break;
            default:
                message = 'I am unable to find this information at this time. Would you like to chat with a concierge for more information?';
                isLiveChat = true;
        }

        return { message, isLiveChat, isSuccess };
    }

    getMedicalMessage(
        consumer: IConsumerProfile,
        activePlanDataArr: IEligibility[],
        featurePlanDataArr: IEligibility[],
        termedPlanDataArr: IEligibility[],
    ): { message: string | Array<string>, isLiveChat: boolean, isSuccess: boolean } {
        let message: string | Array<string> = '';   // should not be undefined for simpler and more correct string concatenation
        let isLiveChat: boolean;
        let isSuccess: boolean = true;
        let hasActive: boolean;
        let hasFuture: boolean;
        let hasTermed: boolean;
        let coverage: string;

        let plans: IPlansByType =this.getPlansByType(
            activePlanDataArr,
            featurePlanDataArr,
            termedPlanDataArr
        )

        let activeCoverage: {[key: string]: Array<string>} = {}; // { '08/24/2022': ['medica', 'vision'], '09/01/2022': ['dental']}
        let futureTermDates: {[key: string]: Array<string>} = {};
        let futureCoverage: {[key: string]: Array<string>} = {};
        let termedCoverage: {[key: string]: Array<string>} = {};
        let activeTypes: Array<string> = [];  //  ['medica', 'vision']
        let futureTypes: Array<string> = [];  //  ['dental']
        let termedTypes: Array<string> = [];  //  ['medica', 'dental', 'vision']
        if (plans.medical.active || plans.dental.active || plans.vision.active) {
            hasActive = true;
            ['medical', 'dental', 'vision'].forEach(type => {
                if (plans[type].active) {
                    activeTypes.push(type);
                    activeCoverage[plans[type].active] = activeCoverage[plans[type].active] ?? [];
                    activeCoverage[plans[type].active].push(type);
                    if (plans[type]?.futureTermDate) {
                        futureTermDates[plans[type].futureTermDate] = futureTermDates[plans[type].futureTermDate] ?? [];
                        futureTermDates[plans[type].futureTermDate].push(type);
                    }
                }
            })
        }

        if ((activeTypes.length < 3) && (plans.medical.future || plans.dental.future || plans.vision.future)) {
            if (hasActive) {    // continue after active
                ['medical', 'dental', 'vision'].forEach(type => {
                    if (!activeTypes.includes(type)) {
                        if (plans[type].future) {
                            hasFuture = true;
                            futureTypes.push(type);
                            futureCoverage[plans[type].future] = futureCoverage[plans[type].future] ?? [];
                            futureCoverage[plans[type].future].push(type);
                        }
                    }
                })
            } else {    // start from future
                hasFuture = true;
                ['medical', 'dental', 'vision'].forEach(type => {
                    if (plans[type].future) {
                        futureTypes.push(type);
                        futureCoverage[plans[type].future] = futureCoverage[plans[type].future] ?? [];
                        futureCoverage[plans[type].future].push(type);
                    }
                })
            }
        }

        if (plans.medical.termed || plans.dental.termed || plans.vision.termed) {
            hasTermed = true;
            ['medical', 'dental', 'vision'].forEach(type => {
                if (plans[type].termed) {
                    termedTypes.push(type);
                    termedCoverage[plans[type].termed] = termedCoverage[plans[type].termed] ?? [];
                    termedCoverage[plans[type].termed].push(type);
                }
            })
        }

        if (hasActive) {
            // start answer from active plans
            let dates: Array<string> = Object.keys(activeCoverage);
            coverage = this.getCoverageString(activeTypes); // activeTypes.length === 1 ? activeTypes[0] : activeTypes.slice(0, -1).join(', ') + ' and ' + activeTypes.slice(-1);
            message = `You currently have active ${coverage} coverage.`;
            if (dates.length === 1) {
                message += ` \n` +
                    `Your coverage began on ${dates[0]}.`
            } else {
                dates.forEach(date => {
                    coverage = this.getCoverageString(activeCoverage[date]); //activeCoverage[date].length === 1 ? activeCoverage[date][0] : activeCoverage[date].slice(0, -1).join(', ') + ' and ' + activeCoverage[date].slice(-1);
                    message += ` \n` +
                        `Your ${coverage} coverage began on ${date}.`;
                })
            }
            let futureTermDateMessage: string;
            let futureTermDateresponse = this.getFutureTermDateMessage(consumer, Object.keys(futureTermDates)[0]);
            if (futureTermDateresponse) {
                ({futureTermDateMessage, isSuccess} = { ...futureTermDateresponse});
            }
            if (futureTermDateMessage) {
                if (Array.isArray(futureTermDateMessage)) {
                    message = [message, ...futureTermDateMessage];
                } else if (futureTermDateMessage) {
                    message = [message, futureTermDateMessage];
                }
            }
        }
        if (hasFuture) {
            if (hasActive) {
                message += '\n';
            }
            if (['non medical', 'wellness'].includes(consumer.eligibilityType.toLocaleLowerCase())) {
                // user has wellness-only/non-medical coverage but has a future active date for medical/dental/vision coverage
                const planWord = consumer.eligibilityType.toLocaleLowerCase() === 'wellness'
                    ? 'wellness-only'
                    : 'non-medical';
                message = `You currently have ${planWord} coverage. `;
            }
            // start answer from future plans
            let dates: Array<string> = Object.keys(futureCoverage);
            dates.forEach(date => {
                coverage = this.getCoverageString(futureCoverage[date]); // futureCoverage[date].length === 1 ? futureCoverage[date][0] : futureCoverage[date].slice(0, -1).join(', ') + ' and ' + activeCoverage[date].slice(-1);
                message += `Your ${coverage} coverage will begin on ${date}. \n`;
            });
            message += `Please note that any services rendered prior to that date will not be covered by your plan.`;
        } else if (hasTermed && !hasActive) {
            // answer from Termed when user doesn't have Avtive or FutureActive
            let dates: Array<string> = Object.keys(termedCoverage);
            message = `Your plan is not currently active.`;
            dates.forEach(date => {
                coverage = this.getCoverageString(termedCoverage[date]);
                message += `\n` + `Your ${coverage} coverage ended on ${date}.`;
            });

            if (consumer.corpCode === `EXCH`) { // on-exchange
                message = message + '\n' +
                    `For more information on why your coverage has ended, please contact Marketplace: Pennie at 1-844-844-8040.`;
            } else if (consumer.corpCode === `OEXC` || consumer.eligibilityType.toLowerCase() === `chip`) { // off-exchange
                message = message + '\n' +
                    `If you have questions about this, please type **"help"** to chat with concierge`;
            } else {
                message = this.getTermedContactMessage(message, consumer);
            }
            isLiveChat = false;
        }

        return { message, isLiveChat, isSuccess };
    }

    getPlansByType(
        activePlanDataArr: IEligibility[],
        featurePlanDataArr: IEligibility[],
        termedPlanDataArr: IEligibility[],
    ): IPlansByType {

        let plans: IPlansByType = {
            medical: {active: '', futureTermDate: '', future: '', termed: ''},
            dental: {active: '', futureTermDate: '', future: '', termed: ''},
            vision: {active: '', futureTermDate: '', future: '', termed: ''},
        }

        if (activePlanDataArr.length) {
            activePlanDataArr.forEach( el => {
                if (el.hasMedical) {
                    plans.medical.active = this.getLocaleDateString(el.startDate);
                    if (el.endDate?.slice(0, 4) !== '9999') {    // 12/31/9999  - fake date
                        plans.medical.futureTermDate = this.getLocaleDateString(el.endDate);
                    }
                }
                if (el.hasAnyDental) {
                    plans.dental.active = this.getLocaleDateString(el.startDate);
                    if (el.endDate?.slice(0, 4) !== '9999') {
                        plans.dental.futureTermDate = this.getLocaleDateString(el.endDate);
                    }
                }
                if (el.hasAnyVision) {
                    plans.vision.active = this.getLocaleDateString(el.startDate);
                    if (el.endDate?.slice(0, 4) !== '9999') {
                        plans.vision.futureTermDate = this.getLocaleDateString(el.endDate);
                    }
                }
            })
        }

        if (featurePlanDataArr.length) {
            featurePlanDataArr.forEach( el => {
                if (el.hasMedical) {
                    plans.medical.future = this.getLocaleDateString(el.startDate);
                    plans.medical.futureTermDate = '';  // #410876: for all members with future term date AND new span with no end date – no change
                }
                if (el.hasAnyDental) {
                    plans.dental.future = this.getLocaleDateString(el.startDate);
                    plans.dental.futureTermDate = '';
                }
                if (el.hasAnyVision) {
                    plans.vision.future = this.getLocaleDateString(el.startDate);
                    plans.vision.futureTermDate = '';
                }
            })
        }

        if (termedPlanDataArr.length) {
            // get ONLY NEWEST plan for each type
            // TODO: may be need move after checking active and future for optimization
            const keyMap = [
                { type: 'medical', hasKey: 'hasMedical'},
                { type: 'dental', hasKey: 'hasAnyDental'},
                { type: 'vision', hasKey: 'hasAnyVision'},
            ]

            termedPlanDataArr.forEach( el => {
                keyMap.forEach(elType => {
                    if (el[elType.hasKey]) {
                        const type = elType.type;
                        if (!plans[type].termed) {
                            plans[type].termed = this.getLocaleDateString(el.endDate);
                        } else {
                            plans[type].termed = new Date(el.endDate) > new Date(plans[type].termed)
                                ? this.getLocaleDateString(el.endDate)
                                : plans[type].termed;
                        }
                    }
                })
            })
        }

        return plans;
    }
    // method returns Array<IEligibility> for current timeline
    getPlanData(
        timeline: 'Active' | 'FutureActive' | 'Termed',
        consumer: IConsumerProfile,
        medicalInfo: ISubscription[],
        dentalVisionInfo: ISubscription[]
    ): Array<IEligibility> {
        let allEligibilities: Array<IEligibility> = [];
        let eligibilities: Array<IEligibility>;
        let currentSubscription: ISubscription;

        if (medicalInfo?.length) {
            currentSubscription = medicalInfo.find(el => el.memberId === consumer.medicalMemberId);
            eligibilities = currentSubscription.eligibilities.filter(el => el.eligibilityStatus === timeline);
            eligibilities.length ? allEligibilities.push(...eligibilities) : '';
        }
        if (dentalVisionInfo?.length) {
            currentSubscription = dentalVisionInfo.find(el => el.memberId === consumer.dentalVisionMemberId);
            eligibilities = currentSubscription.eligibilities.filter(el => el.eligibilityStatus === timeline);
            eligibilities.length ? allEligibilities.push(...eligibilities) : '';
        }

        return allEligibilities;
    }

    getCoverageString(coverage: Array<string>): string {
        if (!coverage.length) return '';
        return coverage.length === 1 ? coverage[0] : coverage.slice(0, -1).join(', ') + ' and ' + coverage.slice(-1);
    }

    getLocaleDateString(date: string): string {
        const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(date).toLocaleDateString('en-US', dateOptions);
    }

    getEligibilityCoverageExceptionMessage(type: string): string {
        return `Your plan does not include ${type} coverage. \n` +
            `Would you like to chat with a concierge for more information?`;
    }

    async getVisionDiscountMessage(consumer: IConsumerProfile, token: string, token2: string): Promise<{ message: string | Array<string>, isSuccess: boolean}> {
        let message: string | Array<string> = '';
        let isSuccess: boolean = true;

        if (['OEXC', 'EXCH'].includes(consumer.corpCode)) {
            // I isEXC
            // https://apitst.upmchp.com/tst.documents/api/search
            // Vision Discount Schedule of Benefits
            let documentUrl: string;
            let linkText = 'Vision Discount Schedule of Benefits';
            let base64File: any;
            let documentsResponse = await this.searchDiscountDocument(consumer, token).catch( err => null);
            let documentObject = documentsResponse?.documents.find( el => el.title === linkText);
            if (documentObject) {
                documentUrl = documentObject.documentUrl;
                base64File = await this.getPdfDocument(documentUrl, token);
            }

            if (!base64File) {
                isSuccess = false;
                message = `You don't have vision coverage, but you may be eligible for a discount with your plan. If you'd like to learn more, please type **"help"** to chat with a concierge.`;
            } else {
                const reply: any = { type: ActivityTypes.Message };
                // reply.text = 'Please see your Vision Discount Schedule of Benefits to learn more.';
                reply.attachments = [
                    {
                        name: linkText,
                        contentType: 'application/pdf',
                        contentUrl: base64File
                    }
                ];

                message = [
                    `You don't have vision coverage, but you are eligible for the NVA EyeEssential Discount. This discount only applies at participating providers, and it must be given at the time of service, so we encourage you to verify your provider's participation status prior to receiving services.`,
                    `Please see your Vision Discount Schedule of Benefits to learn more.`,
                    reply
                ];
            }
        } else if (consumer.hasVisionCare === true &&
            ['commercial', 'wellness', 'dentalvision', 'non medical'].includes(consumer.eligibilityType.toLowerCase())) {
            // II
            // https://apitst.upmchp.com/tst.UmbracoCMS/api/ContentData/2183
            // NVA EyeEssential Discount Plan
            const covergeDetailsVisionDocuments = '2183';
            let contentDataResponse = await this.getContent(covergeDetailsVisionDocuments, token);
            if (contentDataResponse) {
                let linkText = 'NVA EyeEssential Discount Plan';
                let sectionContent: string;
                let linkUrl: string;
                let startDate: string;
                if (consumer.hasDvNva) {
                    startDate = this.getLocaleDateString(consumer.dvEligibilityStartDate);
                } else {
                    // hasNVA is specifically if the rider was found in the medical
                    // document while hasDVNva is used is the rider is found in the dental document.
                    startDate = this.getLocaleDateString(consumer.medicalEligibilityStartDate);
                }
                contentDataResponse.contents.find(el => {
                    Object.values(el.value).find((val: string) => {
                        if (val.includes(linkText)) {
                            sectionContent = val;
                            return true;
                        }
                    });
                });
                if (sectionContent) {
                    let startIndex = sectionContent.indexOf('https:');
                    let endIndex = sectionContent.indexOf('" ', startIndex);
                    linkUrl = sectionContent.substring(startIndex, endIndex);
                }
                if (!linkUrl) {
                    /*
                    // this solution is currently blocked due to the maximum file transfer size limit.
                    // When a decision is made on the implementation, it will be necessary to update the code, or remove it
                    isSuccess = false;
                    let dentalResponse;
                    if (consumer.dentalVisionMemberId) {
                        dentalResponse = await this.getAllPlans(
                            consumer.dentalVisionMemberId.substring(0, 9),
                            token,
                            token2
                        ).catch( err => null);
                    }

                    let linkText = 'UPMC Vision Care Coverage';
                    let documentUrl: string;
                    let base64File: any;
                    let currentSubscription;
                    let documentsResponse;
                    if (dentalResponse) {
                        currentSubscription = dentalResponse.find(el => el.memberId === consumer.dentalVisionMemberId);
                        documentsResponse = await this.searchUpmcDiscountDocument(consumer, currentSubscription, token).catch( err => null);
                    }
                    let documentObject = documentsResponse?.documents.find( el => el.title === linkText);
                    if (documentObject) {
                        documentUrl = documentObject.documentUrl;
                        base64File = await this.getPdfDocument(documentUrl, token);
                    }
                    if (base64File) {
                        const reply: any = { type: ActivityTypes.Message };
                        reply.attachments = [
                            {
                                name: linkText,
                                contentType: 'application/pdf',
                                contentUrl: base64File
                            }
                        ];
                        message = [
                            `You currently have vision coverage, which began on ${startDate}.`,
                            `In addition to your vision benefits, you may be eligible for a discount after your benefits have been exhausted. Please see your UPMC Vision Care Coverage document to learn more.`,
                            reply
                        ];
                    } else {
                        message = [
                            `You currently have vision coverage, which began on ${startDate}.`,
                            `In addition to your vision benefits, you may be eligible for a discount after your benefits have been exhausted. If you'd like to learn more, please type **"help"** to chat with a concierge.`
                        ];
                    }
                    */
                    isSuccess = false;
                    message = [
                        `You currently have vision coverage, which began on ${startDate}.`,
                        `In addition to your vision benefits, you may be eligible for a discount after your benefits have been exhausted. You can learn more by reviewing your UPMC Vision Care Coverage, which you can find under [Plans and Coverage](#/main/content/your-coverage-and-benefits). You can also type **"help"** to chat with a concierge for more information.`
                    ];
                } else {
                    message = [
                        `You currently have vision coverage, which began on ${startDate}.`,
                        `In addition to your vision benefits, you are also eligible for the NVA EyeEssential Discount Plan after your benefits have been exhausted. Please see the NVA EyeEssentials Discount Plan document to learn more.`,
                        `<a href="${linkUrl}" target="_blank">${linkText}</a>`
                    ];
                }
            }
        }
        return {message, isSuccess};
    }

    async getContent(id: number | string, token: string) {
        config.headers.Authorization = `Bearer ${token}`;
        const requestURL: string = `${config.baseURL}UmbracoCMS/api/ContentData/${id}`;
        const response = await fetch(requestURL, {
            method: 'GET',
            headers: config.headers
        }).then(this.checkStatus);
        return response;
    }

    async searchDiscountDocument(consumer: IConsumerProfile, token: string): Promise<any> {
        config.headers.Authorization = `Bearer ${token}`;
        const requestURL: string = `${config.baseURL}documents/api/search`;
        let body = {
            year: consumer.planStartDate?.slice(0, 4) || (new Date()).getFullYear(),
            eligibilityType: consumer.eligibilityType, // "Commercial"
            groupid: consumer.groupNumber,
            subGroupId: consumer.subGroupNumber,
            medicalPlanCode: consumer.planCode,
            careType: 'medical',
            medicalPartitionRiders: [
                {
                    type: 'IV',
                    code: 'VCIF'
                }
            ],
            documentTypes: [
                {
                    name: 'benefits',
                    values: {
                        corpId: consumer.corpCode
                    }
                }
            ]
          }

        const response = await fetch(requestURL, {
            method: 'POST',
            headers: config.headers,
            body: JSON.stringify(body)
        }).then(this.checkStatus);

        return response;
    }

    async searchUpmcDiscountDocument(consumer: IConsumerProfile, currentSubscription: ISubscription, token: string): Promise<any> {
        config.headers.Authorization = `Bearer ${token}`;
        const requestURL: string = `${config.baseURL}documents/api/search`;

        const eligibility = currentSubscription.eligibilities.find(el => el.eligibilityStatus === 'Active');
        const riderList = this.getRiderList(eligibility.memberRiders);

        let body = {
            year: (consumer.planStartDate || consumer.dvEligibilityStartDate)?.slice(0, 4) || new Date().getFullYear(),
            eligibilityType: consumer.eligibilityType,
            careType: 'vision',
            dentalVisionPlanCode: eligibility.planCode,
            dvPartitionRiders: riderList,
            documentTypes: [{ name: 'dvgrids' }]
        }

        const response = await fetch(requestURL, {
            method: 'POST',
            headers: config.headers,
            body: JSON.stringify(body)
        }).then(this.checkStatus);

        return response;
    }

    getRiderList(riderList): Array<{ type: string, code: string}> {
        const riders = [];
        riderList.forEach((rider) => {
            const riderObject = {
                Type: rider.riderType,
                Code: rider.riderCode
            };
            riders.push(riderObject);
        });
        return riders;
    }

    async getPdfDocument(documentName: string, token: string) {
        config.headers.Authorization = `Bearer ${token}`;
        const requestURL: string = `${config.baseURL}documents/api/BlobDocument?fileName=${documentName}`;
        const response = await fetch(requestURL, {
            method: 'GET',
            headers: { ...config.headers, 'Content-Type': 'application/pdf'}
        }).then(async (response) => {
            const blob = await response.arrayBuffer();
            return `data:application/pdf;base64,${Buffer.from(blob).toString('base64')}`;
        }).catch(err => {
            logger.error(err.status + ': ' + err.statusText + ' ' + err.url);
            return null;
        });
        return response;
    }

    checkStatus(res: Response) {
        if (res.ok) { // res.status >= 200 && res.status < 300
            return res.json();
        } else {
            logger.error(res.status + ': ' + res.statusText + ' ' + res.url);
            throw new Error(res.status + ': ' + res.statusText);
        }
    }
}
