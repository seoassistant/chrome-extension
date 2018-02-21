var links = Array.prototype.slice.apply(document.getElementsByTagName("title"));

chrome.extension.sendRequest(links);
