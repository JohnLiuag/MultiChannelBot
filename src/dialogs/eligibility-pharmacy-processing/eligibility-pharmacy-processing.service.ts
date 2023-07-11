import { ISubscription } from '../../common/interfaces/subscription.interface';

export class EligibilityPharmacyProcessingService {
    constructor() {}

    async getEligibilityPharmacyMessage(json: ISubscription[], id: string): Promise<string> {
        let message: string;
        const currentUser: ISubscription = json.find(el => el.memberId === id);
        if (!currentUser) {
            return `response from services doesn't contain any data`;
        }
        const eligibility = currentUser.eligibilities.some(el => el.eligibilityStatus === 'Active')
            ? currentUser.eligibilities.find(el => el.eligibilityStatus === 'Active')
            : currentUser.eligibilities[0];

        message = 'Your pharmacy benefits are not administered by UPMC Health Plan. Please contact your pharmacy benefit administrator for more information.';
        if (eligibility.hasRx && ['Commercial', 'CHIP', 'Individual', 'Marketplace'].includes(eligibility.eligibilityTypeDescription)) {
            message = `Here is your pharmacy processing information.
                BIN: 003858
                PCN: A4
                Rx Group: PMDC`;
        }
        if (eligibility.hasRx && ['Medicare', 'SNP'].includes(eligibility.eligibilityTypeDescription)) {
            message = `Here is your pharmacy processing information.
                BIN: 003858
                PCN: MD
                Rx Group: PMDA`;
        }
        if (!eligibility.hasRx && eligibility.eligibilityTypeDescription == 'Medicare') {
            message = `Here is your pharmacy processing information.
                BIN: 003858
                PCN: A4
                Rx Group: PMDE`;
        }
        if (['Medicaid', 'CHC'].includes(eligibility.eligibilityTypeDescription)) {
            message = `Here is your pharmacy processing information.
                BIN: 003858
                PCN: A4
                Rx Group: PMDM`;
        }

        return message;
    }
}
