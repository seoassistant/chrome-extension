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
                Incrível
            </span>
            <span>
                ${results.length} elementos dessa página estão certos.
            </span>
        </h3>`;

    let no_passed = `<h2 class="${statusTextClass[data.status]} title is-2">Poxa,</h2>
        <h3 class="subtitle is-6">
            <span class="has-text-weight-semibold">
                Nenhum elemento dessa página esta certo.
            </span>
            <span>
                Descubra como consertar isso.                
            </span>
        </h3>`;
    section.innerHTML = results.length > 0 ? `${header_passed}${ResultsToHTMLTable(results)}` : no_passed;
    return section;
};

export default PassedTab;