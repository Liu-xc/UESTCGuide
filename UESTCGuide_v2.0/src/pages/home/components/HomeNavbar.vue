<template>
  <div class="container">
    <div class="header">
      <img src="@/imgs/导航图标.png" />
      <div class="guide-title">成电导航</div>
    </div>
    <div class="nav-body">
      <ul class="out-list">
        <li v-for="item of navList" :key="item.title" @click="handleAnchorClick">
          <div class="anchor">{{item.title}}</div>
          <ul v-for="(innerItem, index) of item.list" :key="index" class="inner-list">
            <li>{{innerItem}}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeNavbar',
  props: {
    navList: Array
  },
  methods: {
    handleAnchorClick () {
      // hi
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  position fixed
  left 10%
  top 5rem
  width 15%

  .header
    background white
    display flex
    align-items center

    img
      height 3.2rem
      float left

    .guide-title
      margin-left 0.5rem
      font-size 1.8rem

  .nav-body
    margin-top 1rem
    height auto
    background #6FABD3
    width 100%
    display flex
    flex-direction column
    justify-content center
    align-items center
    padding 0.6rem 0

    .out-list
      width 50%

      .anchor
        padding 1rem 0 0.3rem 0
        font-size 1.1rem
        font-weight 500

      .inner-list
        li
          font-size 1rem
          padding 0.1rem
</style>
