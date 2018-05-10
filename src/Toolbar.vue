<template>
  <div class="toolbar" :class="className">
    <div class="bar bar_active">
      <div class="toggler">
        <dt-icon name="toggler"></dt-icon>
      </div>
      <dt-block :titled="true" :size="size">
        <Logo></Logo>
      </dt-block>
      <tabs :tabs="tabs" :size="size"></tabs>
      <divider></divider>
      <dt-block>
        <dt-icon name="more-vert" size="s"></dt-icon>
      </dt-block>
    </div>
  </div>
</template>

<style scoped>
  .toolbar {
    text-align: left;
    transition: width .3s ease;
    z-index: 1000000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .bar {
    position: relative;
    display: flex;
    padding: 0;
    font: 11px Verdana, Arial, sans-serif;
    text-align: left;
    overflow: hidden;
    box-sizing: content-box;

    background: rgb(247, 247, 247);
    /*background: linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(247, 247, 247) 100%); !* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ *!*/

    border: 1px solid rgba(0, 0, 0, 0.11);

    /* ensure debug toolbar text is displayed ltr even on rtl pages */
    direction: ltr;
    z-index: 1000000;
  }

  .toggler {
    position: relative;
    width: 8px;
    height: 100%;
    background: #111;
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

<script>
  import Vue from 'vue'
  import Block from './components/Block'
  import Divider from './components/Divider'
  import Logo from './components/Logo'
  import Panel from './components/Panel'
  import Tabs from './components/Tabs'
  import nanoid from 'nanoid'
  import url from 'nanoid/url'

  export default {
    name: 'Toolbar',
    props: {state: {type: Object}},
    components: {
      Block,
      Logo,
      Panel,
      Divider,
      Tabs
    },

    computed: {
      className() {
        return {
          active: true,
          sticky: this.sticky,
          [`sticky_${this.placement}`]: Boolean(this.placement)
        }
      },

      sticky() {
        return true
      },

      size() {
        return this.state.size ? this.state.size : 'm'
      },

      placement() {
        return this.state.placement ? this.state.placement : 'bottom-right'
      },

      tabs() {
        if (this.state.tabs) {
          return this.state.tabs.map((block) => {
            if (block.template) {
              const blockId = `block-${nanoid(url)}`

              Vue.component(blockId, block)

              block.is = blockId

              return block
            }

            return block
          })
        }

        return []
      }
    }
  }
</script>
