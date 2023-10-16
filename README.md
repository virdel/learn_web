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


# JavaScript

## 异步JavaScript
异步编程技术使你的程序可以执行一个长期运行的任务的同时继续对其他事件做出反应而不必等待任务完成。

浏览器提供的许多功能可能需要很长的时间来完成。
* 使用fetch()发起HTTP请求
* 使用getuserMedia()访问用户的摄像头和麦克风
* 使用showOpenFilePicker()请求用户选择文件以供访问

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
