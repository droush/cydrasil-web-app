import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import PlaceSequences from '@/views/PlaceSequences.vue'
import store from '@/store'

Vue.use(VueRouter)

function guard (to, from, next) {
  if (store.state.loginStatus.loggedIn) {
    next() // allow to enter route
  } else {
    next('/login') // go to '/login';
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/place',
    beforeEnter: guard,
    name: 'place',
    component: PlaceSequences
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
