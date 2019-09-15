import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Feed from './views/Feed.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import store from './store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'Feed',
          component: Feed
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.getIsLoggedIn) {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router
