<template>
    <td v-if="hasPasslist && hasTarget && hasLogin" v-on:click.prevent.stop="copy($event)">
        {{ this.$store.state.config.bins.hydra }}
        <span v-if="user_mode">-l {{username}}</span>
        <span v-else>-L {{ this.$store.state.wordlist.usernames }}</span>
        -P {{ this.$store.state.wordlist.passwords }}
        -e nsr
        -t {{ threads }}
        -u
        -f
        -I
        <span v-if="port != ''">-s {{ port }}</span>
        -vV
        {{ target }}
        {{ this.$store.state.hydra }}
        <span v-if="httpService">{{ path }}</span>


    </td>
</template>

<script>

    export default {
        name: "Hydra",
        props: ['target', 'path', 'port', 'threads', 'username', 'user_mode'],
        computed: {
            hasTarget: function () {
                return this.target != "";
            },
            hasPasslist: function () {
                return this.$store.state.wordlist.passwords != "";
            },
            httpService: function () {
                return (this.$store.state.hydra == "http" || this.$store.state.hydra == "https") && this.path != "";
            },
            hasLogin: function () {
                if (this.user_mode && this.username != "") {
                    return true;
                }

                if (!this.user_mode && this.$store.state.wordlist.usernames != "") {
                    return true;
                }

                return false;
            }
        },
        methods: {
            copy: function (event) {
                this.copyContentToClipboard(event.srcElement.innerText);
            }
        }
    }
</script>
