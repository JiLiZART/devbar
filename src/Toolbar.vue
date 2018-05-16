<template>
  <div class="bar" :class="classNames">
    <Block class="toggler" :stretch="true" @click="onTogglerClick">
      <Icon name="arrow-right" :size="size"></Icon>
    </Block>
    <Block :titled="true" :size="size">
      <Logo></Logo>
    </Block>
    <tabs :tabs="tabsBlocks" :size="size" @tabClick="onTabClick"></tabs>
    <divider></divider>
    <div class="settings">
      <Block @click="onFullClick" v-show="closeVisible">
        <Icon name="fullscreen" :size="size"></Icon>
      </Block>
      <Block @click="onFullExitClick" v-show="fullExitVisible">
        <Icon name="fullscreen-exit" :size="size"></Icon>
      </Block>
      <Block @click="onCloseClick" v-show="closeVisible || fullExitVisible">
        <Icon name="clear" :size="size"></Icon>
      </Block>
      <Block>
        <Icon name="moreVert" size="m"></Icon>
      </Block>
    </div>
  </div>
</template>

<style scoped>
  .bar {
    position: relative;
    display: flex;
    padding: 0;
    font: 11px Verdana, Arial, sans-serif;
    text-align: left;
    box-sizing: content-box;
    border: 1px solid rgba(0, 0, 0, 0.11);
    background: rgb(247, 247, 247);
    /*background: linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(247, 247, 247) 100%); !* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ *!*/

    /* ensure debug toolbar text is displayed ltr even on rtl pages */
    direction: ltr;
    z-index: 1000000;
  }

  .toggler {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-100%);
    background: rgb(247, 247, 247);
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
    background: rgb(247, 247, 247);
    border-left: 1px solid rgba(0, 0, 0, 0.11);
    box-shadow: -2px 0 1px 0 rgb(247, 247, 247);
  }

  .size_xl {
    height: 48px;
  }

  .size_l {
    height: 40px;
  }

  .size_m {
    height: 32px;
  }

  .size_s {
    height: 24px;
  }

</style>

<script>
  import Vue from 'vue'
  import {mapState} from 'vuex'
  import Block from './components/Block'
  import Divider from './components/Divider'
  import Logo from './components/Logo'
  import Panel from './components/Panel'
  import Tabs from './components/Tabs'
  import Icon from './components/Icon'
  import nanoid from 'nanoid'
  import url from 'nanoid/url'

  export default {
    name: 'Toolbar',
    props: {
      size: String,
      closeVisible: Boolean,
      fullExitVisible: Boolean,
      barActive: Boolean,
      tabs: {type: Array, default: () => ([])}
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
      onTabClick(e) {
        console.log('toolbar tab click', e)
        this.$emit('tabClick', e)
      },
      onCloseClick(e) {
        this.$emit('closeClick', e)
      },
      onFullClick(e) {
        this.$emit('fullClick', e)
      },
      onFullExitClick(e) {
        this.$emit('fullExitClick', e)
      },
      onTogglerClick(e) {
        this.$emit('togglerClick')
      },

      toVueComponent(block) {
        const blockId = `block-${nanoid(url)}`

        Vue.component(blockId, block)

        block.is = blockId

        return block
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
        return this.tabs.map((block) => (block.template ? this.toVueComponent(block) : block))
      }
    }
  }
</script>
