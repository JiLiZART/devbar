import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '@/views/HomeView'
import ShellView from '@/views/ShellView'
import FrameView from '@/views/FrameView'
import LogsView from '@/views/LogsView'
import ConfigView from '@/views/ConfigView'
import RequestView from '@/views/RequestView'
import SettingsView from '@/views/SettingsView'
import {
  ROUTE_NAME_CONFIG, ROUTE_NAME_FRAME, ROUTE_NAME_HOME, ROUTE_NAME_LOGS, ROUTE_NAME_REQUEST, ROUTE_NAME_SETTINGS,
  ROUTE_NAME_SHELL
} from "./constants/routeNamesConstants";

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'abstract',
    routes: [
      {
        path: '/',
        name: ROUTE_NAME_HOME,
        component: HomeView
      },
      {
        path: '/logs',
        name: ROUTE_NAME_LOGS,
        component: LogsView
      },
      {
        path: '/shell',
        name: ROUTE_NAME_SHELL,
        component: ShellView
      },
      {
        path: '/frame',
        name: ROUTE_NAME_FRAME,
        component: FrameView
      },
      {
        path: '/config',
        name: ROUTE_NAME_CONFIG,
        component: ConfigView
      },
      {
        path: '/request',
        name: ROUTE_NAME_REQUEST,
        component: RequestView
      },
      {
        path: '/Settings',
        name: ROUTE_NAME_SETTINGS,
        component: SettingsView,
        meta: {
          title: 'Settings'
        }
      }
    ]
  })
}
