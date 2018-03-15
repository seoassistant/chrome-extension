import ResultsToHTMLTable from "../results-to-html-table";

const PassedTab = (data) => {
    let section = document.createElement("section");
    section.setAttribute("class", "section");
    section.setAttribute("style", "display:block;max-width:100%;min-height:240px;");
    let results = data.allPassed;
    let statusTextClass = {
        "success": "has-text-success",
        "warning": "has-text-warning",
        "error": "has-text-danger"
    };
    let header_passed = `<h2 class="${statusTextClass[data.status]} title is-2">${results.length}/${data.results.length}</h2>
        <h3 class="subtitle is-6">
            <span class="has-text-weight-semibold">
                You've got it!
            </span>
            <span>
                ${results.length} of this page elements have passed.
            </span>
        </h3>`;

    let no_passed = `<h2 class="${statusTextClass[data.status]} title is-2">Oouch!</h2>
        <h3 class="subtitle is-6">
            <span class="has-text-weight-semibold">
                None of this page elements have passed in tests. 
            </span>
            <span>
                Discover how to fix them.                
            </span>
        </h3>`;
    section.innerHTML = results.length > 0 ? `${header_passed}${ResultsToHTMLTable(results)}` : no_passed;
    return section;
};

export default PassedTab;