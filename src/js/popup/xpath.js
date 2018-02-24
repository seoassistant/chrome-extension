const xpath = function xpath(xpathToExecute){
    var result = [];
    var nodesSnapshot = document.evaluate(xpathToExecute, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
    for ( let i=0 ; i < nodesSnapshot.snapshotLength; i++ ){
        result.push( nodesSnapshot.snapshotItem(i) );
    }
    return result;
};
export default xpath;