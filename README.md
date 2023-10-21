# 基于MDN文档学习Web技术

mdn地址:<a href="https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web">MDN</a>

1. 如何设置本地测试服务器
https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server

    <code>python -m http.server </code>


* 要运行Python服务器端代码，您需要使用Python网络框架。您可以通过阅读Django Web Framework（Python）来了解如何使用Django框架。Flask也是一个不错的选择（稍微轻一点）。要运行Flask，您需要首先安装 Python / PIP，然后使用pip3 install flask来安装 Flask。此时，您应该能够运行 Python Flask 示例python3 python-example.py，然后在您的浏览器中打开localhost:5000查看。

* 要运行 Node.js（JavaScript） 服务器端代码，您可以直接使用 Node 或选择构建在其上的框架。 Express 是一个不错的选择 - 请参阅Express Web Framework（Node.js / JavaScript）。

* 要运行 PHP 服务器端代码，您需要一个可以解释 PHP 的服务器设置。本地 PHP 测试的好选择是MAMP（Mac 和 Windows），AMPPS（Mac，Windows，Linux）和LAMP（Linux，Apache，MySQL 和 PHP / Python / Perl）。这些是完整的包，创建本地设置，允许您运行 Apache 服务器，PHP 和 MySQL 数据库。

##  网站应该使用什么结构？
    * index.html
    * images 文件夹
    * styles文件夹：css 代码
    * scripts 文件夹：包含所有jacascript代码


## 获取主机服务和域名
* 主机服务 在主机服务提供商的web服务器上租用文件空间。将网站的的文件上传到那里，然后服务器会提供web用户需求的内容。
* 域名 一个可以让人们访问的独有无二的地址。可以从域名注册商租界域名


# HTML 

## HTML头部

```
<!doctype html>
<html lang="zh-cn">
    <head>
        <meta charset="utf-8">
        <title>我的测试页面</title>
    </head>
    <body>
        <p>这是测试界面</p>
    </body>
</html> 
```

```mata``` 元素为网页添加元数据

## 创建超链接
超链接是互联网提供的最令人兴奋的创新之一，它们从一开始就一直是互联网的一个特性，使互联网成为互联的网络。超链接使我们能够将我们的文档链接到任何其他文档（或其他资源），也可以链接到文档的指定部分，我们可以在一个简单的网址上提供应用程序。几乎任何网络内容都可以转换为链接，点击（或激活）超链接将使网络浏览器转到另一个网址（URL）。

通过将文本或其他内容包裹在a元素内，并给它一个包含网址的 href 属性（也称为超文本引用或目标，它将包含一个网址）来创建一个基本链接。

块级链接
```
<a href="https://developer.mozilla.org/zh-CN/">
  <h1>MDN Web 文档</h1>
</a>
<p>自从 2005 年起，就开始记载包括 CSS、HTML、JavaScript 等网络技术。</p>
```

图片链接：
```
<a href="https://developer.mozilla.org/zh-CN/">
  <img src="mdn_logo.svg" alt="MDN Web 文档主页" />
</a>

```

使用title属性添加支持信息


文档片段：
超链接除了可以链接到文档外，也可以链接到 HTML 文档的特定部分（被称为文档片段）。要做到这一点，你必须首先给要链接到的元素分配一个 id 属性。

为了链接到那个特定的 id，要将它放在 URL 的末尾，并在前面包含井号（#）

```
<h2 id="Mailing_address">邮寄地址</h2>

<p>
  要提供意见和建议，请将信件邮寄至<a href="contacts.html#Mailing_address"
    >我们的地址</a
  >。
</p>

```

## 文本格式进阶
描述列表：
```
<dl>
  <dt>内心独白</dt>
  <dd>
    戏剧中，某个角色对自己的内心活动或感受进行念白表演，这些台词只面向观众，而其他角色不会听到。
  </dd>
  <dt>语言独白</dt>
  <dd>
    戏剧中，某个角色把自己的想法直接进行念白表演，观众和其他角色都可以听到。
  </dd>
  <dt>旁白</dt>
  <dd>
    戏剧中，为渲染幽默或戏剧性效果而进行的场景之外的补充注释念白，只面向观众，内容一般都是角色的感受、想法、以及一些背景信息等。
  </dd>
</dl>

```




# 文档与网站架构

## 文档的基本组成部分

页眉： 通常横跨于整个页面顶部有个大标题和/或 一个标志。这是网站的主要一般信息，通常存在于所有网页。

导航栏： 指向网站各个主要区段的超链接。通常用菜单按钮、链接或标签页表示。类似于标题栏，导航栏通常应在所有网站之间保持一致。

主内容：中心的大部分区域是当前网页大多数的独有内容，例如视频、文章、地图、新闻等。

侧边栏： 一些外围信息、链接、引用、广告等。

页脚： 横跨页面底部的狭长区域。


一个典型网站布局：
<img src="https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure/sample-website.png">

* ```<main>``` 存放每个页面独有的内容。每个页面上只能用一次 ```<main>```，且直接位于 ```<body>``` 中。最好不要把它嵌套进其他元素

* ```<article> ```包围的内容即一篇文章，与页面其他部分无关（比如一篇博文）。


# CSS

关联css文件：
```
<link rel="stylesheet" href="styles.css" />

```
根据元素位置确定样式：
```
li em {
  color: rebeccapurple;
}

```
根据状态确定样式：
```
a:link {
  color: pink;
}

a:visited {
  color: green;
}

```

选择器：
```
h1
a:link
.manythings
#onething
*
.box p
.box p:first-child
h1, h2, .intro


```


CSS 语言有一些规则来控制在发生冲突的情况下哪个选择器更强大。这些规则被称为层叠（cascade）和优先级（specificity）。在下面的代码块中，我们为 p 选择器定义了两条规则，但段落文本将是蓝色的。这是因为将段落文本设置为蓝色的声明在样式表的后面出现。后面的样式会替换样式表中较早出现的冲突样式。这就是层叠规则。


## css如何运行

浏览如何加载网页：
<img src="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/First_steps/How_CSS_works/rendering.svg">

## 选择器种类

类型、类和ID选择器
```
h1 {
}

.box {
}

#unique {
}


```

标签属性选择器：
```
a[title] {
}

a[href="https://example.com"]
{
}


```
伪类和伪元素：
```
a:hover {
}


```

运算符：
```
article > p {
}
```

## 层叠与继承
CSS 代表层叠样式表（Cascading Style Sheets），理解第一个词层叠（cascade）很重要——层叠的表现方式是理解 CSS 的关键。

在某些时候，在做一个项目过程中你会发现一些应该产生效果的样式没有生效。通常的原因是你创建了两个应用于同一个元素的规则。与层叠密切相关的概念是优先级（specificity），决定在发生冲突的时候应该使用哪条规则。

### 层叠
当应用两条同级别的规则到一个元素的时候，写在后面的就是实际使用的规则。

优先级：
浏览器是根据优先级来决定当多个规则有不同选择器对应相同的元素的时候需要使用哪个规则。它基本上是一个衡量选择器具体选择哪些区域的尺度：
* 一个元素选择器不是很具体，则会选择页面上该类型的所有元素，所以它的优先级就会低一些。
* 一个类选择器稍微具体点，则会选择该页面中有特定 class 属性值的元素，所以它的优先级就要高一点。


### 继承
继承也需要在上下文中去理解——一些设置在父元素上的 CSS 属性是可以被子元素继承的，有些则不能。

## 盒模型
在 CSS 中我们广泛地使用两种“盒子” —— 块级盒子 (block box) 和 内联盒子 (inline box)。

<img src="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model/box-model-devtools.png">

## CSS布局

正常布局流：
正常布局流（normal flow）是指在不对页面进行任何布局控制时，浏览器默认的 HTML 布局方式。

弹性盒子：
Flexbox 是 CSS 弹性盒子布局模块（Flexible Box Layout Module）的缩写，它被专门设计出来用于创建横向或是纵向的一维页面布局。


Grid布局：
Flexbox 用于设计横向或纵向的布局，而 Grid 布局则被设计用于同时在两个维度上把元素按行和列排列整齐。



浮动：
把一个元素“浮动”(float) 起来，会改变该元素本身和在正常布局流（normal flow）中跟随它的其他元素的行为。这一元素会浮动到左侧或右侧，并且从正常布局流 (normal flow) 中移除，这时候其他的周围内容就会在这个被设置浮动 (float) 的元素周围环绕。


定位技术：
定位 (positioning) 能够让我们把一个元素从它原本在正常布局流 (normal flow) 中应该在的位置移动到另一个位置。定位 (positioning) 并不是一种用来给你做主要页面布局的方式，它更像是让你去管理和微调页面中的一个特殊项的位置。

相对定位：相对定位 (relative positioning) 让你能够把一个正常布局流 (normal flow) 中的元素从它的默认位置按坐标进行相对移动。

绝对定位：绝对定位用于将元素移出正常布局流 (normal flow)，以坐标的形式相对于它的容器定位到 web 页面的任何位置，以创建复杂的布局。有趣的是，它经常被用于与相对定位和浮动的协同工作。

固定定位：固定定位 (fixed positioning) 同绝对定位 (absolute positioning) 一样，将元素从文档流 (document flow) 当中移出了。但是，定位的坐标不会应用于"容器"边框来计算元素的位置，而是会应用于视口 (viewport) 边框。


粘性定位：粘性定位 (sticky positioning) 是最后一种我们能够使用的定位方式。它将默认的静态定位 (static positioning) 和固定定位 (fixed positioning) 相混合。当一个元素被指定了position: sticky时，它会在正常布局流中滚动，直到它出现在了我们给它设定的相对于容器的位置，这时候它就会停止随滚动移动，就像它被应用了position: fixed一样。


表格布局：
一个<table>标签之所以能够像表格那样展示，是由于 css 默认给<table>标签设置了一组 table 布局属性。当这些属性被应用于排列非<table>元素时，这种用法被称为“使用 CSS 表格”。

多列布局：
多列布局模组给了我们 一种把内容按列排序的方式，就像文本在报纸上排列那样。由于在 web 内容里让你的用户在一个列上通过上下滚动来阅读两篇相关的文本是一种非常低效的方式，那么把内容排列成多列可能是一种有用的技术。
要把一个块转变成多列容器 (multicol container)，我们可以使用 column-count属性来告诉浏览器我们需要多少列，也可以使用column-width (en-US)来告诉浏览器以至少某个宽度的尽可能多的列来填充容器。


### 响应式设计：
随着人们使用的屏幕尺寸的种类越来越多，出现了响应式网页设计的概念（responsive web design，RWD），RWD 指的是允许 Web 页面适应不同屏幕宽度因素等，进行布局和外观的调整的一系列实践。




# JavaScript



## 异步JavaScript
异步编程技术使你的程序可以执行一个长期运行的任务的同时继续对其他事件做出反应而不必等待任务完成。

浏览器提供的许多功能可能需要很长的时间来完成。
* 使用fetch()发起HTTP请求
* 使用getuserMedia()访问用户的摄像头和麦克风
* 使用showOpenFilePicker()请求用户选择文件以供访问

回调：
事件处理程序是一种特殊类型的回调函数。而回调函数则是一个被传递到另一个函数中的会在适当的时候被调用的函数。


### 如何使用Promise
Promise是现代Javascript中异步编程的基础，是一个由异步函数返回的可以向我们指示当前操作所处状态的对象。在Promise返回给调用者的时候，操作往往还没有完成，但Promise对象可以让我们操作最终完成的时候对其进行处理。

Promise 术语：
* 待定（pending）:初始状态
* 已兑现（fulfilled）：操作成功完成
* 已拒绝（rejected）: 操作失败

async和await：
async关键字提供了一种更简单的方法来处理基于异步Promise的代码。在一个函数的开头添加async,就可以使其成为一个异步函数。

# 客户端webAPI
## web浏览器的重要部分
<img src="https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents/document-window-navigator.png"/>

* 窗口是载入网页的浏览器标签；在JavaScript中，它由window对象表示。
* 导航器在网络上出现时，代表浏览器的状态和身份。
* 文档是加载到窗口的实际页面。




# 理解客户端web端开发工具

## 客户端工具概述
### 现代工具概述
随着时间的推移，为网络编写软件已经变得越来越复杂。尽管“手工”编写 HTML、CSS 和 JavaScript 仍然是完全合理的，但现在有大量的工具可供开发人员使用，以加快构建 web 站点或应用程序的过程。

### 现代工具系统


## 客户端框架简介


# 服务器端网站编程
```
npm WARN deprecated core-js@2.6.12: core-js@<3.23.3 is no longer maintained and not recommended for usage
due to the number of issues. 
Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x 
even if nothing is polyfilled. Some versions have web compatibility issues. 
Please, upgrade your dependencies to the actual version of core-js.


使用以下方法解决
npm update -g  <package_name>  // 直接升级出现警示的那个依赖包

```




# Vue

```
初始化项目
vue  create <name> --packageManager=npm
运行：
npm run serve

```


vue的项目结构：
* package.json：该文件包含项目的依赖项列表，以及一些元数据和 eslint 配置。
* yarn.lock：如果你选择 yarn 作为你的包管理器，将生成此文件，其中包含项目所需的所有依赖项和子依赖项的列表。
* babel.config.js：这个是 Babel 的配置文件，可以在开发中使用 JavaScript 的新特性，并且将其转换为在生产环境中可以跨浏览器运行的旧语法代码。你也可以在这个里配置额外的 babel 插件。
* jsconfig.json：这是一份用于 Visual Studio Code 的配置文件，它为 VS Code 提供了关于项目结构的上下文信息，并帮助自动完成。
* public：这个目录包含一些在 Webpack 编译过程中没有加工处理过的文件（有一个例外：index.html 会有一些处理）。
  * favicon.ico：这个是项目的图标，当前就是一个 Vue 的 logo。
  * index.html：这是应用的模板文件，Vue 应用会通过这个 HTML 页面来运行，也可以通过 lodash 这种模板语法在这个文件里插值。

* src：这个是 Vue 应用的核心代码目录
  * main.js：这是应用的入口文件。目前它会初始化 Vue 应用并且制定将应用挂载到 index.html 文件中的哪个 HTML 元素上。通常还会做一些注册全局组件或者添额外的 Vue 库的操作。
  * App.vue：这是 Vue 应用的根节点组件，往下看可以了解更多关注 Vue 组件的信息。
  * components：这是用来存放自定义组件的目录，目前里面会有一个示例组件。
  * assets：这个目录用来存放像 CSS、图片这种静态资源，但是因为它们属于代码目录下，所以可以用 webpack 来操作和处理。意思就是你可以使用一些预处理比如 Sass/SCSS 或者 Stylus。


## App.vue
<template> 包含了所有的标记结构和组件的展示逻辑。

script:包含组件中所有的非显示逻辑，最重要的是，script 标签需要默认导出一个 JS 对象。该对象是你在本地注册组件、定义属性、处理本地状态、定义方法等的地方。在构建阶段这个包含 template 模板的对象会被处理和转换成为一个有 render() 函数的 Vue 组件

