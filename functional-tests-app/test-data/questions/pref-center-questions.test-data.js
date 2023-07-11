function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

const canIChangeMyAddress = new QuestionObject("Can I change my address?");
const canIUpdateMyAddress = new QuestionObject("Can I update my address?");
const canIChangeTheAddressOnFile = new QuestionObject("Can I change the address on file?");
const canIUpdateTheAddressOnFile = new QuestionObject("Can I update the address on file?");
const howDoIChangeMyAddress = new QuestionObject("How do I change my address?");
const howDoIUpdateMyAddress = new QuestionObject("How do I update my address?");
const howDoIChangeTheAddressOnFile = new QuestionObject("How do I change the address on file?");
const howDoIUpdateTheAddressOnFile = new QuestionObject("How do I update the address on file?");
const howCanIChangeMyAddress = new QuestionObject("How can I change my address?");
const howCanIUpdateMyAddress = new QuestionObject("How can I update my address?");
const howCanIChangeTheAddressOnFile = new QuestionObject("How can I change the address on file?");
const howCanIUpdateTheAddressOnFile = new QuestionObject("How can I update the address on file?");
const iNeedToChangeMyAddress = new QuestionObject("I need to change my address");
const iNeedToUpdateMyAddress = new QuestionObject("I need to update my address");
const iNeedToChangeTheAddressOnFile = new QuestionObject("I need to change the address on file");
const iNeedToUpdateTheAddressOnFile = new QuestionObject("I need to update the address on file");
const iWantToChangeMyAddress = new QuestionObject("I want to change my address");
const iWantToUpdateMyAddress = new QuestionObject("I want to update my address");
const iWantToChangeTheAddressOnFile = new QuestionObject("I want to change the address on file");
const iWantToUpdateTheAddressOnFile = new QuestionObject("I want to update the address on file");
const canYouChangeMyAddress = new QuestionObject("Can you change my address?");
const canYouUpdateMyAddress = new QuestionObject("Can you update my address?");
const canYouChangeTheAddressOnFile = new QuestionObject("Can you change the address on file?");
const canYouUpdateTheAddressOnFile = new QuestionObject("Can you update the address on file?");
const iHaveANewAddress = new QuestionObject("I have a new address");
const iNeedToReportANewAddress = new QuestionObject("I need to report a new address");
const iNeedToReportAnAddressChange = new QuestionObject("I need to report an address change");
const reportAddressChange = new QuestionObject("Report address change");
const reportAddressUpdate = new QuestionObject("Report address update");
const changeAddress = new QuestionObject("Change address");
const updateAddress = new QuestionObject("Update address");
const addressChange = new QuestionObject("Address change");
const addressUpdate = new QuestionObject("Address update");
const changeMailingAddress = new QuestionObject("Change mailing address");
const updateMailingAddress = new QuestionObject("Update mailing address");
const changePhysicalAddress = new QuestionObject("Change physical address");
const updatePhysicalAddress = new QuestionObject("Update physical address");
const changeOfAddress = new QuestionObject("Change of address");
const newAddress = new QuestionObject("New address");
const addNewAddress = new QuestionObject("Add new address");
const updateNewAddress = new QuestionObject("Update new address");
const changeNewAddress = new QuestionObject("Change new address");
const address = new QuestionObject("Address");
const addressIsIncorrect = new QuestionObject("Address is incorrect");
const changeAddressOnFile = new QuestionObject("Change address on file");
const changeBillingAddress = new QuestionObject("Change billing address");
const helpWithChangeOfAddress = new QuestionObject("Help with change of address");
const whereWouldIUpdateMyMailingAddress = new QuestionObject("Where would I update my mailing address?");
const whereWouldIUpdateMyAddress = new QuestionObject("Where would I update my address?");
const whereWouldIUpdateMyMailingAddressOnTheMyHealthSite = new QuestionObject("Where would I update my mailing address on the My Health site?");
const whereWouldIUpdateMyAddressOnTheMyHealthSite = new QuestionObject("Where would I update my address on the My Health site?");
const whereWouldIUpdateMyMailingAddressOnMyHealthOnline = new QuestionObject("Where would I update my mailing address on MyHealth Online?");
const whereWouldIUpdateMyAddressOnMyHealthOnline = new QuestionObject("Where would I update my address on MyHealth Online?");
const whereWouldIUpdateMyAddressOnMHOL = new QuestionObject("Where would I update my address on MHOL?");
const whereWouldIUpdateMyMailingAddressOnMHOL = new QuestionObject("Where would I update my mailing address on MHOL?");
const whereCanIUpdateMyMailingAddress = new QuestionObject("Where can I update my mailing address?");
const whereCanIUpdateMyAddress = new QuestionObject("Where can I update my address?");
const whereCanIUpdateMyMailingAddressOnTheMyHealthSite = new QuestionObject("Where can I update my mailing address on the My Health site?");
const whereCanIUpdateMyAddressOnTheMyHealthSite = new QuestionObject("Where can I update my address on the My Health site?");
const whereCanIUpdateMyMailingAddressOnMyHealthOnline = new QuestionObject("Where can I update my mailing address on MyHealth Online?");
const whereCanIUpdateMyAddressOnMyHealthOnline = new QuestionObject("Where can I update my address on MyHealth Online?");
const whereCanIUpdateMyAddressOnMHOL = new QuestionObject("Where can I update my address on MHOL?");
const whereCanIUpdateMyMailingAddressOnMHOL = new QuestionObject("Where can I update my mailing address on MHOL?");
const iCantTellHowToUpdateMyAddressOnline = new QuestionObject("I can't tell how to update my address online");

export const addressQuestionsArray = [
    canIChangeMyAddress,
    canIUpdateMyAddress,
    canIChangeTheAddressOnFile,
    canIUpdateTheAddressOnFile,
    howDoIChangeMyAddress,
    howDoIUpdateMyAddress,
    howDoIChangeTheAddressOnFile,
    howDoIUpdateTheAddressOnFile,
    howCanIChangeMyAddress,
    howCanIUpdateMyAddress,
    howCanIChangeTheAddressOnFile,
    howCanIUpdateTheAddressOnFile,
    iNeedToChangeMyAddress,
    iNeedToUpdateMyAddress,
    iNeedToChangeTheAddressOnFile,
    iNeedToUpdateTheAddressOnFile,
    iWantToChangeMyAddress,
    iWantToUpdateMyAddress,
    iWantToChangeTheAddressOnFile,
    iWantToUpdateTheAddressOnFile,
    canYouChangeMyAddress,
    canYouUpdateMyAddress,
    canYouChangeTheAddressOnFile,
    canYouUpdateTheAddressOnFile,
    iHaveANewAddress,
    iNeedToReportANewAddress,
    iNeedToReportAnAddressChange,
    reportAddressChange,
    reportAddressUpdate,
    changeAddress,
    updateAddress,
    addressChange,
    addressUpdate,
    changeMailingAddress,
    updateMailingAddress,
    changePhysicalAddress,
    updatePhysicalAddress,
    changeOfAddress,
    newAddress,
    addNewAddress,
    updateNewAddress,
    changeNewAddress,
    address,
    addressIsIncorrect,
    changeAddressOnFile,
    changeBillingAddress,
    helpWithChangeOfAddress,
    whereWouldIUpdateMyMailingAddress,
    whereWouldIUpdateMyAddress,
    whereWouldIUpdateMyMailingAddressOnTheMyHealthSite,
    whereWouldIUpdateMyAddressOnTheMyHealthSite,
    whereWouldIUpdateMyMailingAddressOnMyHealthOnline,
    whereWouldIUpdateMyAddressOnMyHealthOnline,
    whereWouldIUpdateMyAddressOnMHOL,
    whereWouldIUpdateMyMailingAddressOnMHOL,
    whereCanIUpdateMyMailingAddress,
    whereCanIUpdateMyAddress,
    whereCanIUpdateMyMailingAddressOnTheMyHealthSite,
    whereCanIUpdateMyAddressOnTheMyHealthSite,
    whereCanIUpdateMyMailingAddressOnMyHealthOnline,
    whereCanIUpdateMyAddressOnMyHealthOnline,
    whereCanIUpdateMyAddressOnMHOL,
    whereCanIUpdateMyMailingAddressOnMHOL,
    iCantTellHowToUpdateMyAddressOnline
];

const whereCanIUpdateMyEmailAddress = new QuestionObject("Where can I update my email address?");
const whereCanIChangeMyEmailAddress = new QuestionObject("Where can I change my email address?");
const whereCanIChangeMyEmail = new QuestionObject("Where can I change my email?");
const whereCanIChangeMyE_Mail = new QuestionObject("Where can I change my e-mail?");
const whereCanIUpdateMyE_MailAddress = new QuestionObject("Where can I update my e-mail address?");
const whereCanIChangeMyE_MailAddress = new QuestionObject("Where can I change my e-mail address?");
const whereDoIUpdateMyEmailAddress = new QuestionObject("Where do I update my email address?");
const whereDoIChangeMyEmailAddress = new QuestionObject("Where do I change my email address?");
const whereDoIUpdateMyE_MailAddress = new QuestionObject("Where do I update my e-mail address?");
const whereDoIChangeMyE_MailAddress = new QuestionObject("Where do I change my e-mail address?");
const whereDoIUpdateMyEmail = new QuestionObject("Where do I update my email?");
const whereDoIUpdateMyE_Mail = new QuestionObject("Where do I update my e-mail?");
const whereDoIChangeMyEmail = new QuestionObject("Where do I change my email?");
const whereDoIChangeMyE_Mail = new QuestionObject("Where do I change my e-mail?");
const iNeedToUpdateMyEmailAddress = new QuestionObject("I need to update my email address");
const iNeedToChangeMyEmailAddress = new QuestionObject("I need to change my email address");
const iNeedToUpdateMyE_MailAddress = new QuestionObject("I need to update my e-mail address");
const iNeedToChangeMyE_MailAddress = new QuestionObject("I need to change my e-mail address");
const iNeedToUpdateMyEmail = new QuestionObject("I need to update my email");
const iNeedToUpdateMyE_Mail = new QuestionObject("I need to update my e-mail");
const iNeedToChangeMyEmail = new QuestionObject("I need to change my email");
const iNeedToChnageMyE_Mail = new QuestionObject("I need to change my e-mail");
const updateEmailAddress = new QuestionObject("Update email address");
const updateE_MailAddress = new QuestionObject("Update e-mail address");
const updateEmail = new QuestionObject("Update email");
const updateE_Mail = new QuestionObject("Update e-mail");
const changeEmailAddress = new QuestionObject("Change email address");
const ChangeE_MailAddress = new QuestionObject("Change e-mail address");
const changeEmail = new QuestionObject("Change email");
const changeE_Mail = new QuestionObject("Change e-mail");
const iHaveANewEmailAddress = new QuestionObject("I have a new email address");
const iHaveANewE_MailAddress = new QuestionObject("I have a new e-mail address");
const iHaveANewEmail = new QuestionObject("I have a new email");
const iHaveANewE_Mail = new QuestionObject("I have a new e-mail");
const emailAddress = new QuestionObject("Email address");
const e_MailAddress = new QuestionObject("E-mail address");
const email = new QuestionObject("Email");
const e_Mail = new QuestionObject("E-mail");
const newEmail = new QuestionObject("New email");
const newE_mail = new QuestionObject("New e-mail");

export const emailQuestionsArray = [
    whereCanIUpdateMyEmailAddress,
    whereCanIChangeMyEmailAddress,
    whereCanIChangeMyEmail,
    whereCanIChangeMyE_Mail,
    whereCanIUpdateMyE_MailAddress,
    whereCanIChangeMyE_MailAddress,
    whereDoIUpdateMyEmailAddress,
    whereDoIChangeMyEmailAddress,
    whereDoIUpdateMyE_MailAddress,
    whereDoIChangeMyE_MailAddress,
    whereDoIUpdateMyEmail,
    whereDoIUpdateMyE_Mail,
    whereDoIChangeMyEmail,
    whereDoIChangeMyE_Mail,
    iNeedToUpdateMyEmailAddress,
    iNeedToChangeMyEmailAddress,
    iNeedToUpdateMyE_MailAddress,
    iNeedToChangeMyE_MailAddress,
    iNeedToUpdateMyEmail,
    iNeedToUpdateMyE_Mail,
    iNeedToChangeMyEmail,
    iNeedToChnageMyE_Mail,
    updateEmailAddress,
    updateE_MailAddress,
    updateEmail,
    updateE_Mail,
    changeEmailAddress,
    ChangeE_MailAddress,
    changeEmail,
    changeE_Mail,
    iHaveANewEmailAddress,
    iHaveANewE_MailAddress,
    iHaveANewEmail,
    iHaveANewE_Mail,
    emailAddress,
    e_MailAddress,
    email,
    e_Mail,
    newEmail,
    newE_mail,
]

const canIUpdateMyPhoneNumber = new QuestionObject("Can I update my phone number?");
const canIUpdateMyHomePhoneNumber = new QuestionObject("Can I update my home phone number?");
const canIUpdateMyMobilePhoneNumber = new QuestionObject("Can I update my mobile phone number?");
const canIUpdateMyCellPhoneNumber = new QuestionObject("Can I update my cell phone number?");
const canIUpdateMyHomeNumber = new QuestionObject("Can I update my home number?");
const canIUpdateMyMobileNumber = new QuestionObject("Can I update my mobile number?");
const canIUpdateMyCellNumber = new QuestionObject("Can I update my cell number?");
const canIChangeMyPhoneNumber = new QuestionObject("Can I change my phone number?");
const canIChangeMyHomePhoneNumber = new QuestionObject("Can I change my home phone number?");
const canIChangeMyMobilePhoneNumber = new QuestionObject("Can I change my mobile phone number?");
const canIChangeMyCellPhoneNumber = new QuestionObject("Can I change my cell phone number?");
const canIChangeMyHomeNumber = new QuestionObject("Can I change my home number?");
const canIChangeMyMobileNumber = new QuestionObject("Can I change my mobile number?");
const canIChangeMyCellNumber = new QuestionObject("Can I change my cell number?");
const howDoIUpdateMyPhoneNumber = new QuestionObject("How do I update my phone number?");
const howDoIUpdateMyHomePhoneNumber = new QuestionObject("How do I update my home phone number?");
const howDoIUpdateMyMobilePhoneNumber = new QuestionObject("How do I update my mobile phone number?");
const howDoIUpdateMyCellPhoneNumber = new QuestionObject("How do I update my cell phone number?");
const howDoIUpdateMyHomeNumber = new QuestionObject("How do I update my home number?");
const howDoIUpdateMyMobileNumber = new QuestionObject("How do I update my mobile number?");
const howDoIUpdateMyCellNumber = new QuestionObject("How do I update my cell number?");
const howDoIChangeMyPhoneNumber = new QuestionObject("How do I change my phone number?");
const howDoIChangeMyHomePhoneNumber = new QuestionObject("How do I change my home phone number?");
const howDoIChangeMyMobilePhoneNumber = new QuestionObject("How do I change my mobile phone number?");
const howDoIChangeMyCellPhoneNumber = new QuestionObject("How do I change my cell phone number?");
const howDoIChangeMyHomeNumber = new QuestionObject("How do I change my home number?");
const howDoIChangeMyMobileNumber = new QuestionObject("How do I change my mobile number?");
const howDoIChangeMyCellNumber = new QuestionObject("How do I change my cell number?");
const whereCanIUpdateMyPhoneNumber = new QuestionObject("Where can I update my phone number?");
const whereCanIUpdateMyHomePhoneNumber = new QuestionObject("Where can I update my home phone number?");
const whereCanIUpdateMyMobilePhoneNumber = new QuestionObject("Where can I update my mobile phone number?");
const whereCanIUpdateMyCellPhoneNumber = new QuestionObject("Where can I update my cell phone number?");
const whereCanIUpdateMyHomeNumber = new QuestionObject("Where can I update my home number?");
const whereCanIUpdateMyMobileNumber = new QuestionObject("Where can I update my mobile number?");
const whereCanIUpdateMyCellNumber = new QuestionObject("Where can I update my cell number?");
const whereCanIChangeMyPhoneNumber = new QuestionObject("Where can I change my phone number?");
const whereCanIChangeMyHomePhoneNumber = new QuestionObject("Where can I change my home phone number?");
const whereCanIChangeMyMobilePhoneNumber = new QuestionObject("Where can I change my mobile phone number?");
const whereCanIChangeMyCellPhoneNumber = new QuestionObject("Where can I change my cell phone number?");
const whereCanIChangeMyHomeNumber = new QuestionObject("Where can I change my home number?");
const whereCanIChangeMyMobileNumber = new QuestionObject("Where can I change my mobile number?");
const whereCanIChangeMyCellNumber = new QuestionObject("Where can I change my cell number?");
const whereDoIUpdateMyPhoneNumber = new QuestionObject("Where do I update my phone number?");
const whereDoIUpdateMyHomePhoneNumber = new QuestionObject("Where do I update my home phone number?");
const whereDoIUpdateMyMobilePhoneNumber = new QuestionObject("Where do I update my mobile phone number?");
const whereDoIUpdateMyCellPhoneNumber = new QuestionObject("Where do I update my cell phone number?");
const whereDoIUpdateMyHomeNumber = new QuestionObject("Where do I update my home number?");
const whereDoIUpdateMyMobileNumber = new QuestionObject("Where do I update my mobile number?");
const whereDoIUpdateMyCellNumber = new QuestionObject("Where do I update my cell number?");
const whereDoIChangeMyPhoneNumber = new QuestionObject("Where do I change my phone number?");
const whereDoIChangeMyHomePhoneNumber = new QuestionObject("Where do I change my home phone number?");
const whereDoIChangeMyMobilePhoneNumber = new QuestionObject("Where do I change my mobile phone number?");
const whereDoIChangeMyCellPhoneNumber = new QuestionObject("Where do I change my cell phone number?");
const whereDoIChangeMyHomeNumber = new QuestionObject("Where do I change my home number?");
const whereDoIChangeMyMobileNumber = new QuestionObject("Where do I change my mobile number?");
const whereDoIChangeMyCellNumber = new QuestionObject("Where do I change my cell number?");
const iNeedToUpdateMyPhoneNumber = new QuestionObject("I need to update my phone number");
const iNeedToUpdateMyHomePhoneNumber = new QuestionObject("I need to update my home phone number");
const iNeedToUpdateMyMobilePhoneNumber = new QuestionObject("I need to update my mobile phone number");
const iNeedToUpdateMyCellPhoneNumber = new QuestionObject("I need to update my cell phone number");
const iNeedToUpdateMyHomeNumber = new QuestionObject("I need to update my home number");
const iNeedToUpdateMyMobileNumber = new QuestionObject("I need to update my mobile number");
const iNeedToUpdateMyCellNumber = new QuestionObject("I need to update my cell number");
const iNeedToChangeMyPhoneNumber = new QuestionObject("I need to change my phone number");
const iNeedToChangeMyHomePhoneNumber = new QuestionObject("I need to change my home phone number");
const iNeedToChangeMyMobilePhoneNumber = new QuestionObject("I need to change my mobile phone number");
const iNeedToChangeMyCellPhoneNumber = new QuestionObject("I need to change my cell phone number");
const iNeedToChangeMyHomeNumber = new QuestionObject("I need to change my home number");
const iNeedToChangeMyMobileNumber = new QuestionObject("I need to change my mobile number");
const iNeedToChangeMyCellNumber = new QuestionObject("I need to change my cell number");
const updatePhoneNumber = new QuestionObject("Update phone number");
const updateHomePhoneNumber = new QuestionObject("Update home phone number");
const updateMobilePhoneNumber = new QuestionObject("Update mobile phone number");
const updateCellPhoneNumber = new QuestionObject("Update cell phone number");
const updateHomeNumber = new QuestionObject("Update home number");
const updateMobileNumber = new QuestionObject("Update mobile number");
const updateCellNumber = new QuestionObject("Update cell number");
const changePhoneNumber = new QuestionObject("Change phone number");
const changeHomePhoneNumber = new QuestionObject("Change home phone number");
const changeMobilePhoneNumber = new QuestionObject("Change mobile phone number");
const changeCellPhoneNumber = new QuestionObject("Change cell phone number");
const changeHomeNumber = new QuestionObject("Change home number");
const changeMobileNumber = new QuestionObject("Change mobile number");
const changeCellNumber = new QuestionObject("Change cell number");
const iHaveANewPhoneNumber = new QuestionObject("I have a new phone number");
const iHaveANewHomePhoneNumber = new QuestionObject("I have a new home phone number");
const iHaveANewMobilePhoneNumber = new QuestionObject("I have a new mobile phone number");
const iHaveANewCellPhoneNumber = new QuestionObject("I have a new cell phone number");
const iHaveANewHomeNumber = new QuestionObject("I have a new home number");
const iHaveANewMobileNumber = new QuestionObject("I have a new mobile number");
const iHaveANewCellNumber = new QuestionObject("I have a new cell number");
const phoneNumber = new QuestionObject("Phone number");
const newNumber = new QuestionObject("New number");
const newPhoneNumber = new QuestionObject("New phone number");
const newPhone = new QuestionObject("New phone");

export const phoneNumberQuestionsArray = [
    canIUpdateMyPhoneNumber,
    canIUpdateMyHomePhoneNumber,
    canIUpdateMyMobilePhoneNumber,
    canIUpdateMyCellPhoneNumber,
    canIUpdateMyHomeNumber,
    canIUpdateMyMobileNumber,
    canIUpdateMyCellNumber,
    canIChangeMyPhoneNumber,
    canIChangeMyHomePhoneNumber,
    canIChangeMyMobilePhoneNumber,
    canIChangeMyCellPhoneNumber,
    canIChangeMyHomeNumber,
    canIChangeMyMobileNumber,
    canIChangeMyCellNumber,
    howDoIUpdateMyPhoneNumber,
    howDoIUpdateMyHomePhoneNumber,
    howDoIUpdateMyMobilePhoneNumber,
    howDoIUpdateMyCellPhoneNumber,
    howDoIUpdateMyHomeNumber,
    howDoIUpdateMyMobileNumber,
    howDoIUpdateMyCellNumber,
    howDoIChangeMyPhoneNumber,
    howDoIChangeMyHomePhoneNumber,
    howDoIChangeMyMobilePhoneNumber,
    howDoIChangeMyCellPhoneNumber,
    howDoIChangeMyHomeNumber,
    howDoIChangeMyMobileNumber,
    howDoIChangeMyCellNumber,
    whereCanIUpdateMyPhoneNumber,
    whereCanIUpdateMyHomePhoneNumber,
    whereCanIUpdateMyMobilePhoneNumber,
    whereCanIUpdateMyCellPhoneNumber,
    whereCanIUpdateMyHomeNumber,
    whereCanIUpdateMyMobileNumber,
    whereCanIUpdateMyCellNumber,
    whereCanIChangeMyPhoneNumber,
    whereCanIChangeMyHomePhoneNumber,
    whereCanIChangeMyMobilePhoneNumber,
    whereCanIChangeMyCellPhoneNumber,
    whereCanIChangeMyHomeNumber,
    whereCanIChangeMyMobileNumber,
    whereCanIChangeMyCellNumber,
    whereDoIUpdateMyPhoneNumber,
    whereDoIUpdateMyHomePhoneNumber,
    whereDoIUpdateMyMobilePhoneNumber,
    whereDoIUpdateMyCellPhoneNumber,
    whereDoIUpdateMyHomeNumber,
    whereDoIUpdateMyMobileNumber,
    whereDoIUpdateMyCellNumber,
    whereDoIChangeMyPhoneNumber,
    whereDoIChangeMyHomePhoneNumber,
    whereDoIChangeMyMobilePhoneNumber,
    whereDoIChangeMyCellPhoneNumber,
    whereDoIChangeMyHomeNumber,
    whereDoIChangeMyMobileNumber,
    whereDoIChangeMyCellNumber,
    iNeedToUpdateMyPhoneNumber,
    iNeedToUpdateMyHomePhoneNumber,
    iNeedToUpdateMyMobilePhoneNumber,
    iNeedToUpdateMyCellPhoneNumber,
    iNeedToUpdateMyHomeNumber,
    iNeedToUpdateMyMobileNumber,
    iNeedToUpdateMyCellNumber,
    iNeedToChangeMyPhoneNumber,
    iNeedToChangeMyHomePhoneNumber,
    iNeedToChangeMyMobilePhoneNumber,
    iNeedToChangeMyCellPhoneNumber,
    iNeedToChangeMyHomeNumber,
    iNeedToChangeMyMobileNumber,
    iNeedToChangeMyCellNumber,
    updatePhoneNumber,
    updateHomePhoneNumber,
    updateMobilePhoneNumber,
    updateCellPhoneNumber,
    updateHomeNumber,
    updateMobileNumber,
    updateCellNumber,
    changePhoneNumber,
    changeHomePhoneNumber,
    changeMobilePhoneNumber,
    changeCellPhoneNumber,
    changeHomeNumber,
    changeMobileNumber,
    changeCellNumber,
    iHaveANewPhoneNumber,
    iHaveANewHomePhoneNumber,
    iHaveANewMobilePhoneNumber,
    iHaveANewCellPhoneNumber,
    iHaveANewHomeNumber,
    iHaveANewMobileNumber,
    iHaveANewCellNumber,
    phoneNumber,
    newNumber,
    newPhoneNumber,
    newPhone,
]

const goPaperLess = new QuestionObject("Go paperless");
const iWantToGoPaperLess = new QuestionObject("I want to go paperless");
const switchToPaperLess = new QuestionObject("Switch to paperless");
const iWantToSwitchToPaperLess = new QuestionObject("I want to switch to paperless");
const howCanISwitchToPaperLess = new QuestionObject("How can I switch to paperless?");
const howDoISwitchToPaperLess = new QuestionObject("How do I switch to paperless?");
const howDoIOptInToPaperless = new QuestionObject("How do I opt in to paperless?");
const howDoIOptInForPaperless = new QuestionObject("How do I opt in for paperless?");
const stopMail = new QuestionObject("Stop mail");
const stopPaperMail = new QuestionObject("Stop paper mail");
const stopSnailMail = new QuestionObject("Stop snail mail");
const endMail = new QuestionObject("End mail");
const turnOffMail = new QuestionObject("Turn off mail");
const turnOffMailings = new QuestionObject("Turn off mailings");
const paperlessEobs = new QuestionObject("Paperless EOBs");
const paperlessExplanationOfBenefits = new QuestionObject("Paperless explanation of benefits");
const iDontWantToReceiveMail = new QuestionObject("I don't want to receive mail");
const stopSendingMeMail = new QuestionObject("Stop sending me mail");
const stopSendingMail = new QuestionObject("Stop sending mail");
const tooMuchMail = new QuestionObject("Too much mail");
const tooMuchPaper = new QuestionObject("Too much paper");
const communicationPreferences = new QuestionObject("Communication preferences");
const paperlessCommunication = new QuestionObject("Paperless communication");
const sendInformationByMail = new QuestionObject("Send information by mail");
const sendInformationByPostalService = new QuestionObject("Send information by postal service");
const noEmails = new QuestionObject("No emails");
const noEmail = new QuestionObject("No email");
const stopSendingMeEmail = new QuestionObject("Stop sending me email");
const tooManyEmails = new QuestionObject("Too many emails");
const howCanIGoPaperless = new QuestionObject("How can I go paperless?");

export const paperlessCommunicationsQuestionsArray = [
    goPaperLess,
    iWantToGoPaperLess,
    switchToPaperLess,
    iWantToSwitchToPaperLess,
    howCanISwitchToPaperLess,
    howDoISwitchToPaperLess,
    howDoIOptInToPaperless,
    howDoIOptInForPaperless,
    stopMail,
    stopPaperMail,
    stopSnailMail,
    endMail,
    turnOffMail,
    turnOffMailings,
    paperlessEobs,
    paperlessExplanationOfBenefits,
    iDontWantToReceiveMail,
    stopSendingMeMail,
    stopSendingMail,
    tooMuchMail,
    tooMuchPaper,
    communicationPreferences,
    paperlessCommunication,
    sendInformationByMail,
    sendInformationByPostalService,
    noEmails,
    noEmail,
    stopSendingMeEmail,
    tooManyEmails,
    howCanIGoPaperless,
]

const iNeedToChangeMyName = new QuestionObject("I need to change my name.");
const iNeedToUpdateMyName = new QuestionObject("I need to update my name.");
const howDoIChangeMyName = new QuestionObject("How do I change my name?");
const howDoIUpdateMyName = new QuestionObject("How do I update my name?");
const whereCanIChangeMyName = new QuestionObject("Where can I change my name?");
const whereCanIUpdateMyName = new QuestionObject("Where can I update my name?");
const iWouldLikeToAddMyPreferredName = new QuestionObject("I would like to add my preferred name");
const iWouldLikeToProvideAPreferredName = new QuestionObject("I would like to provide a preferred name");
const canYouUpdateMyName = new QuestionObject("Can you update my name?");
const canYouChangeMyName = new QuestionObject("Can you change my name?");
const iWantToUpdateMyName = new QuestionObject("I want to update my name");
const iWantToChangeMyName = new QuestionObject("I want to change my name");
const iHaveANewName = new QuestionObject("I have a new name");
const iHaveANameChangeToReport = new QuestionObject("I have a name change to report");
const iChangedMyName = new QuestionObject("I changed my name");
const iHaveToUpdateMyName = new QuestionObject("I have to update my name");
const iHaveToChangeMyName = new QuestionObject("I have to change my name");
const canIChangeMyName = new QuestionObject("Can I change my name?");
const canIUpdateMyName = new QuestionObject("Can I update my name?");

export const preferredNameQuestionsArray = [
    iNeedToChangeMyName,
    iNeedToUpdateMyName,
    howDoIChangeMyName,
    howDoIUpdateMyName,
    whereCanIChangeMyName,
    whereCanIUpdateMyName,
    iWouldLikeToAddMyPreferredName,
    iWouldLikeToProvideAPreferredName,
    canYouUpdateMyName,
    canYouChangeMyName,
    iWantToUpdateMyName,
    iWantToChangeMyName,
    iHaveANewName,
    iHaveANameChangeToReport,
    iChangedMyName,
    iHaveToUpdateMyName,
    iHaveToChangeMyName,
    canIChangeMyName,
    canIUpdateMyName
];

const iWouldLikeToUpdateMyPronouns = new QuestionObject("I would like to update my pronouns.");
const iWouldLikeToUpdateMyPreferredPronouns = new QuestionObject("I would like to update my preferred pronouns.");
const iWouldLikeToChangeMyPronouns = new QuestionObject("I would like to change my pronouns.");
const iWouldLikeToChangeMyPreferredPronouns = new QuestionObject("I would like to change my preferred pronouns.");
const iWouldLikeToChangeMyPronounsOnFile = new QuestionObject("I would like to change my pronouns on file.");
const iWantToUpdateMyPronouns = new QuestionObject("I want to update my pronouns.");
const iWantToUpdateMyPreferredPronouns = new QuestionObject("I want to update my preferred pronouns.");
const iNeedToChangeMyPronouns = new QuestionObject("I need to change my pronouns.");
const iNeedToUpdateMyPronouns = new QuestionObject("I need to update my pronouns.");
const canIChangeMyPronouns = new QuestionObject("Can I change my pronouns?");
const canIUpdateMyPronouns = new QuestionObject("Can I update my pronouns?");
const iHaveDifferentPronouns = new QuestionObject("I have different pronouns.");
const iHaveDifferentPronounsThanWhatIsOnFile = new QuestionObject("I have different pronouns than what is on file.");
const howDoIChangeMyPronouns = new QuestionObject("How do I change my pronouns?");
const howDoIUpdateMyPronouns = new QuestionObject("How do I update my pronouns?");
const whereDoIChangeMyPronouns = new QuestionObject("Where do I change my pronouns?");
const whereDoIUpdateMyPronouns = new QuestionObject("Where do I update my pronouns?");
const iWouldLikeToUpdateMyChildsPronouns = new QuestionObject("I would like to update my child's pronouns.");
const iWouldLikeToProvideMyPreferredPronouns = new QuestionObject("I would like to provide my preferred pronouns.");
const iWouldLikeToUpdateMyChildsPreferredPronouns = new QuestionObject("I would like to update my child's preferred pronouns.");
const iWouldLikeToChangeMyChildsPronouns = new QuestionObject("I would like to change my child's pronouns.");
const iWantToUpdateMyChildsPronouns = new QuestionObject("I want to update my child's pronouns.");
const iWantToChangeMyChildsPronouns = new QuestionObject("I want to change my child's pronouns.");
const canIChangeMyChildsPronouns = new QuestionObject("Can I change my child's pronouns?");
const canIChangeMyChildsPreferredPronouns = new QuestionObject("Can I change my child's preferred pronouns?");
const myChildHasDifferentPronouns = new QuestionObject("My child has different pronouns.");
const whereDoIChangeMyChildsPronouns = new QuestionObject("Where do I change my child's pronouns?");
const whereDoIUpdateMyChildsPronouns = new QuestionObject("Where do I update my child's pronouns?");

export const preferredPronounsQuestionsArray = [
    iWouldLikeToUpdateMyPronouns,
    iWouldLikeToUpdateMyPreferredPronouns,
    iWouldLikeToChangeMyPronouns,
    iWouldLikeToChangeMyPreferredPronouns,
    iWouldLikeToChangeMyPronounsOnFile,
    iWantToUpdateMyPronouns,
    iWantToUpdateMyPreferredPronouns,
    iNeedToChangeMyPronouns,
    iNeedToUpdateMyPronouns,
    canIChangeMyPronouns,
    canIUpdateMyPronouns,
    iHaveDifferentPronouns,
    iHaveDifferentPronounsThanWhatIsOnFile,
    howDoIChangeMyPronouns,
    howDoIUpdateMyPronouns,
    whereDoIChangeMyPronouns,
    whereDoIUpdateMyPronouns,
    iWouldLikeToUpdateMyChildsPronouns,
    iWouldLikeToProvideMyPreferredPronouns,
    iWouldLikeToUpdateMyChildsPreferredPronouns,
    iWouldLikeToChangeMyChildsPronouns,
    iWantToUpdateMyChildsPronouns,
    iWantToChangeMyChildsPronouns,
    canIChangeMyChildsPronouns,
    canIChangeMyChildsPreferredPronouns,
    myChildHasDifferentPronouns,
    whereDoIChangeMyChildsPronouns,
    whereDoIUpdateMyChildsPronouns
];

export const preferredName = new QuestionObject("AutomationTest");
export const cancel = new QuestionObject("Cancel");
export const notListedPronouns = ("Test/Test");