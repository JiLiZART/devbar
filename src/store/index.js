import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import {VIEW_STATE_NONE} from '../constants/viewStateConstants'
import {PLACEMENT_BOTTOM_RIGHT} from '../constants/placementConstants'

Vue.use(Vuex)

const settingsStoragePlugin = store => {
  console.log('mut.before', store)
  // вызывается после инициализации хранилища
  store.subscribe((mutation, state) => {
    console.log('mut', mutation, state)
    // вызывается после каждой мутации
    // мутация передаётся в формате `{ type, payload }`.
  })
}

const settings = {
  barActive: false,
  placement: PLACEMENT_BOTTOM_RIGHT,
  viewState: VIEW_STATE_NONE
}

export function extractState(state) {
  return {
    logo: state.logo,
    title: state.title,
    tabs: state.tabs || [],
    settings: state.settings || settings
  }
}

export function createStore() {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    plugins: [
      createPersistedState({
        key: 'devtools_settings',
        paths: [
          'settings'
        ]
      }),
      settingsStoragePlugin
    ],
    state: {
      logo: null,
      title: 'Devtools.js',
      tabs: [],
      settings,
      route: null
    },
    actions,
    mutations,
    getters
  })
}
