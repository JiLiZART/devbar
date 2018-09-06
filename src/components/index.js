import Vue from 'vue'
import '@babel/polyfill'
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import 'vuetify/dist/vuetify.min.css'

// import {
//   Button, Tabs, TabPane, Table, TableColumn, Container, Aside, Header, Main,
//   Menu, MenuItem,
// } from 'element-ui'

import Label from './Label.vue'
import Block from './Block.vue'
import Text from './Text.vue'
import Icon from './Icon.vue'

export function createComponents() {
  Vue.component('DtIcon', Icon)
  Vue.component('DtLabel', Label)
  Vue.component('DtBlock', Block)
  Vue.component('DtText', Text)

  Vue.use(Vuetify, {
    theme: {
      primary: '#ee44aa',
      secondary: '#424242',
      accent: '#82B1FF',
      error: '#FF5252',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FFC107'
    }
  })


  // Vue.component(Button.name, Button)
  //
  // Vue.component(Tabs.name, Tabs)
  // Vue.component(TabPane.name, TabPane)
  //
  // Vue.component(Table.name, Table)
  // Vue.component(TableColumn.name, TableColumn)
  //
  // Vue.component(Container.name, Container)
  // Vue.component(Aside.name, Aside)
  // Vue.component(Header.name, Header)
  // Vue.component(Main.name, Main)
  //
  // Vue.component(Menu.name, Menu)
  // Vue.component(MenuItem.name, MenuItem)
}
