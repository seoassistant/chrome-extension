<template>
    <elements-table :elements="errors"></elements-table>
</template>

<script>
    import ElementsTable from "../components/ElementsTable.vue";

    export default {
        data() {
            return {};
        },
        computed: {
            errors () {
                return this.$store.state.report.elements.failed_by.error;
            }
        },
        components: {
            "elements-table": ElementsTable
        }
    }
</script>