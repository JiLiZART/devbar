<template>
  <div class="bar" :class="classNames">
    <Block class="toggler" :stretch="true" :titled="true" :size="size" @click="$emit('togglerClick')">
      <Logo size="s"></Logo>
    </Block>
    <div class="blocks">
      <Tabs :tabs="tabsBlocks" :size="size" :viewState="viewState" @tabClick="onTabClick"></Tabs>
      <Divider></Divider>
      <div class="settings">
        <Block @click="$emit('fullClick')" v-show="closeVisible">
          <Icon name="fullscreen" :size="size"></Icon>
        </Block>
        <Block @click="$emit('fullExitClick')" v-show="fullExitVisible">
          <Icon name="fullscreen_exit" :size="size"></Icon>
        </Block>
        <Block @click="$emit('closeClick')" v-show="closeVisible || fullExitVisible">
          <Icon name="clear" :size="size"></Icon>
        </Block>
        <Block @click="onSettingsClick">
          <Icon name="more_vert" :size="size"></Icon>
        </Block>
      </div>
    </div>
  </div>
</template>

<script>
  import Block from '../components/Block'
  import Divider from '../components/Divider'
  import Logo from '../components/Logo'
  import Panel from '../components/Panel'
  import Tabs from '../components/Tabs'
  import Icon from '../components/Icon'
  import {VIEW_STATE_FULL} from '../constants/viewStateConstants'
  import {MUTATION_VIEW_STATE} from '../constants/mutationNamesConstants'
  import {toVueComponent} from '../helpers/componentHelper'
  import {ROUTE_NAME_SETTINGS} from '../constants/routeNamesConstants'

  export default {
    name: 'Toolbar',
    props: {
      size: String,
      viewState: String,
      closeVisible: Boolean,
      fullExitVisible: Boolean,
      barActive: Boolean,
      tabs: {type: Array, 'default': () => ([])}
    },
    components: {
      Block,
      Logo,
      Panel,
      Divider,
      Tabs,
      Icon
    },

    methods: {
      onTabClick(tab) {
        if (tab.route) {
          this.$router.replace({name: tab.route})
        }

        this.$emit('tabClick', tab)
      },

      onSettingsClick() {
        this.$store.commit(MUTATION_VIEW_STATE, VIEW_STATE_FULL)
        this.$router.replace({name: ROUTE_NAME_SETTINGS})
      }
    },

    computed: {
      classNames() {
        return {
          bar_active: this.barActive,
          [`size_${this.size}`]: Boolean(this.size)
        }
      },

      tabsBlocks() {
        return this.tabs.map((block) => (block.template ? toVueComponent(block) : block))
      }
    }
  }
</script>

<style scoped>
  .bar {
    position: relative;
    display: flex;
    padding: 0;
    /*font: 11px Verdana, Arial, sans-serif;*/
    text-align: left;
    box-sizing: content-box;
    border: 1px solid rgba(0, 0, 0, 0.11);
    /*background: rgb(247, 247, 247);*/
    /*background: linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(247, 247, 247) 100%); !* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ *!*/

    /* ensure debug toolbar text is displayed ltr even on rtl pages */
    direction: ltr;
    z-index: 1000000;
  }

  .blocks {
    min-height: 32px;
    display: flex;
  }

  .toggler {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-100%);
    /*background: rgb(247, 247, 247);*/
    box-sizing: content-box;
    border: 1px solid rgba(0, 0, 0, 0.11);
    border-left-color: rgba(0, 0, 0, 0.2);
    border-left-width: 2px;
  }

  .toggler:hover {
    background: rgba(240, 240, 240, 0.64);
  }

  .bar_active .toggler {
    transform: translateX(0);
    border: none;
  }

  .settings {
    display: flex;
    height: 100%;
    position: absolute;
    right: 0;
    z-index: 10000001;
    /*background: rgb(247, 247, 247);*/
    /*border-left: 1px solid rgba(0, 0, 0, 0.11);*/
    /*box-shadow: -2px 0 1px 0 rgb(247, 247, 247);*/
  }

</style>
