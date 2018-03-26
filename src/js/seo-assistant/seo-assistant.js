import StringToDOM from "../string-to-dom";
import ScoreCalculator from "./score-calculator/score-calculator";

class SEOAssistant {

    constructor(DOM, elements) {

        if(typeof DOM === "string") {
            DOM = StringToDOM(DOM);
        }

        let priorities = ["error", "warning", "success"];
        let status = priorities[priorities.length - 1];
        let data = {
            els: {
                passed_by: {
                    warning: [],
                    error: []
                },
                failed_by: {
                    error: [],
                    warning: []
                }
            },
            tests: {
                passed: [],
                failed: [],
                all: []
            }
        };
        let score_weights = {error: 5, warning: 2};

        this.score = 0;
        this._data = data;
        this.status = status;

        elements.forEach(element => {
            let result = {name: element.name };
            let content = element.extract(DOM);
            result.extracted = {
                content,
                is_empty: content.length === 0,
                is_unique: content.length === 1
            };
            result.tests = [];

            element.tests.forEach(test => {
                let passed = test.expect(result.extracted.content);
                let resultTest = {
                    description: test.description,
                    level: test.level,
                    passed
                };
                result.tests.push(resultTest);

                if(passed) {
                    data.tests.passed.push(test);
                    if(test.level === "error") {
                        data.els.passed_by.error.push(result);
                    } else if(test.level === "warning") {
                        data.els.passed_by.warning.push(result);
                    }
                } else {
                    data.tests.failed.push(test);
                    if(test.level === "error") {
                        data.els.failed_by.error.push(result);
                    } else if(test.level === "warning") {
                        data.els.failed_by.warning.push(result);
                    }
                }
                if(!passed && priorities.indexOf(test.level) !== priorities.length - 1) {
                    this.status = priorities.indexOf(test.level) < priorities.indexOf(this.status) ? test.level : this.status;
                }
                data.tests.all.push(resultTest);
            });
        });

        let scores = {
            error: {
                weight: score_weights.error,
                total: data.els.failed_by.error.length + data.els.passed_by.error.length,
                partial: data.els.passed_by.warning.length
            },
            warning: {
                weight: score_weights.warning,
                total: data.els.failed_by.warning.length + data.els.passed_by.warning.length,
                partial: data.els.passed_by.warning.length
            }
        };

        this.score = new ScoreCalculator(Object.values(scores)).score;
    }

    get all() {
        return this._data.tests.all;
    }

    get tests () {
        return this._data.tests;
    }

    get els () {
        return this._data.els;
    }

}

export default SEOAssistant;