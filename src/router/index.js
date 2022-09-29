import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../pages/DashBoard.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "DashBoard" */'../pages/DashBoard.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "AboutPage" */'../pages/AboutPage.vue')
    },
    {
      path: '*',
      name: 'notfound',
      component: () => import(/* webpackChunkName: "notFound" */ '../pages/NotFound.vue')
    }
  ]
})

const user = true
router.beforeEach((to, from, next) => {
  if (!user && to.name !== 'notfound') {
    next({ name: 'notfound' })
  } else {
    next()
  }
})
export default router
