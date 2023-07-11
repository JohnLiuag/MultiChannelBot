import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class MyUpmcRedirectsAnswerBuilder {

    async myUpmcRedirectsAnswer (userData, expectedAnswer, expectedSubAnswer) {

        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        const answer = [];
        const myUpmcLink = '<a href="https://myupmc.upmc.com/" target="_blank">MyUPMC</a>';
        const providerUpmcLink = '<a href="https://providers.upmc.com/" target="_blank">Find a Doctor</a>';
        const myChpLink = '<a href="https://upmcchld.consumeridp.us-1.healtheintent.com/saml2/sso/login?authenticationRequestId=56520793-9e10-4879-b1ab-3ff21525646c" target="_blank">myCHP</a>';
        const eligibilityType = userData.consumerProfile.eligibilityType.toLowerCase();
        
        switch (expectedAnswer) {
            case 'current appointment':
                switch (expectedSubAnswer) {
                    case 'chip':
                        if (eligibilityType === 'chip') {
                            answer[0] = `If your child has an appointment with a UPMC provider, you can view or change your child's appointment by logging in to ${ myChpLink }`;
                            answer[1] = `If your child's appointment is not with a UPMC provider, please contact your child's provider regarding the appointment.`;
                            followUpQuestion = [];
                        } else {
                            answer[0] = `ERROR: PLAN IS NOT CHIP`;
                        }
                        break;
                    case 'other':
                        if (eligibilityType != 'chip') {
                            answer[0] = `If you have an appointment with a UPMC provider, you can view or change your appointment by logging in to ${ myUpmcLink }.`;
                            answer[1] = `If your appointment is not with a UPMC provider, please contact your provider regarding the appointment.`;
                            followUpQuestion = [];
                        } else {
                            answer[0] = `ERROR: PLAN IS CHIP`;
                        }
                        break;
                    }
                break;
            case 'schedule an appointment':
                switch (expectedSubAnswer) {
                    case 'chip':
                        if (eligibilityType === 'chip') {
                            answer[0] = `If you would like to schedule an appointment with a UPMC doctor whom your child has seen before, you can do so by logging in to ${ myChpLink }.`;
                            answer[1] = `You can also find a new doctor and schedule appointments online by visiting ${ providerUpmcLink }.`;
                            followUpQuestion = [];
                        } else {
                            answer[0] = `ERROR: PLAN IS NOT CHIP`;
                        }
                        break;
                    case 'other':
                        if (eligibilityType != 'chip') {
                            answer[0] = `If you would like to schedule an appointment with a UPMC doctor whom you've seen before, you can do so by logging in to ${ myUpmcLink }.`;
                            answer[1] = `You can also find a new doctor and schedule appointments online by visiting ${ providerUpmcLink }.`;
                            answer[2] = `If you can't find your provider there, please contact your doctor's office to schedule an appointment. You can also type **"help"** to chat with a concierge for further assistance.`;
                            followUpQuestion = [];
                        } else {
                            answer[0] = `ERROR: PLAN IS CHIP`;
                        }
                        break;
                }
                break;
            case 'test results':
                switch (expectedSubAnswer) {
                    case 'chip':
                        if (eligibilityType === 'chip') {
                            answer[0] = `If your child's testing was ordered or done by a UPMC provider, you can check your child's test results by logging in to ${ myChpLink }.`;
                            answer[1] = `If your child's testing was ordered or done outside of UPMC, please contact your child's doctor to get their test results.`;
                            answer[2] = `Please note that your child's test results will only be viewable online for members under age 13.`;
                            followUpQuestion = [];
                        } else {
                            answer[0] = `ERROR: PLAN IS NOT CHIP`;
                        }
                        break;
                    case 'other':
                        if (eligibilityType != 'chip') {
                            answer[0] = `If your testing was ordered or done by a UPMC provider, you can check your test results by logging in to ${ myUpmcLink }.`;
                            answer[1] = `If your testing was ordered or done outside of UPMC, please contact your doctor to get your test results.`;
                            followUpQuestion = [];
                        } else {
                            answer[0] = `ERROR: PLAN IS CHIP`;
                        }
                        break;
                }
                break;
        }
        return { answer, followUpQuestion };
    }
}

export const builder = new MyUpmcRedirectsAnswerBuilder();