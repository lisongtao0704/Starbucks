import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  name: 'Home',
  component: () => import('../views/Home.vue')
},
{
  path: '/account',
  name: 'Account',
  component: () => import('../views/account/account.vue')
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
},
{
  path: '/more/asXbk',
  name: 'asXbk',
  component: () => import('../views/more/moreChild/asXbk.vue')
},
{
  path: '/more/baking',
  name: 'baking',
  component: () => import('../views/more/moreChild/baking.vue')
},
{
  path: '/more/coffeeClassroom',
  name: 'coffeeClassroom',
  component: () => import('../views/more/moreChild/coffeeClassroom.vue')
},
{
  path: '/more/feikuai',
  name: 'feikuai',
  component: () => import('../views/more/moreChild/feikuai.vue')
},
{
  path: '/more/giftCards',
  name: 'giftCards',
  component: () => import('../views/more/moreChild/giftCards.vue')
},
{
  path: '/more/help',
  name: 'help',
  component: () => import('../views/more/moreChild/help.vue')
},
{
  path: '/more/privacy',
  name: 'privacy',
  component: () => import('../views/more/moreChild/privacy.vue')
},
{
  path: '/more/starSend',
  name: 'starSend',
  component: () => import('../views/more/moreChild/starSend.vue')
},
{
  path: '/more/useClause',
  name: 'useClause',
  component: () => import('../views/more/moreChild/useClause.vue')
},
{
  path: '/more/xbkChoose',
  name: 'xbkChoose',
  component: () => import('../views/more/moreChild/xbkChoose.vue')
},
{
  path: '/more/xbkMobileApp',
  name: 'xbkMobileApp',
  redirect: '/more/xbkMobileApp/app',
  component: () => import('../views/more/moreChild/xbkMobileApp.vue'),
  children: [{
    path: 'app',
    name: 'app',
    component: () => import('../views/more/moreChild/xbkmobileApp/mobileApp.vue')
  },
  {
    path: 'apple',
    name: 'apple',
    component: () => import('../views/more/moreChild/xbkmobileApp/apple.vue')
  }
  ]
}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
