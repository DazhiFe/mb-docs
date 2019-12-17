# 复选框

## 基础用法

```html
<label class="label-checkbox">
  <input type="checkbox" />
  <i class="icon-checkbox"></i>
  <span>复选框</span>
</label>
```

## 禁用状态

通过给`class`属性添加`disabled`值可以禁用复选框。

```html
<label class="label-checkbox disabled">
  <input type="checkbox" />
  <i class="icon-checkbox"></i>
  <span>复选框</span>
</label>
```

## 圆形复选框

通过给`icon-checkbox`的`class`属性添加`icon-checkbox--round`值可以使复选框的形状变成圆形。

```html
<label class="label-checkbox">
  <input type="checkbox" />
  <i class="icon-checkbox icon-checkbox--round"></i>
  <span>复选框</span>
</label>
```

## 复选框组

用`class="com-checkbox com-checkbox--group"`的`div`把所有复选框包裹起来即可。

记得给`type="checkbox"`加上`name`值。

```html
<div class="com-checkbox com-checkbox--group">
  <label class="label-checkbox">
    <input type="checkbox" name="c1" />
    <i class="icon-checkbox"></i>
    <span>复选框1</span>
  </label>
  <label class="label-checkbox">
    <input type="checkbox" name="c1" />
    <i class="icon-checkbox"></i>
    <span>复选框2</span>
  </label>
</div>
```

## 复选框组(行内显示)

用`class="com-checkbox com-checkbox--group com-checkbox--inline"`的`div`把所有复选框包裹起来即可。

记得给`type="checkbox"`加上`name`值。

```html
<div class="com-checkbox com-checkbox--group com-checkbox--inline">
  <label class="label-checkbox">
    <input type="checkbox" name="c2" />
    <i class="icon-checkbox"></i>
    <span>复选框1</span>
  </label>
  <label class="label-checkbox">
    <input type="checkbox" name="c2" />
    <i class="icon-checkbox"></i>
    <span>复选框2</span>
  </label>
</div>
```

## 复选框在右边

用`class="com-checkbox com-checkbox--group com-checkbox--sb"`的`div`把所有复选框包裹起来即可。

记得给`type="checkbox"`加上`name`值。

```html
<div class="com-checkbox com-checkbox--group com-checkbox--sb">
  <label class="label-checkbox">
    <input type="checkbox" name="c2" />
    <i class="icon-checkbox"></i>
    <span>复选框1</span>
  </label>
  <label class="label-checkbox">
    <input type="checkbox" name="c2" />
    <i class="icon-checkbox"></i>
    <span>复选框2</span>
  </label>
</div>
```

<simulator iframeSrc="https://shop.test.hsy884.com/dist/demo/checkbox.html" />