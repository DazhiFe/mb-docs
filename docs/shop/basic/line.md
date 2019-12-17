# 线性列表

## 单行文字列表

```html
<ul class="line-list">
  <li class="line-item">北京</li>
  <li class="line-item">上海</li>
  <li class="line-item">广州</li>
</ul>
```

## 单行文字居中列表

通过给`class`属性添加`line-list--center`值实现。

```html
<ul class="line-list line-list--center">
  <li class="line-item">北京</li>
  <li class="line-item">上海</li>
  <li class="line-item">广州</li>
</ul>
```

## 列表选择

给`class`属性添加`line-list--select`值，列表项给`class`属性添加`active`值可以设置选中样式。

```html
<ul class="line-list line-list--select">
  <li class="line-item">北京</li>
  <li class="line-item active">上海</li>
  <li class="line-item">广州</li>
</ul>
```

## 列表缩进

通过给`class`属性添加`line-list--indent`值实现。

```html
<ul class="line-list line-list--indent">
  <li class="line-item">北京</li>
  <li class="line-item">上海</li>
  <li class="line-item">广州</li>
</ul>
```

## 列表带箭头

通过给`class`属性添加`line-list--after-v`值实现。

```html
<ul class="line-list line-list--after-v">
  <li class="line-item">北京</li>
  <li class="line-item">上海</li>
  <li class="line-item">广州</li>
</ul>
```

## 弹性列表

通过给`class`属性添加`line-list--flex`值实现。

```html
<ul class="line-list line-list--flex">
  <li class="line-item">
    <p class="item-tt">标题文字</p>
    <span class="item-append">说明文字</span>
  </li>
  <li class="line-item">
    <i class="item-icon icon-info"></i>
    <p class="item-tt">标题文字</p>
    <span class="item-append">带icon</span>
  </li>
  <li class="line-item">
    <p class="item-tt">标题文字</p>
    <span class="item-append">带箭头</span>
    <i class="icon-v-right"></i>
  </li>
  <li class="line-item">
    <p class="item-tt">标题文字(带数字标)</p>
    <span class="remind-num">99</span>
    <i class="icon-v-right"></i>
  </li>
  <li class="line-item">
    <div class="item-bd">
      <h3 class="bd-tt">标题文字</h3>
      <p class="bd-txt">描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本</p>
    </div>
    <i class="icon-v-right"></i>
  </li>
  <li class="line-item">
    <div class="item-bd">
      <h3 class="bd-tt">标题文字</h3>
      <p class="bd-txt toe">描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本</p>
    </div>
    <i class="icon-v-right"></i>
  </li>
  <li class="line-item">
    <img src="http://placehold.it/40?text=40" alt="" class="item-img">
    <div class="item-bd">
      <h3 class="bd-tt">标题文字</h3>
      <p class="bd-txt toe">描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本</p>
    </div>
    <i class="icon-v-right"></i>
  </li>
</ul>
```

<simulator iframeSrc="https://shop.test.hsy884.com/dist/demo/line.html" />