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

//导入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 配置路由权限
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (store.state.loginstatus ) { // 判断本地是否存在access_token
      next()
    } else {
		alert('请先登录')
      // 未登录,跳转到登陆页面，并且带上 将要去的地址，方便登陆后跳转。
      next({
        path: '/account/login',
      })
    }
  } else {
    next()
  }
})
