import addContext from 'mochawesome/addContext.js';

class Reporter {
    requestHistory = [];
    tests = [];
    failedSchema;

    printResults(context) {
        this.requestHistory.forEach((request) => {
            let { method, url, body, status, json, text } = request;
            addContext(context, {
                title: `${method} ${url}`,
                value: `${body ? `Request body: ${body}\n` : ``}Response: ${status} - ${json || text}`,
            });
        });
        if (this.tests.length) {
            addContext(context, { title: 'Performed tests', value: '' });
            for (const [i, text] of this.tests.entries()) {
                addContext(context, `${i + 1}: ${text}`);
            }
            if (this.failedSchema) {
                addContext(context, {
                    title: `Expected JSON schema:`,
                    value: this.failedSchema,
                });
            }
        }
        this._clearData();
    }

    _clearData() {
        this.requestHistory = [];
        this.tests = [];
        this.failedSchema = undefined;
    }
}

export const reporter = new Reporter();
