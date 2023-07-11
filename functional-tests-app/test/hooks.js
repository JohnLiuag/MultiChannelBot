import { reporter } from '../services/reporter.service.js';
import {mkdir, rm} from 'fs/promises';
import { user } from '../services/user.service.js';


async function sendCancelMessage() {
    const cancel = {
        locale: "en-EN",
        type: "message",
        from:  {
            "id": ""
        },
        text: "cancel",
    }
    await user.conversation.postMessage(cancel, '', this);
}

export const mochaHooks = {

    async beforeAll() {
        const tempDataDir = './test-data/temp-users-data';
        async function clearDirectory(directory) {
            try {
                await rm(tempDataDir, {recursive: true});
            } catch (error) {};
            try {
                await mkdir(directory);
            } catch (error) {};  
        }
        await clearDirectory(tempDataDir);
        console.log('Data storage is cleared');
    },
    
    async afterEach() {
        //send the 'cancel' message in case of mass tests failing on the unexpected response with prompts
        if (this.currentTest.state === 'failed') { 
            await sendCancelMessage();
        }
        
        reporter.printResults(this);
    }
};
