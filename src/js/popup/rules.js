const rules = {
    "title": {
        name: "Titulo da pagina",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("title") || [], title => title.innerText),
        tests: [{
            description: "Deve haver 1 e somente 1 titulo por pagina",
            test: (results) => results.length === 1,
            level: "error"
        }]
    },
    "canonical": {
        name: "URL canonica",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='canonical']") || [], canonical => canonical.href)
    },
    "h1": {
        name: "H1",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("h1"), h1 => h1.innerText),
        tests: [{
            description: "Deve haver 1 e somente <h1> por pagina",
            test: (results) => results.length === 1,
            level: "error"
        }]
    },
    "h2-list": {
        name: "Lista de H2",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("h2"), h2 => h2.innerText)
    },
    "h3-list": {
        name: "Lista de H3",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("h3"), h3 => h3.innerText)
    },
    "prev": {
        name: "Prev",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='prev']"), prev => prev.href)
    },
    "next": {
        name: "Next",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='next']"), next => next.href)
    },
    "robots": {
        name: "Meta Robots",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("meta[name='robots']"), robots => robots.content)
    },
    "amp-html": {
        name: "AMP html",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='amphtml']"), link => link.href)
    },
    "meta-description": {
        name: "Meta Description",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("meta[name='description']"), meta => meta.content)
    },
    "prerender-date": {
        name: "Data do prerender",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("[data-prerender-date]"), node => node.getAttribute("data-prerender-date"))
    },
    "alternate": {
        name: "Lista de alternates",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='alternate']"), link => link.getAttribute("href"))
    },
    "links": {
        name: "Lista de links",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("a[href]"), link => link.getAttribute("href")).sort()
    }
};
export default rules;