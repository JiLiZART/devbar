<template>
  <div class="settings-bar">
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
</template>

<script>
  import Block from '../components/Block'
  import Icon from '../components/Icon'

  export default {
    name: 'SettingsBar',
    props: {
      fullExitVisible: Boolean,
      closeVisible: Boolean,
      size: String
    },
    components: {
      Block,
      Icon
    },
    methods: {
        onSettingsClick() {

        }
    }
  }
</script>

<style scoped>
  .settings-bar {
    display: flex;
    height: 100%;
    /*background: rgb(247, 247, 247);*/
    /*border-left: 1px solid rgba(0, 0, 0, 0.11);*/
    /*box-shadow: -2px 0 1px 0 rgb(247, 247, 247);*/
  }
</style>
