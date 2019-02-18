<template>
  <mu-icon class="icon" :class="classObject" :size="size" :value="name"></mu-icon>
</template>

<script>
  export default {
    name: 'DtIcon',
    props: {
      name: String,
      size: {type: String, 'default': 'm'}
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
