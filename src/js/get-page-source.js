import DOMtoString from "./dom-to-string";

chrome.runtime.sendMessage({
    action: "getPageSource",
    source: DOMtoString(document)
});
