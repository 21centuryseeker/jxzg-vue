<template>
    <div class="mainContent1 mainContentA">
        <div class="filterBox marginBto24">
            <el-card class="box-card">
                <el-row :gutter="20" >
                        <el-col :span="10">
                            <el-input class="zgInput" size="small"  placeholder="请输入课程名称进行搜索" clearable  v-model.trim="filterText"></el-input>
                        </el-col>
                        <el-col :span="4">
                            <el-button type="info" class="reverseBtn" size="small"  @click="searchInfo">搜索</el-button>
                        </el-col>
                </el-row>
            </el-card>
         </div>
         <div v-if="flagKc" class="nodataPic_zg">
             <img src="../../../assets/empty.jpg"/>
         </div>

      <div v-else>
      <!-- kecheng 画像的页面 -->
         <div  class="infoBox infoBoxA  marginBto24">
            <el-card class="box-card" :data="baseInfo">
                <el-row :gutter="20" >
                        <el-col :span="6">
                            <div class="infoLeft">
                                <img src="../../../assets/kechenghuaxiang.png" />

                                <p class="leason">{{baseInfo.kcmc}}</p>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="infoList">
                                <ul class="clearfix">
                                    <li><span>课程类型：</span>{{baseInfo.kclxmc}}</li>
                                    <li><span>考试方式：</span>{{baseInfo.ksfs}}</li>
                                    <li><span>课程性质：</span>{{baseInfo.kcxz}}</li>
                                </ul>
                                <ul class="clearfix">
                                    <li><span>总学时： </span>{{baseInfo.xs}}</li>
                                    <li><span>是否核心课程：</span>
                                        {{baseInfo.is_hxkc==1?"是":"否"}}
                                    </li>
                                     <li><span>学分：</span>{{baseInfo.xf}}</li>
                                    </ul>
                                    <ul class="clearfix">
                                    <li><span>授课专业年级：</span>{{baseInfo.skzynj}}</li>
                                    <li><span>任课老师：</span>{{baseInfo.xm}}</li>
                                     <li><span>职称：</span>{{baseInfo.zcmc}}</li>
                                    </ul>
                                    <ul class="clearfix">
                                        <li><span>授课地点：</span> {{baseInfo.skdd}}</li>

                                    </ul>
                            </div>

                        </el-col>
                </el-row>
            </el-card>
        </div>

        <div class="studentA marginBto24">
            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="studntPic">
                         <el-card class="box-card">
                             <div class="textTitle">历届课程成绩分布</div>

                             <template v-if="leasonBoxFlag">
                                <div class="nodataPic_zg" style="height:358px">
                                <img src="../../../assets/empty.jpg" />
                             </div> 
                             </template>
                             <template v-else>
                               <div class="leasonEcharts" id="leasonBox" key="101"></div>
                             </template> 

                             
                         </el-card>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="studntTable">
                         <el-card class="box-card">
                             <div class="textTitle">历届课程不及格率</div>
                              <template v-if="passBoxFlag">
                                <div class="nodataPic_zg" style="height:358px">
                                <img src="../../../assets/empty.jpg" />
                             </div> 
                             </template>
                             <template v-else>
                               <div class="passEcharts" id="passBox" key="102"></div>
                             </template> 
                             
                         </el-card>
                    </div>
                </el-col>
          </el-row>
        </div>

        <div class="studentA marginBto24">
            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="studntPic">
                         <el-card class="box-card">
                             <div class="textTitle">2017届课程成绩人数分布</div>
                                <template v-if="scoreSpeardFlag">
                                <div class="nodataPic_zg" style="height:358px">
                                <img src="../../../assets/empty.jpg" />
                             </div> 
                             </template>
                             <template v-else>
                               <div  class="speardEcharts" id="scoreSpeard" key="103"></div>
                             </template> 
                        
                         </el-card>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="studntTable">
                         <el-card class="box-card">
                             <div class="textTitle">2017届课程不及格人数分析</div>
                             <div class="showBox">
                                 <div class="xqTitle">2017年第二学期</div>
                                 <el-row :gutter="20">
                                    <el-col :span="8">
                                        <div class="xqItem">
                                            <p class="num">{{FailureAnalysis.bjgrs?FailureAnalysis.bjgrs:'-'}}</p>
                                            <p><i class="iconfont">&#xe680;</i></p>
                                            <p>不合格人数（个）</p>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="xqItem xqItemA">
                                            <p class="num">{{FailureAnalysis.bjgbl?FailureAnalysis.bjgbl:'-'}}</p>
                                            <p><i class="iconfont">&#xe680;</i></p>
                                            <p>不合格率（%）</p>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="xqItem xqItemB">
                                            <p class="num">{{FailureAnalysis.blss?FailureAnalysis.blss:'-'}}</p>
                                            <p><i class="iconfont">&#xe680;</i></p>
                                            <p>环比上升（%）</p>
                                        </div>
                                    </el-col>
                                 </el-row>
                             </div>
                         </el-card>
                    </div>
                </el-col>
          </el-row>
        </div>

        <div class="score marginBto24">
             <el-card class="box-card">
                <div class="textTitle">2017届课程成绩具体明细</div>
                  <template v-if="tableScoreFlag">
                    <div class="nodataPic_zg" style="height:350px">
                    <img src="../../../assets/empty.jpg" />
                  </div> 
                  </template>
                  <template v-else>
                      <div class="portraitTable">
                            <table class="tableScore">
                                <thead>
                                    <tr>
                                        <th rowspan="2">班级</th>
                                        <th rowspan="2">上课人数</th>
                                        <th rowspan="2">有成绩人数</th>
                                        <th rowspan="2">平均成绩</th>
                                        <th colspan="2" class="corlor1">>90分</th>
                                        <th colspan="2" class="corlor2">80-90分</th>
                                        <th colspan="2" class="corlor3">70-80分</th>
                                        <th colspan="2" class="corlor4">60-70分</th>
                                        <th colspan="2" class="corlor5">60分</th>
                                    </tr>
                                    <tr>
                                        <th>人数</th>
                                        <th>占比</th>
                                        <th>人数</th>
                                        <th>占比</th>
                                        <th>人数</th>
                                        <th>占比</th>
                                        <th>人数</th>
                                        <th>占比</th>
                                        <th>人数</th>
                                        <th>占比</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template  v-for="(item, index) in tableScore">
                                        <tr :key="index">
                                            <td>{{item.bj}}</td>
                                            <td>{{item.skrs}}</td>
                                            <td>{{item.ycjrs}}</td>
                                            <td>{{item.pjcj}}</td>
                                            <td>{{item.yxrs}}</td>
                                            <td>{{item.yxbl}}</td>
                                            <td>{{item.zdrs}}</td>
                                            <td>{{item.zdbl}}</td>
                                            <td>{{item.lhrs}}</td>
                                            <td>{{item.lhbl}}</td>
                                            <td>{{item.jgrs}}</td>
                                            <td>{{item.jgbl}}</td>
                                            <td>{{item.bjgrs}}</td>
                                            <td>{{item.bjgbl}}</td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
            
                  </template> 
            </el-card>
        </div>
</div>

 </div>

</template>
<script>
export default {
  data () {
    return {
      baseInfo: [], // 课程信息
      FailureAnalysis: [], // 2017届课程不及格人数分析
      tableScore: [],
      filterText: '', // 瘦素课程
      kcdmmc: '',
      flagKc: true,
      numbers:[1,2.3,4,5,6],
      leasonBoxFlag:true,
      passBoxFlag:true,
      scoreSpeardFlag:true,
      tableScoreFlag:true
    }
  },
  created () {},
  mounted () {
    this.getClassDefaultFn();
  },
  methods: {
    getClassDefaultFn () {
      let self = this
      self.$ajax(
        'post',
        self.HOST + '/tr/Portrait/web/getClassDefault',
        {},
        (res) => {
          if (res.success) {
            if (res.obj) {
              self.kcdmmc = res.obj.kcdmmc
              self.baseInfoFn() // 课程信息
              self.leasonEchartsFn() // 历届成绩分布
              self.failureRateFn() // 历届课程不及格率
              self.scoreSpeardFn() // 2017届课程成绩人数分布
              self.FailureAnalysisFn() // 2017届课程不及格人数分析
              self.tableScoreFn()
              self.flagKc = false
            } else {
              self.flagKc = true
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
    //   搜索课程
    searchInfo () {
      let self = this
      self.kcdmmc=self.filterText
      self.baseInfoFn() // 课程信息
    },
    //   课程信息
    baseInfoFn () {
      let self = this
      let newData = {
        id: 4,
        para: [self.kcdmmc]
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getListData',
        newData,
        (res) => {
          if (res.success) {
            if(res.obj.length){
              self.flagKc=false
              self.baseInfo = []
              self.baseInfo = res.obj[0]
              self.leasonEchartsFn() // 历届成绩分布
              self.failureRateFn() // 历届课程不及格率
              self.scoreSpeardFn() // 2017届课程成绩人数分布
              self.FailureAnalysisFn() // 2017届课程不及格人数分析
              self.tableScoreFn()
            }else{
              self.flagKc=true
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
    // 历届成绩分布
    leasonEchartsFn () {
      let self = this
      let newData = {
        id: 6,
        param: [self.kcdmmc]
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getBarLists',
        newData,
        (res) => {
          if (res.success) {
             if(res.obj.dataxList.length>0){
                self.leasonBoxFlag=false
                let xData = res.obj.dataxList
                let series = res.obj.datayList
                series.filter(item => {
                  item.type = 'bar'
                  let { value } = item
                  item.data = value
                  return true
                })
                let legend = res.obj.legend
                 setTimeout(() => {
                self.$ChartUtil.drawChart(
                  'leasonBox',
                  '',
                  legend,
                  self.$ChartUt.PIE_RAIDUS,
                  series,
                  xData,
                  false,
                  { customattrs: { xrotate: 0 } },
                  self
                )},150)
             }else{
               self.leasonBoxFlag=true
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

    // 历届课程不及格率
    failureRateFn () {
      let self = this
      let newData = {
        id: 3,
        param: [self.kcdmmc]
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getBarList',
        newData,
        (res) => {
          if (res.success) {
            if(res.obj.dataX.length>0){
              self.passBoxFlag=false
               let xList = res.obj.dataX
              let newData = res.obj.datayList
              //   let legend = res.obj.dataX

              let series = [
                {
                  name: '',
                  type: 'bar',
                  itemStyle: {
                    color: '#70ad47'
                  },
                  data: newData
                }
              ]
               setTimeout(() => {
              self.$ChartUtil.drawChartNoLegend(
                'passBox',
                '',
                series,
                xList,
                false,
                { customattrs: { xrotate: 0 } },
                self
              )},150)
            }else{
              self.passBoxFlag=true
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

    // 2017届课程成绩人数分布
    scoreSpeardFn () {
      let self = this
      let newData = {
        id: 5,
        param: [self.kcdmmc, '2008']
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getPieData',
        newData,
        (res) => {
          if (res.success) {
            if(res.obj.dataxList.length>0){
              self.scoreSpeardFlag=false
              let legendData = res.obj.dataxList
              let sdata = res.obj.datayList
              let series = [
                {
                  name: '',
                  type: 'pie',
                  radius: [80, 120],
                  color: [
                    '#70ad47',
                    '#ed7d31',
                    '#ffc000',
                    '#a5a5a5 ',
                    '#70ad47',
                    '#dd6969',
                    '#00a6a6'
                  ],
                  data: sdata
                }
              ]
             setTimeout(() => {
              self.$ChartUtil.drawChartNoXY(
                'scoreSpeard',
                '',
                legendData,
                self.$ChartUt.VERTICAL,
                series,
                [],
                {},
                self
              )},150)
              }else{
                self.scoreSpeardFlag=true
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

    // 2017届课程不及格人数分析
    FailureAnalysisFn () {
      let self = this
      let newData = {
        id: 3,
        para: [self.kcdmmc, '2008', '0']
      }

      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getListData',
        newData,
        (res) => {
          if (res.success) {
            self.FailureAnalysis = []
            if(res.obj.length>0){
             self.FailureAnalysis = res.obj[0]
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

    // 2017届课程不及格人数分析
    tableScoreFn () {
      let self = this
      let newData = {
        id: 9,
        para: [self.kcdmmc, '2008']
      }

      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getListData',
        newData,
        (res) => {
          if (res.success) {
            if(res.obj.length>0){
              self.tableScoreFlag=false
            }else{
              self.tableScoreFlag=true
            }
            self.tableScore = []
            self.tableScore = res.obj
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
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
.infoBoxA .infoLeft,
.infoBoxA .infoList {
  padding: 20px 0;
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
.infoLeft .leason {
  font-size: 16px;
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
.picGroupA .consumeEcharts,
.leasonEcharts,
.passEcharts,
.speardEcharts {
  height: 360px;
}
.width50 {
  width: 50%;
  float: left;
}
.RechargeEcharts,
.consumeEcharts {
  width: 80%;
  display: inline-block;
  text-align: center;
}
.showBox {
  padding-top: 60px;
  height: 298px;
}
.showBox .xqTitle {
  height: 50px;
  line-height: 50px;
  color: #526069;
  text-align: center;
  font-size: 16px;
  background-color: #f5f8fa;
  margin-bottom: 24px;
}
.showBox .xqItem {
  /* padding-top: 35px; */
  height: 172px;
  text-align: center;
  border-right: 1px solid #e4eaec;
}
.xqItem p {
  font-size: 14px;
  color: #a3afb7;
  line-height: 24px;
}
.xqItem p .iconfont {
  font-size: 23px;
  color: #c6d9c3;
  line-height: 50px;
}
.showBox .xqItem .num {
  padding-top: 35px;
  line-height: 38px;
  text-align: center;
  font-size: 30px;
  color: #70ad47;
}
.showBox .xqItemA .num {
  color: #ed7d31;
}
.showBox .xqItemB .num {
  color: #ffc000;
}
.showBox .xqItemB {
  border-right: none;
}
.tableScore {
  width: 100%;
  border: 1px solid #e4eaec;
  border-collapse: collapse;
}
.tableScore th,
.tableScore td,
.tableScore tr {
  border: 1px solid #e4eaec;
}
.tableScore th {
  font-size: 14px;
  color: #526069;
  line-height: 33px;
  background-color: #f5f8fa;
}
.tableScore tr {
  font-size: 14px;
  color: #76838f;
  line-height: 54px;
  text-align: center;
}
.tableScore th.corlor1 {
  background-color: #f0f9eb;
}
.tableScore th.corlor2 {
  background-color: #fdf6ec;
}
.tableScore th.corlor3 {
  background-color: #f5f8fa;
}
.tableScore th.corlor4 {
  background-color: #fef0f0;
}
.tableScore th.corlor5 {
  background-color: #eaf1fd;
}
.nodataPic_zg {
  width: 100%;
  height: 600px;
  background-color: #fff;
  text-align: center;
}
.nodataPic_zg img {
  display: inline-block;
  margin-top: 100px;
}
</style>
