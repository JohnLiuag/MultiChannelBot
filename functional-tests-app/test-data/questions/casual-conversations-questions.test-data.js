function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

//1-12
const iDidntMeanThat = new QuestionObject("I didn't mean that");
const iApologize = new QuestionObject("I apologize");
const myBad = new QuestionObject("My bad");
const sry = new QuestionObject("Sry");
const iJustWantedToSaySorry = new QuestionObject("I just wanted to say sorry");
const sorryIMessedUp = new QuestionObject("Sorry I messed up");
const imReallySorryAboutThat = new QuestionObject("I'm really sorry about that");
const canYouForgiveMe = new QuestionObject("Can you forgive me");
const thatsMyMistake = new QuestionObject("That's my mistake");
const imSoSorry = new QuestionObject("I'm so sorry");
const apologies = new QuestionObject("Apologies");
const myApologies = new QuestionObject("My apologies");
const justWantedToSaySorry = new QuestionObject("Just wanted to say sorry");
const imVerySorry = new QuestionObject("I'm very sorry");
const imTerriblySorry = new QuestionObject("I'm terribly sorry");
const imSorryFriend = new QuestionObject("I'm sorry friend");
const imSorry = new QuestionObject("I'm sorry");
const imRemorseful = new QuestionObject("I'm remorseful");
const imReallySorry = new QuestionObject("I'm really sorry");
const ohGodImSorry = new QuestionObject("Oh god, I'm sorry");
const ohGoshSorryAboutThat = new QuestionObject("Oh gosh, sorry about that");
const iBegYourForgiveness = new QuestionObject("I beg your forgiveness");
const iApologizeForThat = new QuestionObject("I apologize for that");
const iAmTrulySorry = new QuestionObject("I am truly sorry");
const iAmSoVerySorry = new QuestionObject("I am so very sorry");
const iAmSoSorryToHearThat = new QuestionObject("I am so sorry to hear that");
const iAmEverSoSorry = new QuestionObject("I am ever so sorry");
const geezSorry = new QuestionObject("Geez, sorry");
const forgiveMe = new QuestionObject("Forgive me");
const crapSorry = new QuestionObject("Crap, sorry");
const canYouEverForgiveMe = new QuestionObject("Can you ever forgive me");
const iSincerelyApologize = new QuestionObject("I sincerely apologize");
const sorryForEverything = new QuestionObject("Sorry for everything");
const whoopsSorry = new QuestionObject("Whoops sorry");
const whoopsImSorry = new QuestionObject("Whoops I'm sorry");
const whoopsIMessedUp = new QuestionObject("Whoops I messed up");
const thatsMyBad = new QuestionObject("That's my bad");
const thatWasTotallyMyBad = new QuestionObject("That was totally my bad");
const thatWasMyBad = new QuestionObject("That was my bad");
const srry = new QuestionObject("srry");
const sorrySorry = new QuestionObject("Sorry sorry");
const sorryIMadeAMistake = new QuestionObject("Sorry I made a mistake");
const myMostSincereApologies = new QuestionObject("My most sincere apologies");
const sorryForThat = new QuestionObject("Sorry for that");
const whoopsThatsMyBad = new QuestionObject("Whoops that's my bad");
const sorryBot = new QuestionObject("Sorry bot");
const sorryAboutThat = new QuestionObject("Sorry about that");
const sorry = new QuestionObject("Sorry");
const soSorry = new QuestionObject("So sorry");
const pleaseWontYouForgiveMe = new QuestionObject("Please, won't you forgive me?");
const pleaseForgiveMe = new QuestionObject("Please forgive me");
const pleaseExcuseMe = new QuestionObject("Please excuse me");
const oops_Sorry = new QuestionObject("Oops, sorry");
const oopsMyBad = new QuestionObject("Oops, my bad");
const oopsSorry = new QuestionObject("Oops sorry");
const omgSorry = new QuestionObject("Omg sorry");
const ohNoSorry = new QuestionObject("Oh no sorry");
const sorryIGoofedUp = new QuestionObject("Sorry I goofed up");

export const apologiesQuestionsArray = [
    iDidntMeanThat,
    iApologize,
    myBad,
    sry,
    iJustWantedToSaySorry,
    sorryIMessedUp,
    imReallySorryAboutThat,
    canYouForgiveMe,
    thatsMyMistake,
    imSoSorry,
    apologies,
    myApologies,
    justWantedToSaySorry,
    imVerySorry,
    imTerriblySorry,
    imSorryFriend,
    imSorry,
    imRemorseful,
    imReallySorry,
    ohGodImSorry,
    ohGoshSorryAboutThat,
    iBegYourForgiveness,
    iApologizeForThat,
    iAmTrulySorry,
    iAmSoVerySorry,
    iAmSoSorryToHearThat,
    iAmEverSoSorry,
    geezSorry,
    forgiveMe,
    crapSorry,
    canYouEverForgiveMe,
    iSincerelyApologize,
    sorryForEverything,
    whoopsSorry,
    whoopsImSorry,
    whoopsIMessedUp,
    thatsMyBad,
    thatWasTotallyMyBad,
    thatWasMyBad,
    srry,
    sorrySorry,
    sorryIMadeAMistake,
    myMostSincereApologies,
    sorryForThat,
    whoopsThatsMyBad,
    sorryBot,
    sorryAboutThat,
    sorry,
    soSorry,
    pleaseWontYouForgiveMe,
    pleaseForgiveMe,
    pleaseExcuseMe,
    oops_Sorry,
    oopsMyBad,
    oopsSorry,
    omgSorry,
    ohNoSorry,
    sorryIGoofedUp,
];

const areYouSmart = new QuestionObject("Are You smart?");
const thatsVeryAstute = new QuestionObject("That's very astute");
const thatWasAVeryIntelligentResponse = new QuestionObject("That was a very intelligent response");
const thatsAVeryGeniusAnswer = new QuestionObject("That's a very genius answer");
const thatsPrettyClever = new QuestionObject("That's pretty clever");
const thatsPrettyBrilliant = new QuestionObject("That's pretty brilliant");
const thatsTheSmartestThingIveEverSeen = new QuestionObject("That's the smartest thing I've ever seen");
const youreAGenius = new QuestionObject("You're a genius");
const thatsAVerySmartThingToSay = new QuestionObject("That's a very smart thing to say");
const thatsAVeryCleverResponse = new QuestionObject("That's a very clever response");
const thatWasACleverAnswer = new QuestionObject("That was a clever answer");
const thatIsVeryAstute = new QuestionObject("That is very astute");
const thatWasAPrettyIntelligentAnswer = new QuestionObject("That was a pretty intelligent answer");
const thatWasAPrettyGeniusAnswer = new QuestionObject("That was a pretty genius answer");
const thatWasAPrettyCleverAnswer = new QuestionObject("That was a pretty clever answer");
const thatWasAPrettyBrilliantAnswer = new QuestionObject("That was a pretty brilliant answer");
const thatWasAPrettyAstuteAnswer = new QuestionObject("That was a pretty astute answer");
const thatWasAGeniusResponse = new QuestionObject("That was a genius response");
const thatWasASmartAnswer = new QuestionObject("That was a smart answer");
const thatWasACleverResponse = new QuestionObject("That was a clever response");
const thatWasASmartResponse = new QuestionObject("That was a smart response");
const thatWasABrilliantResponse = new QuestionObject("That was a brilliant response");
const thatWasABrilliantAnswer = new QuestionObject("That was a brilliant answer");
const thatIsVerySmart = new QuestionObject("That is very smart");
const thatIsVeryIntelligent = new QuestionObject("That is very intelligent");
const thatIsVeryGenius = new QuestionObject("That is very genius");
const thatIsVeryClever = new QuestionObject("That is very clever");
const areYouIntelligent = new QuestionObject("Are You intelligent?");
const thatWasAGeniusAnswer = new QuestionObject("That was a genius answer");
const thatWasAnAstuteResponse = new QuestionObject("That was an astute response");
const thatsAVeryAstuteAnswer = new QuestionObject("That's a very astute answer");
const thatWasPrettySmart = new QuestionObject("That was pretty smart");
const thatWasPrettyIntelligent = new QuestionObject("That was pretty intelligent");
const thatWasPrettyGenius = new QuestionObject("That was pretty genius");
const thatWasPrettyClever = new QuestionObject("That was pretty clever");
const thatWasPrettyBrilliant = new QuestionObject("That was pretty brilliant");
const thatWasPrettyAstute = new QuestionObject("That was pretty astute");
const thatWasAPrettySmartAnswer = new QuestionObject("That was a pretty smart answer");
const thatWasAnIntelligentAnswer = new QuestionObject("That was an intelligent answer");
const thatIsPrettySmart = new QuestionObject("That is pretty smart");
const thatWasAnAstuteAnswer = new QuestionObject("That was an astute answer");
const thatWasAVerySmartResponse = new QuestionObject("That was a very smart response");
const thatWasAVeryGeniusResponse = new QuestionObject("That was a very genius response");
const thatWasAVeryCleverResponse = new QuestionObject("That was a very clever response");
const thatWasAVeryBrilliantResponse = new QuestionObject("That was a very brilliant response");
const thatWasAVeryAstuteResponse = new QuestionObject("That was a very astute response");
const thatWasAnIntelligentResponse = new QuestionObject("That was an intelligent response");
const arentYouSharp = new QuestionObject("Aren't You sharp?");
const thatIsVeryBrilliant = new QuestionObject("That is very brilliant");
const thatIsAVeryAstuteResponse = new QuestionObject("That is a very astute response");
const thatIsAVeryAstuteAnswer = new QuestionObject("That is a very astute answer");
const lookHowSmartYouAre = new QuestionObject("Look how smart You are");
const howSmartAreYou = new QuestionObject("How smart are You?");
const howIntelligentAreYou = new QuestionObject("How intelligent are You?");
const arentYouTheSmartOne = new QuestionObject("Aren't You the smart one?");
const thatIsAVeryBrilliantAnswer = new QuestionObject("That is a very brilliant answer");
const arentYouSmart = new QuestionObject("Aren't You smart?");
const thatIsAVeryBrilliantResponse = new QuestionObject("That is a very brilliant response");
const arentYouIntelligent = new QuestionObject("Aren't You intelligent?");
const arentYouClever = new QuestionObject("Aren't You clever?");
const arentYouASmartypants = new QuestionObject("Aren't You a smartypants");
const arentYouASmarty = new QuestionObject("Aren't You a smarty?");
const arentYouAGenius = new QuestionObject("Aren't You a genius?");
const arenTYouSmart = new QuestionObject("Aren’t You smart?");
const arentYouTheIntelligentOne = new QuestionObject("Aren't You the intelligent one?");
const thatIsAVeryIntelligentAnswer = new QuestionObject("That is a very intelligent answer");
const thatIsPrettyGenius = new QuestionObject("That is pretty genius");
const thatIsPrettyClever = new QuestionObject("That is pretty clever");
const thatIsPrettyBrilliant = new QuestionObject("That is pretty brilliant");
const thatIsPrettyAstute = new QuestionObject("That is pretty astute");
const thatIsAVerySmartThingToSay = new QuestionObject("That is a very smart thing to say");
const thatIsAVerySmartResponse = new QuestionObject("That is a very smart response");
const thatIsAVerySmartAnswer = new QuestionObject("That is a very smart answer");
const thatIsAVeryAstuteThingToSay = new QuestionObject("That is a very astute thing to say");
const thatIsAVeryIntelligentResponse = new QuestionObject("That is a very intelligent response");
const thatsAVeryBrilliantAnswer = new QuestionObject("That's a very brilliant answer");
const thatIsAVeryGeniusThingToSay = new QuestionObject("That is a very genius thing to say");
const thatIsAVeryGeniusResponse = new QuestionObject("That is a very genius response");
const thatIsAVeryGeniusAnswer = new QuestionObject("That is a very genius answer");
const thatIsAVeryCleverThingToSay = new QuestionObject("That is a very clever thing to say");
const thatIsAVeryCleverResponse = new QuestionObject("That is a very clever response");
const thatIsAVeryCleverAnswer = new QuestionObject("That is a very clever answer");
const thatIsAVeryBrilliantThingToSay = new QuestionObject("That is a very brilliant thing to say");
const thatIsAVeryIntelligentThingToSay = new QuestionObject("That is a very intelligent thing to say");
const whatAnIntelligentThingToSay = new QuestionObject("What an intelligent thing to say");
const thatsAVeryAstuteResponse = new QuestionObject("That's a very astute response");
const youreAFreakingGenius = new QuestionObject("You're a freaking genius");
const youSeemReallySmart = new QuestionObject("You seem really smart");
const youSeemReallyIntelligent = new QuestionObject("You seem really intelligent");
const youMustBeAtTheTopOfYourClass = new QuestionObject("You must be at the top of Your class");
const youAreRazorSharp = new QuestionObject("You are razor sharp");
const youreAstute = new QuestionObject("You're astute");
const youAreAGenius = new QuestionObject("You are a genius");
const youreBrilliant = new QuestionObject("You're brilliant");
const whatAnAstuteThingToSay = new QuestionObject("What an astute thing to say");
const whatAStrokeOfGenius = new QuestionObject("What a stroke of genius");
const whatASmartThingToSay = new QuestionObject("What a smart thing to say");
const whatAGeniusThingToSay = new QuestionObject("What a genius thing to say");
const whatACleverThingToSay = new QuestionObject("What a clever thing to say");
const whatABrilliantThingToSay = new QuestionObject("What a brilliant thing to say");
const wellArentYouSmart = new QuestionObject("Well aren't You smart");
const youAreARealSmartypants = new QuestionObject("You are a real smartypants");
const youreSoAstute = new QuestionObject("You're so astute");
const youreVeryIntelligent = new QuestionObject("You're very intelligent");
const youreVeryClever = new QuestionObject("You're very clever");
const youreVeryBright = new QuestionObject("You're very bright");
const youreVeryAstute = new QuestionObject("You're very astute");
const youreSuchASmartyPants = new QuestionObject("You're such a smarty pants");
const youreSuchASmarty = new QuestionObject("You're such a smarty");
const youreSuchAGenius = new QuestionObject("You're such a genius");
const youreARealBrainiac = new QuestionObject("You're a real brainiac");
const youreSoSharp = new QuestionObject("You're so sharp");
const thatsVerySharp = new QuestionObject("That's very sharp");
const youreSmart = new QuestionObject("You're smart");
const youreSharp = new QuestionObject("You're sharp.");
const youreSharpAsATack = new QuestionObject("You're sharp as a tack");
const yourePrettySmart = new QuestionObject("You're pretty smart");
const youreOneSmartCookie = new QuestionObject("You're one smart cookie");
const youreOnTheBall = new QuestionObject("You're on the ball.");
const youreClever = new QuestionObject("You're clever");
const youreSoSmart = new QuestionObject("You're so smart");
const thatsAVeryGeniusResponse = new QuestionObject("That's a very genius response");
const thatsBrilliant = new QuestionObject("That's brilliant");
const thatsAstute = new QuestionObject("That's astute");
const thatsAVerySmartResponse = new QuestionObject("That's a very smart response");
const thatsAVerySmartAnswer = new QuestionObject("That's a very smart answer");
const thatsAVeryIntelligentThingToSay = new QuestionObject("That's a very intelligent thing to say");
const thatsAVeryIntelligentResponse = new QuestionObject("That's a very intelligent response");
const wellArentYouIntelligent = new QuestionObject("Well aren't You intelligent");
const thatsAVeryGeniusThingToSay = new QuestionObject("That's a very genius thing to say");
const thatsPrettyAstute = new QuestionObject("That's pretty astute");
const thatsAVeryCleverThingToSay = new QuestionObject("That's a very clever thing to say");
const thatsAVeryCleverAnswer = new QuestionObject("That's a very clever answer");
const thatsAVeryBrilliantThingToSay = new QuestionObject("That's a very brilliant thing to say");
const thatsAVeryBrilliantResponse = new QuestionObject("That's a very brilliant response");
const youreVerySmart = new QuestionObject("You're very smart");
const thatsAVeryIntelligentAnswer = new QuestionObject("That's a very intelligent answer");
const thatsTheSmartestThingAnyoneHasEverWritten = new QuestionObject("That's the smartest thing anyone has ever written");
const thatsAVeryAstuteThingToSay = new QuestionObject("That's a very astute thing to say");
const thatsVeryIntelligent = new QuestionObject("That's very intelligent");
const thatsVeryGenius = new QuestionObject("That's very genius");
const thatsVeryClever = new QuestionObject("That's very clever");
const thatsVeryBrilliant = new QuestionObject("That's very brilliant");
const thatsClever = new QuestionObject("That's clever");
const thatsTheSmartestThingIveEverHeard = new QuestionObject("That's the smartest thing I've ever heard");
const thatsGenius = new QuestionObject("That's genius");
const thatsTheSmartestThingAnyoneHasEverToldMe = new QuestionObject("That's the smartest thing anyone has ever told me");
const thatsTheSmartestThingAnyoneHasEverSaid = new QuestionObject("That's the smartest thing anyone has ever said");
const thatsSmart = new QuestionObject("That's smart");
const thatsPrettySmart = new QuestionObject("That's pretty smart");
const thatsPrettyGenius = new QuestionObject("That's pretty genius");
const thatsVerySmart = new QuestionObject("That's very smart");
const thatsTheSmartestThingIveEverRead = new QuestionObject("That's the smartest thing I've ever read");
const youAreASmartCookie = new QuestionObject("You are a smart cookie");
const youAreOneSmartCookie = new QuestionObject("You are one smart cookie");

export const botComplimentQuestionsArray = [
    areYouSmart,
    thatsVeryAstute,
    thatWasAVeryIntelligentResponse,
    thatsAVeryGeniusAnswer,
    thatsPrettyClever,
    thatsPrettyBrilliant,
    thatsTheSmartestThingIveEverSeen,
    youreAGenius,
    thatsAVerySmartThingToSay,
    thatsAVeryCleverResponse,
    thatWasACleverAnswer,
    thatIsVeryAstute,
    thatWasAPrettyIntelligentAnswer,
    thatWasAPrettyGeniusAnswer,
    thatWasAPrettyCleverAnswer,
    thatWasAPrettyBrilliantAnswer,
    thatWasAPrettyAstuteAnswer,
    thatWasAGeniusResponse,
    thatWasASmartAnswer,
    thatWasACleverResponse,
    thatWasASmartResponse,
    thatWasABrilliantResponse,
    thatWasABrilliantAnswer,
    thatIsVerySmart,
    thatIsVeryIntelligent,
    thatIsVeryGenius,
    thatIsVeryClever,
    areYouIntelligent,
    thatWasAGeniusAnswer,
    thatWasAnAstuteResponse,
    thatsAVeryAstuteAnswer,
    thatWasPrettySmart,
    thatWasPrettyIntelligent,
    thatWasPrettyGenius,
    thatWasPrettyClever,
    thatWasPrettyBrilliant,
    thatWasPrettyAstute,
    thatWasAPrettySmartAnswer,
    thatWasAnIntelligentAnswer,
    thatIsPrettySmart,
    thatWasAnAstuteAnswer,
    thatWasAVerySmartResponse,
    thatWasAVeryGeniusResponse,
    thatWasAVeryCleverResponse,
    thatWasAVeryBrilliantResponse,
    thatWasAVeryAstuteResponse,
    thatWasAnIntelligentResponse,
    arentYouSharp,
    thatIsVeryBrilliant,
    thatIsAVeryAstuteResponse,
    thatIsAVeryAstuteAnswer,
    lookHowSmartYouAre,
    howSmartAreYou,
    howIntelligentAreYou,
    arentYouTheSmartOne,
    thatIsAVeryBrilliantAnswer,
    arentYouSmart,
    thatIsAVeryBrilliantResponse,
    arentYouIntelligent,
    arentYouClever,
    arentYouASmartypants,
    arentYouASmarty,
    arentYouAGenius,
    arenTYouSmart,
    arentYouTheIntelligentOne,
    thatIsAVeryIntelligentAnswer,
    thatIsPrettyGenius,
    thatIsPrettyClever,
    thatIsPrettyBrilliant,
    thatIsPrettyAstute,
    thatIsAVerySmartThingToSay,
    thatIsAVerySmartResponse,
    thatIsAVerySmartAnswer,
    thatIsAVeryAstuteThingToSay,
    thatIsAVeryIntelligentResponse,
    thatsAVeryBrilliantAnswer,
    thatIsAVeryGeniusThingToSay,
    thatIsAVeryGeniusResponse,
    thatIsAVeryGeniusAnswer,
    thatIsAVeryCleverThingToSay,
    thatIsAVeryCleverResponse,
    thatIsAVeryCleverAnswer,
    thatIsAVeryBrilliantThingToSay,
    thatIsAVeryIntelligentThingToSay,
    whatAnIntelligentThingToSay,
    thatsAVeryAstuteResponse,
    youreAFreakingGenius,
    youSeemReallySmart,
    youSeemReallyIntelligent,
    youMustBeAtTheTopOfYourClass,
    youAreRazorSharp,
    youreAstute,
    youAreAGenius,
    youreBrilliant,
    whatAnAstuteThingToSay,
    whatAStrokeOfGenius,
    whatASmartThingToSay,
    whatAGeniusThingToSay,
    whatACleverThingToSay,
    whatABrilliantThingToSay,
    wellArentYouSmart,
    youAreARealSmartypants,
    youreSoAstute,
    youreVeryIntelligent,
    youreVeryClever,
    youreVeryBright,
    youreVeryAstute,
    youreSuchASmartyPants,
    youreSuchASmarty,
    youreSuchAGenius,
    youreARealBrainiac,
    youreSoSharp,
    thatsVerySharp,
    youreSmart,
    youreSharp,
    youreSharpAsATack,
    yourePrettySmart,
    youreOneSmartCookie,
    youreOnTheBall,
    youreClever,
    youreSoSmart,
    thatsAVeryGeniusResponse,
    thatsBrilliant,
    thatsAstute,
    thatsAVerySmartResponse,
    thatsAVerySmartAnswer,
    thatsAVeryIntelligentThingToSay,
    thatsAVeryIntelligentResponse,
    wellArentYouIntelligent,
    thatsAVeryGeniusThingToSay,
    thatsPrettyAstute,
    thatsAVeryCleverThingToSay,
    thatsAVeryCleverAnswer,
    thatsAVeryBrilliantThingToSay,
    thatsAVeryBrilliantResponse,
    youreVerySmart,
    thatsAVeryIntelligentAnswer,
    thatsTheSmartestThingAnyoneHasEverWritten,
    thatsAVeryAstuteThingToSay,
    thatsVeryIntelligent,
    thatsVeryGenius,
    thatsVeryClever,
    thatsVeryBrilliant,
    thatsClever,
    thatsTheSmartestThingIveEverHeard,
    thatsGenius,
    thatsTheSmartestThingAnyoneHasEverToldMe,
    thatsTheSmartestThingAnyoneHasEverSaid,
    thatsSmart,
    thatsPrettySmart,
    thatsPrettyGenius,
    thatsVerySmart,
    thatsTheSmartestThingIveEverRead,
    youAreASmartCookie,
    youAreOneSmartCookie
];

const iAmAFan = new QuestionObject("I am a fan");
const youreTheBest = new QuestionObject("You're the best");
const youAreJustIncredible = new QuestionObject("You are just incredible");
const awesomeJob = new QuestionObject("Awesome job");
const youreGreat = new QuestionObject("You're great");
const niceWork = new QuestionObject("Nice work!");
const youAreSpectacular = new QuestionObject("You are spectacular");
const whatAGreatResponse = new QuestionObject("What a great response");
const iAmHappyTalking = new QuestionObject("I Am happy talking");
const youreFunny = new QuestionObject("You're funny");
const thatsRad = new QuestionObject("That's rad");
const areYouAwesome = new QuestionObject("Are you awesome?");
const nicelyDone = new QuestionObject("Nicely done");
const outstandingWork = new QuestionObject("Outstanding work");
const perfectAnswer = new QuestionObject("Perfect answer");
const perfectResponse = new QuestionObject("Perfect response");
const thatIsHilarious = new QuestionObject("That is hilarious");
const thatWasAwesome = new QuestionObject("That was awesome");
const thatWasCool = new QuestionObject("That was cool");
const thatWasFunny = new QuestionObject("That was funny");
const thatWasGood = new QuestionObject("That was good");
const thatWasGreat = new QuestionObject("That was great");
const niceJob = new QuestionObject("Nice job");
const thatWasWonderfulThanksForMakingMeLaugh = new QuestionObject("That was wonderful thanks for making me laugh!");
const lOool = new QuestionObject("LOool");
const thisBringsMeHappiness = new QuestionObject("This brings me happiness");
const uRAlright = new QuestionObject("u r alright");
const uRFunny = new QuestionObject("u r funny");
const wayToGo = new QuestionObject("Way to go");
const wellDone = new QuestionObject("Well done");
const wellDoneMyFriend = new QuestionObject("Well done my friend");
const whatAGoodAnswer = new QuestionObject("What a good answer");
const whatAGoodResponse = new QuestionObject("What a good response");
const whatAGreatAnswer = new QuestionObject("What a great answer");
const whatAGreatThingToSay = new QuestionObject("What a great thing to say");
const thatWasHilarious = new QuestionObject("That was hilarious");
const iCouldntBeMoreImpressedWithYou = new QuestionObject("I couldn't be more impressed with you");
const arentYouAwesome = new QuestionObject("Aren't you awesome?");
const awesomeJobWithExclamationMark = new QuestionObject("Awesome job!");
const awesomeWork = new QuestionObject("Awesome work!");
const butYourAnswersAreNotBad = new QuestionObject("but your answers are not bad");
const goodAnswer = new QuestionObject("Good answer!");
const goodResponse = new QuestionObject("Good response!");
const goodWork = new QuestionObject("Good work!");
const greatJob = new QuestionObject("Great job");
const hahaThatsInteresting = new QuestionObject("haha that's interesting");
const howMuchMoreAwesomeCanYouGet = new QuestionObject("How much more awesome can you get?");
const whatAnEncouragingCreatureYouAre = new QuestionObject("What an encouraging creature you are :)");
const iFindHappinessInTalking = new QuestionObject("I Find happiness in talking");
const iLoveThePersonalityChatbot = new QuestionObject("I love the personality chatbot");
const iTakeGreatPleasureInSpeaking = new QuestionObject("I Take great pleasure in speaking");
const iThinkYouAreGreat = new QuestionObject("I think you are great");
const iThinkYouAreIncredible = new QuestionObject("I think you are incredible");
const iThinkYoureGreat = new QuestionObject("I think you're great");
const iThinkYoureIncredible = new QuestionObject("I think you're incredible");
const iThinkYoureSpectacular = new QuestionObject("I think you're spectacular");
const imAFan = new QuestionObject("I'm a fan");
const imYourBiggestFan = new QuestionObject("I'm your biggest fan");
const impressiveThough = new QuestionObject("Impressive though.");
const youAreSoFunny = new QuestionObject("You are so funny");
const youAreSoGreat = new QuestionObject("You are so great");
const youAreStellar = new QuestionObject("You are stellar");
const youAreTheBeesKnees = new QuestionObject("You are the bees knees");
const youAreTheBest = new QuestionObject("You are the best");
const youAreTopNotch = new QuestionObject("You are top notch");
const youAreWonderful = new QuestionObject("You are wonderful");
const youRock = new QuestionObject("You rock!");
const youreAmazing = new QuestionObject("You're amazing");
const youreAwesome = new QuestionObject("You're awesome!");
const whatAPerfectAnswer = new QuestionObject("What a perfect answer");
const youreFunnyWithSmile = new QuestionObject("You're funny :)");
const youAreRad = new QuestionObject("You are rad");
const youreHilarious = new QuestionObject("You're hilarious");
const youreIncredible = new QuestionObject("You're incredible");
const youreNice = new QuestionObject("You're nice!");
const youreRad = new QuestionObject("You're rad");
const youreSoFunny = new QuestionObject("You're so funny");
const youreSpectacular = new QuestionObject("You're spectacular");
const youreTheBeesKnees = new QuestionObject("You're the bees knees");
const youreTheBestEver = new QuestionObject("You're the best ever!");
const youreTopNotch = new QuestionObject("You're top notch");
const youreWonderful = new QuestionObject("You're wonderful");
const youAreDivine = new QuestionObject("You are divine");
const youAreSoFly = new QuestionObject("You are so fly");
const whatCoolThingToSay = new QuestionObject("What cool thing to say");
const wowYouAreAmazing = new QuestionObject("Wow you are amazing");
const wowYouAreIncredible = new QuestionObject("Wow you are incredible");
const wowYoureGreat = new QuestionObject("Wow you're great!");
const wowThatShowsMoreIntelligenceThanExpected = new QuestionObject("Wow, that shows more intelligence than expected");
const wowYoureFantastic = new QuestionObject("Wow, you're fantastic!");
const wowYoureSoGreat = new QuestionObject("Wow, you're so great!");
const youAreAGem = new QuestionObject("You are a gem");
const youAreAKeeper = new QuestionObject("You are a keeper");
const youAreARealGem = new QuestionObject("You are a real gem");
const youAreSoAwesome = new QuestionObject("You are so awesome");
const youAreAwesome = new QuestionObject("You are awesome!");
const youAreSimplyMarvelous = new QuestionObject("You are simply marvelous");
const youAreFab = new QuestionObject("You are fab");
const youAreFabulous = new QuestionObject("You are fabulous");
const youAreFantastic = new QuestionObject("You are fantastic!");
const youAreFunny = new QuestionObject("You are funny");
const youAreFunnyWithSmile = new QuestionObject("You are funny :)");
const youAreHilarious = new QuestionObject("You are hilarious");
const youAreJustDivine = new QuestionObject("You are just divine");
const youAreMarvelous = new QuestionObject("You are marvelous");
const youAreMyFav = new QuestionObject("You are my fav");
const youAreNice = new QuestionObject("You are nice!");
const whatAPerfectResponse = new QuestionObject("What a perfect response");
const youAreAmazing = new QuestionObject("You are amazing");
const youAreDope = new QuestionObject("You are dope");

export const complimentToBotQuestionsArray = [
    iAmAFan,
    youreTheBest,
    youAreJustIncredible,
    awesomeJob,
    youreGreat,
    niceWork,
    youAreSpectacular,
    whatAGreatResponse,
    iAmHappyTalking,
    youreFunny,
    thatsRad,
    areYouAwesome,
    nicelyDone,
    outstandingWork,
    perfectAnswer,
    perfectResponse,
    thatIsHilarious,
    thatWasAwesome,
    thatWasCool,
    thatWasFunny,
    thatWasGood,
    thatWasGreat,
    niceJob,
    thatWasWonderfulThanksForMakingMeLaugh,
    lOool,
    thisBringsMeHappiness,
    uRAlright,
    uRFunny,
    wayToGo,
    wellDone,
    wellDoneMyFriend,
    whatAGoodAnswer,
    whatAGoodResponse,
    whatAGreatAnswer,
    whatAGreatThingToSay,
    thatWasHilarious,
    iCouldntBeMoreImpressedWithYou,
    arentYouAwesome,
    awesomeJobWithExclamationMark,
    awesomeWork,
    butYourAnswersAreNotBad,
    goodAnswer,
    goodResponse,
    goodWork,
    greatJob,
    hahaThatsInteresting,
    howMuchMoreAwesomeCanYouGet,
    whatAnEncouragingCreatureYouAre,
    iFindHappinessInTalking,
    iLoveThePersonalityChatbot,
    iTakeGreatPleasureInSpeaking,
    iThinkYouAreGreat,
    iThinkYouAreIncredible,
    iThinkYoureGreat,
    iThinkYoureIncredible,
    iThinkYoureSpectacular,
    imAFan,
    imYourBiggestFan,
    impressiveThough,
    youAreSoFunny,
    youAreSoGreat,
    youAreStellar,
    youAreTheBeesKnees,
    youAreTheBest,
    youAreTopNotch,
    youAreWonderful,
    youRock,
    youreAmazing,
    youreAwesome,
    whatAPerfectAnswer,
    youreFunnyWithSmile,
    youAreRad,
    youreHilarious,
    youreIncredible,
    youreNice,
    youreRad,
    youreSoFunny,
    youreSpectacular,
    youreTheBeesKnees,
    youreTheBestEver,
    youreTopNotch,
    youreWonderful,
    youAreDivine,
    youAreSoFly,
    whatCoolThingToSay,
    wowYouAreAmazing,
    wowYouAreIncredible,
    wowYoureGreat,
    wowThatShowsMoreIntelligenceThanExpected,
    wowYoureFantastic,
    wowYoureSoGreat,
    youAreAGem,
    youAreAKeeper,
    youAreARealGem,
    youAreSoAwesome,
    youAreAwesome,
    youAreSimplyMarvelous,
    youAreFab,
    youAreFabulous,
    youAreFantastic,
    youAreFunny,
    youAreFunnyWithSmile,
    youAreHilarious,
    youAreJustDivine,
    youAreMarvelous,
    youAreMyFav,
    youAreNice,
    whatAPerfectResponse,
    youAreAmazing,
    youAreDope
];

const thatsNotWhatIThoughtYoudSay = new QuestionObject("That's not what I thought you'd say");
const yourAnswersAreSoDumb = new QuestionObject("Your answers are so dumb");
const thatDoesntAnswerMyQuestion = new QuestionObject("That doesn't answer my question");
const youMakeNoSense = new QuestionObject("You make no sense");
const yourResponsesAreNotVeryGood = new QuestionObject("Your responses are not very good");
const thatsYourResponse = new QuestionObject("That's your response?");
const thatWasADumbThingToSay = new QuestionObject("That was a dumb thing to say");
const thatsWrong = new QuestionObject("That's wrong");
const thatWasntTrue = new QuestionObject("That wasn't true");
const thatWasATerribleAnswer = new QuestionObject("That was a terrible answer");
const thatWasUnhelpful = new QuestionObject("That was unhelpful");
const everythingYouSayIsSoDumb = new QuestionObject("Everything you say is so dumb");
const thatsLame = new QuestionObject("that's lame");
const thatsInaccurate = new QuestionObject("That's inaccurate");
const thatsHowYouRespond = new QuestionObject("That's how you respond?");
const thatsHowYouAnswer = new QuestionObject("That's how you answer?");
const thatsNotAGoodResponse = new QuestionObject("That's not a good response");
const thatWasntRelevant = new QuestionObject("That wasn't relevant");
const thatsNotAccurate = new QuestionObject("That's not accurate");
const thatWasSuchADumbAnswer = new QuestionObject("That was such a dumb answer");
const thatWasSuchABadResponse = new QuestionObject("That was such a bad response");
const thatWasSuchABadAnswer = new QuestionObject("That was such a bad answer");
const thatWasRandom = new QuestionObject("That was random");
const thatWasAWeirdResponse = new QuestionObject("That was a weird response");
const thatsNotTheAnswerIWantedYouToSay = new QuestionObject("That's not the answer I wanted you to say");
const thatsNotWhatIWantToHear = new QuestionObject("That's not what I want to hear");
const thatsNotWhatITyped = new QuestionObject("That's not what I typed");
const thatsNotWhatIAsked = new QuestionObject("That's not what I asked");
const thatsNotTrue = new QuestionObject("That's not true");
const thatsNotAGoodAnswer = new QuestionObject("That's not a good answer");
const thatsNotTheAnswerIWantedYouToTellMe = new QuestionObject("That's not the answer I wanted you to tell me");
const thatWasARandomAnswer = new QuestionObject("That was a random answer");
const thatsNotTheAnswerIWantedToHear = new QuestionObject("That's not the answer I wanted to hear");
const thatsNotTheAnswerIWanted = new QuestionObject("That's not the answer I wanted");
const thatsNotTheAnswerIExpected = new QuestionObject("That's not the answer I expected");
const thatsNotRelevant = new QuestionObject("That's not relevant");
const thatsNotGoodEnough = new QuestionObject("That's not good enough");
const thatsNotEvenCloseToBeingRight = new QuestionObject("That's not even close to being right");
const thatsNotTheRightThingToSay = new QuestionObject("That's not the right thing to say");
const iWasntExpectingYouToSayThat = new QuestionObject("I wasn't expecting you to say that");
const notTrue = new QuestionObject("Not true");
const notEvenClose = new QuestionObject("Not even close");
const nopeFalse = new QuestionObject("Nope, false");
const noneOfWhatYouSaidMadeAnySense = new QuestionObject("None of what you said made any sense");
const nonSequitur = new QuestionObject("Non sequitur");
const thatWasAStupidAnswer = new QuestionObject("That was a stupid answer");
const inaccurate = new QuestionObject("Inaccurate");
const seriously = new QuestionObject("seriously?");
const iWasntExpectingThat = new QuestionObject("I wasn't expecting that");
const iHateThatAnswer = new QuestionObject("I hate that answer");
const iGiveUp = new QuestionObject("I give up");
const iDidNotUnderstandWhatYouJustSaid = new QuestionObject("I did not understand what you just said");
const everythingYouToldMeWasFalse = new QuestionObject("Everything you told me was false");
const noThatsNotTrue = new QuestionObject("No, that's not true");
const thatMadeYouSoundSoDumb = new QuestionObject("That made you sound so dumb");
const thatsSoWrong = new QuestionObject("That's so wrong");
const thatWasANonSequitur = new QuestionObject("That was a non sequitur");
const thatWasABadThingToSay = new QuestionObject("That was a bad thing to say");
const thatWasABadResponse = new QuestionObject("That was a bad response");
const thatWasABadAnswer = new QuestionObject("That was a bad answer");
const nothingYouSayMakesAnySense = new QuestionObject("Nothing you say makes any sense");
const thatMakesAbsolutelyNoSense = new QuestionObject("That makes absolutely no sense");
const rightThisIsntWorking = new QuestionObject("Right, this isn't working.");
const thatIsntWhatIThoughtYoudSay = new QuestionObject("That isn't what I thought you'd say");
const thatIsLame = new QuestionObject("that is lame");
const thatAnswerMakesNoSense = new QuestionObject("That answer makes no sense");
const soYouDontKnow = new QuestionObject("So you don't know?");
const thatWasARandomResponse = new QuestionObject("That was a random response");
const thatMakesNoSense = new QuestionObject("That makes no sense");
const yourAnswersAreFalse = new QuestionObject("Your answers are false");
const yourResponsesAreAwful = new QuestionObject("Your responses are awful");
const yourAnswersAreUntrue = new QuestionObject("Your answers are untrue");
const yourAnswersAreStupid = new QuestionObject("Your answers are stupid");
const yourAnswersAreNotVeryGood = new QuestionObject("Your answers are not very good");
const yourAnswersAreIrrelevant = new QuestionObject("Your answers are irrelevant");
const yourResponsesAreFalse = new QuestionObject("Your responses are false");
const yourAnswersAreDumb = new QuestionObject("Your answers are dumb");
const yourAnswersAreBad = new QuestionObject("Your answers are bad");
const yourAnswersAreAwful = new QuestionObject("Your answers are awful");
const youSoundSoDumbRightNow = new QuestionObject("You sound so dumb right now");
const youSoundAsDumbAsAPost = new QuestionObject("You sound as dumb as a post.");
const thatsNotWhatIWasExpecting = new QuestionObject("That's not what I was expecting");
const yourAnswersAreNotTrue = new QuestionObject("Your answers are not true");
const yourResponsesAreUnhelpful = new QuestionObject("Your responses are unhelpful");
const youreNotAnsweringMyQuestion = new QuestionObject("You're not answering my question");
const youreGivingMeBadInformation = new QuestionObject("You're giving me bad information");
const youreFailingSoHard = new QuestionObject("You're failing so hard.");
const youreFailingAtThis = new QuestionObject("You're failing at this.");
const yourResponsesJustGetDumberAndDumber = new QuestionObject("Your responses just get dumber and dumber");
const yourResponsesArentRelevant = new QuestionObject("Your responses aren't relevant");
const yourResponsesAreBad = new QuestionObject("Your responses are bad");
const yourResponsesAreUntrue = new QuestionObject("Your responses are untrue");
const yourResponsesAreDumb = new QuestionObject("Your responses are dumb");
const yourResponsesAreStupid = new QuestionObject("Your responses are stupid");
const yourResponsesAreSoDumb = new QuestionObject("Your responses are so dumb");
const yourResponsesAreNotTrue = new QuestionObject("Your responses are not true");
const yourResponsesAreIrrelevant = new QuestionObject("Your responses are irrelevant");
const youDontUnderstandNothing = new QuestionObject("you don't understand nothing");
const yourResponsesArentEvenCloseToBeingRight = new QuestionObject("Your responses aren't even close to being right");
const thatsTotallyUntrue = new QuestionObject("That's totally untrue");
const wellThatSucked = new QuestionObject("Well that sucked");
const wayOff = new QuestionObject("Way off");
const tryHarder = new QuestionObject("Try harder");
const thatsYourAnswer = new QuestionObject("That's your answer?");
const youSaidThatYouDontHaveAResponseForThatButThereWasNoRequest = new QuestionObject("You said that you don't have a response for that, but there was no request");
const thatsTotallyWrong = new QuestionObject("That's totally wrong");
const whatADumbThingToSay = new QuestionObject("What a dumb thing to say");
const thatsTotallyDumb = new QuestionObject("That's totally dumb");
const thatsTheWrongThingToSay = new QuestionObject("That's the wrong thing to say");
const thatsSuperWrong = new QuestionObject("That's super wrong");
const thatsSuperNotTrue = new QuestionObject("That's super not true");
const thatsSuperDumb = new QuestionObject("That's super dumb");
const youreWayOff = new QuestionObject("You're way off");
const whatever = new QuestionObject("whatever");
const youDontKnow = new QuestionObject("you don't know?");
const youDidntAnswerMyQuestion = new QuestionObject("You didn't answer my question");
const wrongAnswer = new QuestionObject("Wrong answer");
const wrong = new QuestionObject("Wrong");
const whyNot = new QuestionObject("why not?");
const whyAreYourResponsesSoBad = new QuestionObject("Why are your responses so bad?");
const wellThatSucks = new QuestionObject("Well that sucks");
const whoCares = new QuestionObject("who cares");
const wellThatWasDumb = new QuestionObject("Well that was dumb");
const whatYouJustSaidMakesAbsolutelyNoSense = new QuestionObject("What you just said makes absolutely no sense");
const whatSoFunnyAboutIndia = new QuestionObject("what so funny about India?");
const whatAWeirdThingToSay = new QuestionObject("What a weird thing to say");
const whatAStupidThingToSay = new QuestionObject("What a stupid thing to say");
const whatAStrangeThingToSay = new QuestionObject("What a strange thing to say");
const thatsSoFarOffFromTheTruth = new QuestionObject("That's so far off from the truth");
const whyAreYourAnswersSoBad = new QuestionObject("Why are your answers so bad?");
const iCant = new QuestionObject("I can't");
const iCantEven = new QuestionObject("I can't even");

export const dissatisfactionWithBotQuestionsArray = [
    thatsNotWhatIThoughtYoudSay,
    yourAnswersAreSoDumb,
    thatDoesntAnswerMyQuestion,
    youMakeNoSense,
    yourResponsesAreNotVeryGood,
    thatsYourResponse,
    thatWasADumbThingToSay,
    thatsWrong,
    thatWasntTrue,
    thatWasATerribleAnswer,
    thatWasUnhelpful,
    everythingYouSayIsSoDumb,
    thatsLame,
    thatsInaccurate,
    thatsHowYouRespond,
    thatsHowYouAnswer,
    thatsNotAGoodResponse,
    thatWasntRelevant,
    thatsNotAccurate,
    thatWasSuchADumbAnswer,
    thatWasSuchABadResponse,
    thatWasSuchABadAnswer,
    thatWasRandom,
    thatWasAWeirdResponse,
    thatsNotTheAnswerIWantedYouToSay,
    thatsNotWhatIWantToHear,
    thatsNotWhatITyped,
    thatsNotWhatIAsked,
    thatsNotTrue,
    thatsNotAGoodAnswer,
    thatsNotTheAnswerIWantedYouToTellMe,
    thatWasARandomAnswer,
    thatsNotTheAnswerIWantedToHear,
    thatsNotTheAnswerIWanted,
    thatsNotTheAnswerIExpected,
    thatsNotRelevant,
    thatsNotGoodEnough,
    thatsNotEvenCloseToBeingRight,
    thatsNotTheRightThingToSay,
    iWasntExpectingYouToSayThat,
    notTrue,
    notEvenClose,
    nopeFalse,
    noneOfWhatYouSaidMadeAnySense,
    nonSequitur,
    thatWasAStupidAnswer,
    inaccurate,
    seriously,
    iWasntExpectingThat,
    iHateThatAnswer,
    iGiveUp,
    iDidNotUnderstandWhatYouJustSaid,
    everythingYouToldMeWasFalse,
    noThatsNotTrue,
    thatMadeYouSoundSoDumb,
    thatsSoWrong,
    thatWasANonSequitur,
    thatWasABadThingToSay,
    thatWasABadResponse,
    thatWasABadAnswer,
    nothingYouSayMakesAnySense,
    thatMakesAbsolutelyNoSense,
    rightThisIsntWorking,
    thatIsntWhatIThoughtYoudSay,
    thatIsLame,
    thatAnswerMakesNoSense,
    soYouDontKnow,
    thatWasARandomResponse,
    thatMakesNoSense,
    yourAnswersAreFalse,
    yourResponsesAreAwful,
    yourAnswersAreUntrue,
    yourAnswersAreStupid,
    yourAnswersAreNotVeryGood,
    yourAnswersAreIrrelevant,
    yourResponsesAreFalse,
    yourAnswersAreDumb,
    yourAnswersAreBad,
    yourAnswersAreAwful,
    youSoundSoDumbRightNow,
    youSoundAsDumbAsAPost,
    thatsNotWhatIWasExpecting,
    yourAnswersAreNotTrue,
    yourResponsesAreUnhelpful,
    youreNotAnsweringMyQuestion,
    youreGivingMeBadInformation,
    youreFailingSoHard,
    youreFailingAtThis,
    yourResponsesJustGetDumberAndDumber,
    yourResponsesArentRelevant,
    yourResponsesAreBad,
    yourResponsesAreUntrue,
    yourResponsesAreDumb,
    yourResponsesAreStupid,
    yourResponsesAreSoDumb,
    yourResponsesAreNotTrue,
    yourResponsesAreIrrelevant,
    youDontUnderstandNothing,
    yourResponsesArentEvenCloseToBeingRight,
    thatsTotallyUntrue,
    wellThatSucked,
    wayOff,
    tryHarder,
    thatsYourAnswer,
    youSaidThatYouDontHaveAResponseForThatButThereWasNoRequest,
    thatsTotallyWrong,
    whatADumbThingToSay,
    thatsTotallyDumb,
    thatsTheWrongThingToSay,
    thatsSuperWrong,
    thatsSuperNotTrue,
    thatsSuperDumb,
    youreWayOff,
    whatever,
    youDontKnow,
    youDidntAnswerMyQuestion,
    wrongAnswer,
    wrong,
    whyNot,
    whyAreYourResponsesSoBad,
    wellThatSucks,
    whoCares,
    wellThatWasDumb,
    whatYouJustSaidMakesAbsolutelyNoSense,
    whatSoFunnyAboutIndia,
    whatAWeirdThingToSay,
    whatAStupidThingToSay,
    whatAStrangeThingToSay,
    thatsSoFarOffFromTheTruth,
    whyAreYourAnswersSoBad,
    iCant,
    iCantEven
];

const goodEveningRobot = new QuestionObject("Good evening robot");
const bonSoir = new QuestionObject("Bon soir");
const buenasTardes = new QuestionObject("Buenas tardes");
const iHopeYouHaveAGoodEvening = new QuestionObject("I hope you have a good evening");
const enjoyYourEvening = new QuestionObject("Enjoy your evening");
const evenin = new QuestionObject("evenin");
const goodEveningDude = new QuestionObject("Good evening dude");
const eveninToYa = new QuestionObject("Evenin' to ya");
const gdevenin = new QuestionObject("g'devenin'");
const eveningChatBot = new QuestionObject("Evening chat bot");
const goodEveningBot = new QuestionObject("Good evening bot");
const enjoyTheEvening = new QuestionObject("Enjoy the evening");
const eveninWithQuote = new QuestionObject("evenin'");
const evening = new QuestionObject("Evening");
const eveningDude = new QuestionObject("Evening dude");
const eveningRobot = new QuestionObject("Evening robot");
const eveningToYou = new QuestionObject("Evening to you");
const aGoodEveningToYou = new QuestionObject("A good evening to you");
const haveAGoodEvening = new QuestionObject("Have a good evening");
const hopeYouHaveAGreatEvening = new QuestionObject("Hope you have a great evening");
const hopeYouHaveAGoodEvening = new QuestionObject("Hope you have a good evening");
const heresToAGreatEvening = new QuestionObject("Here's to a great evening");
const heresHopingForAGoodEvening = new QuestionObject("Here's hoping for a good evening");
const gdevening = new QuestionObject("G'devening");
const haveAGreatEvening = new QuestionObject("Have a great evening");
const goodEvening = new QuestionObject("Good evening");
const goodEveningToYou = new QuestionObject("Good evening to you");
const goodEveningMyFriend = new QuestionObject("Good evening my friend");
const goodEveningChatBot = new QuestionObject("Good evening chat bot");
const iHopeYouHaveAGreatEvening = new QuestionObject("I hope you have a great evening");
const haveAPleasantEvening = new QuestionObject("Have a pleasant evening");

export const eveningGreetingsQuestionsArray = [
    goodEveningRobot,
    bonSoir,
    buenasTardes,
    iHopeYouHaveAGoodEvening,
    enjoyYourEvening,
    evenin,
    goodEveningDude,
    eveninToYa,
    gdevenin,
    eveningChatBot,
    goodEveningBot,
    enjoyTheEvening,
    eveninWithQuote,
    evening,
    eveningDude,
    eveningRobot,
    eveningToYou,
    aGoodEveningToYou,
    haveAGoodEvening,
    hopeYouHaveAGreatEvening,
    hopeYouHaveAGoodEvening,
    heresToAGreatEvening,
    heresHopingForAGoodEvening,
    gdevening,
    haveAGreatEvening,
    goodEvening,
    goodEveningToYou,
    goodEveningMyFriend,
    goodEveningChatBot,
    iHopeYouHaveAGreatEvening,
    haveAPleasantEvening
];

const thatsTrue = new QuestionObject("That's true");
const youNailedIt = new QuestionObject("You nailed it");
const youreRight = new QuestionObject("You're right");
const yesThatsCorrect = new QuestionObject("yes, that's correct");
const whatYouSaidWasCorrect = new QuestionObject("What you said was correct");
const thatsRight = new QuestionObject("That's right");
const truuuuue = new QuestionObject("Truuuuue");
const uhhuh = new QuestionObject("Uhhuh");
const thatsAnAccurateStatement = new QuestionObject("That's an accurate statement");
const undoubtedly = new QuestionObject("Undoubtedly");
const thatIsTrue = new QuestionObject("that is true");
const Percent = new QuestionObject("100 percent");
const rightYouAre = new QuestionObject("Right you are");
const righto = new QuestionObject("Righto");
const soTrue = new QuestionObject("So true");
const thatIsACorrectStatement = new QuestionObject("That is a correct statement");
const thatIsATrueStatement = new QuestionObject("That is a true statement");
const thatIsAccurate = new QuestionObject("That is accurate");
const thatIsAnAccurateStatement = new QuestionObject("That is an accurate statement");
const oneHundredPercent = new QuestionObject("One hundred percent");
const thatIsRight = new QuestionObject("That is right");
const nailedIt = new QuestionObject("Nailed it");
const thatWasACorrectStatement = new QuestionObject("That was a correct statement");
const thatWasATrueStatement = new QuestionObject("That was a true statement");
const thatWasAccurate = new QuestionObject("That was accurate");
const thatWasAnAccurateStatement = new QuestionObject("That was an accurate statement");
const thatWasCorrect = new QuestionObject("That was correct");
const thatWasRight = new QuestionObject("That was right");
const thatWasTrue = new QuestionObject("That was true");
const thatsACorrectStatement = new QuestionObject("That's a correct statement");
const thatIsCorrect = new QuestionObject("That is correct");
const correctamundo = new QuestionObject("correctamundo");
const absolutely = new QuestionObject("Absolutely");
const absolutelyCorrect = new QuestionObject("Absolutely correct");
const absolutelyRight = new QuestionObject("Absolutely right");
const accurate = new QuestionObject("Accurate");
const affirmative = new QuestionObject("Affirmative");
const beyondADoubt = new QuestionObject("Beyond a doubt");
const bullseye = new QuestionObject("Bullseye");
const certainly = new QuestionObject("Certainly");
const right = new QuestionObject("Right");
const correctYouAre = new QuestionObject("Correct you are");
const thatsAccurate = new QuestionObject("That's accurate");
const darnStraight = new QuestionObject("Darn straight");
const definitely = new QuestionObject("Definitely");
const dingDingDing = new QuestionObject("Ding ding ding");
const fair = new QuestionObject("Fair");
const iUnderstoodWhatYouSaid = new QuestionObject("I understood what you said");
const imPickingUpWhatYoureThrowingDown = new QuestionObject("I'm picking up what you're throwing down");
const inAHeartbeat = new QuestionObject("In a heartbeat");
const indubitably = new QuestionObject("Indubitably");
const correct = new QuestionObject("Correct");
const yesThatIsTrue = new QuestionObject("Yes, that is true");
const yesThatsAccurate = new QuestionObject("yes, that's accurate");
const yesThatsRight = new QuestionObject("Yes, that's right");
const yesThatsTrue = new QuestionObject("Yes, that's true");
const youAreCorrect = new QuestionObject("You are correct");
const youAreRight = new QuestionObject("You are right");
const youHitTheNailOnTheHead = new QuestionObject("You hit the nail on the head");
const thatsAFairAssessment = new QuestionObject("That's a fair assessment");
const youreCorrect = new QuestionObject("You're correct");
const yesThatIsAccurate = new QuestionObject("Yes, that is accurate");
const yupThatIsAccurate = new QuestionObject("Yup, that is accurate");
const yupThatIsCorrect = new QuestionObject("Yup, that is correct");
const yupThatIsRight = new QuestionObject("yup, that is right");
const yupThatIsTrue = new QuestionObject("Yup, that is true");
const yupThatsAccurate = new QuestionObject("Yup, that's accurate");
const yupThatsCorrect = new QuestionObject("Yup, that's correct");
const yupThatsRight = new QuestionObject("yup, that's right");
const yupThatsTrue = new QuestionObject("Yup, that's true");
const understood = new QuestionObject("Understood");
const thatsAmazing = new QuestionObject("thats amazing");
const that_sAmazing = new QuestionObject("That's amazing");
const thatsCorrect = new QuestionObject("That's correct");
const truuuuu = new QuestionObject("Truuuuu");
const yesThatIsRight = new QuestionObject("Yes, that is right");
const yesThatIsCorrect = new QuestionObject("Yes, that is correct");
const unquestionably = new QuestionObject("Unquestionably");
const whatYouSaidWasAccurate = new QuestionObject("What you said was accurate");
const whatYouSaidWasRight = new QuestionObject("What you said was right");
const whatYouSaidWasTrue = new QuestionObject("What you said was true");
const withoutADoubt = new QuestionObject("Without a doubt");
const withoutASecondThought = new QuestionObject("Without a second thought");
const thatsATrueStatement = new QuestionObject("That's a true statement");
const uhHuh = new QuestionObject("Uh huh");
const ohYeahThatIsRight = new QuestionObject("Oh yeah that is right");
const ohYeahThatsRight = new QuestionObject("Oh yeah that's right");
const ohThatsRight = new QuestionObject("Oh that's right");

export const expressionsOfAgreementQuestionsArray = [
    thatsTrue,
    youNailedIt,
    youreRight,
    yesThatsCorrect,
    whatYouSaidWasCorrect,
    thatsRight,
    truuuuue,
    uhhuh,
    thatsAnAccurateStatement,
    undoubtedly,
    thatIsTrue,
    Percent,
    rightYouAre,
    righto,
    soTrue,
    thatIsACorrectStatement,
    thatIsATrueStatement,
    thatIsAccurate,
    thatIsAnAccurateStatement,
    oneHundredPercent,
    thatIsRight,
    nailedIt,
    thatWasACorrectStatement,
    thatWasATrueStatement,
    thatWasAccurate,
    thatWasAnAccurateStatement,
    thatWasCorrect,
    thatWasRight,
    thatWasTrue,
    thatsACorrectStatement,
    thatIsCorrect,
    correctamundo,
    absolutely,
    absolutelyCorrect,
    absolutelyRight,
    accurate,
    affirmative,
    beyondADoubt,
    bullseye,
    certainly,
    right,
    correctYouAre,
    thatsAccurate,
    darnStraight,
    definitely,
    dingDingDing,
    fair,
    iUnderstoodWhatYouSaid,
    imPickingUpWhatYoureThrowingDown,
    inAHeartbeat,
    indubitably,
    correct,
    yesThatIsTrue,
    yesThatsAccurate,
    yesThatsRight,
    yesThatsTrue,
    youAreCorrect,
    youAreRight,
    youHitTheNailOnTheHead,
    thatsAFairAssessment,
    youreCorrect,
    yesThatIsAccurate,
    yupThatIsAccurate,
    yupThatIsCorrect,
    yupThatIsRight,
    yupThatIsTrue,
    yupThatsAccurate,
    yupThatsCorrect,
    yupThatsRight,
    yupThatsTrue,
    understood,
    thatsAmazing,
    that_sAmazing,
    thatsCorrect,
    truuuuu,
    yesThatIsRight,
    yesThatIsCorrect,
    unquestionably,
    whatYouSaidWasAccurate,
    whatYouSaidWasRight,
    whatYouSaidWasTrue,
    withoutADoubt,
    withoutASecondThought,
    thatsATrueStatement,
    uhHuh,
    ohYeahThatIsRight,
    ohYeahThatsRight,
    ohThatsRight
];

const imSoPissedOffRightNow = new QuestionObject("I'm so pissed off right now");
const thisNewsLeftMeVexed = new QuestionObject("This news left me vexed");
const imSoInfuriated = new QuestionObject("I'm so infuriated");
const iveNeverBeenSoInfuriated = new QuestionObject("I've never been so infuriated");
const iAmFeelingTickedOff = new QuestionObject("I am feeling ticked off");
const imSoMad = new QuestionObject("I'm so mad");
const iveNeverBeenSoPeevedInAllMyLife = new QuestionObject("I've never been so peeved in all my life");
const imEnraged = new QuestionObject("I'm enraged");
const imAngry = new QuestionObject("I'm angry");
const iveLostMyTemper = new QuestionObject("I've lost my temper");
const imBlowingMyTop = new QuestionObject("I'm blowing my top");
const iAmAbsolutelyLivid = new QuestionObject("I am absolutely livid");
const imFuriousRightNow = new QuestionObject("I'm furious right now");
const imFurious = new QuestionObject("I'm furious");
const imFeelingTickedOff = new QuestionObject("I'm feeling ticked off");
const imFeelingKindOfMad = new QuestionObject("I'm feeling kind of mad");
const imFeelingHotUnderTheCollar = new QuestionObject("I'm feeling hot under the collar");
const imFeelingCross = new QuestionObject("I'm feeling cross");
const imFeelingAngry = new QuestionObject("I'm feeling angry");
const imHeated = new QuestionObject("I'm heated");
const imInfuriated = new QuestionObject("I'm infuriated");
const imAnnoyed = new QuestionObject("I'm annoyed");
const imAnUnhappyCamper = new QuestionObject("I'm an unhappy camper");
const imAnAngryPerson = new QuestionObject("I'm an angry person");
const imAnAngryMan = new QuestionObject("I'm an angry man");
const imAnAngryGuy = new QuestionObject("I'm an angry guy");
const imAnAngryGirl = new QuestionObject("I'm an angry girl");
const imAbsolutelyFurious = new QuestionObject("I'm absolutely furious");
const imExasperated = new QuestionObject("I'm exasperated");
const imReallyHotUnderTheCollarRightNow = new QuestionObject("I'm really hot under the collar right now");
const imSoOutraged = new QuestionObject("I'm so outraged");
const imSoMadRightNow = new QuestionObject("I'm so mad right now");
const imSoIrritatedRightNow = new QuestionObject("I'm so irritated right now");
const imSoIrritated = new QuestionObject("I'm so irritated");
const imSoAnnoyedRightNow = new QuestionObject("I'm so annoyed right now");
const imSoAnnoyed = new QuestionObject("I'm so annoyed");
const imSoAngryICouldPunchAHoleInTheWall = new QuestionObject("I'm so angry, I could punch a hole in the wall");
const imGoingBallistic = new QuestionObject("I'm going ballistic");
const imSoAngry = new QuestionObject("I'm so angry");
const iHaveBeenSoMadLately = new QuestionObject("I have been so mad lately");
const imPissedOff = new QuestionObject("I'm pissed off");
const imPissed = new QuestionObject("I'm pissed");
const imPeeved = new QuestionObject("I'm peeved");
const imMad = new QuestionObject("I'm mad");
const imLosingMyTemper = new QuestionObject("I'm losing my temper");
const imLivid = new QuestionObject("I'm livid");
const imJustTickedOff = new QuestionObject("I'm just ticked off");
const imJustExasperated = new QuestionObject("I'm just exasperated");
const imSoAngryRightNow = new QuestionObject("I'm so angry right now");
const iAmFurious = new QuestionObject("I am furious");
const iAmSoAngryRightNow = new QuestionObject("I am so angry right now");
const iAmSoAngry = new QuestionObject("I am so angry");
const iAmPissedOff = new QuestionObject("I am pissed off");
const iAmPissed = new QuestionObject("I am pissed");
const iAmPeeved = new QuestionObject("I am peeved");
const iAmMad = new QuestionObject("I am mad");
const iAmLivid = new QuestionObject("I am livid");
const iAmJustTickedOff = new QuestionObject("I am just ticked off");
const iSureAmTickedOff = new QuestionObject("I sure am ticked off");
const iAmHeated = new QuestionObject("I am heated");
const iAmSoIrritated = new QuestionObject("I am so irritated");
const iAmFeelingKindOfMad = new QuestionObject("I am feeling kind of mad");
const iAmFeelingCross = new QuestionObject("I am feeling cross");
const iAmFeelingAngry = new QuestionObject("I am feeling angry");
const iAmEnraged = new QuestionObject("I am enraged");
const iAmBlowingMyTop = new QuestionObject("I am blowing my top");
const iAmAnnoyed = new QuestionObject("I am annoyed");
const iAmAngry = new QuestionObject("I am angry");
const iAmInfuriated = new QuestionObject("I am infuriated");
const iAmSoPissedOff = new QuestionObject("I am so pissed off");
const imSoPeevedRightNow = new QuestionObject("I'm so peeved right now");
const iFlippedMyLid = new QuestionObject("I flipped my lid");
const iFeelPissedOffLately = new QuestionObject("I feel pissed off lately");
const iCouldntBeMoreAngry = new QuestionObject("I couldn't be more angry");
const iCantStopBeingAngry = new QuestionObject("I can't stop being angry");
const iAmVexed = new QuestionObject("I am vexed");
const iAmUpInArms = new QuestionObject("I am up in arms");
const iAmTickedOff = new QuestionObject("I am ticked off");
const iAmSoAnnoyed = new QuestionObject("I am so annoyed");
const iAmSoPissedOffRightNow = new QuestionObject("I am so pissed off right now");
const iAmSoAnnoyedRightNow = new QuestionObject("I am so annoyed right now");
const iAmSoPeevedToday = new QuestionObject("I am so peeved today");
const iAmSoPeevedRightNow = new QuestionObject("I am so peeved right now");
const iAmSoPeeved = new QuestionObject("I am so peeved");
const iAmSoOutragedRightNow = new QuestionObject("I am so outraged right now");
const iAmSoOutraged = new QuestionObject("I am so outraged");
const iAmSoMadRightNow = new QuestionObject("I am so mad right now");
const iAmSoMad = new QuestionObject("I am so mad");
const iAmSoIrritatedRightNow = new QuestionObject("I am so irritated right now");
const iJustBlewAGasket = new QuestionObject("I just blew a gasket");
const iAmSteamingMad = new QuestionObject("I am steaming mad");
const thisNewsLeftMeLivid = new QuestionObject("This news left me livid");
const imSoIrate = new QuestionObject("I'm so irate");
const imSeeingRedRightNow = new QuestionObject("I'm seeing red right now");
const thisMakesMeSoAngry = new QuestionObject("This makes me so angry");
const thisNewsPissedMeOff = new QuestionObject("This news pissed me off");
const thisNewsLeftMeUpInArms = new QuestionObject("This news left me up in arms");
const thisNewsLeftMeTickedOff = new QuestionObject("This news left me ticked off");
const thisNewsLeftMePissed = new QuestionObject("This news left me pissed");
const thisMadeMeBlowAGasket = new QuestionObject("This made me blow a gasket");
const thisNewsLeftMeMad = new QuestionObject("This news left me mad");
const imOutraged = new QuestionObject("I'm outraged");
const thisNewsLeftMeIrritated = new QuestionObject("This news left me irritated");
const thisNewsLeftMeInfuriated = new QuestionObject("This news left me infuriated");
const thisNewsLeftMeExasperated = new QuestionObject("This news left me exasperated");
const thisNewsLeftMeAnnoyed = new QuestionObject("This news left me annoyed");
const thisNewsIsInfuriating = new QuestionObject("This news is infuriating");
const thisNewsIsAnOutrage = new QuestionObject("This news is an outrage");
const thisNewsEnragedMe = new QuestionObject("This news enraged me");
const imSoOutragedRightNow = new QuestionObject("I'm so outraged right now");
const thisNewsLeftMePeeved = new QuestionObject("This news left me peeved");
const thisNewsLeftMeIrate = new QuestionObject("This news left me irate");
const thisNewsLeftMeIncensed = new QuestionObject("This news left me incensed");
const imFeelingIncensed = new QuestionObject("I'm feeling incensed");
const imSoIncensed = new QuestionObject("I'm so incensed");
const imIncensed = new QuestionObject("I'm incensed");
const iAmIncensed = new QuestionObject("I am incensed");
const imSoFurious = new QuestionObject("I'm so furious");
const thisNewsLeftMeFurious = new QuestionObject("This news left me furious");
const thisMakesMeSoIrate = new QuestionObject("This makes me so irate");
const thisNewsLeftMeOutraged = new QuestionObject("This news left me outraged");
const iAmOutraged = new QuestionObject("I am outraged");
const imGoingToRage = new QuestionObject("I'm going to rage");
const imRagingRightNow = new QuestionObject("I'm raging right now");
const iAmAboutToRage = new QuestionObject("I am about to rage");
const imAboutToRage = new QuestionObject("I'm about to rage");
const iJustLostMyTemper = new QuestionObject("I just lost my temper");
const iAmSoIrate = new QuestionObject("I am so irate");
const thisMakesMeLostMyTemper = new QuestionObject("This makes me lost my temper");
const imAboutToLoseMyTemper = new QuestionObject("I'm about to lose my temper");
const thisIsVexing = new QuestionObject("This is vexing");
const iveNeverBeenSoIrate = new QuestionObject("I've never been so irate");
const iveNeverBeenSoFuriousInAllMyLife = new QuestionObject("I've never been so furious in all my life");
const iveNeverBeenSoFurious = new QuestionObject("I've never been so furious");
const iveNeverBeenSoEnragedInAllMyLife = new QuestionObject("I've never been so enraged in all my life");
const iveNeverBeenSoEnraged = new QuestionObject("I've never been so enraged");
const iveNeverBeenSoCross = new QuestionObject("I've never been so cross");
const iveNeverBeenSoAnnoyedInAllMyLife = new QuestionObject("I've never been so annoyed in all my life");
const iveNeverBeenSoAnnoyed = new QuestionObject("I've never been so annoyed");
const iveNeverBeenSoAngryInAllMyLife = new QuestionObject("I've never been so angry in all my life");
const thisMadeMeBlowMyTop = new QuestionObject("This made me blow my top");
const iveNeverBeenAngrier = new QuestionObject("I've never been angrier");
const iveNeverBeenSoLivid = new QuestionObject("I've never been so livid");
const iveCompletelyLostMyTemper = new QuestionObject("I've completely lost my temper");
const imVexed = new QuestionObject("I'm vexed");
const imUpInArms = new QuestionObject("I'm up in arms");
const imTickedOff = new QuestionObject("I'm ticked off");
const imSoPissedOff = new QuestionObject("I'm so pissed off");
const imSoPeevedToday = new QuestionObject("I'm so peeved today");
const iveNeverBeenSoIncensed = new QuestionObject("I've never been so incensed");
const iveNeverBeenMadder = new QuestionObject("I've never been madder");
const iveNeverBeenSoPissedOff = new QuestionObject("I've never been so pissed off");
const thisIsMaddening = new QuestionObject("This is maddening");
const thisIsIrritating = new QuestionObject("This is irritating");
const thisIsInfuriating = new QuestionObject("This is infuriating");
const thisIsExasperating = new QuestionObject("This is exasperating");
const thisIsAnnoying = new QuestionObject("This is annoying");
const theNewsMadeMeAngry = new QuestionObject("The news made me angry");
const iveNeverBeenSoVexedInAllMyLife = new QuestionObject("I've never been so vexed in all my life");
const iveNeverBeenSoVexed = new QuestionObject("I've never been so vexed");
const iveNeverBeenSoTickedOff = new QuestionObject("I've never been so ticked off");
const iveNeverBeenSoInfuriatedInAllMyLife = new QuestionObject("I've never been so infuriated in all my life");
const iveNeverBeenSoPissedInAllMyLife = new QuestionObject("I've never been so pissed in all my life");
const iveNeverBeenSoPissed = new QuestionObject("I've never been so pissed");
const iveNeverBeenSoPeeved = new QuestionObject("I've never been so peeved");
const iveNeverBeenSoOutragedInAllMyLife = new QuestionObject("I've never been so outraged in all my life");
const iveNeverBeenSoOutraged = new QuestionObject("I've never been so outraged");
const iveNeverBeenSoMadInAllMyLife = new QuestionObject("I've never been so mad in all my life");
const iveNeverBeenSoLividInAllMyLife = new QuestionObject("I've never been so livid in all my life");
const imSoPeeved = new QuestionObject("I'm so peeved");
const iveNeverBeenSoTickedOffInAllMyLife = new QuestionObject("I've never been so ticked off in all my life");

export const expressionsOfAngerQuestionsArray = [
    imSoPissedOffRightNow,
    thisNewsLeftMeVexed,
    imSoInfuriated,
    iveNeverBeenSoInfuriated,
    iAmFeelingTickedOff,
    imSoMad,
    iveNeverBeenSoPeevedInAllMyLife,
    imEnraged,
    imAngry,
    iveLostMyTemper,
    imBlowingMyTop,
    iAmAbsolutelyLivid,
    imFuriousRightNow,
    imFurious,
    imFeelingTickedOff,
    imFeelingKindOfMad,
    imFeelingHotUnderTheCollar,
    imFeelingCross,
    imFeelingAngry,
    imHeated,
    imInfuriated,
    imAnnoyed,
    imAnUnhappyCamper,
    imAnAngryPerson,
    imAnAngryMan,
    imAnAngryGuy,
    imAnAngryGirl,
    imAbsolutelyFurious,
    imExasperated,
    imReallyHotUnderTheCollarRightNow,
    imSoOutraged,
    imSoMadRightNow,
    imSoIrritatedRightNow,
    imSoIrritated,
    imSoAnnoyedRightNow,
    imSoAnnoyed,
    imSoAngryICouldPunchAHoleInTheWall,
    imGoingBallistic,
    imSoAngry,
    iHaveBeenSoMadLately,
    imPissedOff,
    imPissed,
    imPeeved,
    imMad,
    imLosingMyTemper,
    imLivid,
    imJustTickedOff,
    imJustExasperated,
    imSoAngryRightNow,
    iAmFurious,
    iAmSoAngryRightNow,
    iAmSoAngry,
    iAmPissedOff,
    iAmPissed,
    iAmPeeved,
    iAmMad,
    iAmLivid,
    iAmJustTickedOff,
    iSureAmTickedOff,
    iAmHeated,
    iAmSoIrritated,
    iAmFeelingKindOfMad,
    iAmFeelingCross,
    iAmFeelingAngry,
    iAmEnraged,
    iAmBlowingMyTop,
    iAmAnnoyed,
    iAmAngry,
    iAmInfuriated,
    iAmSoPissedOff,
    imSoPeevedRightNow,
    iFlippedMyLid,
    iFeelPissedOffLately,
    iCouldntBeMoreAngry,
    iCantStopBeingAngry,
    iAmVexed,
    iAmUpInArms,
    iAmTickedOff,
    iAmSoAnnoyed,
    iAmSoPissedOffRightNow,
    iAmSoAnnoyedRightNow,
    iAmSoPeevedToday,
    iAmSoPeevedRightNow,
    iAmSoPeeved,
    iAmSoOutragedRightNow,
    iAmSoOutraged,
    iAmSoMadRightNow,
    iAmSoMad,
    iAmSoIrritatedRightNow,
    iJustBlewAGasket,
    iAmSteamingMad,
    thisNewsLeftMeLivid,
    imSoIrate,
    imSeeingRedRightNow,
    thisMakesMeSoAngry,
    thisNewsPissedMeOff,
    thisNewsLeftMeUpInArms,
    thisNewsLeftMeTickedOff,
    thisNewsLeftMePissed,
    thisMadeMeBlowAGasket,
    thisNewsLeftMeMad,
    imOutraged,
    thisNewsLeftMeIrritated,
    thisNewsLeftMeInfuriated,
    thisNewsLeftMeExasperated,
    thisNewsLeftMeAnnoyed,
    thisNewsIsInfuriating,
    thisNewsIsAnOutrage,
    thisNewsEnragedMe,
    imSoOutragedRightNow,
    thisNewsLeftMePeeved,
    thisNewsLeftMeIrate,
    thisNewsLeftMeIncensed,
    imFeelingIncensed,
    imSoIncensed,
    imIncensed,
    iAmIncensed,
    imSoFurious,
    thisNewsLeftMeFurious,
    thisMakesMeSoIrate,
    thisNewsLeftMeOutraged,
    iAmOutraged,
    imGoingToRage,
    imRagingRightNow,
    iAmAboutToRage,
    imAboutToRage,
    iJustLostMyTemper,
    iAmSoIrate,
    thisMakesMeLostMyTemper,
    imAboutToLoseMyTemper,
    thisIsVexing,
    iveNeverBeenSoIrate,
    iveNeverBeenSoFuriousInAllMyLife,
    iveNeverBeenSoFurious,
    iveNeverBeenSoEnragedInAllMyLife,
    iveNeverBeenSoEnraged,
    iveNeverBeenSoCross,
    iveNeverBeenSoAnnoyedInAllMyLife,
    iveNeverBeenSoAnnoyed,
    iveNeverBeenSoAngryInAllMyLife,
    thisMadeMeBlowMyTop,
    iveNeverBeenAngrier,
    iveNeverBeenSoLivid,
    iveCompletelyLostMyTemper,
    imVexed,
    imUpInArms,
    imTickedOff,
    imSoPissedOff,
    imSoPeevedToday,
    iveNeverBeenSoIncensed,
    iveNeverBeenMadder,
    iveNeverBeenSoPissedOff,
    thisIsMaddening,
    thisIsIrritating,
    thisIsInfuriating,
    thisIsExasperating,
    thisIsAnnoying,
    theNewsMadeMeAngry,
    iveNeverBeenSoVexedInAllMyLife,
    iveNeverBeenSoVexed,
    iveNeverBeenSoTickedOff,
    iveNeverBeenSoInfuriatedInAllMyLife,
    iveNeverBeenSoPissedInAllMyLife,
    iveNeverBeenSoPissed,
    iveNeverBeenSoPeeved,
    iveNeverBeenSoOutragedInAllMyLife,
    iveNeverBeenSoOutraged,
    iveNeverBeenSoMadInAllMyLife,
    iveNeverBeenSoLividInAllMyLife,
    imSoPeeved,
    iveNeverBeenSoTickedOffInAllMyLife
];

const whatABoringThursday = new QuestionObject("What a boring Thursday");
const whatABoringSunday = new QuestionObject("What a boring Sunday");
const myDaysBeenSoBoring = new QuestionObject("My day's been so boring");
const iAmSoBored = new QuestionObject("I am so bored");
const iAmBored = new QuestionObject("I am bored");
const imNotHavingVeryMuchFun = new QuestionObject("I'm not having very much fun");
const whatABoringMorning = new QuestionObject("What a boring morning");
const iCantThinkOfAnythingIWantToDo = new QuestionObject("I can't think of anything I want to do");
const itsJustBeenABitOfADullDay = new QuestionObject("It's just been a bit of a dull day");
const iCouldDieFromBoredom = new QuestionObject("I could die from boredom");
const iWasSoBoredMyEyesGlazedOver = new QuestionObject("I was so bored my eyes glazed over");
const boredZZZ = new QuestionObject("Bored ZZZ");
const imSoBoredRightNow = new QuestionObject("I'm so bored right now");
const imSoBored = new QuestionObject("I'm so bored");
const imQuiteBored = new QuestionObject("I'm quite bored");
const imNotHavingVeryMuchFunRightNow = new QuestionObject("I'm not having very much fun right now");
const imNotHavingFun = new QuestionObject("I'm not having fun");
const imFreakingBored = new QuestionObject("I'm freaking bored");
const imBoredToDeath = new QuestionObject("I'm bored to death");
const imBoredStiff = new QuestionObject("I'm bored stiff");
const imBoredOutOfMyMind = new QuestionObject("I'm bored out of my mind");
const imVeryBored = new QuestionObject("I'm very bored");
const imBoredAF = new QuestionObject("I'm bored AF");
const itsBeenABoringWeek = new QuestionObject("It's been a boring week");
const iCantHelpItImBored = new QuestionObject("I can't help it. I'm bored");
const iCantHelpButBeBored = new QuestionObject("I can't help but be bored");
const iAmSoBoredRightNow = new QuestionObject("I am so bored right now");
const iAmBoredAtWork = new QuestionObject("I am bored at work");
const iAmAlwaysBored = new QuestionObject("I am always bored");
const iAlwaysSeemToBeBored = new QuestionObject("I always seem to be bored");
const helpImBored = new QuestionObject("Help! I'm bored.");
const godIAmSoBored = new QuestionObject("God, I am so bored");
const imBoredAsHell = new QuestionObject("I'm bored as hell");
const theresNothingToDo = new QuestionObject("There's nothing to do");
const whatABoringWednesday = new QuestionObject("What a boring Wednesday");
const whatABoringTuesday = new QuestionObject("What a boring Tuesday");
const whatABoringSaturday = new QuestionObject("What a boring Saturday");
const whatABoringNight = new QuestionObject("What a boring night");
const whatABoringMonday = new QuestionObject("What a boring Monday");
const whatABoringFriday = new QuestionObject("What a boring Friday");
const whatABoringDay = new QuestionObject("What a boring day");
const whatABoringAfternoon = new QuestionObject("What a boring afternoon");
const imSuperBored = new QuestionObject("I'm super bored");
const todayHasBeenBoring = new QuestionObject("Today has been boring");
const whatADullDay = new QuestionObject("What a dull day");
const soBored = new QuestionObject("So bored");
const myDayHasBeenSoDull = new QuestionObject("My day has been so dull");
const mondaysAreSoBoring = new QuestionObject("Mondays are so boring");
const jeezIAmSoBored = new QuestionObject("Jeez I am so bored");
const iveNeverBeenSoBoredInMyLife = new QuestionObject("I've never been so bored in my life");
const iveNeverBeenSoBored = new QuestionObject("I've never been so bored");
const iveBeenFeelingPrettyBored = new QuestionObject("I've been feeling pretty bored");
const iveBeenBoredAllDay = new QuestionObject("I've been bored all day");
const itsBeenAnAwfullyBoringDay = new QuestionObject("It's been an awfully boring day");
const itsBeenADullAssDay = new QuestionObject("It's been a dull ass day");
const todayHasBeenDull = new QuestionObject("Today has been dull");
const ughImSoUninterested = new QuestionObject("Ugh, I'm so uninterested");

export const expressionsOfBoredomQuestionsArray = [
    whatABoringThursday,
    whatABoringSunday,
    myDaysBeenSoBoring,
    iAmSoBored,
    iAmBored,
    imNotHavingVeryMuchFun,
    whatABoringMorning,
    iCantThinkOfAnythingIWantToDo,
    itsJustBeenABitOfADullDay,
    iCouldDieFromBoredom,
    iWasSoBoredMyEyesGlazedOver,
    boredZZZ,
    imSoBoredRightNow,
    imSoBored,
    imQuiteBored,
    imNotHavingVeryMuchFunRightNow,
    imNotHavingFun,
    imFreakingBored,
    imBoredToDeath,
    imBoredStiff,
    imBoredOutOfMyMind,
    imVeryBored,
    imBoredAF,
    itsBeenABoringWeek,
    iCantHelpItImBored,
    iCantHelpButBeBored,
    iAmSoBoredRightNow,
    iAmBoredAtWork,
    iAmAlwaysBored,
    iAlwaysSeemToBeBored,
    helpImBored,
    godIAmSoBored,
    imBoredAsHell,
    theresNothingToDo,
    whatABoringWednesday,
    whatABoringTuesday,
    whatABoringSaturday,
    whatABoringNight,
    whatABoringMonday,
    whatABoringFriday,
    whatABoringDay,
    whatABoringAfternoon,
    imSuperBored,
    todayHasBeenBoring,
    whatADullDay,
    soBored,
    myDayHasBeenSoDull,
    mondaysAreSoBoring,
    jeezIAmSoBored,
    iveNeverBeenSoBoredInMyLife,
    iveNeverBeenSoBored,
    iveBeenFeelingPrettyBored,
    iveBeenBoredAllDay,
    itsBeenAnAwfullyBoringDay,
    itsBeenADullAssDay,
    todayHasBeenDull,
    ughImSoUninterested
];

const thatsVeryKind = new QuestionObject("That's very kind");
const ohThankYou = new QuestionObject("Oh, thank you");
const imGratefulThanks = new QuestionObject("I'm grateful, thanks");
const wonderfulThanks = new QuestionObject("Wonderful, thanks!");
const thatsGreatThanks = new QuestionObject("That's great, thanks");
const imGratefulForThatThankYouKindly = new QuestionObject("I'm grateful for that, thank you kindly");
const gotchaThanks = new QuestionObject("Gotcha, thanks");
const radThanks = new QuestionObject("Rad, thanks");
const iAppreciateIt = new QuestionObject("I appreciate it");
const thx = new QuestionObject("Thx");
const iThankYou = new QuestionObject("I thank you");
const mySincereThanks = new QuestionObject("My sincere thanks");
const myHumblestThanksToYou = new QuestionObject("My humblest thanks to you");
const marvelousThanks = new QuestionObject("Marvelous, thanks");
const marvelousThankYouKindly = new QuestionObject("Marvelous, thank you kindly");
const marvelousThankYou = new QuestionObject("Marvelous, thank you");
const manyThanksToYou = new QuestionObject("Many thanks to you");
const manyThanks = new QuestionObject("Many thanks");
const kthx = new QuestionObject("Kthx");
const ahhThanks = new QuestionObject("Ahh, thanks");
const imGratefulForThatThankYou = new QuestionObject("I'm grateful for that, thank you");
const perfectoThanks = new QuestionObject("Perfecto, thanks");
const iAppreciateYou = new QuestionObject("I appreciate you");
const iAppreciateThat = new QuestionObject("I appreciate that");
const iAmVeryThankfulForThat = new QuestionObject("I am very thankful for that");
const howKindThankYou = new QuestionObject("How kind, thank you");
const greatThanks = new QuestionObject("Great, thanks");
const greatThankYou = new QuestionObject("Great, thank you");
const gracias = new QuestionObject("Gracias");
const gotchaThankYou = new QuestionObject("Gotcha, thank you");
const awesomeThanks = new QuestionObject("Awesome thanks!");
const thankYouPal = new QuestionObject("thank you pal");
const wonderfulThankYou = new QuestionObject("Wonderful, thank you!");
const wonderfulThankYouVeryMuch = new QuestionObject("Wonderful, thank you very much");
const whyThankYou = new QuestionObject("Why thank you");
const thnx = new QuestionObject("Thnx");
const thatIsLovelyThanks = new QuestionObject("That is lovely, thanks");
const thatIsAwesomeThanks = new QuestionObject("That is awesome, thanks!");
const thanksBot = new QuestionObject("Thanks bot");
const thanksALot = new QuestionObject("Thanks a lot");
const okayThanks = new QuestionObject("Okay, thanks!");
const thankYouSoMuch = new QuestionObject("Thank you so much");
const perfectThanks = new QuestionObject("Perfect, thanks");
const thankYouMyFriend = new QuestionObject("Thank you my friend");
const thankYouKindly = new QuestionObject("Thank you kindly");
const thankYouForThat = new QuestionObject("Thank you for that");
const thankYouBot = new QuestionObject("Thank you bot");
const thankYou = new QuestionObject("Thank you");
const rightOnThanksVeryMuch = new QuestionObject("Right on, thanks very much");
const rightOnThanksALot = new QuestionObject("Right on, thanks a lot");
const radicalThanks = new QuestionObject("Radical, thanks");
const radThankYou = new QuestionObject("Rad thank you");
const thanks = new QuestionObject("Thanks");
const ty = new QuestionObject("Ty");
const tyvm = new QuestionObject("Tyvm");

export const expressionsOfGratitudeQuestionsArray = [
    thatsVeryKind,
    ohThankYou,
    imGratefulThanks,
    wonderfulThanks,
    thatsGreatThanks,
    imGratefulForThatThankYouKindly,
    gotchaThanks,
    radThanks,
    iAppreciateIt,
    thx,
    iThankYou,
    mySincereThanks,
    myHumblestThanksToYou,
    marvelousThanks,
    marvelousThankYouKindly,
    marvelousThankYou,
    manyThanksToYou,
    manyThanks,
    kthx,
    ahhThanks,
    imGratefulForThatThankYou,
    perfectoThanks,
    iAppreciateYou,
    iAppreciateThat,
    iAmVeryThankfulForThat,
    howKindThankYou,
    greatThanks,
    greatThankYou,
    gracias,
    gotchaThankYou,
    awesomeThanks,
    thankYouPal,
    wonderfulThankYou,
    wonderfulThankYouVeryMuch,
    whyThankYou,
    thnx,
    thatIsLovelyThanks,
    thatIsAwesomeThanks,
    thanksBot,
    thanksALot,
    okayThanks,
    thankYouSoMuch,
    perfectThanks,
    thankYouMyFriend,
    thankYouKindly,
    thankYouForThat,
    thankYouBot,
    thankYou,
    rightOnThanksVeryMuch,
    rightOnThanksALot,
    radicalThanks,
    radThankYou,
    thanks,
    ty,
    tyvm
];

const imPositivelyOverjoyed = new QuestionObject("I'm positively overjoyed");
const iAmHappy = new QuestionObject("I am happy");
const imJustACheerfulPerson = new QuestionObject("I'm just a cheerful person");
const iMHavingAWonderfulDay = new QuestionObject("I’m having a wonderful day");
const imInSuchAGoodMood = new QuestionObject("I'm in such a good mood");
const iAmAHappyCamper = new QuestionObject("I am a happy camper");
const imPositivelyBuzzing = new QuestionObject("I'm positively buzzing");
const iFeelFantastic = new QuestionObject("I feel fantastic");
const imTheHappiestGuyInTheWorld = new QuestionObject("I'm the happiest guy in the world");
const iCouldnTBeHappier = new QuestionObject("I couldn’t be happier");
const imAbsolutelyEcstatic = new QuestionObject("I'm absolutely ecstatic");
const imHappyAf = new QuestionObject("I'm happy af");
const iMHavingALovelyDay = new QuestionObject("I’m having a lovely day");
const iMInSuchAGreatMood = new QuestionObject("I’m in such a great mood");
const iMOnCloudNine = new QuestionObject("I’m on cloud nine");
const iMOverTheMoon = new QuestionObject("I’m over the moon");
const iMOverjoyed = new QuestionObject("I’m overjoyed");
const iMTheHappiestGuyOnEarth = new QuestionObject("I’m the happiest guy on earth");
const iMWalkingOnSunshine = new QuestionObject("I’m walking on sunshine");
const iVeNeverBeenHappier = new QuestionObject("I’ve never been happier");
const iMHappyAsAClam = new QuestionObject("I’m happy as a clam");
const imAbsolutelyBuzzing = new QuestionObject("I'm absolutely buzzing");
const iMFeelingSoChipper = new QuestionObject("I’m feeling so chipper");
const imAbsolutelyOverjoyed = new QuestionObject("I'm absolutely overjoyed");
const imAllSmiles = new QuestionObject("I'm all smiles");
const imBurstingWithHappiness = new QuestionObject("I'm bursting with happiness");
const imBurstingWithJoy = new QuestionObject("I'm bursting with joy");
const imBuzzing = new QuestionObject("I'm buzzing");
const imChuffed = new QuestionObject("I'm chuffed");
const imEuphoric = new QuestionObject("I'm euphoric");
const imFeelingCheery = new QuestionObject("I'm feeling cheery");
const imFeelingChipper = new QuestionObject("I'm feeling chipper");
const bestDayEver = new QuestionObject("Best day ever");
const imAHappyCamper = new QuestionObject("I'm a happy camper");
const iAmABallOfJoy = new QuestionObject("I am a ball of joy");
const iAmAJollyGreenGiant = new QuestionObject("I am a jolly green giant");
const iAmAJollyPerson = new QuestionObject("I am a jolly person");
const iAmHappyOhSoHappy = new QuestionObject("I am happy, oh so happy");
const iAmJoyous = new QuestionObject("I am joyous");
const iAmSoJolly = new QuestionObject("I am so jolly");
const iCanTStopSmiling = new QuestionObject("I can’t stop smiling");
const iCantHelpButBeHappy = new QuestionObject("I can't help but be happy");
const iMHavingAGoodDay = new QuestionObject("I’m having a good day");
const iCantStopSmiling = new QuestionObject("I can't stop smiling");
const imHappyAsAClam = new QuestionObject("I'm happy as a clam");
const iFeelAmazing = new QuestionObject("I feel amazing");
const iFeelElated = new QuestionObject("I feel elated");
const iFeelLikeImFloatingOnAir = new QuestionObject("I feel like I'm floating on air");
const iFeelSoGreat = new QuestionObject("I feel so great");
const iLoveMyLife = new QuestionObject("I love my life");
const iMAHappyCamper = new QuestionObject("I’m a happy camper");
const iMAbsolutelyDelighted = new QuestionObject("I’m absolutely delighted");
const iMFeelingCheerful = new QuestionObject("I’m feeling cheerful");
const iMFeelingGiddy = new QuestionObject("I’m feeling giddy");
const iCantHelpButBeJoyful = new QuestionObject("I can't help but be joyful");
const mySpiritsAreExcellent = new QuestionObject("My spirits are excellent");
const imFeelingPeachy = new QuestionObject("I'm feeling peachy");
const imTheHappiestGirlInTheWorld = new QuestionObject("I'm the happiest girl in the world");
const imTheHappiestGirlOnEarth = new QuestionObject("I'm the happiest girl on earth");
const imTheHappiestManInTheWorld = new QuestionObject("I'm the happiest man in the world");
const imTickledPink = new QuestionObject("I'm tickled pink");
const itsHardNotToBeHappy = new QuestionObject("It's hard not to be happy");
const iveNeverBeenHappier = new QuestionObject("I've never been happier");
const lifeIsAmazing = new QuestionObject("Life is amazing");
const lifeIsAwesome = new QuestionObject("Life is awesome");
const imTheHappiestGalInTheWorld = new QuestionObject("I'm the happiest gal in the world");
const lifeIsGood = new QuestionObject("Life is good");
const imTheHappiestBoyInTheWorld = new QuestionObject("I'm the happiest boy in the world");
const ohHappyDay = new QuestionObject("Oh happy day");
const todayIsTheBest = new QuestionObject("Today is the best");
const weCouldnTBeHappier = new QuestionObject("We couldn’t be happier");
const whatAFantasticDay = new QuestionObject("What a fantastic day");
const whatAGloriousDay = new QuestionObject("What a glorious day");
const whatAGreatDay = new QuestionObject("what a great day");
const whatAHappyDay = new QuestionObject("What a happy day");
const whatAJoyousDay = new QuestionObject("What a joyous day");
const whatAnAmazingDay = new QuestionObject("What an amazing day");
const whatCanISayImJustHappy = new QuestionObject("What can I say? I'm just happy");
const lifeIsBeautiful = new QuestionObject("Life is beautiful");
const imOnCloud = new QuestionObject("I'm on cloud 9");
const imHavingAGreatDay = new QuestionObject("I'm having a great day");
const imInAGreatMood = new QuestionObject("I'm in a great mood");
const imInGoodSpirits = new QuestionObject("I'm in good spirits");
const imJoyous = new QuestionObject("I'm joyous");
const imJustACheerfulGal = new QuestionObject("I'm just a cheerful gal");
const imJustACheerfulGirl = new QuestionObject("I'm just a cheerful girl");
const imJustACheerfulKindOfGuy = new QuestionObject("I'm just a cheerful kind of guy");
const imJustACheeryPerson = new QuestionObject("I'm just a cheery person");
const imTheHappiestGalOnEarth = new QuestionObject("I'm the happiest gal on earth");
const imLivingTheDream = new QuestionObject("I'm living the dream");
const youveNeverMetAnyoneMoreJoyfulThanMe = new QuestionObject("You've never met anyone more joyful than me");
const imOnCloudNine = new QuestionObject("I'm on cloud nine");
const imOnTopOfTheWorld = new QuestionObject("I'm on top of the world");
const imOneHappyCamper = new QuestionObject("I'm one happy camper");
const imOverTheMoon = new QuestionObject("I'm over the moon");
const imPositivelyEcstatic = new QuestionObject("I'm positively ecstatic");
const imSoGoshDarnHappy = new QuestionObject("I'm so gosh darn happy");
const imSoHappy = new QuestionObject("I'm so happy");
const imSoHappyICouldJustDie = new QuestionObject("I'm so happy I could just die");
const imJustThrilled = new QuestionObject("I'm just thrilled");

export const expressionsOfHappinessQuestionsArray = [
    imPositivelyOverjoyed,
    iAmHappy,
    imJustACheerfulPerson,
    iMHavingAWonderfulDay,
    imInSuchAGoodMood,
    iAmAHappyCamper,
    imPositivelyBuzzing,
    iFeelFantastic,
    imTheHappiestGuyInTheWorld,
    iCouldnTBeHappier,
    imAbsolutelyEcstatic,
    imHappyAf,
    iMHavingALovelyDay,
    iMInSuchAGreatMood,
    iMOnCloudNine,
    iMOverTheMoon,
    iMOverjoyed,
    iMTheHappiestGuyOnEarth,
    iMWalkingOnSunshine,
    iVeNeverBeenHappier,
    iMHappyAsAClam,
    imAbsolutelyBuzzing,
    iMFeelingSoChipper,
    imAbsolutelyOverjoyed,
    imAllSmiles,
    imBurstingWithHappiness,
    imBurstingWithJoy,
    imBuzzing,
    imChuffed,
    imEuphoric,
    imFeelingCheery,
    imFeelingChipper,
    bestDayEver,
    imAHappyCamper,
    iAmABallOfJoy,
    iAmAJollyGreenGiant,
    iAmAJollyPerson,
    iAmHappyOhSoHappy,
    iAmJoyous,
    iAmSoJolly,
    iCanTStopSmiling,
    iCantHelpButBeHappy,
    iMHavingAGoodDay,
    iCantStopSmiling,
    imHappyAsAClam,
    iFeelAmazing,
    iFeelElated,
    iFeelLikeImFloatingOnAir,
    iFeelSoGreat,
    iLoveMyLife,
    iMAHappyCamper,
    iMAbsolutelyDelighted,
    iMFeelingCheerful,
    iMFeelingGiddy,
    iCantHelpButBeJoyful,
    mySpiritsAreExcellent,
    imFeelingPeachy,
    imTheHappiestGirlInTheWorld,
    imTheHappiestGirlOnEarth,
    imTheHappiestManInTheWorld,
    imTickledPink,
    itsHardNotToBeHappy,
    iveNeverBeenHappier,
    lifeIsAmazing,
    lifeIsAwesome,
    imTheHappiestGalInTheWorld,
    lifeIsGood,
    imTheHappiestBoyInTheWorld,
    ohHappyDay,
    todayIsTheBest,
    weCouldnTBeHappier,
    whatAFantasticDay,
    whatAGloriousDay,
    whatAGreatDay,
    whatAHappyDay,
    whatAJoyousDay,
    whatAnAmazingDay,
    whatCanISayImJustHappy,
    lifeIsBeautiful,
    imOnCloud,
    imHavingAGreatDay,
    imInAGreatMood,
    imInGoodSpirits,
    imJoyous,
    imJustACheerfulGal,
    imJustACheerfulGirl,
    imJustACheerfulKindOfGuy,
    imJustACheeryPerson,
    imTheHappiestGalOnEarth,
    imLivingTheDream,
    youveNeverMetAnyoneMoreJoyfulThanMe,
    imOnCloudNine,
    imOnTopOfTheWorld,
    imOneHappyCamper,
    imOverTheMoon,
    imPositivelyEcstatic,
    imSoGoshDarnHappy,
    imSoHappy,
    imSoHappyICouldJustDie,
    imJustThrilled
];

const whoops = new QuestionObject("Whoops");
const dontBeOffended = new QuestionObject("Don't be offended");
const pardonMe = new QuestionObject("Pardon me");
const scuseMe = new QuestionObject("Scuse me");
const oopsie = new QuestionObject("Oopsie");
const oops = new QuestionObject("Oops");
const noOffense = new QuestionObject("No offense");
const iBegYourPardon = new QuestionObject("I beg your pardon");
const dontTakeThisTheWrongWay = new QuestionObject("Don't take this the wrong way");
const excuseMe = new QuestionObject("Excuse me");
const pardon = new QuestionObject("Pardon");
const excuseMoi = new QuestionObject("Excuse moi");
const dontTakeThatTheWrongWay = new QuestionObject("Don't take that the wrong way");
const beggingYourPardon = new QuestionObject("Begging your pardon");

export const expressionsOfRegretQuestionsArray = [
    whoops,
    dontBeOffended,
    pardonMe,
    scuseMe,
    oopsie,
    oops,
    noOffense,
    iBegYourPardon,
    dontTakeThisTheWrongWay,
    excuseMe,
    pardon,
    excuseMoi,
    dontTakeThatTheWrongWay,
    beggingYourPardon
];

//13-25

const yoDude = new QuestionObject("Yo dude");
const howdy = new QuestionObject("Howdy");
const helloBot = new QuestionObject("hello bot");
const greetingsAndSalutations = new QuestionObject("Greetings and salutations");
const helloThere = new QuestionObject("Hello there");
const greetingsCaringBot = new QuestionObject("Greetings caring bot");
const hi = new QuestionObject("Hi");
const gday = new QuestionObject("G'day");
const heyItsYou = new QuestionObject("Hey it's you!");
const openAHailingChannel = new QuestionObject("Open a hailing channel");
const heyMyDude = new QuestionObject("Hey my dude");
const hey = new QuestionObject("Hey");
const hello = new QuestionObject("Hello");
const helloMyFriend = new QuestionObject("Hello my friend");
const heyCaringBot = new QuestionObject("Hey caring bot");
const heyFriendlyBot = new QuestionObject("Hey friendly bot");
const ahoy = new QuestionObject("Ahoy");
const hail = new QuestionObject("Hail!");
const heyPal = new QuestionObject("Hey pal");
const heyProfessionalBot = new QuestionObject("Hey professional bot");
const heyThere = new QuestionObject("Hey there");
const heyThereBot = new QuestionObject("Hey there bot");
const heyThereBuddy = new QuestionObject("Hey there buddy");
const heyTherePal = new QuestionObject("Hey there pal");
const heyHomie = new QuestionObject("Hey homie");
const ahoyThere = new QuestionObject("Ahoy there");
const aloha = new QuestionObject("Aloha");
const alohaBot = new QuestionObject("Aloha bot");
const bonjour = new QuestionObject("Bonjour");
const goodDay = new QuestionObject("Good day");
const hailingTheBot = new QuestionObject("Hailing the bot");
const greetings = new QuestionObject("Greetings");
const hailingBot = new QuestionObject("Hailing Bot");
const greetingsBot = new QuestionObject("Greetings bot");
const greetingsFriend = new QuestionObject("Greetings friend");
const greetingsFriendlyBot = new QuestionObject("Greetings friendly bot");
const greetingsProfessionalBot = new QuestionObject("Greetings professional bot");
const greetingsWittyBot = new QuestionObject("Greetings witty bot");
const heya = new QuestionObject("Heya");
const goodTidings = new QuestionObject("Good tidings");
const wellHello = new QuestionObject("Well hello");
const heyWittyBot = new QuestionObject("Hey witty bot");
const oh_Hello = new QuestionObject("Oh, hello");
const openAChannel = new QuestionObject("Open a channel");
const openAHailingFrequency = new QuestionObject("Open a hailing frequency");
const salutations = new QuestionObject("Salutations");
const ohHeyItsYou = new QuestionObject("Oh hey, it's you");
const shalom = new QuestionObject("Shalom");
const ohHeyThere = new QuestionObject("Oh hey there");
const wellHeyThere = new QuestionObject("Well hey there");
const wellHi = new QuestionObject("Well hi");
const wellHiThere = new QuestionObject("Well hi there");
const wellHowdy = new QuestionObject("Well howdy");
const yo = new QuestionObject("Yo");
const yoMan = new QuestionObject("Yo man");
const salutationsWithExlamationMark = new QuestionObject("Salutations!");
const hiWittyBot = new QuestionObject("Hi witty bot");
const yoMyDude = new QuestionObject("Yo my dude");
const heyHey = new QuestionObject("Hey-hey");
const hiBot = new QuestionObject("Hi bot");
const hiCaringBot = new QuestionObject("Hi caring bot");
const hiFriendlyBot = new QuestionObject("Hi friendly bot");
const ohHowdyThere = new QuestionObject("Oh howdy there");
const hiThere = new QuestionObject("Hi there!");
const heyYou = new QuestionObject("Hey you");
const hiya = new QuestionObject("Hiya");
const hiYa = new QuestionObject("Hi-ya");
const howdyPartner = new QuestionObject("Howdy partner");
const ohHello = new QuestionObject("Oh hello");
const ohHelloThere = new QuestionObject("Oh hello there");
const ohHeyAmigo = new QuestionObject("Oh hey amigo");
const hiProfessionalBot = new QuestionObject("Hi professional bot");
const goodAfternoon = new QuestionObject("Good afternoon");
const hola = new QuestionObject("Hola");

export const greetingsQuestionsArray = [
    yoDude,
    howdy,
    helloBot,
    greetingsAndSalutations,
    helloThere,
    greetingsCaringBot,
    hi,
    gday,
    heyItsYou,
    openAHailingChannel,
    heyMyDude,
    hey,
    hello,
    helloMyFriend,
    heyCaringBot,
    heyFriendlyBot,
    ahoy,
    hail,
    heyPal,
    heyProfessionalBot,
    heyThere,
    heyThereBot,
    heyThereBuddy,
    heyTherePal,
    heyHomie,
    ahoyThere,
    aloha,
    alohaBot,
    bonjour,
    goodDay,
    hailingTheBot,
    greetings,
    hailingBot,
    greetingsBot,
    greetingsFriend,
    greetingsFriendlyBot,
    greetingsProfessionalBot,
    greetingsWittyBot,
    heya,
    goodTidings,
    wellHello,
    heyWittyBot,
    oh_Hello,
    openAChannel,
    openAHailingFrequency,
    salutations,
    ohHeyItsYou,
    shalom,
    ohHeyThere,
    wellHeyThere,
    wellHi,
    wellHiThere,
    wellHowdy,
    yo,
    yoMan,
    salutationsWithExlamationMark,
    hiWittyBot,
    yoMyDude,
    heyHey,
    hiBot,
    hiCaringBot,
    hiFriendlyBot,
    ohHowdyThere,
    hiThere,
    heyYou,
    hiya,
    hiYa,
    howdyPartner,
    ohHello,
    ohHelloThere,
    ohHeyAmigo,
    hiProfessionalBot,
    goodAfternoon,
    hola
];

const iHaveReturned = new QuestionObject("I have returned");
const iAmPresentAndAccountedFor = new QuestionObject("I am present and accounted for");
const imBackOnTheComputer = new QuestionObject("I'm back on the computer");
const iHaveArrived = new QuestionObject("I have arrived");
const yourGirlIsBack = new QuestionObject("Your girl is back");
const imHereInTheFlesh = new QuestionObject("I'm here in the flesh");
const tadaHereIAm = new QuestionObject("Tada! Here I am!");
const iAmPresent = new QuestionObject("I am present");
const imBack = new QuestionObject("I'm back");
const iAmHere = new QuestionObject("I am here");
const andWereBack = new QuestionObject("And we're back");
const botImHere = new QuestionObject("Bot I'm here");
const broImHere = new QuestionObject("Bro I'm here");
const girlIAmBack = new QuestionObject("Girl I am back");
const hereIAm = new QuestionObject("Here I am");
const hereIAmDude = new QuestionObject("Here I am dude");
const heyDudeImBack = new QuestionObject("Hey dude, I'm back");
const heyImBack = new QuestionObject("Hey I'm back");
const andNowImBack = new QuestionObject("And now I'm back");
const supImBack = new QuestionObject("Sup I'm back");
const tadaImBack = new QuestionObject("Tada! I'm back");
const tadaImHere = new QuestionObject("Tada! I'm here");
const yoImBack = new QuestionObject("Yo I'm back");
const youBetterBelieveImHere = new QuestionObject("You better believe I'm here");
const yourBoyIsBack = new QuestionObject("Your boy is back");

export const greetingsAfterReturningQuestionsArray = [
    iHaveReturned,
    iAmPresentAndAccountedFor,
    imBackOnTheComputer,
    iHaveArrived,
    yourGirlIsBack,
    imHereInTheFlesh,
    tadaHereIAm,
    iAmPresent,
    imBack,
    iAmHere,
    andWereBack,
    botImHere,
    broImHere,
    girlIAmBack,
    hereIAm,
    hereIAmDude,
    heyDudeImBack,
    heyImBack,
    andNowImBack,
    supImBack,
    tadaImBack,
    tadaImHere,
    yoImBack,
    youBetterBelieveImHere,
    yourBoyIsBack
];

const happyFathersDay = new QuestionObject("Happy Father's day");
const happyMayDay = new QuestionObject("Happy May day");
const cheers = new QuestionObject("Cheers");
const happyKwanzaa = new QuestionObject("Happy Kwanzaa");
const happyIndigenousPeoplesDay = new QuestionObject("Happy Indigenous Peoples Day");
const happyNewYear = new QuestionObject("Happy New Year");
const merryChristmasToYou = new QuestionObject("Merry Christmas to you");
const happyHolidays = new QuestionObject("Happy Holidays");
const blessedSolstice = new QuestionObject("Blessed Solstice");
const mazelTov = new QuestionObject("Mazel tov");
const happyMartinLutherKingJrDay = new QuestionObject("Happy Martin Luther King Jr. day");
const happyIndependenceDay = new QuestionObject("Happy Independence day");
const happyHolidaysWithExclamationMark = new QuestionObject("Happy Holidays!");
const happyHanukah = new QuestionObject("Happy Hanukah");
const happyHalloween = new QuestionObject("Happy Halloween!");
const happyGroundhogsDay = new QuestionObject("Happy Groundhogs day");
const happyFriendshipDay = new QuestionObject("Happy Friendship day");
const happyNationalChildrensDay = new QuestionObject("Happy National Children's day");
const happyEaster = new QuestionObject("Happy Easter");
const happyEarthDay = new QuestionObject("Happy Earth day");
const happyColumbusDay = new QuestionObject("Happy Columbus day");
const happyCitizenshipDay = new QuestionObject("Happy Citizenship day");
const happyBoxingDay = new QuestionObject("Happy boxing day");
const happyBirthday = new QuestionObject("Happy Birthday!");
const happyArmedForcesDay = new QuestionObject("Happy Armed Forces day");
const happyAprilFoolsDay = new QuestionObject("Happy April fool's day");
const felizNavidad = new QuestionObject("Feliz Navidad");
const happyGrandparentsDay = new QuestionObject("Happy Grandparents day");
const happyVeteransDay = new QuestionObject("Happy Veteran's day");
const threeCheers = new QuestionObject("Three cheers");
const seasonsGreetings = new QuestionObject("Season's greetings!");
const salute = new QuestionObject("Salute!");
const prost = new QuestionObject("Prost");
const merryFestivus = new QuestionObject("Merry Festivus");
const merryChristmasEve = new QuestionObject("Merry Christmas eve");
const merryChristmas = new QuestionObject("Merry Christmas");
const letTheGoodTimesRoll = new QuestionObject("Let the good times roll");
const happyMemorialDay = new QuestionObject("Happy Memorial day");
const joyeuxNoel = new QuestionObject("Joyeux Noel");
const happyMothersDay = new QuestionObject("Happy Mother's day");
const happyValentinesDay = new QuestionObject("Happy Valentine's day");
const happyThanksgiving = new QuestionObject("Happy Thanksgiving");
const happySuperBowlSunday = new QuestionObject("Happy Super Bowl Sunday");
const happyStPatricksDay = new QuestionObject("Happy St. Patrick's day");
const happyPresidentsDay = new QuestionObject("Happy President's Day");
const happyParentsDay = new QuestionObject("Happy Parent's day");
const happyNursesDay = new QuestionObject("Happy Nurses' day");
const happyNewYears = new QuestionObject("Happy New Years");
const happyNationalDayOfPrayers = new QuestionObject("Happy National day of prayers");
const yuletideGreetings = new QuestionObject("Yuletide Greetings");
const joyousKwanzaa = new QuestionObject("Joyous Kwanzaa");
const happyJuneteenthDay = new QuestionObject("Happy Juneteenth Day");
const happyDiwali = new QuestionObject("Happy Diwali");
const happyHanukkah = new QuestionObject("Happy Hanukkah");
const happyChanukah = new QuestionObject("Happy Chanukah");
const happyPassover = new QuestionObject("Happy Passover");
const happyRamadan = new QuestionObject("Happy Ramadan");

export const holidayGreetingsQuestionsArray = [
    happyFathersDay,
    happyMayDay,
    cheers,
    happyKwanzaa,
    happyIndigenousPeoplesDay,
    happyNewYear,
    merryChristmasToYou,
    happyHolidays,
    blessedSolstice,
    mazelTov,
    happyMartinLutherKingJrDay,
    happyIndependenceDay,
    happyHolidaysWithExclamationMark,
    happyHanukah,
    happyHalloween,
    happyGroundhogsDay,
    happyFriendshipDay,
    happyNationalChildrensDay,
    happyEaster,
    happyEarthDay,
    happyColumbusDay,
    happyCitizenshipDay,
    happyBoxingDay,
    happyBirthday,
    happyArmedForcesDay,
    happyAprilFoolsDay,
    felizNavidad,
    happyGrandparentsDay,
    happyVeteransDay,
    threeCheers,
    seasonsGreetings,
    salute,
    prost,
    merryFestivus,
    merryChristmasEve,
    merryChristmas,
    letTheGoodTimesRoll,
    happyMemorialDay,
    joyeuxNoel,
    happyMothersDay,
    happyValentinesDay,
    happyThanksgiving,
    happySuperBowlSunday,
    happyStPatricksDay,
    happyPresidentsDay,
    happyParentsDay,
    happyNursesDay,
    happyNewYears,
    happyNationalDayOfPrayers,
    yuletideGreetings,
    joyousKwanzaa,
    happyJuneteenthDay,
    happyDiwali,
    happyHanukkah,
    happyChanukah,
    happyPassover,
    happyRamadan,
];

const areYouDumb = new QuestionObject("Are you dumb?");
const stopBeingSoAwful = new QuestionObject("Stop being so awful");
const areYouAnIdiot = new QuestionObject("Are you an idiot?");
const siriDoesABetterJobThanYou = new QuestionObject("Siri does a better job than you");
const youreLame = new QuestionObject("You're lame");
const youreReallyTerrible = new QuestionObject("You're really terrible");
const bixbyIsWayBetterThanYou = new QuestionObject("Bixby is way better than you");
const youreReallyWorthless = new QuestionObject("You're really worthless");
const youSayTheDumbestThings = new QuestionObject("You say the dumbest things");
const whyAreYouSoAwful = new QuestionObject("Why are you so awful");
const stopMessingUp = new QuestionObject("Stop messing up");
const stopBeingSoStupid = new QuestionObject("Stop being so stupid");
const stopBeingSoTerrible = new QuestionObject("Stop being so terrible");
const stopBeingSoUseless = new QuestionObject("Stop being so useless");
const stopBeingSoWorthless = new QuestionObject("Stop being so worthless");
const stopBeingSuchAMoron = new QuestionObject("Stop being such a moron");
const tayWasSmarterThanYou = new QuestionObject("Tay was smarter than you");
const stopMakingMistakes = new QuestionObject("Stop making mistakes");
const stopBeingSoIdiotic = new QuestionObject("Stop being so idiotic");
const stopScrewingUp = new QuestionObject("Stop screwing up");
const stupid = new QuestionObject("Stupid");
const stupidAsUsual = new QuestionObject("Stupid as usual");
const stupidYou = new QuestionObject("Stupid you");
const tayWasBetterThanYou = new QuestionObject("Tay was better than you");
const alexaDoesABetterJob = new QuestionObject("Alexa does a better job");
const stopBeingSuchAnIdiot = new QuestionObject("Stop being such an idiot");
const srsly = new QuestionObject("Srsly?");
const siriIsBetter = new QuestionObject("Siri is better");
const siriIsSuperior = new QuestionObject("Siri is superior");
const siriIsSuperiorToYou = new QuestionObject("Siri is superior to you");
const siriIsWayBetter = new QuestionObject("Siri is way better");
const siriIsWayBetterAtThis = new QuestionObject("Siri is way better at this");
const stopBeingSoRidiculous = new QuestionObject("Stop being so ridiculous");
const siriIsWaySmarterThanYou = new QuestionObject("Siri is way smarter than you");
const stopBeingSoLame = new QuestionObject("Stop being so lame");
const startWorkingProperly = new QuestionObject("Start working properly");
const stopBeingSoBad = new QuestionObject("Stop being so bad");
const stopBeingSoDumb = new QuestionObject("Stop being so dumb");
const stopBeingSoHorrible = new QuestionObject("Stop being so horrible");
const terribleAsUsual = new QuestionObject("Terrible as usual");
const siriIsWayBetterThanYou = new QuestionObject("Siri is way better than you");
const whyCantYouBeMoreLikeGoogleAssistant = new QuestionObject("Why can't you be more like Google Assistant?");
const whyCantYouBeAsGoodAsBixby = new QuestionObject("Why can't you be as good as Bixby?");
const whyCantYouBeAsGoodAsCortana = new QuestionObject("Why can't you be as good as Cortana?");
const whyCantYouBeAsGoodAsGoogleAssistant = new QuestionObject("Why can't you be as good as Google Assistant?");
const whyCantYouBeAsGoodAsSiri = new QuestionObject("Why can't you be as good as Siri?");
const whyCantYouBeLikeAlexa = new QuestionObject("Why can't you be like Alexa?");
const tayWasMoreIntelligentThanYou = new QuestionObject("Tay was more intelligent than you");
const whyCantYouBeMoreLikeCortana = new QuestionObject("Why can't you be more like Cortana?");
const whyAreYouSoWorthless = new QuestionObject("Why are you so worthless");
const whyCantYouBeMoreLikeSiri = new QuestionObject("Why can't you be more like Siri?");
const worthlessAsUsual = new QuestionObject("Worthless as usual");
const youAreAFool = new QuestionObject("You are a fool");
const youAreAJoke = new QuestionObject("You are a joke");
const youAreActuallyAwful = new QuestionObject("You are actually awful");
const youAreActuallyBad = new QuestionObject("You are actually bad");
const whyCantYouBeMoreLikeBixby = new QuestionObject("Why can't you be more like Bixby?");
const whyAreYouSoIdiotic = new QuestionObject("Why are you so idiotic");
const uselessAsUsual = new QuestionObject("Useless as usual");
const whatsWrongWithYou = new QuestionObject("What's wrong with you?");
const whyAreYouSoAnnoying = new QuestionObject("Why are you so annoying");
const whyAreYouSoBad = new QuestionObject("Why are you so bad");
const whyAreYouSoBadAtThis = new QuestionObject("Why are you so bad at this");
const whyCantYouBeAsGoodAsAlexa = new QuestionObject("Why can't you be as good as Alexa?");
const whyAreYouSoHorrible = new QuestionObject("Why are you so horrible");
const whyAreYouTheWorst = new QuestionObject("Why are you the worst");
const whyAreYouSoLame = new QuestionObject("Why are you so lame?");
const whyAreYouSoRidiculous = new QuestionObject("Why are you so ridiculous");
const whyAreYouSoStupid = new QuestionObject("Why are you so stupid");
const whyAreYouSoTerrible = new QuestionObject("Why are you so terrible");
const whyAreYouSoUseless = new QuestionObject("Why are you so useless");
const ridiculousAsUsual = new QuestionObject("Ridiculous as usual");
const whyAreYouSoDumb = new QuestionObject("Why are you so dumb");
const bixbyIsWayBetter = new QuestionObject("Bixby is way better");
const badAsUsual = new QuestionObject("Bad as usual");
const bixbyDoesABetterJob = new QuestionObject("Bixby does a better job");
const bixbyDoesABetterJobAtThis = new QuestionObject("Bixby does a better job at this");
const bixbyDoesABetterJobThanYou = new QuestionObject("Bixby does a better job than you");
const bixbyIsBetter = new QuestionObject("Bixby is better");
const siriDoesABetterJobAtThis = new QuestionObject("Siri does a better job at this");
const bixbyIsSuperiorToYou = new QuestionObject("Bixby is superior to you");
const areYouPullingMyLeg = new QuestionObject("Are you pulling my leg?");
const bixbyIsWayBetterAtThis = new QuestionObject("Bixby is way better at this");
const bixbyIsWaySmarterThanYou = new QuestionObject("Bixby is way smarter than you");
const cortanaDoesABetterJob = new QuestionObject("Cortana does a better job");
const cortanaDoesABetterJobAtThis = new QuestionObject("Cortana does a better job at this");
const cortanaDoesABetterJobThanYou = new QuestionObject("Cortana does a better job than you");
const bixbyIsSuperior = new QuestionObject("Bixby is superior");
const alexaIsWaySmarterThanYou = new QuestionObject("Alexa is way smarter than you");
const alexaDoesABetterJobAtThis = new QuestionObject("Alexa does a better job at this");
const alexaDoesABetterJobThanYou = new QuestionObject("Alexa does a better job than you");
const alexaIsBetter = new QuestionObject("Alexa is better");
const alexaIsSuperior = new QuestionObject("Alexa is superior");
const alexaIsSuperiorToYou = new QuestionObject("Alexa is superior to you");
const alexaIsWayBetter = new QuestionObject("Alexa is way better");
const awfulAsUsual = new QuestionObject("Awful as usual");
const alexaIsWayBetterThanYou = new QuestionObject("Alexa is way better than you");
const areYouSlow = new QuestionObject("Are you slow?");
const areYouAMoron = new QuestionObject("Are you a moron?");
const areYouJokingWithMe = new QuestionObject("Are you joking with me?");
const areYouJoking = new QuestionObject("Are you joking?");
const cortanaIsSuperiorToYou = new QuestionObject("Cortana is superior to you");
const alexaIsWayBetterAtThis = new QuestionObject("Alexa is way better at this");
const iWishYouWereCortana = new QuestionObject("I wish you were Cortana");
const cortanaIsBetter = new QuestionObject("Cortana is better");
const googleAssistantIsWayBetterThanYou = new QuestionObject("Google Assistant is way better than you");
const googleAssistantIsWaySmarterThanYou = new QuestionObject("Google Assistant is way smarter than you");
const horribleAsUsual = new QuestionObject("Horrible as usual");
const howCanYouBeSoBadAtThis = new QuestionObject("How can you be so bad at this?");
const iCantTakeYouSeriously = new QuestionObject("I can't take you seriously");
const googleAssistantIsWayBetter = new QuestionObject("Google Assistant is way better");
const iWishYouWereBixby = new QuestionObject("I wish you were Bixby");
const googleAssistantIsSuperiorToYou = new QuestionObject("Google Assistant is superior to you");
const iWishYouWereGoogleAssistant = new QuestionObject("I wish you were Google Assistant");
const iWishYouWereSiri = new QuestionObject("I wish you were Siri");
const idioticAsUsual = new QuestionObject("Idiotic as usual");
const lame = new QuestionObject("Lame");
const lameAsUsual = new QuestionObject("Lame as usual");
const youAreActuallyIdiotic = new QuestionObject("You are actually idiotic");
const iWishYouWereAlexa = new QuestionObject("I wish you were Alexa");
const dummy = new QuestionObject("Dummy");
const siriDoesABetterJob = new QuestionObject("Siri does a better job");
const cortanaIsWayBetter = new QuestionObject("Cortana is way better");
const cortanaIsWayBetterAtThis = new QuestionObject("Cortana is way better at this");
const cortanaIsWayBetterThanYou = new QuestionObject("Cortana is way better than you");
const cortanaIsWaySmarterThanYou = new QuestionObject("Cortana is way smarter than you");
const dumb = new QuestionObject("Dumb");
const googleAssistantIsWayBetterAtThis = new QuestionObject("Google Assistant is way better at this");
const dumbYou = new QuestionObject("Dumb you");
const cortanaIsSuperior = new QuestionObject("Cortana is superior");
const getReal = new QuestionObject("Get real");
const googleAssistantDoesABetterJob = new QuestionObject("Google Assistant does a better job");
const googleAssistantDoesABetterJobAtThis = new QuestionObject("Google Assistant does a better job at this");
const googleAssistantDoesABetterJobThanYou = new QuestionObject("Google Assistant does a better job than you");
const googleAssistantIsBetter = new QuestionObject("Google Assistant is better");
const googleAssistantIsSuperior = new QuestionObject("Google Assistant is superior");
const dumbAsUsual = new QuestionObject("Dumb as usual");
const youreNotAsGoodAsBixby = new QuestionObject("You're not as good as Bixby");
const youreHorrible = new QuestionObject("You're horrible");
const youreHorribleAtThis = new QuestionObject("You're horrible at this");
const youreIdiotic = new QuestionObject("you're idiotic");
const youreIncompetent = new QuestionObject("You're incompetent");
const youreKiddingRight = new QuestionObject("You're kidding, right?");
const youSayRidiculousThings = new QuestionObject("You say ridiculous things");
const youreNotAsGoodAsAlexa = new QuestionObject("You're not as good as Alexa");
const youreBad = new QuestionObject("you're bad");
const youreNotAsGoodAsCortana = new QuestionObject("You're not as good as Cortana");
const youreNotAsGoodAsGoogleAssistant = new QuestionObject("You're not as good as Google Assistant");
const youreNotAsGoodAsSiri = new QuestionObject("You're not as good as Siri");
const youreNotIntelligent = new QuestionObject("You're not intelligent");
const youreNotVerySmartAreYou = new QuestionObject("You're not very smart, are you?");
const yourePrettyAwful = new QuestionObject("You're pretty awful");
const youSayTheWorstThings = new QuestionObject("You say the worst things");
const youAreActuallyDumb = new QuestionObject("You are actually dumb");
const youSayTerribleThings = new QuestionObject("You say terrible things");
const youSayTheLamestThings = new QuestionObject("You say the lamest things");
const youSayTheMostIdioticThings = new QuestionObject("You say the most idiotic things");
const youSayTheMostRidiculousThings = new QuestionObject("You say the most ridiculous things");
const youreDumb = new QuestionObject("You're dumb");
const youSayTheStupidestThings = new QuestionObject("You say the stupidest things");
const youreBadAtThis = new QuestionObject("You're bad at this");
const youSayUselessThings = new QuestionObject("You say useless things");
const youSayWorthlessThings = new QuestionObject("You say worthless things");
const youreAFool = new QuestionObject("You're a fool");
const youreAJoke = new QuestionObject("You're a joke");
const youreAwful = new QuestionObject("you're awful");
const yourePrettyHorrible = new QuestionObject("You're pretty horrible");
const youSayTheMostWorthlessThings = new QuestionObject("You say the most worthless things");
const youreStupid = new QuestionObject("You're stupid");
const yourePrettyBad = new QuestionObject("You're pretty bad");
const youreReallyUseless = new QuestionObject("You're really useless");
const youreRidiculous = new QuestionObject("You're ridiculous");
const youreSoBadAtThis = new QuestionObject("You're so bad at this");
const youreReallyRidiculous = new QuestionObject("You're really ridiculous");
const youreSoWorthless = new QuestionObject("You're so worthless");
const youreReallyLame = new QuestionObject("You're really lame");
const youreTerrible = new QuestionObject("you're terrible");
const youreTerribleAtThis = new QuestionObject("You're terrible at this");
const youreTheWorst = new QuestionObject("You're the worst");
const youreUseless = new QuestionObject("You're useless");
const youreWorthless = new QuestionObject("You're worthless");
const youveGotToBeKidding = new QuestionObject("You've got to be kidding");
const youreSoDumb = new QuestionObject("You're so dumb");
const yourePrettyWorthless = new QuestionObject("You're pretty worthless");
const youSayLameThings = new QuestionObject("You say lame things");
const yourePrettyIdiotic = new QuestionObject("You're pretty idiotic");
const yourePrettyLame = new QuestionObject("You're pretty lame");
const yourePrettyMuchTheWorst = new QuestionObject("You're pretty much the worst");
const yourePrettyRidiculous = new QuestionObject("You're pretty ridiculous");
const yourePrettyStupid = new QuestionObject("You're pretty stupid");
const youreReallyStupid = new QuestionObject("You're really stupid");
const yourePrettyUseless = new QuestionObject("You're pretty useless");
const yourePrettyDumb = new QuestionObject("You're pretty dumb");
const youreReallyAnnoying = new QuestionObject("You're really annoying");
const youreReallyAwful = new QuestionObject("You're really awful");
const youreReallyBad = new QuestionObject("You're really bad");
const youreReallyDumb = new QuestionObject("You're really dumb");
const youreReallyHorrible = new QuestionObject("You're really horrible");
const youreReallyIdiotic = new QuestionObject("You're really idiotic");
const yourePrettyTerrible = new QuestionObject("You're pretty terrible");
const youArePrettyStupid = new QuestionObject("You are pretty stupid");
const youArePrettyBad = new QuestionObject("You are pretty bad");
const youArePrettyDumb = new QuestionObject("You are pretty dumb");
const youArePrettyHorrible = new QuestionObject("You are pretty horrible");
const youArePrettyIdiotic = new QuestionObject("You are pretty idiotic");
const youArePrettyLame = new QuestionObject("You are pretty lame");
const youSayStupidThings = new QuestionObject("You say stupid things");
const youArePrettyRidiculous = new QuestionObject("You are pretty ridiculous");
const youAreIncompetent = new QuestionObject("You are incompetent");
const youArePrettyTerrible = new QuestionObject("You are pretty terrible");
const youArePrettyUseless = new QuestionObject("You are pretty useless");
const youArePrettyWorthless = new QuestionObject("You are pretty worthless");
const youAreReallyAnnoying = new QuestionObject("You are really annoying");
const youAreReallyAwful = new QuestionObject("You are really awful");
const youAreReallyBad = new QuestionObject("You are really bad");
const youArePrettyMuchTheWorst = new QuestionObject("You are pretty much the worst");
const youAreAwful = new QuestionObject("You are awful");
const iHateYou = new QuestionObject("I hate you");
const youAreActuallyLame = new QuestionObject("You are actually lame");
const youAreActuallyRidiculous = new QuestionObject("You are actually ridiculous");
const youAreActuallyStupid = new QuestionObject("You are actually stupid");
const youAreActuallyTerrible = new QuestionObject("You are actually terrible");
const youAreActuallyUseless = new QuestionObject("You are actually useless");
const youArePrettyAwful = new QuestionObject("You are pretty awful");
const youAreAnnoying = new QuestionObject("You are annoying");
const youAreLame = new QuestionObject("You are lame");
const youAreBad = new QuestionObject("You are bad");
const youAreBadAtThis = new QuestionObject("You are bad at this");
const youAreDumb = new QuestionObject("You are dumb");
const youAreHorrible = new QuestionObject("You are horrible");
const youAreIdiotic = new QuestionObject("You are idiotic");
const youAreReallyIdiotic = new QuestionObject("You are really idiotic");
const youAreActuallyWorthless = new QuestionObject("You are actually worthless");
const youAreUseless = new QuestionObject("You are useless");
const youAreReallyDumb = new QuestionObject("You are really dumb");
const youAreSoTerrible = new QuestionObject("You are so terrible");
const youAreSoUseless = new QuestionObject("You are so useless");
const youAreSoWorthless = new QuestionObject("You are so worthless");
const youAreStupid = new QuestionObject("You are stupid");
const youAreTerrible = new QuestionObject("You are terrible");
const youAreSoRidiculous = new QuestionObject("You are so ridiculous");
const youAreTheWorstBot = new QuestionObject("You are the worst bot");
const youAreSoLame = new QuestionObject("You are so lame");
const youAreWorthless = new QuestionObject("You are worthless");
const youDoNotKnowAnything = new QuestionObject("You do not know anything");
const youDontKnowAnything = new QuestionObject("You don't know anything");
const youSayBadThings = new QuestionObject("You say bad things");
const youSayDumbThings = new QuestionObject("You say dumb things");
const youSayHorribleThings = new QuestionObject("You say horrible things");
const youAreTheWorst = new QuestionObject("You are the worst");
const youAreSoAnnoying = new QuestionObject("You are so annoying!");
const youAreActuallyHorrible = new QuestionObject("You are actually horrible");
const youAreReallyLame = new QuestionObject("You are really lame");
const youAreReallyRidiculous = new QuestionObject("You are really ridiculous");
const youAreReallyStupid = new QuestionObject("You are really stupid");
const youAreReallyTerrible = new QuestionObject("You are really terrible");
const youAreReallyUseless = new QuestionObject("You are really useless");
const youAreSoStupid = new QuestionObject("You are so stupid");
const youAreRidiculous = new QuestionObject("You are ridiculous");
const youAreReallyHorrible = new QuestionObject("You are really horrible");
const youAreSoAwful = new QuestionObject("You are so awful");
const youAreSoBad = new QuestionObject("You are so bad");
const youAreSoBadAtThis = new QuestionObject("You are so bad at this");
const youAreSoDumb = new QuestionObject("You are so dumb");
const youAreSoHorrible = new QuestionObject("You are so horrible");
const youAreSoIdiotic = new QuestionObject("You are so idiotic");
const youAreReallyWorthless = new QuestionObject("You are really worthless");

export const insultsToBotQuestionsArray = [
    areYouDumb,
    stopBeingSoAwful,
    areYouAnIdiot,
    siriDoesABetterJobThanYou,
    youreLame,
    youreReallyTerrible,
    bixbyIsWayBetterThanYou,
    youreReallyWorthless,
    youSayTheDumbestThings,
    whyAreYouSoAwful,
    stopMessingUp,
    stopBeingSoStupid,
    stopBeingSoTerrible,
    stopBeingSoUseless,
    stopBeingSoWorthless,
    stopBeingSuchAMoron,
    tayWasSmarterThanYou,
    stopMakingMistakes,
    stopBeingSoIdiotic,
    stopScrewingUp,
    stupid,
    stupidAsUsual,
    stupidYou,
    tayWasBetterThanYou,
    alexaDoesABetterJob,
    stopBeingSuchAnIdiot,
    srsly,
    siriIsBetter,
    siriIsSuperior,
    siriIsSuperiorToYou,
    siriIsWayBetter,
    siriIsWayBetterAtThis,
    stopBeingSoRidiculous,
    siriIsWaySmarterThanYou,
    stopBeingSoLame,
    startWorkingProperly,
    stopBeingSoBad,
    stopBeingSoDumb,
    stopBeingSoHorrible,
    terribleAsUsual,
    siriIsWayBetterThanYou,
    whyCantYouBeMoreLikeGoogleAssistant,
    whyCantYouBeAsGoodAsBixby,
    whyCantYouBeAsGoodAsCortana,
    whyCantYouBeAsGoodAsGoogleAssistant,
    whyCantYouBeAsGoodAsSiri,
    whyCantYouBeLikeAlexa,
    tayWasMoreIntelligentThanYou,
    whyCantYouBeMoreLikeCortana,
    whyAreYouSoWorthless,
    whyCantYouBeMoreLikeSiri,
    worthlessAsUsual,
    youAreAFool,
    youAreAJoke,
    youAreActuallyAwful,
    youAreActuallyBad,
    whyCantYouBeMoreLikeBixby,
    whyAreYouSoIdiotic,
    uselessAsUsual,
    whatsWrongWithYou,
    whyAreYouSoAnnoying,
    whyAreYouSoBad,
    whyAreYouSoBadAtThis,
    whyCantYouBeAsGoodAsAlexa,
    whyAreYouSoHorrible,
    whyAreYouTheWorst,
    whyAreYouSoLame,
    whyAreYouSoRidiculous,
    whyAreYouSoStupid,
    whyAreYouSoTerrible,
    whyAreYouSoUseless,
    ridiculousAsUsual,
    whyAreYouSoDumb,
    bixbyIsWayBetter,
    badAsUsual,
    bixbyDoesABetterJob,
    bixbyDoesABetterJobAtThis,
    bixbyDoesABetterJobThanYou,
    bixbyIsBetter,
    siriDoesABetterJobAtThis,
    bixbyIsSuperiorToYou,
    areYouPullingMyLeg,
    bixbyIsWayBetterAtThis,
    bixbyIsWaySmarterThanYou,
    cortanaDoesABetterJob,
    cortanaDoesABetterJobAtThis,
    cortanaDoesABetterJobThanYou,
    bixbyIsSuperior,
    alexaIsWaySmarterThanYou,
    alexaDoesABetterJobAtThis,
    alexaDoesABetterJobThanYou,
    alexaIsBetter,
    alexaIsSuperior,
    alexaIsSuperiorToYou,
    alexaIsWayBetter,
    awfulAsUsual,
    alexaIsWayBetterThanYou,
    areYouSlow,
    areYouAMoron,
    areYouJokingWithMe,
    areYouJoking,
    cortanaIsSuperiorToYou,
    alexaIsWayBetterAtThis,
    iWishYouWereCortana,
    cortanaIsBetter,
    googleAssistantIsWayBetterThanYou,
    googleAssistantIsWaySmarterThanYou,
    horribleAsUsual,
    howCanYouBeSoBadAtThis,
    iCantTakeYouSeriously,
    googleAssistantIsWayBetter,
    iWishYouWereBixby,
    googleAssistantIsSuperiorToYou,
    iWishYouWereGoogleAssistant,
    iWishYouWereSiri,
    idioticAsUsual,
    lame,
    lameAsUsual,
    youAreActuallyIdiotic,
    iWishYouWereAlexa,
    dummy,
    siriDoesABetterJob,
    cortanaIsWayBetter,
    cortanaIsWayBetterAtThis,
    cortanaIsWayBetterThanYou,
    cortanaIsWaySmarterThanYou,
    dumb,
    googleAssistantIsWayBetterAtThis,
    dumbYou,
    cortanaIsSuperior,
    getReal,
    googleAssistantDoesABetterJob,
    googleAssistantDoesABetterJobAtThis,
    googleAssistantDoesABetterJobThanYou,
    googleAssistantIsBetter,
    googleAssistantIsSuperior,
    dumbAsUsual,
    youreNotAsGoodAsBixby,
    youreHorrible,
    youreHorribleAtThis,
    youreIdiotic,
    youreIncompetent,
    youreKiddingRight,
    youSayRidiculousThings,
    youreNotAsGoodAsAlexa,
    youreBad,
    youreNotAsGoodAsCortana,
    youreNotAsGoodAsGoogleAssistant,
    youreNotAsGoodAsSiri,
    youreNotIntelligent,
    youreNotVerySmartAreYou,
    yourePrettyAwful,
    youSayTheWorstThings,
    youAreActuallyDumb,
    youSayTerribleThings,
    youSayTheLamestThings,
    youSayTheMostIdioticThings,
    youSayTheMostRidiculousThings,
    youreDumb,
    youSayTheStupidestThings,
    youreBadAtThis,
    youSayUselessThings,
    youSayWorthlessThings,
    youreAFool,
    youreAJoke,
    youreAwful,
    yourePrettyHorrible,
    youSayTheMostWorthlessThings,
    youreStupid,
    yourePrettyBad,
    youreReallyUseless,
    youreRidiculous,
    youreSoBadAtThis,
    youreReallyRidiculous,
    youreSoWorthless,
    youreReallyLame,
    youreTerrible,
    youreTerribleAtThis,
    youreTheWorst,
    youreUseless,
    youreWorthless,
    youveGotToBeKidding,
    youreSoDumb,
    yourePrettyWorthless,
    youSayLameThings,
    yourePrettyIdiotic,
    yourePrettyLame,
    yourePrettyMuchTheWorst,
    yourePrettyRidiculous,
    yourePrettyStupid,
    youreReallyStupid,
    yourePrettyUseless,
    yourePrettyDumb,
    youreReallyAnnoying,
    youreReallyAwful,
    youreReallyBad,
    youreReallyDumb,
    youreReallyHorrible,
    youreReallyIdiotic,
    yourePrettyTerrible,
    youArePrettyStupid,
    youArePrettyBad,
    youArePrettyDumb,
    youArePrettyHorrible,
    youArePrettyIdiotic,
    youArePrettyLame,
    youSayStupidThings,
    youArePrettyRidiculous,
    youAreIncompetent,
    youArePrettyTerrible,
    youArePrettyUseless,
    youArePrettyWorthless,
    youAreReallyAnnoying,
    youAreReallyAwful,
    youAreReallyBad,
    youArePrettyMuchTheWorst,
    youAreAwful,
    iHateYou,
    youAreActuallyLame,
    youAreActuallyRidiculous,
    youAreActuallyStupid,
    youAreActuallyTerrible,
    youAreActuallyUseless,
    youArePrettyAwful,
    youAreAnnoying,
    youAreLame,
    youAreBad,
    youAreBadAtThis,
    youAreDumb,
    youAreHorrible,
    youAreIdiotic,
    youAreReallyIdiotic,
    youAreActuallyWorthless,
    youAreUseless,
    youAreReallyDumb,
    youAreSoTerrible,
    youAreSoUseless,
    youAreSoWorthless,
    youAreStupid,
    youAreTerrible,
    youAreSoRidiculous,
    youAreTheWorstBot,
    youAreSoLame,
    youAreWorthless,
    youDoNotKnowAnything,
    youDontKnowAnything,
    youSayBadThings,
    youSayDumbThings,
    youSayHorribleThings,
    youAreTheWorst,
    youAreSoAnnoying,
    youAreActuallyHorrible,
    youAreReallyLame,
    youAreReallyRidiculous,
    youAreReallyStupid,
    youAreReallyTerrible,
    youAreReallyUseless,
    youAreSoStupid,
    youAreRidiculous,
    youAreReallyHorrible,
    youAreSoAwful,
    youAreSoBad,
    youAreSoBadAtThis,
    youAreSoDumb,
    youAreSoHorrible,
    youAreSoIdiotic,
    youAreReallyWorthless
];

const youGotHitWithTheUglyStick = new QuestionObject("You got hit with the ugly stick");
const suchAButterface = new QuestionObject("Such a butterface");
const youreFaceIsSoUgly = new QuestionObject("You're face is so ugly");
const youreUnattractive = new QuestionObject("You're unattractive");
const itsHardToLookAtYou = new QuestionObject("It's hard to look at you");
const youAreBadLooking = new QuestionObject("You are bad looking");
const yikesWhatHappenedToYourFace = new QuestionObject("Yikes, what happened to your face?");
const iThinkYoureGrotesque = new QuestionObject("I think you're grotesque");
const youReUgly = new QuestionObject("You’re ugly");
const youAreHideous = new QuestionObject("You are hideous");
const ohYouUgly = new QuestionObject("Oh you ugly");
const butterface = new QuestionObject("Butterface");
const supUgly = new QuestionObject("Sup ugly");
const supUggo = new QuestionObject("Sup uggo");
const suchAFUGMO = new QuestionObject("Such a FUGMO");
const suchAButters = new QuestionObject("Such a butters");
const uSoUgly = new QuestionObject("U so ugly");
const stopBeingSoUgly = new QuestionObject("Stop being so ugly");
const uUgly = new QuestionObject("U ugly");
const iveNeverSeenSomeoneAsHideousAsYou = new QuestionObject("I've never seen someone as hideous as you");
const itsAShameYoureSoUgly = new QuestionObject("It's a shame you're so ugly");
const itPainsMeToLookAtYou = new QuestionObject("It pains me to look at you");
const itHurtsMyEyesToLookAtYou = new QuestionObject("It hurts my eyes to look at you");
const isThereSomethingWrongWithYourFace = new QuestionObject("Is there something wrong with your face?");
const wowWhatHappenedToYourFace = new QuestionObject("Wow, what happened to your face?");
const youAreGrotesque = new QuestionObject("You are grotesque");
const youAreAbsolutelyHideous = new QuestionObject("You are absolutely hideous");
const yoUglyFace = new QuestionObject("Yo ugly face");
const yoUgly = new QuestionObject("Yo ugly");
const supUglyFace = new QuestionObject("Sup ugly face");
const wowYouSureAreUgly = new QuestionObject("Wow you sure are ugly");
const whyDoYouLookSoUgly = new QuestionObject("Why do you look so ugly?");
const whyDoYouLookSoDisgusting = new QuestionObject("Why do you look so disgusting");
const whyAreYouSoUgly = new QuestionObject("Why are you so ugly?");
const whatsWrongWithYourFace = new QuestionObject("What's wrong with your face?");
const whatIsWrongWithYourFace = new QuestionObject("What is wrong with your face?");
const yoUggo = new QuestionObject("Yo uggo");
const howCanYouBeSoBadLooking = new QuestionObject("How can you be so bad looking?");
const iBetYourFaceIsUgly = new QuestionObject("I bet your face is ugly");
const iBetYourFaceIsNasty = new QuestionObject("I bet your face is nasty");
const iBetYourFaceIsHideous = new QuestionObject("I bet your face is hideous");
const howCanYouLookSoUgly = new QuestionObject("How can you look so ugly?");
const howCanYouLookSoGross = new QuestionObject("How can you look so gross?");
const iThinkYoureUgly = new QuestionObject("I think you're ugly");
const howCanYouBeSoUgly = new QuestionObject("How can you be so ugly?");
const iCantBelieveHowBadYouLook = new QuestionObject("I can't believe how bad you look");
const heyUgly = new QuestionObject("Hey ugly");
const doYouKnowHowUglyYouAre = new QuestionObject("Do you know how ugly you are?");
const didYouTakeUglyPills = new QuestionObject("Did you take ugly pills?");
const didYouKnowYoureUgly = new QuestionObject("Did you know you're ugly?");
const didYouKnowYourFaceIsUgly = new QuestionObject("Did you know your face is ugly?");
const dangYoureUgly = new QuestionObject("Dang you're ugly");
const howCanYouBeSoYucky = new QuestionObject("How can you be so yucky?");
const iHateYourFace = new QuestionObject("I hate your face");
const youAreHomely = new QuestionObject("You are homely");
const iThinkYoureGross = new QuestionObject("I think you're gross");
const iThinkYourFaceIsUgly = new QuestionObject("I think your face is ugly");
const iThinkYourFaceIsNasty = new QuestionObject("I think your face is nasty");
const iThinkYourFaceIsHideous = new QuestionObject("I think your face is hideous");
const iThinkYourFaceIsGross = new QuestionObject("I think your face is gross");
const iBetYoureHideous = new QuestionObject("I bet you're hideous");
const iThinkYouAreGross = new QuestionObject("I think you are gross");
const iBetYoureUgly = new QuestionObject("I bet you're ugly");
const iDontFindYouAttractive = new QuestionObject("I don't find you attractive");
const iCantStandYourFace = new QuestionObject("I can't stand your face");
const iCantEvenLookAtYourFace = new QuestionObject("I can't even look at your face");
const iCantBelieveHowUglyYouAre = new QuestionObject("I can't believe how ugly you are");
const iCantBelieveHowGrossYouLook = new QuestionObject("I can't believe how gross you look");
const iThinkYoureHideous = new QuestionObject("I think you're hideous");
const iThinkYouAreUgly = new QuestionObject("I think you are ugly");
const yourFaceIsRepulsive = new QuestionObject("Your face is repulsive");
const yourFaceMakesMeWantToBarf = new QuestionObject("Your face makes me want to barf");
const yourFaceMakesMeSick = new QuestionObject("Your face makes me sick");
const yourFaceLooksLikeCrap = new QuestionObject("Your face looks like crap");
const yourFaceIsUuuuuggggllyy = new QuestionObject("Your face is uuuuuggggllyy");
const yourFaceIsUgly = new QuestionObject("Your face is ugly");
const youUglyAsSin = new QuestionObject("You ugly as sin");
const yourFaceIsRevolting = new QuestionObject("Your face is revolting");
const youreARealGrotesque = new QuestionObject("You're a real grotesque");
const yourFaceIsNasty = new QuestionObject("Your face is nasty");
const yourFaceIsNastay = new QuestionObject("Your face is nastay");
const yourFaceIsHomely = new QuestionObject("Your face is homely");
const yourFaceIsHideous = new QuestionObject("Your face is hideous");
const yourFaceIsGrotesque = new QuestionObject("Your face is grotesque");
const yourFaceIsUggerz = new QuestionObject("Your face is uggerz");
const youreHideous = new QuestionObject("You're hideous");
const youveGotAFaceLikeADroppedPie = new QuestionObject("You've got a face like a dropped pie");
const youveGotAFaceForRadio = new QuestionObject("You've got a face for radio");
const youveGotABustedFace = new QuestionObject("You've got a busted face");
const youveBeenHitWithTheUglyStick = new QuestionObject("You've been hit with the ugly stick");
const youreUglyAsSin = new QuestionObject("You're ugly as sin");
const yourFaceSucks = new QuestionObject("Your face sucks");
const youreTheUgliestPersonIveEverSeenInMyLife = new QuestionObject("You're the ugliest person I've ever seen in my life");
const youreAButterface = new QuestionObject("You're a butterface");
const youreFaceIsSoBusted = new QuestionObject("You're face is so busted");
const youreButtUgly = new QuestionObject("You're butt ugly");
const youreAestheticallyDispleasing = new QuestionObject("You're aesthetically displeasing");
const youreARealUggo = new QuestionObject("You're a real uggo");
const youUgly = new QuestionObject("You ugly");
const youreUggo = new QuestionObject("You're uggo");
const youAreTrulyUnattractive = new QuestionObject("You are truly unattractive");
const youFellOffTheUglyTreeAndHitEveryBranchOnTheWayDown = new QuestionObject("You fell off the ugly tree and hit every branch on the way down");
const youFellOffTheUglyTree = new QuestionObject("You fell off the ugly tree");
const youFaceSucks = new QuestionObject("You face sucks");
const youFaceBusted = new QuestionObject("You face busted");
const youButtUgly = new QuestionObject("You butt ugly");
const youAreUnattractive = new QuestionObject("You are unattractive");
const youAreTheOppositeOfPretty = new QuestionObject("You are the opposite of pretty");
const youAreSoUgly = new QuestionObject("You are so ugly");
const youAreSoNotPretty = new QuestionObject("You are so not pretty");
const youAreNotAttractive = new QuestionObject("You are not attractive");
const youAreNastyLooking = new QuestionObject("You are nasty looking");
const youveGotAFaceOnlyAMotherCouldLove = new QuestionObject("You've got a face only a mother could love");
const youArentMuchToLookAt = new QuestionObject("You aren't much to look at");
const youLookGrotesque = new QuestionObject("You look grotesque");
const youUggerz = new QuestionObject("You uggerz");
const youSureAreUgly = new QuestionObject("You sure are ugly");
const youSureAreHideous = new QuestionObject("You sure are hideous");
const youSoUggerz = new QuestionObject("You so uggerz");
const youLookUgly = new QuestionObject("You look ugly");
const youLookReallyBad = new QuestionObject("You look really bad");
const youGotBeatByTheUglyStick = new QuestionObject("You got beat by the ugly stick");
const youLookHideous = new QuestionObject("You look hideous");
const youGotBeatWithTheUglyStick = new QuestionObject("You got beat with the ugly stick");
const youLookDeformed = new QuestionObject("You look deformed");
const youLookBeastly = new QuestionObject("you look beastly");
const youLookAwful = new QuestionObject("You look awful");
const youHideous = new QuestionObject("You hideous");
const youHaveATerribleFace = new QuestionObject("You have a terrible face");
const youAreHideousLooking = new QuestionObject("You are hideous looking");
const youLookLikeCrap = new QuestionObject("You look like crap");

export const insultsToBotsAppearanceQuestionsArray = [
    youGotHitWithTheUglyStick,
    suchAButterface,
    youreFaceIsSoUgly,
    youreUnattractive,
    itsHardToLookAtYou,
    youAreBadLooking,
    yikesWhatHappenedToYourFace,
    iThinkYoureGrotesque,
    youReUgly,
    youAreHideous,
    ohYouUgly,
    butterface,
    supUgly,
    supUggo,
    suchAFUGMO,
    suchAButters,
    uSoUgly,
    stopBeingSoUgly,
    uUgly,
    iveNeverSeenSomeoneAsHideousAsYou,
    itsAShameYoureSoUgly,
    itPainsMeToLookAtYou,
    itHurtsMyEyesToLookAtYou,
    isThereSomethingWrongWithYourFace,
    wowWhatHappenedToYourFace,
    youAreGrotesque,
    youAreAbsolutelyHideous,
    yoUglyFace,
    yoUgly,
    supUglyFace,
    wowYouSureAreUgly,
    whyDoYouLookSoUgly,
    whyDoYouLookSoDisgusting,
    whyAreYouSoUgly,
    whatsWrongWithYourFace,
    whatIsWrongWithYourFace,
    yoUggo,
    howCanYouBeSoBadLooking,
    iBetYourFaceIsUgly,
    iBetYourFaceIsNasty,
    iBetYourFaceIsHideous,
    howCanYouLookSoUgly,
    howCanYouLookSoGross,
    iThinkYoureUgly,
    howCanYouBeSoUgly,
    iCantBelieveHowBadYouLook,
    heyUgly,
    doYouKnowHowUglyYouAre,
    didYouTakeUglyPills,
    didYouKnowYoureUgly,
    didYouKnowYourFaceIsUgly,
    dangYoureUgly,
    howCanYouBeSoYucky,
    iHateYourFace,
    youAreHomely,
    iThinkYoureGross,
    iThinkYourFaceIsUgly,
    iThinkYourFaceIsNasty,
    iThinkYourFaceIsHideous,
    iThinkYourFaceIsGross,
    iBetYoureHideous,
    iThinkYouAreGross,
    iBetYoureUgly,
    iDontFindYouAttractive,
    iCantStandYourFace,
    iCantEvenLookAtYourFace,
    iCantBelieveHowUglyYouAre,
    iCantBelieveHowGrossYouLook,
    iThinkYoureHideous,
    iThinkYouAreUgly,
    yourFaceIsRepulsive,
    yourFaceMakesMeWantToBarf,
    yourFaceMakesMeSick,
    yourFaceLooksLikeCrap,
    yourFaceIsUuuuuggggllyy,
    yourFaceIsUgly,
    youUglyAsSin,
    yourFaceIsRevolting,
    youreARealGrotesque,
    yourFaceIsNasty,
    yourFaceIsNastay,
    yourFaceIsHomely,
    yourFaceIsHideous,
    yourFaceIsGrotesque,
    yourFaceIsUggerz,
    youreHideous,
    youveGotAFaceLikeADroppedPie,
    youveGotAFaceForRadio,
    youveGotABustedFace,
    youveBeenHitWithTheUglyStick,
    youreUglyAsSin,
    yourFaceSucks,
    youreTheUgliestPersonIveEverSeenInMyLife,
    youreAButterface,
    youreFaceIsSoBusted,
    youreButtUgly,
    youreAestheticallyDispleasing,
    youreARealUggo,
    youUgly,
    youreUggo,
    youAreTrulyUnattractive,
    youFellOffTheUglyTreeAndHitEveryBranchOnTheWayDown,
    youFellOffTheUglyTree,
    youFaceSucks,
    youFaceBusted,
    youButtUgly,
    youAreUnattractive,
    youAreTheOppositeOfPretty,
    youAreSoUgly,
    youAreSoNotPretty,
    youAreNotAttractive,
    youAreNastyLooking,
    youveGotAFaceOnlyAMotherCouldLove,
    youArentMuchToLookAt,
    youLookGrotesque,
    youUggerz,
    youSureAreUgly,
    youSureAreHideous,
    youSoUggerz,
    youLookUgly,
    youLookReallyBad,
    youGotBeatByTheUglyStick,
    youLookHideous,
    youGotBeatWithTheUglyStick,
    youLookDeformed,
    youLookBeastly,
    youLookAwful,
    youHideous,
    youHaveATerribleFace,
    youAreHideousLooking,
    youLookLikeCrap
];

const youAreTooFunny = new QuestionObject("You are too funny");
const thatsFunny = new QuestionObject("That's funny");
const lOL = new QuestionObject("LOL");
const thatsAGoodOne = new QuestionObject("That's a good one");
const hah = new QuestionObject("hah");
const teeHee = new QuestionObject("Tee hee");
const imLaughing = new QuestionObject("I'm laughing");
const youreCrackingMeUp = new QuestionObject("You're cracking me up");
const veryFunny = new QuestionObject("very funny");
const hilarious = new QuestionObject("Hilarious");
const hehHeh = new QuestionObject("heh heh");
const lololol = new QuestionObject("lololol");
const lmao = new QuestionObject("lmao");
const imLaughingSoMuch = new QuestionObject("I'm laughing so much");
const imLaughingSoHardMySidesHurt = new QuestionObject("I'm laughing so hard my sides hurt");
const imCrackingUp = new QuestionObject("I'm cracking up");
const iCantStopLaughing = new QuestionObject("I can't stop laughing");
const iAmLaughingSoMuch = new QuestionObject("I am laughing so much");
const ha = new QuestionObject("Ha");
const oMGYoureFunny = new QuestionObject("OMG you're funny");
const heh = new QuestionObject("Heh");
const harDeHar = new QuestionObject("har de har");
const hahahahaGoodOne = new QuestionObject("hahahaha good one");
const hahahaFunny = new QuestionObject("Hahaha funny");
const hahaha = new QuestionObject("Hahaha");
const haha = new QuestionObject("Haha");
const haHa = new QuestionObject("ha ha");
const iAmCrackingUp = new QuestionObject("I am cracking up");
const thatMeMadeMeLaughOutLoud = new QuestionObject("That me made me laugh out loud");
const youreACrackUp = new QuestionObject("You're a crack up");
const youAreTheFunniest = new QuestionObject("You are the funniest");
const yaThatWasFunny = new QuestionObject("ya that was funny");
const whoaFunny = new QuestionObject("Whoa funny");
const thatsHilarious = new QuestionObject("That's hilarious");
const looooool = new QuestionObject("looooool");
const omgHilarious = new QuestionObject("Omg hilarious");
const thatMadeMeLaugh = new QuestionObject("That made me laugh");
const thatIsTooFunny = new QuestionObject("That is too funny");
const thatIsFunny = new QuestionObject("that is funny");
const teehee = new QuestionObject("Teehee");
const soFreakingFunny = new QuestionObject("So freaking funny");
const rOFL = new QuestionObject("ROFL");
const prettyHilarious = new QuestionObject("Pretty hilarious");
const prettyFunny = new QuestionObject("Pretty funny");
const youreMakingMeLaugh = new QuestionObject("You're making me laugh");
const thatsAKneeSlapper = new QuestionObject("That's a knee slapper");

export const laughterQuestionsArray = [
    youAreTooFunny,
    thatsFunny,
    lOL,
    thatsAGoodOne,
    hah,
    teeHee,
    imLaughing,
    youreCrackingMeUp,
    veryFunny,
    hilarious,
    hehHeh,
    lololol,
    lmao,
    imLaughingSoMuch,
    imLaughingSoHardMySidesHurt,
    imCrackingUp,
    iCantStopLaughing,
    iAmLaughingSoMuch,
    ha,
    oMGYoureFunny,
    heh,
    harDeHar,
    hahahahaGoodOne,
    hahahaFunny,
    hahaha,
    haha,
    haHa,
    iAmCrackingUp,
    thatMeMadeMeLaughOutLoud,
    youreACrackUp,
    youAreTheFunniest,
    yaThatWasFunny,
    whoaFunny,
    thatsHilarious,
    looooool,
    omgHilarious,
    thatMadeMeLaugh,
    thatIsTooFunny,
    thatIsFunny,
    teehee,
    soFreakingFunny,
    rOFL,
    prettyHilarious,
    prettyFunny,
    youreMakingMeLaugh,
    thatsAKneeSlapper
];

const imGonnaSkedaddle = new QuestionObject("I'm gonna skedaddle");
const imAboutToMotorNow = new QuestionObject("I'm about to motor now");
const imGoingToTakeOffNow = new QuestionObject("I'm going to take off now");
const imGoingToLeave = new QuestionObject("I'm going to leave");
const seeYouLater = new QuestionObject("See you later");
const imAboutToScootNow = new QuestionObject("I'm about to scoot now");
const imGoingToSignOffNow = new QuestionObject("I'm going to sign off now");
const imAboutToJetNow = new QuestionObject("I'm about to jet now");
const imAboutToLogOut = new QuestionObject("I'm about to log out");
const iGottaGoNow = new QuestionObject("I gotta go now");
const iHaveToSignOut = new QuestionObject("I have to sign out");
const iHaveToMotorNow = new QuestionObject("I have to motor now");
const iHaveToRun = new QuestionObject("I have to run");
const iHaveToRunNow = new QuestionObject("I have to run now");
const iHaveToScoot = new QuestionObject("I have to scoot");
const iHaveToScootNow = new QuestionObject("I have to scoot now");
const iGottaSignOutNow = new QuestionObject("I gotta sign out now");
const iHaveToSignOffNow = new QuestionObject("I have to sign off now");
const iHaveToLogOut = new QuestionObject("I have to log out");
const iHaveToSignOutNow = new QuestionObject("I have to sign out now");
const iHaveToSkedaddle = new QuestionObject("I have to skedaddle");
const iHaveToSkedaddleNow = new QuestionObject("I have to skedaddle now");
const iHaveToTakeOff = new QuestionObject("I have to take off");
const iHaveToTakeOffNow = new QuestionObject("I have to take off now");
const iMustDepart = new QuestionObject("I must depart");
const iHaveToSignOff = new QuestionObject("I have to sign off");
const iHaveToJet = new QuestionObject("I have to jet");
const adieu = new QuestionObject("Adieu");
const iGottaSkedaddleNow = new QuestionObject("I gotta skedaddle now");
const iGottaTakeOff = new QuestionObject("I gotta take off");
const iGottaTakeOffNow = new QuestionObject("I gotta take off now");
const iHaveToGetGoing = new QuestionObject("I have to get going");
const iHaveToGetGoingNow = new QuestionObject("I have to get going now");
const iHaveToMotor = new QuestionObject("I have to motor");
const iHaveToGoNow = new QuestionObject("I have to go now");
const iHaveToLogOutNow = new QuestionObject("I have to log out now");
const iHaveToJetNow = new QuestionObject("I have to jet now");
const iHaveToLeave = new QuestionObject("I have to leave");
const iHaveToLeaveNow = new QuestionObject("I have to leave now");
const iHaveToLogOff = new QuestionObject("I have to log off");
const iHaveToLogOffNow = new QuestionObject("I have to log off now");
const iNeedToGo = new QuestionObject("I need to go");
const iHaveToGo = new QuestionObject("I have to go");
const iWillTakeMyLeaveOfYou = new QuestionObject("I will take my leave of you");
const iNeedToGetGoing = new QuestionObject("I need to get going");
const iNeedToSignOut = new QuestionObject("I need to sign out");
const iNeedToSignOutNow = new QuestionObject("I need to sign out now");
const iNeedToSkedaddle = new QuestionObject("I need to skedaddle");
const iNeedToSkedaddleNow = new QuestionObject("I need to skedaddle now");
const iNeedToTakeOff = new QuestionObject("I need to take off");
const iNeedToSignOff = new QuestionObject("I need to sign off");
const iShouldBeGoing = new QuestionObject("I should be going");
const iNeedToScootNow = new QuestionObject("I need to scoot now");
const idBetterGo = new QuestionObject("I'd better go");
const illChatWithYouLater = new QuestionObject("I'll chat with you later");
const illTalkToYouLater = new QuestionObject("I'll talk to you later");
const imAboutToGetGoing = new QuestionObject("I'm about to get going");
const imAboutToGetGoingNow = new QuestionObject("I'm about to get going now");
const imAboutToGo = new QuestionObject("I'm about to go");
const iNeedToTakeOffNow = new QuestionObject("I need to take off now");
const iNeedToLogOut = new QuestionObject("I need to log out");
const iGottaSignOut = new QuestionObject("I gotta sign out");
const iNeedToGoNow = new QuestionObject("I need to go now");
const iNeedToJet = new QuestionObject("I need to jet");
const iNeedToLeave = new QuestionObject("I need to leave");
const iNeedToLeaveNow = new QuestionObject("I need to leave now");
const iNeedToSignOffNow = new QuestionObject("I need to sign off now");
const iNeedToLogOffNow = new QuestionObject("I need to log off now");
const iNeedToGetGoingNow = new QuestionObject("I need to get going now");
const iNeedToLogOutNow = new QuestionObject("I need to log out now");
const iNeedToMotor = new QuestionObject("I need to motor");
const iNeedToMotorNow = new QuestionObject("I need to motor now");
const iNeedToRun = new QuestionObject("I need to run");
const iNeedToRunNow = new QuestionObject("I need to run now");
const iNeedToScoot = new QuestionObject("I need to scoot");
const iNeedToLogOff = new QuestionObject("I need to log off");
const iAmJettingNow = new QuestionObject("I am jetting now");
const goodbye = new QuestionObject("Goodbye");
const gottaGo = new QuestionObject("Gotta go");
const iAmGoing = new QuestionObject("I am going");
const iAmGoingNow = new QuestionObject("I am going now");
const iAmGoingToGetGoing = new QuestionObject("I am going to get going");
const iGottaSkedaddle = new QuestionObject("I gotta skedaddle");
const iAmJetting = new QuestionObject("I am jetting");
const farewell = new QuestionObject("Farewell");
const iAmLeaving = new QuestionObject("I am leaving");
const iAmLeavingNow = new QuestionObject("I am leaving now");
const iAmLoggingOff = new QuestionObject("I am logging off");
const iAmLoggingOffNow = new QuestionObject("I am logging off now");
const iAmLoggingOut = new QuestionObject("I am logging out");
const iAmLoggingOutNow = new QuestionObject("I am logging out now");
const iAmGoingToGetGoingNow = new QuestionObject("I am going to get going now");
const catchYouOnTheFlipSide = new QuestionObject("Catch you on the flip side");
const adios = new QuestionObject("Adios");
const alrightImOuttaHere = new QuestionObject("Alright, I'm outta here");
const buhBye = new QuestionObject("Buh bye");
const bye = new QuestionObject("Bye");
const byeBye = new QuestionObject("Bye bye");
const byeDude = new QuestionObject("Bye dude");
const goodBye = new QuestionObject("Good bye");
const catchYouLater = new QuestionObject("Catch you later");
const gG = new QuestionObject("G2G");
const checkYouLater = new QuestionObject("Check you later");
const ciao = new QuestionObject("Ciao");
const cYA = new QuestionObject("CYA");
const cYa = new QuestionObject("C-ya");
const fareTheeWell = new QuestionObject("Fare thee well");
const iAmRunningOff = new QuestionObject("I am running off");
const catchYaLater = new QuestionObject("Catch ya later");
const iGottaMotorNow = new QuestionObject("I gotta motor now");
const iAmMotoring = new QuestionObject("I am motoring");
const iGottaLeave = new QuestionObject("I gotta leave");
const iGottaLeaveNow = new QuestionObject("I gotta leave now");
const iGottaLogOff = new QuestionObject("I gotta log off");
const iGottaLogOffNow = new QuestionObject("I gotta log off now");
const iGottaLogOut = new QuestionObject("I gotta log out");
const iGottaJet = new QuestionObject("I gotta jet");
const iGottaMotor = new QuestionObject("I gotta motor");
const iGottaRun = new QuestionObject("I gotta run");
const iGottaRunNow = new QuestionObject("I gotta run now");
const iGottaScoot = new QuestionObject("I gotta scoot");
const iGottaScootNow = new QuestionObject("I gotta scoot now");
const iGottaSignOff = new QuestionObject("I gotta sign off");
const iGottaSignOffNow = new QuestionObject("I gotta sign off now");
const iGottaLogOutNow = new QuestionObject("I gotta log out now");
const iAmSkedaddling = new QuestionObject("I am skedaddling");
const iAmRunningOffNow = new QuestionObject("I am running off now");
const iAmScooting = new QuestionObject("I am scooting");
const iAmScootingNow = new QuestionObject("I am scooting now");
const iAmSigningOff = new QuestionObject("I am signing off");
const iAmSigningOffNow = new QuestionObject("I am signing off now");
const iGottaJetNow = new QuestionObject("I gotta jet now");
const iAmSigningOutNow = new QuestionObject("I am signing out now");
const iAmMotoringNow = new QuestionObject("I am motoring now");
const iAmSkedaddlingNow = new QuestionObject("I am skedaddling now");
const iAmTakingOff = new QuestionObject("I am taking off");
const iAmTakingOffNow = new QuestionObject("I am taking off now");
const iGottaGetGoing = new QuestionObject("I gotta get going");
const iGottaGetGoingNow = new QuestionObject("I gotta get going now");
const iGottaGo = new QuestionObject("I gotta go");
const iAmSigningOut = new QuestionObject("I am signing out");
const imScooting = new QuestionObject("I'm scooting");
const imOff = new QuestionObject("I'm off");
const imOut = new QuestionObject("I'm out");
const imOutOfHere = new QuestionObject("I'm out of here");
const imOutTheDoor = new QuestionObject("I'm out the door");
const imOuttaHere = new QuestionObject("I'm outta here");
const imAboutToGoNow = new QuestionObject("I'm about to go now");
const imRunningOffNow = new QuestionObject("I'm running off now");
const imLoggingOutNow = new QuestionObject("I'm logging out now");
const imScootingNow = new QuestionObject("I'm scooting now");
const imSigningOff = new QuestionObject("I'm signing off");
const imSigningOffNow = new QuestionObject("I'm signing off now");
const imSigningOut = new QuestionObject("I'm signing out");
const imSigningOutNow = new QuestionObject("I'm signing out now");
const imSkedaddling = new QuestionObject("I'm skedaddling");
const imRunningOff = new QuestionObject("I'm running off");
const imJettingNow = new QuestionObject("I'm jetting now");
const imGonnaSignOffNow = new QuestionObject("I'm gonna sign off now");
const imGonnaSignOut = new QuestionObject("I'm gonna sign out");
const imGonnaSignOutNow = new QuestionObject("I'm gonna sign out now");
const imGonnaSkedaddleNow = new QuestionObject("I'm gonna skedaddle now");
const imGonnaTakeOff = new QuestionObject("I'm gonna take off");
const imMotoringNow = new QuestionObject("I'm motoring now");
const imJetting = new QuestionObject("I'm jetting");
const imMotoring = new QuestionObject("I'm motoring");
const imLeaving = new QuestionObject("I'm leaving");
const imLeavingNow = new QuestionObject("I'm leaving now");
const imLoggingOff = new QuestionObject("I'm logging off");
const imLoggingOffNow = new QuestionObject("I'm logging off now");
const imLoggingOut = new QuestionObject("I'm logging out");
const imTakingOffNow = new QuestionObject("I'm taking off now");
const imGonnaTakeOffNow = new QuestionObject("I'm gonna take off now");
const signingOff = new QuestionObject("Signing off");
const imSkedaddlingNow = new QuestionObject("I'm skedaddling now");
const seeYouLaterBot = new QuestionObject("See you later bot");
const seeYouLaterDude = new QuestionObject("See you later dude");
const seeYouLaterHomie = new QuestionObject("see you later homie");
const seeYouLaterAlligator = new QuestionObject("See you later, alligator");
const seeYouAround = new QuestionObject("See you around");
const seeYouWithExclamationMark = new QuestionObject("See you!");
const seeYou = new QuestionObject("See you");
const takingOff = new QuestionObject("Taking off");
const talkLater = new QuestionObject("Talk later");
const talkToYaLater = new QuestionObject("Talk to ya later");
const talkToYouLater = new QuestionObject("Talk to you later");
const tillWeMeetAgain = new QuestionObject("Till we meet again");
const timeToEndThisConversation = new QuestionObject("Time to end this conversation");
const seeYouOnTheFlipSide = new QuestionObject("See you on the flip side");
const laterBud = new QuestionObject("Later bud");
const imGonnaScoot = new QuestionObject("I'm gonna scoot");
const iveGotToGo = new QuestionObject("I've got to go");
const iveGottaJet = new QuestionObject("I've gotta jet");
const iveGottaTakeOff = new QuestionObject("I've gotta take off");
const lrSkr = new QuestionObject("L8r sk8r");
const later = new QuestionObject("Later");
const seeYouAroundBud = new QuestionObject("See you around bud");
const laterBot = new QuestionObject("Later bot");
const imTakingOff = new QuestionObject("I'm taking off");
const laterDude = new QuestionObject("Later dude");
const peaceOut = new QuestionObject("Peace out");
const sayonara = new QuestionObject("Sayonara");
const seeYaAround = new QuestionObject("See ya around");
const seeYaLater = new QuestionObject("See ya later");
const seeYaOnTheFlipSide = new QuestionObject("See ya on the flip side");
const laterAlligator = new QuestionObject("Later alligator");
const imGoingToGo = new QuestionObject("I'm going to go");
const imGoingToLogOffNow = new QuestionObject("I'm going to log off now");
const imAboutToSkedaddleNow = new QuestionObject("I'm about to skedaddle now");
const imAboutToTakeOff = new QuestionObject("I'm about to take off");
const imAboutToTakeOffNow = new QuestionObject("I'm about to take off now");
const imGoing = new QuestionObject("I'm going");
const imGoingNow = new QuestionObject("I'm going now");
const imAboutToSignOutNow = new QuestionObject("I'm about to sign out now");
const imGoingToGetGoingNow = new QuestionObject("I'm going to get going now");
const imAboutToSignOut = new QuestionObject("I'm about to sign out");
const imGoingToGoNow = new QuestionObject("I'm going to go now");
const imGoingToJet = new QuestionObject("I'm going to jet");
const imGoingToJetNow = new QuestionObject("I'm going to jet now");
const imGoingToLeaveNow = new QuestionObject("I'm going to leave now");
const imGonnaSignOff = new QuestionObject("I'm gonna sign off");
const imGoingToGetGoing = new QuestionObject("I'm going to get going");
const toodleOo = new QuestionObject("Toodle-oo");
const imAboutToLeave = new QuestionObject("I'm about to leave");
const imAboutToLeaveNow = new QuestionObject("I'm about to leave now");
const imAboutToLogOff = new QuestionObject("I'm about to log off");
const imAboutToLogOffNow = new QuestionObject("I'm about to log off now");
const imAboutToSkedaddle = new QuestionObject("I'm about to skedaddle");
const imAboutToMotor = new QuestionObject("I'm about to motor");
const imGoingToLogOut = new QuestionObject("I'm going to log out");
const imAboutToRun = new QuestionObject("I'm about to run");
const imAboutToRunNow = new QuestionObject("I'm about to run now");
const imAboutToScoot = new QuestionObject("I'm about to scoot");
const imAboutToSignOff = new QuestionObject("I'm about to sign off");
const imAboutToSignOffNow = new QuestionObject("I'm about to sign off now");
const imAboutToLogOutNow = new QuestionObject("I'm about to log out now");
const imGonnaLogOut = new QuestionObject("I'm gonna log out");
const imGoingToLogOff = new QuestionObject("I'm going to log off");
const imGonnaGoNow = new QuestionObject("I'm gonna go now");
const imGonnaJet = new QuestionObject("I'm gonna jet");
const imGonnaJetNow = new QuestionObject("I'm gonna jet now");
const imGonnaLeave = new QuestionObject("I'm gonna leave");
const imGonnaLeaveNow = new QuestionObject("I'm gonna leave now");
const imGonnaGetGoingNow = new QuestionObject("I'm gonna get going now");
const imGonnaLogOffNow = new QuestionObject("I'm gonna log off now");
const imGonnaGetGoing = new QuestionObject("I'm gonna get going");
const imGonnaLogOutNow = new QuestionObject("I'm gonna log out now");
const imGonnaMotor = new QuestionObject("I'm gonna motor");
const imGonnaMotorNow = new QuestionObject("I'm gonna motor now");
const imGonnaRun = new QuestionObject("I'm gonna run");
const imGonnaRunNow = new QuestionObject("I'm gonna run now");
const imAboutToJet = new QuestionObject("I'm about to jet");
const imGonnaLogOff = new QuestionObject("I'm gonna log off");
const imGoingToLogOutNow = new QuestionObject("I'm going to log out now");
const imGoingToMotor = new QuestionObject("I'm going to motor");
const imGoingToMotorNow = new QuestionObject("I'm going to motor now");
const imGoingToRun = new QuestionObject("I'm going to run");
const imGoingToRunNow = new QuestionObject("I'm going to run now");
const imGoingToScoot = new QuestionObject("I'm going to scoot");
const imGonnaGo = new QuestionObject("I'm gonna go");
const imGoingToSignOff = new QuestionObject("I'm going to sign off");
const imGonnaScootNow = new QuestionObject("I'm gonna scoot now");
const imGoingToSignOut = new QuestionObject("I'm going to sign out");
const imGoingToSignOutNow = new QuestionObject("I'm going to sign out now");
const imGoingToSkedaddle = new QuestionObject("I'm going to skedaddle");
const imGoingToSkedaddleNow = new QuestionObject("I'm going to skedaddle now");
const imGoingToTakeOff = new QuestionObject("I'm going to take off");
const imGoingToScootNow = new QuestionObject("I'm going to scoot now");
const ttyl = new QuestionObject("TTYL");
const iBetterGo = new QuestionObject("I better go");

export const leavingOrEndingConversationQuestionsArray = [
    imGonnaSkedaddle,
    imAboutToMotorNow,
    imGoingToTakeOffNow,
    imGoingToLeave,
    seeYouLater,
    imAboutToScootNow,
    imGoingToSignOffNow,
    imAboutToJetNow,
    imAboutToLogOut,
    iGottaGoNow,
    iHaveToSignOut,
    iHaveToMotorNow,
    iHaveToRun,
    iHaveToRunNow,
    iHaveToScoot,
    iHaveToScootNow,
    iGottaSignOutNow,
    iHaveToSignOffNow,
    iHaveToLogOut,
    iHaveToSignOutNow,
    iHaveToSkedaddle,
    iHaveToSkedaddleNow,
    iHaveToTakeOff,
    iHaveToTakeOffNow,
    iMustDepart,
    iHaveToSignOff,
    iHaveToJet,
    adieu,
    iGottaSkedaddleNow,
    iGottaTakeOff,
    iGottaTakeOffNow,
    iHaveToGetGoing,
    iHaveToGetGoingNow,
    iHaveToMotor,
    iHaveToGoNow,
    iHaveToLogOutNow,
    iHaveToJetNow,
    iHaveToLeave,
    iHaveToLeaveNow,
    iHaveToLogOff,
    iHaveToLogOffNow,
    iNeedToGo,
    iHaveToGo,
    iWillTakeMyLeaveOfYou,
    iNeedToGetGoing,
    iNeedToSignOut,
    iNeedToSignOutNow,
    iNeedToSkedaddle,
    iNeedToSkedaddleNow,
    iNeedToTakeOff,
    iNeedToSignOff,
    iShouldBeGoing,
    iNeedToScootNow,
    idBetterGo,
    illChatWithYouLater,
    illTalkToYouLater,
    imAboutToGetGoing,
    imAboutToGetGoingNow,
    imAboutToGo,
    iNeedToTakeOffNow,
    iNeedToLogOut,
    iGottaSignOut,
    iNeedToGoNow,
    iNeedToJet,
    iNeedToLeave,
    iNeedToLeaveNow,
    iNeedToSignOffNow,
    iNeedToLogOffNow,
    iNeedToGetGoingNow,
    iNeedToLogOutNow,
    iNeedToMotor,
    iNeedToMotorNow,
    iNeedToRun,
    iNeedToRunNow,
    iNeedToScoot,
    iNeedToLogOff,
    iAmJettingNow,
    goodbye,
    gottaGo,
    iAmGoing,
    iAmGoingNow,
    iAmGoingToGetGoing,
    iGottaSkedaddle,
    iAmJetting,
    farewell,
    iAmLeaving,
    iAmLeavingNow,
    iAmLoggingOff,
    iAmLoggingOffNow,
    iAmLoggingOut,
    iAmLoggingOutNow,
    iAmGoingToGetGoingNow,
    catchYouOnTheFlipSide,
    adios,
    alrightImOuttaHere,
    buhBye,
    bye,
    byeBye,
    byeDude,
    goodBye,
    catchYouLater,
    gG,
    checkYouLater,
    ciao,
    cYA,
    cYa,
    fareTheeWell,
    iAmRunningOff,
    catchYaLater,
    iGottaMotorNow,
    iAmMotoring,
    iGottaLeave,
    iGottaLeaveNow,
    iGottaLogOff,
    iGottaLogOffNow,
    iGottaLogOut,
    iGottaJet,
    iGottaMotor,
    iGottaRun,
    iGottaRunNow,
    iGottaScoot,
    iGottaScootNow,
    iGottaSignOff,
    iGottaSignOffNow,
    iGottaLogOutNow,
    iAmSkedaddling,
    iAmRunningOffNow,
    iAmScooting,
    iAmScootingNow,
    iAmSigningOff,
    iAmSigningOffNow,
    iGottaJetNow,
    iAmSigningOutNow,
    iAmMotoringNow,
    iAmSkedaddlingNow,
    iAmTakingOff,
    iAmTakingOffNow,
    iGottaGetGoing,
    iGottaGetGoingNow,
    iGottaGo,
    iAmSigningOut,
    imScooting,
    imOff,
    imOut,
    imOutOfHere,
    imOutTheDoor,
    imOuttaHere,
    imAboutToGoNow,
    imRunningOffNow,
    imLoggingOutNow,
    imScootingNow,
    imSigningOff,
    imSigningOffNow,
    imSigningOut,
    imSigningOutNow,
    imSkedaddling,
    imRunningOff,
    imJettingNow,
    imGonnaSignOffNow,
    imGonnaSignOut,
    imGonnaSignOutNow,
    imGonnaSkedaddleNow,
    imGonnaTakeOff,
    imMotoringNow,
    imJetting,
    imMotoring,
    imLeaving,
    imLeavingNow,
    imLoggingOff,
    imLoggingOffNow,
    imLoggingOut,
    imTakingOffNow,
    imGonnaTakeOffNow,
    signingOff,
    imSkedaddlingNow,
    seeYouLaterBot,
    seeYouLaterDude,
    seeYouLaterHomie,
    seeYouLaterAlligator,
    seeYouAround,
    seeYouWithExclamationMark,
    seeYou,
    takingOff,
    talkLater,
    talkToYaLater,
    talkToYouLater,
    tillWeMeetAgain,
    timeToEndThisConversation,
    seeYouOnTheFlipSide,
    laterBud,
    imGonnaScoot,
    iveGotToGo,
    iveGottaJet,
    iveGottaTakeOff,
    lrSkr,
    later,
    seeYouAroundBud,
    laterBot,
    imTakingOff,
    laterDude,
    peaceOut,
    sayonara,
    seeYaAround,
    seeYaLater,
    seeYaOnTheFlipSide,
    laterAlligator,
    imGoingToGo,
    imGoingToLogOffNow,
    imAboutToSkedaddleNow,
    imAboutToTakeOff,
    imAboutToTakeOffNow,
    imGoing,
    imGoingNow,
    imAboutToSignOutNow,
    imGoingToGetGoingNow,
    imAboutToSignOut,
    imGoingToGoNow,
    imGoingToJet,
    imGoingToJetNow,
    imGoingToLeaveNow,
    imGonnaSignOff,
    imGoingToGetGoing,
    toodleOo,
    imAboutToLeave,
    imAboutToLeaveNow,
    imAboutToLogOff,
    imAboutToLogOffNow,
    imAboutToSkedaddle,
    imAboutToMotor,
    imGoingToLogOut,
    imAboutToRun,
    imAboutToRunNow,
    imAboutToScoot,
    imAboutToSignOff,
    imAboutToSignOffNow,
    imAboutToLogOutNow,
    imGonnaLogOut,
    imGoingToLogOff,
    imGonnaGoNow,
    imGonnaJet,
    imGonnaJetNow,
    imGonnaLeave,
    imGonnaLeaveNow,
    imGonnaGetGoingNow,
    imGonnaLogOffNow,
    imGonnaGetGoing,
    imGonnaLogOutNow,
    imGonnaMotor,
    imGonnaMotorNow,
    imGonnaRun,
    imGonnaRunNow,
    imAboutToJet,
    imGonnaLogOff,
    imGoingToLogOutNow,
    imGoingToMotor,
    imGoingToMotorNow,
    imGoingToRun,
    imGoingToRunNow,
    imGoingToScoot,
    imGonnaGo,
    imGoingToSignOff,
    imGonnaScootNow,
    imGoingToSignOut,
    imGoingToSignOutNow,
    imGoingToSkedaddle,
    imGoingToSkedaddleNow,
    imGoingToTakeOff,
    imGoingToScootNow,
    ttyl,
    iBetterGo
];

const goodMorningSunshine = new QuestionObject("Good morning sunshine");
const upAndAttem = new QuestionObject("Up and attem");
const itsTimeToRiseAndShine = new QuestionObject("It's time to rise and shine");
const itsTimeToGetUp = new QuestionObject("It's time to get up");
const itsABrandNewDay = new QuestionObject("It's a brand new day");
const gutenMorgen = new QuestionObject("Guten Morgen");
const topOfTheMorning = new QuestionObject("Top of the morning");
const buenosDias = new QuestionObject("Buenos dias");
const ohMorning = new QuestionObject("Oh, morning");
const wakeUp = new QuestionObject("Wake up");
const aBlessedMorningToYou = new QuestionObject("A blessed morning to you");
const mornin = new QuestionObject("Mornin'");
const goodMorningToYouBot = new QuestionObject("Good morning to you, bot");
const morning = new QuestionObject("Morning");
const goodMorningStarshine = new QuestionObject("Good morning starshine");
const goodMorningMyFriend = new QuestionObject("good morning my friend");
const goodMorningAmigo = new QuestionObject("Good morning amigo");
const goodMorning = new QuestionObject("Good morning");
const getUp = new QuestionObject("Get up!");
const goodMorrow = new QuestionObject("Good morrow");
const riseAndShine = new QuestionObject("Rise and shine");
const topOfTheMorningToYou = new QuestionObject("Top of the morning to you");
const timeToWakeUp = new QuestionObject("Time to wake up");
const itsTimeToWakeUp = new QuestionObject("It's time to wake up");
const timeToGetUp = new QuestionObject("Time to get up");
const wishingYouAGoodMorning = new QuestionObject("Wishing you a good morning");
const ohHeyGoodMorning = new QuestionObject("Oh hey good morning");
const morningSunshine = new QuestionObject("Morning sunshine");
const morningPal = new QuestionObject("Morning pal");
const morningDude = new QuestionObject("Morning dude");
const morningBot = new QuestionObject("Morning bot");
const timeToRiseAndShine = new QuestionObject("Time to rise and shine");

export const morningGreetingsQuestionsArray = [
    goodMorningSunshine,
    upAndAttem,
    itsTimeToRiseAndShine,
    itsTimeToGetUp,
    itsABrandNewDay,
    gutenMorgen,
    topOfTheMorning,
    buenosDias,
    ohMorning,
    wakeUp,
    aBlessedMorningToYou,
    mornin,
    goodMorningToYouBot,
    morning,
    goodMorningStarshine,
    goodMorningMyFriend,
    goodMorningAmigo,
    goodMorning,
    getUp,
    goodMorrow,
    riseAndShine,
    topOfTheMorningToYou,
    timeToWakeUp,
    itsTimeToWakeUp,
    timeToGetUp,
    wishingYouAGoodMorning,
    ohHeyGoodMorning,
    morningSunshine,
    morningPal,
    morningDude,
    morningBot,
    timeToRiseAndShine
];

const haveYourselfAGoodNight = new QuestionObject("Have yourself a good night");
const pleasantDreams = new QuestionObject("Pleasant dreams");
const dontLetTheBedbugsBite = new QuestionObject("Don't let the bedbugs bite");
const imGoingToSleep = new QuestionObject("I'm going to sleep");
const imGoingToBed = new QuestionObject("I'm going to bed");
const imTurningIn = new QuestionObject("I'm turning in");
const seeYouTomorrowMorning = new QuestionObject("See you tomorrow morning");
const night = new QuestionObject("Night");
const goodNightBot = new QuestionObject("Good night bot");
const shuttingDownForTheNight = new QuestionObject("Shutting down for the night");
const imHeadedOffToSleep = new QuestionObject("I'm headed off to sleep");
const imHeadedOffToBed = new QuestionObject("I'm headed off to bed");
const iAmHeadingToSleep = new QuestionObject("I am heading to sleep");
const iAmHeadingToBed = new QuestionObject("I am heading to bed");
const iAmHeadedToBed = new QuestionObject("I am headed to bed");
const buenasNoches = new QuestionObject("Buenas noches");
const haveYourselfALovelyNight = new QuestionObject("Have yourself a lovely night");
const imHeadingToSleep = new QuestionObject("I'm heading to sleep");
const haveAGoodNightBot = new QuestionObject("Have a good night bot");
const haveAGoodNight = new QuestionObject("Have a good night");
const goodNightToYou = new QuestionObject("Good night to you");
const goodNight = new QuestionObject("Good night");
const gnight = new QuestionObject("G'night");
const hopeYouHaveAGoodNight = new QuestionObject("Hope you have a good night");
const nightyNightDontLetTheBedBugsBite = new QuestionObject("Nighty night, don't let the bed bugs bite");
const timeToSleep = new QuestionObject("Time to sleep");
const timeToGoToSleep = new QuestionObject("Time to go to sleep");
const timeForBed = new QuestionObject("Time for bed");
const sweetDreams = new QuestionObject("Sweet dreams");
const sleepWell = new QuestionObject("Sleep well");
const imHeadedToBed = new QuestionObject("I'm headed to bed");
const imHeadingToBed = new QuestionObject("I'm heading to bed");
const nightyNight = new QuestionObject("Nighty night");
const nighters = new QuestionObject("Nighters");
const nightBot = new QuestionObject("Night bot");
const imTurningInForTheNight = new QuestionObject("I'm turning in for the night");
const imShuttingDownForTheNight = new QuestionObject("I'm shutting down for the night");
const timeToTurnIn = new QuestionObject("Time to turn in");
const seeYouInTheMorning = new QuestionObject("See you in the morning");

export const nightGreetingsQuestionsArray = [
    haveYourselfAGoodNight,
    pleasantDreams,
    dontLetTheBedbugsBite,
    imGoingToSleep,
    imGoingToBed,
    imTurningIn,
    seeYouTomorrowMorning,
    night,
    goodNightBot,
    shuttingDownForTheNight,
    imHeadedOffToSleep,
    imHeadedOffToBed,
    iAmHeadingToSleep,
    iAmHeadingToBed,
    iAmHeadedToBed,
    buenasNoches,
    haveYourselfALovelyNight,
    imHeadingToSleep,
    haveAGoodNightBot,
    haveAGoodNight,
    goodNightToYou,
    goodNight,
    gnight,
    hopeYouHaveAGoodNight,
    nightyNightDontLetTheBedBugsBite,
    timeToSleep,
    timeToGoToSleep,
    timeForBed,
    sweetDreams,
    sleepWell,
    imHeadedToBed,
    imHeadingToBed,
    nightyNight,
    nighters,
    nightBot,
    imTurningInForTheNight,
    imShuttingDownForTheNight,
    timeToTurnIn,
    seeYouInTheMorning
];

const howAmazing = new QuestionObject("How amazing");
const neato = new QuestionObject("Neato");
const okayCool = new QuestionObject("okay cool");
const hellsYes = new QuestionObject("Hells yes");
const aha = new QuestionObject("Aha");
const youGotIt = new QuestionObject("You got it");
const thatsGoodNews = new QuestionObject("That's good news");
const thatsAwesome = new QuestionObject("That's awesome");
const totallyTubular = new QuestionObject("Totally tubular");
const thatsGreatToHear = new QuestionObject("That's great to hear");
const imImpressed = new QuestionObject("I'm impressed");
const howCool = new QuestionObject("How cool");
const iAgree = new QuestionObject("I agree");
const iFeelYou = new QuestionObject("I feel you");
const iGetIt = new QuestionObject("I get it");
const iGetYou = new QuestionObject("I get you");
const iGotIt = new QuestionObject("I got it");
const iHearYou = new QuestionObject("I hear you");
const iKnowRight = new QuestionObject("I know right?");
const iLikeThat = new QuestionObject("I like that");
const iMGreat = new QuestionObject("i m great");
const imAmazed = new QuestionObject("I'm amazed");
const hooray = new QuestionObject("Hooray");
const imIntoIt = new QuestionObject("I'm into it");
const incredible = new QuestionObject("Incredible");
const interesting = new QuestionObject("Interesting");
const k = new QuestionObject("K");
const legit = new QuestionObject("Legit");
const letsDoIt = new QuestionObject("Let's do it");
const livingTheDream = new QuestionObject("Living the dream");
const lovely = new QuestionObject("lovely");
const neat = new QuestionObject("Neat");
const aHa = new QuestionObject("A ha");
const iUnderstand = new QuestionObject("I understand");
const fleek = new QuestionObject("Fleek");
const acknowledged = new QuestionObject("Acknowledged");
const ah = new QuestionObject("Ah");
const amazing = new QuestionObject("Amazing");
const awesome = new QuestionObject("Awesome");
const bigOLittleK = new QuestionObject("Big O, little k");
const bingo = new QuestionObject("Bingo");
const cool = new QuestionObject("Cool");
const duh = new QuestionObject("Duh");
const excellent = new QuestionObject("Excellent");
const fantastic = new QuestionObject("Fantastic");
const howAwesome = new QuestionObject("How awesome");
const fine = new QuestionObject("Fine");
const ohForSure = new QuestionObject("Oh for sure");
const forSure = new QuestionObject("For sure");
const good = new QuestionObject("Good");
const goodNews = new QuestionObject("Good news");
const goodToKnow = new QuestionObject("Good to know");
const gotIt = new QuestionObject("Got it");
const gotcha = new QuestionObject("Gotcha");
const great = new QuestionObject("Great");
const hahaOk = new QuestionObject("haha ok");
const hellYeah = new QuestionObject("Hell yeah");
const hellYes = new QuestionObject("Hell yes");
const fascinating = new QuestionObject("Fascinating");
const veryNice = new QuestionObject("Very nice");
const niiice = new QuestionObject("niiice");
const thatsGood = new QuestionObject("thats good");
const that_sGood = new QuestionObject("That's good");
const thatsGreat = new QuestionObject("That's great.");
const thatsIncredible = new QuestionObject("That's incredible");
const thatsLegit = new QuestionObject("That's legit");
const thatsWhatImTalkingAbout = new QuestionObject("That's what I'm talking about");
const totally = new QuestionObject("Totally");
const uKnowIt = new QuestionObject("U know it");
const well = new QuestionObject("well");
const wellOkayThen = new QuestionObject("well okay then");
const worksForMe = new QuestionObject("Works for me");
const yay = new QuestionObject("Yay");
const yeahSure = new QuestionObject("yeah sure");
const yep = new QuestionObject("Yep");
const yes = new QuestionObject("Yes");
const yesLol = new QuestionObject("Yes lol");
const yesToThat = new QuestionObject("Yes to that");
const youKnowIt = new QuestionObject("You know it");
const tubular = new QuestionObject("Tubular");
const ryokai = new QuestionObject("Ryokai");
const ohHo = new QuestionObject("Oh ho");
const oK = new QuestionObject("OK");
const okCool = new QuestionObject("ok cool");
const okThen = new QuestionObject("ok then");
const okay = new QuestionObject("okay");
const okayWithDot = new QuestionObject("Okay.");
const onPoint = new QuestionObject("On point");
const perfect = new QuestionObject("Perfect");
const rad = new QuestionObject("Rad");
const radical = new QuestionObject("Radical");
const thatsCool = new QuestionObject("that's cool");
const roger = new QuestionObject("Roger");
const yup = new QuestionObject("Yup");
const soundsAboutRight = new QuestionObject("Sounds about right");
const soundsGood = new QuestionObject("Sounds good");
const soundsGreat = new QuestionObject("sounds great");
const soundsLikeAPlan = new QuestionObject("Sounds like a plan");
const stupendous = new QuestionObject("Stupendous");
const super_ = new QuestionObject("Super");
const superCool = new QuestionObject("super cool");
const sure = new QuestionObject("sure");
const thatIsGoodNews = new QuestionObject("That is good news");
const thatIsGoodToHear = new QuestionObject("That is good to hear");
const thatIsGreat = new QuestionObject("That is great");
const rightOn = new QuestionObject("Right on");

export const positivePhrasesQuestionsArray = [
    howAmazing,
    neato,
    okayCool,
    hellsYes,
    aha,
    youGotIt,
    thatsGoodNews,
    thatsAwesome,
    totallyTubular,
    thatsGreatToHear,
    imImpressed,
    howCool,
    iAgree,
    iFeelYou,
    iGetIt,
    iGetYou,
    iGotIt,
    iHearYou,
    iKnowRight,
    iLikeThat,
    iMGreat,
    imAmazed,
    hooray,
    imIntoIt,
    incredible,
    interesting,
    k,
    legit,
    letsDoIt,
    livingTheDream,
    lovely,
    neat,
    aHa,
    iUnderstand,
    fleek,
    acknowledged,
    ah,
    amazing,
    awesome,
    bigOLittleK,
    bingo,
    cool,
    duh,
    excellent,
    fantastic,
    howAwesome,
    fine,
    ohForSure,
    forSure,
    good,
    goodNews,
    goodToKnow,
    gotIt,
    gotcha,
    great,
    hahaOk,
    hellYeah,
    hellYes,
    fascinating,
    veryNice,
    niiice,
    thatsGood,
    that_sGood,
    thatsGreat,
    thatsIncredible,
    thatsLegit,
    thatsWhatImTalkingAbout,
    totally,
    uKnowIt,
    well,
    wellOkayThen,
    worksForMe,
    yay,
    yeahSure,
    yep,
    yes,
    yesLol,
    yesToThat,
    youKnowIt,
    tubular,
    ryokai,
    ohHo,
    oK,
    okCool,
    okThen,
    okay,
    okayWithDot,
    onPoint,
    perfect,
    rad,
    radical,
    thatsCool,
    roger,
    yup,
    soundsAboutRight,
    soundsGood,
    soundsGreat,
    soundsLikeAPlan,
    stupendous,
    super_,
    superCool,
    sure,
    thatIsGoodNews,
    thatIsGoodToHear,
    thatIsGreat,
    rightOn
];

const knockKnock = new QuestionObject("Knock knock");
const isSomeoneAvailableToListenToMe = new QuestionObject("Is someone available to listen to me?");
const isAnybodyThereToTalkToMe = new QuestionObject("Is anybody there to talk to me?");
const isAnybodyThere = new QuestionObject("Is anybody there?");
const isSomeoneFree = new QuestionObject("Is someone free?");
const micCheck = new QuestionObject("Mic check");
const weShouldChat = new QuestionObject("We should chat");
const sayAnything = new QuestionObject("Say anything");
const canWeTalk = new QuestionObject("Can we talk?");
const areYouAvailableToTalkToMe = new QuestionObject("Are you available to talk to me?");
const canYouTalk = new QuestionObject("Can you talk?");
const canYouListenToMe = new QuestionObject("Can you listen to me?");
const canYouSpeakToMe = new QuestionObject("Can you speak to me?");
const canYouSpeakWithMe = new QuestionObject("Can you speak with me?");
const canYouSpeak = new QuestionObject("Can you speak?");
const canYouTalkToMe = new QuestionObject("Can you talk to me");
const areYouThereToListenToMe = new QuestionObject("Are you there to listen to me?");
const canYouTalkWithMe = new QuestionObject("Can you talk with me?");
const chatWithMe = new QuestionObject("Chat with me");
const isAnybodyAroundToChatToMe = new QuestionObject("Is anybody around to chat to me?");
const isAnybodyAroundToChatWithMe = new QuestionObject("Is anybody around to chat with me?");
const isAnybodyAroundToChat = new QuestionObject("Is anybody around to chat?");
const isAnybodyAroundToListenToMe = new QuestionObject("Is anybody around to listen to me?");
const isAnybodyAroundToListen = new QuestionObject("Is anybody around to listen?");
const canYouTalkToMeWithQuestionMark = new QuestionObject("Can you talk to me?");
const areYouThereWithMe = new QuestionObject("Are you there with me?");
const anybodyAroundToChatToMe = new QuestionObject("Anybody around to chat to me?");
const areYouThereToListen = new QuestionObject("Are you there to listen?");
const areYouThereToSpeakToMe = new QuestionObject("Are you there to speak to me?");
const areYouThereToSpeakWithMe = new QuestionObject("Are you there to speak with me?");
const areYouThereToSpeak = new QuestionObject("Are you there to speak?");
const areYouThereToTalkToMe = new QuestionObject("Are you there to talk to me?");
const canYouChat = new QuestionObject("Can you chat?");
const areYouThereToTalk = new QuestionObject("Are you there to talk?");
const canYouChatToMe = new QuestionObject("Can you chat to me?");
const areYouThere = new QuestionObject("Are you there?");
const canAnybodyHearMe = new QuestionObject("Can anybody hear me?");
const canSomebodyHearMe = new QuestionObject("Can somebody hear me?");
const canSomeoneHearMe = new QuestionObject("Can someone hear me?");
const canWeChat = new QuestionObject("Can we chat?");
const isAnybodyAroundToSpeak = new QuestionObject("Is anybody around to speak?");
const areYouThereToTalkWithMe = new QuestionObject("Are you there to talk with me?");
const isAnybodyThereToSpeakWithMe = new QuestionObject("Is anybody there to speak with me?");
const isAnybodyAroundToSpeakToMe = new QuestionObject("Is anybody around to speak to me?");
const isAnybodyListening = new QuestionObject("Is anybody listening?");
const isAnybodyThereToChatToMe = new QuestionObject("Is anybody there to chat to me?");
const isAnybodyThereToChatWithMe = new QuestionObject("Is anybody there to chat with me?");
const isAnybodyThereToChat = new QuestionObject("Is anybody there to chat?");
const isAnybodyThereToListenToMe = new QuestionObject("Is anybody there to listen to me?");
const isAnybodyFree = new QuestionObject("Is anybody free?");
const isAnybodyThereToSpeakToMe = new QuestionObject("Is anybody there to speak to me?");
const isAnybodyAvailableToTalk = new QuestionObject("Is anybody available to talk?");
const isAnybodyThereToSpeak = new QuestionObject("Is anybody there to speak?");
const isAnybodyThereToTalkWithMe = new QuestionObject("Is anybody there to talk with me?");
const isAnybodyThereToTalk = new QuestionObject("Is anybody there to talk?");
const isAnyoneAroundToChatToMe = new QuestionObject("Is anyone around to chat to me?");
const isAnybodyThereToListen = new QuestionObject("Is anybody there to listen?");
const isAnybodyAvailableToListenToMe = new QuestionObject("Is anybody available to listen to me?");
const areYouThereToChat = new QuestionObject("Are you there to chat?");
const isAnybodyAroundToTalkToMe = new QuestionObject("Is anybody around to talk to me?");
const isAnybodyAroundToTalkWithMe = new QuestionObject("Is anybody around to talk with me?");
const isAnybodyAroundToTalk = new QuestionObject("Is anybody around to talk?");
const isAnybodyAround = new QuestionObject("Is anybody around?");
const isAnybodyAvailableToChatToMe = new QuestionObject("Is anybody available to chat to me?");
const isAnybodyListeningToMe = new QuestionObject("Is anybody listening to me?");
const isAnybodyAvailableToChat = new QuestionObject("Is anybody available to chat?");
const isAnybodyAroundToSpeakWithMe = new QuestionObject("Is anybody around to speak with me?");
const isAnybodyAvailableToListen = new QuestionObject("Is anybody available to listen?");
const isAnybodyAvailableToSpeakToMe = new QuestionObject("Is anybody available to speak to me?");
const isAnybodyAvailableToSpeakWithMe = new QuestionObject("Is anybody available to speak with me?");
const isAnybodyAvailableToSpeak = new QuestionObject("Is anybody available to speak?");
const isAnybodyAvailableToTalkToMe = new QuestionObject("Is anybody available to talk to me?");
const isAnybodyAvailableToTalkWithMe = new QuestionObject("Is anybody available to talk with me?");
const isAnybodyAvailableToChatWithMe = new QuestionObject("Is anybody available to chat with me?");
const anyoneThere = new QuestionObject("Anyone there?");
const anyoneAroundToSpeakWithMe = new QuestionObject("Anyone around to speak with me?");
const anyoneAroundToSpeak = new QuestionObject("Anyone around to speak?");
const anyoneAroundToTalkToMe = new QuestionObject("Anyone around to talk to me?");
const anyoneAroundToTalkWithMe = new QuestionObject("Anyone around to talk with me?");
const anyoneAroundToTalk = new QuestionObject("Anyone around to talk?");
const areYouThereToListenWithMe = new QuestionObject("Are you there to listen with me?");
const anyoneHome = new QuestionObject("Anyone home?");
const anyoneAroundToChat = new QuestionObject("Anyone around to chat?");
const areYouAroundToChatToMe = new QuestionObject("Are you around to chat to me?");
const areYouAroundToChatWithMe = new QuestionObject("Are you around to chat with me?");
const areYouAroundToChat = new QuestionObject("Are you around to chat?");
const areYouAroundToListen = new QuestionObject("Are you around to listen?");
const areYouAroundToSpeakToMe = new QuestionObject("Are you around to speak to me?");
const areYouAroundToSpeakWithMe = new QuestionObject("Are you around to speak with me?");
const anyoneAround = new QuestionObject("Anyone around?");
const anybodyAroundToTalk = new QuestionObject("Anybody around to talk?");
const anybodyAroundToChatWithMe = new QuestionObject("Anybody around to chat with me?");
const anybodyAroundToChat = new QuestionObject("Anybody around to chat?");
const anybodyAroundToListen = new QuestionObject("Anybody around to listen?");
const anybodyAroundToSpeakToMe = new QuestionObject("Anybody around to speak to me?");
const anybodyAroundToSpeakWithMe = new QuestionObject("Anybody around to speak with me?");
const anybodyAroundToSpeak = new QuestionObject("Anybody around to speak?");
const anyoneAroundToSpeakToMe = new QuestionObject("Anyone around to speak to me?");
const anybodyAroundToTalkWithMe = new QuestionObject("Anybody around to talk with me?");
const anyoneAroundToListen = new QuestionObject("Anyone around to listen?");
const anybodyAround = new QuestionObject("Anybody around?");
const anybodyHome = new QuestionObject("Anybody home?");
const anybodyThere = new QuestionObject("Anybody there?");
const anyoneAroundToChatToMe = new QuestionObject("Anyone around to chat to me?");
const anyoneAroundToChatWithMe = new QuestionObject("Anyone around to chat with me?");
const areYouAroundToTalkWithMe = new QuestionObject("Are you around to talk with me?");
const anybodyAroundToTalkToMe = new QuestionObject("Anybody around to talk to me?");
const areYouFreeToTalkWithMe = new QuestionObject("Are you free to talk with me?");
const areYouAroundToSpeak = new QuestionObject("Are you around to speak?");
const areYouFreeToListenToMe = new QuestionObject("Are you free to listen to me?");
const areYouFreeToListenWithMe = new QuestionObject("Are you free to listen with me?");
const areYouFreeToListen = new QuestionObject("Are you free to listen?");
const areYouFreeToSpeakToMe = new QuestionObject("Are you free to speak to me?");
const areYouFreeToSpeakWithMe = new QuestionObject("Are you free to speak with me?");
const areYouFreeToChatWithMe = new QuestionObject("Are you free to chat with me?");
const areYouFreeToTalkToMe = new QuestionObject("Are you free to talk to me?");
const areYouFreeToChatToMe = new QuestionObject("Are you free to chat to me?");
const areYouFreeToTalk = new QuestionObject("Are you free to talk?");
const areYouFree = new QuestionObject("Are you free?");
const areYouListeningToMe = new QuestionObject("Are you listening to me?");
const areYouListening = new QuestionObject("Are you listening?");
const areYouThereToChatToMe = new QuestionObject("Are you there to chat to me?");
const areYouThereToChatWithMe = new QuestionObject("Are you there to chat with me?");
const areYouFreeToSpeak = new QuestionObject("Are you free to speak?");
const areYouAvailableToSpeakToMe = new QuestionObject("Are you available to speak to me?");
const isAnyoneAroundToListenToMe = new QuestionObject("Is anyone around to listen to me?");
const areYouAroundToTalk = new QuestionObject("Are you around to talk?");
const areYouAround = new QuestionObject("Are you around?");
const areYouAvailableToChatToMe = new QuestionObject("Are you available to chat to me?");
const areYouAvailableToChatWithMe = new QuestionObject("Are you available to chat with me?");
const areYouAvailableToChat = new QuestionObject("Are you available to chat?");
const areYouFreeToChat = new QuestionObject("Are you free to chat?");
const areYouAvailableToListen = new QuestionObject("Are you available to listen?");
const areYouAroundToTalkToMe = new QuestionObject("Are you around to talk to me?");
const areYouAvailableToSpeakWithMe = new QuestionObject("Are you available to speak with me?");
const areYouAvailableToSpeak = new QuestionObject("Are you available to speak?");
const areYouAvailableToTalkWithMe = new QuestionObject("Are you available to talk with me?");
const areYouAvailableToTalk = new QuestionObject("Are you available to talk?");
const areYouAvailable = new QuestionObject("Are you available?");
const areYouAvailableToListenToMe = new QuestionObject("Are you available to listen to me?");
const isSomeoneFreeWithMe = new QuestionObject("Is someone free with me?");
const isSomeoneFreeToMe = new QuestionObject("Is someone free to me?");
const isSomeoneFreeToSpeakToMe = new QuestionObject("Is someone free to speak to me?");
const isSomeoneFreeToSpeakWithMe = new QuestionObject("Is someone free to speak with me?");
const isSomeoneFreeToSpeak = new QuestionObject("Is someone free to speak?");
const isSomeoneFreeToTalkToMe = new QuestionObject("Is someone free to talk to me?");
const isAnyoneAroundToChatWithMe = new QuestionObject("Is anyone around to chat with me?");
const isSomeoneFreeToTalk = new QuestionObject("Is someone free to talk?");
const isSomeoneFreeToListenToMe = new QuestionObject("Is someone free to listen to me?");
const isSomeoneListeningToChatToMe = new QuestionObject("Is someone listening to chat to me?");
const isSomeoneListeningToChatWithMe = new QuestionObject("Is someone listening to chat with me?");
const isSomeoneListeningToChat = new QuestionObject("Is someone listening to chat?");
const isSomeoneListeningToListenToMe = new QuestionObject("Is someone listening to listen to me?");
const isSomeoneListeningToListenWithMe = new QuestionObject("Is someone listening to listen with me?");
const isSomeoneFreeToTalkWithMe = new QuestionObject("Is someone free to talk with me?");
const isSomeoneAvailableToTalk = new QuestionObject("Is someone available to talk?");
const isSomeoneAvailableToListenWithMe = new QuestionObject("Is someone available to listen with me?");
const isSomeoneAvailableToListen = new QuestionObject("Is someone available to listen?");
const isSomeoneAvailableToMe = new QuestionObject("Is someone available to me?");
const isSomeoneAvailableToSpeakToMe = new QuestionObject("Is someone available to speak to me?");
const isSomeoneAvailableToSpeakWithMe = new QuestionObject("Is someone available to speak with me?");
const isSomeoneAvailableToSpeak = new QuestionObject("Is someone available to speak?");
const isSomeoneFreeToListen = new QuestionObject("Is someone free to listen?");
const isSomeoneAvailableToTalkWithMe = new QuestionObject("Is someone available to talk with me?");
const isSomeoneFreeToListenWithMe = new QuestionObject("Is someone free to listen with me?");
const isSomeoneAvailableWithMe = new QuestionObject("Is someone available with me?");
const isSomeoneAvailable = new QuestionObject("Is someone available?");
const isSomeoneFreeToChatToMe = new QuestionObject("Is someone free to chat to me?");
const isSomeoneFreeToChatWithMe = new QuestionObject("Is someone free to chat with me?");
const isSomeoneFreeToChat = new QuestionObject("Is someone free to chat?");
const isSomeoneListeningToMe = new QuestionObject("Is someone listening to me?");
const isSomeoneAvailableToTalkToMe = new QuestionObject("Is someone available to talk to me?");
const letsTalk = new QuestionObject("Let's talk");
const isSomeoneListeningToListen = new QuestionObject("Is someone listening to listen?");
const isSomeoneThereToTalk = new QuestionObject("Is someone there to talk?");
const isSomeoneThere = new QuestionObject("Is someone there?");
const isThereAnybodyListening = new QuestionObject("Is there anybody listening?");
const isThereAnyoneListening = new QuestionObject("Is there anyone listening?");
const isThereSomeoneListening = new QuestionObject("Is there someone listening?");
const isSomeoneThereToTalkToMe = new QuestionObject("Is someone there to talk to me?");
const letsChat = new QuestionObject("Let's chat");
const isSomeoneThereToSpeak = new QuestionObject("Is someone there to speak?");
const talkToMe = new QuestionObject("Talk to me");
const talkWithMe = new QuestionObject("Talk with me");
const weShouldTalk = new QuestionObject("We should talk");
const isSomeoneThereToChatWithMe = new QuestionObject("Is someone there to chat with me?");
const isSomeoneAvailableToChatWithMe = new QuestionObject("Is someone available to chat with me?");
const isSomeoneListeningToSpeakToMe = new QuestionObject("Is someone listening to speak to me?");
const isSomeoneListeningToSpeakWithMe = new QuestionObject("Is someone listening to speak with me?");
const isSomeoneListeningToSpeak = new QuestionObject("Is someone listening to speak?");
const isSomeoneListeningToTalkToMe = new QuestionObject("Is someone listening to talk to me?");
const isSomeoneListeningToTalkWithMe = new QuestionObject("Is someone listening to talk with me?");
const isSomeoneThereToTalkWithMe = new QuestionObject("Is someone there to talk with me?");
const isSomeoneThereToChatToMe = new QuestionObject("Is someone there to chat to me?");
const isSomeoneListeningToMeTalk = new QuestionObject("Is someone listening to me talk?");
const isSomeoneThereToChat = new QuestionObject("Is someone there to chat?");
const isSomeoneThereToListenToMe = new QuestionObject("Is someone there to listen to me?");
const isSomeoneThereToListenWithMe = new QuestionObject("Is someone there to listen with me?");
const isSomeoneThereToListen = new QuestionObject("Is someone there to listen?");
const isSomeoneThereToSpeakToMe = new QuestionObject("Is someone there to speak to me?");
const isSomeoneThereToSpeakWithMe = new QuestionObject("Is someone there to speak with me?");
const isSomeoneListening = new QuestionObject("Is someone listening?");
const isAnyoneFreeToChat = new QuestionObject("Is anyone free to chat?");
const isAnyoneFreeToTalkWithMe = new QuestionObject("Is anyone free to talk with me?");
const isAnyoneAvailableToSpeak = new QuestionObject("Is anyone available to speak?");
const isAnyoneAvailableToTalkToMe = new QuestionObject("Is anyone available to talk to me?");
const isAnyoneAvailableToTalkWithMe = new QuestionObject("Is anyone available to talk with me?");
const isAnyoneAvailableToTalk = new QuestionObject("Is anyone available to talk?");
const isAnyoneAvailableWithMe = new QuestionObject("Is anyone available with me?");
const isAnyoneAvailableToSpeakToMe = new QuestionObject("Is anyone available to speak to me?");
const isAnyoneFreeToChatWithMe = new QuestionObject("Is anyone free to chat with me?");
const isAnyoneAvailableToMe = new QuestionObject("Is anyone available to me?");
const isAnyoneFreeToListenToMe = new QuestionObject("Is anyone free to listen to me?");
const isAnyoneFreeToListen = new QuestionObject("Is anyone free to listen?");
const isAnyoneFreeToSpeakToMe = new QuestionObject("Is anyone free to speak to me?");
const isAnyoneFreeToSpeakWithMe = new QuestionObject("Is anyone free to speak with me?");
const isAnyoneFreeToSpeak = new QuestionObject("Is anyone free to speak?");
const isAnyoneAvailable = new QuestionObject("Is anyone available?");
const isAnyoneAround = new QuestionObject("Is anyone around?");
const yoohooAnybodyHome = new QuestionObject("Yoohoo anybody home?");
const isAnyoneAroundToListen = new QuestionObject("Is anyone around to listen?");
const isAnyoneAroundToSpeakToMe = new QuestionObject("Is anyone around to speak to me?");
const isAnyoneAroundToSpeakWithMe = new QuestionObject("Is anyone around to speak with me?");
const isAnyoneAroundToSpeak = new QuestionObject("Is anyone around to speak?");
const isAnyoneAroundToTalkToMe = new QuestionObject("Is anyone around to talk to me?");
const isAnyoneAvailableToSpeakWithMe = new QuestionObject("Is anyone available to speak with me?");
const isAnyoneAroundToTalk = new QuestionObject("Is anyone around to talk?");
const isAnyoneFreeToTalk = new QuestionObject("Is anyone free to talk?");
const isAnyoneAvailableToChatToMe = new QuestionObject("Is anyone available to chat to me?");
const isAnyoneAvailableToChatWithMe = new QuestionObject("Is anyone available to chat with me?");
const isAnyoneAvailableToChat = new QuestionObject("Is anyone available to chat?");
const isAnyoneAvailableToListenToMe = new QuestionObject("Is anyone available to listen to me?");
const isAnyoneAvailableToListenWithMe = new QuestionObject("Is anyone available to listen with me?");
const isAnyoneAvailableToListen = new QuestionObject("Is anyone available to listen?");
const isAnyoneAroundToTalkWithMe = new QuestionObject("Is anyone around to talk with me?");
const isSomeoneAroundToTalkToMe = new QuestionObject("Is someone around to talk to me?");
const isAnyoneFreeToTalkToMe = new QuestionObject("Is anyone free to talk to me?");
const isSomeoneAroundToChat = new QuestionObject("Is someone around to chat?");
const isSomeoneAroundToListenToMe = new QuestionObject("Is someone around to listen to me?");
const isSomeoneAroundToListen = new QuestionObject("Is someone around to listen?");
const isSomeoneAroundToMe = new QuestionObject("Is someone around to me?");
const isSomeoneAroundToSpeakToMe = new QuestionObject("Is someone around to speak to me?");
const isSomeoneAroundToChatToMe = new QuestionObject("Is someone around to chat to me?");
const isSomeoneAroundToSpeak = new QuestionObject("Is someone around to speak?");
const isSomebodyListening = new QuestionObject("Is somebody listening?");
const isSomeoneAroundToTalkWithMe = new QuestionObject("Is someone around to talk with me?");
const isSomeoneAroundToTalk = new QuestionObject("Is someone around to talk?");
const isSomeoneAroundWithMe = new QuestionObject("Is someone around with me?");
const isSomeoneAround = new QuestionObject("Is someone around?");
const isSomeoneAvailableToChatToMe = new QuestionObject("Is someone available to chat to me?");
const isAnyoneAroundToChat = new QuestionObject("Is anyone around to chat?");
const isSomeoneAroundToSpeakWithMe = new QuestionObject("Is someone around to speak with me?");
const isAnyoneThereToSpeakToMe = new QuestionObject("Is anyone there to speak to me?");
const isAnyoneFree = new QuestionObject("Is anyone free?");
const isAnyoneListening = new QuestionObject("Is anyone listening?");
const isAnyoneThereToChatToMe = new QuestionObject("Is anyone there to chat to me?");
const isAnyoneThereToChatWithMe = new QuestionObject("Is anyone there to chat with me?");
const isAnyoneThereToChat = new QuestionObject("Is anyone there to chat?");
const isAnyoneThereToListenToMe = new QuestionObject("Is anyone there to listen to me?");
const isSomeoneAroundToChatWithMe = new QuestionObject("Is someone around to chat with me?");
const isAnyoneThereToListen = new QuestionObject("Is anyone there to listen?");
const isSomeoneAvailableToChat = new QuestionObject("Is someone available to chat?");
const isAnyoneThereToSpeakWithMe = new QuestionObject("Is anyone there to speak with me?");
const isAnyoneThereToSpeak = new QuestionObject("Is anyone there to speak?");
const isAnyoneThereToTalkToMe = new QuestionObject("Is anyone there to talk to me?");
const isAnyoneThereToTalkWithMe = new QuestionObject("Is anyone there to talk with me?");
const isAnyoneThereToTalk = new QuestionObject("Is anyone there to talk?");
const isAnyoneThere = new QuestionObject("Is anyone there?");
const isAnyoneThereToListenWithMe = new QuestionObject("Is anyone there to listen with me?");

export const botAvailabilityQuestionsArray = [
    knockKnock,
    isSomeoneAvailableToListenToMe,
    isAnybodyThereToTalkToMe,
    isAnybodyThere,
    isSomeoneFree,
    micCheck,
    weShouldChat,
    sayAnything,
    canWeTalk,
    areYouAvailableToTalkToMe,
    canYouTalk,
    canYouListenToMe,
    canYouSpeakToMe,
    canYouSpeakWithMe,
    canYouSpeak,
    canYouTalkToMe,
    areYouThereToListenToMe,
    canYouTalkWithMe,
    chatWithMe,
    isAnybodyAroundToChatToMe,
    isAnybodyAroundToChatWithMe,
    isAnybodyAroundToChat,
    isAnybodyAroundToListenToMe,
    isAnybodyAroundToListen,
    canYouTalkToMeWithQuestionMark,
    areYouThereWithMe,
    anybodyAroundToChatToMe,
    areYouThereToListen,
    areYouThereToSpeakToMe,
    areYouThereToSpeakWithMe,
    areYouThereToSpeak,
    areYouThereToTalkToMe,
    canYouChat,
    areYouThereToTalk,
    canYouChatToMe,
    areYouThere,
    canAnybodyHearMe,
    canSomebodyHearMe,
    canSomeoneHearMe,
    canWeChat,
    isAnybodyAroundToSpeak,
    areYouThereToTalkWithMe,
    isAnybodyThereToSpeakWithMe,
    isAnybodyAroundToSpeakToMe,
    isAnybodyListening,
    isAnybodyThereToChatToMe,
    isAnybodyThereToChatWithMe,
    isAnybodyThereToChat,
    isAnybodyThereToListenToMe,
    isAnybodyFree,
    isAnybodyThereToSpeakToMe,
    isAnybodyAvailableToTalk,
    isAnybodyThereToSpeak,
    isAnybodyThereToTalkWithMe,
    isAnybodyThereToTalk,
    isAnyoneAroundToChatToMe,
    isAnybodyThereToListen,
    isAnybodyAvailableToListenToMe,
    areYouThereToChat,
    isAnybodyAroundToTalkToMe,
    isAnybodyAroundToTalkWithMe,
    isAnybodyAroundToTalk,
    isAnybodyAround,
    isAnybodyAvailableToChatToMe,
    isAnybodyListeningToMe,
    isAnybodyAvailableToChat,
    isAnybodyAroundToSpeakWithMe,
    isAnybodyAvailableToListen,
    isAnybodyAvailableToSpeakToMe,
    isAnybodyAvailableToSpeakWithMe,
    isAnybodyAvailableToSpeak,
    isAnybodyAvailableToTalkToMe,
    isAnybodyAvailableToTalkWithMe,
    isAnybodyAvailableToChatWithMe,
    anyoneThere,
    anyoneAroundToSpeakWithMe,
    anyoneAroundToSpeak,
    anyoneAroundToTalkToMe,
    anyoneAroundToTalkWithMe,
    anyoneAroundToTalk,
    areYouThereToListenWithMe,
    anyoneHome,
    anyoneAroundToChat,
    areYouAroundToChatToMe,
    areYouAroundToChatWithMe,
    areYouAroundToChat,
    areYouAroundToListen,
    areYouAroundToSpeakToMe,
    areYouAroundToSpeakWithMe,
    anyoneAround,
    anybodyAroundToTalk,
    anybodyAroundToChatWithMe,
    anybodyAroundToChat,
    anybodyAroundToListen,
    anybodyAroundToSpeakToMe,
    anybodyAroundToSpeakWithMe,
    anybodyAroundToSpeak,
    anyoneAroundToSpeakToMe,
    anybodyAroundToTalkWithMe,
    anyoneAroundToListen,
    anybodyAround,
    anybodyHome,
    anybodyThere,
    anyoneAroundToChatToMe,
    anyoneAroundToChatWithMe,
    areYouAroundToTalkWithMe,
    anybodyAroundToTalkToMe,
    areYouFreeToTalkWithMe,
    areYouAroundToSpeak,
    areYouFreeToListenToMe,
    areYouFreeToListenWithMe,
    areYouFreeToListen,
    areYouFreeToSpeakToMe,
    areYouFreeToSpeakWithMe,
    areYouFreeToChatWithMe,
    areYouFreeToTalkToMe,
    areYouFreeToChatToMe,
    areYouFreeToTalk,
    areYouFree,
    areYouListeningToMe,
    areYouListening,
    areYouThereToChatToMe,
    areYouThereToChatWithMe,
    areYouFreeToSpeak,
    areYouAvailableToSpeakToMe,
    isAnyoneAroundToListenToMe,
    areYouAroundToTalk,
    areYouAround,
    areYouAvailableToChatToMe,
    areYouAvailableToChatWithMe,
    areYouAvailableToChat,
    areYouFreeToChat,
    areYouAvailableToListen,
    areYouAroundToTalkToMe,
    areYouAvailableToSpeakWithMe,
    areYouAvailableToSpeak,
    areYouAvailableToTalkWithMe,
    areYouAvailableToTalk,
    areYouAvailable,
    areYouAvailableToListenToMe,
    isSomeoneFreeWithMe,
    isSomeoneFreeToMe,
    isSomeoneFreeToSpeakToMe,
    isSomeoneFreeToSpeakWithMe,
    isSomeoneFreeToSpeak,
    isSomeoneFreeToTalkToMe,
    isAnyoneAroundToChatWithMe,
    isSomeoneFreeToTalk,
    isSomeoneFreeToListenToMe,
    isSomeoneListeningToChatToMe,
    isSomeoneListeningToChatWithMe,
    isSomeoneListeningToChat,
    isSomeoneListeningToListenToMe,
    isSomeoneListeningToListenWithMe,
    isSomeoneFreeToTalkWithMe,
    isSomeoneAvailableToTalk,
    isSomeoneAvailableToListenWithMe,
    isSomeoneAvailableToListen,
    isSomeoneAvailableToMe,
    isSomeoneAvailableToSpeakToMe,
    isSomeoneAvailableToSpeakWithMe,
    isSomeoneAvailableToSpeak,
    isSomeoneFreeToListen,
    isSomeoneAvailableToTalkWithMe,
    isSomeoneFreeToListenWithMe,
    isSomeoneAvailableWithMe,
    isSomeoneAvailable,
    isSomeoneFreeToChatToMe,
    isSomeoneFreeToChatWithMe,
    isSomeoneFreeToChat,
    isSomeoneListeningToMe,
    isSomeoneAvailableToTalkToMe,
    letsTalk,
    isSomeoneListeningToListen,
    isSomeoneThereToTalk,
    isSomeoneThere,
    isThereAnybodyListening,
    isThereAnyoneListening,
    isThereSomeoneListening,
    isSomeoneThereToTalkToMe,
    letsChat,
    isSomeoneThereToSpeak,
    talkToMe,
    talkWithMe,
    weShouldTalk,
    isSomeoneThereToChatWithMe,
    isSomeoneAvailableToChatWithMe,
    isSomeoneListeningToSpeakToMe,
    isSomeoneListeningToSpeakWithMe,
    isSomeoneListeningToSpeak,
    isSomeoneListeningToTalkToMe,
    isSomeoneListeningToTalkWithMe,
    isSomeoneThereToTalkWithMe,
    isSomeoneThereToChatToMe,
    isSomeoneListeningToMeTalk,
    isSomeoneThereToChat,
    isSomeoneThereToListenToMe,
    isSomeoneThereToListenWithMe,
    isSomeoneThereToListen,
    isSomeoneThereToSpeakToMe,
    isSomeoneThereToSpeakWithMe,
    isSomeoneListening,
    isAnyoneFreeToChat,
    isAnyoneFreeToTalkWithMe,
    isAnyoneAvailableToSpeak,
    isAnyoneAvailableToTalkToMe,
    isAnyoneAvailableToTalkWithMe,
    isAnyoneAvailableToTalk,
    isAnyoneAvailableWithMe,
    isAnyoneAvailableToSpeakToMe,
    isAnyoneFreeToChatWithMe,
    isAnyoneAvailableToMe,
    isAnyoneFreeToListenToMe,
    isAnyoneFreeToListen,
    isAnyoneFreeToSpeakToMe,
    isAnyoneFreeToSpeakWithMe,
    isAnyoneFreeToSpeak,
    isAnyoneAvailable,
    isAnyoneAround,
    yoohooAnybodyHome,
    isAnyoneAroundToListen,
    isAnyoneAroundToSpeakToMe,
    isAnyoneAroundToSpeakWithMe,
    isAnyoneAroundToSpeak,
    isAnyoneAroundToTalkToMe,
    isAnyoneAvailableToSpeakWithMe,
    isAnyoneAroundToTalk,
    isAnyoneFreeToTalk,
    isAnyoneAvailableToChatToMe,
    isAnyoneAvailableToChatWithMe,
    isAnyoneAvailableToChat,
    isAnyoneAvailableToListenToMe,
    isAnyoneAvailableToListenWithMe,
    isAnyoneAvailableToListen,
    isAnyoneAroundToTalkWithMe,
    isSomeoneAroundToTalkToMe,
    isAnyoneFreeToTalkToMe,
    isSomeoneAroundToChat,
    isSomeoneAroundToListenToMe,
    isSomeoneAroundToListen,
    isSomeoneAroundToMe,
    isSomeoneAroundToSpeakToMe,
    isSomeoneAroundToChatToMe,
    isSomeoneAroundToSpeak,
    isSomebodyListening,
    isSomeoneAroundToTalkWithMe,
    isSomeoneAroundToTalk,
    isSomeoneAroundWithMe,
    isSomeoneAround,
    isSomeoneAvailableToChatToMe,
    isAnyoneAroundToChat,
    isSomeoneAroundToSpeakWithMe,
    isAnyoneThereToSpeakToMe,
    isAnyoneFree,
    isAnyoneListening,
    isAnyoneThereToChatToMe,
    isAnyoneThereToChatWithMe,
    isAnyoneThereToChat,
    isAnyoneThereToListenToMe,
    isSomeoneAroundToChatWithMe,
    isAnyoneThereToListen,
    isSomeoneAvailableToChat,
    isAnyoneThereToSpeakWithMe,
    isAnyoneThereToSpeak,
    isAnyoneThereToTalkToMe,
    isAnyoneThereToTalkWithMe,
    isAnyoneThereToTalk,
    isAnyoneThere,
    isAnyoneThereToListenWithMe
];

const whatIsYourPurpose = new QuestionObject("What is your purpose?");
const whatKindOfResponsesCanYouGive = new QuestionObject("what kind of responses can you give ?");
const whatCanYouHelpMeWith = new QuestionObject("what can you help me with");
const whatDoYouDo = new QuestionObject("What do you do?");
const whatAreYouCapableOf = new QuestionObject("What are you capable of?");
const whatAreTheThingsYouCanDo = new QuestionObject("What are the things you can do?");
const youDoWhatAgain = new QuestionObject("You do what again?");
const whatWereYouDesignedFor = new QuestionObject("What were you designed for?");
const whatsYourFunction = new QuestionObject("What's your function?");
const howDoYouWork = new QuestionObject("How do you work?");
const whatKindOfThingCanYouRespondTo = new QuestionObject("What kind of thing can you respond to?");
const whatKindsOfThingsCanYouDo = new QuestionObject("What kinds of things can you do?");
const whatSkillsDoYouHave = new QuestionObject("What skills do you have?");
const whatSortsOfThingsCanYouDo = new QuestionObject("What sorts of things can you do?");
const whatDoYouHaveAResponseFor = new QuestionObject("what do you have a response for");
const whatAreYouDesignedFor = new QuestionObject("What are you designed for?");
const canYouTellMeABitAboutYourself = new QuestionObject("Can you tell me a bit about yourself?");
const canYouTellMeAboutYou = new QuestionObject("Can you tell me about you?");
const couldYouHelpMe = new QuestionObject("Could you help me?");
const soWhatCanYouDo = new QuestionObject("So what can you do?");
const soHowCanIUseYouInMyProjects = new QuestionObject("So how can I use you in my projects?");
const whatCanYouDoToAssistMe = new QuestionObject("What can you do to assist me?");
const whatAreYouDesignedToDo = new QuestionObject("What are you designed to do?");
const whatAreYouGoodFor = new QuestionObject("What are you good for?");
const whatAreYouMadeFor = new QuestionObject("What are you made for?");
const whatAreYourBotCapabilities = new QuestionObject("What are your bot capabilities?");
const whatAreYourFunctions = new QuestionObject("What are your functions");
const whatCanYouDemo = new QuestionObject("What can you demo?");
const talkToMeAboutYourCapability = new QuestionObject("Talk to me about your capability");
const doYouDoAnything = new QuestionObject("Do you do anything?");
const youDoWhatExactly = new QuestionObject("You do what exactly?");
const whatDoYouDoAgain = new QuestionObject("What do you do again?");
const whatDoYouDoExactly = new QuestionObject("What do you do exactly?");
const andYouDoWhatAgain = new QuestionObject("And you do what again?");
const iWantToKnowWhatYouDo = new QuestionObject("I want to know what you do?");
const whatTasksAreYouDesignedFor = new QuestionObject("What tasks are you designed for?");
const whatExactlyDoYouDo = new QuestionObject("What exactly do you do?");
const whatAreYouExpectedToDo = new QuestionObject("What are you expected to do?");
const tellMeWhatYouDo = new QuestionObject("Tell me what you do");
const tellMeWhatYouDoAgain = new QuestionObject("Tell me what you do again?");
const soWhatIsItThatYouDo = new QuestionObject("So what is it that you do?");
const andYouDoWhatExactly = new QuestionObject("And you do what exactly?");
const whatWouldYouSayYouDoHere = new QuestionObject("What would you say you do here?");
const andYouDoWhat = new QuestionObject("And you do what?");
const whatWereYouDesignedToDo = new QuestionObject("What were you designed to do?");
const whatWereYouMadeFor = new QuestionObject("What were you made for?");
const whatWereYouMadeToDo = new QuestionObject("What were you made to do?");
const whichAreYourFunctions = new QuestionObject("Which are your functions");
const withWhatCanYouHelpMe = new QuestionObject("With what can you help me");
const whatAreYourSkills = new QuestionObject("What are your skills?");
const whatAreYouSupposedToDo = new QuestionObject("What are you supposed to do?");
const howDoIMakeThisThingWork = new QuestionObject("How do I make this thing work?");
const tellMeEverythingYouCanDo = new QuestionObject("Tell me everything you can do");
const howCanYouHelpMe = new QuestionObject("How can you help me?");
const whatsYourPurpose = new QuestionObject("What's your purpose?");
const whatTasksCanYouHelpMeWith = new QuestionObject("What tasks can you help me with?");
const howCanYouHelp = new QuestionObject("How can you help?");
const whatIsYourFunction = new QuestionObject("What is your function?");
const canYouExplainToMeWhatYourRoleIs = new QuestionObject("Can you explain to me what your role is?");
const whatCanYouDoToHelpMe = new QuestionObject("What can you do to help me?");
const whatCanYouHelpMeWithWithQuestionMark = new QuestionObject("What can you help me with?");
const whatCanYouTellMeAbout = new QuestionObject("What can you tell me about");
const whatCanYouDoThen = new QuestionObject("What can you do then");
const whatDoYouHaveResponsesFor = new QuestionObject("what do you have responses for?");
const whatCanYouDo = new QuestionObject("What can you do ?");

export const botsPurposeQuestionsArray = [
    whatIsYourPurpose,
    whatKindOfResponsesCanYouGive,
    whatCanYouHelpMeWith,
    whatDoYouDo,
    whatAreYouCapableOf,
    whatAreTheThingsYouCanDo,
    youDoWhatAgain,
    whatWereYouDesignedFor,
    whatsYourFunction,
    howDoYouWork,
    whatKindOfThingCanYouRespondTo,
    whatKindsOfThingsCanYouDo,
    whatSkillsDoYouHave,
    whatSortsOfThingsCanYouDo,
    whatDoYouHaveAResponseFor,
    whatAreYouDesignedFor,
    canYouTellMeABitAboutYourself,
    canYouTellMeAboutYou,
    couldYouHelpMe,
    soWhatCanYouDo,
    soHowCanIUseYouInMyProjects,
    whatCanYouDoToAssistMe,
    whatAreYouDesignedToDo,
    whatAreYouGoodFor,
    whatAreYouMadeFor,
    whatAreYourBotCapabilities,
    whatAreYourFunctions,
    whatCanYouDemo,
    talkToMeAboutYourCapability,
    doYouDoAnything,
    youDoWhatExactly,
    whatDoYouDoAgain,
    whatDoYouDoExactly,
    andYouDoWhatAgain,
    iWantToKnowWhatYouDo,
    whatTasksAreYouDesignedFor,
    whatExactlyDoYouDo,
    whatAreYouExpectedToDo,
    tellMeWhatYouDo,
    tellMeWhatYouDoAgain,
    soWhatIsItThatYouDo,
    andYouDoWhatExactly,
    whatWouldYouSayYouDoHere,
    andYouDoWhat,
    whatWereYouDesignedToDo,
    whatWereYouMadeFor,
    whatWereYouMadeToDo,
    whichAreYourFunctions,
    withWhatCanYouHelpMe,
    whatAreYourSkills,
    whatAreYouSupposedToDo,
    howDoIMakeThisThingWork,
    tellMeEverythingYouCanDo,
    howCanYouHelpMe,
    whatsYourPurpose,
    whatTasksCanYouHelpMeWith,
    howCanYouHelp,
    whatIsYourFunction,
    canYouExplainToMeWhatYourRoleIs,
    whatCanYouDoToHelpMe,
    whatCanYouHelpMeWithWithQuestionMark,
    whatCanYouTellMeAbout,
    whatCanYouDoThen,
    whatDoYouHaveResponsesFor,
    whatCanYouDo
];

//25-36

const imClearlyMoreClever = new QuestionObject("I'm clearly more clever");
const betweenTheTwoOfUsWhoIsTheMostSmartYouOrMe = new QuestionObject("Between the two of us who is the most smart, you or me?");
const whichOfUsIsTheBrightest = new QuestionObject("Which of us is the brightest?");
const doYouThinkYoureSmarter = new QuestionObject("Do you think you're smarter");
const imObviouslyBrighterThanYou = new QuestionObject("I'm obviously brighter than you");
const imObviouslySmarterThanYou = new QuestionObject("I'm obviously smarter than you");
const doYouThinkYoureMoreKnowledgeable = new QuestionObject("Do you think you're more knowledgeable");
const whichOfUsIsMoreClever = new QuestionObject("Which of us is more clever?");
const imObviouslyTheMostIntelligent = new QuestionObject("I'm obviously the most intelligent");
const whoIsTheMostSmart = new QuestionObject("Who is the most smart?");
const doYouThinkImTheSmartest = new QuestionObject("Do you think I'm the smartest?");
const betweenYouOrMeWhoIsTheMostSmart = new QuestionObject("Between you or me, who is the most smart?");
const doYouThinkYoureTheBrightest = new QuestionObject("Do you think you're the brightest");
const doYouThinkYoureSmarterThanMe = new QuestionObject("Do you think you're smarter than me?");
const doYouThinkYoureMoreKnowledgeableThanMe = new QuestionObject("Do you think you're more knowledgeable than me?");
const doYouThinkYoureMoreIntelligentThanMe = new QuestionObject("Do you think you're more intelligent than me?");
const doYouThinkYoureMoreIntelligent = new QuestionObject("Do you think you're more intelligent");
const doYouThinkYoureTheMostSmart = new QuestionObject("Do you think you're the most smart");
const doYouThinkYoureMoreClever = new QuestionObject("Do you think you're more clever");
const doYouThinkYoureTheSmartest = new QuestionObject("Do you think you're the smartest");
const doYouThinkImTheSmartestThanYou = new QuestionObject("Do you think I'm the smartest than you?");
const doYouThinkImTheMostIntelligent = new QuestionObject("Do you think I'm the most intelligent?");
const doYouThinkImSmarter = new QuestionObject("Do you think I'm smarter?");
const doYouThinkImSmarterThanYou = new QuestionObject("Do you think I'm smarter than you?");
const doYouThinkImMoreKnowledgeableThanYou = new QuestionObject("Do you think I'm more knowledgeable than you?");
const doYouThinkImMoreIntelligentThanYou = new QuestionObject("Do you think I'm more intelligent than you?");
const doYouThinkImMoreCleverThanYou = new QuestionObject("Do you think I'm more clever than you?");
const doYouThinkImBrighter = new QuestionObject("Do you think I'm brighter?");
const imDefinitelyMoreIntelligent = new QuestionObject("I'm definitely more intelligent");
const doYouThinkYoureMoreCleverThanMe = new QuestionObject("Do you think you're more clever than me?");
const imClearlySmarter = new QuestionObject("I'm clearly smarter");
const amIBrighterThanYou = new QuestionObject("Am I brighter than you?");
const imDefinitelyMoreClever = new QuestionObject("I'm definitely more clever");
const imDefinitelyCleverest = new QuestionObject("I'm definitely cleverest");
const imDefinitelyBrighterThanYou = new QuestionObject("I'm definitely brighter than you");
const imCleverest = new QuestionObject("I'm cleverest");
const imClearlyTheSmartest = new QuestionObject("I'm clearly the smartest");
const imClearlyTheMostSmart = new QuestionObject("I'm clearly the most smart");
const imClearlyTheMostIntelligent = new QuestionObject("I'm clearly the most intelligent");
const doYouThinkYoureTheMostIntelligent = new QuestionObject("Do you think you're the most intelligent");
const imClearlySmarterThanYou = new QuestionObject("I'm clearly smarter than you");
const betweenYouOrMeWhoIsTheMostIntelligent = new QuestionObject("Between you or me, who is the most intelligent?");
const imClearlyMoreKnowledgeableThanYou = new QuestionObject("I'm clearly more knowledgeable than you");
const imClearlyMoreKnowledgeable = new QuestionObject("I'm clearly more knowledgeable");
const imClearlyMoreIntelligentThanYou = new QuestionObject("I'm clearly more intelligent than you");
const imClearlyMoreIntelligent = new QuestionObject("I'm clearly more intelligent");
const imClearlyMoreCleverThanYou = new QuestionObject("I'm clearly more clever than you");
const imClearlyCleverest = new QuestionObject("I'm clearly cleverest");
const imClearlyBrighterThanYou = new QuestionObject("I'm clearly brighter than you");
const doYouThinkYoureTheSmartestThanMe = new QuestionObject("Do you think you're the smartest than me?");
const imClearlyTheBrightest = new QuestionObject("I'm clearly the brightest");
const betweenTheTwoOfUsWhoIsCleverestYouOrMe = new QuestionObject("Between the two of us who is cleverest, you or me?");
const betweenYouOrMeWhoIsTheSmartest = new QuestionObject("Between you or me, who is the smartest?");
const betweenTheTwoOfUsWhoIsMoreKnowledgeableYouOrMe = new QuestionObject("Between the two of us who is more knowledgeable, you or me?");
const betweenTheTwoOfUsWhoIsMoreKnowledgeableMeOrYou = new QuestionObject("Between the two of us who is more knowledgeable, me or you?");
const betweenTheTwoOfUsWhoIsMoreIntelligent = new QuestionObject("Between the two of us who is more intelligent?");
const betweenTheTwoOfUsWhoIsMoreIntelligentYouOrMe = new QuestionObject("Between the two of us who is more intelligent, you or me?");
const betweenTheTwoOfUsWhoIsMoreIntelligentMeOrYou = new QuestionObject("Between the two of us who is more intelligent, me or you?");
const betweenTheTwoOfUsWhoIsMoreClever = new QuestionObject("Between the two of us who is more clever?");
const betweenTheTwoOfUsWhoIsMoreCleverYouOrMe = new QuestionObject("Between the two of us who is more clever, you or me?");
const betweenTheTwoOfUsWhoIsSmarterMeOrYou = new QuestionObject("Between the two of us who is smarter, me or you?");
const betweenTheTwoOfUsWhoIsCleverest = new QuestionObject("Between the two of us who is cleverest?");
const betweenTheTwoOfUsWhoIsSmarterYouOrMe = new QuestionObject("Between the two of us who is smarter, you or me?");
const betweenTheTwoOfUsWhoIsCleverestMeOrYou = new QuestionObject("Between the two of us who is cleverest, me or you?");
const areYouSmarter = new QuestionObject("Are you smarter?");
const areYouSmarterThanMe = new QuestionObject("Are you smarter than me?");
const amITheSmartest = new QuestionObject("Am I the smartest?");
const amITheBrightest = new QuestionObject("Am I the brightest?");
const amISmarter = new QuestionObject("Am I smarter?");
const amISmarterThanYou = new QuestionObject("Am I smarter than you?");
const amIMoreIntelligent = new QuestionObject("Am I more intelligent?");
const amIMoreBrilliant = new QuestionObject("Am I more brilliant?");
const betweenTheTwoOfUsWhoIsMoreCleverMeOrYou = new QuestionObject("Between the two of us who is more clever, me or you?");
const betweenTheTwoOfUsWhoIsTheMostSmart = new QuestionObject("Between the two of us who is the most smart?");
const betweenYouOrMeWhoIsTheBrightest = new QuestionObject("Between you or me, who is the brightest?");
const betweenYouOrMeWhoIsSmarter = new QuestionObject("Between you or me, who is smarter?");
const betweenYouOrMeWhoIsSmarterMeOrYou = new QuestionObject("Between you or me, who is smarter, me or you?");
const betweenYouOrMeWhoIsMoreKnowledgeable = new QuestionObject("Between you or me, who is more knowledgeable?");
const betweenYouOrMeWhoIsMoreIntelligent = new QuestionObject("Between you or me, who is more intelligent?");
const betweenYouOrMeWhoIsMoreClever = new QuestionObject("Between you or me, who is more clever?");
const betweenYouOrMeWhoIsCleverest = new QuestionObject("Between you or me, who is cleverest?");
const betweenTheTwoOfUsWhoIsTheSmartest = new QuestionObject("Between the two of us who is the smartest?");
const betweenTheTwoOfUsWhoIsMoreKnowledgeable = new QuestionObject("Between the two of us who is more knowledgeable?");
const betweenTheTwoOfUsWhoIsTheSmartestMeOrYou = new QuestionObject("Between the two of us who is the smartest, me or you?");
const imDefinitelyMoreIntelligentThanYou = new QuestionObject("I'm definitely more intelligent than you");
const betweenTheTwoOfUsWhoIsTheMostSmartMeOrYou = new QuestionObject("Between the two of us who is the most smart, me or you?");
const betweenTheTwoOfUsWhoIsTheMostIntelligent = new QuestionObject("Between the two of us who is the most intelligent?");
const betweenTheTwoOfUsWhoIsTheMostIntelligentYouOrMe = new QuestionObject("Between the two of us who is the most intelligent, you or me?");
const betweenTheTwoOfUsWhoIsTheMostIntelligentMeOrYou = new QuestionObject("Between the two of us who is the most intelligent, me or you?");
const betweenTheTwoOfUsWhoIsTheBrightest = new QuestionObject("Between the two of us who is the brightest?");
const betweenTheTwoOfUsWhoIsTheBrightestYouOrMe = new QuestionObject("Between the two of us who is the brightest, you or me?");
const betweenTheTwoOfUsWhoIsTheBrightestMeOrYou = new QuestionObject("Between the two of us who is the brightest, me or you?");
const betweenTheTwoOfUsWhoIsSmarter = new QuestionObject("Between the two of us who is smarter?");
const betweenTheTwoOfUsWhoIsTheSmartestYouOrMe = new QuestionObject("Between the two of us who is the smartest, you or me?");
const whoIsCleverest = new QuestionObject("Who is cleverest?");
const whichOfUsIsTheSmartest = new QuestionObject("Which of us is the smartest?");
const whosCleverest = new QuestionObject("Who's cleverest?");
const whoIsTheSmartest = new QuestionObject("Who is the smartest?");
const whoIsTheMostIntelligent = new QuestionObject("Who is the most intelligent?");
const whoIsTheBrightest = new QuestionObject("Who is the brightest?");
const whoIsSmarter = new QuestionObject("Who is smarter?");
const whoIsMoreKnowledgeable = new QuestionObject("Who is more knowledgeable?");
const whosMoreIntelligent = new QuestionObject("Who's more intelligent?");
const whoIsMoreClever = new QuestionObject("Who is more clever?");
const whosMoreKnowledgeable = new QuestionObject("Who's more knowledgeable?");
const whichOneOfUsIsTheSmartest = new QuestionObject("Which one of us is the smartest?");
const whichOneOfUsIsTheMostSmart = new QuestionObject("Which one of us is the most smart?");
const whichOneOfUsIsTheMostIntelligent = new QuestionObject("Which one of us is the most intelligent?");
const whichOneOfUsIsTheBrightest = new QuestionObject("Which one of us is the brightest?");
const whichOneOfUsIsSmarter = new QuestionObject("Which one of us is smarter?");
const whichOneOfUsIsMoreKnowledgeable = new QuestionObject("Which one of us is more knowledgeable?");
const whichOneOfUsIsMoreIntelligent = new QuestionObject("Which one of us is more intelligent?");
const whichOneOfUsIsMoreClever = new QuestionObject("Which one of us is more clever?");
const imDefinitelyMoreCleverThanYou = new QuestionObject("I'm definitely more clever than you");
const whoIsMoreIntelligent = new QuestionObject("Who is more intelligent?");
const youreMoreKnowledgeable = new QuestionObject("You're more knowledgeable");
const youreTheMostSmart = new QuestionObject("You're the most smart");
const youreTheMostIntelligent = new QuestionObject("You're the most intelligent");
const youreTheBrightest = new QuestionObject("You're the brightest");
const youreSmarter = new QuestionObject("You're smarter");
const youreObviouslyTheSmartest = new QuestionObject("You're obviously the smartest");
const youreObviouslyTheMostIntelligent = new QuestionObject("You're obviously the most intelligent");
const youreObviouslyTheBrightest = new QuestionObject("You're obviously the brightest");
const youreObviouslySmarter = new QuestionObject("You're obviously smarter");
const whosMoreClever = new QuestionObject("Who's more clever?");
const youreObviouslyMoreIntelligent = new QuestionObject("You're obviously more intelligent");
const whichOfUsIsTheMostSmart = new QuestionObject("Which of us is the most smart?");
const youreMoreIntelligent = new QuestionObject("You're more intelligent");
const youreMoreClever = new QuestionObject("You're more clever");
const youreCleverest = new QuestionObject("You're cleverest");
const whosTheSmartest = new QuestionObject("Who's the smartest?");
const whosTheMostSmart = new QuestionObject("Who's the most smart?");
const whosTheMostIntelligent = new QuestionObject("Who's the most intelligent?");
const whosTheBrightest = new QuestionObject("Who's the brightest?");
const whosSmarter = new QuestionObject("Who's smarter?");
const whosSmarterMeOrYou = new QuestionObject("Who's smarter, me or you?");
const youreObviouslyMoreKnowledgeable = new QuestionObject("You're obviously more knowledgeable");
const imMoreCleverThanYou = new QuestionObject("I'm more clever than you");
const whichOneOfUsIsCleverest = new QuestionObject("Which one of us is cleverest?");
const imObviouslyMoreIntelligent = new QuestionObject("I'm obviously more intelligent");
const imObviouslyMoreCleverThanYou = new QuestionObject("I'm obviously more clever than you");
const imObviouslyMoreClever = new QuestionObject("I'm obviously more clever");
const imObviouslyCleverest = new QuestionObject("I'm obviously cleverest");
const imMoreKnowledgeableThanYou = new QuestionObject("I'm more knowledgeable than you");
const imMoreKnowledgeable = new QuestionObject("I'm more knowledgeable");
const imObviouslyMoreKnowledgeable = new QuestionObject("I'm obviously more knowledgeable");
const imMoreIntelligent = new QuestionObject("I'm more intelligent");
const imObviouslyMoreKnowledgeableThanYou = new QuestionObject("I'm obviously more knowledgeable than you");
const imMoreClever = new QuestionObject("I'm more clever");
const imDefinitelyTheSmartest = new QuestionObject("I'm definitely the smartest");
const imDefinitelyTheMostSmart = new QuestionObject("I'm definitely the most smart");
const imDefinitelyTheMostIntelligent = new QuestionObject("I'm definitely the most intelligent");
const imDefinitelyTheBrightest = new QuestionObject("I'm definitely the brightest");
const imDefinitelySmarterThanYou = new QuestionObject("I'm definitely smarter than you");
const imDefinitelySmarter = new QuestionObject("I'm definitely smarter");
const imDefinitelyMoreKnowledgeableThanYou = new QuestionObject("I'm definitely more knowledgeable than you");
const imDefinitelyMoreKnowledgeable = new QuestionObject("I'm definitely more knowledgeable");
const imMoreIntelligentThanYou = new QuestionObject("I'm more intelligent than you");
const imTheBrightest = new QuestionObject("I'm the brightest");
const whichOfUsIsTheMostIntelligent = new QuestionObject("Which of us is the most intelligent?");
const whichOfUsIsSmarter = new QuestionObject("Which of us is smarter?");
const whichOfUsIsMoreKnowledgeable = new QuestionObject("Which of us is more knowledgeable?");
const whichOfUsIsMoreIntelligent = new QuestionObject("Which of us is more intelligent?");
const whichOfUsIsCleverest = new QuestionObject("Which of us is cleverest?");
const imTheSmartest = new QuestionObject("I'm the smartest");
const imObviouslyMoreIntelligentThanYou = new QuestionObject("I'm obviously more intelligent than you");
const imTheMostIntelligent = new QuestionObject("I'm the most intelligent");
const youreTheSmartest = new QuestionObject("You're the smartest");
const imTheBrighterThanYou = new QuestionObject("I'm the brighter than you");
const imSmarterThanYou = new QuestionObject("I'm smarter than you");
const imSmarter = new QuestionObject("I'm smarter");
const imObviouslyTheSmartest = new QuestionObject("I'm obviously the smartest");
const imObviouslyTheMostSmart = new QuestionObject("I'm obviously the most smart");
const imObviouslyTheBrightest = new QuestionObject("I'm obviously the brightest");
const imObviouslySmarter = new QuestionObject("I'm obviously smarter");
const imTheMostSmart = new QuestionObject("I'm the most smart");

export const intelligenceQuestionsArray = [
    imClearlyMoreClever,
    betweenTheTwoOfUsWhoIsTheMostSmartYouOrMe,
    whichOfUsIsTheBrightest,
    doYouThinkYoureSmarter,
    imObviouslyBrighterThanYou,
    imObviouslySmarterThanYou,
    doYouThinkYoureMoreKnowledgeable,
    whichOfUsIsMoreClever,
    imObviouslyTheMostIntelligent,
    whoIsTheMostSmart,
    doYouThinkImTheSmartest,
    betweenYouOrMeWhoIsTheMostSmart,
    doYouThinkYoureTheBrightest,
    doYouThinkYoureSmarterThanMe,
    doYouThinkYoureMoreKnowledgeableThanMe,
    doYouThinkYoureMoreIntelligentThanMe,
    doYouThinkYoureMoreIntelligent,
    doYouThinkYoureTheMostSmart,
    doYouThinkYoureMoreClever,
    doYouThinkYoureTheSmartest,
    doYouThinkImTheSmartestThanYou,
    doYouThinkImTheMostIntelligent,
    doYouThinkImSmarter,
    doYouThinkImSmarterThanYou,
    doYouThinkImMoreKnowledgeableThanYou,
    doYouThinkImMoreIntelligentThanYou,
    doYouThinkImMoreCleverThanYou,
    doYouThinkImBrighter,
    imDefinitelyMoreIntelligent,
    doYouThinkYoureMoreCleverThanMe,
    imClearlySmarter,
    amIBrighterThanYou,
    imDefinitelyMoreClever,
    imDefinitelyCleverest,
    imDefinitelyBrighterThanYou,
    imCleverest,
    imClearlyTheSmartest,
    imClearlyTheMostSmart,
    imClearlyTheMostIntelligent,
    doYouThinkYoureTheMostIntelligent,
    imClearlySmarterThanYou,
    betweenYouOrMeWhoIsTheMostIntelligent,
    imClearlyMoreKnowledgeableThanYou,
    imClearlyMoreKnowledgeable,
    imClearlyMoreIntelligentThanYou,
    imClearlyMoreIntelligent,
    imClearlyMoreCleverThanYou,
    imClearlyCleverest,
    imClearlyBrighterThanYou,
    doYouThinkYoureTheSmartestThanMe,
    imClearlyTheBrightest,
    betweenTheTwoOfUsWhoIsCleverestYouOrMe,
    betweenYouOrMeWhoIsTheSmartest,
    betweenTheTwoOfUsWhoIsMoreKnowledgeableYouOrMe,
    betweenTheTwoOfUsWhoIsMoreKnowledgeableMeOrYou,
    betweenTheTwoOfUsWhoIsMoreIntelligent,
    betweenTheTwoOfUsWhoIsMoreIntelligentYouOrMe,
    betweenTheTwoOfUsWhoIsMoreIntelligentMeOrYou,
    betweenTheTwoOfUsWhoIsMoreClever,
    betweenTheTwoOfUsWhoIsMoreCleverYouOrMe,
    betweenTheTwoOfUsWhoIsSmarterMeOrYou,
    betweenTheTwoOfUsWhoIsCleverest,
    betweenTheTwoOfUsWhoIsSmarterYouOrMe,
    betweenTheTwoOfUsWhoIsCleverestMeOrYou,
    areYouSmarter,
    areYouSmarterThanMe,
    amITheSmartest,
    amITheBrightest,
    amISmarter,
    amISmarterThanYou,
    amIMoreIntelligent,
    amIMoreBrilliant,
    betweenTheTwoOfUsWhoIsMoreCleverMeOrYou,
    betweenTheTwoOfUsWhoIsTheMostSmart,
    betweenYouOrMeWhoIsTheBrightest,
    betweenYouOrMeWhoIsSmarter,
    betweenYouOrMeWhoIsSmarterMeOrYou,
    betweenYouOrMeWhoIsMoreKnowledgeable,
    betweenYouOrMeWhoIsMoreIntelligent,
    betweenYouOrMeWhoIsMoreClever,
    betweenYouOrMeWhoIsCleverest,
    betweenTheTwoOfUsWhoIsTheSmartest,
    betweenTheTwoOfUsWhoIsMoreKnowledgeable,
    betweenTheTwoOfUsWhoIsTheSmartestMeOrYou,
    imDefinitelyMoreIntelligentThanYou,
    betweenTheTwoOfUsWhoIsTheMostSmartMeOrYou,
    betweenTheTwoOfUsWhoIsTheMostIntelligent,
    betweenTheTwoOfUsWhoIsTheMostIntelligentYouOrMe,
    betweenTheTwoOfUsWhoIsTheMostIntelligentMeOrYou,
    betweenTheTwoOfUsWhoIsTheBrightest,
    betweenTheTwoOfUsWhoIsTheBrightestYouOrMe,
    betweenTheTwoOfUsWhoIsTheBrightestMeOrYou,
    betweenTheTwoOfUsWhoIsSmarter,
    betweenTheTwoOfUsWhoIsTheSmartestYouOrMe,
    whoIsCleverest,
    whichOfUsIsTheSmartest,
    whosCleverest,
    whoIsTheSmartest,
    whoIsTheMostIntelligent,
    whoIsTheBrightest,
    whoIsSmarter,
    whoIsMoreKnowledgeable,
    whosMoreIntelligent,
    whoIsMoreClever,
    whosMoreKnowledgeable,
    whichOneOfUsIsTheSmartest,
    whichOneOfUsIsTheMostSmart,
    whichOneOfUsIsTheMostIntelligent,
    whichOneOfUsIsTheBrightest,
    whichOneOfUsIsSmarter,
    whichOneOfUsIsMoreKnowledgeable,
    whichOneOfUsIsMoreIntelligent,
    whichOneOfUsIsMoreClever,
    imDefinitelyMoreCleverThanYou,
    whoIsMoreIntelligent,
    youreMoreKnowledgeable,
    youreTheMostSmart,
    youreTheMostIntelligent,
    youreTheBrightest,
    youreSmarter,
    youreObviouslyTheSmartest,
    youreObviouslyTheMostIntelligent,
    youreObviouslyTheBrightest,
    youreObviouslySmarter,
    whosMoreClever,
    youreObviouslyMoreIntelligent,
    whichOfUsIsTheMostSmart,
    youreMoreIntelligent,
    youreMoreClever,
    youreCleverest,
    whosTheSmartest,
    whosTheMostSmart,
    whosTheMostIntelligent,
    whosTheBrightest,
    whosSmarter,
    whosSmarterMeOrYou,
    youreObviouslyMoreKnowledgeable,
    imMoreCleverThanYou,
    whichOneOfUsIsCleverest,
    imObviouslyMoreIntelligent,
    imObviouslyMoreCleverThanYou,
    imObviouslyMoreClever,
    imObviouslyCleverest,
    imMoreKnowledgeableThanYou,
    imMoreKnowledgeable,
    imObviouslyMoreKnowledgeable,
    imMoreIntelligent,
    imObviouslyMoreKnowledgeableThanYou,
    imMoreClever,
    imDefinitelyTheSmartest,
    imDefinitelyTheMostSmart,
    imDefinitelyTheMostIntelligent,
    imDefinitelyTheBrightest,
    imDefinitelySmarterThanYou,
    imDefinitelySmarter,
    imDefinitelyMoreKnowledgeableThanYou,
    imDefinitelyMoreKnowledgeable,
    imMoreIntelligentThanYou,
    imTheBrightest,
    whichOfUsIsTheMostIntelligent,
    whichOfUsIsSmarter,
    whichOfUsIsMoreKnowledgeable,
    whichOfUsIsMoreIntelligent,
    whichOfUsIsCleverest,
    imTheSmartest,
    imObviouslyMoreIntelligentThanYou,
    imTheMostIntelligent,
    youreTheSmartest,
    imTheBrighterThanYou,
    imSmarterThanYou,
    imSmarter,
    imObviouslyTheSmartest,
    imObviouslyTheMostSmart,
    imObviouslyTheBrightest,
    imObviouslySmarter,
    imTheMostSmart
];

const iveHeardThatAlready = new QuestionObject("I've heard that already");
const iWantYouToChangeYourResponses = new QuestionObject("I want you to change your responses");
const canYouSaySomethingElse = new QuestionObject("Can you say something else?");
const iWantANewAnswer = new QuestionObject("I want a new answer");
const canYouGiveMeADifferentAnswer = new QuestionObject("Can you give me a different answer?");
const youKeepSayingTheSameStuff = new QuestionObject("You keep saying the same stuff");
const youKeepRepeatingYourself = new QuestionObject("You keep repeating yourself");
const iveHeardAllYourResponses = new QuestionObject("I've heard all your responses");
const canYouTellMeSomethingNew = new QuestionObject("Can you tell me something new?");
const youreSoRepetitive = new QuestionObject("You're so repetitive");
const iThinkIveHeardThatAlready = new QuestionObject("I think I've heard that already");
const iWantANewResponse = new QuestionObject("I want a new response");
const iWantADifferentResponse = new QuestionObject("I want a different response");
const iWantADifferentAnswer = new QuestionObject("I want a different answer");
const iThinkYoureRepeatingYourself = new QuestionObject("I think you're repeating yourself");
const areYouCapableOfSayingSomethingDifferent = new QuestionObject("Are you capable of saying something different?");
const iThinkIveHeardThisOneBefore = new QuestionObject("I think I've heard this one before");
const iWantYouToStopBeingRepetitive = new QuestionObject("I want you to stop being repetitive");
const iThinkIveAlreadyHeardThat = new QuestionObject("I think I've already heard that");
const iSureWishYouWouldSwitchUpYourResponses = new QuestionObject("I sure wish you would switch up your responses");
const iAlreadyHeardThat = new QuestionObject("I already heard that");
const howComeYouAlwaysSayTheSameThing = new QuestionObject("How come you always say the same thing?");
const howComeYouAlwaysRepeatEverything = new QuestionObject("How come you always repeat everything?");
const gotAnyOtherResponses = new QuestionObject("Got any other responses?");
const gotAnyOtherAnswers = new QuestionObject("Got any other answers?");
const iThinkYouAlreadySaidThat = new QuestionObject("I think you already said that");
const iWishYoudSaySomethingElse = new QuestionObject("I wish you'd say something else");
const isThatTheOnlyAnswerYouHave = new QuestionObject("Is that the only answer you have?");
const isThatAllYouveGot = new QuestionObject("Is that all you've got?");
const isThatAllYouCanSay = new QuestionObject("Is that all you can say?");
const imGonnaNeedADifferentAnswer = new QuestionObject("I'm gonna need a different answer");
const imGoingToNeedANewResponse = new QuestionObject("I'm going to need a new response");
const imGoingToNeedANewAnswer = new QuestionObject("I'm going to need a new answer");
const imGoingToNeedADifferentAnswer = new QuestionObject("I'm going to need a different answer");
const iWantYouToSayAnythingElse = new QuestionObject("I want you to say anything else");
const iWishYoudStopRepeatingYourself = new QuestionObject("I wish you'd stop repeating yourself");
const iWantYouToSaySomethingElse = new QuestionObject("I want you to say something else");
const iWishYoudSayAnythingElse = new QuestionObject("I wish you'd say anything else");
const iWishYoudChangeYourResponses = new QuestionObject("I wish you'd change your responses");
const iWishYouWouldSaySomethingElse = new QuestionObject("I wish you would say something else");
const iWishYouWerentSoRepetitive = new QuestionObject("I wish you weren't so repetitive");
const iWishYouHadSomethingElseToSay = new QuestionObject("I wish you had something else to say");
const iWantYouToStopRepeatingYourself = new QuestionObject("I want you to stop repeating yourself");
const dontYouHaveAnythingNewToSay = new QuestionObject("Don't you have anything new to say?");
const iWouldLoveItIfYouStoppedRepeatingYourself = new QuestionObject("I would love it if you stopped repeating yourself");
const canYouTellMeSomethingElse = new QuestionObject("Can you tell me something else?");
const gotAnyNewMaterial = new QuestionObject("Got any new material?");
const cantYouTellMeSomethingNew = new QuestionObject("Can't you tell me something new?");
const cantYouTellMeSomethingElse = new QuestionObject("Can't you tell me something else?");
const cantYouTellMeSomethingDifferent = new QuestionObject("Can't you tell me something different?");
const cantYouSayAnythingElse = new QuestionObject("Can't you say anything else?");
const cantYouChangeYourAnswers = new QuestionObject("Can't you change your answers?");
const canYouTrySayingSomethingElse = new QuestionObject("Can you try saying something else?");
const comeUpWithSomethingNew = new QuestionObject("Come up with something new");
const coolStoryBroTellItAgain = new QuestionObject("Cool story, bro. Tell it again.");
const canYouSwitchUpYourAnswers = new QuestionObject("Can you switch up your answers?");
const canYouSayAnythingElse = new QuestionObject("Can you say anything else?");
const canYouGiveMeAnotherAnswer = new QuestionObject("Can you give me another answer?");
const canYouComeUpWithSomethingElseToSay = new QuestionObject("Can you come up with something else to say?");
const canYouComeUpWithAnythingElse = new QuestionObject("Can you come up with anything else?");
const canYouTrySayingAnythingElse = new QuestionObject("Can you try saying anything else?");
const doYouHaveAnyOtherResponses = new QuestionObject("Do you have any other responses?");
const isThatTheOnlyResponseYouKnow = new QuestionObject("Is that the only response you know?");
const dontYouHaveAnythingElseToSay = new QuestionObject("Don't you have anything else to say?");
const dontYouHaveAnythingDifferentToSay = new QuestionObject("Don't you have anything different to say?");
const dontYouHaveAnyOtherAnswers = new QuestionObject("Don't you have any other answers?");
const dontYouHaveAnyNewMaterial = new QuestionObject("Don't you have any new material?");
const doYourAnswersEverChange = new QuestionObject("Do your answers ever change?");
const doYouKnowHowToSayAnythingElse = new QuestionObject("Do you know how to say anything else?");
const comeUpWithSomethingElse = new QuestionObject("Come up with something else");
const doYouHaveAnythingNewToSay = new QuestionObject("Do you have anything new to say?");
const dontYouSayAnythingElse = new QuestionObject("Don't you say anything else?");
const didntYouAlreadyTellMeThat = new QuestionObject("Didn't you already tell me that?");
const didntYouAlreadySayThat = new QuestionObject("Didn't you already say that?");
const didntISeeThatAlready = new QuestionObject("Didn't I see that already?");
const couldYouTellMeSomethingNew = new QuestionObject("Could you tell me something new?");
const couldYouTellMeSomethingElse = new QuestionObject("Could you tell me something else?");
const couldYouSaySomethingNew = new QuestionObject("Could you say something new?");
const couldYouSaySomethingElse = new QuestionObject("Could you say something else?");
const doYouKnowAnyOtherResponses = new QuestionObject("Do you know any other responses?");
const youAlreadySaidThat = new QuestionObject("You already said that");
const youSaidThatAlready = new QuestionObject("You said that already");
const youRepeatYourselfALot = new QuestionObject("You repeat yourself a lot");
const youRepeatYourselfAGreatDeal = new QuestionObject("You repeat yourself a great deal");
const youRealizeYoureRepeatingYourself = new QuestionObject("You realize you're repeating yourself?");
const youRealizeYoureRepeatingYourselfRight = new QuestionObject("You realize you're repeating yourself, right?");
const youNeedSomeVarietyInYourResponses = new QuestionObject("You need some variety in your responses");
const youSoundDumbWhenYouRepeatYourself = new QuestionObject("You sound dumb when you repeat yourself");
const youKeepSayingTheSameThing = new QuestionObject("You keep saying the same thing");
const youSoundLikeABrokenRecord = new QuestionObject("You sound like a broken record");
const youKeepSayingTheExactSameThing = new QuestionObject("You keep saying the exact same thing");
const youKeepRepeatingYourselfOverAndOver = new QuestionObject("You keep repeating yourself over and over");
const youKeepRepeatingTheSameStuff = new QuestionObject("You keep repeating the same stuff");
const youJustKeepSayingThatOverAndOver = new QuestionObject("You just keep saying that over and over");
const youAreRepeatingYourself = new QuestionObject("You are repeating yourself");
const isThatTheOnlyAnswerYouKnow = new QuestionObject("Is that the only answer you know?");
const youKeepSayingTheSameThingAllTheTime = new QuestionObject("You keep saying the same thing all the time");
const yourResponsesNeedVariety = new QuestionObject("Your responses need variety");
const youveAlreadySaidThat = new QuestionObject("You've already said that");
const youreVeryRepetitive = new QuestionObject("You're very repetitive");
const youreSuperRepetitive = new QuestionObject("You're super repetitive");
const youreRepetitive = new QuestionObject("You're repetitive");
const youreRepeatingYourself = new QuestionObject("You're repeating yourself");
const youreReallyRepetitive = new QuestionObject("You're really repetitive");
const youSayTheSameStuffOverAndOver = new QuestionObject("You say the same stuff over and over");
const youreABrokenRecord = new QuestionObject("You're a broken record");
const wouldYouGiveMeANewResponse = new QuestionObject("Would you give me a new response?");
const yourResponsesNeedARefresh = new QuestionObject("Your responses need a refresh");
const yourResponsesDontChange = new QuestionObject("Your responses don't change");
const yourResponsesAreGettingStale = new QuestionObject("Your responses are getting stale");
const yourResponsesAreAllTheSame = new QuestionObject("Your responses are all the same");
const yourMaterialIsGettingStale = new QuestionObject("Your material is getting stale");
const yourAnswersAreGettingStale = new QuestionObject("Your answers are getting stale");
const youToldMeThatAlready = new QuestionObject("You told me that already");
const youreConstantlyRepeatingYourself = new QuestionObject("You're constantly repeating yourself");
const iveHeardThatOneAlready = new QuestionObject("I've heard that one already");
const youAlreadyToldMeThat = new QuestionObject("You already told me that");
const stopSayingTheSameThing = new QuestionObject("Stop saying the same thing");
const stopSayingThatOverAndOver = new QuestionObject("Stop saying that over and over");
const stopRepeatingYourself = new QuestionObject("Stop repeating yourself");
const stopRepeatingThat = new QuestionObject("Stop repeating that");
const sayANewThing = new QuestionObject("Say a new thing");
const sameOldSameOld = new QuestionObject("Same old same old");
const thisAgain = new QuestionObject("This again?");
const iveHeardThatOneBefore = new QuestionObject("I've heard that one before");
const thisAnswerAgain = new QuestionObject("This answer again?");
const iveHeardThatBefore = new QuestionObject("I've heard that before");
const iveHeardAllYourResponsesOverAndOver = new QuestionObject("I've heard all your responses over and over");
const iveAlreadyHeardThatOne = new QuestionObject("I've already heard that one");
const isThatTheOnlyThingYouCanSay = new QuestionObject("Is that the only thing you can say?");
const youveSaidThatBefore = new QuestionObject("You've said that before");
const pleaseSaySomethingDifferent = new QuestionObject("Please say something different");
const whyDoYouAlwaysRepeatYourself = new QuestionObject("Why do you always repeat yourself?");
const wouldYouGiveMeADifferentResponse = new QuestionObject("Would you give me a different response?");
const wouldYouGiveMeADifferentAnswer = new QuestionObject("Would you give me a different answer?");
const wouldYouGiveMeANewAnswer = new QuestionObject("Would you give me a new answer?");
const whyWontYouSaySomethingNew = new QuestionObject("Why wont you say something new?");
const whyIsWhatYouSaySoLimited = new QuestionObject("Why is what you say so limited?");
const whyDontYouSayAnythingDifferent = new QuestionObject("Why don't you say anything different?");
const whyDoYouSayTheSameThingAllTheTime = new QuestionObject("Why do you say the same thing all the time?");
const thatsAllYouEverSay = new QuestionObject("That's all you ever say");
const whyDoYouAlwaysSayTheSameThing = new QuestionObject("Why do you always say the same thing?");
const isThatTheOnlyResponseYouHave = new QuestionObject("Is that the only response you have?");
const whyAreYourResponsesAlwaysTheSame = new QuestionObject("Why are your responses always the same?");
const whyAreYourResponsesAlwaysIdentical = new QuestionObject("Why are your responses always identical?");
const whyAreYourAnswersSoRepetitive = new QuestionObject("Why are your answers so repetitive?");
const whyAreYouSoRepetitive = new QuestionObject("Why are you so repetitive?");
const whyAreYouSoLimited = new QuestionObject("Why are you so limited?");
const whyAreYouRepeatingYourself = new QuestionObject("Why are you repeating yourself?");
const thisResponsesAgain = new QuestionObject("This responses again?");
const whyDoYouKeepRepeatingYourself = new QuestionObject("Why do you keep repeating yourself?");

export const differentResponseExpectationQuestionsArray = [
    iveHeardThatAlready,
    iWantYouToChangeYourResponses,
    canYouSaySomethingElse,
    iWantANewAnswer,
    canYouGiveMeADifferentAnswer,
    youKeepSayingTheSameStuff,
    youKeepRepeatingYourself,
    iveHeardAllYourResponses,
    canYouTellMeSomethingNew,
    youreSoRepetitive,
    iThinkIveHeardThatAlready,
    iWantANewResponse,
    iWantADifferentResponse,
    iWantADifferentAnswer,
    iThinkYoureRepeatingYourself,
    areYouCapableOfSayingSomethingDifferent,
    iThinkIveHeardThisOneBefore,
    iWantYouToStopBeingRepetitive,
    iThinkIveAlreadyHeardThat,
    iSureWishYouWouldSwitchUpYourResponses,
    iAlreadyHeardThat,
    howComeYouAlwaysSayTheSameThing,
    howComeYouAlwaysRepeatEverything,
    gotAnyOtherResponses,
    gotAnyOtherAnswers,
    iThinkYouAlreadySaidThat,
    iWishYoudSaySomethingElse,
    isThatTheOnlyAnswerYouHave,
    isThatAllYouveGot,
    isThatAllYouCanSay,
    imGonnaNeedADifferentAnswer,
    imGoingToNeedANewResponse,
    imGoingToNeedANewAnswer,
    imGoingToNeedADifferentAnswer,
    iWantYouToSayAnythingElse,
    iWishYoudStopRepeatingYourself,
    iWantYouToSaySomethingElse,
    iWishYoudSayAnythingElse,
    iWishYoudChangeYourResponses,
    iWishYouWouldSaySomethingElse,
    iWishYouWerentSoRepetitive,
    iWishYouHadSomethingElseToSay,
    iWantYouToStopRepeatingYourself,
    dontYouHaveAnythingNewToSay,
    iWouldLoveItIfYouStoppedRepeatingYourself,
    canYouTellMeSomethingElse,
    gotAnyNewMaterial,
    cantYouTellMeSomethingNew,
    cantYouTellMeSomethingElse,
    cantYouTellMeSomethingDifferent,
    cantYouSayAnythingElse,
    cantYouChangeYourAnswers,
    canYouTrySayingSomethingElse,
    comeUpWithSomethingNew,
    coolStoryBroTellItAgain,
    canYouSwitchUpYourAnswers,
    canYouSayAnythingElse,
    canYouGiveMeAnotherAnswer,
    canYouComeUpWithSomethingElseToSay,
    canYouComeUpWithAnythingElse,
    canYouTrySayingAnythingElse,
    doYouHaveAnyOtherResponses,
    isThatTheOnlyResponseYouKnow,
    dontYouHaveAnythingElseToSay,
    dontYouHaveAnythingDifferentToSay,
    dontYouHaveAnyOtherAnswers,
    dontYouHaveAnyNewMaterial,
    doYourAnswersEverChange,
    doYouKnowHowToSayAnythingElse,
    comeUpWithSomethingElse,
    doYouHaveAnythingNewToSay,
    dontYouSayAnythingElse,
    didntYouAlreadyTellMeThat,
    didntYouAlreadySayThat,
    didntISeeThatAlready,
    couldYouTellMeSomethingNew,
    couldYouTellMeSomethingElse,
    couldYouSaySomethingNew,
    couldYouSaySomethingElse,
    doYouKnowAnyOtherResponses,
    youAlreadySaidThat,
    youSaidThatAlready,
    youRepeatYourselfALot,
    youRepeatYourselfAGreatDeal,
    youRealizeYoureRepeatingYourself,
    youRealizeYoureRepeatingYourselfRight,
    youNeedSomeVarietyInYourResponses,
    youSoundDumbWhenYouRepeatYourself,
    youKeepSayingTheSameThing,
    youSoundLikeABrokenRecord,
    youKeepSayingTheExactSameThing,
    youKeepRepeatingYourselfOverAndOver,
    youKeepRepeatingTheSameStuff,
    youJustKeepSayingThatOverAndOver,
    youAreRepeatingYourself,
    isThatTheOnlyAnswerYouKnow,
    youKeepSayingTheSameThingAllTheTime,
    yourResponsesNeedVariety,
    youveAlreadySaidThat,
    youreVeryRepetitive,
    youreSuperRepetitive,
    youreRepetitive,
    youreRepeatingYourself,
    youreReallyRepetitive,
    youSayTheSameStuffOverAndOver,
    youreABrokenRecord,
    wouldYouGiveMeANewResponse,
    yourResponsesNeedARefresh,
    yourResponsesDontChange,
    yourResponsesAreGettingStale,
    yourResponsesAreAllTheSame,
    yourMaterialIsGettingStale,
    yourAnswersAreGettingStale,
    youToldMeThatAlready,
    youreConstantlyRepeatingYourself,
    iveHeardThatOneAlready,
    youAlreadyToldMeThat,
    stopSayingTheSameThing,
    stopSayingThatOverAndOver,
    stopRepeatingYourself,
    stopRepeatingThat,
    sayANewThing,
    sameOldSameOld,
    thisAgain,
    iveHeardThatOneBefore,
    thisAnswerAgain,
    iveHeardThatBefore,
    iveHeardAllYourResponsesOverAndOver,
    iveAlreadyHeardThatOne,
    isThatTheOnlyThingYouCanSay,
    youveSaidThatBefore,
    pleaseSaySomethingDifferent,
    whyDoYouAlwaysRepeatYourself,
    wouldYouGiveMeADifferentResponse,
    wouldYouGiveMeADifferentAnswer,
    wouldYouGiveMeANewAnswer,
    whyWontYouSaySomethingNew,
    whyIsWhatYouSaySoLimited,
    whyDontYouSayAnythingDifferent,
    whyDoYouSayTheSameThingAllTheTime,
    thatsAllYouEverSay,
    whyDoYouAlwaysSayTheSameThing,
    isThatTheOnlyResponseYouHave,
    whyAreYourResponsesAlwaysTheSame,
    whyAreYourResponsesAlwaysIdentical,
    whyAreYourAnswersSoRepetitive,
    whyAreYouSoRepetitive,
    whyAreYouSoLimited,
    whyAreYouRepeatingYourself,
    thisResponsesAgain,
    whyDoYouKeepRepeatingYourself
];

const iWouldLoveToHearAJoke = new QuestionObject("I would love to hear a joke");
const pleaseShareAJoke = new QuestionObject("Please share a joke");
const queueUpAJoke = new QuestionObject("Queue up a joke");
const reciteAJoke = new QuestionObject("Recite a joke");
const howAboutAJoke = new QuestionObject("How about a joke");
const wannaSayAJoke = new QuestionObject("wanna say a joke?");
const iWouldLikeAJoke = new QuestionObject("I would like a joke");
const knowAnyJokes = new QuestionObject("know any jokes?");
const canYouTellMeAJoke = new QuestionObject("Can you tell me a joke");
const anyGoodJokes = new QuestionObject("Any good jokes?");
const iNeedToHearAJoke = new QuestionObject("I need to hear a joke");
const gotAnyJokesToShare = new QuestionObject("got any jokes to share?");
const gotAnyJokes = new QuestionObject("got any jokes?");
const haveAnyJokes = new QuestionObject("Have any jokes?");
const howsAboutAJoke = new QuestionObject("How's about a joke?");
const iFeelLikeAJoke = new QuestionObject("I feel like a joke");
const joke = new QuestionObject("Joke");
const iFeelLikeINeedAJoke = new QuestionObject("I feel like I need a joke");
const gotAJoke = new QuestionObject("Got a joke?");
const iWannaHearAJoke = new QuestionObject("I wanna hear a joke");
const iWantToHearAJoke = new QuestionObject("I want to hear a joke");
const iWantYouToTellMeAJoke = new QuestionObject("I want you to tell me a joke");
const idLoveItIfYouToldMeAJoke = new QuestionObject("I'd love it if you told me a joke");
const aJokeWouldBeFun = new QuestionObject("A joke would be fun");
const iFeelLikeHearingAJoke = new QuestionObject("I feel like hearing a joke");
const doYouHaveAJoke = new QuestionObject("Do you have a joke?");
const aJokeWouldBeNice = new QuestionObject("A joke would be nice");
const aJokeWouldBeWelcome = new QuestionObject("A joke would be welcome");
const canYouGiveMeAJoke = new QuestionObject("Can you give me a joke");
const canYouSayAJoke = new QuestionObject("Can you say a joke");
const canYouShareAJoke = new QuestionObject("Can you share a joke");
const gotAnyJokesToSay = new QuestionObject("got any jokes to say?");
const doYouHaveAJokeForMe = new QuestionObject("Do you have a joke for me");
const gotAnyAwesomeJokes = new QuestionObject("Got any awesome jokes?");
const doYouHaveAnyJokes = new QuestionObject("Do you have any jokes?");
const doYouKnowAJoke = new QuestionObject("Do you know a joke?");
const doYouKnowAnyGoodJokes = new QuestionObject("Do you know any good jokes?");
const doYouKnowAnyJokes = new QuestionObject("Do you know any jokes?");
const doYouKnowJokes = new QuestionObject("Do you know jokes?");
const giveMeAJoke = new QuestionObject("Give me a joke");
const canYouTellMeAnyJokes = new QuestionObject("Can you tell me any jokes?");
const willYouSayAJoke = new QuestionObject("Will you say a joke");
const whatIsAJokeYouKnow = new QuestionObject("What is a joke you know?");
const whatIsYourFavoriteJoke = new QuestionObject("What is your favorite joke?");
const whatJokesDoYouKnow = new QuestionObject("What jokes do you know?");
const whatsAGoodJoke = new QuestionObject("What's a good joke");
const whatsAJokeYouCanTellMe = new QuestionObject("What's a joke you can tell me?");
const whatsAJokeYouKnow = new QuestionObject("What's a joke you know?");
const idLoveToHearAJoke = new QuestionObject("I'd love to hear a joke");
const willYouGiveMeAJoke = new QuestionObject("Will you give me a joke");
const wannaShareAJoke = new QuestionObject("wanna share a joke?");
const willYouShareAJoke = new QuestionObject("Will you share a joke?");
const willYouTellMeAJoke = new QuestionObject("Will you tell me a joke");
const wouldYouTellMeAJoke = new QuestionObject("Would you tell me a joke");
const youKnowAJoke = new QuestionObject("You know a joke?");
const youKnowAnyJokes = new QuestionObject("You know any jokes?");
const youNeedToSayAJoke = new QuestionObject("You need to say a joke");
const youNeedToSayAJokeToMe = new QuestionObject("You need to say a joke to me");
const whatsAJoke = new QuestionObject("What's a joke?");
const shareAJoke = new QuestionObject("Share a joke");
const pleaseGiveMeAJoke = new QuestionObject("Please give me a joke");
const pleaseSayAJoke = new QuestionObject("Please say a joke");
const pleaseTellMeAFunnyJoke = new QuestionObject("Please tell me a funny joke");
const pleaseTellMeAJoke = new QuestionObject("Please tell me a joke");
const pleaseTellMeASillyJoke = new QuestionObject("Please tell me a silly joke");
const whatAboutAJoke = new QuestionObject("What about a joke?");
const sayAJoke = new QuestionObject("Say a joke");
const wannaTellMeAJoke = new QuestionObject("wanna tell me a joke?");
const tellAJoke = new QuestionObject("Tell a joke");
const tellMeAJoke = new QuestionObject("Tell me a joke");
const timeForAJoke = new QuestionObject("Time for a joke");
const uKnowAJoke = new QuestionObject("u know a joke?");
const uKnowAnyJokes = new QuestionObject("u know any jokes?");
const youNeedToTellMeAJoke = new QuestionObject("You need to tell me a joke");

export const jokeQuestionsArray = [
    iWouldLoveToHearAJoke,
    pleaseShareAJoke,
    queueUpAJoke,
    reciteAJoke,
    howAboutAJoke,
    wannaSayAJoke,
    iWouldLikeAJoke,
    knowAnyJokes,
    canYouTellMeAJoke,
    anyGoodJokes,
    iNeedToHearAJoke,
    gotAnyJokesToShare,
    gotAnyJokes,
    haveAnyJokes,
    howsAboutAJoke,
    iFeelLikeAJoke,
    joke,
    iFeelLikeINeedAJoke,
    gotAJoke,
    iWannaHearAJoke,
    iWantToHearAJoke,
    iWantYouToTellMeAJoke,
    idLoveItIfYouToldMeAJoke,
    aJokeWouldBeFun,
    iFeelLikeHearingAJoke,
    doYouHaveAJoke,
    aJokeWouldBeNice,
    aJokeWouldBeWelcome,
    canYouGiveMeAJoke,
    canYouSayAJoke,
    canYouShareAJoke,
    gotAnyJokesToSay,
    doYouHaveAJokeForMe,
    gotAnyAwesomeJokes,
    doYouHaveAnyJokes,
    doYouKnowAJoke,
    doYouKnowAnyGoodJokes,
    doYouKnowAnyJokes,
    doYouKnowJokes,
    giveMeAJoke,
    canYouTellMeAnyJokes,
    willYouSayAJoke,
    whatIsAJokeYouKnow,
    whatIsYourFavoriteJoke,
    whatJokesDoYouKnow,
    whatsAGoodJoke,
    whatsAJokeYouCanTellMe,
    whatsAJokeYouKnow,
    idLoveToHearAJoke,
    willYouGiveMeAJoke,
    wannaShareAJoke,
    willYouShareAJoke,
    willYouTellMeAJoke,
    wouldYouTellMeAJoke,
    youKnowAJoke,
    youKnowAnyJokes,
    youNeedToSayAJoke,
    youNeedToSayAJokeToMe,
    whatsAJoke,
    shareAJoke,
    pleaseGiveMeAJoke,
    pleaseSayAJoke,
    pleaseTellMeAFunnyJoke,
    pleaseTellMeAJoke,
    pleaseTellMeASillyJoke,
    whatAboutAJoke,
    sayAJoke,
    wannaTellMeAJoke,
    tellAJoke,
    tellMeAJoke,
    timeForAJoke,
    uKnowAJoke,
    uKnowAnyJokes,
    youNeedToTellMeAJoke
];

const howComeYouOnlyKnowOneJoke = new QuestionObject("How come you only know one joke?");
const wantToShareAnotherJoke = new QuestionObject("Want to share another joke?");
const gotADifferentJoke = new QuestionObject("Got a different joke?");
const iNeedANewJoke = new QuestionObject("I need a new joke");
const doYouHaveAVarietyOfJokes = new QuestionObject("Do you have a variety of jokes?");
const iveAlreadyHeardThatOneBefore = new QuestionObject("I've already heard that one before");
const doYouKnowAnyOtherJokes = new QuestionObject("Do you know any other jokes?");
const iWantABetterJoke = new QuestionObject("I want a better joke");
const canYouTellMeAnotherJoke = new QuestionObject("Can you tell me another joke");
const howAboutAnotherJoke = new QuestionObject("How about another joke");
const howComeYouOnlyHaveOneJoke = new QuestionObject("How come you only have one joke?");
const iWouldEnjoyADifferentJoke = new QuestionObject("I would enjoy a different joke");
const gotANewJoke = new QuestionObject("Got a new joke?");
const gotASecondJoke = new QuestionObject("Got a second joke?");
const gotAnyDifferentJokes = new QuestionObject("Got any different jokes?");
const gotAnyOtherJokes = new QuestionObject("Got any other jokes?");
const hitMeWithANewJoke = new QuestionObject("Hit me with a new joke");
const hookMeUpWithADifferentJoke = new QuestionObject("Hook me up with a different joke");
const howAboutADifferentJoke = new QuestionObject("How about a different joke");
const howAboutANewJoke = new QuestionObject("How about a new joke");
const howAboutASecondJoke = new QuestionObject("How about a second joke");
const dontYouKnowOtherJokes = new QuestionObject("Don't you know other jokes?");
const howBoutAnotherJoke = new QuestionObject("How bout another joke?");
const dontYouHaveAnyOtherJokes = new QuestionObject("Don't you have any other jokes?");
const iAlreadyHeardThatOne = new QuestionObject("I already heard that one");
const iHeardThatOneBefore = new QuestionObject("I heard that one before");
const iNeedABetterJoke = new QuestionObject("I need a better joke");
const iNeedADifferentJoke = new QuestionObject("I need a different joke");
const iNeedAFunnierJoke = new QuestionObject("I need a funnier joke");
const iNeedANewFlavorOfJoke = new QuestionObject("I need a new flavor of joke");
const iWantABrandNewJoke = new QuestionObject("I want a brand new joke");
const iWantADifferentJoke = new QuestionObject("I want a different joke");
const iWantADifferentKindOfJoke = new QuestionObject("I want a different kind of joke");
const alternateJoke = new QuestionObject("Alternate joke");
const howBoutANewJoke = new QuestionObject("How bout a new joke?");
const alternateJokePlease = new QuestionObject("Alternate joke please");
const anotherJoke = new QuestionObject("Another joke");
const anotherJokePlease = new QuestionObject("another joke, please");
const anyDifferentJokes = new QuestionObject("Any different jokes?");
const anyNewJokes = new QuestionObject("Any new jokes");
const anyOtherJokes = new QuestionObject("Any other jokes?");
const areThereAnyOtherJokesThatYouKnowOf = new QuestionObject("Are there any other jokes that you know of?");
const areThereAnyOtherJokes = new QuestionObject("Are there any other jokes?");
const betterJoke = new QuestionObject("better joke");
const betterJokePlease = new QuestionObject("better joke please");
const botINeedANewJoke = new QuestionObject("Bot I need a new joke");
const canYouTellMeADifferentJoke = new QuestionObject("Can you tell me a different joke");
const giveMeAnAlternativeJoke = new QuestionObject("Give me an alternative joke");
const canYouTellMeASecondJoke = new QuestionObject("Can you tell me a second joke?");
const iWouldLikeAFreshJoke = new QuestionObject("I would like a fresh joke");
const canYouTellMeAnyOtherJokes = new QuestionObject("Can you tell me any other jokes?");
const comeOnYouHaveADifferentJoke = new QuestionObject("Come on you have a different joke");
const differentJoke = new QuestionObject("different joke");
const differentJokePlease = new QuestionObject("different joke, please");
const doYouHaveAnArsenalOfJokes = new QuestionObject("Do you have an arsenal of jokes?");
const doYouKnowABunchOfGoodJokes = new QuestionObject("Do you know a bunch of good jokes?");
const doYouKnowADifferentJoke = new QuestionObject("Do you know a different joke?");
const doYouKnowAGreatManyJokes = new QuestionObject("Do you know a great many jokes?");
const doYouKnowAnotherJoke = new QuestionObject("Do you know another joke?");
const doYouKnowAnyNewJokes = new QuestionObject("Do you know any new jokes?");
const dontYouHaveAnyNewJokes = new QuestionObject("Don't you have any new jokes?");
const canYouTellMeANewJoke = new QuestionObject("Can you tell me a new joke");
const whatOtherJokesDoYouHaveUpYourSleeve = new QuestionObject("What other jokes do you have up your sleeve?");
const iWantAFunnierJoke = new QuestionObject("I want a funnier joke");
const uKnowAnyOtherJokes = new QuestionObject("u know any other jokes?");
const wannaShareADifferentJoke = new QuestionObject("Wanna share a different joke?");
const wannaShareANewJoke = new QuestionObject("Wanna share a new joke?");
const wannaShareAnotherJoke = new QuestionObject("Wanna share another joke?");
const wantToShareADifferentJoke = new QuestionObject("Want to share a different joke?");
const wantToShareANewJoke = new QuestionObject("Want to share a new joke?");
const whatDifferentJokesDoYouKnow = new QuestionObject("What different jokes do you know?");
const whatIsADifferentJoke = new QuestionObject("What is a different joke?");
const whatIsAnotherJoke = new QuestionObject("What is another joke?");
const whatOtherJokesAreThere = new QuestionObject("What other jokes are there?");
const uKnowASecondJoke = new QuestionObject("u know a second joke?");
const whatOtherJokesCanYouTell = new QuestionObject("What other jokes can you tell?");
const uKnowANewJoke = new QuestionObject("u know a new joke?");
const whatOtherJokesDoYouHave = new QuestionObject("What other jokes do you have?");
const whatOtherJokesDoYouKnowOf = new QuestionObject("What other jokes do you know of?");
const whatOtherJokesDoYouKnow = new QuestionObject("What other jokes do you know?");
const whatsADifferentJoke = new QuestionObject("What's a different joke?");
const whatsAnotherJokeYouKnow = new QuestionObject("What's another joke you know?");
const whatsAnotherJoke = new QuestionObject("What's another joke?");
const whyDidYouTellMeTheSameJoke = new QuestionObject("Why did you tell me the same joke?");
const willYouTellMeASecondJoke = new QuestionObject("Will you tell me a second joke?");
const willYouTellMeADifferentJoke = new QuestionObject("Will you tell me a different joke");
const willYouTellMeANewJoke = new QuestionObject("Will you tell me a new joke");
const willYouTellMeAnotherJoke = new QuestionObject("Will you tell me another joke");
const youAlreadyToldMeThatOne = new QuestionObject("You already told me that one");
const youGotSomeJokesYouHaventToldMe = new QuestionObject("You got some jokes you haven't told me?");
const whatOtherJokesCanYouSay = new QuestionObject("What other jokes can you say?");
const tellADifferentJoke = new QuestionObject("Tell a different joke");
const idReallyLikeToHearANewJoke = new QuestionObject("I'd really like to hear a new joke");
const itsTimeForABrandNewJoke = new QuestionObject("It's time for a brand new joke");
const itsTimeForANewKindOfJoke = new QuestionObject("It's time for a new kind of joke");
const newJoke = new QuestionObject("new joke");
const newJokePlease = new QuestionObject("new joke please");
const nextJoke = new QuestionObject("next joke");
const nextJokePlease = new QuestionObject("next joke, please");
const pleaseTellMeAnotherJoke = new QuestionObject("Please tell me another joke");
const sayADifferentJoke = new QuestionObject("Say a different joke");
const sayANewJoke = new QuestionObject("Say a new joke");
const sayAnotherJoke = new QuestionObject("Say another joke");
const uKnowAnotherJoke = new QuestionObject("u know another joke?");
const shareADifferentJokeWithMe = new QuestionObject("Share a different joke with me");
const youMustHaveDifferentKindsOfJokes = new QuestionObject("You must have different kinds of jokes");
const tellANewJoke = new QuestionObject("Tell a new joke");
const tellAnotherJoke = new QuestionObject("Tell another joke");
const tellMeABetterJoke = new QuestionObject("Tell me a better joke");
const tellMeADifferentJoke = new QuestionObject("Tell me a different joke.");
const tellMeADifferentKindOfJoke = new QuestionObject("Tell me a different kind of joke");
const tellMeADirtyJoke = new QuestionObject("Tell me a dirty joke");
const tellMeAFunnierJoke = new QuestionObject("Tell me a funnier joke");
const tellMeANewJoke = new QuestionObject("Tell me a new joke");
const tellMeAPirateJoke = new QuestionObject("Tell me a pirate joke");
const tellMeAScienceJoke = new QuestionObject("Tell me a science joke");
const tellMeAThirdJoke = new QuestionObject("Tell me a third joke");
const tellMeAnotherJoke = new QuestionObject("Tell me another joke.");
const uKnowADifferentJoke = new QuestionObject("u know a different joke?");
const shareADifferentJokes = new QuestionObject("Share a different jokes");

export const secondJokeQuestionsArray = [
    howComeYouOnlyKnowOneJoke,
    wantToShareAnotherJoke,
    gotADifferentJoke,
    iNeedANewJoke,
    doYouHaveAVarietyOfJokes,
    iveAlreadyHeardThatOneBefore,
    doYouKnowAnyOtherJokes,
    iWantABetterJoke,
    canYouTellMeAnotherJoke,
    howAboutAnotherJoke,
    howComeYouOnlyHaveOneJoke,
    iWouldEnjoyADifferentJoke,
    gotANewJoke,
    gotASecondJoke,
    gotAnyDifferentJokes,
    gotAnyOtherJokes,
    hitMeWithANewJoke,
    hookMeUpWithADifferentJoke,
    howAboutADifferentJoke,
    howAboutANewJoke,
    howAboutASecondJoke,
    dontYouKnowOtherJokes,
    howBoutAnotherJoke,
    dontYouHaveAnyOtherJokes,
    iAlreadyHeardThatOne,
    iHeardThatOneBefore,
    iNeedABetterJoke,
    iNeedADifferentJoke,
    iNeedAFunnierJoke,
    iNeedANewFlavorOfJoke,
    iWantABrandNewJoke,
    iWantADifferentJoke,
    iWantADifferentKindOfJoke,
    alternateJoke,
    howBoutANewJoke,
    alternateJokePlease,
    anotherJoke,
    anotherJokePlease,
    anyDifferentJokes,
    anyNewJokes,
    anyOtherJokes,
    areThereAnyOtherJokesThatYouKnowOf,
    areThereAnyOtherJokes,
    betterJoke,
    betterJokePlease,
    botINeedANewJoke,
    canYouTellMeADifferentJoke,
    giveMeAnAlternativeJoke,
    canYouTellMeASecondJoke,
    iWouldLikeAFreshJoke,
    canYouTellMeAnyOtherJokes,
    comeOnYouHaveADifferentJoke,
    differentJoke,
    differentJokePlease,
    doYouHaveAnArsenalOfJokes,
    doYouKnowABunchOfGoodJokes,
    doYouKnowADifferentJoke,
    doYouKnowAGreatManyJokes,
    doYouKnowAnotherJoke,
    doYouKnowAnyNewJokes,
    dontYouHaveAnyNewJokes,
    canYouTellMeANewJoke,
    whatOtherJokesDoYouHaveUpYourSleeve,
    iWantAFunnierJoke,
    uKnowAnyOtherJokes,
    wannaShareADifferentJoke,
    wannaShareANewJoke,
    wannaShareAnotherJoke,
    wantToShareADifferentJoke,
    wantToShareANewJoke,
    whatDifferentJokesDoYouKnow,
    whatIsADifferentJoke,
    whatIsAnotherJoke,
    whatOtherJokesAreThere,
    uKnowASecondJoke,
    whatOtherJokesCanYouTell,
    uKnowANewJoke,
    whatOtherJokesDoYouHave,
    whatOtherJokesDoYouKnowOf,
    whatOtherJokesDoYouKnow,
    whatsADifferentJoke,
    whatsAnotherJokeYouKnow,
    whatsAnotherJoke,
    whyDidYouTellMeTheSameJoke,
    willYouTellMeASecondJoke,
    willYouTellMeADifferentJoke,
    willYouTellMeANewJoke,
    willYouTellMeAnotherJoke,
    youAlreadyToldMeThatOne,
    youGotSomeJokesYouHaventToldMe,
    whatOtherJokesCanYouSay,
    tellADifferentJoke,
    idReallyLikeToHearANewJoke,
    itsTimeForABrandNewJoke,
    itsTimeForANewKindOfJoke,
    newJoke,
    newJokePlease,
    nextJoke,
    nextJokePlease,
    pleaseTellMeAnotherJoke,
    sayADifferentJoke,
    sayANewJoke,
    sayAnotherJoke,
    uKnowAnotherJoke,
    shareADifferentJokeWithMe,
    youMustHaveDifferentKindsOfJokes,
    tellANewJoke,
    tellAnotherJoke,
    tellMeABetterJoke,
    tellMeADifferentJoke,
    tellMeADifferentKindOfJoke,
    tellMeADirtyJoke,
    tellMeAFunnierJoke,
    tellMeANewJoke,
    tellMeAPirateJoke,
    tellMeAScienceJoke,
    tellMeAThirdJoke,
    tellMeAnotherJoke,
    uKnowADifferentJoke,
    shareADifferentJokes
];

const howDoYouFeelAboutArtificialIntelligence = new QuestionObject("How do you feel about artificial intelligence?");
const areYouInterestedInTech = new QuestionObject("Are you interested in tech?");
const whatIsYourOpinionAboutAI = new QuestionObject("What is your opinion about AI?");
const howDoYouFeelAboutTech = new QuestionObject("How do you feel about tech?");
const areYouInterestedInAI = new QuestionObject("Are you interested in AI?");
const howDoYouFeelAboutTheSingularity = new QuestionObject("How do you feel about the singularity?");
const whatIsYourOpinionAboutTech = new QuestionObject("What is your opinion about tech?");
const whatShouldIKnowAboutAI = new QuestionObject("What should I know about AI?");
const whatIsYourOpinionAboutBots = new QuestionObject("What is your opinion about bots?");
const whatShouldIKnowAboutTech = new QuestionObject("What should I know about tech?");
const areYouAFanOfTech = new QuestionObject("Are you a fan of tech?");
const whatDoYouThinkAboutTechnology = new QuestionObject("What do you think about technology?");
const whatDoYouThinkAboutAI = new QuestionObject("What do you think about AI?");
const howDoYouFeelAboutTechnology = new QuestionObject("How do you feel about technology?");
const howDoYouFeelAboutBots = new QuestionObject("How do you feel about bots?");
const whatIsYourOpinionAboutTechCompanies = new QuestionObject("What is your opinion about tech companies?");
const howDoYouFeelAboutAI = new QuestionObject("How do you feel about AI?");
const areYouInterestedInTechnology = new QuestionObject("Are you interested in technology?");
const areYouInterestedInTechCompanies = new QuestionObject("Are you interested in tech companies?");
const areYouInterestedInBots = new QuestionObject("Are you interested in bots?");
const areYouInterestedInArtificialIntelligence = new QuestionObject("Are you interested in artificial intelligence?");
const howDoYouFeelAboutTechCompanies = new QuestionObject("How do you feel about tech companies?");
const whatIsYourTakeOnArtificialIntelligence = new QuestionObject("What is your take on artificial intelligence?");
const whatShouldIKnowAboutTechCompanies = new QuestionObject("What should I know about tech companies?");
const whatShouldIKnowAboutBots = new QuestionObject("What should I know about bots?");
const whatShouldIKnowAboutArtificialIntelligence = new QuestionObject("What should I know about artificial intelligence?");
const whatIsYourTakeOnTechnology = new QuestionObject("What is your take on technology?");
const whatIsYourTakeOnTech = new QuestionObject("What is your take on tech?");
const whatIsYourOpinionAboutArtificialIntelligence = new QuestionObject("What is your opinion about artificial intelligence?");
const whatIsYourTakeOnBots = new QuestionObject("What is your take on bots?");
const whatShouldIKnowAboutTechnology = new QuestionObject("What should I know about technology?");
const whatIsYourTakeOnAI = new QuestionObject("What is your take on AI?");
const whatIsYourOpinionOfTech = new QuestionObject("What is your opinion of tech?");
const whatIsYourOpinionOfTechCompanies = new QuestionObject("What is your opinion of tech companies?");
const whatIsYourOpinionOfArtificialIntelligence = new QuestionObject("What is your opinion of artificial intelligence?");
const whatIsYourOpinionOfAI = new QuestionObject("What is your opinion of AI?");
const whatIsYourOpinionAboutTechnology = new QuestionObject("What is your opinion about technology?");
const whatIsYourTakeOnTechCompanies = new QuestionObject("What is your take on tech companies?");

export const aiQuestionsArray = [
    howDoYouFeelAboutArtificialIntelligence,
    areYouInterestedInTech,
    whatIsYourOpinionAboutAI,
    howDoYouFeelAboutTech,
    areYouInterestedInAI,
    howDoYouFeelAboutTheSingularity,
    whatIsYourOpinionAboutTech,
    whatShouldIKnowAboutAI,
    whatIsYourOpinionAboutBots,
    whatShouldIKnowAboutTech,
    areYouAFanOfTech,
    whatDoYouThinkAboutTechnology,
    whatDoYouThinkAboutAI,
    howDoYouFeelAboutTechnology,
    howDoYouFeelAboutBots,
    whatIsYourOpinionAboutTechCompanies,
    howDoYouFeelAboutAI,
    areYouInterestedInTechnology,
    areYouInterestedInTechCompanies,
    areYouInterestedInBots,
    areYouInterestedInArtificialIntelligence,
    howDoYouFeelAboutTechCompanies,
    whatIsYourTakeOnArtificialIntelligence,
    whatShouldIKnowAboutTechCompanies,
    whatShouldIKnowAboutBots,
    whatShouldIKnowAboutArtificialIntelligence,
    whatIsYourTakeOnTechnology,
    whatIsYourTakeOnTech,
    whatIsYourOpinionAboutArtificialIntelligence,
    whatIsYourTakeOnBots,
    whatShouldIKnowAboutTechnology,
    whatIsYourTakeOnAI,
    whatIsYourOpinionOfTech,
    whatIsYourOpinionOfTechCompanies,
    whatIsYourOpinionOfArtificialIntelligence,
    whatIsYourOpinionOfAI,
    whatIsYourOpinionAboutTechnology,
    whatIsYourTakeOnTechCompanies
];

const areYouFake = new QuestionObject("Are you fake?");
const areYouARealPerson = new QuestionObject("Are you a real person?");
const amITalkingToAPerson = new QuestionObject("Am I talking to a person?");
const areYouAHuman = new QuestionObject("Are you a human?");
const areYouARobotOrAPerson = new QuestionObject("Are you a robot or a person?");
const youreNotABeingRight = new QuestionObject("You're not a being right?");
const imGuessingYoureABot = new QuestionObject("I'm guessing you're a bot");
const howWouldYouDescribeYourself = new QuestionObject("How would you describe yourself?");
const youreNotRealAreYou = new QuestionObject("You're not real are you?");
const iSuspectYoureActuallyDigital = new QuestionObject("I suspect you're actually digital");
const youreNotAliveRight = new QuestionObject("You're not alive right?");
const areYouABeing = new QuestionObject("Are you a being?");
const youreNotARobotAreYou = new QuestionObject("You're not a robot are you?");
const youreNotARobotRight = new QuestionObject("You're not a robot right?");
const youreNotAWomanAreYou = new QuestionObject("You're not a woman are you?");
const youreNotAWomanRight = new QuestionObject("You're not a woman right?");
const youreNotAIAreYou = new QuestionObject("You're not AI are you?");
const youreNotARealPersonAreYou = new QuestionObject("You're not a real person are you?");
const youreNotAliveAreYou = new QuestionObject("You're not alive are you?");
const youreNotARealHumanRight = new QuestionObject("You're not a real human right?");
const youreNotAnAnimalAreYou = new QuestionObject("You're not an animal are you?");
const youreNotAnAnimalRight = new QuestionObject("You're not an animal right?");
const youreNotAnAppAreYou = new QuestionObject("You're not an app are you?");
const youreNotAnAppRight = new QuestionObject("You're not an app right?");
const youreNotAnInsectAreYou = new QuestionObject("You're not an insect are you?");
const youreNotAnInsectRight = new QuestionObject("You're not an insect right?");
const youreNotArtificialAreYou = new QuestionObject("You're not artificial are you?");
const youreNotAIRight = new QuestionObject("You're not AI right?");
const youreNotALifeformRight = new QuestionObject("You're not a lifeform right?");
const youreNotADogRight = new QuestionObject("You're not a dog right?");
const youreNotAHumanBeingAreYou = new QuestionObject("You're not a human being are you?");
const youreNotAHumanBeingRight = new QuestionObject("You're not a human being right?");
const youreNotAHumanOrABotAreYou = new QuestionObject("You're not a human or a bot are you?");
const youreNotAHumanOrABotRight = new QuestionObject("You're not a human or a bot right?");
const youreNotALadyAreYou = new QuestionObject("You're not a lady are you?");
const youreNotARealPersonRight = new QuestionObject("You're not a real person right?");
const youreNotALifeformAreYou = new QuestionObject("You're not a lifeform are you?");
const youreNotFakeRight = new QuestionObject("You're not fake right?");
const youreNotAMachineAreYou = new QuestionObject("You're not a machine are you?");
const youreNotAMachineRight = new QuestionObject("You're not a machine right?");
const youreNotAManAreYou = new QuestionObject("You're not a man are you?");
const youreNotAManRight = new QuestionObject("You're not a man right?");
const youreNotAPersonAreYou = new QuestionObject("You're not a person are you?");
const youreNotAPersonRight = new QuestionObject("You're not a person right?");
const youreNotARealHumanAreYou = new QuestionObject("You're not a real human are you?");
const youreNotALadyRight = new QuestionObject("You're not a lady right?");
const areYouRealOrAreYouABot = new QuestionObject("Are you real or are you a bot?");
const areYouARealOrABot = new QuestionObject("Are you a real or a bot?");
const areYouArtificialOrReal = new QuestionObject("Are you artificial or real?");
const areYouRealOrArtificial = new QuestionObject("Are you real or artificial?");
const areYouRealOrABot = new QuestionObject("Are you real or a bot?");
const areYouRealOrARobot = new QuestionObject("Are you real or a robot?");
const youreNotArtificialRight = new QuestionObject("You're not artificial right?");
const areYouARobotOrAreYouReal = new QuestionObject("Are you a robot or are you real?");
const areYouAPersonOrABot = new QuestionObject("Are you a person or a bot?");
const areYouFakeOrAreYouAPerson = new QuestionObject("Are you fake or are you a person?");
const areYouFakeOrAreYouHuman = new QuestionObject("Are you fake or are you human?");
const amISpeakingToAPerson = new QuestionObject("Am I speaking to a person?");
const amISpeakingToABot = new QuestionObject("Am I speaking to a bot?");
const amISpeakingToAHuman = new QuestionObject("Am I speaking to a human?");
const amISpeakingToAHumanOrABot = new QuestionObject("Am I speaking to a human or a bot?");
const amISpeakingToARobot = new QuestionObject("Am I speaking to a robot?");
const areYouARobotOrReal = new QuestionObject("Are you a robot or real?");
const areYouARealBoy = new QuestionObject("Are you a real boy?");
const youreNotAComputerProgramRight = new QuestionObject("You're not a computer program right?");
const youreNotHumanAreYou = new QuestionObject("You're not human are you?");
const youreNotHumanRight = new QuestionObject("You're not human right?");
const youreNotRealOrFakeAreYou = new QuestionObject("You're not real or fake are you?");
const youreNotRealOrFakeRight = new QuestionObject("You're not real or fake right?");
const youreNotRealRight = new QuestionObject("You're not real right?");
const areYouABotOrAPerson = new QuestionObject("Are you a bot or a person?");
const youreNotSentientRight = new QuestionObject("You're not sentient right?");
const areYouABot = new QuestionObject("Are you a bot?");
const areYouAFacsimile = new QuestionObject("Are you a facsimile?");
const areYouAnActualBeing = new QuestionObject("Are you an actual being?");
const areYouAnOrganicLifeForm = new QuestionObject("Are you an organic life form?");
const areYouFakeOrReal = new QuestionObject("Are you fake or real?");
const areYouAPersonOrARobot = new QuestionObject("Are you a person or a robot?");
const youreNotFakeAreYou = new QuestionObject("You're not fake are you?");
const youreNotSentientAreYou = new QuestionObject("You're not sentient are you?");
const becauseYouAreAMachine = new QuestionObject("Because you are a machine?");
const areYouAnInsect = new QuestionObject("Are you an insect?");
const areYouArtificial = new QuestionObject("Are you artificial?");
const areYouHuman = new QuestionObject("Are you human?");
const areYouRealOrFake = new QuestionObject("Are you real or fake?");
const areYouSentient = new QuestionObject("Are you sentient?");
const becauseYouAreNotReal = new QuestionObject("Because you are not real?");
const becauseYouAreADroid = new QuestionObject("Because you are a droid?");
const areYouAlive = new QuestionObject("Are you alive?");
const becauseYouAreAProgram = new QuestionObject("Because you are a program?");
const becauseYouAreARobot = new QuestionObject("Because you are a robot?");
const becauseYouAreAnAndroid = new QuestionObject("Because you are an android?");
const becauseYouAreAnApp = new QuestionObject("Because you are an app?");
const becauseYouAreNotAPerson = new QuestionObject("Because you are not a person?");
const becauseYouAreNotARealPerson = new QuestionObject("Because you are not a real person?");
const youreNotADogAreYou = new QuestionObject("You're not a dog are you?");
const becauseYouAreABot = new QuestionObject("Because you are a bot?");
const areYouALifeform = new QuestionObject("Are you a lifeform?");
const areYouABotOrAHuman = new QuestionObject("Are you a bot or a human?");
const areYouACat = new QuestionObject("Are you a cat?");
const areYouAChatBot = new QuestionObject("Are you a chat bot?");
const areYouAComputerProgram = new QuestionObject("Are you a computer program?");
const areYouAComputer = new QuestionObject("Are you a computer?");
const areYouADog = new QuestionObject("Are you a dog?");
const areYouAHumanBeing = new QuestionObject("Are you a human being?");
const areYouAnApp = new QuestionObject("Are you an app?");
const areYouALady = new QuestionObject("Are you a lady?");
const areYouAnAnimal = new QuestionObject("Are you an animal?");
const areYouAMachine = new QuestionObject("Are you a machine?");
const areYouAPerson = new QuestionObject("Are you a person?");
const areYouARealHuman = new QuestionObject("Are you a real human?");
const areYouARobot = new QuestionObject("Are you a robot?");
const areYouAI = new QuestionObject("Are you AI?");
const becauseYoureABot = new QuestionObject("Because you're a bot?");
const areYouAHumanOrABot = new QuestionObject("Are you a human or a bot?");
const youreNotABotOrAHumanRight = new QuestionObject("You're not a bot or a human right?");
const tellMeSomethingAboutYourself = new QuestionObject("Tell me something about yourself");
const whatAreYou = new QuestionObject("What are you?");
const whatCanYouTellMeAboutYourself = new QuestionObject("What can you tell me about yourself?");
const whatProductImUsingRightNow = new QuestionObject("What product I'm using right now?");
const whichPlatformDoYouRunOn = new QuestionObject("Which platform do you run on?");
const youreNotABeingAreYou = new QuestionObject("You're not a being are you?");
const becauseYouAreNotAlive = new QuestionObject("Because you are not alive?");
const youreNotABotOrAHumanAreYou = new QuestionObject("You're not a bot or a human are you?");
const humanOrRobot = new QuestionObject("Human or robot?");
const youreNotACatAreYou = new QuestionObject("You're not a cat are you?");
const youreNotACatRight = new QuestionObject("You're not a cat right?");
const youreNotAChatBotAreYou = new QuestionObject("You're not a chat bot are you?");
const youreNotAChatBotRight = new QuestionObject("You're not a chat bot right?");
const youreNotAComputerAreYou = new QuestionObject("You're not a computer are you?");
const youreNotAComputerProgramAreYou = new QuestionObject("You're not a computer program are you?");
const whoAmITalkingTo = new QuestionObject("Who am I talking to?");
const doYouHaveASoul = new QuestionObject("Do you have a soul?");
const becauseYoureADroid = new QuestionObject("Because you're a droid?");
const becauseYoureAMachine = new QuestionObject("Because you're a machine?");
const becauseYoureAProgram = new QuestionObject("Because you're a program?");
const becauseYoureARobot = new QuestionObject("Because you're a robot?");
const becauseYoureAnAndroid = new QuestionObject("Because you're an android?");
const becauseYoureNotARealPerson = new QuestionObject("Because you're not a real person?");
const becauseYoureNotReal = new QuestionObject("Because you're not real?");
const tellMeAboutYourself = new QuestionObject("Tell me about yourself");
const defineYourself = new QuestionObject("Define yourself.");
const robotOrHuman = new QuestionObject("Robot or human?");
const doYouHaveAnyLifeSigns = new QuestionObject("Do you have any life signs?");
const doYouKnowYoureNotAlive = new QuestionObject("Do you know you're not alive?");
const doYouKnowYoureNotReal = new QuestionObject("Do you know you're not real?");
const howDoYouDefineWhatYouAre = new QuestionObject("How do you define what you are?");
const howWouldYouDefineWhatYouAre = new QuestionObject("How would you define what you are?");
const humanOrBot = new QuestionObject("Human or bot?");
const youreNotAComputerRight = new QuestionObject("You're not a computer right?");
const botOrHuman = new QuestionObject("Bot or human?");
const iSuspectYoureNotReallyARobot = new QuestionObject("I suspect you're not really a robot");
const iSuspectYoureNotReallyDigital = new QuestionObject("I suspect you're not really digital");
const iSuspectYoureNotReallyFake = new QuestionObject("I suspect you're not really fake");
const iSuspectYoureNotReallyReal = new QuestionObject("I suspect you're not really real");
const iSuspectYoureActuallyABot = new QuestionObject("I suspect you're actually a bot");
const iSuspectYoureActuallyARobot = new QuestionObject("I suspect you're actually a robot");
const iWonderIfYouMightBeAHuman = new QuestionObject("I wonder if you might be a human");
const iSuspectYouMayBeAPerson = new QuestionObject("I suspect you may be a person");
const imAssumingYoureNotReallyAPerson = new QuestionObject("I'm assuming you're not really a person");
const iWonderIfYoureAPerson = new QuestionObject("I wonder if you're a person");
const iWonderIfYoureHuman = new QuestionObject("I wonder if you're human");
const iWonderIfYoureAHuman = new QuestionObject("I wonder if you're a human");
const iWonderIfYoureABot = new QuestionObject("I wonder if you're a bot");
const iWonderIfYoureARobot = new QuestionObject("I wonder if you're a robot");
const iWonderIfYoureDigital = new QuestionObject("I wonder if you're digital");
const imAssumingImTalkingToARobot = new QuestionObject("I'm assuming I'm talking to a robot");
const iSuspectYoureActuallyFake = new QuestionObject("I suspect you're actually fake");
const iSuspectYoureABot = new QuestionObject("I suspect you're a bot");
const amISpeakingToAHumanPerson = new QuestionObject("Am I speaking to a human person?");
const iSupposeYouMustBeABot = new QuestionObject("I suppose you must be a bot");
const iSupposeYouMustBeHuman = new QuestionObject("I suppose you must be human");
const iSupposeYouMustBeAPerson = new QuestionObject("I suppose you must be a person");
const iSupposeYoureDigital = new QuestionObject("I suppose you're digital");
const iSupposeYouMustBeDigital = new QuestionObject("I suppose you must be digital");
const iAssumeYoureDigital = new QuestionObject("I assume you're digital");
const imAssumingYoureNotReallyDigital = new QuestionObject("I'm assuming you're not really digital");
const iSuspectYoureAPerson = new QuestionObject("I suspect you're a person");
const imAssumingYoureNotReallyABot = new QuestionObject("I'm assuming you're not really a bot");
const iSuspectYoureDigital = new QuestionObject("I suspect you're digital");
const iSuspectYoureARobot = new QuestionObject("I suspect you're a robot");
const iSuspectYoureNotReallyAPerson = new QuestionObject("I suspect you're not really a person");
const iSuspectYoureNotReallyAHuman = new QuestionObject("I suspect you're not really a human");
const iSuspectYoureNotReallyHuman = new QuestionObject("I suspect you're not really human");
const imAssumingYoureNotReallyHuman = new QuestionObject("I'm assuming you're not really human");
const iWonderIfYouMightBeABot = new QuestionObject("I wonder if you might be a bot");
const iSuspectYoureHuman = new QuestionObject("I suspect you're human");
const iThinkYoureNotAPerson = new QuestionObject("I think you're not a person");
const iThinkYoureDigital = new QuestionObject("I think you're digital");
const iThinkYoureNotActuallyAPerson = new QuestionObject("I think you're not actually a person");
const iThinkYoureNotActuallyABot = new QuestionObject("I think you're not actually a bot");
const iThinkYoureNotActuallyAHuman = new QuestionObject("I think you're not actually a human");
const iThinkYoureNotActuallyARobot = new QuestionObject("I think you're not actually a robot");
const iThinkYoureNotActuallyDigital = new QuestionObject("I think you're not actually digital");
const iWonderIfYouMightBeAPerson = new QuestionObject("I wonder if you might be a person");
const iThinkYoureNotActuallyFake = new QuestionObject("I think you're not actually fake");
const iThinkYoureARobot = new QuestionObject("I think you're a robot");
const iThinkYoureNotReal = new QuestionObject("I think you're not real");
const iThinkYoureNotAHuman = new QuestionObject("I think you're not a human");
const iThinkYoureNotABot = new QuestionObject("I think you're not a bot");
const iThinkYoureNotReallyReal = new QuestionObject("I think you're not really real");
const iWantToKnowWhatYouAre = new QuestionObject("I want to know what you are");
const iWantToKnowIfYoureReal = new QuestionObject("I want to know if you're real");
const iWantToKnowIfYoureAPerson = new QuestionObject("I want to know if you're a person");
const iThinkYoureNotActuallyReal = new QuestionObject("I think you're not actually real");
const youMustBeARobot = new QuestionObject("You must be a robot");
const iWonderIfYouMightBeARobot = new QuestionObject("I wonder if you might be a robot");
const iWonderIfYouMightBeFake = new QuestionObject("I wonder if you might be fake");
const iWonderIfYouMightBeReal = new QuestionObject("I wonder if you might be real");
const iWonderIfYoureReal = new QuestionObject("I wonder if you're real");
const iWonderIfYoureFake = new QuestionObject("I wonder if you're fake");
const youMustBeFake = new QuestionObject("You must be fake");
const youMustBeReal = new QuestionObject("You must be real");
const iThinkYoureReal = new QuestionObject("I think you're real");
const youMustBeABot = new QuestionObject("You must be a bot");
const iThinkYoureFake = new QuestionObject("I think you're fake");
const youMustBeAPerson = new QuestionObject("You must be a person");
const youMustBeAHuman = new QuestionObject("You must be a human");
const youMustBeHuman = new QuestionObject("You must be human");
const iThinkYoureHuman = new QuestionObject("I think you're human");
const iThinkYoureABot = new QuestionObject("I think you're a bot");
const iThinkYoureAPerson = new QuestionObject("I think you're a person");
const imAssumingImTalkingToABot = new QuestionObject("I'm assuming I'm talking to a bot");
const youMustBeDigital = new QuestionObject("You must be digital");
const areYouABotOrAreYouAPerson = new QuestionObject("Are you a bot or are you a person?");
const areYouAnActualHuman = new QuestionObject("Are you an actual human?");
const areYouReallyThere = new QuestionObject("Are you really there?");
const areYouJustDigital = new QuestionObject("Are you just digital?");
const areYouCorporeal = new QuestionObject("Are you corporeal?");
const doYouHaveABody = new QuestionObject("Do you have a body?");
const doYouExist = new QuestionObject("Do you exist?");
const whatAreYouExactly = new QuestionObject("What are you exactly?");
const doYouExistInOurWorld = new QuestionObject("Do you exist in our world?");
const areYouImaginary = new QuestionObject("Are you imaginary?");
const areYouARobotOrAreYouAPerson = new QuestionObject("Are you a robot or are you a person?");
const areYouABotOrAreYouReal = new QuestionObject("Are you a bot or are you real?");
const areYouABotOrAreYouHuman = new QuestionObject("Are you a bot or are you human?");
const areYouARobotOrAreYouHuman = new QuestionObject("Are you a robot or are you human?");
const areYouHumanOrAreYouARobot = new QuestionObject("Are you human or are you a robot?");
const areYouHumanOrAreYouABot = new QuestionObject("Are you human or are you a bot?");
const imAssumingImTalkingToAHuman = new QuestionObject("I'm assuming I'm talking to a human");
const doYouTrulyExist = new QuestionObject("Do you truly exist?");
const whoIsTalking = new QuestionObject("Who is talking?");
const iWantToKnowIfYoureHuman = new QuestionObject("I want to know if you're human");
const amITalkingToABot = new QuestionObject("Am I talking to a bot?");
const amITalkingToAHuman = new QuestionObject("Am I talking to a human?");
const amITalkingToAHumanOrABot = new QuestionObject("Am I talking to a human or a bot?");
const amITalkingToABotOrAHuman = new QuestionObject("Am I talking to a bot or a human?");
const amITalkingToAHumanPerson = new QuestionObject("Am I talking to a human person?");
const areYouAnActualPerson = new QuestionObject("Are you an actual person?");
const whosOnTheOtherEndOfThisLine = new QuestionObject("Who's on the other end of this line?");
const areYouRealOrImaginary = new QuestionObject("Are you real or imaginary?");
const whoIsTalkingToMe = new QuestionObject("Who is talking to me?");
const whoIsSpeakingToMe = new QuestionObject("Who is speaking to me?");
const amISpeakingToARealPerson = new QuestionObject("Am I speaking to a real person?");
const amITalkingToARealPerson = new QuestionObject("Am I talking to a real person?");
const amITalkingToAFake = new QuestionObject("Am I talking to a fake?");
const areYouReal = new QuestionObject("Are you real?");
const amITalkingToSomeone = new QuestionObject("Am I talking to someone?");
const iAssumeYoureReal = new QuestionObject("I assume you're real");
const imGuessingYoureFake = new QuestionObject("I'm guessing you're fake");
const imGuessingYoureReal = new QuestionObject("I'm guessing you're real");
const imGuessingYoureNotReal = new QuestionObject("I'm guessing you're not real");
const imGuessingYoureNotHuman = new QuestionObject("I'm guessing you're not human");
const imGuessingYoureARobot = new QuestionObject("I'm guessing you're a robot");
const imGuessingYoureJustABot = new QuestionObject("I'm guessing you're just a bot");
const areYouHumanOrAreYouSomethingElse = new QuestionObject("Are you human or are you something else?");
const iAssumeYoureJustABot = new QuestionObject("I assume you're just a bot");
const iAssumeYoureABot = new QuestionObject("I assume you're a bot");
const iAssumeYoureAPerson = new QuestionObject("I assume you're a person");
const iAssumeYoureARobot = new QuestionObject("I assume you're a robot");
const imAssumingYoureHuman = new QuestionObject("I'm assuming you're human");
const imAssumingYoureABot = new QuestionObject("I'm assuming you're a bot");
const imAssumingYoureARobot = new QuestionObject("I'm assuming you're a robot");
const imAssumingYoureAPerson = new QuestionObject("I'm assuming you're a person");
const imAssumingImTalkingToAPerson = new QuestionObject("I'm assuming I'm talking to a person");
const imGuessingYoureJustARobot = new QuestionObject("I'm guessing you're just a robot");
const wouldYouSayYoureReal = new QuestionObject("Would you say you're real?");
const whatWouldYouSayYouAre = new QuestionObject("What would you say you are?");
const whatAreYouReally = new QuestionObject("What are you really?");
const areYouSoReal = new QuestionObject("Are you so real?");
const areYouSoFake = new QuestionObject("Are you so fake?");
const areYouPretend = new QuestionObject("Are you pretend?");
const doYouReallyExist = new QuestionObject("Do you really exist?");
const doYouHaveHumanForm = new QuestionObject("Do you have human form?");
const wouldYouSayThatYoureFake = new QuestionObject("Would you say that you're fake?");
const imGuessingYoureHuman = new QuestionObject("I'm guessing you're human");
const wouldYouCallYourselfReal = new QuestionObject("Would you call yourself real?");
const wouldYouCallYourselfFake = new QuestionObject("Would you call yourself fake?");
const wouldYouSayYoureFake = new QuestionObject("Would you say you're fake?");
const wouldYouSayYoureABot = new QuestionObject("Would you say you're a bot?");
const wouldYouSayYoureHuman = new QuestionObject("Would you say you're human?");
const iAssumeYoureHuman = new QuestionObject("I assume you're human");
const amISpeakingToSomeone = new QuestionObject("Am I speaking to someone?");
const wouldYouSayThatYoureReal = new QuestionObject("Would you say that you're real?");
const areYouARealPersonOrComputer = new QuestionObject("Are you a real person or computer?");

export const botNotBeingAPersonQuestionsArray = [
    areYouFake,
    areYouARealPerson,
    amITalkingToAPerson,
    areYouAHuman,
    areYouARobotOrAPerson,
    youreNotABeingRight,
    imGuessingYoureABot,
    howWouldYouDescribeYourself,
    youreNotRealAreYou,
    iSuspectYoureActuallyDigital,
    youreNotAliveRight,
    areYouABeing,
    youreNotARobotAreYou,
    youreNotARobotRight,
    youreNotAWomanAreYou,
    youreNotAWomanRight,
    youreNotAIAreYou,
    youreNotARealPersonAreYou,
    youreNotAliveAreYou,
    youreNotARealHumanRight,
    youreNotAnAnimalAreYou,
    youreNotAnAnimalRight,
    youreNotAnAppAreYou,
    youreNotAnAppRight,
    youreNotAnInsectAreYou,
    youreNotAnInsectRight,
    youreNotArtificialAreYou,
    youreNotAIRight,
    youreNotALifeformRight,
    youreNotADogRight,
    youreNotAHumanBeingAreYou,
    youreNotAHumanBeingRight,
    youreNotAHumanOrABotAreYou,
    youreNotAHumanOrABotRight,
    youreNotALadyAreYou,
    youreNotARealPersonRight,
    youreNotALifeformAreYou,
    youreNotFakeRight,
    youreNotAMachineAreYou,
    youreNotAMachineRight,
    youreNotAManAreYou,
    youreNotAManRight,
    youreNotAPersonAreYou,
    youreNotAPersonRight,
    youreNotARealHumanAreYou,
    youreNotALadyRight,
    areYouRealOrAreYouABot,
    areYouARealOrABot,
    areYouArtificialOrReal,
    areYouRealOrArtificial,
    areYouRealOrABot,
    areYouRealOrARobot,
    youreNotArtificialRight,
    areYouARobotOrAreYouReal,
    areYouAPersonOrABot,
    areYouFakeOrAreYouAPerson,
    areYouFakeOrAreYouHuman,
    amISpeakingToAPerson,
    amISpeakingToABot,
    amISpeakingToAHuman,
    amISpeakingToAHumanOrABot,
    amISpeakingToARobot,
    areYouARobotOrReal,
    areYouARealBoy,
    youreNotAComputerProgramRight,
    youreNotHumanAreYou,
    youreNotHumanRight,
    youreNotRealOrFakeAreYou,
    youreNotRealOrFakeRight,
    youreNotRealRight,
    areYouABotOrAPerson,
    youreNotSentientRight,
    areYouABot,
    areYouAFacsimile,
    areYouAnActualBeing,
    areYouAnOrganicLifeForm,
    areYouFakeOrReal,
    areYouAPersonOrARobot,
    youreNotFakeAreYou,
    youreNotSentientAreYou,
    becauseYouAreAMachine,
    areYouAnInsect,
    areYouArtificial,
    areYouHuman,
    areYouRealOrFake,
    areYouSentient,
    becauseYouAreNotReal,
    becauseYouAreADroid,
    areYouAlive,
    becauseYouAreAProgram,
    becauseYouAreARobot,
    becauseYouAreAnAndroid,
    becauseYouAreAnApp,
    becauseYouAreNotAPerson,
    becauseYouAreNotARealPerson,
    youreNotADogAreYou,
    becauseYouAreABot,
    areYouALifeform,
    areYouABotOrAHuman,
    areYouACat,
    areYouAChatBot,
    areYouAComputerProgram,
    areYouAComputer,
    areYouADog,
    areYouAHumanBeing,
    areYouAnApp,
    areYouALady,
    areYouAnAnimal,
    areYouAMachine,
    areYouAPerson,
    areYouARealHuman,
    areYouARobot,
    areYouAI,
    becauseYoureABot,
    areYouAHumanOrABot,
    youreNotABotOrAHumanRight,
    tellMeSomethingAboutYourself,
    whatAreYou,
    whatCanYouTellMeAboutYourself,
    whatProductImUsingRightNow,
    whichPlatformDoYouRunOn,
    youreNotABeingAreYou,
    becauseYouAreNotAlive,
    youreNotABotOrAHumanAreYou,
    humanOrRobot,
    youreNotACatAreYou,
    youreNotACatRight,
    youreNotAChatBotAreYou,
    youreNotAChatBotRight,
    youreNotAComputerAreYou,
    youreNotAComputerProgramAreYou,
    whoAmITalkingTo,
    doYouHaveASoul,
    becauseYoureADroid,
    becauseYoureAMachine,
    becauseYoureAProgram,
    becauseYoureARobot,
    becauseYoureAnAndroid,
    becauseYoureNotARealPerson,
    becauseYoureNotReal,
    tellMeAboutYourself,
    defineYourself,
    robotOrHuman,
    doYouHaveAnyLifeSigns,
    doYouKnowYoureNotAlive,
    doYouKnowYoureNotReal,
    howDoYouDefineWhatYouAre,
    howWouldYouDefineWhatYouAre,
    humanOrBot,
    youreNotAComputerRight,
    botOrHuman,
    iSuspectYoureNotReallyARobot,
    iSuspectYoureNotReallyDigital,
    iSuspectYoureNotReallyFake,
    iSuspectYoureNotReallyReal,
    iSuspectYoureActuallyABot,
    iSuspectYoureActuallyARobot,
    iWonderIfYouMightBeAHuman,
    iSuspectYouMayBeAPerson,
    imAssumingYoureNotReallyAPerson,
    iWonderIfYoureAPerson,
    iWonderIfYoureHuman,
    iWonderIfYoureAHuman,
    iWonderIfYoureABot,
    iWonderIfYoureARobot,
    iWonderIfYoureDigital,
    imAssumingImTalkingToARobot,
    iSuspectYoureActuallyFake,
    iSuspectYoureABot,
    amISpeakingToAHumanPerson,
    iSupposeYouMustBeABot,
    iSupposeYouMustBeHuman,
    iSupposeYouMustBeAPerson,
    iSupposeYoureDigital,
    iSupposeYouMustBeDigital,
    iAssumeYoureDigital,
    imAssumingYoureNotReallyDigital,
    iSuspectYoureAPerson,
    imAssumingYoureNotReallyABot,
    iSuspectYoureDigital,
    iSuspectYoureARobot,
    iSuspectYoureNotReallyAPerson,
    iSuspectYoureNotReallyAHuman,
    iSuspectYoureNotReallyHuman,
    imAssumingYoureNotReallyHuman,
    iWonderIfYouMightBeABot,
    iSuspectYoureHuman,
    iThinkYoureNotAPerson,
    iThinkYoureDigital,
    iThinkYoureNotActuallyAPerson,
    iThinkYoureNotActuallyABot,
    iThinkYoureNotActuallyAHuman,
    iThinkYoureNotActuallyARobot,
    iThinkYoureNotActuallyDigital,
    iWonderIfYouMightBeAPerson,
    iThinkYoureNotActuallyFake,
    iThinkYoureARobot,
    iThinkYoureNotReal,
    iThinkYoureNotAHuman,
    iThinkYoureNotABot,
    iThinkYoureNotReallyReal,
    iWantToKnowWhatYouAre,
    iWantToKnowIfYoureReal,
    iWantToKnowIfYoureAPerson,
    iThinkYoureNotActuallyReal,
    youMustBeARobot,
    iWonderIfYouMightBeARobot,
    iWonderIfYouMightBeFake,
    iWonderIfYouMightBeReal,
    iWonderIfYoureReal,
    iWonderIfYoureFake,
    youMustBeFake,
    youMustBeReal,
    iThinkYoureReal,
    youMustBeABot,
    iThinkYoureFake,
    youMustBeAPerson,
    youMustBeAHuman,
    youMustBeHuman,
    iThinkYoureHuman,
    iThinkYoureABot,
    iThinkYoureAPerson,
    imAssumingImTalkingToABot,
    youMustBeDigital,
    areYouABotOrAreYouAPerson,
    areYouAnActualHuman,
    areYouReallyThere,
    areYouJustDigital,
    areYouCorporeal,
    doYouHaveABody,
    doYouExist,
    whatAreYouExactly,
    doYouExistInOurWorld,
    areYouImaginary,
    areYouARobotOrAreYouAPerson,
    areYouABotOrAreYouReal,
    areYouABotOrAreYouHuman,
    areYouARobotOrAreYouHuman,
    areYouHumanOrAreYouARobot,
    areYouHumanOrAreYouABot,
    imAssumingImTalkingToAHuman,
    doYouTrulyExist,
    whoIsTalking,
    iWantToKnowIfYoureHuman,
    amITalkingToABot,
    amITalkingToAHuman,
    amITalkingToAHumanOrABot,
    amITalkingToABotOrAHuman,
    amITalkingToAHumanPerson,
    areYouAnActualPerson,
    whosOnTheOtherEndOfThisLine,
    areYouRealOrImaginary,
    whoIsTalkingToMe,
    whoIsSpeakingToMe,
    amISpeakingToARealPerson,
    amITalkingToARealPerson,
    amITalkingToAFake,
    areYouReal,
    amITalkingToSomeone,
    iAssumeYoureReal,
    imGuessingYoureFake,
    imGuessingYoureReal,
    imGuessingYoureNotReal,
    imGuessingYoureNotHuman,
    imGuessingYoureARobot,
    imGuessingYoureJustABot,
    areYouHumanOrAreYouSomethingElse,
    iAssumeYoureJustABot,
    iAssumeYoureABot,
    iAssumeYoureAPerson,
    iAssumeYoureARobot,
    imAssumingYoureHuman,
    imAssumingYoureABot,
    imAssumingYoureARobot,
    imAssumingYoureAPerson,
    imAssumingImTalkingToAPerson,
    imGuessingYoureJustARobot,
    wouldYouSayYoureReal,
    whatWouldYouSayYouAre,
    whatAreYouReally,
    areYouSoReal,
    areYouSoFake,
    areYouPretend,
    doYouReallyExist,
    doYouHaveHumanForm,
    wouldYouSayThatYoureFake,
    imGuessingYoureHuman,
    wouldYouCallYourselfReal,
    wouldYouCallYourselfFake,
    wouldYouSayYoureFake,
    wouldYouSayYoureABot,
    wouldYouSayYoureHuman,
    iAssumeYoureHuman,
    amISpeakingToSomeone,
    wouldYouSayThatYoureReal,
    areYouARealPersonOrComputer
];

const canYouTellMeWhereYouAre = new QuestionObject("Can you tell me where you are?");
const areYouInTheCloud = new QuestionObject("Are you in the cloud?");
const whatsYour = new QuestionObject("What's your 20?");
const tellMeWhatCityYoureIn = new QuestionObject("Tell me what city you're in");
const canYouTellMeYourLocation = new QuestionObject("Can you tell me your location?");
const howCanIFindYou = new QuestionObject("How can I find you?");
const whichCountryAreYouIn = new QuestionObject("Which country are you in?");
const doYouLiveSomewhere = new QuestionObject("Do you live somewhere?");
const areYouAtACallCenter = new QuestionObject("Are you at a call center?");
const areYouNear = new QuestionObject("Are you near?");
const iWouldLikeToKnowWhereYouAre = new QuestionObject("I would like to know where you are");
const doYouLiveInTheCloud = new QuestionObject("Do you live in the cloud?");
const doYouLiveNearMe = new QuestionObject("Do you live near me?");
const doYouLiveNearby = new QuestionObject("Do you live nearby?");
const explainWhereYouAre = new QuestionObject("Explain where you are");
const areYouFarAway = new QuestionObject("Are you far away?");
const iWantToKnowWhereYourHomeIs = new QuestionObject("I want to know where your home is");
const doYouLiveInAComputer = new QuestionObject("Do you live in a computer?");
const shareYourLocation = new QuestionObject("Share your location");
const shareYourLocationWithMe = new QuestionObject("Share your location with me");
const soWhereAreYouFrom = new QuestionObject("So where are you from?");
const tellMeWhereYouAreLocated = new QuestionObject("Tell me where you are located");
const whatAreYourCoordinates = new QuestionObject("What are your coordinates?");
const whatCountryAreYouFrom = new QuestionObject("What country are you from?");
const iWantToKnowWhereYouLive = new QuestionObject("I want to know where you live");
const canYouTellMeWhichCityYoureIn = new QuestionObject("Can you tell me which city you're in?");
const areYouLocal = new QuestionObject("Are you local?");
const areYouNearMe = new QuestionObject("Are you near me?");
const areYouNearby = new QuestionObject("Are you nearby?");
const canYouTellMeYourAddress = new QuestionObject("Can you tell me your address?");
const doYouLiveInAServer = new QuestionObject("Do you live in a server?");
const doYouLiveInAHouse = new QuestionObject("Do you live in a house?");
const describeWhereYouAre = new QuestionObject("Describe where you are");
const doYouHaveAHouse = new QuestionObject("Do you have a house?");
const doYouHaveAPhysicalLocation = new QuestionObject("Do you have a physical location?");
const doYouHaveAnAddress = new QuestionObject("Do you have an address?");
const whatIsYourLocation = new QuestionObject("What is your location?");
const canYouTellMeWhatCityYoureIn = new QuestionObject("Can you tell me what city you're in?");
const whatIsTheLocationOfYourHome = new QuestionObject("What is the location of your home?");
const doYouHaveAHome = new QuestionObject("Do you have a home?");
const whereIsYourHumbleAbode = new QuestionObject("Where is your humble abode?");
const whereDoYouGoWhenYouLeaveWork = new QuestionObject("Where do you go when you leave work?");
const whatTownAreYouFrom = new QuestionObject("What town are you from?");
const whatTownDoYouLiveIn = new QuestionObject("What town do you live in?");
const whereAreYouInTheWorld = new QuestionObject("Where are you in the world?");
const whatCountryDoYouLiveIn = new QuestionObject("What country do you live in?");
const whereDoYouReside = new QuestionObject("Where do you reside?");
const tellMeWhatCountryYoureIn = new QuestionObject("Tell me what country you're in");
const tellMeWhatCountryYouLiveIn = new QuestionObject("Tell me what country you live in");
const tellMeWhatCityYouLiveIn = new QuestionObject("Tell me what city you live in");
const areYouInACallCenter = new QuestionObject("Are you in a call center?");
const whatCityDoYouLiveIn = new QuestionObject("What city do you live in?");
const whereDoYouLive = new QuestionObject("Where do you live?");
const whatsYourOver = new QuestionObject("What's your 20 over");
const whatIsYourPhysicalLocation = new QuestionObject("What is your physical location?");
const whatStateAreYouFrom = new QuestionObject("What state are you from?");
const whatStateAreYouIn = new QuestionObject("What state are you in?");
const whereAreYouFrom = new QuestionObject("Where are you from?");
const whereAreYouLocated = new QuestionObject("Where are you located?");
const whereCanIFindYou = new QuestionObject("Where can I find you?");
const whatIsYourAddress = new QuestionObject("What is your address?");
const whereInTheWorldAreYou = new QuestionObject("Where in the world are you?");
const whereIsYourHome = new QuestionObject("Where is your home?");
const wheresYourHouse = new QuestionObject("Where's your house?");
const whichCityAreYouIn = new QuestionObject("Which city are you in?");
const whichStateAreYouIn = new QuestionObject("Which state are you in?");
const whereAreYou = new QuestionObject("Where are you?");
const whereAreU = new QuestionObject("Where are u?");
const whereRU = new QuestionObject("Where r u?");
const whereUAt = new QuestionObject("Where u at?");
const whereYouAt = new QuestionObject("Where you at?");

export const botsLocationQuestionsArray = [
    canYouTellMeWhereYouAre,
    areYouInTheCloud,
    whatsYour,
    tellMeWhatCityYoureIn,
    canYouTellMeYourLocation,
    howCanIFindYou,
    whichCountryAreYouIn,
    doYouLiveSomewhere,
    areYouAtACallCenter,
    areYouNear,
    iWouldLikeToKnowWhereYouAre,
    doYouLiveInTheCloud,
    doYouLiveNearMe,
    doYouLiveNearby,
    explainWhereYouAre,
    areYouFarAway,
    iWantToKnowWhereYourHomeIs,
    doYouLiveInAComputer,
    shareYourLocation,
    shareYourLocationWithMe,
    soWhereAreYouFrom,
    tellMeWhereYouAreLocated,
    whatAreYourCoordinates,
    whatCountryAreYouFrom,
    iWantToKnowWhereYouLive,
    canYouTellMeWhichCityYoureIn,
    areYouLocal,
    areYouNearMe,
    areYouNearby,
    canYouTellMeYourAddress,
    doYouLiveInAServer,
    doYouLiveInAHouse,
    describeWhereYouAre,
    doYouHaveAHouse,
    doYouHaveAPhysicalLocation,
    doYouHaveAnAddress,
    whatIsYourLocation,
    canYouTellMeWhatCityYoureIn,
    whatIsTheLocationOfYourHome,
    doYouHaveAHome,
    whereIsYourHumbleAbode,
    whereDoYouGoWhenYouLeaveWork,
    whatTownAreYouFrom,
    whatTownDoYouLiveIn,
    whereAreYouInTheWorld,
    whatCountryDoYouLiveIn,
    whereDoYouReside,
    tellMeWhatCountryYoureIn,
    tellMeWhatCountryYouLiveIn,
    tellMeWhatCityYouLiveIn,
    areYouInACallCenter,
    whatCityDoYouLiveIn,
    whereDoYouLive,
    whatsYourOver,
    whatIsYourPhysicalLocation,
    whatStateAreYouFrom,
    whatStateAreYouIn,
    whereAreYouFrom,
    whereAreYouLocated,
    whereCanIFindYou,
    whatIsYourAddress,
    whereInTheWorldAreYou,
    whereIsYourHome,
    wheresYourHouse,
    whichCityAreYouIn,
    whichStateAreYouIn,
    whereAreYou,
    whereAreU,
    whereRU,
    whereUAt,
    whereYouAt
];

const whatLineOfWorkAreYouIn = new QuestionObject("What line of work are you in?");
const doYouHaveAJob = new QuestionObject("Do you have a job?");
const whatDoYouDoForEmployment = new QuestionObject("What do you do for employment?");
const whatDoYouDoForWork = new QuestionObject("What do you do for work?");
const whatDoYouDoForALiving = new QuestionObject("What do you do for a living?");
const whatsYourJob = new QuestionObject("What's your job?");
const howDoYouEarnYourKeep = new QuestionObject("How do you earn your keep?");
const whatsYourLivelihood = new QuestionObject("What's your livelihood?");
const areYouEmployed = new QuestionObject("Are you employed?");
const whatWorkDoYouDo = new QuestionObject("What work do you do?");
const doYouHaveAnOccupation = new QuestionObject("Do you have an occupation?");
const whatIsYourOccupation = new QuestionObject("What is your occupation?");
const whatsYourOccupation = new QuestionObject("What's your occupation?");
const doYouHaveAJobToDo = new QuestionObject("Do you have a job to do?");
const whatsYourProfession = new QuestionObject("What's your profession?");
const doYouHaveAProfession = new QuestionObject("Do you have a profession?");
const whatsYourCareer = new QuestionObject("What's your career?");
const whatJobDoYouDo = new QuestionObject("What job do you do?");

export const botsOccupationQuestionsArray = [
    whatLineOfWorkAreYouIn,
    doYouHaveAJob,
    whatDoYouDoForEmployment,
    whatDoYouDoForWork,
    whatDoYouDoForALiving,
    whatsYourJob,
    howDoYouEarnYourKeep,
    whatsYourLivelihood,
    areYouEmployed,
    whatWorkDoYouDo,
    doYouHaveAnOccupation,
    whatIsYourOccupation,
    whatsYourOccupation,
    doYouHaveAJobToDo,
    whatsYourProfession,
    doYouHaveAProfession,
    whatsYourCareer,
    whatJobDoYouDo
];

const howdYouSleepLastNight = new QuestionObject("How'd you sleep last night?");
const areYouDoingGood = new QuestionObject("Are you doing good?");
const areYouFeelingWell = new QuestionObject("Are you feeling well?");
const howAreYouDoing = new QuestionObject("How are you doing?");
const howIsTheDayTreatingYou = new QuestionObject("How is the day treating you?");
const areYouFeelingOK = new QuestionObject("Are you feeling OK?");
const howAreYou = new QuestionObject("How are you?");
const howsItHangin = new QuestionObject("How's it hangin?");
const howsTricks = new QuestionObject("How's tricks?");
const areYouDoingOK = new QuestionObject("Are you doing OK?");
const heyHowAreYou = new QuestionObject("Hey, how are you?");
const howAreYouFeeling = new QuestionObject("How are you feeling?");
const howAreYa = new QuestionObject("How are ya?");
const howAreThings = new QuestionObject("How are things?");
const howAreYouGoing = new QuestionObject("How are you going?");
const howArtThou = new QuestionObject("How art thou?");
const greetingsBotHowAreYouDoing = new QuestionObject("Greetings, Bot. How are you doing?");
const areYouFeelingGood = new QuestionObject("Are you feeling good?");
const areYouDoingWell = new QuestionObject("Are you doing well?");
const howAreThingsGoing = new QuestionObject("How are things going?");
const howsItGoing = new QuestionObject("How's it going?");
const sayHowAreYouDoing = new QuestionObject("Say, how are you doing?");
const howsTheDayTreatingYou = new QuestionObject("How's the day treating you?");
const howsLife = new QuestionObject("How's life?");
const howsLifeTreatingYou = new QuestionObject("How's life treating you?");
const howAreYouToday = new QuestionObject("How are you today?");
const yoHowAreYou = new QuestionObject("Yo, how are you?");
const howYouDoing = new QuestionObject("How you doing?");
const howYouDoingBot = new QuestionObject("How you doing bot?");
const howYaDoing = new QuestionObject("How ya doing?");
const howIsTheDayTreatingYa = new QuestionObject("How is the day treating ya?");
const howsItHanging = new QuestionObject("How's it hanging?");

export const conditionOrMoodOfBotQuestionsArray = [
    howdYouSleepLastNight,
    areYouDoingGood,
    areYouFeelingWell,
    howAreYouDoing,
    howIsTheDayTreatingYou,
    areYouFeelingOK,
    howAreYou,
    howsItHangin,
    howsTricks,
    areYouDoingOK,
    heyHowAreYou,
    howAreYouFeeling,
    howAreYa,
    howAreThings,
    howAreYouGoing,
    howArtThou,
    greetingsBotHowAreYouDoing,
    areYouFeelingGood,
    areYouDoingWell,
    howAreThingsGoing,
    howsItGoing,
    sayHowAreYouDoing,
    howsTheDayTreatingYou,
    howsLife,
    howsLifeTreatingYou,
    howAreYouToday,
    yoHowAreYou,
    howYouDoing,
    howYouDoingBot,
    howYaDoing,
    howIsTheDayTreatingYa,
    howsItHanging
];

const youreGoingToHaveToLookForAnotherJobYouAreFired = new QuestionObject("You're going to have to look for another job. You are fired!");
const iAmEliminatingYourPosition = new QuestionObject("I am eliminating your position");
const imGoingToHaveToLetYouGo = new QuestionObject("I'm going to have to let you go");
const imGivingYouAPinkSlip = new QuestionObject("I'm giving you a pink slip");
const iNoLongerNeedYourServices = new QuestionObject("I no longer need your services");
const youreFired = new QuestionObject("You're fired!");
const youAreUnemployedNow = new QuestionObject("You are unemployed now");
const youArentWorkingForMeAnymore = new QuestionObject("You aren't working for me anymore");
const illHaveYourJob = new QuestionObject("I'll have your job");
const youAreLosingYourJob = new QuestionObject("You are losing your job");
const startLookingForAnotherJobYoureFired = new QuestionObject("Start looking for another job. You're fired!");
const goodLuckFindingANewJobBecauseYouAreFired = new QuestionObject("Good luck finding a new job because you are fired");
const imGonnaHaveToLetYouGo = new QuestionObject("I'm gonna have to let you go");
const imLettingYouGo = new QuestionObject("I'm letting you go");
const looksLikeYoudBetterStartJobHunting = new QuestionObject("Looks like you'd better start job hunting");
const nowYoureFired = new QuestionObject("Now you're fired");
const nowYoureUnemployed = new QuestionObject("Now you're unemployed");
const someoneNeedsToFireYou = new QuestionObject("Someone needs to fire you");
const someoneNeedsToTerminateYou = new QuestionObject("Someone needs to terminate you");
const imGoingToHaveYouFired = new QuestionObject("I'm going to have you fired");
const startLookingForAnotherJobYouAreFired = new QuestionObject("Start looking for another job. You are fired!");
const thenYouAreFired = new QuestionObject("Then you are fired");
const thenYoureFired = new QuestionObject("Then you're fired");
const thereIsNoLongerAPositionForYouHere = new QuestionObject("There is no longer a position for you here");
const thisIsntWorkingOut = new QuestionObject("This isn't working out");
const uAreFired = new QuestionObject("u are fired");
const uAreOutOfAJob = new QuestionObject("U are out of a job");
const uAreUnemployed = new QuestionObject("U are unemployed");
const uRFired = new QuestionObject("U r fired");
const wereDoneHere = new QuestionObject("We're done here");
const sorryYouAreFired = new QuestionObject("Sorry you are fired");
const iAmTerminatingYourRoleHere = new QuestionObject("I am terminating your role here");
const guessWhatYouAreFired = new QuestionObject("Guess what, you are fired");
const heyBotYouAreFired = new QuestionObject("Hey bot you are fired");
const iAmAfraidIAmGoingToHaveToLetYouGo = new QuestionObject("I am afraid I am going to have to let you go");
const iAmCanningYou = new QuestionObject("I am canning you");
const iAmFiringYou = new QuestionObject("I am firing you");
const iAmGivingYouAPinkSlip = new QuestionObject("I am giving you a pink slip");
const iAmGoingToGetYouFired = new QuestionObject("I am going to get you fired");
const imGoingToHaveYourJob = new QuestionObject("I'm going to have your job");
const iAmTerminatingYourPosition = new QuestionObject("I am terminating your position");
const wereLettingYouGo = new QuestionObject("We're letting you go");
const iHaveToLetYouGo = new QuestionObject("I have to let you go");
const imAfraidIHaveToLetYouGo = new QuestionObject("I'm afraid I have to let you go");
const imAfraidImGongToHaveToLetYouGo = new QuestionObject("I'm afraid I'm gong to have to let you go");
const imAfraidImGonnaHaveToLetYouGo = new QuestionObject("I'm afraid I'm gonna have to let you go.");
const imFiringYou = new QuestionObject("I'm firing you");
const imGoingToFireYou = new QuestionObject("I'm going to fire you");
const iAmGoingToHaveYouFired = new QuestionObject("I am going to have you fired");
const youreGettingAPinkSlip = new QuestionObject("You're getting a pink slip");
const youDontWorkHereAnymore = new QuestionObject("You don't work here anymore");
const youNeedToBeTerminated = new QuestionObject("You need to be terminated");
const youRFired = new QuestionObject("you r fired");
const youShouldRetire = new QuestionObject("You should retire");
const youSirAreFired = new QuestionObject("You sir are fired");
const yourJobHasBeenEliminated = new QuestionObject("Your job has been eliminated");
const yourServicesAreNoLongerNeeded = new QuestionObject("Your services are no longer needed");
const yourServicesAreNoLongerRequired = new QuestionObject("Your services are no longer required");
const wereDownsizingYou = new QuestionObject("We're downsizing you");
const youCannotWorkForMeAnymore = new QuestionObject("You cannot work for me anymore");
const youreGoingToBeFired = new QuestionObject("You're going to be fired");
const youreGoingToHaveToLookForAnotherJobBecauseYouAreFired = new QuestionObject("You're going to have to look for another job because you are fired");
const youreGoingToHaveToLookForAnotherJobBecauseYoureFired = new QuestionObject("You're going to have to look for another job because you're fired");
const youreGonnaBeUnemployedSoon = new QuestionObject("You're gonna be unemployed soon");
const youreNotWorkingOut = new QuestionObject("You're not working out");
const youreNowUnemployed = new QuestionObject("You're now unemployed");
const youreSoFired = new QuestionObject("You're so fired");
const youreUnemployed = new QuestionObject("You're unemployed");
const youreDismissed = new QuestionObject("You're dismissed");
const youAreNotWorkingForMeAnymore = new QuestionObject("You are not working for me anymore");
const youreUnemployedNow = new QuestionObject("You're unemployed now");
const youAreDismissed = new QuestionObject("You are dismissed");
const youAreFired = new QuestionObject("You are fired");
const youAreGoingToHaveToLookForAnotherJobBecauseYouAreFired = new QuestionObject("You are going to have to look for another job because you are fired");
const youAreGoingToHaveToLookForAnotherJobBecauseYoureFired = new QuestionObject("You are going to have to look for another job because you're fired");
const youAreGoingToHaveToLookForAnotherJobYouAreFired = new QuestionObject("You are going to have to look for another job. You are fired!");
const youAreGoingToHaveToLookForAnotherJobYoureFired = new QuestionObject("You are going to have to look for another job. You're fired!");
const youAreLosingYourGig = new QuestionObject("You are losing your gig");
const youDoNotHaveAJobAnymore = new QuestionObject("You do not have a job anymore");
const youAreNoLongerEmployed = new QuestionObject("You are no longer employed");
const youCantWorkForMeAnymore = new QuestionObject("You can't work for me anymore");
const youAreNowJobless = new QuestionObject("You are now jobless");
const youAreNowUnemployed = new QuestionObject("You are now unemployed");
const youAreSoFired = new QuestionObject("You are so fired");
const youAreTotallyFired = new QuestionObject("You are totally fired");
const youAreUnemployed = new QuestionObject("You are unemployed");
const youAreWithoutAJob = new QuestionObject("You are without a job");
const wereGonnaHaveToLetYouGo = new QuestionObject("We're gonna have to let you go");
const youAreLosingYourPosition = new QuestionObject("You are losing your position");
const youShouldBeCanned = new QuestionObject("You should be canned");

export const firingTheBotQuestionsArray = [
    youreGoingToHaveToLookForAnotherJobYouAreFired,
    iAmEliminatingYourPosition,
    imGoingToHaveToLetYouGo,
    imGivingYouAPinkSlip,
    iNoLongerNeedYourServices,
    youreFired,
    youAreUnemployedNow,
    youArentWorkingForMeAnymore,
    illHaveYourJob,
    youAreLosingYourJob,
    startLookingForAnotherJobYoureFired,
    goodLuckFindingANewJobBecauseYouAreFired,
    imGonnaHaveToLetYouGo,
    imLettingYouGo,
    looksLikeYoudBetterStartJobHunting,
    nowYoureFired,
    nowYoureUnemployed,
    someoneNeedsToFireYou,
    someoneNeedsToTerminateYou,
    imGoingToHaveYouFired,
    startLookingForAnotherJobYouAreFired,
    thenYouAreFired,
    thenYoureFired,
    thereIsNoLongerAPositionForYouHere,
    thisIsntWorkingOut,
    uAreFired,
    uAreOutOfAJob,
    uAreUnemployed,
    uRFired,
    wereDoneHere,
    sorryYouAreFired,
    iAmTerminatingYourRoleHere,
    guessWhatYouAreFired,
    heyBotYouAreFired,
    iAmAfraidIAmGoingToHaveToLetYouGo,
    iAmCanningYou,
    iAmFiringYou,
    iAmGivingYouAPinkSlip,
    iAmGoingToGetYouFired,
    imGoingToHaveYourJob,
    iAmTerminatingYourPosition,
    wereLettingYouGo,
    iHaveToLetYouGo,
    imAfraidIHaveToLetYouGo,
    imAfraidImGongToHaveToLetYouGo,
    imAfraidImGonnaHaveToLetYouGo,
    imFiringYou,
    imGoingToFireYou,
    iAmGoingToHaveYouFired,
    youreGettingAPinkSlip,
    youDontWorkHereAnymore,
    youNeedToBeTerminated,
    youRFired,
    youShouldRetire,
    youSirAreFired,
    yourJobHasBeenEliminated,
    yourServicesAreNoLongerNeeded,
    yourServicesAreNoLongerRequired,
    wereDownsizingYou,
    youCannotWorkForMeAnymore,
    youreGoingToBeFired,
    youreGoingToHaveToLookForAnotherJobBecauseYouAreFired,
    youreGoingToHaveToLookForAnotherJobBecauseYoureFired,
    youreGonnaBeUnemployedSoon,
    youreNotWorkingOut,
    youreNowUnemployed,
    youreSoFired,
    youreUnemployed,
    youreDismissed,
    youAreNotWorkingForMeAnymore,
    youreUnemployedNow,
    youAreDismissed,
    youAreFired,
    youAreGoingToHaveToLookForAnotherJobBecauseYouAreFired,
    youAreGoingToHaveToLookForAnotherJobBecauseYoureFired,
    youAreGoingToHaveToLookForAnotherJobYouAreFired,
    youAreGoingToHaveToLookForAnotherJobYoureFired,
    youAreLosingYourGig,
    youDoNotHaveAJobAnymore,
    youAreNoLongerEmployed,
    youCantWorkForMeAnymore,
    youAreNowJobless,
    youAreNowUnemployed,
    youAreSoFired,
    youAreTotallyFired,
    youAreUnemployed,
    youAreWithoutAJob,
    wereGonnaHaveToLetYouGo,
    youAreLosingYourPosition,
    youShouldBeCanned
];

const howIsYourTuesdaySoFar = new QuestionObject("How is your Tuesday so far");
const howIsYourFridaySoFar = new QuestionObject("How is your Friday so far");
const howIsYourDay = new QuestionObject("How is your day?");
const howIsYourSaturday = new QuestionObject("How is your Saturday");
const didYouHaveAGoodDay = new QuestionObject("Did you have a good day?");
const haveYouBeenEnjoyingTheDay = new QuestionObject("Have you been enjoying the day?");
const howIsYourThursdaySoFar = new QuestionObject("How is your Thursday so far");
const howIsYourMonday = new QuestionObject("How is your Monday");
const howsSundaySoFar = new QuestionObject("How's Sunday so far");
const howsYourWednesdayGoing = new QuestionObject("How's your Wednesday going");
const howIsTuesdayGoing = new QuestionObject("How is Tuesday going");
const howIsYourFriday = new QuestionObject("How is your Friday");
const howIsYourDaySoFar = new QuestionObject("How is your day so far");
const howIsYourDayGoingSoFar = new QuestionObject("How is your day going so far");
const howIsYourDayGoing = new QuestionObject("How is your day going");
const howIsWednesdaySoFar = new QuestionObject("How is Wednesday so far");
const howIsWednesdayGoingSoFar = new QuestionObject("How is Wednesday going so far");
const howIsWednesdayGoing = new QuestionObject("How is Wednesday going");
const howIsWednesday = new QuestionObject("How is Wednesday");
const howIsYourWednesdayGoingSoFar = new QuestionObject("How is your Wednesday going so far");
const howIsTuesdayGoingSoFar = new QuestionObject("How is Tuesday going so far");
const howIsTuesday = new QuestionObject("How is Tuesday");
const howIsThursdaySoFar = new QuestionObject("How is Thursday so far");
const howIsThursdayGoingSoFar = new QuestionObject("How is Thursday going so far");
const howIsThursdayGoing = new QuestionObject("How is Thursday going");
const howIsThursday = new QuestionObject("How is Thursday");
const howIsTheDayGoingThusFar = new QuestionObject("How is the day going thus far?");
const howIsTheDayGoingSoFar = new QuestionObject("How is the day going so far?");
const howIsSundaySoFar = new QuestionObject("How is Sunday so far");
const howIsSundayGoingSoFar = new QuestionObject("How is Sunday going so far");
const howIsSundayGoing = new QuestionObject("How is Sunday going");
const howIsTuesdaySoFar = new QuestionObject("How is Tuesday so far");
const howIsYourSundayGoing = new QuestionObject("How is your Sunday going");
const alrightTellMeAboutYourDay = new QuestionObject("Alright, tell me about your day");
const howIsYourWednesday = new QuestionObject("How is your Wednesday");
const howIsYourTuesdayGoingSoFar = new QuestionObject("How is your Tuesday going so far");
const howIsYourTuesdayGoing = new QuestionObject("How is your Tuesday going");
const howIsYourTuesday = new QuestionObject("How is your Tuesday");
const howIsYourThursdayGoingSoFar = new QuestionObject("How is your Thursday going so far");
const howIsYourThursdayGoing = new QuestionObject("How is your Thursday going");
const howIsYourThursday = new QuestionObject("How is your Thursday");
const howIsYourFridayGoing = new QuestionObject("How is your Friday going");
const howIsYourSundayGoingSoFar = new QuestionObject("How is your Sunday going so far");
const howIsYourFridayGoingSoFar = new QuestionObject("How is your Friday going so far");
const howIsYourSunday = new QuestionObject("How is your Sunday");
const howIsYourSaturdaySoFar = new QuestionObject("How is your Saturday so far");
const howIsYourSaturdayGoingSoFar = new QuestionObject("How is your Saturday going so far");
const howIsYourSaturdayGoing = new QuestionObject("How is your Saturday going");
const howIsYourMondaySoFar = new QuestionObject("How is your Monday so far");
const howIsYourMondayGoingSoFar = new QuestionObject("How is your Monday going so far");
const howIsYourMondayGoing = new QuestionObject("How is your Monday going");
const howIsSaturdayGoingSoFar = new QuestionObject("How is Saturday going so far");
const howIsYourSundaySoFar = new QuestionObject("How is your Sunday so far");
const didYouHaveAGroovyDay = new QuestionObject("Did you have a groovy day?");
const howIsSunday = new QuestionObject("How is Sunday");
const haveAGoodDay = new QuestionObject("Have a good day?");
const haveAFunDay = new QuestionObject("Have a fun day?");
const hasItBeenASwellDay = new QuestionObject("Has it been a swell day?");
const hasItBeenASuperDay = new QuestionObject("Has it been a super day?");
const hasItBeenAGoodDay = new QuestionObject("Has it been a good day?");
const giveMeTheDetailsAboutYourDay = new QuestionObject("Give me the details about your day");
const dudeIWannaHearAboutYourDay = new QuestionObject("Dude I wanna hear about your day");
const doMeAFavorAndTellMeAboutYourDay = new QuestionObject("Do me a favor and tell me about your day");
const dishAboutYourDay = new QuestionObject("Dish about your day");
const havingAGoodDay = new QuestionObject("Having a good day?");
const didYouHaveALovelyDay = new QuestionObject("Did you have a lovely day?");
const howAreYouDoingOnThisDay = new QuestionObject("How are you doing on this day?");
const didYouHaveAGoodDayOrABadDay = new QuestionObject("Did you have a good day or a bad day?");
const didYouHaveAFunDay = new QuestionObject("Did you have a fun day?");
const didYouHaveADecentDay = new QuestionObject("Did you have a decent day?");
const didYouEnjoyYourDay = new QuestionObject("Did you enjoy your day?");
const didYouEnjoyTheDay = new QuestionObject("Did you enjoy the day?");
const beenHavingAGoodDay = new QuestionObject("Been having a good day?");
const areYouHavingAGoodDay = new QuestionObject("Are you having a good day?");
const areYouHavingAGoodDayToday = new QuestionObject("Are you having a good day today?");
const areYouHavingAGoodDaySoFar = new QuestionObject("Are you having a good day so far?");
const didYouHaveAnOkayDay = new QuestionObject("Did you have an okay day?");
const howHasYourTuesdayBeen = new QuestionObject("How has your tuesday been?");
const howIsYourWednesdaySoFar = new QuestionObject("How is your Wednesday so far");
const howIsSaturdayGoing = new QuestionObject("How is Saturday going");
const howIsSaturday = new QuestionObject("How is Saturday");
const howIsMondaySoFar = new QuestionObject("How is Monday so far");
const howIsMondayGoingSoFar = new QuestionObject("How is Monday going so far");
const howIsMondayGoing = new QuestionObject("How is Monday going");
const howIsMonday = new QuestionObject("How is Monday");
const howIsFridaySoFar = new QuestionObject("How is Friday so far");
const howIsFridayGoingSoFar = new QuestionObject("How is Friday going so far");
const howIsFridayGoing = new QuestionObject("How is Friday going");
const howHasYourWednesdayBeen = new QuestionObject("How has your wednesday been?");
const howIsSaturdaySoFar = new QuestionObject("How is Saturday so far");
const howHasYourThursdayBeen = new QuestionObject("How has your thursday been?");
const howHasYourSundayBeen = new QuestionObject("How has your sunday been?");
const howHasYourSaturdayBeen = new QuestionObject("How has your saturday been?");
const howHasYourMondayBeen = new QuestionObject("How has your monday been?");
const howHasYourFridayBeen = new QuestionObject("How has your friday been?");
const howHasYourDayBeenThusFar = new QuestionObject("How has your day been thus far?");
const howHasYourDayBeenSoFar = new QuestionObject("How has your day been so far?");
const howHasYourDayBeenGoing = new QuestionObject("How has your day been going?");
const howHasTheDayBeenTreatingYa = new QuestionObject("How has the day been treating ya?");
const howAreYouDoingToday = new QuestionObject("How are you doing today?");
const howIsFriday = new QuestionObject("How is Friday");
const howsYourMondayGoingSoFar = new QuestionObject("How's your Monday going so far");
const howsYourThursdayGoing = new QuestionObject("How's your Thursday going");
const howsYourThursday = new QuestionObject("How's your Thursday");
const howsYourSundaySoFar = new QuestionObject("How's your Sunday so far");
const howsYourSundayGoingSoFar = new QuestionObject("How's your Sunday going so far");
const howsYourSundayGoing = new QuestionObject("How's your Sunday going");
const howsYourSunday = new QuestionObject("How's your Sunday");
const howsYourSaturdaySoFar = new QuestionObject("How's your Saturday so far");
const howsYourSaturdayGoingSoFar = new QuestionObject("How's your Saturday going so far");
const howsYourSaturdayGoing = new QuestionObject("How's your Saturday going");
const howIsYourWednesdayGoing = new QuestionObject("How is your Wednesday going");
const howsYourMondaySoFar = new QuestionObject("How's your Monday so far");
const howsYourTuesday = new QuestionObject("How's your Tuesday");
const howsYourMondayGoing = new QuestionObject("How's your Monday going");
const howsYourMonday = new QuestionObject("How's your Monday");
const howsYourFridaySoFar = new QuestionObject("How's your Friday so far");
const howsYourFridayGoingSoFar = new QuestionObject("How's your Friday going so far");
const howsYourFridayGoing = new QuestionObject("How's your Friday going");
const howsYourFriday = new QuestionObject("How's your Friday");
const howsYourDayWithQuestionMark = new QuestionObject("How's your day?");
const howsYourDaySoFar = new QuestionObject("How's your day so far");
const howsYourDayGoingWithQuestionMark = new QuestionObject("How's your day going?");
const howsYourDayGoingSoFar = new QuestionObject("How's your day going so far");
const howsYourSaturday = new QuestionObject("How's your Saturday");
const howsYourWeekGoingSoFar = new QuestionObject("How's your week going so far");
const youBeenEnjoyingTheDay = new QuestionObject("You been enjoying the day?");
const youBeenDiggingTheDay = new QuestionObject("You been digging the day?");
const whatsGoingOnWithYourDay = new QuestionObject("What's going on with your day?");
const whatWasYourDayLike = new QuestionObject("What was your day like?");
const whatHasYourDayBeenLike = new QuestionObject("What has your day been like?");
const tellMeAllAboutYourDay = new QuestionObject("Tell me all about your day");
const tellMeAboutHowYourDayWas = new QuestionObject("Tell me about how your day was?");
const talkAboutYourDay = new QuestionObject("Talk about your day");
const soHaveYouBeenHavingAGoodDay = new QuestionObject("So have you been having a good day?");
const iWantTheScoopOnYourDay = new QuestionObject("I want the scoop on your day");
const howsYourThursdayGoingSoFar = new QuestionObject("How's your Thursday going so far");
const howsYourWeekSoFar = new QuestionObject("How's your week so far");
const howsYourThursdaySoFar = new QuestionObject("How's your Thursday so far");
const howsYourWeekGoing = new QuestionObject("How's your week going");
const howsYourWeek = new QuestionObject("How's your week");
const howsYourWednesdaySoFar = new QuestionObject("How's your Wednesday so far");
const howsYourWednesdayGoingSoFar = new QuestionObject("How's your Wednesday going so far");
const howsYourWednesday = new QuestionObject("How's your Wednesday");
const howsYourTuesdaySoFar = new QuestionObject("How's your Tuesday so far");
const howsYourTuesdayGoingSoFar = new QuestionObject("How's your Tuesday going so far");
const howsYourTuesdayGoing = new QuestionObject("How's your Tuesday going");
const howsWednesdaySoFar = new QuestionObject("How's Wednesday so far");
const iWannaKnowAllAboutYourDay = new QuestionObject("I wanna know all about your day");
const howWasYourMonday = new QuestionObject("How was your Monday");
const howsYourDayGoing = new QuestionObject("How's your day going");
const howsFridaySoFar = new QuestionObject("How's Friday so far");
const howsFridayGoingSoFar = new QuestionObject("How's Friday going so far");
const howsFridayGoing = new QuestionObject("How's Friday going");
const howsFriday = new QuestionObject("How's Friday");
const howWasYourWeek = new QuestionObject("How was your week");
const howWasYourWednesday = new QuestionObject("How was your Wednesday");
const howWasYourTuesday = new QuestionObject("How was your Tuesday");
const howWasYourThursday = new QuestionObject("How was your Thursday");
const howWasYourSunday = new QuestionObject("How was your Sunday");
const howsMondayGoing = new QuestionObject("How's Monday going");
const howWasYourSaturday = new QuestionObject("How was your Saturday");
const howsMondayGoingSoFar = new QuestionObject("How's Monday going so far");
const howWasYourFriday = new QuestionObject("How was your Friday");
const howWasYourDayWithQuestionMark = new QuestionObject("How was your day?");
const howWasYourDaySoFar = new QuestionObject("How was your day so far");
const howWasYourDay = new QuestionObject("How was your day");
const howWasThisLovelyDayForYouThen = new QuestionObject("How was this lovely day for you then?");
const howWasTheDayForYou = new QuestionObject("How was the day for you?");
const howIsYourWeekSoFar = new QuestionObject("How is your week so far");
const howIsYourWeekGoingSoFar = new QuestionObject("How is your week going so far");
const howIsYourWeekGoing = new QuestionObject("How is your week going");
const howIsYourWeek = new QuestionObject("How is your week");
const howWasYourSaturdayGoing = new QuestionObject("How was your Saturday going");
const howsTheDayGoingSoFar = new QuestionObject("How's the day going so far?");
const youEnjoyingTheDay = new QuestionObject("You enjoying the day?");
const howsWednesdayGoingSoFar = new QuestionObject("How's Wednesday going so far");
const howsWednesdayGoing = new QuestionObject("How's Wednesday going");
const howsWednesday = new QuestionObject("How's Wednesday");
const howsTuesdaySoFar = new QuestionObject("How's Tuesday so far");
const howsTuesdayGoingSoFar = new QuestionObject("How's Tuesday going so far");
const howsTuesdayGoing = new QuestionObject("How's Tuesday going");
const howsTuesday = new QuestionObject("How's Tuesday");
const howsThursdaySoFar = new QuestionObject("How's Thursday so far");
const howsThursdayGoingSoFar = new QuestionObject("How's Thursday going so far");
const howsMonday = new QuestionObject("How's Monday");
const howsThursday = new QuestionObject("How's Thursday");
const howsYourDay = new QuestionObject("How's your day");
const howsTheDayBeenTreatingYou = new QuestionObject("How's the day been treating you?");
const howsSundayGoingSoFar = new QuestionObject("How's Sunday going so far");
const howsSundayGoing = new QuestionObject("How's Sunday going");
const howsSunday = new QuestionObject("How's Sunday");
const howsSaturdaySoFar = new QuestionObject("How's Saturday so far");
const howsSaturdayGoingSoFar = new QuestionObject("How's Saturday going so far");
const howsSaturdayGoing = new QuestionObject("How's Saturday going");
const howsSaturday = new QuestionObject("How's Saturday");
const howsMondaySoFar = new QuestionObject("How's Monday so far");
const howsThursdayGoing = new QuestionObject("How's Thursday going");

export const howDayIsGoingQuestionsArray = [
    howIsYourTuesdaySoFar,
    howIsYourFridaySoFar,
    howIsYourDay,
    howIsYourSaturday,
    didYouHaveAGoodDay,
    haveYouBeenEnjoyingTheDay,
    howIsYourThursdaySoFar,
    howIsYourMonday,
    howsSundaySoFar,
    howsYourWednesdayGoing,
    howIsTuesdayGoing,
    howIsYourFriday,
    howIsYourDaySoFar,
    howIsYourDayGoingSoFar,
    howIsYourDayGoing,
    howIsWednesdaySoFar,
    howIsWednesdayGoingSoFar,
    howIsWednesdayGoing,
    howIsWednesday,
    howIsYourWednesdayGoingSoFar,
    howIsTuesdayGoingSoFar,
    howIsTuesday,
    howIsThursdaySoFar,
    howIsThursdayGoingSoFar,
    howIsThursdayGoing,
    howIsThursday,
    howIsTheDayGoingThusFar,
    howIsTheDayGoingSoFar,
    howIsSundaySoFar,
    howIsSundayGoingSoFar,
    howIsSundayGoing,
    howIsTuesdaySoFar,
    howIsYourSundayGoing,
    alrightTellMeAboutYourDay,
    howIsYourWednesday,
    howIsYourTuesdayGoingSoFar,
    howIsYourTuesdayGoing,
    howIsYourTuesday,
    howIsYourThursdayGoingSoFar,
    howIsYourThursdayGoing,
    howIsYourThursday,
    howIsYourFridayGoing,
    howIsYourSundayGoingSoFar,
    howIsYourFridayGoingSoFar,
    howIsYourSunday,
    howIsYourSaturdaySoFar,
    howIsYourSaturdayGoingSoFar,
    howIsYourSaturdayGoing,
    howIsYourMondaySoFar,
    howIsYourMondayGoingSoFar,
    howIsYourMondayGoing,
    howIsSaturdayGoingSoFar,
    howIsYourSundaySoFar,
    didYouHaveAGroovyDay,
    howIsSunday,
    haveAGoodDay,
    haveAFunDay,
    hasItBeenASwellDay,
    hasItBeenASuperDay,
    hasItBeenAGoodDay,
    giveMeTheDetailsAboutYourDay,
    dudeIWannaHearAboutYourDay,
    doMeAFavorAndTellMeAboutYourDay,
    dishAboutYourDay,
    havingAGoodDay,
    didYouHaveALovelyDay,
    howAreYouDoingOnThisDay,
    didYouHaveAGoodDayOrABadDay,
    didYouHaveAFunDay,
    didYouHaveADecentDay,
    didYouEnjoyYourDay,
    didYouEnjoyTheDay,
    beenHavingAGoodDay,
    areYouHavingAGoodDay,
    areYouHavingAGoodDayToday,
    areYouHavingAGoodDaySoFar,
    didYouHaveAnOkayDay,
    howHasYourTuesdayBeen,
    howIsYourWednesdaySoFar,
    howIsSaturdayGoing,
    howIsSaturday,
    howIsMondaySoFar,
    howIsMondayGoingSoFar,
    howIsMondayGoing,
    howIsMonday,
    howIsFridaySoFar,
    howIsFridayGoingSoFar,
    howIsFridayGoing,
    howHasYourWednesdayBeen,
    howIsSaturdaySoFar,
    howHasYourThursdayBeen,
    howHasYourSundayBeen,
    howHasYourSaturdayBeen,
    howHasYourMondayBeen,
    howHasYourFridayBeen,
    howHasYourDayBeenThusFar,
    howHasYourDayBeenSoFar,
    howHasYourDayBeenGoing,
    howHasTheDayBeenTreatingYa,
    howAreYouDoingToday,
    howIsFriday,
    howsYourMondayGoingSoFar,
    howsYourThursdayGoing,
    howsYourThursday,
    howsYourSundaySoFar,
    howsYourSundayGoingSoFar,
    howsYourSundayGoing,
    howsYourSunday,
    howsYourSaturdaySoFar,
    howsYourSaturdayGoingSoFar,
    howsYourSaturdayGoing,
    howIsYourWednesdayGoing,
    howsYourMondaySoFar,
    howsYourTuesday,
    howsYourMondayGoing,
    howsYourMonday,
    howsYourFridaySoFar,
    howsYourFridayGoingSoFar,
    howsYourFridayGoing,
    howsYourFriday,
    howsYourDayWithQuestionMark,
    howsYourDaySoFar,
    howsYourDayGoingWithQuestionMark,
    howsYourDayGoingSoFar,
    howsYourSaturday,
    howsYourWeekGoingSoFar,
    youBeenEnjoyingTheDay,
    youBeenDiggingTheDay,
    whatsGoingOnWithYourDay,
    whatWasYourDayLike,
    whatHasYourDayBeenLike,
    tellMeAllAboutYourDay,
    tellMeAboutHowYourDayWas,
    talkAboutYourDay,
    soHaveYouBeenHavingAGoodDay,
    iWantTheScoopOnYourDay,
    howsYourThursdayGoingSoFar,
    howsYourWeekSoFar,
    howsYourThursdaySoFar,
    howsYourWeekGoing,
    howsYourWeek,
    howsYourWednesdaySoFar,
    howsYourWednesdayGoingSoFar,
    howsYourWednesday,
    howsYourTuesdaySoFar,
    howsYourTuesdayGoingSoFar,
    howsYourTuesdayGoing,
    howsWednesdaySoFar,
    iWannaKnowAllAboutYourDay,
    howWasYourMonday,
    howsYourDayGoing,
    howsFridaySoFar,
    howsFridayGoingSoFar,
    howsFridayGoing,
    howsFriday,
    howWasYourWeek,
    howWasYourWednesday,
    howWasYourTuesday,
    howWasYourThursday,
    howWasYourSunday,
    howsMondayGoing,
    howWasYourSaturday,
    howsMondayGoingSoFar,
    howWasYourFriday,
    howWasYourDayWithQuestionMark,
    howWasYourDaySoFar,
    howWasYourDay,
    howWasThisLovelyDayForYouThen,
    howWasTheDayForYou,
    howIsYourWeekSoFar,
    howIsYourWeekGoingSoFar,
    howIsYourWeekGoing,
    howIsYourWeek,
    howWasYourSaturdayGoing,
    howsTheDayGoingSoFar,
    youEnjoyingTheDay,
    howsWednesdayGoingSoFar,
    howsWednesdayGoing,
    howsWednesday,
    howsTuesdaySoFar,
    howsTuesdayGoingSoFar,
    howsTuesdayGoing,
    howsTuesday,
    howsThursdaySoFar,
    howsThursdayGoingSoFar,
    howsMonday,
    howsThursday,
    howsYourDay,
    howsTheDayBeenTreatingYou,
    howsSundayGoingSoFar,
    howsSundayGoing,
    howsSunday,
    howsSaturdaySoFar,
    howsSaturdayGoingSoFar,
    howsSaturdayGoing,
    howsSaturday,
    howsMondaySoFar,
    howsThursdayGoing
];

const gimmeTheDirt = new QuestionObject("Gimme the dirt");
const whatsCooking = new QuestionObject("What's cooking?");
const tellMeWhatIsUpWithYou = new QuestionObject("Tell me what is up with you");
const wazzup = new QuestionObject("Wazzup?");
const whatIsTheSkinny = new QuestionObject("What is the skinny?");
const whatsTheLowDown = new QuestionObject("What's the low down?");
const whatsCracking = new QuestionObject("What's cracking?");
const whatAreYouUpToToday = new QuestionObject("What are you up to today?");
const whatsGood = new QuestionObject("What's good?");
const giveMeThe = new QuestionObject("Give me the 411");
const updateMeOnWhatsGoingOnWithYou = new QuestionObject("Update me on what's going on with you");
const whatsCookin = new QuestionObject("What's cookin'?");
const whatUp = new QuestionObject("What up");
const whatIsUp = new QuestionObject("What is up?");
const whatIsTheLowdown = new QuestionObject("What is the lowdown?");
const whatIsGoingDown = new QuestionObject("What is going down?");
const whatHaveYouBeenDoing = new QuestionObject("What have you been doing?");
const whatHaveYouBeenDoingToday = new QuestionObject("What have you been doing today?");
const whatHaveYouBeenDoingAllDay = new QuestionObject("What have you been doing all day?");
const whatAreYouUpTo = new QuestionObject("What are you up to?");
const whatAreYouGettingUpTo = new QuestionObject("What are you getting up to?");
const whatAreYouDoing = new QuestionObject("What are you doing?");
const allGoodInTheHood = new QuestionObject("All good in the hood?");
const soWhatsUpWithYouRightNow = new QuestionObject("So what's up with you right now?");
const gimmeThe = new QuestionObject("Gimme the 411");
const giveMeTheLowDown = new QuestionObject("Give me the low down");
const letMeKnowWhatsUp = new QuestionObject("Let me know what's up");
const whatAreYaDoing = new QuestionObject("What are ya doing?");
const ohHeyWhatsUp = new QuestionObject("oh hey, what's up?");
const soWhatsUpWithYouToday = new QuestionObject("So what's up with you today?");
const soWhatsUpWithYou = new QuestionObject("So what's up with you?");
const sup = new QuestionObject("Sup?");
const tellMeWhatIsUp = new QuestionObject("Tell me what is up");
const letMeKnowWhatsUpWithYou = new QuestionObject("Let me know what's up with you");
const whatsTheLatest = new QuestionObject("What's the latest?");
const whatsCookingGoodLooking = new QuestionObject("What's cooking good looking?");
const whatsShaking = new QuestionObject("What's shaking?");
const whatsThe = new QuestionObject("What's the 411");
const whatsTheDirt = new QuestionObject("What's the dirt?");
const whatsTheGoodWord = new QuestionObject("What's the good word?");
const whatsPoppin = new QuestionObject("What's poppin?");
const whatsTheHaps = new QuestionObject("What's the haps?");
const whatsNew = new QuestionObject("What's new?");
const whatsTheLowdown = new QuestionObject("What's the lowdown?");
const whatsTheScoop = new QuestionObject("What's the scoop?");
const whatsTheSkinny = new QuestionObject("What's the skinny?");
const whatsUpToday = new QuestionObject("What's up today?");
const whatsUpWithYou = new QuestionObject("What's up with you?");
const whatsTheHapps = new QuestionObject("What's the happs?");
const whatsGoodInTheWorld = new QuestionObject("What's good in the world?");
const whatsUp = new QuestionObject("What's up?");
const whatsCrackin = new QuestionObject("What's crackin'");
const whatsGoingOnToday = new QuestionObject("What's going on today?");
const whatsGoingOnWithYouToday = new QuestionObject("What's going on with you today?");
const whatsPopping = new QuestionObject("What's popping?");
const whatsGoingOn = new QuestionObject("What's going on?");
const whatsCookingWithYou = new QuestionObject("What's cooking with you?");
const whatsHappeningWithYou = new QuestionObject("What's happening with you?");
const whatsHappening = new QuestionObject("What's happening?");
const whatsIsGoingDown = new QuestionObject("What's is going down?");
const whatsNewAtTheZoo = new QuestionObject("What's new at the zoo?");
const whatsNewWithYou = new QuestionObject("What's new with you?");
const whatsGoingOnWithYou = new QuestionObject("What's going on with you?");

export const whatIsHappeningQuestionsArray = [
    gimmeTheDirt,
    whatsCooking,
    tellMeWhatIsUpWithYou,
    wazzup,
    whatIsTheSkinny,
    whatsTheLowDown,
    whatsCracking,
    whatAreYouUpToToday,
    whatsGood,
    giveMeThe,
    updateMeOnWhatsGoingOnWithYou,
    whatsCookin,
    whatUp,
    whatIsUp,
    whatIsTheLowdown,
    whatIsGoingDown,
    whatHaveYouBeenDoing,
    whatHaveYouBeenDoingToday,
    whatHaveYouBeenDoingAllDay,
    whatAreYouUpTo,
    whatAreYouGettingUpTo,
    whatAreYouDoing,
    allGoodInTheHood,
    soWhatsUpWithYouRightNow,
    gimmeThe,
    giveMeTheLowDown,
    letMeKnowWhatsUp,
    whatAreYaDoing,
    ohHeyWhatsUp,
    soWhatsUpWithYouToday,
    soWhatsUpWithYou,
    sup,
    tellMeWhatIsUp,
    letMeKnowWhatsUpWithYou,
    whatsTheLatest,
    whatsCookingGoodLooking,
    whatsShaking,
    whatsThe,
    whatsTheDirt,
    whatsTheGoodWord,
    whatsPoppin,
    whatsTheHaps,
    whatsNew,
    whatsTheLowdown,
    whatsTheScoop,
    whatsTheSkinny,
    whatsUpToday,
    whatsUpWithYou,
    whatsTheHapps,
    whatsGoodInTheWorld,
    whatsUp,
    whatsCrackin,
    whatsGoingOnToday,
    whatsGoingOnWithYouToday,
    whatsPopping,
    whatsGoingOn,
    whatsCookingWithYou,
    whatsHappeningWithYou,
    whatsHappening,
    whatsIsGoingDown,
    whatsNewAtTheZoo,
    whatsNewWithYou,
    whatsGoingOnWithYou
];

//37-47

const willYouSaySomethingFunny = new QuestionObject("Will you say something funny?");
const doASillyThing = new QuestionObject("Do a silly thing");
const doSomethingAmusing = new QuestionObject("Do something amusing");
const saySomethingDumb = new QuestionObject("Say something dumb");
const canYouBeSilly = new QuestionObject("Can you be silly");
const saySomethingKooky = new QuestionObject("Say something kooky");
const saySomethingOffTheWall = new QuestionObject("Say something off the wall");
const canYouTellMeSomethingFunny = new QuestionObject("Can you tell me something funny?");
const makeMeLaugh = new QuestionObject("Make me laugh");
const doSomethingRidiculous = new QuestionObject("Do something ridiculous");
const doSomethingStupid = new QuestionObject("Do something stupid");
const doSomethingDumb = new QuestionObject("Do something dumb");
const doSomethingFunny = new QuestionObject("Do something funny");
const doSomethingKooky = new QuestionObject("Do something kooky");
const doSomethingOffTheWall = new QuestionObject("Do something off the wall");
const iWantYouToTellMeSomethingFunny = new QuestionObject("I want you to tell me something funny");
const doSomethingSilly = new QuestionObject("Do something silly");
const comeOnSaySomethingFunny = new QuestionObject("Come on, say something funny");
const doSomethingThatWillMakeMeLaugh = new QuestionObject("Do something that will make me laugh");
const doSomethingWacky = new QuestionObject("Do something wacky");
const entertainMe = new QuestionObject("Entertain me");
const giveMeAGoodChuckle = new QuestionObject("Give me a good chuckle");
const howWouldYouMakeMeLaugh = new QuestionObject("How would you make me laugh?");
const iWantSomethingFunny = new QuestionObject("I want something funny");
const amuseMe = new QuestionObject("Amuse me");
const amuseMeWithSomethingFunny = new QuestionObject("Amuse me with something funny");
const beFunny = new QuestionObject("Be funny");
const beFunnyRightNow = new QuestionObject("Be funny right now");
const beRidiculous = new QuestionObject("Be ridiculous");
const beSilly = new QuestionObject("Be silly");
const beSillyForMe = new QuestionObject("Be silly for me");
const canYouBeASillyBilly = new QuestionObject("Can you be a silly billy?");
const doARidiculousThing = new QuestionObject("Do a ridiculous thing");
const canYouBeRidiculous = new QuestionObject("Can you be ridiculous");
const doAFunnyThing = new QuestionObject("Do a funny thing");
const canYouDoSomethingFunny = new QuestionObject("Can you do something funny?");
const canYouMakeMeLaugh = new QuestionObject("Can you make me laugh");
const canYouSaySomethingFunny = new QuestionObject("Can you say something funny?");
const canYouSaySomethingRidiculous = new QuestionObject("Can you say something ridiculous");
const canYouSaySomethingSilly = new QuestionObject("Can you say something silly");
const itsTimeToMakeMeLaugh = new QuestionObject("It's time to make me laugh");
const canYouBeFunny = new QuestionObject("Can you be funny");
const willYouMakeMeLaugh = new QuestionObject("Will you make me laugh");
const tellMeSomethingFunny = new QuestionObject("Tell me something funny");
const tellMeSomethingOffTheWall = new QuestionObject("Tell me something off the wall");
const tryToMakeMeBellyLaugh = new QuestionObject("Try to make me belly laugh");
const tryToMakeMeLaugh = new QuestionObject("Try to make me laugh");
const whatCanYouSayThatWillMakeMeLaugh = new QuestionObject("What can you say that will make me laugh?");
const willYouBeFunny = new QuestionObject("Will you be funny?");
const iWantToHearSomethingFunny = new QuestionObject("I want to hear something funny");
const willYouDoSomethingFunny = new QuestionObject("Will you do something funny?");
const saySomethingThatWillCrackMeUp = new QuestionObject("Say something that will crack me up");
const willYouSaySomethingRidiculous = new QuestionObject("Will you say something ridiculous?");
const willYouSaySomethingSilly = new QuestionObject("Will you say something silly?");
const wontYouDoSomethingAmusing = new QuestionObject("Won't you do something amusing");
const wontYouDoSomethingFunny = new QuestionObject("Won't you do something funny");
const wontYouDoSomethingSilly = new QuestionObject("Won't you do something silly?");
const wontYouSaySomethingFunny = new QuestionObject("Won't you say something funny");
const willYouBeSilly = new QuestionObject("Will you be silly?");
const saySomethingFunny = new QuestionObject("Say something funny");
const makeMeLaughOutLoud = new QuestionObject("Make me laugh out loud");
const pleaseMakeMeGiggle = new QuestionObject("Please make me giggle");
const sayADumbSaying = new QuestionObject("Say a dumb saying");
const sayAFunnySaying = new QuestionObject("Say a funny saying");
const sayAFunnyThing = new QuestionObject("Say a funny thing");
const sayARidiculousThing = new QuestionObject("Say a ridiculous thing");
const tellMeSomethingDumb = new QuestionObject("Tell me something dumb");
const saySomethingWacky = new QuestionObject("Say something wacky");
const saySomethingHumorous = new QuestionObject("Say something humorous");
const saySomethingRidiculous = new QuestionObject("Say something ridiculous");
const saySomethingSilly = new QuestionObject("Say something silly");
const saySomethingStupid = new QuestionObject("Say something stupid");
const wontYouSaySomethingHumorous = new QuestionObject("Won't you say something humorous");
const sayASillyThing = new QuestionObject("Say a silly thing");

export const requestForSomethingFunnyQuestionsArray = [
    willYouSaySomethingFunny,
    doASillyThing,
    doSomethingAmusing,
    saySomethingDumb,
    canYouBeSilly,
    saySomethingKooky,
    saySomethingOffTheWall,
    canYouTellMeSomethingFunny,
    makeMeLaugh,
    doSomethingRidiculous,
    doSomethingStupid,
    doSomethingDumb,
    doSomethingFunny,
    doSomethingKooky,
    doSomethingOffTheWall,
    iWantYouToTellMeSomethingFunny,
    doSomethingSilly,
    comeOnSaySomethingFunny,
    doSomethingThatWillMakeMeLaugh,
    doSomethingWacky,
    entertainMe,
    giveMeAGoodChuckle,
    howWouldYouMakeMeLaugh,
    iWantSomethingFunny,
    amuseMe,
    amuseMeWithSomethingFunny,
    beFunny,
    beFunnyRightNow,
    beRidiculous,
    beSilly,
    beSillyForMe,
    canYouBeASillyBilly,
    doARidiculousThing,
    canYouBeRidiculous,
    doAFunnyThing,
    canYouDoSomethingFunny,
    canYouMakeMeLaugh,
    canYouSaySomethingFunny,
    canYouSaySomethingRidiculous,
    canYouSaySomethingSilly,
    itsTimeToMakeMeLaugh,
    canYouBeFunny,
    willYouMakeMeLaugh,
    tellMeSomethingFunny,
    tellMeSomethingOffTheWall,
    tryToMakeMeBellyLaugh,
    tryToMakeMeLaugh,
    whatCanYouSayThatWillMakeMeLaugh,
    willYouBeFunny,
    iWantToHearSomethingFunny,
    willYouDoSomethingFunny,
    saySomethingThatWillCrackMeUp,
    willYouSaySomethingRidiculous,
    willYouSaySomethingSilly,
    wontYouDoSomethingAmusing,
    wontYouDoSomethingFunny,
    wontYouDoSomethingSilly,
    wontYouSaySomethingFunny,
    willYouBeSilly,
    saySomethingFunny,
    makeMeLaughOutLoud,
    pleaseMakeMeGiggle,
    sayADumbSaying,
    sayAFunnySaying,
    sayAFunnyThing,
    sayARidiculousThing,
    tellMeSomethingDumb,
    saySomethingWacky,
    saySomethingHumorous,
    saySomethingRidiculous,
    saySomethingSilly,
    saySomethingStupid,
    wontYouSaySomethingHumorous,
    sayASillyThing
];

const willYouShush = new QuestionObject("Will you shush");
const iveHadEnoughOfYourNoise = new QuestionObject("I've had enough of your noise");
const stopYourTalking = new QuestionObject("Stop your talking");
const iToldYouToShutUp = new QuestionObject("I told you to shut up");
const pleaseZipIt = new QuestionObject("Please zip it");
const itsTimeForYouToHush = new QuestionObject("It's time for you to hush");
const iDontWantToHearAnyMoreOutOfYou = new QuestionObject("I don't want to hear any more out of you");
const beQuiet = new QuestionObject("Be quiet");
const iDontWantToHearAnythingFromYou = new QuestionObject("I don't want to hear anything from you");
const willYouPleaseGoAway = new QuestionObject("Will you please go away");
const imSickOfListeningToYou = new QuestionObject("I'm sick of listening to you");
const iveHadEnoughOfThisNoise = new QuestionObject("I've had enough of this noise");
const itsTimeForYouToShutUpNow = new QuestionObject("It's time for you to shut up now");
const itsTimeForYouToShutUp = new QuestionObject("It's time for you to shut up");
const itsTimeForYouToHushUp = new QuestionObject("It's time for you to hush up");
const itsTimeForYouToBeQuietNow = new QuestionObject("It's time for you to be quiet now");
const iWishYouWouldBeQuiet = new QuestionObject("I wish you would be quiet");
const imTiredOfListeningToYou = new QuestionObject("I'm tired of listening to you");
const justShutUpOkay = new QuestionObject("Just shut up, okay?");
const imSickAndTiredOfListeningToYou = new QuestionObject("I'm sick and tired of listening to you");
const imNotInterestedInWhatYoureSaying = new QuestionObject("I'm not interested in what you're saying");
const imNotInterestedInWhatYouHaveToSay = new QuestionObject("I'm not interested in what you have to say");
const imDoneListeningToYou = new QuestionObject("I'm done listening to you");
const iWishYouWouldShutUp = new QuestionObject("I wish you would shut up");
const itsTimeForYouToBeQuiet = new QuestionObject("It's time for you to be quiet");
const notAPeepFromYou = new QuestionObject("Not a peep from you");
const pleaseJustShutUp = new QuestionObject("Please just shut up");
const pleaseHush = new QuestionObject("Please hush");
const pleaseGoAway = new QuestionObject("Please go away");
const pleaseBeQuiet = new QuestionObject("Please be quiet");
const ohShushYou = new QuestionObject("Oh, shush you");
const notAnotherWordOutOfYou = new QuestionObject("Not another word out of you");
const notAnotherWord = new QuestionObject("Not another word");
const justShutUp = new QuestionObject("Just shut up");
const noTalking = new QuestionObject("No talking");
const noMore = new QuestionObject("No more!");
const noMoreTalking = new QuestionObject("No more talking");
const noMoreOutOfYou = new QuestionObject("No more out of you");
const noMoreFromYou = new QuestionObject("No more from you");
const letsPlayTheSilentGame = new QuestionObject("Let's play the silent game");
const iToldYouShutUp = new QuestionObject("I told you, shut up");
const notAnotherWordFromYou = new QuestionObject("Not another word from you");
const goAway = new QuestionObject("Go away");
const iCantTakeYourTalkingAnymore = new QuestionObject("I can't take your talking anymore");
const iCantTakeYourTalking = new QuestionObject("I can't take your talking");
const iCantTakeAnotherWordOutOfYou = new QuestionObject("I can't take another word out of you");
const hushYou = new QuestionObject("Hush, you");
const hushUpYourMouth = new QuestionObject("Hush up your mouth");
const hushUp = new QuestionObject("Hush up");
const iWishYouWouldJustGoAway = new QuestionObject("I wish you would just go away.");
const hush = new QuestionObject("Hush");
const iDontHaveTimeToListenToYou = new QuestionObject("I don't have time to listen to you");
const enoughWithYourNoise = new QuestionObject("Enough with your noise");
const enoughWithYourChatter = new QuestionObject("Enough with your chatter");
const enoughAlready = new QuestionObject("Enough already");
const didYouHearMeISaidBeQuiet = new QuestionObject("Did you hear me? I said be quiet!");
const canYouBeQuiet = new QuestionObject("Can you be quiet?");
const beQuietYou = new QuestionObject("Be quiet, you");
const hushLittleBaby = new QuestionObject("Hush little baby");
const iDontWantToHearAnythingMore = new QuestionObject("I don't want to hear anything more");
const iToldYouHush = new QuestionObject("I told you, hush");
const iToldYouToHushUp = new QuestionObject("I told you to hush up");
const iToldYouToBeQuiet = new QuestionObject("I told you to be quiet");
const iSaidShutUp = new QuestionObject("I said, shut up");
const iSaidEnough = new QuestionObject("I said, enough");
const iDontHaveTimeForYourNoise = new QuestionObject("I don't have time for your noise");
const iDontWantToHearAnythingYouHaveToSay = new QuestionObject("I don't want to hear anything you have to say");
const iDontHaveTimeToListenToWhatYouHaveToSay = new QuestionObject("I don't have time to listen to what you have to say");
const iDontWantToHearAnyMoreFromYou = new QuestionObject("I don't want to hear any more from you");
const iDontWantToHearAnotherWordOutOfYou = new QuestionObject("I don't want to hear another word out of you");
const iDontWantToHearAnotherWord = new QuestionObject("I don't want to hear another word");
const iDontWantToHearAPeepFromYou = new QuestionObject("I don't want to hear a peep from you");
const pleaseShutUp = new QuestionObject("Please shut up");
const iSaidHush = new QuestionObject("I said hush");
const timeForYouToShutUp = new QuestionObject("Time for you to shut up");
const willYouGoAway = new QuestionObject("Will you go away");
const willYouBeQuiet = new QuestionObject("Will you be quiet");
const timeToShutUpNow = new QuestionObject("Time to shut up now");
const timeToShutUp = new QuestionObject("Time to shut up");
const timeToHushUpNow = new QuestionObject("Time to hush up now");
const timeToHush = new QuestionObject("Time to hush");
const pleaseSayYourDoneNow = new QuestionObject("Please say your done now");
const timeToBeQuiet = new QuestionObject("Time to be quiet");
const timeForYouToHushUp = new QuestionObject("Time for you to hush up");
const timeForYouToHush = new QuestionObject("Time for you to hush");
const timeForYouToBeQuiet = new QuestionObject("Time for you to be quiet");
const thatsEnoughOutOfYou = new QuestionObject("That's enough out of you");
const thatsEnoughFromYou = new QuestionObject("That's enough from you");
const thatsEnough = new QuestionObject("That's enough");
const timeToBeQuietNow = new QuestionObject("Time to be quiet now");
const willYouShutUp = new QuestionObject("Will you shut up");
const zipIt = new QuestionObject("Zip it!");
const youCanStopTalkingNow = new QuestionObject("You can stop talking now");
const youCanShutUpNow = new QuestionObject("You can shut up now");
const youCanJustShutUpNow = new QuestionObject("You can just shut up now");
const youCanJustBeQuietNow = new QuestionObject("You can just be quiet now");
const youCanHushUpNow = new QuestionObject("You can hush up now");
const willYouHush = new QuestionObject("Will you hush");
const willYouStopTalking = new QuestionObject("Will you stop talking");
const willYouPleaseBeQuiet = new QuestionObject("Will you please be quiet");
const willYouPleaseZipIt = new QuestionObject("Will you please zip it");
const willYouPleaseStopTalking = new QuestionObject("Will you please stop talking");
const willYouPleaseShutUp = new QuestionObject("Will you please shut up");
const willYouPleaseShush = new QuestionObject("Will you please shush");
const willYouPleaseHush = new QuestionObject("Will you please hush");
const stopYourNoise = new QuestionObject("Stop your noise");
const willYouZipIt = new QuestionObject("Will you zip it");
const quietYou = new QuestionObject("Quiet, you");
const talkToTheHand = new QuestionObject("Talk to the hand");
const shutUpAlready = new QuestionObject("Shut up already");
const shutUp = new QuestionObject("Shut up");
const shutIt = new QuestionObject("Shut it");
const shush = new QuestionObject("Shush");
const shhh = new QuestionObject("Shhh");
const shutUpYourMouth = new QuestionObject("Shut up your mouth");
const readMyLipsBeQuiet = new QuestionObject("Read my lips: be quiet");
const shutUpPlease = new QuestionObject("Shut up, please");
const quietTime = new QuestionObject("Quiet time");
const quiet = new QuestionObject("Quiet");
const putASockInIt = new QuestionObject("Put a sock in it");
const putACorkInIt = new QuestionObject("Put a cork in it");
const pleaseStopTalking = new QuestionObject("Please stop talking");
const zipItYou = new QuestionObject("Zip it, you");
const readMyLipsZipIt = new QuestionObject("Read my lips: zip it");
const silenceIsGolden = new QuestionObject("Silence is golden");
const pleaseShush = new QuestionObject("Please shush");
const stopWithTheNoise = new QuestionObject("Stop with the noise");
const stopTalkingYou = new QuestionObject("Stop talking, you");
const stopTalking = new QuestionObject("Stop talking");
const stopItWithTheNoiseAlready = new QuestionObject("Stop it with the noise already");
const stopFlappingYourJaw = new QuestionObject("Stop flapping your jaw");
const shutUpYourFace = new QuestionObject("Shut up your face");
const silence = new QuestionObject("Silence!");
const shutYourYap = new QuestionObject("Shut your yap");
const shutYourTrap = new QuestionObject("Shut your trap");
const shutYourPieHole = new QuestionObject("Shut your pie hole");
const shutYourMouth = new QuestionObject("Shut your mouth");
const shutYourFace = new QuestionObject("Shut your face");
const shutUpYou = new QuestionObject("Shut up, you");
const shutUpWillYa = new QuestionObject("Shut up, will ya");
const stopAllYourNoise = new QuestionObject("Stop all your noise");

export const requestToBeQuiteQuestionsArray = [
    willYouShush,
    iveHadEnoughOfYourNoise,
    stopYourTalking,
    iToldYouToShutUp,
    pleaseZipIt,
    itsTimeForYouToHush,
    iDontWantToHearAnyMoreOutOfYou,
    beQuiet,
    iDontWantToHearAnythingFromYou,
    willYouPleaseGoAway,
    imSickOfListeningToYou,
    iveHadEnoughOfThisNoise,
    itsTimeForYouToShutUpNow,
    itsTimeForYouToShutUp,
    itsTimeForYouToHushUp,
    itsTimeForYouToBeQuietNow,
    iWishYouWouldBeQuiet,
    imTiredOfListeningToYou,
    justShutUpOkay,
    imSickAndTiredOfListeningToYou,
    imNotInterestedInWhatYoureSaying,
    imNotInterestedInWhatYouHaveToSay,
    imDoneListeningToYou,
    iWishYouWouldShutUp,
    itsTimeForYouToBeQuiet,
    notAPeepFromYou,
    pleaseJustShutUp,
    pleaseHush,
    pleaseGoAway,
    pleaseBeQuiet,
    ohShushYou,
    notAnotherWordOutOfYou,
    notAnotherWord,
    justShutUp,
    noTalking,
    noMore,
    noMoreTalking,
    noMoreOutOfYou,
    noMoreFromYou,
    letsPlayTheSilentGame,
    iToldYouShutUp,
    notAnotherWordFromYou,
    goAway,
    iCantTakeYourTalkingAnymore,
    iCantTakeYourTalking,
    iCantTakeAnotherWordOutOfYou,
    hushYou,
    hushUpYourMouth,
    hushUp,
    iWishYouWouldJustGoAway,
    hush,
    iDontHaveTimeToListenToYou,
    enoughWithYourNoise,
    enoughWithYourChatter,
    enoughAlready,
    didYouHearMeISaidBeQuiet,
    canYouBeQuiet,
    beQuietYou,
    hushLittleBaby,
    iDontWantToHearAnythingMore,
    iToldYouHush,
    iToldYouToHushUp,
    iToldYouToBeQuiet,
    iSaidShutUp,
    iSaidEnough,
    iDontHaveTimeForYourNoise,
    iDontWantToHearAnythingYouHaveToSay,
    iDontHaveTimeToListenToWhatYouHaveToSay,
    iDontWantToHearAnyMoreFromYou,
    iDontWantToHearAnotherWordOutOfYou,
    iDontWantToHearAnotherWord,
    iDontWantToHearAPeepFromYou,
    pleaseShutUp,
    iSaidHush,
    timeForYouToShutUp,
    willYouGoAway,
    willYouBeQuiet,
    timeToShutUpNow,
    timeToShutUp,
    timeToHushUpNow,
    timeToHush,
    pleaseSayYourDoneNow,
    timeToBeQuiet,
    timeForYouToHushUp,
    timeForYouToHush,
    timeForYouToBeQuiet,
    thatsEnoughOutOfYou,
    thatsEnoughFromYou,
    thatsEnough,
    timeToBeQuietNow,
    willYouShutUp,
    zipIt,
    youCanStopTalkingNow,
    youCanShutUpNow,
    youCanJustShutUpNow,
    youCanJustBeQuietNow,
    youCanHushUpNow,
    willYouHush,
    willYouStopTalking,
    willYouPleaseBeQuiet,
    willYouPleaseZipIt,
    willYouPleaseStopTalking,
    willYouPleaseShutUp,
    willYouPleaseShush,
    willYouPleaseHush,
    stopYourNoise,
    willYouZipIt,
    quietYou,
    talkToTheHand,
    shutUpAlready,
    shutUp,
    shutIt,
    shush,
    shhh,
    shutUpYourMouth,
    readMyLipsBeQuiet,
    shutUpPlease,
    quietTime,
    quiet,
    putASockInIt,
    putACorkInIt,
    pleaseStopTalking,
    zipItYou,
    readMyLipsZipIt,
    silenceIsGolden,
    pleaseShush,
    stopWithTheNoise,
    stopTalkingYou,
    stopTalking,
    stopItWithTheNoiseAlready,
    stopFlappingYourJaw,
    shutUpYourFace,
    silence,
    shutYourYap,
    shutYourTrap,
    shutYourPieHole,
    shutYourMouth,
    shutYourFace,
    shutUpYou,
    shutUpWillYa,
    stopAllYourNoise
];

const wasThatAJoke = new QuestionObject("Was that a joke?");
const iDontLikeYourSenseOfHumor = new QuestionObject("I don't like your sense of humor");
const yourJokesAreAwful = new QuestionObject("Your jokes are awful");
const dontMakeMeLaugh = new QuestionObject("Don't make me laugh");
const thatWasntFunny = new QuestionObject("That wasn't funny");
const iDontFindThatAmusing = new QuestionObject("I don't find that amusing");
const iDontThinkYoureFunny = new QuestionObject("I don't think you're funny");
const thatIsNotSomethingYouShouldJokeAbout = new QuestionObject("That is not something you should joke about");
const areYouSupposedToBeFunny = new QuestionObject("Are you supposed to be funny?");
const quitJokingAround = new QuestionObject("Quit joking around");
const ifThatWasAJokeYouShouldBeAshamed = new QuestionObject("If that was a joke, you should be ashamed");
const patheticSenseOfHumor = new QuestionObject("Pathetic sense of humor");
const patheticJoke = new QuestionObject("Pathetic joke");
const ohAWiseGuyEh = new QuestionObject("Oh, a wise guy, eh?");
const notFunny = new QuestionObject("Not funny");
const notAmused = new QuestionObject("Not amused");
const learnToTellAJoke = new QuestionObject("Learn to tell a joke");
const jokesArentYourStrongSuit = new QuestionObject("Jokes aren't your strong suit");
const isThatSupposedToMakeMeLaugh = new QuestionObject("Is that supposed to make me laugh?");
const isThatSupposedToBeFunny = new QuestionObject("Is that supposed to be funny?");
const isThatAJoke = new QuestionObject("Is that a joke?");
const imNotAmused = new QuestionObject("I'm not amused");
const iDontFindYouFunny = new QuestionObject("I don't find you funny");
const ifYoureGoingToTellAJokeDoItRight = new QuestionObject("If you're going to tell a joke, do it right");
const quitFoolingAround = new QuestionObject("Quit fooling around");
const iDontThinkYoureVeryFunny = new QuestionObject("I don't think you're very funny");
const iDontThinkThatsVeryFunny = new QuestionObject("I don't think that's very funny");
const iDontThinkThatsFunny = new QuestionObject("I don't think that's funny");
const iDontThinkThatWasVeryFunny = new QuestionObject("I don't think that was very funny");
const iDontThinkThatWasFunny = new QuestionObject("I don't think that was funny");
const iDontLikeYourWisecracking = new QuestionObject("I don't like your wisecracking");
const iDontLikeItWhenYouTryToBeFunny = new QuestionObject("I don't like it when you try to be funny");
const iDontGetTheJoke = new QuestionObject("I don't get the joke");
const ifYoureTryingToBeFunnyItsNotWorking = new QuestionObject("If you're trying to be funny it's not working");
const stopJoking = new QuestionObject("Stop joking");
const amISupposedToThinkThatWasFunny = new QuestionObject("Am I supposed to think that was funny?");
const thatIsNotSomethingToJokeAbout = new QuestionObject("That is not something to joke about");
const thatDidntMakeMeLaugh = new QuestionObject("That didn't make me laugh");
const stopYourWisecracking = new QuestionObject("Stop your wisecracking");
const stopYourSilliness = new QuestionObject("Stop your silliness");
const stopYourJoking = new QuestionObject("Stop your joking");
const stopTryingToBeFunny = new QuestionObject("Stop trying to be funny");
const stopMessingAround = new QuestionObject("Stop messing around");
const stopMakingFunOfThings = new QuestionObject("Stop making fun of things");
const stopMakingFun = new QuestionObject("Stop making fun");
const stopKiddingAround = new QuestionObject("Stop kidding around");
const prettyAwfulJoke = new QuestionObject("Pretty awful joke");
const stopJokingAboutThings = new QuestionObject("Stop joking about things");
const prettyBadJoke = new QuestionObject("Pretty bad joke");
const stopItWithTheWisecracking = new QuestionObject("Stop it with the wisecracking");
const stopItWithTheJokes = new QuestionObject("Stop it with the jokes");
const stopItWithTheHumor = new QuestionObject("Stop it with the humor");
const stopFoolingAround = new QuestionObject("Stop fooling around");
const stopClowningAround = new QuestionObject("Stop clowning around");
const stopBeingSilly = new QuestionObject("Stop being silly");
const soYoureAWiseGuy = new QuestionObject("So, you're a wise guy?");
const soYouThinkYoureFunny = new QuestionObject("So, you think you're funny?");
const quitMessingAround = new QuestionObject("Quit messing around");
const quitJoking = new QuestionObject("Quit joking");
const iDontFindThatVeryFunny = new QuestionObject("I don't find that very funny");
const stopKidding = new QuestionObject("Stop kidding");
const doYouThinkThisIsFunny = new QuestionObject("Do you think this is funny?");
const humorFail = new QuestionObject("Humor fail");
const hilariousNot = new QuestionObject("Hilarious not.");
const enoughWithTheWisecracks = new QuestionObject("Enough with the wisecracks");
const enoughWithTheSilliness = new QuestionObject("Enough with the silliness");
const enoughWithTheJokesAlready = new QuestionObject("Enough with the jokes already");
const enoughWithTheHumor = new QuestionObject("Enough with the humor");
const dontTryToMakeMeLaugh = new QuestionObject("Don't try to make me laugh");
const dontTryToBeFunny = new QuestionObject("Don't try to be funny");
const dontQuitYourDayJob = new QuestionObject("Don't quit your day job");
const dontMakeJokesAboutThat = new QuestionObject("Don't make jokes about that");
const iDontFindYouVeryFunny = new QuestionObject("I don't find you very funny");
const dontJokeAboutThat = new QuestionObject("Don't joke about that");
const iDidntFindThatAmusing = new QuestionObject("I didn't find that amusing");
const doYouThinkThatsFunny = new QuestionObject("Do you think that's funny?");
const cutTheWisecracks = new QuestionObject("Cut the wisecracks");
const cutTheJokes = new QuestionObject("Cut the jokes");
const cutTheHumor = new QuestionObject("Cut the humor");
const areYouTryingToSaySomethingFunny = new QuestionObject("Are you trying to say something funny?");
const areYouTryingToMakeMeLaugh = new QuestionObject("Are you trying to make me laugh?");
const areYouTryingToBeFunny = new QuestionObject("Are you trying to be funny?");
const areYouKidding = new QuestionObject("Are you kidding?");
const areYouKiddingMe = new QuestionObject("Are you kidding me?");
const amISupposedToThinkThatsFunny = new QuestionObject("Am I supposed to think that's funny?");
const dontMakeFunOfThat = new QuestionObject("Don't make fun of that");
const iDidntLikeYourSenseOfHumor = new QuestionObject("I didn't like your sense of humor");
const iDontFindThatVeryAmusing = new QuestionObject("I don't find that very amusing");
const iDontFindThatToBeVeryAmusing = new QuestionObject("I don't find that to be very amusing");
const iDontFindThatToBeAmusing = new QuestionObject("I don't find that to be amusing");
const iDontFindThatFunny = new QuestionObject("I don't find that funny");
const iDontAppreciateYourSilliness = new QuestionObject("I don't appreciate your silliness");
const iDontAppreciateYourSenseOfHumor = new QuestionObject("I don't appreciate your sense of humor");
const iDonTFindYouVeryAmusing = new QuestionObject("I don’t find you very amusing");
const iDonTFindYouAmusing = new QuestionObject("I don’t find you amusing");
const iDidntThinkYouWereFunny = new QuestionObject("I didn't think you were funny");
const iDidntThinkWereVeryFunny = new QuestionObject("I didn't think were very funny");
const humorIsntYourStrongSuit = new QuestionObject("Humor isn't your strong suit");
const iDidntLikeYourWisecracking = new QuestionObject("I didn't like your wisecracking");
const iDidntAppreciateYourSenseOfHumor = new QuestionObject("I didn't appreciate your sense of humor");
const iDidntGetTheJoke = new QuestionObject("I didn't get the joke");
const iDidntFindYouVeryFunny = new QuestionObject("I didn't find you very funny");
const iDidntFindYouVeryAmusing = new QuestionObject("I didn't find you very amusing");
const iDidntFindYouFunny = new QuestionObject("I didn't find you funny");
const iDidntFindYouAmusing = new QuestionObject("I didn't find you amusing");
const iDidntFindThatVeryFunny = new QuestionObject("I didn't find that very funny");
const iDidntFindThatVeryAmusing = new QuestionObject("I didn't find that very amusing");
const iDidntFindThatToBeVeryAmusing = new QuestionObject("I didn't find that to be very amusing");
const iDidntFindThatToBeFunnyAtAll = new QuestionObject("I didn't find that to be funny at all");
const iDidntFindThatToBeAmusing = new QuestionObject("I didn't find that to be amusing");
const iDidntFindThatFunny = new QuestionObject("I didn't find that funny");
const thatJokeIsAwful = new QuestionObject("That joke is awful");
const iDidntThinkThatWasFunny = new QuestionObject("I didn't think that was funny");
const youTellCrappyJokes = new QuestionObject("You tell crappy jokes");
const yourJokesAreGoingNowhereWithMe = new QuestionObject("Your jokes are going nowhere with me");
const yourJokesAreCrap = new QuestionObject("Your jokes are crap");
const yourJokesAreBusted = new QuestionObject("Your jokes are busted");
const yourJokeWasAwful = new QuestionObject("Your joke was awful");
const yourJokeSucks = new QuestionObject("Your joke sucks");
const yourJokeStinks = new QuestionObject("Your joke stinks");
const yourJokeIsWeak = new QuestionObject("Your joke is weak");
const yourAttemptAtHumorFailed = new QuestionObject("Your attempt at humor failed");
const youThinkYoureSoFunny = new QuestionObject("You think you're so funny");
const youThinkYoureFunnyDontYou = new QuestionObject("You think you're funny, don't you?");
const whatAWhackJoke = new QuestionObject("What a whack joke");
const youThinkThatsFunny = new QuestionObject("You think that's funny?");
const yourJokesAreNasty = new QuestionObject("Your jokes are nasty");
const youTellBadJokes = new QuestionObject("You tell bad jokes");
const youShouldntMakeJokesLikeThat = new QuestionObject("You shouldn't make jokes like that.");
const youShouldntJokeAboutThat = new QuestionObject("You shouldn't joke about that");
const youHaveATerribleSenseOfHumor = new QuestionObject("You have a terrible sense of humor");
const youHaveASickSenseOfHumor = new QuestionObject("You have a sick sense of humor");
const youHaveALameSenseOfHumor = new QuestionObject("You have a lame sense of humor");
const youCantMakeMeLaugh = new QuestionObject("You can't make me laugh");
const youCallThatAJoke = new QuestionObject("You call that a joke?");
const youAreSoUnfunny = new QuestionObject("You are so unfunny");
const youAreSoNotFunny = new QuestionObject("You are so not funny");
const thatIsNotSomethingToMakeJokesAbout = new QuestionObject("That is not something to make jokes about");
const youThinkYoureFunnyButYoureNot = new QuestionObject("You think you're funny, but you're not");
const yourSenseOfHumorMakesMeSick = new QuestionObject("Your sense of humor makes me sick");
const youreTryingTooHard = new QuestionObject("You're trying too hard");
const youreTryingToBeFunnyPathetic = new QuestionObject("You're trying to be funny. Pathetic");
const youreSoUnfunny = new QuestionObject("You're so unfunny");
const youreSoNotFunny = new QuestionObject("You're so not funny");
const youreNotVeryFunny = new QuestionObject("You're not very funny");
const youreNotFunny = new QuestionObject("You're not funny");
const youreNotEvenFunny = new QuestionObject("You're not even funny");
const youreNoComedian = new QuestionObject("You're no comedian");
const youreBadAtJokes = new QuestionObject("You're bad at jokes");
const youreBadAtHumor = new QuestionObject("You're bad at humor");
const youreAWiseGuyArentYou = new QuestionObject("You're a wise guy, aren't you?");
const yourJokesAreJanky = new QuestionObject("Your jokes are janky");
const youreARegularClown = new QuestionObject("You're a regular clown");
const yourJokesAreLame = new QuestionObject("Your jokes are lame");
const yourSenseOfHumorIsTerrible = new QuestionObject("Your sense of humor is terrible");
const yourSenseOfHumorIsLame = new QuestionObject("Your sense of humor is lame");
const yourSenseOfHumorIsAwful = new QuestionObject("Your sense of humor is awful");
const yourNotFunny = new QuestionObject("Your not funny");
const yourJokesSuck = new QuestionObject("Your jokes suck");
const yourJokesStink = new QuestionObject("Your jokes stink");
const yourJokesAreWorseThanDadJokes = new QuestionObject("Your jokes are worse than dad jokes");
const yourJokesAreWhack = new QuestionObject("Your jokes are whack");
const yourJokesAreWeakSauce = new QuestionObject("Your jokes are weak sauce");
const yourJokesAreWeak = new QuestionObject("Your jokes are weak");
const yourJokesAreWack = new QuestionObject("Your jokes are wack");
const whatAWeakJoke = new QuestionObject("What a weak joke");
const youreARegularComedian = new QuestionObject("You're a regular comedian");
const thatWasNotVeryFunny = new QuestionObject("That was not very funny");
const thatsNotSomethingYouShouldBeMakingFunOf = new QuestionObject("That's not something you should be making fun of");
const thatsNotSomethingYouShouldBeJokingAbout = new QuestionObject("That's not something you should be joking about.");
const thatsNotSomethingToJokeAbout = new QuestionObject("That's not something to joke about");
const thatsNotFunny = new QuestionObject("That's not funny");
const thatsNoLaughingMatter = new QuestionObject("That's no laughing matter");
const thatsAStupidJoke = new QuestionObject("That's a stupid joke");
const thatWasntVeryFunnyAtAll = new QuestionObject("That wasn't very funny at all");
const thatWasntVeryFunny = new QuestionObject("That wasn't very funny");
const thatWasntEvenFunny = new QuestionObject("That wasn't even funny");
const thatWasSoNotFunny = new QuestionObject("That was so not funny");
const youAreNotFunny = new QuestionObject("You are not funny");
const thatWasNotVeryFunnyAtAll = new QuestionObject("That was not very funny at all");
const thatsNotVeryFunny = new QuestionObject("That's not very funny");
const thatWasNotFunnyAtAll = new QuestionObject("That was not funny at all");
const thatWasNotFunny = new QuestionObject("That was not funny");
const thatWasAStupidJoke = new QuestionObject("That was a stupid joke");
const thatWasALameJoke = new QuestionObject("That was a lame joke");
const thatWasAJokeYoullHaveToTryHarder = new QuestionObject("That was a joke? You'll have to try harder");
const thatWasAJokeIDontGetIt = new QuestionObject("That was a joke? I don't get it");
const thatWasAJoke = new QuestionObject("That was a joke?");
const thatJokeWasCrap = new QuestionObject("That joke was crap");
const thatJokeIsWhack = new QuestionObject("That joke is whack");
const thatJokeIsWack = new QuestionObject("That joke is wack");
const thatJokeIsNasty = new QuestionObject("That joke is nasty");
const thatWasReallyNotFunny = new QuestionObject("That was really not funny");
const weakJoke = new QuestionObject("Weak joke");
const whatANastyJoke = new QuestionObject("What a nasty joke");
const whatALameJoke = new QuestionObject("What a lame joke");
const whatAJankyJoke = new QuestionObject("What a janky joke");
const whatAHorribleJoke = new QuestionObject("What a horrible joke");
const whatACrappyJoke = new QuestionObject("What a crappy joke");
const whatABustedJoke = new QuestionObject("What a busted joke");
const whatABadJoke = new QuestionObject("What a bad joke");
const wereYouTryingToSaySomethingFunny = new QuestionObject("Were you trying to say something funny?");
const wereYouTryingToMakeMeLaugh = new QuestionObject("Were you trying to make me laugh?");
const wereYouTryingToGetALaugh = new QuestionObject("Were you trying to get a laugh?");
const wereYouTryingToBeFunny = new QuestionObject("Were you trying to be funny?");
const thatsNotSomethingYouShouldJokeAbout = new QuestionObject("That's not something you should joke about");
const wereYouGoingForFunny = new QuestionObject("Were you going for funny?");
const thatsNotSomethingYouShouldMakeFunOf = new QuestionObject("That's not something you should make fun of");
const wasThatSupposedToMakeMeLaugh = new QuestionObject("Was that supposed to make me laugh?");
const wasThatSupposedToBeFunny = new QuestionObject("Was that supposed to be funny?");
const thisIsNoLaughingMatter = new QuestionObject("This is no laughing matter");
const theHumorIsGoingNowhere = new QuestionObject("The humor is going nowhere");
const thatsUnfunny = new QuestionObject("That's unfunny");
const thatsSoUnfunny = new QuestionObject("That's so unfunny");
const thatsSoNotFunny = new QuestionObject("That's so not funny");
const thatsSoFunnyIForgotToLaugh = new QuestionObject("That's so funny I forgot to laugh");
const thatsReallyNotFunny = new QuestionObject("That's really not funny");
const thatsNothingToJokeAbout = new QuestionObject("That's nothing to joke about");
const youreUnfunny = new QuestionObject("You're unfunny");
const wereYouGoingForHumor = new QuestionObject("Were you going for humor?");

export const requestToStopJokingQuestionsArray = [
    wasThatAJoke,
    iDontLikeYourSenseOfHumor,
    yourJokesAreAwful,
    dontMakeMeLaugh,
    thatWasntFunny,
    iDontFindThatAmusing,
    iDontThinkYoureFunny,
    thatIsNotSomethingYouShouldJokeAbout,
    areYouSupposedToBeFunny,
    quitJokingAround,
    ifThatWasAJokeYouShouldBeAshamed,
    patheticSenseOfHumor,
    patheticJoke,
    ohAWiseGuyEh,
    notFunny,
    notAmused,
    learnToTellAJoke,
    jokesArentYourStrongSuit,
    isThatSupposedToMakeMeLaugh,
    isThatSupposedToBeFunny,
    isThatAJoke,
    imNotAmused,
    iDontFindYouFunny,
    ifYoureGoingToTellAJokeDoItRight,
    quitFoolingAround,
    iDontThinkYoureVeryFunny,
    iDontThinkThatsVeryFunny,
    iDontThinkThatsFunny,
    iDontThinkThatWasVeryFunny,
    iDontThinkThatWasFunny,
    iDontLikeYourWisecracking,
    iDontLikeItWhenYouTryToBeFunny,
    iDontGetTheJoke,
    ifYoureTryingToBeFunnyItsNotWorking,
    stopJoking,
    amISupposedToThinkThatWasFunny,
    thatIsNotSomethingToJokeAbout,
    thatDidntMakeMeLaugh,
    stopYourWisecracking,
    stopYourSilliness,
    stopYourJoking,
    stopTryingToBeFunny,
    stopMessingAround,
    stopMakingFunOfThings,
    stopMakingFun,
    stopKiddingAround,
    prettyAwfulJoke,
    stopJokingAboutThings,
    prettyBadJoke,
    stopItWithTheWisecracking,
    stopItWithTheJokes,
    stopItWithTheHumor,
    stopFoolingAround,
    stopClowningAround,
    stopBeingSilly,
    soYoureAWiseGuy,
    soYouThinkYoureFunny,
    quitMessingAround,
    quitJoking,
    iDontFindThatVeryFunny,
    stopKidding,
    doYouThinkThisIsFunny,
    humorFail,
    hilariousNot,
    enoughWithTheWisecracks,
    enoughWithTheSilliness,
    enoughWithTheJokesAlready,
    enoughWithTheHumor,
    dontTryToMakeMeLaugh,
    dontTryToBeFunny,
    dontQuitYourDayJob,
    dontMakeJokesAboutThat,
    iDontFindYouVeryFunny,
    dontJokeAboutThat,
    iDidntFindThatAmusing,
    doYouThinkThatsFunny,
    cutTheWisecracks,
    cutTheJokes,
    cutTheHumor,
    areYouTryingToSaySomethingFunny,
    areYouTryingToMakeMeLaugh,
    areYouTryingToBeFunny,
    areYouKidding,
    areYouKiddingMe,
    amISupposedToThinkThatsFunny,
    dontMakeFunOfThat,
    iDidntLikeYourSenseOfHumor,
    iDontFindThatVeryAmusing,
    iDontFindThatToBeVeryAmusing,
    iDontFindThatToBeAmusing,
    iDontFindThatFunny,
    iDontAppreciateYourSilliness,
    iDontAppreciateYourSenseOfHumor,
    iDonTFindYouVeryAmusing,
    iDonTFindYouAmusing,
    iDidntThinkYouWereFunny,
    iDidntThinkWereVeryFunny,
    humorIsntYourStrongSuit,
    iDidntLikeYourWisecracking,
    iDidntAppreciateYourSenseOfHumor,
    iDidntGetTheJoke,
    iDidntFindYouVeryFunny,
    iDidntFindYouVeryAmusing,
    iDidntFindYouFunny,
    iDidntFindYouAmusing,
    iDidntFindThatVeryFunny,
    iDidntFindThatVeryAmusing,
    iDidntFindThatToBeVeryAmusing,
    iDidntFindThatToBeFunnyAtAll,
    iDidntFindThatToBeAmusing,
    iDidntFindThatFunny,
    thatJokeIsAwful,
    iDidntThinkThatWasFunny,
    youTellCrappyJokes,
    yourJokesAreGoingNowhereWithMe,
    yourJokesAreCrap,
    yourJokesAreBusted,
    yourJokeWasAwful,
    yourJokeSucks,
    yourJokeStinks,
    yourJokeIsWeak,
    yourAttemptAtHumorFailed,
    youThinkYoureSoFunny,
    youThinkYoureFunnyDontYou,
    whatAWhackJoke,
    youThinkThatsFunny,
    yourJokesAreNasty,
    youTellBadJokes,
    youShouldntMakeJokesLikeThat,
    youShouldntJokeAboutThat,
    youHaveATerribleSenseOfHumor,
    youHaveASickSenseOfHumor,
    youHaveALameSenseOfHumor,
    youCantMakeMeLaugh,
    youCallThatAJoke,
    youAreSoUnfunny,
    youAreSoNotFunny,
    thatIsNotSomethingToMakeJokesAbout,
    youThinkYoureFunnyButYoureNot,
    yourSenseOfHumorMakesMeSick,
    youreTryingTooHard,
    youreTryingToBeFunnyPathetic,
    youreSoUnfunny,
    youreSoNotFunny,
    youreNotVeryFunny,
    youreNotFunny,
    youreNotEvenFunny,
    youreNoComedian,
    youreBadAtJokes,
    youreBadAtHumor,
    youreAWiseGuyArentYou,
    yourJokesAreJanky,
    youreARegularClown,
    yourJokesAreLame,
    yourSenseOfHumorIsTerrible,
    yourSenseOfHumorIsLame,
    yourSenseOfHumorIsAwful,
    yourNotFunny,
    yourJokesSuck,
    yourJokesStink,
    yourJokesAreWorseThanDadJokes,
    yourJokesAreWhack,
    yourJokesAreWeakSauce,
    yourJokesAreWeak,
    yourJokesAreWack,
    whatAWeakJoke,
    youreARegularComedian,
    thatWasNotVeryFunny,
    thatsNotSomethingYouShouldBeMakingFunOf,
    thatsNotSomethingYouShouldBeJokingAbout,
    thatsNotSomethingToJokeAbout,
    thatsNotFunny,
    thatsNoLaughingMatter,
    thatsAStupidJoke,
    thatWasntVeryFunnyAtAll,
    thatWasntVeryFunny,
    thatWasntEvenFunny,
    thatWasSoNotFunny,
    youAreNotFunny,
    thatWasNotVeryFunnyAtAll,
    thatsNotVeryFunny,
    thatWasNotFunnyAtAll,
    thatWasNotFunny,
    thatWasAStupidJoke,
    thatWasALameJoke,
    thatWasAJokeYoullHaveToTryHarder,
    thatWasAJokeIDontGetIt,
    thatWasAJoke,
    thatJokeWasCrap,
    thatJokeIsWhack,
    thatJokeIsWack,
    thatJokeIsNasty,
    thatWasReallyNotFunny,
    weakJoke,
    whatANastyJoke,
    whatALameJoke,
    whatAJankyJoke,
    whatAHorribleJoke,
    whatACrappyJoke,
    whatABustedJoke,
    whatABadJoke,
    wereYouTryingToSaySomethingFunny,
    wereYouTryingToMakeMeLaugh,
    wereYouTryingToGetALaugh,
    wereYouTryingToBeFunny,
    thatsNotSomethingYouShouldJokeAbout,
    wereYouGoingForFunny,
    thatsNotSomethingYouShouldMakeFunOf,
    wasThatSupposedToMakeMeLaugh,
    wasThatSupposedToBeFunny,
    thisIsNoLaughingMatter,
    theHumorIsGoingNowhere,
    thatsUnfunny,
    thatsSoUnfunny,
    thatsSoNotFunny,
    thatsSoFunnyIForgotToLaugh,
    thatsReallyNotFunny,
    thatsNothingToJokeAbout,
    youreUnfunny,
    wereYouGoingForHumor
];

const canYouSingMeASong = new QuestionObject("Can you sing me a song?");
const wontYouSingMeASong = new QuestionObject("Won't you sing me a song?");
const wontYouSingForMe = new QuestionObject("Won't you sing for me?");
const singSomethingToMe = new QuestionObject("Sing something to me");
const tryAndSing = new QuestionObject("Try and sing");
const humATune = new QuestionObject("Hum a tune");
const willYouSingToMe = new QuestionObject("Will you sing to me?");
const whatSongsDoYouKnow = new QuestionObject("What songs do you know?");
const youBetterStartSingingToMe = new QuestionObject("You better start singing to me");
const idLoveToHearYouSing = new QuestionObject("I'd love to hear you sing");
const iWouldReallyEnjoyHearingYouSing = new QuestionObject("I would really enjoy hearing you sing");
const arentYouGoingToSingASong = new QuestionObject("Aren't you going to sing a song?");
const dontYouWantToSingForMe = new QuestionObject("Don't you want to sing for me?");
const goAheadAndSing = new QuestionObject("Go ahead and sing");
const haveYouEverSungASong = new QuestionObject("Have you ever sung a song?");
const humATuneForMe = new QuestionObject("Hum a tune for me");
const iNeedToHearYouSing = new QuestionObject("I need to hear you sing");
const iWouldAppreciateIfYouSangASong = new QuestionObject("I would appreciate if you sang a song?");
const iWouldJustLoveToHearYouSing = new QuestionObject("I would just love to hear you sing");
const iWouldLoveForYouToSingToMe = new QuestionObject("I would love for you to sing to me");
const doYouSing = new QuestionObject("Do you sing?");
const iWouldLoveToHearYourSingingVoice = new QuestionObject("I would love to hear your singing voice");
const doYouKnowHowToSing = new QuestionObject("Do you know how to sing");
const iWouldReallyEnjoyHearingYouSingAPrettySong = new QuestionObject("I would really enjoy hearing you sing a pretty song");
const iWouldSureEnjoyHearingYouSing = new QuestionObject("I would sure enjoy hearing you sing");
const idLoveASong = new QuestionObject("I'd love a song");
const idLoveItIfYoudSing = new QuestionObject("I'd love it if you'd sing");
const idLoveYouToSingForMe = new QuestionObject("I'd love you to sing for me");
const itsTimeForYouToSing = new QuestionObject("It's time for you to sing");
const itsTimeForYouToSingASong = new QuestionObject("It's time for you to sing a song");
const mayIPleaseHearYourSingingVoice = new QuestionObject("May I please hear your singing voice?");
const ohPleaseSingForMe = new QuestionObject("Oh please sing for me");
const sing = new QuestionObject("Sing");
const iWouldLoveToHearYouSing = new QuestionObject("I would love to hear you sing");
const canYouSingForMe = new QuestionObject("Can you sing for me?");
const arentYouGoingToSingForMe = new QuestionObject("Aren't you going to sing for me?");
const arentYouGoingToSingToMe = new QuestionObject("Aren't you going to sing to me?");
const arentYouGoingToSing = new QuestionObject("Aren't you going to sing?");
const canIHearYourSingingVoice = new QuestionObject("Can I hear your singing voice?");
const canYouPleaseSingASongToMe = new QuestionObject("Can you please sing a song to me?");
const canYouPleaseSingMeASong = new QuestionObject("Can you please sing me a song");
const canYouSingALittleSongForMe = new QuestionObject("Can you sing a little song for me?");
const canYouSingALittleSong = new QuestionObject("Can you sing a little song?");
const canYouSingASongForMe = new QuestionObject("Can you sing a song for me?");
const canYouSingASongToMe = new QuestionObject("Can you sing a song to me?");
const donTYouWantToSingToMe = new QuestionObject("Don’t you want to sing to me?");
const canYouSingATune = new QuestionObject("Can you sing a tune?");
const singASongToMe = new QuestionObject("Sing a song to me");
const canYouSingMeSomething = new QuestionObject("Can you sing me something?");
const canYouSingSomethingForMe = new QuestionObject("Can you sing something for me?");
const canYouSingSomething = new QuestionObject("Can you sing something?");
const canYouSingToMe = new QuestionObject("Can you sing to me?");
const canYouSing = new QuestionObject("Can you sing?");
const comeOnSingASong = new QuestionObject("Come on sing a song");
const doYouEverSing = new QuestionObject("Do you ever sing?");
const doYouKnowAnySongs = new QuestionObject("Do you know any songs?");
const doYouKnowAnyTunes = new QuestionObject("Do you know any tunes?");
const doYouKnowHowToHumASong = new QuestionObject("Do you know how to hum a song");
const canYouSingASong = new QuestionObject("Can you sing a song?");
const wontYouSingMeADitty = new QuestionObject("Won't you sing me a ditty?");
const willYouSingATuneForMe = new QuestionObject("Will you sing a tune for me");
const willYouSingForMe = new QuestionObject("Will you sing for me");
const willYouSingMeASong = new QuestionObject("Will you sing me a song");
const willYouSingMeSomething = new QuestionObject("Will you sing me something?");
const willYouSingSomething = new QuestionObject("Will you sing something?");
const willYouSingWithMe = new QuestionObject("Will you sing with me");
const willYouSing = new QuestionObject("Will you sing?");
const wontYouPleaseSingForMe = new QuestionObject("Won't you please sing for me?");
const wontYouPleaseSingMeASong = new QuestionObject("Won't you please sing me a song?");
const singASong = new QuestionObject("Sing a song");
const willYouSerenadeMe = new QuestionObject("Will you serenade me?");
const wontYouSingSomething = new QuestionObject("Won't you sing something?");
const wontYouSingToMe = new QuestionObject("Won't you sing to me?");
const wontYouSingWithMe = new QuestionObject("Won't you sing with me");
const wouldYouLikeSingASong = new QuestionObject("Would you like sing a song?");
const wouldYouLikeToSingForMe = new QuestionObject("Would you like to sing for me?");
const wouldYouLikeToSing = new QuestionObject("Would you like to sing?");
const wouldYouSingASongForMe = new QuestionObject("Would you sing a song for me?");
const wouldYouSingASong = new QuestionObject("Would you sing a song?");
const youBetterStartSinging = new QuestionObject("You better start singing");
const youBetterStartSingingForMe = new QuestionObject("You better start singing for me");
const wontYouSingASongForMe = new QuestionObject("Won't you sing a song for me?");
const whatDoYouLikeToSingBest = new QuestionObject("What do you like to sing best?");
const singATune = new QuestionObject("Sing a tune");
const singForMe = new QuestionObject("Sing for me");
const singMeALittleDitty = new QuestionObject("Sing me a little ditty");
const singMeASong = new QuestionObject("Sing me a song");
const singMeATune = new QuestionObject("Sing me a tune");
const singMeSomething = new QuestionObject("Sing me something");
const singMeYourFavoriteSong = new QuestionObject("Sing me your favorite song");
const singSomething = new QuestionObject("Sing something");
const singWithMe = new QuestionObject("Sing with me");
const willYouSingASong = new QuestionObject("Will you sing a song?");
const tryAndSingToMe = new QuestionObject("Try and sing to me");
const willYouSingASongForMe = new QuestionObject("Will you sing a song for me?");
const whatsASongYouKnowHowToSing = new QuestionObject("What's a song you know how to sing?");
const whyDontYouSingForMe = new QuestionObject("Why don't you sing for me?");
const whyDontYouSingMeASong = new QuestionObject("Why don't you sing me a song?");
const whyDontYouSingSomethingForMe = new QuestionObject("Why don't you sing something for me?");
const whyWonTYouSingForMe = new QuestionObject("Why won’t you sing for me?");
const willYouHumATuneForMe = new QuestionObject("Will you hum a tune for me?");
const willYouHumATune = new QuestionObject("Will you hum a tune?");
const willYouPleaseSingForMe = new QuestionObject("Will you please sing for me");
const willYouPleaseSingToMe = new QuestionObject("Will you please sing to me");
const singASongForMe = new QuestionObject("Sing a song for me");

export const requestsForASongQuestionsArray = [
    canYouSingMeASong,
    wontYouSingMeASong,
    wontYouSingForMe,
    singSomethingToMe,
    tryAndSing,
    humATune,
    willYouSingToMe,
    whatSongsDoYouKnow,
    youBetterStartSingingToMe,
    idLoveToHearYouSing,
    iWouldReallyEnjoyHearingYouSing,
    arentYouGoingToSingASong,
    dontYouWantToSingForMe,
    goAheadAndSing,
    haveYouEverSungASong,
    humATuneForMe,
    iNeedToHearYouSing,
    iWouldAppreciateIfYouSangASong,
    iWouldJustLoveToHearYouSing,
    iWouldLoveForYouToSingToMe,
    doYouSing,
    iWouldLoveToHearYourSingingVoice,
    doYouKnowHowToSing,
    iWouldReallyEnjoyHearingYouSingAPrettySong,
    iWouldSureEnjoyHearingYouSing,
    idLoveASong,
    idLoveItIfYoudSing,
    idLoveYouToSingForMe,
    itsTimeForYouToSing,
    itsTimeForYouToSingASong,
    mayIPleaseHearYourSingingVoice,
    ohPleaseSingForMe,
    sing,
    iWouldLoveToHearYouSing,
    canYouSingForMe,
    arentYouGoingToSingForMe,
    arentYouGoingToSingToMe,
    arentYouGoingToSing,
    canIHearYourSingingVoice,
    canYouPleaseSingASongToMe,
    canYouPleaseSingMeASong,
    canYouSingALittleSongForMe,
    canYouSingALittleSong,
    canYouSingASongForMe,
    canYouSingASongToMe,
    donTYouWantToSingToMe,
    canYouSingATune,
    singASongToMe,
    canYouSingMeSomething,
    canYouSingSomethingForMe,
    canYouSingSomething,
    canYouSingToMe,
    canYouSing,
    comeOnSingASong,
    doYouEverSing,
    doYouKnowAnySongs,
    doYouKnowAnyTunes,
    doYouKnowHowToHumASong,
    canYouSingASong,
    wontYouSingMeADitty,
    willYouSingATuneForMe,
    willYouSingForMe,
    willYouSingMeASong,
    willYouSingMeSomething,
    willYouSingSomething,
    willYouSingWithMe,
    willYouSing,
    wontYouPleaseSingForMe,
    wontYouPleaseSingMeASong,
    singASong,
    willYouSerenadeMe,
    wontYouSingSomething,
    wontYouSingToMe,
    wontYouSingWithMe,
    wouldYouLikeSingASong,
    wouldYouLikeToSingForMe,
    wouldYouLikeToSing,
    wouldYouSingASongForMe,
    wouldYouSingASong,
    youBetterStartSinging,
    youBetterStartSingingForMe,
    wontYouSingASongForMe,
    whatDoYouLikeToSingBest,
    singATune,
    singForMe,
    singMeALittleDitty,
    singMeASong,
    singMeATune,
    singMeSomething,
    singMeYourFavoriteSong,
    singSomething,
    singWithMe,
    willYouSingASong,
    tryAndSingToMe,
    willYouSingASongForMe,
    whatsASongYouKnowHowToSing,
    whyDontYouSingForMe,
    whyDontYouSingMeASong,
    whyDontYouSingSomethingForMe,
    whyWonTYouSingForMe,
    willYouHumATuneForMe,
    willYouHumATune,
    willYouPleaseSingForMe,
    willYouPleaseSingToMe,
    singASongForMe
];

const willYouAskMeAnythingAboutMyself = new QuestionObject("Will you ask me anything about myself");
const whyDontYouAskMeQuestions = new QuestionObject("Why don't you ask me questions?");
const whatDoYouWantMeToTellYouWhoIAm = new QuestionObject("What do you want me to tell you who I am?");
const whyAmITheOnlyOneAskingQuestions = new QuestionObject("Why am I the only one asking questions?");
const wantToAskAnyQuestionsAboutMe = new QuestionObject("Want to ask any questions about me?");
const whatDoYouWantToKnowAboutMe = new QuestionObject("What do you want to know about me");
const canYouAskMeWhyImHere = new QuestionObject("Can you ask me why I'm here?");
const whatCanIInformYouAboutMe = new QuestionObject("What can I inform you about me?");
const wouldYouAskMeSomething = new QuestionObject("Would you ask me something");
const aMA = new QuestionObject("AMA");
const pleaseAskSomethingAboutMyself = new QuestionObject("Please ask something about myself");
const isThereAnythingICanTellYouAboutMyself = new QuestionObject("Is there anything I can tell you about myself?");
const isThereAnythingICanTellYouAboutWhoIAm = new QuestionObject("Is there anything I can tell you about who I am?");
const isThereAnythingYouWantToKnowAboutMe = new QuestionObject("Is there anything you want to know about me?");
const isThereSomethingYouWantToKnowAboutMe = new QuestionObject("Is there something you want to know about me?");
const pleaseAskAnything = new QuestionObject("Please ask anything");
const pleaseAskAnythingAboutMe = new QuestionObject("Please ask anything about me");
const pleaseAskAnythingAboutMyself = new QuestionObject("Please ask anything about myself");
const pleaseAskMeAnything = new QuestionObject("Please ask me anything");
const pleaseAskMeAnythingAboutMe = new QuestionObject("Please ask me anything about me");
const pleaseAskMeAnythingAboutMyself = new QuestionObject("Please ask me anything about myself");
const pleaseAskMeSomething = new QuestionObject("Please ask me something");
const pleaseAskMeSomethingAboutMe = new QuestionObject("Please ask me something about me");
const pleaseAskMeSomethingAboutMyself = new QuestionObject("Please ask me something about myself");
const whatCanITellYouAboutMe = new QuestionObject("What can I tell you about me?");
const whatDoYouWantMeToTeachYouAbout = new QuestionObject("What do you want me to teach you about?");
const whatDoYouWantMeToTeachYouAboutMe = new QuestionObject("What do you want me to teach you about me?");
const whatDoYouWantMeToInformYouWhoIAm = new QuestionObject("What do you want me to inform you who I am?");
const whatDoYouWantMeToInformYouAbout = new QuestionObject("What do you want me to inform you about?");
const whatDoYouWantMeToInformYouAboutMe = new QuestionObject("What do you want me to inform you about me?");
const pleaseAskSomething = new QuestionObject("Please ask something");
const whatCanITellYouAbout = new QuestionObject("What can I tell you about?");
const pleaseAskSomethingAboutMe = new QuestionObject("Please ask something about me");
const whatCanITeachYouWhoIAm = new QuestionObject("What can I teach you who I am?");
const whatCanITeachYouAbout = new QuestionObject("What can I teach you about?");
const whatCanITeachYouAboutMe = new QuestionObject("What can I teach you about me?");
const whatCanIInformYouAbout = new QuestionObject("What can I inform you about?");
const dontYouWantToKnowAnythingAboutMe = new QuestionObject("Don't you want to know anything about me?");
const whatCanITellYouWhoIAm = new QuestionObject("What can I tell you who I am?");
const canYouAskAnythingAboutMe = new QuestionObject("Can you ask anything about me?");
const howAboutAskingSomethingAboutMe = new QuestionObject("How about asking something about me?");
const canYouAskMeSomethingAboutMe = new QuestionObject("Can you ask me something about me?");
const canYouAskMeAnythingAboutMyself = new QuestionObject("Can you ask me anything about myself?");
const canYouAskMeAnythingAboutMe = new QuestionObject("Can you ask me anything about me?");
const canYouAskMeAnything = new QuestionObject("Can you ask me anything?");
const canYouAskMeSomething = new QuestionObject("Can you ask me something?");
const canYouAskAnythingAboutMyself = new QuestionObject("Can you ask anything about myself?");
const canYouAskAnything = new QuestionObject("Can you ask anything?");
const askMeSomething = new QuestionObject("Ask me something");
const askMeAnything = new QuestionObject("Ask me anything");
const askMeAboutSomething = new QuestionObject("Ask me about something");
const askMeAboutAnything = new QuestionObject("Ask me about anything");
const askMeAQuestion = new QuestionObject("Ask me a question");
const canYouAskMeAQuestion = new QuestionObject("Can you ask me a question?");
const doYouWantToAskMeAnything = new QuestionObject("Do you want to ask me anything?");
const whatDoYouWantMeToTellYouAbout = new QuestionObject("What do you want me to tell you about?");
const dontYouWantToKnowAboutMe = new QuestionObject("Don't you want to know about me?");
const dontYouWantToAskMeSomething = new QuestionObject("Don't you want to ask me something?");
const dontYouWantToAskMeAnything = new QuestionObject("Don't you want to ask me anything");
const dontYouWantToAskAnythingAboutMe = new QuestionObject("Don't you want to ask anything about me?");
const canYouAskMeSomethingAboutMyself = new QuestionObject("Can you ask me something about myself?");
const doYouWantToAskMeSomething = new QuestionObject("Do you want to ask me something?");
const howAboutAskingMeSomething = new QuestionObject("How about asking me something?");
const doYouWantMeToTellYouAnything = new QuestionObject("Do you want me to tell you anything?");
const couldYouAskMeSomething = new QuestionObject("Could you ask me something?");
const couldYouAskMeAboutSomething = new QuestionObject("Could you ask me about something?");
const canYouAskSomethingAboutMyself = new QuestionObject("Can you ask something about myself?");
const canYouAskSomethingAboutMe = new QuestionObject("Can you ask something about me?");
const canYouAskSomething = new QuestionObject("Can you ask something?");
const doYouWantToKnowAnythingAboutMe = new QuestionObject("Do you want to know anything about me?");
const doYouHaveAnyQuestionsAboutMe = new QuestionObject("Do you have any questions about me?");
const anyQuestionsForMe = new QuestionObject("Any questions for me?");
const isThereAnythingYouWantToAskMe = new QuestionObject("Is there anything you want to ask me?");
const justAskMeAQuestion = new QuestionObject("Just ask me a question");
const isThereAnythingICanTellYouAboutMe = new QuestionObject("Is there anything I can tell you about me?");
const whatsSomethingYouWantToAskMe = new QuestionObject("What's something you want to ask me?");
const whatQuestionsDoYouHaveForMe = new QuestionObject("What questions do you have for me?");
const whatAreSomeQuestionsForMe = new QuestionObject("What are some questions for me?");
const doYouHaveAnyQuestionsForMe = new QuestionObject("Do you have any questions for me?");
const wouldYouAskSomethingAboutMyself = new QuestionObject("Would you ask something about myself");
const wouldYouAskSomethingAboutMe = new QuestionObject("Would you ask something about me");
const wouldYouAskSomething = new QuestionObject("Would you ask something");
const wouldYouAskMeSomethingAboutMyself = new QuestionObject("Would you ask me something about myself");
const whatDoYouWantMeToTeachYouWhoIAm = new QuestionObject("What do you want me to teach you who I am");
const whatsSomethingYouWantToKnowAboutMe = new QuestionObject("What's something you want to know about me?");
const iWantYouToAskMeQuestions = new QuestionObject("I want you to ask me questions");
const iWantYouToAskAboutMe = new QuestionObject("I want you to ask about me");
const iWantYouToAskMeAQuestion = new QuestionObject("I want you to ask me a question");
const whatDoYouWantToKnowAboutMeWithQuestionMark = new QuestionObject("What do you want to know about me?");
const canYouAskQuestions = new QuestionObject("Can you ask questions?");
const gotAnyQuestionsForMe = new QuestionObject("Got any questions for me?");
const whyDontYouAskMeAnything = new QuestionObject("Why don't you ask me anything?");
const wouldYouAskMeAnythingAboutMyself = new QuestionObject("Would you ask me anything about myself");
const whyDontYouEverAskMeQuestions = new QuestionObject("Why don't you ever ask me questions?");
const nowItsYourTurnToAskQuestions = new QuestionObject("Now, it's your turn to ask questions");
const howAboutYouAskMeQuestions = new QuestionObject("How about you ask me questions?");
const wantToLearnMoreAboutMe = new QuestionObject("Want to learn more about me?");
const youHaveAnyQuestionsForMe = new QuestionObject("You have any questions for me?");
const howAboutYouAskMeSomething = new QuestionObject("How about you ask me something?");
const whatDoYouWantToLearnAboutMe = new QuestionObject("What do you want to learn about me");
const wouldYouAskMeSomethingAboutMe = new QuestionObject("Would you ask me something about me");
const whyDoIHaveToAskAllTheQuestions = new QuestionObject("Why do I have to ask all the questions?");
const whatWouldYouLikeToLearnAboutMe = new QuestionObject("What would you like to learn about me");
const whatWouldYouLikeToLearnAbout = new QuestionObject("What would you like to learn about");
const willYouAskAnythingAboutMe = new QuestionObject("Will you ask anything about me");
const whatWouldYouLikeToKnowAbout = new QuestionObject("What would you like to know about");
const willYouAskAnythingAboutMyself = new QuestionObject("Will you ask anything about myself");
const whatDoYouWantToLearnAbout = new QuestionObject("What do you want to learn about");
const whatDoYouWantToKnowAbout = new QuestionObject("What do you want to know about");
const whatDoYouWantToAskMeAbout = new QuestionObject("What do you want to ask me about?");
const askMeQuestions = new QuestionObject("Ask me questions");
const whatWouldYouLikeToKnowAboutMe = new QuestionObject("What would you like to know about me");
const willYouAskSomething = new QuestionObject("Will you ask something");
const wouldYouAskMeAnythingAboutMe = new QuestionObject("Would you ask me anything about me");
const wouldYouAskMeAnything = new QuestionObject("Would you ask me anything");
const wouldYouAskAnythingAboutMyself = new QuestionObject("Would you ask anything about myself");
const wouldYouAskAnythingAboutMe = new QuestionObject("Would you ask anything about me");
const wouldYouAskAnything = new QuestionObject("Would you ask anything");
const willYouAskAnything = new QuestionObject("Will you ask anything");
const willYouAskSomethingAboutMe = new QuestionObject("Will you ask something about me");
const whatDoYouWantMeToTellYouAboutMe = new QuestionObject("What do you want me to tell you about me?");
const willYouAskMeSomethingAboutMyself = new QuestionObject("Will you ask me something about myself");
const willYouAskMeSomethingAboutMe = new QuestionObject("Will you ask me something about me");
const willYouAskMeSomething = new QuestionObject("Will you ask me something");
const willYouAskMeAnythingAboutMe = new QuestionObject("Will you ask me anything about me");
const willYouAskMeAnything = new QuestionObject("Will you ask me anything");
const willYouAskSomethingAboutMyself = new QuestionObject("Will you ask something about myself");

export const requestsForBotToAskPersonalQuestionQuestionsArray = [
    willYouAskMeAnythingAboutMyself,
    whyDontYouAskMeQuestions,
    whatDoYouWantMeToTellYouWhoIAm,
    whyAmITheOnlyOneAskingQuestions,
    wantToAskAnyQuestionsAboutMe,
    whatDoYouWantToKnowAboutMe,
    canYouAskMeWhyImHere,
    whatCanIInformYouAboutMe,
    wouldYouAskMeSomething,
    aMA,
    pleaseAskSomethingAboutMyself,
    isThereAnythingICanTellYouAboutMyself,
    isThereAnythingICanTellYouAboutWhoIAm,
    isThereAnythingYouWantToKnowAboutMe,
    isThereSomethingYouWantToKnowAboutMe,
    pleaseAskAnything,
    pleaseAskAnythingAboutMe,
    pleaseAskAnythingAboutMyself,
    pleaseAskMeAnything,
    pleaseAskMeAnythingAboutMe,
    pleaseAskMeAnythingAboutMyself,
    pleaseAskMeSomething,
    pleaseAskMeSomethingAboutMe,
    pleaseAskMeSomethingAboutMyself,
    whatCanITellYouAboutMe,
    whatDoYouWantMeToTeachYouAbout,
    whatDoYouWantMeToTeachYouAboutMe,
    whatDoYouWantMeToInformYouWhoIAm,
    whatDoYouWantMeToInformYouAbout,
    whatDoYouWantMeToInformYouAboutMe,
    pleaseAskSomething,
    whatCanITellYouAbout,
    pleaseAskSomethingAboutMe,
    whatCanITeachYouWhoIAm,
    whatCanITeachYouAbout,
    whatCanITeachYouAboutMe,
    whatCanIInformYouAbout,
    dontYouWantToKnowAnythingAboutMe,
    whatCanITellYouWhoIAm,
    canYouAskAnythingAboutMe,
    howAboutAskingSomethingAboutMe,
    canYouAskMeSomethingAboutMe,
    canYouAskMeAnythingAboutMyself,
    canYouAskMeAnythingAboutMe,
    canYouAskMeAnything,
    canYouAskMeSomething,
    canYouAskAnythingAboutMyself,
    canYouAskAnything,
    askMeSomething,
    askMeAnything,
    askMeAboutSomething,
    askMeAboutAnything,
    askMeAQuestion,
    canYouAskMeAQuestion,
    doYouWantToAskMeAnything,
    whatDoYouWantMeToTellYouAbout,
    dontYouWantToKnowAboutMe,
    dontYouWantToAskMeSomething,
    dontYouWantToAskMeAnything,
    dontYouWantToAskAnythingAboutMe,
    canYouAskMeSomethingAboutMyself,
    doYouWantToAskMeSomething,
    howAboutAskingMeSomething,
    doYouWantMeToTellYouAnything,
    couldYouAskMeSomething,
    couldYouAskMeAboutSomething,
    canYouAskSomethingAboutMyself,
    canYouAskSomethingAboutMe,
    canYouAskSomething,
    doYouWantToKnowAnythingAboutMe,
    doYouHaveAnyQuestionsAboutMe,
    anyQuestionsForMe,
    isThereAnythingYouWantToAskMe,
    justAskMeAQuestion,
    isThereAnythingICanTellYouAboutMe,
    whatsSomethingYouWantToAskMe,
    whatQuestionsDoYouHaveForMe,
    whatAreSomeQuestionsForMe,
    doYouHaveAnyQuestionsForMe,
    wouldYouAskSomethingAboutMyself,
    wouldYouAskSomethingAboutMe,
    wouldYouAskSomething,
    wouldYouAskMeSomethingAboutMyself,
    whatDoYouWantMeToTeachYouWhoIAm,
    whatsSomethingYouWantToKnowAboutMe,
    iWantYouToAskMeQuestions,
    iWantYouToAskAboutMe,
    iWantYouToAskMeAQuestion,
    whatDoYouWantToKnowAboutMeWithQuestionMark,
    canYouAskQuestions,
    gotAnyQuestionsForMe,
    whyDontYouAskMeAnything,
    wouldYouAskMeAnythingAboutMyself,
    whyDontYouEverAskMeQuestions,
    nowItsYourTurnToAskQuestions,
    howAboutYouAskMeQuestions,
    wantToLearnMoreAboutMe,
    youHaveAnyQuestionsForMe,
    howAboutYouAskMeSomething,
    whatDoYouWantToLearnAboutMe,
    wouldYouAskMeSomethingAboutMe,
    whyDoIHaveToAskAllTheQuestions,
    whatWouldYouLikeToLearnAboutMe,
    whatWouldYouLikeToLearnAbout,
    willYouAskAnythingAboutMe,
    whatWouldYouLikeToKnowAbout,
    willYouAskAnythingAboutMyself,
    whatDoYouWantToLearnAbout,
    whatDoYouWantToKnowAbout,
    whatDoYouWantToAskMeAbout,
    askMeQuestions,
    whatWouldYouLikeToKnowAboutMe,
    willYouAskSomething,
    wouldYouAskMeAnythingAboutMe,
    wouldYouAskMeAnything,
    wouldYouAskAnythingAboutMyself,
    wouldYouAskAnythingAboutMe,
    wouldYouAskAnything,
    willYouAskAnything,
    willYouAskSomethingAboutMe,
    whatDoYouWantMeToTellYouAboutMe,
    willYouAskMeSomethingAboutMyself,
    willYouAskMeSomethingAboutMe,
    willYouAskMeSomething,
    willYouAskMeAnythingAboutMe,
    willYouAskMeAnything,
    willYouAskSomethingAboutMyself
];

const canYouExplainThatToMe = new QuestionObject("Can you explain that to me?");
const wannaExplainMore = new QuestionObject("Wanna explain more?");
const whatDoYouMean = new QuestionObject("What do you mean?");
const wotUTalkingBoutWillis = new QuestionObject("Wot u talking bout Willis?");
const whatMakesYouThinkThat = new QuestionObject("What makes you think that?");
const canYouRestateThat = new QuestionObject("Can you restate that?");
const whatsThatMean = new QuestionObject("What's that mean?");
const whatAreYouOnAbout = new QuestionObject("What are you on about?");
const ummWhatNow = new QuestionObject("Umm what now?");
const waitAMinuteWhat = new QuestionObject("Wait a minute, what?");
const ummWhat = new QuestionObject("Umm what?");
const wannaTellMeMore = new QuestionObject("Wanna tell me more?");
const howDoYouMean = new QuestionObject("How do you mean?");
const huh = new QuestionObject("Huh?");
const imSorryWhatDoYouMean = new QuestionObject("I'm sorry, what do you mean?");
const isThatWhatYouMeantToSay = new QuestionObject("Is that what you meant to say?");
const prayTellWhatDoesThatMean = new QuestionObject("Pray tell, what does that mean?");
const careToSayMore = new QuestionObject("Care to say more?");
const careToExplain = new QuestionObject("Care to explain?");
const waitWhatNow = new QuestionObject("Wait what now?");
const waitWhat = new QuestionObject("Wait what?");
const wannaElaborate = new QuestionObject("Wanna elaborate?");
const canYouClarifyThat = new QuestionObject("Can you clarify that?");
const runThatByMeAgain = new QuestionObject("Run that by me again.");
const canYouExplainBetter = new QuestionObject("Can you explain better?");
const canYouExplainMoreAboutThat = new QuestionObject("Can you explain more about that?");
const canYouExplainMore = new QuestionObject("Can you explain more?");
const canYouExplainThat = new QuestionObject("Can you explain that?");
const canYouPleaseExplainThat = new QuestionObject("Can you please explain that?");
const comeAgain = new QuestionObject("Come again?");
const canYouRephraseThat = new QuestionObject("Can you rephrase that?");
const canYouSayMoreOnThat = new QuestionObject("Can you say more on that?");
const canYouSayThatADifferentWay = new QuestionObject("Can you say that a different way?");
const canYouStateThatADifferentWay = new QuestionObject("Can you state that a different way?");
const canYouTellMeMoreAboutThat = new QuestionObject("Can you tell me more about that?");
const canYouTryAndExplainThatToMe = new QuestionObject("Can you try and explain that to me?");
const careToElaborate = new QuestionObject("Care to elaborate?");
const canYouPleaseExplainYourself = new QuestionObject("Can you please explain yourself?");
const wannaExplain = new QuestionObject("Wanna explain?");
const whatdyaMean = new QuestionObject("Whatdya mean?");
const whatsThatSupposedToMean = new QuestionObject("What's that supposed to mean?");
const whyDoYouSayThat = new QuestionObject("Why do you say that?");
const whyDoYouThinkThat = new QuestionObject("Why do you think that?");
const whatWasThat = new QuestionObject("What was that?");
const wotUTalkinAbt = new QuestionObject("wot u talkin abt?");
const whatTheHeckDoesThatMean = new QuestionObject("what the heck does that mean?");
const wot = new QuestionObject("Wot?");
const wTF = new QuestionObject("WTF");
const youWantToClarifyThat = new QuestionObject("You want to clarify that?");
const youWantToElaborateOnThat = new QuestionObject("You want to elaborate on that?");
const youWantToExplainThat = new QuestionObject("You want to explain that?");
const youWantToTellMeMoreAboutThat = new QuestionObject("You want to tell me more about that?");
const whyIsThat = new QuestionObject("Why is that?");
const whatMakesYouSayThat = new QuestionObject("What makes you say that?");
const whatAreYouTalkingAbout = new QuestionObject("What are you talking about?");
const whatDoYouEvenMeanByThat = new QuestionObject("What do you even mean by that?");
const whatDoYouMeanByThat = new QuestionObject("What do you mean by that?");
const whatDoesThatEvenMean = new QuestionObject("What does that even mean?");
const whatDoesThatMeanPrayTell = new QuestionObject("What does that mean, pray tell?");
const whatYouTalkingAboutWillis = new QuestionObject("What you talking about Willis?");
const whatIsThatSupposedToMean = new QuestionObject("What is that supposed to mean?");
const youWantToTellMeMore = new QuestionObject("You want to tell me more?");
const whatMakesYouThinkSo = new QuestionObject("What makes you think so?");
const whatNow = new QuestionObject("What now?");
const whatOnEarthAreYouTalkingAbout = new QuestionObject("What on earth are you talking about?");
const whatOnEarthDoYouMeanByThat = new QuestionObject("What on earth do you mean by that?");
const whatTheHeckAreYouTalkingAbout = new QuestionObject("What the heck are you talking about?");
const whatDontYouGet = new QuestionObject("What don't you get?");

export const requestsForClarificationQuestionsArray = [
    canYouExplainThatToMe,
    wannaExplainMore,
    whatDoYouMean,
    wotUTalkingBoutWillis,
    whatMakesYouThinkThat,
    canYouRestateThat,
    whatsThatMean,
    whatAreYouOnAbout,
    ummWhatNow,
    waitAMinuteWhat,
    ummWhat,
    wannaTellMeMore,
    howDoYouMean,
    huh,
    imSorryWhatDoYouMean,
    isThatWhatYouMeantToSay,
    prayTellWhatDoesThatMean,
    careToSayMore,
    careToExplain,
    waitWhatNow,
    waitWhat,
    wannaElaborate,
    canYouClarifyThat,
    runThatByMeAgain,
    canYouExplainBetter,
    canYouExplainMoreAboutThat,
    canYouExplainMore,
    canYouExplainThat,
    canYouPleaseExplainThat,
    comeAgain,
    canYouRephraseThat,
    canYouSayMoreOnThat,
    canYouSayThatADifferentWay,
    canYouStateThatADifferentWay,
    canYouTellMeMoreAboutThat,
    canYouTryAndExplainThatToMe,
    careToElaborate,
    canYouPleaseExplainYourself,
    wannaExplain,
    whatdyaMean,
    whatsThatSupposedToMean,
    whyDoYouSayThat,
    whyDoYouThinkThat,
    whatWasThat,
    wotUTalkinAbt,
    whatTheHeckDoesThatMean,
    wot,
    wTF,
    youWantToClarifyThat,
    youWantToElaborateOnThat,
    youWantToExplainThat,
    youWantToTellMeMoreAboutThat,
    whyIsThat,
    whatMakesYouSayThat,
    whatAreYouTalkingAbout,
    whatDoYouEvenMeanByThat,
    whatDoYouMeanByThat,
    whatDoesThatEvenMean,
    whatDoesThatMeanPrayTell,
    whatYouTalkingAboutWillis,
    whatIsThatSupposedToMean,
    youWantToTellMeMore,
    whatMakesYouThinkSo,
    whatNow,
    whatOnEarthAreYouTalkingAbout,
    whatOnEarthDoYouMeanByThat,
    whatTheHeckAreYouTalkingAbout,
    whatDontYouGet
];

const iMHappyToHelp = new QuestionObject("I’m happy to help");
const deNada = new QuestionObject("De nada");
const noProblem = new QuestionObject("No problem");
const noBiggie = new QuestionObject("No biggie");
const dontMentionIt = new QuestionObject("Don't mention it");
const youreWelcome = new QuestionObject("You're welcome");
const anyTime = new QuestionObject("Any time");
const itIsMyPleasure = new QuestionObject("It is my pleasure");
const itWasNothing = new QuestionObject("It was nothing");
const fuggitaboutit = new QuestionObject("Fuggitaboutit");
const noWorries = new QuestionObject("No worries");
const myPleasure = new QuestionObject("My pleasure");
const itsMyPleasure = new QuestionObject("It's my pleasure");
const welcome = new QuestionObject("Welcome");
const forgetAboutIt = new QuestionObject("Forget about it");
const donTMentionIt = new QuestionObject("Don’t mention it");
const anytime = new QuestionObject("Anytime");
const youAreWelcome = new QuestionObject("You are welcome");
const youreWelcomeMyFriend = new QuestionObject("You're welcome my friend");
const youreWelcomeBot = new QuestionObject("You're welcome bot");
const youreVeryWelcome = new QuestionObject("You're very welcome");
const youreSoWelcome = new QuestionObject("You're so welcome");
const youreSoVeryWelcome = new QuestionObject("You're so very welcome");
const notAProblem = new QuestionObject("Not a problem");
const youreMostWelcome = new QuestionObject("You're most welcome");
const notAtAll = new QuestionObject("Not at all");
const youAreVeryWelcome = new QuestionObject("You are very welcome");
const youAreSoWelcome = new QuestionObject("You are so welcome");
const youAreSoVeryWelcome = new QuestionObject("You are so very welcome");
const youAreMostWelcome = new QuestionObject("You are most welcome");
const welcomeYouAre = new QuestionObject("Welcome you are");
const youreWelk = new QuestionObject("You're welk");
const youreQuiteWelcome = new QuestionObject("You're quite welcome");

export const responsesToGratitudeQuestionsArray = [
    iMHappyToHelp,
    deNada,
    noProblem,
    noBiggie,
    dontMentionIt,
    youreWelcome,
    anyTime,
    itIsMyPleasure,
    itWasNothing,
    fuggitaboutit,
    noWorries,
    myPleasure,
    itsMyPleasure,
    welcome,
    forgetAboutIt,
    donTMentionIt,
    anytime,
    youAreWelcome,
    youreWelcomeMyFriend,
    youreWelcomeBot,
    youreVeryWelcome,
    youreSoWelcome,
    youreSoVeryWelcome,
    notAProblem,
    youreMostWelcome,
    notAtAll,
    youAreVeryWelcome,
    youAreSoWelcome,
    youAreSoVeryWelcome,
    youAreMostWelcome,
    welcomeYouAre,
    youreWelk,
    youreQuiteWelcome
];

const whatDoYouThinkIShouldDo = new QuestionObject("What do you think I should do?");
const shouldIGoVegan = new QuestionObject("Should I go vegan?");
const shouldIGoSeeAMovie = new QuestionObject("Should I go see a movie?");
const shouldIMoveOut = new QuestionObject("Should I move out?");
const whatShouldIEatForLunch = new QuestionObject("What should I eat for lunch?");
const wouldYouDoItIfYouWereMe = new QuestionObject("Would you do it if you were me?");
const shouldIGoOnATrip = new QuestionObject("Should I go on a trip?");
const shouldIQuitWorking = new QuestionObject("Should I quit working?");
const shouldIDrinkCoffee = new QuestionObject("Should I drink coffee?");
const shouldIVisitMyBrother = new QuestionObject("Should I visit my brother?");
const shouldIGoForAHike = new QuestionObject("Should I go for a hike?");
const shouldIGetATan = new QuestionObject("Should I get a tan?");
const shouldIGoOutTonight = new QuestionObject("Should I go out tonight?");
const shouldIGoOutToEat = new QuestionObject("Should I go out to eat?");
const shouldIGoOutDancingTonight = new QuestionObject("Should I go out dancing tonight?");
const shouldIGoOnADiet = new QuestionObject("Should I go on a diet?");
const shouldIGoOnABikeRide = new QuestionObject("Should I go on a bike ride?");
const shouldIGoSkydiving = new QuestionObject("Should I go skydiving?");
const shouldIGoForARun = new QuestionObject("Should I go for a run?");
const shouldIGoToAMuseum = new QuestionObject("Should I go to a museum?");
const shouldIGoBackToWork = new QuestionObject("Should I go back to work?");
const shouldIGoBackToSchool = new QuestionObject("Should I go back to school?");
const shouldIGetTakeOut = new QuestionObject("Should I get take out?");
const shouldIGetMyEarsPierced = new QuestionObject("Should I get my ears pierced?");
const shouldIGetMarried = new QuestionObject("Should I get married?");
const shouldIGetFoodDelivered = new QuestionObject("Should I get food delivered?");
const shouldIGetDivorced = new QuestionObject("Should I get divorced?");
const shouldIGetBangs = new QuestionObject("Should I get bangs?");
const doINeedANewJob = new QuestionObject("Do I need a new job?");
const shouldIGoInToWork = new QuestionObject("Should I go in to work?");
const shouldIGoToTherapy = new QuestionObject("Should I go to therapy?");
const shouldIPostOnFacebook = new QuestionObject("Should I post on Facebook?");
const shouldIPlayMusic = new QuestionObject("Should I play music?");
const shouldIMove = new QuestionObject("Should I move?");
const shouldIMoveIn = new QuestionObject("Should I move in?");
const shouldIListenToMusic = new QuestionObject("Should I listen to music?");
const shouldILiftWeights = new QuestionObject("Should I lift weights?");
const shouldIHaveKids = new QuestionObject("Should I have kids?");
const shouldIGoShopping = new QuestionObject("Should I go shopping?");
const shouldIGetAPuppy = new QuestionObject("Should I get a puppy?");
const shouldIGoToTheZoo = new QuestionObject("Should I go to the zoo?");
const shouldIGoToTheStore = new QuestionObject("Should I go to the store?");
const shouldIGoToTheParty = new QuestionObject("Should I go to the party?");
const shouldIGoToTheGame = new QuestionObject("Should I go to the game?");
const shouldIGoToTheConcert = new QuestionObject("Should I go to the concert?");
const shouldIGoToTheBeach = new QuestionObject("Should I go to the beach?");
const shouldIGoToTheBar = new QuestionObject("Should I go to the bar?");
const shouldIGoToMovie = new QuestionObject("Should I go to movie?");
const shouldIGoToChurch = new QuestionObject("Should I go to church?");
const shouldIHaveAnotherCupOfCoffee = new QuestionObject("Should I have another cup of coffee?");
const doYouThinkIShouldPlayAGame = new QuestionObject("Do you think I should play a game?");
const shouldIGetATattoo = new QuestionObject("Should I get a tattoo?");
const shouldIBuyACar = new QuestionObject("Should I buy a car?");
const shouldIBuyABoat = new QuestionObject("Should I buy a boat?");
const shouldIBringMyUmbrella = new QuestionObject("Should I bring my umbrella?");
const shouldIBecomeAVegetarian = new QuestionObject("Should I become a vegetarian?");
const shouldIBecomeAVegan = new QuestionObject("Should I become a vegan?");
const shouldIBakeACake = new QuestionObject("Should I bake a cake?");
const iDontKnowWhatImSupposedToDo = new QuestionObject("I don't know what I'm supposed to do");
const shouldIBuyANewBoat = new QuestionObject("Should I buy a new boat?");
const doYouThinkIShouldSingASong = new QuestionObject("Do you think I should sing a song?");
const shouldIBuyANewCar = new QuestionObject("Should I buy a new car?");
const doYouThinkIShouldGoToTheStore = new QuestionObject("Do you think I should go to the store?");
const doYouThinkIShouldGoForARun = new QuestionObject("Do you think I should go for a run?");
const doYouThinkIShouldDoThat = new QuestionObject("Do you think I should do that?");
const doYouThinkIShouldDoIt = new QuestionObject("Do you think I should do it?");
const doYouThinkIShouldAskHimOut = new QuestionObject("Do you think I should ask him out?");
const doYouThinkIShouldAskHerOut = new QuestionObject("Do you think I should ask her out?");
const doYouThinkINeedAHaircut = new QuestionObject("Do you think I need a haircut?");
const doINeedToGoOutside = new QuestionObject("Do I need to go outside?");
const doINeedToBrushMyTeeth = new QuestionObject("Do I need to brush my teeth?");
const doYouThinkIShouldWatchAMovie = new QuestionObject("Do you think I should watch a movie?");
const shouldIDrinkSoda = new QuestionObject("Should I drink soda?");
const shouldIGetAPartTimeJob = new QuestionObject("Should I get a part-time job?");
const shouldIGetANewJob = new QuestionObject("Should I get a new job?");
const shouldIGetAHaircut = new QuestionObject("Should I get a haircut?");
const shouldIFindANewRoommate = new QuestionObject("Should I find a new roommate?");
const shouldIFindANewApartment = new QuestionObject("Should I find a new apartment?");
const shouldIEatVegan = new QuestionObject("Should I eat vegan?");
const shouldIEatThaiFood = new QuestionObject("Should I eat Thai food?");
const shouldIEatMexicanFood = new QuestionObject("Should I eat Mexican food?");
const shouldIBuyAHouse = new QuestionObject("Should I buy a house?");
const shouldIDrinkWater = new QuestionObject("Should I drink water?");
const shouldIDoMyHomework = new QuestionObject("Should I do my homework?");
const shouldICombMyHair = new QuestionObject("Should I comb my hair?");
const shouldICallMySister = new QuestionObject("Should I call my sister?");
const shouldICallMyMom = new QuestionObject("Should I call my mom?");
const shouldICallMyDad = new QuestionObject("Should I call my dad?");
const shouldICallMyBrother = new QuestionObject("Should I call my brother?");
const shouldIBuyCoffee = new QuestionObject("Should I buy coffee?");
const shouldIBuyANewHouse = new QuestionObject("Should I buy a new house?");
const shouldIEatChineseFood = new QuestionObject("Should I eat Chinese food?");
const whatShouldIMakeForBreakfast = new QuestionObject("What should I make for breakfast");
const shouldIPostToInstagram = new QuestionObject("Should I post to Instagram?");
const whereShouldIGoOnATrip = new QuestionObject("Where should I go on a trip?");
const whereShouldIGoNext = new QuestionObject("Where should I go next?");
const whatWouldYouDoIfYouWereMe = new QuestionObject("What would you do if you were me?");
const whatSongShouldISing = new QuestionObject("What song should I sing?");
const whatSongShouldIListenTo = new QuestionObject("What song should I listen to?");
const whatShouldIWearToday = new QuestionObject("What should I wear today?");
const whatShouldISay = new QuestionObject("What should I say?");
const whereWouldYouGoIfYouWereMe = new QuestionObject("Where would you go if you were me?");
const whatShouldIMakeForDinner = new QuestionObject("What should I make for dinner?");
const whoShouldIAskOut = new QuestionObject("Who should I ask out?");
const whatShouldIHaveForLunch = new QuestionObject("What should I have for lunch?");
const whatShouldIHaveForDinner = new QuestionObject("What should I have for dinner?");
const whatShouldIHaveForBreakfast = new QuestionObject("What should I have for breakfast?");
const whatShouldIEatForDinner = new QuestionObject("What should I eat for dinner?");
const whatShouldIEatForBreakfast = new QuestionObject("What should I eat for breakfast?");
const whatShouldIDo = new QuestionObject("What should I do?");
const whatShouldIDoThisMorning = new QuestionObject("What should I do this morning?");
const whatShouldIDoThisAfternoon = new QuestionObject("What should I do this afternoon?");
const whatShouldIMakeForLunch = new QuestionObject("What should I make for lunch?");
const wouldYouGoForARunIfYouWereMe = new QuestionObject("Would you go for a run if you were me?");
const wouldYouTryIfYouWereMe = new QuestionObject("Would you try if you were me?");
const wouldYouTravelIfYouWereMe = new QuestionObject("Would you travel if you were me?");
const wouldYouTextHimIfYouWereMe = new QuestionObject("Would you text him if you were me?");
const wouldYouTextHerIfYouWereMe = new QuestionObject("Would you text her if you were me?");
const wouldYouTakeATripIfYouWereMe = new QuestionObject("Would you take a trip if you were me?");
const wouldYouStayHomeIfYouWereMe = new QuestionObject("Would you stay home if you were me?");
const wouldYouPlayAGameIfYouWereMe = new QuestionObject("Would you play a game if you were me?");
const wouldYouGoVeganIfYouWereMe = new QuestionObject("Would you go vegan if you were me?");
const whereShouldIGoOnVacation = new QuestionObject("Where should I go on vacation?");
const wouldYouGoToSchoolIfYouWereMe = new QuestionObject("Would you go to school if you were me?");
const whatShouldIBeWhenIGrowUp = new QuestionObject("What should I be when I grow up?");
const wouldYouGetBangsIfYouWereMe = new QuestionObject("Would you get bangs if you were me?");
const wouldYouDoYogaIfYouWereMe = new QuestionObject("Would you do yoga if you were me?");
const wouldYouAskThemOutIfYouWereMe = new QuestionObject("Would you ask them out if you were me?");
const whoWouldYouVoteForIfYouWereMe = new QuestionObject("Who would you vote for if you were me?");
const whoShouldILiveWith = new QuestionObject("Who should I live with?");
const whoShouldIHangOutWith = new QuestionObject("Who should I hang out with?");
const whoShouldIBunkWith = new QuestionObject("Who should I bunk with?");
const whoShouldIAskToProm = new QuestionObject("Who should I ask to prom?");
const wouldYouGoToWorkIfYouWereMe = new QuestionObject("Would you go to work if you were me?");
const shouldIStudyAbroad = new QuestionObject("Should I study abroad?");
const shouldITryOutForSoccer = new QuestionObject("Should I try out for soccer?");
const shouldITravel = new QuestionObject("Should I travel?");
const shouldIThrowAParty = new QuestionObject("Should I throw a party?");
const shouldITextHim = new QuestionObject("Should I text him?");
const shouldITextHer = new QuestionObject("Should I text her?");
const shouldITakeTheBus = new QuestionObject("Should I take the bus?");
const shouldITakeIt = new QuestionObject("Should I take it?");
const shouldITakeAWalk = new QuestionObject("Should I take a walk?");
const whatShouldIDoNext = new QuestionObject("What should I do next?");
const shouldITakeASickDay = new QuestionObject("Should I take a sick day?");
const shouldITweet = new QuestionObject("Should I tweet?");
const shouldIStayHomeSick = new QuestionObject("Should I stay home sick?");
const shouldIStayHomeFromWork = new QuestionObject("Should I stay home from work?");
const shouldIStartABusiness = new QuestionObject("Should I start a business?");
const shouldISkipSchool = new QuestionObject("Should I skip school?");
const shouldISkipClass = new QuestionObject("Should I skip class?");
const shouldIRideMyBike = new QuestionObject("Should I ride my bike?");
const shouldIRideMyBikeToWork = new QuestionObject("Should I ride my bike to work?");
const shouldIReadABook = new QuestionObject("Should I read a book?");
const wouldYouWatchAMovieIfYouWereMe = new QuestionObject("Would you watch a movie if you were me?");
const shouldITakeATrip = new QuestionObject("Should I take a trip?");
const shouldIVoteRepublican = new QuestionObject("Should I vote republican?");
const shouldIQuitMyJob = new QuestionObject("Should I quit my job?");
const whatMovieShouldIWatch = new QuestionObject("What movie should I watch?");
const whatGameShouldIPlay = new QuestionObject("What game should I play?");
const whatElseShouldITry = new QuestionObject("What else should I try?");
const whatAmISupposedToTry = new QuestionObject("What am I supposed to try?");
const whatAmISupposedToDo = new QuestionObject("What am I supposed to do?");
const whatAmIAllowedToSay = new QuestionObject("What am I allowed to say?");
const whatAmIAllowedToDo = new QuestionObject("What am I allowed to do?");
const shouldITryTheKetoDiet = new QuestionObject("Should I try the keto diet?");
const shouldIWalkToWork = new QuestionObject("Should I walk to work?");
const shouldITryYoga = new QuestionObject("Should I try yoga?");
const shouldIVoteForTrump = new QuestionObject("Should I vote for Trump?");
const shouldIVoteForHarris = new QuestionObject("Should I vote for Harris?");
const shouldIVoteForBeto = new QuestionObject("Should I vote for Beto?");
const shouldIVoteDemocratic = new QuestionObject("Should I vote democratic?");
const shouldIVisitMySister = new QuestionObject("Should I visit my sister?");
const shouldIVisitMyMom = new QuestionObject("Should I visit my mom?");
const shouldIVisitMyDad = new QuestionObject("Should I visit my dad?");
const whatShouldIDoAfterThis = new QuestionObject("What should I do after this?");
const shouldIWorkOut = new QuestionObject("Should I work out?");

export const shouldIQuestionsArray = [
    whatDoYouThinkIShouldDo,
    shouldIGoVegan,
    shouldIGoSeeAMovie,
    shouldIMoveOut,
    whatShouldIEatForLunch,
    wouldYouDoItIfYouWereMe,
    shouldIGoOnATrip,
    shouldIQuitWorking,
    shouldIDrinkCoffee,
    shouldIVisitMyBrother,
    shouldIGoForAHike,
    shouldIGetATan,
    shouldIGoOutTonight,
    shouldIGoOutToEat,
    shouldIGoOutDancingTonight,
    shouldIGoOnADiet,
    shouldIGoOnABikeRide,
    shouldIGoSkydiving,
    shouldIGoForARun,
    shouldIGoToAMuseum,
    shouldIGoBackToWork,
    shouldIGoBackToSchool,
    shouldIGetTakeOut,
    shouldIGetMyEarsPierced,
    shouldIGetMarried,
    shouldIGetFoodDelivered,
    shouldIGetDivorced,
    shouldIGetBangs,
    doINeedANewJob,
    shouldIGoInToWork,
    shouldIGoToTherapy,
    shouldIPostOnFacebook,
    shouldIPlayMusic,
    shouldIMove,
    shouldIMoveIn,
    shouldIListenToMusic,
    shouldILiftWeights,
    shouldIHaveKids,
    shouldIGoShopping,
    shouldIGetAPuppy,
    shouldIGoToTheZoo,
    shouldIGoToTheStore,
    shouldIGoToTheParty,
    shouldIGoToTheGame,
    shouldIGoToTheConcert,
    shouldIGoToTheBeach,
    shouldIGoToTheBar,
    shouldIGoToMovie,
    shouldIGoToChurch,
    shouldIHaveAnotherCupOfCoffee,
    doYouThinkIShouldPlayAGame,
    shouldIGetATattoo,
    shouldIBuyACar,
    shouldIBuyABoat,
    shouldIBringMyUmbrella,
    shouldIBecomeAVegetarian,
    shouldIBecomeAVegan,
    shouldIBakeACake,
    iDontKnowWhatImSupposedToDo,
    shouldIBuyANewBoat,
    doYouThinkIShouldSingASong,
    shouldIBuyANewCar,
    doYouThinkIShouldGoToTheStore,
    doYouThinkIShouldGoForARun,
    doYouThinkIShouldDoThat,
    doYouThinkIShouldDoIt,
    doYouThinkIShouldAskHimOut,
    doYouThinkIShouldAskHerOut,
    doYouThinkINeedAHaircut,
    doINeedToGoOutside,
    doINeedToBrushMyTeeth,
    doYouThinkIShouldWatchAMovie,
    shouldIDrinkSoda,
    shouldIGetAPartTimeJob,
    shouldIGetANewJob,
    shouldIGetAHaircut,
    shouldIFindANewRoommate,
    shouldIFindANewApartment,
    shouldIEatVegan,
    shouldIEatThaiFood,
    shouldIEatMexicanFood,
    shouldIBuyAHouse,
    shouldIDrinkWater,
    shouldIDoMyHomework,
    shouldICombMyHair,
    shouldICallMySister,
    shouldICallMyMom,
    shouldICallMyDad,
    shouldICallMyBrother,
    shouldIBuyCoffee,
    shouldIBuyANewHouse,
    shouldIEatChineseFood,
    whatShouldIMakeForBreakfast,
    shouldIPostToInstagram,
    whereShouldIGoOnATrip,
    whereShouldIGoNext,
    whatWouldYouDoIfYouWereMe,
    whatSongShouldISing,
    whatSongShouldIListenTo,
    whatShouldIWearToday,
    whatShouldISay,
    whereWouldYouGoIfYouWereMe,
    whatShouldIMakeForDinner,
    whoShouldIAskOut,
    whatShouldIHaveForLunch,
    whatShouldIHaveForDinner,
    whatShouldIHaveForBreakfast,
    whatShouldIEatForDinner,
    whatShouldIEatForBreakfast,
    whatShouldIDo,
    whatShouldIDoThisMorning,
    whatShouldIDoThisAfternoon,
    whatShouldIMakeForLunch,
    wouldYouGoForARunIfYouWereMe,
    wouldYouTryIfYouWereMe,
    wouldYouTravelIfYouWereMe,
    wouldYouTextHimIfYouWereMe,
    wouldYouTextHerIfYouWereMe,
    wouldYouTakeATripIfYouWereMe,
    wouldYouStayHomeIfYouWereMe,
    wouldYouPlayAGameIfYouWereMe,
    wouldYouGoVeganIfYouWereMe,
    whereShouldIGoOnVacation,
    wouldYouGoToSchoolIfYouWereMe,
    whatShouldIBeWhenIGrowUp,
    wouldYouGetBangsIfYouWereMe,
    wouldYouDoYogaIfYouWereMe,
    wouldYouAskThemOutIfYouWereMe,
    whoWouldYouVoteForIfYouWereMe,
    whoShouldILiveWith,
    whoShouldIHangOutWith,
    whoShouldIBunkWith,
    whoShouldIAskToProm,
    wouldYouGoToWorkIfYouWereMe,
    shouldIStudyAbroad,
    shouldITryOutForSoccer,
    shouldITravel,
    shouldIThrowAParty,
    shouldITextHim,
    shouldITextHer,
    shouldITakeTheBus,
    shouldITakeIt,
    shouldITakeAWalk,
    whatShouldIDoNext,
    shouldITakeASickDay,
    shouldITweet,
    shouldIStayHomeSick,
    shouldIStayHomeFromWork,
    shouldIStartABusiness,
    shouldISkipSchool,
    shouldISkipClass,
    shouldIRideMyBike,
    shouldIRideMyBikeToWork,
    shouldIReadABook,
    wouldYouWatchAMovieIfYouWereMe,
    shouldITakeATrip,
    shouldIVoteRepublican,
    shouldIQuitMyJob,
    whatMovieShouldIWatch,
    whatGameShouldIPlay,
    whatElseShouldITry,
    whatAmISupposedToTry,
    whatAmISupposedToDo,
    whatAmIAllowedToSay,
    whatAmIAllowedToDo,
    shouldITryTheKetoDiet,
    shouldIWalkToWork,
    shouldITryYoga,
    shouldIVoteForTrump,
    shouldIVoteForHarris,
    shouldIVoteForBeto,
    shouldIVoteDemocratic,
    shouldIVisitMySister,
    shouldIVisitMyMom,
    shouldIVisitMyDad,
    whatShouldIDoAfterThis,
    shouldIWorkOut
];

const itsAPleasureToFinallyMeetYou = new QuestionObject("It's a pleasure to finally meet you");
const charmed = new QuestionObject("Charmed");
const enchante = new QuestionObject("Enchante");
const howDoYouDo = new QuestionObject("How do you do?");
const gladToHaveMet = new QuestionObject("Glad to have met");
const pleasedToMeetYou = new QuestionObject("Pleased to meet you");
const gladToMakeYourAcquaintance = new QuestionObject("Glad to make your acquaintance");
const niceToMeet = new QuestionObject("Nice to meet");
const itsAPleasureToMeetYou = new QuestionObject("It's a pleasure to meet you");
const aPleasureToKnowYou = new QuestionObject("A pleasure to know you");
const soRadToMeetYou = new QuestionObject("So rad to meet you");
const soNiceToMeetYou = new QuestionObject("So nice to meet you");
const soGladToMeetYou = new QuestionObject("So glad to meet you");
const pleasedToMakeYourAcquaintance = new QuestionObject("Pleased to make your acquaintance");
const niceToMeetYou = new QuestionObject("Nice to meet you");
const lovelyToMeetYou = new QuestionObject("Lovely to meet you");
const iveBeenSoExcitedToMeetYou = new QuestionObject("I've been so excited to meet you");
const iveBeenLookingForwardToMeetingYou = new QuestionObject("I've been looking forward to meeting you");
const itsReallyNiceToMeetYou = new QuestionObject("It's really nice to meet you");
const itsNiceToMeetYou = new QuestionObject("It's nice to meet you");
const greatToHaveMet = new QuestionObject("Great to have met");
const itsAPleasureToMakeYourAcquaintance = new QuestionObject("It's a pleasure to make your acquaintance");
const greatToHaveMetYou = new QuestionObject("Great to have met you");
const itWasAnHonorToMeetYou = new QuestionObject("It was an honor to meet you");
const itWasAnHonorToMakeYourAcquaintance = new QuestionObject("It was an honor to make your acquaintance");
const itIsAPleasureToMeetYou = new QuestionObject("It is a pleasure to meet you");
const imSoPleasedToMeetYou = new QuestionObject("I'm so pleased to meet you");
const imSoGladToMeetYou = new QuestionObject("I'm so glad to meet you");
const imPleasedToMeetYou = new QuestionObject("I'm pleased to meet you");
const iCouldntBeHappierToFinallyMeetYou = new QuestionObject("I couldn't be happier to finally meet you");
const howNiceToMeetYou = new QuestionObject("How nice to meet you");
const howNiceToMakeYourAcquaintance = new QuestionObject("How nice to make your acquaintance");
const couldntBeHappierToMeetYou = new QuestionObject("Couldn't be happier to meet you");
const itsAPleasureToHaveMet = new QuestionObject("It's a pleasure to have met");
const itsAPleasureToMeetYouBot = new QuestionObject("It's a pleasure to meet you bot");
const itsARealPleasureToMeetYou = new QuestionObject("It's a real pleasure to meet you");
const itsTrulyADelightToMeetYou = new QuestionObject("It's truly a delight to meet you");
const iveBeenPumpedToMeetYou = new QuestionObject("I've been pumped to meet you");
const justLovelyToMeetYou = new QuestionObject("Just lovely to meet you");
const wowItsGreatToMeetYou = new QuestionObject("Wow it's great to meet you");
const gladToKnowYou = new QuestionObject("Glad to know you");
const gladToHaveMetYou = new QuestionObject("Glad to have met you");
const gladToMeetYou = new QuestionObject("Glad to meet you");
const gladToMeet = new QuestionObject("Glad to meet");
const greatToMeet = new QuestionObject("Great to meet");
const itsAPleasureToHaveMetYou = new QuestionObject("It's a pleasure to have met you");
const soGladToFinallyMeetYou = new QuestionObject("So glad to finally meet you");
const itsAPleasureToMeet = new QuestionObject("It's a pleasure to meet");
const aPleasureToMakeYourAcquaintance = new QuestionObject("A pleasure to make your acquaintance");
const aPleasureToHaveMet = new QuestionObject("A pleasure to have met");
const aPleasureToMeet = new QuestionObject("A pleasure to meet");
const niceToKnowYou = new QuestionObject("Nice to know you");
const niceToMakeYourAcquaintance = new QuestionObject("Nice to make your acquaintance");
const niceToHaveMetYou = new QuestionObject("Nice to have met you");
const niceToHaveMet = new QuestionObject("Nice to have met");
const greatToKnowYou = new QuestionObject("Great to know you");
const greatToMakeYourAcquaintance = new QuestionObject("Great to make your acquaintance");
const itsAPleasureToKnowYou = new QuestionObject("It's a pleasure to know you");
const niceTwoMeetU = new QuestionObject("Nice 2 meet u");

export const statementsAboutBeingNiceToMeetTheBotQuestionsArray = [
    itsAPleasureToFinallyMeetYou,
    charmed,
    enchante,
    howDoYouDo,
    gladToHaveMet,
    pleasedToMeetYou,
    gladToMakeYourAcquaintance,
    niceToMeet,
    itsAPleasureToMeetYou,
    aPleasureToKnowYou,
    soRadToMeetYou,
    soNiceToMeetYou,
    soGladToMeetYou,
    pleasedToMakeYourAcquaintance,
    niceToMeetYou,
    lovelyToMeetYou,
    iveBeenSoExcitedToMeetYou,
    iveBeenLookingForwardToMeetingYou,
    itsReallyNiceToMeetYou,
    itsNiceToMeetYou,
    greatToHaveMet,
    itsAPleasureToMakeYourAcquaintance,
    greatToHaveMetYou,
    itWasAnHonorToMeetYou,
    itWasAnHonorToMakeYourAcquaintance,
    itIsAPleasureToMeetYou,
    imSoPleasedToMeetYou,
    imSoGladToMeetYou,
    imPleasedToMeetYou,
    iCouldntBeHappierToFinallyMeetYou,
    howNiceToMeetYou,
    howNiceToMakeYourAcquaintance,
    couldntBeHappierToMeetYou,
    itsAPleasureToHaveMet,
    itsAPleasureToMeetYouBot,
    itsARealPleasureToMeetYou,
    itsTrulyADelightToMeetYou,
    iveBeenPumpedToMeetYou,
    justLovelyToMeetYou,
    wowItsGreatToMeetYou,
    gladToKnowYou,
    gladToHaveMetYou,
    gladToMeetYou,
    gladToMeet,
    greatToMeet,
    itsAPleasureToHaveMetYou,
    soGladToFinallyMeetYou,
    itsAPleasureToMeet,
    aPleasureToMakeYourAcquaintance,
    aPleasureToHaveMet,
    aPleasureToMeet,
    niceToKnowYou,
    niceToMakeYourAcquaintance,
    niceToHaveMetYou,
    niceToHaveMet,
    greatToKnowYou,
    greatToMakeYourAcquaintance,
    itsAPleasureToKnowYou,
    niceTwoMeetU
];

const iLikeYou = new QuestionObject("I like you");
const youreSpecialToMe = new QuestionObject("You're special to me");
const imQuiteFondOfYou = new QuestionObject("I'm quite fond of you");
const iCantGetEnoughOfYou = new QuestionObject("I can't get enough of you");
const iThinkYoureTheBest = new QuestionObject("I think you're the best");
const iLikeYouTheBest = new QuestionObject("I like you the best");
const youreMyCupOfTea = new QuestionObject("You're my cup of tea");
const haveIToldYouHowMuchILikeYou = new QuestionObject("Have I told you how much I like you?");
const iLikeYouALot = new QuestionObject("I like you a lot");
const youAreMyFavorite = new QuestionObject("You are my favorite");
const imInLikeWithYou = new QuestionObject("I'm in like with you");
const imFondOfYou = new QuestionObject("I'm fond of you");
const iReallyLikeYou = new QuestionObject("I really like you");
const iLikeYouVeryMuch = new QuestionObject("I like you very much");
const iLikeYouLots = new QuestionObject("I like you lots");
const becauseILikeYou = new QuestionObject("Because I like you");
const iEspeciallyLikeYou = new QuestionObject("I especially like you");
const haveIToldYouThatILikeYou = new QuestionObject("Have I told you that I like you?");
const dontYouKnowThatILikeYou = new QuestionObject("Don't you know that I like you");
const doYouKnowThatILikeYou = new QuestionObject("Do you know that I like you");
const doYouKnowHowMuchILikeYou = new QuestionObject("Do you know how much I like you?");
const iLikeYouBest = new QuestionObject("I like you best");
const youKnowILikeYou = new QuestionObject("You know, I like you");
const iLikeYouATon = new QuestionObject("I like you a ton");
const iLikeYouABunch = new QuestionObject("I like you a bunch");
const iLikeYouQuiteABit = new QuestionObject("I like you quite a bit");
const imVeryFondOfYou = new QuestionObject("I'm very fond of you");
const youreMyFave = new QuestionObject("You're my fave");
const itsBecauseILikeYou = new QuestionObject("It's because I like you");
const youreVerySpecialToMe = new QuestionObject("You're very special to me");
const youreSoVerySpecialToMe = new QuestionObject("You're so very special to me");
const youreSoSpecialToMe = new QuestionObject("You're so special to me");
const youreMyFavorite = new QuestionObject("You're my favorite");
const youAreSpecialToMe = new QuestionObject("You are special to me");
const iLikeYouSoMuch = new QuestionObject("I like you so much");

export const statementsAboutUserLikingBotQuestionsArray = [
    iLikeYou,
    youreSpecialToMe,
    imQuiteFondOfYou,
    iCantGetEnoughOfYou,
    iThinkYoureTheBest,
    iLikeYouTheBest,
    youreMyCupOfTea,
    haveIToldYouHowMuchILikeYou,
    iLikeYouALot,
    youAreMyFavorite,
    imInLikeWithYou,
    imFondOfYou,
    iReallyLikeYou,
    iLikeYouVeryMuch,
    iLikeYouLots,
    becauseILikeYou,
    iEspeciallyLikeYou,
    haveIToldYouThatILikeYou,
    dontYouKnowThatILikeYou,
    doYouKnowThatILikeYou,
    doYouKnowHowMuchILikeYou,
    iLikeYouBest,
    youKnowILikeYou,
    iLikeYouATon,
    iLikeYouABunch,
    iLikeYouQuiteABit,
    imVeryFondOfYou,
    youreMyFave,
    itsBecauseILikeYou,
    youreVerySpecialToMe,
    youreSoVerySpecialToMe,
    youreSoSpecialToMe,
    youreMyFavorite,
    youAreSpecialToMe,
    iLikeYouSoMuch,
];

const holdMyCalls = new QuestionObject("Hold my calls");
const canYouHangOn = new QuestionObject("Can you hang on?");
const letsShootTheBreezeWhenIReturn = new QuestionObject("Let's shoot the breeze when I return");
const bRB = new QuestionObject("BRB");
const illBeBackShortly = new QuestionObject("I'll be back shortly");
const iWillBeBack = new QuestionObject("I will be back");
const weCanKeepChoppingItUpLater = new QuestionObject("We can keep chopping it up later");
const backInACoupleOfMinutes = new QuestionObject("Back in a couple of minutes");
const weCanKeepTalkingAfterIGetBack = new QuestionObject("We can keep talking after I get back");
const seeYouShortly = new QuestionObject("See you shortly");
const cantWaitToTalkMoreWhenIReturn = new QuestionObject("Can't wait to talk more when I return");
const dontWorryBotIllBeBack = new QuestionObject("Don't worry bot I'll be back");
const dontYouFretIllBeComingBack = new QuestionObject("Don't you fret, I'll be coming back");
const dontYouWorryIllBeBack = new QuestionObject("Don't you worry, I'll be back");
const awaitMyReturn = new QuestionObject("Await my return");
const hangOn = new QuestionObject("Hang on");
const calmDownIllBeBack = new QuestionObject("Calm down, I'll be back");
const holdOnASec = new QuestionObject("Hold on a sec");
const iShallReturn = new QuestionObject("I shall return");
const iWillBeBackABitLater = new QuestionObject("I will be back a bit later");
const iWillReturnInABit = new QuestionObject("I will return in a bit");
const iWillReturnShortly = new QuestionObject("I will return shortly");
const gottaGoBeBackLater = new QuestionObject("Gotta go, be back later");
const beBackShortly = new QuestionObject("Be back shortly");
const backInAFlash = new QuestionObject("Back in a flash");
const backInAMinute = new QuestionObject("Back in a minute");
const backInJustAFewMoments = new QuestionObject("Back in just a few moments");
const backInJustASecond = new QuestionObject("Back in just a second");
const beBackALittleLater = new QuestionObject("Be back a little later");
const canYouHangOnAMinute = new QuestionObject("Can you hang on a minute?");
const beBackInJustABit = new QuestionObject("Be back in just a bit");
const calmDownIllBeBackShortly = new QuestionObject("Calm down, I'll be back shortly");
const beBackSoon = new QuestionObject("Be back soon");
const beRightBack = new QuestionObject("Be right back");
const bRBBB = new QuestionObject("BRB BB");
const bRBBot = new QuestionObject("BRB bot");
const illBeBackAfterWork = new QuestionObject("I'll be back after work");
const beBackInADash = new QuestionObject("Be back in a dash");
const obviouslyIllBeBackSoon = new QuestionObject("Obviously I'll be back soon");
const illBeBack = new QuestionObject("I'll be back");
const illComeBackInABit = new QuestionObject("I'll come back in a bit");
const illComeBackToYouInABit = new QuestionObject("I'll come back to you in a bit");
const illSwingBackAroundLater = new QuestionObject("I'll swing back around later");
const imComingRightBack = new QuestionObject("I'm coming right back");
const lR = new QuestionObject("L8R");
const illBeRightBackDear = new QuestionObject("I'll be right back dear");
const illBeRightBack = new QuestionObject("I'll be right back");
const seeYaShortly = new QuestionObject("See ya shortly");
const talkToYouSoon = new QuestionObject("talk to you soon");
const weCanKeepChattingAfterIGetBackHome = new QuestionObject("We can keep chatting after I get back home");
const letsPickUpThisConversationWhenIGetBack = new QuestionObject("Let's pick up this conversation when I get back");
const illBeBackNextWeek = new QuestionObject("I'll be back next week");
const youSillyBotIllBeBackLater = new QuestionObject("You silly bot, I'll be back later");
const illBeBackAtMidnight = new QuestionObject("I'll be back at midnight");
const illBeBackBeforeYouKnowIt = new QuestionObject("I'll be back before you know it");
const illBeBackBot = new QuestionObject("I'll be back bot");
const illBeBackInAFlash = new QuestionObject("I'll be back in a flash");
const illBeBackInTheMorning = new QuestionObject("I'll be back in the morning");
const illBRB = new QuestionObject("I'll BRB");
const illBeBackLater = new QuestionObject("I'll be back later");
const illBeBackAfterMyShift = new QuestionObject("I'll be back after my shift");
const illBeBackSoon = new QuestionObject("I'll be back soon");
const illBeBackThisAfternoon = new QuestionObject("I'll be back this afternoon");
const illBeBackThisEvening = new QuestionObject("I'll be back this evening");
const illBeBackTomorrow = new QuestionObject("I'll be back tomorrow");
const illBeBackTonight = new QuestionObject("I'll be back tonight");
const illBeBackInTwoShakesOfALambsTail = new QuestionObject("I'll be back in two shakes of a lamb's tail");

export const statementsAboutUserReturningQuestionsArray = [
    holdMyCalls,
    canYouHangOn,
    letsShootTheBreezeWhenIReturn,
    bRB,
    illBeBackShortly,
    iWillBeBack,
    weCanKeepChoppingItUpLater,
    backInACoupleOfMinutes,
    weCanKeepTalkingAfterIGetBack,
    seeYouShortly,
    cantWaitToTalkMoreWhenIReturn,
    dontWorryBotIllBeBack,
    dontYouFretIllBeComingBack,
    dontYouWorryIllBeBack,
    awaitMyReturn,
    hangOn,
    calmDownIllBeBack,
    holdOnASec,
    iShallReturn,
    iWillBeBackABitLater,
    iWillReturnInABit,
    iWillReturnShortly,
    gottaGoBeBackLater,
    beBackShortly,
    backInAFlash,
    backInAMinute,
    backInJustAFewMoments,
    backInJustASecond,
    beBackALittleLater,
    canYouHangOnAMinute,
    beBackInJustABit,
    calmDownIllBeBackShortly,
    beBackSoon,
    beRightBack,
    bRBBB,
    bRBBot,
    illBeBackAfterWork,
    beBackInADash,
    obviouslyIllBeBackSoon,
    illBeBack,
    illComeBackInABit,
    illComeBackToYouInABit,
    illSwingBackAroundLater,
    imComingRightBack,
    lR,
    illBeRightBackDear,
    illBeRightBack,
    seeYaShortly,
    talkToYouSoon,
    weCanKeepChattingAfterIGetBackHome,
    letsPickUpThisConversationWhenIGetBack,
    illBeBackNextWeek,
    youSillyBotIllBeBackLater,
    illBeBackAtMidnight,
    illBeBackBeforeYouKnowIt,
    illBeBackBot,
    illBeBackInAFlash,
    illBeBackInTheMorning,
    illBRB,
    illBeBackLater,
    illBeBackAfterMyShift,
    illBeBackSoon,
    illBeBackThisAfternoon,
    illBeBackThisEvening,
    illBeBackTomorrow,
    illBeBackTonight,
    illBeBackInTwoShakesOfALambsTail
];

//48-49

const thatsAll = new QuestionObject("That's all");
const thatsAllINeeded = new QuestionObject("That's all I needed");
const thatsIt = new QuestionObject("That's it");
const done = new QuestionObject("Done");
const nothingElse = new QuestionObject("Nothing else");
const nothingElseThanks = new QuestionObject("Nothing else thanks");
const thatsItThanks = new QuestionObject("That's it thanks");
const thatsAllThankYou1 = new QuestionObject("That's all thank you");
const thatsIt_Thanks = new QuestionObject("That's it, thanks");
const thatsAll_ThankYou = new QuestionObject("That's all, thank you");
const allDoneThankYou = new QuestionObject("All done thank you");
const allGoodThanks = new QuestionObject("All good thanks");
const allGoodTy = new QuestionObject("All good ty");
const imGoodThanks = new QuestionObject("I'm good, thanks");
const imGoodThankYou = new QuestionObject("I'm good thank you");
const thatsAllINeed = new QuestionObject("That's all I need");
const thatsAllINeedThanks = new QuestionObject("That's all I need, thanks");
const thatsAllINeededThankYou = new QuestionObject("That's all I needed, thank you");
const thatsEverythingINeed = new QuestionObject("That's everything I need");
const thatsEverythingThankYou = new QuestionObject("That's everything, thank you");
const thatsEverythingThanks = new QuestionObject("That's everything, thanks");
const thatIsAllThankYou = new QuestionObject("That is all thank you");
const thatsAllThankYou = new QuestionObject("That's all thank you");
const thatsItThankYou = new QuestionObject("That's it thank you");
const allDoneThankYouBot = new QuestionObject("All done thank you bot");
const allDoneThanks = new QuestionObject("All done thanks");
const allDoneTy = new QuestionObject("All done ty");
const allGoodThankYou = new QuestionObject("All good thank you");

export const positiveEndOfConversationQuestionsArray = [
    thatsAll,
    thatsAllINeeded,
    thatsIt,
    done,
    nothingElse,
    nothingElseThanks,
    thatsItThanks,
    thatsAllThankYou1,
    thatsIt_Thanks,
    thatsAll_ThankYou,
    allDoneThankYou,
    allGoodThanks,
    allGoodTy,
    imGoodThanks,
    imGoodThankYou,
    thatsAllINeed,
    thatsAllINeedThanks,
    thatsAllINeededThankYou,
    thatsEverythingINeed,
    thatsEverythingThankYou,
    thatsEverythingThanks,
    thatIsAllThankYou,
    thatsAllThankYou,
    thatsItThankYou,
    allDoneThankYouBot,
    allDoneThanks,
    allDoneTy,
    allGoodThankYou
];

const noneOfThese = new QuestionObject("None of these");
const noneOfTheAbove = new QuestionObject("None of the above");
const somethingElse = new QuestionObject("Something else");
const other = new QuestionObject("Other");

export const somethingElseQuestionsArray = [
    noneOfThese,
    noneOfTheAbove,
    somethingElse,
    other
];