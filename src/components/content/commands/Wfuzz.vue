<template>
    <td v-if="hasUrl && hasWordlist && hasFuzz" v-on:click.prevent.stop="copy($event)">
        {{ this.$store.state.config.bins.wfuzz }}
        -f {{ this.$store.state.config.dirsearchLogFile }}
        -u {{ urltoscan }}
        -w {{ this.$store.state.config.filesdirsWordlists }}{{ this.$store.state.wordlist.files }}

        <span v-if="statuses != '' && mode=='hide'">--hc {{ statuses }}</span>
        <span v-if="lines != '' && mode=='hide'">--hl {{ lines }}</span>
        <span v-if="chars != '' && mode=='hide'">--hh {{ chars }}</span>
        <span v-if="words != '' && mode=='hide'">--hw {{ words }}</span>

        <span v-if="statuses != '' && mode=='show'">--sc {{ statuses }}</span>
        <span v-if="lines != '' && mode=='show'">--sl {{ lines }}</span>
        <span v-if="chars != '' && mode=='show'">--sh {{ chars }}</span>
        <span v-if="words != '' && mode=='show'">--sw {{ words }}</span>

        -t {{ threads }}
        -X {{ method}}

    </td>
</template>

<script>

    export default {
        name: "Dirsearch",
        props: ['urltoscan', 'threads', 'method', 'statuses', 'chars', 'lines', 'words', 'mode'],
        computed: {
            hasUrl: function () {
                return this.urltoscan != "";
            },
            hasWordlist: function () {
                return this.$store.state.wordlist.files != "";
            },
            hasFuzz: function () {
                return this.urltoscan.includes('FUZZ');
            }
        },
        methods: {
            copy: function (event) {
                this.copyContentToClipboard(event.srcElement.innerText);
            }
        }
    }
</script>
