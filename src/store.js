import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    user: null
  },
  getters: {
    getIsLoggedIn (state) {
      return state.isLoggedIn
    },
    getUser (state) {
      return state.user
    }
  },
  mutations: {
    logginIn (state) {
      state.isLoggedIn = true
    },
    logginOut (state) {
      state.isLoggedIn = false
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    logIn (context) {
      context.commit('logginIn')
    },
    logOut (context) {
      context.commit('logginOut')
    },
    signUp (context) {
      context.commit('setUser', { id: 1, name: 'someUser' })
      context.dispatch('logIn')
    }
  }
})
