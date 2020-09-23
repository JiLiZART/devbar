<template>
  <v-icon class="icon" :class="classObject" :size="size">{{ name }}</v-icon>
</template>

<script>
export default {
  name: "DtIcon",
  props: {
    name: String,
    size: { type: String, default: "m" },
    type: { type: String, default: "dark" },
  },
  computed: {
    classObject() {
      return {
        [`size_${this.size}`]: this.size,
        [`${this.type}`]: this.type,
      };
    },
    sizeValue() {
      return this.sizeMap[this.size];
    },
    sizeMap() {
      return {
        xl: 38,
        l: 30,
        m: 20,
        s: 14,
      };
    },
  },
};
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
  font-size: 38px;
  line-height: 38px;
}

.icon.size_l {
  height: 30px;
  font-size: 30px;
  line-height: 30px;
}

.icon.size_m {
  height: 20px;
  font-size: 20px;
  line-height: 20px;
}

.icon.size_s {
  height: 14px;
  font-size: 14px;
  line-height: 14px;
}

.primary {
  color: #7540ee;
  fill: #7540ee;
}

.secondary {
  color: #6c757d;
  fill: #6c757d;
}

.success {
  color: #2dc76d;
  fill: #2dc76d;
}

.danger {
  color: #ff7052;
  fill: #ff7052;
}

.warning {
  color: #ffc107;
  fill: #ffc107;
}

.info {
  color: #3fb6dc;
  fill: #3fb6dc;
}

.light {
  color: #f8f9fa;
  fill: #f8f9fa;
}

.dark {
  color: #343a40;
  fill: #343a40;
}
</style>
