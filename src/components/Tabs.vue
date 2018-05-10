<template>
  <div class="tabs">
    <template v-for="tab in tabs">
      <template v-if="tab.is">
        <dt-block
          @click="onTabClick"
          v-bind:key="tab.is"
          :size="size"
          class="tab"
          ref="tabRef"
        >
          <component v-bind="tab" v-bind:is="tab.is"></component>
        </dt-block>
      </template>
      <template v-else>
        <dt-block
          @click="onTabClick"
          v-bind="tab"
          v-bind:key="tab.title"
          :size="size"
          class="tab"
          ref="tabRef"></dt-block>
      </template>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'Tabs',
    props: {
      tabs: {type: Array, default: () => ([])},
      size: String
    },
    components: {},

    methods: {
      onTabClick(e) {
        this.$emit('tabClick', e)
      }
    }
  }
</script>

<style scoped>
  .tabs {
    display: flex;
    width: 100%;
    white-space: nowrap;
    overflow-y: hidden;
    overflow-x: auto;
    box-sizing: border-box;
  }
</style>
