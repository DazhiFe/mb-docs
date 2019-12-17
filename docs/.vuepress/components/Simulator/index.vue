<template>
  <div class="doc-simulator">
    <iframe class="doc-simulator__iframe" :src="iframeSrc" frameborder="0"></iframe>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'

let simulatorHeight = 667 // 默认高度

export default {
  name: 'Simulator',
  props: {
    iframeSrc: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.resize()
    window.addEventListener('resize', debounce(() => {
      this.resize()
    }, 100))
  },
  methods: {
    resize () {
      let windowHeight = window.innerHeight      
      let simulatorIframe = document.querySelector('.doc-simulator__iframe')
      let docSimulator = document.querySelector('.doc-simulator')
      if (!simulatorIframe && !docSimulator) {
        return
      }
      let calcHeight = windowHeight - docSimulator.offsetTop
      if (calcHeight < simulatorHeight) {
        simulatorIframe.style.height = calcHeight + 'px'
      } else {
        simulatorIframe.style.height = simulatorHeight + 'px'
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize())
  }
}
</script>

<style lang="stylus" scoped>
.doc-simulator
  position: fixed;
  top: 70px;
  right: 16px;
  z-index: 10;
  display: none;
  width: 375px;
  min-width: 375px;
  max-height 667px;
  overflow: hidden;
  background: #fafafa;
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0,0,0,.15);

  iframe
    width: 100%;
    height: 667px;

@media (min-width: 1336px)
  .doc-simulator
    display: block;
</style>