<template>
  <div class="container">
    <main-search></main-search>
    <main-gallary></main-gallary>
    <main-mine v-if="logStatus"></main-mine>
    <main-units :units="units"></main-units>
  </div>
</template>

<script>
import MainSearch from '@/pages/home/components/main/components/MainSearch'
import MainGallary from '@/pages/home/components/main/components/MainGallary'
import MainMine from '@/pages/home/components/main/components/MainMine'
import MainUnits from '@/pages/home/components/main/components/MainUnits'

export default {
  name: 'HomeMain',
  props: {
    units: Array
  },
  components: {
    MainSearch,
    MainGallary,
    MainMine,
    MainUnits
  },
  computed: {
    logStatus () {
      return this.$store.state.logStatus
    }
  }
}
</script>

<style scoped lang="stylus">
.container
  padding 5rem 17% 4rem 33%
  top 5rem
  width 100%
  height auto
  background #eef8ff
</style>
