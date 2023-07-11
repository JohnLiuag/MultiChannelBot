import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class LiveChatAnswerBuilder {
    
    async liveChatAnswer (userData) {
        
        let answer;
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        let buttons = {
            contactUs: '/main/content/contact-us',
            sendMessage: '/main/content/message-center'
        };
        let workingHours;
        const eligibilityTypes = ['chc', 'chip', 'commercial', 'medicaid', 'medicare', 'snp'];
        const profile = userData.consumerProfile;
        const eligibilityType = profile.eligibilityType.toLowerCase();
        const hasMedical = profile.hasMedicalInsurance || eligibilityTypes.includes(eligibilityType) || (eligibilityType === 'non medical' && profile.planCode != '0FS');
        const hasDental = profile.hasDentalAdvantage || profile.planType === "I";
        const hasVision = profile.hasVision || profile.hasVisionAdvantage || profile.hasVisionCare;
        const hasFSA = profile.hasFsa;
        let hasPregnancySupport;
        let hasHealthCoaching;
        const topics = {
            mainTopics: [],
            pregnancyTopics: ['Maternity program overview', 'Discomforts of pregnancy', 'Prenatal classes', 'Pregnancy-related concerns', 'Questions about my baby', 'A topic not listed here', 'Finding a maternity provider', 'When to call my doctor', 'Depression', 'Post-pregnancy related concerns', 'Breast-feeding and bottle-feeding'],
            healthCoachingTopics: ['Lifestyle Health (General)', 'Physical Health (General)', 'Anxiety', 'Nutrition', 'Heart Health', 'Substance Abuse', 'Stress', 'Low Back Pain', 'Grief', 'Behavioral Health (General)', 'Weight Management', 'Diabetes', 'Depression', 'Physical Activity', 'Breathing', 'ADHD', 'Tobacco Cessation', 'Oncology', 'Pain Management']
        };
        if ((!['P924', 'R503'].includes(profile.corpCode) && ['chc', 'medicare', 'wellness', 'snp'].includes(profile.eligibilityType.toLowerCase()))
            || (!['P924', 'R503', 'U135'].includes(profile.corpCode) && profile.eligibilityType.toLowerCase() === 'commercial')
            || profile.corpCode === 'U135') {
                hasHealthCoaching = true;
        }

        if ((profile.corpCode != 'R503' && ['chip', 'medicare', 'medicaid', 'snp'].includes(profile.eligibilityType.toLowerCase()))
            || (!['R503', 'U135'].includes(profile.corpCode) && profile.eligibilityType.toLowerCase() === 'commercial')
            || profile.corpCode === 'U135') {
            hasPregnancySupport = true;
        }
        
        hasMedical ? topics.mainTopics.push('My medical coverage') : '';
        hasDental ? topics.mainTopics.push('My dental coverage') : '';
        hasVision ? topics.mainTopics.push('My vision coverage') : '';
        hasFSA ? topics.mainTopics.push('Flexible spending account') : '';
        hasHealthCoaching ? topics.mainTopics.push('Health coaching') : '';
        hasPregnancySupport ? topics.mainTopics.push('Pregnancy support') : '';
        profile.corpCode === 'U135' ? topics.mainTopics.push('WorkPartners ') : '';

        if (userData.liveChatStatus) {
            if (userData.liveChatStatus.contents.length != 0) {
                const status = userData.liveChatStatus.contents[0].value.embeddedContent;
                if (status === '<div>true</div>') {
                    answer = `I'll get you connected. Please choose a topic, or type **"cancel"** to return to your Virtual Concierge.`;
                } else {
                    answer = 'ERROR: LIVE CHAT STATUS IS FALSE'
                }
            } else {
                workingHours = userData.liveChatWorkingHours.contents[0].value.embeddedContent;
                workingHours = workingHours.replace(/<br\/>/g, '');
                answer = `Live Chat is currently unavailable. Available hours are: ${workingHours} You can call or send a secure message. How would you like to get in touch?`;
            }
        }
 
        return { answer, followUpQuestion, topics, buttons };
    }
}

export const builder = new LiveChatAnswerBuilder();
