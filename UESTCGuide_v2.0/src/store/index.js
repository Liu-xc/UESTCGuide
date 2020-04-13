import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logStatus: true,
    showPanel: false,
    myLinks: [{
      linkTitle: 'UESTC官网',
      url: 'http://www.baidu.com/'
    }, {
      linkTitle: 'UESTC官网2',
      url: 'http://www.baidu.com/'
    }, {
      linkTitle: 'UESTC官网3',
      url: 'http://www.baidu.com/'
    }, {
      linkTitle: 'UESTC官网4',
      url: 'http://www.baidu.com/'
    }, {
      linkTitle: 'UESTC官网5',
      url: 'http://www.baidu.com/'
    }, {
      linkTitle: 'UESTC官网6',
      url: 'http://www.baidu.com/'
    }]
  },
  mutations: {
    changeLogStatus (state, status) {
      state.logStatus = status
    },
    changeShowPanel (state, show) {
      state.showPanel = show
    }
  }
})
