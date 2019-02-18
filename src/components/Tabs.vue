<template>
  <div class="tabs">
    <div class="tabs__left">
      <template v-for="tab in tabs">
        <template v-if="tab.is">
          <DtBlock
            @click="onTabClick(tab, $event)"
            v-bind:key="tab.is"
            :size="size"
            :active="isTabActive(tab)"
            :withRoute="!!tab.route"
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
            ref="tabRef"/>
        </template>
      </template>
    </div>
    <div class="tabs__right">
      <slot name="right"></slot>
    </div>
    <!-- /.tabs__right -->
  </div>
</template>

<script>
  import DtBlock from './Block'

  export default {
    name: 'Tabs',
    props: {
      tabs: {type: Array, 'default': () => ([])},
      size: {type: String, 'default': 'm'},
      viewState: String
    },
    components: {
      DtBlock
    },

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
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .tabs__right,
  .tabs__left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    /*overflow-y: hidden;*/
    box-sizing: border-box;
  }

  .tabs__tab {
    display: flex;
    align-items: center;
    cursor: pointer;
    cursor: pointer;
    user-select: none;
  }
</style>
