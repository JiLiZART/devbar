<script>
import Block from "../components/Block";
import Logo from "../components/Logo";

export default {
  name: "TabBarToggler",
  props: {
    size: String,
    logo: String,
    active: Boolean,
  },
  components: {
    Block,
    Logo,
  },
};
</script>

<template>
  <Block
    class="tabbar-toggler"
    :class="{ active }"
    :stretch="true"
    :titled="true"
    :size="size"
    @click="$emit('togglerClick')"
    ><div class="tabbar-toggler__block">
      <Logo class="tabbar-toggler__logo" :size="size" :image="logo" />
    </div>
  </Block>
</template>

<style scoped>
.tabbar-toggler {
  background: hsl(0, 0%, 97%); /* Old browsers */
  background: linear-gradient(
    to bottom,
    hsl(0, 0%, 97%) 0%,
    hsl(0, 0%, 88%) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  border-radius: 6px;
}

.tabbar-toggler.active {
  border-radius: 6px 0 0 6px;
}

.tabbar-toggler:hover {
  background: hsl(0, 0%, 97%); /* Old browsers */
  background: linear-gradient(
    to bottom,
    rgb(247, 247, 247) 0%,
    rgb(224, 224, 224) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}

.tabbar-toggler:active {
  background: hsl(0, 0%, 88%); /* Old browsers */
  background: linear-gradient(
    to bottom,
    hsl(0, 0%, 88%) 0%,
    hsl(0, 0%, 97%) 100%
  );
}

.tabbar-toggler__block {
  display: inline-flex;
  height: 100%;
}

.tabbar-toggler__logo {
  height: 36px;
  padding: 4px;
}
</style>
