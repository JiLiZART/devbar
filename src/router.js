import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '@/views/HomeView'
import ShellView from '@/views/ShellView'
import FrameView from '@/views/FrameView'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'abstract',
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/shell',
        name: 'shell',
        component: ShellView
      },
      {
        path: '/frame',
        name: 'frame',
        component: FrameView
      }
    ]
  })
}
