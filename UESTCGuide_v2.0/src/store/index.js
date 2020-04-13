import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logStatus: true
  },
  mutations: {
    changeLogStatus (state, status) {
      state.logStatus = status
    }
  }
})
