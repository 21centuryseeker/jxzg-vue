<template>
  <div>
    <!-- <div class="container_box_header">我审核的计划</div> -->
    <!-- 操作容器 -->
    <div class="bg_box">
    <div class="operation_box boxShadow">
      <!-- 审核情况 -->
      <div class="operation_item">
        <!-- <div class="operation_item_left">所属部门</div> -->
        <div class="operation_item_right">
          <el-select v-model="shqkInput" placeholder="审核情况" style="width: 110px;" size="small">
            <el-option
              label="审核情况"
              value=""
            ></el-option>
            <el-option
              v-for="item in shskOptions"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <!-- 所属部门 -->
      <div class="operation_item">
        <!-- <div class="operation_item_left">所属部门</div> -->
        <div class="operation_item_right">
          <el-select v-model="targetDept" placeholder="所属部门" style="width: 110px;" size="small">
            <el-option
              label="所属部门"
              value=""
            ></el-option>
            <el-option
              v-for="item in deptOptions"
              :key="item.id"
              :label="item.deptname"
              :value="item.id">
            </el-option>
          </el-select>
        </div>
      </div>
      <!-- 完成情况 -->
      <div class="operation_item" style="margin-left: 20px;">
        <!-- <div class="operation_item_left">完成情况</div> -->
        <div class="operation_item_right">
          <el-select v-model="targetState" placeholder="完成情况" size="small" style="width: 110px;">
            <el-option
              v-for="item in stateOptions"
              :key="item.value"
              :label="item.name"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <!-- 日期 -->
      <div class="operation_item">
        <div class="operation_item_left">日期</div>
        <div class="operation_item_right">
          <el-date-picker
            style="width: 248px;"
            v-model="targetTime"
            type="daterange"
            size="small"
            :editable="false"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </div>
      <!-- 姓名 -->
      <div class="operation_item" style="margin-left: 20px;">
        <!-- <div class="operation_item_left">目标名称</div> -->
        <div class="operation_item_right">
          <el-input v-model="targetName" placeholder="请输入计划名称" size="small" style="width: 152px;"></el-input>
        </div>
      </div>
      <!-- 搜索按钮 -->
      <el-button type="info"  size="small" style="height: 32px;transform: translateY(1px)" @click="searchFunc">搜索</el-button>
    </div>
    <!-- 视图容器 -->
    <div class="table_page_box boxShadow">
      <el-table
      size="mini"
      ref="multipleTable"
    :data="tableData"
    @selection-change="handleSelectionChange"
    @sort-change="sortChange"
    style="width: 100%">
    <!-- <el-table-column
      type="selection"
      width="30">
    </el-table-column> -->
    <el-table-column
      label="序号"
      width="50"
      align="center">
      <template slot-scope="scope">
        {{pageSize * (currentPage - 1) + 1 + scope.$index}}
      </template>
      <!-- {{pageSize * (currentPage - 1) + index + 1}} -->
    </el-table-column>
    <el-table-column
      label="计划"
      show-overflow-tooltip>
      <template slot-scope="scope">
        <a href="javascript:void(0)" @click="toDetail(scope.row.id)">{{scope.row.plan_name}}</a>
        <i v-if="scope.row.existFile" class="iconfont">&#xe632;</i>
      </template>
    </el-table-column>
    <el-table-column
      label="所属目标"
      show-overflow-tooltip
      align="left">
      <template slot-scope="scope">
        <a href="javascript:void(0)" @click="$router.push({ path: '/targetDetail/' + scope.row.target_id })">{{scope.row.target_name}}</a>
      </template>
    </el-table-column>
    <el-table-column
      prop="dept_name"
      label="所属部门"
      show-overflow-tooltip
      align="left">
    </el-table-column>
    <el-table-column
      prop="manager_name"
      label="负责人"
      width="90"
      align="center">
    </el-table-column>
    <el-table-column
      label="起止日期"
      width="220"
      align="center"
      sortable
    >
    <template  slot-scope="scope">{{scope.row.start_time + '至' + scope.row.end_time}}</template>
    </el-table-column>
    <el-table-column
      label="完成情况"
      width="90"
      align="center">
      <template slot-scope="scope">
        <span
        class="span_state"
        :class="scope.row.styleName"
        >{{scope.row.result_type}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="审核情况"
      width="100"
      align="center">
      <template slot-scope="scope">
        {{scope.row.check_status}}
      </template>
    </el-table-column>
  </el-table>
  <!-- 分页 -->
  <div class="page_box">
<el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalPage">
</el-pagination>
  </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      shqkInput: '',
      shskOptions: [
        // {
        //   value: 1,
        //   name: '未提交'
        // },
        {
          value: 2,
          name: '待审核'
        },
        {
          value: 3,
          name: '审核不通过'
        },
        {
          value: 4,
          name: '审核通过'
        }
      ],
      currentPage: 1,
      totalPage: 0,
      pageSize: 10,
      targetTime: '',
      targetState: '',
      targetDept: '',
      targetName: '',
      deptOptions: [], //  部门option
      stateOptions: [
        {
          value: 6,
          name: '全部'
        },
        {
          value: 1,
          name: '未开始'
        },
        {
          value: 2,
          name: '进行中'
        },
        {
          value: 3,
          name: '已完成'
        },
        {
          value: 4,
          name: '已延期'
        },
        {
          value: 5,
          name: '延期完成'
        }
      ],
      tableData: [],
      resultTypeObj: {
        '未开始': 'style_one',
        '进行中': 'style_two',
        '已完成': 'style_three',
        '已延期': 'style_four',
        '延期完成': 'style_five'
      },
      multipleSelection: []
    }
  },
  mounted () {
    let self = this
    self.$ajax('post', self.HOST + '/tr/trTarget/web/getTargetAttribution', {}, (res) => {
      if (res.success) {
        for (let item of res.obj) {
          self.deptOptions.push(item)
        }
      } else {
        self.$message({
          message: res.msg,
          type: 'error'
        })
      }
    })
    let data = {
      planType: 3,
      checkStatus: self.shqkInput,
      deptId: self.targetDept,
      resultType: self.targetState,
      startTime: '',
      endTime: '',
      searchName: self.targetName,
      pageNumber: self.currentPage,
      pageSize: self.pageSize,
      descStr: 'true'
    }
    self.refreshDom(data)
  },
  methods: {
    sortChange (col, prop, order) {
      let self = this
      let descStr = 'true'
      if (col.order) {
        if (col.order === 'ascending') {
          // 升序
          descStr = 'false'
        } else {
          // 降序
          descStr = 'true'
        }
      } else {
        descStr = 'true'
      }
      let data = {
        planType: 3,
        checkStatus: self.shqkInput,
        deptId: self.targetDept,
        resultType: self.targetState,
        startTime: '',
        endTime: '',
        searchName: self.targetName,
        pageNumber: self.currentPage,
        pageSize: self.pageSize,
        descStr: descStr
      }
      self.refreshDom(data)
    },
    toDetail (id) {
      this.$router.push({path: '/wshPlanDetail/' + id})
    },
    go_child (id) {
      this.$router.push({path: '/childList/' + id})
    },
    // 搜索以及分页时调用的方法
    refreshDom (data) {
      // const loading = this.$loading({
      //   lock: true,
      //   text: "加载中",
      //   spinner: "el-icon-loading",
      //   background: "rgba(0, 0, 0, 0.7)"
      // })
      let self = this
      self.$ajaxMore('post', self.HOST + '/tr/trPlan/web/getPlanLists', data, (res) => {
        if (res.success) {
        // loading.close()
          self.totalPage = res.data.totalSize
          self.tableData = []
          for (let item of res.obj) {
            item.styleName = self.resultTypeObj[item.result_type]
            self.tableData.push(item)
          }
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    handleCurrentChange (val) {
      let self = this
      this.currentPage = val
      let data = {
        planType: 3,
        checkStatus: self.shqkInput,
        deptId: self.targetDept,
        resultType: self.targetState,
        startTime: '',
        endTime: '',
        searchName: self.targetName,
        pageNumber: self.currentPage,
        pageSize: self.pageSize
      }
      self.refreshDom(data)
    },
    handleSizeChange (val) {
      let self = this
      this.pageSize = val
      self.currentPage = 1
      let data = {
        planType: 3,
        checkStatus: self.shqkInput,
        deptId: self.targetDept,
        resultType: self.targetState,
        startTime: '',
        endTime: '',
        searchName: self.targetName,
        pageNumber: self.currentPage,
        pageSize: self.pageSize
      }
      self.refreshDom(data)
    },
    // 搜索方法
    searchFunc () {
      let self = this
      let starttime = ''
      let endtime = ''
      if (self.targetTime) {
        starttime = self.mydateFormat.dateCodeYmd(self.targetTime[0])
        endtime = self.mydateFormat.dateCodeYmd(self.targetTime[1])
      }
      let data = {
        planType: 3,
        checkStatus: self.shqkInput,
        deptId: self.targetDept,
        resultType: self.targetState,
        startTime: starttime,
        endTime: endtime,
        searchName: self.targetName,
        pageNumber: self.currentPage,
        pageSize: self.pageSize
      }
      self.refreshDom(data)
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
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
  width: 36px;
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
.operation_box {
  /* height: 78px; */
  background: #fff;
  /* line-height: 78px; */
  padding: 22px 25px;
}
.table_page_box {
  margin-top: 20px;
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
/*
'未开始': '#a5a5a5',
          '进行中': '#ffc000',
          '已完成': '#70ad47',
          '已延期': '#ed7d31',
          '延期完成': '#4472c4'
*/
.style_one {
    background: #a5a5a5;
}
.style_two {
    background: #ffc000;
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
</style>
