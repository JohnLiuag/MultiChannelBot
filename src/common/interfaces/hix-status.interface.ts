export interface IHixStatusResponse {
    id: string,
    cosmosLastUpdated: string,
    subscriberId: string,
    memberId: string,
    personId: string,
    tpaClient: string,
    tpaId: string,
    tpaDiv: string,
    hixStatus: Array<IHixStatus>,
    passiveActiveEnrollment: [],
    premiumTotal: [{
        premiumTotal: number,
        effectiveDate: string,
        transactionDate: string,
        insertTimeStamp: string
    }],
    totalResponsibleAmount: [],
    taxCreditHistory: [],
    nationalProducerNumber: [{
        effectiveDate: string,
        transactionDate: string,
        nationalProducerNumber: string
    }],
    premiums: [{
        effectiveDate: string,
        premiumTotal: [{
            premiumTotal: number,
            effectiveDate: string,
            transactionDate: string,
            insertTimeStamp: string
        }],
        dentalPremiumTotal: [{
            dentalPremiumTotal: number,
            effectiveDate: string,
            transactionDate: string,
            insertTimeStamp: string
        }],
        totalResponsibleAmount: [],
        familyMemberPremiums: [{
            memberId: string,
            premiumAmount1: [{
                premiumAmount1: number,
                effectiveDate: string,
                transactionDate: string,
                insertTimeStamp: string
            }],
            dentalPremiumAmount1: [{
                dentalPremiumAmount1: number,
                effectiveDate: string,
                transactionDate: string,
                insertTimeStamp: string
            }]
        }]
    }]
}


export interface IHixStatus {
    statusCode: string, // A01
    statusDescription: string,
    statusEffectiveDate: string,
    statusClosedDate: string,
    lastChangeDate: string
}
