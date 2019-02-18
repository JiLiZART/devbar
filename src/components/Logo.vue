<template>
  <a :href="url" class="logo" :class="classNames">
    <img :src="image" :alt="title">
  </a>
</template>

<script>
  export default {
    name: 'Logo',
    props: {
      url: String,
      title: String,
      size: String
    },
    components: {},
    data() {
      return {
        image: ''
      }
    },

    computed: {
      classNames() {
        return {
          [`size_${this.size}`]: Boolean(this.size)
        }
      }
    }
  }
</script>

<style scoped>
  .logo {
    display: block;
    height: 100%;
  }

  .logo.size_s {
    padding: 2px 0;
    height: 20px;
  }

  img {
    max-height: 100%;
  }
</style>
