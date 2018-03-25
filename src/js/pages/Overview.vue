<template>
    <div>
        <results-panel></results-panel>
        <recommendations></recommendations>
    </div>
</template>
<script>
    import Recommendations from "../components/Recommendations.vue";
    import ResultsPanel from "../components/ResultsPanel.vue";
    export default {
        components: {
            "recommendations": Recommendations,
            "results-panel": ResultsPanel
        }
    }
</script>