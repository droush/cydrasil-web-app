const state = {
  placementHistory: [],
  placementResultName: '',
  placementResultLink: ''
}

const getters = {
  getPlacementHistory: (state) => state.placementHistory
}

const actions = {}

const mutations = {
  updatePlacementHistory: (state, payload) => (state.placementHistory = payload),
  updatePlacementResultName: (state, payload) => (state.placementResultName = payload),
  updatePlacementResultLink: (state, payload) => (state.placementResultLink = payload)
}

export default {
  state,
  getters,
  actions,
  mutations
}
