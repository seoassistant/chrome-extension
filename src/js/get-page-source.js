import DOMtoString from "./dom-to-string";

chrome.runtime.sendMessage({
    action: "get-page-source",
    source: DOMtoString(document)
});
