<template>
  <span class="label" :class="classObject">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'DtLabel',
    props: {
      type: {type: String}
    },
    components: {},
    computed: {
      classObject() {
        return {
          [this.type]: true
        }
      }
    }
  }
</script>

<style scoped>
  .label {
    padding: .25em .4em;
    margin: 0 4px;
    font-size: 12px;
    font-weight: normal;
    white-space: nowrap;
    vertical-align: baseline;
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
    color: #7540EE;
    background-color: rgba(117, 64, 238, .2);
  }

  .secondary {
    color: #6c757d;
    background-color: #6c757d;
  }

  .success {
    color: #2DC76D;
    background-color: rgba(45, 199, 109, .2);
  }

  .danger {
    color: #FF7052;
    background-color: rgba(255, 112, 82, .2);
  }

  .warning {
    color: #ffc107;
    background-color: rgba(255, 193, 7, .2);
  }

  .info {
    color: #3FB6DC;
    background-color: rgba(63, 182, 220, .2);
  }

  .light {
    color: #f8f9fa;
    background-color: rgba(248, 249, 250, .2);
  }

  .dark {
    color: #343a40;
    background-color: rgba(52, 58, 64, .2);
  }
</style>
