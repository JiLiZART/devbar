<template>
  <div class="tabs">
    <template v-for="tab in tabs">
      <template v-if="tab.is">
        <dt-block :size="size" class="tab" ref="tabRef" v-bind:key="tab.is">
          <component v-bind="tab"></component>
        </dt-block>
      </template>
      <template v-else>
        <dt-block v-bind="tab" v-bind:key="tab.title" class="tab" ref="tabRef"></dt-block>
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
    components: {}
  }
</script>

<style scoped>
  .tabs {
    width: 100%;
    white-space: nowrap;
    overflow-y: hidden;
    overflow-x: auto;
    box-sizing: border-box;
  }

</style>
