<template>

    <div class="input-group">
        <button
                v-on:click="selectButton"
                class="w-100 mb-2 btn btn-secondary"
                v-bind:class="[ currentButton ? 'active' : '' ]"
                :ext="ext">
            <slot></slot>
        </button>
    </div>

</template>

<script>
    export default {
        name: "ExtensionButton",
        props: ['ext'],
        computed: {
            currentButton: function () {
                return this.$store.state.dirsearch.extensions == this.ext;
            }
        },
        methods: {
            selectButton: function () {
                this.$store.state.dirsearch.extensions = this.ext;
            }
        }
    }
</script>

<style lang="scss" scoped>

    .input-group {
        button.btn {
            &:hover, &.active {
                background-color: #117a8b;
            }
        }
    }

</style>