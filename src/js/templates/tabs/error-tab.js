import ResultsToHTMLTable from "../results-to-html-table";

const ErrorTab = (data) => {
    let section = document.createElement("section");
    section.setAttribute("style", "display:block;max-width:100%");
    section.setAttribute("class", "section");
    let results = data.errorsNotPassed;
    let statusTextClass = {
        "passed": "has-text-success",
        "warning": "has-text-warning",
        "error": "has-text-danger"
    };
    let header_error = `<h2 class="${statusTextClass[data.status]} title is-2">${results.length}/${data.results.length}</h2>
        <h3 class="subtitle is-6">
            <span class="has-text-weight-semibold">
                Oops.
            </span>
            <span>
                ${results.length} of this page elements have errors.
            </span>
        </h3>`;

    let no_errors = `<h2 class="${statusTextClass[data.status]} title is-2">Awesome</h2>
        <h3 class="subtitle is-6">
            <span class="has-text-weight-semibold">
                This page has no errors.
            </span>
            <span>
                Keep the good job!
            </span>
        </h3>`;

    section.innerHTML = results.length > 0 ? `${header_error}${ResultsToHTMLTable(results)}` : no_errors;
    return section;
};

export default ErrorTab;