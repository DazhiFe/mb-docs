---
sidebar: auto
pageClass: custom-page-class
---

# HTML规范

## DOCTYPE声明

在页面开头使用这个简单的doctype来启用标准模式，使其在每个浏览器中尽可能一致的展现；

HTML文件必须加上DOCTYPE声明，并统一使用HTML5的文档声明：

```html
<!DOCTYPE html>
```


## lang属性

根据HTML5规范：

> 应在html标签加上lang属性。这会给语音工具和翻译工具帮助，告诉它们应该怎么去发音和翻译。


推荐使用属性值 `cmn-Hans-CN`（简体, 中国大陆），但是考虑浏览器和操作系统的兼容性，目前仍然使用 `zh-CN` 属性值。

```html
<html lang="zh-CN">
```


## 字符编码

通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式。

一般情况下统一使用 `UTF-8` 编码：

```html
<meta charset="UTF-8">
```

由于历史原因，有些业务可能会使用 `GBK` 编码：

```html
<meta charset="GBK">
```


## 元素及标签闭合

HTML元素共有以下5种：

- 空元素：area、base、br、col、command、embed、hr、img、input、keygen、link、meta、param、source、track、wbr
- 原始文本元素：script、style
- RCDATA元素：textarea、title
- 外来元素：来自MathML命名空间和SVG命名空间的元素。
- 常规元素：其他HTML允许的元素都称为常规元素。

元素标签的闭合应遵循以下原则：

- 原始文本元素、RCDATA元素以及常规元素都有一个开始标签来表示开始，一个结束标签来表示结束。
- [某些元素的开始和结束标签是可以省略的](http://www.w3.org/TR/html5/syntax.html#optional-tags)，如果规定标签不能被省略，那么就绝对不能省略它。
- 空元素只有一个开始标签，且不能为空元素设置结束标签。
- 外来元素可以有一个开始标签和配对的结束标签，或者只有一个自闭合的开始标签，且后者情况下该元素不能有结束标签。

### 团队约定

为了能让浏览器更好的解析代码以及能让代码具有更好的可读性，有如下约定：

- 所有具有开始标签和结束标签的元素都要加上起止标签，某些允许省略开始标签或和束标签的元素亦都要写上。
- 空元素标签都不加 `/` 字符

推荐：

```html
<div>
  <h1>我是h1标题</h1>
  <p>我是一段文字</p>
</div>

<br>
```

不推荐：

```html
<div>
  <h1>我是h1标题</h1>
  <p>我是一段文字
</div>

<br/>
```


## IE兼容模式

用 `<meta>` 标签可以指定页面应该用什么版本的IE来渲染；
如果你想要了解更多，请点击[这里](http://stackoverflow.com/questions/6771258/whats-the-difference-if-meta-http-equiv-x-ua-compatible-content-ie-edge-e)；
不同doctype在不同浏览器下会触发不同的渲染模式（[这篇文章](https://hsivonen.fi/doctype/)总结的很到位）。

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  </head>
  ...
</html>
```


## 书写风格

### HTML代码大小写

HTML标签名、类名、标签属性和大部分属性值统一用小写：

推荐：

```html
<div class="demo"></div>
```

不推荐：

```html
<div class="DEMO"></div>
	
<DIV CLASS="DEMO"></DIV>
```

HTML文本、CDATA、JavaScript、meta标签某些属性等内容可大小写混合：

```html
<!-- 优先使用 IE 最新版本和 Chrome Frame -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>

<!-- HTML文本内容 -->
<h1>I AM WHAT I AM </h1>

<!-- JavaScript 内容 -->
<script type="text/javascript">
	var demoName = 'demoName';
	...
</script>
	
<!-- CDATA 内容 -->
<script type="text/javascript"><![CDATA[
...
]]></script>
```

### 引入CSS、JS

根据HTML5规范，通常在引入CSS和JS时不需要指明 `type` ，因为 `text/css` 和 `text/javascript` 分别是它们的默认值。

```html
<link rel="stylesheet" href="demo.css">

<style>
  ...
</style>

<script src="demo.js"></script>

<script>
  ...
</script>
```

### 元素属性

元素属性值使用 `双引号` 语法，不要使用单引号。

推荐：

```html
<input type="text">
```

不推荐：

```html
<input type=text>

<input type='text'>
```

#### boolean属性

boolean属性指不需要声明取值的属性，XHTML需要每个属性声明取值，但是HTML5并不需要；
更多内容可以参考 [WhatWG section on boolean attributes](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-microsyntaxes.html#boolean-attributes)：

> boolean属性的存在表示取值为true，不存在则表示取值为false


```html
<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
  <option value="1" selected>1</option>
</select>
```

### 特殊字符的引用

文本可以和字符引用混合出现。这种方法可以用来转义在文本中不能合法出现的字符。

在HTML中不能使用小于号 `<` 和大于号 `>` 特殊字符，浏览器会将它们作为标签解析，如果正确显示，在HTML源码中使用字符实体：

推荐：

```html
<a href="#">more&gt;&gt;</a>
```

不推荐：

```html
<a href="#">more>></a>
```

更多关于符号引用参考：[#Character references](http://www.w3.org/TR/html5/syntax.html#character-references)

### 代码缩进

统一使用 `两个` 空格进行代码缩进。

### 代码嵌套

元素嵌套规范，每个块级元素独立一行，内联元素可选。

推荐：

```html
<div>
  <p></p>
  <h1></h1>
</div>

<p><span></span><span></span></p>
```

不推荐：

```html
<div>
	<h1></h1><p></p>
</div>	
<p> 
	<span></span>
	<span></span>
</p>
```

段落元素和标题元素只能嵌套内联元素。

推荐：

```html
<h1><span></span></h1>
<p><span></span></p>
```

不推荐：

```html
<h1><div></div></h1>
<p><div></div></p>
```


## 注释规范

标准写法：

```html
<!--Comment Text-->
```

错误写法：

```html
<!-->The Wrong Comment Text-->

<!--->The Wrong Comment Text-->

<!--The--Wrong--Comment Text-->

<!--The Wrong Comment Text--->
```

### 团队约定

#### 单行注释

一般用于简单的描述，如某些状态描述、属性描述等。

注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行。

推荐：

```html
<!-- Comment Text -->
<div>...</div>
```

不推荐：

```html
<div>...</div><!-- Comment Text -->	
	
<div><!-- Comment Text -->
	...
</div>
```

#### 模块注释

一般用于描述模块的名称以及模块开始的位置和结束的位置。

注释内容前后各一个空格字符，`<!-- S Comment Text -->` 表示模块开始，`<!-- E Comment Text -->` 表示模块结束，模块与模块之间相隔一行。

推荐：

```html
<!-- S Comment Text A -->	
<div class="mod_a">
  ...
</div>
<!-- E Comment Text A -->
	
<!-- S Comment Text B -->	
<div class="mod_b">
  ...
</div>
<!-- E Comment Text B -->
```

不推荐：

```html
<!-- S Comment Text A -->
<div class="mod_a">
	...
</div>
<!-- E Comment Text A -->
<!-- S Comment Text B -->	
<div class="mod_b">
	...
</div>
<!-- E Comment Text B -->
```

#### 嵌套模块注释

当模块注释内再出现模块注释的时候，为了突出主要模块，嵌套模块不再使用：

```html
<!-- S Comment Text -->
<!-- E Comment Text -->
```

而改用：

```html
<!-- /Comment Text -->
```

注释写在模块结尾标签底部，单独一行。

```html
<!-- S Comment Text A -->
<div class="mod_a">
		
  <div class="mod_b">
    ...
  </div>
  <!-- /mod_b -->

  <div class="mod_c">
    ...
  </div>
  <!-- /mod_c -->
		
</div>
<!-- E Comment Text A -->
```

## 文件模板

HTML模板指的是团队使用的初始化HTML文件，里面会根据不同的平台而采用不一样的配置，一般主要不同的设置就是 `<meta>` 标签的设置，以下是移动端和PC的HTML模板。

### HTML5标准模板

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>HTML5标准模版</title>
</head>
<body>
	
</body>
</html>
```

### 移动端

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Cache-Control" content="no-siteapp">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no">
  <meta name="format-detection" content="telephone=no, email=no">
  <meta name="renderer" content="webkit">
  <meta name="keywords" content="">
  <meta name="description" content="">
  <title>移动端HTML模版</title>

  <!-- S DNS预解析 -->
  <link rel="dns-prefetch" href="">
  <!-- E DNS预解析 -->

  <!-- S 样式 --> 
  <link rel="stylesheet" href="styles/xxxplugin.css" >
  <!-- /第三方插件 -->

  <link rel="stylesheet" href="styles/xxxcustom.css" >
  <!-- /自定义 -->
  <!-- E 样式 -->
  
</head>
<body>

</body>
</html>
```


### PC端

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="keywords" content="your keywords">
  <meta name="description" content="your description">
  <meta name="author" content="author,email address">
  <meta name="robots" content="index,follow">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
  <meta name="renderer" content="ie-stand">
  <title>PC端HTML模版</title>

  <!-- S DNS预解析 --> 
  <link rel="dns-prefetch" href="">
  <!-- E DNS预解析 --> 

  <!-- S 样式 --> 
  <link rel="stylesheet" href="styles/xxxplugin.css" >
  <!-- /第三方插件 -->

  <link rel="stylesheet" href="styles/xxxcustom.css" >
  <!-- /自定义 -->
  
  <!-- E 样式 -->
</head>
<body>

</body>
</html>
```


## 属性顺序

属性应该按照特定的顺序出现以保证易读性；

- `class`
- `id`
- `name`
- `data-*`
- `src`, `for`, `type`, `href`, `value` , `max-length`, `max`, `min`, `pattern`
- `placeholder`, `title`, `alt`
- `aria-*`, `role`
- `required`, `readonly`, `disabled`

`class` 是为高可复用组件设计的，所以应该出在第一位；
`id` 更加具体且应该尽量少使用，所以将它放在第二位；

## JS生成标签

在JS文件中生成标签让内容变得更难查找，更难编辑，性能更差。应该尽量避免这种情况的出现。


## 实用高于完美

尽量遵循HTML标准和语义，但是不应该以浪费实用性作为代价；
任何时候都要用尽量小的复杂度和尽量少的标签来解决问题。