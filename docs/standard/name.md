---
sidebar: auto
pageClass: custom-page-class
---

# 命名规范

## 项目命名

以字母开头而不是数字；
全部采用 `小写` 方式， 以 `下划线` 分隔且不带其他标点符号。

例：

```
my_project_name
```


## 目录命名

参照项目命名规则；
有复数结构时，要采用复数命名法。

例：

```
scripts, styles, images, data_models
```


## HTML文件命名

参照项目命名规则。

例：

```
error_report.html
```


## CSS,SCSS文件命名

参照项目命名规则。

例：

```
retina_sprites.scss
```


## JS文件命名

参照项目命名规则。

例：

```
account_model.js
```


## 图片命名

### 命名顺序

图片命名建议以以下顺序命名：

****图片业务（可选） +（mod_）图片功能类别（必选）+ 图片模块名称（可选） + 图片精度（可选）****

图片业务：

- pp_：拍拍
- wx_：微信
- sq_：手Q
- jd_：京东商城
- …

图片功能类别：

- mod_：是否公共，可选
- icon：模块类固化的图标
- logo：LOGO类
- spr：单页面各种元素合并集合
- btn：按钮
- bg：可平铺或者大背景
- …

图片模块名称：

- goodslist：商品列表
- goodsinfo：商品信息
- userava tar：用户头像
- …

图片精度：

- 普清：@1x
- Retina：@2x | @3x
- …

如下面例子：

```
公共模块：
wx_mod_btn_goodlist@2x.png
wx_mod_btn_goodlist.png
mod_btn_goodlist.png 

非公共模块：
wx_btn_goodlist@2x.png
wx_btn_goodlist.png
btn_goodlist.png
```

## ClassName命名

ClassName的命名应该尽量精短、明确，必须以**字母开头命名**，且**全部字母为小写**
**

### 命名规范

遵循 `BEM` 命名规范，具体用法参考以下文章：

[https://github.com/woai30231/webDevDetails/tree/master/15](https://github.com/woai30231/webDevDetails/tree/master/15)

### 命名规则

全站公共样式：以 `com-` 开头

全站公共布局：以 `lay` 开头

### 常用命名推荐

**注意**：ad、banner、gg、guanggao 等有机会和广告挂勾的字眠不建议直接用来做ClassName，因为有些浏览器插件（Chrome的广告拦截插件等）会直接过滤这些类名，因此

```html
<div class="ad"></div>
```

这种广告的英文或拼音类名不应该出现

另外，**敏感不和谐字眼**也不应该出现，如：

| <div class="fuck"></div><div class="jer"></div><div class="sm"></div><div class="gcd"></div> <div class="ass"></div> <div class="KMT"></div> ... |
| :--- |

| ClassName              | 含义                                     |
| :--------------------- | :--------------------------------------- |
| about                  | 关于                                     |
| account                | 账户                                     |
| arrow                  | 箭头图标                                 |
| article                | 文章                                     |
| aside                  | 边栏                                     |
| audio                  | 音频                                     |
| avatar                 | 头像                                     |
| bg,background          | 背景                                     |
| bar                    | 栏（工具类）                             |
| branding               | 品牌化                                   |
| crumb,breadcrumbs      | 面包屑                                   |
| btn,button             | 按钮                                     |
| caption                | 标题，说明                               |
| category               | 分类                                     |
| chart                  | 图表                                     |
| clearfix               | 清除浮动                                 |
| close                  | 关闭                                     |
| col,column             | 列                                       |
| comment                | 评论                                     |
| community              | 社区                                     |
| container              | 容器                                     |
| content                | 内容                                     |
| copyright              | 版权                                     |
| current                | 当前态，选中态                           |
| default                | 默认                                     |
| description            | 描述                                     |
| details                | 细节                                     |
| disabled               | 不可用                                   |
| entry                  | 文章，博文                               |
| error                  | 错误                                     |
| even                   | 偶数，常用于多行列表或表格中             |
| fail                   | 失败（提示）                             |
| feature                | 专题                                     |
| fewer                  | 收起                                     |
| field                  | 用于表单的输入区域                       |
| figure                 | 图                                       |
| filter                 | 筛选                                     |
| first                  | 第一个，常用于列表中                     |
| footer                 | 页脚                                     |
| forum                  | 论坛                                     |
| gallery                | 画廊                                     |
| group                  | 模块，清除浮动                           |
| header                 | 页头                                     |
| help                   | 帮助                                     |
| hide                   | 隐藏                                     |
| hightlight             | 高亮                                     |
| home                   | 主页                                     |
| icon                   | 图标                                     |
| info,information       | 信息                                     |
| last                   | 最后一个，常用于列表中                   |
| links                  | 链接                                     |
| login                  | 登录                                     |
| logout                 | 退出                                     |
| logo                   | 标志                                     |
| main                   | 主体                                     |
| menu                   | 菜单                                     |
| meta                   | 作者、更新时间等信息栏，一般位于标题之下 |
| module                 | 模块                                     |
| more                   | 更多（展开）                             |
| msg,message            | 消息                                     |
| nav,navigation         | 导航                                     |
| next                   | 下一页                                   |
| nub                    | 小块                                     |
| odd                    | 奇数，常用于多行列表或表格中             |
| off                    | 鼠标离开                                 |
| on                     | 鼠标移过                                 |
| output                 | 输出                                     |
| pagination             | 分页                                     |
| pop,popup              | 弹窗                                     |
| preview                | 预览                                     |
| previous               | 上一页                                   |
| primary                | 主要                                     |
| progress               | 进度条                                   |
| promotion              | 促销                                     |
| rcommd,recommendations | 推荐                                     |
| reg,register           | 注册                                     |
| save                   | 保存                                     |
| search                 | 搜索                                     |
| secondary              | 次要                                     |
| section                | 区块                                     |
| selected               | 已选                                     |
| share                  | 分享                                     |
| show                   | 显示                                     |
| sidebar                | 边栏，侧栏                               |
| slide                  | 幻灯片，图片切换                         |
| sort                   | 排序                                     |
| sub                    | 次级的，子级的                           |
| submit                 | 提交                                     |
| subscribe              | 订阅                                     |
| subtitle               | 副标题                                   |
| success                | 成功（提示）                             |
| summary                | 摘要                                     |
| tab                    | 标签页                                   |
| table                  | 表格                                     |
| txt,text               | 文本                                     |
| thumbnail              | 缩略图                                   |
| time                   | 时间                                     |
| tips                   | 提示                                     |
| title                  | 标题                                     |
| video                  | 视频                                     |
| wrap                   | 容器，包，一般用于最外层                 |
| wrapper                | 容器，包，一般用于最外层                 |

- 布局类：header, footer, container, main, content, aside, page, section

- 包裹类：wrap, inner

- 区块类：region, block, box

- 结构类：hd, bd, ft, top, bottom, left, right, middle, col, row, grid, span

- 列表类：list, item, field

- 主次类：primary, secondary, sub, minor

- 大小类：s, m, l, xl, large, small

- 状态类：active, current, checked, hover, fail, success, warn, error, on, off

- 导航类：nav, prev, next, breadcrumb, forward, back, indicator, paging, first, last

- 交互类：tips, alert, modal, pop, panel, tabs, accordion, slide, scroll, overlay,

- 星级类：rate, star

- 分割类：group, seperate, divider

- 等分类：full, half, third, quarter

- 表格类：table, tr, td, cell, row

- 图片类：img, thumbnail, original, album, gallery

- 语言类：cn, en

- 论坛类：forum, bbs, topic, post

- 方向类：up, down, left, right

- 其他语义类：btn, close, ok, cancel, switch; link, title, info, intro, more, icon; form, label, search, contact, phone, date, email, user; view, loading...

