<template>
  <div class="scroll_x_hidden_box">
    <div class="bg_box box_listA">
      <div class="addItem">
            <div class="jb_news_box box_list">
            <!-- 工作任务 -->
            <div class="item_box">
              <div class="item_left">
                <span class="need">*</span>工作任务</div>
              <div class="item_right">
                <el-input placeholder="请输入工作任务名称" style="width: 800px;" v-model.trim="workOldList.workName"></el-input>
              </div>
            </div>
            <!-- 工作流程 -->
            <div class="item_box">
              <div class="item_left">
                <span class="need">*</span>工作流程</div>
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
            <!-- 标准 -->
            <div class="item_box">
              <div class="item_left">
                <span class="need">*</span>工作标准</div>
              <div class="item_right">
                <el-input placeholder="请输入工作任务描述" type="textarea" :rows="2" style="width: 800px;" v-model.trim="workOldList.workStand">
                </el-input>
              </div>
            </div>

            <div class="item_box">
              <div class="item_left">
                <span class="need">*</span>对应制度</div>
              <div class="item_right">
                <el-select v-model="dyzd" multiple filterable remote placeholder="请选择制度" :remote-method="remoteMethod" @change="select_change" style="width: 800px;">
                  <el-option v-for="item in dyzdOptions" :key="item.id" :label="item.name" :value="item.id">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
        <!-- </template> -->

      </div>

      <!-- 操作按钮 -->
      <div class="btn_box">
        <el-button type="primary" @click="doSubmit" style="width: 190px;">提交</el-button>
        <a href="javascript:history.go(-1)" style="margin-left: 30px;color: #777;">返回上一步</a>
      </div>

    </div>
  </div>
</template>
<script>
import cUploader from '../../common/Uploader.vue'
export default {
components: { cUploader },
  data() {
    return {
      dutyIdOld:0,
      dyzdOptionsOld:[],
      workOldList:{},//返回数组的数据
      workId:'',//工作任务id
      dutyName:'',//传过来的岗位职责名称
      dutyId:0,//传过来的岗位职责ID
      before_roleId: "", //带过来的roleId
      gwName: "", //岗位职责名称
      rwInfo: "", //工作任务
      fileList: [],
      uploadUrl: this.HOST + "/tr/uploadFile/web/uploadFile",
      fileSuccessList: [],
      fileName: "oldFileName",
      formData: { fileSource: "2" },
      dyzd: [], //对应制度
      sgrOptions: [],
      gzbz: "", //工作标准
      dyzdOptions:'',//对应制度
      workListNew: [
        {
          dutyName: "",
          workName: "",
          workStand: "",
          zdids: ""
        }
      ]
    };
  },
  mounted() {
    this.workId = this.$router.currentRoute.params.id;
    this.dutyIdOld=this.$route.query.dutyIdNew
    console.log('this.$router.params.id111', this.dutyIdOld)
    this.getWorkInfo()
  },
  methods: {
    getWorkInfo(){
      let self=this
      this.$ajaxMore(
          'post',
          this.HOST + '/tr/trStandLink/web/getWorksById',
          {id: this.workId},
          (res) => {
            if (res.success) {
             this.workOldList=res.obj[0]
             for(let item of  res.obj[0].workStandList){
               this.dyzdOptionsOld.push(
                 {
                  id:item.standRules,
                  name:item.name
                 }
               ) 
             }
             this.dyzdOptions= this.dyzdOptionsOld 
             for(let item of  this.dyzdOptions){
                this.dyzd.push(item.id)
             }
             this.fileList=res.obj[0].fileList 
            } else {
              this.$message({
                type: 'error',
                message: res.msg
              })
            }
          }
        )
    },

    // 上传
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
    uploadError(file, res) {
      this.$message({
        message: file.name + "上传出错!",
        type: "error"
      });
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

    // 对应制度
    checkFocus (bol) {
      if (bol) {
       
      }
    },
    select_change(v) {
     console.log('v',v)
    },

    remoteMethod(query) {
     if (query !== '') {
        this.dyzdOptions = []
        this.$ajaxMore(
          'post',
          this.HOST + '/tr/trStandLink/web/getZskList',
          {idname: query},
          (res) => {
            if (res.success) {
              this.dyzdOptions = res.obj
            } else {
              this.$message({
                type: 'error',
                message: res.msg
              })
            }
          }
        )
      } else {
        this.dyzdOptions = []
      }
    },


    // 提交
    doSubmit() {
   let self=this
    if (this.workOldList.workName === '') {
        self.$message({
          type: 'warning',
          message: '请输入工作任务名称!'
        })
        return
      }

     if (!this.fileList.length) {
        self.$message({
          type: 'warning',
          message: '请上传工作流程文件！'
        })
        return
      }
      if (this.fileList.length>1) {
        self.$message({
          type: 'warning',
          message: '只能上传一个工作流程文件！'
        })
        return
      }
      if (this.workOldList.workStand === '') {
        self.$message({
          type: 'warning',
          message: '请输入工作任务描述!'
        })
        return
      }
      if (!this.dyzd.length) {
        self.$message({
          type: 'warning',
          message: '请选择对应制度！'
        })
        return
      }

     
      let obj = {
        id: this.workId, 
        dutyId:this.dutyIdOld,
        workName: this.workOldList.workName,
        fileList:this.fileList,
        workStand: this.workOldList.workStand,
        zdids: this.dyzd
      };
      this.$ajaxMore(
        "post",
        this.HOST + "/tr/trStandLink/web/editWorks",
        obj,
        res => {
          if (res.success) {
              self.$message({
              message: res.msg,
              type: "success"
            });
            self.$router.go(-1)
          } else {
            self.$message({
              message: res.msg,
              type: "error"
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
.box_listA .box_list {
  padding: 20px 0;
}
.addItem {
  position: relative;
}
.addItem .addButton {
  line-height: 56px;
  padding-left: 20px;
  display: none;
}
.addItem .addButton a {
  color: #70ad47;
}
.addItem .flagaddStyle {
  display: inline-block;
}
</style>
