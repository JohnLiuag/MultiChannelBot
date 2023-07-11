import * as cluModel1 from '../cognitive-resources/UPMCHP-MEMBERBOT-CLU-DEV.json';
import * as cluModel2 from '../cognitive-resources/UPMCHP-MEMBERBOT-CLU-UAT.json';


(() => {
    console.log(' == CLU COMPARING ==');

    // I comparing lists of intents
    let intents = {}
    cluModel1.assets.intents.forEach( el => {
        intents[el.category] = [1];
    });
    cluModel2.assets.intents.forEach( el => {
        intents[el.category] ? intents[el.category].push(2) : intents[el.category] = [2];
    })

    let intentOnlyInModel1: Array<string> = [];
    let intentOnlyInModel2: Array<string> = [];
    Object.keys(intents).forEach(key => {
        if (intents[key].length === 1) {
            if (intents[key][0] === 1) {
                intentOnlyInModel1.push(key);
            } else {
                intentOnlyInModel2.push(key);
            }
            
        }
    })
    if (intentOnlyInModel1.length === 0 && intentOnlyInModel2.length === 0) {
        console.log('\nThe set of intents in the two models is the same');
    } else {
        console.log('\nThe set of intents in two models has the following differences:');
        if (intentOnlyInModel1.length > 0) {
            console.log('\n## exist only in the FIRST model:');
            intentOnlyInModel1.forEach( el => console.log('    ', el));
        }
        if (intentOnlyInModel2.length > 0) {
            console.log('\n## exist only in the SECOND model:');
            intentOnlyInModel2.forEach( el => console.log('    ', el));
        }
        // console.log('intentOnlyInModel1', intentOnlyInModel1);
        // console.log('intentOnlyInModel2', intentOnlyInModel2);
    }

    // II comparing list of phrases for each inent

    let utterances = {}
    cluModel1.assets.utterances.forEach( el => {
        if (!utterances[el.intent]) {
            utterances[el.intent] = {}
        }
        utterances[el.intent][el.text] = [1];
    });
    cluModel2.assets.utterances.forEach( el => {
        if (!utterances[el.intent]) {
            utterances[el.intent] = {}
        }
        utterances[el.intent][el.text] ? utterances[el.intent][el.text].push(2) : utterances[el.intent][el.text] = [2];
    });

    let utteranceIn1: Array<any> = [];
    let utteranceIn2: Array<any> = [];
    Object.keys(utterances).forEach( key => {
        Object.keys(utterances[key]).forEach( text => {
            if (utterances[key][text].length === 1) {
                if (utterances[key][text][0] === 1) {
                    // console.log('EXIST IN I ', { intent: key, text});
                    utteranceIn1.push({ intent: key, text});
                } else {
                    // console.log('EXIST IN II', { intent: key, text});
                    utteranceIn2.push({ intent: key, text});
                }
            }
        })
    })
    if (utteranceIn1.length) {
        console.log('\n## exist only in the FIRST model:');
        utteranceIn1.forEach( el => console.log(el.intent, ':', el.text));
    }
    if (utteranceIn2.length) {
        console.log('\n## exist only in the SECOND model:');
        utteranceIn2.forEach( el => console.log(el.intent, ':', el.text));
    }
})()