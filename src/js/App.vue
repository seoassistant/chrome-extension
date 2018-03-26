<script>
    import ExtensionFooter from "./components/ExtensionFooter.vue";
    import ExtensionHeader from "./components/ExtensionHeader.vue";

    export default {
        name: "app",
        data () {
            return {};
        },
        components: {
            "extension-footer": ExtensionFooter,
            "extension-header": ExtensionHeader
        }
    };
</script>

<style lang="sass" src="bulma"></style>

<template>
    <div>
        <extension-header></extension-header>
        <div class="section container">
            <router-view></router-view>
        </div>
        <extension-footer></extension-footer>
    </div>
</template>