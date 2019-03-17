<template>
    <div>
        <label class="label">Hydra search type</label>
        <HydraButton type="http">HTTP</HydraButton>
        <HydraButton type="https">HTTPS</HydraButton>
        <HydraButton type="ftp">FTP</HydraButton>
        <HydraButton type="ftps">FTPS</HydraButton>
        <HydraButton type="ssh">SSH</HydraButton>
        <HydraButton type="mysql">MySQL</HydraButton>
        <HydraButton type="redis">Redis</HydraButton>
    </div>
</template>

<script>
    import HydraButton from '../hydra/HydraButton.vue';

    export default {
        name: "HydraList",
        components: {
            HydraButton
        }
    }
</script>

<style lang="scss" scoped>

</style>