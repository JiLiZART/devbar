import Vue from 'vue'
import Router from 'vue-router'

import WelcomeView from '@/views/WelcomeView'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'abstract',
    routes: [
      {
        path: '/',
        name: 'welcome',
        component: WelcomeView
      }
    ]
  })
}
