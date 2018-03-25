<template>
    <div>
        <results-panel></results-panel>
        <recommendations></recommendations>
    </div>
</template>
<script>
    import Recommendations from "./Recommendations.vue";
    import ResultsPanel from "./ResultsPanel.vue";
    export default {
        components: {
            "recommendations": Recommendations,
            "results-panel": ResultsPanel
        }
    }
</script>