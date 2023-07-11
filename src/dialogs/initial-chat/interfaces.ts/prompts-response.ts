export interface IPromptsResponse {
    contents: Array<IPromptOption>
}

export interface IPromptOption {
    key: string;
    value: IValue;
    sortOrder: number;
    guidId: string;
}

interface IValue {
    key1: string,
    value1: string
}
