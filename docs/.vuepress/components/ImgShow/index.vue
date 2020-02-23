<template>
  <div>
    <img :src="$withBase(url)" alt="">
  </div>
</template>

<script>
export default {
  name: 'ImgShow',
  props: {
    url: {
      type: String,
      default: ''
    }
  }
}
</script>