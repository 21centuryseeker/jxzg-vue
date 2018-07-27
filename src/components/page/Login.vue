<template>
  <div class="login_box" id="login_box">
    <div class="login_right">
      <div class="login_right_content">
        <div style="text-align: center;margin-bottom: 60px;">
          <img src="../../../static/img/login_logo.png" alt="">
        </div>
        <div class="project_title">质量监测诊改系统</div>
        <template v-if="loginstate == 1 && !isForget">
          <div class="login_input_box_father">
            <div class="login_input_box">
              <div class="icon_box">
                <i class="iconfont">&#xe658;</i>
              </div>
              <input type="text" placeholder="教职工号/学生号" class="input_username" v-model="username" @keyup.enter="login">
            </div>
            <div class="login_input_box">
              <div class="icon_box">
                <i class="iconfont">&#xe655;</i>
              </div>
              <input type="password" placeholder="密码" class="input_password" v-model="password" @keyup.enter="login">
            </div>
            <div class="login_input_box" style="font-size: 0;">
              <div class="icon_box" style="vertical-align: top;">
                <i class="iconfont">&#xe678;</i>
              </div>
              <input type="text" placeholder="验证码" class="input_code" v-model="signcode" @keyup.enter="login">
              <img :src="yzm_src" alt="" style="width: 130px;height: 44px;vertical-align: top;position: absolute;top: 0;right: 0;" @click="update_img">
            </div>
            <div class="save_forget">
              <label>
                <input type="checkbox" v-model="ifCheck"> 记住密码
              </label>
              <a href="javascript:void(0)" style="float: right;color: #70ad47;" @click="isForget = true">忘记密码</a>
            </div>
            <div class="login_btn">
              <button @click="login">登录</button>
            </div>
          </div>
        </template>
        <template v-if="loginstate == 2 && !isForget">
          <div class="login_input_box_father">
            <div class="step_box">
              <div class="step_item active">
                <div class="step_item_left">1</div>
                <div class="step_item_right">绑定手机号</div>
              </div>
              <div class="step_item">
                <div class="step_item_left">2</div>
                <div class="step_item_right">设置密码</div>
              </div>
            </div>
            <div class="login_input_box">
              <div class="icon_box">
                <i class="iconfont">&#xe62d;</i>
              </div>
              <input type="text" placeholder="请输入手机号" class="input_username" v-model="mobile">
            </div>
            <div class="login_input_box" style="font-size: 0;">
              <div class="icon_box" style="vertical-align: top;">
                <i class="iconfont">&#xe678;</i>
              </div>
              <input type="text" placeholder="请输入验证码" class="input_code" v-model="mcode">
              <span class="get_code_box" @click="getCode">{{codemsg}}</span>
            </div>
            <div class="login_btn" style="margin-top: 20px;">
              <button @click="nextStep">下一步</button>
            </div>
          </div>
        </template>
        <template v-if="loginstate == 3 && !isForget">
          <div class="login_input_box_father">
            <div class="step_box">
              <div class="step_item">
                <div class="step_item_left">1</div>
                <div class="step_item_right">绑定手机号</div>
              </div>
              <div class="step_item active">
                <div class="step_item_left">2</div>
                <div class="step_item_right">设置密码</div>
              </div>
            </div>
            <!-- <div style="height: 40px;background: #fdeee9;line-height: 40px;border-radius: 4px;padding-left: 17px;margin-top: 20px;">
          <i class="el-icon-warning" style="color: #ffc000;"></i>
          <span style="color: #555">密码长度不能大于10个字符</span>
        </div> -->
            <div class="login_input_box">
              <div class="icon_box">
                <i class="iconfont">&#xe655;</i>
              </div>
              <input type="password" placeholder="请输入新密码(密码长度不能大于10个字符)" class="input_password" v-model="newpwds">
            </div>
            <div class="login_input_box" style="font-size: 0;">
              <div class="icon_box" style="vertical-align: top;">
                <i class="iconfont">&#xe655;</i>
              </div>
              <input type="password" placeholder="请确认密码" class="input_password" v-model="cnewpwds">
            </div>
            <div class="login_btn" style="margin-top: 20px;">
              <button @click="toLogin">确认登录</button>
            </div>
          </div>
        </template>
<template v-if="isForget">
  <div class="login_input_box_father">
    <div class="login_input_box">
      <div class="icon_box">
        <i class="iconfont">&#xe62d;</i>
      </div>
      <input type="text" placeholder="请输入手机号" class="input_username" v-model="forget_mobile">
    </div>
    <div class="login_input_box" style="font-size: 0;">
      <div class="icon_box" style="vertical-align: top;">
        <i class="iconfont">&#xe678;</i>
      </div>
      <input type="text" placeholder="请输入验证码" class="input_code" v-model="forget_code">
      <span class="get_code_box" @click="forget_getCode">{{forget_codemsg}}</span>
    </div>
    <div class="login_input_box">
      <div class="icon_box">
        <i class="iconfont">&#xe655;</i>
      </div>
      <input type="password" placeholder="请输入新密码" class="input_password" v-model="forget_newpwds">
    </div>
    <div class="login_input_box" style="font-size: 0;">
      <div class="icon_box" style="vertical-align: top;">
        <i class="iconfont">&#xe655;</i>
      </div>
      <input type="password" placeholder="请确认密码" class="input_password" v-model="forget_cnewpwds">
    </div>
    <div class="login_btn" style="margin-top: 20px;">
      <button @click="editSure">确定</button>
    </div>
    <div style="text-align: center;margin-top: 10px;">
      <a href="javascript:void(0)" @click="isForget = false" style="color: #555;">返回登录</a>
    </div>
  </div>
</template>
    </div>
    <div class="login_right_copyright">
      <div>© Copyright 精华教育科技股份有限公司 <span onclick="window.location.href='http://admin.zg.demo.uni-uni.cn'">版权所有 v1.5</span></div>
      <div>精华官网: www.gilight.cn</div>
    </div>
  </div>
  <div class="login_left">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><div class="login_bg login1">
              <div class="login_bg_box">
                <div class="login_bg_title">精华教学诊改</div>
              <div class="login_bg_content">
                <div>
                  <i class="iconfont">&#xe636;</i>
                  构建以“培养学生就业竞争力和发展潜力”为核心的内部质量保证体系
                </div>
                <div>
                  <i class="iconfont">&#xe636;</i>
                   实现通过信息化手段提升、带动教育发展，提高人才培养质量等方面的全面要求
                </div>
                <div>
                  <i class="iconfont">&#xe636;</i>
                  打造富有高职和地域特色的现代质量文化，营造全体员工持续改进质量体系有效性的氛围
                </div>
              </div>
              <div class="login_bg_btn">
                <button style="background: #70ad47">
                  <i class="iconfont">&#xe61e;</i>
                  返回官网
                </button>
                <button style="background: #ed7d31" class="btn_class">
                  <i class="iconfont">&#xe640;</i>
                  下载手机版
                </button>
                <button style="background: #ffc000" class="btn_class">
                 <i class="iconfont">&#xe622;</i>
                  联系客服
                </button>
              </div>
              </div>
            </div></div>
            <div class="swiper-slide"><div class="login_bg login2">
              <div class="login_bg_box">
                <div class="login_bg_title">精华教学诊改</div>
              <div class="login_bg_content">
                <div>
                  <i class="iconfont">&#xe636;</i>
                  构建以“培养学生就业竞争力和发展潜力”为核心的内部质量保证体系
                </div>
                <div>
                  <i class="iconfont">&#xe636;</i>
                   实现通过信息化手段提升、带动教育发展，提高人才培养质量等方面的全面要求
                </div>
                <div>
                  <i class="iconfont">&#xe636;</i>
                  打造富有高职和地域特色的现代质量文化，营造全体员工持续改进质量体系有效性的氛围
                </div>
              </div>
              <div class="login_bg_btn">
                <button style="background: #70ad47">
                  <i class="iconfont">&#xe61e;</i>
                  返回官网
                </button>
                <button style="background: #ed7d31" class="btn_class">
                  <i class="iconfont">&#xe640;</i>
                  下载手机版
                </button>
                <button style="background: #ffc000" class="btn_class">
                 <i class="iconfont">&#xe622;</i>
                  联系客服
                </button>
              </div>
              </div>
              </div></div>
            <div class="swiper-slide"><div class="login_bg login3">
              <div class="login_bg_box">
                <div class="login_bg_title">精华教学诊改</div>
              <div class="login_bg_content">
                <div>
                  <i class="iconfont">&#xe636;</i>
                  构建以“培养学生就业竞争力和发展潜力”为核心的内部质量保证体系
                </div>
                <div>
                  <i class="iconfont">&#xe636;</i>
                   实现通过信息化手段提升、带动教育发展，提高人才培养质量等方面的全面要求
                </div>
                <div>
                  <i class="iconfont">&#xe636;</i>
                  打造富有高职和地域特色的现代质量文化，营造全体员工持续改进质量体系有效性的氛围
                </div>
              </div>
              <div class="login_bg_btn">
                <button style="background: #70ad47">
                  <i class="iconfont">&#xe61e;</i>
                  返回官网
                </button>
                <button style="background: #ed7d31" class="btn_class">
                  <i class="iconfont">&#xe640;</i>
                  下载手机版
                </button>
                <button style="background: #ffc000" class="btn_class">
                 <i class="iconfont">&#xe622;</i>
                  联系客服
                </button>
              </div>
              </div>
              </div></div>
            <div class="swiper-slide"><div class="login_bg login4">
              <div class="login_bg_box">
                <div class="login_bg_title">精华教学诊改</div>
              <div class="login_bg_content">
                <div>
                  <i class="iconfont">&#xe636;</i>
                  构建以“培养学生就业竞争力和发展潜力”为核心的内部质量保证体系
                </div>
                <div>
                  <i class="iconfont">&#xe636;</i>
                   实现通过信息化手段提升、带动教育发展，提高人才培养质量等方面的全面要求
                </div>
                <div>
                  <i class="iconfont">&#xe636;</i>
                  打造富有高职和地域特色的现代质量文化，营造全体员工持续改进质量体系有效性的氛围
                </div>
              </div>
              <div class="login_bg_btn">
                <button style="background: #70ad47">
                  <i class="iconfont">&#xe61e;</i>
                  返回官网
                </button>
                <button style="background: #ed7d31" class="btn_class">
                  <i class="iconfont">&#xe640;</i>
                  下载手机版
                </button>
                <button style="background: #ffc000" class="btn_class">
                 <i class="iconfont">&#xe622;</i>
                  联系客服
                </button>
              </div>
              </div>
              </div></div>
        </div>
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <div class="button-next" v-show="ifShow">
          <i class="iconfont">&#xe6bd;</i>
        </div>
    </div>
  </div>
</div>
</template>
<script>
import fs from "fs";
import md5 from "../../../static/js/md5";
export default {
  data() {
    return {
      signcode: "",
      yzm_src: this.HOST + "/tr/signcode/get",
      username: "",
      password: "",
      ifCheck: false,
      loginstate: 1,
      codemsg: "获取验证码",
      forget_codemsg: "获取验证码",
      forget_code: "",
      flag: true,
      flag_2: true,
      mcode: "",
      mobile: "",
      newpwds: "",
      cnewpwds: "",
      forget_mobile: "",
      forget_newpwds: "",
      forget_cnewpwds: "",
      ifShow: true,
      isForget: false
    };
  },
  mounted() {
    this.update_img();
    let self = this;
    /* eslint-disable no-new */
    new this.$swiper(".swiper-container", {
      direction: "vertical",
      followFinger: false,
      speed: 800,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        init: function(swiper) {
          let slide = this.slides.eq(0);
          slide.addClass("ani-slide");
        },
        transitionStart: function() {
          for (var i = 0; i < this.slides.length; i++) {
            let slide = this.slides.eq(i);
            slide.removeClass("ani-slide");
          }
        },
        transitionEnd: function() {
          let slide = this.slides.eq(this.activeIndex);
          slide.addClass("ani-slide");
          if (this.activeIndex === 4) {
            self.ifShow = false;
          } else {
            self.ifShow = true;
          }
        }
      }
    });
  },
  methods: {
    update_img() {
      this.yzm_src = "";
      let url = this.HOST + "/tr/signcode/get?t=" + new Date().getTime();
      // this.$ajax('get', url, {}, (res) => {
      //   this.yzm_src = url
      // })
      // 使用下方的代码是为了解决上方代码在ie9报错的问题
      this.$http({
        method: "get",
        url: url,
        responseType: "stream"
      }).then(res => {
        this.yzm_src = url;
      });
      // setTimeout(() => {
      // this.yzm_src = this.HOST + '/signcode/get'
      // },400)
    },
    toLogin() {
      let self = this;
      if (self.newpwds.trim() === "" || self.cnewpwds.trim() === "") {
        self.$message({
          message: "密码不能为空！",
          type: "warning"
        });
        return;
      } else if (self.newpwds.trim() !== self.cnewpwds.trim()) {
        self.$message({
          message: "两次输入密码不一致！",
          type: "warning"
        });
        return;
      }
      self.$ajax(
        "post",
        self.HOST + "/tr/trUser/web/setPassword",
        { pwd: md5(self.newpwds) },
        res => {
          if (res.success) {
            self.$message({
              message: res.msg,
              type: "success"
            });
            self.$router.push({ path: "/zghxzb" });
          } else {
            self.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },
    nextStep() {
      let self = this;
      let reg = /^1\d{10}$/;
      if (!reg.test(self.mobile.trim())) {
        self.$message({
          message: "手机号码格式不正确！",
          type: "warning"
        });
        return;
      }
      if (self.mcode.trim() === "") {
        self.$message({
          message: "请获取验证码！",
          type: "warning"
        });
        return;
      }
      let data = {
        phoneNumber: self.mobile,
        code: self.mcode
      };
      self.$ajax(
        "post",
        self.HOST + "/tr/trUser/web/editUserPhoneById",
        data,
        res => {
          if (res.success) {
            self.loginstate = 3;
          } else {
            self.$message({
              type: "warning",
              message: res.msg
            });
          }
        }
      );
    },
    getCode() {
      let self = this;
      let reg = /^1\d{10}$/;
      if (!reg.test(self.mobile.trim())) {
        self.$message({
          message: "手机号码格式不正确！",
          type: "warning"
        });
        return;
      }
      let index = 60;
      if (self.flag) {
        self.flag = false;
        let interval = setInterval(function() {
          if (index <= 0) {
            self.flag = true;
            self.codemsg = "获取验证码";
            index = 60;
            clearInterval(interval);
          } else {
            self.codemsg = "重新获取(" + --index + ")";
          }
        }, 1000);
        let data = {
          phoneNumber: self.mobile
        };
        self.$ajax(
          "post",
          self.HOST + "/tr/trUser/web/sendPhoneVC",
          data,
          res => {
            if (res.success) {
              self.$message({
                message: res.msg,
                type: "success"
              });
            } else {
              self.$message({
                message: res.msg,
                type: "warning"
              });
            }
          }
        );
      }
    },
    forget_getCode() {
      let self = this;
      let reg = /^1\d{10}$/;
      if (!reg.test(self.forget_mobile.trim())) {
        self.$message({
          message: "手机号码格式不正确！",
          type: "warning"
        });
        return;
      }
      let index = 60;
      if (self.flag_2) {
        self.flag_2 = false;
        let interval = setInterval(function() {
          if (index <= 0) {
            self.flag_2 = true;
            self.forget_codemsg = "获取验证码";
            index = 60;
            clearInterval(interval);
          } else {
            self.forget_codemsg = "重新获取(" + --index + ")";
          }
        }, 1000);
        let data = {
          phoneNumber: self.forget_mobile
        };
        self.$ajax(
          "post",
          self.HOST + "/tr/trUser/web/sendPhoneVC",
          data,
          res => {
            if (res.success) {
              self.$message({
                message: res.msg,
                type: "success"
              });
            } else {
              self.$message({
                message: res.msg,
                type: "warning"
              });
            }
          }
        );
      }
    },
    editSure() {
      if (this.forget_mobile.trim() === "") {
        this.message({
          message: "手机号不能为空！",
          type: "warning"
        });
        return;
      }
      if (this.forget_code.trim() === 0) {
        this.message({
          message: "验证码不能为空！",
          type: "warning"
        });
        return;
      }
      if (
        this.forget_newpwds.trim() === "" ||
        this.forget_cnewpwds.trim() === ""
      ) {
        this.message({
          message: "新密码和确认密码不能为空！",
          type: "warning"
        });
        return;
      }
      if (this.forget_newpwds.trim() !== this.forget_cnewpwds.trim()) {
        this.message({
          message: "两次输入密码不一致！",
          type: "warning"
        });
        return;
      }
      let data = {
        code: this.forget_code,
        mobile: this.forget_mobile,
        password: md5(this.forget_newpwds)
      };
      this.$ajaxMore(
        "post",
        this.HOST + "/tr/trAdmin/web/applyUpdatePwd2",
        data,
        res => {
          if (res.success) {
            this.$message({
              type: "success",
              message: res.msg
            });
            this.isForget = false;
          } else {
            this.$message({
              type: "error",
              message: res.msg
            });
          }
        }
      );
    },
    login() {
      let self = this;
      if (self.username.trim() === "" || self.password.trim === "") {
        self.$message({
          message: "账号或者密码不能为空！",
          type: "warning"
        });
        return;
      }
      if (self.password.length < 6) {
        self.$message({
          message: "密码长度需要大于5位！",
          type: "warning"
        });
        return;
      } else if (self.password.length > 10) {
        self.$message({
          message: "密码长度必须小于11位！",
          type: "warning"
        });
        return;
      }
      let data = {
        username: self.username,
        password: md5(self.password),
        signcode: self.signcode
      };
      self.$ajax("post", self.HOST + "/tr/trLogin/web/login", data, res => {
        if (res.success) {
          if (res.data.user.mobile === "" || res.data.user.mobile === null) {
            // 执行手机号验证码操作
            self.loginstate = 2;
          } else {
            self.$message({
              message: res.msg,
              type: "success"
            });
            if (res.data.userType === 3 || res.data.userType === 4) {
              self.$router.push({ path: "/swdt" });
            } else {
              self.$message({
                type: "error",
                message: "非法登陆"
              });
              return;
            }
            if (self.ifCheck) {
              self.doCookie.setCookie("name", self.username, 100000);
              self.doCookie.setCookie("password", md5(self.password), 100000);
            } else {
              self.doCookie.removeCookie("name");
              self.doCookie.removeCookie("password");
            }
            // 跳转到首页
            self.$store.commit("changeLogin", {
              login: 1,
              name: res.data.user.name,
              roleName: res.data.user.positionName
            });
          }
        } else {
          self.$message({
            type: "error",
            message: res.msg
          });
          self.update_img();
        }
      });
    }
  }
};
</script>
<style scoped>
.login_box {
  height: 100%;
}
div.login_left {
  /* float: right; */
  width: 100%;
  /* margin-right: 470px; */
  padding-right: 470px;
  box-sizing: border-box;
  height: 100%;
}
div.login_right {
  float: right;
  height: 100%;
  width: 470px;
  background: #fff;
  vertical-align: top;
  position: relative;
}
.swiper-container-vertical > .swiper-pagination-bullets {
  right: 80px;
}
.swiper-wrapper {
  transition-delay: 0.3s;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-slide:nth-child(2) {
  background: #3183ff;
  color: #fff;
}
.swiper-slide p {
  transform: translateX(-200px);
  opacity: 0;
  transition: all 0.4s;
}
.ani-slide p {
  transform: translateX(0);
  opacity: 1;
}
.login_bg {
  color: #fff;
  text-align: left;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  /* background-size: 100% 100%; */
  /* background */
}
.login1 {
  background-image: url(../../assets/login/banner1.jpg);
  background-size: cover;
}
.login2 {
  background-image: url(../../assets/login/banner2.jpg);
  background-size: cover;
}
.login3 {
  background-image: url(../../assets/login/banner3.jpg);
  background-size: cover;
}
.login4 {
  background-image: url(../../assets/login/banner4.jpg);
  background-size: cover;
}
.login5 {
  background-image: url(../../assets/login/login5.jpg);
  background-size: cover;
}
.login_bg_title {
  color: #fff;
  font-size: 30px;
}
.login_bg_btn button {
  border: 0;
  border-radius: 4px;
  width: 126px;
  height: 34px;
  line-height: 34px;
  color: #fff;
}
div.login_bg_box {
  padding-left: 80px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
div.login_bg_content {
  margin: 20px 0;
  line-height: 32px;
  font-size: 14px;
}
.button-next {
  width: 39px;
  height: 20px;
  color: #fff;
  font-size: 39px;
  position: absolute;
  bottom: 54px;
  left: 50%;
  z-index: 99;
  cursor: pointer;
  transform: translateX(-20px);
}
.button-next i {
  color: #fff;
  vertical-align: top;
  font-size: 39px;
}
div.login_right_content {
  /* text-align: center; */
  position: absolute;
  top: 50%;
  left: 70px;
  transform: translateY(-50%);
}
.input_username,
.input_password,
.input_code {
  width: 330px;
  height: 44px;
  box-sizing: border-box;
  border: 1px solid #e4eaec;
  border-radius: 3px;
  padding-left: 50px;
  line-height: 44px; /* 解决在小屏幕电脑上placeholder被覆盖一部分的问题 */
}
/* .input_code {
  width: 200px;
  height: 44px;
  box-sizing: border-box;
  border: 1px solid #e4eaec;
  border-radius: 3px;
  padding-left: 50px;
} */
.login_input_box {
  width: 330px;
  height: 44px;
  position: relative;
  margin: 16px auto 0;
}
div.login_input_box_father {
  width: 330px;
  margin: auto;
}
div.icon_box {
  position: absolute;
  text-align: center;
  width: 50px;
  height: 44px;
  line-height: 44px;
}
.login_input_box i {
  font-size: 20px;
  color: #bec7cc;
}
div.project_title {
  margin-bottom: 30px;
  font-size: 20px;
  color: #526069;
  text-align: center;
}
.login_btn button {
  width: 330px;
  height: 44px;
  color: #fff;
  background: #70ad47;
  border: 0;
  border-radius: 4px;
}
.save_forget {
  width: 330px;
  height: 20px;
  line-height: 20px;
  margin: 16px 0 30px;
  font-size: 14px;
  color: #76838f;
}
div.login_right_copyright {
  position: absolute;
  bottom: 20px;
  text-align: center;
  left: 70px;
  color: #76838f;
}
div.login_right_copyright div {
  font-size: 12px !important;
}
.btn_class {
  margin-left: 10px;
}
.get_code_box {
  position: absolute;
  right: 1px;
  top: 1px;
  height: 42px;
  width: 130px;
  cursor: pointer;
  color: #70ad47;
  /* background: #70ad47; */
  display: inline-block;
  vertical-align: top;
  text-align: center;
  line-height: 44px;
  /* color: #fff; */
  background: transparent;
  /* color: #555; */
}
div.step_box {
  width: 100%;
  font-size: 0;
  height: 50px;
}
div.step_item {
  width: 50%;
  display: inline-block;
  font-size: 0;
  height: 50px;
  background: #f3f7f9;
  line-height: 50px;
}
div.step_item_left {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 10px;
  background: #bec7cc;
  color: #fff;
  display: inline-block;
  vertical-align: top;
  margin: 15px;
}
div.step_item_right {
  width: 110px;
  display: inline-block;
  vertical-align: top;
}
.step_item.active {
  background: #70ad47;
  color: #fff;
}
.step_item.active .step_item_left {
  background: #fff;
  color: #70ad47;
}
</style>
