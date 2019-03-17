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
                            <label class="label mt-2">Statuses</label>

                            <div class="input-group">
                                <input v-model="statuses" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <label class="label mt-2">Char count</label>

                            <div class="input-group">
                                <input v-model="char_count" type="text" class="form-control">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <label class="label mt-2">Line count</label>

                            <div class="input-group">
                                <input v-model="line_count" type="text" class="form-control">
                            </div>
                        </div>

                        <div class="col-xl-6">
                            <label class="label mt-2">Word count</label>

                            <div class="input-group">
                                <input v-model="word_count" type="text" class="form-control">
                            </div>
                        </div>
                    </div>


                </div>

                <div class="setting-groups">
                    <button v-on:click="showWordlists" v-bind:class="[ this.show_wordlists ? 'active' : '' ]"
                            class="btn btn-sm btn-secondary">Wordlists
                    </button>
                    <button v-on:click="showSettings" v-bind:class="[ this.show_wordlists ? '' : 'active' ]"
                            class="btn btn-sm btn-secondary">Settings
                    </button>
                </div>

                <div v-if="show_wordlists" class="setting-groups">
                    <WordlistList></WordlistList>
                </div>

                <div v-if="!show_wordlists" class="setting-groups">
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
                            <label class="label">Threads</label>

                            <div class="input-group">
                                <input v-model="threads" type="text" class="form-control mb-2">
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <label class="label">Mode</label>
                            <select v-model="mode" class="form-control mb-2">
                                <option value="hide">Hide entries</option>
                                <option value="show">Show entries</option>
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
                            <td>-t N</td>
                            <td>Specify the number of concurrent connections (10 default)</td>
                        </tr>
                        <tr>
                            <td>-X method</td>
                            <td>Specify an HTTP method for the request, ie. HEAD or FUZZ</td>
                        </tr>
                        <tr>
                            <td>-b cookie</td>
                            <td>Specify a cookie for the requests</td>
                        </tr>
                        <tr>
                            <td>-d postdata</td>
                            <td>Use post data (ex: "id=FUZZ&amp;c...")</td>
                        </tr>
                        <tr>
                            <td>-H header</td>
                            <td>Use header (ex:"Cookie:user=FUZZ")</td>
                        </tr>
                        <tr>
                            <td>--basic/ntlm/digest auth</td>
                            <td>In format "user:pass" or "FUZZ:FUZZ" or "domain\FUZ2Z:FUZZ"</td>
                        </tr>
                        <tr>
                            <td>--hc/hl/hw/hh N[,N]+</td>
                            <td>Hide responses with the specified code/lines/words/chars (Use BBB for taking
                                values from baseline)
                            </td>
                        </tr>
                        <tr>
                            <td>--sc/sl/sw/sh N[,N]+</td>
                            <td>Show responses with the specified code/lines/words/chars (Use BBB for taking
                                values from baseline)
                            </td>
                        </tr>
                        <tr>
                            <td>--ss/hs regex</td>
                            <td>Show/Hide responses with the specified regex within the content</td>
                        </tr>

                        <tr>
                            <td>--f FILE</td>
                            <td>File to log results to</td>
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
                            <CommandsWfuzz
                                    :threads="threads"
                                    :method="method"
                                    :urltoscan="urltoscan"
                                    :chars="char_count"
                                    :words="word_count"
                                    :lines="line_count"
                                    :statuses="statuses"
                                    :mode="mode">
                            </CommandsWfuzz>
                        </tr>
                        <tr>
                            <td v-on:click.prevent.stop="copy($event)">
                                cat {{ this.$store.state.config.wfuzzLogFile }}
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

    import WordlistList from "../wordlists/WordlistList.vue";
    import CommandsWfuzz from '../commands/Wfuzz.vue';

    export default {
        name: "ContentDirsearch",
        props: ['id'],
        components: {
            WordlistList,
            CommandsWfuzz
        },
        data: function () {
            return {
                urltoscan: '',
                threads: 10,
                statuses: '501,502,503',
                char_count: '',
                line_count: '',
                word_count: '',
                show_help: false,
                show_wordlists: true,
                method: 'GET',
                mode: 'hide'
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
            copy: function (event) {
                this.copyContentToClipboard(event.srcElement.innerText);
            },
            showHelp: function () {
                this.show_help = true;
            },
            showCommands: function () {
                this.show_help = false;
            },
            showWordlists: function () {
                this.show_wordlists = true;
            },
            showSettings: function () {
                this.show_wordlists = false;
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