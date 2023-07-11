import  *  as  winston  from  'winston';
import { ConsoleTransportInstance } from 'winston/lib/winston/transports';
import DailyRotateFile = require('winston-daily-rotate-file');
import {MongoDBTransportInstance, MongoDBConnectionOptions } from 'winston-mongodb';
import { AzureApplicationInsightsLogger } from 'winston-azure-application-insights';
const { MongoDB }: { MongoDB: MongoDBTransportInstance } = require('winston-mongodb');

import { config } from './config';

const mongoTransport = new MongoDB({
    // temporary solution
    level: 'debug',
    db: 'mongodb+srv://admin:tsJZ7Z1z79uLpgPB@cluster0.qhvqt.mongodb.net/chatbot',
    collection: 'logs-dev',
    options: {
        useUnifiedTopology: true,
    },
    format: winston.format.combine(
        // winston.format.timestamp({
        //     format: 'YYYY-MM-DD HH:mm:ss'
        // }),
        winston.format.errors({ stack: true }),
        winston.format.json(),
        winston.format.metadata(),
        winston.format.timestamp(),
    ),
} as MongoDBConnectionOptions);

// not supported on the server where the application is deployed using pipelines
/*
const fileTransport: DailyRotateFile = new DailyRotateFile({
    level: config.logLevel || 'error',
    filename: './logs/%DATE%.log',
    // datePattern: 'YYYY-MM-DD-HH',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    format: winston.format.combine(
        winston.format.metadata(),
        winston.format.timestamp(),
        winston.format.align(),
        winston.format.printf(
            info => `${info.timestamp} ${info.label ? ' [' + info.label + ']' : ''} ${info.level}: ${info.message} ${Object.keys(info.metadata).length ? JSON.stringify(info.metadata): ''}`,
        ),
    )
});
*/

const consoleTransport: ConsoleTransportInstance = new winston.transports.Console({
    level: 'info',
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.align(),
      winston.format.simple(),
    )
});

export const logger = winston.createLogger({
    exitOnError: false,
    exceptionHandlers: [
        // new winston.transports.File({ filename: './logs/exceptions.log' })
    ],
    transports: [
        // fileTransport,
    ]}
);

export const addAppInsightsLogger = (appInsights: any): void => {
    if (process.env.APPINSIGHTS_INSTRUMENTATIONKEY && appInsights) {
        const appInsightsTransport = new AzureApplicationInsightsLogger({
            // key: process.env.APPINSIGHTS_INSTRUMENTATIONKEY,
            insights: appInsights,
            level: config.logLevel || 'error',
            format: winston.format.combine(
                winston.format.errors({ stack: true }),
                winston.format.json(),
                winston.format.metadata(),
                winston.format.timestamp(),
            ),
        });
        // logger.add(appInsightsTransport);    // be careful, using "key" in options or the "add" method can result in double logs
    }
}

if (process.env.NODE_ENV !== 'production') {
    logger.add(consoleTransport);
}

if (process.env.NODE_ENV === 'development' && process.env.USE_MONGODB_LOGS) {
    logger.add(mongoTransport);
}
// examples:
/*
logger.info('Info message', { message: 'more data'});  //  join message and meta message:  'info: Info message more data'
logger.error('Error message', { 'metaData:': 'additionl data'});
logger.warn('Warning message', 'ignored text');
*/
