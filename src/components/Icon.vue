<template>
    <span class="icon" :class="classObject">
      <component :is="name" viewBox="0 0 16 16" width="16" height="16"></component>
    </span>
</template>

<script>
  import Settings from 'material-design-icons/action/svg/production/ic_settings_24px.svg'
  import DataUsage from 'material-design-icons/device/svg/production/ic_data_usage_24px.svg'
  import Memory from 'material-design-icons/hardware/svg/production/ic_memory_24px.svg'
  import Timer from 'material-design-icons/image/svg/production/ic_timer_24px.svg'
  import MoreVert from 'material-design-icons/navigation/svg/production/ic_more_vert_24px.svg'

  import Toggler from 'material-design-icons/navigation/svg/production/ic_more_vert_24px.svg'

  console.log('ssSettings', Settings)

  export default {
    name: 'Icon',
    props: {
      name: String,
      size: String
    },
    components: {
      Settings,
      DataUsage,
      Memory,
      Timer,
      MoreVert,
      Toggler
    },
    computed: {
      classObject() {
        return {
          [`size_${this.size}`]: this.size
        }
      }
    }
  }
</script>

<style scoped>
  .icon {
    color: #444;
    fill: #444;
  }

  .size_xl {
    height: 40px;
  }

  .size_l {
    height: 32px;
  }

  .size_m {
    height: 24px;
  }

  .size_s {
    height: 16px;
  }

</style>
