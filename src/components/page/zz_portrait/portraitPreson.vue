<template>
    <div class="mainContent1 mainContentA mainContentC">
      <div class="filterBox marginBto24">
            <el-card class="box-card">
              <div class="w_seachGroup">
               <ul class=" clearfix">
                  <li>
                    <div class="title_seach">专业部</div>
                    <div class="title_select">
                      <el-select v-model="valueYx" placeholder="请选择专业部"  size="small"  style="width: 300px" filterable @change="selectYXFn">
                      <el-option
                        v-for="item in optionsYx"
                        :key="item.id"
                        :label="item.deptName"
                        :value="item.id">
                      </el-option>
                      </el-select>
                    </div>
                  </li>
                  <li>
                    <div class="title_seach">专业</div>
                    <div class="title_select">
                      <el-select v-model="valueZy" style="width: 300px" size="small"  placeholder="请选择专业" @change="selectZyFn"  filterable :disabled="flagZY" >
                        <el-option
                          v-for="item in optionsZy"
                          :key="item.dm"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                    </div>
                  </li>
                 <li>
                    <div class="title_seach">班级</div>
                    <div class="title_select">
                      <el-select v-model="valueBj" style="width: 300px" size="small"  placeholder="请选择班级"  filterable :disabled="flagBj" @change="selectBjFn">
                        <el-option
                          v-for="item in optionsBj"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id">
                        </el-option>
                      </el-select>
                    </div>
                  </li>
                   <li>
                    <div class="title_seach">学生</div>
                    <div class="title_select">
                      <el-select v-model="valueXs" style="width: 300px" size="small"  placeholder="请选择学生"  filterable :disabled="flagXs">
                        <el-option
                          v-for="item in optionsXs"
                          :key="item.xh"
                          :label="item.name"
                          :value="item.xh">
                        </el-option>
                      </el-select>
                    </div>
                  </li>
                  <li style="width:170px; text-align: right;">
                    <el-button type="info" size="small" style="height: 32px;margin-left: 5px;background: #70ad47;border-color: #70ad47;transform: translateY(1px)" @click="searchInfo">查询</el-button>  
                  </li>
                </ul>
                <!-- <el-button type="info" size="small" style="height: 32px;margin-left: 5px;background: #70ad47;border-color: #70ad47;transform: translateY(1px)" @click="searchInfo">查询</el-button>   -->
              </div>  
            </el-card>
         </div>
      <!-- 个体画像的页面 -->
      <!-- <div v-if="checkPermissions" class="nodataPicAC">
          <img src="../../../assets/empty.jpg"/>
      </div> -->
      <div >
         <div class="infoBox marginBto24">
            <el-card class="box-card" :data="baseInfo">
                <el-row :gutter="20" >
                        <el-col :span="6">
                            <div class="infoLeft">
                                <img style=“width:40%” src="../../../assets/xueshenghuaxiang.png" />

                                <p class="name">{{baseInfo.xm?baseInfo.xm:''}}
                                  <template v-if="baseInfo.xbmc=='男'">
                                      <i class="iconfont" style="color:#4472c4">&#xe650;</i>
                                  </template>
                                  <template v-else>
                                      <i class="iconfont" style="color:#ed7d31">&#xe652;</i>
                                  </template>
                                </p>
                                <p class="num">学号  {{baseInfo.xh?baseInfo.xh:''}}  </p>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="infoList" style="padding-top:85px">
                              <ul class="clearfix">
                                  <li><span>性别：</span> {{baseInfo.xbmc?baseInfo.xbmc:'--'}}</li>                                      
                                  <li><span>年龄：</span>{{baseInfo.age?baseInfo.age:'--'}} </li>
                                  <li><span>专业：</span> {{baseInfo.zymc?baseInfo.zymc:'--'}}</li>
                                </ul>
                                <ul class="clearfix">
                                  <li><span>年级：</span> {{baseInfo.nj?baseInfo.nj:'--'}}</li>                                      
                                  <li><span>生源地：</span>{{baseInfo.syd?baseInfo.syd:'--'}} </li>
                                  <li><span>民族：</span> {{baseInfo.mzmc?baseInfo.mzmc:'--'}}</li>
                                </ul>
                                <!-- <ul class="clearfix">
                                  <li><span>奖励次数：</span> {{baseInfo.hjcount !== null?baseInfo.hjcount:'--'}}</li>                                      
                                  <li><span>口头警告：</span><a style="color:##70ad47" @click="showJg(baseInfo.xh, 1, baseInfo.yellowcount)">{{baseInfo.yellowcount !== null?baseInfo.yellowcount:'--'}}</a></li>
                                  <li><span>严重违纪：</span><a style="color:##70ad47" @click="showJg(baseInfo.xh, 0, baseInfo.hotcount)">{{baseInfo.hotcount !== null?baseInfo.hotcount:'--'}}</a></li>
                                </ul> -->
                                 <!-- <ul class="clearfix">
                                    <li><span>学制：</span>{{baseInfo.xzmc?baseInfo.xzmc:'--'}}</li>
                                    <li><span>政治面貌：</span> {{baseInfo.zzmmmc?baseInfo.zzmmmc:'--'}}</li>
                                    <li><span>学籍状态： </span>{{baseInfo.xjztmc?baseInfo.xjztmc:'--'}}</li>
                                </ul> -->
                                <!-- <ul class="clearfix">
                                    <li><span>民族：</span>{{baseInfo.mzmc?baseInfo.mzmc:'--'}} </li>
                                     <li><span>出生日期：</span>{{baseInfo.csrq?baseInfo.csrq:'--'}}</li>
                                      <li><span>籍贯：</span> {{baseInfo.jg?baseInfo.jg:'--'}} </li>
                                </ul> -->
                                <!-- <ul class="clearfix">
                                  <li><span>学习方式：</span> {{baseInfo.xxfsmc?baseInfo.xxfsmc:'--'}}</li>                                      
                                  <li><span>专业：</span>{{baseInfo.zymc?baseInfo.zymc:'--'}} </li>
                                  <li><span>班级：</span> {{baseInfo.bjmc?baseInfo.bjmc:'--'}}</li>
                                </ul> -->
                                <!-- <ul class="clearfix"> -->
                                      <!-- <li><span>学习形式：</span>{{baseInfo.xxxsdmmc}}</li> -->
                                    <!-- <li><span>专业大类： </span>{{baseInfo.zymc}}</li> -->
                                    <!-- <li><span>身份证号：</span> {{baseInfo.sfzh}}</li> -->
                                <!-- </ul> -->
                                <!-- <ul class="clearfix">
                                  <li><span>学生状态：</span>{{baseInfo.xsztmc?baseInfo.xsztmc:'--'}} </li>
                                  <li><span>就读年级：</span>{{baseInfo.rxnjmc?baseInfo.rxnjmc:'--'}}</li>      
                                </ul> -->
                            </div>
                        </el-col>
                </el-row>
                </el-card>
            </div>
 
              
            <div class="showInfo">
                <div class="titleName"> 学生情况 </div>              
                  <div class="showInfoList">
                        <el-row  :gutter="20">
                           <template v-if="countCardFlag">
                             <el-col :span="24" >
                               <el-card class="box-card">
                                <div class="nodataPic_zg" style="height:358px">
                                  <img src="../../../assets/empty.jpg" />
                                </div> 
                               
                            </el-card>
                             </el-col>
                          </template>
                          <template v-for="(item,index) in countCard" v-else>
                            <el-col :span="8" :key="index">
                                <div :class="'showInfoItem'+(index+1)">
                                  <el-card class="box-card">
                                      <p class="num">{{item.value?item.value:'0'}}</p>
                                      <p class="name">{{item.name?item.name:'0'}}(个)</p>
                                  </el-card>
                                </div>
                            </el-col>
                          </template> 
                        </el-row >
                  </div>
            </div>

            <div class="score marginBto24" id="spacialLeft">
                <el-card class="box-card">
                    <div class="textTitle">成绩信息</div>
                <div class="portraitTable"> 
                      <template v-if="scoreTabFlag">
                        <div class="nodataPic_zg" style="height:358px">
                          <img src="../../../assets/empty.jpg" />
                        </div> 
                      </template>
                      <template v-else>
                             <table class="special_table" width="100%">
                              <thead>
                                <tr>
                                <th align="left">课程代码</th>
                                <th align="left">课程</th>
                                <th align="center">成绩</th>
                                <th align="center">学分</th>
                                <th align="center">班级排名</th> 
                                <th align="center">是否重修</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(item, index) in scoreTableData" :key="index">
                                  <td>{{item.KCDM?item.KCDM:'--'}}</td>
                                  <td align="left">{{item.kcmc?item.kcmc:'--'}}</td>
                                  <td align="center">{{item.BFZKSCJ?item.BFZKSCJ:'--'}}</td>
                                  <td align="center">{{item.xf?item.xf:'--'}}</td>
                                  <td align="center">{{item.pm?item.pm:'--'}}</td>
                                  <td align="center">{{item.sfcx?item.sfcx:'--'}}</td>
                                </tr>
                              </tbody>
                            </table>

                            <!-- <el-pagination background  layout="prev, pager, next"  :total="totalScore" v-show="totalScore" style="margin-top: 10px" :current-page="currentP" :page-size="pageSize"  @current-change = "getCurrentPageScore">
                        </el-pagination> -->
                      </template>
                    
                    </div>
                </el-card>
            </div>
 </div>

<el-dialog
      :title="dialogTitle"
      :visible.sync="dialogShow"
      width="800px">
    <table class="special_table " style="width: 100%;">
      <thead>
        <tr>
          <th style="text-align: center;width: 40px;">序号</th>
          <th>详情</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, index) in dialogList">
          <tr :key="index">
            <td style="text-align: center;width: 40px;">{{index+1}}</td>
            <td style="white-space: pre-wrap;" align="left">{{item.wjms}}</td>
          </tr>
        </template>
      </tbody>
      <tr></tr>
    </table>
</el-dialog>      

</div>

</template>
<script>
export default {
  data () {
    return {
      SchoolNumber: 0,
      filterText: '', // 过滤信息
      baseInfo: [], // 基本信息
      TopFiveLists: [], // 班级前五名
      lastFiveLists: [], // 班级后五名
      scoreInfo: [], // 个人历史成绩
      LoanDetails: [], // 贷款明细
      checkPermissions: true,
      expenditure: 0,
      jyye: 0,
      recharge: 0,
      awardEchartsFlag:true,
      bookEchartsFlag:true,
      bookEchartsFlag:true,
      loanPicFlag:true,
      totalScore:0,
      pageSize: 6,
      currentP: 1,
      scoreTableData:[],
      depedIdFlag:true,
      countCard:[],
      valueYx:'',
      optionsYx:[],
      optionsZy: [],
      valueZy: '',
      optionsBj: [],
      valueBj: '',
      optionsXs: [],
      valueXs: '',
      flagZY:false,
      flagBj:false,
      flagXs:false,
      scoreTabFlag:true,
      countCardFlag:true,
      Numflag:1,
      /* cjs添加 */ 
      dialogTitle: '',
      dialogShow: false,
      dialogList: []
    }
  },
  created () {},
  mounted () {
    // this.SchoolNumberFn()
    this.getYxFn()
    
  },
  methods: {
    showJg (xh, type, num) {
      if (!num) {
        return
      }
      if (type) {
        // 黄色 
        this.$ajax('post', '/tr/individualPortrait/web/getyellowData', {xh: xh}, (res) => {
          if (res.success) {
            this.dialogTitle = '口头警告列表'
            this.dialogShow = true
            this.dialogList = res.obj
          } else {
            this.$message({
              type: 'error',
              msg: res.msg
            })
          }
        })
      } else {
        // 红色
        this.$ajax('post', '/tr/individualPortrait/web/gethotData', {xh: xh}, (res) => {
          if (res.success) {
            this.dialogTitle = '严重违纪列表'
            this.dialogShow = true
            this.dialogList = res.obj
          } else {
            this.$message({
              type: 'error',
              msg: res.msg
            })
          }
        })
      }
    },
    // 初始化页面，返回该老师的默认第一个学生学号
    //  SchoolNumberFn () {
    //   let self = this
    //   self.$ajax(
    //     'post',
    //     self.HOST + '/tr/individualPortrait/web/getStuDefault',
    //     {},
    //     (res) => {
    //       if (res.success) {
    //         if (res.obj) {
    //           self.checkPermissions = false
    //           self.SchoolNumber = res.obj.xh
    //           self.downFn()
    //         } else {
    //           self.checkPermissions = true
    //         }
    //       } else {
    //         self.$message({
    //           message: res.msg,
    //           type: 'error'
    //         })
    //       }
    //     }
    //   )
    // },


    // 2018-6-19
      // 搜素
     // 获取院系
    getYxFn () {
      let self = this
      this.$ajax('post', this.HOST + '/tr/trDept/web/getIsDeptList', {}, (res) => {
        if (res.success) {
          if(res.obj.length>0){
           self.optionsYx = res.obj
           self.valueYx= res.obj[0].id 
           self.getZyFn()
          }else{
             self.optionsYx=[]
             self.valueYx=''
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
    selectYXFn (v) {
      // self.flagZY = false
      // self.flagBj = true
      // self.flagXs = true
      this.valueZy = ''
      this.valueKc=""
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
      self.$ajax('post', this.HOST + '/tr/ComparativeAnalysis/web/getProfessionByCon', dataNew,
        (res) => {
          if (res.success) {
            if(res.obj.length>0){
            //  self.flagZY = false
             self.optionsZy = res.obj
             self.valueZy= res.obj[0].dm
             self.getBjFn()
            }else{
             self.optionsZy = []
             self.valueZy= ''
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
    selectZyFn(){
      // this.flagBj = true
      // this.flagXs = true
      this.valueBj = ''
      this.valueXs = ''
      this.getBjFn()
    },

     // 获取班级
    getBjFn () {
      let self = this
      // console.log('dadad', self.valueZy)
      let dataNew = {
        zydm: self.valueZy,
        searchName: ''
      }
      self.$ajax('post', this.HOST + '/tr/trCA/web/getClassByZy', dataNew,
        (res) => {
          if (res.success) {
            if(res.obj.length>0){
              // self.flagBj = false
              self.optionsBj = res.obj
              self.valueBj=res.obj[0].id
              self.getXsFn()
            }else{ 
              self.optionsBj = res.obj
              self.valueBj=''
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
    selectBjFn(){
      // this.flagXs = true
      this.valueXs = ''
      this.getXsFn()
    },
     // 获取学生
    getXsFn () {
      let self = this
      let dataNew = {
        bjdm: self.valueBj,
        searchName: '',
        tableType: 2,
        tableId:''
      }
      self.$ajaxMore('post', this.HOST + '/tr/ComparativeAnalysis/web/getStuInfo', dataNew,
        (res) => {
          if (res.success) {
            if(res.obj.length>0){
              // self.flagXs = false
              self.optionsXs = res.obj
              self.valueXs=res.obj[0].xh
              self.Numflag++
              if(self.Numflag==2){
                 self.downFn()
              }
              
            }else{ 
              self.optionsXs = res.obj
              self.valueXs=''
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
    downFn(){
      let self=this
      self.countCardFn() //统计个数
      self.baseInfoFn() // 基本信息
      self.scoreInfoFn() // 成绩信息
    },
    // 查询
    searchInfo () {
      let self = this
      self.downFn()
      // self.$ajaxMore(
      //   'post',
      //   self.HOST + '/tr/Portrait/web/checkPermissions',
      //   { searchName: self.valueXs },
      //   (res) => {
      //     if (res.success) {
      //       if (Boolean(res.obj) === true) {
      //         // self.checkPermissions = false
      //         self.SchoolNumber = self.valueXs
      //         self.downFn()
      //       }else{
      //         self.$message({
      //         message: "没有查询到该学生",
      //         type: 'error'
      //       })
      //       }
      //     } else {
      //       self.$message({
      //         message: res.msg,
      //         type: 'error'
      //       })
      //     }
      //   })
        },
    
    
    // 基本信息
    baseInfoFn () {
      let self = this
      let newData = {
        id:12,
        key:self.valueXs
      }
      self.$ajax(
        'post',
        self.HOST + '/tr/individualPortrait/web/getJbxx',
        newData,
        (res) => {
          if (res.success) {
            self.baseInfo = []
            if(res.data){
             self.baseInfo = res.data
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


   //   统计个数信息
    countCardFn () {
      let self = this
      let newData = {
        id: 14,
        key:self.valueXs
      }
      self.$ajax(
        'post',
        self.HOST + '/tr/individualPortrait/web/getJxqk',
        newData,
        (res) => {
          if (res.success) { 
             self.countCard = []           
            if(res.obj.length>0){     
                self.countCard = res.obj
                self.countCardFlag=false
            }else{
              self.countCardFlag=true
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

    // 成绩信息
    scoreInfoFn () {
      let self = this
      let newData = {
        id: 15,
        key:self.valueXs
      }
      self.$ajax(
        'post',
        self.HOST + '/tr/individualPortrait/web/getCjxx',
        newData,
        (res) => {
          if (res.success) {
            self.scoreTableData = []
            if(res.obj.length>0){
              self.scoreTabFlag=false
              self.scoreTableData = res.obj
            }else{
              self.scoreTabFlag=true
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

    getCurrentPageScore: function (currentPage) {
      this.currentP = currentPage
      this.scoreInfoFn()
    },



  

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
.mainContentA {
  background-color: #f1f4f5;
  padding: 0 1.64%;
}
.marginBto24 {
  margin-bottom: 24px;
}
.identity {
  margin-bottom: 24px;
}
.portraitTable {
  margin-top: 40px;
}
.infoBox .infoLeft,
.infoBox .infoList {
  padding: 40px 0;
}
.infoBox .infoList {
  padding-right: 28px;
}
.infoLeft {
  text-align: center;
}
.infoLeft .pic {
  height: 110px;
  margin-bottom: 15px;
}
.infoLeft .pic img {
  display: inline-block;
  height: 100%;
}
.infoLeft .name {
  font-size: 20px;
  line-height: 40px;
  color: #444;
}
.infoLeft .num {
  font-size: 14px;
  line-height: 25px;
  color: #999;
}
.infoList ul:nth-child(2n-1) {
  background-color: #f7f8f9;
}
.infoList li {
  float: left;
  width: 26.333%;
  font-size: 14px;
  color: #666;
  line-height: 42px;
  padding-left: 4%;
  padding-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.infoList li span {
  display: inline-block;
  padding-right: 5px;
}
.mainContent1 .box-card {
  position: relative;
  min-height: 60px;
}
.mainContent1 .textTitle {
  color: #37474f;
  font-size: 16px;
  line-height: 24px;
  position: absolute;
  left: 20px;
  top: 20px;
  width: 100%;
}
.studentA .contentEcharts {
  width: 100%;
  height: 350px;
}
.btnStudntGroup .btnStudntList {
  float: left;
  width: 43%;
  padding-bottom: 28px;
}
.btnStudntGroup .btn {
  font-size: 14px;
  color: #fff;
  line-height: 55px;
  text-align: center;
  background-color: #70ad47;
}
.btnStudntGroup .btnStudntListA {
  float: right;
}
.btnStudntGroup .btnStudntListA .btn {
  background-color: #ed7d31;
}
.btnStudntGroup .list {
  color: #76838f;
  line-height: 52px;
  border-top: 1px solid #e4eaec;
}
.btnStudntGroup span {
  display: inline-block;
  width: 48%;
  text-align: center;
}
.awardPic p.num {
  float: right;
  padding-right: 40px;
  font-size: 14px;
  color: #76838f;
}
.awardPic p.num span {
  color: #70ad47;
}
.mainContent1 .el-table thead th,
.mainContent1 .el-table thead th {
  background-color: #f5f8fa;
}

.picGroup .personEcharts,
.picGroup .awardEcharts,
.picGroupA .bookEcharts,
.picGroupA .RechargeEcharts,
.picGroupA .consumeEcharts {
  height: 360px;
}
.picGroupA .bookEcharts {
  height: 362px;
}
.width50 {
  width: 50%;
  float: left;
}
.RechargeEcharts,
.consumeEcharts {
  width: 100%;
  display: inline-block;
  text-align: center;
}
.btnStudntGroup .btnStudntList {
  float: left;
  width: 43%;
  padding-bottom: 28px;
}
.btnStudntGroup .btn {
  font-size: 14px;
  color: #fff;
  line-height: 55px;
  text-align: center;
  background-color: #70ad47;
}
.btnStudntGroup .btnStudntListA {
  float: right;
}
.btnStudntGroup .btnStudntListA .btn {
  background-color: #ed7d31;
}
.btnStudntGroup .list {
  color: #76838f;
  line-height: 52px;
  border-top: 1px solid #e4eaec;
}
.btnStudntGroup span {
  display: inline-block;
  width: 48%;
  text-align: center;
}
.studntTable .box-card {
  height: 390px;
}
.mainContentC .nodataPicAC {
  background-color: #fff;
  height: 600px;
  text-align: center;
}
.mainContentC .nodataPicAC img {
  display: inline-block;
  margin: auto;
  margin-top: 100px
}
.mainContentC .nodataPicAC_small {
  background-color: #fff;
  height: 350px;
  text-align: center;
}
.mainContentC .nodataPicAC_small img {
  display: inline-block;
  margin: auto;
  margin-top: 50px
}
.mainContent1 .titleName {
  line-height: 18px;
  font-size: 16px;
  color: #37474f;
  padding-left: 10px;
  border-left: 5px solid #70ad47;
  margin-bottom: 15px;
}
.showInfoList .num {
  font-size: 30px;
  line-height: 52px;
  text-align: center;
  color: #fff;
}
.showInfoList .name {
  text-align: center;
  font-size: 12px;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #fff;
}
.showInfoList .box-card {
  margin-bottom: 20px;
}

.showInfoItem1 .box-card {
  background-color: #70ad47;
}
.showInfoItem3 .box-card {
  background-color: #ffc000;
}
.showInfoItem2 .box-card .num,
.showInfoItem4 .box-card .num {
  color: #70ad47;
}
.showInfoItem2 .box-card .name,
.showInfoItem4 .box-card .name {
  color: #999;
}

.showInfoItem8 .box-card {
  background-color: #a6a6a6;
}
.showInfoItem6 .box-card {
  background-color: #4472c4;
  color: #4472c4;
}
.showInfoItem5 .box-card {
  background-color: #ed7d31;
}
.showInfoItem7 .box-card {
  background-color: #5b9bd5;
}
.w_seachGroup li{
 float: left;
 margin-bottom: 15px
}
.w_seachGroup .title_seach{
  float: left;
  width: 100px;
 line-height: 32px;
 font-size: 14px;
 text-align: right;
 padding-right: 15px;
 color: #606266
}
.w_seachGroup .title_select{
  float: left;

}
.nodataPic_zg {
  width: 100%;
  background-color: #fff;
  text-align: center;
}
.nodataPic_zg img {
  display: inline-block;
  margin-top: 50px;
}
/* #spacialLeft .special_table th:nth-child(2),
#spacialLeft .special_table tr td:nth-child(2){
text-align: left;
padding-left: 30px
} */
</style>
