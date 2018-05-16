import Vue from 'vue'

export default {
  viewState(state, val) {
    console.log('view state', state, val)
    Vue.set(state, 'viewState', val)
  },
  barActive(state, val) {
    Vue.set(state, 'barActive', val)
  }
}
