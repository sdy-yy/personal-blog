import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


new Vue({
  data: {
    name: 'sdy'
  },
  store,
  render: h => h(App)
}).$mount('#app')
