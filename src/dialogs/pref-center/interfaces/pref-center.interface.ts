export interface IPrefCenterOptions {
    preferenceOption: {
        id: string,
        subscription: string,
        tpaClient: string,
        tpaId: string,
        tpaDiv: string,
        lastUpdatedDate: string,
        planType: string,
        lineOfBusiness: string,
        idCards: string,
        premiumBilling: string,
        memberName: string,
        preferredName: string,
        email: string,
        mobilePhone: string,
        homePhone: string,
        physicalAddress: string,
        mailingAddress: string,
        alternateAddress: string,
        writtenLanguage: string,
        writtenLanguageSelect: [{
            languageCode: string,
            language: string
        }],
        spokenLanguage: string,
        spokenLanguageSelect: [{
            languageCode: string,
            language: string
        }],
        alternateFormat: string,
        alternateFormatSelect: [{
            alternateFormatCode: string,
            alternateFormat: string
        }],
        campaigns: [{
            type: string,
            contactMethods: [{
                type: string
            }]
        }],
        genderIdentities: [string],
        pronouns: [string],
        races: [string],
        ethnicities: [string],
        sexualOrientations: [string]
    }
}