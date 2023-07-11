export interface ISpendingAccounts {
    spendingAccounts: [{
        availableBalance: number,
        beginningBalance: number,
        accountType: {
            consumerConnectId: string,
            dataSource: string,
            description: string,
            evolution1Flag: string,
            id: number,
            isHealthU: boolean,
            source: string,
            type: string,
        },
        linkAction: {
            text: string,
            url: string,
        }
        planPeriods: [{
            startDate: string,
            endDate: string,
        }],
        transactions: [{
            amount: number,
            balance: number,
            description: string,
            transactionDate: string,
        }]
    }];
}

export interface ISpendingAccountsDialogData {
    availableBalance: number,
    accountTypeId: number,
    accountType?: string
}
