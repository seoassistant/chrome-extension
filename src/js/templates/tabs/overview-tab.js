import ScoreHeader from "../score-header";
import TestsToReport from "../tests-to-report";

const OverviewTab = (data) => {
    let section = document.createElement("section");
    let scoreHeader = ScoreHeader(data);
    let testsToReport = TestsToReport(data.tests);
    section.insertAdjacentHTML("afterbegin", scoreHeader);
    section.insertAdjacentHTML("beforeend", testsToReport);
    return section;
};

export default OverviewTab;