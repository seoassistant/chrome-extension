import SEOAssistant from "./seo-assistant/seo-assistant";
import rules from "./popup/rules";
import "../img/icon-34.png";
import "../img/icon-128.png";
import StringToDOM from "./popup/string-to-dom";
import ResultsToHTMLTable from "./views/results-to-html-table";
import TestsToReport from "./views/tests-to-report";

let page;
let main;
let title;
let subtitle;
let header;

chrome.runtime.onMessage.addListener(function(request) {
   if(request.action === "getPageSource"){
        let assistant = new SEOAssistant(StringToDOM(request.source.dom), rules);
        header = document.querySelector("[data-selector='header']");
        let score = document.querySelector("[data-selector='score']");
        let statusToTextClassMap = {
            "success": "has-text-success",
            "error": "has-text-danger",
            "warning": "has-text-warning"
        };
        let statusToMessageMap = {
            "success": "<span class='has-text-weight-semibold'>Congratulations!</span> This page ranked 100/100 points.",
            "error": "<span class='has-text-weight-semibold'>Oops!</span> This page has some critical errors. Follow the recommendations to fix them.",
            "warning": "<span class='has-text-weight-semibold'>Ok.</span> This page has some work to do but no critical errors."
        };
        score.innerHTML = `<h2 class="${statusToTextClassMap[assistant.status]} title is-2">${assistant.score}/100</h2><h3 class="subtitle is-6">${statusToMessageMap[assistant.status]}</h3><br>`;
        let headerClassByStatus = JSON.parse(header.getAttribute("data-selector-class-map"));
        header.setAttribute("class", `${header.getAttribute("class")} ${headerClassByStatus[assistant.status]}`);
        title.innerText = request.source.title.length <= 35 ? request.source.title : `${request.source.title.substr(0,35)}...`;
        title.setAttribute("title", request.source.title);
        subtitle.innerText = request.source.url.length <= 60 ? request.source.url : `${request.source.url.substr(0,60)}...`;
        subtitle.setAttribute("title", request.source.url);
        main.innerHTML = TestsToReport(assistant.tests);
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