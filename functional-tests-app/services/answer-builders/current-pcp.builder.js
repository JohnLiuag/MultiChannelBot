import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class currentPcpAnswerBuilder {
    async currentPcpAnswer (userData, planStatus, expectedAnswerType, domain = 'https://apitst.upmchp.com/dev.') {
        let answer = [];
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        const eligibilityType = userData.consumerProfile.eligibilityType.toLowerCase();
        const memberId = userData.consumerProfile.medicalMemberId || userData.consumerProfile.dentalVisionMemberId;
        const userId = ['chc', 'medicaid'].includes(eligibilityType) ? userData.consumerProfile.recipientId : memberId;
        const linkAnswer = `<a href="https://findcare${ domain.slice(-4,-1) }.upmchp.com/find?memberid=${ userId }#id_token=${ userData.userToken.token }" target="_blank">Find Care</a>`;
        const status = userData.consumerProfile.memberStatus ? userData.consumerProfile.memberStatus.toLowerCase() : '';
        
        switch (planStatus) {
            case 'active/future':
                if (['active', 'futureactive'].includes(status)) {
                    if (!['wellness', 'non medical', 'dentalvision'].includes(eligibilityType) && ['active', 'futureactive'].includes(status)) {
                        const pcpData = userData.pcp.json;
                        let currentPcpNumber;
                        let imputedPcpNumber;
                        let currentPcpOfficeId;
                        let imputedPcpOfficeId;
                        if (pcpData.currentPcp) {
                            currentPcpNumber = pcpData.currentPcp.providerNumber;
                            currentPcpOfficeId = pcpData.currentPcp.officeId;
                        }
                        if (pcpData.imputedPcp) {
                            imputedPcpNumber = pcpData.imputedPcp.providerNumber;
                            imputedPcpOfficeId = pcpData.imputedPcp.officeId;
                        }
                        const hasDifferentProviders = (pcpData.currentPcp && pcpData.imputedPcp) && currentPcpNumber != imputedPcpNumber;
                        const hasDifferentOfficeId = (pcpData.currentPcp && pcpData.imputedPcp) && currentPcpOfficeId != imputedPcpOfficeId;
                        
                        function getProviderInfo() {
                            let providerInfo;
                            pcpData.currentPcp ? providerInfo = pcpData.currentPcp : providerInfo = pcpData.imputedPcp;
                            
                            answer[1] = `**${ providerInfo.officeName }**`;
                            
                            if (hasDifferentProviders && !hasDifferentOfficeId) { //in case the providers are different but thay has same officeId we additionally provide an imputed provide name
                                providerInfo.providerName ? answer[1] = `${ answer[1] } Assigned PCP: ${ providerInfo.providerName }` : '';
                                pcpData.imputedPcp.providerName ? answer[1] = `${ answer[1] } PCP from your recent claims: ${ pcpData.imputedPcp.providerName }` : '';
                            } else {
                                providerInfo.providerName ? answer[1] = `${ answer[1] } ${ providerInfo.providerName }` : '';
                            }
                            providerInfo.officeAddress1 ? answer[1] = `${ answer[1] } ${ providerInfo.officeAddress1 }` : '';
                            providerInfo.officeAddress2 ? answer[1] = `${ answer[1] } ${ providerInfo.officeAddress2 }` : '';
                            providerInfo.officeAddress3 ? answer[1] = `${ answer[1] } ${ providerInfo.officeAddress3 }` : '';
                            providerInfo.officeCity ? answer[1] = `${ answer[1] } ${ providerInfo.officeCity },` : '';
                            providerInfo.officeState ? answer[1] = `${ answer[1] } ${ providerInfo.officeState }` : '';
                            providerInfo.officeZipCode ? answer[1] = `${ answer[1] } ${ providerInfo.officeZipCode }` : '';
                            answer[1] = `${ answer[1] } ${ providerInfo.officePhoneNumber.slice(0, 3) }-${ providerInfo.officePhoneNumber.slice(3, 6) }-${ providerInfo.officePhoneNumber.slice(6, 10) }`;
                            
                            return providerInfo;
                        }

                        switch (expectedAnswerType) {
                            case 'different providers':
                                if (hasDifferentProviders && hasDifferentOfficeId) {
                                    answer[0] = 'You have an assigned PCP, but our records indicate that you may be seeing a different provider.';
                                    answer[1] = `If needed, here is a link for you to update your PCP. ${ linkAnswer }`;
                                    answer[2] = 'If you need any further assistance, please type **"help"** to chat with a concierge.';
                                    followUpQuestion = [];
                                } else {
                                    answer[0] = 'ERROR: USER DOES NOT HAVE DIFFERENT PROVIDERS OR OFFICE IDs ARE THE SAME';
                                }
                                break;
                            case 'different providers with same officeId':
                                if (hasDifferentProviders && !hasDifferentOfficeId) {
                                    const providerInfo = getProviderInfo();
                                    if (providerInfo != '<Response body is empty>') {
                                        answer[0] = `Your **PCP's** information is below.`;
                                        answer[2] = `Your assigned PCP is different than the PCP from your claims records.`;
                                        answer[3] = `If needed, here is a link for you to update your PCP. ${ linkAnswer }`;
                                        answer[4] = `If you need any further assistance, please type **"help"** to chat with a concierge.`;
                                        followUpQuestion = [];
                                    } else {
                                        answer[0] = 'I am unable to find the requested information. Please type **"help"** to chat with a concierge for further assistance.';
                                    }
                                } else {
                                    answer[0] = 'ERROR: USER DOES NOT HAVE DIFFERENT PROVIDERS OR OFFICE ID IS DIFFERENT';
                                }
                                break;
                            case 'current pcp':
                                if ((pcpData.currentPcp && !pcpData.imputedPcp) || !hasDifferentProviders) {
                                    const providerInfo = getProviderInfo();
                                    if (providerInfo != '<Response body is empty>') {
                                        answer[0] = `Your **PCP's** information is below.`;
                                        answer[2] = `If needed, here is a link for you to update your PCP. ${ linkAnswer }`;
                                    } else {
                                        answer[0] = 'I am unable to find the requested information. Please type **"help"** to chat with a concierge for further assistance.';
                                    }
                                } else {
                                    answer[0] = 'ERROR: USER DOES NOT HAVE CURRENT PCP';
                                }
                                break;
                            case 'imputed pcp':
                                if (pcpData.imputedPcp && !pcpData.currentPcp) {
                                    const providerInfo = getProviderInfo();
                                    if (providerInfo != '<Response body is empty>') {
                                        answer[0] = `You haven't selected a PCP yet, but our records show that the provider below may be your PCP.`;
                                        answer[2] = `If needed, here is a link for you to update your PCP. ${ linkAnswer }`;
                                    } else {
                                        answer[0] = 'I am unable to find the requested information. Please type **"help"** to chat with a concierge for further assistance.';
                                    }
                                } else {
                                    answer[0] = 'ERROR: USER DOES NOT HAVE IMPUTED PCP';
                                }
                                break;
                            case 'no pcp':
                                if (!pcpData.currentPcp && !pcpData.imputedPcp) {
                                    answer = [];
                                    answer.push(`You don't have any PCP selected for your plan.`);
                                    answer.push(`Here is a link for you to select your PCP. ${ linkAnswer }`);
                                } else {
                                    answer[0] = 'ERROR: USER HAS PCP';
                                }
                                break;
                            case 'no response form service':
                                if (userData.pcp.status != 200) {
                                    answer[0] = 'I am unable to find the requested information. Please type **"help"** to chat with a concierge for further assistance.';
                                    followUpQuestion = [];
                                } else {
                                    answer[0] = 'ERROR: SERVICE RETURNS A PROVIDER RESPONSE';
                                }
                                break;
                        }
                    }
                } else {
                    answer = 'ERROR: PLAN NEITHER ACTIVE NOR FUTURE'
                }
                break;
            case 'termed':
                if (status === 'termed') {
                    answer = [];
                    answer.push(`Your coverage is not active, so no PCP selection is required.`);
                    answer.push(`If you have further questions, you can type **"help"** to chat with a concierge.`);
                    followUpQuestion = [];
                } else {
                    answer[0] = 'ERROR: PLAN IS NOT TERMED'
                }
                break;
            case 'wellness/non medical/dv':
                if (['wellness', 'non medical', 'dentalvision'].includes(eligibilityType)) {
                    answer = `Your plan does not include medical coverage, so no PCP selection is required with your plan.`
                } else {
                    answer[0] = 'ERROR: PLAN IS NON OF WELLNESS/NON MEDICAL/DENTALVISION'
                }
                break;
        }
        return { answer, followUpQuestion }
    }
    
}

export const builder = new currentPcpAnswerBuilder();
