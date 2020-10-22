import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/style.css'
import SlideVerify from 'vue-monoplasty-slide-verify'
Vue.use(ElementUI)
Vue.use(SlideVerify)

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
