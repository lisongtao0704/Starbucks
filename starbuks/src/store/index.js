import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var token = localStorage.getItem('token') || {}

export default new Vuex.Store({
  state: {
    token:token
  },
 mutations: {
     setToken(state, token) {
         state.token = token
         localStorage.token = token //同步存储token至localStorage
         console.log(token)
       },
   },
  getters : {
   //获取token方法
   //判断是否有token,如果没有重新赋值，返回给state的token
   getToken(state) {
     if (!state.token) {
       state.token = localStorage.getItem('token')
     }
     return state.token
     }
   },
  actions: {
  },
  modules: {
  }
})
