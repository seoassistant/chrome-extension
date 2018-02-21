var allLinks = [];

function showLinks() {
  document.getElementById("links").innerHTML = "<h1>"+ allLinks.length +"</h1>";
}

chrome.runtime.onMessage.addListener(function(request) {
    if (request.action === "getSource") {
        message.innerText = request.source.match(/<title.*>(.*)<\/title>/g);
    }
});

function onLoadWindow() {

    var message = document.querySelector('#message');

    chrome.tabs.executeScript(null, {
        file: "send_links.js"
    }, function() {
        // If you try and inject into an extensions page or the webstore/NTP you'll get an error
        if (chrome.runtime.lastError) {
            message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
        }
    });

    // chrome.windows.getCurrent(function getCurrent(currentWindow) {
    //     chrome.tabs.query({active: true, windowId: currentWindow.id},
    //         function(activeTabs) {
    //             chrome.tabs.executeScript(
    //                 activeTabs[0].id, {file: 'send_links.js', allFrames: true}
    //             );
    //         });
    //     }
    // );
}

window.onload = onLoadWindow;