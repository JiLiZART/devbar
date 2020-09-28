<script>
export default {
  name: "DtLabel",
  props: {
    type: { type: String },
  },
  components: {},
  computed: {
    classObject() {
      return {
        [this.type]: true,
      };
    },
  },
};
</script>

<template>
  <span class="label" :class="classObject">
    <slot></slot>
  </span>
</template>

<style scoped>
.label {
  padding: 0.25em 0.4em;
  margin: 0 4px;
  font-size: 12px;
  font-weight: normal;
  white-space: nowrap;
  vertical-align: baseline;
  background-color: hsla(0, 0%, 80%, 0.3);
  border-radius: 3px;
}

.label:empty {
  display: none;
}

a.label:hover,
a.label:focus {
  /*color: #ffffff;*/
  text-decoration: none;
  cursor: pointer;
}

.primary {
  color: #7540ee;
  background-color: rgba(117, 64, 238, 0.2);
}

.secondary {
  color: #6c757d;
  background-color: #6c757d;
}

.success {
  color: #2dc76d;
  background-color: rgba(45, 199, 109, 0.2);
}

.danger {
  color: #ff7052;
  background-color: rgba(255, 112, 82, 0.2);
}

.warning {
  color: #ffc107;
  background-color: rgba(255, 193, 7, 0.2);
}

.info {
  color: #3fb6dc;
  background-color: rgba(63, 182, 220, 0.2);
}

.light {
  color: #f8f9fa;
  background-color: rgba(248, 249, 250, 0.2);
}

.dark {
  color: #343a40;
  background-color: rgba(52, 58, 64, 0.2);
}
</style>
