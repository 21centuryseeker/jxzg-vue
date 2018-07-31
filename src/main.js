// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-default/index.css'
import '../static/css/reset.css'
// import axios from 'axios';
// import qs from 'qs';
// Vue.prototype.$http = axios;
// Vue.prototype.HOST = '/api'
// Vue.prototype.qs = qs;
import store from './store/store'
import './server/ajax'
import router from './router'
import App from './App'
import 'babel-polyfill'
// import MuseUI from 'muse-ui'
// import 'muse-ui/dist/muse-ui.css'
import '../static/css/local_icon/iconfont.css'
import '../static/theme/first/index.css'
import echarts from 'echarts'
import '../static/js/china'
import '../static/js/henan'
import '../static/swiper/css/swiper.min.css'
import swiper from '../static/swiper/js/swiper'
import {ChartUt, chartUtil} from './util/ChartUtil'
// import $swf from '../static/swf/Uploader.swf'
// Vue.use(MuseUI)
Vue.use(ElementUI)
Vue.config.productionTip = false
// 定义限制上传文件大小的全局变量 , 后台默认为10M
Vue.prototype.$uploadSize = 10
Vue.prototype.$showRemoveDialog = true
Vue.prototype.$screenWidth = '250px'
Vue.prototype.doCookie = {
  setCookie (name, value, iDay) {
    let oDate = new Date()
    oDate.setDate(oDate.getDate() + iDay)
    document.cookie = name + '=' + value + ';expires=' + oDate
  },
  getCookie (name) {
    var arr = document.cookie.split('; ') // 多个cookie值是以; 分隔的，用split把cookie分割开并赋值给数组
    for (var i = 0; i < arr.length; i++) {
      var arr2 = arr[i].split('=')
      if (arr2[0] === name) {
        return arr2[1]
      }
    }
    return ''
  },
  removeCookie (name) {
    this.setCookie(name, 1, -1)
  }
}
Vue.prototype.mydateFormat = {
  dateCodeYm (str) {
    var date = new Date(str)
    return date.getFullYear() + '-' + (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1)
  },
  dateCodeYmd (str) {
    var date = new Date(str)
    return date.getFullYear() + '-' + (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' : '') + date.getDate()
  },
  dateCodeYmdHms (str) {
    var date = new Date(str)
    return date.getFullYear() + '-' + (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' : '') + date.getDate() + ' ' + (date.getHours() < 10 ? '0' : '') + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ':' + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds()
  }
}
Vue.prototype.isArray = function (o) {
  return Object.prototype.toString.call(o) === '[object Array]'
}
Vue.prototype.variable_type = function (o) {
  //  判断数据类型
  /*
    [object String]    字符串
    [object Number]    number
    [object Boolean]   boolean
    [object Undefined]  undefined
    [object Null]       null
    [object Object]     对象
    [object Array]      数组
    [object Function]   函数
  */
  return Object.prototype.toString.call(o)
}
Vue.prototype.cjs_xor = function (a, b) {
  return Boolean(a) != Boolean(b)
}
Vue.prototype.$echarts = echarts
Vue.prototype.$swiper = swiper
Vue.prototype.$ChartUtil = chartUtil
Vue.prototype.$ChartUt = ChartUt
// Vue.prototype.$swf = $swf
/* eslint-disable no-new */
window._VUE_STORE_ = store
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
