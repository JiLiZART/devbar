<template>
  <a :href="url" class="logo">
    <img :src="image" :alt="title">
  </a>
</template>

<script>
  import image from '../assets/logo.png'

  export default {
    name: 'Logo',
    props: {
      url: {type: String},
      title: {type: String}
    },
    components: {},

    data() {
      return {
        image
      }
    }
  }
</script>

<style scoped>
  .logo {
    display: block;
    height: 100%;
  }

  img {
    max-height: 100%;
    width: auto;
  }
</style>
