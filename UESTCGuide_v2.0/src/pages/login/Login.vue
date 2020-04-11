<template>
  <div class="login-container">
    <login-header></login-header>
    <login-main></login-main>
  </div>
</template>

<script>
import LoginHeader from '@/pages/login/components/LoginHeader'
import LoginMain from '@/pages/login/components/LoginMain'

export default {
  name: 'Login',
  components: {
    LoginHeader,
    LoginMain
  }
}
</script>

<style scoped lang="stylus">
.login-container
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  background #EEF8FF
  overflow hidden
  min-width 1500px
  min-height 100px
</style>
