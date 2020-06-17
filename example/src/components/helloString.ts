const helloString =`
<h1 align="center">qing-markdown</h1>
<h3 align="center">vue组件，将本地或远程的 .md 文件、 markdown 字符串解析成 html 展示</h3>

#### 演示项目
 * 地址：[qing-markdown 演示项目](https://www.qingchi1.com/md/qing-markdown)
 * 本地运行
 \`\`\`bash
 # 下载项目代码
 clone https://github.com/qinkaiyuan/qing-markdown.git
 # 切换到演示项目
 cd qing-markdown/exampl
 # 运行演示项目
 npm run serve
 \`\`\`

#### 使用方式
* ##### 模板 - 通用代码，结合下面三种不同的js代码实现本地、远程、字符串三种解析方式
\`\`\`vue
<template>
    <q-markdown :src="hello"/>
</template>
\`\`\`
\`\`\`javascript
import QMarkdown from 'qing-markdown/src/components/q-markdown/q-markdown'
\`\`\`
* ##### 不同的js代码
1. 字符串
    \`\`\`javascript
    // helloString = '# hello world'
    // 编译为 <h1>hello world<h1>
    import helloString from './helloString'
  
    export default class HelloWorld extends Vue {
       hello = helloString
    }
    \`\`\`
2. 本地 .md 文件
    \`\`\`javascript
    // hello.md文件内内容为：# hello world
    // 所以 hello = '# hello world' 
    // 编译为 <h1>hello world<h1>
    import hello from './hello.md'
    
    export default class HelloWorld extends Vue {
       hello = hello
    }
    \`\`\`
 * 需要安装配置 qing-markdown-loader，否则无法加载 .md 文件，[查看方式](#localmd)

3. 远程文件
    \`\`\`javascript
    export default class HelloWorld extends Vue {
       hello = ''
       created() {
         axios.get('https://www.*.com/markdown/hello.md').then(res => {
           // this.hello = '# hello world' markdown文件
           // 编译为 <h1>hello world<h1>
           this.hello = res.data
         })
       }
    }
    \`\`\`

#### npm 安装
\`\`\`bash
# 安装
npm install qing-markdown

# 引入组件
import QMarkdown from 'qing-markdown/src/components/q-markdown/q-markdown'

# 使用
<template>
    <q-markdown :src="hello"/>
</template>

@Component({
    components: {QMarkdown}
})
export default class HelloWorld extends Vue {
    hello = '# hello world'
}
\`\`\`

## 注意
#### 读取本地 .md 文件方式，配置 loader，使webpack支持 .md 文件，vue-cli 方式
\`\`\`bash
# 安装 loader
npm install qing-markdown-loader

# 配置 loader，vue.config.js 文件
chainWebpack: config => {
  config.module
    .rule('md').test(/\\.md$/).use('md-loader').loader('qing-markdown-loader')
}
\`\`\`

`
export default helloString
