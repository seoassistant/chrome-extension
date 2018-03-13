const ScoreHeader = (seo) => {
    let statusToTextClassMap = {
        "success": "has-text-success",
        "error": "has-text-danger",
        "warning": "has-text-warning"
    };
    let statusToMessageMap = {
        "success": "<span class='has-text-weight-semibold'>Congratulations!</span> This page ranked 100/100 points.",
        "error": "<span class='has-text-weight-semibold'>Oops!</span> This page has some critical errors. Follow the recommendations to fix them.",
        "warning": "<span class='has-text-weight-semibold'>Ok.</span> This page has some work to do but no critical errors."
    };
    return `<h2 class="${statusToTextClassMap[seo.status]} title is-2">
                ${seo.score}/100
            </h2>
            <h3 class="subtitle is-6">${statusToMessageMap[seo.status]}</h3>
            <br>`
};

export default ScoreHeader;