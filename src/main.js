import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'

require("./mock/mock.js");
//引入路由
import router from './router/router.js'
Vue.prototype.$=jQuery;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
