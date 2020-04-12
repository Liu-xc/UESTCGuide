<template>
  <div class="add-link-panel">
    <form class="add-link-form">
      <div class="fill-to-add">
        <div class="fill-link-box">
          <div>名称</div>
          <input type="text" placeholder class="link-input" v-model="siteName" />
        </div>
        <div class="fill-link-box">
          <div>网址</div>
          <input type="text" placeholder class="link-input" v-model="siteUrl" />
        </div>
        <div class="add-link-btn" @click="clickAddBtn">添 加</div>
      </div>
      <div class="click-to-add">
        <div class="usual-link-title">常用网址</div>
        <ul>
          <li v-for="item of linkList" :key="item.title">
            <a :href="item.url" target="_blank">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddLinkPanel',
  data () {
    return {
      siteName: '',
      siteUrl: '',
      linkList: [{
        title: 'UESTC官网',
        url: 'https://www.uestc.edu.cn/'
      }, {
        title: '信息门户',
        url: 'http://portal.uestc.edu.cn/'
      }, {
        title: '一卡通',
        url: 'http://ecard.uestc.edu.cn/'
      }, {
        title: '教务系统',
        url: 'http://eams.uestc.edu.cn/eams/home!submenus.action?menu.id='
      }, {
        title: '学生邮件系统',
        url: 'http://mail.std.uestc.edu.cn/'
      }, {
        title: '图书馆',
        url: 'http://www.lib.uestc.edu.cn/'
      }, {
        title: '中国大学MOOC',
        url: 'https://www.icourse163.org/'
      }, {
        title: '中国知网',
        url: 'https://www.cnki.net/'
      }, {
        title: 'CSDN',
        url: 'https://edu.csdn.net/'
      }, {
        title: '清水河畔',
        url: 'http://bbs.uestc.edu.cn/'
      }]
    }
  },
  methods: {
    clickAddBtn () {
      if (this.siteName && this.siteUrl) {
        this.$emit('submit', this.siteName, this.siteUrl)
      } else {
        alert('请完善数据！')
        this.$emit('closePanel')
      }
    }
  }
}
</script>

<style scoped lang="stylus">
::-webkit-scrollbar
  display none

.add-link-panel
  z-index 100
  position absolute
  box-shadow 5px 5px 15px rgba(100, 100, 100, 0.6)

  .add-link-form
    width 450px
    height 310px
    overflow scroll
    background #D7E7F2
    padding 1.5rem 1.3rem 1rem 1.3rem

    .fill-to-add
      width 100%
      display flex
      flex-direction column
      align-items center

      .fill-link-box
        display flex
        width 100%
        margin-bottom 0.5rem

        div
          width 15%
          font-size 0.65rem
          display flex
          align-items center

        .link-input
          flex 1
          padding 0.2rem 0.3rem
          font-size 0.55rem
          color rgb(100, 100, 100)

      .add-link-btn
        width 25%
        padding 0.3rem 0.6rem
        background white
        text-align center
        font-size 0.55rem
        margin-top 0.3rem
        cursor pointer

    .click-to-add
      width 100%
      display flex
      flex-direction column
      justify-content center
      margin-top 1.2rem

      .usual-link-title
        padding 0.3rem
        background #B4D6F2
        text-align center
        font-size 0.6rem
        letter-spacing 0.2rem

      ul
        display flex
        flex-wrap wrap
        justify-content space-around
        margin-top 1rem

        li
          width 40%
          padding 0.3rem
          background white
          border 1px solid rgba(100, 100, 100, 0.5)
          margin 0.3rem
          text-align center
          font-size 0.55rem
</style>
