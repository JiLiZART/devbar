import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '@/views/HomeView'
import ShellView from '@/views/ShellView'
import FrameView from '@/views/FrameView'
import LogsView from '@/views/LogsView'
import ConfigView from '@/views/ConfigView'
import RequestView from '@/views/RequestView'
import SettingsView from '@/views/SettingsView'

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
        path: '/',
        name: 'logs',
        component: LogsView
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
      },
      {
        path: '/config',
        name: 'config',
        component: ConfigView
      },
      {
        path: '/request',
        name: 'request',
        component: RequestView
      },
      {
        path: '/Settings',
        name: 'settings',
        component: SettingsView,
        meta: {
          title: 'Settings',
        }
      }
    ]
  })
}
