export interface ICluResult {
    kind: 'ConversationResult',
    result?: {
        query: string,
        prediction: {
            topIntent: string,
            projectKind: 'Conversation',
            intents: [
                {
                    category: string,
                    confidenceScore: number
                }
            ],
            entities?: [
                {
                    category: string,
                    text: string,
                    offset: number,
                    length: number,
                    confidenceScore: number,
                    extraInformation?: [
                        {
                            extraInformationKind: string,
                            key: string
                        }
                    ]
                }
            ]
        }
    }
}
