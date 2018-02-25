class SEOExtractor {

    constructor(page, rules) {
        this.page = page;
        this.rules = rules;
    }

    extract(rule_name) {
        return this.rules[rule_name].get(this.page);
    }

}

export default SEOExtractor;