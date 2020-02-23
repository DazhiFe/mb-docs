# 弹出框

## 基础用法

- 拷贝以下html代码到页面上，通常是最外层，即`body`的子元素。

```html
<div class="dialog-wrap" id="dialog">
  <div class="overlay" onclick="javascript:closeDialog('dialog');"></div>
  <div class="dialog">
    <div class="dialog-bd">
      代码是写出来给人看的，附带能在机器上运行
    </div>
  </div>
</div>
```

## 带关闭按钮

```html
<div class="dialog-wrap" id="dialogHasClose">
  <div class="overlay"></div>
  <div class="dialog">
    <div class="dialog-bd">
      代码是写出来给人看的，附带能在机器上运行
    </div>
  </div>
  <!-- 关闭按钮 -->
  <a class="dialog-close" href="javascript:closeDialog('dialogHasClose');">
    <i class="iconfont">&#xe777;</i>
  </a>
</div>
```

## 其他弹出框样式

```html
<div class="dialog-wrap" id="dialogStyle2">
  <div class="overlay"></div>
  <div class="dialog dialog--style-2">
    <div class="dialog-bd">
      <h3 class="dialog-tle">活动规则</h3>
      <ul class="mod-infolist mt-lg">
        <li class="mod-infoitem" data-num="1">
          活动时间：2019-07-08 - 2019-07-20；
        </li>
        <li class="mod-infoitem" data-num="2">
          通过本活动页面邀请好友领取随机红包，单个好友通过链接注册并使用该红包后，您即可获得一笔现金奖励红包，金额随机（5-88元）；
        </li>
        <li class="mod-infoitem" data-num="3">
          本活动不与邀请有礼第4重礼同享。
        </li>
      </ul>
    </div>
    <i class="mod-icon-gold"></i>
  </div>
  <a class="dialog-close" href="javascript:closeDialog('dialogStyle2');">
    <i class="iconfont">&#xe777;</i>
  </a>
</div>
```

## 红包相关弹窗

### 红包

```html
<div class="dialog-wrap" id="dialog-hb">
  <div class="overlay"></div>
  <div class="dialog dialog--hb">
    <div class="dialog-bd">
      <h3 class="dialog-bd__tle">恭喜获得1个红包</h3>
      <p class="dialog-bd__txt">点击 “拆” 即可领取</p>
    </div>
    <div class="dialog-btn"><span class="dialog-btn__txt">拆</span></div>
  </div>
  <!-- 关闭按钮 -->
  <a class="dialog-close" href="javascript:closeDialog('dialog-hb');">
    <i class="iconfont">&#xe777;</i>
  </a>
</div>
```

### 红包-活动礼包

```html
<div class="dialog-wrap" id="dialog-hb-hdlb">
  <div class="overlay"></div>
  <div class="dialog dialog--hb">
    <h3 class="dialog-hb-tle">恭喜获得</h3>
    <div class="dialog-bd">
      <div class="gift-box">
        <i class="icon-giftbox"></i>
        <p class="gift-box__txt">活动礼包</p>
      </div>
    </div>
    <div class="dialog-btn dialog-btn--style-2"><span class="dialog-btn__txt">立即打开</span></div>
  </div>
  <!-- 关闭按钮 -->
  <a class="dialog-close" href="javascript:closeDialog('dialog-hb-hdlb');">
    <i class="iconfont">&#xe777;</i>
  </a>
</div>
```

### 红包-中奖结果

```html
<div class="dialog-wrap" id="dialog-hb-result">
  <div class="overlay" onclick="javascript:closeDialog('dialog-hb-result');"></div>
  <div class="dialog dialog--hb-result">
    <h3 class="dialog-hbres-tle">恭喜获得</h3>
    <div class="dialog-bd">
      <ul class="hb-coupon">
        <li class="hb-coupon__item">
          <span class="hb-coupon__item__num">8.5</span>折 <span>优惠券</span>
        </li>
        <li class="hb-coupon__item">
          <span class="hb-coupon__item__num">8.5</span>折 <span>优惠券</span>
        </li>
        <li class="hb-coupon__item">
          <span class="hb-coupon__item__num">8.5</span>折 <span>优惠券</span>
        </li>
      </ul>
    </div>
    <div class="dialog-btn"><span class="dialog-btn__txt">立即使用</span></div>
  </div>
</div>
```

- 脚本方法

```js
// 打开上拉菜单，传id值
openDialog('dialog')

// 关闭上拉菜单，传id值
closeDialog('dialog')
```

<simulator iframeSrc="https://shop.test.hsy884.com/dist/demo/dialog.html" />