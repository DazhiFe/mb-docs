# 底部评论栏

## 基础用法

- 引入脚本`common.js`，路径是`/Areas/Mobile/AngularTemplate/Resource/Script/`，如果有全局引入就不用再引入了
- 拷贝HTML代码到页面上

```html
<div class="mod-commentbar js-comment">
  <div class="mod-commentbar__field">
    <div class="mod-commentbar__ph">
      <i class="iconfont mod-commentbar__ph__icon">&#xe6b6;</i>
      <span class="mod-commentbar__ph__txt">写评论...</span>
    </div>
    <div class="mod-commentbar__input hide" contenteditable="true"></div>
  </div>
  <a class="mod-commentbar__btn hide" href="javascript:;">发布</a>
  <div class="mod-commentbar__action">
    <i class="mod-icon-zan"></i>
    <p class="mod-commentbar__action__txt">3</p>
  </div>
  <div class="mod-commentbar__action">
    <i class="iconfont mod-commentbar__action__icon">&#xe64b;</i>
  </div>
</div>
```

<simulator iframeSrc="https://shop.test.hsy884.com/dist/demo/comment.html" />