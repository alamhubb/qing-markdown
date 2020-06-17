<h1 align="center">qing-markdown</h1>

### 说明
一个Vue组件，可以将本地或远程.md文件和markdown字符串解析为html以显示

### Introduce
A vue component that can parse local or remote .md files and markdown strings into html for display

### 演示项目
* 地址：[qing-markdown 演示项目](https://www.qingchi1.com/md/qing-markdown)

* 本地运行
 ```bash
 # 下载项目代码
 clone https://github.com/qinkaiyuan/qing-markdown.git
 # 切换到演示项目
 cd qing-markdown/exampl
 # 运行演示项目
 npm run serve
 ```

### npm 安装
```bash
npm install qing-markdown
```

### 快速上手
```bash
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
```

### 使用方式
* #### 模板 - 通用代码，结合以下三种不同的js代码实现本地、远程、字符串三种不同的 .md 加载方式
```vue
<template>
    <q-markdown :src="hello"/>
</template>
```
```javascript
import QMarkdown from 'qing-markdown/src/components/q-markdown/q-markdown'
```
* #### 不同的js代码
1. 加载 markdown 字符串
    ```javascript
    // helloString = '# hello world'
    // 编译为 <h1>hello world<h1>
    import helloString from './helloString'
  
    export default class HelloWorld extends Vue {
       hello = helloString
    }
    ```
   
2. 本地 .md 文件
    ```javascript
    // hello.md文件内内容为：# hello world
    // 所以 hello = '# hello world' 
    // 编译为 <h1>hello world<h1>
    import hello from './hello.md'
    
    export default class HelloWorld extends Vue {
       hello = hello
    }
    ```
 * 需要安装配置 qing-markdown-loader，否则无法加载 .md 文件，[查看方式](#localmd)

3. 远程文件
    ```javascript
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
    ```

### 注意
#### 读取本地 .md 文件方式，配置 loader，使webpack支持 .md 文件，vue-cli 方式
```bash
# 安装 loader
npm install qing-markdown-loader

# 配置 loader，vue.config.js 文件
chainWebpack: config => {
  config.module
    .rule('md').test(/\.md$/).use('md-loader').loader('qing-markdown-loader')
}
```

### 关联项目介绍
* [qing-markdown-loader](https://github.com/qinkaiyuan/qing-markdown-loader#qing-markdown-loader) 该项目是一个 webpack loader，加载 .md 文件，
并返回文件内内容字符串的 webpack loader，以实现使 webpack 可加载 .md 文件的功能，
 qing-markdown 使用这个项目实现加载 .md 文件功能

### License
[MIT](http://opensource.org/licenses/MIT)