<template>

    <li class="nav-item">

        <a class="nav-link" href="#" v-on:click="selectTab()"
           v-bind:class="[ currentTab ? 'active' : '' ]" :id="id">
            {{ name }}
        </a>

    </li>

</template>

<script>
    export default {
        props: ['ident', 'id', 'name'],
        computed: {
            currentTab: function () {
                return this.$store.state.tab == this.ident;
            }
        },
        methods: {
            selectTab: function () {
                this.$store.state.tab = this.ident;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .nav-item {
        margin-right: 5px;

        .nav-link {
            color: #fff;
            border: 1px solid darken(#117a8b, 10%);

            &:hover, &.active {
                background-color: #117a8b;
            }

        }
    }
</style>