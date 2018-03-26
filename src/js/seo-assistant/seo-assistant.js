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
            elements: {
                passed_by: {
                    warning: [],
                    error: []
                },
                failed_by: {
                    error: [],
                    warning: []
                },
                passed: []
            },
            tests: {
                failed_by: {
                    error: [],
                    warning: []
                },
                passed_by: {
                    error: [],
                    warning: []
                },
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
                    data.elements.passed.push(result);
                    if(test.level === "error") {
                        data.tests.passed_by.error.push(test);
                        data.elements.passed_by.error.push(result);
                    } else if(test.level === "warning") {
                        data.tests.passed_by.warning.push(test);
                        data.elements.passed_by.warning.push(result);
                    }
                } else {
                    data.tests.failed.push(test);
                    if(test.level === "error") {
                        data.tests.failed_by.error.push(test);
                        data.elements.failed_by.error.push(result);
                    } else if(test.level === "warning") {
                        data.tests.failed_by.warning.push(test);
                        data.elements.failed_by.warning.push(result);
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
                total: data.elements.failed_by.error.length + data.elements.passed_by.error.length,
                partial: data.elements.passed_by.warning.length
            },
            warning: {
                weight: score_weights.warning,
                total: data.elements.failed_by.warning.length + data.elements.passed_by.warning.length,
                partial: data.elements.passed_by.warning.length
            }
        };

        this.score = new ScoreCalculator(Object.values(scores)).score;
    }

    get tests () {
        return this._data.tests;
    }

    get elements () {
        return this._data.elements;
    }

}

export default SEOAssistant;