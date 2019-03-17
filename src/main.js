//require('../node_modules/bootstrap/js/src/util');
//require('../node_modules/bootstrap/js/src/index');
//require('../node_modules/bootstrap/js/src/button');
//require('../node_modules/bootstrap/js/src/collapse');
//require('../node_modules/bootstrap/js/src/tab');
require('../node_modules/bootstrap/js/src/dropdown');

import {config} from './config';

import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

Vue.use(Vuex);


const store = new Vuex.Store({

    state: {
        config,
        base: {
            url: '',
            path: '',
        },
        wordlist: {
            files: '',
            usernames: '',
            passwords: '',
        },
        dirsearch: {
            extensions: '',
        },
        hydra: '',
        tab: 'settings'
    }
});

Vue.mixin({
    methods: {
        copyContentToClipboard: function (value) {
            var textArea = document.createElement("textarea");
            textArea.value = value.replace(/(\r\n|\n|\r)/gm, "").replace(/\s\s+/g, ' ');
            //textArea.style.display = 'none';
            document.body.appendChild(textArea);
            //textArea.focus();
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            console.log("Copied: " + value)
        }
    }
});

new Vue({
    el: '#app',
    store: store,
    render: h => h(App),
});