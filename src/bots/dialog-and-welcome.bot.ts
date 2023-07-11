import { BotState, ChannelAccount, MessageFactory, TurnContext } from 'botbuilder';
import { Dialog, DialogState } from 'botbuilder-dialogs';

import { MainDialog } from '../dialogs/main.dialog';
import { DialogBot } from './dialog.bot';
import { IUserProfile } from '../common/interfaces/user-profile.interface';
import { voiceModel } from '../common/voice-model/voice-model';

export class DialogAndWelcomeBot extends DialogBot {

    constructor(conversationState: BotState, userState: BotState, dialog: Dialog) {
        super(conversationState, userState, dialog);

        this.onMembersAdded(async (context, next) => {
            const channelId: string = context.activity.channelId.toLowerCase();
            const membersAdded: ChannelAccount[] = context.activity.membersAdded;
            // const userProfile: IUserProfile = await this.userProfileAccessor.get(context, {});

            for (const member of membersAdded) {
                if (member.id !== context.activity.recipient.id) {
                    switch (channelId) {
                        case 'telephony': {
                            await this.welcomeMessageTelephony(context);
                            break;
                        }
                        case 'emulator': {
                            await this.welcomeMessageTelephony(context);
                            break;
                        }
                        case 'directline':  // mobile app here
                        default: {
                            // userProfile.name = member.name;
                            // userProfile.memberId = member.id;
                        }
                    }
                    // await (dialog as MainDialog).run(context, conversationState.createProperty<DialogState>('DialogState'));
                }
            }
            await next();
        });
    }

    async welcomeMessageTelephony(context: TurnContext) {
        const message = `Welcome to UPMC HealthPlan! I am your Digital Assistant. \n` +
            `I can answer questions regarding your plan information such as Coverage, Recent Claims, Benefit Information, etc. \n` +
            `Before we get started we would like verify some information. Say OK to start`;
        await context.sendActivity(
            MessageFactory.text(
                message,
                voiceModel(message),
                'ignoringInput'
            )
        );
    }
}
