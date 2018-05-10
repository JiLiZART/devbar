<template>
    <div class="popup">
      <div class="arrow"></div>
      <!-- /.arrow -->
    Popup</div>
</template>

<script>
    export default {
        name: 'Popup',
        props: {},
        components: {}
    }
</script>

<style scoped>
  .popup {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1060;
    display: block;
    max-width: 276px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: .875rem;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: .3rem;
  }

  .arrow {
    position: absolute;
    display: block;
    width: 1rem;
    height: .5rem;
    margin: 0 .3rem;
  }
</style>
