import StringToDOM from "../popup/string-to-dom";
import ScoreCalculator from "../score-calculator/score-calculator";

class SEOAssistant {

    constructor(DOM, rules) {
        this._page = typeof DOM === "string" ? StringToDOM(DOM) : DOM;
        this._rules = rules;
        this._status = "success";
        this._score = 0;
        let levels = {
            "error": {
                "weight":5,
                "total": 0,
                "passed":0
            },
            "warning": {
                "weight":2,
                "total": 0,
                "passed":0
            }
        };

        this._results = {
            list: [],
            testsList: [],
            byName: {},
            byTestDescription: {},
            groupedByTestLevel: {
                error: [],
                warning: []
            }
        };

        let statusPriorities = ["error", "warning", "success"];

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

                if(passed) levels[test.level].passed++;
                levels[test.level].total++;

                let isNewStatusLevelHigher = statusPriorities.indexOf(test.level) !== -1 && statusPriorities.indexOf(test.level) < statusPriorities.indexOf(this._status);
                if(!passed && isNewStatusLevelHigher){
                    this._status = test.level;
                }

                this._results.byTestDescription[test.description] = result;
                this._results.testsList.push({
                    description: test.description,
                    passed: passed,
                    extracted: extracted,
                    level: test.level
                });
                this._results.byTestDescription[test.description].tests = rule.tests;
                this._results.groupedByTestLevel[test.level].push(result);
            });
        });

        let levelsToScore = (level) => {
            return {"weight": level.weight, "total": level.total, "partial": level.passed}
        };

        let calculator = new ScoreCalculator(Object.values(levels), levelsToScore);
        this._score = calculator.score;
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

    get tests() {
        return this._results.testsList;
    }

    get score() {
        return this._score;
    }
}

export default SEOAssistant;