import ResultsToHTMLTable from "../results-to-html-table";

const WarningTab = (data) => {
    let section = document.createElement("section");
    section.setAttribute("class", "section");
    section.setAttribute("style", "display:block;max-width:100%;min-height:240px;");
    let results = data.warningsNotPassed;
    let statusTextClass = {
        "success": "has-text-success",
        "warning": "has-text-warning",
        "error": "has-text-danger"
    };
    let header_warning = `<h2 class="${statusTextClass[data.status]} title is-2">${results.length}/${data.results.length}</h2>
        <h3 class="subtitle is-6">
            <span class="has-text-weight-semibold">
                Ok.
            </span>
            <span>
                ${results.length} of this page elements have some warning.
            </span>
        </h3>`;
    let no_warnings = `<h2 class="${statusTextClass[data.status]} title is-2">Very nice!</h2>
        <h3 class="subtitle is-6">
            <span class="has-text-weight-semibold">
                This page has no warnings.
            </span>
            <span>
                Keep the good job!
            </span>
        </h3>`;
    section.innerHTML = results.length > 0 ? `${header_warning}${ResultsToHTMLTable(results)}` : no_warnings;
    return section;
};

export default WarningTab;