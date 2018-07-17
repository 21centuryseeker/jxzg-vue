<template>
<div class="login_box" id="login_box">
  <video src="../../assets/bg.mp4" id="video_bg" autoplay style="object-fit: fill" loop height="100%" width="100%"></video>
  <!-- 右侧区域 -->
  <div class="login-part">
    <template v-if="loginstate == 1">
      <div class="input-wrap">
        <img src="../../assets/logo.png" alt="" style="width: 200px;">
        <div class="text-part">内部质量保证体系诊断与改进系统</div>
          <span class="uname ts"><i class="iconfont">&#xe658;</i><input type="text" v-model="username"  @keyup.enter="login" placeholder="请输入用户名" /></span>
          <span class="pwd"><i class="iconfont">&#xe64a;</i><input type="password" v-model="password" maxlength="10" placeholder="请输入密码"  @keyup.enter="login"/></span>
        <div class="login-aide"><label><input type="checkbox" name="remenber" v-model="ifCheck"/> 记住密码</label><!-- <a href="javascript:void(0)" class="findpwd">忘记密码?</a> --></div>
        <button id="login" @click="login">登录</button>
      </div>
  </template>
  <template v-if="loginstate == 2">
    <div class="input-wrap">
      <div class="step-part">
        <div class="step-wrap"><i><label><img src="../../assets/1lv.png" /><br />绑定手机号</label></i><i><label><img src="../../assets/2hui.png" /><br />设置密码</label></i></div>
      </div>
      <span class="uname cy"><input type="text" v-model="mobile" placeholder="请输入手机号" /></span>
      <span class="uname yc"><input type="password" v-model="mcode" placeholder="请输入验证码" />
        <a href="javascript:void(0)" @click="getCode">{{codemsg}}</a>
      </span>
      <button id="next-step" @click="nextStep">下一步</button>
    </div>
  </template>
  <template v-if="loginstate == 3">
    <div class="input-wrap">
      <div class="step-part">
        <div class="step-wrap"><i><label><img src="../../assets/1lv.png" /><br />绑定手机号</label></i><i style="background-color: #00bfb2"><label><img src="../../assets/2lv.png" /><br />设置密码</label></i></div>
      </div>
      <span class="uname"><input type="password" v-model="newpwds" placeholder="请输入新密码" /></span>
      <span class="pwd"><input type="password" v-model="cnewpwds" placeholder="请确认密码" /></span>
      <button id="complete" @click="toLogin">确认登录</button>
      <!-- <div class="back-login"><a href="javascript:void(0)">返回登录</a></div> -->
</div>
</template>
  </div>
</div>
</template>
<script>
import md5 from '../../../static/js/md5'
export default {
  data () {
    return {
      username: '',
      password: '',
      ifCheck: false,
      loginstate: 1,
      codemsg: '获取验证码',
      flag: true,
      mcode: '',
      mobile: '',
      newpwds: '',
      cnewpwds: ''
    }
  },
  created () {},
  mounted () {
    let videoBg = document.getElementById('video_bg')
    videoBg.ondurationchange = function () {
      // console.log(1)
    }
  },
  methods: {
    toLogin () {
      let self = this
      if (self.newpwds.trim() === '' || self.cnewpwds.trim() === '') {
        self.$message({
          message: '密码不能为空！',
          type: 'warning'
        })
        return
      } else if (self.newpwds.trim() !== self.cnewpwds.trim()) {
        self.$message({
          message: '两次输入密码不一致！',
          type: 'warning'
        })
        return
      }
      self.$ajax('post', self.HOST + '/tr/trUser/web/setPassword', {pwd: md5(self.newpwds)}, (res) => {
        if (res.success) {
          self.$message({
            message: res.msg,
            type: 'success'
          })
          self.$router.push({path: '/zggzt'})
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    nextStep () {
      let self = this
      let reg = /^1\d{10}$/
      if (!reg.test(self.mobile.trim())) {
        self.$message({
          message: '手机号码格式不正确！',
          type: 'warning'
        })
        return
      }
      if (self.mcode.trim() === '') {
        self.$message({
          message: '请获取验证码',
          type: 'warning'
        })
        return
      }
      let data = {
        phoneNumber: self.mobile,
        code: self.mcode
      }
      self.$ajax('post', self.HOST + '/tr/trUser/web/editUserPhoneById', data, (res) => {
        if (res.success) {
          self.loginstate = 3
        } else {
          self.$message({
            type: 'warning',
            message: res.msg
          })
        }
      })
    },
    getCode () {
      let self = this
      let reg = /^1\d{10}$/
      if (!reg.test(self.mobile.trim())) {
        self.$message({
          message: '手机号码格式不正确！',
          type: 'warning'
        })
        return
      }
      let index = 60
      if (self.flag) {
        self.flag = false
        let interval = setInterval(function () {
          if (index <= 0) {
            self.flag = true
            self.codemsg = '获取验证码'
            self.index = 60
            clearInterval(interval)
          } else {
            self.codemsg = '重新获取(' + (--index) + ')'
          }
        }, 1000)
        let data = {
          phoneNumber: self.mobile
        }
        self.$ajax('post', self.HOST + '/tr/trUser/web/sendPhoneVC', data, (res) => {
          if (res.success) {
            self.$message({
              message: res.msg,
              type: 'success'
            })
          } else {
            self.$message({
              message: res.msg,
              type: 'warning'
            })
          }
        })
      }
    },
    login () {
      let self = this
      if (self.username.trim() === '' || self.password.trim === '') {
        self.$message({
          message: '账号或者密码不能为空',
          type: 'warning'
        })
        return
      }
      if (self.password.length < 6) {
        self.$message({
          message: '密码长度大于6！',
          type: 'warning'
        })
        return
      } else if (self.password.length > 10) {
        self.$message({
          message: '密码长度小于10！',
          type: 'warning'
        })
        return
      }
      let data = {
        username: self.username,
        password: md5(self.password)
      }
      self.$ajax('post', self.HOST + '/tr/trLogin/web/login', data, (res) => {
        if (res.success) {
          if (res.data.user.mobile === '' || res.data.user.mobile === null) {
            // 执行手机号验证码操作
            self.loginstate = 2
          } else {
            self.$message({
              message: res.msg,
              type: 'success'
            })
            if (res.data.userType === 3 || res.data.userType === 4) {
              self.$router.push({path: '/zggzt'})
            } else {
              self.$message({
                type: 'error',
                message: '非法登陆'
              })
              return
            }
            if (self.ifCheck) {
              self.doCookie.setCookie('name', self.username, 100000)
              self.doCookie.setCookie('password', md5(self.password), 100000)
            } else {
              self.doCookie.removeCookie('name')
              self.doCookie.removeCookie('password')
            }
            // 跳转到首页
            self.$store.commit('changeLogin', {
              login: 1,
              name: res.data.user.name
            })
          }
        } else {
          self.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    }
  }
}
</script>
<style scoped>
.login_box {
  height: 100%;
  background-image: url('../../assets/login.jpg');
  background-size: 100% 100%;
}
#video_bg {
  width: 100%;
  height: 100%;
}
.video-bg{width:100%;height:auto;float:left;position:relative;overflow:hidden;}
.video-bg video{width:100%;height:100%;float:left;}
.login-part{/*width:30%;*/min-width: 400px;height:100%;position:absolute;top:0px;right:0px;background-color:rgba(0,0,0,.4);color:#fff;}
.logo-login{width:95%;height:auto;float:left;padding-left:5%;margin-top:40px;}
.input-wrap{width:100%;height:auto;float:left;/*margin-left:17.5%;*//*margin-top:40%;*/ text-align: center;padding: 0 50px;box-sizing: border-box;}
.text-part{width:100%;height:auto;float:left;line-height:80px;font-size:17px;color:#fff;text-align:center;}
.step-part{width:100%;height:auto;float:left;margin-bottom:40px;}
.step-wrap{width:100%;height:8px;float:left;border-radius:4px;background-color:#fff;}
.step-wrap i{ display:inline-block;width:50%;height:8px;float:left; text-align:center;}
.step-wrap i label{position:relative;top:-20px;}
.step-wrap i:first-child{background-color:#00bfb2;border-radius:4px;color:#00bfb2;}
.input-wrap span{display:inline-block;width:100%;height:auto;float:left;background-color:#fff;}
.input-wrap span.uname:first-child{border-radius:4px 4px 0 0;}
.input-wrap span.uname.ts{border-radius:4px 4px 0 0;}
.input-wrap span.uname{border-bottom:1px solid #e6e6e6;overflow:hidden;}
.input-wrap span.pwd{border-radius:0 0 4px 4px;overflow:hidden;}
.input-wrap span i{width:20%;height:57px;float:left;text-align:center;line-height:57px;color:#999;font-size:24px;}
.input-wrap span input{width:72%;height:47px;float:left;border:none;outline:none;margin-top:2px;padding:5px 4%;}
.input-wrap span.yc input{width:45%;}
.input-wrap span.yc a{display:inline-block;color:#00b5a9;margin-top:20px;}
.input-wrap span.yc{border-radius:0 0 4px 4px;}
.input-wrap span.tsb{border-radius:0 0 0 0!important;}
.input-wrap span.cy{border-radius:4px 4px 0 0;}
.login-aide{width:100%;height:auto;float:left;margin-top:15px;}
.login-aide label{float:left;}
.login-aide input{vertical-align: middle;border:1px solid #ccc;}
.login-aide a{float:right;color:#fff;}
.input-wrap button{width:100%;height:47px;float:left;background-color:#70ad47;color:#fff;border-radius:4px;border:none;cursor: pointer;outline:none;font-size:16px;margin-top:15px;margin-bottom:15px;}
.scleHide{transform: scale(0,0);opacity:0;transition:all ease .3s;}
.scleShow{transform: scale(1,1);opacity:1;transition:all ease .3s;}
.back-login{width:100%;height:auto;float:left;text-align:center;line-height:40px;}
.back-login a{color:#fff;}
.input-wrap:last-child{position:absolute;top: 50%;left:0;transform: translateY(-50%)}
</style>
