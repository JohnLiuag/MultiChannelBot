class QuestionRandomizer {
        
    getRandomQuestion(questions) {
        // get random index value
        const randomIndex = Math.floor(Math.random() * questions.length);
        // get random item
        const item = questions[randomIndex];

        return item;
    }
    
}

export const randomizer = new QuestionRandomizer();
