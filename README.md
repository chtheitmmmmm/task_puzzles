# TIC 2023 课题设计
<address style="text-align: right;">——21级-宣传部-程闽</address>

- [题目](#题目)
- [参考](#参考)
- [附录](#附录)
  - [A. 编辑代码](#editidx)
  - [B. 浏览器打开`index.html`](#openidx)

本次课题设计准备了$1$道关于Web的题目，准备好了吗，发车！

## 题目
  1. [Web软件服务](#Web)
     1. [Level 1](#Web1)
     2. [Level 2](#Web2)
     3. [Level 3](#Web3)


### <div id="Web"></div>Web软件服务
#### 简要介绍
**Web**是已成为当今世界上最大的**应用程序分发平台**，各大企业、组织、机构在这里展现自己、提供服务。实际上现代人几乎每天都在接触Web——只要你打开浏览器，你所看到的页面就是一个Web页面。学习Web以及其相关的技术已几乎成为每位程序员必备的技能。

#### <div id="WebGetStart"></div>入门指引
请允许我来带领大家简单入门Web领域
首先在任意位置（比如`D:\Codes`）新建一个文件夹，就叫`Web`吧，现在我们的文件系统结构是

```yaml
Web
```

然后在里面创建一个文件，叫`index.html`
```yaml
Web
   - index.html
```
[打开](#editidx)`index.html`，在里面编写以下代码并保存
```html
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8"/>
      <title>Hello Web!</title>
   </head>
   <body>
      <h1>Hello Web!</h1>
   </body>
</html>
```
将`index.html`在任意浏览器[打开](#openidx)。完成一切之后如果你在浏览器看到：
<html>
   <head>
      <meta charset="utf-8"/>
      <title>Hello Web!</title>
   </head>
   <body >
      <h1 style="background: white; color: black; border: 1px black solid">Hello Web!</h1>
   </body>
</html>
那么恭喜，这是你的第一个Web页面！如果你产生兴趣了的话，请容我继续介绍这道题目的细节！

本题目有三个**Level**，对应三个难度层级。如果你基础比较扎实，你可以挑战最高难度。如果你基础比较薄弱，你也应该有足够的时间学习相关知识并完成[Level 1](#Web1)。重在参与，希望大家都能有所学！

#### <div id="Web1"></div>Level 1
<div style="text-align: center; font-size: 1.2em">Tags: <code>静态页面</code> <code>HTML5</code> <code>CSS3</code> </div>

所谓**静态页面**，不是说页面一定是静止的，因为**CSS3**也允许制作动画。但是不能根据用户的不同以及用户的行为来动态调整**HTML**文档的结构。简单理解来说就是，无论什么用户访问你的页面，除了可能因为浏览器对Web标准支持有少数的不统一之外，大体上应该都相同。我们不能根据用户身份来提供定制的内容，或者让用户提交ta的信息来注册账号等等。比如我们刚才例子中的就是一个最简单的**HTML**静态页面。

在这里我们提到了<abbr>**HTML**</abbr>和<abbr>**CSS3**</abbr>，它们的全称分别是*HyperText Markup Language*（超文本标记语言）和*Cascading Style Sheet*（层叠样式表），它们是用来编写一个静态页面需要学习的语言，文件后缀分别是`.html`（或`.htm`）和`.css`。和C语言等编程语言不同，你只需把html文件在浏览器打开，浏览器会直接**解析**你的HTML代码并**渲染**成一个网页。HTML是一个网页的骨架，而CSS就是一个网页的皮肤。我们接着[入门指引](#WebGetStart)里的例子，来体会一下CSS的魅力。

在指引中，我们的目录结构是这样的
```yaml
Web
   - index.html
```
接下来我们创建一个CSS文件，就叫`index.css`
```yaml
Web
   - index.html
   - index.css
```
[打开](#editidx)`index.css`，在里面编写
```css
#app {
    display: flex;
    align-items: center;
    justify-content: center;
    background: plum;
    color: blue;
    height: 100vh;
}

#app h1 {
    text-align: center;
    transition: 1s;
}

#app h1:hover {
    padding-top: 50vh;
    transform: rotateZ(1turn);
}
```
保存文件。

[打开](#editidx)`index.html`，现在我们需要将代码改写成
```html
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8"/>
      <title>Hello Web!</title>
      <link rel="stylesheet" href="index.css" type="text/css"/>
   </head>
   <body>
      <div id="app">
         <h1>Hello Web!</h1>
      </div>
   </body>
</html>
```
这里我们用一个`<link>`引入了我们的`CSS`文件，现在[在浏览器打开](#openidx)，我们可以看到了一些美丽的颜色，将鼠标放在`Hello Web!`上面，我们还会发现文本在旋转！很有意思，对吧！然而这只是Web页面的Level 1。建议你可以系统学习HTML和CSS，来创造出更好看的页面！

#### <div id="Web2"></div>Level 2
<div style="text-align: center; font-size: 1.2em">Tags: <code>动态页面</code> <code>HTML5</code> <code>CSS3</code> <code>JavaScript</code> </div>

**JavaScript**是一种编程语言，最初发明它的时候是为了使一些原本在**服务器端**（server）处理的工作转移到前端，从而减少网络带宽损耗，因而他的开发者（网景公司）最开始只用了十天时间。然而目前已经成为绝大多数Web应用的必备部件，是它赋予了Web页面以活力。现在我们来初步体验一下**JavaScript**的神奇之处。

如果你完成了[Level 1](#Web1)的指导，你应该有了以下文件系统结构
```yaml
Web
   - index.html
   - index.css
```
让我们继续添加JavaScript！首先创建一个js文件，就叫`index.js`
```yaml
Web 
   - index.html
   - index.css
   - index.js
```
在其中输入以下代码
```javascript
const theButton       = document.createElement('button')
const theClickCounter = document.createElement('div')
const theTitle        = document.querySelector('#app h1')
const theApp          = document.getElementById('app')

let cnt = 0;
theButton.setAttribute('style', 'with: 10em; background: green; color: white; font-size: 3em')
theButton.innerText = "点我"
function titleBigger() {
    let fontSize = theTitle.computedStyleMap().get('font-size');
    fontSizeString = (fontSize.value * 1.1).toString() + fontSize.unit;
    console.log(fontSizeString)
    theTitle.style.fontSize = fontSizeString
    console.dir(theTitle)
    cnt++;
    theClickCounter.innerText = "You clicked: " + cnt.toString() 
}
theButton.addEventListener('click', titleBigger);
theApp.appendChild(theButton);
theApp.appendChild(theClickCounter);
```
将`index.html`改为
```html
<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8"/>
      <title>Hello Web!</title>
      <link rel="stylesheet" href="index.css" type="text/css"/>
      <script type="text/javascript" src="index.js" async defer></script>
   </head>
   <body>
      <div id="app">
         <h1>Hello Web!</h1>
      </div>
   </body>
</html>
```
将`index.css`改为
```css
#app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: plum;
    color: blue;
    height: 100vh;
}

#app h1 {
    text-align: center;
    transition: 1s;
}

#app h1:hover {
    padding-top: 50vh;
    transform: rotateZ(1turn);
}
```
再[打开](#openidx)`index.html`，应该就能看到一个绿色的按钮了，点击它，`Hello Web!`将被放大！注意到这个过程是动态的，因为我们的HTML中原本没有那个按钮（按钮的HTML应该包含`<button>`，但是却没有。这是用JavaScript动态生成的，而非静态编码到HTML文档中的。而且点击数的统计也不是静态写在HTML中的，只有JS能做到这一点。深入学习JavaScript，你可以尝试制作交互性很强的Web页面了！

<div style="font-weight: bolder; color: rgba(163, 100, 44); font-family: serif; border: dotted pink">
如果你学习了JavaScript，可以不用着急过渡到<a href="Web3">level 3</a>，因为level 2 已经几乎是前端的一切了（除了Ajax）。JavaScript相关的知识非常丰富，你可以尝试学习<code>TypeScript</code>、<code>SCSS</code>、<code>BootStrap</code>、<code>Three.js</code>、<code>NodeJS/NPM</code>、<code>Webpack</code>、<code>Vue.js</code>等大量的JavaScript技术。
</div>

#### <div id="Web3"></div>level 3
<div style="text-align: center; font-size: 1.2em">Tags: <code>动态页面</code> <code>HTML5</code> <code>CSS3</code> <code>JavaScript</code><code>服务器后端</code> </div>

如果只用**HTML**、**CSS**、**JavaScript**的话，只能做出单机应用，无法创建出任何与用户注册登录等类似的任何联网应用，这就好像你去某个单机游戏的官网下载了游戏，接下来再也不需要网络服务了。通过架设服务器和后端服务，我们可以用JavaScript为形形色色的应用程序构建Web前端页面，包括在线多人网络游戏（如火线精英）、在线刷短视频（如抖音官网）、在线购物、各种在线工具、云计算、云存储等海量服务。

我们接下来做一个简单的Web表单，要求用户输入用户名和密码，然后将该数据发送给服务器（我们即将用`NodeJS`来编写这个服务器），若为新用户就将该用户发送来的数据保存在文件里，前端显示“注册成功”，否则就显示“欢迎回来”。

抛弃之前level 1、level 2中的成果，让我们现在新建一个`App`文件夹
```yaml
App
```
再创建两个文件夹`FrontEnd`和`BackEnd`
```yaml
App
   FrontEnd
   BackEnd
```
顾名思义，`FrontEnd`存放我们的浏览器前端代码文件，而`BackEnd`存放我们的后端服务器源代码。

我们先开发后端

在

<div style="font-weight: bolder; color: rgba(163, 100, 44); font-family: serif; border: dotted pink">注意，要想挑战本 Level 所需的基础知识水平范围可以很广泛。如果只是跟随本教程，那么至少需要懂<code>NodeJS</code>，但后端服务的构建可以是多种多样的，常见的包括
   <ul>
      <li>理论基础
         <ul>
            <li> 计算机网络</li>
            <li> HTTP/HTTPS </li>
            <li>异步编程</li>
         </ul>
      </li>
      <li>Web服务器
         <ul>
            <li>Apache</li>
            <li>Nginx</li>
            <li>Tomcat</li>
         </ul>
      </li>
      <li>Web框架
         <ul>
            <li>ASP.NET</li>
            <li>Django</li>
            <li>PHP</li>
         </ul>
      </li>
      <li>数据库
         <ul>
            <li>Mongodb</li>
            <li>MySQL</li>
            <li>NOSQL</li>
         </ul>
      </li>
      <li>Java
         <ul>
            <li>SpringBoot</li>
            <li>Hadoop</li>
         </ul>
      </li>
   </ul>
</div>

## 参考
建议从入门或高级指南学起，不要一开始就学终极指南
  - 入门指南
    - 菜鸟教程（完全免费）
      - [HTML](https://www.runoob.com/html/html-tutorial.html)
      - [CSS](https://www.runoob.com/css/css-tutorial.html)
      - [JavaScript](https://www.runoob.com/js/js-tutorial.html)
      - [PHP](https://www.runoob.com/php/php-tutorial.html)
      - [NodeJS](https://www.runoob.com/nodejs/nodejs-tutorial.html)
    - W3C School（需要花钱解锁高级内容）
      - [HTML](https://www.w3schools.com/html/default.asp)
      - [CSS](https://www.w3schools.com/css/default.asp)
      - [JavaScript](https://www.w3schools.com/js/default.asp)
      - [PHP](https://www.w3schools.com/js/default.asp)
  - 高级指南
    - MDN文档
      - [HTML](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
      - [CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
      - [JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
      - [HTTP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)
    - [PHP官网](https://www.php.net/)
  - 终极指南
    - Web规范（可能需翻墙，否则很慢）
      - [HTML & CSS](https://www.w3.org/standards/webdesign/htmlcss)
      - [JavaScript Web APIs](https://www.w3.org/standards/webdesign/script)
    - [EcmaScript规范](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
    - [HTTP RFC](https://www.rfc-editor.org/rfc/rfc2616)


## 附录
### <div id="editidx"></div>A. 编辑代码
编辑代码需要一个普通的文本编辑器，而非<s>`Word`</s>这种富文本编辑器。对与程序员来说，通常使用`IDE`（Integreted Developing Environment，集成开发环境）或各种编辑器，免费好用的当属[Visual Studio Code](https://code.visualstudio.com/)，它是跨平台的，所有系统都可用。其他的如[Sublime Text](https://www.sublimetext.com/)（跨平台）、[CotEditor](https://coteditor.com/)（MacOS），[WebStorm](https://www.jetbrains.com/webstorm/)（跨平台）、[vim](https://www.vim.org/)（MacOS、Linux）等。

### <div id="openidx"></div>B. 浏览器打开`index.html`

|操作系统|<div style="text-align: center">Windows<div>|<div style="text-align: center">MacOS</div>|<div style="text-align: center">Linux</div>|
|:-:|-|-|-|
|打开方式|有以下几种<ul><li>*文件资源管理器*直接**双击**文件</li><li>将文件**拖到***浏览器的图标*上</li><li>右击文件，在类似<kbd>打开方式</kbd>的选项里面，选择一个浏览器</li><li>终端打开步骤(Windows 98+)<ol><li>复制文件路径，为了方便阐述，我们设为变量$p$</li><li><kbd>Win</kbd> + <kbd>R</kbd> 快捷键，发现左下角出现的命令窗口</li><li>输入`cmd`，并回车</li><li>在打开的终端中输入<code>start “” $p$</code>（这里的$p$就是我们刚才复制的文件路径）</li><li>应该能从默认浏览器打开该文件了</li></ol></li></ul>|有以下几种<ul><li>打开`访达`，双击该文件，应该能在浏览器打开</li><li>打开`访达`，右击文件 &gt; 打开方式 &gt; 选择一个浏览器</li><li>终端打开步骤<ol><li>复制文件绝对路径，这里我们设为$p$</li><li>[打开终端](https://support.apple.com/zh-cn/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac#:~:text=%E6%88%91%E6%89%93%E5%BC%80%E2%80%9C%E7%BB%88%E7%AB%AF%E2%80%9D-,%E6%89%93%E5%BC%80%E2%80%9C%E7%BB%88%E7%AB%AF%E2%80%9D,%E7%84%B6%E5%90%8E%E8%BF%9E%E6%8C%89%E2%80%9C%E7%BB%88%E7%AB%AF%E2%80%9D%E3%80%82)</li><li>输入<code>open '$p$'</code>（注意在你复制的路径$p$之外用单引号括起）</li><li>应该能看到以默认浏览器打开了该`HTML`文件</li></ol></li></ul>|<ol><li>打开终端</li><li>输入 <code>xdg-open '$p$'</code>（其中$p$为`index.html`文件的路径）</li><li>应该能以默认浏览器打开</li></ol>|