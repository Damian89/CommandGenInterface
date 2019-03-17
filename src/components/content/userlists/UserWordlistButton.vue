<template>

    <div class="input-group">
        <button
                v-on:click="selectButton"
                class="w-100 mb-2 btn btn-secondary"
                v-bind:class="[ currentButton ? 'active' : '' ]"
                :type="type"
                :wordlist="wordlist">
            {{ wordlist }}
        </button>
    </div>

</template>

<script>
    export default {
        name: "UserWordlistButton",
        props: ['type', 'wordlist', 'wfuzz'],
        computed: {
            currentButton: function () {
                return this.$store.state.wordlist[this.type] == this.wordlist;
            }
        },
        methods: {
            selectButton: function () {
                this.$store.state.wordlist[this.type] = this.wordlist;
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