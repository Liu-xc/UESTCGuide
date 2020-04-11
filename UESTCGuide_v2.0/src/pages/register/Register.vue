<template>
  <div class="register-container">
    <register-header></register-header>
    <register-main></register-main>
  </div>
</template>

<script>
import RegisterHeader from '@/pages/register/components/RegisterHeader'
import RegisterMain from '@/pages/register/components/RegisterMain'

export default {
  name: 'Register',
  components: {
    RegisterHeader,
    RegisterMain
  }
}
</script>

<style scoped lang="stylus">
.register-container
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
