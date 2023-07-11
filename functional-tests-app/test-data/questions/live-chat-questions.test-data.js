function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

export const agent = new QuestionObject("Agent");
const representative = new QuestionObject("Representative");
const rep = new QuestionObject("Rep");
const liveRep = new QuestionObject("Live rep");
const concierge = new QuestionObject("Concierge");
const help = new QuestionObject("Help");
const human = new QuestionObject("Human");
const person = new QuestionObject("Person");
const realPerson = new QuestionObject("Real person");
const escalate = new QuestionObject("Escalate");
export const escalation = new QuestionObject("Escalation");
const iDontUnderstand = new QuestionObject("I don't understand");
const iNeedSomethingElse = new QuestionObject("I need something else");
export const iNeedAssistance = new QuestionObject("I need assistance");
const iNeedMoreHelp = new QuestionObject("I need more help");
const iNeedToTalkToSomeone = new QuestionObject("I need to talk to someone");
const iNeedToSpeakToSomeone = new QuestionObject("I need to speak to someone");
const memberServices = new QuestionObject("Member Services");
const memberService = new QuestionObject("Member Service");
const customerService = new QuestionObject("Customer Service");
const liveChat = new QuestionObject("Live Chat");
const transfer = new QuestionObject("transfer");
const noRobot = new QuestionObject("No robot");
const canITalkToMemberServices = new QuestionObject("Can I talk to Member Services");
const canITalkToMemberService = new QuestionObject("Can I talk to Member Service");
const canITalkToCustomerServices = new QuestionObject("Can I talk to Customer Service");
const canITalkToLiveChat = new QuestionObject("Can I talk to Live Chat");
const canITalkToTransfer = new QuestionObject("Can I talk to transfer");
const canITalkToNoRobot = new QuestionObject("Can I talk to no robot");
const canIChatWithMemberServices = new QuestionObject("Can I chat with Member Services");
const canIChatWithMemberService = new QuestionObject("Can I chat with Member Service");
const canIChatWithCustomerService = new QuestionObject("Can I chat with Customer Service");
const canIChatWithLiveChat = new QuestionObject("Can I chat with Live Chat");
const canIChatWithTransfer = new QuestionObject("Can I chat with transfer");
const canIChatWithNoRobot = new QuestionObject("Can I chat with no robot");
const transferToMemberServices = new QuestionObject("Transfer to Member Services");
const transferToMemberService = new QuestionObject("Transfer to Member Service");
const transferToCustomerServices = new QuestionObject("Transfer to Customer Service");
const transferToLiveChat = new QuestionObject("Transfer to Live Chat");
const transferToNoRobot = new QuestionObject("Transfer to no robot");
const canISpeakToMemberServices = new QuestionObject("Can I speak to Member Services");
const canISpeakToMemberService = new QuestionObject("Can I speak to Member Service");
const canISpeakToCustomerServices = new QuestionObject("Can I speak to Customer Service");
const canISpeakToLiveChat = new QuestionObject("Can I speak to Live Chat");
const canISpeakToTransfer = new QuestionObject("Can I speak to transfer");
const canISpeakToNoRobot = new QuestionObject("Can I speak to no robot");
const iDontWantToSpeakToARobot = new QuestionObject("I don't want to speak to a robot");
const iDontWantToTalkToARobot = new QuestionObject("I don't want to talk to a robot");
const operator = new QuestionObject("Operator");
const healthCoach = new QuestionObject("Health Coach");
const healthCoaching = new QuestionObject("Health Coaching");
const authorization = new QuestionObject("Authorization");
const connectMeToAPerson = new QuestionObject("connect me to a person");
const callMe = new QuestionObject("Call me");
const iDontUnderstandWhatYoureTalkingAbout = new QuestionObject("I don't understand what you're talking about");
const explainYourself = new QuestionObject("Explain yourself");
const youreNoMakingAnySense = new QuestionObject("You're no making any sense");
const sayWhat = new QuestionObject("Say what?");
const umm = new QuestionObject("Umm");
const thatDidNotMakeAnySense = new QuestionObject("That did not make any sense");
const imNotFollowing = new QuestionObject("I'm not following");
const imLost = new QuestionObject("I'm lost");
const imConfused = new QuestionObject("I'm confused");
const startMakingSense = new QuestionObject("Start making sense");
const imVeryConfused = new QuestionObject("I'm very confused");
const imSuperConfused = new QuestionObject("I'm super confused");
const imSoConfusedRightNow = new QuestionObject("I'm so confused right now");
const imSoConfused = new QuestionObject("I'm so confused");
const iDontUnderstandWhatYoureTryingToSay = new QuestionObject("I don't understand what you're trying to say");
const iDontUnderstandWhatYouMean = new QuestionObject("I don't understand what you mean");
const iDontThinkIKnowWhatYoureTalkingAbout = new QuestionObject("I don't think I know what you're talking about");
const iDontGetIt = new QuestionObject("I don't get it");
const iDontFollow = new QuestionObject("I don't follow");
const iDoNotUnderstand = new QuestionObject("I do not understand");
const iAmVeryConfused = new QuestionObject("I am very confused");
const iAmSuperConfused = new QuestionObject("I am super confused");
const iHaveNoIdeaWhatYoureTalkingAbout = new QuestionObject("I have no idea what you're talking about");
const weAreNotOnTheSamePage = new QuestionObject("We are not on the same page");
const youreNotMakingSense = new QuestionObject("You're not making sense");
const youreNotMakingAnySenseToMe = new QuestionObject("You're not making any sense to me");
const youreConfusingMe = new QuestionObject("You're confusing me");
const youMadeNoSense = new QuestionObject("You made no sense");
const youAreNotMakingSense = new QuestionObject("You are not making sense");
const youAreNotMakingAnySenseToMe = new QuestionObject("You are not making any sense to me");
const youAreNotMakingAnySense = new QuestionObject("You are not making any sense");
const youAreConfusing = new QuestionObject("You are confusing");
const youveLostMe = new QuestionObject("You've lost me");
const tryToMakeSomeSense = new QuestionObject("Try to make some sense");
const thatWasConfusing = new QuestionObject("That was confusing");
const thatMadeNoSense = new QuestionObject("That made no sense");
const thatDoesntMakeSense = new QuestionObject("That doesn't make sense");
const thatDoesntMakeAnySense = new QuestionObject("That doesn't make any sense");
const thatDidntMakeSense = new QuestionObject("That didn't make sense");
const thatDidntMakeAnySense = new QuestionObject("That didn't make any sense");
const youAreConfusingMe = new QuestionObject("You are confusing me");
const speakWithAssociate = new QuestionObject("Speak with associate");
const agen = new QuestionObject("Agen");
const agnet = new QuestionObject("Agnet");
const wtfDoesThatMean = new QuestionObject("WTF does that mean");

export const livechatQuestionsArray = [
    agent,
    representative,
    rep,
    liveRep,
    concierge,
    help,
    human,
    person,
    realPerson,
    escalate,
    escalation,
    iDontUnderstand,
    iNeedSomethingElse,
    iNeedAssistance,
    iNeedMoreHelp,
    iNeedToTalkToSomeone,
    iNeedToSpeakToSomeone,
    memberServices,
    memberService,
    customerService,
    liveChat,
    transfer,
    noRobot,
    canITalkToMemberServices,
    canITalkToMemberService,
    canITalkToCustomerServices,
    canITalkToLiveChat,
    canITalkToTransfer,
    canITalkToNoRobot,
    canIChatWithMemberServices,
    canIChatWithMemberService,
    canIChatWithCustomerService,
    canIChatWithLiveChat,
    canIChatWithTransfer,
    canIChatWithNoRobot,
    transferToMemberServices,
    transferToMemberService,
    transferToCustomerServices,
    transferToLiveChat,
    transferToNoRobot,
    canISpeakToMemberServices,
    canISpeakToMemberService,
    canISpeakToCustomerServices,
    canISpeakToLiveChat,
    canISpeakToTransfer,
    canISpeakToNoRobot,
    iDontWantToSpeakToARobot,
    iDontWantToTalkToARobot,
    operator,
    healthCoach,
    healthCoaching,
    authorization,
    connectMeToAPerson,
    callMe,
    iDontUnderstandWhatYoureTalkingAbout,
    explainYourself,
    youreNoMakingAnySense,
    sayWhat,
    umm,
    thatDidNotMakeAnySense,
    imNotFollowing,
    imLost,
    imConfused,
    startMakingSense,
    imVeryConfused,
    imSuperConfused,
    imSoConfusedRightNow,
    imSoConfused,
    iDontUnderstandWhatYoureTryingToSay,
    iDontUnderstandWhatYouMean,
    iDontThinkIKnowWhatYoureTalkingAbout,
    iDontGetIt,
    iDontFollow,
    iDoNotUnderstand,
    iAmVeryConfused,
    iAmSuperConfused,
    iHaveNoIdeaWhatYoureTalkingAbout,
    weAreNotOnTheSamePage,
    youreNotMakingSense,
    youreNotMakingAnySenseToMe,
    youreConfusingMe,
    youMadeNoSense,
    youAreNotMakingSense,
    youAreNotMakingAnySenseToMe,
    youAreNotMakingAnySense,
    youAreConfusing,
    youveLostMe,
    tryToMakeSomeSense,
    thatWasConfusing,
    thatMadeNoSense,
    thatDoesntMakeSense,
    thatDoesntMakeAnySense,
    thatDidntMakeSense,
    thatDidntMakeAnySense,
    youAreConfusingMe,
    speakWithAssociate,
    agen,
    agnet,
    wtfDoesThatMean
];

export const isMyCoverageActive = new QuestionObject("Is my coverage active?");
export const menu = new QuestionObject("menu");