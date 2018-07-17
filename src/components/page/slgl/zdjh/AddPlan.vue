<template>
  <div class="scroll_x_hidden_box">
    <!-- <div class="container_box_header">制定计划</div> -->
    <!-- 基本信息 -->
    <div class="bg_box">
    <div class="jb_news_box box_list">
      <div class="box_header">基本信息</div>
      <div class="item_box">
        <div class="item_left"><span class="need">*</span>所属目标</div>
        <div class="item_right">
          {{fatherTargetName}}
        </div>
      </div>
      <!-- 目标 -->
      <div class="item_box">
        <div class="item_left"><span class="need">*</span>计划</div>
        <div class="item_right">
          <el-input
            placeholder="请输入计划名称"
            style="width: 800px;"
            v-model="planName">
          </el-input>
        </div>
      </div>
      <!-- 目标描述 -->
      <div class="item_box">
        <div class="item_left">计划描述</div>
        <div class="item_right">
          <el-input
            placeholder="请输入计划描述"
            type="textarea"
            :rows="2"
            style="width: 800px;"
            v-model="targetInfo">
          </el-input>
        </div>
      </div>
        <!-- 标准 -->
        <!-- <div class="item_box" v-if="false">
          <div class="item_left">工作标准</div>
          <div class="item_right">
            <el-select v-model="standId" multiple filterable placeholder="请选择量化标准" style="width: 800px;">
              <el-option v-for="item in standOptions" :key="item.standId" :label="item.standName" :value="item.standId">
              </el-option>
            </el-select>
          </div>
        </div> -->
      <!-- 起止日期 -->
      <div class="item_box">
        <div class="item_left"><span class="need">*</span>起止日期</div>
        <div class="item_right">
          <el-date-picker
            v-model="targetTime"
            type="daterange"
            :editable="false"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </div>
      <div class="item_box">
        <div class="item_left"><span class="need">*</span>监督人</div>
        <div class="item_right">
          <el-select
              v-model="jdName"
              multiple
              filterable
              remote
              placeholder="请输入姓名或员工号"
              :remote-method="remoteMethod"
              @change="select_change"
              style="width: 800px;">
              <el-option
                v-for="item in sgrOptions"
                :key="item.user_id"
                :label="item.checkUserName"
                :value="item.user_id">
              </el-option>
            </el-select>
        </div>
      </div>
      <div class="item_box">
        <div class="item_left">
        参与人</div>
        <div class="item_right">
          <el-select
              v-model="cyName"
              multiple
              filterable
              remote
              placeholder="请输入姓名或员工号"
              :remote-method="remoteMethod"
              @change="select_change"
              style="width: 800px;">
              <el-option
                v-for="item in sgrOptions"
                :key="item.user_id"
                :label="item.checkUserName"
                :value="item.user_id">
              </el-option>
            </el-select>
        </div>
      </div>
      <!-- 附件说明 -->
      <div class="item_box" style="padding-bottom: 20px;">
        <div class="item_left">附件</div>
        <div class="item_right">
            <cUploader :fileList="fileList" :fileName="fileName"
              :formData="formData"
              :beforeFileQueued="beforeFileQueued"
              :uploadSuccess="uploadSuccess"
              :uploadError="uploadError"
              @removeFile="removeFile"
            ></cUploader>
        </div>
      </div>
    </div>

    <!-- 审核方式 -->
    <div class="shfs_box box_list" style="padding-bottom: 20px;">
      <div class="box_header">审核方式</div>
      <!-- 考核标准 -->
      <div class="item_box">
        <div class="item_left"><span class="need">*</span>审核方式</div>
        <div class="item_right">
          <el-radio-group v-model="shType">
            <!-- <el-radio :label="2">创建人审核</el-radio> -->
            <el-radio :label="3">人工审核</el-radio>
            <el-radio :label="1">自动审核</el-radio>
          </el-radio-group>
        </div>
        <div v-if="shType == 3">
          <el-select
              v-model="checkUserId"
              filterable
              remote
              clearable
              placeholder="请输入姓名或工号"
              :remote-method="remoteMethod"
              @change="select_change"
              @focus="checkFocus"
              style="margin: 0 50px;width: 300px;">
              <el-option
                v-for="item in sgrOptions"
                :key="item.user_id"
                :label="item.checkUserName"
                :value="item.checkDeptId">
              </el-option>
            </el-select>
        </div>
      </div>
    </div>
    <!-- 指标 -->
    <cAddCommon
      v-if="shType - 0 === 1"
      :targetId_prop="fatherTarget"
      :deptId_prop="deptId"
      :zbId_prop="zb_id"
      :zbName_prop="zbName"
      :khbz_prop="khbz"
      :khbz_input_prop="khbz_input"
      :unit_prop="unitName"
      :standDesc_prop="standDesc"
      :targetStandInfo_prop="targetStandInfo"
      :yjLists_prop="yjLists"
      :unitName_prop="unitName"
      :radio_prop="radio"
      :yjTime_prop="yjTime"
      :formChange="formChange"
      ></cAddCommon>

    <!-- 操作按钮 -->
    <div class="btn_box">
      <el-button type="primary" @click="doSubmit"  style="width: 190px;">提交</el-button>
      <a href="javascript:history.go(-1)" style="margin-left: 30px;color: #777;">返回上一步</a>
    </div>

</div>
  </div>
</template>
<script>
import cUploader from '../../../common/Uploader.vue'
import cAddCommon from '../../../common/add_target_plan_common.vue'
export default {
  components: { cUploader, cAddCommon },
  data () {
    return {
      // standId: '',
      // standOptions: [],
      fileName: 'oldFileName',
      formData: {fileSource: '2'},
      /*
      <<<<<<
      下方为自定义指标库
       */
      zb_id_radio_2: '',
      pageSize2: 8,
      currentPage2: 1,
      totalPage2: 0,
      multipleTable2: [],
      zbList2: [],
      indexName2: '',
      /*
      >>>>>>
      上方为自定义指标库
       */
      activeName: 'first',
      zb_id_radio: '',
      indexSourceOptions: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '学校自建',
          value: 1
        },
        {
          label: '平台自建',
          value: 2
        }
      ],
      indexSource: '',
      keysArr: [],
      ckeckedKeysArr: [],
      fatherTarget: '', // 所属目标
      fatherTargetName: [], // 所属目标
      jdName: [],
      cyName: [],
      unitName: '',
      indexClass: '',
      wrapStyle: [{'height': '100%'}],
      deptId: '',
      targetName: '',
      planName: '',
      targetInfo: '',
      targetTime: '',
      fileList: [],
      uploadUrl: this.HOST + '/tr/uploadFile/web/uploadFile',
      // 这一项是上传是必须的参数
      data: {
        fileSource: '2' // 目标上传是为'1', 计划上传时为'2'
      },
      fileSuccessList: [],
      zbName: '指标库',
      zb_id: '',
      radio: '1',
      yjTime: '',
      khbz: '',
      khbzOptions: [],
      khbz_input: '',
      value: '',
      options: [
        {
          value: 1,
          label: '大于等于'
        },
        {
          value: 2,
          label: '大于'
        },
        {
          value: 3,
          label: '等于'
        },
        {
          value: 4,
          label: '小于等于'
        },
        {
          value: 5,
          label: '小于'
        }
      ],
      input: '',
      yjLists: [
        {
          value: '',
          input: ''
        }
      ],
      shType: 3,
      dialogVisible: false,
      propsZb: [],
      indexName: '',
      currentPage: 1,
      pageSize: 8,
      zb_before_id: '',
      totalPage: 0,
      zbList: [],
      xzzbOptions: [
        {
          label: '全部指标',
          value: ''
        },
        {
          label: '定性',
          value: 2
        },
        {
          label: '定量',
          value: 1
        }
      ],
      multipleSelection: [],
      sgrOptions: [],
      checkUserId: '',
      targetStandInfo: '',
      warnNumList: [],
      standDesc: ''
    }
  },
  mounted () {
    let self = this
    let data = {
      targetClass: 2, // 1是我负责的，2是我审核的，3是全部
      pageNumber: 1,
      pageSize: 10000
    }
    self.$ajaxMore('post', self.HOST + '/tr/trTarget/web/getTargetList', data, (res) => {
      if (res.success) {
        self.targetOptions = res.obj
      } else {
        self.$message({
          message: res.msg,
          type: 'error'
        })
      }
    })
    self.$ajax('post', self.HOST + '/tr/TargetAudit/web/getTargetDetail', {targetId: self.$router.currentRoute.params.id}, (res) => {
      if (res.success) {
        self.fatherTarget = res.obj.id
        self.fatherTargetName = res.obj.target_name
        self.deptId = res.obj.dept_id
        // self.getStandOptions(self.deptId)
      } else {
        self.$message({
          type: 'error',
          message: res.msg
        })
      }
    })
  },
  methods: {
    formChange (str, val) {
      this[str] = val
    },
    // 获取工作标准
    // getStandOptions (id) {
    //   this.$ajaxGet( this.HOST + '/tr/trStandLink/web/getStandByDeptId', {
    //     deptId: id
    //   }, (res) => {
    //     if (res.success) {
    //       this.standOptions = res.obj
    //     } else {
    //       this.$message({
    //         type: 'error',
    //         message: res.msg
    //       })
    //     }
    //   })
    // },    
    checkFocus (bol) {
      if (bol) {
        this.remoteMethod(this.$store.state.nickname)
      }
    },
    select_change (val) {
      // console.log(val)
      // console.log(this.checkUserId)
    },
    remoteMethod (query) {
      if (query !== '') {
        this.sgrOptions = []
        this.$ajaxMore(
          'post',
          this.HOST + '/tr/trPlan/web/getPlanAuditor',
          {searchName: query},
          (res) => {
            if (res.success) {
              this.sgrOptions = res.data.data
            } else {
              this.$message({
                type: 'error',
                message: res.msg
              })
            }
          }
        )
        // setTimeout(() => {
        //   this.loading = false
        //   this.sgrOptions = this.list.filter(item => {
        //     return item.label.toLowerCase()
        //       .indexOf(query.toLowerCase()) > -1
        //   })
        // }, 200)
      } else {
        this.sgrOptions = []
      }
    },
    uploadError (file, res) {
      this.$message({
        message: file.name + '上传出错！',
        type: 'error'
      })
    },
    uploadSuccess (file, res) {
      if (res.success && res.successList) {
        this.fileName = 'oldFileName'
        this.fileList.push(res.successList[0])
      } else {
        this.$message({
          message: file.name + '上传失败！',
          type: 'warning'
        })
      }
    },
    beforeFileQueued (file) {
      if (file.size / (1024 * 1024) > this.$uploadSize) {
        // 超出限制的上传文件大小
        this.$message({
          message: file.name + '大于' + this.$uploadSize + 'M，无法上传！',
          type: 'warning'
        })
        return false
      } else {
        return true
      }
    },
    removeFile (index) {
      this.$confirm('确定移除' + (this.fileList[index].fileName || this.fileList[index].oldFileName) + '？').then(() => {
        this.fileList.splice(index, 1)
      }).catch(() => {})
    },
    beforeUpload (file) {
      if (file.size / (1024 * 1024) > this.$uploadSize) {
        // 超出限制的上传文件大小
        this.$message({
          message: file.name + '大于' + this.$uploadSize + 'M，无法上传！',
          type: 'warning'
        })
        this.$showRemoveDialog = false
        return false
      } else {
        this.$showRemoveDialog = true
        return true
      }
    },
    deptId_change (val) {
      this.zb_id = ''
      this.zbName = '指标库'
      this.zbList = []
      this.standDesc = ''
    },
    doSubmit () {
      let self = this
      if (!self.fatherTarget) {
        self.$message({
          message: '请选择所属目标！',
          type: 'warning'
        })
        return
      }
      for (let item of self.targetOptions) {
        if (item.id === self.fatherTarget) {
          self.targetName = item.target_name
          self.deptId = item.dept_id
          break
        }
      }
      if (self.planName.trim() === '') {
        self.$message({
          message: '请填写计划名称！',
          type: 'warning'
        })
        return
      }
      if (!self.targetTime) {
        self.$message({
          message: '请填选择起止日期！',
          type: 'warning'
        })
        return
      }
      let starttime = ''
      let endtime = ''
      if (self.targetTime) {
        starttime = self.mydateFormat.dateCodeYmd(self.targetTime[0])
        endtime = self.mydateFormat.dateCodeYmd(self.targetTime[1])
      }
      if (!self.jdName.length) {
        self.$message({
          type: 'warning',
          message: '请选择监督人！'
        })
        return
      }
      // if (!self.cyName.length) {
      //   self.$message({
      //     type: 'warning',
      //     message: '请选择参与人'
      //   })
      //   return
      // }
      // if (!self.shType) {
      //   self.$message({
      //     message: '请选择审核方式！',
      //     type: 'warning'
      //   })
      //   return
      // }
      if (self.zb_id) {
        // 有指标
        // 判断考核标准
        if (!self.khbz) {
          self.$message({
            type: 'warning',
            message: '请选择考核标准！'
          })
          return
        }
        // 判断你考核标准值
        if (self.khbz_input.trim() === '') {
          self.$message({
            type: 'warning',
            message: '请输入考核标准值！'
          })
          return
        }

        // 判断定时设置
        if (self.radio - 0 === 2) {
          // 判断预警
          for (let item of self.yjLists) {
            if (!item.value) {
              self.$message({
                type: 'warning',
                message: '请选择预警设置！'
              })
              return
            }
            if (item.input.trim() === '') {
              self.$message({
                type: 'warning',
                message: '请填写预警设置值！'
              })
              return
            }
          }
          if (!self.yjTime) {
            self.$message({
              type: 'warning',
              message: '请选择定时通知时间！'
            })
            return
          }
        }
        // 判断三方审核
        // if (self.shType - 0 === 3) {
        //   if (!self.checkUserId) {
        //     self.$message({
        //       type: 'warning',
        //       message: '请选择第三方审核人'
        //     })
        //     return
        //   }
        // }
        // 判断审核
        // self.fileSuccessList = []
        // for (let item of self.$refs.imageupload.uploadFiles) {
        //   self.fileSuccessList.push(item.response.obj.successList[0])
        // }
        self.warnNumList = []
        for (let item of self.yjLists) {
          self.warnNumList.push({
            waringNum: item.input,
            warningContion: item.value
          })
        }
        let data = {
          targetId: self.fatherTarget,
          targetName: self.targetName,
          planName: self.planName,
          planContent: self.targetInfo,
          startTime: starttime,
          endTime: endtime,
          fileList: self.fileList,
          indexId: self.zb_id,
          planStandContion: self.khbz,
          planStand: self.khbz_input,
          planStandInfo: self.targetStandInfo,
          warningType: self.radio,
          waringTime: self.radio - 0 === 2 ? self.mydateFormat.dateCodeYmd(self.yjTime) : '',
          warningNumList: self.warnNumList,
          checkType: self.shType,
          checkUserId: self.checkUserId,
          supervisorId: self.jdName,
          joinId: self.cyName
        }
        self.$ajaxMore('post', self.HOST + '/tr/trPlan/web/addPlan', data, (res) => {
          if (res.success) {
            self.$message({
              type: 'success',
              message: res.msg
            })
            // self.$router.push({path: '/zgjhydb'})
            self.$router.go(-1)
          } else {
            self.$message({
              type: 'error',
              message: res.msg
            })
          }
        })
      } else {
        // 无指标
        // self.fileSuccessList = []
        // for (let item of self.$refs.imageupload.uploadFiles) {
        //   self.fileSuccessList.push(item.response.obj.successList[0])
        // }
        let data = {
          targetId: self.fatherTarget,
          targetName: self.targetName,
          planName: self.planName,
          planContent: self.targetInfo,
          startTime: starttime,
          endTime: endtime,
          fileList: self.fileList,
          checkType: self.shType,
          supervisorId: self.jdName,
          joinId: self.cyName
        }
        if (self.shType - 0 === 3) {
          if (!self.checkUserId) {
            self.$message({
              message: '请选择审核人！',
              type: 'warning'
            })
            return
          }
          data.checkUserId = self.checkUserId
        }
        self.$ajaxMore('post', self.HOST + '/tr/trPlan/web/addPlan', data, (res) => {
          if (res.success) {
            // self.$router.push({path: '/zgjhydb'})
            self.$router.go(-1)
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
}
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
  content: ' ';
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
.is-expanded>.el-tree-node__content .expanded+span i.iconfont {
  color: #feb078 !important;
}
.is-current>.el-tree-node__content>.custom-tree-node .iconfont {
  color: #feb078 !important;
}
.el-upload-list__item.is-success .el-icon-close-tip {
  display: none !important;
}
</style>
