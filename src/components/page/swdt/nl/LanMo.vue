<template>
  <div class="lanmo">
    <el-card class="">

      <table style="width: 100%">
        <tr>
          <td>
            <el-radio-group v-model="type" @change="chare">
            <el-radio-button :label="value.id" v-for="(value,key) of classes" :key="key">
              <div>{{value.table_name}}</div>
            </el-radio-button>
          </el-radio-group>
          </td>
          <td>&nbsp;</td>
          <td style="text-align: right" colspan="2"> <el-input v-if="!isClass" size="smal" v-model="temsearch" placeholder="请输入学号进行查询"></el-input></td>
          <td></td>
          <td style="text-align: right;width: 5%">  <el-button v-if="!isClass" style="background-color: #a5a5a5;color: white; "  @click="searchs">搜索</el-button>
            <span v-else>&nbsp;</span>
          </td>
        </tr>
      </table>
    </el-card>
    <class-info :cid="dcid"></class-info>
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
      this.$ajax('get', this.HOST + '/tr/trTable/web/getTableList', {}, (data) => {
        console.log('class', data)
        let flag = data.success
        if (flag === true) {
          this.classes = data.obj
          if (this.classes.length > 0) {

            this.dcid = (this.classes[0].id).toString()
          }

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
      this.dcid = ty.toString()
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
