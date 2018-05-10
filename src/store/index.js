import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
      tabs: [],
      placement: 'bottom-right',
      view_active: false
    },
    actions,
    mutations,
    getters
  })
}
