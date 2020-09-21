// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {createApp} from './app'

const state = window.__YII2_DEVTOOLS__

const {app, router} = createApp(state)

router.onReady(() => {
  console.log('router ready')
})

document.body.append(app);
