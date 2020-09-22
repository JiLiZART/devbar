<template>
  <mu-paper :z-depth="2">
    <mu-list>
      <mu-list-item>
        <mu-list-item-action>
          <mu-icon value="settings"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>Setting</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-list-item>
        <mu-list-item-action>
          <mu-icon value="help_outline"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>Help</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <mu-list-item>
        <mu-list-item-action>
          <mu-icon value="power_settings_new"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>Exit</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
  </mu-paper>
</template>

<script>
export default {
  name: "RequestView",
  props: {},
  components: {},
  data() {
    return {
      activeName: "first",
    };
  },
  // methods: {
  //   handleClick(tab, event) {
  //     console.log(tab, event)
  //   }
  // }
};
</script>
