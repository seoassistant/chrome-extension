import Overview from "./pages/Overview.vue";
import Passed from "./pages/Passed.vue";
import Warning from "./pages/Warning.vue";
import Errors from "./pages/Errors.vue";

const routes = [
    { path: "/overview", component: Overview},
    { path: "/passed", component: Passed},
    { path: "/errors", component: Errors},
    { path: "/warnings", component: Warning},
    { path: '*', redirect: '/overview'}
];

export default routes;