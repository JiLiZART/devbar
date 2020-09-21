import Vue from 'vue'
import nanoid from 'nanoid'
import url from 'nanoid/url'

export const toVueComponent = (block) => {
  const blockId = `block-${nanoid(url)}`

  Vue.component(blockId, block)

  block.is = blockId

  return block
}
