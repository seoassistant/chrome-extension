<script>
    let data = {};

    export default {
        name: "ExtensionHeader",
        data () {
            return data;
        },
        computed: {
            page () {
                return this.$store.state.page;
            },
            url () {
                return {
                    short: this.page.url.length <= 35 ? this.page.url : `${this.page.url.substr(0,60)}...`,
                    long: this.page.url
                }
            },
            title () {
                return {
                    short: this.page.title.length <= 35 ? this.page.title : `${this.page.title.substr(0,35)}...`,
                    long: this.page.title
                }
            },
            report () {
                return this.$store.state.report;
            }
        }
    }
</script>

<template>
    <header class="hero" v-bind:class="{'is-success': report.status === 'success', 'is-warning': report.status === 'warning', 'is-danger': report.status === 'error' }">
        <div class="hero-body">
            <h1 class="title is-4" :title="title.long">{{title.short}}</h1>
            <h2 class="subtitle is-6" :title="url.long">{{url.short}}</h2>
        </div>
        <div class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth">
                <div class="container">
                    <ul>
                        <router-link active-class="is-active" to="/overview" tag="li"><a>Resumo</a></router-link>
                        <router-link active-class="is-active" to="/passed" tag="li"><a>Sucesso({{report.passed.length}})</a></router-link>
                        <router-link active-class="is-active" to="/errors" tag="li"><a>Erros({{report.failed_errors.length}})</a></router-link>
                        <router-link active-class="is-active" to="/warnings" tag="li"><a>Alertas({{report.failed_warnings.length}})</a></router-link>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>