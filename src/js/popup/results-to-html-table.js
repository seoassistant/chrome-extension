const ResultsToHTMLTable = (results) => {
    return `
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr class="has-text-weight-semibold">
                    <td> Propriedade</td>
                    <td> Conteudo </td>
                </tr>
            </thead>
            <tbody>
                ${Object.keys(results).map( prop => `<tr>
                    <td> ${results[prop].name}</td>
                    <td> ${Array.isArray(results[prop].result) && results[prop].result.length > 1  ?
                            `<ul>${results[prop].result.map( item => `
                               <li>${item}</li> 
                            `).join("")}</ul>` :
                            `${results[prop].result}`
                    }</td>
                </tr>`).join("")}
            </tbody>
        </table>
    `;
};
export default ResultsToHTMLTable;