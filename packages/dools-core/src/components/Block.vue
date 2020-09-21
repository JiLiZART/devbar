<template>
  <div class="block" :class="classNames">
    <div class="block__body" @click="onClick">
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
    <template v-if="infoBlocks.length">
      <div class="block__info">
        <template v-for="(rows, rowsIdx) in infoBlocks">
          <div class="block__info-row" :key="rowsIdx">
            <template v-for="row in rows">
              <component
                v-if="row"
                v-bind="row"
                v-bind:key="row.id"
                v-bind:is="row.is"
              >{{ row.html }}
              </component>
            </template>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
  import Icon from './Icon'
  import Text from './Text'
  import Label from './Label'

  export default {
    name: 'DtBlock',
    props: {
      titled: Boolean,
      size: String,
      active: Boolean,
      content: {type: Array, default: () => ([])},
      info: {type: Array, default: () => ([])},
      stretch: Boolean,
      withRoute: Boolean
    },

    mounted() {},

    methods: {
      onClick(e) {
        this.$emit('click', e)
      },
      toLabel(item) {
        return {
          is: Label.name,
          type: item.type,
          html: item.label
        }
      },
      toIcon(item) {
        return {
          is: Icon.name,
          name: item.icon
        }
      },
      toText(item) {
        return {
          is: Text.name,
          html: item.text
        }
      },
      toComponent(item) {
        return (
          ({
            [!!item.text]: this.toText,
            [!!item.label]: this.toLabel,
            [!!item.icon]: this.toIcon
          })[!!1](item)
        )
      }
    },
    computed: {
      classNames() {
        return {
          titled: this.titled,
          block_active: this.active,
          block_stretch: Boolean(this.stretch),
          [`block_size_${this.size}`]: Boolean(this.size),
          block_link: Boolean(this.withRoute),
        }
      },

      infoBlocks() {
        const blocks = this.info.map(rows => rows.map(row => this.toComponent(row)))

        return blocks
      },

      contentBlocks() {
        return this.content.map((item) => this.toComponent(item))
      }
    }
  }
</script>

<style scoped>
  .block {
    margin: 0;
    height: 100%;
  }

  .block:hover {
    position: relative;
  }

  .block + .block {
    border-left: 1px solid rgba(0, 0, 0, 0.11);
  }

  .block.block_stretch {
    /*padding: 2px 0;*/
  }

  .block.block_active {
    background: rgb(247, 247, 247); /* Old browsers */
    /*background: linear-gradient(to bottom, rgb(247, 247, 247) 0%, rgb(224, 224, 224) 100%); !* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ *!*/
  }

  .block.block_link {
    /*background: rgb(247, 247, 247); !* Old browsers *!*/
  }

  .block.block_link:hover {
    cursor: pointer;
    background: hsla(360, 100%, 100%, 1); /* Old browsers */
    /*background: linear-gradient(to bottom, rgb(247, 247, 247) 0%, rgb(224, 224, 224) 100%);*/
  }

  .block__body {
    height: 100%;
    padding: 0 6px;
    min-height: 32px;
    font: 10px Verdana, Arial, sans-serif;
    box-sizing: border-box;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
  }

  .block__info {
    bottom: 36px;
    display: block;
    visibility: hidden;
    padding: 10px 0;
    position: absolute;
    border: 1px solid rgba(0, 0, 0, 0.11);
    background: rgb(247, 247, 247);
    opacity: 0;
    transition: opacity 0.1s ease-out;
  }

  .block:hover .block__info {
    padding: 10px;
    max-width: 480px;
    max-height: 480px;
    word-wrap: break-word;
    overflow: hidden;
    overflow-y: auto;
    opacity: 1;
    visibility: visible;
  }

  .block__info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
  }

  .block a {
    display: inline-block;
    text-decoration: none;
    color: black;
  }

  .block img {
    vertical-align: middle;
  }

  .block :global .v-icon {
    margin: 0;
  }

  /*.block.size_xl {*/
  /*height: 48px;*/
  /*}*/

  /*.block.size_l {*/
  /*height: 40px;*/
  /*}*/

  /*.block.size_m {*/
  /*height: 32px;*/
  /*}*/

  /*.block.size_s {*/
  /*height: 24px;*/
  /*}*/

  .block.titled {
    background: rgb(247, 247, 247); /* Old browsers */
    background: linear-gradient(to bottom, rgb(247, 247, 247) 0%, rgb(224, 224, 224) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  }

</style>
