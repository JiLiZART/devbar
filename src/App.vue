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
    <v-app id="inspire" class="view">
      <v-navigation-drawer
        :clipped="$vuetify.breakpoint.lgAndUp"
        v-model="drawer"
        fixed
        app
      >
        <v-list dense>
          <template v-for="item in items">
            <v-layout
              v-if="item.heading"
              :key="item.heading"
              row
              align-center
            >
              <v-flex xs6>
                <v-subheader v-if="item.heading">
                  {{ item.heading }}
                </v-subheader>
              </v-flex>
              <v-flex xs6 class="text-xs-center">
                <a href="#!" class="body-2 black--text">EDIT</a>
              </v-flex>
            </v-layout>
            <v-list-group
              v-else-if="item.children"
              v-model="item.model"
              :key="item.text"
              :prepend-icon="item.model ? item.icon : item['icon-alt']"
              append-icon=""
            >
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ item.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile
                v-for="(child, i) in item.children"
                :key="i"
                @click=""
              >
                <v-list-tile-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ child.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
            <v-list-tile v-else :key="item.text" @click="">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        dark
        app
        dense
        flat
        absolute
      >
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <span class="hidden-sm-and-down">{{pageTitle}}</span>
        </v-toolbar-title>
        <v-text-field
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="search"
          label="Search"
          class="hidden-sm-and-down"
          height="24"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
        <v-btn icon large>
          <v-avatar size="32px" tile>
            <img
              src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
              alt="Vuetify"
            >
          </v-avatar>
        </v-btn>
      </v-toolbar>
      <v-content>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12>
              <router-view></router-view>
            </v-flex>

          </v-layout>
        </v-container>
      </v-content>
    </v-app>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Toolbar, {VIEW_STATE_ACTIVE, VIEW_STATE_FULL} from './Toolbar.vue'

  export default {
    name: 'App',
    components: {
      Toolbar
    },

    mounted() {
      console.log('mounted', this.$route);
    },

    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        {icon: 'contacts', text: 'Contacts'},
        {icon: 'history', text: 'Frequently contacted'},
        {icon: 'content_copy', text: 'Duplicates'},
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Labels',
          model: true,
          children: [
            {icon: 'add', text: 'Create label'}
          ]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'More',
          model: false,
          children: [
            {text: 'Import'},
            {text: 'Export'},
            {text: 'Print'},
            {text: 'Undo changes'},
            {text: 'Other contacts'}
          ]
        },
        {icon: 'settings', text: 'Settings'},
        {icon: 'chat_bubble', text: 'Send feedback'},
        {icon: 'help', text: 'Help'},
        {icon: 'phonelink', text: 'App downloads'},
        {icon: 'keyboard', text: 'Go to the old version'}
      ]
    }),

    methods: {
      onTabClick(tab) {
        console.log('tab click', tab);
        if (tab.route) {
          this.$store.commit('viewState', VIEW_STATE_ACTIVE)
        }
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

      pageTitle() {
        return this.$route.meta && this.$route.meta.title || ''
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
    height: calc(100vh - 24px);
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
