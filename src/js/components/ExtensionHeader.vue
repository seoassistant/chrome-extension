<script>
    import SEOAssistant from "../seo-assistant/seo-assistant";
    let data = {};

    export default {
        name: "ExtensionHeader",
        data () {
            return data;
        }
    }
</script>


<style lang="css" scoped></style>

<template>
    <header class="hero is-danger">
        <div class="hero-body">
            <h1 class="title is-4"></h1>
            <h2 class="subtitle is-6"></h2>
        </div>
        <div class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth">
                <div class="container">
                    <ul>
                        <router-link active-class="is-active" to="/resumo" tag="li"><a>Resumo</a></router-link>
                        <router-link active-class="is-active" to="/sucesso" tag="li"><a>Sucesso(0)</a></router-link>
                        <router-link active-class="is-active" to="/erros" tag="li"><a>Erros(0)</a></router-link>
                        <router-link active-class="is-active" to="/alertas" tag="li"><a>Alertas(0)</a></router-link>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>