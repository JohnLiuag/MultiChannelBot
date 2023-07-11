import { followUpQuestions } from "../../test-data/questions/follow-up-question.test-data.js";
import { collector } from '../data-collector-service.js';


class EligibilityAnswerBuilder {

    async eligibilityAnswer (userData, question, planStatus) {
        let profile = userData.consumerProfile;
        let eligibilityType = profile.eligibilityType.toLowerCase();
        let corpCode = profile.corpCode ? profile.corpCode.toLowerCase() : '';
        let hasWellnessOrNonMedical = ['wellness', 'non medical'].includes(eligibilityType);
        let status = profile.memberStatus || profile.dvMemberStatus;
        let eligibilityStatus = status.toLowerCase();
        let answer;
        let followUpQuestion;
        !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
        let intent;
        let type;
        question = question.toLowerCase();
        let hasDualPlans;
        let hasFuturePlan;
        let hasFutureTermedDate;
        let fileData;

        if (question.includes('dental')) {
            intent = 'dental';
            type = 'dental';
        } else if (question.includes('vision') || question.includes('eye') || question.includes('glasses') || question.includes('contacts')) {
            intent = 'vision';
            type = 'vision';
        } else if (question.includes('wellness')) {
            intent = 'wellness';
            type = 'wellness';
        } else {
            intent = 'general';
            type = 'medical';
        }

        const plansData = {
            active: {   
                coverages: [],
                startDate: {},
                hasWellness: false,
                wellnessStartDate: '',
                futureTermedDate: '',
            }, 
            futureactive: {
                coverages: [],
                startDate: {},
                hasWellness: false,
                wellnessStartDate: '',
            },
            termed: {
                coverages: [],
                endDate: {},
                recentCoverages: {},
                hasWellness: false,
                wellnessEndDate: '',
            }
        }

        if (userData.dualCoverageInfo && userData.dualCoverageInfo.empIs && userData.dualCoverageInfo.empIs.length > 1) { //Check if user has something on dual plans
            
            const dualPlanExcludePlans = ['wellness', 'dentalvision', 'non medical', 'non-medical']; //TODO left proper non medical value after investigation on test user
            let activeDualPlansArray = [];
            let activeMedicalDualPlansArray = [];
            const currentDate = new Date();
            
            userData.dualCoverageInfo.empIs.forEach(plan => {
                const planStartDate = new Date(plan.eligibilityStartDate);
                const planEndDate = new Date(plan.eligibilityEndDate);
                if (!dualPlanExcludePlans.includes(plan.lineOfBusiness.toLowerCase()) && (!plan.eligibilityEndDate || planEndDate > currentDate) && planStartDate <= currentDate) { //collect all active dual Medical plan to detect the dual coverage case
                    activeMedicalDualPlansArray.push(plan)
                }
                if (!plan.eligibilityEndDate && planStartDate <= currentDate) { //collect all active dual plans for return if current plan is active or futureActive
                    activeDualPlansArray.push(plan)
                }
            })

            hasDualPlans = activeMedicalDualPlansArray.length > 1; //if has more than one active medical plan - mark it as dual

            //Actual logic based on wellness intent prioritization
            if (activeDualPlansArray.length === 1 && !activeDualPlansArray[0].isCurrentEligibilityInfo) { //if has active plan and it is not current one - request the proper plan
                userData = await collector.getData(activeDualPlansArray[0].associatedMemberId, ['eligibility']); //in this case no reason to request dualCoverageInfo one more time to pass dual plan check again.
            } else if (activeDualPlansArray.length > 1 && !hasDualPlans) {
                let mostPriorityActivePlan;
                activeDualPlansArray.forEach (plan => {
                    if (['general', 'dental', 'vision'].includes(intent) && ['chc', 'snp', 'chip', 'commercial', 'medicare', 'medicaid', 'dentalvision'].includes(plan.lineOfBusiness.toLowerCase())) {
                        mostPriorityActivePlan = plan;
                    } else if (intent === 'wellness') {
                        if (profile.hasWellness && plan.isCurrentEligibilityInfo) {
                            mostPriorityActivePlan = plan;
                        } else if (!profile.hasWellness && plan.lineOfBusiness.toLowerCase() === 'wellness') {
                            mostPriorityActivePlan = plan;
                        }   
                    }
                })
                if (!mostPriorityActivePlan.isCurrentEligibilityInfo) {
                    
                    const userId = {
                        memberId: userData.consumerProfile.medicalMemberId || profile.dentalVisionMemberId,
                        dualMemberId: mostPriorityActivePlan.associatedMemberId
                    }
                    userData = await collector.getData(userId, ['eligibility']);
                    //reset variables accordingly to a fetched another plan
                    profile = userData.consumerProfile;
                    status = profile.memberStatus || profile.dvMemberStatus;
                    eligibilityStatus = status.toLowerCase();
                    eligibilityType = userData.eligibility[0].eligibilities[0].eligibilityTypeDescription.toLowerCase();
                    corpCode = userData.eligibility[0].eligibilities[0].corpId.toLowerCase();
                    hasWellnessOrNonMedical = ['wellness', 'non medical'].includes(eligibilityType);
                    !userData.menuStatus ? followUpQuestion = followUpQuestions.slice(0, 1) : followUpQuestion = followUpQuestions;
                }      
            }
        }
        
        userData.eligibility.forEach(plan => {
            plan.eligibilities.forEach(eligibility => {
                if (eligibility) { //Check if eligibilities array is not empty
                    const status = eligibility.eligibilityStatus.toLowerCase();
                    const planStartDate = new Intl.DateTimeFormat('en-US', {month:'2-digit',day:'2-digit', year:'numeric'}).format(new Date(eligibility.startDate));
                    const planEndDate = new Intl.DateTimeFormat('en-US', {month:'2-digit',day:'2-digit', year:'numeric'}).format(new Date(eligibility.endDate));
                    const coverages = [];
                    status === 'futureactive' ? hasFuturePlan = true : '';
                    eligibility.hasMedical ? coverages.push('medical') : '';
                    eligibility.hasAnyDental ? coverages.push('dental') : '';
                    eligibility.hasAnyVision ? coverages.push('vision') : '';
                    
                    //medical/dental/vision coverages data collecting logic
                    coverages.forEach (coverage => {
                        if (!plansData[status].coverages.includes(coverage)) {
                            plansData[status].coverages.push(coverage)
                        }
                        if (['active', 'futureactive'].includes(status)) { //collect coverages groupped by startDate for Acrive and Future Active plans
                            !plansData[status].startDate[planStartDate] ? plansData[status].startDate[planStartDate] = [] : '';
                            plansData[status].startDate[planStartDate].push(coverage)
                        } else if (status === 'termed') { //collect dates groupped by most recent coverages for Termed plans
                            !plansData[status].recentCoverages[coverage] ? plansData[status].recentCoverages[coverage] = planEndDate : '';
                        }   
                    })
                    
                    //wellness coverages data collecting logic
                    if (profile.hasWellness || eligibilityType === 'wellness') {
                        plansData[status].hasWellness = true;
                        if (['active', 'futureactive'].includes(status)) {
                            !plansData[status].wellnessStartDate ? plansData[status].wellnessStartDate = planStartDate : '';
                        } else {
                            !plansData[status].wellnessEndDate ? plansData[status].wellnessEndDate = planEndDate : '';
                        }
                    }

                    //determine future termed date on an appropriate eligibility
                    if (status === 'active' && !eligibility.endDate.includes('9999-12-31') 
                    && !(intent === 'wellness' && eligibility.eligibilityTypeDescription === 'DentalVision')) { 
                        hasFutureTermedDate = true;
                        plansData.active.futureTermedDate = planEndDate;
                    }
                }
            })
        })
        for (const [key, value] of Object.entries(plansData.termed.recentCoverages)) { //regroup termed coverages by endDate for Termed and Future Active plans
            !plansData.termed.endDate[value] ? plansData.termed.endDate[value] = [] : '';
            plansData.termed.endDate[value].push(key);
        }
        
        const data = plansData[eligibilityStatus];
        
        switch (planStatus) {
            case 'active':
                if (!hasDualPlans) {
                    if (eligibilityStatus === 'active') {
                        const uniqueFutureCoverages = plansData.futureactive.coverages.filter(coverage => !plansData.active.coverages.includes(coverage));
                        if (hasWellnessOrNonMedical && !(intent === 'vision' && profile.hasVisionCare)) {
                            if (uniqueFutureCoverages.length === 0) {
                                if (eligibilityType === 'wellness') {
                                    if (intent === 'wellness') {
                                        answer = `You currently have a wellness plan. Your wellness coverage began on ${ data.wellnessStartDate }.`
                                    } else if (intent === 'general') {
                                        answer = `Your plan does not include medical, dental, or vision coverage, but you do have a wellness plan through your employer. Your wellness coverage began on ${ data.wellnessStartDate }.`;
                                    } else {
                                        answer = `Your plan does not include ${ type } coverage, but you do have a wellness plan through your employer. Your wellness coverage began on ${ data.wellnessStartDate }.`;
                                    }
                                } else {
                                    answer = `Your plan does not include ${ type } coverage. Would you like to chat with a concierge for more information?`;
                                }  
                            } else {
                                eligibilityType === 'wellness' ? answer = 'You currently have wellness-only coverage.' : '';
                                eligibilityType === 'non medical' ? answer = 'You currently have non medical coverage.' : '';
                            }
                        } else {
                            if (intent === 'general') { //TODO rewrite logc by checking whether there is an element
                                if (Object.keys(data.startDate).length === 1) {//Check if coverages have same start dates
                                    answer = `You currently have active ${ Object.values(data.startDate)[0].join(', ').replace(/, ([^,]*)$/, ' and $1') } coverage. Your coverage began on ${ Object.keys(data.startDate)[0] }.`;
                                } else if (Object.keys(data.startDate).length === 2) { //If coverages have different start dates
                                    answer = `You currently have active ${ data.coverages.join(', ').replace(/, ([^,]*)$/, ' and $1') } coverage. Your ${ Object.values(data.startDate)[0].join(', ').replace(/, ([^,]*)$/, ' and $1') } coverage began on ${ Object.keys(data.startDate)[0] }. Your ${ Object.values(data.startDate)[1].join(', ').replace(/, ([^,]*)$/, ' and $1') } coverage began on ${ Object.keys(data.startDate)[1] }.`;
                                } else if (Object.keys(data.startDate).length === 3) { //TODO Ask whether this scenario is possible
                                    answer = `You currently have active ${ data.coverages.join(', ').replace(/, ([^,]*)$/, ' and $1') } coverage. Your ${ Object.values(data.startDate)[0].join(', ').replace(/, ([^,]*)$/, ' and $1') } coverage began on ${ Object.keys(data.startDate)[0] }. Your ${ Object.values(data.startDate)[1].join(', ').replace(/, ([^,]*)$/, ' and $1') } coverage began on ${ Object.keys(data.startDate)[1] }. Your ${ Object.values(data.startDate)[2].join(', ').replace(/, ([^,]*)$/, ' and $1') } coverage began on ${ Object.keys(data.startDate)[2] }.`;
                                }
                            } else if (['dental', 'vision'].includes(intent)) {
                                let startDate;
                                for (let i = 0; i < Object.keys(data.startDate).length; i++) {
                                    Object.values(data.startDate)[i].includes(intent) ? startDate = Object.keys(data.startDate)[i] : '';
                                }
                                if (intent === 'vision' && ['oexc', 'exch'].includes(corpCode)) {
                                    answer = [];
                                    if (userData.visionDiscountSchedule) {
                                        answer[0] = `You don't have vision coverage, but you are eligible for the NVA EyeEssential Discount. This discount only applies at participating providers, and it must be given at the time of service, so we encourage you to verify your provider's participation status prior to receiving services.`;
                                        answer[1] = `Please see your Vision Discount Schedule of Benefits to learn more.`;
                                        fileData = userData.visionDiscountSchedule;
                                    } else {
                                        answer[0] = `You don't have vision coverage, but you may be eligible for a discount with your plan. If you'd like to learn more, please type **"help"** to chat with a concierge.`;
                                        answer[1] = '';
                                        followUpQuestion = [];
                                    }
                                } else if (intent === 'vision' && profile.hasVisionCare && ['commercial', 'dentalvision', 'wellness', 'non medical'].includes(eligibilityType)) {
                                    answer = [];
                                    answer[0] = `You currently have vision coverage, which began on ${ startDate }.`;
                                    if (userData.visionDiscountPlan?.status === 200 && userData.visionDiscountPlan?.pdfFileLink) {
                                        answer[1] = `In addition to your vision benefits, you are also eligible for the NVA EyeEssential Discount Plan after your benefits have been exhausted. Please see the NVA EyeEssentials Discount Plan document to learn more.`;
                                        answer[2] = userData.visionDiscountPlan.pdfFileLink;
                                    } else {
                                        answer[1] = `In addition to your vision benefits, you may be eligible for a discount after your benefits have been exhausted. You can learn more by reviewing your UPMC Vision Care Coverage, which you can find under [Plans and Coverage](#/main/content/your-coverage-and-benefits). You can also type **"help"** to chat with a concierge for more information.`
                                        followUpQuestion = [];
                                    }
                                } else {
                                    if (profile.hasValueAddedBenefit && !data.coverages.includes(intent)) {
                                        answer = `You have coverage for some dental and vision services included in your medical plan. Would you like to chat with a concierge for more information?`;
                                    } else {
                                        if (data.coverages.includes(intent)) {       
                                            answer = `Your ${ type } coverage is currently active. Your coverage began on ${ startDate }.`;
                                        } else if (!data.coverages.includes(intent)) {
                                            if (data.coverages.includes('medical')
                                                && ((intent === 'dental' && ['medicaid', 'chc', 'chip', 'medicare'].includes(eligibilityType)
                                                || ['medicaid', 'chc', 'chip',].includes(eligibilityType)))) {
                                                answer = `Your medical plan includes coverage for some ${ type } services. Would you like to chat with a concierge for more information?`;        
                                            } else {
                                                !uniqueFutureCoverages.includes(type) ? answer = `Your plan does not include ${ type } coverage.` : '';
                                            }
                                        }
                                    }
                                }
                            } else if (intent === 'wellness') {
                                if (profile.hasWellness) {
                                    answer = `You currently have a wellness plan. Your wellness coverage began on ${ data.wellnessStartDate }.`;
                                } else {
                                    answer = `Your plan does not include wellness coverage.`;
                                }
                            }
                        }

                        //extends answer with an information about unique future coverage
                        if (uniqueFutureCoverages.length != 0 && intent != 'wellness') {
                            let futureCoverages = {};
                            const futureCoveragesStartDate = plansData.futureactive.startDate;
                            for (let i = 0; i < Object.keys(futureCoveragesStartDate).length; i++) { //create a new object based on the unique future coverages
                                uniqueFutureCoverages.forEach(coverage => {                  
                                    if (Object.values(futureCoveragesStartDate)[i].filter(futureCoverage => futureCoverage === coverage)) {
                                        if (!futureCoverages.hasOwnProperty(Object.keys(futureCoveragesStartDate)[i])) {
                                            futureCoverages[Object.keys(futureCoveragesStartDate)[i]] = [coverage]
                                        } else {
                                            futureCoverages[Object.keys(futureCoveragesStartDate)[i]].push(coverage)
                                        }
                                    }
                                })
                            }
                            if (!data.coverages.includes(type)) {
                                if (!answer) {
                                    answer = `Your ${ Object.values(futureCoverages)[0].join(', ').replace(/, ([^,]*)$/, ' and $1') } coverage will begin on ${ Object.keys(futureCoverages)[0] }.`;
                                } else {
                                    if (Object.keys(futureCoverages)[0]) {
                                        answer = answer + ' ' + `Your ${ Object.values(futureCoverages)[0].join(', ').replace(/, ([^,]*)$/, ' and $1') } coverage will begin on ${ Object.keys(futureCoverages)[0] }.`;
                                    }
                                    if (Object.keys(futureCoverages)[1]) {
                                        answer = answer + ' ' + `Your ${ Object.values(futureCoverages)[1].join(', ').replace(/, ([^,]*)$/, ' and $1') } coverage will begin on ${ Object.keys(futureCoverages)[1] }.`;
                                    }
                                    if (Object.keys(futureCoverages)[2]) {
                                        answer = answer + ' ' + `Your ${ Object.values(futureCoverages)[2].join(', ').replace(/, ([^,]*)$/, ' and $1') } coverage will begin on ${ Object.keys(futureCoverages)[21] }.`;
                                    }
                                }
                                answer = answer + ' Please note that any services rendered prior to that date will not be covered by your plan.'; //TODO Check if pbi is updated 
                            }
                        }
                        const hasVisionDiscountCase = intent === 'vision' 
                            && ((profile.hasVisionCare && ['commercial', 'dentalvision', 'wellness', 'non medical'].includes(eligibilityType)) 
                            || (eligibilityType === 'commercial' && !['oexc', 'exch'].includes(corpCode)))
                        //extends answer with an information about future termed date.
                        
                        if ((hasFutureTermedDate && !hasFuturePlan) && eligibilityType != 'non medical' && !hasVisionDiscountCase
                        //&& (['medical', 'wellness'].includes(type)
                        && (type === 'medical'
                        || (type === 'wellness' && data.hasWellness)
                        || (['dental', 'vision'].includes(type) && data.coverages.includes(type)) 
                        || (['dental', 'vision'].includes(type) && eligibilityType === 'wellness'))){  //TODO Add logic based on Barb's last AC's update
                            answer = [answer];   
                            if ((eligibilityType === 'commercial' && !['oexc', 'exch'].includes(corpCode)) || eligibilityType === 'dentalvision') {
                                answer[1] = `Right now, you have a future termination date of ${ data.futureTermedDate }. However, it's possible that your group's coverage hasn't been renewed yet. You can check back closer to that date to verify that your coverage has been renewed.`
                            } else if ((eligibilityType === 'commercial' && corpCode === 'oexc') || ['medicare', 'snp'].includes(eligibilityType)) {
                                answer[1] = `Right now, you have a future termination date of ${ data.futureTermedDate }. If you have any questions about this, please type **"help"** to chat with a live concierge.`;
                                followUpQuestion = [];
                            } else if (eligibilityType === 'commercial' && corpCode === 'exch') {
                                answer[1] = `Right now, you have a future termination date of ${ data.futureTermedDate }. If you have any questions about this, please outreach to <a href=\"https://www.pennie.com\" target=\"_blank\">Pennie</a> online or by phone at <a href=\"tel:1-844-844-8040\">1-844-844-8040</a> for more information.`;
                            } else if (['medicaid', 'chc', 'chip'].includes(eligibilityType)) {
                                answer[1] = `Right now, you have a future termination date of ${ data.futureTermedDate }. If you have any questions about this, please outreach to your county assistance office for more information.`;
                            } else if (eligibilityType === 'wellness') {
                                answer[1] = `Right now, you have a future termination date of ${ data.futureTermedDate }. However, it's possible that your group's coverage hasn't been renewed yet. You can check back closer to that date to verify that your wellness coverage has been renewed.`;
                            }         
                        }
                        //!!!NOTE HIX STATSUS LOGIC IS FROZEN TILL STABLE TEST USERS BE PROVIDED!!!
                        /*
                        //Hix status check
                        if (eligibilityType === 'commercial' 
                        && ['exch', 'oexc'].includes(corpCode) 
                        && profile.memberId.slice(-2) === '01' 
                        && ['general', 'dental', 'vision'].includes(intent)) {
                            userData.hixStatus = await collector.getHixStatus(profile.memberId, userData.userToken);
                            const hixStatusCode = userData.hixStatus[0].statusCode;
                            if (userData.hixStatus && ['P01', 'P02', 'C01', 'C02', 'E01', 'T30', 'T31', 'T60', 'T90'].includes(hixStatusCode)) {
                                answer = [];
                                if (['P01', 'P02'].includes(hixStatusCode)) {
                                    answer[0] = `Your coverage is currently pending until your payment is received. You can make a payment online by visiting [Premium Payments](/main/content/view-pay-premium-bills).`;
                                    answer[1] = `If you made your payment recently, please note that it can take up to 24 hours for it to be applied to your account.`;
                                    followUpQuestion = [];
                                } else if (['C01', 'C02'].includes(hixStatusCode)) {
                                    answer[0] = `Your coverage has been voided.`;
                                    answer[1] = `If you have questions about this, please type **"help"** to chat with a live concierge.`;
                                    followUpQuestion = [];
                                } else if (hixStatusCode === 'E01') {
                                    answer[0] = `We have received your initial payment, but your coverage hasn't started yet.`;
                                    answer[1] = `If you have any questions about this, please type **“help”** to chat with a live concierge.`;
                                } else if (['T30', 'T31'].includes(hixStatusCode)) {
                                    const currentDate = new Intl.DateTimeFormat('en-US', {month:'2-digit',day:'2-digit', year:'numeric'}).format(new Date());
                                    answer[0] = `Your coverage is currently active as of ${ currentDate }. However, your account is past due. Please make a payment as soon as possible to avoid any disruptions in coverage. You can make a payment online by visiting [Premium Payments](#/main/content/view-pay-premium-bills).`;
                                    answer[1] = `If you made your payment recently, please note that it can take up to 24 hours for it to be applied to your account.`;
                                    followUpQuestion = [];
                                } else if (hixStatusCode === 'T60') {
                                    answer[0] = `Your coverage is currently active, but your account is more than 30 days past due. Please make a payment as soon as possible to avoid any disruptions in coverage. You can make a payment online by visiting [Premium Payments](#/main/content/view-pay-premium-bills).`;
                                    answer[1] = `If you made your payment recently, please note that it can take up to 24 hours for it to be applied to your account. If you are in urgent need of a prescription, please type **"help"** to chat with a live concierge.`;
                                    followUpQuestion = [];
                                } else if (hixStatusCode === 'T90') {
                                    answer[0] = `Your coverage is currently active, but your account is more than 60 days past due. Please make a payment as soon as possible to avoid any disruptions in coverage. You can make a payment online by visiting [Premium Payments](#/main/content/view-pay-premium-bills).`;
                                    answer[1] = `If you made your payment recently, please note that it can take up to 24 hours for it to be applied to your account. If you are in urgent need of a prescription, please type **"help"** to chat with a live concierge.`;
                                    followUpQuestion = [];
                                }
                            }
                        }
                        */
                    } else {
                        answer = 'ERROR: PLAN IS NOT ACTIVE';
                    }
                } else {
                    answer = 'ERROR: USER HAS DUAL COVERAGE';
                }
                break;
            case 'termed':
                if (!hasDualPlans) {
                    if (eligibilityStatus === 'termed') {  
                        const contacts = {
                            medicareSnp: 'Medicare at 1-800-MEDICARE (1-800-633-4227) or type **"help"** to chat with concierge.',
                            medicaidChc: 'DHS Statewide Customer Service Center at 1-877-395-8930.',
                            commercial: 'your employer.',
                            onExchange: 'Marketplace: Pennie at 1-844-844-8040.',
                            offExchangeChip: 'If you have questions about this, please type **"help"** to chat with concierge'
                        }
                        corpCode === 'exch' ? eligibilityType = 'on-exchange' : '';
                        corpCode === 'oexc' ? eligibilityType = 'off-exchange': '';
                        const exceptionPlanTypes = ['medicaid', 'chc', 'medicare', 'snp', 'on-exchange', 'chip', 'off-exchange'];
                        const pleaseContactAnswer = `For more information on why your coverage has ended, please contact:`;
                        
                        if (intent === 'general') {//build an answer begining for general type questions
                            if (data.hasWellness) {
                                answer = `Your wellness coverage is not currently active. Your coverage ended on ${ data.wellnessEndDate }.`;
                            } else {
                                answer = `Your plan is not currently active. Your ${ Object.values(data.endDate)[0].join(', ').replace(/, ([^,]*)$/, ' and $1') } coverage ended on ${ Object.keys(data.endDate)[0] }.`;
                                if (Object.keys(data.endDate)[1]) {
                                    answer = answer + ` Your ${ Object.values(data.endDate)[1].join(', ').replace(/, ([^,]*)$/, ' and $1') } coverage ended on ${ Object.keys(data.endDate)[1] }.`;
                                }
                                if (Object.keys(data.endDate)[2]) {
                                    answer = answer + ` Your ${ Object.values(data.endDate)[2].join(', ').replace(/, ([^,]*)$/, ' and $1') } coverage ended on ${ Object.keys(data.endDate)[2] }.`;
                                }
                            }
                        } else if (['dental', 'vision'].includes(intent)) {//build an answer begining for dental/vision type questions
                            if (data.hasWellness) {
                                answer = `Your past plan did not include ${ intent } coverage, but you did have a wellness plan through your employer. Your wellness coverage ended on ${ data.wellnessEndDate }.`;
                            } else {
                                let endDate;
                                for (let i = 0; i < Object.keys(data.endDate).length; i++) {
                                    Object.values(data.endDate)[i].includes(type) ? endDate = Object.keys(data.endDate)[i] : '';
                                }
                                answer = `Your ${ intent } coverage is not currently active. Your coverage ended on ${ endDate }.`;
                            }
                        } else if (intent === 'wellness') {
                            if (data.hasWellness) {
                                answer = `Your wellness coverage is not currently active. Your coverage ended on ${ data.wellnessEndDate }.`
                            } else {
                                answer = `Your plan does not include wellness coverage.`;
                            }
                        }
                        
                        if (!data.hasWellness) {
                            if ((intent === 'general' || data.coverages.includes(type))) {
                                ['chip', 'off-exchange'].includes(eligibilityType) ? answer = answer + ` ${ contacts.offExchangeChip }` : '';
                                ['medicare', 'snp'].includes(eligibilityType) ? answer = answer + ` ${ pleaseContactAnswer } ${ contacts.medicareSnp }` : '';
                                ['medicaid', 'chc'].includes(eligibilityType) ? answer = answer + ` ${ pleaseContactAnswer } ${ contacts.medicaidChc }` : '';
                                eligibilityType === 'on-exchange' ? answer = answer + ` ${ pleaseContactAnswer.slice(0, -1) } ${ contacts.onExchange }` : '';
                                eligibilityType === 'commercial' || !exceptionPlanTypes.includes(eligibilityType) ? answer = answer + ` ${ pleaseContactAnswer } ${ contacts.commercial }` : '';   
                            } else {
                                answer = `Your plan does not include ${ intent } coverage.`;
                            }
                        }
                    } else {
                        answer = 'ERROR: PLAN IS NOT TERMED';
                    }
                } else {
                    answer = 'ERROR: USER HAS DUAL COVERAGE';
                }
                break;
            case 'future active':
                if (!hasDualPlans) {
                    if (eligibilityStatus === 'futureactive') {
                        const hasFutureWellnessOnly = eligibilityType === 'wellness';
                        let startDate;
                        for (let i = 0; i < Object.keys(data.startDate).length; i++) {
                            Object.values(data.startDate)[i].includes(type) ? startDate = Object.keys(data.startDate)[i] : '';
                            !startDate && Object.keys(data.startDate)[0] ? startDate = Object.keys(data.startDate)[0] : '';
                        }
                        if (hasFutureWellnessOnly) {
                            if (data.hasWellness) {
                                if (['general', 'wellness'].includes(intent)) {
                                    answer = `Your wellness coverage will begin on ${ data.wellnessStartDate}.`;
                                } else if (['dental', 'vision'].includes(intent)) {
                                    answer = `Your future plan does not include medical, dental, or vision coverage, but you will have a wellness plan through your employer. Your wellness coverage will begin on ${ data.wellnessStartDate}.`;
                                }
                            } else {
                                answer = `Your plan does not include wellness coverage.`;
                            }
                        } else {
                            if (intent === 'general') {
                                if (Object.keys(data.startDate).length === 1) {
                                    answer = `Your ${ data.coverages.join(', ').replace(/, ([^,]*)$/, ' and $1') } coverage will begin on ${ startDate }. Please note that any services rendered prior to that date will not be covered by your plan.`; //TODO Check this answer after MVP.
                                } else {
                                    if (Object.keys(data.startDate)[0]) {
                                        answer = `Your ${ Object.values(data.startDate)[0].join(', ').replace(/, ([^,]*)$/, ' and $1') } coverage will begin on ${ Object.keys(data.startDate)[0] }.`;
                                    }
                                    if (Object.keys(data.startDate)[1]) {
                                        answer = answer + ` Your ${ Object.values(data.startDate)[1].join(', ').replace(/, ([^,]*)$/, ' and $1') } coverage will begin on ${ Object.keys(data.startDate)[1] }.`;
                                    }
                                    if (Object.keys(data.startDate)[2]) {
                                        answer = answer + ` Your ${ Object.values(data.startDate)[2].join(', ').replace(/, ([^,]*)$/, ' and $1') } coverage will begin on ${ Object.keys(data.startDate)[2] }.`;
                                    }
                                    answer = answer + ` Please note that any services rendered prior to that date will not be covered by your plan.`;
                                }
                            } else if (['dental', 'vision'].includes(intent)) {
                                if (data.coverages.includes(intent)) {
                                    answer = `Your ${ intent } coverage will begin on ${ startDate }. Please note that any services rendered prior to that date will not be covered by your plan.`; 
                                } else {
                                    answer = `Your plan does not include ${ intent } coverage.`;
                                }
                            } else if (intent === 'wellness') {
                                if (data.hasWellness) {
                                    answer = `Your wellness coverage is not currently active. Your coverage will begin on ${ data.wellnessStartDate}.`;
                                } else {
                                    answer = `Your plan does not include wellness coverage.`;
                                }
                            }
                        }
                    } else {
                        answer = 'ERROR: PLAN IS NOT FUTURE';
                    }
                } else {
                    answer = 'ERROR: USER HAS DUAL COVERAGE';
                }
                break;
            case 'dual coverage':
                if (hasDualPlans) {
                    answer = [];
                    answer[0] = 'Our records indicate that you have more than one active plan.';
                    answer[1] = 'Would you like to chat with a live concierge for further assistance?';
                } else {
                    answer = 'ERROR: USER DOES NOT HAVE DUAL COVERAGE';
                }
                break;
        }

        return { answer, followUpQuestion, fileData }
    }
}

export const builder = new EligibilityAnswerBuilder();