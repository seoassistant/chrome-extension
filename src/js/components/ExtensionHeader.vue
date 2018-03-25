<script>
    let data = {
        teste: "Teles"
    };

    export default {
        name: "ExtensionHeader",
        data () {
            return data;
        },
        computed: {
            page () {
                return this.$store.state.page;
            },
            report () {
                return this.$store.state.report;
            }
        }
    }
</script>


<style lang="css"></style>

<template>
    <header class="hero" v-bind:class="{'is-success': report.status === 'success', 'is-warning': report.status === 'warning', 'is-danger': report.status === 'error' }">
        <div class="hero-body">
            <h1 class="title is-4">{{page.title}}</h1>
            <h2 class="subtitle is-6">{{page.url}}</h2>
        </div>
        <div class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth">
                <div class="container">
                    <ul>
                        <router-link active-class="is-active" to="/resumo" tag="li"><a>Resumo</a></router-link>
                        <router-link active-class="is-active" to="/sucesso" tag="li"><a>Sucesso({{report.passed.length}})</a></router-link>
                        <router-link active-class="is-active" to="/erros" tag="li"><a>Erros({{report.failed_errors.length}})</a></router-link>
                        <router-link active-class="is-active" to="/alertas" tag="li"><a>Alertas({{report.failed_warnings.length}})</a></router-link>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>