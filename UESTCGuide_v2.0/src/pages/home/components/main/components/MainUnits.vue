<template>
  <div ref="wrapper">
    <div>
      <div class="main-units-container" v-for="(item, index) of units" :key="index">
        <a :id="refList[index]" class="a-anchor"></a>
        <img class="unit-title-img" :src="item.unitTitleImg" />
        <ul class="class-list" v-for="classItem of item.classList" :key="classItem.classTitle">
          <li class="class-item">
            <div class="class-title">{{classItem.classTitle}}</div>
            <ul class="link-list">
              <li
                class="link-item"
                v-for="(link, linkIndex) of classItem.linkList"
                :key="linkIndex"
              >
                <a :href="link.url" target="_blank">{{link.linkTitle}}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainUnits',
  props: {
    units: Array
  },
  data () {
    return {
      refList: ['成电印记', '校园助手', '学习平台', '成电社交']
    }
  },
  computed: {
    scrollTitle () {
      return this.$store.state.scrollTitle
    }
  },
  watch: {
    scrollTitle () {
      const title = this.scrollTitle
      // const el = this.$refs[title][0]
      // el.scrollIntoView(true)
      document.getElementById(title).scrollIntoView(true)
    }
  }
}
</script>

<style scoped lang="stylus">
.a-anchor
  position absolute
  top -4rem

.main-units-container
  position relative
  margin-top 4rem
  height auto
  width 100%
  background white
  padding 2.5rem 0 1rem 2.5rem
  border-radius 1rem
  border 1px solid rgb(189, 204, 212)

  .unit-title-img
    width 6.5rem
    position absolute
    left -1.6rem
    top -2rem

  .class-list
    padding 0 0 1rem 0
    width 100%

    .class-item
      display flex

      .class-title
        font-size 0.85rem
        width 20%

      .link-list
        flex 1
        display flex
        flex-wrap wrap

        .link-item
          display block
          width 25%
          font-size 0.65rem
          padding 0.2rem 0
          margin-bottom 0.3rem

          a
            width 100%
            height 100%
</style>
