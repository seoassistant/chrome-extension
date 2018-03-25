import Overview from "./pages/Overview.vue";
import Passed from "./pages/Passed.vue";
import Warning from "./pages/Warning.vue";
import Errors from "./pages/Errors.vue";

const routes = [
    { path: "/resumo", component: Overview},
    { path: "/sucesso", component: Passed},
    { path: "/erros", component: Errors},
    { path: "/alertas", component: Warning},
    { path: '*', redirect: '/resumo'}
];

export default routes;