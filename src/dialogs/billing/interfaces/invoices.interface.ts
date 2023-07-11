export interface IInvoices {
    id: string,
    customerId: string,
    cosmosLastUpdated: string,
    customerType: string,
    tpaClient: string,
    tpaId: string,
    tpaDiv: string,
    ttl: number,
    arBillingMaster: [{
        invoiceDate: string,
        invoiceNumber: string,
        premiumCharges: number,
        billedThruDate: string,
        coverageMonth: string,
        currentPremium: number,
        retroPremium: number,
        newBalance: number,
        pastDueAmount: number,
        subscriberId: string,
        corporateId: string,
        groupNumber: string,
        groupName: string,
        subgroupNumber: string,
        subgroupName: string,
        currentBalance: number
    }],
    arCashReceipts: [{
        checkDate: string,
        checkAmount: number,
        cashReceivedDate: string,
        cashComment: string,
        invoiceDate: string,
        checkNumber: string
    }],
    arTransactions: [{
        arTransactionDate: string,
        arTranactionDescription: string,
        invoiceDate: string,
        arGrossAmount: number
    }]
};
