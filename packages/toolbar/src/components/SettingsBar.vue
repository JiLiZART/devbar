<script>
import Block from "../components/Block";
import Icon from "../components/Icon";

export default {
  name: "SettingsBar",
  props: {
    fullExitVisible: Boolean,
    closeVisible: Boolean,
    size: String,
  },
  components: {
    Block,
    Icon,
  },
};
</script>

<template>
  <div class="settings-bar">
    <Block @click="$emit('fullClick')" v-show="closeVisible" :clickable="true">
      <Icon name="fullscreen" :size="size"></Icon>
    </Block>
    <Block
      @click="$emit('fullExitClick')"
      v-show="fullExitVisible"
      :clickable="true"
    >
      <Icon name="fullscreen_exit" :size="size"></Icon>
    </Block>
    <Block
      @click="$emit('closeClick')"
      v-show="closeVisible || fullExitVisible"
      :clickable="true"
    >
      <Icon name="clear" :size="size"></Icon>
    </Block>
    <Block @click="$emit('settingsClick')" :clickable="true">
      <Icon name="more_vert" :size="size"></Icon>
    </Block>
  </div>
</template>

<style scoped>
.settings-bar {
  display: flex;
  height: 100%;
}
</style>
