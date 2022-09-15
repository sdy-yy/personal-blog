import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from './store'
import "@/utils/showMessage.js";
import "@/styles/global.less"

import Pager from "@/components/Pager.vue";


function test() {
  return "请输入";
}


async function test2() {
  const result = await test();
  console.log(result);
}
test2();

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

