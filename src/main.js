// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {createApp} from './app'

const state = window.__YII2_DEVTOOLS__

const {app, router, store} = createApp(state)

router.onReady(() => {
  console.log('router ready')
})

app.$mount('#yii2-devtools')

/* eslint-disable no-new */
// new Vue({
//   el: '#yii2-devtools',
//   components: {App},
//   data: () => ({state}),
//   template: '<App :state="state" />'
// })
