import SEOAssistant from "./seo-assistant/seo-assistant";
import rules from "./popup/rules";
import "../img/icon-34.png";
import "../img/icon-128.png";
import StringToDOM from "./popup/string-to-dom";
import OverviewTab from "./templates/tabs/overview-tab";
import PassedTab from "./templates/tabs/passed-tab";
import ErrorTab from "./templates/tabs/error-tab";
import WarningTab from "./templates/tabs/warning-tab";

let page;
let main;
let title;
let subtitle;
let header;

chrome.runtime.onMessage.addListener(function(request) {
   if(request.action === "getPageSource"){
        let assistant = new SEOAssistant(StringToDOM(request.source.dom), rules);
        header = document.querySelector("[data-selector='header']");

        let tabs = {
           overview: {
               name: "overview",
               selector: document.querySelector("[data-selector='tab-overview']"),
               content: OverviewTab(assistant)
           },
           passed: {
               name: "passed",
               selector: document.querySelector("[data-selector='tab-passed']"),
               content: PassedTab()
           },
           error: {
               name: "error",
               selector: document.querySelector("[data-selector='tab-error']"),
               content: ErrorTab()
           },
           warning: {
                name: "warning",
                selector: document.querySelector("[data-selector='tab-warning']"),
                content: WarningTab()
            }
        };
        let updateTab = (tab) =>{
            main.innerHTML = "";
            main.appendChild(tabs[tab].content);
        };

        let headerClassByStatus = JSON.parse(header.getAttribute("data-selector-class-map"));
        header.setAttribute("class", `${header.getAttribute("class")} ${headerClassByStatus[assistant.status]}`);
        title.innerText = request.source.title.length <= 35 ? request.source.title : `${request.source.title.substr(0,35)}...`;
        title.setAttribute("title", request.source.title);
        subtitle.innerText = request.source.url.length <= 60 ? request.source.url : `${request.source.url.substr(0,60)}...`;
        subtitle.setAttribute("title", request.source.url);
        debugger;
        updateTab("overview");
        Object.values(tabs).forEach(tab => {
           tab.selector.onclick = () => {
               updateTab(tab.name);
           }
        });

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