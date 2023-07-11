export interface IIdCardTypes {
    idCardTypes: IIdCardType[];
}

export interface IIdCardType {
    id: number,
    name: string,
    caption?: string,
    isNeedOnFileMessage? : boolean;
}
