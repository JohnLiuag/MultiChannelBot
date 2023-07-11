function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

const whatIsMyBinNumber = new QuestionObject("What is my BIN number?");
const whatIsMyBin = new QuestionObject("What is my BIN?");
const whatIsBinNumber = new QuestionObject("What is BIN number?");
const whatIsBin = new QuestionObject("What is BIN?");
const whatIsMyPcn = new QuestionObject("What is my PCN?");
const whatIsMyPcnNumber = new QuestionObject("What is my PCN number?");
const whatIsPcn = new QuestionObject("What is PCN?");
const whatIsMyPharmacyGroupNumber = new QuestionObject("What is my pharmacy group number?");
const whatIsMyRxGroupNumber = new QuestionObject("What is my rx group number?");
const whatIsMyRxGroup = new QuestionObject("What is my rx group?");
const whatIsMyPharmacyProcessingInformation = new QuestionObject("What is my pharmacy processing information?");
const whatIsMyRxProcessingInformation = new QuestionObject("What is my rx processing information?");
const iNeedMyBin = new QuestionObject("I need my BIN");
const iNeedMyPcn = new QuestionObject("I need my PCN");
const iNeedMyRxGroup = new QuestionObject("I need my Rx Group");
const iNeedMyPharmacyGroup = new QuestionObject("I need my pharmacy group");
const myPharmacistNeedsABin = new QuestionObject("My pharmacist needs a BIN");
const myPharmacistNeedsAPCN = new QuestionObject("My pharmacist needs a PCN");
const myPharmacistNeedsAGroupNumber = new QuestionObject("My pharmacist needs a group number");
const myPharmacistNeedsAnRxGroup = new QuestionObject("My pharmacist needs an rx group");
const myPharmacyNeedsABin = new QuestionObject("My pharmacy needs a BIN");
const myPharmacyNeedsAPCN = new QuestionObject("My pharmacy needs a PCN");
const myPharmacyNeedsAGroupNumber = new QuestionObject("My pharmacy needs a group number");
const myPharmacyNeedsAnRxGroup = new QuestionObject("My pharmacy needs an rx group");
const rxBin = new QuestionObject("RxBIN");
const rx_Bin = new QuestionObject("RX BIN");
const bin = new QuestionObject("BIN");
const pcn = new QuestionObject("PCN");
const rx_Pcn = new QuestionObject("RX PCN");
const rxPcn = new QuestionObject("RXPCN");
const rx_Group = new QuestionObject("RX GROUP");
const rxGroup = new QuestionObject("RXGROUP");


export const pharmacyQuestionsArray = [
    whatIsMyBinNumber,
    whatIsMyBin,
    whatIsBinNumber,
    whatIsBin,
    whatIsMyPcn,
    whatIsMyPcnNumber,
    whatIsPcn,
    whatIsMyPharmacyGroupNumber,
    whatIsMyRxGroupNumber,
    whatIsMyRxGroup,
    whatIsMyPharmacyProcessingInformation,
    whatIsMyRxProcessingInformation,
    iNeedMyBin,
    iNeedMyPcn,
    iNeedMyRxGroup,
    iNeedMyPharmacyGroup,
    myPharmacistNeedsABin,
    myPharmacistNeedsAPCN,
    myPharmacistNeedsAGroupNumber,
    myPharmacistNeedsAnRxGroup,
    myPharmacyNeedsABin,
    myPharmacyNeedsAPCN,
    myPharmacyNeedsAGroupNumber,
    myPharmacyNeedsAnRxGroup,
    rxBin,
    rx_Bin,
    bin,
    pcn,
    rx_Pcn,
    rxPcn,
    rx_Group,
    rxGroup,
];
