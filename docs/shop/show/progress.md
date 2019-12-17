# 进度条

## 基础用法

```html
<div class="mod-progress">
  <div class="mod-progress__content">
    <div class="mod-progress__track">
      <div class="mod-progress__runway" style="width: 60%;"></div>
    </div>
  </div>
  <div class="mod-progress__txt">已秒60%</div>
</div>
```

## 主色调

进度条默认为`橙色`，通过给`class="mod-progress__runway"`添加`bg-primary`值，可以变成`主色调`风格。

```html
<div class="mod-progress">
  <div class="mod-progress__content">
    <div class="mod-progress__track">
      <div class="mod-progress__runway bg-primary" style="width: 60%;"></div>
    </div>
  </div>
  <div class="mod-progress__txt">已秒60%</div>
</div>
```

## 环形进度条

```html
<div class="circle-progress">
  <div class="circle-left">
    <div class="left-inner">
    </div>
  </div>
  <div class="circle-right">
    <div class="right-inner" style="-webkit-transform: rotate(180deg);transform: rotate(180deg);">
    </div>
  </div>
  <span class="progress-num">
    50%
  </span>
</div>
```

## 环形进度条(小号)

通过给`class`属性添加`circle-progress--sm`值可以使环形进度条尺寸变小。

```html
<div class="circle-progress circle-progress--sm">
  <div class="circle-left">
    <div class="left-inner" style="-webkit-transform: rotate(36deg);transform: rotate(36deg);">
    </div>
  </div>
  <div class="circle-right">
    <div class="right-inner" style="-webkit-transform: rotate(180deg);transform: rotate(180deg);">
    </div>
  </div>
  <span class="progress-num">
    60%
  </span>
</div>
```

::: warning 环形进度条角度换算说明
`0-50%`，设置`class="right-inner"`的`style="-webkit-transform:rotate();transform:rotate()"`；

`60-100%`，需要同时设置`class="left-inner"`的`style="-webkit-transform:rotate();transform:rotate()"`；

比如要设置`50%`，角度换算公式为：`180deg = 360 x 50%`，360保持不变；

简单理解：`36deg = 360 x 10%`，即`3.6deg = 1%`；
:::

<simulator iframeSrc="https://shop.test.hsy884.com/dist/demo/progress.html" />