# 单选框

## 基础用法

```html
<label class="label-radio">
  <input type="radio" checked />
  <i class="icon-radio"></i>
  <span>单选框</span>
</label>
```

## 禁用状态

通过给`class`属性添加`disabled`值可以禁用单选框。

```html
<label class="label-radio disabled">
  <input type="radio" checked />
  <i class="icon-radio"></i>
  <span>单选框</span>
</label>
```

## 单选框组

用`class="com-radio com-radio--group"`的`div`把所有单选框包裹起来即可。

记得给`type="radio"`加上`name`值。

```html
<div class="com-radio com-radio--group">
  <label class="label-radio">
    <input type="radio" checked name="r1" />
    <i class="icon-radio"></i>
    <span>单选框1</span>
  </label>
  <label class="label-radio">
    <input type="radio" name="r1" />
    <i class="icon-radio"></i>
    <span>单选框2</span>
  </label>
</div>
```

## 单选框组(行内显示)

用`class="com-radio com-radio--group-inline"`的`div`把所有单选框包裹起来即可。

记得给`type="radio"`加上`name`值。

```html
<div class="com-radio com-radio--group-inline">
  <label class="label-radio">
    <input type="radio" checked name="r2" />
    <i class="icon-radio"></i>
    <span>单选框1</span>
  </label>
  <label class="label-radio">
    <input type="radio" name="r2" />
    <i class="icon-radio"></i>
    <span>单选框2</span>
  </label>
</div>
```

<simulator iframeSrc="https://shop.test.hsy884.com/dist/demo/radio.html" />