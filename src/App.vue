<template>
    <div id="app">
        <div class="container-fluid">
            <Nav>
                <NavTab ident="settings" name="Settings" id="settings-tab"></NavTab>
                <NavTab ident="dirsearch" name="Dirsearch" id="dirsearch-tab"></NavTab>
                <NavTab ident="wfuzz" name="Wfuzz" id="wfuzz-tab"></NavTab>
                <NavTab ident="hydra" name="Hydra" id="hydra-tab"></NavTab>
            </Nav>

            <Content>
                <ContentSettings id="settings"></ContentSettings>
                <ContentDirsearch id="dirsearch"></ContentDirsearch>
                <ContentWfuzz id="wfuzz"></ContentWfuzz>
                <ContentHydra id="hydra"></ContentHydra>
            </Content>
        </div>
    </div>
</template>

<script>
    import Nav from './components/navigation/Nav.vue';
    import Content from './components/content/Content.vue';
    import NavTab from './components/navigation/Tab.vue';
    import ContentSettings from './components/content/pages/Settings.vue';
    import ContentDirsearch from './components/content/pages/Dirsearch.vue';
    import ContentWfuzz from './components/content/pages/Wfuzz.vue';
    import ContentHydra from './components/content/pages/Hydra.vue';

    export default {
        name: 'App',
        components: {
            Nav,
            Content,
            NavTab,
            ContentSettings,
            ContentDirsearch,
            ContentWfuzz,
            ContentHydra,
        }
    }
</script>

<style lang="scss">
    @import '../node_modules/bootstrap/scss/bootstrap';

    body {
        margin: 15px 0;
        background: #32383e;
    }
</style>

