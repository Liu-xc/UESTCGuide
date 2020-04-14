<template>
  <div class="register-main-container">
    <img src="static/imgs/背景.png" class="bg-img" />
    <form class="register-form">
      <div class="form-title">登 录</div>
      <div class="fill-box">
        <div class="id-box">
          <div>用户名</div>
          <input type="text" class="id-input" v-model="userID" />
        </div>
        <div class="pwd-box">
          <div>密码</div>
          <input type="password" class="pwd-input" v-model="userPWD" />
        </div>
        <div class="re-pwd-box">
          <div>确认密码</div>
          <input type="password" class="repwd-input" v-model="rePWD" />
        </div>
        <div class="verify-box">
          <div>验证码</div>
          <input type="text" class="verify-input" v-model="verifyCode" />
          <img class="verify-img" />
        </div>
      </div>
      <div class="btn-box">
        <div class="register-btn" @click="handleRegisterClick">立 即 注 册</div>
      </div>
    </form>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'RegisterMain',
  data () {
    return {
      userID: '',
      userPWD: '',
      rePWD: '',
      verifyCode: ''
    }
  },
  methods: {
    handleRegisterClick () {
      if (this.userID) {
        if (this.userPWD) {
          if (this.rePWD) {
            if (this.verifyCode) {
              if (this.userPWD === this.rePWD) {
                alert('这段代码还没写')
              } else {
                alert('两次密码不一致')
              }
            } else {
              alert('请输入验证码')
            }
          } else {
            alert('请填写确认密码')
          }
        } else {
          alert('请填写密码')
        }
      } else {
        alert('请填写用户名')
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.register-main-container
  width 100%
  height 100%
  display flex
  align-items center
  position relative

  .bg-img
    width 100%

  .register-form
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

      .id-box, .pwd-box, .re-pwd-box, .verify-box
        display flex
        margin-top 0.6rem

        div
          width 25%
          font-size 0.65rem
          display flex
          align-items center

        .id-input, .pwd-input, .repwd-input, .verify-input
          background #eef8ff
          width 75%
          padding 0.2rem 0.4rem
          border-radius 0.3rem
          color rgb(100, 100, 100)
          border #d7d7d7 1px solid

        .verify-input
          width 40%

        .verify-img
          width 30%
          margin-left 5%

    .btn-box
      width 100%
      margin-top 0.7rem
      display flex
      flex-direction column
      align-items center

      .register-btn
        padding 0.3rem 0.6rem
        font-size 0.55rem
        color white
        background #1a6da8
        border #d7d7d7 1px solid
        margin 0.5rem 0
</style>
