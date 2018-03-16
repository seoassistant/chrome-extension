const rules = [
    {
        name: "Titulo da pagina",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("title") || [], title => title.innerText),
        tests: [{
            description: "There should be one and only one &lt;title&gt; per page.",
            expect: (results) => results.length === 1,
            level: "error"
        }]
    }, {
        name: "Canonical url",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='canonical']") || [], canonical => canonical.href),
        tests: [{
            description: "There sould be one and only one canonical tag.",
            expect: (results) => results.length === 1,
            level: "error"
        }, {
            description: "Canonical should be a valid absolute url.",
            expect: (results) => results.length >= 1 ? results.every(result => /^http/.test(result)) : false,
            level: "error"
        }]
    }, {
        name: "H1",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("h1"), h1 => h1.innerText),
        tests: [{
            description: "There should be one and only one &lt;h1&gt; per page.",
            expect: (results) => results.length === 1,
            level: "error"
        }]
    }, {
        name: "Lista de H2",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("h2"), h2 => h2.innerText),
        tests: [{
            description: "Would be nice to have at least one &lt;h2&gt;",
            expect: (results) => results.length > 0,
            level: "warning"
        }]
    }, {
        name: "Lista de H3",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("h3"), h3 => h3.innerText),
        tests: [{
            description: "Would be nice to have at least one &lt;h3&gt;",
            expect: (results) => results.length > 0,
            level: "warning"
        }]
    }, {
        name: "Prev",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='prev']"), prev => prev.href),
        tests: [{
            description: "Empty test for rel prev",
            expect: (results) => results.length > 0,
            level: "warning"
        }]
    }, {
        name: "Next",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='next']"), next => next.href),
        tests: [{
            description: "Empty test for rel next",
            expect: (results) => results.length > 0,
            level: "warning"
        }]
    }, {
        name: "Meta Robots",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("meta[name='robots']"), robots => robots.content),
        tests: [{
            description: "Empty test for meta robots",
            expect: (results) => results.length > 0,
            level: "error"
        }]
    }, {
        name: "AMP html",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='amphtml']"), link => link.href),
        tests: [{
            description: "Empty test for AMP html",
            expect: (results) => results.length > 0,
            level: "warning"
        }]
    }, {
        name: "Meta Description",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("meta[name='description']"), meta => meta.content),
        tests: [{
            description: "Empty test for Meta Description",
            expect: (results) => results.length > 0,
            level: "error"
        }]
    }, {
        name: "Lista de alternates",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='alternate']"), link => link.getAttribute("href")),
        tests: [{
            description: "Empty test for alternates",
            expect: (results) => results.length > 0,
            level: "error"
        }]
    }, {
        name: "Images without alt",
        extract: (dom) => Array.prototype.filter.call(dom.querySelectorAll("img[src]"), img => img.getAttribute("alt") === undefined || img.getAttribute("alt") === "").map(image => `<img src='${image.src}'>`),
        tests: [{
            description: "All images should have alt attribute",
            expect: (results) => results.length === 0,
            level: "warning"
        }]
    }, {
        name: "Lista de links",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("a[href]"), link => link.getAttribute("href")).sort(),
        tests: [{
            description: "You should have at least one link",
            expect: (results) => results.length > 0,
            level: "error"
        }]
    }
];
export default rules;