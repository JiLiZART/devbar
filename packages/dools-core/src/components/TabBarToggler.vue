<template>
  <Block class="tabbar-toggler" :stretch="true" :titled="true" :size="size" @click="$emit('togglerClick')">
    <div class="tabbar-toggler__block">
      <Logo class="tabbar-toggler__logo" size="md" :image="logo" />
    </div>
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
  min-width: 37px;
  min-height: 37px;
}
.tabbar-toggler__block {
  display: flex;
  width: 100%;
  height: 100%;
}
.tabbar-toggler__logo {
  height: 36px;
  padding: 4px;
}
</style>
