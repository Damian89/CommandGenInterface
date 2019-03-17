<template>
    <div v-bind:class="[ currentTab ? 'active' : '' ]" class="tab-pane" :id="id">
        <div class="row">

            <div class="col-xl-3">
                <div class="setting-groups">
                    <button v-on:click="showCommands" v-bind:class="[ this.show_help ? '' : 'active' ]"
                            class="btn btn-sm btn-secondary">Show commands
                    </button>
                    <button v-on:click="showHelp" v-bind:class="[ this.show_help ? 'active' : '' ]"
                            class="btn btn-sm btn-secondary">Show help
                    </button>
                </div>

                <div class="setting-groups">
                    <label class="label">Auto generated url</label>

                    <div class="input-group">
                        <input disabled type="text" class="form-control" v-model="autoupdatedUrl">
                    </div>

                    <label class="label mt-2">Final target (URL)</label>

                    <div class="input-group">
                        <input v-model="urltoscan" type="text" class="form-control">
                    </div>

                    <div class="row">
                        <div class="col-xl-6">
                            <label class="label mt-2">Skip statuses</label>

                            <div class="input-group">
                                <input v-model="skip_statuses" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <label class="label mt-2">Threads</label>

                            <div class="input-group">
                                <input v-model="threads" type="text" class="form-control">
                            </div>
                        </div>
                    </div>


                </div>

                <div class="setting-groups">
                    <button v-on:click="showWordlists" v-bind:class="[ this.show_wordlists ? 'active' : '' ]"
                            class="btn btn-sm btn-secondary">Wordlists
                    </button>
                    <button v-on:click="showExtensions" v-bind:class="[ this.show_extensions ? 'active' : '' ]"
                            class="btn btn-sm btn-secondary">Extensions
                    </button>
                    <button v-on:click="showSettings" v-bind:class="[ this.show_settings ? 'active' : '' ]"
                            class="btn btn-sm btn-secondary">Settings
                    </button>
                </div>

                <div v-if="show_wordlists" class="setting-groups">
                    <WordlistList></WordlistList>
                </div>

                <div v-if="show_extensions" class="setting-groups">
                    <ExtensionList></ExtensionList>
                </div>

                <div v-if="show_settings" class="setting-groups">


                    <div class="row">
                        <div class="col-xl-6">
                            <label class="label">Method</label>
                            <select v-model="method" class="form-control mb-2">
                                <option value="GET">GET</option>
                                <option value="POST">POST</option>
                                <option value="HEAD">HEAD</option>
                                <option value="OPTIONS">OPTIONS</option>
                                <option value="PUT">PUT</option>
                                <option value="DELETE">DELETE</option>
                            </select>
                        </div>
                        <div class="col-xl-6">
                            <label class="label">Max retries</label>
                            <div class="input-group">
                                <input v-model="max_retries" type="text" class="form-control mb-2">
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <label class="label">Timeout</label>
                            <div class="input-group">
                                <input v-model="timeout" type="text" class="form-control mb-2">
                            </div>
                        </div>
                        <div class="col-xl-6">

                            <label class="label">Request by host</label>
                            <select v-model="request_by_hostname" class="form-control mb-2">
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>

                        </div>

                        <div class="col-xl-6">
                            <label class="label">Random user agents</label>
                            <select v-model="random_user_agents" class="form-control mb-2">
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>

                        </div>
                    </div>
                </div>
            </div>


            <div v-if="show_help" class="col-xl-9">
                <div class="setting-groups">
                    <label class="label">Help</label>

                    <table class="table table-dark">
                        <tbody>
                        <tr>
                            <td>-s DELAY</td>
                            <td>
                                Delay between requests (float number)
                            </td>
                        </tr>

                        <tr>
                            <td>-r</td>
                            <td>
                                Bruteforce recursively
                            </td>
                        </tr>

                        <tr>
                            <td>--suppress-empty</td>
                            <td>
                                Does not show empty results
                            </td>
                        </tr>

                        <tr>
                            <td>-t THREADSCOUNT</td>
                            <td>
                                Number of Threads
                            </td>
                        </tr>

                        <tr>
                            <td>-x 403,404,504</td>
                            <td>
                                Exclude status code, separated by comma
                            </td>
                        </tr>

                        <tr>
                            <td>-F</td>
                            <td>
                                Follow redirects
                            </td>
                        </tr>

                        <tr>
                            <td>-c COOKIE</td>
                            <td>
                                Cookie String
                            </td>
                        </tr>
                        <tr>
                            <td>--header HEADERS</td>
                            <td>
                                --header "Referer: example.com"
                            </td>
                        </tr>
                        <tr>
                            <td>-b</td>
                            <td>
                                By default dirsearch will request by IP for speed.
                                This forces requests by hostname.
                            </td>
                        </tr>
                        <tr>
                            <td>Reporting</td>
                            <td>
                                --simple-report=SIMPLEOUTPUTFILE<br>
                                --plain-text-report=PLAINTEXTOUTPUTFILE<br>
                                --json-report=JSONOUTPUTFILE<br>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div v-if="!show_help" class="col-xl-9">
                <div class="setting-groups">
                    <label class="label">Commands ready to use</label>

                    <table class="table table-striped table-dark">
                        <tbody>
                        <tr>
                            <CommandsDirsearch
                                    :threads="threads"
                                    :method="method"
                                    :max_retries="max_retries"
                                    :timeout="timeout"
                                    :rua="random_user_agents"
                                    :rbh="request_by_hostname"
                                    :skip_statuses="skip_statuses"
                                    :urltoscan="urltoscan">
                            </CommandsDirsearch>
                        </tr>

                        <tr>
                            <td v-on:click.prevent.stop="copy($event)">
                                cat {{ this.$store.state.config.dirsearchLogFile }}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import ExtensionList from '../extensions/ExtensionList.vue';
    import WordlistList from "../wordlists/WordlistList.vue";
    import CommandsDirsearch from '../commands/Dirsearch.vue';

    export default {
        name: "ContentDirsearch",
        props: ['id'],
        components: {
            WordlistList,
            ExtensionList,
            CommandsDirsearch
        },
        data: function () {
            return {
                urltoscan: '',
                skip_statuses: '501,502,503',
                method: 'GET',
                threads: 15,
                timeout: 12,
                request_by_hostname: true,
                max_retries: 3,
                random_user_agents: true,
                show_help: false,
                show_wordlists: true,
                show_extensions: false,
                show_settings: false,
            }
        },
        computed: {
            currentTab: function () {
                return this.$store.state.tab == this.id;
            },
            autoupdatedUrl: function () {
                return this.$store.state.base.url + this.$store.state.base.path;
            }
        },
        watch: {
            autoupdatedUrl: function (val) {
                this.urltoscan = val;
            }
        },
        methods: {
            showHelp: function () {
                this.show_help = true;
            },
            showCommands: function () {
                this.show_help = false;
            },
            showWordlists: function () {
                this.show_settings = false;
                this.show_wordlists = true;
                this.show_extensions = false;
            },
            showExtensions: function () {
                this.show_settings = false;
                this.show_wordlists = false;
                this.show_extensions = true;
            },
            showSettings: function () {
                this.show_settings = true;
                this.show_wordlists = false;
                this.show_extensions = false;
            },
            copy: function (event) {
                this.copyContentToClipboard(event.srcElement.innerText);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn {
        &.btn-secondary.active {
            background: #117a8b;
        }
    }
</style>