export interface IPcp {
    providerNumber: string,
    providerName: string,
    officeId: string,
    officeName: string,
    officeAddress1: string,
    officeAddress2?: string,
    officeCity: string,
    officeCounty: string,
    officeState: string,
    officeZipCode: string,
    officePhoneNumber: string,
    offersTeleHealthServices: boolean,
    offersVirtualCareServices: boolean,
    officeHours: [{
        scheduledHoursText: string,
        weekDay: string
    }]
}

export interface IPcpResponse {
    currentPcp?: IPcp,
    imputedPcp?: IPcp,
    pastPcps?: []
}
