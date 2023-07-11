export interface IQuestionAnsweringResponse {
    answers: Array<IQuestionAnsweringAnswer>
}

export interface IQuestionAnsweringAnswer {
    questions: Array<string>,
    answer: string,
    confidenceScore: number,
    id: number,
    source: string,
    metadata: {},
    dialog: {
        isContextOnly: boolean,
        prompts: Array<any>
    }
}
