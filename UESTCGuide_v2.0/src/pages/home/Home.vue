<template>
  <div class="home-container">
    <home-header></home-header>
    <home-navbar ref="home_navbar" :navList="navList"></home-navbar>
    <home-main :units="units"></home-main>
    <home-footer ref="home_footer"></home-footer>
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
      navList: [],
      units: []
    }
  },
  computed: {
    logStatus () {
      return this.$store.state.logStatus
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
        this.units = resData.units
      }
    },
    getLogStatus () {
      axios.get('/static/log.json').then(this.getStatusSucc)
    },
    getStatusSucc (res) {
      res = res.data
      if (res.status === 0) {
        this.changeLogStatus(false)
      } else if (res.status === 1) {
        this.changeLogStatus(true)
      } else {
        this.changeLogStatus(false)
        alert('登陆状态异常！')
      }
    },
    changeLogStatus (status) {
      this.$store.commit('changeLogStatus', status)
    }
  },
  mounted () {
    this.getBasicInfo()
    this.getLogStatus()
  }
}
</script>

<style scoped lang="stylus">
.home-container
  min-width 1400px
  min-height 1000px
</style>
