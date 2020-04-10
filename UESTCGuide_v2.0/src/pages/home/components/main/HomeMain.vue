<template>
  <div class="container">
    <main-search></main-search>
    <main-gallary></main-gallary>
  </div>
</template>

<script>
import MainSearch from '@/pages/home/components/main/components/MainSearch'
import MainGallary from '@/pages/home/components/main/components/MainGallary'

export default {
  name: 'HomeMain',
  components: {
    MainSearch,
    MainGallary
  }
}
</script>

<style scoped lang="stylus">
.container
  position relative
  left 33%
  top 3rem
  height 100px
  width 50%
</style>
