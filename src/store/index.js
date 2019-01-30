import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userInfo: ''
}
const getters = {}
const actions = {
  updateUserInfo ({commit}, data) {
    commit('updateUserInfo', data)
  }
}
const mutations = {
  'updateUserInfo': (state, data) => {
    state.userInfo = data
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
