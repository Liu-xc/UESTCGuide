<template>
  <div class="container">
    <div class="studio">
      <img src="@/imgs/StarStudio.png" />
      <div>
        <div class="studio-label">成电导航 UESTC-StarStudio</div>
      </div>
    </div>
    <div class="weather">
      <div>
        <img src="@/imgs/晴.png" alt="qing" />
      </div>
      <div class="temp">晴 18°C~25°C</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style scoped lang="stylus">
.container
  display flex
  justify-content space-between
  padding 0.6rem 1.5rem
  height 2.2rem
  align-items center
  background-color rgb(215, 215, 215)

  .studio
    img
      height 2.2rem
      float left

    div
      display flex
      float right
      margin-left 0.8rem
      height 2.2rem
      align-items center

      .studio-label
        height 1rem
        line-height 1rem
        background white
        border-radius 0.3rem
        padding 0.15rem 0.6rem
        font-size 0.8rem

  .weather
    display flex
    align-items center

    .temp
      float right
      background rgb(235, 235, 235)
      padding 0.3rem 0.5rem
      border solid 1px rgb(121, 121, 121)
      font-size 0.85rem

    div
      float left
      margin-left 0.8rem

      img
        height 1.9rem
</style>
