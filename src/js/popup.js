import SEOAssistant from "./seo-assistant/seo-assistant";
import defaultElements from "./default-elements";
import "../img/icon-34.png";
import "../img/icon-128.png";
import StringToDOM from "./string-to-dom";
import Vue from "vue/dist/vue.esm";
import ExtensionFooter from "./components/extension-footer";

let main;

chrome.runtime.onMessage.addListener(function(request) {
   if(request.action === "getPageSource"){
        let assistant = new SEOAssistant(StringToDOM(request.source.dom), defaultElements);
        let vm = new Vue({
            el: "[data-selector='app']",
            data: {
                message: "Mensagem"
            },
            components: {
                "extension-footer": ExtensionFooter
            }
        });

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