<template>

    <div v-bind:class="[ (currentTab)? 'active':'' ]" class="tab-pane" :id="id">

        <div class="row">

            <div class="col-xl-3">

                <div class="setting-groups">
                    <label class="label">Target (URL)</label>

                    <div class="input-group">

                        <input v-model="url" v-on:keyup="storeUrl" type="text" class="form-control">

                        <div class="input-group-append">

                            <button
                                    class="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                Actions
                            </button>

                            <div class="dropdown-menu">

                                <a class="dropdown-item" href="#">Get IP</a>

                            </div>

                        </div>

                    </div>

                    <label class="label mt-2">Path</label>

                    <div class="input-group">

                        <input v-model="path" v-on:keyup="storePath" type="text" class="form-control">

                    </div>
                </div>

                <div class="setting-groups">
                    <HydraList></HydraList>
                </div>
            </div>

            <div class="col-xl-3">
                <div class="setting-groups">
                    <WordlistList></WordlistList>
                </div>
            </div>

            <div class="col-xl-3">
                <div class="setting-groups">
                    <UserWordlistList></UserWordlistList>
                </div>

                <div class="setting-groups">
                    <PassWordlistList></PassWordlistList>
                </div>
            </div>

            <div class="col-xl-3">
                <div class="setting-groups">
                    <ExtensionList></ExtensionList>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import ExtensionList from '../extensions/ExtensionList.vue';
    import WordlistList from '../wordlists/WordlistList.vue';
    import UserWordlistList from "../userlists/UserWordlistList.vue";
    import PassWordlistList from "../passwordlists/PassWordlistList.vue";
    import HydraList from '../hydra/HydraList.vue';

    export default {
        name: "ContentSettings",
        props: ['id'],
        components: {
            PassWordlistList,
            UserWordlistList,
            ExtensionList,
            WordlistList,
            HydraList
        },
        data: function () {
            return {
                url: '',
                path: '',
            }
        },
        methods: {
            storeUrl: function () {
                this.$store.state.base.url = this.url;
            },
            storePath: function () {
                this.$store.state.base.path = this.path;
            }
        },
        computed: {
            currentTab: function () {
                return this.$store.state.tab == this.id;
            }
        },
    }
</script>
