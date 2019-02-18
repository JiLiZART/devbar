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
    <Page :title="pageTitle" class="view"></Page>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {VIEW_STATE_ACTIVE, VIEW_STATE_FULL, VIEW_STATE_NONE} from './constants/viewStateConstants'
  import {MUTATION_BAR_ACTIVE, MUTATION_VIEW_STATE} from './constants/mutationNamesConstants'
  import Toolbar from './containers/Toolbar.vue'
  import Page from './containers/Page.vue'

  export default {
    name: 'App',
    components: {
      Toolbar,
      Page
    },

    mounted() {
      console.log('mounted', this.$route)
    },

    data: () => ({}),

    methods: {
      onTabClick(tab) {
        console.log('tab click', tab)
        if (tab.route) {
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
          active: this.barActive,
          sticky: this.sticky,
          [`size_${this.size}`]: Boolean(this.size),
          [`sticky_${this.placement}`]: Boolean(this.placement),
          [`view_${this.viewState}`]: Boolean(this.viewState)
        }
      },

      pageTitle() {
        return this.$route.meta && this.$route.meta.title || ''
      },

      ...mapGetters([
        'barActive',
        'tabs',
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
    position: relative;
    visibility: hidden;
    height: 0;
    width: 0;
    overflow: hidden;
    background: rgb(247, 247, 247);
    transition: height .3s ease;
    font-family: 'Open Sans', Roboto, 'Helvetica neue', Helvetica, sans-serif;
  }

  .devtools.active .view {
    width: 100%;
  }

  .view_active .view {
    visibility: visible;
    height: 300px;
  }

  .view_fullscreen.size_m .view {
    visibility: visible;
    height: calc(100vh - 34px);
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
