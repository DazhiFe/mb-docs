# 按钮

## 按钮类型

支持`default`、`primary`、`stress`、`danger`、`success`、`dark`五种类型，默认为`default`。

```html
<a class="btn" href="#">默认按钮</a>
<a class="btn-primary" href="#">主要按钮</a>
<a class="btn-stress" href="#">警告按钮</a>
<a class="btn-danger" href="#">危险按钮</a>
<a class="btn-success" href="#">成功按钮</a>
<a class="btn-dark" href="#">黑色按钮</a>
```

## 线框按钮

支持`主题色` 、`白色` 两种类型，默认为`主题色`，背景颜色为透明。

```html
<a class="btn-outline" href="#">主题色线框按钮</a>
<a class="btn-outline btn-outline--white" href="#">白色线框按钮</a>
```

## 禁用状态

通过给`class`属性添加`disabled`值来禁用按钮，禁用状态下按钮不可点击。

```html
<a class="btn-primary disabled" href="#">禁用状态</a>
```

## 按钮形状

通过给`class`属性添加`btn-no-radius`设置方形按钮，通过`btn-round`设置圆形按钮。

```html
<a class="btn-primary btn-no-radius" href="#">方形按钮</a>
<a class="btn-primary btn-round" href="#">圆形按钮</a>
```

## 按钮尺寸

支持`normal`、`s`、`xs`、`lg`四种尺寸，默认为`normal`。

```html
<a class="btn-primary" href="#">普通按钮</a>
<a class="btn-primary btn-s" href="#">小型按钮</a>
<a class="btn-primary btn-xs" href="#">迷你按钮</a>
<a class="btn-primary btn-lg" href="#">大号按钮</a>
```

如果需要按钮宽度可以`100%`显示，给`class`属性添加`full-width`值。

```html
<a class="btn-primary full-width" href="#">按钮100%显示</a>
```

<simulator iframeSrc="https://shop.test.hsy884.com/dist/demo/btn.html" />