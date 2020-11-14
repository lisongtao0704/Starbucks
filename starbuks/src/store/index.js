import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var token = localStorage.getItem('token') || false
var userinfo = JSON.parse(sessionStorage.getItem('userInfo') || '[]')
export default new Vuex.Store({
  state: {
    items: [],
    it: {},
    mapp: {},
    index: 0,
    maplat: '40.11947',
    maplon: '116.25114',
    maptext: '当前位置',
    token: token,
    userinfo: userinfo
  },
  mutations: {
    index(state, i) {
      state.index = i;

    },
    mapp(state, item) {
      state.mapp = item;
      state.maplat = item.Latitude
      state.maplon = item.Longitude
      state.maptext = item.StoreName
    },
    items(state, it) {
      state.items = it;
    },
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
