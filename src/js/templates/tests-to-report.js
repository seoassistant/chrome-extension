const TestsToReport = (tests) => {
    let levelToTagClass = {
        "warning": "is-warning",
        "error": "is-danger"
    };
    return `<table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead class="subtitle is-6">
            <tr>
                <th></th>
                <th>Recomendações</th>
            </tr>
        </thead>
        <tbody>
            ${tests.map(test => `<tr><td class="has-text-centered">${test.passed ? `<span class="tag is-success"><i class="fa fa-check"></i></span>` : `<span class="tag ${levelToTagClass[test.level]}"><i class="fa fa-times"></i></span>` }</td><td>${test.description}</td></tr>`).join("")}            
        </tbody>        
    </table>`;
};

export default TestsToReport;