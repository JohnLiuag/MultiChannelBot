import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class NetworkSearchBuilder {

    async networkSearchAnswer (userData, platform, planStatus, domain = 'https://apitst.upmchp.com/dev.') {

        let answer;
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        const memberStatus = userData.consumerProfile.memberStatus || userData.consumerProfile.dvMemberStatus;
        const memberId = userData.consumerProfile.medicalMemberId || userData.consumerProfile.dentalVisionMemberId;
        const status = memberStatus.toLowerCase();
        const linkText = platform === 'web' || platform === 'mobile' && status === 'active' ? 'Find Care' : 'Care';
        const linkAnswer = `<a href="https://findcare${ domain.slice(-4,-1) }.upmchp.com/find?memberid=${ memberId }#id_token=${ userData.userToken.token }" target="_blank">Find Care</a>`;

        switch (platform) {
            case 'web':
                switch (planStatus) {
                    case 'active':
                        if (status === 'active') {
                            answer = `You can find participating providers and facilities by clicking ${ linkAnswer }.`;
                        } else {
                            answer = 'ERROR: PLAN IS NOT ACTIVE';
                        }
                        break;
                    case 'termed/future':
                        if (['termed', 'futureactive'].includes(status)) {
                            answer = `Your coverage is not currently active. If you'd like to browse the directory anyway, you can do so by visiting ${ linkAnswer }.`;
                        } else {
                            answer = 'ERROR: PLAN IS NETHER TERMED NOR FUTURE';
                        }
                        break;
                }
                break;
            case 'mobile':
                switch (planStatus) {
                    case 'active':
                        if (status === 'active') {
                            answer = `You can find participating providers and facilities by tapping ${ linkAnswer }.`;
                        } else {
                            answer = 'ERROR: PLAN IS NOT ACTIVE';
                        }
                        break;
                    case 'future':
                        if (status === 'futureactive') {
                            answer = `Your coverage is not currently active. If you'd like to browse the directory anyway, you can do so by visiting the [Care](content/care) section. Once you're there, tap Search Doctors or Providers to search the provider directory.`;
                        } else {
                            answer = 'ERROR: PLAN IS NOT FUTURE';
                        }
                        break;
                }
                break;
        }

        return { answer, followUpQuestion }
    }
}

export const builder = new NetworkSearchBuilder();
