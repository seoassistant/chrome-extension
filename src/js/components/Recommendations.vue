<script>
    export default {
        computed: {
            recommendations () {
                return this.$store.state.report.tests.all;
            }
        }
    }
</script>
<template>
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead class="subtitle is-6">
        <tr>
            <th></th>
            <th>Recomendações</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="recommendation in recommendations">
                <td class="has-text-centered">
                    <span class="tag" v-bind:class="recommendation.passed ? 'is-success' : recommendation.level === 'error' ? 'is-danger' : 'is-warning' ">
                    <i class="fa fa-check"></i></span>
                </td>
                <td>
                    <span>{{recommendation.description}}</span>
                </td>
            </tr>
        </tbody>
    </table>
</template>