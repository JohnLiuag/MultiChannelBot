import { reporter } from './reporter.service.js';
import chai, { expect } from 'chai';
import like from 'chai-like';
import things from 'chai-things';
chai.use(like);
chai.use(things);

import Ajv from 'ajv';
var ajv = new Ajv();

class Validator {
    errors = [];

    statusCode(actual, expected) {
        let testName = 'Status code check';
        try {
            expect(actual).to.equal(expected);
            testName += ' - PASSED';
        } catch (e) {
            this.errors.push(new StatusCodeValidationError(actual, expected));
            testName += ' - FAILED';
        }
        reporter.tests.push(testName);
    }

    jsonSchema(actual, expected) {
        let testName = 'JSON schema check';
        try {
            var valid = ajv.validate(expected, actual);
            if (!valid) {
                this.errors.push(new JSONSchemaValidationError(ajv.errorsText()));
                testName += ' - FAILED';
                reporter.failedSchema = expected;
            } else {
                testName += ' - PASSED';
            }
        } catch (e) {
            this.errors.push(e);
            testName += ' - FAILED';
        }
        reporter.tests.push(testName);
    }

    _trimTextRows(text){
        //split text into separate rows
        let arrayOfStrings = text.split('\n');
        let trimmedRows = [];

        //trim each row
        for (let str of arrayOfStrings){
            trimmedRows.push(str.trim())
        }

        //return new text without extra spaces
        return trimmedRows.join(' ')
    }

    answer(actual, expected) {
        let testName = 'Answer check';
        try {
            //console.log('ACTUAL');
            //console.log('ANSWER COMPARE');
            console.log(this._trimTextRows(actual));
            //console.log(this._trimTextRows(actual).length)
            //console.log('EXPECTED');
            console.log(expected);
            //console.log(expected.length)
            expect(this._trimTextRows(actual)).to.equal(expected);
            testName += ' - PASSED';
        } catch (e) {
            this.errors.push(new AnswerValidationError(actual, expected));
            testName += ' - FAILED';
        }
        reporter.tests.push(testName);
    }

    followUpQuestions(actual, expected) {
        let testName = 'Buttons check';
        try {
            //console.log('FollowUp COMPARE');
            console.log(actual);
            console.log(expected);
            expect(actual.length).to.equal(expected.length);          
            actual.forEach(button => {
                expect(expected).to.include(button);
            });
            testName += ' - PASSED';
        } catch (e) {
            this.errors.push(new FollowUpQuestionsValidationError(actual, expected));
            testName += ' - FAILED';
        }
        reporter.tests.push(testName);
    }

    buttons(actual, expected) {
        let testName = 'Buttons check';
        try {
            //console.log('BUTTONS COMPARE');
            console.log(actual);
            console.log(expected);
            expect(actual.length).to.equal(expected.length);          
            actual.forEach(button => {
                expect(expected).to.include(button);
            });
            testName += ' - PASSED';
        } catch (e) {
            this.errors.push(new ButtonsValidationError(actual, expected));
            testName += ' - FAILED';
        }
        reporter.tests.push(testName);
    }

    includes(actual, expected) {
        let testName = 'If Button is included check';
        try {
            console.log(actual);
            console.log(expected);
            expect(actual).to.be.an('array').that.includes(expected);
            testName += ' - PASSED';
        } catch (e) {
            this.errors.push(new IncludesValidationError(actual, expected));
            testName += ' - FAILED';
        }
        reporter.tests.push(testName);
    }

    doesNotInclude(actual, expected) {
        let testName = 'If Button is not included check';
        try {
            console.log(actual);
            console.log(expected);
            expect(actual).to.be.an('array').that.does.not.include(expected);
            testName += ' - PASSED';
        } catch (e) {
            this.errors.push(new DoesNotIncludeValidationError(actual, expected));
            testName += ' - FAILED';
        }
        reporter.tests.push(testName);
    }

    url(actual, expected) {
        let testName = 'ID Cards URLs check';
        try {
            //console.log('ACTUAL URL');
            //console.log(actual);
            //console.log('EXPECTED URL');
            //console.log(expected);
            expect(actual.length).to.equal(expected.length);
            actual.forEach(url => {
                expect(expected).to.include(url);
            });
            testName += ' - PASSED';
        } catch (e) {
            this.errors.push(new UrlValidationError(actual, expected));
            testName += ' - FAILED';
        }
        reporter.tests.push(testName);
    }

    done() {
        let errors = this.errors.slice();
        this._clearData();
        if (errors.length) {
            throw new ReporterError(errors);
        }
    }

    _clearData() {
        this.errors = [];
    }
}

export const validate = new Validator();

class StatusCodeValidationError extends Error {
    constructor(actual, expected) {
        super(`recieved: ${actual}, expected: ${expected}`);
        this.name = 'StatusCodeValidationError';
    }
}

class JSONSchemaValidationError extends Error {
    constructor(text) {
        super(text);
        this.name = 'JSONSchemaValidationError';
    }
}

class AnswerValidationError extends Error {
    constructor(actual, expected) {
        super(`recieved: ${actual}, expected: ${expected}`);
        this.name = 'AnswerValidationError';
    }
}

class FollowUpQuestionsValidationError extends Error {
    constructor(actual, expected) {
        super(`recieved: ${actual}, expected: ${expected}`);
        this.name = 'FollowUpQuestionsValidationError';
    }
}

class ButtonsValidationError extends Error {
    constructor(actual, expected) {
        super(`recieved: ${actual}, expected: ${expected}`);
        this.name = 'ButtonsValidationError';
    }
}

class IncludesValidationError extends Error {
    constructor(actual, expected) {
        super(`recieved: ${actual}, expected: ${expected}`);
        this.name = 'IncludesValidationError';
    }
}

class DoesNotIncludeValidationError extends Error {
    constructor(actual, expected) {
        super(`recieved: ${actual}, expected: ${expected}`);
        this.name = 'DoesNotIncludeValidationError';
    }
}

class UrlValidationError extends Error {
    constructor(actual, expected) {
        super(`recieved: ${actual}, expected: ${expected}`);
        this.name = 'UrlValidationError';
    }
}

class ReporterError extends Error {
    constructor(errorsArr) {
        let fullErrText = '';
        for (const err of errorsArr) {
            fullErrText += `"${err.name}: ${err.message}" || `;
        }
        super(fullErrText.slice(0, -3));
        this.name = 'Failed tests';
    }
}
