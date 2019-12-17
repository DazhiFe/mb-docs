# 搜索框

## 基础用法

```html
<div class="com-searchbar com-searchbar--has-pd">
  <div class="com-searchbar__block">
    <i class="icon-search com-searchbar__icon"></i>
    <div class="com-searchbar__field">
      <input
        class="com-searchbar__input"
        type="search"
        placeholder="请输入您想要搜索的内容"
      />
    </div>
  </div>
  <a class="com-searchbar__btn" href="javascript:;">搜索</a>
</div>
```

## 有背景颜色的情况

在有背景色的元素上放置搜索框，可以给`class`属性添加`com-searchbar--light`值，使搜索框变成浅色风格。

```html
<div class="com-searchbar com-searchbar--light com-searchbar--has-pd">
  <div class="com-searchbar__block">
    <i class="icon-search com-searchbar__icon"></i>
    <div class="com-searchbar__field">
      <input
        class="com-searchbar__input"
        type="search"
        placeholder="请输入您想要搜索的内容"
      />
    </div>
  </div>
  <a class="com-searchbar__btn" href="javascript:;">搜索</a>
</div>
```

<simulator iframeSrc="https://shop.test.hsy884.com/dist/demo/search.html" />