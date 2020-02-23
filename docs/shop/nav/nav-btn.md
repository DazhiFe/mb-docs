# 纯按钮导航

## 基础用法

默认固定在页面顶部。

```html
<div class="mod-nav mod-nav--top">
  <div class="mod-nav__left">
    <a class="mod-nav__btn" href="#">
      <span class="mod-nav__btn__icon">
        <i class="icon-v-left"></i>
      </span>
    </a>
  </div>
  <div class="mod-nav__right">
    <a class="mod-nav__btn" href="#">
      <span class="mod-nav__btn__icon">
        <i class="iconfont">&#xe654;</i>
      </span>
    </a>
  </div>
</div>
```

## 显示在右侧

`class`属性添加`mod-nav--rc`值即可。

```html
<div class="mod-nav mod-nav--rc">
  <a class="mod-nav__btn" href="javascript:;">
    <span class="mod-nav__btn__icon">
      <i class="iconfont">&#xe833;</i>
    </span>
    <p class="mod-nav__btn__txt">666</p>
  </a>

  <a class="mod-nav__btn" href="javascript:;">
    <span class="mod-nav__btn__icon mod-nav__btn__icon--no-bg">
      <i class="iconfont">&#xe832;</i>
    </span>
    <p class="mod-nav__btn__txt">666</p>
  </a>
</div>
```

## 按钮无透明底色

默认按钮是带黑色半透明的底色的，如果不需要底色，在`class="mod-nav__btn__icon"`加上`mod-nav__btn__icon--no-bg`值即可。

<simulator iframeSrc="https://shop.test.hsy884.com/dist/demo/nav-btn.html" />