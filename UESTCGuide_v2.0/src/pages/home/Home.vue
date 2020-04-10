<template>
  <div>
    <home-header></home-header>
    <home-navbar :navList="navList"></home-navbar>
    <home-main></home-main>
    <div style="height: 80rem"></div>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/HomeHeader'
import HomeNavbar from '@/pages/home/components/HomeNavbar'
import HomeMain from '@/pages/home/components/main/HomeMain'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeNavbar,
    HomeMain
  },
  data () {
    return {
      navList: [{
        title: 'World',
        list: ['hello', 'vue']
      }, {
        title: 'hi',
        list: ['hello', 'vue']
      }]
    }
  }
}
</script>

<style scoped lang="stylus"></style>
