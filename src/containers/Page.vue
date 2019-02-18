<template>
  <mu-paper :z-depth="2">
    <mu-appbar color="primary">
      <span>{{ title }}</span>
    </mu-appbar>
    <mu-container>
      <mu-row>
        <mu-col span="4" class="page-side-nav">
          <mu-list>
            <mu-sub-header>Navigation</mu-sub-header>
            <mu-list-item v-for="item in items" :key="item.text">
              <dt-icon :name="item.icon" size="m"></dt-icon>
              <span>{{ item.text }}</span>
            </mu-list-item>
          </mu-list>
        </mu-col>

        <mu-col span="8" class="page-content">
          <router-view></router-view>
        </mu-col>
      </mu-row>
    </mu-container>
  </mu-paper>
</template>

<script>
  //  import PageContent from '@/components/PageContent.vue'
  //  import PageNavbar from '@/components/PageNavbar.vue'
  //  import PageSideNav from '@/components/PageSideNav.vue'

  import DtIcon from "../components/Icon.vue";

  export default {
    name: 'Page',
    props: {
      title: String
    },
    components: {
      DtIcon
//      PageContent,
//      PageNavbar,
//      PageSideNav
    },
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        {icon: 'contacts', text: 'Configuration'},
        {icon: 'history', text: 'Request'},
        {icon: 'content_copy', text: 'Logs'},
        {icon: 'keyboard_arrow_up', text: 'Profiling'},
        {icon: 'keyboard_arrow_up', text: 'Asset Bundles'},
        {icon: 'settings', text: 'Mail'},
        {icon: 'chat_bubble', text: 'Timeline'},
        {icon: 'help', text: 'User'},
        {icon: 'phonelink', text: 'Router'},
        {icon: 'keyboard', text: 'Database'}
      ]
    })
  }
</script>
