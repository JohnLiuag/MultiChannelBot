import { config } from 'dotenv';
import * as path from 'path';
import fetch from 'node-fetch';
global.fetch = fetch;

import { logger, addAppInsightsLogger } from './common/logger';

// Note: Ensure you have a .env file
const ENV_FILE = path.join(__dirname, '..', '.env');
config({ path: ENV_FILE });

import * as restify from 'restify';

import { INodeSocket } from 'botframework-streaming';

// Import required bot services.
// See https://aka.ms/bot-services to learn more about the different parts of a bot.
import {
    CloudAdapter,
    ConfigurationServiceClientCredentialFactory,
    ConversationState,
    createBotFrameworkAuthenticationFromConfiguration,
    MemoryStorage,
    UserState,
    StatePropertyAccessor,
    NullTelemetryClient
} from 'botbuilder';
import { ApplicationInsightsTelemetryClient, TelemetryInitializerMiddleware } from 'botbuilder-applicationinsights';
import { TelemetryLoggerMiddleware } from 'botbuilder-core';

import { getCluResult } from './common/services/clu.service';
import { questionAnswering } from './common/services/questionAnswering.service';

const bingSpellCheckKey = process.env.BingSpellCheckSubscriptionKey;
const bingSpellCheckEndpoint = 'https://api.bing.microsoft.com/v7.0/spellcheck';

// The bot and its main dialog.
import { DialogAndWelcomeBot } from './bots/dialog-and-welcome.bot';
import { MainDialog } from './dialogs/main.dialog';
import { CallLogService } from './common/call-log/call-log.service';

import { TelemetryService } from './common/services/telemetry.service';
import { IDialogData, ITelemetryData } from './common/interfaces/telemetry.interface';

const credentialsFactory = new ConfigurationServiceClientCredentialFactory({
    MicrosoftAppId: process.env.MicrosoftAppId,
    MicrosoftAppPassword: process.env.MicrosoftAppPassword,
    MicrosoftAppType: process.env.MicrosoftAppType,
    MicrosoftAppTenantId: process.env.MicrosoftAppTenantId,
});

const botFrameworkAuthentication = createBotFrameworkAuthenticationFromConfiguration(null, credentialsFactory);

// Create adapter.
// See https://aka.ms/about-bot-adapter to learn more about adapters.
const adapter = new CloudAdapter(botFrameworkAuthentication);

import { TELEMETRY_DATA_PROPERTY } from './common/constants';
// Catch-all for errors.
const onTurnErrorHandler = async (context, error) => {
    logger.error(`[onTurnError] unhandled error: ${ error }`);
    let message = `We are unable to display this information at this time.`;
    await context.sendActivity(message);

    const telemetryDataAccessor: StatePropertyAccessor<ITelemetryData> = conversationState.createProperty<ITelemetryData>(TELEMETRY_DATA_PROPERTY);
    const telemetryData: ITelemetryData = await telemetryDataAccessor.get(context, {});
    let intent = telemetryData.intent || 'Unhandled_Error';
    let reasonOfFailure = 'Unhandled_Error';
    let dialogData: IDialogData = {
        timeStamp: context.activity.timestamp,
        userId: context.activity.from.id,
        channel: context.activity.channelId,
        userQuestion: (context.activity.text || '').trim(),
        botAnswer: (context.activity.value || '').trim()
    };
    telemetryService.sendTextLogToTelemetry({ intent, reasonOfFailure }, dialogData, context.activity.text, [message]);

    // Clear out state
    await conversationState.delete(context);
};

// Set the onTurnError for the singleton CloudAdapter.
adapter.onTurnError = onTurnErrorHandler;

// Creates a new TelemetryClient based on a instrumentation key
let getTelemetryClient = (instrumentationKey: string) => {
    if (instrumentationKey) {
        return new ApplicationInsightsTelemetryClient(instrumentationKey);
    }
    return new NullTelemetryClient();
}

//Application Insights:  Add telemetry middleware to the adapter middleware pipeline
let telemetryClient = getTelemetryClient(process.env.APPINSIGHTS_INSTRUMENTATIONKEY);
addAppInsightsLogger(telemetryClient);
const telemetryLoggerMiddleware = new TelemetryLoggerMiddleware(telemetryClient) as any;
const initializerMiddleware = new TelemetryInitializerMiddleware(telemetryLoggerMiddleware) as any;
adapter.use(initializerMiddleware);

// Define a state store for your bot. See https://aka.ms/about-bot-state to learn more about using MemoryStorage.
// A bot requires a state store to persist the dialog and user state between messages.
let conversationState: ConversationState;
let userState: UserState;

// For local development, in-memory storage is used.
// CAUTION: The Memory Storage used here is for local bot debugging only. When the bot
// is restarted, anything stored in memory will be gone.
// for this reason, for production we use RedisDbStorage
const redis = require('redis');
const { RedisDbStorage } = require('botbuilder-storage-redis');
let storage;
if (process.env.RedisConnectionString) {
    console.log('Redis connection string:', process.env.RedisConnectionString);
    const redisClient = redis.createClient({
        // 'rediss://:<password>@<host>:<port>'
        // 'redis://127.0.0.1:6379' - for localhost
        url: process.env.RedisConnectionString,
    });

    redisClient.on('error', (err) => console.log('Redis Client Error', err));
    redisClient.on("connect", () => console.log(`Redis connection established`));
    redisClient.connect();
    /**
     *  You can assign a life time for conversations. When enabling this feature,
     *  conversations that take longer than the give TTL will be deleted automatically.
     *  Be aware that future interactions with the bot after starting the conversation
     *  won't change the TTL of the conversation.
     *  Use this feature with caution.
     */
    const ttlInSeconds = 60 * 60 * 6;  // 6hours
    storage = new RedisDbStorage(redisClient, ttlInSeconds);
    /**
     * here we create a service (but do not use it), in order to correctly configure the service for later use.
     * Since the service is a singleton, in the next using this service we can not configure it when importing.
     */
    let callLogService = new CallLogService(redisClient, ttlInSeconds);
} else {
    storage = new MemoryStorage();
}

conversationState = new ConversationState(storage);
userState = new UserState(storage);

let spellCheck = async (utterance: string) => {
    let requestURL = bingSpellCheckEndpoint;
    const params = {
        'text': utterance
    };
    requestURL += "?" + new URLSearchParams(params).toString();
    const headers = {
        'Ocp-Apim-Subscription-Key': bingSpellCheckKey
    };
    return await fetch(requestURL, { method: 'GET', headers })
    .then( (response: Response) => {
        if (response.ok) {
            return response.json();
        } else {
            logger.error(response.status + ': ' + response.statusText + ' ' + response.url);
            return null;
        }
    });
}

// Create the main dialog.
const dialog = new MainDialog(getCluResult, questionAnswering, spellCheck, userState, conversationState);
dialog.telemetryClient = telemetryClient;
const bot = new DialogAndWelcomeBot(conversationState, userState, dialog);
const telemetryService = new TelemetryService(dialog);

// Create HTTP server
const server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.listen(process.env.port || process.env.PORT || 3978, () => {
    logger.info(`${server.name} listening to ${server.url}`);
});

server.get('/cards/*',   //    '/cards/test1.txt'
    restify.plugins.serveStaticFiles('./public/')       // ./public/test1.txt
);


// Listen for incoming activities and route them to your bot main dialog.
server.post('/api/messages', async (req, res) => {
    // Route received a request to adapter for processing
    await adapter.process(req, res, (context) => bot.run(context));
});

// Listen for Upgrade requests for Streaming.
server.on('upgrade', async (req, socket, head) => {
    // Create an adapter scoped to this WebSocket connection to allow storing session data.
    const streamingAdapter = new CloudAdapter(botFrameworkAuthentication);

    // Set onTurnError for the CloudAdapter created for each connection.
    streamingAdapter.onTurnError = onTurnErrorHandler;

    await streamingAdapter.process(req, socket as unknown as INodeSocket, head, (context) => bot.run(context));
});
