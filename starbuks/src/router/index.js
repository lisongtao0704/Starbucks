import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect:'/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component:() => import('../views/account/account.vue'),
    redirect:'/account/login',
    children:[
       { path: 'login',component:()=>import('../views/account/login.vue') },
       { path: 'register',component:()=>import('../views/account/register.vue') },
       { path: 'starbucks-rewards',component:()=>import('../views/account/starbucks-rewards.vue') },
    ],
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/menu/menu.vue')
  }, {
    path: '/more',
    name: 'More',
    component: () => import('../views/more/more.vue')
  }, {
    path: '/stores',
    name: 'Stores',
    component: () => import('../views/stores/stores.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
