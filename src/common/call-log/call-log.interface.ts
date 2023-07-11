
export interface IGetReferenceIdRequestBody {
    contacts: Array<IContact>,
    conciergeIdCalling: string,
    conciergeId: string,
    callerId: string,
    callerName: string,
    callerPhoneNumber: string,
    contactType: string,
    outboundCall: IOutboundCall,
    callerType: string,
    tpaClient: string,
    tpaId: string,
    tpaDiv: string
}

interface IContact {
    id: string,
    name: string,
    phoneNumber: string
}

interface IOutboundCall {
    callReason: string,
    callOutcome: string,
    activityCode: string,
    environment: string,
    categoryCode: string
}

export interface IGetReferenceIdResponse {
    callLog: ICallLog
}

interface ICallLog {
    contacts: Array<IContact>,
    subReferences: Array<ISubReferences>,
    discussions: Array<IDiscussion>,
    id: string,
    referenceId: string,
    interactionId: string,
    callLogType: string,
    dateCreated: string,
    timeCreated: string,
    resourceUnitCall: string,
    conciergeIdCalling: string,
    conciergeId: string,
    contactType: string,
    callerType: string,
    callerId: string,
    callerName: string,
    callerPhoneNumber: string,
    tpaClient: string,
    tpaId: string,
    tpaDiv: string,
    isArchived: boolean,
    outboundCall: IOutboundCall
}

interface ISubReferences {
    subReferenceId: string,
    subReferenceType: string,
    subReferenceTypeId: string,
    subReferenceTypeName: string
}

interface IDiscussion {
    topics: Array<ITopic>,
    users: [{
        networkId: string,
        medUserId: string,
        dntUserId: string,
        email: string,
        date: string,
        time: string
    }],
    id: string,
    referenceId: string,
    subReferenceId: string,
    callLogType: string,
    documentType: string,
    subReferenceType: string,
    dob: string,
    subReferenceTypeId: string,
    subReferenceTypeName: string,
    memberIdType: string,
    isArchived: boolean,
    additionalTopics: [{
        discussionTopic: string,
        notes: string,
        environment: string,
        categoryCode: string,
        activityCode: string,
        addedBy: string,
        additionalTopicsUIFormat: string,
        isDraft: boolean,
        isArchived: boolean
    }],
    overallNotes: string,
    overallNotesAddedBy: string
}

interface IDiscussionSubtopic {
    subtopicName: string,
    environment: string,
    categoryCode: string,
    activityCode: string,
    caseSubject: string,
    callReason: string,
    resolutionReason: string,
    escalationType: string,
    activityKBA: string,
    quickSelectUIFormat: string,
    quickSelectFields: Array<string>,
    requiredFields: [{
        title: string,
        value: string
    }]
}

interface ITopic {
    topicId: string,
    discussionDate: string,
    discussionTime: string,
    discussionTopic: string,
    conciergeId: string,
    discussionSubtopic: IDiscussionSubtopic,
    notes: [{
        notes: string,
        noteDate: string,
        noteTime: string,
        addedBy: string,
        isArchived: boolean,
        isDraft: boolean
    }],
    followupItems: [{
        assignee: string,
        followupReason: Array<string>,
        notes: string,
        assignDate: string,
        assignTime: string
    }]
}

export interface IAddDiscussionTopicsRequestBody {
    referenceId: string,
    interactionId: string,
    tpaClient: string,
    tpaId: string,
    tpaDiv: string,
    callLogDiscussions: [{
        topics?: [{
            topicId?: string,
            discussionDate?: string | Date,
            discussionTime?: string | Date,
            discussionTopic?: string,
            conciergeId?: string,
            discussionSubtopic?: {
                subtopicName: string,
                environment: string,
                categoryCode: string,
                activityCode: string,
                caseSubject?: string,
                callReason: string,
                resolutionReason?: string,
                escalationType?: string,
                activityKBA?: string,
                quickSelectUIFormat?: string,
                quickSelectFields?: Array<string>,
                requiredFields?: Array<{
                    title: string,
                    value: string
                }>
            },
            notes: [{
                notes: string,
                noteDate: string | Date,
                noteTime: string | Date,
                addedBy: string,
                isArchived: boolean,
                isDraft: boolean
            }],
            followupItems?: [{
                assignee: string,
                followupReason: Array<string>,
                notes: string,
                assignDate: string,
                assignTime: string
            }]
        }],
        discussionId: string,
        memberId: string,
        memberName: string,
        documentType:string,
        subReferenceType: string,
        dob: string,
        memberIdType?: string,
        isArchived?: boolean,
        additionalTopics?: [{
            discussionTopic: string,
            notes: string,
            environment: string,
            categoryCode: string,
            activityCode: string,
            noteDate: string,
            noteTime: string,
            addedBy: string,
            isDraft: boolean,
            isArchived: boolean,
            additionalTopicsUIFormat: string
        }],
        overallNotes?: string,
        overallNotesAddedBy?: string
    }]
}
