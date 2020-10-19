import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:() => import('../views/Home.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component:() => import('../views/account/account.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component:() => import('../views/menu/menu.vue')
  },{
    path: '/more',
    name: 'More',
    component:() => import('../views/more/more.vue')
  },{
    path: '/stores',
    name: 'Stores',
    component:() => import('../views/stores/stores.vue')
  }
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
