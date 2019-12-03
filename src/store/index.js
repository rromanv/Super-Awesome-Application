import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './userModule'
import postModule from './postModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userModule,
    postModule
  }
})
