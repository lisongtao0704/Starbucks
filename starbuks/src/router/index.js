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
    component: () => import('../views/account/account.vue'),
    redirect: '/account/login',
    children: [{
        path: 'login',
        component: () => import('../views/account/login.vue')
      },
      {
        path: 'register',
        component: () => import('../views/account/register.vue')
      },
      {
        path: 'starbucks-rewards',
        component: () => import('../views/account/starbucks-rewards.vue')
      }
    ]
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/menu/menu.vue')
  },
  {
    path: '/menu/food',
    component: () => import('../views/menu/food.vue')
  },
  {
    path: '/menu/beverages',
    component: () => import('../views/menu/beverages.vue')
  },
  {
    path: '/menu/coffee',
    component: () => import('../views/menu/coffee.vue')
  },
  {
    path: '/menu/search',
    component: () => import('../views/menu/search.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/menu/shoplist',
    component: () => import('../views/menu/shoplist.vue')
  },
  {
    path: '/menu/merchandise',
    component: () => import('../views/menu/merchandise.vue'),
  },
  {
    path: '/menu/goodinfo/:id',
    component: () => import('../views/menu/goodinfo.vue')
  },
  {
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
    redirect: '/more/asXbk/inchina',
    component: () => import('../views/more/moreChild/asXbk.vue'),
    children: [{
        path: 'duty',
        name: 'Duty',
        component: () => import('../views/more/moreChild/asXbk/duty.vue')
      }, {
        path: 'history',
        name: 'History',
        component: () => import('../views/more/moreChild/asXbk/history.vue')
      },
      {
        path: 'inchina',
        name: 'Inchina',
        component: () => import('../views/more/moreChild/asXbk/inchina.vue')
      },
      {
        path: 'news',
        name: 'News',
        component: () => import('../views/more/moreChild/asXbk/news.vue'),
      },
      {
        path: 'we',
        name: 'We',
        component: () => import('../views/more/moreChild/asXbk/we.vue')
      },
      {
        path: 'work',
        name: 'Work',
        component: () => import('../views/more/moreChild/asXbk/work.vue')
      },
    ]
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
        redirect: '/more/xbkMobileApp/app/1',
        component: () => import('../views/more/moreChild/xbkmobileApp/mobileApp.vue'),
        children: [{
            path: '1',
            name: 'club',
            component: () => import('../views/more/moreChild/xbkmobileApp/xbk/club.vue')
          }, {
            path: '2',
            name: 'card',
            component: () => import('../views/more/moreChild/xbkmobileApp/xbk/card.vue')
          },
          {
            path: '3',
            name: 'shop',
            component: () => import('../views/more/moreChild/xbkmobileApp/xbk/shop.vue')
          },
          {
            path: '4',
            name: 'info',
            component: () => import('../views/more/moreChild/xbkmobileApp/xbk/info.vue')
          }
        ]
      },
      {
        path: 'apple',
        name: 'apple',
        component: () => import('../views/more/moreChild/xbkmobileApp/apple.vue')
      }
    ]
  },
  {
    path: '/more/asXbk/news/:id?',
    name: 'Newslist',
    component: () => import('../views/more/moreChild/asXbk/newsChild/index.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
