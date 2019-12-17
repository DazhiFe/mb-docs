/**
 * @desc 配置文件
 * @author dazhi
 * @date 2019-12-09
 */

module.exports = {
  // 配置外部依赖
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
    // ['link', { rel: 'stylesheet', href: 'https://shop.test.hsy884.com/dist/css/component.css' }],
    // ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    // ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }]
    // ['script', { src: '/js/resize.js' }]
  ],
  // output: {
  //   globalObject: 'this'
  // },
  // 配置插件
  plugins: [
    // 返回顶部
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
    // 代码演示
    'demo-block'
  ],
  // 标题
  title: '好实用移动端UI组件库',
  /**
   * 基础路径
   * 部署站点的基础路径，如果你想让你的网站部署到一个子路径下，你将需要设置它。
   * 如 GitHub pages，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"，它的值应当总是以斜杠开始，并以斜杠结束。
   */
  base: '/mb-docs/',
  // 主题配置
  themeConfig: {
    logo: '/images/logo2.png',
    // 导航栏配置
    // nav: [
    //   {
    //     text: '开发文档',
    //     items: [
    //       {
    //         text: 'shop手机端',
    //         link: '/shop/basic/button'
    //       },
    //       {
    //         text: 'MBUI',
    //         link: '/mbui/'
    //       }
    //     ]
    //   }
    // ],
    // 侧边栏配置
    sidebar: {
      '/shop/': [
        // '',
        {
          title: '基础组件',
          children: [
            {
              title: '按钮',
              path: 'basic/button'
            },
            {
              title: '线性列表',
              path: 'basic/line'
            },
            {
              title: '媒体对象',
              path: 'basic/media'
            }
          ],
          collapsable: false
        },
        {
          title: '表单组件',
          children: [
            {
              title: '输入框',
              path: 'form/field'
            },
            {
              title: '复选框',
              path: 'form/checkbox'
            },
            {
              title: '单选框',
              path: 'form/radio'
            },
            {
              title: '开关',
              path: 'form/switch'
            },
            {
              title: '搜索框',
              path: 'form/search'
            }
          ],
          collapsable: false
        },
        {
          title: '反馈组件',
          children: [
            {
              title: '上拉菜单',
              path: 'feedback/actionsheet'
            },
            {
              title: '弹出框',
              path: 'feedback/dialog'
            },
            {
              title: '遮罩层',
              path: 'feedback/overlay'
            },
            {
              title: '弹出层',
              path: 'feedback/slide'
            }
          ],
          collapsable: false
        },
        {
          title: '展示组件',
          children: [
            {
              title: '进度条',
              path: 'show/progress'
            },
            {
              title: '图片预览',
              path: 'show/image-preview'
            }
          ],
          collapsable: false
        },
        {
          title: '导航组件',
          children: [
            {
              title: '头部导航',
              path: 'nav/header'
            },
            {
              title: '底部导航',
              path: 'nav/footer'
            }
          ],
          collapsable: false
        },
        {
          title:'辅助类',
          children: [
            {
              title: '辅助类',
              path: 'helper/helper'
            }
          ],
          collapsable: false
        }
      ],
      // '/mbui/': [
      //   ''
      // ]
    },
    // 自动生成侧边栏
    // sidebar: 'auto'
    // 页面滚动
    smoothScroll: true,
    // 更新时间
    lastUpdated: '上次更新' // string | boolean
  }
}