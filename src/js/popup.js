import SEOAssistant from "./seo-assistant/seo-assistant";
import defaultElements from "./default-elements";
import "../img/icon-34.png";
import "../img/icon-128.png";
import StringToDOM from "./string-to-dom";
import Vue from "vue/dist/vue.esm";
import VueRouter from "vue-router/dist/vue-router.esm";
import Overview from "./components/Overview.vue";
import App from "./App.vue";
import Vuex from 'vuex/dist/vuex.esm'

let main;

chrome.runtime.onMessage.addListener(function(request) {
   if(request.action === "getPageSource"){
        let report = new SEOAssistant(StringToDOM(request.source.dom), defaultElements);
        let page = { title: request.source.title, url: request.source.url };
        console.log(report);
        Vue.use(VueRouter);
        Vue.use(Vuex);

        const store = new Vuex.Store({
            state: {
                report,
                page
            },
            mutations: {}
        });

        const Resumo = Overview;
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
            store,
            components: {
                "app": App
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