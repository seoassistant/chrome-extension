import SEOAssistant from "./seo-assistant/seo-assistant";
import defaultElements from "./default-elements";
import "../img/icon-34.png";
import "../img/icon-128.png";
import StringToDOM from "./string-to-dom";
import Vue from "vue/dist/vue.esm";
import VueRouter from "vue-router/dist/vue-router.esm";
import ExtensionFooter from "./components/ExtensionFooter.vue";
import ExtensionHeader from "./components/ExtensionHeader.vue";

let main;

chrome.runtime.onMessage.addListener(function(request) {
   if(request.action === "getPageSource"){
        //let assistant = new SEOAssistant(StringToDOM(request.source.dom), defaultElements);
        Vue.use(VueRouter);

        const Resumo = { template: "<div>Resumo</div>"};
        const Sucesso = { template: "<div>Sucesso</div>"};
        const Erros = { template: "<div>Erros</div>"};
        const Alertas = { template: "<div> Alertas </div>"};
        const routes = [
            { path: "/resumo", component: Resumo},
            { path: "/sucesso", component: Sucesso},
            { path: "/erros", component: Erros},
            { path: "/alertas", component: Alertas},
            { path: '*', redirect: '/resumo'}
        ];

        const router = new VueRouter({routes});

        new Vue({
            el: "[data-selector='app']",
            data: {
                message: "Mensagem"
            },
            router,
            components: {
                "extension-footer": ExtensionFooter,
                "extension-header": ExtensionHeader
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