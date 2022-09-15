// import rootDom from "@/utils/rootDom.js";
import Style from "@/styles/index.module.less";
import Vue from "vue";
import Icon from "@/components/Icon.vue";


function rootDom(dom, prop) {
    let vm = new Vue({
        render(h) {
            return h(dom, {
                props: {
                    iconType: prop
                }
            });
        }
    })
    vm.$mount();
    console.log(vm);
    return vm.$el;
}



/**
 * 
 * @param {htmlElement} dom   根结点
 * @param {String} text 文本
 * @param {Number} duration 
 * @param {Function} callBack
 */
/**
 * 1，参数进行设置
 *      1，需要进行居中得容器，
 *      2，文本
 *      3，2中可能 传入容器在容器居中，没有容器在页面居中
 * 
 */
Vue.prototype.$showMessage = function (container = null, text = "请输入", duration = ".5s", callBack) {
    //创建dom并进行插入
    let dom = document.createElement("div");
    var a = rootDom(Icon, "empty");
    console.log(a.outerHTML);

    dom.innerHTML = `${a.outerHTML}   <span>${text}</span>`;
    dom.className = Style.container;
    dom.style.position = "fixed";


    //首先判断是否有cotnainer 属性
    if (container == null) {
        dom.style.position = "fixed";
        document.body.appendChild(dom);
    } else {
        container.appendChild(dom);
        if (getComputedStyle(dom).position == "static") {
            container.style.position = "relative";
            dom.style.position = "absolute";
        } else {
            dom.style.position = "absolute";
        }
    }
    //
    dom.clientHeight;
    dom.style.transform = "translateY(-50%)";
    dom.style.opacity = "1";

    setTimeout(async function demo() {
        dom.style.opacity = "0";
        dom.style.transform = "translateY(-100%)";
        setTimeout(() => {
            dom.remove();
        }, 1000)
    }, 2000)
}