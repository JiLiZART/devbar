<template>
  <span class="label" :class="classObject">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'Label',
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
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
  }

  .primary {
    color: #ffffff;
    background-color: #007bff;
  }

  .secondary {
    color: #ffffff;
    background-color: #6c757d;
  }

  .success {
    color: #fff;
    background-color: #28a745;
  }

  .danger {
    color: #fff;
    background-color: #dc3545;
  }

  .warning {
    color: #212529;
    background-color: #ffc107;
  }

  .info {
    color: #fff;
    background-color: #17a2b8;
  }

  .light {
    color: #212529;
    background-color: #f8f9fa;
  }

  .dark {
    color: #fff;
    background-color: #343a40;
  }

</style>
