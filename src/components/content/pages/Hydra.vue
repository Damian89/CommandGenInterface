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

                    <label class="label mt-2">Target</label>

                    <div class="input-group">
                        <input v-model="target" type="text" class="form-control">
                    </div>

                    <div class="row">
                        <div class="col-xl-9">
                            <label class="label mt-2">Path</label>

                            <div class="input-group">
                                <input v-model="path" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-xl-3">
                            <label class="label mt-2">Port</label>

                            <div class="input-group">
                                <input v-model="port" type="text" class="form-control">
                            </div>
                        </div>
                    </div>


                    <label class="label mt-2">Username</label>

                    <div class="input-group">
                        <input v-model="username" type="text" class="form-control">
                    </div>


                </div>

                <div class="setting-groups">
                    <button v-if="!username_mode" v-on:click="showUserlist"
                            v-bind:class="[ this.show_userlist ? 'active' : '' ]"
                            class="btn btn-sm btn-secondary">Userlist
                    </button>
                    <button v-on:click="showPasslist" v-bind:class="[ this.show_passlist ? 'active' : '' ]"
                            class="btn btn-sm btn-secondary">Passlist
                    </button>
                    <button v-on:click="showSettings" v-bind:class="[ this.show_settings ? '' : 'active' ]"
                            class="btn btn-sm btn-secondary">Settings
                    </button>
                    <button v-on:click="showServices" v-bind:class="[ this.show_services ? '' : 'active' ]"
                            class="btn btn-sm btn-secondary">Service
                    </button>
                </div>

                <div v-if="show_userlist && !username_mode" class="setting-groups">
                    <UserWordlistList></UserWordlistList>
                </div>

                <div v-if="show_passlist" class="setting-groups">
                    <PassWordlistList></PassWordlistList>
                </div>

                <div v-if="show_services" class="setting-groups">
                    <HydraModeList></HydraModeList>
                </div>

                <div v-if="show_settings" class="setting-groups">
                    <div class="row">
                        <div class="col-xl-6">
                            <label class="label">Threads</label>

                            <div class="input-group">
                                <input v-model="threads" type="text" class="form-control mb-2">
                            </div>
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
                            <td>-l LOGIN or -L FILE</td>
                            <td>login with LOGIN name, or load several logins from FILE</td>
                        </tr>
                        <tr>
                            <td>-p PASS or -P FILE</td>
                            <td>try password PASS, or load several passwords from FILE</td>
                        </tr>

                        <tr>
                            <td>-M FILE</td>
                            <td>list of servers to attack, one entry per line, ':' to specify port</td>
                        </tr>

                        <tr>
                            <td>-C FILE</td>
                            <td>colon separated "login:pass" format, instead of -L/-P options</td>
                        </tr>

                        <tr>
                            <td>-t TASKS</td>
                            <td>run TASKS number of connects in parallel per target (default: 16)</td>
                        </tr>

                        <tr>
                            <td>-I</td>
                            <td>ignore an existing restore file (don't wait 10 seconds)</td>
                        </tr>

                        <tr>
                            <td>-x MIN:MAX:CHARSET</td>
                            <td>password bruteforce generation, type "-x -h" to get help</td>
                        </tr>

                        <tr>
                            <td>-f / -F</td>
                            <td>exit when a login/pass pair is found (-M: -f per host, -F global)</td>
                        </tr>

                        <tr>
                            <td>-v / -V / -d</td>
                            <td>verbose mode / show login+pass for each attempt / debug mode</td>
                        </tr>

                        <tr>
                            <td>-U</td>
                            <td>service module usage details</td>
                        </tr>

                        </tbody>
                    </table>
                </div>

                <div class="setting-groups examples">
                    <label class="label">Examples</label>

                    <code class="mb-4">hydra [[[-l LOGIN|-L FILE] [-p PASS|-P FILE]] | [-C FILE]] [-e nsr] [-o FILE] [-t
                        TASKS] [-M FILE [-T TASKS]] [-w TIME] [-W TIME] [-f] [-s PORT] [-x MIN:MAX:CHARSET] [-c
                        TIME] [-ISOuvVd46] [service://server[:PORT][/OPT]]</code>

                    <label class="label">Services</label>

                    <code class="mb-4">adam6500 asterisk cisco cisco-enable cvs firebird ftp ftps
                        http[s]-{head|get|post}
                        http[s]-{get|post}-form http-proxy http-proxy-urlenum icq imap[s] irc ldap2[s]
                        ldap3[-{cram|digest}md5][s] mssql mysql nntp oracle-listener oracle-sid pcanywhere pcnfs
                        pop3[s] postgres radmin2 rdp redis rexec rlogin rpcap rsh rtsp s7-300 sip smb smtp[s]
                        smtp-enum snmp socks5 ssh sshkey svn teamspeak telnet[s] vmauthd vnc xmpp</code>
                </div>
            </div>

            <div v-if="!show_help" class="col-xl-9">
                <div class="setting-groups">
                    <label class="label">Commands ready to use</label>

                    <table class="table table-striped table-dark">
                        <tbody>
                        <tr>
                            <CommandsHydra
                            :target="target"
                            :path="path"
                            :port="port"
                            :threads="threads"
                            :username="username"
                            :user_mode="username_mode"></CommandsHydra>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import UserWordlistList from "../userlists/UserWordlistList.vue";
    import PassWordlistList from "../passwordlists/PassWordlistList.vue";
    import HydraModeList from "../hydra/HydraList.vue";
    import CommandsHydra from "../commands/Hydra.vue";

    export default {
        name: "ContentHydra",
        props: ['id'],
        components: {
            UserWordlistList,
            PassWordlistList,
            HydraModeList,
            CommandsHydra,
        },
        data: function () {
            return {
                target: '',
                path: '',
                port: '',
                threads: 10,
                username: '',
                show_help: false,
                show_userlist: true,
                show_passlist: false,
                show_settings: false,
                show_services: false,
                username_mode: false,
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
                this.stripHttpRelatedChars();

            },
            username: function (val) {
                if (val == "") {
                    this.username_mode = false;
                } else {
                    this.username_mode = true;
                }
            }
        },
        methods: {
            stripHttpRelatedChars: function () {
                const url = document.createElement('a');
                url.setAttribute('href', this.$store.state.base.url);

                this.target = url.hostname;
                this.path = url.pathname;
                this.port = url.port;

            },
            showHelp: function () {
                this.show_help = true;
            },
            showCommands: function () {
                this.show_help = false;
            },
            showSettings: function () {
                this.show_services = false;
                this.show_settings = true;
                this.show_userlist = false;
                this.show_passlist = false;
            },
            showServices: function () {
                this.show_services = true;
                this.show_settings = false;
                this.show_userlist = false;
                this.show_passlist = false;
            },
            showUserlist: function () {
                this.show_services = false;
                this.show_settings = false;
                this.show_userlist = true;
                this.show_passlist = false;
            },
            showPasslist: function () {
                this.show_services = false;
                this.show_settings = false;
                this.show_userlist = false;
                this.show_passlist = true;
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

    .examples {
        code {
            display: block;
        }
    }
</style>