<template>
<div class="mainContent _mainContent">
   <div>
       <el-row :gutter="40" style="margin-left: 0;margin-right: 0;">
            <el-col :span="8">
                <div class="grContent">
                    <p class="info">基本信息</p>
                    <div class="pic">
                        <div class="imgPic">
                          <img src="../../assets/laoshi.png">
                        </div>
                        <p class="imgPictext">头 像</p>
                         <!-- <el-button type="success" size="small" v-show="picFlag" >头像</el-button> -->
                     </div>
                </div>
            </el-col>
            <el-col :span="16">
                <div class="grContent grContentR">
                    <ul>
                        <li class="clearfix">
                            <span class="grLable">姓名</span>
                            <div class="rightInfo">
                                <input type="text" v-model="name" readonly="readonly">
                            </div>
                        </li>
                        <li class="clearfix" v-show="flagJB">
                            <span class="grLable">教职工号</span>
                            <div class="rightInfo">
                                <input type="text" v-model="num" readonly="readonly">
                                </div>
                        </li>
                        <li class="clearfix">
                            <span class="grLable">性别</span>
                            <div class="rightInfo">
                              <input type="text" v-model="sex" readonly="readonly">
                                </div>
                        </li>
                        <li class="clearfix">
                            <span class="grLable">手机号</span>
                            <div class="rightInfo">
                                <input type="text" v-model="inphone" readonly="readonly">
                                <el-button type="success" size="small"  @click="openDiog">修改</el-button>
                            </div>
                        </li>
                        <li class="clearfix">
                            <span class="grLable">邮箱</span>
                            <div class="rightInfo">
                                <input type="text" v-model="email" readonly="readonly" :class="{yellow: flagEmil }">
                                 <el-button type="success" size="small" @click="openDiog1" v-if="flagEmil">设置</el-button>
                                  <!-- <el-button type="success" size="small" @click="openDiog1" v-else-if="!flag">修改</el-button> -->
                            </div>
                        </li>
                        <li class="clearfix">
                            <span class="grLable">登录密码</span>
                            <div class="rightInfo">
                                 <input type="password" v-model="password" readonly="readonly">
                                 <el-button type="success" size="small"  @click="openDiog2">修改</el-button>
                            </div>
                            <el-dialog title="修改密码" :visible.sync="dialogFormVisible2" class="grDialog">
                                <el-form :model="form">
                                    <el-form-item label="原密码" :label-width="formLabelWidth">
                                        <el-input v-model="form.oldPassword" auto-complete="off"></el-input>
                                    </el-form-item>
                                     <el-form-item label="新密码" :label-width="formLabelWidth">
                                        <el-input v-model="form.newPassword" type="password" auto-complete="off"></el-input>
                                    </el-form-item>
                                     <el-form-item label="确认密码" :label-width="formLabelWidth">
                                        <el-input v-model="form.newPasswordAgain" type="password" auto-complete="off"></el-input>
                                    </el-form-item>
                                </el-form>
                                <div slot="footer" class="dialog-footer">
                                    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
                                    <el-button type="primary" @click="edit_Password">确 定</el-button>
                                </div>
                            </el-dialog>
                        </li>
                    </ul>
                </div>
            </el-col>
       </el-row>
   </div>
    <el-dialog title="修改绑定手机号" :visible.sync="dialogFormVisible" class="grDialog">
        <el-form :model="form">
            <el-form-item label="新的手机号" :label-width="formLabelWidth">
                <el-input v-model="form.mobile" auto-complete="off"></el-input>
            </el-form-item>
                <el-form-item label="获取验证码" :label-width="formLabelWidth">
                    <el-input v-model="form.mcode"></el-input>
                    <a class="getCode" href="javascript:void(0)" @click="getCode">{{codemsg}}</a>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="edit_sure">确 定</el-button>
        </div>
    </el-dialog>
   <el-dialog title="设置绑定邮箱" :visible.sync="dialogFormVisible1" class="grDialog">
        <el-form :model="form">
            <el-form-item label="新的邮箱" :label-width="formLabelWidth">
                <el-input v-model="form.memail" auto-complete="off"></el-input>
            </el-form-item>
                <el-form-item label="获取验证码" :label-width="formLabelWidth">
                    <el-input v-model="form.emailCode"></el-input>
                    <a class="getCode" href="javascript:void(0)" @click="getEmailCode">{{codemsgEmail}}</a>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible1 = false">取 消</el-button>
            <el-button type="primary" @click="edit_sureEmail">确 定</el-button>
        </div>
    </el-dialog>
</div>
</template>
<script>
import md5 from '../../../static/js/md5'
export default {
  data () {
    return {
      picFlag: false,
      flagJB: true,
      name: '',
      expert_name: '',
      num: '',
      sex: '',
      inphone: '',
      flag: true,
      emailFlag: true,
      email: '',
      password: '',
      phoneFlag: true,
      flagEmil: false,
      mcode: '',
      codemsg: '获取验证码',
      codemsgEmail: '获取验证码',
      dialogFormVisible1: false,
      dialogFormVisible: false,
      dialogFormVisible2: false,
      form: {
        mobile: '',
        mcode: '',
        memail: '',
        emailCode: '',
        oldPassword: '',
        newPassword: '',
        newPasswordAgain: ''
      },
      formLabelWidth: '88px',
      countdownTimer:{},
      countdownTimerIphone:{},
      indexEmilFlag:60,
      indexIphone:60
    }
  },
  created () {
    let self = this
    self.$ajax('post', self.HOST + '/tr/trUser/web/getUserInfo', {}, (res) => {
      if (res.success) {
        if (res.data != null) {
          if (res.data.userType == 4) {
            self.flagJB = false
          }
        }
        self.name = res.obj.name
        self.num = res.obj.userId
        if (res.obj.mobile) {
          self.flag = true
          self.inphone = res.obj.mobile
        }
        if (res.obj.gender == 1) {
          self.sex = '男'
        } else {
          self.sex = '女'
        }

        if (res.obj.email == null || res.obj.email == '') {
          self.email = '未设置'
          self.flagEmil = true
        } else {
          self.email = res.obj.email
        }
        self.password = res.obj.password
      } else {
        self.$message({
            message: res.msg,
            type: 'warning'
          })
      }
    })
  },
  methods: {
    openDiog () {
      this.dialogFormVisible = true
      this.form.mobile = ''
      this.form.mcode = ''
      this.codemsg = '获取验证码'
      this.flag = true
      this.indexIphone = 60
       clearInterval(this.countdownTimerIphone)
    },
    openDiog1 () {
      this.dialogFormVisible1 = true
      this.form.memail = ''
      this.form.emailCode = ''
      this.codemsgEmail = '获取验证码',
      this.indexEmilFlag=60
       this.emailFlag = true
       clearInterval(this.countdownTimer)
    },
    openDiog2 () {
      this.dialogFormVisible2 = true
      this.form.oldPassword = ''
      this.form.newPassword = ''
      this.form.newPasswordAgain = ''
    },
    edit_sure () {
    //  修改手机号密码
      let self = this
      let reg = /^1\d{10}$/
      if (!reg.test(self.form.mobile.trim())) {
        self.$message({
          message: '手机号码格式不正确！',
          type: 'warning'
        })
        return
      }
      if (self.form.mcode.trim() === '') {
        self.$message({
          message: '请获取验证码！',
          type: 'warning'
        })
        return
      }
      let newData = {
        phoneNumber: self.form.mobile,
        code: self.form.mcode
      }

      self.$ajax('post', self.HOST + '/tr/trUser/web/editUserPhoneByIdV15', newData, (res) => {
        if (res.success) {
          // console.log(res)
          self.dialogFormVisible = false
          self.$message({
            message: res.msg,
            type: 'success'
          })
          self.inphone = self.form.mobile
        } else {
          self.$message({
            message: res.msg,
            type: 'warning'
          })
        }
      })
    },
    getCode () {
    // 获取验证码
      let self = this
      let reg = /^1\d{10}$/
      if (!reg.test(self.form.mobile.trim())) {
        self.$message({
          message: '手机号码格式不正确！',
          type: 'warning'
        })
        return
      }
      self.indexIphone = 60
      if (self.flag) {
        self.flag = false
        self.countdownTimerIphone = setInterval(function () {
          if (self.indexIphone <= 0) {
            self.flag = true
            self.codemsg = '获取验证码'
            self.indexIphone = 60
             clearInterval(self.countdownTimerIphone)
          } else {
            self.codemsg = '重新获取(' + (--self.indexIphone) + ')'
          }
        }, 1000)
        let newdata = {
          phoneNumber: self.form.mobile
        }
        self.$ajax('post', self.HOST + '/tr/trUser/web/sendPhoneVC', newdata, (res) => {
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
    getEmailCode () {
      // 获取验证码
      let self = this
      let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (!reg.test(self.form.memail.trim())) {
        self.$message({
          message: '邮箱格式不正确！',
          type: 'warning'
        })
        return
      }
      self.indexEmilFlag = 60
      if (self.emailFlag) {
        self.emailFlag = false
        // 计时器暂停（清除定时器）  
       
        self.countdownTimer = setInterval(function () {
          if (self.indexEmilFlag <= 0) {
            self.emailFlag = true
            self.codemsgEmail = '获取验证码'
            self.indexEmilFlag = 60
             clearInterval(self.countdownTimer)
          } else {
            self.codemsgEmail = '重新获取(' + (--self.indexEmilFlag) + ')'
          }
        }, 1000)
        let newdata = {
          email: self.form.memail
        }
        self.$ajax('post', self.HOST + '/tr/trExpert/web/sendExpertEmailVC', newdata, (res) => {
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
    edit_sureEmail () {
      //  修改邮箱
      let self = this
      let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (!reg.test(self.form.memail.trim())) {
        self.$message({
          message: '邮箱格式不正确！',
          type: 'warning'
        })
        return
      }
      if (self.form.emailCode.trim() === '') {
        self.$message({
          message: '请获取验证码',
          type: 'warning'
        })
        return
      }
      let newData = {
        email: self.form.memail,
        code: self.form.emailCode
      }

      self.$ajax('post', self.HOST + '/tr/trUser/web/editUserEmailByIdV15', newData, (res) => {
        if (res.success) {
         
          self.$message({
            message: res.msg,
            type: 'success'
          })
          self.email = self.form.memail
           self.dialogFormVisible1 = false
           self.flagEmil = false
        } else {
          self.$message({
            message: res.msg,
            type: 'warning'
          })
        }
      })
    },
    edit_Password () {
      let self = this
      if (self.form.oldPassword.trim() === '' || self.form.newPassword.trim() === '') {
        self.$message({
          message: '密码不能为空！',
          type: 'warning'
        })
        return
      } else if (self.form.newPassword.trim() !== self.form.newPasswordAgain.trim()) {
        self.$message({
          message: '两次输入密码不一致！',
          type: 'warning'
        })
        return
      }
      let newPass = {
        oldPassword: md5(self.form.oldPassword),
        newPassword: md5(self.form.newPassword),
        newConfirmPassword: md5(self.form.newPasswordAgain)
      }
      self.$ajax('post', self.HOST + '/tr/trUser/web/editUserPassWordByIdV15', newPass, (res) => {
        if (res.success) {
          self.$message({
            message: res.msg,
            type: 'success'
          })
          self.Password = self.form.newPassword
          self.dialogFormVisible2 = false
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    }
  }
}
</script>
<style scoped>
.clearfix {
	*zoom: 1;
}
.clearfix:after {
	display: block;
	clear: both;
	content: " ";
	height: 0;
	visibility: hidden;
}

.mainContent{background-color:#f1f4f5;
/* padding:1.64% */
}
._mainContent{
  padding-top: 0;
}
.title{font-size: 18px;color: #37474f;line-height: 24px;margin-bottom: 20px;}
.grContent{background-color: #fff;text-align: center; box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border: 1px solid #ebeef5;}
.grContent .info{font-size: 16px;color: #76838f;line-height: 66px;border-bottom: 1px solid #f1f1f1;}
.pic{padding-top: 7px;height: 290px;text-align: center}
.pic .imgPic{
  height: 160px;
  padding-top: 47px
}
.pic .imgPictext{
 line-height: 24px;
    color: #777;
    font-size: 14px;
}
.pic img{display: inline-block;height: 125px;line-height: 228px;}
.grContentR{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border: 1px solid #ebeef5;
    padding: 45px 69px;
    min-height: 600px;
}
.grContentR  li{
    padding-top: 10px;
}
.grContentR .grLable{
    display: block;
    float: left;
    width: 130px;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #f3f5f7;
    background-color: #f3f5f7;
    font-size: 14px;
    color: #37474f;
}
.rightInfo{
    position: relative ;
    text-align: left;
    margin-left: 140px;
    border-bottom: 1px solid #f1f1f1;
    line-height: 60px;
     height: 60px;
    padding-left: 63px;
    font-size: 14px;
    color: #76838f;
}
.rightInfo input{
    border: none;
    height: 59px;
    color: #76838f;
    font-size: 14px;
}
.rightInfo .el-button{
    position: absolute;
    right: 0;
    top: 12px;
}
.grDialog .el-dialog{
    width: 440px;
}
.grDialog .el-dialog__header{
    text-align: left;
}
.grDialog .el-form-item__content{
    position: relative
}
.grDialog .getCode{
    position: absolute;
    right: 0;
    top: 0;
    width: 90px;
    color: #70ad47;
    line-height: 40px;
}
.rightInfo .yellow{color: #ed7d31}
</style>
