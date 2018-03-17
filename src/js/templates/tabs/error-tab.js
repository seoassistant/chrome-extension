import ResultsToHTMLTable from "../results-to-html-table";

const ErrorTab = (data) => {
    let section = document.createElement("section");
    section.setAttribute("style", "display:block;max-width:100%;min-height:240px;");
    section.setAttribute("class", "section");
    let results = data.errorsNotPassed;
    let statusTextClass = {
        "success": "has-text-success",
        "warning": "has-text-warning",
        "error": "has-text-danger"
    };
    let header_error = `<h2 class="${statusTextClass[data.status]} title is-2">${results.length}/${data.results.length}</h2>
        <h3 class="subtitle is-6">
            <span class="has-text-weight-semibold">
                Oops.
            </span>
            <span>
                ${results.length} elementos tem erros nessa página.
            </span>
        </h3>`;

    let no_errors = `<h2 class="${statusTextClass[data.status]} title is-2">Incrível</h2>
        <h3 class="subtitle is-6">
            <span class="has-text-weight-semibold">
                Essa página não possui erros.
            </span>
            <span>
                Continue o bom trabalho :)
            </span>
        </h3>`;

    section.innerHTML = results.length > 0 ? `${header_error}${ResultsToHTMLTable(results)}` : no_errors;
    return section;
};

export default ErrorTab;