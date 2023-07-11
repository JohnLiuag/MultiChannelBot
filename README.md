# MultiChannelBot

This bot has been created using [Bot Framework](https://dev.botframework.com/)

Main technologies used:
- uses [Conversational Language Understanding](https://learn.microsoft.com/en-us/azure/cognitive-services/language-service/conversational-language-understanding/overview), a cloud-based API service that applies machine-learning intelligence to enable you to build natural language understanding component to be used in an end-to-end conversational application.
- implement a multi-turn conversation using [Dialogs](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-concept-dialog?view=azure-bot-service-4.0)
- the [QnA Maker Service](https://www.qnamaker.ai), an AI based cognitive service, to implement simple Question and Answer conversational patterns
- [Bing Spell Check API](https://docs.microsoft.com/en-us/rest/api/cognitiveservices-bingsearch/bing-spell-check-api-v7-reference): the service lets us check user's utterances for spelling and grammar errors

## Getting Started
### Prerequisites

- [Node.js](https://nodejs.org) version 10.14 or higher
- Azure Bot service
- Conversational Language Understanding Knowledge base (as a Project of "Cognitive Services | Language Studio")
- Question Answering Knowledge base (as a Project of "Cognitive Services | Language Studio")
- Bing Search Azure Resource
- Application Insights Azure Resource

### Environment setting
  Bot Framework SDK uses Azure Bot service, QnA and LUIS app. Therefore, to start the bot, you need to set up environment variables containing the data necessary for connection. For local development, you can create a file `.env` to which you add the necessary variables.

  Here is the list of variables used:
```
NODE_ENV=[development | test | staging | production]

MicrosoftAppType=
MicrosoftAppId=
MicrosoftAppPassword=
MicrosoftAppTenantId=

CluAPIHostName=
CluAppId=
CluProjectName=

BingSpellCheckSubscriptionKey=

OcpApimSubscriptionKey=

QuestionAnsweringProjectName=
QuestionAnsweringEndpoint=
CognitiveServiceAPIKey=

APPINSIGHTS_INSTRUMENTATIONKEY=

B2CClientId=
B2CAppUsername=
B2CAppPassword=

RedisConnectionString=
```
`B2C's` keys nedeed for logging to CCD (by ROPC)
`RedisConnectionString` required for supporting horizontal scaling and improve application reliability. 
Not required for development. Without this parameter, MemoryStorage will be used.

`NODE_ENV` can be `development`, `test` or `production`. File `config.ts` should contain up-to-date configuration data for the desired environment.

### Deploy
To deploy the bot, you need to make sure that the application has access to the environment variables that were described above.

You can create the build and upload it (from the 'lib' folder) to the server. Or you can pull project to the server and run the command:
```bash 
npm run start
```

## Useful commands
Install dependencies

```bash 
npm install
```

Build everything (outputs will live in `lib/`-directory)

```bash 
npm run build
```    

Start development server:

```bash 
# without hot reloading:
npm start
# with hot reloading:
npm watch
```
