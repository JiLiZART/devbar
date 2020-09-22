import {createApp} from './bootstrap'

const state = window['__YII2_DEVTOOLS__']

const {app, router} = createApp(state)

router.onReady(() => {
  console.log('router ready')
})

document.body.append(app);
