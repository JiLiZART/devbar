<template>
  <ElTabs type="card" @tab-click="handleClick">
    <ElTabPane label="Request">User</ElTabPane>
    <ElTabPane label="Response">Config</ElTabPane>
    <ElTabPane label="Cookies">Role</ElTabPane>
    <ElTabPane label="Session">Task</ElTabPane>
    <ElTabPane label="Flashes">Task</ElTabPane>
  </ElTabs>
</template>

<script>

  export default {
    name: 'RequestView',
    props: {},
    components: {
    },
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>
