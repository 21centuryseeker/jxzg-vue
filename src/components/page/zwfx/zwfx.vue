<template>
  <div>
    <div class="zzjg_box title_box  tab-controlFixed" v-if="false">
      <el-radio-group v-model="job" @change="jobChange">
        <el-radio-button v-for="item in jobItems" :label="item.deptId + ',' + item.roleId" :key="item.deptId">{{item.deptName}}</el-radio-button>
      </el-radio-group>
    </div>
    <!-- <div class="tab-control clearfix">
      <div class="tab-control-item" v-for="(item,index) in items" :key="item.value">
          <div v-if="index==0" class="active tab">{{item.name}}</div>
          <div v-else-if="index!=0" class="tab">{{item.name}}</div>
      </div>
    </div> -->
    <!-- <div class="container_box_header"  style="margin-top: 40px;">自我诊断</div> -->
    <div class="zzjg_box">
      <!-- <el-radio-group v-model="user" @change="userChange">
        <el-radio-button v-for="item in userItems" :label="item.value" :key="item.value">{{item.label}}</el-radio-button>
      </el-radio-group> -->
      <div class="group_box">
    <div class="type_group boxShadow">
      <el-radio-group v-model="user" @change="userChange">
        <el-radio-button label="1"  >
          <img src="../../../assets/teacher-group.png" alt="">
          <div>教师</div>
        </el-radio-button>
        <el-radio-button label="2"  >
          <img src="../../../assets/student-group.png" alt="">
          <div>学生</div>
        </el-radio-button>
        <!-- <el-radio-button label="3"  >
          <img src="../../../assets/school-group.png" alt="">
          <div>学校</div>
        </el-radio-button> -->
        <el-radio-button label="4" >
          <img src="../../../assets/major-group.png" alt="">
          <div>专业</div>
        </el-radio-button>
        <el-radio-button label="5" >

          <img src="../../../assets/class-group.png" alt="">
          <div>课程</div>

        </el-radio-button>
      </el-radio-group>
      <el-button  @click="addNewChart" style="float: right;margin: 20px 20px 0 0;color: #fff;background: #70ad47;">自定义分析</el-button>
    </div>
  </div>
    </div>
    <div class="jsc_content">
      <el-row :gutter="20">
        <template v-for="(item, index) in chartDates">
          <el-col :span="12" :key="index" style="margin-top: 20px;">
            <div class="content_item boxShadow" :key="index">
              <div class="content_item_title">{{item.title}}</div>
              <div class="chart_box big" style="position: relative">
                <i title="删除" class="iconfont" style="position: absolute;z-index: 2;top: 8px;right: 10px;cursor: pointer;color: #f00;font-size: 18px;" @click="delete1(item.id)">&#xe635;</i>
                <div class="chart_show" style="height: 430px;"></div>
              </div>
            </div>
          </el-col>
        </template>
        <el-col :span="12" style="margin-top: 20px;">
          <div class="content_item add_new boxShadow" @click="addNewChart">
            <i class="el-icon-circle-plus-outline"></i>
            <div>自定义分析</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 新增自定义的弹出层 -->
    <el-dialog
      title="自定义分析"
      :visible.sync="dialogVisible"
      width="800px">
      <!-- 步骤 -->
      <div class="step_box">
          <div class="step_item" :class="{active: isFirst === 1}">
            <div class="step_item_left">1</div>
            <div class="step_item_right">选择指标</div>
          </div>
          <div class="step_item" :class="{active: isFirst === 2}">
            <div class="step_item_left">2</div>
            <div class="step_item_right">选择时间</div>
          </div>
          <div class="step_item" :class="{active: isFirst === 3}">
            <div class="step_item_left">3</div>
            <div class="step_item_right">选择图表类型</div>
          </div>
        </div>
      <div class="my_dialog_container">
        <template v-if="isFirst === 3">
          <!-- <div class="title">时间</div> -->
        <div  style="margin-bottom: 20px;margin-top: 20px;">
          <el-radio-group v-model="chartType">
            <el-radio label="bar">
              <img src="../../../assets/chart/zhuxing.png" alt="" class="chart_type_img">
              柱状图
              </el-radio>
            <el-radio label="line">
              <img src="../../../assets/chart/zhexian.png" alt="" class="chart_type_img">
              折线图
              </el-radio>
            <!-- <el-radio label="pie">
              <img src="../../../assets/chart/bing.png" alt="" class="chart_type_img" style="height: 32px;transform: translateY(10px)">
              饼图
              </el-radio>
            <el-radio label="circle">
              <img src="../../../assets/chart/huanxing.png" alt="" class="chart_type_img" style="height: 32px;transform: translateY(10px)">
              环形图
              </el-radio>
            <el-radio label="funnel">
              <img src="../../../assets/chart/loudou.png" alt="" class="chart_type_img">
              漏斗图
              </el-radio> -->
          </el-radio-group>
        </div>
        </template>
        <template v-if="isFirst === 2">
          <!-- <div class="title">时间</div> -->
        <div  style="margin-bottom: 20px;margin-top: 20px;">
          <el-radio-group v-model="radio2">
            <el-radio :label="1" style="margin-bottom: 20px;">  <!-- %4 === 1 -->
              自定义
              <el-date-picker
                v-model="value6"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-radio>
            <br>
            <el-radio :label="2">近3个月</el-radio>  <!-- %4 === 2 -->
            <el-radio :label="6">近6个月</el-radio>  <!-- %4 === 2 -->
            <el-radio :label="3">近三年</el-radio>  <!-- %4 === 3 -->
            <el-radio :label="7">近五年</el-radio>  <!-- %4 === 3 -->
          </el-radio-group>
        </div>
        </template>
        <template v-if="isFirst === 1">
        <el-tabs v-model="activeNameTab" @tab-click="handleClick"  class="my_tab_style">
          <el-tab-pane label="从指标库选取" name="first">
            <div key="table1">
              <!-- <el-input v-model="input" size="small" placeholder="输入关键字进行过滤" style="width: 200px;"></el-input>
              <el-button type="info" size="small" @click="searchZb">搜索</el-button> -->
              <div class="newZwzdStyle">
                <div class="tree_left scroll_x_hidden_box">
                   <el-scrollbar :wrapStyle="wrapStyle">
          <el-card class="box-card">
            <el-tree :data="propsZb" @node-click="nodeClick" node-key="id" accordion :default-expanded-keys="keysArr" :default-checked-keys="ckeckedKeysArr">
              <!-- <span class="custom-tree-node" slot-scope="{ node, data }" @click="getAllZb(node)"> -->
              <span class="custom-tree-node" slot-scope="{ node, data }" @click="node.isActive = true">
                <span>
                  <i class="iconfont" style="color: #cccccc" v-if="isChile(node)" :class="{ active: node.isActive}">&#xe605;</i>
                  <i class="iconfont" style="color: #cccccc" v-else :class="{ active: node.isActive}">&#xe639;</i>
                  {{ node.label }}</span>
              </span>
            </el-tree>
          </el-card>
        </el-scrollbar>
                </div>
                <div class="table_right">
                  <el-radio-group v-model="radio_zb" style="width: 100%;">
              <table style="width: 100%">
                <tbody>
                  <template v-for="(item, index) in zbItems">
                    <tr :key="index">
                  <template v-for="vo in item">
                    <td :key="vo.id">
                  <el-radio :label="vo.id" :key="vo.id" :disabled="!vo.isenable">{{vo.indexName}}</el-radio>
                  </td>
                  </template>
                 </tr>
              </template>
                </tbody>
              </table>
            </el-radio-group>
            <div style="text-align: center;margin-top: 30px;">
              <el-pagination
                background
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-size="pageSize"
                layout="prev, pager, next"
                :total="totalSize">
              </el-pagination>
            </div>
                </div>
              </div>
</div>
          </el-tab-pane>
          <el-tab-pane label="自定义" name="second">

            <!-- 自定义库 -->
            <div v-if="isZdyList" key="table2">
              <el-input v-model="input2" size="small" placeholder="输入关键字进行过滤" style="width: 200px;"></el-input>
              <el-button type="info" size="small" @click="searchZb2">搜索</el-button>
              <el-button type="primary" icon="el-icon-plus" style="height: 32px;background: #ed7d31;border: 0;" size="small" @click="addNewZb">新增</el-button>
            <el-radio-group v-model="radio_zb2" style="width: 100%;">
              <table style="width: 100%">
                <tbody>
                  <template v-for="(item, index) in zbItems2">
                    <tr :key="index">
                  <template v-for="vo in item">
                    <td :key="vo.id" >
                  <el-radio :label="vo.id" :key="vo.id" >{{vo.indexName}}</el-radio>
                  </td>
                  </template>
                 </tr>
              </template>
                </tbody>
              </table>
            </el-radio-group>
            <div style="text-align: center;margin-top: 30px;">
              <el-pagination
                background
                @current-change="handleCurrentChange2"
                :current-page="currentPage2"
                :page-size="pageSize2"
                layout="prev, pager, next"
                :total="totalSize2">
              </el-pagination>
            </div>
          </div>
          <template v-if="!isZdyList">
            <el-form ref="form" :model="addForm" label-width="130px" id="zBDialog">
            <el-form-item label="指标名称">
              <i class="mustIcon">*</i>
                                <el-input v-model="addForm.name"></el-input>
                              </el-form-item>
                              <el-form-item label="说明">
                                <el-input type="textarea" v-model="addForm.explain"></el-input>
                              </el-form-item>
                              <el-form-item label="度量单位" class="unitBox">
                                <i class="mustIcon">*</i>
                                <el-radio-group v-model="addForm.type" @change="typeChange">
                                  <el-radio :label="3" value="3">整数</el-radio>
                                  <el-radio :label="2" value="2">小数</el-radio>
                                  <el-radio :label="1" value="1">百分比</el-radio>
                                </el-radio-group>
                                <el-select v-model="addForm.unit" placeholder="请选择" v-if="isShowDw">
                                  <el-option label="人" value="1">人</el-option>
                                  <el-option label="元" value="2">元</el-option>
                                  <el-option label="元" value="3">天</el-option>
                                  <el-option label="元" value="4">分</el-option>
                                  <el-option label="元" value="5">个</el-option>
                                </el-select>
                              </el-form-item>
                              <el-form-item label="指标来源" v-if="false">
                                <i class="mustIcon">*</i>
                                <el-radio-group v-model="addForm.source">
                                  <el-radio :label="1">学校自建</el-radio>
                                  <el-radio :label="2">平台自建</el-radio>
                                </el-radio-group>
                              </el-form-item>
                                 <el-form-item label="图表显示">
                                   <i class="mustIcon">*</i>
                                    <el-input v-model="addForm.indexReformSql" type="textarea" placeholder="示例:select count(1) as value from TAB_0000000280 where 1=1" style="width: 600px"></el-input>
                                    <i class="el-icon-info" style="color: #ffc000;font-size: 20px;transform: translateY(-5px)" title="示例:select count(1) as value from TAB_0000000280 where 1=1"></i>
                                </el-form-item>
                                <el-form-item label="时间字段">
                                  <i class="mustIcon">*</i>
                                    <el-input v-model="addForm.timeSql" type="textarea" placeholder="示例:COL_0000003258" style="width: 600px"></el-input>
                                    <i class="el-icon-info" style="color: #ffc000;font-size: 20px;transform: translateY(-5px)" title="示例:COL_0000003258"></i>
                                </el-form-item>
            </el-form>
          </template>
                          </el-tab-pane>
                        </el-tabs>
                        </template>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false; isFirst = 1; inputData = {}">取 消</el-button>
        <el-button @click="prevStep" v-if="isFirst !== 1">上一步</el-button>
        <el-button type="primary" @click="nextStep" v-if="isFirst !== 3">下一步</el-button>
        <el-button type="primary" @click="addSure" v-if="isFirst === 3">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      timeType: '',
      startTime: '',
      endTime: '',
      chartType: 'bar',
      keysArr: [],
      ckeckedKeysArr: [],
      wrapStyle: [{ height: '100%' }],
      propsZb: [],
      zb_before_id: '',
      /*
      <<<<<
      新增自定义
      */
      isZdyList: true,
      radio_zb2: '',
      zbItems2: [],
      currentPage2: 1,
      pageSize2: 16,
      totalSize2: 0,
      input2: '',
      /*
     >>>>>
     */
      isShowDw: true,
      input: '',
      isFirst: 1,
      indexReformSql: '',
      indexName: '',
      radio_zb: '',
      zbItemsOld: [],
      zbItems: [],
      value6: '',
      radio2: 1,
      addForm: {
        name: '',
        explain: '',
        type: 3,
        unit: '',
        indexReformSql: '',
        timeSql: '',
        source: 1
      },
      activeNameTab: 'first',
      dialogVisible: false,
      job: '',
      jobItems: [],
      user: 1,
      userItems: [
        {
          label: '教师',
          value: 1
        },
        {
          label: '学生',
          value: 2
        },
        {
          label: '学校',
          value: 3
        },
        {
          label: '专业',
          value: 4
        },
        {
          label: '课程',
          value: 5
        }
      ],
      chartDates: [],
      currentPage: 1,
      pageSize: 16,
      totalSize: 0,
      inputData: {},
      colorArr: ['#70ad47', '#ed7d31', '#ffc000',
        '#4472c4', '#dd6969', '#00a6a6',
        '#6c6fbf', '#62a8ea', '#ffb980',
        '#d56290'
      ],
      colorIndex: 0 // 颜色的随机颜色
    }
  },
  mounted () {
    // 获取用户的所有职务
    this.$ajax('post', this.HOST + '/tr/autognosis/web/autognosiShow', {}, (res) => {
      if (res.success) {
        this.jobItems = res.obj
        this.job = res.obj[0].deptId + ',' + res.obj[0].roleId
        //  获取用户在某一职务下的自我分析记录
        this.getChart()
        this.getTreeHtml()
      } else {
        this.$message({
          message: res.msg,
          type: 'error'
        })
      }
    })
  },
  methods: {
    getTreeHtml () {
      let self = this
      // 获取指标树形控件
      self.$ajax(
        'post',
        self.HOST + '/tr/trIndex/web/getMyIndexTypeList1',
        { deptId: self.job.split(',')[0], treeId: this.user },
        (res) => {
          if (res.success) {
            // self.dialogVisible = true
            self.propsZb = []
            self.keysArr = []
            self.ckeckedKeysArr = []
            self.propsZb = res.obj
            self.keysArr.push(res.obj[0].id)
            if (res.obj[0].children) {
              self.ckeckedKeysArr.push(res.obj[0].children[0].id)
              self.zb_before_id = res.obj[0].children[0].id
            } else {
              self.ckeckedKeysArr.push(res.obj[0].id)
              self.zb_before_id = res.obj[0].id
            }
            // self.getZbList()
          } else {
            self.$message({
              type: 'error',
              message: res.msg
            })
          }
        }
      )
    },
    isChile (node) {
      if (node == null) {
        return false
      }
      let childSize = node.childNodes.length
      if (childSize === 0) {
        return false
      }
      return true
    },
    nodeClick (data) {
      data.isActive = true
      let self = this
      self.zb_before_id = data.id
      self.currentPage = 1
      let obj = {
        deptId: this.job.split(',')[0],
        typeId: data.id,
        // indexName: self.indexName,
        pageNum: self.currentPage,
        pageSize: self.pageSize
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/trIndex/web/getMyIndexList',
        obj,
        (res) => {
          if (res.success) {
            self.zbItems = []
            if (res.data !== null) {
              self.totalSize = res.data.totalSize
            } else {
              self.totalSize = 0
              return
            }
            let arr = []
            for (let item of res.obj) {
              if (arr.length < 2) {
                arr.push(item)
              } else {
                self.zbItems.push(arr)
                arr = [item]
              }
            }
            self.zbItemsOld = res.obj
            self.zbItems.push(arr)
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },
    typeChange (val) {
      if (val === 1) {
        this.isShowDw = false
      } else {
        this.isShowDw = true
      }
    },
    getRandom () {
      return Math.floor(Math.random() * 10)
    },
    addNewZb () {
      this.addForm.type = 3
      this.isZdyList = false
    },
    prevStep () {
      this.isFirst -= 1
    },
    nextStep () {
      if (this.activeNameTab === 'first') {
        if (!this.radio_zb) {
          this.$message({
            type: 'warning',
            message: '请选择指标！'
          })
          return
        }
        for (let item of this.zbItemsOld) {
          if (item.id - 0 === this.radio_zb - 0) {
            this.indexName = item.indexName
          }
        }
      } else {
        if (this.isZdyList) {
          if (!this.radio_zb2) {
            this.$message({
              type: 'warning',
              message: '请选择指标！'
            })
            return
          }
          for (let item of this.zbItemsOld2) {
            if (item.id - 0 === this.radio_zb2 - 0) {
              this.indexName = item.indexName
            }
          }
        } else {
          this.radio_zb = ''
          this.radio_zb2 = ''
          if (this.addForm.name.trim() === '') {
            this.$message({
              message: '请输入指标名称！',
              type: 'warning'
            })
            return
          }
          if (this.addForm.indexReformSql.trim() === '') {
            this.$message({
              message: '请输入图表显示！',
              type: 'warning'
            })
            return
          }
          if (this.addForm.timeSql.trim() === '') {
            this.$message({
              message: '请输入时间字段！',
              type: 'warning'
            })
            return
          }
          // 自定义指标
          this.inputData = {
            deptId: this.job.split(',')[0],
            // timeType: timeType,
            indexName: this.addForm.name,
            indexDesc: this.addForm.explain,
            indexReformSql: this.addForm.indexReformSql,
            indexSource: this.addForm.source,
            // startTime: startTime,
            // endTime: endTime,
            // unit: this.addForm.unit,
            dateColumn: this.addForm.timeSql,
            indexResultType: this.addForm.type,
            indexType: this.user
          }
          if (this.addForm.type - 0 !== 1) {
            this.inputData.unit = this.addForm.unit
          }
        }
      }
      if (this.isFirst === 2) {
        // 判断是否选择了时间
        if (!this.radio2) {
          this.$message({
            message: '请选择时间！',
            type: 'warning'
          })
          return
        }
        // let arr = ['自定义', '近三个月', '近6个月', '近三年', '近五年']
        // let startTime
        // let endTime
        this.timeType = this.radio2 % 4
        if (this.timeType - 0 === 1) {
        // 选择的是自定义
          if (this.value6.length === 0) {
            this.$message({
              type: 'warning',
              message: '请选择自定义时间！'
            })
            return
          }
          this.startTime = this.mydateFormat.dateCodeYmd(this.value6[0])
          this.endTime = this.mydateFormat.dateCodeYmd(this.value6[1])
        } else if (this.timeType - 0 === 2) {
        // 选择的是月
          let month
          if (this.radio2 - 0 === 2) {
          // 近三个月
            month = 2
          } else {
          // 近六个月
            month = 5
          }
          let datestr = new Date(new Date().getFullYear() + '-' + (new Date().getMonth() + 1)).getTime() - 28 * 24 * 60 * 60 * 1000 * month
          this.startTime = new Date(datestr).getFullYear() + '-' + ((new Date(datestr).getMonth() + 1) < 10 ? ('0' + (new Date(datestr).getMonth() + 1)) : (new Date(datestr).getMonth() + 1))
          this.endTime = new Date().getFullYear() + '-' + ((new Date().getMonth() + 1) < 10 ? ('0' + (new Date().getMonth() + 1)) : (new Date().getMonth() + 1))
        } else {
          let year
          if (this.radio2 - 0 === 3) {
          // 近三年
            year = 2
          } else {
          // 近五年
            year = 4
          }
          // 选择的是年
          this.startTime = new Date().getFullYear() - year
          this.endTime = new Date().getFullYear()
        }
      }
      // this.isFirst = false
      if (this.isFirst < 3) {
        this.isFirst++
      } else {
        this.isFirst = 1
      }
    },
    searchZb () {
      this.currentPage = 1
      this.getZbList()
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getZbList()
    },
    searchZb2 () {
      this.currentPage2 = 1
      this.getZbList2()
    },
    handleCurrentChange2 (val) {
      this.currentPage2 = val
      this.getZbList2()
    },
    delete1 (id) {
      this.$ajax('post', this.HOST + '/tr/autognosis/web/delHistoricalData', {id: id}, (res) => {
        if (res.success) {
          this.$message({
            type: 'success',
            message: res.msg
          })
          this.getChart()
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    getChart () {
      this.chartDates = []
      let data = {
        deptId: this.job.split(',')[0],
        indexType: this.user,
        reform_type: 1
      }
      this.$ajax('post', this.HOST + '/tr/autognosis/web/getHistoricalData', data, (res) => {
        if (res.success) {
          for (let item of res.obj) {
            this.$ajaxMore('post', this.HOST + '/tr/autognosis/web/synchroDataByindex', item, (res1) => {
              if (res1.success) {
                if (res.obj) {
                  res1.obj.data.id = item.id
                  res1.obj.data.chartType = item.chartType
                  this.chartDates.push(res1.obj.data)
                  setTimeout(() => {
                    this.showChart()
                  }, 150)
                }
              } else {
                this.$message({
                  type: 'error',
                  message: res1.msg
                })
              }
            })
          }
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    showChart () {
      this.colorIndex = 0
      for (let i = 0; i < this.chartDates.length; i++) {
        this.showEveryChart(this.chartDates[i], document.getElementsByClassName('chart_show')[i])
      }
    },
    showEveryChart (data, ele) {
      let myChart = this.$echarts.init(ele)
      let option = {
        // color: this.colorArr[this.colorIndex],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        toolbox: {
          show: true,
          right: '30',
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: false, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        series: [
          {
            name: '',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            }
            // data: data.datay
          }
        ]
      }
      if (data.chartType === 'bar') {
        // 柱形图
        for (let item of option.series) {
          item.type = 'bar'
          item.data = data.datay
        }
        // option.series.type = 'bar'
        option.xAxis = [
          {
            type: 'category',
            data: data.datax,
            axisTick: {
              alignWithLabel: true
            }
          }
        ]
        option.yAxis = [
          {
            type: 'value'
          }
        ]
        option.color = this.colorArr[this.colorIndex]
        option.toolbox.feature.magicType = {show: true, type: ['bar', 'line']}
        if (this.colorIndex >= 9) {
          this.colorIndex = 0
        } else {
          this.colorIndex = this.colorIndex + 1
        }
      } else if (data.chartType === 'line') {
        // 折线图
        // option.series.type = 'line'
        for (let item of option.series) {
          item.type = 'line'
          item.data = data.datay
        }
        option.xAxis = [
          {
            type: 'category',
            data: data.datax,
            axisTick: {
              alignWithLabel: true
            }
          }
        ]
        option.yAxis = [
          {
            type: 'value'
          }
        ]
        option.color = this.colorArr[this.colorIndex]
        option.toolbox.feature.magicType = {show: true, type: ['line', 'bar']}
        if (this.colorIndex >= 9) {
          this.colorIndex = 0
        } else {
          this.colorIndex = this.colorIndex + 1
        }
      } else if (data.chartType === 'pie') {
        // 饼图
        // option.series.type = 'pie'
        // option.series.radius = '55%'
        // option.series.center = ['50%', '50%']
        for (let item of option.series) {
          item.type = 'pie'
          item.radius = '70%'
          item.center = ['50%', '50%']
          item.data = data.data
        }
        option.color = this.colorArr
        option.tooltip = {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        }
      } else if (data.chartType === 'circle') {
        // 环形图
        for (let item of option.series) {
          item.type = 'pie'
          item.radius = ['50%', '70%']
          item.center = ['50%', '50%']
          item.data = data.data
        }
        option.color = this.colorArr
        option.tooltip = {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        }
      } else if (data.chartType === 'funnel') {
        // 漏斗图
        for (let item of option.series) {
          item.type = 'funnel'
          item.data = data.data
        }
        option.color = this.colorArr
        option.tooltip = {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        }
        // option.toolbox.feature.magicType = {show: true, type: ['line', 'bar']}
      }
      myChart.setOption(option)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
    addNewChart () {
      this.radio_zb = ''
      this.radio_zb2 = ''
      this.zbItems = []
      this.radio2 = 1
      this.value6 = []
      this.chartType = 'bar'
      this.input2 = ''
      this.addForm.name = ''
      this.addForm.explain = ''
      this.addForm.unit = ''
      this.addForm.type = 3
      this.addForm.indexReformSql = ''
      this.addForm.timeSql = ''
      this.addForm.source = 1
      this.dialogVisible = true
      this.isFirst = 1
      this.activeNameTab = 'first'
      this.getZbList()
      // this.getTreeHtml()
      this.getZbList2()
      this.isZdyList = true
    },
    handleClick () {
      this.isZdyList = true
      this.radio_zb = ''
      this.radio_zb2 = ''
    },
    // 获取指标
    getZbList () {
      let self = this
      let obj = {
        deptId: self.job.split(',')[0],
        typeId: self.zb_before_id,
        pageNum: self.currentPage,
        pageSize: self.pageSize
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/trIndex/web/getMyIndexList',
        obj,
        (res) => {
          if (res.success) {
            self.zbItems = []
            if (res.data !== null) {
              self.totalSize = res.data.totalSize
            } else {
              self.totalSize = 0
              return
            }
            let arr = []
            for (let item of res.obj) {
              if (arr.length < 2) {
                arr.push(item)
              } else {
                self.zbItems.push(arr)
                arr = [item]
              }
            }
            self.zbItemsOld = res.obj
            self.zbItems.push(arr)
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },
    // 获取自定义指标列表
    getZbList2 () {
      // 获取指标
      this.$ajax('post', this.HOST + '/tr/autognosis/web/getCustomIndexList', {
        searchName: this.input2,
        pageNum: this.currentPage2,
        pageSize: this.pageSize2
      }, (res) => {
        if (res.success) {
          this.zbItems2 = []
          this.totalSize2 = res.data.totalSize
          let arr = []
          for (let item of res.obj) {
            if (arr.length < 2) {
              arr.push(item)
            } else {
              this.zbItems2.push(arr)
              arr = [item]
            }
          }
          this.zbItemsOld2 = res.obj
          this.zbItems2.push(arr)
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    jobChange () {
      this.getChart()
    },
    userChange () {
      this.getTreeHtml()
      this.getChart()
    },
    addSure () {
      if (!this.radio2) {
        this.$message({
          message: '请选择时间！',
          type: 'warning'
        })
        return
      }
      // 判断类型
      if (this.radio_zb || this.radio_zb2) {
        // 选择指标方法
        let data = {
          deptId: this.job.split(',')[0],
          timeType: this.timeType,
          indexName: this.indexName,
          startTime: this.startTime,
          endTime: this.endTime,
          indexId: this.radio_zb || this.radio_zb2,
          indexType: this.user,
          chartType: this.chartType,
          reform_type: 1
        }
        this.$ajaxMore('post', this.HOST + '/tr/autognosis/web/synchroDataByindex', data, (res) => {
          if (res.success) {
            // 执行成功的操作
            // let obj = res.obj.data
            this.$ajaxMore('post', this.HOST + '/tr/autognosis/web/saveHistoricalData', data, (res) => {
              if (res.success) {
                this.$message({
                  type: 'success',
                  message: res.msg
                })
                // 添加图形
                this.dialogVisible = false
                this.timeType = 1
                this.indexId = ''
                this.isFirst = 1
                this.getChart()
              } else {
                this.$message({
                  type: 'error',
                  message: res.msg
                })
              }
            })
          } else {
            this.$message({
              type: 'error',
              message: res.msg
            })
          }
        })
      } else {
        // 自定义指标方法
        this.inputData.timeType = this.timeType
        this.inputData.startTime = this.startTime
        this.inputData.endTime = this.endTime
        this.inputData.chartType = this.chartType
        this.$ajaxMore('post', this.HOST + '/tr/autognosis/web/saveCustomIndex', this.inputData, (res) => {
          if (res.success) {
            // 执行成功的操作
            this.$message({
              type: 'success',
              message: res.msg
            })
            this.dialogVisible = false
            this.radio2 = 1
            this.getChart()
          } else {
            this.$message({
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
.tab-control{
    width:100%;
    font-size: 14px;
    color: #76838f;
    background-color: #fff;
    border-bottom: 1px solid #e4eaec;
    /* margin-bottom: 26px; */
}
.tab-control .tab-control-item div{
    line-height: 38px;
    float: left;
    padding: 0 25px;
    background-color: #fff;
    border-right: 1px solid #fff;
    cursor: pointer;
}
.tab-control .tab-control-item .active{
    position: relative;
    top: 1px;
    height: 39px;
    background-color: #f1f4f5;
    border-right: 1px solid #e4eaec;
    border-bottom: 1px solid #f1f4f5
}
/* .slgl_box {
  padding: 0 0 0 20px;
  background: #eef1f2;
} */
.container_box_header {
  height: 60px;
  font-size: 18px;
  color: #37474f;
  line-height: 60px;
  background: #f1f4f5;
  padding-left: 20px;
}
.jsc_content {
  padding: 0 20px;
}
.col_item_father  {
  font-size: 0;
}
.col_item_box {
  height: 134px;
  display: inline-block;
  width: 20%;
  position: relative;
  box-sizing: border-box;
  padding: 0 10px;
  vertical-align: top;
}
.col_item_box>div {
  position: relative;
  height: 134px;
  box-sizing: border-box;
  vertical-align: top;
  background: #fff;
  border-radius: 4px;
}
.col_item_box.theAll>div {
  background: #70ad47;
  color: #fff;
}
.content_item_title {
  font-size: 16px;
  color: #37474f;
  padding-left: 10px;
  height: 60px;
  line-height: 60px;
}
.col_item_box_left i.iconfont {
  font-size: 47px;
  vertical-align: top;
}
div.col_item_box_left {
  width: 70px;
  line-height: 134px;
  text-align: center;
}
div.col_item_box_right {
  width: 100%;
  box-sizing: border-box;
  padding-left: 70px;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 14px;
  color: #a3afb7;
}
.col_item_box.theAll div.col_item_box_right {
  color: #fff;
}
div.col_item_box_right>div:first-child {
  margin-top: 39px;
}
div.col_item_box_right>div>span {
  font-size: 24px;
  color: #526069;
}
.col_item_box.theAll div.col_item_box_right>div>span {
  color:#fff;
}
div.col_item_box_right>div:first-child+div {
  margin-top: 5px;
}
.content_item {
  height: 390px;
  background:#fff;
}
.content_item.add_new {
  text-align: center;
  cursor: pointer;
}
.content_item.add_new i {
  font-size: 78px;
  color: #70ad47;
  margin-top: 140px;
}
.content_item.add_new div {
  color: #70ad47;
  font-size: 18px;
}
div.chart_box {
  height: 330px;
}
div.chart_show {
  height: 330px !important;
}
tr td {
  width: 50%;
  box-sizing: border-box;
  height: 50px;
  padding-left: 10px;
}
div.step_box {
  width: 100%;
  font-size: 0;
  height: 50px;
}
div.step_item {
  width: 33.33%;
  display: inline-block;
  font-size: 0;
  height: 50px;
  background: #f3f7f9;
  line-height: 50px;
}
div.step_item_left {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 10px;
  background: #bec7cc;
  color: #fff;
  display: inline-block;
  vertical-align: top;
  margin: 15px;
}
div.step_item_right {
  width: 110px;
  display: inline-block;
  vertical-align: top;
}
.step_item.active {
  background: #70ad47;
  color: #fff;
}
.step_item.active .step_item_left {
  background: #fff;
  color: #70ad47;
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
.newZwzdStyle {
  font-size: 0;
}
.tree_left {
  width: 200px;
  display: inline-block;
  height: 500px;
  vertical-align: top;
}
.table_right {
  margin-left: 10px;
  display: inline-block;
  width: 550px;
  vertical-align: top;
}
.chart_type_img {
  width: 32px;
  height: 27px;
  transform: translateY(5px)
}
.el-radio-group {
  overflow-x: auto;
  overflow-y: hidden;
}
#zBDialog .el-form-item{
  position: relative;
}
#zBDialog .mustIcon{
  color: #e41622;
  padding-right: 4px;
  position: absolute;
  left: -75px;
  top: 0
}
#zBDialog .mustIconA{
   left: -90px;
}
#zBDialog .mustIconB{
   left: -48px;
}
</style>
