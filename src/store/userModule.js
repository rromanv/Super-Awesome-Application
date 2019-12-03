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
    getIsLoggedIn (state) {
      return state.isLoggedIn
    },
    getUser (state) {
      return state.user
    },
    getError (state) {
      return { error: state.error, msg: state.errorMsg }
    }
  },
  mutations: {
    logginIn (state) {
      state.isLoggedIn = true
      router.push('/')
    },
    logginOut (state) {
      state.isLoggedIn = false
      state.user = null
    },
    setUser (state, payload) {
      state.user = payload
    },
    setError (state, payload) {
      state.error = payload.error
      state.errorMsg = payload.errorMsg
    }
  },
  actions: {
    async logIn (context, payload) {
      context.dispatch('settingError', {
        error: false,
        errorMsg: ''
      })
      try {
        if (payload.email && payload.password) {
          const user = await login(payload.email, payload.password)
          if (user) {
            context.commit('setUser', user)
            context.commit('logginIn')
            context.dispatch('fetchPosts')
          } else {
            context.dispatch('settingError', {
              error: true,
              errorMsg: 'Wrong Credentials'
            })
          }
        } else {
          context.commit('setUser', payload)
          context.commit('logginIn')
          context.dispatch('fetchPosts')
        }
      } catch (error) {
        console.log(error)
      }
    },
    logOut (context) {
      context.commit('logginOut')
    },
    async signUp (context, payload) {
      context.dispatch('settingError', {
        error: false,
        errorMsg: ''
      })
      const newUser = await register(payload)
      if (newUser) {
        context.dispatch('logIn', newUser)
      } else {
        context.dispatch('settingError', {
          error: true,
          errorMsg: 'Error with registration'
        })
      }
    },
    async signUpWithGoogle (context) {
      const newUser = await registerWithGoogle()
      if (newUser) {
        context.dispatch('logIn', newUser)
      } else {
        context.dispatch('settingError', {
          error: true,
          errorMsg: 'Error with Google Registration'
        })
      }
    },
    settingError (context, payload) {
      context.commit('setError', payload)
    }
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
            photoURL: `${process.env.VUE_APP_BASE_URL || '/'}user.png`
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
