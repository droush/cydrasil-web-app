import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import PlaceSequences from '@/views/PlaceSequences.vue'
import MyPlacements from '@/views/MyPlacements.vue'
import Results from '@/views/Results.vue'
import ProcessingPlacements from '@/views/ProcessingPlacements.vue'
import DatabaseDetails from '@/views/Database.vue'
import GettingStarted from '@/views/GettingStarted.vue'
import Help from '@/views/Help.vue'
import About from '@/views/AboutAndContact.vue'
import HowToAnalyze from '@/views/HowToAnalyze.vue'
import ErrorView from '@/views/ErrorView.vue'
import Terms from '@/views/Terms.vue'
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
    path: '/HowToAnalyze',
    name: 'HowToAnalyze',
    component: HowToAnalyze
  },
  {
    path: '/Error',
    name: 'ErrorView',
    component: ErrorView
  },
  {
    path: '/Processing',
    beforeEnter: guardCheck,
    name: 'Processing',
    component: ProcessingPlacements
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
