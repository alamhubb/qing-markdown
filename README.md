<h1 align="center">qing-markdown</h1>

### 说明
Vue Markdown 组件，可以将本地或远程 .md 文件以及 markdown 字符串解析为 HTML 显示

### Introduce
Vue Markdown component, can parse local or remote .md files and markdown strings into HTML display

### 演示项目
* 地址：[qing-markdown 演示项目](https://www.qingchi1.com/md/qing-markdown)

* 本地运行
 ```bash
 # 下载项目代码
 clone https://github.com/qinkaiyuan/qing-markdown.git
 # 切换到演示项目
 cd qing-markdown/exampl
 # 安装演示项目
 npm install
 # 运行演示项目
 npm run serve
 ```

### npm 安装
```bash
npm install qing-markdown
```

### 快速上手
```html
<template>
    <!--// 编译为 <h1>hello world<h1>-->
    <q-markdown :src="hello"/>
</template>

```
```javascript
// 引入组件
import QMarkdown from 'qing-markdown/src/components/q-markdown/q-markdown'

@Component({
    components: {QMarkdown}
})
export default class HelloWorld extends Vue {
    hello = '# hello world'
}
```

* #### 结合以下三种不同的 js 代码实现本地、远程、字符串三种不同的 .md 加载方式
1. 加载 markdown 字符串
    ```javascript
    // helloString = '# hello world'
    import helloString from './helloString'
  
    export default class HelloWorld extends Vue {
       hello = helloString
    }
    ```
   
2. 本地 .md 文件
    ```javascript
    // hello.md文件内内容为：# hello world
    // 所以 hello = '# hello world' 
    import hello from './hello.md'
    
    export default class HelloWorld extends Vue {
       hello = hello
    }
    ```
 * 需要安装配置 qing-markdown-loader，否则无法加载 .md 文件，[查看方式](https://github.com/qinkaiyuan/qing-markdown#%E6%B3%A8%E6%84%8F)
 
3. 远程文件

    ```javascript
    export default class HelloWorld extends Vue {
       hello = ''
       created() {
         axios.get('https://www.*.com/markdown/hello.md').then(res => {
           // this.hello = '# hello world' markdown文件内内容
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
* [qing-markdown-loader](https://github.com/qinkaiyuan/qing-markdown-loader#qing-markdown-loader) Webpack loader，加载 .md 文件，并返回文件内内容字符串，
以实现使 webpack 可加载 .md 文件的功能，qing-markdown 使用这个项目实现加载 .md 文件功能
* [qing-markdown-reader](https://github.com/qinkaiyuan/qing-markdown-reader#qing-markdown-reader) Markdown 字符串工具类，传入 markdown 字符串，返回 html 字符串，
qing-markdown 使用这个项目实现将markdown字符串转换为html字符串

### License
[MIT](http://opensource.org/licenses/MIT)