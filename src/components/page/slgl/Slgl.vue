<template>
  <div class="cell_pointer">
    <!--<div class="container_box_header">我负责的目标</div>-->
    <!-- 操作容器 -->
    <div class="bg_box">
      <div class="operation_box boxShadow">
          <!-- 计划类型 -->
        <div class="operation_item">
          <!-- <div class="operation_item_left">所属部门</div> -->
          <div class="operation_item_right">
            <el-select v-model="targetClass" placeholder="目标类型" style="width: 130px;" size="small" @change="targetClassChange">
              <el-option label="我负责的目标" value="2"></el-option>
              <el-option label="我审核的目标" value="3"></el-option>
            </el-select>
          </div>
        </div>
        <!-- 所属部门 -->
        <!-- <div class="operation_item">
          <div class="operation_item_right">
            <el-select v-model="targetDept" placeholder="所属部门" style="width: 110px;" size="small">
              <el-option label="所属部门" value=""></el-option>
              <el-option v-for="item in deptOptions" :key="item.id" :label="item.deptname" :value="item.id">
              </el-option>
            </el-select>
          </div>
        </div> -->
        <!-- 审核情况 -->
      <div class="operation_item" v-if="targetClass - 0 === 3" style="margin-left: 6px;" key="select1">
        <!-- <div class="operation_item_left">所属部门</div> -->
        <div class="operation_item_right">
          <el-select v-model="shqkInput" placeholder="审核情况" style="width: 110px;" size="small" @change="searchFunc">
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
        <!-- 完成情况 -->
        <div class="operation_item" style="margin-left: 6px;" v-if="targetClass - 0 === 2" key="select2">
          <!-- <div class="operation_item_left">完成情况</div> -->
          <div class="operation_item_right">
            <el-select v-model="targetState" placeholder="完成情况" size="small" style="width: 110px;" @change="searchFunc">
              <el-option v-for="item in stateOptions" :key="item.value" :label="item.name" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <!-- 日期 -->
        <div class="operation_item">
          <div class="operation_item_left">日期</div>
          <div class="operation_item_right">
            <el-date-picker style="width: 248px;" v-model="targetTime" type="daterange" size="small" :editable="false" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" @change="timeChange">
            </el-date-picker>
          </div>
        </div>
        <!-- 姓名 -->
        <div class="operation_item" style="margin-left: 6px;">
          <!-- <div class="operation_item_left">目标名称</div> -->
          <div class="operation_item_right">
            <el-input v-model="targetName" placeholder="请输入目标名称" size="small" style="width: 152px;" clearable @keyup.native.enter="searchFunc"></el-input>
          </div>
        </div>
        <!-- 搜索按钮 -->
        <el-button type="info" icon="el-icon-refresh" style="height: 32px;width: 32px;margin-left: 0;transform: translateY(1px);text-align: center;padding: 9px 0;" size="small" @click="refreshCondition"></el-button>
        <el-button type="info" size="small" style="height: 32px;margin-left: 5px;background: #70ad47;border-color: #70ad47;transform: translateY(1px)" @click="searchFunc">查询</el-button>   
        <!-- 右侧操作按钮 -->
        <div class="right_do_btn" style="float: right">
          <el-button type="primary" icon="el-icon-plus" style="height: 32px;background: #ed7d31;border: 0;" size="small" @click="router_to_add">添加目标</el-button>
          <!-- <el-button type="primary" icon="el-icon-edit" style="height: 32px;background: #5b9bd5;border: 0;" size="small" @click="router_to_edit"></el-button>
        <el-button type="info" icon="el-icon-delete" style="height: 32px;" size="small" @click="deleteFunc" :disabled="isDisabledDelete"></el-button> -->
        </div>
      </div>
      <!-- 视图容器 -->
      <div class="table_page_box boxShadow" v-if="isWfz" key="table1">
        <el-table size="mini" ref="multipleTable" :data="tableData" style="width: 100%"
            @sort-change="sortChange"
            @row-click="rowClick"
        >
          <el-table-column label="序号" width="80" align="center">
            <template slot-scope="scope">
              {{pageSize * (currentPage - 1) + 1 + scope.$index}}
            </template>
            <!-- {{pageSize * (currentPage - 1) + index + 1}} -->
          </el-table-column>
          <el-table-column align="left" label="目标" show-overflow-tooltip>
            <template slot-scope="scope">
              <a href="javascript:void(0)" @click="toDetail(scope.row.id)">{{scope.row.target_name}}<i v-if="scope.row.existFile" class="iconfont">&#xe632;</i>
                  <!-- <el-progress :percentage="scope.row.progress ? scope.row.progress - 0 : 0" color="#8e71c7" style="transform: translateY(-15px)"></el-progress> -->
              </a>
            </template>
          </el-table-column>
          <el-table-column prop="dept_name" label="所属部门"  show-overflow-tooltip align="left" :width="$store.state.$screenWidth">
          </el-table-column>
          <el-table-column label="完成情况" width="90" align="center">
            <template slot-scope="scope">
              <span class="span_state" :class="scope.row.styleName">{{scope.row.result_type}}</span>
            </template>
          </el-table-column>
          <el-table-column label="起止日期" width="220" align="center" sortable>
            <template slot-scope="scope">
              {{scope.row.start_time + '至' + scope.row.end_time}}</template>
          </el-table-column>
          <el-table-column label="分解目标数" width="100" align="center">
            <template slot-scope="scope">
              <a href="javascript:void(0)" @click="go_child(scope.row.id)">{{scope.row.childTargetCount}}</a>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="320" align="center">
            <template slot-scope="scope">
              <!-- <el-button type="primary" icon="el-icon-edit" style="height: 32px;background: #5b9bd5;border: 0;" size="small" @click="router_to_edit"></el-button>         -->
              <!-- <el-button type="info" icon="el-icon-delete" style="height: 32px;" size="small" @click="deleteFunc" :disabled="isDisabledDelete"></el-button> -->
               <!-- <span class="hover_jd" @click="showJdBox(scope.row)" title="进度填报">
                <i class="iconfont">&#xe634;</i>
              </span> -->
              <span class="hover_fj" @click="scope.row.result_type !== '已完成' && scope.row.result_type !== '延期完成'? $router.push({path: '/splitTarget/' + scope.row.id}): $message({type: 'warning',message: '该目标已完成，无法分解！'})" title="分解目标">
                <i class="iconfont">&#xe6c4;</i>
              </span>
              <span class="hover_zd" @click="scope.row.result_type !== '已完成' && scope.row.result_type !== '延期完成'? $router.push({path: '/zdPlan/' + scope.row.id}): $message({type: 'warning',message: '该目标已完成，无法制定计划！'})" title="制定计划">
                <i class="iconfont">&#xe641;</i>
              </span>
              <span class="hover_bj" @click="router_to_edit(scope.row.id)" title="编辑">
                <i class="el-icon-edit" style="font-size: 17px;"></i>
              </span>
              <span class="hover_sc" @click="deleteFunc(scope.row.id)" title="删除">
                <i class="el-icon-delete" style="font-size: 17px;"></i>
              </span>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="page_box">
          <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40, 50]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalPage">
          </el-pagination>
        </div>
      </div>
      <div class="table_page_box boxShadow" v-if="!isWfz" key="table2">
      <el-table
      size="mini"
      ref="multipleTable"
    :data="tableData"
    @sort-change="sortChange"
    @row-click="rowClick"
    style="width: 100%">
    <!-- <el-table-column
      type="selection"
      width="30">
    </el-table-column> -->
    <el-table-column
      label="序号"
      width="80"
      align="center">
      <template slot-scope="scope">
        {{pageSize * (currentPage - 1) + 1 + scope.$index}}
      </template>
      <!-- {{pageSize * (currentPage - 1) + index + 1}} -->
    </el-table-column>
    <el-table-column
      label="目标"
      show-overflow-tooltip>
      <template slot-scope="scope">
        <a href="javascript:void(0)" @click="toDetail(scope.row.id)">{{scope.row.target_name}}<i v-if="scope.row.existFile" class="iconfont">&#xe632;</i>
            <!-- <el-progress :percentage="scope.row.progress ? scope.row.progress - 0 : 0" color="#8e71c7" style="transform: translateY(-15px)"></el-progress> -->
        </a>

      </template>
    </el-table-column>
    <el-table-column
      prop="dept_name"
      label="所属部门"
       show-overflow-tooltip align="left"
       :width="$store.state.$screenWidth">
    </el-table-column>
    <el-table-column
      prop="manager_name"
      label="负责人"
      width="80" align="center">
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

    <!-- <el-dialog
  title="填报进度"
  :visible.sync="dialogVisible_jd"
  width="30%">
  <el-slider v-model="slider_value"></el-slider>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_jd = false">取 消</el-button>
    <el-button type="primary" @click="addJdSure">确 定</el-button>
  </span>
</el-dialog> -->
<el-dialog
  title="本月进度填报"
  :visible.sync="dialogVisible_jd"
  width="30%">
  <div style="font-size: 16px;margin-bottom: 20px;padding-left: 20px;">{{theDetailName}}</div>
  <el-radio-group v-model="slider_value" style="margin-left: 20px;">
    <el-radio :label="1">
        <span style="display: inline-block;width: 6px;height: 20px;"></span>
        <i class="radio_i" style="background: #70ad47"></i>
        <span style="font-size: 16px;">正常</span>
    </el-radio><br><br>
    <el-radio :label="2">
        <span style="display: inline-block;width: 6px;height: 20px;"></span>
        <i class="radio_i" style="background: #fec000"></i>
        <span style="font-size: 16px;">有问题或时间到但未填报</span>
    </el-radio><br><br>
    <el-radio :label="3">
        <span style="display: inline-block;width: 6px;height: 20px;"></span>
        <i class="radio_i" style="background: #e96c72"></i>
        <span style="font-size: 16px;">停滞</span>
    </el-radio><br><br>
    <el-radio :label="4">
        <span style="display: inline-block;width: 6px;height: 20px;"></span>
        <i class="radio_i" style="background: #333333"></i>
        <span style="font-size: 16px;">已结项</span>
    </el-radio><br><br>
  </el-radio-group>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible_jd = false">取 消</el-button>
    <el-button type="primary" @click="addJdSure">确 定</el-button>
  </span>
</el-dialog>

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
      theDetailName: '',
      reformId: '',
      slider_value: 0, // 填报进度
      dialogVisible_jd: false, // 填报进度的容器
      isWfz: true,
      targetClass: '2',
      currentPage: 1,
      totalPage: 0,
      pageSize: 10,
      targetTime: '',
      starttime: '',
      endtime: '',
      targetState: 6,
      targetDept: '',
      targetName: '',
      deptOptions: [], //  部门option
      stateOptions: [
        {
          value: 6,
          name: '完成情况'
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
      multipleSelection: [],
      descStr: 'true' // 升序或者降序的字段
    }
  },
  mounted () {
    let self = this
    self.$ajax(
      'post',
      self.HOST + '/tr/trTarget/web/getTargetAttribution',
      {},
      (res) => {
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
      }
    )
    this.targetClass = this.$route.params.type
    let data = {
      targetClass: this.targetClass,
        deptId: this.targetDept,
        resultType: this.targetState,
        checkStatus: this.shqkInput,
        startTime: this.starttime,
        endTime: this.endtime,
        searchName: this.targetName,
        pageNumber: this.currentPage,
        pageSize: this.pageSize,
        descStr: this.descStr
    }
    self.refreshDom(data)
  },
  methods: {
    refreshCondition () {
      // 重置筛选条件
      this.shqkInput = ''
      this.targetState = ''
      this.targetTime = ''
      this.starttime = ''
      this.endtime = ''
      this.targetName = ''
      this.searchFunc()
    },
    rowClick (row, event, column) {
      // 点击某一行时触发
      // console.log(row, event, column)
      if (column.label === '分解目标数' || column.label === '操作') {
        // 不进行操作
      } else {
        // 跳转到详情
        if (this.targetClass - 0 === 2) {
          this.$router.push({ path: '/targetDetail/' + row.id })
        } else {
          this.$router.push({ path: '/shTargetDetail/' + row.id })
        }
      }
    },
    timeChange () {
      if (this.targetTime) {
        this.starttime = this.mydateFormat.dateCodeYmd(this.targetTime[0])
        this.endtime = this.mydateFormat.dateCodeYmd(this.targetTime[1])
      } else {
        this.starttime = ''
        this.endtime = ''
      }
      this.searchFunc()
    },
    // shqkInputChange () {
    //   this.currentPage = 1
    //   let data = {
    //     targetClass: this.targetClass,
    //     deptId: this.targetDept,
    //     resultType: this.targetState,
    //     checkStatus: this.shqkInput,
    //     startTime: this.starttime,
    //     endTime: this.endtime,
    //     searchName: this.targetName,
    //     pageNumber: this.currentPage,
    //     pageSize: this.pageSize,
    //     descStr: this.descStr
    //   }
    //   this.refreshDom(data)
    // },
    targetClassChange (val) {
      if (val - 0 === 2) {
        this.shqkInput = ''
        this.isWfz = true
      } else {
        this.targetState = ''
        this.isWfz = false
      }
      this.searchFunc()
      this.$router.push({
        path: '/slgl/' + val
      })
    },
    // targetNameEnter () {
    //   this.currentPage = 1
    //   let data = {
    //     targetClass: this.targetClass,
    //     deptId: this.targetDept,
    //     resultType: this.targetState,
    //     checkStatus: this.shqkInput,
    //     startTime: this.starttime,
    //     endTime: this.endtime,
    //     searchName: this.targetName,
    //     pageNumber: this.currentPage,
    //     pageSize: this.pageSize,
    //     descStr: this.descStr
    //   }
    //   this.refreshDom(data)
    // },
    // targetStateChange () {
    //   this.currentPage = 1
    //   let data = {
    //     targetClass: this.targetClass,
    //     deptId: this.targetDept,
    //     resultType: this.targetState,
    //     checkStatus: this.shqkInput,
    //     startTime: this.starttime,
    //     endTime: this.endtime,
    //     searchName: this.targetName,
    //     pageNumber: this.currentPage,
    //     pageSize: this.pageSize,
    //     descStr: this.descStr
    //   }
    //   this.refreshDom(data)
    // },
    addJdSure () {
      let data = {
        reformId: this.reformId,
        reformType: 1,
        progress: this.slider_value
      }
      this.$ajaxMore('post', this.HOST + '/tr/trPlan/web/editProgress', data, (res) => {
        if (res.success) {
          this.$message({
            type: 'success',
            message: res.msg
          })
          this.dialogVisible_jd = false
            let data1 = {
              targetClass: this.targetClass,
              deptId: this.targetDept,
              resultType: this.targetState,
              checkStatus: this.shqkInput,
              startTime: this.starttime,
              endTime: this.endtime,
              searchName: this.targetName,
              pageNumber: this.currentPage,
              pageSize: this.pageSize,
              descStr: this.descStr
            }
            this.refreshDom(data1)
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    showJdBox (row) {
      this.dialogVisible_jd = true
      this.slider_value = row.progress - 0
      this.reformId = row.id
      this.theDetailName = row.target_name
    },
    sortChange (col, prop, order) {
      let self = this
      if (col.order) {
        if (col.order === 'ascending') {
          // 升序
          self.descStr = 'false'
        } else {
          // 降序
          self.descStr = 'true'
        }
      } else {
        self.descStr = 'true'
      }
        let data = {
        targetClass: this.targetClass,
        deptId: this.targetDept,
        resultType: this.targetState,
        checkStatus: this.shqkInput,
        startTime: this.starttime,
        endTime: this.endtime,
        searchName: this.targetName,
        pageNumber: this.currentPage,
        pageSize: this.pageSize,
        descStr: this.descStr
      }
      self.refreshDom(data)
    },
    toDetail (id) {
      if (this.targetClass - 0 === 2) {
        this.$router.push({ path: '/targetDetail/' + id })
      } else {
        this.$router.push({ path: '/shTargetDetail/' + id })
      }
    },
    go_child (id) {
      this.$router.push({ path: '/childList/' + id })
    },
    // 搜索以及分页时调用的方法
    refreshDom (data) {
      let self = this
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/trTarget/web/getTargetRootList',
        data,
        (res) => {
          if (res.success) {
            // loading.close();
            if (self.targetClass - 0 === 2) {
              self.isWfz = true
            } else {
              self.isWfz = false
            }
            self.totalPage = res.data.totalSize
            self.tableData = []
            for (let item of res.obj) {
              item.styleName =
                                self.resultTypeObj[item.result_type]
              self.tableData.push(item)
            }
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },
    handleCurrentChange (val) {
      let self = this
      this.currentPage = val
      let data = {
        targetClass: this.targetClass,
        deptId: this.targetDept,
        resultType: this.targetState,
        checkStatus: this.shqkInput,
        startTime: this.starttime,
        endTime: this.endtime,
        searchName: this.targetName,
        pageNumber: this.currentPage,
        pageSize: this.pageSize,
        descStr: this.descStr
      }
      self.refreshDom(data)
    },
    handleSizeChange (val) {
      let self = this
      this.pageSize = val
      self.currentPage = 1
      let data = {
        targetClass: this.targetClass,
        deptId: this.targetDept,
        resultType: this.targetState,
        checkStatus: this.shqkInput,
        startTime: this.starttime,
        endTime: this.endtime,
        searchName: this.targetName,
        pageNumber: this.currentPage,
        pageSize: this.pageSize,
        descStr: this.descStr
      }
      self.refreshDom(data)
    },
    // 搜索方法
    searchFunc () {
      let self = this
      // let starttime = ''
      // let endtime = ''
      // if (self.targetTime) {
      //   starttime = self.mydateFormat.dateCodeYmd(self.targetTime[0])
      //   endtime = self.mydateFormat.dateCodeYmd(self.targetTime[1])
      // }
      self.currentPage = 1
      let data = {
        targetClass: this.targetClass,
        deptId: this.targetDept,
        resultType: this.targetState,
        checkStatus: this.shqkInput,
        startTime: this.starttime,
        endTime: this.endtime,
        searchName: this.targetName,
        pageNumber: this.currentPage,
        pageSize: this.pageSize,
        descStr: this.descStr
      }
      self.refreshDom(data)
    },
    // 删除方法
    deleteFunc (id) {
      let self = this
      this.$ajax('post', this.HOST + '/tr/trTarget/web/checkBeforeDel', {targetId: id}, (res1) => {
        if (res1.success) {
          this.$confirm(
            '你确定要删除该条信息吗？删除后，不可恢复',
            '删除确认',
            {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }
          ).then(() => {
            self.$ajax(
              'post',
              self.HOST + '/tr/trTarget/web/delTargetById',
              { targetId: id },
              (res) => {
                if (res.success) {
                  self.$message({
                    message: res.msg,
                    type: 'success'
                  })
                  // if (self.currentPage > 1) {
                  self.currentPage = 1
                  // return
                  // }
                  let starttime = ''
                  let endtime = ''
                  if (self.targetTime) {
                    starttime = self.mydateFormat.dateCodeYmd(
                      self.targetTime[0]
                    )
                    endtime = self.mydateFormat.dateCodeYmd(
                      self.targetTime[1]
                    )
                  }
                  let data = {
                    targetClass: this.targetClass,
                    deptId: this.targetDept,
                    resultType: this.targetState,
                    checkStatus: this.shqkInput,
                    startTime: this.starttime,
                    endTime: this.endtime,
                    searchName: this.targetName,
                    pageNumber: this.currentPage,
                    pageSize: this.pageSize,
                    descStr: this.descStr
                  }
                  self.refreshDom(data)
                } else {
                  self.$message({
                    message: res.msg,
                    type: 'error'
                  })
                }
              }
            )
          })
        } else {
          this.$message({
            message: res1.msg,
            type: 'warning'
          })
        }
      })
    },
    // 跳转到添加目标
    router_to_add () {
      this.$router.push({ path: '/addTarget' })
    },
    // 跳转到添加目标
    router_to_edit (id) {
      this.$ajax(
        'post',
        this.HOST + '/tr/trTarget/web/getTargetById',
        { targetId: id },
        res => {
          if (res.success) {
            this.$router.push({
              path: '/editTarget/' + id
            })
          } else {
            this.$message({
              type: 'error',
              message: res.msg
            })
          }
        }
      )
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
/* .slgl_box {
  padding: 0 1.64%;
  background: #f1f4f5;
}
.container_box_header {
  padding-left: 1.64%;
  height: 60px;
  font-size: 18px;
  color: #37474f;
  line-height: 60px;
  background: #f1f4f5;
} */
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
.hover_jd,
.hover_fj,
.hover_zd,
.hover_bj,
.hover_sc {
    display: inline-block;
    height: 54px;
    width: 54px;
    vertical-align: top;
    line-height: 54px;
    cursor: pointer;
}
.hover_jd:hover {
    background: #ed7d31;
    color: #fff;
}
.hover_bj:hover {
    background: #5b9bd5;
    color: #fff;
}
.hover_sc:hover {
    background: #e96c72;
    color: #fff;
}
.hover_fj:hover {
    background: #ffc000;
    color: #fff;
}
.hover_zd:hover {
    background: #70ad47;
    color: #fff;
}
.el-table__row:hover .hover_jd {
    background:#ed7d31;
    color: #fff;
}
.el-table__row:hover .hover_fj {
    background: #ffc000;
    color: #fff;
}
.el-table__row:hover .hover_zd {
    background: #70ad47;
    color: #fff;
}
.el-table__row:hover .hover_bj {
    background: #5b9bd5;
    color: #fff;
}
.el-table__row:hover .hover_sc {
    background: #e96c72;
    color: #fff;
}
.el-table__row td {
    height: 54px;
}
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
.radio_i {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 9px;
    transform: translateY(3px)
}
.radio_i+span {
    color: #333;
}
</style>
