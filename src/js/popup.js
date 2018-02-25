import SEOExtractor from "./popup/seo-extractor";
import rules from "./popup/rules";
import "../img/icon-34.png";
import "../img/icon-128.png";
import StringToDOM from "./popup/string-to-dom";
import ResultsToHTMLTable from "./popup/results-to-html-table";

let page;
let main;

chrome.runtime.onMessage.addListener(function(request) {
   if(request.action === "getPageSource"){
        let seo = new SEOExtractor(StringToDOM(request.source.dom), rules);
        let results = [];

        Object.keys(rules).forEach(rule => {
            results.push({
                result: seo.extract(rule),
                name: rules[rule].name
            });
        });

        let title = document.querySelector("[data-selector='header__title']");
        let subtitle = document.querySelector("[data-selector='header__subtitle']");

        title.innerText = request.source.title.length <= 35 ? request.source.title : `${request.source.title.substr(0,35)}...`;
        subtitle.innerText = request.source.url.length <= 60 ? request.source.url : `${request.source.url.substr(0,60)}...`;
        main.innerHTML = ResultsToHTMLTable(results);
   }
});

function onLoadWindow(){
    main = document.querySelector("[data-selector='main']");

    chrome.tabs.executeScript(null, {
        file: "./get-page-source.bundle.js"
    }, function(){
        if (chrome.runtime.lastError) {
            main.innerHTML = "Ocorreu um erro ao injetar script: \n" + chrome.runtime.lastError.message;
        }
    });
}

window.onload = onLoadWindow;