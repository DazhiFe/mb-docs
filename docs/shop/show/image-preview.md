# 图片预览

## 基础使用

```html
<div class="com-upload">
  <a class="com-upload__item" data-fancybox="group" href="http://placehold.it/80x80">
    <img class="com-upload__img" src="http://placehold.it/80x80" alt="">
  </a>
  <a class="com-upload__item" data-fancybox="group" href="http://placehold.it/80x80">
    <img class="com-upload__img" src="http://placehold.it/80x80" alt="">
  </a>
  <a class="com-upload__item" data-fancybox="group" href="http://placehold.it/80x80">
    <img class="com-upload__img" src="http://placehold.it/80x80" alt="">
  </a>
  <a class="com-upload__item" data-fancybox="group" href="http://placehold.it/80x80">
    <img class="com-upload__img" src="http://placehold.it/80x80" alt="">
  </a>
  <a class="com-upload__item" data-fancybox="group" href="http://placehold.it/80x80">
    <img class="com-upload__img" src="http://placehold.it/80x80" alt="">
  </a>
  <a class="com-upload__item" data-fancybox="group" href="http://placehold.it/80x80">
    <img class="com-upload__img" src="http://placehold.it/80x80" alt="">
  </a>
</div>
```

::: warning 注意
1. 确保页面引入了`jquery.fancybox.min.css`样式文件和`jquery.fancybox.min.js`脚本文件
2. `img`标签必须使用`a`标签包裹起来
3. `a`标签添加`data-fancybox="group"`，`group`名称可以随便取，但必须一致，才能正确分组
:::

<simulator iframeSrc="https://shop.test.hsy884.com/dist/demo/img-preview.html" />