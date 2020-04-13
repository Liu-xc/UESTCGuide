<template>
  <div class="search-container">
    <ul class="engin-list">
      <li
        class="engin-item"
        v-for="item of enginList"
        :key="item.name"
        :ref="item.name"
        :data-placeholder="item.placeholder"
        :class="{activeStyle: item.name === activeOne}"
        @click="hanleEnginClick"
      >{{item.name}}</li>
    </ul>
    <div class="search-box">
      <input type="text" :placeholder="placeholder" />
      <img src="static/imgs/搜索.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainSearch',
  data () {
    return {
      activeOne: '百度',
      placeholder: '百度一下',
      enginList: [{
        name: '百度',
        placeholder: '百度一下'
      }, {
        name: 'Google',
        placeholder: 'Google搜索'
      }, {
        name: 'Bing',
        placeholder: '必应搜索'
      }, {
        name: '知乎',
        placeholder: '在知乎搜索'
      }, {
        name: '微信',
        placeholder: '在微信搜索'
      }, {
        name: 'Bilibili',
        placeholder: '在Bilibili搜索'
      }]
    }
  },
  methods: {
    hanleEnginClick () {
      const oLi = event.target
      const enginName = oLi.innerHTML
      const placeholder = this.$refs[enginName][0]['dataset'].placeholder
      this.activeOne = enginName
      this.placeholder = placeholder
    }
  }
}
</script>

<style scoped lang="stylus">
.activeStyle
  background white !important
  border none !important
  box-shadow 5px -2px 15px rgba(200, 200, 200, 0.6) !important

.search-container
  width 100%

  .engin-list
    height 1.5rem
    display flex

    .engin-item
      cursor pointer
      border-radius 0.5rem 0.5rem 0 0
      padding 0.5rem 1rem
      font-size 0.7rem
      background rgba(200, 200, 200, 0.4)
      border-left solid 1px rgba(200, 200, 200, 0.7)

  .search-box
    position relative
    height 2.5rem
    display flex
    justify-content space-between
    align-items center
    overflow hidden
    background white
    border-radius 0 0.5rem 0.5rem 0.5rem

    input
      flex 1
      height 100%
      padding-left 1rem
      font-size 0.9rem
      color rgb(100, 100, 100)

    img
      height 1.2rem
      padding 0 1rem
      cursor pointer
</style>
