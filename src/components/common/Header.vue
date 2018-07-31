<template>
  <div class="header">
    <el-row>
      <el-col :span="16">
        <div class="logo">
          <img src="/tr/trLogoConfig/getLogo/1" class="logo_header">
          <span class="logo_span">质量监测诊改系统</span>
        </div>
      </el-col>
      <el-col :span="8">
        <ul class="headerNav">
          <!-- <li>
             <span style="cursor: pointer" onclick="window.location.href='http://admin.zg.demo.uni-uni.cn'">诊改后台</span>
          </li> -->
          <li @click="$router.push({path: '/xtsz-grzx'})" class="linkStyle">
            <span class="name">
              <i>{{name}}</i><br>
              <i style="color: #bababa;">{{roleName}}</i>
            </span>
            <div class="picImg">
              <img class="user-logo" src="../../assets/laoshi.png" style="width: 30px;height: 30px;" />
            </div>
          </li>
          <li class="linkStyle">
            <span style="color: white" @click="messHtml">
              <!-- <router-link to="/message"> -->
              <template v-if="$store.state.messageNum">
                <el-badge :value="$store.state.messageNum" class="item" style="line-height: 24px;">
                  <i class="el-icon-bell" style="font-size: 24px;color: #fff;"></i>
                </el-badge>
              </template>
              <template v-else>
                <el-badge class="item" style="line-height: 24px;">
                  <i class="el-icon-bell" style="font-size: 24px;color: #fff;"></i>
                </el-badge>
              </template>
            </span>
          </li>
          <li class="user-info">
            <div @click="handleCommand" class="linkStyle">
              <span class="el-dropdown-link">
                <i class="iconfont">&#xe682;</i>
              </span>
            </div>
            <!-- <el-dropdown trigger="click" @command="handleCommand">
               <span class="el-dropdown-link" command="loginout">
                  <i class="iconfont">&#xe682;</i>
                </span>
              <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown> -->
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: this.$store.state.nickname,
      num: this.$store.state.messageNum,
      flag: false,
      roleName: this.$store.state.roleName
    };
  },
  mounted() {
    this.messageFn();
  },
  methods: {
    handleCommand(command) {
      let self = this;
      // if (command === 'loginout') {
      self.$ajax("post", self.HOST + "/tr/trLogin/web/logOut", {}, res => {
        if (res.success) {
          self.$message({
            message: res.msg,
            type: "success"
          });
          self.doCookie.removeCookie("name");
          self.doCookie.removeCookie("password");
          // 跳转到首页
          self.$router.push({ path: "/login" });
        } else {
          self.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
      // }
    },
    messHtml() {
      this.messageFn();
      this.$router.push({ path: "/message" });
    },
    messageFn() {
      let self = this;
      let Newdata = {
        messageStatus: 0, // 是否已读   1已读   0 未读
        messageType: 0 // 消息通知类型   1 系统通知  2 预警通知
      };
      self.$ajaxMore(
        "post",
        self.HOST + "/tr/trUser/web/getUserMessageInfoCount",
        Newdata,
        res => {
          if (res.success) {
            if (Boolean(res.obj) !== false) {
              self.flag = false;
              self.$store.commit("changeMessageNum", res.obj);
              self.num = self.$store.state.messageNum;
            }
          } else {
            self.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },
    expeltFn() {
      let self = this;
      let Newdata = {};
      self.$ajaxMore(
        "post",
        self.HOST + "/tr/trExpert/web/getUserFromExpertDept",
        Newdata,
        res => {
          if (res.success) {
            self.$message({
              message: res.msg,
              type: "success"
            });
          } else {
            self.$message({
              message: res.msg,
              type: "error"
            });
            // 跳转到首页
            self.$router.push({ path: "/login" });
          }
        }
      );
    }
  }
};
</script>
<style>
.header {
  background: #232b32;
}
.logo_header {
  vertical-align: top;
  height: 36px;
  margin: 15px 20px 0 20px;
}
.logo_span {
  font-size: 18px;
  display: inline-block;
  border-left: 1px solid #fff;
  height: 27px;
  vertical-align: top;
  line-height: 27px;
  padding-left: 17px;
  margin-top: 20px;
}
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 65px;
  font-size: 22px;
  line-height: 65px;
  color: #fff;
}
.header .logo {
  float: left;
  /* width:250px; */
  text-align: center;
}
.user-info {
  float: right;
  padding-right: 50px;
  font-size: 16px;
  color: #fff;
}
.user-info .el-dropdown-link {
  position: relative;
  display: inline-block;
  /* padding-left: 50px; */
  color: #fff;
  cursor: pointer;
  vertical-align: middle;
}
.user-info .user-logo {
  position: absolute;
  left: 0;
  top: 15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.el-dropdown-menu__item {
  text-align: center;
}
.a_item_box {
  display: inline-block;
  float: right;
  width: 74px;
}
.a_item_box a {
  color: #333;
}
.item sup {
  background: #ec405c;
  border: 0;
}
.header .headerNav {
  float: right;
  height: 65px;
  line-height: 65px;
}
.header .headerNav li {
  float: left;
  padding: 0 20px;
  background: url("../../assets/fengexian.png") no-repeat top right;
}
.linkStyle {
  cursor: pointer;
}
.header .headerNav .picImg {
  display: inline-block;
  width: 37px;
  height: 40px;
  border-radius: 50%;
  line-height: 65px;
  vertical-align: middle;
  /* padding-right: 10px */
}
.header .headerNav .picImg img {
  display: inline-block;
  width: 100%;
}
.header .headerNav span {
  display: inline-block;
  line-height: 65px;
}
.header .user-info .el-dropdown-link .iconfont {
  font-size: 20px;
  font-weight: normal;
  line-height: 65px;
  height: 65px;
}
.header .headerNav .picImg {
  width: 30px;
  height: 30px;
}
.header .headerNav .picImg img {
  vertical-align: top;
}
html body .headerNav .linkStyle .name {
  line-height: 18px;
  transform: translateY(10px);
  text-align: right;
  margin-right: 3px;
}
html body .headerNav .linkStyle .name i + br + i {
  font-size: 12px;
}
</style>
