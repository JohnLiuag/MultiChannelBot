// Speech synthesis model for responses in IVR
export const voiceModel = (messageText: string) => `
    <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="US">
        <voice name="en-US-AriaNeural">
            ${ messageText }
        </voice>
    </speak>`;
