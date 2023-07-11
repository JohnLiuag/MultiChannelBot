import { IAddDiscussionTopicsRequestBody, IGetReferenceIdRequestBody } from "./call-log.interface"


export const getReferenceIdRequestBodyTpl: IGetReferenceIdRequestBody = {
    contacts: [{
        name: '',                       // update on request (consumer-profile)
        id: '',                         // update on request (memberId on consumer-profile)
        phoneNumber: '',                // can be empty
    }],
    conciergeIdCalling: 'Chatbot App',  // +
    conciergeId: 'chatbot_app',         // +
    callerId: '',                       // update on request (consumer-profile)
    callerName: '',                     // update on request (consumer-profile)
    callerPhoneNumber: '',              // can be for phone channel (optional)
    contactType: 'CH',                  // +  Chat ?
    outboundCall: {
        callReason: '',
        callOutcome: '',
        activityCode: '',
        environment: '',
        categoryCode: ''
    },
    callerType: 'MB',                   // ? CallerType - MB/OT . MB is for member , OT is for Other (can be null)
    tpaClient: '',                      // update on request (consumer-profile)
    tpaId: '',                          // update on request (consumer-profile)
    tpaDiv: ''                          // update on request (consumer-profile)
}


export const addDiscussionTopicsRequestBodyTpl: IAddDiscussionTopicsRequestBody = {
    referenceId: '2222000018',              // need or not?
    interactionId: '',
    tpaClient: '',                          // update on request (consumer-profile)
    tpaId: '',                              // update on request (consumer-profile)
    tpaDiv: '',                             // update on request (consumer-profile)
    callLogDiscussions: [
        {
            discussionId: '',               // For the first requeest of the chat it should be empty. On subsequent requests of the
                                            // same chat, it should have value. Value should be {ReferenceId-01-01}. Example : 2222000015-01-01
            memberId: '',                   // update from consumer-profile: '00003537101',
            memberName: '',                 // update from profile: '01Xxx Xxx37101',
            documentType: 'MEDICAL',        // MEDICAL/DENTAL. in Chatbot case,since the data is not sent to Mc400...the value should be MEDICAL
            subReferenceType: 'MB',         //  ???  update/change ?
            dob: `01/01/1964`,
            memberIdType: null,
            isArchived: false,
            topics: [
                {
                    // topicId: '',
                    discussionDate: '2022-09-08',   // update
                    discussionTime: '',             // update on each SAVE call: '12.37.53'
                    discussionTopic: 'Chatbot',
                    conciergeId: 'chatbot_app',
                    discussionSubtopic: {
                        subtopicName: 'Chat Transcript',
                        environment: 'UPM',          // are these properties required? --> YES
                        categoryCode: 'AWC',
                        activityCode: 'AWC010',
                        callReason: '',
                        quickSelectUIFormat: '',
                        quickSelectFields: [],
                        requiredFields: [],
                    },
                    notes: [
                        {
                            notes: '',                      // collect messages here
                            noteDate: '',                   // 2022-08-08
                            noteTime: '',                   // update on each SAVE call:  12.37.53.977982
                            addedBy: 'chatbot_app',
                            isArchived: false,              // always false
                            isDraft: false,                 // always false
                        }
                    ],
                }
            ]
        }
    ]
}
