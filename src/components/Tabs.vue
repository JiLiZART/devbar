<template>
  <div class="tabs">
    <template v-for="tab in tabs">
      <template v-if="tab.is">
        <DtBlock
          @click="onTabClick(tab, $event)"
          v-bind:key="tab.is"
          :size="size"
          :active="isTabActive(tab)"
          :withRoute="!!tab.route"
          class="tab"
          ref="tabRef"
        >
          <component v-bind="tab" v-bind:is="tab.is"></component>
        </DtBlock>
      </template>
      <template v-else>
        <DtBlock
          @click="onTabClick(tab, $event)"
          v-bind="tab"
          v-bind:key="tab.title"
          :size="size"
          :active="isTabActive(tab)"
          :withRoute="!!tab.route"
          class="tab"
          ref="tabRef"></DtBlock>
      </template>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'Tabs',
    props: {
      tabs: {type: Array, 'default': () => ([])},
      size: String,
      viewState: String
    },
    components: {},

    methods: {
      onTabClick(tab) {
        this.$emit('tabClick', tab)
      },

      isTabActive(tab) {
        return this.$route.name === tab.route && !!this.viewState
      }
    }
  }
</script>

<style scoped>
  .tabs {
    display: flex;
    width: 100%;
    white-space: nowrap;
    /*overflow-y: hidden;*/
    overflow-x: auto;
    box-sizing: border-box;
  }
</style>
