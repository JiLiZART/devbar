<template>
  <div class="app">
    <Toolbar :state="state"></Toolbar>
    <View :state="state"></View>
  </div>
</template>

<script>
  import Toolbar from './Toolbar.vue'
  import View from './View.vue'

  export default {
    name: 'App',
    props: {state: {type: Object}},
    components: {Toolbar, View}
  }
</script>

<style scoped>
  .app {}
</style>
