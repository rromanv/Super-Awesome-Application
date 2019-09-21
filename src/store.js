import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

import firebase from 'firebase/app'
import 'firebase/auth'

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
      router.push('/')
    },
    logginOut (state) {
      state.isLoggedIn = false
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    logIn (context, payload) {
      context.commit('setUser', payload)
      context.commit('logginIn')
    },
    logOut (context) {
      context.commit('logginOut')
    },
    async signUp (context, payload) {
      const newUser = await register(payload)
      context.dispatch('logIn', newUser)
    }
  }
})

const register = async data => {
  if (data.email && data.password && data.name) {
    try {
      const signUp = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      if (signUp.user) {
        try {
          await signUp.user.updateProfile({
            displayName: data.name,
            photoURL: `${router.options.base}user.png`
          })
          return signUp.user
        } catch (error) {
          console.log(error)
        }
      }
    } catch (error) {
      console.log(error)
    }
  } else {
    console.log('Cannot read object data')
  }
}
