<template>
  <div class="bar bar_active">
    <div class="toggler">
      <Icon name="toggler"></Icon>
    </div>
    <Block :titled="true" :size="size">
      <Logo></Logo>
    </Block>
    <tabs :tabs="tabs" :size="size" @tabClick="onTabClick"></tabs>
    <divider></divider>
    <Block>
      <Icon name="close" size="s"></Icon>
    </Block>
    <Block>
      <Icon name="more-vert" size="s"></Icon>
    </Block>
  </div>
</template>

<style scoped>
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
    props: {size: String},
    components: {
      Block,
      Logo,
      Panel,
      Divider,
      Tabs
    },

    methods: {
      onTabClick(e) {
        console.log('toolbar tab click');
        this.$emit('tabClick', e)
      }
    },

    computed: {
      tabs() {
        if (this.$store.state.tabs) {
          return this.$store.state.tabs.map((block) => {
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
