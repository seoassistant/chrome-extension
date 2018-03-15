import OverviewTab from "./tabs/overview-tab";
import PassedTab from "./tabs/passed-tab";
import ErrorTab from "./tabs/error-tab";
import WarningTab from "./tabs/warning-tab";

class PageModel {
    constructor(page, data, mainNode) {
        this.tabs = {
            overview: {
                name: "overview",
                text: "Overview",
                selector: "tab-overview",
                content: OverviewTab(data)
            },
            passed: {
                name: "passed",
                text: "Passed",
                selector: "tab-passed",
                content: PassedTab()
            },
            error: {
                name: "error",
                text: "Error",
                selector: "tab-error",
                content: ErrorTab()
            },
            warning: {
                name: "warning",
                text: "Warning",
                selector: "tab-warning",
                content: WarningTab()
            }
        };
        let headers = {
            title: {
                text: page.title.length <= 35 ? page.title : `${page.title.substr(0,35)}...`,
                tooltip: page.title
            },
            subtitle: {
                text: page.url.length <= 60 ? page.url : `${page.url.substr(0,60)}...`,
                tooltip: page.url
            }
        };
        let statusToHeaderClass = {
            "error": "is-danger",
            "warning": "is-warning",
            "info": "is-success",
            "success": "is-success"
        };
        let activeTab = this.tabs.overview.name;

        let header = document.createElement("header");
        header.setAttribute("class", `hero ${statusToHeaderClass[data.status]}`);

        let headerBody =`<div class="hero-body">
            <h1 class="title is-4" title="${headers.title.tooltip}">${headers.title.text}</h1>
            <h2 class="subtitle is-6" title="${headers.subtitle.tooltip}">${headers.subtitle.text}</h2>
        </div>`;

        let tabList = document.createElement("ul");

        Object.values(this.tabs).forEach(tab => {
            let tabItem = document.createElement("li");
            tabItem.setAttribute("data-selector", tab.selector);
            tabItem.innerHTML = `<a>${tab.text}</a>`;
            tabItem.onclick = () => {
                this.updateTab(tab.name);
            };
            let isTabSelected = tab.innerText === this.tabs[activeTab].text;
            if(isTabSelected) {
                tabItem.setAttribute("class", "is-active");
            }
            tabList.appendChild(tabItem);
        });

        let headerFooter = document.createElement("div");
        headerFooter.setAttribute("class", "hero-foot");
        let headerFooterNav = document.createElement("nav");
        headerFooterNav.setAttribute("class", "tabs is-boxed is-fullwidth");
        let headerFooterNavDiv = document.createElement("div");
        headerFooterNavDiv.setAttribute("class", "container");

        headerFooter.appendChild(headerFooterNav);
        headerFooterNav.appendChild(headerFooterNavDiv);
        headerFooterNavDiv.appendChild(tabList);

        header.insertAdjacentHTML("afterbegin", headerBody);
        header.appendChild(headerFooter);
        let body = this.tabs[activeTab].content;
        this.header = header;
        this.mainNode = mainNode;
        this.body = document.createElement("div");
    }

    updateTab(tabName) {
        let tabNode = document.querySelector(`[data-selector='${this.tabs[tabName].selector}']`);
        let tabContent = this.tabs[tabName].content;
        tabNode.setAttribute("class", "is-active");
        debugger;
        let otherTabs = Object.values(this.tabs).filter(tab => tab.name !== tabName).map(tab => document.querySelector(`[data-selector='${tab.selector}']`))
        otherTabs.forEach(tab => tab.setAttribute("class", ""));
        let body = this.mainNode.querySelector("[data-selector='body']");
        body.innerHTML = "";
        body.appendChild(tabContent);
    };
}

export default PageModel;