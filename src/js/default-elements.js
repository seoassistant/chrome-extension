const rules = [
    {
        name: "Titulo da pagina",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("head title") || [], title => title.innerText),
        tests: [{
            description: "Deve existir um e apenas um titulo na pagina",
            expect: (results) => results.length === 1,
            level: "error"
        }]
    }, {
        name: "URL canônica",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='canonical']") || [], canonical => canonical.href),
        tests: [{
            description: "Deve existir uma e apenas uma url canônica na página. ",
            expect: (results) => results.length === 1,
            level: "error"
        }, {
            description: "Caminho da url canônica deve ser absoluto.",
            expect: (results) => results.length >= 1 ? results.every(result => /^http/.test(result)) : false,
            level: "error"
        }]
    }, {
        name: "H1",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("h1"), h1 => h1.innerText),
        tests: [{
            description: "Deve existir apenas um &lt;h1&gt; por página.",
            expect: (results) => results.length === 1,
            level: "error"
        }]
    }, {
        name: "Lista de H2",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("h2"), h2 => h2.innerText),
        tests: [{
            description: "É boa prática ter ao menos um &lt;h2&gt;",
            expect: (results) => results.length > 0,
            level: "warning"
        }]
    }, {
        name: "Lista de H3",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("h3"), h3 => h3.innerText),
        tests: [{
            description: "É boa prática ter ao menos um &lt;h3&gt;",
            expect: (results) => results.length > 0,
            level: "warning"
        }]
    }, {
        name: "Link para página anterior",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='prev']"), prev => prev.href),
        tests: [{
            description: "Deve existir link para página anterior em uma paginação.",
            expect: (results) => results.length > 0,
            level: "warning"
        }]
    }, {
        name: "Link para página seguinte.",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='next']"), next => next.href),
        tests: [{
            description: "Deve existir link para página anterior em uma paginação.",
            expect: (results) => results.length > 0,
            level: "warning"
        }]
    }, {
        name: "Meta Robots",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("meta[name='robots']"), robots => robots.content),
        tests: [{
            description: "É bom existir uma tag para meta robots",
            expect: (results) => results.length > 0,
            level: "warning"
        }]
    }, {
        name: "Link para versão AMP",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='amphtml']"), link => link.href),
        tests: [{
            description: "É bom existir uma tag apontando para versão AMP da página.",
            expect: (results) => results.length > 0,
            level: "warning"
        }]
    }, {
        name: "Meta Description",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("meta[name='description']"), meta => meta.content),
        tests: [{
            description: "É bom existir uma tag para meta description.",
            expect: (results) => results.length > 0,
            level: "error"
        }]
    }, {
        name: "Lista de alternates",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("link[rel='alternate']"), link => link.getAttribute("href")),
        tests: [{
            description: "É bom existir pelo menos uma url de alternate.",
            expect: (results) => results.length > 0,
            level: "warning"
        }]
    }, {
        name: "Imagens sem alt",
        extract: (dom) => Array.prototype.filter.call(dom.querySelectorAll("img[src]"), img => img.getAttribute("alt") === undefined || img.getAttribute("alt") === "").map(image => `<img src='${image.src}'>`),
        tests: [{
            description: "Todas as imagens devem possuir alt",
            expect: (results) => results.length === 0,
            level: "warning"
        }]
    }, {
        name: "Lista de âncoras",
        extract: (dom) => Array.prototype.map.call(dom.querySelectorAll("a[href]"), link => link.getAttribute("href")).sort(),
        tests: [{
            description: "É bom existir pelo menos uma âncora.",
            expect: (results) => results.length > 0,
            level: "error"
        }]
    }
];
export default rules;