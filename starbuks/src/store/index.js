import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var token = localStorage.getItem('token') || false
var userinfo = JSON.parse(sessionStorage.getItem('userInfo') || '[]')
export default new Vuex.Store({
  state: {
    token: token,
    userinfo: userinfo
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      // sessionStorage.token = token //同步存储token至localStorage
      localStorage.setItem('token', token)
    },
    gettToken (state, userinfo) {
      state.userinfo.push(userinfo)
      sessionStorage.setItem('userInfo', JSON.stringify(state.userinfo))
    }
  },
  actions: {
  },
  modules: {
  }
})
