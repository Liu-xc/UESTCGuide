<template>
  <div class="container">
    <main-search></main-search>
    <main-gallary></main-gallary>
    <main-mine :my_links="my_links"></main-mine>
    <main-units :units="units"></main-units>
  </div>
</template>

<script>
import MainSearch from '@/pages/home/components/main/components/MainSearch'
import MainGallary from '@/pages/home/components/main/components/MainGallary'
import MainMine from '@/pages/home/components/main/components/MainMine'
import MainUnits from '@/pages/home/components/main/components/MainUnits'

export default {
  name: 'HomeMain',
  props: {
    units: Array
  },
  components: {
    MainSearch,
    MainGallary,
    MainMine,
    MainUnits
  },
  data () {
    return {
      my_links: [{
        linkTitle: 'UESTC官网',
        url: 'http://www.baidu.com/'
      }, {
        linkTitle: 'UESTC官网2',
        url: 'http://www.baidu.com/'
      }, {
        linkTitle: 'UESTC官网3',
        url: 'http://www.baidu.com/'
      }, {
        linkTitle: 'UESTC官网4',
        url: 'http://www.baidu.com/'
      }, {
        linkTitle: 'UESTC官网5',
        url: 'http://www.baidu.com/'
      }, {
        linkTitle: 'UESTC官网6',
        url: 'http://www.baidu.com/'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
.container
  padding 5rem 17% 4rem 33%
  top 5rem
  width 100%
  height auto
  background #eef8ff
</style>
