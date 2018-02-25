import SEOExtractor from "./popup/seo-extractor";
import rules from "./popup/rules";
import StringToDOM from "./popup/string-to-dom";
import ResultsToHTMLTable from "./popup/results-to-html-table";

let page;
let body;

chrome.runtime.onMessage.addListener(function(request) {
   if(request.action === "getPageSource"){
        let seo = new SEOExtractor(StringToDOM(request.source), rules);
        let results = [];
        Object.keys(rules).forEach(rule => {
            results.push({
                result: seo.extract(rule),
                name: rules[rule].name
            });
        });
        body.innerHTML = ResultsToHTMLTable(results);
   }
});

function onLoadWindow(){
    body = document.querySelector("[data-selector='addon']");

    chrome.tabs.executeScript(null, {
        file: "./get-page-source.bundle.js"
    }, function(){
        if (chrome.runtime.lastError) {
            body.innerHTML = "Ocorreu um erro ao injetar script: \n" + chrome.runtime.lastError.message;
        }
    });
}

window.onload = onLoadWindow;