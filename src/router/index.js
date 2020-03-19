import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/index.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/login/index.vue'),
    meta: {
      layout: 'auth'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../pages/register/index.vue'),
    meta: {
      layout: 'auth'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
