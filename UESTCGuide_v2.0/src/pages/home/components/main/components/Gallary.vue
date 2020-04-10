<template>
  <div class="gallary">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item, index) of list" :key="index">
        <img :src="item" class="gallary-img" :alt="item" />
      </swiper-slide>
      <div class="swiper-pagination" slot="bullet"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        autoplay: 3000,
        onlyExternal: true,
        loop: true
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.gallary
  position absolute
  top 0
  left 0
  right 0
  bottom 0

  .gallary-img
    width 100%
    height 100%
    background white
</style>
