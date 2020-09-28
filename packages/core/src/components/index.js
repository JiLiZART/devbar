import Vue from "vue";

import DtLabel from "./Label.vue";
import DtBlock from "./Block.vue";
import DtText from "./Text.vue";
import DtIcon from "./Icon.vue";

import Vuetify, { VCard, VIcon } from "vuetify/lib";

export function createComponents() {
  Vue.component(DtIcon.name, DtIcon);
  Vue.component(DtLabel.name, DtLabel);
  Vue.component(DtBlock.name, DtBlock);
  Vue.component(DtText.name, DtText);
  Vue.use(Vuetify, {
    icons: {
      iconfont: "mdi",
    },
    components: {
      VCard,
      VIcon,
    },
  });
}
