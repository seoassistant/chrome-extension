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
        <router-view></router-view>
        <extension-footer></extension-footer>
    </div>
</template>