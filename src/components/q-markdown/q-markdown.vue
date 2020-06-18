<template>
    <div v-html="mdHtml"></div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import marked from "marked";

  @Component
  export default class QMarkdown extends Vue {
    @Prop() private text: string

    get mdHtml() {
      if (this.text) {
        return marked(this.text)
      }
      return ''
    }
  }
</script>





<!--
import hljs from "highlight.js";

marked.setOptions({
renderer: new marked.Renderer(),
gfm: true,
smartLists: true,
smartypants: true,
highlight(code) {
return hljs.highlightAuto(code).value
}
})-->
