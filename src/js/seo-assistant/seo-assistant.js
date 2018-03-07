import StringToDOM from "../popup/string-to-dom";

class SEOAssistant {

    constructor(DOM, rules) {
        this._page = typeof DOM === "string" ? StringToDOM(DOM) : DOM;
        this._rules = rules;
        this._status = "success";

        this._results = {
            list: [],
            byName: {},
            byTestDescription: {},
            groupedByTestLevel: {
                error: [],
                warning: [],
                info: []
            }
        };

        let statusPriorities = ["error", "warning", "info", "success"];

        this._rules.forEach(rule => {
            let extracted = rule.extract(this._page);
            this._results.list.push(Object.assign(rule, {extracted}));
            this._results.byName[rule.name] = {
                extracted
            };

            this._results.byName[rule.name].tests = rule.tests;

            rule.tests.forEach(test => {
                let passed = test.expect(extracted);
                let result = {
                    extracted,
                    passed
                };

                let isNewStatusLevelHigher = statusPriorities.indexOf(test.level) !== -1 && statusPriorities.indexOf(test.level) < statusPriorities.indexOf(this._status);
                if(!passed && isNewStatusLevelHigher){
                    this._status = test.level;
                }

                this._results.byTestDescription[test.description] = result;
                this._results.byTestDescription[test.description].tests = rule.tests;
                this._results.groupedByTestLevel[test.level].push(result);
            });
        });
        console.log(this._status);
    }

    get rules() {
        return this._rules;
    }

    get results() {
        return this._results.list;
    }

    get status() {
        return this._status;
    }

}

export default SEOAssistant;