<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
};
</script>

<style scoped>
.tab-bar {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.11);
}
</style>
