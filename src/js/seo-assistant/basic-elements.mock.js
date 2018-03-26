const defaultElements = [{
    extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("title") || [], title => title.innerText),
    name: "Page Title",
    specs: [{
        test: (extracted) => extracted.length === 1,
        description: "There can be only one <title> per page",
        level: "error"
    }]
}];
export default defaultElements;