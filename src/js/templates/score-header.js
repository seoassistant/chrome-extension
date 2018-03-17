const ScoreHeader = (seo) => {
    let statusToTextClassMap = {
        "success": "has-text-success",
        "error": "has-text-danger",
        "warning": "has-text-warning"
    };
    let statusToMessageMap = {
        "success": "<span class='has-text-weight-semibold'>Super incrível!</span> Essa página fez 100 de 100 pontos.",
        "error": "<span class='has-text-weight-semibold'>Poxa!</span> Essa página possui erros críticos que precisam ser corrigidos.",
        "warning": "<span class='has-text-weight-semibold'>Podemos melhorar.</span> Essa página possui alertas que precisam ser corrigidos."
    };
    return `<h2 class="${statusToTextClassMap[seo.status]} title is-2">
                ${seo.score}/100
            </h2>
            <h3 class="subtitle is-6">${statusToMessageMap[seo.status]}</h3>
            <br>`
};

export default ScoreHeader;