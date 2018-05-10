import Vue from 'vue'

import Label from './Label.vue'
import Block from './Block.vue'
import Text from './Text.vue'
import Icon from './Icon.vue'

export function createComponents() {
  Vue.component('dt-icon', Icon)
  Vue.component('dt-label', Label)
  Vue.component('dt-block', Block)
  Vue.component('dt-text', Text)
}
