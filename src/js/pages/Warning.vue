<template>
    <div>
        <score-panel :title="title"></score-panel>
        <elements-table :elements="warning"></elements-table>
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
            warning () {
                return this.$store.state.report.elements.failed_by.warning;
            },
            title () {
                return `${this.$store.state.report.tests.failed_by.warning.length} de ${this.$store.state.report.tests.all.length}`;
            }
        },
        components: {
            "score-panel": ScorePanel,
            "elements-table": ElementsTable
        }
    }
</script>