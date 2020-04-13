<template>
  <div class="container">
    <div class="studio">
      <img src="static/imgs/StarStudio.png" />
      <div>
        <div class="studio-label">成电导航 UESTC-StarStudio</div>
      </div>
    </div>
    <div class="weather">
      <div>
        <img src="static/imgs/晴.png" alt="qing" />
      </div>
      <div class="temp">晴 18°C~25°C</div>
      <div
        class="log-status"
        @click="!logStatus ? handleLogClick() : handleLogoutClick()"
      >{{this.btnText}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  computed: {
    btnText () {
      return this.$store.state.logStatus ? '退出' : '登录'
    },
    logStatus () {
      return this.$store.state.logStatus
    }
  },
  methods: {
    handleLogClick () {
      this.$router.push('/login')
    },
    handleLogoutClick () {
      // axios发送登出请求，返回正确就触发退出事件，由父组件接收
      // 可能需要使用store来处理

      this.$store.commit('changeLogStatus', false)
    }
  }
}
</script>

<style scoped lang="stylus">
.container
  min-width 800px
  z-index 99
  width 100%
  position fixed
  display flex
  justify-content space-between
  padding 0.3rem 1.5rem
  align-items center
  background-color rgb(215, 215, 215)

  .studio
    display flex
    align-items center

    img
      height 1.4rem
      float left

    div
      display flex
      float right
      margin-left 0.4rem
      align-items center

      .studio-label
        height 1rem
        line-height 1rem
        background white
        border-radius 0.3rem
        padding 0.15rem 0.4rem
        font-size 0.6rem
        border solid 1px rgb(121, 121, 121)

  .weather
    display flex
    align-items center

    .temp, .log-status
      float right
      background rgb(235, 235, 235)
      padding 0.2rem 0.4rem
      border solid 1px rgb(121, 121, 121)
      font-size 0.65rem

    .log-status
      cursor pointer

    div
      float left
      margin-left 0.8rem

      img
        height 1.4rem
</style>
