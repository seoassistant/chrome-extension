var dom = document.createElement("html");

var xpath = function(xpathToExecute){
    var result = [];
    var nodesSnapshot = document.evaluate(xpathToExecute, dom, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
    for ( var i=0 ; i < nodesSnapshot.snapshotLength; i++ ){
        result.push( nodesSnapshot.snapshotItem(i) );
    }
    return result;
}

const SEOExtractor = [
    {
        name: "prerenderDate",
        get: () => {
            return xpath("//body[@data-prerender-date]/@data-prerender-date")[0].nodeValue
        }
    },{
        name: "h1List",
        get: () => {
        return xpath("//body//h1")[0].innerHTML;
    }
},{
    name: "title",
        get: () => {
        return xpath("//head//title")[0].innerHTML;
    }
},{
    name: "metaDescription",
        get: () => {
        return xpath("//head//meta[@name='description']")[0].content;
    }
},{
    name: "canonical",
        get: () => {
        return xpath("//head/link[@rel='canonical']")[0].href;
    }
},{
    name: "androidAlternate",
        get: () => {
        return xpath("//head/link[@rel='alternate']")[0].href;
    }
},{
    name: "next",
        get: () => {
        return xpath("//head/link[@rel='next']").length > 0 ? xpath("//head/link[@rel='next']")[0].href : false;
    }
},{
    name: "prev",
        get: () => {
        return xpath("//head/link[@rel='prev']").length > 0 ? xpath("//head/link[@rel='prev']")[0].href : false;
    }
},{
    name: "robots",
        get: () => {
        return xpath("//head/meta[@name='robots']")[0].content;
    }
},{
    name: "ampUrl",
        get: () => {
        return xpath("//head/link[@rel='amphtml']")[0].href;
    }
},{
    name: "h2List",
        get: () => {
        return xpath("//body//h2").map(h2 => h2.innerText);
    }
},{
    name: "h3List",
        get: () => {
        return xpath("//body//h3").map(h3 => h3.innerText);
    }
}
];

var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?vivadecora\.com\.br/;

// A function to use as callback
function doStuffWithDom(domContent) {
    domContent = new DOMParser().parseFromString(domContent, "text/html");
    dom.appendChild(domContent.head);
    dom.appendChild(domContent.body);

    SEOExtractor.forEach((rule) => {
       alert(`${rule.name} : ${rule.get()}`);
    });

}

chrome.browserAction.onClicked.addListener(function (tab) {
    if (urlRegex.test(tab.url)) {
        chrome.tabs.sendMessage(tab.id, {text: "report_back"}, doStuffWithDom);
    }
});
