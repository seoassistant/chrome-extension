<template>
    <div>
        <score-panel :title="title"></score-panel>
        <recommendations></recommendations>
    </div>
</template>
<script>
    import Recommendations from "../components/Recommendations.vue";
    import ScorePanel from "../components/ScorePanel.vue";

    export default {
        computed: {
            title () {
                return `${ this.$store.state.report.score }/100`
            }
        },
        components: {
            "recommendations": Recommendations,
            "score-panel": ScorePanel
        }
    }
</script>