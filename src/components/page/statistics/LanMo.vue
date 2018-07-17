<template>
  <div class="lanmo">
  <el-tabs v-model="first" type="card" @tab-click="handleClick" class="tab-controlFixed">
    <el-tab-pane v-for="(val,index) of classes" :label="val.className" :cid="val.classId" :name="index+''"  :key="index + 22">

    </el-tab-pane>

  </el-tabs>
    <el-card class="marginTop66">

      <table style="width: 100%">
        <tr>
          <td>
            <el-radio-group v-model="type" @change="chare">
            <el-radio-button label="1">
              <div>班级整体情况</div>
            </el-radio-button>
            <el-radio-button label="2">
              <div>学生整体情况</div>
            </el-radio-button>
          </el-radio-group>
          </td>
          <td>&nbsp;</td>
          <td style="text-align: right" colspan="2"> <el-input v-if="!isClass" size="smal" v-model="temsearch" placeholder="请输入学号进行查询"></el-input></td>
          <td></td>
          <td style="text-align: right;width: 5%">  <el-button v-if="!isClass" style="background-color: #a5a5a5;color: white; "  @click="searchs">搜索</el-button>
            <span v-else>&nbsp;</span>
          </td>
          <td style="text-align: right;width: 5%">
            <div id="picker" class="upload_btn">选择文件</div>
            <div class="upload_list">
              <div class="item" v-for="(item, index) in fileList" :key="index" >
                <span class="info"><i class="el-icon-document"></i>{{item.fileName || item.oldFileName}}</span>
                <span class="state"><i class="el-icon-success remove_file" @click="removeFile(index)" title="移除文件"></i></span>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </el-card>
    <class-info :cid="dcid" v-if="isClass"></class-info>
    <student-info :cid="dcid" :searchkey="searchkey" v-else></student-info>
    </div>
</template>

<script>
import StudentInfo from './studentinfo'
import ClassInfo from './classinfo'
export default {
  name: 'lanmo',
  data () {
    return {
      type: '1',
      dcid: '',
      searchkey: '',
      temsearch: '',
      isClass: true,
      first: '0',
      fileList: [],
      uploadUrl: this.HOST + '/tr/Ybk/web/importYbk',
      classes: []
    }
  },
  mounted: function () {
    this.getClass()
    // 报错了  (cjs修改)
    // this.getFenDiyi()
    // this.getChart3()
    // this.getChart6()
    // 初始化Web Uploader
    let self = this
    var uploader = WebUploader.create({
      // 选完文件后，是否自动上传。
      auto: true,
      // swf文件路径
      swf: './static/swf/Uploader.swf',
      // 文件接收服务端。
      server: self.HOST + '/tr/Ybk/web/importYbk',
      // 选择文件的按钮。可选。
      // 内部根据当前运行是创建，可能是input元素，也可能是flash.
      // 选择文件的按钮。可选。
      // 内部根据当前运行是创建，可能是input元素，也可能是flash.
      pick: {
        id: '#picker',
        multiple: false
      },
      // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
      resize: false,
      duplicate: true
    })
    uploader.on('beforeFileQueued', function (file) {
      if (file.size / (1024 * 1024) > self.$uploadSize) {
        // 超出限制的上传文件大小
        self.$message({
          message: file.name + '大于' + self.$uploadSize + 'M，无法上传！',
          type: 'warning'
        })
        // self.$showRemoveDialog = false
        return false
      } else {
        // 判断文件格式
        let num = file.name.lastIndexOf('.')
        if (file.name.slice(num, num + 4).toLowerCase() === '.xls') {
          if (file.size === 0) {
            self.$message({
              message: file.name + '为空，无法上传！',
              type: 'warning'
            })
            return false
          }
          return true
        } else {
          self.$message({
            message: '文件格式不正确！,只支持excel表格导入！',
            type: 'warning'
          })
          // self.$showRemoveDialog = false
          return false
        }
      }
    })
    uploader.on('uploadSuccess', function (file, res) {
      if (res.success && res.obj.successList) {
        self.fileList.push(res.obj.successList[0])
      } else {
        self.$message({
          message: res.Msg,
          type: 'warning'
        })
      }
    })
    uploader.on('uploadError', function (file) {
      self.$message({
        message: file.name + '上传出错！',
        type: 'error'
      })
    })
  },
  components: {
    StudentInfo,
    ClassInfo
  },
  methods: {
    searchs: function () {
      let cid = this.dcid
      this.$ajax('get', this.HOST + '/tr/Ybk/web/checkBeforeSearch?classId=' + cid + '&search=' + this.temsearch, {}, (data) => {
        console.log('class', data)
        let flag = data.success
        if (flag === true) {
          this.searchkey = this.temsearch
        } else {
          this.$message('没有该学生')
        }
      })
    },
    getClass () {
      this.$ajax('get', this.HOST + '/tr/Ybk/web/getYbkClass', {}, (data) => {
        console.log('class', data)
        let flag = data.success
        if (flag === true) {
          this.classes = data.obj
          if (this.classes.length > 0) {
            this.dcid = this.classes[0].classId
          }
          console.log(data)
        }
      })
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
        // 判断文件格式
        // console.log(file)
        let num = file.name.lastIndexOf('.')
        if (file.name.slice(num, num + 4).toLowerCase() === '.xls') {
          this.$showRemoveDialog = true
          return true
        } else {
          this.$message({
            message: '文件格式不正确！,只支持excel表格导入！',
            type: 'warning'
          })
          this.$showRemoveDialog = false
          return false
        }
      }
    },
    handleRemove (file, fileList) {
      // console.log(file, fileList)
    },
    handlePreview (file) {
      // console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      if (this.$showRemoveDialog) {
        return this.$confirm(`确定移除 ${file.name}？`)
      } else {
        this.$showRemoveDialog = true
        return true
      }
    },
    changeInfo: (res) => {

    },
    handleClick: (res) => {
      console.log('tab-->', res)
      this.temsearch = ''
      this.searchkey = ''
      let cid = res.$attrs.cid //  拿到当前的班级ID
      this.dcid = cid
      // this.goRoute('lmybk-classes', cid)
    },

    goRoute: function (name, cid) {
      this.$router.push({name: name, params: {cid: cid}, query: {cid: cid}})
    },
    chare: function (ty) {
      this.temsearch = ''
      this.searchkey = ''
      if (ty === '1') {
        // this.$router.push('/lmybk/class')
        this.isClass = true
      } else {
        this.isClass = false
        // this.$router.push('/lmybk/student')
      }
    }

  }

}
</script>

<style>
 .lanmo-header{
   margin: 0 15px 0 25px;
 }
  .el-tabs__item {
    color: #70ad47 !important;
  }
 .lanmo .el-tabs__header{
   margin: 0!important;
 }
</style>
