export interface IFlexAccountResponse {
    rewardAccount: IRewardAccount;
}

export interface IRewardAccount {
    accountType: IAccountType;
    availableBalance: number;
    beginningBalance: number;
    transactions: ITransactions[];
}

export interface IAccountType {
    id: number;
    type: string;
    isHealthU: boolean;
}

export interface ITransactions {
    transactionDate: string;
    description: string;
    amount: number;
    transactionType: string;
}
