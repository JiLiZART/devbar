<template>
  <button class="logo" :class="classNames">
    <img :src="image" :alt="title" />
  </button>
</template>

<script>
export default {
  name: "Logo",
  props: {
    url: String,
    title: String,
    size: String,
    image: String,
  },
  components: {},

  computed: {
    classNames() {
      return {
        [`size_${this.size}`]: Boolean(this.size),
      };
    },
  },
};
</script>

<style scoped>
.logo {
  display: block;
  height: 100%;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  background: transparent;
}

.logo:hover {
  outline: none;
}

.logo.size_s {
  height: 20px;
}

.logo.size_md {
  height: 34px;
}

img {
  max-height: 100%;
}
</style>
