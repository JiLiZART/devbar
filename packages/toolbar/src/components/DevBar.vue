<script>
export default {
  name: "Devtools",
  props: {
    size: { type: String, default: 'md' },
    sticky: Boolean,
    placement: String,
    viewState: String,
    barActive: Boolean,
  },
  components: {},
  computed: {
    className() {
      return {
        active: this.barActive,
        sticky: this.sticky,
        [`size_${this.size}`]: Boolean(this.size),
        [`sticky_${this.placement}`]: Boolean(this.placement),
        [`view_${this.viewState}`]: Boolean(this.viewState),
      };
    },
  },
};
</script>

<template>
  <v-card class="devbar" :class="className" :elevation="1">
    <div class="body">
      <div class="bar">
        <slot name="bar" />
      </div>
      <div class="content">
        <slot name="content" />
      </div>
    </div>
  </v-card>
</template>

<style lang="css" scoped>
:root {
  --tab-height: 36px;
}

.devbar {
  font-family: "Open Sans", Roboto, "Helvetica neue", Helvetica, sans-serif;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  max-height: 50%;
  border-radius: 6px;

  transition: transform 0.1s ease-out, height 0.2s ease-out,
    max-height 0.2s ease-out;
  transform: translateX(calc(100% - 38px));
}

.body {
  width: calc(100%);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.bar {
  flex: 0 0 auto;
}

.content {
  flex: 1 1 100%;
  position: relative;
  visibility: hidden;
  height: 0;
  width: 0;
  overflow: hidden;
  /*background: rgb(247, 247, 247);*/
  transition: height 0.3s ease;
}

.devbar.size_md {
  width: 36px;
  height: 37px; /* 36px + 1px border */
}

.devbar.active {
  overflow: visible;
  width: calc(100% - 8px);
  transform: translateX(0);
}

.devbar.view_active {
  max-height: 50%;
  height: 400px;
}

.devbar.view_fullscreen {
  height: calc(100vh - 8px);
  max-height: 100%;
}

.devbar.active .content {
  width: 100%;
}

.devbar.view_active .content {
  visibility: visible;
  height: 100%;
  width: 100%;
}

.devbar.view_fullscreen.size_md .content {
  visibility: visible;
  height: calc(100vh - 34px);
  width: 100%;
}

.devbar.sticky {
  position: fixed;
  margin: 0;
  z-index: 99999999999999;
}

.devbar.sticky_bottom-right {
  right: 4px;
  bottom: 4px;
}

.devbar.sticky_bottom-left {
  left: 4px;
  bottom: 4px;
}

.devbar.sticky_top-left {
  left: 4px;
  top: 4px;
}

.devbar.sticky_top-right {
  left: 4px;
  top: 4px;
}
</style>
