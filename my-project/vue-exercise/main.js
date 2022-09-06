import Vue from "./vue.browser.js";
import Module1 from './App.js';

new Vue({
    render(h) {
        return h(Module1);

    }
}).$mount("#app")