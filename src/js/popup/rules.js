const rules = {
    "title": {
        name: "Titulo da pagina",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("title") || [], title => title.innerText),
        tests: [{
            description: "Deve haver 1 e somente 1 titulo por pagina",
            expect: (results) => results.length === 1,
            level: "error"
        }]
    },
    "canonical": {
        name: "URL canonica",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='canonical']") || [], canonical => canonical.href),
        tests: [{
            description: "Empty test",
            expect: (results) => true,
            level: "error"
        }]
    },
    "h1": {
        name: "H1",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("h1"), h1 => h1.innerText),
        tests: [{
            description: "Deve haver 1 e somente <h1> por pagina",
            expect: (results) => results.length === 1,
            level: "error"
        }]
    },
    "h2-list": {
        name: "Lista de H2",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("h2"), h2 => h2.innerText),
        tests: [{
            description: "Empty test",
            expect: (results) => true,
            level: "error"
        }]
    },
    "h3-list": {
        name: "Lista de H3",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("h3"), h3 => h3.innerText),
        tests: [{
            description: "Empty test",
            expect: (results) => true,
            level: "error"
        }]
    },
    "prev": {
        name: "Prev",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='prev']"), prev => prev.href),
        tests: [{
            description: "Empty test",
            expect: (results) => true,
            level: "error"
        }]
    },
    "next": {
        name: "Next",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='next']"), next => next.href),
        tests: [{
            description: "Empty test",
            expect: (results) => true,
            level: "error"
        }]
    },
    "robots": {
        name: "Meta Robots",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("meta[name='robots']"), robots => robots.content),
        tests: [{
            description: "Empty test",
            expect: (results) => true,
            level: "error"
        }]
    },
    "amp-html": {
        name: "AMP html",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='amphtml']"), link => link.href),
        tests: [{
            description: "Empty test",
            expect: (results) => true,
            level: "error"
        }]
    },
    "meta-description": {
        name: "Meta Description",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("meta[name='description']"), meta => meta.content),
        tests: [{
            description: "Empty test",
            expect: (results) => true,
            level: "error"
        }]
    },
    "prerender-date": {
        name: "Data do prerender",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("[data-prerender-date]"), node => node.getAttribute("data-prerender-date")),
        tests: [{
            description: "Empty test",
            expect: (results) => true,
            level: "error"
        }]
    },
    "alternate": {
        name: "Lista de alternates",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='alternate']"), link => link.getAttribute("href")),
        tests: [{
            description: "Empty test",
            expect: (results) => true,
            level: "error"
        }]
    },
    "links": {
        name: "Lista de links",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("a[href]"), link => link.getAttribute("href")).sort(),
        tests: [{
            description: "Empty test",
            expect: (results) => true,
            level: "error"
        }]
    }
};
export default rules;