<script>
import { mapGetters, mapState } from "vuex";
import {
  VIEW_STATE_ACTIVE,
  VIEW_STATE_FULL,
  VIEW_STATE_NONE,
} from "./constants/viewStateConstants";
import {
  MUTATION_BAR_ACTIVE,
  MUTATION_IFRAME_URL,
  MUTATION_VIEW_STATE,
} from "./constants/mutationNamesConstants";
import { ROUTE_NAME_SETTINGS } from "./constants/routeConstants";
import Tabs from "./components/Tabs";
import DevBar from "./components/DevBar.vue";
import TabBar from "./components/TabBar.vue";
import TabContent from "./components/TabContent.vue";
import SettingsBar from "./components/SettingsBar";
import TabBarToggler from "./components/TabBarToggler";
import { createApp } from "./bootstrap";
import { extractState } from "./store";
import { appendCssUrl } from "./helpers/domHelper";
import { toVueComponent } from "./helpers/componentHelper";

const { router, store } = createApp(window["__DEVBAR__"]);

export default {
  name: "App",
  router,
  store,
  components: {
    DevBar,
    Tabs,
    TabBar,
    TabBarToggler,
    TabContent,
    SettingsBar,
  },
  props: {
    url: String,
    state: Object,
  },

  created() {
    if (this.url) {
      fetch(this.url)
        .then((res) => res.json())
        .then((data) => {
          store.replaceState(extractState(data));
          this.loaded = true;
        });
    } else if (this.state) {
      store.replaceState(extractState(this.state));
      this.loaded = true;
    }
  },

  mounted() {
    console.log("[devbar] mounted", this);
    const fontUrls = [
      "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900",
      "https://fonts.googleapis.com/css?family=Material+Icons",
    ];
    for (const url of fontUrls) {
      appendCssUrl(url);
    }
  },

  data() {
    return {
      loaded: false,
    };
  },

  methods: {
    onTabClick(tab) {
      if ((tab.route || tab.iframe) && !this.viewStateFull) {
        this.$store.commit(MUTATION_VIEW_STATE, VIEW_STATE_ACTIVE);
      }

      if (tab.route) {
        this.$router.replace({ name: tab.route });
      }

      if (tab.iframe) {
        this.$store.commit(MUTATION_IFRAME_URL, tab.iframe);
      }
    },
    onCloseClick() {
      this.$store.commit(MUTATION_IFRAME_URL, null);
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
    onSettingsClick() {
      this.$store.commit(MUTATION_VIEW_STATE, VIEW_STATE_FULL);
      this.$router.replace({ name: ROUTE_NAME_SETTINGS });
    },
  },

  computed: {
    ...mapState(["iframeUrl", "route"]),
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

    pageTitle() {
      return (this.$route.meta && this.$route.meta.title) || "";
    },

    tabsBlocks() {
      return this.tabs.map((block) => {
        return block.template ? toVueComponent(block) : block;
      });
    },

    iframeSafeUrl() {
      if (this.iframeUrl) {
        return this.iframeUrl;
      }

      return "about:blank";
    },
  },
};
</script>

<template>
  <DevBar
    v-if="loaded"
    :size="size"
    :sticky="sticky"
    :placement="placement"
    :viewState="viewState"
    :barActive="barActive"
  >
    <template v-slot:bar>
      <TabBar>
        <TabBarToggler
          :logo="logo"
          :size="size"
          :active="barActive"
          @togglerClick="onTogglerClick"
        />
        <Tabs
          :size="size"
          :route="route"
          :tabs="tabsBlocks"
          :iframeUrl="iframeUrl"
          :viewState="viewState"
          @tabClick="onTabClick"
        >
          <template v-slot:right>
            <SettingsBar
              :size="size"
              :closeVisible="viewStateActive"
              :fullExitVisible="viewStateFull"
              @settingsClick="onSettingsClick"
              @fullClick="onFullClick"
              @fullExitClick="onFullExitClick"
              @closeClick="onCloseClick"
            />
          </template>
        </Tabs>
      </TabBar>
    </template>
    <template v-slot:content>
      <TabContent :route="route" :iframeUrl="iframeUrl" v-if="!!viewState">
        <router-view v-if="route"></router-view>
        <iframe v-if="iframeUrl" :src="iframeSafeUrl" :title="title"></iframe>
      </TabContent>
    </template>
  </DevBar>
</template>

<style lang="css">
@import "~vuetify/dist/vuetify.min.css";
@import "~material-design-icons-iconfont/dist/material-design-icons.css";
</style>
