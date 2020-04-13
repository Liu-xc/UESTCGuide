<template>
  <div>
    <div class="main-mine-container">
      <img class="mine-title-img" src="static/imgs/我的世界.png" />
      <ul class="my-list">
        <li class="my-link" v-for="(item, index) of myLinks" :key="index">
          <a :href="item.url" target="_blank">{{item.linkTitle}}</a>
        </li>
        <li class="my-link" @click="handleAddClick" ref="my_link">
          <img src="static/imgs/添加.png" class="add-icon" />
        </li>
      </ul>
    </div>
    <add-link-panel :style="panelStyle" @submit="handlePanelSubmit" v-if="showPanel"></add-link-panel>
  </div>
</template>

<script>
import AddLinkPanel from '@/pages/home/components/AddLinkPanel'
import axios from 'axios'
export default {
  name: 'MainMine',
  props: {
    my_links: Array
  },
  data () {
    return {
      myLinks: [],
      panelStyle: {
        top: '',
        left: ''
      }
    }
  },
  computed: {
    siteNameList () {
      let list = [new Set()]
      for (let val of this.myLinks) {
        list.push(val.linkTitle)
      }
      return list
    },
    siteUrlList () {
      let list = [new Set()]
      for (let val of this.myLinks) {
        list.push(val.url)
      }
      return list
    },
    logStatus () {
      return this.$store.state.logStatus
    },
    showPanel () {
      return this.$store.state.showPanel
    }
  },
  components: {
    AddLinkPanel
  },
  methods: {
    handleAddClick () {
      event.stopPropagation()
      this.panelStyle.top = event.pageY + 35 + 'px'
      this.panelStyle.left = event.pageX - 25 + 'px'
      this.$store.commit('changeShowPanel', true)
    },
    handlePanelSubmit (siteName, siteUrl) {
      if (this.siteNameList.indexOf(siteName) !== -1) {
        alert('名称已存在！')
        this.$store.commit('changeShowPanel', false)
        return
      }
      if (this.siteUrlList.indexOf(siteUrl) !== -1) {
        this.$store.commit('changeShowPanel', false)
        alert('网址已存在！')
        return
      }
      this.myLinks.push({ linkTitle: siteName, url: siteUrl })
      this.$store.commit('changeShowPanel', false)
    },
    getMyList () {
      axios.get('static/basicData/mylist.json').then(this.getMyListSucc)
    },
    getMyListSucc (res) {
      res = res.data
      if (res.data) {
        this.myLinks = res.data.myLinks
      }
    }
  },
  mounted () {
    this.getMyList()
  }
}
</script>

<style scoped lang="stylus">
.main-mine-container
  position relative
  margin-top 4rem
  height auto
  width 100%
  background white
  padding 2.5rem 1rem 0.5rem 1rem
  border-radius 1rem
  border 1px solid rgb(189, 204, 212)

  .mine-title-img
    width 6.5rem
    position absolute
    left -1.6rem
    top -2rem

  .my-list
    padding 0 0 1rem 0
    width 100%
    display flex
    flex-wrap wrap

    .my-link
      width 21%
      margin 0.4rem 2%
      padding 0.5rem 1rem
      background #D7E7F2
      border-radius 1rem
      font-size 0.7rem
      display flex
      justify-content center
      align-items center
      cursor pointer

      .add-icon
        width 0.7rem
        opacity 0.7
</style>
