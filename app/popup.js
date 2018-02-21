var allLinks = [];

function showLinks() {
  document.getElementById("links").innerHTML = "<h1>"+ allLinks.length +"</h1>";
}

chrome.extension.onRequest.addListener(function(links) {
  allLinks = links;
  showLinks();
});

window.onload = function() {
    chrome.windows.getCurrent(function getCurrent(currentWindow) {
        chrome.tabs.query({active: true, windowId: currentWindow.id},
            function(activeTabs) {
                chrome.tabs.executeScript(
                    activeTabs[0].id, {file: 'send_links.js', allFrames: true}
                );
            });
        }
    );
};