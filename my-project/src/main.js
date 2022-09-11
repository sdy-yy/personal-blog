import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/styles/global.less"

//使用vue插件，然后对插件进行配置，然后添加到new Vue里面
App.use(router);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

