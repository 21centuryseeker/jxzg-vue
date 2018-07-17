<template>
  <div class="xgxBox">
       <!-- <div class="zzjg_box title_box  tab-controlFixed">
          <el-radio-group v-model="job" @change="jobChange">
            <el-radio-button v-for="item in jobItems" :label="item.deptId + ',' + item.roleId" :key="item.deptId">{{item.deptName}}</el-radio-button>
          </el-radio-group>
        </div> -->

         <div class="group_box" style="margin-bottom:20px">
          <div class="type_group boxShadow">
            <el-radio-group v-model="user" @change="userChange">
              <el-radio-button label='1'  >
                <img src="../../../assets/teacher-group.png" alt="">
                <div>教师</div>
              </el-radio-button>
              <el-radio-button label='2'  >
                <img src="../../../assets/student-group.png" alt="">
                <div>学生</div>
              </el-radio-button>
              <!-- <el-radio-button label="3"  >
                <img src="../../../assets/school-group.png" alt="">
                <div>学校</div>
              </el-radio-button> -->
              <el-radio-button label='4' >
                <img src="../../../assets/major-group.png" alt="">
                <div>专业</div>
              </el-radio-button>
              <el-radio-button label='5' >
                <img src="../../../assets/class-group.png" alt="">
                <div>课程</div>
              </el-radio-button>
            </el-radio-group>
            <el-button  @click="addNewChart" style="float: right;margin: 20px 20px 0 0;color: #fff;background: #70ad47;">自定义分析</el-button>
          </div>
       </div>
      <!-- 整体的盒子 -->
      <div class="warrpContent">
        <template v-for="(item,index) in content_xgx">
              <div class="xgx_content boxShadow" :key="index">
                <div class="xgx_title">
                  {{item.tableMap.tableTitle}}相关性分析
                   <i class="iconfont close_i" @click="deleteItem(item.id)" title="删除分析项">&#xe635;</i>
                </div>
                <div >
                  <el-row :gutter="20">
                    <el-col :span="10">
                          <!-- table表格 -->
                          <div class="xgx_table" :key="index">
                              <div class="sti-tbl-container">
                                <div class="sti-tbl-header">
                                      <table>
                                        <thead>
                                          <tr>
                                              <th>{{item.tableMap.name1}}</th>
                                              <th>{{item.tableMap.name2}}</th>
                                              <th>{{item.tableMap.name3}}</th>
                                          </tr>
                                        </thead>
                                      </table>
                                </div>
                                <div class="sti-tbl-body">
                                  <table>
                                    <tbody >
                                      <template v-for="(itemtr,indextr) in item.tableMap.tableData" >
                                          <tr :key="indextr">
                                              <td>{{itemtr.name}}</td>
                                              <td>{{itemtr.value1}}</td>
                                              <td>{{itemtr.value2}}</td>
                                          </tr>
                                      </template>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                          </div>
                    </el-col>
                    <el-col :span="14">
                          <!-- echarts表格 -->
                        <div class="xgx_picBox " :key="index">
                          <el-row>
                              <el-col :span="24">
                                <div class="xgx_fx">相关系数<span class="xgx_blue">{{item.relaDegree}}</span></div>
                                <div class="xgx_pic"></div>
                              </el-col>
                          </el-row>
                        </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
        </template>
      </div>
      <div class="xgx_add">
          <el-col :span="24">
          <div class="content_itemN boxShadow" @click="addNewChart">
            <i class="el-icon-circle-plus-outline"></i>
            <div>自定义分析</div>
          </div>
        </el-col>
      </div>

     <el-dialog
      title="自定义分析"
      :visible.sync="dialogVisible"
      width="800px">
      <!-- 步骤 -->
      <div class="step_box">
          <div class="step_item" :class="{active: isFirst === 1}">
            <div class="step_item_left">1</div>
            <div class="step_item_right">选择分析对象</div>
          </div>
          <div class="step_item" :class="{active: isFirst === 2}">
            <div class="step_item_left">2</div>
            <div class="step_item_right">选择指标</div>
          </div>
        </div>
      <div class="my_dialog_container" style="padding-bottom:5px;">
        <template v-if="isFirst === 1">
            <div style="padding-top:20px;">
              <el-form ref="form1" :model="addForm1" label-width="80px" class="clearfix">
                <el-form-item label="专业部" class="formItem50">
                    <el-select v-model="valueYx" placeholder="请选择" style="width: 280px" filterable @change="selectYXFn">
                      <el-option
                        v-for="item in optionsYx"
                        :key="item.id"
                        :label="item.deptName"
                        :value="item.id">
                      </el-option>
                    </el-select>
                </el-form-item>
                 <el-form-item label="专业名称" class="formItem50 formItem50R" v-if="this.user!=1">
                     <el-select v-model="valueZy" style="width: 280px" placeholder="请选择"  filterable :disabled="flagZY" @change="selectZYFn">
                      <el-option
                        v-for="item in optionsZy"
                        :key="item.id"
                        :label="item.dept_name"
                        :value="item.id">
                      </el-option>
                    </el-select>
                </el-form-item>
                 <el-form-item label="班级名称" class="formItem50" v-if="this.user==2">
                     <el-select v-model="valueBj" style="width: 280px" placeholder="请选择" filterable :disabled="flagBJ">
                    <el-option
                      v-for="item in optionsBj"
                      :key="item.id"
                      :label="item.deptName"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>               
                 <el-form-item label="课程名称" class="formItem50" v-if="this.user==5">
                     <el-select v-model="valueKc"  style="width: 280px" placeholder="请选择" filterable :disabled="flagKc">
                    <el-option
                      v-for="item in optionsKc"
                      :key="item.kcdm"
                      :label="item.kcmc"
                      :value="item.kcdm">
                    </el-option>
                  </el-select>
                </el-form-item>
                  </el-form>
            </div>
        </template>
        <template v-if="isFirst === 2">
            <el-tabs v-model="activeNameTab" @tab-click="handleClick"  class="my_tab_style">
              <el-tab-pane label="从指标库选取" name="first">
                <div key="table1">
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
                      <el-checkbox-group v-model="cheseked_zb" @change="handleCheckedCitiesChange" style="width: 100%;">
                        <table style="width: 100%">
                          <tbody>
                            <template v-for="(item, index) in zbItems">
                              <tr :key="index">
                                <template v-for="vo in item">
                                  <td :key="vo.id">
                                    <el-checkbox :label="vo.id" :key="vo.id" :disabled="!vo.isenable"  @change="removalFn($event, vo.id)">{{vo.indexName}}</el-checkbox>
                                  </td>
                                </template>
                              </tr>
                        </template>
                          </tbody>
                        </table>
                      </el-checkbox-group>
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
                  <!-- 自定义库 -->
            <div v-if="isZdyList" key="table2">
              <div style="margin-bottom:20px;">
                   <el-input v-model="input2" size="small" placeholder="输入关键字进行过滤" style="width: 200px;"></el-input>
                  <el-button type="info" size="small" @click="searchZb2">搜索</el-button>
                  <el-button type="primary" icon="el-icon-plus" style="height: 32px;background: #ed7d31;border: 0;" size="small" @click="addNewZb">新增</el-button>
              </div>

              <el-checkbox-group v-model="cheseked_zb2"  @change="handleCheckedCitiesChange2" style="width: 100%;">
                <table style="width: 100%">
                  <tbody>
                    <template v-for="(item, index) in zbItems2">
                      <tr :key="index">
                    <template v-for="vo in item">
                      <td :key="vo.id" >
                    <el-checkbox :label="vo.id" :key="vo.id" @change="removalFn1($event, vo.id)">{{vo.indexName}}</el-checkbox>
                    </td>
                    </template>
                  </tr>
                </template>
                  </tbody>
                </table>
              </el-checkbox-group>
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
            <el-form ref="form" :model="addForm" label-width="100px" id="zBDialog">
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
                      <el-select v-model="addForm.unit" placeholder="请选择" v-if="isShowDw" style="margin-left:10px">
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
                        <!-- <el-radio :label="2">平台自建</el-radio> -->
                      </el-radio-group>
                    </el-form-item>
                        <el-form-item label="图表显示">
                           <i class="mustIcon">*</i>
                          <el-input v-model="addForm.indexReformSql" type="textarea" placeholder="示例:select count(1) as value from TAB_0000000280 where 1=1" style="width: 600px"></el-input>
                          <i class="el-icon-info" style="color: #ffc000;font-size: 20px;transform: translateY(-5px)" title="示例:select count(1) as value from TAB_0000000280 where 1=1"></i>
                      </el-form-item>
                      <!-- <el-form-item label="时间字段">
                          <el-input v-model="addForm.timeSql" type="textarea" placeholder="示例:COL_0000003258" style="width: 600px"></el-input>
                          <i class="el-icon-info" style="color: #ffc000;font-size: 20px;transform: translateY(-5px)" title="示例:COL_0000003258"></i>
                      </el-form-item> -->
                  </el-form>
                </template>
            </el-tab-pane>
          </el-tabs>
        </template>
      </div>
          <span slot="footer" class="dialog-footer">

            <div v-if='zdyBtn' style="display:inline-block">
              <el-button @click="dialogVisible = false; isFirst = 1; inputData = {}">取 消</el-button>
                <el-button type="warning" @click="firstStep" v-if="isFirst !== 1">上一步</el-button>
                <el-button type="primary" @click="nextStep" v-if="isFirst !== 2">下一步</el-button>
                <el-button type="primary" @click="addSure" v-if="isFirst === 2">确 定</el-button>
            </div>

            <el-button  v-if="!zdyBtn"  @click="xzCancel">取 消</el-button>
            <el-button type="primary" @click="addSureZdy" v-if="!zdyBtn">确 定</el-button>
          </span>
    </el-dialog>



  </div>
</template>
<script>
export default {
  data () {
    return {
      isShowDw: true,
      zdyBtn: true,
      historyFlog: true,
      content_xgx: [],
      chartDates: [],
      job: '', // 角色
      jobItems: [], // 角色数组
      user: 1,
      dialogVisible: false,
      isFirst: 1,
      isZdyList: true,
      cheseked_zb: [],
      zbItems: [],
      zbItems2: [],
      zbItemsOld: [],
      zbItemsOld2: [],
      currentPage: 1,
      pageSize: 16,
      totalSize: 0,
      cheseked_zb2: [],
      currentPage2: 1,
      pageSize2: 16,
      totalSize2: 0,
      input2: '',
      indexName: '',
      propsZb: [],
      keysArr: [],
      ckeckedKeysArr: [],
      activeNameTab: 'first',
      wrapStyle: [{ height: '100%' }],
      checkedZB1: [],
      checkedZB2: [],
      cheseked_Group: [],
      checkedCount: 0,
      checkedCount2: 0,
      checkedGroupAll: [],
      colorArr: ['#70ad47', '#70ad47', '#ed7d31', '#ffc000', '#4472c4', '#dd6969', '#00a6a6',
        '#70ad47', '#70ad47', '#ed7d31', '#ffc000', '#4472c4', '#dd6969', '#00a6a6'],
      colorIndex: 0,
      addForm: {
        name: '',
        type: 3,
        unit: [
          {
            name: '人',
            value: 1
          },
          {
            name: '分',
            value: 2
          },
          {
            name: '天',
            value: 3
          },
          {
            name: '元',
            value: 4
          },
          {
            name: '个',
            value: 5
          }
        ],
        timeSql: '',
        source: 1
      },
      addForm1: {},
      optionsYx: [],
      valueYx: '',
      optionsZy: [],
      valueZy: '',
      optionsBj: [],
      valueBj: '',
      optionsKc: [],
      valueKc: '',
      inputData: {},
      flagZY: true,
      flagBJ: true,
      flagKc:true
    }
  },
  mounted () {
    // 获取用户的所有职务
    this.$ajax('post', this.HOST + '/tr/autognosis/web/autognosiShow', {}, (res) => {
      if (res.success) {
        this.jobItems = res.obj
        this.job = res.obj[0].deptId + ',' + res.obj[0].roleId
        //  获取用户在某一职务下的自我分析记录
        this.historyFn()
      } else {
        this.$message({
          message: res.msg,
          type: 'error'
        })
      }
    })
  },
  methods: {
    //  角色切换
    jobChange () {
      this.historyFn()
    },
    //  身份切换
    userChange () {
      this.chartDates = []
      this.historyFn()
    },
    // 初始化页面
    historyFn () {
      let self = this
      this.content_xgx = []
      let dataNew = {
        deptId: self.job.split(',')[0],
        type: self.user
      }
      self.$ajax('post', this.HOST + '/tr/trCA/web/getrAllRelaData', dataNew,
        (res) => {
          if (res.success) {
            if (res.obj) {
              self.content_xgx = res.obj
                    // 将每一个的里面的图表放到一个对象里面   
                    for (let item of res.obj) {
                let chartDatesArry = []
                for (let item1 of item.tableMap.tableData) {
                  chartDatesArry.push([item1.value1, item1.value2])
                }
                self.chartDates.push(chartDatesArry)
              }
              setTimeout(() => {
                self.xgx_picfn()
              }, 150)
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
    // 获取院系
    getYxFn () {
      let self = this
      let dataNew = {
        searchName: ''
      }
      // self.$ajaxMore('post', this.HOST + '/tr/trDept/web/getIsDeptList', dataNew,
      //   (res) => {
      this.$ajax('post', this.HOST + '/tr/trDept/web/getIsDeptList', {}, (res) => {
        if (res.success) {
          self.optionsYx = res.obj
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      }
      )
    },
    selectYXFn (v) {
      this.flagZY = true
      this.flagBJ = true
      this.flagKc=true
      this.valueZy = ''
      this.valueBj = ''
      this.valueKc=""
      if (!v) {
        return
      }
      this.getZyFn()
    },
    // 获取专业
    getZyFn () {
      let self = this
      let dataNew = {
        yxdm: self.valueYx,
        searchName: '',
        tableId: ''
      }
      self.$ajax('post', this.HOST + '/tr/trCA/web/getZyByYX', dataNew,
        (res) => {
          if (res.success) {
            self.flagZY = false
            self.optionsZy = res.obj
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },
    selectZYFn (v) {
      if(this.user!=5){
        this.flagBJ = true
        this.valueBj = ''
        this.getBjFn()
      }else{
        this.flagKc = true
        this.valueKc = ''
        this.getKcFn()
      }
     
    },
    getBjFn () {
      let self = this
      let dataNew = {
        zydm: self.valueZy,
        searchName: ''
      }
      self.$ajax('post', this.HOST + '/tr/trCA/web/getClassByZy', dataNew,
        (res) => {
          if (res.success) {
            self.flagBJ = false
            self.optionsBj = res.obj
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },

  // 获取课程
    getKcFn () {
      let self = this
      let dataNew = {
        zydm: self.valueZy,
        searchName: ''
      }
      self.$ajax('post', this.HOST + '/tr/trCA/web/getKcByZy', dataNew,
        (res) => {
          if (res.success) {
            self.flagKc = false
            self.optionsKc = res.obj
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },
    // 打开弹窗
    addNewChart () {
      this.dialogVisible = true
        this.zbItems = []
      this.zbItems2 = []
      this.cheseked_Group = []
      this.cheseked_zb = []
      this.cheseked_zb2 = []
      this.isFirst = 1
      this.isZdyList = true
      this.activeNameTab = 'first'
      this.getYxFn()
      this.getTreeHtml()
      this.currentPage = 1
      this.currentPage2 = 1
      this.getZbList()// 指标库选取指标
      this.getZbList2()// 自定义指标的数据
      this.valueYx = ''
      this.valueZy = ''
      this.valueBj = ''
      this.valueKc=""
      this.flagZY = true
      this.flagBJ = true
      this.flagKc=true
      this.isShowDw = true
      this.zdyBtn = true
    },

    // 第二步树形结构的数据
    getTreeHtml () {
      let self = this
      // 获取指标树形控件
      self.$ajax(
        'post',
        self.HOST + '/tr/trIndex/web/getMyIndexTypeList1',
        { deptId: self.job.split(',')[0] },
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
            self.getZbList()
          } else {
            self.$message({
              type: 'error',
              message: res.msg
            })
          }
        }
      )
    },
    // 获取第一个树形的指标
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
        self.HOST + '/tr/trIndex/web/getMyIndexList2',
        obj,
        (res) => {
          if (res.success) {
            self.zbItems = []
            if (res.data == null) {
              self.totalSize = 0
              return
            } else{
              self.totalSize = res.data.totalSize
            }
            let arr = []
            for (let item of res.obj) {
              if (arr.length < 1) {
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
    // 自定义指标的数据库
    // 获取自定义指标列表
    getZbList2 () {
      // 获取指标
      this.$ajax('post', this.HOST + '/tr/trIndex/web/getCustomIndexList2', {
        searchName: this.input2,
        pageNum: this.currentPage2,
        pageSize: this.pageSize2
      }, (res) => {
        if (res.success) {
          this.zbItems2 = []
          if (res.data == null) {
            this.totalSize2 = 0
            return
          } else{
            this.totalSize2 = res.data.totalSize
          }

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
    // 下一步
    nextStep () {
      if (this.isFirst < 2) {
        this.isFirst++
      } else {
        this.isFirst = 1
      }
    },
    firstStep () {
      if (this.isFirst > 1) {
        this.isFirst--
      } else {
        this.isFirst = 2
      }
    },

    handleCurrentChange (val) {
      this.currentPage = val
      this.getZbList()
    },
    // 自定义指标的搜索
    searchZb2 () {
      this.currentPage2 = 1
      this.getZbList2()
    },

    handleCurrentChange2 (val) {
      this.currentPage2 = val
      this.getZbList2()
    },
    // 第二步骤的指标树形结构
    nodeClick (data) {
      data.isActive = true
      let self = this
      self.zb_before_id = data.id
      self.currentPage = 1
      let obj = {
        deptId: self.job.split(',')[0],
        typeId: data.id,
        indexName: self.indexName,
        pageNum: self.currentPage,
        pageSize: self.pageSize
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/trIndex/web/getMyIndexList2',
        obj,
        (res) => {
          if (res.success) {
            self.zbItems = []
            if (res.data == null) {
              self.totalSize = 0
              return
            }else {
              self.totalSize = res.data.totalSize
            }
            let arr = []
            for (let item of res.obj) {
              if (arr.length < 1) {
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
    // 第二步指标选取指标库和自定义的切换
    handleClick () {
      this.isZdyList = true
      //  this.cheseked_zb=[]
      //   this.cheseked_zb2=[]
      this.currentPage = 1
      this.currentPage2 = 1
      this.input2 = ''
    },
    handleCheckedCitiesChange (value) {
      this.cheseked_zb = value
      //  if(this.cheseked_Group.indexOf(value)==-1){
      //    this.cheseked_Group.push(value)
      //  }
      //  console.log(this.cheseked_Group)
    },
    handleCheckedCitiesChange2 (value) {
      this.cheseked_zb2 = value
    },
    removalFn (v, id) {
    //  console.log('v',v, 'id', id)

    },
    removalFn1 (v, id) {
      // console.log('v',v, 'id', id)
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

    // 弹窗 -确定按钮
    addSure () {
      if (this.activeNameTab === 'first') {
            //  判断是否选择俩个指标
              // if (this.cheseked_zb.length<=0) {
              //     this.$message({
              //       type: 'warning',
              //       message: '请选择俩个指标'
              //     })
              //     return
              // }
              if (this.cheseked_zb.length>2) {
                  this.$message({
                    type: 'warning',
                    message: '只能选择俩个指标'
                  })
                  return
              }
          }else {
            if (this.isZdyList) {
              // if (this.cheseked_zb2.length<=0) {
              //       this.$message({
              //         type: 'warning',
              //         message: '请选择俩个指标'
              //       })
              //       return
              //   }
                if (this.cheseked_zb2.length>2) {
                    this.$message({
                      type: 'warning',
                      message: '请选择俩个指标'
                    })
                    return
                }
            }
          }


     this.cheseked_Group=[...this.cheseked_zb,...this.cheseked_zb2]
      // console.log('this.cheseked_Group',this.cheseked_Group)
      // 根据类型来请求数据
      if (this.cheseked_Group.length==2) {
        //  传过去指标相关信息 
        // 请求数据
        let self=this
        let data1 = {
            indexType:self.user, 
            indexId1:self.cheseked_Group[0],
            indexId2:self.cheseked_Group[1],
            yxdm:self.valueYx,
            zydm:self.valueZy,
            bjdm:self.valueBj,
            kcdm:self.valueKc
        };
       self.$ajaxMore(
          'post',
          self.HOST + '/tr/trCA/web/setHistoryParam',
          data1,
          (res) => {
            if (res.success) {
              self.dialogVisible=false
               self.chartDates=[]
               self.historyFn()
            } else {
              self.$message({
                message: res.msg,
                type: 'error'
              })
            }
          }
        )
     
      }else{
         this.$message({
            type: 'warning',
            message: '请选择俩个指标'
          })
          
      }
    },
    xgx_picfn () {
      this.colorIndex = 0
      for (let i = 0; i < this.chartDates.length; i++) {
        this.colorIndex++
        this.showEveryChart(this.chartDates[i], document.getElementsByClassName('xgx_pic')[i])
      }
    },
    // 生成图表
    showEveryChart (data, ele) {
      let myChart = this.$echarts.init(ele)
      var option = {
        xAxis: [
          {
            type: 'value',
            scale: true
          }
        ],
        yAxis: [
          {
            type: 'value',
            scale: true
          }
        ],
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataZoom: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        animation: false,
        series: [
          {
            name: 'scatter1',
            type: 'scatter',
            symbolSize: 10,
            data: data,
            itemStyle: {
              normal: {
                color: this.colorArr[this.colorIndex]
              }
            }
          }
        ]
      }
         myChart.setOption(option)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    },
    addNewZb () {
      this.isZdyList = false
      this.zdyBtn = false
      this.initialize()
    },
    initialize () {
      this.addForm.name = ''
      this.addForm.explain = ''
      this.addForm.type = 3
      this.addForm.source = 1
      this.addForm.indexReformSql = ''
    },
    // 取消新增
    xzCancel () {
      this.isZdyList = true
      this.zdyBtn = true
      this.initialize()
    },
    // 新增自定义指标的确定按钮
    addSureZdy () {
      // 自定义指标
      let data = {
        // deptId: this.job.split(',')[0],
        indexName: this.addForm.name,
        indexDesc: this.addForm.explain,
        indexType: 2, // 1 数值类型  2图表类型
        indexClass: 1, // 指标类型：1：定量；2：定性，必须传
        indexResultType: this.addForm.type,
        unit: this.addForm.unit,
        indexSource: this.addForm.source,
        indexSql: this.addForm.indexReformSql,
        // dateColumn: this.addForm.timeSql,
        isCore: 0
      }
      this.$ajaxMore('post', this.HOST + '/tr/trIndex/web/addMyIndex', data, (res) => {
        if (res.success) {
          // 执行成功的操作
          this.$message({
            type: 'success',
            message: res.msg
          })
          this.getZbList2()
          this.zdyBtn = true
          this.isZdyList = true
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    typeChange (val) {
      if (val === 1) {
        this.isShowDw = false
        this.addForm.unit = ''
      } else {
        this.isShowDw = true
      }
    },
    // 删除这一组分析
    deleteItem (id) {
      let data = {
        id: id
      }
      this.$ajax('post', this.HOST + '/tr/trCA/web/delHistoryParam', data, (res) => {
        if (res.success) {
          this.$message({
            message: res.msg,
            type: 'success'
          })
          this.chartDates = []
          this.historyFn()
        } else {
          this.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    }
  }
}
</script>
<style>
.clearfix {
	*zoom: 1;
}
.clearfix:after {
	display: block;
	clear: both;
	content: " ";
	height: 0;
	visibility: hidden;
}

   .xgx_content{
     margin-top: 20px;
     margin-bottom: 20px;
     padding: 20px;
     background-color: #fff
   }
  .warrpContent{
     padding: 0 1.64%;
   }
   .xgx_blue{
     padding-left: 5px;
     font-size: 22px;
     color: #70ad47!important;
     font-weight: bold;
   }
   .xgx_title{
     position: relative;
     font-size: 16px;
    color: #37474f;
    line-height: 24px;
    margin-bottom: 16px;
   }
  .xgx_title .close_i {
      position: absolute;
      top: 3px;
      right: 3px;
      cursor: pointer;
      color: #f00;
    }
   .xgx_table{
     height: 445px;
   }
   .xgx_table table{
     width: 97%;
     margin: 0 auto;
     text-align: center;
     border: 1px solid #ebeef5;
     border-collapse: collapse;
   }
   .xgx_table table th{
    color: #fff;
    background-color: #70ad47;
    line-height: 34px!important;
   }
   .xgx_table table th,.xgx_table table td{
     line-height: 44px;
     padding:0 5px;
     border: 1px solid #ebeef5;
     border-collapse: collapse;
   }
  /* 表格容器样式，用flex布局可保证table内容能铺满剩余空间 */
  .sti-tbl-container {
      height : 100%;
      overflow : hidden;
      display : flex;
      flex-direction: column;
  }
  /* 设置表格的布局方式，用于宽度对齐 */
  .sti-tbl-body>table, .sti-tbl-header>table {
      table-layout: fixed;
  }
  /* 设置表格内容容器，用于铺满整个剩余空间 */
  .sti-tbl-container .sti-tbl-body {
      flex-grow : 1;
      overflow-y : auto;
  }
   .xgxBox{
         overflow: hidden;
   }
   .xgx_picBox{
     /* background-color: #fff; */
    position: relative;
   }
   .xgx_picBox .xgx_pic{
      height: 480px;
    }
     .xgx_picBox .xgx_fx{
        position: absolute;
        left: 30px;
        right: 0;
        font-size: 16px
     }
    /* .xgx_add{
     padding-top: 20px
    } */
   .xgx_add .content_itemN {
    text-align: center;
    cursor: pointer;
    height: 390px;
    background: #fff;
  }
  .xgx_add .content_itemN i {
    font-size: 78px;
    color: #70ad47;
    margin-top: 140px;
  }
  .xgx_add .content_itemN div {
    color: #70ad47;
    font-size: 18px;
  }
  .xgxBox .step_box {
  width: 100%;
  font-size: 0;
  height: 50px;
}
.xgxBox .step_item {
  width: 50%;
  display: inline-block;
  font-size: 0;
  height: 50px;
  background: #f3f7f9;
  line-height: 50px;
}
.xgxBox .step_item_left {
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
.xgxBox .step_item_right {
  width: 110px;
  display: inline-block;
  vertical-align: top;
}
.xgxBox .step_item.active {
  background: #70ad47;
  color: #fff;
}
.xgxBox .step_item.active .step_item_left {
  background: #fff;
  color: #70ad47;
}
.xgxBox .is-expanded > .el-tree-node__content .expanded + span i.iconfont {
  color: #feb078 !important;
}
.xgxBox .is-current > .el-tree-node__content > .custom-tree-node .iconfont {
  color: #feb078 !important;
}
.xgxBox .el-upload-list__item.is-success .el-icon-close-tip {
  display: none !important;
}
.xgxBox .newZwzdStyle {
  font-size: 0;
}
.xgxBox .tree_left {
  width: 200px;
  display: inline-block;
  height: 500px;
  vertical-align: top;
}
.xgxBox .table_right {
  margin-left: 10px;
  display: inline-block;
  width: 530px;
  vertical-align: top;
    padding-left: 20px;
    padding-top: 20px;
}

.xgxBox .chart_type_img {
  width: 32px;
  height: 27px;
  transform: translateY(5px)
}
.xgx_table caption{
   font-size: 18px;
    margin-bottom: 15px;
}
.xgxBox .nodataPicAN {
  background-color: #fff;
  height: 300px;
  text-align: center;
}
.xgxBox .nodataPicAN img {
  display: inline-block;
  margin: auto;
  margin-top: 20px
}
.formItem50{
  width: 362px;
  float: left;
}
.formItem50R{
  float: right;
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
