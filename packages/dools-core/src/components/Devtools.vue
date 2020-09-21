<script>
export default {
    name: 'Devtools',
    props: {
        size: String,
        sticky: Boolean,
        placement: String,
        viewState: String,
        barActive: Boolean
    },
    components: {},
    computed: {
        className() {
            return {
                devtools_active: this.barActive,
                devtools_sticky: this.sticky,
                [`devtools_size_${this.size}`]: Boolean(this.size),
                [`devtools_sticky_${this.placement}`]: Boolean(this.placement),
                [`devtools_view_${this.viewState}`]: Boolean(this.viewState)
            }
        }
    }
}
</script>

<template>
  <mu-paper class="devtools" :class="className" :z-depth="1">
    <div class="devtools__content">
      <div class="devtools__tabbar">
        <slot name="bar" />
      </div>
      <div class="devtools__tab-content">
        <slot name="content" />
      </div>
    </div>
  </mu-paper>
</template>

<style lang="css" scoped>
  :root {
    --tab-height: 38px;
  }

  .devtools {
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    width: 38px;
    /*transition: width .3s ease;*/
    height: 38px;
    max-height: 50%;
    border-radius: 6px;

    transition: transform 0.1s ease-out, height .2s ease-out, max-height .2s ease-out;
    transform: translateX(calc(100% - 38px));
  }

  .devtools__content {
    width: calc(100%);
    height: 100%;
    display: flex;
    flex-direction: column;
    /*background: hsla(0, 0%, 90%, 1);*/
    /*border: 1px solid #eeeeee;*/
    /*border-radius: 8px;*/
    /*width: 96px;*/
    /*width: auto;*/
    /*transition: width .3s ease;*/
    /*overflow: hidden;*/
    /*max-width: 0;*/
    /*transition: max-width 0.3s ease-out;*/

    /*transition: transform 0.1s ease-out;*/
    /*transform: translateX(100%);*/
  }

  .devtools__tabbar {
    flex: 0 0 auto;
  }

  .devtools_active {
    overflow: auto;
    width: calc(100% - 8px);
    transform: translateX(0);
  }

  .devtools_view_active {
    max-height: 50%;
    height: 400px;
  }

  .devtools_view_fullscreen {
    height: calc(100vh - 8px);
    max-height: 100%;
  }

  .tab-bar {
    text-align: left;
    transition: width .3s ease;
    z-index: 1000000;
  }

  .devtools__tab-content {
    flex: 1 1 100%;
    position: relative;
    visibility: hidden;
    height: 0;
    width: 0;
    overflow: hidden;
    /*background: rgb(247, 247, 247);*/
    transition: height .3s ease;
    /*font-family: 'Open Sans', Roboto, 'Helvetica neue', Helvetica, sans-serif;*/
  }

  .devtools_active .devtools__tab-content {
    width: 100%;
  }

  .devtools_view_active .devtools__tab-content {
    visibility: visible;
    height: 100%;
    width: 100%;
  }

  .devtools_view_fullscreen.devtools_size_m .devtools__tab-content {
    visibility: visible;
    height: calc(100vh - 34px);
    width: 100%;
  }

  .devtools_sticky {
    position: fixed;
    margin: 0;
  }

  .devtools_sticky_bottom-right {
    right: 4px;
    bottom: 4px;
  }

  .devtools_sticky_bottom-left {
    left: 4px;
    bottom: 4px;
  }

  .devtools_sticky_top-left {
    left: 4px;
    top: 4px;
  }

  .devtools_sticky_top-right {
    left: 4px;
    top: 4px;
  }
</style>
