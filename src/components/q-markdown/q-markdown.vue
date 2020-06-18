<template>
    <div v-html="mdHtml"></div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import MdReader from "qing-markdown-reader";

  @Component
  export default class QMarkdown extends Vue {
    @Prop() private text: string

    get mdHtml() {
      if (this.text) {
        return MdReader.read(this.text)
      }
      return ''
    }
  }
</script>
