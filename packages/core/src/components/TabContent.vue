<script>
export default {
  name: "Page",
  computed: {
    classNames() {
      return {
        route: !!this.route,
        iframe: !!this.iframeUrl,
      };
    },
  },
};
</script>

<template>
  <div class="tab-content" :class="classNames">
    <slot></slot>
  </div>
</template>

<style scoped>
.tab-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.tab-content.route {
  padding: 0.5rem;
}

iframe {
  margin: 0;
  padding: 10px 0 0;
  height: 100%;
  width: 100%;
  border: 0;
}
</style>
