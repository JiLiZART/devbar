<template>
  <Block class="tabbar-toggler" :stretch="true" :titled="true" :size="size" @click="$emit('togglerClick')">
    <Logo size="s" :image="logo" />
  </Block>
</template>

<script>
  import Block from '../components/Block'
  import Logo from '../components/Logo'

  export default {
    name: 'TabBarToggler',
    props: {
      size: String,
      logo: String
    },
    components: {
      Block,
      Logo
    }
  }
</script>

<style scoped>
.tabbar-toggler {
  width: 32px;
  height: 32px;
}
</style>
