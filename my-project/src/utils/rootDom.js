import Vue from "vue";


/***
 * dom  传入组件
 */
export default function rootDom(dom) {
    let vm = new Vue({
        render(h) {
            return h(dom);
        }
    })
    vm.$mount();
    return vm.$el;
}