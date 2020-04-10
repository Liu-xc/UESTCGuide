<template>
  <div>
    <div class="main-units-container" v-for="(item, index) of units" :key="index">
      <img class="unit-title-img" :src="item.unitTitleImg" />
      <ul class="class-list" v-for="classItem of item.classList" :key="classItem.classTitle">
        <li class="class-item">
          <div class="class-title">{{classItem.classTitle}}</div>
          <ul class="link-list" v-for="(link, linkIndex) of classItem.linkList" :key="linkIndex">
            <li class="link-item">
              <a :href="link.url" target="_blank">{{link.linkTitle}}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainUnits',
  data () {
    return {
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
.main-units-container
  position relative
  margin-top 4rem
  height 300px
  width 100%
  background pink
  padding 2.5rem 0 1rem 2.5rem

  .unit-title-img
    width 6.5rem
    position absolute
    left -1.6rem
    top -2rem

  .class-list
    padding 0 0 1.5rem 0
    width 100%
    background white

    .class-item
      display flex

      .class-title
        font-size 0.85rem
        width 20%

      .link-list
        flex 1
        display block

        .link-item
          display block
          width 20%
          background blue
          font-size 0.65rem
          padding 0.2rem 0
          margin-bottom 0.3rem

          a
            width 100%
            height 100%
</style>
