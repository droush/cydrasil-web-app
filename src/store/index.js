import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import drawerStatus from './modules/drawerStatus'
import loginStatus from './modules/loginStatus'
import placementInfo from './modules/placementInfo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    drawerStatus,
    loginStatus,
    placementInfo
  }
  // plugins: [createPersistedState({
  // })]
})
