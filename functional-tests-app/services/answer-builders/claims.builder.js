import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";


class ClaimsAnswerBuilder {
    
    async claimsAnswer (userData, expectedAnswerType) {

        let answer;
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        const link = '#/main/content/medical-claims';
        const profile = userData.consumerProfile;
        const eligibilityType = profile.eligibilityType.toLowerCase();
        const medicalMemberId = profile.medicalMemberId ? profile.medicalMemberId : '';
        const dentalVisionMemberId = profile.dentalVisionMemberId ? profile.dentalVisionMemberId : '';
        let medicalEligibilities;
        let dvEligibilities;
        userData.dependentEligibility.forEach(plan => {
            plan.forEach(userEligibility => {
                userEligibility.memberId === medicalMemberId ? medicalEligibilities = userEligibility : ''; //collect all medical user's eligibilities
                userEligibility.memberId === dentalVisionMemberId ? dvEligibilities = userEligibility : ''; //collect all DentalVision user's eligibilities
            }) 
        })
        
        let hasRx;
        let hasVisionAdvantage;
        let hasVisionCare;
        let hasCommercial;
        let hasDentalAdvantage;
        
        if (medicalEligibilities && medicalEligibilities.eligibilities.length != 0) {
            medicalEligibilities.eligibilities.forEach(eligibility => {
                if (['active', 'termed'].includes(eligibility.eligibilityStatus.toLowerCase())) {
                    hasRx = eligibility.hasRx ? true : '';
                    hasVisionAdvantage = hasVisionAdvantage || eligibility.hasVisionAdvantage;
                    hasVisionCare = hasVisionCare || eligibility.hasVisionCare;
                    eligibility.eligibilityTypeDescription === 'Commercial' ? hasCommercial = true : '';
                }
            })
        }
        
        if (dvEligibilities && dvEligibilities.eligibilities.length != 0) {
            dvEligibilities.eligibilities.forEach(eligibility => {
                if (['active', 'termed'].includes(eligibility.eligibilityStatus.toLowerCase())) {
                    hasRx = hasRx || eligibility.hasRx;
                    hasVisionAdvantage = hasVisionAdvantage || eligibility.hasVisionAdvantage;
                    hasVisionCare = hasVisionCare || eligibility.hasVisionCare;
                    hasDentalAdvantage = hasDentalAdvantage || eligibility.hasDentalAdvantage;
                }
            })
        }
        
        let hasClaimsAndEob;
        let hasOnlyClaims;

        if (['commercial', 'medicare', 'snp'].includes(eligibilityType)
            || (['wellness', 'non medical'].includes(eligibilityType) && hasCommercial)
            || (['dentalvision', 'wellness', 'non medical'].includes(eligibilityType) && hasDentalAdvantage)
        ) {
            hasClaimsAndEob = true;
        }
        
        if (['chc', 'chip', 'medicaid'].includes(eligibilityType)
            || (['dentalvision', 'wellness', 'non medical'].includes(eligibilityType) && (hasRx || hasVisionAdvantage || hasVisionCare))
        ) {
            hasOnlyClaims = true;
        }

        switch (expectedAnswerType) {
            case 'claims/eob':  
                if (hasClaimsAndEob) {
                    answer = `You can view your EOBs by visiting [Claims and EOBs](${ link }).`;
                } else {
                    answer = 'ERROR: USER DOES NOT HAVE CLAIMS AND EOB'
                }
                break;   
            case 'claims':
                if (hasOnlyClaims) {
                    answer = `You can view your recent claims here: [Claims](${ link }).`;
                } else {
                    answer = 'ERROR: USER DOES NOT HAVE CLAIMS ONLY'
                }
                break;
            case 'no claims/eob':
                if (!hasClaimsAndEob && !hasOnlyClaims) {
                    answer = `Your plan does not include coverage for services. Please check with your primary insurance carrier to view your claims.`;
                } else {
                    answer = 'ERROR: USER HAS CLAIMS OR CLAIMS & EOB'
                }
                break;      
        }

        return { answer, followUpQuestion }     
    }
}

export const builder = new ClaimsAnswerBuilder();
