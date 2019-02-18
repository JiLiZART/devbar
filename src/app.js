import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import {createStore, extractState} from './store'
import {createRouter} from './router'
import {createComponents} from './components'
import App from './App.vue'
import {MUTATION_SETTINGS_LOAD} from './constants/mutationNamesConstants'

Vue.config.productionTip = false

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp(state = {}) {
  // create store and router instances
  const store = createStore(extractState(state))
  const router = createRouter()

  // prime the store with server-initialized state.
  // the state is determined during SSR and inlined in the page markup.
  if (state) {
    // store.commit(MUTATION_SETTINGS_LOAD, extractState(state))
    // store.replaceState(extractState(state))
  }

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  createComponents()

  Vue.config.productionTip = false

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return {app, router, store}
}
