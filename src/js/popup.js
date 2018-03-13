import SEOAssistant from "./seo-assistant/seo-assistant";
import rules from "./popup/rules";
import "../img/icon-34.png";
import "../img/icon-128.png";
import StringToDOM from "./popup/string-to-dom";
import PageHeader from "./templates/page-model";

let main;

chrome.runtime.onMessage.addListener(function(request) {
   if(request.action === "getPageSource"){
        let assistant = new SEOAssistant(StringToDOM(request.source.dom), rules);
        let pageHeader = new PageHeader(request.source, assistant);
        main.appendChild(pageHeader.header);
        main.appendChild(pageHeader.body);
        // pageHeader.activateTab("overview");
   }
});

function onLoadWindow(){
    main = document.querySelector("[data-selector='main']");

    chrome.tabs.executeScript(null, {
        file: "./get-page-source.bundle.js"
    }, function(){
        if (chrome.runtime.lastError) {
            // title.innerText = "Ocorreu um erro ao injetar script";
            // subtitle.innerText = chrome.runtime.lastError.message;
            main.innerHTML = "";
        }
    });
}

window.onload = onLoadWindow;