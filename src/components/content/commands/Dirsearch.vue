<template>
    <td v-if="hasUrl && hasWordlist" v-on:click.prevent.stop="copy($event)">
        {{ this.$store.state.config.bins.dirsearch }}
        -u {{ urltoscan }}
        -w {{ this.$store.state.config.filesdirsWordlists }}{{ this.$store.state.wordlist.files }}
        -e {{ this.$store.state.dirsearch.extensions }}
        --exclude-status={{ skip_statuses }}
        --simple-report={{ this.$store.state.config.dirsearchLogFile }}
        --threads={{ threads }}
        <span v-if="rbh == 'true'">--request-by-hostname</span>
        <span v-if="rua == 'true'">--random-agents</span>
        --timeout={{ timeout}}
        --max-retries={{ max_retries }}
        --http-method={{ method}}
    </td>
</template>

<script>

    export default {
        name: "Dirsearch",
        props: ['urltoscan', 'threads', 'method', 'skip_statuses', 'rbh', 'rua', 'timeout', 'max_retries'],
        computed: {
            hasUrl: function () {
                return this.urltoscan != "";
            },
            hasWordlist: function () {
                return this.$store.state.wordlist.files != "";
            }
        },
        methods: {
            copy: function(event) {
                this.copyContentToClipboard(event.srcElement.innerText);
            }
        }
    }
</script>

<style lang="scss">
    td {
        cursor: pointer;
    }
</style>