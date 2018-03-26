<template>
    <div>
        <score-panel :title="title"></score-panel>
        <elements-table :elements="errors"></elements-table>
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
            errors () {
                return this.$store.state.report.elements.failed_by.error;
            },
            title () {
                return `${this.$store.state.report.tests.failed_by.error.length} de ${this.$store.state.report.tests.all.length}`;
            }
        },
        components: {
            "score-panel": ScorePanel,
            "elements-table": ElementsTable
        }
    }
</script>