<template>
  <div id="jm_bzlgl">
    <el-button type="warning" class="reverseBtn dcBtn" size="mini" @click="addDc" >
      <i class="iconfont">&#xe623;</i>导出</el-button>
    <div>
      <table style="width: 100%;table-layout:fixed">
        <tbody>
          <tr>
            <td style="width: 250px;">
              <div class="contntBox">
                <div class="department-title">岗位</div>
                <div class="department-body gwBody scroll_x_hidden_box">
                  <el-scrollbar :wrapStyle="wrapStyle">
                    <el-tree :data="departmentData" @node-click="nodeClick" node-key="id" accordion :default-expanded-keys="keysArr" :default-checked-keys="ckeckedKeysArr">
                      <span class="custom-tree-node" slot-scope="{ node, data }" @click="node.isActive = true">
                        <span style="font-size:14px;color:#000">
                          <i class="iconfont" style="color: #feb078" v-if="isChile(node)" :class="{ active: node.isActive}">&#xe605;</i>
                          <i class="iconfont" style="color: #cccccc" v-else :class="{ active: node.isActive}">&#xe639;</i>
                          {{ node.label }}</span>
                      </span>
                    </el-tree>
                  </el-scrollbar>
                </div>
              </div>

            </td>
            <td>
              <div class="contntBox">
                <div class="department-title">
                  <span class="bgIconfont">
                    <i class="iconfont">&#xe619;</i>
                  </span>岗位职责
                  <span class="bgIconfont AddTcontont">
                    <i class="iconfont" @click="addGwze()">&#xe623;</i>
                  </span>
                </div>
                <div class="department-body gwzzBody">
                  <template v-if="gwzzList.length==0">
                    <div class="nodataPic_zg" style="height:358px">
                      <img src="../../../assets/empty.jpg" />
                    </div>
                  </template>
                  <template v-else>
                    <ul>
                      <template v-for="item in gwzzList">
                        <li :key="item.id" @click="toWorkList(item)" :class="dutyIdNew==item.id?'activeGWStyle':''">
                          <span class="name">{{item.dutyName}}</span>
                          <i class="jt el-icon-arrow-right"></i>
                          <span class="btnGroup">
                            <i class="iconfont" @click.stop="editGwzeFn(item)" title="编辑">&#xe6b3;</i>
                            <i class="iconfont" @click.stop="delGwzeFn(item.id)" title="删除">&#xe601;</i>
                          </span>
                        </li>
                      </template>
                    </ul>
                  </template>

                </div>
              </div>
            </td>
            <td>
              <div class="contntBox contntBoxA">
                <div class="department-title">
                  <span class="bgIconfont otherTcontont">
                    <i class="iconfont">&#xe609;</i>
                  </span>工作任务
                  <span class="bgIconfont AddTcontont">
                    <i class="iconfont" @click="addGzrw()">&#xe623;</i>
                  </span>
                </div>
                <div class="department-body gzbzBody">
                  <template v-if="zzbzList.length==0">
                    <div class="nodataPic_zg" style="height:358px">
                      <img src="../../../assets/empty.jpg" />
                    </div>
                  </template>
                  <template v-else>
                    <div class="zzbzListGroup">
                      <template v-for="(item,index) in zzbzList">
                        <div :key="index" class="zzbzBtn">
                          <el-button :class="{greenStyle:greenStyleFlag==index}" style="margin-bottom:10px" size="mini" @click="workListFn(index)">{{item.workName}}</el-button>
                          <div class="zzbzBtnGroup">
                            <i class="iconfont" @click.stop="editGzrwFn(item.id)" title="编辑">&#xe6b3;</i>
                            <i class="iconfont" @click.stop="delGzrwFn(item.id)" title="删除">&#xe601;</i>
                          </div>
                        </div>

                      </template>
                    </div>
                    <div class="itemTitle">
                      <span class="title">工作流程</span>
                      <span style="float:right">
                        <el-tag size="small" style="background-color: #e4eaec;border-radius: 20px">
                          <a style="font-size: 12px;color: #76838F" v-if="zzbzgroup.fileList.length>0" :href="zzbzgroup.fileList[0].fileUrl" :download="zzbzgroup.fileList[0].oldFileName">查看详情</a>
                          <a style="font-size: 12px;color: #76838F" v-else @click="noData">查看详情</a>
                        </el-tag>
                      </span>
                    </div>
                    <div class="itemTitle">
                      <div class="title">工作标准</div>
                      <ul class="zzbzgroupGroup">
                        <li>
                          {{zzbzgroup.workStand}}
                        </li>
                      </ul>
                    </div>
                    <div class="itemTitle">
                      <div class="title">对应制度</div>
                      <ul class="zdGroup">
                        <template v-for="(item,index) in zzbzgroup.workStandList">
                          <li :key="index">
                            <i class="el-icon-document"></i>
                            {{item.name}}
                            <a class="downLink" :href="item.link" :download="item.link">
                              <i class="iconfont">&#xe63a;</i>
                            </a>
                          </li>
                        </template>
                      </ul>
                    </div>
                  </template>

                </div>
              </div>
            </td>
          </tr>
        </tbody>

      </table>
      <el-row :gutter="20">
        <el-col :span="12">
          <!-- <template >
              <div class="nodataPic_zg" style="height:358px">
                <img src="../../../assets/empty.jpg" />
              </div> 
            </template> -->

        </el-col>
      </el-row>
    </div>
    <el-dialog title="修改岗位职责名称" :visible.sync="dialogVisible" width="30%">
      <el-input placeholder="请输入修改岗位职责名称" v-model="zzName"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editGwzeSure">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      zbFather_label: "",
      userIdNew: "", //用户id
      wrapStyle: [{ height: "100%" }],
      gwzzFlag: "",
      departmentData: [], //左侧树形结构
      keysArr: [], //树形结构
      ckeckedKeysArr: [], //树形结构
      zb_before_id: "",
      zb_before_name: "",
      gwzzList: [],
      props: {
        label: "name",
        children: "zones"
      },
      count: 1,
      zzbzList: [],
      zzbzgroup: [],
      dyzdlist: [],
      greenStyleFlag: 0,
      dialogVisible: false,
      zzName: "", //当前编辑岗位的新名字
      dialogId: "", //当前编辑岗位的新id
      dutyIdName: "" ,//传递当前的岗位职责名称
      flagDc:false,//导出的flag
    };
  },
  watch: {},
  mounted() {
    this.getDpartment();
  },
  methods: {
    // 获取左侧树形结构
    getDpartment() {
      this.$ajax("get", this.HOST + "/tr/trStandLink/web/getDuty", {}, res => {
        if (res.success) {
          this.departmentData = [];
          this.keysArr = [];
          this.ckeckedKeysArr = [];
          this.departmentData = res.data.deptList;
          this.keysArr.push(res.data.deptList[0].id);
          if (res.data.deptList[0].children) {
            this.ckeckedKeysArr.push(res.data.deptList[0].children[0].id);
            this.zb_before_id = res.data.deptList[0].children[0].id;
            this.zb_before_name = res.data.deptList[0].children[0].label;
            this.zbFather_label = res.data.deptList[0].label;
          }
          this.getgwzzFn();
        } else {
          self.$message({
            message: res.msg,
            type: "error"
          });
        }
      });
    },
    // 获取左侧树形结构 点击事件
    nodeClick(data) {
      let self = this;
      if (data.children) {
        if (data.children.length > 0) {
          data.isActive = true;
          this.zbFather_label = data.label;
          console.log("this.zbFather_label", this.zbFather_label);
          this.flagDc=true
        }
      } else {
        self.gwzzList = [];
        data.isActive = true;
        this.flagDc=false
        self.zb_before_id = data.id;
        self.zb_before_name = data.label;
        self.getgwzzFn();
      }
    },

    isChile(node) {
      // console.log('77777', node)
      if (node == null) {
        return false;
      }
      let childSize = node.childNodes.length;
      if (childSize === 0 && node.isLeaf === true) {
        return false;
      }
      return true;
    },
    // 岗位职责
    getgwzzFn() {
      let self = this;
      // self.userIdNew = self.$store.state.userId
      let obj = {
        roleId: self.zb_before_id
        // userId:self.userIdNew
      };
      self.$ajaxMore(
        "post",
        self.HOST + "/tr/trStandLink/web/getRoleDuty",
        obj,
        res => {
          if (res.success) {
            self.gwzzList = res.obj;
            self.dutyIdNew = res.obj[0].id;
            self.dutyIdName = res.obj[0].dutyName;
            if (self.dutyIdNew) {
              self.workFn();
            }
          } else {
            // self.$message({
            //   message: res.msg,
            //   type: "error"
            // });
          }
        }
      );
    },
    // 添加岗位职责
    addGwze() {
      this.$router.push({
        path: "/Add_jm_bzlzbk/" + this.zb_before_id,
        query: { dutyIdNew: 0, dutyName: "" }
      });
    },
    // 编辑岗位职责
    editGwzeFn(item) {
      this.dialogId = item.id;
      this.dialogVisible = true;
    },
    editGwzeSure() {
      let self = this;
      let obj = {
        dutyName: this.zzName,
        id: this.dialogId
      };
      self.$ajaxMore(
        "post",
        self.HOST + "/tr/trStandLink/web/editRoleDuty",
        obj,
        res => {
          if (res.success) {
            this.dialogVisible = false;
            this.zzName = "";
            this.getgwzzFn();
          } else {
            self.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },
    // 删除岗位职责
    delGwzeFn(id) {
      let self = this;
      this.$confirm("您确定要删除吗？删除后,不可恢复", "删除确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          self.$ajaxMore(
            "post",
            self.HOST + "/tr/trStandLink/web/delRoleDuty",
            { id: id },
            res => {
              if (res.success) {
                self.$message({
                  message: res.msg,
                  type: "success"
                });
                self.getgwzzFn();
              } else {
                self.$message({
                  message: res.msg,
                  type: "error"
                });
              }
            }
          );
        })
        .catch(() => {});
    },

    toWorkList(v) {
      this.dutyIdNew = v.id;
      this.dutyIdName = v.dutyName;
      this.workFn();
    },
    // 工作任务
    workFn() {
      let self = this;
      let obj = {
        dutyId: self.dutyIdNew
      };
      self.$ajaxMore(
        "post",
        self.HOST + "/tr/trStandLink/web/getWorks",
        obj,
        res => {
          if (res.success) {
            this.zzbzList = res.obj;
            this.zzbzgroup = res.obj[0];
          } else {
            self.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },
    // 添加工作任务
    addGzrw() {
      this.$router.push({
        path: "/Add_jm_bzlzbk/" + this.zb_before_id,
        query: { dutyIdNew: this.dutyIdNew, dutyName: this.dutyIdName }
      });
    },
    // 根据工作任务获取name更新任务列表
    workListFn(v) {
      this.greenStyleFlag = -1;
      this.zzbzgroup = this.zzbzList[v];
    },
    WorkflowFn() {},

    // 编辑工作任务
    editGzrwFn(id) {
      this.$router.push({
        path: "/edit_jm_bzlzbk/" + id,
        query: { dutyIdNew: this.dutyIdNew }
      });
    },

    // 删除作任务
    delGzrwFn(id) {
      let self = this;
      this.$confirm("您确定要删除吗？删除后,不可恢复", "删除确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          self.$ajaxMore(
            "post",
            self.HOST + "/tr/trStandLink/web/delWorks",
            { id: id },
            res => {
              if (res.success) {
                self.$message({
                  message: res.msg,
                  type: "success"
                });
                self.workFn();
              } else {
                self.$message({
                  message: res.msg,
                  type: "error"
                });
              }
            }
          );
        })
        .catch(() => {});
    },
    //
    noData() {
      this.$message({
        message: "暂无工作流程",
        type: "warning"
      });
    },
    // 导出
    addDc() {
      let self = this;
      if(!this.flagDc){
         let obj = {
        deptName: self.zbFather_label,
        roleId: self.zb_before_id,
        roleName: self.zb_before_name
      };
      location.href =
        this.HOST +
        "/tr/trStandLink/web/exportExcel?deptName=" +
        self.zbFather_label +
        "&roleId=" +
        self.zb_before_id +
        "&roleName=" +
        self.zb_before_name;
      }else{
        this.$message({
          message: "请选择具体岗位",
          type: "warning"
        });
      }
    
    }
  }
};
</script>

<style scoped>
#jm_bzlgl {
  padding: 0 1.64%;
}
#jm_bzlgl table td {
  vertical-align: top;
}
#jm_bzlgl .department-title {
  position: relative;
  height: 60px;
  padding: 0 0 0 20px;
  line-height: 60px;
  border-bottom: 1px solid #ebeef5;
  margin-bottom: 10px;
}
.contntBox {
  margin-right: 20px;
  background-color: #fff;
}
.contntBoxA {
  margin-right: 0;
}
#jm_bzlgl .bgIconfont {
  margin-right: 11px;
  text-align: center;
  display: inline-block;
  /* line-height: 60px; */
  vertical-align: middle;
  width: 22px;
  height: 22px;
  background-color: #70ad47;
}
#jm_bzlgl .bgIconfont .iconfont {
  color: white !important;
  font-size: 16px;
  border-radius: 5px;
  display: inline-block;
  line-height: 24px;
  vertical-align: top;
  width: 22px;
  height: 22px;
  margin-left: -7px;
}
#jm_bzlgl .otherTcontont .iconfont {
  margin-left: 1px;
}
#jm_bzlgl .AddTcontont .iconfont {
  margin-left: -1px;
  margin-top: -1px;
}
#jm_bzlgl .AddTcontont {
  cursor: pointer;
  position: absolute;
  right: 0px;
  bottom: 18px;
}
.gwBody {
  height: 600px;
  padding: 20px;
  padding-top: 0;
}
.gwzzBody {
  padding: 0 10px;
  height: 620px;
}
.gwzzBody li {
  /* padding-left: 10px;
  padding-right: 10px; */
  padding: 12px 10px;
  /* height: 48px; */
  line-height: 24px;
  color: #303133;
  cursor: pointer;
  border-bottom: 1px solid #ededed;
  font-size: 13px;
  -webkit-transition: border-bottom-color 0.3s;
  transition: border-bottom-color 0.3s;
  outline: 0;
}
/* .gwzzBody li .btnGroup {
  color: #ccc;
} */
.gwzzBody li:last-child {
  border-bottom: none;
}
.gwzzBody li:hover .name {
  font-weight: 500;
}
.gwzzBody li .name {
  display: inline-block;
  width: 62%;
}
.gwzzBody li:hover {
  background-color: #f6f7fb;
}
.gwzzBody li:hover .btnGroup .iconfont {
  color: #928d87;
}
.gwzzBody li .jt {
  float: right;
  line-height: 24px;
  font-weight: 300;
}
.gwzzBody li .btnGroup {
  float: right;
  padding: 0 20px;
}
.gwzzBody li .btnGroup .iconfont {
  padding-left: 10px;
  color: #ccc;
}
.gzbzBody {
  height: 600px;
  padding: 10px;
}
.zzbzListGroup .el-button:first-child {
  margin-right: 10px;
}
.zzbzListGroup {
  margin-bottom: 10px;
}
.itemTitle {
  padding: 20px 0;
  border-bottom: 1px solid #ededed;
}
.itemTitle .title {
  margin-bottom: 10px;
}
.zzbzgroupGroup li {
  line-height: 26px;
  font-size: 12px;
}
.zdGroup li {
  position: relative;
  padding-right: 18px;
  line-height: 26px;
  font-size: 12px;
}
.downLink {
  position: absolute;
  right: 6px;
  bottom: 0;
  /* float: right; */
  height: 26px;
}
.zdGroup .downLink .iconfont {
  color: #cbcbcb;
  font-size: 20px;
}
.greenStyle {
  background-color: #70ad47;
  color: #fff;
}
.nodataPic_zg {
  width: 100%;
  height: 600px;
  background-color: #fff;
  text-align: center;
}
.nodataPic_zg img {
  display: inline-block;
  margin-top: 100px;
  width: 80%;
}
.zzbzBtn {
  position: relative;
  display: inline-block;
}
.zzbzBtn:hover .zzbzBtnGroup {
  display: block;
}
.zzbzBtnGroup {
  display: none;
  position: absolute;
  left: 0;
  bottom: -19px;
  z-index: 8;
  background-color: #454c52;
  color: #fff;
  padding: 5px 10px;
}
.zzbzBtnGroup .iconfont {
  cursor: pointer;
  margin-right: 5px;
}
.zzbzBtnGroup .iconfont:hover {
  color: #70ad47;
}
.dcBtn {
  position: absolute;
  right: 1.64%;
  top: 14px;
}
#jm_bzlgl .activeGWStyle{
  color: #70ad47;
}
</style>
