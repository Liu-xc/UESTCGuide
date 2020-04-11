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
      }],
      units: [{
        unitTitleImg: 'static/imgs/我的世界.png',
        classList: [{
          classTitle: '官网汇总',
          linkList: [{
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
        }, {
          classTitle: '官网汇总1',
          linkList: [{
            linkTitle: 'UESTC官网1',
            url: 'http://www.baidu.com/'
          }]
        }]
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
.container
  position relative
  left 33%
  top 5rem
  height 100px
  width 50%
</style>
