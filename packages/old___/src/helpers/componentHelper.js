import Vue from 'vue'
import { nanoid } from 'nanoid/non-secure'

export const toVueComponent = (block) => {
  const blockId = `block-${nanoid()}`

  Vue.component(blockId, block)

  block.is = blockId

  return block
}
