<script>
import { mapGetters } from "vuex";
import {
  VIEW_STATE_ACTIVE,
  VIEW_STATE_FULL,
  VIEW_STATE_NONE,
} from "./constants/viewStateConstants";
import {
  MUTATION_BAR_ACTIVE,
  MUTATION_VIEW_STATE,
} from "./constants/mutationNamesConstants";
import Devtools from "./components/Devtools.vue";
import TabBar from "./containers/TabBar.vue";
import TabContent from "./containers/TabContent.vue";
import { createApp } from "./bootstrap";

const { router, store } = createApp(window["__DEVBAR__"]);

export default {
  name: "App",
  router,
  store,
  components: {
    Devtools,
    TabBar,
    TabContent,
  },

  mounted() {
    console.log("mounted", this.$route);
    const fontUrls = [
      "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900",
      "https://fonts.googleapis.com/css?family=Material+Icons",
    ];
    for (const url of fontUrls) {
      const linkNode = document.createElement("link");
      linkNode.type = "text/css";
      linkNode.rel = "stylesheet";
      linkNode.href = url;
      document.head.appendChild(linkNode);
    }
  },

  data: () => ({}),

  methods: {
    onTabClick(tab) {
      console.log("tab click", tab);
      if (tab.route && !this.viewStateFull) {
        this.$store.commit(MUTATION_VIEW_STATE, VIEW_STATE_ACTIVE);
      }
    },
    onCloseClick() {
      this.$store.commit(MUTATION_VIEW_STATE, VIEW_STATE_NONE);
    },
    onFullClick() {
      this.$store.commit(MUTATION_VIEW_STATE, VIEW_STATE_FULL);
    },
    onFullExitClick() {
      this.$store.commit(MUTATION_VIEW_STATE, VIEW_STATE_ACTIVE);
    },
    onTogglerClick() {
      this.$store.commit(MUTATION_BAR_ACTIVE, !this.barActive);
    },
  },

  computed: {
    pageTitle() {
      return (this.$route.meta && this.$route.meta.title) || "";
    },

    ...mapGetters([
      "barActive",
      "tabs",
      "logo",
      "viewState",
      "viewStateActive",
      "viewStateFull",
      "placement",
      "size",
      "sticky",
    ]),
  },
};
</script>

<template>
  <Devtools
    :size="size"
    :sticky="sticky"
    :placement="placement"
    :viewState="viewState"
    :barActive="barActive"
  >
    <template v-slot:bar>
      <TabBar
        :logo="logo"
        :size="size"
        :tabs="tabs"
        :viewState="viewState"
        :barActive="barActive"
        :closeVisible="viewStateActive"
        :fullExitVisible="viewStateFull"
        @tabClick="onTabClick"
        @closeClick="onCloseClick"
        @fullClick="onFullClick"
        @fullExitClick="onFullExitClick"
        @togglerClick="onTogglerClick"
      />
    </template>
    <template v-slot:content>
      <TabContent :title="pageTitle" v-if="!!viewState" />
    </template>
  </Devtools>
</template>

<style lang="css">
/*@import "~muse-ui/lib/styles/base.less";*/
/*@import "~muse-ui/lib/styles/theme.less";*/
/*@import "~material-design-icons-iconfont/dist/material-design-icons.css";*/
/*@import "~muse-ui/dist/muse-ui.css";*/
@import "~vuetify/dist/vuetify.min.css";
@import "~material-design-icons-iconfont/dist/material-design-icons.css";
</style>
