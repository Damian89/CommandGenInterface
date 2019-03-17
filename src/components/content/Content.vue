<template>
    <div class="tab-content" id="pills-tabContent">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Content"
    }
</script>

<style lang="scss">
    #pills-tabContent {
        margin: 15px 0px;
        color: #fff;
    }

    .setting-groups {
        border:1px solid darken(#117a8b,10%);
        padding:15px;
        margin-bottom: 30px;
    }
</style>