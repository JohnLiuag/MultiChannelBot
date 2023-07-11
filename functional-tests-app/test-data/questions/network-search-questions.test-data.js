function QuestionObject (questionText) {
    this.locale = "en-EN";
    this.type = "message";
    this.from = {
        "id": ""
    };
    this.text = questionText;
}

const isMyDoctorPartipating = new QuestionObject("Is my doctor partipating?");
const isMyProviderParticipating = new QuestionObject("Is my provider participating?");
const isMyDoctorInNetwork = new QuestionObject("Is my doctor in network?");
const isMyDoctorPartipicapting = new QuestionObject("Is my doctor partipicapting?");
const isMyFacilityInNetwork = new QuestionObject("Is my facility in network?");
const isMyFacilityPartipicapting = new QuestionObject("Is my facility partipicapting?");
const isMyHospitalInNetwork = new QuestionObject("Is my hospital in network?");
const isMyHospitalPartipicapting = new QuestionObject("Is my hospital partipicapting?");
const whereCanIFindInNetworkDoctors = new QuestionObject("Where can I find in network doctors?");
const whereCanIFindParticipatingDoctors = new QuestionObject("Where can I find participating doctors?");
const whereCanIFindInNetworkProviders = new QuestionObject("Where can I find in network providers?");
const whereCanIFindParticipatingProviders = new QuestionObject("Where can I find participating providers?");
const whereCanIFindInNetworkFacilities = new QuestionObject("Where can I find in network facilities?");
const whereCanIFindParticipatingFacilities = new QuestionObject("Where can I find participating facilities?");
const whereCanIFindInNetworkHospitals = new QuestionObject("Where can I find in network hospitals?");
const whereCanIFindParticipatingHospitals = new QuestionObject("Where can I find participating hospitals?");
const howDoIFindInNetworkDoctors = new QuestionObject("How do I find in network doctors?");
const howDoIFindInNetworkProviders = new QuestionObject("How do I find in network providers?");
const howDoIFindInNetworkFacilities = new QuestionObject("How do I find in network facilities?");
const howDoIFindInNetworkHospitals = new QuestionObject("How do I find in network hospitals?");
const howDoIFindParticipatingDoctors = new QuestionObject("How do I find participating doctors?");
const howDoIFindParticipatingProviders = new QuestionObject("How do I find participating providers?");
const howDoIFindParticipatingFacilities = new QuestionObject("How do I find participating facilities?");
const howDoIFindParticipatingHospitals = new QuestionObject("How do I find participating hospitals?");
const whereDoIFindInNetworkDoctors = new QuestionObject("Where do I find in network doctors?");
const whereDoIFindInNetworkProviders = new QuestionObject("Where do I find in network providers?");
const whereDoIFindParticipatingDoctors = new QuestionObject("Where do I find participating doctors?");
const whereDoIFindParticipatingProviders = new QuestionObject("Where do I find participating providers?");
const whereDoIFindADoctor = new QuestionObject("Where do I find a doctor?");
const whereCanIFindADoctor = new QuestionObject("Where can I find a doctor?");
const whereDoIFindAProvider = new QuestionObject("Where do I find a provider?");
const whereCanIFindAProvider = new QuestionObject("Where can I find a provider?");
const iNeedADoctor = new QuestionObject("I need a doctor.");
const iNeedToFindADoctor = new QuestionObject("I need to find a doctor.");
const imLookingForADoctor = new QuestionObject("I'm looking for a doctor.");
const imLookingForANewDoctor = new QuestionObject("I'm looking for a new doctor.");
const imLookingForANewProvider = new QuestionObject("I'm looking for a new provider.");
const imLookingForANewSpecialist = new QuestionObject("I'm looking for a new specialist.");
const iNeedToFindADermatologist = new QuestionObject("I need to find a dermatologist.");
const iNeedToFindACardiologist = new QuestionObject("I need to find a cardiologist.");
const iNeedToFindAnAllergySpecialist = new QuestionObject("I need to find an allergy specialist.");
const iNeedToFindAnOrthopedicSpecialist = new QuestionObject("I need to find an orthopedic specialist.");
const iNeedToFindAGastroenterologist = new QuestionObject("I need to find a gastroenterologist.");
const iNeedToFindAnEndocrinologist = new QuestionObject("I need to find an endocrinologist.");
const iNeedToFindAHematologist = new QuestionObject("I need to find a hematologist.");
const iNeedToFindAnOncologist = new QuestionObject("I need to find an oncologist.");
const iNeedToFindANephrologist = new QuestionObject("I need to find a nephrologist.");
const iNeedToFindAnOphthalmologist = new QuestionObject("I need to find an ophthalmologist.");
const iNeedToFindAnOtolaryngologist = new QuestionObject("I need to find an otolaryngologist.");
const iNeedToFindAnENT = new QuestionObject("I need to find an ENT?");
const iNeedToFindARheumatologist = new QuestionObject("I need to find a rheumatologist.");
const iNeedToFindAUrologist = new QuestionObject("I need to find a urologist.");
const lookingForADentist = new QuestionObject("Looking for a dentist");
const dentist = new QuestionObject("Dentist");
const dentalProvider = new QuestionObject("Dental provider");
const findCare = new QuestionObject("Find care");
const footDoctor = new QuestionObject("Foot doctor");
const inNetworkDrs = new QuestionObject("In network drs");
const drs = new QuestionObject("Drs");
const iNeedADr = new QuestionObject("I need a dr");
const networkCovereage = new QuestionObject("Network coverage");

export const networkSearchQuestionsArray = [
    isMyDoctorPartipating,
    isMyProviderParticipating,
    isMyDoctorInNetwork,
    isMyDoctorPartipicapting,
    isMyFacilityInNetwork,
    isMyFacilityPartipicapting,
    isMyHospitalInNetwork,
    isMyHospitalPartipicapting,
    whereCanIFindInNetworkDoctors,
    whereCanIFindParticipatingDoctors,
    whereCanIFindInNetworkProviders,
    whereCanIFindParticipatingProviders,
    whereCanIFindInNetworkFacilities,
    whereCanIFindParticipatingFacilities,
    whereCanIFindInNetworkHospitals,
    whereCanIFindParticipatingHospitals,
    howDoIFindInNetworkDoctors,
    howDoIFindInNetworkProviders,
    howDoIFindInNetworkFacilities,
    howDoIFindInNetworkHospitals,
    howDoIFindParticipatingDoctors,
    howDoIFindParticipatingProviders,
    howDoIFindParticipatingFacilities,
    howDoIFindParticipatingHospitals,
    whereDoIFindInNetworkDoctors,
    whereDoIFindInNetworkProviders,
    whereDoIFindParticipatingDoctors,
    whereDoIFindParticipatingProviders,
    whereDoIFindADoctor,
    whereCanIFindADoctor,
    whereDoIFindAProvider,
    whereCanIFindAProvider,
    iNeedADoctor,
    iNeedToFindADoctor,
    imLookingForADoctor,
    imLookingForANewDoctor,
    imLookingForANewProvider,
    imLookingForANewSpecialist,
    iNeedToFindADermatologist,
    iNeedToFindACardiologist,
    iNeedToFindAnAllergySpecialist,
    iNeedToFindAnOrthopedicSpecialist,
    iNeedToFindAGastroenterologist,
    iNeedToFindAnEndocrinologist,
    iNeedToFindAHematologist,
    iNeedToFindAnOncologist,
    iNeedToFindANephrologist,
    iNeedToFindAnOphthalmologist,
    iNeedToFindAnOtolaryngologist,
    iNeedToFindAnENT,
    iNeedToFindARheumatologist,
    iNeedToFindAUrologist,
    lookingForADentist,
    dentist,
    dentalProvider,
    findCare,
    footDoctor,
    inNetworkDrs,
    drs,
    iNeedADr,
    networkCovereage,
];

