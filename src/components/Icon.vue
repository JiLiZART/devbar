<template>
  <component :is="name" class="icon" :class="classObject" :width="sizeValue" :height="sizeValue"></component>
</template>

<script>
  import Settings from 'material-design-icons/action/svg/production/ic_settings_24px.svg'
  import DataUsage from 'material-design-icons/device/svg/production/ic_data_usage_24px.svg'
  import Memory from 'material-design-icons/hardware/svg/production/ic_memory_24px.svg'
  import Timer from 'material-design-icons/image/svg/production/ic_timer_24px.svg'
  import MoreVert from 'material-design-icons/navigation/svg/production/ic_more_vert_24px.svg'

  import Fullscreen from 'material-design-icons/navigation/svg/production/ic_fullscreen_24px.svg'
  import FullscreenExit from 'material-design-icons/navigation/svg/production/ic_fullscreen_exit_24px.svg'
  import Clear from 'material-design-icons/content/svg/production/ic_clear_24px.svg'
  import ArrowRight from 'material-design-icons/hardware/svg/production/ic_keyboard_arrow_right_24px.svg'

  export default {
    name: 'Icon',
    props: {
      name: String,
      size: {type: String, default: 'm'}
    },
    components: {
      Settings,
      DataUsage,
      Memory,
      Timer,
      MoreVert,
      Fullscreen,
      FullscreenExit,
      Clear,
      ArrowRight
    },
    computed: {
      classObject() {
        return {
          [`size_${this.size}`]: this.size
        }
      },
      sizeValue() {
        return this.sizeMap[this.size]
      },
      sizeMap() {
        return {
          xl: 38,
          l: 30,
          m: 20,
          s: 14
        }
      }
    }
  }
</script>

<style scoped>
  .icon {
    color: #444;
    fill: #444;
    /*vertical-align: middle;*/
    /*display: inline-block;*/
    background: no-repeat 50%;
  }

  .icon.size_xl {
    height: 38px;
  }

  .icon.size_l {
    height: 30px;
  }

  .icon.size_m {
    height: 20px;
  }

  .icon.size_s {
    height: 14px;
  }

</style>
