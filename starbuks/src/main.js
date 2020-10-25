import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/style.css'
// import $ from 'jquery'
import SlideVerify from 'vue-monoplasty-slide-verify'

import axios from 'axios'
Vue.use(ElementUI)
Vue.use(SlideVerify)

//导入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
      router,
      store,
      render: h => {
        let root = h(App)
        console.log(h)
        return root}
      }).$mount('#app')

    // 配置路由权限
    import mui from './lib/mui/js/mui.min.js'
    router.beforeEach((to, from, next) => {
      if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        if (store.state.token) { // 判断本地是否存在access_token
          next()
        } else {
          mui.toast('请先登录')
          // 未登录,跳转到登陆页面，并且带上 将要去的地址，方便登陆后跳转。
          setTimeout(function () {
            next({
              path: '/account/login',
            })
          }, 2000)
        }
      } else {
        next()
      }
    })
