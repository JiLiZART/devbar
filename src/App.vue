<template>
  <div class="devtools"
       :class="className">
    <Toolbar
      class="toolbar"
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
    ></Toolbar>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Toolbar from './Toolbar.vue'

  const VIEW_STATE_ACTIVE = 'active'
  const VIEW_STATE_FULL = 'fullscreen'

  export default {
    name: 'App',
    components: {Toolbar},

    methods: {
      onTabClick(e) {
        console.log('tab click', e);
        this.$store.commit('viewState', VIEW_STATE_ACTIVE)
      },
      onCloseClick() {
        this.$store.commit('viewState', '')
      },
      onFullClick() {
        this.$store.commit('viewState', VIEW_STATE_FULL)
      },
      onFullExitClick() {
        this.$store.commit('viewState', VIEW_STATE_ACTIVE)
      },
      onTogglerClick() {
        this.$store.commit('barActive', !this.barActive)
      },
    },

    computed: {
      className() {
        console.log('this.$store.state.view_active', this.$store.state)
        return {
          active: this.barActive,
          sticky: this.sticky,
          [`size_${this.size}`]: Boolean(this.size),
          [`sticky_${this.placement}`]: Boolean(this.placement),
          [`view_${this.viewState}`]: Boolean(this.viewState)
        }
      },

      ...mapState({
        barActive: state => state.barActive,
        tabs: state => state.tabs,
        viewState: state => state.viewState,
        viewStateActive: state => state.viewState === VIEW_STATE_ACTIVE,
        viewStateFull: state => state.viewState === VIEW_STATE_FULL,
        placement: state => (state.placement ? state.placement : 'bottom-right'),
        size: state => (state.size ? state.size : 'm'),
        sticky: state => true,
      })
    }
  }
</script>

<style scoped>
  .devtools {
    /*width: 96px;*/
    /*width: auto;*/
    /*transition: width .3s ease;*/
    /*overflow: hidden;*/
    /*max-width: 0;*/
    /*transition: max-width 0.3s ease-out;*/
    transition: transform 0.1s ease-out;
    transform: translateX(100%);
  }

  .devtools.active {
    width: 100%;
    transform: translateX(0);
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
    width: 0;
    overflow: hidden;
    background: white;
    transition: height .3s ease;
  }

  .devtools.active .view {
    width: 100%;
  }

  .view_active .view {
    height: 300px;
  }

  .view_fullscreen.size_m .view {
    height: calc(100vh - 32px);
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
