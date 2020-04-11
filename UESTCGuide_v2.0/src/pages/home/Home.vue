<template>
  <div>
    <home-header></home-header>
    <home-navbar :navList="navList"></home-navbar>
    <home-main></home-main>
    <div style="height: 80rem"></div>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/HomeHeader'
import HomeNavbar from '@/pages/home/components/HomeNavbar'
import HomeMain from '@/pages/home/components/main/HomeMain'
import HomeFooter from '@/pages/home/components/HomeFooter'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeNavbar,
    HomeMain,
    HomeFooter
  },
  data () {
    return {
      navList: []
    }
  },
  methods: {
    getBasicInfo () {
      axios.get('/static/basicData/data.json?').then(this.getDataSucc)
    },
    getDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const resData = res.data
        this.navList = resData.navList
        console.log(resData)
      }
    }
  },
  mounted () {
    this.getBasicInfo()
  }
}
</script>

<style scoped lang="stylus"></style>
