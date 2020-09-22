<script>
    import {mapGetters} from 'vuex'
    import {VIEW_STATE_ACTIVE, VIEW_STATE_FULL, VIEW_STATE_NONE} from './constants/viewStateConstants'
    import {MUTATION_BAR_ACTIVE, MUTATION_VIEW_STATE} from './constants/mutationNamesConstants'
    import Devtools from './components/Devtools.vue'
    import TabBar from './containers/TabBar.vue'
    import TabContent from './containers/TabContent.vue'

    export default {
        name: 'App',
        components: {
            Devtools,
            TabBar,
            TabContent
        },

        mounted() {
            console.log('mounted', this.$route)
        },

        data: () => ({}),

        methods: {
            onTabClick(tab) {
                console.log('tab click', tab)
                if (tab.route && !this.viewStateFull) {
                    this.$store.commit(MUTATION_VIEW_STATE, VIEW_STATE_ACTIVE)
                }
            },
            onCloseClick() {
                this.$store.commit(MUTATION_VIEW_STATE, VIEW_STATE_NONE)
            },
            onFullClick() {
                this.$store.commit(MUTATION_VIEW_STATE, VIEW_STATE_FULL)
            },
            onFullExitClick() {
                this.$store.commit(MUTATION_VIEW_STATE, VIEW_STATE_ACTIVE)
            },
            onTogglerClick() {
                this.$store.commit(MUTATION_BAR_ACTIVE, !this.barActive)
            }
        },

        computed: {
            pageTitle() {
                return (this.$route.meta && this.$route.meta.title) || ''
            },

            ...mapGetters([
                'barActive',
                'tabs',
                'logo',
                'viewState',
                'viewStateActive',
                'viewStateFull',
                'placement',
                'size',
                'sticky'
            ])
        }
    }
</script>

<template>
  <Devtools :size="size" :sticky="sticky" :placement="placement" :viewState="viewState" :barActive="barActive">
    <template v-slot:bar>
      <mu-slide-bottom-transition>
        <TabBar
          :logo="logo"
          :size="size"
          :tabs="tabs"
          :viewState="viewState"
          :barActive="barActive"
          :closeVisible="viewStateActive"
          :fullExitVisible="viewStateFull"
          @tabClick="onTabClick"
          @closeClick="onCloseClick"
          @fullClick="onFullClick"
          @fullExitClick="onFullExitClick"
          @togglerClick="onTogglerClick"
        />
      </mu-slide-bottom-transition>
    </template>
    <template v-slot:content>
      <TabContent :title="pageTitle" v-if="!!viewState"/>
    </template>
  </Devtools>
</template>

<style scoped>

</style>

<style lang="less">
  @import "~muse-ui/lib/styles/base.less";
  @import "~muse-ui/lib/styles/theme.less";
  /*@import "~material-design-icons-iconfont/dist/material-design-icons.css";*/
</style>
