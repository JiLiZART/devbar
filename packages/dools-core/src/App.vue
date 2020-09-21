<template>
  <div class="devtools"
       :class="className">
    <div class="devtools__content">
      <div class="devtools__tabbar">
        <TabBar
          :logo="logo"
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
        />
      </div>
      <div class="devtools__tab-content">
        <TabContent :title="pageTitle" v-if="!!viewState"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {VIEW_STATE_ACTIVE, VIEW_STATE_FULL, VIEW_STATE_NONE} from './constants/viewStateConstants'
  import {MUTATION_BAR_ACTIVE, MUTATION_VIEW_STATE} from './constants/mutationNamesConstants'
  import TabBar from './containers/TabBar.vue'
  import TabContent from './containers/TabContent.vue'

  export default {
    name: 'App',
    components: {
      TabBar,
      TabContent
    },

    mounted() {
      console.log('mounted', this.$route)
    },

    data: () => ({}),

    methods: {
      onTabClick(tab) {
        console.log('tab click', tab)
        if (tab.route && !this.viewStateFull) {
          this.$store.commit(MUTATION_VIEW_STATE, VIEW_STATE_ACTIVE)
        }
      },
      onCloseClick() {
        this.$store.commit(MUTATION_VIEW_STATE, VIEW_STATE_NONE)
      },
      onFullClick() {
        this.$store.commit(MUTATION_VIEW_STATE, VIEW_STATE_FULL)
      },
      onFullExitClick() {
        this.$store.commit(MUTATION_VIEW_STATE, VIEW_STATE_ACTIVE)
      },
      onTogglerClick() {
        this.$store.commit(MUTATION_BAR_ACTIVE, !this.barActive)
      }
    },

    computed: {
      className() {
        return {
          devtools_active: this.barActive,
          devtools_sticky: this.sticky,
          [`devtools_size_${this.size}`]: Boolean(this.size),
          [`devtools_sticky_${this.placement}`]: Boolean(this.placement),
          [`devtools_view_${this.viewState}`]: Boolean(this.viewState)
        }
      },

      pageTitle() {
        return this.$route.meta && this.$route.meta.title || ''
      },

      ...mapGetters([
        'barActive',
        'tabs',
        'logo',
        'viewState',
        'viewStateActive',
        'viewStateFull',
        'placement',
        'size',
        'sticky'
      ])
    }
  }
</script>

<style scoped>
  .devtools {
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    width: 32px;
    /*transition: width .3s ease;*/
    height: 32px;
    max-height: 50%;

    transition: transform 0.1s ease-out, height .2s ease-out, max-height .2s ease-out;
    transform: translateX(calc(100% - 32px));
  }

  .devtools__content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #f7f7f7;
    /*width: 96px;*/
    /*width: auto;*/
    /*transition: width .3s ease;*/
    /*overflow: hidden;*/
    /*max-width: 0;*/
    /*transition: max-width 0.3s ease-out;*/

    /*transition: transform 0.1s ease-out;*/
    /*transform: translateX(100%);*/
  }

  .devtools__tabbar {
    flex: 0 0 auto;
  }

  .devtools_active {
    width: 100%;
    transform: translateX(0);
  }

  .devtools_view_active {
    max-height: 50%;
    height: 400px;
  }

  .devtools_view_fullscreen {
    height: 100vh;
    max-height: 100%;
  }

  .tab-bar {
    text-align: left;
    transition: width .3s ease;
    z-index: 1000000;
  }

  .devtools__tab-content {
    flex: 1 1 100%;
    position: relative;
    visibility: hidden;
    height: 0;
    width: 0;
    overflow: hidden;
    /*background: rgb(247, 247, 247);*/
    transition: height .3s ease;
    /*font-family: 'Open Sans', Roboto, 'Helvetica neue', Helvetica, sans-serif;*/
  }

  .devtools_active .devtools__tab-content {
    width: 100%;
  }

  .devtools_view_active .devtools__tab-content {
    visibility: visible;
    height: 100%;
    width: 100%;
  }

  .devtools_view_fullscreen.devtools_size_m .devtools__tab-content {
    visibility: visible;
    height: calc(100vh - 34px);
    width: 100%;
  }

  .devtools_sticky {
    position: fixed;
    margin: 0;
  }

  .devtools_sticky_bottom-right {
    right: 0;
    bottom: 0;
  }

  .devtools_sticky_bottom-left {
    left: 0;
    bottom: 0;
  }

  .devtools_sticky_top-left {
    left: 0;
    top: 0;
  }

  .devtools_sticky_top-right {
    left: 0;
    top: 0;
  }
</style>
