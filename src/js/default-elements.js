const rules = [
    {
        name: "Título da pagina",
        extract: (dom) => Array.from(dom.querySelectorAll("head title") || []).map(title => title.innerText),
        tests: [{
            description: "Deve existir um e apenas um titulo na pagina",
            expect: (results) => results.length === 1,
            level: "error"
        }]
    }, {
        name: "URL canônica",
        extract: (dom) => Array.from(dom.querySelectorAll("link[rel='canonical']") || []).map(canonical => canonical.href),
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
        extract: (dom) => Array.from(dom.querySelectorAll("h1")).map(h1 => h1.innerText),
        tests: [{
            description: "Deve existir apenas um <h1> por página.",
            expect: (results) => results.length === 1,
            level: "error"
        }]
    }, {
        name: "Lista de H2",
        extract: (dom) => Array.from(dom.querySelectorAll("h2")).map(h2 => h2.innerText),
        tests: [{
            description: "É boa prática ter ao menos um <h2>",
            expect: (results) => results.length > 0,
            level: "warning"
        }]
    }, {
        name: "Lista de H3",
        extract: (dom) => Array.from(dom.querySelectorAll("h3")).map(h3 => h3.innerText),
        tests: [{
            description: "É boa prática ter ao menos um <h3>",
            expect: (results) => results.length > 0,
            level: "warning"
        }]
    }, {
        name: "Link para página anterior",
        extract: (dom) => Array.from(dom.querySelectorAll("link[rel='prev']")).map(prev => prev.href),
        tests: [{
            description: "Deve existir link para página anterior em uma paginação.",
            expect: (results) => results.length > 0,
            level: "warning"
        }]
    }, {
        name: "Link para página seguinte.",
        extract: (dom) => Array.from(dom.querySelectorAll("link[rel='next']")).map(next => next.href),
        tests: [{
            description: "Deve existir link para página anterior em uma paginação.",
            expect: (results) => results.length > 0,
            level: "warning"
        }]
    }, {
        name: "Meta Robots",
        extract: (dom) => Array.from(dom.querySelectorAll("meta[name='robots']")).map(robots => robots.content),
        tests: [{
            description: "É bom existir uma tag para meta robots",
            expect: (results) => results.length > 0,
            level: "warning"
        }]
    }, {
        name: "Link para versão AMP",
        extract: (dom) => Array.from(dom.querySelectorAll("link[rel='amphtml']")).map( link => link.href),
        tests: [{
            description: "É bom existir uma tag apontando para versão AMP da página.",
            expect: (results) => results.length > 0,
            level: "warning"
        }]
    }, {
        name: "Meta Description",
        extract: (dom) => Array.from(dom.querySelectorAll("meta[name='description']")).map(meta => meta.content),
        tests: [{
            description: "Deve existir uma tag para meta description.",
            expect: (results) => results.length > 0,
            level: "error"
        }]
    }, {
        name: "Lista de alternates",
        extract: (dom) => Array.from(dom.querySelectorAll("link[rel='alternate']")).map(link => link.getAttribute("href")),
        tests: [{
            description: "É bom existir pelo menos uma url de alternate.",
            expect: (results) => results.length > 0,
            level: "warning"
        }]
    }, {
        name: "Imagens sem alt",
        extract: (dom) => Array.from(dom.querySelectorAll("img[src]")).map(img => img.getAttribute("alt") === undefined || img.getAttribute("alt") === "").map(image => `<img src='${image.src}'>`),
        tests: [{
            description: "Todas as imagens devem possuir alt",
            expect: (results) => results.length === 0,
            level: "warning"
        }]
    }, {
        name: "Lista de âncoras",
        extract: (dom) => Array.from(dom.querySelectorAll("a[href]")).map(link => link.getAttribute("href")).sort(),
        tests: [{
            description: "É bom existir pelo menos uma âncora.",
            expect: (results) => results.length > 0,
            level: "error"
        }]
    }
];
export default rules;