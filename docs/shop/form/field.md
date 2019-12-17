# 输入框

## 基础用法

```html
<div class="form">
  <div class="form-item">
    <label class="item-label">普通文本框</label>
    <div class="item-field">
      <input class="f-text" type="text" placeholder="请输入xxx">
    </div>
  </div>

  <div class="form-item">
    <label class="item-label">密码框</label>
    <div class="item-field">
      <input class="f-text" type="password" placeholder="请输入xxx">
    </div>
  </div>

  <div class="form-item">
    <label class="item-label">下拉框</label>
    <div class="item-field">
      <select class="f-text">
        <option value="">选项1</option>
        <option value="">选项2</option>
        <option value="">选项3</option>
      </select>
    </div>
  </div>

  <div class="form-item">
    <label class="item-label">
      验证码
    </label>
    <div class="item-field">
      <input type="text" class="f-text" placeholder="请输入验证码">
    </div>
    <img class="img-captcha" src="http://placehold.it/80x43?text=3697" width="80"
    height="43" alt="">
  </div>

  <div class="form-item">
    <label class="item-label">
      右侧有按钮
    </label>
    <div class="item-field">
      <input type="text" class="f-text" placeholder="请输入验证码">
    </div>
    <span class="btn-primary btn-s mr-sm">按钮文本</span>
  </div>

  <div class="form-item">
    <label class="item-label">多行文本框</label>
    <div class="item-field">
      <textarea class="f-textarea f-textarea--no-bd" placeholder="请输入xxx"></textarea>
    </div>
  </div>
</div>
```

## 垂直排列

通过给`form-item`的`class`属性加上`form-item--vertical`值实现垂直排列。

```html
<div class="form">
  <div class="form-item form-item--vertical">
    <label class="item-label">普通文本框</label>
    <div class="item-field">
      <input class="f-text" type="text" placeholder="请输入xxx">
    </div>
  </div>
  <div class="form-item form-item--vertical">
    <label class="item-label">多行文本框</label>
    <div class="item-field">
      <textarea class="f-textarea f-textarea--no-bd" placeholder="请输入xxx"></textarea>
    </div>
  </div>
</div>
```

<simulator iframeSrc="https://shop.test.hsy884.com/dist/demo/field.html" />