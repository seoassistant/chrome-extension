const ResultsToHTMLTable = (results) => {
    return `
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr class="has-text-weight-semibold">
                    <td> Element</td>
                    <td> Content </td>
                </tr>
            </thead>
            <tbody>
                ${results.map( result => `<tr>
                    <td> ${result.name}</td>
                    <td> ${Array.isArray(result.extracted) && result.extracted.length > 1  ?
                            `<ul>${result.extracted.map( item => `
                               <li>${item}</li> 
                            `).join("")}</ul>` :
                            `${result.extracted}`
                    }</td>
                </tr>`).join("")}
            </tbody>
        </table>
    `;
};
export default ResultsToHTMLTable;