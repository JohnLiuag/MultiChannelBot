import { config } from '../../common/config';
import { logger } from '../../common/logger';
import { IBenefitCoverageData } from './interfaces/benefit-coverage-data-interface';
import { ISubscription } from '../../common/interfaces/subscription.interface';

export class BenefitCoverageService {
    constructor() {};

    aOrAnArticle = (word: string): string => {
        let isVowel = ['a', 'e', 'i', 'o', 'u'].indexOf(word[0].toLowerCase()) !== -1;
        return isVowel ? 'an' : 'a';
    }

    async getSpendingSummary(memberId: string, token: string, token2: string) {
        config.headers.Authorization = `Bearer ${ token }`;
        const requestURL: string = `${config.baseURL}spendingsummary/api/CurrentSpendingSummary/` + memberId;
        return fetch(requestURL, {
            method: 'GET',
            headers: token2 ? { ...config.headers, 'Authorization2': token2 } : config.headers,
        }).then(this.checkStatus);
    }

    async getBenefitCoverageData(json, eligibilityCoverage, id, coverageType) {
        const benefitLevelInfos = json.benefitLevelInfos;
        const cardsMapping = {
            showDeductibleCard: `deductibleCard`,
            showOutOfPocketCard: `outOfPocketCard`,
            showPartBDrugCard: `partBDrugCard`,
            showTierTwoCard: `showTierTwoCard`
        };
        let totalTable;
        let planType;
        let benefitCoverageData: IBenefitCoverageData;
        let introMessage = '';
        let levelTablesArr = [] ;
        let levelQuestionsArr = [];
        const coverageTypeMapping = {
            outOfPocket: `showOutOfPocketCard`,
            deductible: `showDeductibleCard`
        };
        const coverageTypeTextMapping = {
            outOfPocket: `Out-of-pocket maximum`,
            deductible: `Deductible`
        };
        const coverageTypeName = coverageTypeTextMapping[coverageType];
        const tableTextObj = {};
        const benefitLevelLabels = [];
        const currentTable = coverageTypeMapping[coverageType];
        const currentUser = eligibilityCoverage.find(el => +el.memberId === +id);
        const eligibility = currentUser.eligibilities.some(el => el.eligibilityStatus === 'Active')
            ? currentUser.eligibilities.find(el => el.eligibilityStatus === 'Active')
            : currentUser.eligibilities[0];
        const planData = eligibility.startDate || eligibility.endDate;
        const planYear = new Date(planData).toLocaleDateString('en-US', { year: `numeric` });
        benefitLevelInfos.forEach(key => {
            if (key && Object.keys(key).length !== 0) {
                if (key.benefitLevelLabel !== 3) {
                    benefitLevelLabels.push(key.benefitLevelLabel);
                }
                if (key[currentTable]) {
                    totalTable = key[cardsMapping[currentTable]].totalAmount;
                    planType = key[cardsMapping[currentTable]].hasFamily ? `family` : `individual`;
                    introMessage = `Here are the details for your ${ planType } ${ coverageTypeName }:`;
                    if (!tableTextObj[key.benefitLevelLabel]) {
                        tableTextObj[key.benefitLevelLabel] = [];
                    }
                    const table = `~~s~~ \n` +
                                `| ${ key.benefitLevelLabel } | Amount | \n` +
                                `| --- | --- | \n` +
                                `| Total | $${ totalTable.maximumAmount } | \n` +
                                `| Amount applied | $${ totalTable.appliedAmount } | \n` +
                                `| Amount remaining | $${ totalTable.remainingAmount } | \n` ;
                    tableTextObj[key.benefitLevelLabel].push(table);
                }
            }
        });
        const firstTableText = tableTextObj[benefitLevelLabels[0]] ? tableTextObj[benefitLevelLabels[0]][0] : `You do ` +
            `not have ${ this.aOrAnArticle(benefitLevelLabels[0]) } ${ benefitLevelLabels[0]?.toLowerCase() } ${ coverageTypeName?.toLowerCase() }.`;
        const secondTableText = tableTextObj[benefitLevelLabels[1]] ? tableTextObj[benefitLevelLabels[1]][0] : '';
        const thirdTableText = tableTextObj[benefitLevelLabels[2]] ? tableTextObj[benefitLevelLabels[2]][0] : '';
        const firstTableQuestion = `Would you like to see your ${ benefitLevelLabels[1]?.toLowerCase() } ${ coverageTypeName?.toLowerCase() }?`;
        const secondTableQuestion = `Would you like to see your ${ benefitLevelLabels[2]?.toLowerCase() } ${ coverageTypeName?.toLowerCase() }?`;
        if (tableTextObj && Object.keys(tableTextObj).length === 0) {
            levelTablesArr.push(`Your plan does not have ${ this.aOrAnArticle(coverageTypeName) } ${ coverageTypeName?.toLowerCase() }.`);
        } else {
            levelTablesArr.push(firstTableText);
            if (benefitLevelLabels[1]) {
                levelQuestionsArr.push(firstTableQuestion);
                levelTablesArr.push(secondTableText);
            }
            if (benefitLevelLabels[2]) {
                levelQuestionsArr.push(secondTableQuestion);
                levelTablesArr.push(thirdTableText);
            }
        };

        benefitCoverageData = {
            introMessage,
            levelTablesArr,
            levelQuestionsArr
        }
        return benefitCoverageData;
    }

    getBenefitCoverageInfoIvr(json, eligibilityCoverage, id, coverageType) {
        const benefitLevelInfos = json.benefitLevelInfos;
        const cardsMapping = {
            showDeductibleCard: `deductibleCard`,
            showOutOfPocketCard: `outOfPocketCard`,
            showPartBDrugCard: `partBDrugCard`,
            showTierTwoCard: `showTierTwoCard`
        };
        let totalCard;
        let planType;
        const coverageTypeMapping = {
            outOfPocket: `showOutOfPocketCard`,
            deductible: `showDeductibleCard`
        };
        const coverageTypeTextMapping = {
            outOfPocket: `out-of-pocket maximum`,
            deductible: `deductible`
        };
        const coverageTypeName = coverageTypeTextMapping[coverageType];
        const cardTextObj = {};
        const benefitLevelLabels = [];
        const currentCard = coverageTypeMapping[coverageType];
        const currentUser = eligibilityCoverage.find(el => +el.memberId === +id);
        const eligibility = currentUser.eligibilities.some(el => el.eligibilityStatus === 'Active')
            ? currentUser.eligibilities.find(el => el.eligibilityStatus === 'Active')
            : currentUser.eligibilities[0];
        const planData = eligibility.startDate || eligibility.endDate;
        const planYear = new Date(planData).toLocaleDateString('en-US', { year: `numeric` });
        benefitLevelInfos.forEach(key => {
            if (key && Object.keys(key).length !== 0) {
                if (key.benefitLevelLabel !== 3) {
                    benefitLevelLabels.push(key.benefitLevelLabel);
                }
                if (key[currentCard]) {
                    totalCard = key[cardsMapping[currentCard]].totalAmount;
                    planType = key[cardsMapping[currentCard]].hasFamily ? `family` : `individual`;

                    if (!cardTextObj[key.benefitLevelLabel]) {
                        cardTextObj[key.benefitLevelLabel] = [];
                    }
                    cardTextObj[key.benefitLevelLabel].push(`Your plan has ${ this.aOrAnArticle(planType) } ${ planType }
                    ${ key.benefitLevelLabel } ${ coverageTypeName }.
                    You have applied $${ totalCard.appliedAmount } to your
                    ${ key.benefitLevelLabel } ${ coverageTypeName } so far.
                    You have $${ totalCard.remainingAmount } remaining to meet your ${ planType }
                    ${ key.benefitLevelLabel } ${ coverageTypeName } for the ${ planYear } plan year.`
                    );
                }
            }
        });
        const firstCardText = cardTextObj[benefitLevelLabels[0]] ? cardTextObj[benefitLevelLabels[0]][0] : `You do
            not have ${ this.aOrAnArticle(benefitLevelLabels[0]) } ${ benefitLevelLabels[0] } ${ coverageTypeName }`;
        const secondCardText = cardTextObj[benefitLevelLabels[1]] ? cardTextObj[benefitLevelLabels[1]][0] : '';
        const thirdCardText = cardTextObj[benefitLevelLabels[2]] ? cardTextObj[benefitLevelLabels[2]][0] : '';
        const firstCardQuestion = `Would you like to hear about your ${ benefitLevelLabels[1] } ${ coverageTypeName }?`;
        let ivrMessageData = {};
        if (cardTextObj && Object.keys(cardTextObj).length === 0) {
            ivrMessageData = {
                doesUserHaveDeductible: false,
                coverageTypeName
            };
        } else {
            ivrMessageData = {
                doesUserHaveDeductible: true,
                coverageTypeName,
                benefitLevelLabels,
                firstTextMessage: firstCardText,
                secondTextMessage: secondCardText,
                thirdTextMessage: thirdCardText,
                firstTextQuestion: firstCardQuestion
            };
        }
        return ivrMessageData;
    }

    getBenefitCoverageCoinsuranceInfo(spendingSummary, eligibilityCoverage: ISubscription[], id: string){
        const currentUser: ISubscription = eligibilityCoverage.find(el => el.memberId === id);
        if (!currentUser) {
            return `Response from services doesn't contain any data.`;
        }
        const eligibility = currentUser.eligibilities.some(el => el.eligibilityStatus === 'Active')
            ? currentUser.eligibilities.find(el => el.eligibilityStatus === 'Active')
            : currentUser.eligibilities[0];
        const planCoverageCoinsuranceData = eligibility.coinsurance;
        const benefitLevelInfos = spendingSummary.benefitLevelInfos;
        let coinsuranceMessage = '';
        const benefitLevelLabels = [];
        benefitLevelInfos.forEach(key => {
            if (key && Object.keys(key).length !== 0) {
                benefitLevelLabels.push(key.benefitLevelLabel);
            }
        });
        if (planCoverageCoinsuranceData && (benefitLevelLabels.length > 1)) {
            const planCoverageCoinsuranceArr = planCoverageCoinsuranceData.split('/'); // TODO add checking if we have correct data format (like '20%/30%')
            const level1Coinsurance = planCoverageCoinsuranceArr[0];
            const level2Coinsurance = planCoverageCoinsuranceArr[1]; // TODO add case for 3 levels at the same time. will be implemented once we have a user with 3 levels at the same time
            coinsuranceMessage = `~~s~~ \n` +
                `| Benefit Level | Coins Amount | \n` +
                `| --- | --- | \n` +
                `| ${ benefitLevelLabels[0] } | ${ level1Coinsurance } | \n` +
                `| ${ benefitLevelLabels[1] } | ${ level2Coinsurance } | \n`;
        } else if (planCoverageCoinsuranceData) {
            coinsuranceMessage = `~~s~~ \n` +
                `| Benefit Level | Coins Amount | \n` +
                `| --- | --- | \n` +
                `| ${ benefitLevelLabels[0] } | ${ planCoverageCoinsuranceData } | \n`;
        } else {
            coinsuranceMessage = `Your plan does not have a coinsurance.`;
        }
        return coinsuranceMessage;
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
