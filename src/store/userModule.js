import router from '../router'

import firebase from 'firebase/app'
import 'firebase/auth'

const userModule = {
  state: {
    isLoggedIn: false,
    user: null,
    error: false,
    errorMsg: ''
  },
  getters: {
    getIsLoggedIn: state => state.isLoggedIn,
    getUser: state => state.user,
    getError: state => ({ error: state.error, msg: state.errorMsg })
  },
  mutations: {
    logginIn: state => {
      state.isLoggedIn = true
      router.push('/')
    },
    logginOut: state => {
      state.isLoggedIn = false
      state.user = null
    },
    setUser: (state, payload) => { state.user = payload },
    setError: (state, payload) => {
      state.error = payload.error
      state.errorMsg = payload.errorMsg
    }
  },
  actions: {
    logIn: async ({ commit, dispatch }, payload) => {
      dispatch('settingError', {
        error: false,
        errorMsg: ''
      })
      try {
        if (payload.email && payload.password) {
          const user = await login(payload.email, payload.password)
          if (user) {
            commit('setUser', user)
            commit('logginIn')
            dispatch('fetchPosts')
          } else {
            dispatch('settingError', {
              error: true,
              errorMsg: 'Wrong Credentials'
            })
          }
        } else {
          commit('setUser', payload)
          commit('logginIn')
          dispatch('fetchPosts')
        }
      } catch (error) {
        console.log(error)
      }
    },
    logOut: context => context.commit('logginOut'),
    signUp: async ({ dispatch }, payload) => {
      dispatch('settingError', {
        error: false,
        errorMsg: ''
      })
      const newUser = await register(payload)
      newUser
        ? dispatch('logIn', newUser)
        : dispatch('settingError', {
          error: true,
          errorMsg: 'Error with registration'
        })
    },
    signUpWithGoogle: async ({ dispatch }) => {
      const newUser = await registerWithGoogle()
      newUser
        ? dispatch('logIn', newUser)
        : dispatch('settingError', {
          error: true,
          errorMsg: 'Error with Google Registration'
        })
    },
    settingError: ({ commit }, payload) => commit('setError', payload)
  }
}

const register = async data => {
  if (data.email && data.password && data.name) {
    try {
      const signUp = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      if (signUp.user) {
        try {
          await signUp.user.updateProfile({
            displayName: data.name,
            photoURL: process.env.VUE_APP_BASE_PHOTO
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

const login = async (email, password) => {
  try {
    const signIn = await firebase.auth().signInWithEmailAndPassword(email, password)
    return signIn.user ? signIn.user : null
  } catch (error) {

  }
}

const registerWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  provider.addScope('profile')
  provider.addScope('email')
  const signUp = await firebase.auth().signInWithPopup(provider)
  return signUp.user ? signUp.user : null
}

export default userModule
