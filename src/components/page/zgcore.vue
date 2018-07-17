<template>
  <div class="mainContent mainContentAA zggyzbk_cjs">
    <!--<div class="ContentTitle">诊改核心指标</div>-->
    <div style="background: #f1f4f5;padding: 0;">
      <div>
          <el-card class="box-card marginBto20">
              <el-row :gutter="20" >
               <el-col :span="11">
                      <el-radio-group v-model="radio3"  size="small" @change="radioTab">
                        <el-radio-button label="指标库"></el-radio-button>
                        <el-radio-button label="自定义指标"></el-radio-button>
                      </el-radio-group>
              </el-col>
              <el-col :span="2" style="float:right" v-show="radioTabFlag" >
                  <el-button type="info" class="reverseBtn" size="small"  @click="searchInfo">搜索</el-button>
              </el-col>
              <el-col :span="8" style="float:right" v-show="radioTabFlag" >
                <el-input class="zgInput" size="small"  placeholder="输入关键字进行过滤" clearable  v-model="filterText"></el-input>
              </el-col>
              <el-col :span="3" class="textALignR" v-show="!radioTabFlag" style="float:right">
                <el-button type="warning" class="reverseBtn" size="small" :disabled="currentTypeIdFlag"  @click="addZb"><i class="iconfont">&#xe623;</i>添加指标</el-button>
              </el-col>
               <el-col :span="2" style="float:right" v-show="!radioTabFlag" >
                  <el-button type="info" class="reverseBtn" size="small"  @click="searchInfo1">搜索</el-button>
              </el-col>
              <el-col :span="8" style="float:right" v-show="!radioTabFlag" >
                <el-input class="zgInput" size="small"  placeholder="输入关键字进行过滤" clearable  v-model="filterText1"></el-input>
              </el-col>
            </el-row>
          </el-card>
      </div>
      <!-- 指标库 -->
      <div v-if="radioTabFlag">
          <el-row :gutter="20">
           <el-col :span="6">
              <el-card class="box-card" style="min-height: 900px">
                  <div slot="header" class="clearfix">
                    <span class="zbTile">指标分类</span>
                  </div>
                  <el-tree :props="props1" :data="treeData" @node-click = "nodeClick" @node-expand="nodeExpand"
                  node-key="id"
                  accordion
                  :default-expanded-keys="[openFlag]"
                  :default-checked-keys="[chKey]"
                  >
                    <span class="custom-tree-node" slot-scope="{ node, data }">
                    <span>
                      <i class="iconfont" style="color: #feb078" v-if="isChile(node)" >&#xe605;</i>
                      <i class="iconfont"  style="color: #cccccc"  v-else >&#xe639;</i>
                      {{ node.label }}
                      </span>
                  </span>
                  </el-tree>
                </el-card>
           </el-col>
           <el-col :span="18" >
              <div v-show="!items.length" class="nodataPic_zg">
                    <img src="../../assets/empty.jpg"/>
              </div>
              <div v-show="items.length" class="tableBox">
                 <el-card class="box-card" style="min-height: 900px">
                    <template>
                      <el-table :data="items" style="width: 100%;">
                        <el-table-column  label="指标名称" >
                           <template slot-scope="scope">
                             <template v-if="scope.row.indexSql==null||scope.row.indexSql==''">
                              <span  v-if="scope.row.flag==1" style="cursor: pointer;" class="zz_blue"> {{scope.row.indexName?scope.row.indexName:'--'}}</span>
                              <span v-else style="cursor: pointer;"> {{scope.row.indexName?scope.row.indexName:'--'}}</span>            
                             </template>
                             <template v-else>
                                <el-tooltip  v-if="scope.row.flag==1" :content="scope.row.indexSql" placement="bottom-start"  :open-delay="300"> 
                                  <span class="zz_blue" style="cursor: pointer;"> {{scope.row.indexName?scope.row.indexName:'--'}}</span>
                                </el-tooltip>
                                <el-tooltip  v-else :content="scope.row.indexSql"  placement="bottom-start" :open-delay="300"> 
                                  <span style="cursor: pointer;"> {{scope.row.indexName?scope.row.indexName:'--'}}</span>
                                </el-tooltip>
                             </template>
                          </template>                          
                        </el-table-column>    
                        <el-table-column label="指标描述" >
                          <template slot-scope="scope">
                            {{scope.row.indexDesc?scope.row.indexDesc:'--'}}
                          </template>
                        </el-table-column>
                      </el-table>
                    </template>

                    <el-pagination background  layout="prev, pager, next"  :total="total" v-show="total" style="margin-top: 10px"   @current-change = "getCurrentPage" :current-page="currentP" :page-size="pageSize"> </el-pagination>
                </el-card>
              </div>
           </el-col>
        </el-row>
      </div>
      <!-- 自定义指标 -->
      <div v-else>
        <!-- 第一次编辑 -->
           <el-dialog title="添加指标" :visible.sync="dialogFormVisible" class="zBDialog" id="zBDialog">
                  <el-form ref="form" :model="addForm" label-width="100px" >
                    <div class="group">
                        <!-- <el-tabs v-model="activeNameTab">
                          <el-tab-pane label="" name="first"> -->
                           <div style="padding-top:15px">
                              <div style=“padding-rop:15px”>
                                <el-form-item label="指标名称">
                                   <i class="mustIcon">*</i>
                                <el-input v-model="addForm.name"></el-input>
                              </el-form-item>
                              <el-form-item label="说明">
                                <el-input type="textarea" v-model="addForm.explain"></el-input>
                              </el-form-item>
                              <el-form-item label="度量单位" class="unitBox">
                                 <i class="mustIcon">*</i>
                                <el-radio-group v-model="addForm.type">
                                  <el-radio :label="1" value="1">百分比</el-radio>
                                  <el-radio :label="2" value="2">小数</el-radio>
                                  <el-radio :label="3" value="3">整数</el-radio>
                                </el-radio-group>
                                <div class="selectUnit" v-if="addForm.type!=1">
                                   <i class="mustIcon">*</i>
                                     <el-select v-model="addForm.unit" placeholder="请选择度量单位">
                                        <el-option  v-for="item in unitOptions" :key="item.value"  :label="item.label" :value="item.value"></el-option>
                                </el-select>
                                </div>

                              </el-form-item>
                              <el-form-item label="指标来源" v-if="false">
                                <i class="mustIcon">*</i>
                                <el-radio-group v-model="addForm.source">
                                  <el-radio :label="1">学校自建</el-radio>
                                  <!-- <el-radio :label="2">教育部</el-radio> -->
                                </el-radio-group>
                              </el-form-item>
                               <el-form-item label="指标标准值">
                                  <i class="mustIcon mustIconA">*</i>
                                <el-select v-model="addForm.standard" placeholder="请选择指标标准值">
                                       <el-option  v-for="item in standardOptions" :key="item.value"  :label="item.label" :value="item.value"></el-option>
                                </el-select>
                                <el-input v-model="addForm.defaultInput" placeholder="请输入数值" class="defaultInput"></el-input>
                              </el-form-item>
                               <el-form-item label="标准描述">
                                      <el-input type="textarea" placeholder="请输入标准值描述" v-model="addForm.explainBZ"></el-input>
                                 </el-form-item>
                              <el-form-item label="SQL">
                                <i class="mustIcon mustIconB">*</i>
                                    <el-input v-model="addForm.formula" placeholder="示例:select count(1) as value from TAB_0000000280 where 1=1"></el-input>
                                     <i class="el-icon-info infoIcon" title="示例:select count(1) as value from TAB_0000000280 where 1=1"></i>
                                </el-form-item>
                                 <!-- <el-form-item label="日期字段">
                                   <i class="mustIcon">*</i>
                                    <el-input v-model="addForm.word"></el-input>
                                     <i class="el-icon-info infoIcon" title="示例:"></i>
                                </el-form-item> -->
                                <el-form-item>
                                  <el-button type="primary"  @click="onAddZBS">保存</el-button>
                              </el-form-item>
                              </div>
                           </div>
                          <!-- </el-tab-pane>
                        </el-tabs> -->
                    </div>
                    </el-form>
          </el-dialog>

        <!-- 修改 -->
           <el-dialog title="编辑指标" :visible.sync="dialogFormVisibleEdit" class="zBDialog" id="zBDialog">
                  <el-form ref="form" :model="addForm" label-width="100px" >
                    <div class="group">
                        <!-- <el-tabs v-model="activeNameTab" >
                          <el-tab-pane label="" name="first"> -->
                          <div style="padding-top:15px">
                              <div style=“padding-rop:15px”>
                                <el-form-item label="指标名称">
                                   <i class="mustIcon">*</i>
                                <el-input v-model="addForm.name"></el-input>
                              </el-form-item>
                              <el-form-item label="说明">
                                <el-input type="textarea" v-model="addForm.explain"></el-input>
                              </el-form-item>
                              <el-form-item label="度量单位" class="unitBox">
                                 <i class="mustIcon">*</i>
                                <el-radio-group v-model="addForm.type">
                                  <el-radio :label="1" value="1">百分比</el-radio>
                                  <el-radio :label="2" value="2">小数</el-radio>
                                  <el-radio :label="3" value="3">整数</el-radio>
                                </el-radio-group>
                                <div class="selectUnit" v-if="addForm.type!=1">
                                   <i class="mustIcon">*</i>
                                     <el-select v-model="addForm.unit" placeholder="请选择度量单位">
                                        <el-option  v-for="item in unitOptions" :key="item.value"  :label="item.label" :value="item.value"></el-option>
                                    </el-select>
                                </div>
                              </el-form-item>
                              <el-form-item label="指标来源" v-if="false">
                                <i class="mustIcon">*</i>
                                <el-radio-group v-model="addForm.source">
                                  <el-radio :label="1">学校自建</el-radio>
                                </el-radio-group>
                              </el-form-item>
                               <el-form-item label="指标标准值">
                                  <i class="mustIcon mustIconA">*</i>
                                <el-select v-model="addForm.standard" placeholder="请选择指标标准值">
                                       <el-option  v-for="item in standardOptions" :key="item.value"  :label="item.label" :value="item.value"></el-option>
                                </el-select>
                                <el-input v-model="addForm.defaultInput" placeholder="请输入数值" class="defaultInput"></el-input>
                              </el-form-item>
                               <el-form-item label="标准描述">
                                      <el-input type="textarea" placeholder="请输入标准值描述" v-model="addForm.explainBZ"></el-input>
                                 </el-form-item>
                              <el-form-item label="SQL">
                                <i class="mustIcon mustIconB">*</i>
                                    <el-input v-model="addForm.formula" placeholder="示例:select count(1) as value from TAB_0000000280 where 1=1"></el-input>
                                     <i class="el-icon-info infoIcon" title="示例:select count(1) as value from TAB_0000000280 where 1=1"></i>
                                </el-form-item>
                                <el-form-item>
                                  <el-button type="primary"  @click="editSure">保存</el-button>
                              </el-form-item>
                              </div>
                          </div>
                          <!-- </el-tab-pane>
                        </el-tabs> -->
                    </div>
                    </el-form>
          </el-dialog>

           <div v-if="AddItemsFlag" class="nodataPic_zg">
               <img src="../../assets/empty.jpg"/>
           </div>
          <div v-else class="w_tableBoxA">
              <el-card class="box-card">
                <template>
                  <el-table :data="AddItems" style="width: 100%;">
                     <el-table-column label="序号"  width="100" align="center" >
                        <template slot-scope="scope">
                          {{pageSize * (currentPage - 1) + 1 + scope.$index}}
                        </template>
                    </el-table-column>
                    <el-table-column  prop="indexName" label="指标名称"></el-table-column>
                     <el-table-column label="指标说明">
                        <template slot-scope="scope">
                        {{scope.row.indexDesc?scope.row.indexDesc:'--'}}
                      </template>
                     </el-table-column>
                     <el-table-column label="实际值" align="center" >
                      <template slot-scope="scope">
                        {{scope.row.trueValue?scope.row.trueValue:'--'}}
                      </template>
                    </el-table-column>
                    <el-table-column label="标准值" align="center" >
                      <template slot-scope="scope">
                        {{scope.row.standValue?scope.row.standValue:'--'}}
                      </template>
                    </el-table-column>
                     <el-table-column label="操作" align="center" width="130">
                      <template slot-scope="scope">
                         <span class="hover_bj" title="编辑"  @click="editFunc(scope.row.id)">
                          <i class="el-icon-edit" style="font-size: 17px;"></i>
                        </span>
                        <span class="hover_sc" title="删除"  @click="deleteFunc(scope.row.id)">
                          <i class="el-icon-delete" style="font-size: 17px;"></i>
                        </span>
                      </template>
                    </el-table-column>
                  </el-table>
                </template>

                <el-pagination background  layout="prev, pager, next"  :total="totalA" v-show="totalA" style="margin-top: 10px"   @current-change = "getCurrentPageA" :current-page="currentPage" :page-size="pageSizeA"> </el-pagination>
            </el-card>
          </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      radio3: '指标库',
      radioTabFlag: true,
      id: 0,
      AddItems: [],
      openFlag: 0,
      chKey: 0,
      tabFlag: true,
      activeNameTab: 'first',
      treeNodeId: 1,
      labelName: '',
      nodeTypeName: '',
      selectNewTemp: [],
      newSelectCity: [],
      cities: [],
      treeData: [],
      currentTypeIdFlag: false,
      currentTypeId: 0,
      currentUserId: '',
      currentActiveNames: '',
      userTables: [],
      total: 0,
      currentPage: 1, // 当前页
      pageSize: 12,
      activeName: 1,
      currentP: 1,
      pageSizeN: 1,
      currentDep: {},
      props1: {
        children: 'children',
        label: 'label'
      },
      checkAll: false,
      checkedCities: [],
      roleList: [],
      isIndeterminate: true,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      dialogVisible: false,
      userList: [],
      multipleSelection: [],
      filterText: '',
      filterText1: '',
      items: [],
      dialogFormVisible: false,
      dialogFormVisibleEdit: false,
      addForm: {
        family: '',
        name: '',
        explain: '',
        type: 1,
        unit: '人',
        standard: '1',
        defaultInput: '',
        source: 1,
        explainBZ: '',
        formula: '',
        formula1: '',
        formula2: '',
        formula3: '',
        formula4: '',
        pic: '',
        pic1: '',
        pic2: '',
        pic3: '',
        pic4: '',
        word: '',
        flagItem: false
      },
      unitOptions: [{
        value: '人',
        label: '人'
      }, {
        value: '元',
        label: '元'
      }, {
        value: '分',
        label: '分'
      }, {
        value: '天',
        label: '天'
      }, {
        value: '个',
        label: '个'
      }],
      standardOptions: [{
        value: '1',
        label: '大于等于'
      }, {
        value: '2',
        label: '大于'
      }, {
        value: '3',
        label: '等于'
      }, {
        value: '4',
        label: '小于等于'
      }, {
        value: '5',
        label: '小于'
      }],
      AddItemsFlag: true,
      totalA: 0,
      currentPage: 1,
      pageSizeA: 12
    }
  },
  name: 'zgrepostitory',
  watch: {
    filterText (val) {},
    checkedCities (val) {
      this.newSelectCity = this.cities.filter(item => {
        for (let citem of this.checkedCities) {
          if (item.id === citem) {
            return true
          }
        }
        return false
      })
    }
  },
  mounted: function () {
    //  1.获取指标类型(element 数据类型)
    this.getCoreIndexTypeList()
  },
  methods: {
    getCoreIndexTypeList () {
      let self = this
      this.$ajax(
        'get',
        this.HOST + '/tr/trIndex/web/getIndexTypeList',
        {},
        data => {
          let flag = data.success
          if (flag === true) {
            self.treeData = data.obj
            self.openFlag = data.obj[0].id
            self.chKey = data.obj[0].children[0].id
            self.currentTypeId = data.obj[0].children[0].id
            self.getZiZhi(self.chKey, self.pageSize, self.currentP, '')
          }
        }
      )
    },
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
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
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    isCurrent: function (tableId) {
      return this.currentTableId === tableId
    },
    searchInfo: function () {
      this.currentP = 1
      this.getZiZhi(this.currentTypeId, this.pageSize, this.currentP, this.filterText)
    },
    getCurrentPage: function (currentPage) {
      this.currentP = currentPage
      this.getZiZhi(this.currentTypeId, this.pageSize, this.currentP, this.filterText)
    },

    getZiZhi: function (typeId, pageSize, pageNum, searchName) {
      let self = this
      this.$ajax(
        'post',
        this.HOST +
          '/tr/trIndex/web/getIndexList?typeId=' + typeId + '&pageSize=' + pageSize + '&pageNum=' + pageNum + '&searchName=' + searchName,
        {},
        (res) => {
          if (res.success) {
            if (res.obj) {
              if(res.data){
                 this.total = res.data.totalSize
              }
             
              this.items = res.obj
            } else {
              this.items = []
            }
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },
    /**
     * 节点被点中后回调事件
     *
     */
    nodeClick: function (data, currentNode, node) {
      if (currentNode.childNodes.length === 0) {
        this.currentTypeId = data.id
        this.openFlag = data.id
        this.nodeTypeName = data.label
        let firstName = this.labelName + '-' + this.nodeTypeName
        this.addForm.family = firstName
        this.currentP = 1
        this.filterText = ''
        this.getZiZhi(this.currentTypeId, this.pageSize, this.currentP, this.filterText)
      }
    },
    nodeExpand: function (data, node) {
      this.treeNodeId = data.id
      this.labelName = data.label
    },
    onAddZBS: function () {
      let self = this
      if (self.addForm.name.trim() === '') {
        self.$message({
          message: '请输入指标名称',
          type: 'warning'
        })
        return
      }
      if (self.addForm.defaultInput.trim() === '') {
        self.$message({
          message: '指标标准值不能为空',
          type: 'warning'
        })
        return
      }
      if (!(self.addForm.defaultInput - 0 > -Infinity)) {
        self.$message({
          message: '指标标准值必须为数值',
          type: 'warning'
        })
        return
      }
      if (self.addForm.formula.trim() === '') {
        self.$message({
          message: '请输入SQL',
          type: 'warning'
        })
        return
      }

      //  let newUnit=parseInt(self.addForm.unit)
      let newStandard = parseInt(self.addForm.standard)
      let defaultInputStandard = parseInt(self.addForm.defaultInput)
      let newData = {}
      if (self.addForm.type == 1) {
        newData = {
          indexName: self.addForm.name,
          indexDesc: self.addForm.explain,
          indexType: 1, // 1 数值类型  2图表类型
          indexClass: 1, // 指标类型：1：定量；2：定性，必须传
          indexResultType: self.addForm.type, // 结果属性 ：1 百分比  2 小数 3 整数，必须传
          // unit: self.addForm.unit,
          indexSource: self.addForm.source, // 指标来源：1：学校自建；2：教育部
          standContion: newStandard, // 标准运算符：1 大于等于 2大于 3等于 4小于等于 5小于
          standValue: defaultInputStandard, // 标准值
          standDesc: self.addForm.explainBZ, // 标准描述
          indexSql: self.addForm.formula, // 计算指标值的公式sql
          // indexLevel:self.classType,  //1院级 2校级
          isCore: 0 // 是否核心  1 核心  0 非核心
        }
      } else {
        newData = {
          indexName: self.addForm.name,
          indexDesc: self.addForm.explain,
          indexType: 1, // 1 数值类型  2图表类型
          indexClass: 1, // 指标类型：1：定量；2：定性，必须传
          indexResultType: self.addForm.type, // 结果属性 ：1 百分比  2 小数 3 整数，必须传
          unit: self.addForm.unit,
          indexSource: self.addForm.source, // 指标来源：1：学校自建；2：教育部
          standContion: newStandard, // 标准运算符：1 大于等于 2大于 3等于 4小于等于 5小于
          standValue: defaultInputStandard, // 标准值
          standDesc: self.addForm.explainBZ, // 标准描述
          indexSql: self.addForm.formula, // 计算指标值的公式sql
          // indexLevel:self.classType,  //1院级 2校级
          isCore: 0 // 是否核心  1 核心  0 非核心
        }
      }
      let data = JSON.stringify(newData)

      self.$ajaxMore('post', self.HOST + '/tr/trIndex/web/addMyIndex', data, (res) => {
        if (res.success) {
          self.dialogFormVisible = false
          self.$message({
            message: res.msg,
            type: 'success'
          })
          self.currentPage = 1
          self.filterText1 = ''
          self.AddItemsFn(self.pageSizeA, self.currentPage, self.filterText1)
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    addZb: function () {
      this.filterText1 = '',
      this.dialogFormVisible = true
      this.addForm.name = ''
      this.addForm.explain = ''
      this.addForm.type = 1
      this.addForm.unit = '人'
      this.addForm.source = 1
      this.addForm.standard = '1'
      this.addForm.defaultInput = ''
      this.addForm.explainBZ = ''
      this.addForm.formula = ''
      this.addForm.pic = ''
      this.addForm.word = ''
    },
    radioTab (v) {
      if (v == '指标库') {
        this.radioTabFlag = true
        this.filterText = ''
        this.currentP = 1
        this.getCoreIndexTypeList()
      } else {
        this.radioTabFlag = false
        this.filterText1 = ''
        this.currentPage = 1
        this.AddItemsFn(this.pageSizeA, this.currentPage, this.filterText1)
      }
    },
    searchInfo1: function () {
      this.currentPage = 1
      this.AddItemsFn(this.pageSizeA, this.currentPage, this.filterText1)
    },
    getCurrentPageA: function (currentPage) {
      this.currentPage = currentPage
      this.AddItemsFn(this.pageSizeA, this.currentPage, this.filterText1)
    },
    AddItemsFn (pageSize, currentPage, filterText) {
      let self = this
      self.AddItems = []
      this.$ajax(
        'post',
        this.HOST +
          '/tr/trIndex/web/getCustomIndexList?searchName=' + filterText + '&pageSize=' + pageSize + '&pageNum=' + currentPage,
        {},
        (res) => {
          if (res.success) {
            if(res.data){
               self.totalA = res.data.totalSize
            }
            if (res.obj == null) {
             
              self.AddItemsFlag = true
              self.AddItems = res.obj
            } else {
              // self.totalA = res.data.totalSize
              self.AddItemsFlag = false
              // self.AddItems=[];
              self.AddItems = res.obj
            }
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        })
    },
    editFunc (id) {
      let self = this
      self.id = id
      self.$ajax('post', self.HOST + '/tr/trIndex/web/getIndexById', {id: id}, (res) => {
        if (res.success) {
          let data = res.data
          self.addForm.name = data.index_name // 名称
          self.addForm.explain = data.index_desc// 描述
          self.addForm.explainBZ = data.stand_desc// 描述
          self.addForm.type = data.index_result_type// 度量单位百分比
          self.addForm.unit = data.unit// 度量单位
          self.addForm.source = 1// 指标来源
          self.addForm.standard = data.stand_contion + ''// 指标标准值选择
          self.addForm.formula = data.index_sql// SQL
          self.addForm.defaultInput = data.stand_value + '' // 指标标准值输入
          self.dialogFormVisibleEdit = true
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    // 编辑之后再次保存
    editSure (id) {
      let self = this
      if (self.addForm.defaultInput.trim() === '') {
        self.$message({
          message: '请输入数值',
          type: 'warning'
        })
        return
      }
      if (self.addForm.formula.trim() === '') {
        self.$message({
          message: '请输入SQL',
          type: 'warning'
        })
        return
      }
      //  let newUnit=parseInt(self.addForm.unit)
      let newStandard = parseInt(self.addForm.standard)
      let defaultInputStandard = parseInt(self.addForm.defaultInput)
      let newData = {
        id: self.id,
        indexName: self.addForm.name,
        indexDesc: self.addForm.explain,
        indexType: 1, // 1 数值类型  2图表类型
        indexClass: 1, // 指标类型：1：定量；2：定性，必须传
        indexResultType: self.addForm.type, // 结果属性 ：1 百分比  2 小数 3 整数，必须传
        unit: self.addForm.unit,
        indexSource: self.addForm.source, // 指标来源：1：学校自建；2：教育部
        standContion: newStandard, // 标准运算符：1 大于等于 2大于 3等于 4小于等于 5小于
        standValue: defaultInputStandard, // 标准值
        standDesc: self.addForm.explainBZ, // 标准描述
        indexSql: self.addForm.formula, // 计算指标值的公式sql
        // indexLevel:self.classType,  //1院级 2校级
        isCore: 0 // 是否核心  1 核心  0 非核心
      }
      let data = JSON.stringify(newData)
      self.$ajaxMore('post', self.HOST + '/tr/trIndex/web/editIndexById', data, (res) => {
        if (res.success) {
          self.dialogFormVisibleEdit = false
          self.$message({
            message: res.msg,
            type: 'success'
          })
          self.currentPage = 1
          self.filterText1 = ''
          self.AddItemsFn(self.pageSizeA, self.currentPage, self.filterText1)
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    // 删除指标
    deleteFunc (id) {
      let self = this
      this.$confirm(
        '您确定要删除该条指标吗？删除后,不可恢复', '删除确认',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        self.$ajax('post', self.HOST + '/tr/trIndex/web/delIndexById', {id: id}, (res) => {
          if (res.success) {
            self.$message({
              message: res.msg,
              type: 'success'
            })
            self.AddItemsFn(self.pageSizeA, self.currentPage, self.filterText1)
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        })
      }).catch(() => {

      })
    }

  }

}
</script>

<style scoped>
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
.mainContent {
  background-color: #f1f4f5;
  padding: 1.64%;
}
.mainContentAA {
  padding-top: 0;
}
.ContentTitle {
  font-size: 18px;
  color: #37474f;
  line-height: 24px;
  margin-bottom: 20px;
}
.paddingBto20 {
  padding-bottom: 20px;
}
.textALignR {
  text-align: right;
}
.marginBto20 {
  margin-bottom: 20px;
}
.shizititle {
  margin-top: 20px;
  color: #888888;
}
.shizititle > span {
  color: #cccccc;
}
.el-main {
  padding: 0;
}
.el-footer {
  padding: 0;
}
.el-tree-node__expand-icon + span::before {
  display: inline-block;
  vertical-align: bottom;
  margin-bottom: -3px;
  width: 20px;
}

.zBDialog .el-checkbox__input.is-checked .el-checkbox__inner,
.zBDialog .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #70ad47;
  border-color: #70ad47;
}
.zBDialog .el-tabs__item.is-active,
.zBDialog .el-tabs__item:hover{
 color:#70ad47
}
.zBDialog  .el-tabs__active-bar{
  background-color: #70ad47;
}
.zbContent {
  line-height: 40px;
  font-size: 14px;
  color: #526069;
}
.XBtitle {
  float: left;
  width: 80%;
}
.XBContent {
  float: left;
  width: 20%;
}
.tableBox .cell {
  text-align: left;
  padding: 0 10%;
  color: #76838f;
  font-size: 14px;
  line-height: 33px;
}
.tableBox .el-table .cell{
  line-height: 33px!important
}
.tableBox  .zBDialog .el-dialog {
  width: 620px;
  height: 734px;
}
.addTtop{
  font-size: 14px;
  line-height: 14px;
  color: #666;
  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 12px;
      margin-bottom: 20px;
}
.addTtop span{
   display: inline-block;
   border-left: 4px solid #00b8ac;
   padding-left: 8px;
}
.defaultInput{
  width: 120px;
  margin-left: 10px;
}
.zBDialog .el-input--suffix .el-input__inner{
  width: 115px;
}
.zBDialog .group{
    padding: 0 20px;
    margin-top: -30px;
}
.zBDialog .el-form-item__label{
  padding-right: 45px;
}
.zBDialog .el-tabs__content{
  padding-right: 30px
}
.zBDialog .unitBox .el-input {
margin-left: 30px;
width: 115px;
}
#zBDialog .el-form-item{
  position: relative;
}
#zBDialog .infoIcon{
 position: absolute;
 right: -26px;
 top: 16px;
 color: #ffc000;
 font-size: 20px;
 transform: translateY(-5px)
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
.marginBto10{
  margin-bottom: 10px
}
.zbTile{
  font-size: 16px;
  color: #37474f
}
.nodataPic_zg{
  width: 100%;
  height: 600px;
  background-color: #fff;
  text-align: center
}
.nodataPic_zg img{
    display: inline-block;
   margin-top: 100px;
}
.selectUnit{
 display: inline-block;
 margin-left: 20px
}
.selectUnit .el-select{
  width: 146px
}
.hover_bj,.hover_sc{
    display: inline-block;
    height: 54px;
    width: 54px;
    vertical-align: top;
    line-height: 54px;
    cursor: pointer;
    margin-left: -5px
}
.hover_bj:hover {
    background: #5b9bd5;
    color: #fff;
}
.hover_sc:hover {
    background: #e96c72;
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
.w_tableBoxA .el-table td{
padding: 5px 0
}
.zz_blue{
  color: #4e89cb
}
</style>
