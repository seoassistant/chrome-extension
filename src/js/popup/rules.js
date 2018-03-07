const rules = [
    {
        name: "Titulo da pagina",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("title") || [], title => title.innerText),
        tests: [{
            description: "Deve haver 1 e somente 1 titulo por pagina",
            expect: (results) => results.length === 1,
            level: "error"
        }]
    }, {
        name: "URL canonica",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='canonical']") || [], canonical => canonical.href),
        tests: [{
            description: "There sould be one and only one canonical tag",
            expect: (results) => results.length === 1,
            level: "error"
        }]
    }, {
        name: "Imagens sem atributo alt preenchido",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("img:not([alt]), img[alt='']"), img => img.getAttribute("src")),
        tests: [{
            description: "All images should have alt attributes",
            expect: (results) => results.length === 0,
            level: "warning"
        }]
    },
    {
        name: "H1",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("h1"), h1 => h1.innerText),
        tests: [{
            description: "Deve haver 1 e somente <h1> por pagina",
            expect: (results) => results.length === 1,
            level: "warning"
        }]
    }, {
        name: "Lista de H2",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("h2"), h2 => h2.innerText),
        tests: [{
            description: "Empty test",
            expect: (results) => true,
            level: "error"
        }]
    }, {
        name: "Lista de H3",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("h3"), h3 => h3.innerText),
        tests: [{
            description: "Empty test",
            expect: (results) => true,
            level: "error"
        }]
    }, {
        name: "Prev",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='prev']"), prev => prev.href),
        tests: [{
            description: "Empty test",
            expect: (results) => true,
            level: "error"
        }]
    }, {
        name: "Next",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='next']"), next => next.href),
        tests: [{
            description: "Empty test",
            expect: (results) => true,
            level: "error"
        }]
    }, {
        name: "Meta Robots",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("meta[name='robots']"), robots => robots.content),
        tests: [{
            description: "Empty test",
            expect: (results) => true,
            level: "error"
        }]
    }, {
        name: "AMP html",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='amphtml']"), link => link.href),
        tests: [{
            description: "Empty test",
            expect: (results) => true,
            level: "error"
        }]
    }, {
        name: "Meta Description",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("meta[name='description']"), meta => meta.content),
        tests: [{
            description: "Empty test",
            expect: (results) => true,
            level: "error"
        }]
    }, {
        name: "Data do prerender",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("[data-prerender-date]"), node => node.getAttribute("data-prerender-date")),
        tests: [{
            description: "Empty test",
            expect: (results) => true,
            level: "error"
        }]
    }, {
        name: "Lista de alternates",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='alternate']"), link => link.getAttribute("href")),
        tests: [{
            description: "Empty test",
            expect: (results) => true,
            level: "error"
        }]
    }, {
        name: "Lista de links",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("a[href]"), link => link.getAttribute("href")).sort(),
        tests: [{
            description: "Empty test",
            expect: (results) => true,
            level: "error"
        }]
    }
];
export default rules;