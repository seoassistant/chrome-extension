<template>
    <elements-table :elements="passed"></elements-table>
</template>

<script>
    import ElementsTable from "../components/ElementsTable.vue";

    export default {
        data() {
            return {};
        },
        computed: {
            passed () {
                return this.$store.state.report.passed;
            }
        },
        components: {
            "elements-table": ElementsTable
        }
    }
</script>