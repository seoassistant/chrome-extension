<template>
    <div>
        <score-panel :title="title"></score-panel>
        <elements-table :elements="passed"></elements-table>
    </div>
</template>

<script>
    import ElementsTable from "../components/ElementsTable.vue";
    import ScorePanel from "../components/ScorePanel.vue";

    export default {
        data() {
            return {};
        },
        computed: {
            title () {
                return `${this.$store.state.report.tests.passed.length} de ${this.$store.state.report.tests.all.length}`;
            },
            status () {
                return this.$store.state.report.status;
            },
            passed () {
                return this.$store.state.report.elements.passed;
            }
        },
        components: {
            "elements-table": ElementsTable,
            "score-panel": ScorePanel
        }
    }
</script>