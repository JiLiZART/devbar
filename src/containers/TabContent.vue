<template>
  <div class="tab-content">
    <router-view></router-view>
  </div>
  <!-- /.content -->
</template>

<script>
  export default {
    name: 'Page',
    props: {
      title: String
    },
    components: {
//      PageContent,
//      PageNavbar,
//      PageSideNav
    },
    data: () => ({

    })
  }
</script>

<style scoped>
  .tab-content {
    width: 100%;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-top: 1px solid #eeeeee;
  }
</style>
