import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Guard from '@/views/Guard.vue'
import PlaceSequences from '@/views/PlaceSequences.vue'
import MyPlacements from '@/views/MyPlacements.vue'
import store from '@/store'

Vue.use(VueRouter)

function guardCheck (to, from, next) {
  if (store.state.loginStatus.loggedIn) {
    next()
  } else {
    next('/guard')
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
    path: '/guard',
    name: 'guard',
    component: Guard
  },

  {
    path: '/place',
    beforeEnter: guardCheck,
    name: 'place',
    component: PlaceSequences
  },

  {
    path: '/MyPlacements',
    beforeEnter: guardCheck,
    name: 'MyPlacements',
    component: MyPlacements
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
