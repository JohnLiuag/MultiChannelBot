export interface IBingSpellCheckResponse {
    _type: string;
    flaggedTokens: Array<IBingSpellCheckToken>
}

interface IBingSpellCheckToken {
    offset: number;
    token: string,
    type: string;
    suggestions: Array<IBingSpellCheckSuggestion>
}

interface IBingSpellCheckSuggestion {
    suggestion: string;
    score: number
}
