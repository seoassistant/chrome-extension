import test from "ava";
import SEOExtractor from "./seo-assistant";
import rules from "./basic-rules.mock";
import BasicDOMString from "./basic-dom.mock";

let DOMParser = require("xmldom").DOMParser;
let BasicDOM = new DOMParser().parseFromString(BasicDOMString);
let BasicSEO = new SEOExtractor(BasicDOM, rules);

test("SEOAssistant is defined", t => {
   t.truthy(SEOExtractor);
});

test("SEOAssistant constructor is fine", t => {
   t.truthy(BasicSEO);
   // t.deepEqual(BasicSEO.rules, rules);
   // t.deepEqual(BasicSEO.page, BasicDOM);
});

test("DOM is not a String", t => {
    t.notDeepEqual(BasicSEO.page, BasicDOM);
});

test("SEOAssistant extracts <h1> from page", t => {
    console.log(BasicSEO.results);
});