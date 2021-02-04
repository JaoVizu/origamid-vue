import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: 'Lobo',
    aulasCompletas: 10
  },
  mutations: {
    changeUser(state, payload) {
      state.user = payload.username
    },
    completarAula(state){
      state.aulasCompletas++
    }
  }
})