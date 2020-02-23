# 头部导航

## 基础用法

```html
<header class="header">
  <div class="header-left">
    <i class="header-icon icon-v-left"></i>
  </div>
  <h1 class="page-tt">标题过长会隐藏后面的内容啊哈哈哈哈</h1>
</header>
```

## 标题太长采用换行模式

`h1`标签的`class`属性值更改为`page-mutil-tt`。

```html
<header class="header">
  <div class="header-left">
    <i class="header-icon icon-v-left"></i>
  </div>
  <h1 class="page-mutil-tt">页面标题太长采用换行模式页面标题太长采用换行模式</h1>
</header>
```

## 大号标题，小号标题

```html
<header class="header">
  <div class="header-left">
    <i class="header-icon icon-v-left"></i>
  </div>
  <h1 class="page-tt">
    <span class="tt-l">大号标题</span>
    <span class="tt-s">小号标题</span>
  </h1>
</header>
```

## 左侧仅文字

```html
<header class="header">
  <div class="header-left">
    <span class="header-btn">返回</span>
  </div>
  <h1 class="page-tt">
    标题
  </h1>
</header>
```

## 左侧文字+图标

```html
<header class="header">
  <div class="header-left">
    <span class="header-mix">
      <i class="icon-v-left"></i>
      <span class="mix-txt">返回</span>
    </span>
  </div>
  <h1 class="page-tt">
    标题
  </h1>
</header>
```

## 右侧仅文字

```html
<header class="header">
  <div class="header-right">
    <span class="header-btn">分享</span>
  </div>
  <h1 class="page-tt">
    标题
  </h1>
</header>
```

## 头部透明

`class`属性添加`header--no-bg`值，适合用在有底色的背景上。

```html
<header class="header header--no-bg">
  <div class="header-left">
    <i class="header-icon icon-v-left"></i>
  </div>
  <h1 class="page-tt">
    标题
  </h1>
</header>
```

## 头部白色

`class`属性添加`header--bg-white`值。

```html
<header class="header header--bg-white">
  <div class="header-left">
    <i class="header-icon icon-v-left"></i>
  </div>
  <h1 class="page-tt">
    标题
  </h1>
</header>
```

::: warning 注意
当页面不需要头部导航的时候，需要在`class="page"`的`div`的`class`属性添加`page--no-header`值。
:::

<simulator iframeSrc="https://shop.test.hsy884.com/dist/demo/header.html" />