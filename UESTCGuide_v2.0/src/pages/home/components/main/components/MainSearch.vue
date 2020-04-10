<template>
  <div class="search-container">
    <ul class="engin-list">
      <li class="engin-item" v-for="item of enginList" :key="item.name">{{item.name}}</li>
    </ul>
    <div class="search-box">
      <input type="text" placeholder="hello" />
      <img src="@/imgs/搜索.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainSearch',
  data () {
    return {
      enginList: [{
        name: 'Blibli',
        placeholder: 'Bilibli'
      }]
    }
  }
}
</script>

<style scoped lang="stylus">
.search-container
  width 100%

  .engin-list
    height 1.5rem
    display flex

    .engin-item
      background white
      border-radius 0.5rem 0.5rem 0 0
      padding 0.5rem 1rem
      font-size 0.7rem

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
      font-size 1rem
      color rgb(100, 100, 100)

    img
      height 1.2rem
      padding 0 1rem
</style>
