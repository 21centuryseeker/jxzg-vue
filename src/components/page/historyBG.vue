<template>
  <div class="slgl_box">
  
    <!-- 视图容器 -->
    <div class=" table_page_boxA">
      <el-table
      @sort-change="sortList"
      size="mini"
      ref="multipleTable"
    :data="tableData"
    style="width: 100%">
    <el-table-column label="序号"  width="150" align="center" >
      <template slot-scope="scope">
        {{pageSize * (currentPage - 1) + 1 + scope.$index}}
      </template>
    </el-table-column>
    <el-table-column  prop="title"  label="报告名称"   align="left" > </el-table-column>
    <el-table-column  prop="report_path"  label="链接"   align="left"  > </el-table-column>
    <el-table-column  prop="report_time"  label="生成时间" sortable  align="center" > </el-table-column>
  </el-table>
  <!-- 分页 -->
  <div class="page_box page_box_mess">
         <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalPage">
          </el-pagination>
  </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userType: 1,
      messStaue: 0,
      reformId: 0,
      Id: 0,
      type: 0,
      TpyeId: 0,
      currentPage: 1,
      totalPage: 0,
      pageSize: 10,
      targetTime: '',
      startTime: '',
      endTime: '',
      targetState: '',
      targetDept: '',
      targetName: '',
      deptOptions: [], //  部门option
      tableData: [],
      multipleSelection: [],
      message_typeObj: {
        1: 'mess_XiTong',
        2: 'mess_Yujing',
        3: 'mess_zhuanJ',
        4: 'mess_talertP'
      },
      message_typeNameObj: {
        1: '系统通知',
        2: '预警通知',
        3: '专家答疑',
        4: '目标与计划'
      },
      typeSelect: [
        {
          value: '0',
          label: '全部'
        }, {
          value: '1',
          label: '系统通知'
        }, {
          value: '2',
          label: '预警通知'
        }, {
          value: '3',
          label: '专家答疑'
        }, {
          value: '4',
          label: '目标与计划'
        }],
      value: '0',
      flagSort: 'true',
      flagSort1: true,
      before_Id:0,
      roleId:0
    }
  },
  mounted () {
    let self = this  
    this.before_Id = this.$router.currentRoute.params.id;
    this.roleId=this.$route.query.roleId
    console.log('this.before_Id ',this.before_Id )
    console.log('this.roleId ',this.roleId )
     let newData = {
      deptId: this.before_Id,
      roleId: this.roleId,
      pageSize: self.pageSize,
      pageNumber: self.currentPage
    }
    self.historyFn(newData)
  },
  methods: {
    // 历史纪录
    historyFn(data) {
      let self=this
        self.$ajax(
        "post",
        self.HOST + "/tr/diagnose/web/reportList",
        data,
        res => {
          if (res.success) {
           if(res.data){
             self.totalPage = res.data.num
          }
           self.tableData =res.obj
          } else {
            self.$message({
              message: res.msg,
              type: "error"
            });
          }
        }
      );
    },


 
    handleCurrentChange (val) {
      this.currentPage = val
       let newData = {
      deptId: this.before_Id,
      roleId: this.roleId,
      pageSize: this.pageSize,
      pageNumber: this.currentPage
    }
    this.historyFn(newData)
    },

    handleSizeChange (val) {
      this.pageSize = val
      this.currentPage = 1
       let newData = {
      deptId: this.before_Id,
      roleId: this.roleId,
      pageSize: this.pageSize,
      pageNumber: this.currentPage
    }
    this.historyFn(newData)
    },

    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    // 删除方法
    deleteFunc () {
      if (this.multipleSelection.length === 0) {
        this.$message({
          message: '请选中一条要删除的信息！',
          type: 'warning'
        })
      } else {
        let self = this
        let arr = ''
        for (var i = 0; i < self.multipleSelection.length; i++) {
          arr += self.multipleSelection[i].id + ','
        }
        if (arr.length > 0) {
          arr = arr.substring(0, arr.length - 1)
        }
        self.$ajax('post', self.HOST + '/tr/trUser/web/delBatchMessage?list=' + arr, {}, (res) => {
          if (res.success) {
            self.$message({
              message: res.msg,
              type: 'success'
            })
            // 更新一下未读条数
            self.messageFn()
            if (self.currentPage > 1) {
              self.currentPage = 1
              return
            }
            self.startTime = ''
            self.endTime = ''
            if (self.targetTime) {
              self.startTime = self.mydateFormat.dateCodeYmd(self.targetTime[0])
              self.endTime = self.mydateFormat.dateCodeYmd(self.targetTime[1])
            }
            let valueData = parseInt(self.value)
            let data = {
              messageType: valueData,
              startTime: self.startTime,
              endTime: self.endTime,
              pageNumber: self.currentPage,
              pageSize: self.pageSize,
              descStr: self.flagSort
            }
            self.refreshDom(data)
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        })
      }
    },
   
    // 排序
    sortList (v) {
      let self = this
      if (v.order) {
        if (v.order === 'ascending') {
          // 升序
          self.flagSort = 'false'
        } else {
          // 降序
          self.flagSort = 'true'
        }
      } else {
        self.flagSort = 'true'
      }
      let valueData = parseInt(self.value)
      let newData = {
        messageType: valueData,
        startTime: self.startTime,
        endTime: self.endTime,
        pageNumber: self.currentPage,
        pageSize: self.pageSize,
        descStr: self.flagSort
      }
      self.refreshDom(newData)
    }
  }
}
</script>
<style scoped>
.operation_item {
  display: inline-block;
}
.operation_item_left {
  display: inline-block;
  width: 56px;
  height: 32px;
  color: #6f7374;
  line-height: 32px;
  vertical-align: top;
  text-align: right;
}
.operation_item_right {
  display: inline-block;
  /* height: 34px; */
  box-sizing: border-box;
}
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
  background: #fff;
  padding: 22px 25px;
}
.operation_item .time{
padding-right: 15px;
text-align: center;
}
.table_page_box {
  /* margin-top: 20px; */
  background: #fff;
}

.hover_fj, .hover_zd {
  display: inline-block;
  height: 54px;
  width: 54px;
  vertical-align: top;
  line-height: 54px;
  cursor: pointer;
}
.hover_fj:hover {
  background: #ffc000;
  color: #fff;
}
.hover_zd:hover {
  background: #70ad47;
  color: #fff;
}
.el-table__row td {height: 54px;}
.page_box {
  height: 56px;
  line-height: 56px;
  box-sizing: border-box;
  padding-top: 15px;

}
.statusContent{
  text-align: left;
}
.table_page_box .statusContent{

}
.table_page_box .statusIcon{
  border-radius: 30px;
  text-align: center;
  background-color: #e96c72;
  color: #fff;
  font-size: 10px;
  line-height: 20px;
  padding: 0 5px;
  font-family: "Microsoft Yahei", Helvetica, Arial, sans-serif;
}

.page_box_mess{
  /* margin: 20px 0; */
  margin-bottom: 20px;
  background-color: #fff;
  height: 78px;
}
/* .slgl_box .paddTop{
  padding-top: 15px
} */
.slgl_box .span_state{
     color: #fff;
    display: inline-block;
    height: 22px;
    line-height: 22px;
    border-radius: 11px;
    padding: 0 10px;
    font-size: 12px;
}
.slgl_box .mess_XiTong{
background-color: #a5a5a5
}
.slgl_box .mess_Yujing{
  background-color: #ed7d31
}
.slgl_box .mess_zhuanJ{
  background-color: #ffc000
}
.slgl_box .mess_talertP{
  background-color: #70ad47
}
.typeSelect{
  float: left;
  padding-right: 15px
}
.slgl_box  .el-table td,
.slgl_box  .el-table th,
.slgl_box  .el-table .cell,
.slgl_box  .el-table .cell span{
  white-space: nowrap;
 text-overflow:ellipsis;
 overflow:hidden;
}
.slgl_box .table_page_box .cell{
  line-height: 32px
}
.slgl_box .table_page_box .cell,.slgl_box .el-table th{
  text-align: center!important
}
.contentTablelink{
  display: block
}
</style>
