<template>
  <div class="target_plan_detail_box">
    <!-- <div class="container_box_header">目标详情</div> -->
    <!-- 中间内容容器 -->
    <div class="bg_box">
      <div class="content_box cjs_detail_box">
        <el-row :gutter="30">
          <el-col :span="14">
            <div style="background: #fff;padding: 0 32px 20px;">
              <div style="padding: 25px 0;font-size: 16px;color: #526069;">
                <span style="display: inline-block;width: 30px;height: 30px;background: #70ad47;border-radius: 4px;color: #fff;font-size: 24px;text-align: center;line-height: 23px;margin-right:14px;">
                  <i class="iconfont">&#xe62b;</i>
                </span>{{targetName}}</div>
              <div class="grid-content bg-purple">
                <div class="detail_item_box">
                  <div class="detail_item_left">
                    <i class="iconfont detail_icon">&#xe636;</i>
                    目标描述
                  </div>
                  <div class="detail_item_right">{{targetInfo || '无'}}</div>
                </div>
              </div>
              <!-- <div class="grid-content bg-purple">
            <div class="detail_item_box">
              <div class="detail_item_left">
                <i class="iconfont detail_icon">&#xe636;</i>
                所属部门</div>
              <div class="detail_item_right">{{deptName || '无'}}</div>
            </div>
          </div> -->
              <div class="grid-content bg-purple">
                <div class="detail_item_box">
                  <div class="detail_item_left">
                    <i class="iconfont detail_icon">&#xe636;</i>
                    所属部门-角色
                  </div>
                  <div class="detail_item_right">{{detailOption.bmjs}}</div>
                </div>
              </div>
              <div class="grid-content bg-purple">
                <div class="detail_item_box">
                  <div class="detail_item_left">
                    <i class="iconfont detail_icon">&#xe636;</i>
                    目标层面
                  </div>
                  <div class="detail_item_right">{{levelOption[detailOption.target_level - 1]}}</div>
                </div>
              </div>
              <div class="grid-content bg-purple">
                <div class="detail_item_box">
                  <div class="detail_item_left">
                    <i class="iconfont detail_icon">&#xe636;</i>
                    量化标准
                  </div>
                  <div class="detail_item_right">{{detailOption.standtype - 0 ===1 ? detailOption.stand : '是否完成'}}</div>
                </div>
              </div>
              <div class="grid-content bg-purple" v-if="detailOption.workid">
                <div class="detail_item_box">
                  <div class="detail_item_left">
                    <i class="iconfont detail_icon">&#xe636;</i>
                    工作标准
                  </div>
                  <div class="detail_item_right">{{detailOption.work_stand || '-'}}</div>
                </div>
              </div>
              <div class="grid-content bg-purple">
                <div class="detail_item_box">
                  <div class="detail_item_left">
                    <i class="iconfont detail_icon">&#xe636;</i>
                    权重
                  </div>
                  <div class="detail_item_right">{{detailOption.target_qz}}</div>
                </div>
              </div>
              <div class="grid-content bg-purple">
                <div class="detail_item_box">
                  <div class="detail_item_left">
                    <i class="iconfont detail_icon">&#xe636;</i>
                    创建人</div>
                  <div class="detail_item_right">
                    <span>{{creator_name || '无'}}</span>
                  </div>
                </div>
              </div>
              <div class="grid-content bg-purple">
                <div class="detail_item_box">
                  <div class="detail_item_left">
                    <i class="iconfont detail_icon">&#xe636;</i>
                    起止日期</div>
                  <div class="detail_item_right">{{startTime + '至' + endTime}}</div>
                </div>
              </div>
              <div class="grid-content bg-purple">
                <div class="detail_item_box">
                  <div class="detail_item_left">
                    <i class="iconfont detail_icon">&#xe636;</i>
                    审核方式</div>
                  <div class="detail_item_right">
                    <span>{{checkObj[checkType]}}</span>
                  </div>
                </div>
              </div>
              <div class="grid-content bg-purple" v-if="checkType - 0 !== 1">
                <div class="detail_item_box">
                  <div class="detail_item_left">
                    <i class="iconfont detail_icon">&#xe636;</i>
                    审核人</div>
                  <div class="detail_item_right">
                    <span>
                      <el-tag>{{checkUserName || '无'}}</el-tag>
                    </span>
                  </div>
                </div>
              </div>
              <div class="grid-content bg-purple">
                <div class="detail_item_box">
                  <div class="detail_item_left">
                    <i class="iconfont detail_icon">&#xe636;</i>
                    负责人</div>
                  <div class="detail_item_right">
                    <span>
                      <el-tag>{{managerName}}</el-tag>
                    </span>
                  </div>
                </div>
              </div>
              <div class="grid-content bg-purple" v-if="indexName">
                <!-- 指标 -->
                <div class="zb_title">指标</div>
                <div>
                  <span class="zb_name">{{indexName}}</span>
                </div>
              </div>
              <div class="grid-content bg-purple" v-if="indexName">
                <div class="detail_item_box">
                  <div class="detail_item_left">
                    <i class="iconfont detail_icon">&#xe636;</i>
                    考核标准</div>
                  <div class="detail_item_right">{{indexName + khbz[targetStandContion - 0] + targetStand}}</div>
                </div>
              </div>

              <div class="grid-content bg-purple" v-if="indexName">
                <div class="detail_item_box">
                  <div class="detail_item_left">
                    <i class="iconfont detail_icon">&#xe636;</i>
                    标准描述</div>
                  <div class="detail_item_right">{{targetStandInfo || '无'}}</div>
                </div>
              </div>

              <div class="grid-content bg-purple" style="background: #fff6f6;border: 1px solid #ffdada;" v-if="listWarn.length">
                <div class="detail_item_box yj_box">
                  <div class="detail_item_left" style="width: 80px;line-height: 40px; margin: 5px 0 0 10px;">
                    <i class="iconfont" style="color: #f56c6c;font-size: 24px;vertical-align: top;display: inline-block">&#xe6e8;</i>
                    <span style="font-size: 18px;color: #f56c6c;line-height: 40px;display: inline-block;vertical-align: top;">预警</span>
                  </div>
                  <div class="detail_item_right" style="line-height: 30px;padding: 10px 0 10px 20px;">
                    <template v-for="item in listWarn">
                      <span :key="item.waringNum" style="">{{(item.waring_time?mydateFormat.dateCodeYmd(item.waring_time):'即时通知') + '&nbsp;&nbsp;&nbsp;' + indexName + khbz[item.warning_contion] + item.waring_num}}</span><br :key="item.waringNum">
                    </template>
                  </div>
                </div>
              </div>
              <div class="grid-content bg-purple" v-if="listFile.length">
                <div class="detail_item_box">
                  <div class="detail_item_left">
                    <i class="iconfont detail_icon">&#xe636;</i>
                    附件</div>
                  <div class="detail_item_right">
                    <template v-for="item in listFile">
                      <div :key="item.fileUrl" style="margin-bottom: 10px;">
                        <a :href="item.fileUrl" :key="item.fileUrl" class="download_a">
                          <template v-if="iconObj[item.fileType]">
                            <span v-html="iconObj[item.fileType]" class="download_i"></span>
                          </template>
                          <template v-if="!iconObj[item.fileType]">
                            <i class="iconfont download_i" style="font-size: 34px;color:#999">&#xe643;</i>
                          </template>
                          <span class="download_span">{{item.oldFileName}}</span>
                        </a>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="10">
            <div style="background: #fff">
              <div class="grid-content bg-purple">
                <div class="my_tab_style">
                  <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="完成情况" name="first">
                      <!-- <template v-if="check_status - 0 === 1 || isEdit"> -->
                      <template v-if="false">
                        <div class="detail_item_box">
                          <div class="detail_item_left">说明</div>
                          <div class="detail_item_right textarea_box">
                            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea">
                            </el-input>
                          </div>
                        </div>
                        <div class="detail_item_box">
                          <div class="detail_item_left">附件</div>
                          <div class="detail_item_right">
                            <!-- <el-upload
                          ref="imageupload"
                          class="upload-demo"
                          :action="uploadUrl"
                          :on-preview="handlePreview"
                          :on-remove="handleRemove"
                          :before-remove="beforeRemove"
                          :on-success="uploadsuccess"
                          multiple
                          :data="data"
                          :file-list="fileList">
                          <el-button size="small" type="primary">选择文件</el-button>
                        </el-upload> -->
                          </div>
                        </div>
                        <div style="text-align: center;padding: 20px 0;">
                          <el-button type="primary" @click="submit_sh" style="width: 190px;">提交审核</el-button>
                        </div>
                      </template>
                      <template v-else>
                        <template v-if="indexName">
                          <div class="detail_item_box">
                            <div class="detail_item_left">标准</div>
                            <div class="detail_item_right">
                              <span>{{targetStand}}{{unit?unit:''}}</span>
                            </div>
                          </div>
                          <div class="detail_item_box">
                            <div class="detail_item_left">实际完成</div>
                            <div class="detail_item_right">
                              <span>{{completeValue || 0}}{{unit?unit:''}}</span>
                            </div>
                          </div>
                          <div class="detail_item_box">
                            <div class="detail_item_left">时间</div>
                            <div class="detail_item_right">
                              <span>{{myTime}}</span>
                            </div>
                          </div>
                        </template>
                        <div class="detail_item_box">
                          <div class="detail_item_left">当前状态</div>
                          <div class="detail_item_right">
                            <span>{{checkStatusName[check_status]}}</span>
                            <!-- 编辑按钮 -->
                            <!-- <i class="el-icon-edit" v-if="check_status === 3" @click="isEdit = true"></i> -->
                          </div>
                        </div>
                        <div class="detail_item_box">
                          <div class="detail_item_left">说明</div>
                          <div class="detail_item_right">{{textarea || '无'}}</div>
                        </div>
                        <template v-if="ifShowDa">
                          <div class="detail_item_box">
                            <div class="detail_item_left">附件</div>
                            <div class="detail_item_right">
                              <template v-if="!fileListSh || !fileListSh.length">无</template>
                              <el-checkbox-group v-model="fj_name">
                                <template v-for="item in fileListSh">
                                  <div :key="item.fileUrl" style="margin-bottom: 10px;">
                                    <el-checkbox :label="item.newFileName">
                                      <a :href="item.fileUrl" :key="item.fileUrl" class="download_a">
                                        <template v-if="iconObj[item.fileType]">
                                          <span v-html="iconObj[item.fileType]" class="download_i"></span>
                                        </template>
                                        <template v-if="!iconObj[item.fileType]">
                                          <i class="iconfont download_i" style="font-size: 34px;color:#999">&#xe643;</i>
                                        </template>
                                        <span class="download_span">{{item.oldFileName}}</span>
                                      </a>
                                    </el-checkbox>
                                  </div>
                                </template>
                              </el-checkbox-group>
                            </div>
                            <div style="text-align: center;">
                              <el-button @click="saveDak" v-if="ifShowDa && fileListSh.length">保存到学校档案库</el-button>
                            </div>
                          </div>
                        </template>
                        <template v-else>
                          <div class="detail_item_box">
                            <div class="detail_item_left">附件</div>
                            <div class="detail_item_right">
                              <template v-for="item in fileListSh" v-if="!ifShowDa">
                                <div :key="item.fileUrl" style="margin-bottom: 10px;">
                                  <a :href="item.fileUrl" :key="item.fileUrl" class="download_a">
                                    <template v-if="iconObj[item.fileType]">
                                      <span v-html="iconObj[item.fileType]" class="download_i"></span>
                                    </template>
                                    <template v-if="!iconObj[item.fileType]">
                                      <i class="iconfont download_i" style="font-size: 34px;color:#999">&#xe643;</i>
                                    </template>
                                    <span class="download_span">{{item.oldFileName}}</span>
                                  </a>
                                </div>
                              </template>
                            </div>
                          </div>
                        </template>
                      </template>
                      <!-- 判断是否有权限审核 -->
                      <template v-if="check_status === 2 && (role_type === 2 || role_type === 3)">
                        <div class="detail_item_box">
                          <div class="detail_item_left">审核</div>
                          <div class="detail_item_right">
                            <el-radio-group v-model="auditStatus" @change="shChange">
                              <el-radio :label="3">不通过</el-radio>
                              <el-radio :label="4">通过</el-radio>
                            </el-radio-group>
                          </div>
                        </div>
                        <div class="detail_item_box">
                          <div class="detail_item_left">意见</div>
                          <div class="detail_item_right textarea_box">
                            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="auditDesc">
                            </el-input>
                          </div>
                        </div>
                        <div style="text-align: center;padding: 20px 0;">
                          <el-button type="primary" @click="submitSh" style="width: 190px;">提交审核</el-button>
                        </div>
                      </template>
                    </el-tab-pane>
                    <el-tab-pane label="审核历史" name="second">
                      <div>
                        <div class="recod" v-if="history_list && history_list.length">
                          <ul>
                            <li v-for="(item, index) in history_list" :key="index">
                              <div v-if="index === 0" class="transform_style">
                                <div class="icon_list">
                                  <i class="iconfont" style="font-size: 28px;float: left;color: #70ad47;margin-top: 5px">&#xe6a3;</i>
                                </div>
                                <span class="list_time">{{item.create_time}}</span>
                                <label>
                                  <em>{{checkStatusName[item.audit_status]}}：</em>
                                  <font>{{item.audit_desc && item.audit_desc.trim() !== '' ? item.audit_desc.trim() : '无'}}</font>
                                </label>
                              </div>
                              <div v-if="index !== 0" class="transform_style">
                                <div class="icon_list">
                                  <i style="display: inline-block;width: 10px;height: 10px;border-radius: 5px;border: 2px solid #999;box-sizing: border-box;"></i>
                                </div>
                                <span class="list_time">{{item.create_time}}</span>
                                <label>
                                  <em>{{checkStatusName[item.audit_status]}}：</em>
                                  <font>{{item.audit_desc && item.audit_desc.trim() !== '' ? item.audit_desc.trim() : '无'}}</font>
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="no_data" v-else>
                          <img src="../../../../assets/empty.jpg" alt="">
                        </div>
                      </div>
                    </el-tab-pane>
                  </el-tabs>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- dialog -->
    <el-dialog title="选择档案库" :visible.sync="dialogVisible" width="30%">
      <p style="font-size: 16px;padding-bottom: 10px;">保存到</p>
      <el-radio-group v-model="dakId">
        <!-- <el-radio :label="1">诊改政策</el-radio><br> -->
        <el-radio :label="2">规章制度</el-radio><br>
        <el-radio :label="3">报告</el-radio><br>
        <el-radio :label="4">机构建设</el-radio>
      </el-radio-group>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dakId = '';dialogVisible = false;fj_name = [];">取 消</el-button>
        <el-button type="primary" @click="dakSure">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      detailOption: {},
      levelOption: [
        '学校层面',
        '专业层面',
        '课程层面',
        '教师层面',
        '学生层面'
      ],
      daList: [],
      fj_name: [],
      dakId: "",
      dialogVisible: false,
      ifShowDa: false,
      checkUserName: "",
      creator_name: "", // 创建人
      completeValue: "",
      myTime: "",
      unit: "",
      managerName: "",
      history_list: [],
      auditDesc: "",
      auditStatus: 3,
      role_type: "",
      fileListSh: [],
      isEdit: false,
      textarea: "",
      uploadUrl: this.HOST + "/tr/uploadFile/web/uploadFile",
      data: {
        fileSource: "3" // 目标上传是为'1', 计划上传时为'2'
      },
      fileSuccessList: [],
      fileList: [],
      fileListOld: [],
      activeName: "first",
      check_status: "",
      waringTime: "",
      listWarn: [],
      targetName: "",
      targetInfo: "",
      startTime: "",
      endTime: "",
      deptName: "", // 所属部门
      listFile: [],
      indexName: "",
      checkType: "",
      targetStandContion: "",
      targetStand: "",
      targetStandInfo: "",
      checkObj: {
        "1": "自动审核",
        "2": "创建人审核",
        "3": "人工审核"
      },
      khbz: ["", "大于等于", "大于", "等于", "小于等于", "小于"],
      checkStatusName: ["", "未提交", "已提交", "审核不通过", "审核通过"],
      iconObj: {
        ".xlsx":
          '<i class="iconfont" style="font-size: 34px;color: #5ca35b;">&#xe71b;</i>',
        ".xls":
          '<i class="iconfont" style="font-size: 34px;color: #5ca35b;">&#xe71b;</i>',
        ".png":
          '<i class="iconfont" style="font-size: 34px;color: #4aab8f;">&#xe611;</i>',
        ".jpg":
          '<i class="iconfont" style="color: #4aab8f;font-size: 34px;">&#xe611;</i>',
        ".jpeg":
          '<i class="iconfont" style="color: #4aab8f;font-size: 34px;">&#xe611;</i>',
        ".gif":
          '<i class="iconfont" style="color: #4aab8f;font-size: 34px;">&#xe611;</i>',
        ".pdf":
          '<i class="iconfont" style="color: #ee6a71;font-size: 34px;">&#xe69b;</i>',
        ".doc":
          '<i class="iconfont" style="color: #5185ba;font-size: 34px;">&#xe618;</i>',
        ".docx":
          '<i class="iconfont" style="color: #5185ba;font-size: 34px;">&#xe618;</i>',
        ".wmv":
          '<i class="iconfont" style="color: #6b7d8f;font-size: 34px;">&#xe613;</i>',
        ".mp4":
          '<i class="iconfont" style="color: #6b7d8f;font-size: 34px;">&#xe613;</i>',
        ".rm":
          '<i class="iconfont" style="color: #6b7d8f;font-size: 34px;">&#xe613;</i>',
        ".rmvb":
          '<i class="iconfont" style="color: #6b7d8f;font-size: 34px;">&#xe613;</i>',
        ".avi":
          '<i class="iconfont" style="color: #6b7d8f;font-size: 34px;">&#xe613;</i>',
        ".3gp":
          '<i class="iconfont" style="color: #6b7d8f;font-size: 34px;">&#xe613;</i>'
      }
    };
  },
  mounted() {
    let self = this;
    self.$ajax(
      "post",
      self.HOST + "/tr/TargetAudit/web/getTargetDetail",
      { targetId: self.$router.currentRoute.params.id },
      res => {
        if (res.success) {
          this.detailOption = res.obj;
          self.creator_name = res.obj.creator_name;
          self.managerName = res.obj.manager_name;
          self.targetName = res.obj.target_name;
          self.deptName = res.obj.dept_name;
          self.targetInfo = res.obj.target_info;
          self.startTime = res.obj.start_time;
          self.endTime = res.obj.end_time;
          self.listFile = res.obj.fileList;
          self.indexName = res.obj.index_name;
          self.checkType = res.obj.check_type;
          self.targetStandContion = res.obj.target_stand_contion;
          self.targetStand = res.obj.target_stand;
          self.targetStandInfo = res.obj.target_stand_info;
          self.listWarn = res.obj.warnList;
          self.waringTime = res.obj.waringTime;
          self.check_status = res.obj.check_status;
          self.role_type = res.obj.role_type;
          self.completeValue = res.obj.completeValue;
          self.unit = res.obj.unit;
          self.myTime = res.obj.completeTime;
          self.checkUserName =
            res.obj.check_user_name + "(" + res.obj.check_user_id + ")";
          // if (res.obj.check_status !== 1) {
          //   self.getCheckType()
          // }
        } else {
          self.$message({
            type: "error",
            message: res.msg
          });
        }
      }
    );
    self.getCheckType();
    self.getHistory();
  },
  methods: {
    dakSure() {
      if (!this.dakId) {
        this.$message({
          message: "请选择文件库！",
          type: "warning"
        });
        return;
      }
      this.dialogVisible = false;
      let arr = [];
      for (let item of this.fj_name) {
        arr.push(item);
      }
      this.daList.push({
        type: this.dakId,
        newFileNames: arr
      });
      this.dakId = "";
      this.fj_name = [];
    },
    saveDak() {
      if (this.fj_name.length) {
        this.dialogVisible = true;
      } else {
        this.$message({
          message: "请选择要归档的文件！",
          type: "warning"
        });
      }
    },
    shChange(val) {
      if (val - 0 === 4) {
        // 通过，显示保存按钮
        this.ifShowDa = true;
      } else {
        // 不显示保存按钮
        this.ifShowDa = false;
      }
    },
    handleClick(tab, event) {
      // console.log(tab, event)
    },
    uploadsuccess(res, file, fileList) {
      if (res.success) {
        this.fileSuccessList.push(res.obj.successList[0]);
      } else {
        this.$message({
          message: res.msg,
          type: "error"
        });
      }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    submit_sh() {
      let self = this;
      self.fileSuccessList = [];
      for (let item of self.$refs.imageupload.uploadFiles) {
        if (item.response) {
          self.fileSuccessList.push(item.response.obj.successList[0]);
        } else {
          for (let item2 of self.fileListOld) {
            if (item.url === item2.fileUrl) {
              self.fileSuccessList.push(item2);
            }
          }
        }
      }
      self.isEdit = false;
      let data = {
        targetId: self.$router.currentRoute.params.id,
        auditDesc: self.textarea,
        files: self.fileSuccessList
      };
      self.$ajax(
        "post",
        self.HOST + "/tr/TargetAudit/web/commitTargetAudit",
        data,
        res => {
          if (res.success) {
            self.$message({
              type: "success",
              message: res.msg
            });
            // 将审核状态改变为待审核
            self.getCheckType();
            self.getHistory();
          } else {
            self.$message({
              type: "error",
              message: res.msg
            });
          }
        }
      );
    },
    submitSh() {
      let self = this;
      let data = {
        targetId: self.$router.currentRoute.params.id,
        auditDesc: self.auditDesc,
        auditStatus: self.auditStatus
      };
      self.$ajax(
        "post",
        self.HOST + "/tr/TargetAudit/web/targetAudit",
        data,
        res => {
          if (res.success) {
            self.getCheckType();
            self.getHistory();
            if (this.daList && this.ifShowDa) {
              this.$ajaxMore(
                "post",
                this.HOST + "/tr/trdak/web/fileGd",
                { data: this.daList },
                res => {
                  if (res.success) {
                    self.$message({
                      message: res.msg,
                      type: "success"
                    });
                    this.ifShowDa = false;
                    this.dakId = "";
                    this.daList = [];
                    this.fj_name = [];
                  } else {
                    self.$message({
                      message: res.msg,
                      type: "error"
                    });
                  }
                }
              );
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
    // 获取审核状态
    getCheckType() {
      let self = this;
      self.$ajax(
        "post",
        self.HOST + "/tr/TargetAudit/web/getTargetAuditDetail",
        {
          targetId: self.$router.currentRoute.params.id
        },
        res => {
          if (res.success) {
            self.fileListSh = res.obj.fileList;
            self.textarea = res.obj.auditDesc;
            self.check_status = res.obj.checkStatus;
            self.fileList = [];
            if (res.obj.fileList && res.obj.fileList.length) {
              self.fileListOld = res.obj.fileList;
              for (let item of res.obj.fileList) {
                self.fileList.push({
                  name: item.oldFileName,
                  url: item.fileUrl
                });
              }
            }
            //  for (let item of self.fileListSh) {
            //    item.url = location.origin + location.pathname + location.search + item.fileUrl
            //  }
          } else {
            self.$message({
              type: "error",
              message: res.msg
            });
          }
        }
      );
    },
    // 获取审核记录列表
    getHistory() {
      let self = this;
      self.$ajax(
        "post",
        self.HOST + "/tr/TargetAudit/web/getTargetAuditList",
        { targetId: self.$router.currentRoute.params.id },
        res => {
          if (res.success) {
            self.history_list = res.obj;
          } else {
            self.$message({
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
/*
'未开始': '#a5a5a5',
          '进行中': '#ffc000',
          '已完成': '#70ad47',
          '已延期': '#ed7d31',
          '延期完成': '#4472c4'
*/
.style_one {
  background: #ffc000;
}
.style_two {
  background: #a5a5a5;
}
.style_three {
  background: #70ad47;
}
.style_four {
  background: #ed7d31;
}
.style_five {
  background: #4472c4;
}
.span_state {
  color: #fff;
  display: inline-block;
  height: 22px;
  line-height: 22px;
  line-height: 22px;
  border-radius: 11px;
  padding: 0 10px;
  font-size: 12px;
}
.detail_item_box {
  min-height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #f1f1f1;
}
.detail_item_left,
.detail_item_right {
  display: inline-block;
  vertical-align: top;
}
.detail_item_left {
  width: 110px;
  /* text-align: right; */
  font-size: 14px;
  color: #76838f;
}
.detail_item_right {
  padding-left: 30px;
  font-size: 14px;
  color: #222;
}
.detail_icon {
  color: #70ad47;
  font-size: 14px;
}
.zb_title {
  font-size: 14px;
  color: #666;
  height: 50px;
  line-height: 50px;
}
.zb_title::before {
  content: " ";
  display: inline-block;
  width: 4px;
  background: #70ad47;
  height: 14px;
  vertical-align: top;
  margin-top: 18px;
  margin-right: 7px;
}
.zb_name {
  display: inline-block;
  color: #fff;
  height: 38px;
  background: #70ad47;
  padding: 0 38px;
  line-height: 38px;
  border-radius: 4px;
}
.el-tabs__nav {
  margin: 0 auto !important;
}
.span_line {
  display: inline-block;
  width: 2px;
  background: #70ad47;
  height: 100%;
}
.history_item_right {
  display: inline-block;
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
.detail_item_right {
  color: #37474f;
  word-break: break-all;
}
.recod {
  width: 90%;
  height: auto; /*float:left;*/
  margin-left: 5%;
  margin-top: 5%;
}
.recod ul {
  margin-top: 0px;
  float: left;
  width: 100%;
}
.recod ul li {
  width: 100%;
  font-size: 0;
  height: auto; /*float:left;*/
  margin-top: 0;
  line-height: inherit;
  padding-bottom: 20px;
  border-left: 1px solid #dfdfdf;
}
.recod ul li label em {
  /*float:left;*/
  font-style: normal;
}
.recod ul li label font {
  /*float:left;*/
  width: 50%;
  word-break: break-all;
}
.recod ul li:last-child {
  border: none;
}
.recod ul li i {
  /* display:inline-block; */
  width: 10px;
  height: 10px;
  float: left;
  /* margin-left:-5px; */
  margin-top: 16px;
  /* transform: translateX(-5px) */
}
.recod ul li.cur i {
  width: 28px;
  height: 28px;
  margin-left: -13px;
  margin-top: 0;
}
.recod ul li i.iconfont {
  /*float:left;*/
  margin-left: -13px;
}
.recod ul li span {
  padding-right: 5%;
  color: #999;
  line-height: inherit;
  /* display: inline-block; */
  width: 25%;
  height: auto;
  /*float: left;*/
  text-align: right;
  padding-right: 1%;
  line-height: 42px;
}
.recod ul li.cur span {
  margin-left: -8px;
}
.recod ul li.cur span,
.recod ul li.cur label {
  color: #80b748;
}
.recod ul li label {
  line-height: 42px;
}
.transform_style {
  padding-left: 20px;
  transform: translateY(-21px);
}
.list_time {
  margin-left: 10px;
}
ul li:first-child .icon_list {
  transform: translateX(2px);
}
.icon_list {
  float: left;
  width: 28px;
  height: 28px;
  margin-left: -24px;
}
.yj_box.detail_item_box {
  min-height: 50px;
  line-height: 50px;
}
.el-icon-edit {
  color: #70ad47;
  margin-left: 20px;
  cursor: pointer;
  font-size: 16px;
  transform: translateY(2px);
}
.no_data {
  text-align: center;
}
.no_data img {
  max-width: 100%;
}
</style>
