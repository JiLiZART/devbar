<template>
  <div ref="terminal">Terminal</div>
</template>

<script>
  export default {
    name: 'Terminal',
    props: {},
    components: {},
    methods: {},
    mounted() {
      console.log('terminal mounted', this.$el);
    }
  }
</script>

<style lang="stylus">
</style>
