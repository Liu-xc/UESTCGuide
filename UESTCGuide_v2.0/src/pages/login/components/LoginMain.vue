<template>
  <div class="login-main-container">
    <img src="static/imgs/背景.png" class="bg-img" />
    <form class="login-form">
      <div class="form-title">登 录</div>
      <div class="fill-box">
        <div class="id-box">
          <div>用户名</div>
          <input type="text" placeholder="学号" class="id-input" v-model="userID" />
        </div>
        <div class="pwd-box">
          <div>密码</div>
          <input type="password" placeholder="密码" class="pwd-input" v-model="userPWD" />
        </div>
      </div>
      <div class="btn-box">
        <div class="log-btn" @click="handleLogClick">登 录</div>
        <router-link to="/register" class="regist-btn">立即注册</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginMain',
  data () {
    return {
      userID: '',
      userPWD: ''
    }
  },
  methods: {
    handleLogClick () {
      if (this.userID && this.userPWD) {
        axios({
          method: 'post',
          url: 'public/users/login',
          data: {
            'admin_username': this.userID,
            'admin_password': this.userPWD
          }
        }).then(this.logSucc).catch((e) => {
          alert('登陆失败')
        })
      } else {
        alert('请输入完整信息')
      }
    },
    logSucc (res) {
      res = res.data
      if (res) {
        this.$store.commit('changeLogStatus', true)
        this.$router.push('/')
      } else {
        alert('登陆失败')
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.login-main-container
  width 100%
  height 100%
  display flex
  align-items center
  position relative

  .bg-img
    width 100%

  .login-form
    min-width 350px
    position absolute
    top 35%
    left 70%
    width 20%
    background #FFFFFF
    border #d7d7d7 2px solid
    border-radius 0.7rem
    padding 0.7rem 1.5rem

    .form-title
      padding 0.3rem
      font-size 0.8rem
      text-align center
      font-weight 600

    .fill-box
      display flex
      flex-direction column
      width 100%

      .id-box, .pwd-box
        display flex
        margin-top 0.6rem

        div
          width 20%
          font-size 0.65rem
          display flex
          align-items center

        .id-input, .pwd-input
          background #eef8ff
          flex 1
          padding 0.2rem 0.4rem
          border-radius 0.3rem
          color rgb(100, 100, 100)

    .btn-box
      width 100%
      margin-top 0.7rem
      display flex
      flex-direction column
      align-items center

      .log-btn
        padding 0.2rem 0.6rem
        font-size 0.55rem
        color white
        background #1a6da8
        border #d7d7d7 1px solid
        margin-bottom 0.5rem
        cursor pointer
</style>
