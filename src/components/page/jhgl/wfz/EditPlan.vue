<template>
  <div class="scroll_x_hidden_box">
    <!-- 基本信息 -->
    <div class="bg_box">
      <div class="jb_news_box box_list">
        <div class="box_header">基本信息</div>
        <div class="item_box">
          <div class="item_left">所属部门-角色</div>
          <div class="item_right">
            {{dept_role}}
          </div>
        </div>
        <!-- 目标层面 -->
        <div class="item_box">
          <div class="item_left">计划层面</div>
          <div class="item_right">
            {{fiveCm[$route.query.levelType]}}
          </div>
        </div>
        <div class="item_box">
          <div class="item_left">所属目标</div>
          <div class="item_right">
            {{targetName}}
          </div>
        </div>
        <!-- 目标 -->
        <div class="item_box">
          <div class="item_left">
            <span class="need">*</span>计划</div>
          <div class="item_right">
            <el-input placeholder="请输入计划名称" v-model="planName" style="width: 800px;">
            </el-input>
          </div>
        </div>
        <!-- 目标描述 -->
        <div class="item_box">
          <div class="item_left">计划描述</div>
          <div class="item_right">
            <el-input placeholder="请输入计划描述" type="textarea" style="width: 800px;" :rows="2" v-model="targetInfo">
            </el-input>
          </div>
        </div>
        <!-- 权重 -->
        <div class="item_box">
          <div class="item_left">
            <span class="need">*</span>权重</div>
          <div class="item_right">
            <el-input placeholder="请输入权重" style="width: 800px;" v-model="theWeight">
            </el-input>
          </div>
        </div>
        <!-- 起止日期 -->
        <div class="item_box">
          <div class="item_left">
            <span class="need">*</span>起止日期</div>
          <div class="item_right">
            <el-date-picker v-model="targetTime" type="daterange" :editable="false" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
          </div>
        </div>
        <div class="item_box">
          <div class="item_left">
            <span class="need">*</span>监督人</div>
          <div class="item_right">
            <el-select v-model="jdName" multiple filterable remote placeholder="请输入姓名或员工号" :remote-method="remoteMethod_jdName" @change="select_change" style="width: 800px;">
              <el-option v-for="item in jdrOptions" :key="item.user_id || item.supervisors" :label="item.checkUserName || item.suv_names" :value="item.user_id || item.supervisors">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="item_box">
          <div class="item_left">
            <!-- <span class="need">*</span> -->
            参与人</div>
          <div class="item_right">
            <el-select v-model="cyName" multiple filterable remote placeholder="请输入姓名或员工号" :remote-method="remoteMethod_cyName" @change="select_change" style="width: 800px;">
              <el-option v-for="item in cyrOptions" :key="item.user_id || item.joins" :label="item.checkUserName || item.join_names" :value="item.user_id || item.joins">
              </el-option>
            </el-select>
          </div>
        </div>
        <!-- 附件说明 -->
        <div class="item_box" style="padding-bottom: 20px;">
          <div class="item_left">附件</div>
          <div class="item_right">
            <cUploader :fileList="fileList" :fileName="fileName" :formData="formData" :beforeFileQueued="beforeFileQueued" :uploadSuccess="uploadSuccess" :uploadError="uploadError" @removeFile="removeFile"></cUploader>
          </div>
        </div>
      </div>
      <!-- 审核方式 -->
      <div class="shfs_box box_list" style="padding-bottom: 20px;">
        <div class="box_header">审核方式</div>
        <!-- 考核标准 -->
        <div class="item_box">
          <div class="item_left">
            <span class="need">*</span>审核方式</div>
          <div class="item_right">
            <el-radio-group v-model="shType">
              <!-- <el-radio :label="2">创建人审核</el-radio> -->
              <el-radio :label="3">人工审核</el-radio>
              <el-radio :label="1">自动审核</el-radio>
            </el-radio-group>
          </div>
          <div v-if="shType - 0 === 3">
            <el-select v-model="checkUserId" filterable remote clearable placeholder="请输入姓名或工号" :remote-method="remoteMethod" @change="select_change" @focus="checkFocus" style="margin: 0 50px;width: 300px;">
              <el-option v-for="item in sgrOptions" :key="item.userId" :label="item.userName" :value="item.userId">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <!-- 指标 -->
      <cAddCommon v-if="shType - 0 === 1" :targetId_prop="fatherTarget" :deptId_prop="deptId" :zbId_prop="zb_id" :zbName_prop="zbName" :khbz_prop="khbz" :khbz_input_prop="khbz_input" :unit_prop="unitName" :standDesc_prop="standDesc" :targetStandInfo_prop="targetStandInfo" :yjLists_prop="yjLists" :unitName_prop="unitName" :radio_prop="radio" :yjTime_prop="yjTime" :formChange="formChange"></cAddCommon>
      <!-- 操作按钮 -->
      <div class="btn_box">
        <el-button type="primary" @click="doSubmit" style="width: 190px;">提交</el-button>
        <a href="javascript:history.go(-1)" style="margin-left: 30px;color: #777;">返回上一步</a>
      </div>
    </div>

  </div>
</template>
<script>
import cUploader from "../../../common/Uploader.vue";
import cAddCommon from "../../../common/add_target_plan_common.vue";
export default {
  components: { cUploader, cAddCommon },
  data() {
    return {
      dept_role: "",
      theWeight: "", // 权重
      fiveCm: ["", "学校层面", "专业层面", "课程层面", "教师层面", "学生层面"],
      // standId: '',
      // standOptions: [],
      fileName: "oldFileName",
      formData: { fileSource: "2" },
      /*
      <<<<<<
      下方为自定义指标库
       */
      zb_id_radio_2: "",
      pageSize2: 8,
      currentPage2: 1,
      totalPage2: 0,
      multipleTable2: [],
      zbList2: [],
      indexName2: "",
      /*
      >>>>>>
      上方为自定义指标库
       */
      activeName: "first",
      zb_id_radio: "",
      unit: "",
      indexSourceOptions: [
        {
          label: "全部",
          value: ""
        },
        {
          label: "学校自建",
          value: 1
        },
        {
          label: "平台自建",
          value: 2
        }
      ],
      indexSource: "",
      ckeckedKeysArr: [],
      keysArr: [],
      fatherTarget: "", // 所属目标
      targetOptions: [], // 所属目标
      jdName: [],
      cyName: [],
      unitName: "",
      indexClass: "",
      wrapStyle: [{ height: "100%" }],
      deptId: "",
      targetName: "",
      planName: "",
      targetInfo: "",
      targetTime: "",
      fileList: [],
      fileListOld: [],
      uploadUrl: this.HOST + "/tr/uploadFile/web/uploadFile",
      // 这一项是上传是必须的参数
      data: {
        fileSource: "2" // 目标上传是为'1', 计划上传时为'2'
      },
      fileSuccessList: [],
      zbName: "指标库",
      zb_id: "",
      radio: "1",
      yjTime: "",
      khbz: "",
      khbzOptions: [],
      khbz_input: "",
      value: "",
      options: [
        {
          value: 1,
          label: "大于等于"
        },
        {
          value: 2,
          label: "大于"
        },
        {
          value: 3,
          label: "等于"
        },
        {
          value: 4,
          label: "小于等于"
        },
        {
          value: 5,
          label: "小于"
        }
      ],
      input: "",
      yjLists: [
        {
          value: "",
          input: ""
        }
      ],
      shType: 3,
      dialogVisible: false,
      propsZb: [],
      indexName: "",
      currentPage: 1,
      pageSize: 8,
      zb_before_id: "",
      totalPage: 0,
      zbList: [],
      xzzbOptions: [
        {
          label: "全部指标",
          value: ""
        },
        {
          label: "定性",
          value: 2
        },
        {
          label: "定量",
          value: 1
        }
      ],
      multipleSelection: [],
      sgrOptions: [],
      jdrOptions: [],
      cyrOptions: [],
      checkUserId: "",
      targetStandInfo: "",
      warnNumList: [],
      standDesc: "",
      starttime: "",
      endtime: ""
    };
  },
  mounted() {
    //   初始化
    this.$ajaxMore(
      "post",
      this.HOST + "/tr/trPlan/web/getPlanDetail",
      { planId: this.$router.currentRoute.params.id },
      res => {
        if (res.success) {
          this.deptId = res.obj.dept_id;
          this.fatherTarget = res.obj.target_id;
          this.targetName = res.obj.target_name;
          this.planName = res.obj.plan_name;
          this.targetInfo = res.obj.plan_content;
          this.targetTime = [res.obj.start_time, res.obj.end_time];
          this.cyName = res.obj.joinIds;
          this.jdName = res.obj.supervisorIds;
          this.theWeight = res.obj.planQz;
          this.fileList = res.obj.fileListForAdd;
          this.cyrOptions = res.obj.joinList;
          this.jdrOptions = res.obj.supervisorList;
          if (res.obj.indexId) {
            this.unit = res.obj.unit;
            this.standDesc = res.obj.standDesc;
            this.zbName = res.obj.indexName;
            this.zb_id = res.obj.indexId;
            this.khbz = res.obj.planStandContion;
            this.khbz_input = res.obj.planStand;
            this.targetStandInfo = res.obj.planStandInfo;
            this.yjLists = [];
            if (res.obj.warn.length) {
              for (let item of res.obj.warn) {
                this.radio = item.warningType.toString();
                this.yjTime = this.mydateFormat.dateCodeYmd(item.waringTime);
                this.yjLists.push({
                  value: item.warningContion,
                  input: item.waringNum
                });
              }
            } else {
              this.yjLists.push({
                value: "",
                input: ""
              });
            }
          }
          this.shType = res.obj.checkTypeId;
          if (res.obj.checkDeptId && res.obj.checkTypeId - 0 === 3) {
            this.checkUserId =
              res.obj.check_user_id +
              "," +
              res.obj.check_user_dept_id +
              "," +
              res.obj.targetRoleId;
            this.sgrOptions.push({
              user_id: res.obj.check_user_id + "_" + res.obj.check_user_dept_id,
              checkUserName:
                res.obj.check_user_name +
                "(" +
                res.obj.check_user_id +
                "," +
                res.obj.dept_name +
                ")",
              checkDeptId: res.obj.checkDeptId
            });
            // self.checkUserId = res.obj.check_user_name + '(' + res.obj.check_user_id + ')'
          }
        } else {
          this.$message({
            type: "error",
            message: res.msg
          });
        }
      }
    );
    this.remoteMethod(this.$store.state.nickname);
    this.getDeptAndRole();
  },
  methods: {
    formChange(str, val) {
      this[str] = val;
    },
    // 获取所属部门角色
    getDeptAndRole() {
      let data = {
        id: this.$route.query.dr
      };
      this.$ajaxGet(
        this.HOST + "/tr/trTarget/web/getDeptAndRoleByCon",
        data,
        res => {
          if (res.success) {
            this.dept_role = res.data.name;
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },
    fatherTargetChange(val) {
      // for (let item of this.targetOptions) {
      //   if (item.id === this.fatherTarget) {
      //     this.targetName = item.target_name;
      //     this.deptId = item.dept_id;
      //     break;
      //   }
      // }
    },
    checkFocus(bol) {
      if (bol) {
        this.remoteMethod(this.$store.state.nickname);
      }
    },
    select_change(val) {
      // console.log(val)
      // console.log(this.checkUserId)
    },
    remoteMethod_jdName(query) {
      if (query !== "") {
        this.sgrOptions = [];
        this.$ajaxMore(
          "post",
          this.HOST + "/tr/trPlan/web/getPlanAuditor",
          { searchName: query },
          res => {
            if (res.success) {
              this.jdrOptions = res.data.data;
            } else {
              this.$message({
                type: "error",
                message: res.msg
              });
            }
          }
        );
      } else {
        this.jdrOptions = [];
      }
    },
    remoteMethod_cyName(query) {
      if (query !== "") {
        this.sgrOptions = [];
        this.$ajaxMore(
          "post",
          this.HOST + "/tr/trPlan/web/getPlanAuditor",
          { searchName: query },
          res => {
            if (res.success) {
              this.cyrOptions = res.data.data;
            } else {
              this.$message({
                type: "error",
                message: res.msg
              });
            }
          }
        );
      } else {
        this.cyrOptions = [];
      }
    },
    remoteMethod(query) {
      if (query !== "") {
        this.sgrOptions = [];
        this.$ajax(
          "post",
          this.HOST + "/tr/trTarget/web/getTargetAuditor",
          { search: query },
          res => {
            if (res.success) {
              this.sgrOptions = res.obj;
            } else {
              this.$message({
                type: "error",
                message: res.msg
              });
            }
          }
        );
      } else {
        this.sgrOptions = [];
      }
    },
    uploadError(file, res) {
      this.$message({
        message: file.name + "上传出错!",
        type: "error"
      });
    },
    uploadSuccess(file, res) {
      if (res.success && res.successList) {
        this.fileName = "oldFileName";
        this.fileList.push(res.successList[0]);
      } else {
        this.$message({
          message: file.name + "上传失败!",
          type: "warning"
        });
      }
    },
    beforeFileQueued(file) {
      if (file.size / (1024 * 1024) > this.$uploadSize) {
        // 超出限制的上传文件大小
        this.$message({
          message: file.name + "大于" + this.$uploadSize + "M，无法上传！",
          type: "warning"
        });
        return false;
      } else {
        return true;
      }
    },
    removeFile(index) {
      this.$confirm(
        "确定移除" +
          (this.fileList[index].fileName || this.fileList[index].oldFileName) +
          "？"
      )
        .then(() => {
          this.fileList.splice(index, 1);
        })
        .catch(() => {});
    },
    beforeUpload(file) {
      if (file.size / (1024 * 1024) > this.$uploadSize) {
        // 超出限制的上传文件大小
        this.$message({
          message: file.name + "大于" + this.$uploadSize + "M，无法上传！",
          type: "warning"
        });
        this.$showRemoveDialog = false;
        return false;
      } else {
        this.$showRemoveDialog = true;
        return true;
      }
    },
    deptId_change(val) {
      this.zb_id = "";
      this.zbName = "指标库";
      this.zbList = [];
      this.shType = "";
    },
    // 数据非空验证的函数
    dataNotNull(options) {
      let { dataobj, _this = this } = options;
      for (let key in dataobj) {
        if (Object.prototype.toString.call(_this[key]) === "[object Array]") {
          if (!_this[key].length) {
            this.$message({
              type: "warning",
              message: dataobj[key]
            });
            return false;
          }
        } else {
          if (!_this[key]) {
            this.$message({
              type: "warning",
              message: dataobj[key]
            });
            return false;
          }
        }
      }
      return true;
    },
    doSubmit() {
      if (
        !this.dataNotNull({
          dataobj: {
            fatherTarget: "请选择所属目标",
            planName: "请填写计划名称",
            targetTime: "请选择起止日期",
            theWeight: "请填写权重",
            jdName: "请选择监督人"
          }
        })
      ) {
        return;
      }
      if (this.targetTime) {
        this.starttime = this.mydateFormat.dateCodeYmd(this.targetTime[0]);
        this.endtime = this.mydateFormat.dateCodeYmd(this.targetTime[1]);
      }
      /*
      合并到每个data上
      */
      let data = {
        id: this.$router.currentRoute.params.id,
        targetId: this.fatherTarget, // 父目标id
        // targetName: this.targetName,  // 目标名称
        planName: this.planName, // 计划名称
        planContent: this.targetInfo, // 计划描述
        startTime: this.starttime, // 开始时间
        endTime: this.endtime, // 结束时间
        fileList: this.fileList, // 附件
        checkType: this.shType, // 审核方式
        supervisorId: this.jdName, // 监督人
        joinId: this.cyName, // 参与人
        planQz: this.theWeight // 权重
      };
      let objAss = {};
      if (this.shType - 0 === 3) {
        // 第三方审核
        if (!this.dataNotNull({ dataobj: { checkUserId: "请选择审核人" } })) {
          return;
        }
        objAss = {
          checkUserId: this.checkUserId
        };
      } else {
        if (!this.dataNotNull({ dataobj: { zb_id: "请选择指标" } })) {
          return;
        }
        if (
          !this.dataNotNull({
            dataobj: {
              khbz: "请选择考核标准",
              khbz_input: "请输入考核标准值"
            }
          })
        ) {
          return;
        }
        // 判断定时设置
        if (this.radio - 0 === 2) {
          // 判断预警
          for (let item of this.yjLists) {
            if (
              !this.dataNotNull({
                dataobj: {
                  value: "请选择预警设置",
                  input: "请填写预警设置值"
                },
                _this: item
              })
            ) {
              return;
            }
          }
          if (
            !this.dataNotNull({ dataobj: { yjTime: "请选择定时通知时间" } })
          ) {
            return;
          }
        }
        this.warnNumList = [];
        for (let item of this.yjLists) {
          if (item.value ^ item.input.trim() === '') {
            this.$message({
              type: 'warning',
              message: "请完整填写预警设置"
            })
            return
          }
          this.warnNumList.push({
            waringNum: item.input,
            warningContion: item.value
          });
        }
        objAss = {
          checkUserId: "",
          indexId: this.zb_id,
          planStandContion: this.khbz,
          planStand: this.khbz_input,
          planStandInfo: this.targetStandInfo,
          warningType: this.radio,
          waringTime:
            this.radio - 0 === 2
              ? this.mydateFormat.dateCodeYmd(this.yjTime)
              : "",
          warningNumList: this.warnNumList
        };
      }
      Object.assign(data, objAss);

      this.$ajaxMore(
        "post",
        this.HOST + "/tr/trPlan/web/editPlan",
        data,
        res => {
          if (res.success) {
            this.$message({
              type: "success",
              message: res.msg
            });
            this.$router.go(-1);
          } else {
            this.$message({
              type: "error",
              message: res.msg
            });
          }
        }
      );
    }
  }
};
</script>
<style scoped>
/* .el-scrollbar__wrap {
  overflow: hidden
} */
.slgl_box {
  padding: 0 0 0 20px;
  background: #eef1f2;
}
.container_box_header {
  height: 60px;
  font-size: 18px;
  color: #37474f;
  line-height: 60px;
  background: #f1f4f5;
}
.operation_box {
  /* height: 78px; */
  background: #fff;
  /* line-height: 78px; */
  padding: 22px 25px;
}
div.item_box {
  font-size: 0;
  margin-top: 17px;
  margin-left: 24px;
}
div.item_box div.item_left {
  display: inline-block;
  width: 114px;
  text-align: right;
  vertical-align: top;
  height: 42px;
  line-height: 42px;
}
div.item_right {
  display: inline-block;
  vertical-align: top;
  margin-left: 32px;
  line-height: 42px;
}
span.need {
  color: #e41622;
  padding-right: 4px;
}
.zb_span {
  display: inline-block;
  vertical-align: top;
  height: 42px;
  box-sizing: border-box;
  border: 1px solid #80b748;
  color: #80b748;
  line-height: 41px;
  padding: 0 60px;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
}
.box_header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #dcdcdc;
  font-size: 14px;
  color: #666;
  padding-left: 27px;
}
.box_header::before {
  content: " ";
  display: inline-block;
  width: 4px;
  height: 14px;
  background: #80b748;
  vertical-align: top;
  margin-top: 18px;
  margin-right: 7px;
}
.box_list {
  background: #fff;
  margin-bottom: 11px;
}
.active {
  color: #ffa665 !important;
}
.is-expanded > .el-tree-node__content .expanded + span i.iconfont {
  color: #feb078 !important;
}
.is-current > .el-tree-node__content > .custom-tree-node .iconfont {
  color: #feb078 !important;
}
.el-upload-list__item.is-success .el-icon-close-tip {
  display: none !important;
}
</style>
