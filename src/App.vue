<template>
  <div class="app"
       :class="className">
    <Toolbar
      class="toolbar"
      :size="size" @tabClick="onTabClick"></Toolbar>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Toolbar from './Toolbar.vue'

  export default {
    name: 'App',
    components: {Toolbar},

    methods: {
      onTabClick() {
        this.$store.commit('viewActive', !this.$store.state.view_active)
      }
    },

    computed: {
      className() {
        console.log('this.$store.state.view_active', this.$store.state);
        return {
          active: true,
          sticky: this.sticky,
          [`sticky_${this.placement}`]: Boolean(this.placement),
          view_active: this.$store.state.view_active
        }
      },

      sticky() {
        return true
      },

      size() {
        return this.$store.state.size ? this.$store.state.size : 'm'
      },

      placement() {
        return this.$store.state.placement ? this.$store.state.placement : 'bottom-right'
      },
    }
  }
</script>

<style scoped>
  .app {
  }

  .toolbar {
    text-align: left;
    transition: width .3s ease;
    z-index: 1000000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .view {
    height: 0;
    overflow: hidden;
    background: white;
    transition: height .3s ease;
  }

  .view_active .view {
    height: 300px;
  }

  .active {
    width: 100%;
  }

  .sticky {
    position: fixed;
    margin: 0;
  }

  .sticky_bottom-right {
    right: 0;
    bottom: 0;
  }

  .sticky_bottom-left {
    left: 0;
    bottom: 0;
  }

  .sticky_top-left {
    left: 0;
    top: 0;
  }

  .sticky_top-right {
    left: 0;
    top: 0;
  }
</style>
