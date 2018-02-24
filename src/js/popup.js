import "../css/popup.css";

chrome.runtime.onMessage.addListener(function(request) {
    console.log("onMessage");
   if(request.action === "get-page-source"){
       console.log(request.source);
   }
});

function onLoadWindow(){

    chrome.tabs.executeScript(null, {
        file: "get-page-source.bundle.js"
    }, function(){
        if (chrome.runtime.lastError) {
            // "Ocorreu um erro ao injetar script: \n" + chrome.runtime.lastError.message;
        }
    });
}

window.onload = onLoadWindow;