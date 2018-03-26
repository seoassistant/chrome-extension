<template>
    <elements-table :elements="warning"></elements-table>
</template>

<script>
    import ElementsTable from "../components/ElementsTable.vue";

    export default {
        data() {
            return {};
        },
        computed: {
            warning () {
                return this.$store.state.report.els.failed_by.warning;
            }
        },
        components: {
            "elements-table": ElementsTable
        }
    }
</script>