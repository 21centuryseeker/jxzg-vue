<template>
  <div class="mainContent mainContentAA zgcoreyw">
      <div class="tab-control tab-controlFixed clearfix">
        <div class="tab-control-item" v-for="(item,index) in jobSwitchItems" :key="index">
          <div v-if="index==0" class="active tab"  @click="jobSwitch(item, $event)">{{item.deptName}}-{{item.roleName}}</div>
          <div v-else-if="index!=0" class="tab" @click="jobSwitch(item, $event)">{{item.deptName}}-{{item.roleName}}</div>
        </div>
      </div>
    <!--<div class="ContentTitle">诊改核心指标</div>-->
    <div style="background: #f1f4f5;padding: 0;padding-top:60px">
             <!-- <div>
                  <el-card class="box-card marginBto20">
                     <el-row :gutter="20" >
                      <el-col :span="8">
                           <el-input class="zgInput" size="small"  placeholder="输入关键字进行过滤" clearable  v-model="filterText"></el-input>
                     </el-col>
                     <el-col :span="4">
                          <el-button type="info" class="reverseBtn" size="small"  style="background-color: #ed7d31;border: #ed7d31"  @click="searchInfo">搜索</el-button>
                       </el-col>

                    <el-col :span="3" class="textALignR" style="float:right">
                    <! <el-button type="warning" class="reverseBtn" size="small" :disabled="currentTypeIdFlag"  @click="addZb"><i class="iconfont">&#xe623;</i>添加指标</el-button> -->
                  <!-- </el-col>
                   </el-row>
                </el-card>
             </div>  -->
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
                                <div class="selectUnit">
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
                                    <el-input v-model="addForm.formula" placeholder="示例:select count(1) as value from TAB_0000000280 where 1=1"></el-input>
                                     <i class="el-icon-info infoIcon" title="示例:select count(1) as value from TAB_0000000280 where 1=1"></i>
                                </el-form-item>
                                <el-form-item>
                                  <el-button type="primary"  @click="onAddZBS">保存</el-button>
                              </el-form-item>
                              </div>
                           </div>
                          <!-- </el-tab-pane>
                            <el-tab-pane label=""></el-tab-pane> -->
                        <!-- </el-tabs> --> -->
                    </div>
                    </el-form>
               </el-dialog>
             
              <div v-if="itemsFlag" class="nodataPic_zg">
                    <img src="../../assets/empty.jpg"/>
              </div>

              <div v-else class="tableYiLan">
                 <el-card class="box-card">
                    <template>
                      <div style="width: 95%;padding-left:2.5%">

                        <el-table :data="items" style="width: 100%;" height="720">
                          <el-table-column  prop="indexName" label="指标名称" width="250"></el-table-column>
                          <el-table-column label="当前值" align="center">
                            <template slot-scope="scope">
                                <span :class="scope.row.isenable<scope.row.standDesc?'redBhe':''" style="font-size:12px">{{scope.row.isenable}}</span>
                            </template>
                          </el-table-column>
                        <el-table-column label="诊改目标值" align="center" prop="unit"></el-table-column>
                        <el-table-column label="全校中位"  align="center" prop="indexDesc"> </el-table-column>
                        <el-table-column label="省中位"  align="center" prop="trueValue"></el-table-column>
                        <el-table-column label="全国中位"  align="center" prop="indexSql"></el-table-column>
                        <el-table-column label="省师范中位"  align="center" prop="id"> </el-table-column>
                        <el-table-column label="合格指标"  align="center" prop="standDesc"></el-table-column>
                        </el-table>

                      </div>
                    </template>
                </el-card>
              </div>
      </div>
  </div>
</template>

<script>
import myobj from './zgcoreyw.js'
export default {
  data: function () {
    return {
      dataList: [],
      itemsFlag: true,
      jobSwitchItems: [],
      deptId: 0, // 部门ID
      classType: 0, // 院系
      filterText: '',
      items: [],
      total: 0,
      currentPage: 1, // 当前页
      pageSize: 12,
      currentTypeIdFlag: false,
      dialogFormVisible: false,
      addForm: {
        family: '',
        name: '',
        explain: '',
        type: 1,
        unit: '1',
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
        value: '1',
        label: '人'
      }, {
        value: '2',
        label: '元'
      }, {
        value: '3',
        label: '分'
      }, {
        value: '4',
        label: '天'
      }, {
        value: '5',
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
      radio3: '指标库',
      AddItems: [],
      activeNameTab: 'first'
    }
  },
  mounted: function () {
    this.jobFn()
    this.ajaxData(self.classType)
  },
  methods: {
    // 判断角色
    jobFn () {
      let self = this
      self.$ajax('post', self.HOST + '/tr/trCockpit/web/getClassType', {}, (res) => {
        if (res.success) {
          if (res.obj != null) {
            self.itemsFlag = false
            self.jobSwitchItems = []
            self.jobSwitchItems = res.obj
            self.deptId = res.obj[0].deptId
            self.classType = res.obj[0].classType
            self.ajaxData(self.classType - 0)

            // 切换动态
            // self.ajaxDataD()
          } else {
            self.itemsFlag = true
          }
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    // 切换角色
    jobSwitch (item, event) {
      let e = event || window.event
      let aaaList = document.getElementsByClassName('tab')
      for (let i = 0; i < aaaList.length; i++) {
        aaaList[i].className = 'tab'
      }
      e.currentTarget.className = 'tab active'
      this.deptId = item.deptId
      this.classType = item.classType
      this.filterText = ''
      this.ajaxData(this.classType - 0)

      // 切换动态
      // this.ajaxDataD()
    },
    // 手速查询
    searchInfo: function () {
      this.ajaxData(this.classType - 0)

      // 切换动态
      // this.ajaxDataD()
    },


    ajaxDataD: function () {
      let self = this
      let Newdata = {
        classType: this.classType,
        deptId: this.deptId,
        searchName: this.filterText
      }
      self.$ajax('post', self.HOST + '/tr/trIndex/web/getCoreIndexListByLevel', Newdata, (res) => {
        if (res.success) {
          if (res.obj == null) {
            self.itemsFlag = true
            self.items = res.obj
          } else {
            self.itemsFlag = false
            self.items = []
          }
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      }) 
    },



    getRandom (n) {
      return Math.floor(Math.random() * n)
    },
    getRandom1 (m, n) {
      return Math.floor(Math.random() * (n - m + 1) + m)
    },
    ajaxData: function (id) {
      if (id == 2) {
        this.items = []
        this.items = myobj.obj
      } else {
        this.items = []
        this.items = myobj.obj2
      }

      // let self = this
      // let Newdata = {
      //   classType: this.classType,
      //   deptId: this.deptId,
      //   searchName: this.filterText
      // }
      // self.$ajax('post', self.HOST + '/tr/trIndex/web/getCoreIndexListByLevel', Newdata, (res) => {
      //   if (res.success) {
      //     if (res.obj == null) {
      //       self.itemsFlag = true
      //       self.items = res.obj
      //     } else {
      //       self.itemsFlag = false
      //       self.items = []
      // }
    
      //  let  itemL= myobj.obj
      // //  let itemsL = res.obj;
      //  for (let item of newDataList) {
      //    itemL.push(item)
      //  }

      //  itemsL.unshift(newDataList)
      // self.items =myobj.obj
      //     }
      //   } else {
      //     self.$message({
      //       message: res.msg,
      //       type: 'error'
      //     })
      //   }
      // })
    },

    // 保存
    onAddZBS: function () {
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
        indexLevel: self.classType, // 1院级 2校级
        isCore: 1 // 是否核心  1 核心  0 非核心
      }
      // self.onAddZB(newData);
    },
    onAddZB: function (newData) {
      let self = this

      if (self.addForm.name.trim() === '') {
        self.$message({
          message: '请输入指标名称',
          type: 'warning'
        })
        return
      }

      self.$ajaxMore('post', self.HOST + '/tr/trIndex/admin/addMyIndex', newData, (res) => {
        if (res.success) {
          self.dialogFormVisible = false
          self.$message({
            message: res.msg,
            type: 'success'
          })
          // self.ajaxData(self.classType - 0)
        } else {
          self.$message({
            message: res.msg,
            type: 'error'
          })
        }
      })
    },
    addZb: function () {
      this.dialogFormVisible = true
      this.addForm.name = ''
      this.addForm.explain = ''
      this.addForm.type = 1
      this.addForm.unit = '1'
      this.addForm.source = 1
      this.addForm.standard = '1'
      this.addForm.defaultInput = ''
      this.addForm.explainBZ = ''
      this.addForm.formula = ''
      this.addForm.pic = ''
      this.addForm.word = ''
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
.zbContent {
  line-height: 40px;
  font-size: 14px;
  color: #526069;
}
.tab-control{
    width:100%;
    font-size: 14px;
    color: #76838f;
    background-color: #fff;
    border-bottom: 1px solid #e4eaec;
    margin-bottom: 26px;
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
        top: 0px;
    z-index: 2;
    height: 38px;
    background-color: #f1f4f5;
    border-right: 1px solid #e4eaec;
    border-bottom: 1px solid #f1f4f5;
        margin-bottom: -1px;
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
  line-height: 33px!important;
  padding: 0 30px!important;
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
.redBhe{
  color: #e96c72;

}
  .tableYiLan  .el-table th{
    background-color: #70ab47
  }
  .tableYiLan  .el-table th .cell{
    color: #fff;
    font-size: 13px
  }
  .tableYiLan  .el-table .cell{
    font-size: 12px
  }
  /* .tableBox .tableWidth .has-gutter tr th:first-child, */
  .tableYiLan .el-table__row>td:first-child {
    background: #f3f7fb !important;
  }
</style>
