<template>
  <div id="w_zdbg">
    <div class="tab-control tab-controlFixed clearfix">
      <div class="tab-control-item" v-for="(item,index) in items">
        <div v-if="index==0" class="active tab" @click="jobSwitch(item, $event)">{{item.deptName}}</div>
        <div v-else-if="index!=0" class="tab" @click="jobSwitch(item, $event)">{{item.deptName}}</div>
      </div>
    </div>
    <div class="dcBtn">
      <el-button type="primary" class="reverseBtn " size="mini" @click="addDc">
        <!-- <i class="iconfont">&#xe623;</i> -->
        生成报告</el-button>

      <el-button type="warning" class="reverseBtn " size="mini" @click="historyFn">
        <!-- <i class="iconfont">&#xe623;</i> -->
        历史报告</el-button>
    </div>

    <div>
      <div style="font-size: 18px; margin-bottom: 10px;
    color: rgb(55, 71, 79);">自我诊断报告</div>

      <div class="itemBox special_tableColor">
        <div class="titleBox">
          <span class="titleName">目标与计划完成情况</span>
        </div>
        <div style="padding:0 20px" class="special_table_box">
          <table class="special_table" style="width:100%;margin-bottom: 50px;">
            <thead>
              <tr>
                <th class="leftAlign firstTh" style="table-layout: fixed">
                  <span>目标</span>
                </th>
                <th class="leftAlign" style="width:200px">负责人</th>
                <th>起止日期</th>
                <th class="" style="width:200px">完成情况</th>
                <th class="leftAlign" style="width:200px">达成度</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item,index) in zyldtTable">
                <tr :key="index">
                  <td class="leftAlign firstTh">
                    <span>{{item.targetName}}</span>
                  </td>
                  <td class="leftAlign">{{item.managerName}}</td>
                  <td>{{item.statTime_w}}-{{item.endTime_w}}</td>
                  <td class="">{{item.resultType}}</td>
                  <td class="leftAlign">{{item.progress}}</td>
                </tr>
              </template>
            </tbody>
          </table>

          <table class="special_table" style="width:100%">
            <thead>
              <tr>
                <th class="leftAlign firstTh">
                  <span>计划</span>
                </th>
                <th class="leftAlign firstTh">
                  <span>所属目标</span>
                </th>
                <th>起止日期</th>
                <th class="leftAlign">负责人</th>
                <th class="leftAlign">完成情况</th>
                <th class="leftAlign">达成度</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item,index) in PlanZyldtTable">
                <tr :key="index">
                  <td class="leftAlign firstTh">
                    <span>{{item.plan_name}}</span>
                  </td>
                  <td class="leftAlign firstTh">
                    <span style="max-width:300px">{{item.target_name}}</span>
                  </td>
                  <td>{{item.start_time}}-{{item.end_time}}</td>
                  <td class="leftAlign">{{item.manager_name}}</td>
                  <td class="leftAlign">{{item.result_type}}</td>
                  <td class="leftAlign">{{item.progress}}</td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>

      </div>
    </div>

    <div class="itemBox special_tableColor">
      <div class="titleBox">
        <span class="titleName">目标与计划未完成情况说明</span>
        <span style="width:30%;float:right">
          <i class="iconfont" style="color:rgb(180, 187, 189);cursor: pointer;" title="编辑" @click="ediDep">&#xe6b3;</i>
        </span>
      </div>
      <div style="padding:10px 30px 0 30px">
        <template v-if="flagEdit">
          {{UnfinishedDescrip}}
        </template>
        <template v-else>
          <div>
            <el-input placeholder="请输入目标与计划未完成情况说明" type="textarea" :rows="3" style="width:80%; margin-bottom: 10px;" v-model.trim="smTextarea">
            </el-input>
          </div>
          <el-button type="primary" @click="doSubmit" style="width: 100px;">保存</el-button>
          <el-button @click="flagEdit=!flagEdit" style="width: 100px;">取消</el-button>
        </template>

      </div>

    </div>

    <div class="itemBox special_tableColor">
      <div class="titleBox">
        <span class="titleName">下一年度改进计划</span>
        <span style="width:30%;float:right">
          <i class="iconfont" @click="editGwzeFn" style="color:rgb(180, 187, 189);cursor: pointer;" title="编辑">&#xe6b3;</i>
        </span>
      </div>
      <div style="padding:10px 30px 0 30px">
        <template v-if="flagEdit1">
          {{nextSm}}
        </template>
        <template v-else>
          <div>
            <el-input placeholder="请输入下一年度改进计划" type="textarea" :rows="3" style="width:80%; margin-bottom: 10px;" v-model.trim="nextPlan">
            </el-input>
          </div>
          <el-button type="primary" @click="doSubmit1" style="width: 100px;">保存</el-button>
          <el-button @click="flagEdit1=!flagEdit1" style="width: 100px;">取消</el-button>
        </template>

      </div>
    </div>

    <el-button type="primary" class="reverseBtn" size="" @click="addDc" style="width:240px">
      <!-- <i class="iconfont">&#xe623;</i> -->
      生成报告</el-button>

    <el-dialog title="编写下一年度改进计划" :visible.sync="dialogVisible" width="30%">
      <el-input placeholder="" v-model="nextNew"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editGwzeSure">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="生成报告" :visible.sync="dialogVisible1" width="40%">
      <div style=" width: 90%; margin: 0 auto;">
        <div style="margin-bottom:10px">链接分享</div>
        <div>
          <el-input placeholder="" id="copy" v-model="ljNum" style="width:55%; margin: -20px 0;"></el-input>
          <el-button @click="copeLj">复制链接</el-button>
          <a class="btnOpen el-button" :href="ljNum">打开</a>
          <!-- <el-button @click="openBG" :href="ljNum">打开</el-button> -->
        </div>
      </div>

      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible1 = false">取 消</el-button> -->
        <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [], // 顶部切换
      deptId: 1,
      dept_role: 1,
      roleId: 1,
      zyldtTable: [
        {
          name: "顶部切换顶部切换",
          value: "100"
        },
        {
          name: "顶部切换顶部切换",
          value: "100"
        },
        {
          name: "顶部切换顶部切换",
          value: "100"
        }
      ],
      nextSm: "",
      nextNew: "",
      dialogVisible: false,
      smTextarea: "",
      UnfinishedDescrip: "",
      flagEdit: false,
      flagEdit1: false,
      nextPlan: "",
      PlanZyldtTable: [], //计划列表
      dialogVisible1: false,
      ljNum: ""
    };
  },
  watch: {},
  mounted() {
    let self = this;
    self.$ajax(
      "post",
      self.HOST + "/tr/autognosis/web/autognosiShow",
      {},
      res => {
        if (res.success) {
          self.items = res.obj;
          let defaultDepId = res.obj[0].deptId;
          self.deptId = defaultDepId;
          self.dept_role = res.obj[0].id;
          self.roleId = res.obj[0].roleId;

          // 获取目标列表
          self.getTargerFn();
          // 获取计划列表
          self.getPlanFn();
        } else {
          self.$message({
            message: res.msg,
            type: "error"
          });
        }
      }
    );
  },
  methods: {
    // 切换头部不猛
    //   切换顶部用户身份
    jobSwitch(item, event) {
      let e = event || window.event;
      let aaaList = document.getElementsByClassName("tab");
      for (let i = 0; i < aaaList.length; i++) {
        aaaList[i].className = "tab";
      }
      e.currentTarget.className = "tab active";

      // 部门id
      this.deptId = item.deptId;
      this.dept_role = item.id;
      this.roleId = item.roleId;

      (this.flagEdit = false),
        (this.flagEdit1 = false),
        // 获取目标列表
        this.getTargerFn();
      // 获取计划列表
      this.getPlanFn();
    },
    // 获取目标列表
    getTargerFn() {
      let self = this;
      let Newdata = {
        deptId: this.deptId,
        roleId: this.roleId,
        levelType: "",
        targetType: "",
        startTime: "",
        endTime: "",
        searchName: "",
        startPage: 1,
        pageSize: 100000,
        targetStatus: "",
        checkStatus: "",
        orderBy: false
      };
      self.$ajaxMore(
        "post",
        self.HOST + "/tr/trTarget/web/getTargetListByCon",
        Newdata,
        res => {
          if (res.success) {
            let newData = res.data.data;
            for (let item of newData) {
              item.statTime_w = this.mydateFormat.dateCodeYmd(item.startTime);
              item.endTime_w = this.mydateFormat.dateCodeYmd(item.endTime);
            }
            console.log("newData", newData);
            this.zyldtTable = newData;
          } else {
            self.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },

    // 获取目标列表
    getPlanFn() {
      let self = this;
      let data = {
        planType: "",
        deptId: self.deptId,
        resultType: "",
        startTime: "",
        endTime: "",
        searchName: "",
        pageNumber: 1,
        pageSize: 100000
      };
      self.$ajaxMore(
        "post",
        self.HOST + "/tr/trPlan/web/getPlanLists",
        data,
        res => {
          if (res.success) {
            this.PlanZyldtTable = res.obj;
          } else {
            self.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },
    ediDep() {
      this.smTextarea = "";
      this.flagEdit = !this.flagEdit;
    },
    doSubmit() {
      if (this.smTextarea === "") {
        this.$message({
          type: "warning",
          message: "请输入目标与计划未完成情况说明!"
        });
        return;
      }
      // 请求数据给后台 再重新渲染页面
      this.flagEdit = !this.flagEdit;
      this.UnfinishedDescrip = this.smTextarea;
    },
    editGwzeFn() {
      this.nextPlan = "";
      this.flagEdit1 = !this.flagEdit1;
    },
    editGwzeSure() {},
    doSubmit1() {
      if (this.nextPlan === "") {
        this.$message({
          type: "warning",
          message: "请输入下一年度改进计划!"
        });
        return;
      }
      // 请求数据给后台 再重新渲染页面
      this.flagEdit1 = !this.flagEdit1;
      this.nextSm = this.nextPlan;
    },
    // 导出
    addDc() {
      let self = this;
      let data = {
        deptId: self.deptId,
        roleId: this.roleId,
        thisStep: this.UnfinishedDescrip,
        nextStep: this.nextSm
      };
      self.$ajax(
        "post",
        self.HOST + "/tr/diagnose/web/createReport",
        data,
        res => {
          if (res.success) {
            this.ljNum = res.obj.reportPath;
            this.dialogVisible1 = true;
          } else {
            self.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },
    // 生成报告
    sureSCBG() {},
    // 复制链接
    copeLj() {
        var e = document.getElementById("copy");
        e.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
 
    },
    // 打开报告
    openBG() {},
    // 历史纪录
    historyFn() {
      // 跳转链接 需要传递什么参数
       this.$router.push({ path: "/zdbg_ls/" + this.deptId ,  query:{
         roleId: this.roleId
       }});
     
    }
  }
};
</script>

<style scoped>
#w_zdbg {
  padding: 0 1.64%;
  padding-top: 66px;
}
#w_zdbg .itemBox {
  padding: 15px 0;
  background: #fff;
  margin-bottom: 24px;
}
.tab-control {
  width: 100%;
  font-size: 14px;
  color: #76838f;
  background-color: #fff;
  border-bottom: 1px solid #e4eaec;
  margin-bottom: 26px;
}
.tab-control .tab-control-item div {
  line-height: 38px;
  float: left;
  padding: 0 25px;
  background-color: #fff;
  border-right: 1px solid #fff;
  cursor: pointer;
}
.tab-control .tab-control-item .active {
  position: relative;
  top: 0px;
  z-index: 2;
  height: 38px;
  background-color: #f1f4f5;
  border-right: 1px solid #e4eaec;
  border-bottom: 1px solid #f1f4f5;
  margin-bottom: -1px;
}

.titleBox {
  padding: 0 20px;
  border-bottom: 1px solid #ebeef5;
  margin-bottom: 15px;
}
#w_zdbg .titleName {
  display: inline-block;
  line-height: 18px;
  font-size: 16px;
  color: #37474f;
  padding-left: 10px;
  border-left: 5px solid #70ad47;
  margin-bottom: 15px;
}
.dcBtn {
  position: absolute;
  right: 1.64%;
  top: 60px;
}
.special_table_box .special_table .leftAlign {
  text-align: left;
  padding-left: 20px;
  table-layout: fixed;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.special_table_box .special_table .leftAlignA {
  text-align: left;
  padding-left: 20px;
  table-layout: fixed;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.firstTh span {
  display: block;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  table-layout: fixed;
  /* position: absolute; */
}
</style>
