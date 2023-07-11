class NegativeAnswerBuilder {
    
    async negativeAnswer () { 
        const answer = 'I am sorry I am unable to answer this question. Please rephrase your question, or type “help” to chat with a live concierge.'
        return answer
    }
}

export const builder = new NegativeAnswerBuilder();
