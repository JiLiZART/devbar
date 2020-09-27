import Vue from "vue";
import {
  MUTATION_BAR_ACTIVE,
  MUTATION_VIEW_STATE,
  MUTATION_SETTINGS_LOAD,
  MUTATION_IFRAME_URL,
} from "../constants/mutationNamesConstants";

export default {
  [MUTATION_VIEW_STATE](state, val) {
    Vue.set(state.settings, "viewState", val);
  },
  [MUTATION_BAR_ACTIVE](state, val) {
    Vue.set(state.settings, "barActive", val);
  },
  [MUTATION_IFRAME_URL](state, url) {
    Vue.set(state, "iframeUrl", url);
  },
  [MUTATION_SETTINGS_LOAD](state, values) {
    if (values) {
      Vue.set(state, "settings", values.settings);
      Vue.set(state, "tabs", values.tabs);
      Vue.set(state, "logo", values.logo);
      Vue.set(state, "title", values.title);
    }
  },
};
