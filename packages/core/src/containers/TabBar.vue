<template>
  <div class="tab-bar" :class="classNames">
    <TabBarToggler :logo="logo" @togglerClick="$emit('togglerClick', $event)" />
    <Tabs
      :tabs="tabsBlocks"
      :size="size"
      :viewState="viewState"
      @tabClick="onTabClick"
    >
      <template slot="right">
        <SettingsBar
          :closeVisible="closeVisible"
          :fullExitVisible="fullExitVisible"
          @fullClick="$emit('fullClick', $event)"
          @fullExitClick="$emit('fullExitClick', $event)"
          @closeClick="$emit('closeClick', $event)"
        />
      </template>
    </Tabs>
  </div>
</template>

<script>
import Tabs from "../components/Tabs";
import TabBarToggler from "../components/TabBarToggler";
import SettingsBar from "../components/SettingsBar";
import { VIEW_STATE_FULL } from "../constants/viewStateConstants";
import { MUTATION_VIEW_STATE } from "../constants/mutationNamesConstants";
import { toVueComponent } from "../helpers/componentHelper";
import { ROUTE_NAME_SETTINGS } from "../constants/routeNamesConstants";

export default {
  name: "Toolbar",
  props: {
    size: String,
    logo: String,
    viewState: String,
    closeVisible: Boolean,
    fullExitVisible: Boolean,
    barActive: Boolean,
    tabs: { type: Array, default: () => [] },
  },
  components: {
    Tabs,
    SettingsBar,
    TabBarToggler,
  },

  methods: {
    onTabClick(tab) {
      if (tab.route) {
        this.$router.replace({ name: tab.route });
      }

      this.$emit("tabClick", tab);
    },

    onSettingsClick() {
      this.$store.commit(MUTATION_VIEW_STATE, VIEW_STATE_FULL);
      this.$router.replace({ name: ROUTE_NAME_SETTINGS });
    },
  },

  computed: {
    classNames() {
      return {
        ["bar_active"]: this.barActive,
        [`size_${this.size}`]: Boolean(this.size),
      };
    },

    tabsBlocks() {
      console.log("tabBlocks", this.tabs);
      return this.tabs.map((block) =>
        block.template ? toVueComponent(block) : block
      );
    },
  },
};
</script>

<style scoped>
.tab-bar {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.11);
}

/*.bar {*/
/*  position: relative;*/
/*  display: flex;*/
/*  padding: 0;*/
/*  !*font: 11px Verdana, Arial, sans-serif;*!*/
/*  text-align: left;*/
/*  box-sizing: content-box;*/
/*  border: 1px solid rgba(0, 0, 0, 0.11);*/
/*  !*background: rgb(247, 247, 247);*!*/
/*  !*background: linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(247, 247, 247) 100%); !* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ *!*!*/

/*  !* ensure debug toolbar text is displayed ltr even on rtl pages *!*/
/*  direction: ltr;*/
/*  z-index: 1000000;*/
/*}*/

/*.blocks {*/
/*  min-height: 32px;*/
/*  display: flex;*/
/*}*/

/*.toggler {*/
/*  position: relative;*/
/*  display: inline-flex;*/
/*  align-items: center;*/
/*  justify-content: center;*/
/*  transform: translateX(-100%);*/
/*  !*background: rgb(247, 247, 247);*!*/
/*  box-sizing: content-box;*/
/*  border: 1px solid rgba(0, 0, 0, 0.11);*/
/*  border-left-color: rgba(0, 0, 0, 0.2);*/
/*  border-left-width: 2px;*/
/*}*/

/*.toggler:hover {*/
/*  background: rgba(240, 240, 240, 0.64);*/
/*}*/

/*.bar_active .toggler {*/
/*  transform: translateX(0);*/
/*  border: none;*/
/*}*/
</style>
