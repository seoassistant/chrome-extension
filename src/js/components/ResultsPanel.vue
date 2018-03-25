<template>
    <div>
        <h2 class="title is-2"
        v-bind:class="{'has-text-danger': status === 'error', 'has-text-warning': status === 'warning', 'has-text-success': status === 'success' }">{{score}}/100
        </h2>
        <h3 class="subtitle is-6">
            <span class="has-text-weight-semibold">{{subtitle.short}}</span>
            <span>&nbsp;{{subtitle.long}}</span>
        </h3>
        <br>
    </div>
</template>
<script>
    export default {
        computed: {
            score () {
                return this.$store.state.report.score;
            },
            status () {
                return this.$store.state.report.status;
            },
            subtitle () {
                const statusToMessage = {
                    error: {
                        short: "Poxa!",
                        long: "Essa página possui erros críticos que precisam ser corrigidos."
                    },
                    success: {
                        short: "Super incrível!",
                        long: "Essa página fez 100 de 100 pontos."
                    },
                    warning: {
                        short: "Podemos melhorar.",
                        long: "Essa página possui alertas que precisam ser corrigidos."
                    }
                };
                return statusToMessage[this.status];
            }
        }
    }
</script>