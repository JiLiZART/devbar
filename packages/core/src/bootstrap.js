import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import { sync } from "vuex-router-sync";
import { createStore, extractState } from "./store";
import { createRouter } from "./router";
import { createComponents } from "./components";
import App from "./App.vue?shadow";
// import {MUTATION_SETTINGS_LOAD} from './constants/mutationNamesConstants'

const CUSTOM_ELEMENT_TAG = "yii-devtools";

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp(state = {}) {
  // create store and router instances
  const store = createStore(extractState(state));
  const router = createRouter();

  // prime the store with server-initialized state.
  // the state is determined during SSR and inlined in the page markup.
  if (state) {
    // store.commit(MUTATION_SETTINGS_LOAD, extractState(state))
    // store.replaceState(extractState(state))
  }

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router);

  createComponents();

  Vue.config.devtools = true;
  Vue.config.productionTip = false;

  App.router = router;
  App.store = store;

  const WrapApp = wrap(Vue, App);

  window.customElements.define(CUSTOM_ELEMENT_TAG, WrapApp);

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  // const app = new Vue({
  //   router,
  //   store,
  //   render: h => h(App)
  // })

  const app = document.createElement(CUSTOM_ELEMENT_TAG);

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store };
}
