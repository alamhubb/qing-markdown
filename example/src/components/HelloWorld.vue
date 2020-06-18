<template>
    <div class="markdown-body">
        <!-- 本地.md-->
        <q-markdown :text="mdHello"/>
        <!-- 远程.md-->
        <!-- <q-markdown :text="remoteMdHello"/>-->
        <!-- markdown字符串-->
        <!-- <q-markdown :text="stringHello"/>-->
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import 'github-markdown-css/github-markdown.css'
  import 'highlight.js/styles/github.css'
  import axios from "@/plugins/axios";
  import QMarkdown from 'qing-markdown/src/components/q-markdown/q-markdown'

  //@ts-ignore
  import hello from '../../../README.md'
  import helloString from './helloString'

  @Component(
    {components: {QMarkdown}}
  )
  export default class HelloWorld extends Vue {
    mdHello = hello
    remoteMdHello = ''
    stringHello = helloString

    created() {
      axios.get('https://cdxapp-1257733245.cos.ap-beijing.myqcloud.com/qingchi/markdown/hello.md').then(res => {
        this.remoteMdHello = res.data
      })
    }
  }
</script>
<style>
    .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
    }

    @media (max-width: 767px) {
        .markdown-body {
            padding: 15px;
        }
    }
</style>