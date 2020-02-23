# 下拉菜单

## 基础用法

- 引入脚本`common.js`，路径是`/Areas/Mobile/AngularTemplate/Resource/Script/`，如果有全局引入就不用再引入了
- 拷贝HTML代码到页面上

```html
<div class="com-dropdown js-com-dropdown">
  <div class="com-dropdown__tle">
    <span class="com-dropdown__txt">件[1件12个]</span>
    <i class="com-dropdown__icon iconfont">&#xe6a9;</i>
  </div>
  <div class="com-dropdown__content">
    <div class="com-dropdown__item">件[1件12个]</div>
    <div class="com-dropdown__item">件[1件24个]</div>
    <div class="com-dropdown__item">件[1件36个]</div>
  </div>
</div>
```

<simulator iframeSrc="https://shop.test.hsy884.com/dist/demo/dropdown.html" />