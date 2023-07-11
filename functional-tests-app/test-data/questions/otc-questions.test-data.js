function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

const whereIsTheOTCCatalog = new QuestionObject("Where is the OTC catalog?");
const whereCanIFindTheOTCCatalog = new QuestionObject("Where can I find the OTC catalog?");
const iNeedTheOTCCatalog = new QuestionObject("I need the OTC catalog");
const iNeedAnOTCCatalog = new QuestionObject("I need an OTC catalog");
const sendMeOTCCatalog = new QuestionObject("Send me OTC catalog");
const sendMeAnOTCCatalog = new QuestionObject("Send me an OTC catalog");
const canISeeTheOTCCatalog = new QuestionObject("Can I see the OTC catalog?");
const whereCanISeeTheOTCCatalog = new QuestionObject("Where can I see the OTC catalog?");
const whereDoIFindTheOTCCatalog = new QuestionObject("Where do I find the OTC catalog?");
const howDoIPlaceAnOTCOrder = new QuestionObject("How do I place an OTC order?");
const howDoIOrderOTCItems = new QuestionObject("How do I order OTC items?");
const oTCCatalog = new QuestionObject("OTC catalog");
const oTCOrder = new QuestionObject("OTC order");
const orderOTCItems = new QuestionObject("Order OTC items");
const placeOTCOrder = new QuestionObject("Place OTC order");
const oTCWebsite = new QuestionObject("OTC website");
const uPMCForLifeOTCWebsite = new QuestionObject("UPMC for Life OTC website");
const uPMCForLifeOTCCatalog = new QuestionObject("UPMC for Life OTC catalog");
const catalog = new QuestionObject("Catalog");
const onlineOTCOrdering = new QuestionObject("Online OTC ordering");
const onlineOTCOrder = new QuestionObject("Online OTC order");
const onlineOTCCatalog = new QuestionObject("Online OTC catalog");
const canIGetAListOfOTCProducts = new QuestionObject("Can I get a list of OTC products");
const listOfOTCProducts = new QuestionObject("List of OTC products");
const listOfOTCItems = new QuestionObject("List of OTC items");
const listOfCoveredOTCProducts = new QuestionObject("List of covered OTC products");
const listOfSpecificOTCItems = new QuestionObject("List of specific OTC items");
const coveredOTCProducts = new QuestionObject("Covered OTC products");
const listOfProductsThatAreCoveredWithOTC = new QuestionObject("List of products that are covered with OTC");
const accessTheOTCCatalog = new QuestionObject("Access the OTC catalog");
const accessTheOTCSite = new QuestionObject("Access the OTC site");
const accessTheOTCWebsite = new QuestionObject("Access the OTC website");
const iAmLookingForTheOTCCatalog = new QuestionObject("I am looking for the OTC catalog");
const iAmLookingForTheOTCWebsite = new QuestionObject("I am looking for the OTC website");
const lookingForTheOTCCatalog = new QuestionObject("Looking for the OTC catalog");
const lookingForTheOTCWebsite = new QuestionObject("Looking for the OTC website");
const lookingForOTC = new QuestionObject("Looking for OTC");
const iAmLookingForTheOTCSite = new QuestionObject("I am looking for the OTC site");
const orderOTCOnline = new QuestionObject("Order OTC online");
const oTCBenefit = new QuestionObject("OTC benefit");
const oTCInfo = new QuestionObject("OTC info");
const oTCInformation = new QuestionObject("OTC information");
const oTC = new QuestionObject("OTC");
const oTCWebSite = new QuestionObject("OTC web site");
const overTheCounterItems = new QuestionObject("Over the counter items");
const overTheCounterProducts = new QuestionObject("Over the counter products");
const overTheCounterOrder = new QuestionObject("Over the counter order");
const overTheCounterSite = new QuestionObject("Over the counter site");
const overTheCounterWebsite = new QuestionObject("Over the counter website");

export const otcQuestionsArray = [
    whereIsTheOTCCatalog,
    whereCanIFindTheOTCCatalog,
    iNeedTheOTCCatalog,
    iNeedAnOTCCatalog,
    sendMeOTCCatalog,
    sendMeAnOTCCatalog,
    canISeeTheOTCCatalog,
    whereCanISeeTheOTCCatalog,
    whereDoIFindTheOTCCatalog,
    howDoIPlaceAnOTCOrder,
    howDoIOrderOTCItems,
    oTCCatalog,
    oTCOrder,
    orderOTCItems,
    placeOTCOrder,
    oTCWebsite,
    uPMCForLifeOTCWebsite,
    uPMCForLifeOTCCatalog,
    catalog,
    onlineOTCOrdering,
    onlineOTCOrder,
    onlineOTCCatalog,
    canIGetAListOfOTCProducts,
    listOfOTCProducts,
    listOfOTCItems,
    listOfCoveredOTCProducts,
    listOfSpecificOTCItems,
    coveredOTCProducts,
    listOfProductsThatAreCoveredWithOTC,
    accessTheOTCCatalog,
    accessTheOTCSite,
    accessTheOTCWebsite,
    iAmLookingForTheOTCCatalog,
    iAmLookingForTheOTCWebsite,
    lookingForTheOTCCatalog,
    lookingForTheOTCWebsite,
    lookingForOTC,
    iAmLookingForTheOTCSite,
    orderOTCOnline,
    oTCBenefit,
    oTCInfo,
    oTCInformation,
    oTC,
    oTCWebSite,
    overTheCounterItems,
    overTheCounterProducts,
    overTheCounterOrder,
    overTheCounterSite,
    overTheCounterWebsite
];