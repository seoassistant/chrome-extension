import test from "ava";
import SEOAssistant from "./seo-assistant";
import basicElements from "./basic-elements.mock";
import BasicDOMString from "./basic-dom.mock";

let DOMParser = require("xmldom").DOMParser;
let BasicDOM = new DOMParser().parseFromString(BasicDOMString);
let BasicSEO = new SEOAssistant(BasicDOM, basicElements);

test("SEOAssistant is defined", t => {
   t.truthy(SEOAssistant);
});

test("SEOAssistant constructor is fine", t => {
   t.truthy(BasicSEO);
   // t.deepEqual(BasicSEO.defaultElements, defaultElements);
   // t.deepEqual(BasicSEO.page, BasicDOM);
});

test("DOM is not a String", t => {
    t.notDeepEqual(BasicSEO.page, BasicDOM);
});

test("SEOAssistant extracts <h1> from page", t => {
    console.log(BasicSEO.results);
});
