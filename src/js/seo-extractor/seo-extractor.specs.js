import test from "ava";
import SEOExtractor from "./seo-extractor";
import rules from "./basic-rules.mock";
import BasicDOMString from "./basic-dom.mock";

let DOMParser = require("xmldom").DOMParser;
let BasicDOM = new DOMParser().parseFromString(BasicDOMString);
let BasicSEO = new SEOExtractor(BasicDOM, rules);

test("SEOExtractor is defined", t => {
   t.truthy(SEOExtractor);
});

test("SEOExtractor constructor is fine", t => {
   t.truthy(BasicSEO);
   // t.deepEqual(BasicSEO.rules, rules);
   // t.deepEqual(BasicSEO.page, BasicDOM);
});

test("DOM is not a String", t => {
    t.notDeepEqual(BasicSEO.page, BasicDOM);
});

test("SEOExtractor extracts <h1> from page", t => {
    console.log(BasicSEO.results);
});