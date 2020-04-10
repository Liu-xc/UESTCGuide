<template>
  <div class="container">
    <main-search></main-search>
  </div>
</template>

<script>
import MainSearch from '@/pages/home/components/main/components/MainSearch'

export default {
  name: 'HomeMain',
  components: {
    MainSearch
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
