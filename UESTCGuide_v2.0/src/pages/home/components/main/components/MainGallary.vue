<template>
  <div class="gallary-container">
    <gallary :list="list"></gallary>
  </div>
</template>

<script>
import Gallary from '@/pages/home/components/main/components/Gallary'
export default {
  name: 'MainGallary',
  data () {
    return {
      list: ['static/imgs/01.png', 'static/imgs/02.png', 'static/imgs/03.png', 'static/imgs/04.png', 'static/imgs/05.png']
    }
  },
  components: {
    Gallary
  }
}
</script>

<style scoped lang="stylus">
.gallary-container
  position relative
  margin-top 2rem
  width 100%
  height 0
  padding-bottom 29.7%
</style>
