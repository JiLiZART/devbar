import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import App from "./App.vue?shadow";

const CUSTOM_ELEMENT_TAG = "dev-bar";
const WrapApp = wrap(Vue, App);

window.customElements.define(CUSTOM_ELEMENT_TAG, WrapApp);
