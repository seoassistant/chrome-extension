const rules = {
    "title": {
        name: "Titulo da pagina",
        get: (dom) => dom.querySelector("title").innerText
    },
    "canonical": {
        name: "URL canonica",
        get: (dom) => dom.querySelector("link[rel='canonical']").href
    },
    "h1": {
        name: "H1",
        get: (dom) => Array.prototype.map.call(dom.querySelectorAll("h1"), h1 => h1.innerText)
    },
    "h2-list": {
        name: "Lista de H2",
        get: (dom) => Array.prototype.map.call(dom.querySelectorAll("h2"), h2 => h2.innerText)
    },
    "h3-list": {
        name: "Lista de H3",
        get: (dom) => Array.prototype.map.call(dom.querySelectorAll("h3"), h3 => h3.innerText)
    },
    "prev": {
        name: "Prev",
        get: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='prev']"), prev => prev.href)
    },
    "next": {
        name: "Next",
        get: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='next']"), next => next.href)
    },
    "robots": {
        name: "Meta Robots",
        get: (dom) => Array.prototype.map.call(dom.querySelectorAll("meta[name='robots']"), robots => robots.content)
    },
    "amp-html": {
        name: "AMP html",
        get: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='amphtml']"), link => link.href)
    },
    "meta-description": {
        name: "Meta Description",
        get: (dom) => Array.prototype.map.call(dom.querySelectorAll("meta[name='description']"), meta => meta.content)
    },
    "prerender-date": {
        name: "Data do prerender",
        get: (dom) => Array.prototype.map.call(dom.querySelectorAll("[data-prerender-date]"), node => node.getAttribute("data-prerender-date"))
    },
    "alternate": {
        name: "Lista de alternates",
        get: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='alternate']"), link => link.href)
    }
};
export default rules;