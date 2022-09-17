import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from './store'
import "@/api/index.js";
import "@/utils/showMessage.js";
import "@/styles/global.less"

import "@/api/home.js";




new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

