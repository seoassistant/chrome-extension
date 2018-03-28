<style lang="sass">

    .fixed-table
        table-layout: fixed
        word-break: break-all

        .fixed-table__short-cell
            width: 30%
</style>

<template>
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth fixed-table" v-if="elements.length > 0">
        <thead>
        <tr class="has-text-weight-semibold">
            <td class="fixed-table__short-cell"> Elemento</td>
            <td> Valor </td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="element in elements">
            <td class="fixed-table__short-cell">{{element.name}}</td>
            <td>
                <span v-if="element.extracted.content.length === 0" class="tag is-light">Vazio</span>
                <span v-else-if="element.extracted.content.length === 1">{{ element.extracted.content[0] }}</span>
                <ul v-else>
                    <li v-for="element in element.extracted.content">{{element}}</li>
                </ul>
            </td>
        </tr>
        </tbody>
    </table>
    <div v-else>
        Teste
    </div>
</template>
<script>
    export default {
        props: ["elements"],
    };
</script>