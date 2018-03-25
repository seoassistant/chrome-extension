<template>
    <elements-table :elements="errors"></elements-table>
</template>

<script>
    import ElementsTable from "./ElementsTable.vue";

    export default {
        data() {
            return {};
        },
        computed: {
            errors () {
                return this.$store.state.report.failed_errors;
            }
        },
        components: {
            "elements-table": ElementsTable
        }
    }
</script>