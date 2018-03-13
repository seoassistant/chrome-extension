import OverviewTab from "./tabs/overview-tab";
import PassedTab from "./tabs/passed-tab";
import ErrorTab from "./tabs/error-tab";
import WarningTab from "./tabs/warning-tab";

class PageModel {
    constructor(page, data) {
        let tabs = {
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
        let activeTab = tabs.overview.name;

        let header = document.createElement("header");
        header.setAttribute("class", `hero ${statusToHeaderClass[data.status]}`);

        let headerBody =`<div class="hero-body">
            <h1 class="title is-4" title="${headers.title.tooltip}">${headers.title.text}</h1>
            <h2 class="subtitle is-6" title="${headers.subtitle.tooltip}">${headers.subtitle.text}</h2>
        </div>`;

        let tabList = document.createElement("ul");

        Object.values(tabs).forEach(tab => {
            let tabItem = document.createElement("li");
            tabItem.innerHTML = `<a>${tab.text}</a>`;
            tabItem.onclick = () => {
                Array.prototype.forEach.call(tabList.children, (otherTab) => {
                    otherTab.setAttribute("class", "");
                });
                tabItem.setAttribute("class", "is-active");
            };
            let isTabSelected = tab.innerText === tabs[activeTab].text;
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
        let body = tabs[activeTab].content;
        this.header = header;
        this.body = body;
    }



    set activeTab(tabName) {

    };
}

export default PageModel;