# 底部导航

## 基础用法

```html
<footer class="fixed-bottom">
  <ul class="nav-list nav-list--bottom">
    <li class="nav-item active">
      <i class="iconfont item-icon">&#xe609;</i>
      <p class="item-txt">菜单一</p>
    </li>
    <li class="nav-item">
      <i class="iconfont item-icon">&#xe60b;</i>
      <p class="item-txt">菜单二</p>
      <span class="remind-circle"></span>
    </li>
    <li class="nav-item">
      <i class="iconfont item-icon">&#xe608;</i>
      <p class="item-txt">菜单三</p>
    </li>
    <li class="nav-item">
      <i class="iconfont item-icon">&#xe600;</i>
      <p class="item-txt">菜单四</p>
      <span class="remind-num">5</span>
    </li>
  </ul>
</footer>
```

::: warning 注意
当页面有底部导航的时候，需要在`class="page"`的`div`的`class`属性添加`page--has-footer`值。
:::

<simulator iframeSrc="https://shop.test.hsy884.com/dist/demo/nav.html" />