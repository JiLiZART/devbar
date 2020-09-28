<script>
import Block from "./Block";

export default {
  name: "Panel",
  props: {},
  components: {
    Block,
  },
};
</script>

<style scoped>
.panel {
  position: relative;
  font: 11px Verdana, Arial, sans-serif;
  background-color: #f5f5f5;
  min-width: 300px;
  z-index: 100000;
}

.titlebar {
  background: rgb(247, 247, 247);
  border-bottom: 1px solid rgba(0, 0, 0, 0.11);
}

.floating {
}

.sticky {
  position: fixed;
  margin: 0;
}

.sticky_top {
  top: 0;
  left: 0;
  right: 0;
}

.sticky_right {
  right: 0;
  top: 0;
  bottom: 0;
}
</style>

<template>
  <div class="panel sticky sticky_right">
    <div class="titlebar">
      <Block size="s"> Time <dt-label type="success">300 ms</dt-label> </Block>
    </div>
  </div>
</template>
