<template>
    <div v-html="mdHtml"></div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import MdReader from "qing-markdown-reader";

  @Component
  export default class QMarkdown extends Vue {
    @Prop() private src: string

    get mdHtml() {
      if (this.src) {
        return MdReader.read(this.src)
      }
      return ''
    }
  }
</script>
