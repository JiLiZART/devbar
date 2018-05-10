<template>
  <div class="block" :class="classNames" @click="onClick">
    <slot></slot>
    <template v-for="params in contentBlocks">
      <component
        v-if="params"
        v-bind="params"
        v-bind:key="params.id"
        v-bind:is="params.is"
        >{{ params.html }}
      </component>
    </template>
  </div>
</template>

<script>
//  import Label from './Label'
//  import Text from './Text'
//  import Icon from './Icon'

  export default {
    name: 'Block',
    props: {
      titled: {type: Boolean},
      size: {type: String},
      content: {type: Array, default: () => ([])}
    },
    components: {},
    methods: {
      onClick(e) {
        this.$emit('click', e)
      }
    },
    computed: {
      classNames() {
        return {
          titled: this.titled,
          [`size_${this.size}`]: Boolean(this.size)
        }
      },

      contentBlocks() {
        return this.content.map((item) => {
          if (item.text) {
            return {
              is: 'dt-text', // Text,
              html: item.text
            }
          }

          if (item.label) {
            return {
              is: 'dt-label', // Label,
              type: item.type,
              html: item.label
            }
          }

          if (item.icon) {
            return {
              is: 'dt-icon', // Icon,
              name: item.icon
            }
          }
        })
      }
    }
  }
</script>

<style scoped>
  .block {
    margin: 0;
    padding: 2px 6px;
    font: 10px Verdana, Arial, sans-serif;
    box-sizing: border-box;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
  }

  .block + .block {
    border-right: 1px solid rgba(0, 0, 0, 0.11);
  }

  .block_active {
    background: rgb(247, 247, 247); /* Old browsers */
    background: linear-gradient(to bottom, rgb(247, 247, 247) 0%, rgb(224, 224, 224) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }

  .block a {
    display: inline-block;
    text-decoration: none;
    color: black;
  }

  .block img {
    vertical-align: middle;
  }

  .size_xl {
    height: 48px;
  }

  .size_l {
    height: 40px;
  }

  .size_m {
    height: 32px;
  }

  .size_s {
    height: 24px;
  }

  .titled {
    background: rgb(247, 247, 247); /* Old browsers */
    background: linear-gradient(to bottom, rgb(247, 247, 247) 0%, rgb(224, 224, 224) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }

</style>
