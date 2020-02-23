/**
 * @desc 拓展配置
 * @author dazhi
 * @date 2019-12-09
 */

import Simulator from './components/Simulator'
import ImgShow from './components/ImgShow'
import Catalog from './components/Catalog'

export default ({ Vue, isServer, router }) => {
  // if (!isServer) {
  //   import('vue-toasted' /* webpackChunkName: "notification" */).then((module) => {
  //     Vue.use(module.default)
  //   })
  // }

  // 注册组件
  Vue.component('Simulator', Simulator)
  Vue.component('ImgShow', ImgShow)
  Vue.component('Catalog', Catalog)

  // 路由守卫
  router.beforeEach((to, from, next) => {
    next()
  })
}