export interface ILiveChatAvailable {
  contents: [
    {
      key: string,
      value: {
        embeddedContent: string
      },
      sortOrder: number,
      guidId: string
    }
  ]
}

export interface ILiveChatAvailableHours {
  contents: [
    {
      key: string,
      value: {
        embeddedContent: string
      },
      sortOrder: number,
      guidId: string
    }
  ]
}

export interface ILiveChatTopics {
  contents: [
    {
      key: string,
      value: {
        key1: string,
        value1: string
      },
      sortOrder: number,
      guidId: string
    }
  ]
}

export interface ILiveChatTopicPosted {
  isSuccess: boolean
}

export interface ILiveChatSubTopics {
  contents: [
    {
      key: string,
      value: {
        parentKey1: string,
        key1: string,
        value1: string
      },
      sortOrder: number,
      guidId: string
    }
  ]
}

export interface ILiveChatTokenRequestData {
  chatBotRefId: string,
  chatBotQuestions: [{
    question1: string,
    question2: string
  }],
  applicationKey: string,
  firstName: string,
  lastName: string,
  nickName: string,
  email: string,
  subject: string,
  chatTopic: string,
  lobName: string,
  memberId: string,
  vnumber: string,
  callerType: string,
  userId: string,
  tpaClient: string,
  tpaDiv: string,
  tpaId: string,
}

export interface ILiveChatToken {
  success: boolean,
  token: string,
  error: string
}