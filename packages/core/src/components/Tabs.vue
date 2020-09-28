<script>
import DtBlock from "./Block";

export default {
  name: "Tabs",
  props: {
    tabs: { type: Array, default: () => [] },
    size: String,
    viewState: String,
  },
  components: {
    DtBlock,
  },

  methods: {
    onTabClick(tab) {
      this.$emit("tabClick", tab);
    },

    isTabActive(tab) {
      return this.$route.name === tab.route && !!this.viewState;
    },
  },
};
</script>

<template>
  <div class="tabs">
    <div class="aside-start">
      <template v-for="tab in tabs">
        <template v-if="tab.is">
          <DtBlock
            @click="onTabClick(tab, $event)"
            v-bind:key="tab.is"
            :size="size"
            :active="isTabActive(tab)"
            :clickable="!!tab.iframe || !!tab.route"
            ref="tabRef"
          ><component v-bind="tab" v-bind:is="tab.is"></component
          ></DtBlock>
        </template>
        <template v-else>
          <DtBlock
            @click="onTabClick(tab, $event)"
            v-bind="tab"
            v-bind:key="tab.title"
            :size="size"
            :active="isTabActive(tab)"
            :clickable="!!tab.iframe || !!tab.route"
            ref="tabRef"
          />
        </template>
      </template>
    </div>
    <div class="aside-end">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped>
.tabs {
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.aside-start,
.aside-end {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  /*overflow-y: hidden;*/
  box-sizing: border-box;
}

.tab {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}
</style>
