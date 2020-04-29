const state = {
  placementHistory: [],
  placementResultName: '',
  placementResultLink: '',
  myPlacementsLoaded: false
}

const getters = {
  getPlacementHistory: (state) => state.placementHistory
}

const actions = {}

const mutations = {
  updatePlacementHistory: (state, payload) => (state.placementHistory = payload),
  updatePlacementResultName: (state, payload) => (state.placementResultName = payload),
  updatePlacementResultLink: (state, payload) => (state.placementResultLink = payload),
  updateMyPlacementsLoaded: (state) => (state.myPlacementsLoaded = true)
}

export default {
  state,
  getters,
  actions,
  mutations
}
