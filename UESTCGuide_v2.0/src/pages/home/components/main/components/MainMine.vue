<template>
  <div>
    <div class="main-mine-container">
      <img class="mine-title-img" src="static/imgs/我的世界.png" />
      <ul class="my-list">
        <li class="my-link" v-for="(item, index) of my_links" :key="index">
          <a :href="item.url" target="_blank">{{item.linkTitle}}</a>
        </li>
        <li class="my-link">
          <img src="static/imgs/添加.png" class="add-icon" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMine',
  props: {
    my_links: Array
  }
}
</script>

<style scoped lang="stylus">
.main-mine-container
  position relative
  margin-top 4rem
  height auto
  width 100%
  background white
  padding 2.5rem 1rem 0.5rem 1rem
  border-radius 1rem
  border 1px solid rgb(189, 204, 212)

  .mine-title-img
    width 6.5rem
    position absolute
    left -1.6rem
    top -2rem

  .my-list
    padding 0 0 1rem 0
    width 100%
    display flex
    flex-wrap wrap

    .my-link
      width 21%
      margin 0.4rem 2%
      padding 0.5rem 1rem
      background #D7E7F2
      border-radius 1rem
      font-size 0.7rem
      display flex
      justify-content center
      align-items center

      .add-icon
        width 0.7rem
        opacity 0.7
</style>
