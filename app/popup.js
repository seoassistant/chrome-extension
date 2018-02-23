var allLinks = [];
var dom = document.createElement("html");

//----
var xpath = function xpath(xpathToExecute){
    var result = [];
    var nodesSnapshot = document.evaluate(xpathToExecute, dom, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
    for ( var i=0 ; i < nodesSnapshot.snapshotLength; i++ ){
        result.push( nodesSnapshot.snapshotItem(i) );
    }
    return result;
};

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
        return xpath("//title")[0].innerHTML;
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

function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    while (node) {
        switch (node.nodeType) {
            case Node.ELEMENT_NODE:
                html += node.outerHTML;
                break;
            case Node.TEXT_NODE:
                html += node.nodeValue;
                break;
            case Node.CDATA_SECTION_NODE:
                html += '<![CDATA[' + node.nodeValue + ']]>';
                break;
            case Node.COMMENT_NODE:
                html += '<!--' + node.nodeValue + '-->';
                break;
            case Node.DOCUMENT_TYPE_NODE:
                // (X)HTML documents are identified by public identifiers
                html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
                break;
        }
        node = node.nextSibling;
    }
    return html;
}
//----
function showLinks() {
  document.getElementById("links").innerHTML = "<h1>"+ allLinks.length +"</h1>";
}

chrome.runtime.onMessage.addListener(function(request) {

    domContent = new DOMParser().parseFromString(request.source, "text/html");
    dom.appendChild(domContent.head);
    dom.appendChild(domContent.body);

    if (request.action === "getSource") {
        var messageContent = document.createElement("table");
        messageContent.setAttribute("class", "table is-striped");
        messageContent.innerHTML = `
            <thead>
                <tr><td>Nome</td><td>Conteudo</td></tr>
            </thead>
            <tbody>
            ${SEOExtractor.map(item => `
	            <tr>
                    <td> ${item.name} </td>
                    <td> ${item.get()} </td>
                </tr>`).join("")}
            </tbody>`;
        message.appendChild(messageContent);
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