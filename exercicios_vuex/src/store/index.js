import Vue from 'vue'
import Vuex from 'vuex'
import livros from './modules/livros'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    livros
  },
  state: {
    aulasCompletas: [],
  },
  mutations: {
    setAulasCompletas(state, payload){
      state.aulasCompletas.push(payload)
    } 
  },
  actions: {
    completarAula(context, payload) {
      context.commit('setAulasCompletas', payload)
    }
  },
})