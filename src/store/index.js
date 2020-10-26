import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var token = sessionStorage.getItem('token') || false

export default new Vuex.Store({
  state: {
    items:[],
    it:{},
    mapp:{},
    index:0,
		maplat:'40.11947',
		maplon:'116.25114',
		maptext:'当前位置',
    token: token
  },
  mutations: {
    
    setToken (state, token) {
      state.token = token
      localStorage.token = token // 同步存储token至localStorage
      console.log(token)
    }
  },
  getters: {
    // 获取token方法
    // 判断是否有token,如果没有重新赋值，返回给state的token
    getToken (state) {
      if (!state.token) {
        state.token = localStorage.getItem('token')
      }
      return state.token
    }
  },

 mutations: {
  index(state,i){
    state.index=i;
    console.log(state.index);
    
  },
  mapp(state,item){
    state.mapp=item;
    state.maplat=item.Latitude
    state.maplon=item.Longitude
    state.maptext=item.StoreName
  },
  items(state,it){
    state.items=it;
    console.log(state.items);
  },
     setToken(state, token) {
         state.token = token
         //sessionStorage.token = token //同步存储token至localStorage
         sessionStorage.setItem('token',token)
       },
   },
  getters : {
   //获取token方法
   //判断是否有token,如果没有重新赋值，返回给state的token
   // getToken(state) {
   //   if (!state.token) {
   //     state.token = sessionStorage.getItem('token')
   //   }
   //   return state.token
   //   }
   },
  actions: {
  },
  modules: {
  }
})
