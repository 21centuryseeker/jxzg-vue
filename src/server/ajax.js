import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import * as types from '../store/types'
Vue.prototype.$http = axios
Vue.prototype.HOST = ''
Vue.prototype.qs = qs
const ajax = function (method, url, data, func) {
  axios({
    method: method,
    url: url,
    data: qs.stringify(data)
  }).then((res) => {
    // if (!res.data || res.data.success === false) {
    //   self.$message({
    //     type: 'error',
    //     message: res.data.msg
    //   })
    //   location.href = location.origin +  location.pathname + '#/login'
    //   return
    // }
    if (func) {
      func(res.data)
    }
  })
}
const ajaxMore = function (method, url, data, func) {
  axios({
    method: method,
    url: url,
    headers: {'Content-type': 'application/json;charset=utf-8'},
    data: data
  }).then((res) => {
    // if (!res.data || res.data.success === false) {
    //   self.$message({
    //     type: 'error',
    //     message: res.data.msg
    //   })
    //   location.href = location.origin +  location.pathname + '#/login'
    //   return
    // }
    if (func) {
      func(res.data)
    }
  })
}
const ajaxGet = function (url, params, success) {
  axios.get(url, {
    params: params
  }).then((res) => {
    if (success) {
      success(res.data)
    }
  }).catch((error) => {
    console.log(error)
  })
}
const urlArr = [
  '/tr/trPlan/web/getPlanAuditor',
  '/tr/trTarget/web/getTargetAuditor'
]
//  请求拦截器
axios.interceptors.request.use(confing => {
  // console.log(window.onscroll)
  const store = window._VUE_STORE_
  if (urlArr.indexOf(confing.url) === -1) {
    store.commit(types.ALL_LOADING, true)
    store.commit('changeReqNum', true)
  }
  return confing
}, (errs) => {
  return Promise.reject(errs)
})
//  响应拦截器
axios.interceptors.response.use(response => {
  const store = window._VUE_STORE_
  if (urlArr.indexOf(response.config.url) === -1) {
    store.commit('changeResNum', true)
  }
  if (store.state.reqNum === 0) {
    // 标明页面所有接口已经全部响应
    store.commit(types.ALL_LOADING, false)
  }
  return response
}, (err) => {
  return Promise.reject(err)
})
// 正常情况下调用的ajax
Vue.prototype.$ajax = ajax
// 当使用this.$ajax报错时(415错误)，使用下方的方法this.$ajaxMore
Vue.prototype.$ajaxMore = ajaxMore
// ajax的get的方法
Vue.prototype.$ajaxGet = ajaxGet
