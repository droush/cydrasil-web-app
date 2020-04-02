const state = {
  placementHistory: []
}

const getters = {
  getPlacementHistory: (state) => state.placementHistory
}

const actions = {}

const mutations = {
  updatePlacementHistory: (state, payload) => (state.placementHistory = payload)
}

export default {
  state,
  getters,
  actions,
  mutations
}
