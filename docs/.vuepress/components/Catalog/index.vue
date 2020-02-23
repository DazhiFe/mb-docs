<template>
  <div>
    <template v-for="item in catalogList" v-if="catalogList.length > 0">
      <h2>{{ item.title }}</h2>
      <ul>
        <li v-for="(subItem, index) in item.children" v-if="item.children.length > 0">
          <router-link :to="subItem.path">{{ subItem.title }}</router-link>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import { themeConfig } from '../../config'

export default {
  name: 'Catalog',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      catalogMap: {
        'question': '/question/',
        'interview': '/interview/',
        'myarticle': '/myarticle/'
      },
      catalogList: []
    }
  },
  created () {
    this.catalogList = themeConfig.sidebar[this.catalogMap[this.name]]
  }
}
</script>

<style>

</style>