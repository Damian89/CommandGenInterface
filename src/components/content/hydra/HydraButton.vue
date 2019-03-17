<template>

    <div class="input-group">
        <button
                v-on:click="selectButton"
                class="w-100 mb-2 btn btn-secondary"
                v-bind:class="[ currentButton ? 'active' : '' ]"
                :type="type">
            <slot></slot>
        </button>
    </div>

</template>

<script>
    export default {
        name: "HydraButton",
        props: ['type'],
        computed: {
            currentButton: function () {
                return this.$store.state.hydra == this.type;
            }
        },
        methods: {
            selectButton: function () {
                this.$store.state.hydra = this.type;
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