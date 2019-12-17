# 上拉菜单

## 基础用法

- 拷贝以下html代码到页面上，通常是最外层，即`body`的子元素。

```html
<section class="panel-wrap" id="actionsheet">
  <div class="overlay" onclick="javascript:closeActionSheet('actionsheet');">
  </div>
  <section class="bottom-panel panel--actionsheet">
    <ul class="line-list line-list--center">
      <li class="line-item">
        拍照
      </li>
      <li class="line-item">
        从相册中选择
      </li>
    </ul>
    <ul class="line-list line-list--center">
      <li class="line-item" onclick="javascript:closeActionSheet('actionsheet');">
        取消
      </li>
    </ul>
  </section>
</section>
```

- 脚本方法

```js
// 打开上拉菜单，传id值
openActionSheet('actionsheet')

// 关闭上拉菜单，传id值
closeActionSheet('actionsheet')
```

<simulator iframeSrc="https://shop.test.hsy884.com/dist/demo/actionsheet.html" />