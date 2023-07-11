/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { MessageFactory } from 'botbuilder';
import { TextPrompt, WaterfallDialog } from 'botbuilder-dialogs';
import { DialogTestClient, DialogTestLogger } from 'botbuilder-testing';
import { CancelAndHelpDialog } from '../../dialogs/cancel-and-help.dialog';
const assert = require('assert');


const WATERFALL_DIALOG = 'WATERFALL_DIALOG'
/**
 * An waterfall dialog derived from CancelAndHelpDialog for testing
 */
class TestCancelAndHelpDialog extends CancelAndHelpDialog {
    constructor() {
        super('TestCancelAndHelpDialog');

        this.addDialog(new TextPrompt('TextPrompt'))
            .addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
                this.promptStep.bind(this),
                this.finalStep.bind(this)
            ]));

        this.initialDialogId = WATERFALL_DIALOG;
    }

    public async promptStep(stepContext) {
        return await stepContext.prompt('TextPrompt', { prompt: MessageFactory.text('Hi there') });
    }

    public async finalStep(stepContext) {
        return await stepContext.endDialog();
    }
}

describe('CancelAndHelpDialog', () => {
    describe('Should be able to cancel', () => {
        const testCases = ['cancel', 'quit'];

        testCases.map((testData) => {
            it(testData, async () => {
                const sut = new TestCancelAndHelpDialog();
                const client = new DialogTestClient('test', sut, null, [new DialogTestLogger()]);

                // Execute the test case
                let reply = await client.sendActivity('Hi');
                assert.strictEqual(reply.text, 'Hi there');
                assert.strictEqual(client.dialogTurnResult.status, 'waiting');

                reply = await client.sendActivity(testData);
                assert.strictEqual(reply.text, 'Cancelling...');
                assert.strictEqual(client.dialogTurnResult.status, 'complete');
            });
        });
    });

    describe('Should be able to get help', () => {
        const testCases = ['help', '?'];

        testCases.map((testData) => {
            it(testData, async () => {
                const sut = new TestCancelAndHelpDialog();
                const client = new DialogTestClient('test', sut, null, [new DialogTestLogger()]);

                // Execute the test case
                let reply = await client.sendActivity('Hi');
                assert.strictEqual(reply.text, 'Hi there');
                assert.strictEqual(client.dialogTurnResult.status, 'waiting');

                reply = await client.sendActivity(testData);
                assert.strictEqual(reply.text, 'Show help here');
                assert.strictEqual(client.dialogTurnResult.status, 'waiting');
            });
        });
    });
});
