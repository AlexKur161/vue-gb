import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '../pages/DashBoard'
import AboutPage from '../pages/AboutPage.vue'
import NotFound from '../pages/NotFound'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/notfound',
      name: 'notfound',
      component: NotFound
    },
    {
      path: '*',
      redirect: {
        name: 'notfound',
        component: NotFound
      }
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
