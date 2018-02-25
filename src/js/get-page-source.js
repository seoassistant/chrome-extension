import DOMtoString from "./dom-to-string";

chrome.runtime.sendMessage({
    action: "getPageSource",
    source: {
        dom: DOMtoString(document),
        url: document.URL,
        title: document.title
    }
});
