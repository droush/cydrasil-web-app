const state = {
  drawerStatus: true,
  miniStatus: true
}

const getters = {
  getDrawerStatus: (state) => state.drawerStatus,
  getMiniStatus: (state) => state.miniStatus
}

const actions = {}

const mutations = {
  collapseDrawer: (state) => (state.miniStatus = !state.miniStatus)
}

export default {
  state,
  getters,
  actions,
  mutations
}
