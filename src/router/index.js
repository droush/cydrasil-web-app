import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Guard from '@/views/Guard.vue'
import PlaceSequences from '@/views/PlaceSequences.vue'
import MyPlacements from '@/views/MyPlacements.vue'
import Results from '@/views/Results.vue'
import ProcessingPlacements from '@/views/ProcessingPlacements.vue'
import DatabaseDetails from '@/views/Database.vue'
import GettingStarted from '@/views/GettingStarted.vue'
import Help from '@/views/Help.vue'
import About from '@/views/AboutAndContact.vue'
import store from '@/store'

Vue.use(VueRouter)

function guardCheck (to, from, next) {
  if (store.state.loginStatus.loggedIn) {
    next()
  } else {
    next('/login')
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
    path: '/results/:placementRun',
    beforeEnter: guardCheck,
    name: 'results',
    component: Results
  },
  {
    path: '/MyPlacements',
    beforeEnter: guardCheck,
    name: 'MyPlacements',
    component: MyPlacements
  },

  {
    path: '/database',
    name: 'DatabaseDetails',
    component: DatabaseDetails
  },
  {
    path: '/gettingstarted',
    name: 'GettingStarted',
    component: GettingStarted
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/Processing',
    beforeEnter: guardCheck,
    name: 'Processing',
    component: ProcessingPlacements
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
