import { Auth } from 'aws-amplify'

const state = {
  authenticatedUser: null,
  loggedIn: false
}

const getters = {
  getUserName: (state) => state.authenticatedUser,
  getLoggedInStatus: (state) => state.loggedIn
}

const actions = {
  async findUserName ({ commit }) {
    try {
      commit('saveUserName', await Auth.currentAuthenticatedUser())
      commit('logInState', true)
      console.log(state.authenticatedUser.username)
      console.log(state.loggedIn)
    } catch (err) {
      commit('saveUserName', null)
      commit('logInState', false)
      console.log('Oh no')
      console.log(state.loggedIn)
    }
  }
}

const mutations = {
  saveUserName: (state, payload) => (state.authenticatedUser = payload),
  logInState: (state, payload) => (state.loggedIn = payload)
}

export default {
  state,
  getters,
  actions,
  mutations
}
