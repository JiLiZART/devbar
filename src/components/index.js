import Vue from 'vue'
import {
  Button, Tabs, TabPane, Table, TableColumn, Container, Aside, Header, Main,
  Menu, MenuItem,
} from 'element-ui'

import Label from './Label.vue'
import Block from './Block.vue'
import Text from './Text.vue'
import Icon from './Icon.vue'

export function createComponents() {
  Vue.component('DtIcon', Icon)
  Vue.component('DtLabel', Label)
  Vue.component('DtBlock', Block)
  Vue.component('DtText', Text)

  Vue.component(Button.name, Button)

  Vue.component(Tabs.name, Tabs)
  Vue.component(TabPane.name, TabPane)

  Vue.component(Table.name, Table)
  Vue.component(TableColumn.name, TableColumn)

  Vue.component(Container.name, Container)
  Vue.component(Aside.name, Aside)
  Vue.component(Header.name, Header)
  Vue.component(Main.name, Main)

  Vue.component(Menu.name, Menu)
  Vue.component(MenuItem.name, MenuItem)
}
