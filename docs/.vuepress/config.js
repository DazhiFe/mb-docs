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
  title: '好实用前端技术团队',
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
    nav: [
      {
        text: '开发文档',
        items: [
          {
            text: '移动端UI组件库',
            link: '/shop/basic/button'
          },
          {
            text: '后台管理UI组件库',
            link: 'http://shop.test.hsy884.com/heleasy-admin/'
          },
          {
            text: '后台管理Vue UI组件库',
            link: 'http://shop.test.hsy884.com/vue_admin_template/'
          },
          {
            text: 'Vue项目开发经验、问题总结',
            link: 'https://www.yuque.com/books/share/993017a6-8784-46be-86bb-f47923a07174?#'
          }
        ]
      },
      {
        text: '开发规范',
        items: [
          {
            text: 'HTML规范',
            link: '/standard/html'
          },
          {
            text: 'CSS/SASS规范',
            link: '/standard/css'
          },
          {
            text: 'JavaScript规范',
            link: '/standard/javascript'
          },
          {
            text: '图片规范',
            link: '/standard/img'
          },
          {
            text: '命名规范',
            link: '/standard/name'
          }
        ]
      },
      {
        text: '问题库',
        link: '/question/'
      },
      {
        text: '前端源码',
        link: '/code/'
      }
    ],
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
            },
            {
              title: '小图标',
              path: 'basic/icon'
            },
            {
              title: '彩带',
              path: 'basic/ribbon'
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
              title: '下拉菜单',
              path: 'feedback/dropdown'
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
            },
            {
              title: '评论栏',
              path: 'feedback/comment'
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
            },
            {
              title: '纯按钮导航',
              path: 'nav/nav-btn'
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
      '/question/': [
        {
          title: 'HTML5',
          children: [
            {
              title: 'video标签播放视频有声音没画面',
              path: 'html5/1'
            },
            {
              title: 'type="file"上传重复的文件无法再次触发change事件',
              path: 'html5/2'
            }
          ]
        },
        {
          title: 'CSS',
          children: [
            {
              title: '文字两端对齐',
              path: 'css/1'
            },
            {
              title: 'select标签的对齐',
              path: 'css/2'
            },
            {
              title: '给table的tbody添加滚动条出现的问题',
              path: 'css/3'
            }
          ]
        },
        {
          title: 'JavaScript',
          children: [
            {
              title: 'jQuery无法获取元素带小数点的宽高',
              path: 'javascript/1'
            },
            {
              title: 'html2canvas插件截图时，图片圆角异常',
              path: 'javascript/2'
            },
            {
              title: 'jQuery如何获取隐藏元素的宽高？',
              path: 'javascript/3'
            },
            {
              title: '通过jQuery获取data-*自定义属性存在的问题',
              path: 'javascript/4'
            },
            {
              title: 'UEditor富文本编辑器插入的图片无法自适应容器宽度',
              path: 'javascript/5'
            },
            {
              title: 'jQuery判断html标签是否存在某个属性代码',
              path: 'javascript/6'
            },
            {
              title: 'jQuery获取包含当前节点html的方法',
              path: 'javascript/7'
            },
            {
              title: 'jquery判断滚动条是否滚动到底部',
              path: 'javascript/8'
            }
          ]
        },
        {
          title: 'Vue.js',
          children: [
            {
              title: 'Vue页面在新窗口打开页面的方法',
              path: 'vue/1'
            }
          ]
        },
        {
          title: '其他',
          children: [
            {
              title: 'wampserver重新安装后启动不了',
              path: 'other/1'
            },
            {
              title: '远程桌面连接报错：出现身份验证错误/要求的函数不受支持的解决方案',
              path: 'other/2'
            }
          ]
        }
      ]
    },
    // 自动生成侧边栏
    // sidebar: 'auto'
    // 页面滚动
    smoothScroll: true,
    // 更新时间
    lastUpdated: '上次更新' // string | boolean
  }
}