import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import App from "./App.vue?shadow";

const CUSTOM_ELEMENT_TAG = "dev-bar";

const state = window["__DEVBAR__"];

if (state) {
  const WrapApp = wrap(Vue, App);

  const app = document.createElement(CUSTOM_ELEMENT_TAG);

  window.customElements.define(CUSTOM_ELEMENT_TAG, WrapApp);

  document.body.append(app);
} else {
  console.warn("[devbar] window.__DEVBAR__ not found, skip init");
}
