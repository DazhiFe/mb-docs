# 弹出层

## 基础用法

- 拷贝以下html代码到页面上，通常是最外层，即`body`的子元素。

```html
<section class="slide-page" id="slide">
  <header class="header">
    <div class="header-left" onclick="javascript:closeSlidePage('slide');">
      <i class="icon-v-left header-icon"></i>
    </div>
    <h1 class="page-tt">弹出层标题</h1>
  </header>
  <!-- 头部 -->

  <div class="page">
    弹出层内容
  </div>
</section>
```

- 脚本方法

```js
// 打开弹出层，传id值
openSlidePage('slide')

// 关闭弹出层，传id值
closeSlidePage('slide')
```

<simulator iframeSrc="https://shop.test.hsy884.com/dist/demo/slide.html" />