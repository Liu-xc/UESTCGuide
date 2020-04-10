<template>
  <div>
    <home-header></home-header>
    <home-navbar :navList="navList"></home-navbar>
    <div style="height: 80rem"></div>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/HomeHeader'
import HomeNavbar from '@/pages/home/components/HomeNavbar'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeNavbar
  },
  data () {
    return {
      navList: [{
        title: 'World',
        list: ['hello', 'vue']
      }, {
        title: 'World',
        list: ['hello', 'vue']
      }]
    }
  }
}
</script>

<style scoped lang="stylus"></style>
