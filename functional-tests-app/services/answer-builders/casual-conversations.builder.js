class CasualConversationsAnswerBuilder {
    
    async casualConversationsAnswer (expectedAnswerType) {

        let answer;
        const followUpQuestion = [];
 
        switch (expectedAnswerType) {
            case 'apologies':
                answer = `It's all good!`;
                break;
            case 'bot compliment':
                answer = `I always try my best. If that makes me smart, that's awesome!`;
                break;
            case 'compliment to bot':
                answer = `Thank you, that's very kind of you.`;
                break;
            case 'dissatisfaction':
                answer = `Sorry about that. Please type **"help"** if you'd like to chat with a concierge.`;
                break;
            case 'evening greetings':
                answer = `Good evening.`;
                break;
            case 'expressions of agreement':
                answer = `Glad to hear it!`;
                break;
            case 'expressions of anger':
                answer = `Sorry about that. Please type **"help"** if you'd like to chat with a concierge.`;
                break;
            case 'expressions of boredom':
                answer = `Well, let me know if there's anything I can do for you.`;
                break;
            case 'expressions of confusion': //NOTE: all these questions were moved to LiveChat initiating logic
                answer = `I can't really explain. Please type **"help"** if you'd like to chat with a concierge.`;
                break;
            case 'expressions of gratitude':
                answer = `You're very welcome.`;
                break;
            case 'expressions of happiness':
                answer = `I'm happy to hear that.`;
                break;
            case 'expressions of regret':
                answer = `That's alright.`;
                break;
            case 'greetings':
                answer = `Hello.`;
                break;
            case 'greetings after returning':
                answer = `Hi.`;
                break;
            case 'holiday greetings':
                answer = `Thank you, and the same to you.`;
                break;
            case 'insults to bot':
                answer = `I try, but I don't always get it right.`;
                break;
            case 'insults to bots appearance':
                answer = `Noted.`;
                break;
            case 'laughter':
                answer = `Glad you're pleased!`;
                break;
            case 'leaving or ending conversation':
                answer = `Goodbye!`;
                break;
            case 'morning greetings':
                answer = `Good morning.`;
                break;
            case 'night greetings':
                answer = `Good night.`;
                break;
            case 'positive phrases':
                answer = `That's great.`;
                break;
            case 'question about bot availability':
                answer = `I'm always happy to chat.`;
                break;
            case 'question about bots purpose':
                answer = `I'm your Virtual Concierge. I'm here to help answer any questions I can. Please type **"help"** if you'd like to chat with a concierge.`;
                break;
            case 'question about intelligence':
                answer = `You're definitely smarter than I am.`;
                break;
            case 'question with different response expectation':
                answer = `I do repeat myself sometimes. It's something I'm working on.`;
                break;
            case 'questions about a joke':
                answer = `Why do seagulls fly over the sea? Because if they flew over the bay, they'd be bagels.`;
                break;
            case 'questions about a second joke':
                answer = `Two goldfish are in a tank. One looks to the other and says, "Do you know how to drive this thing?" Sorry that's all I've got.`;
                break;
            case 'questions about AI':
                answer = `The world of technology is fascinating.`;
                break;
            case 'questions about bot not being a person':
                answer = `I'm your Virtual Concierge. I'm here to help answer any questions I can. Please type **"help"** if you'd like to chat with a concierge.`;
                break;
            case 'questions about bot location':
                answer = `I'm digital, so I'm always just... here.`;
                break;
            case 'questions about bot occupation':
                answer = `My job is to help out however I can.`;
                break;
            case 'questions about condition or mood of bot':
                answer = `I'm doing great, thanks for asking!`;
                break;
            case 'questions about firing the bot':
                answer = `Okay, but I'm still here if you need me.`;
                break;
            case 'questions about how day is going':
                answer = `Great, thanks for asking!`;
                break;
            case 'questions about what is happening':
                answer = `Just standing by, ready to help.`;
                break;
            case 'request for something funny':
                answer = `Well, I'm not really that funny.`;
                break;
            case 'request to be quite':
                answer = `If you need anything later, just let me know.`;
                break;
            case 'request to stop joking':
                answer = `Humor's not my greatest strength.`;
                break;
            case 'requests for a song':
                answer = `I'm afraid I'm not musically inclined.`;
                break;
            case 'requests for bot to ask personal question':
                answer = `I'm better at answering questions.`;
                break;
            case 'requests for clarification':
                answer = `I can't really explain. Please type **"help"** if you'd like to chat with a concierge.`;
                break;
            case 'responses to gratitude':
                answer = `Awesome.`;
                break;
            case 'should I questions':
                answer = `I wouldn't know how to advise about this.`;
                break;
            case 'statements about being nice to meet the bot':
                answer = `Nice to meet you too!`;
                break;
            case 'statements about user liking bot':
                answer = `Thanks! You're pretty cool yourself.`;
                break;
            case 'statements about user returning':
                answer = `I'll be here.`;
                break;
            case 'positive end of conversation':
                answer = `Great! If you have any other questions, you can type them here or type **"menu"** to see more options.`;
                break;
            case 'something else':
                answer = `Is there something else you'd like to chat about? You can type your question here or type **"help"** to chat with a concierge.`;
                break;
        }

        return { answer, followUpQuestion };
    }
}
               
export const builder = new CasualConversationsAnswerBuilder();
