import StringToDOM from "../popup/string-to-dom";

class SEOExtractor {

    constructor(DOM, rules) {
        this.page = typeof DOM === "string" ? StringToDOM(DOM) : DOM;
        this.rules = rules;
        this.results = {};

        Object.keys(this.rules).forEach(ruleKey => {
            let rule = this.rules[ruleKey];

            this.results[rule.name] = {
                extracted: rule.extract(this.page),
                tests: {}
            };


            rule.tests.forEach(test => {
                this.results[rule.name].tests[test.description] = {
                    output: test.expect(this.results[rule.name].extracted)
                };
            });
        });
        debugger;
        console.log(this);
    }

    extract(rule_name) {
        return this.rules[rule_name].extract(this.page);
    }

}

export default SEOExtractor;