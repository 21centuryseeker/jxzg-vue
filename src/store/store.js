import Vue from 'vue'
import Vuex from 'vuex'
import menu from '../data/menu'
import * as types from './types'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    $screenWidth: '250px',
    menu: menu, // 菜单列表
    commonCharge: 0, // 权限state，根据这个判断是主管还是普通员工
    isLogin: 0, // 这个判断是否登录
    nickname: '', // 用户昵称
    roleName: '', // 用户职位
    checkTitle: '', // 小标题
    isShowSubTitle: '', // 是否显示
    allLoading: false, // 是否显示正在加载页面
    reqNum: 0, // 记录当前路由的请求数量
    resNum: 0, // 记录当前路由的响应数量
    messageNum: 0 ,// 记录消息未读条数
    roleId:0//纪录用户的id
  },
  mutations: {
    changeScreenWidth (state, str) {
      state.$screenWidth = str
    },
    changeMessageNum (state, num) {
      state.messageNum = num
      // console.log('headerNum')
      // console.log(num)
    },
    changeCharge (state, str) {
      state.commonCharge = str
    },
    changeLogin (state, str) {
      state.isLogin = str.login
      state.nickname = str.name
      state.roleName = str.roleName
      state.roleId = str.roleId
    },
    changeState (state, obj) {
      state.commonCharge = obj.charge
      state.isLogin = obj.islogin
      state.nickname = obj.nickname
      state.roleName = obj.roleName
    },
    changeReqNum (state, bool) {
      state.reqNum = state.reqNum + 1
    },
    changeResNum (state, bool) {
      state.reqNum = state.reqNum - 1
      // bool? (state.resNum = state.resNum + 1) : state.resNum = 0
    },
    [types.ALL_LOADING]: (state, data) => {
      state.allLoading = data
    },
    [types.CHANGE_TITLE]: (state, data) => {
      state.checkTitle = data.title
      state.isShowSubTitle = data.isshowSubTitle
    },
  
  }
})
