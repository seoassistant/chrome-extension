import SEOExtractor from "./seo-extractor/seo-extractor";
import rules from "./popup/rules";
import "../img/icon-34.png";
import "../img/icon-128.png";
import StringToDOM from "./popup/string-to-dom";
import ResultsToHTMLTable from "./popup/results-to-html-table";

let page;
let main;
let title;
let subtitle;
let header;

chrome.runtime.onMessage.addListener(function(request) {
   if(request.action === "getPageSource"){
        let seo = new SEOExtractor(StringToDOM(request.source.dom), rules);
        let results = [];
        header = document.querySelector("[data-selector='header']");
        Object.keys(rules).forEach(rule => {
            results.push({
                result: seo.extract(rule),
                name: rules[rule].name,
                tests: rules[rule].tests
            });
        });
        console.log(seo);
        results.forEach(result => {
            if(typeof result.tests !== "undefined") {
                result.tests.forEach(test => {
                    result.result.test = test.expect(result.result);
                });
            }
            else {
                results.tests = {};
            }
        });
        let hasPassed = Object.values(results).every(result => result.tests === undefined || results.tests);
        console.log(hasPassed);

        title.innerText = request.source.title.length <= 35 ? request.source.title : `${request.source.title.substr(0,35)}...`;
        title.setAttribute("title", request.source.title);
        subtitle.innerText = request.source.url.length <= 60 ? request.source.url : `${request.source.url.substr(0,60)}...`;
        subtitle.setAttribute("title", request.source.url);
        main.innerHTML = ResultsToHTMLTable(results);
   }
});

function onLoadWindow(){
    title = document.querySelector("[data-selector='header__title']");
    subtitle = document.querySelector("[data-selector='header__subtitle']");
    main = document.querySelector("[data-selector='main']");

    chrome.tabs.executeScript(null, {
        file: "./get-page-source.bundle.js"
    }, function(){
        if (chrome.runtime.lastError) {
            title.innerText = "Ocorreu um erro ao injetar script";
            subtitle.innerText = chrome.runtime.lastError.message;
            main.innerHTML = "";
        }
    });
}

window.onload = onLoadWindow;