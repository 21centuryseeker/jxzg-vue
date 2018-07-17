<template>
    <div class="mainContent1 mainContentA mainContentC">
      <div class="filterBox marginBto24">
            <el-card class="box-card">
                <el-row :gutter="20" >
                        <el-col :span="10">
                            <el-input class="zgInput" size="small"  placeholder="请输入学号进行搜索" clearable  v-model.trim="filterText"></el-input>
                        </el-col>
                        <el-col :span="4">
                            <el-button type="info" class="reverseBtn" size="small"  @click="searchInfo">搜索</el-button>
                        </el-col>
                </el-row>
            </el-card>
         </div>
      <!-- 个体画像的页面 -->
      <div v-if="checkPermissions" class="nodataPicAC">
          <img src="../../../assets/empty.jpg"/>
      </div>
      <div v-else>
         <div class="infoBox marginBto24">
            <el-card class="box-card" :data="baseInfo">
                <el-row :gutter="20" >
                        <el-col :span="6">
                            <div class="infoLeft">
                                <img src="../../../assets/xueshenghuaxiang.png" />

                                <p class="name">{{baseInfo.xm}}</p>
                                <p class="num">学号  {{baseInfo.xh}}  </p>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="infoList">
                                <ul class="clearfix">
                                    <li><span>培养层次：</span>{{baseInfo.xwdmmc}} </li>
                                    <li><span>学制：</span>{{baseInfo.xz}}</li>
                                    <li><span>政治面貌：</span> {{baseInfo.zzmmdmmc}}</li>
                                </ul>
                                <ul class="clearfix">
                                    <li><span>学籍状态： </span>{{baseInfo.xjzt}}</li>
                                    <li><span>学生状态：</span>{{baseInfo.xsztmc}} </li>
                                    <li><span>民族：</span>{{baseInfo.mzdmmc}} </li>
                            </ul>
                            <ul class="clearfix">
                                    <li><span>学习方式：</span> {{baseInfo.xxfsdmmc}}</li>
                                    <li><span>学习形式：</span>{{baseInfo.xxxsdmmc}}</li>
                                    <li><span>出生日期：</span>{{baseInfo.csrq}}</li>
                                </ul>
                                <ul class="clearfix">
                                    <li><span>就读年级：</span>{{baseInfo.jdnj}}</li>
                                    <li><span>专业大类： </span>{{baseInfo.yxdmmc}}</li>
                                    <li><span>身份证号：</span> {{baseInfo.sfzh}}</li>
                                </ul>
                                <ul class="clearfix">
                                    <li><span>专业：</span>{{baseInfo.zydmmc}} </li>
                                    <li><span>班级：</span> {{baseInfo.bh}}</li>
                                    <li><span>籍贯：</span> {{baseInfo.jgdmmc}} </li>
                            </ul>
                            </div>
                        </el-col>
                </el-row>
                </el-card>
            </div>

            <div class="studentA marginBto24">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <div class="studntPic positionR">
                            <el-card class="box-card">
                                <div class="textTitle">我与学霸的差距</div>
                                 <div v-if="StraightFlag" class="nodataPicAC_small">
                                    <img src="../../../assets/empty.jpg"/>
                                </div>
                                <div v-else class="contentEcharts" id="Straight"></div>  
                            </el-card>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="studntTable">
                            <el-card class="box-card">
                                 <div v-if="btnStudntFlag" class="nodataPicAC_small">
                                    <img src="../../../assets/empty.jpg"/>
                                </div>
                                <div v-else class="btnStudntGroup clearfix">
                                    <div class="btnStudntList">
                                        <div class="btn">班级成绩前五名</div>
                                        <div v-for="(item, index) in TopFiveLists" :key="index">
                                            <div class="list">
                                                <span>{{item.rowno}}</span>
                                                {{item.xm}}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="btnStudntList btnStudntListA">
                                        <div class="btn">班级成绩后五名</div>
                                            <div v-for="(item, index) in lastFiveLists" :key="index">
                                            <div class="list">
                                                <span>{{item.rowno}}</span>
                                                {{item.xm}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-card>
                        </div>
                    </el-col>
            </el-row>
            </div>

            <div class="score marginBto24" >
                <el-card class="box-card">
                    <div class="textTitle">成绩信息</div>
                <div class="portraitTable">
                    <!-- <el-table :data="scoreInfo"  style="width: 100%">
                        <el-table-column  prop="kcmc" label="科目"  align="center"> </el-table-column>
                            <el-table-column  prop="bfzkscj"  label="课程成绩" align="center"></el-table-column>
                            <el-table-column prop="xf"  label="学分" align="center"> </el-table-column>
                            <el-table-column prop="bjpm"  label="班级排名" align="center"> </el-table-column>
                            <el-table-column prop="zypm"  label="专业排名" align="center"> </el-table-column>
                            <el-table-column prop="zypj"  label="专业平均分" align="center"> </el-table-column>
                            <el-table-column label="是否重修" align="center">
                            <template slot-scope="scope">
                                {{scope.row.iscx==0?'是':'否'}}
                            </template>
                            </el-table-column>
                        </el-table> -->
                       <table class="special_table" width="100%">
                          <thead>
                            <tr>
                            <th align="left">科目</th>
                            <th align="center">课程成绩</th>
                            <th align="center">学分</th>
                            <th align="center">班级排名</th>
                            <th align="center">专业排名</th>
                            <th align="center">专业平均分</th>
                            <th align="center">是否重修</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, index) in scoreTableData" :key="index">
                            <td>{{item.kcmc}}</td>
                            <td align="center">{{item.bfzkscj}}</td>
                            <td align="center">{{item.xf}}</td>
                            <td align="center">{{item.bjpm}}</td>
                            <td align="center">{{item.zypm}}</td>
                            <td align="center">{{item.zypj}}</td>
                            <td align="center">{{item.iscx==0?'是':'否'}}</td>
                            </tr>
                          </tbody>
                        </table>

                         <!-- <el-pagination background  layout="prev, pager, next"  :total="totalScore" v-show="totalScore" style="margin-top: 10px"  @current-change = "getCurrentPageScore">
                    </el-pagination> -->
                    </div>
                </el-card>
            </div>

            <div class="picGroup marginBto24" >
                <el-row :gutter="20">
                    <el-col :span="12">
                        <div class="personPic">
                            <el-card class="box-card">
                                <div class="textTitle">个人历史成绩分析</div>
                                  <div v-if="personSoreFlag" class="nodataPicAC_small" style="height:360px">
                                    <img src="../../../assets/empty.jpg"/>
                                 </div>
                                <div v-else class="personEcharts" id="personSore"></div>
                            </el-card>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="awardPic">
                            <el-card class="box-card">
                                <div class="textTitle">奖励困补及贷款统计</div>
                                 <div v-if="awardEchartsFlag" class="nodataPicAC_small" style="height:360px">
                                    <img src="../../../assets/empty.jpg"/>
                                 </div>
                                <div v-else class="awardEcharts" id="StuckUp"></div>
                            </el-card>
                        </div>
                    </el-col>
            </el-row>
            </div>

        <div class="Loan marginBto24">
                <el-card class="box-card">
                    <div class="textTitle">贷款明细</div>
                    <div class="portraitTable">
                    <!-- <el-table :data="LoanDetails"  style="width: 100%">
                        <el-table-column  label="序号" align="center">
                            <template slot-scope="scope">
                                {{scope.$index+1}}
                            </template>
                        </el-table-column>
                            <el-table-column  prop="dklb"  label="贷款类别" align="center">
                                <template slot-scope="scope">
                                {{scope.row.dklb==1?'助学贷款':''}}
                                </template>
                            </el-table-column>
                            <el-table-column prop="csdkrq"  label="贷款项目" align="center"> </el-table-column>
                            <el-table-column prop="csdkje"  label="初始贷款金额" align="center"> </el-table-column>
                            <el-table-column prop="csdkrq"  label="初始借贷日期" align="center"> </el-table-column>
                            <el-table-column prop="je"  label="金额" align="center"> </el-table-column>
                        </el-table> -->
                       <table class="special_table" width="100%">
                          <thead>
                            <tr>
                            <th align="center">序号</th>
                            <th align="center">贷款类别</th>
                            <th align="center">贷款项目</th>
                            <th align="center">初始贷款金额</th>
                            <th align="center">初始借贷日期</th>
                            <th align="center">金额</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, index) in LoanDetails" :key="index">
                              <td align="center">{{pageSize * (currentPage - 1) + 1 + index}}</td>
                              <td align="center">{{item.dklb==1?'助学贷款':''}}</td>
                              <td align="center">{{item.csdkrq}}</td>
                              <td align="center">{{item.csdkje}}</td>
                              <td align="center">{{item.csdkrq}}</td>
                              <td align="center">{{item.je}}</td>
                            </tr>
                          </tbody>
                        </table>
                    <!-- <el-pagination background  layout="prev, pager, next"  :total="totalLoan" v-show="totalLoan" style="margin-top: 10px"  @current-change = "getCurrentPageLoan">
                    </el-pagination> -->

                    </div>
                </el-card>
            </div>

            <div class="picGroupA marginBto24">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <div class="bookPic">
                                <el-card class="box-card">
                                    <div class="textTitle">图书借阅分析</div>
                                    <div v-if="bookEchartsFlag" class="nodataPicAC_small" style="height:362px;width:100%">
                                        <img  style="width:100%" src="../../../assets/empty.jpg"/>
                                    </div>
                                    <div v-else class="bookEcharts" id="bookRead"></div>
                                </el-card>
                        </div>
                    </el-col>
                    <el-col :span="16">
                        <div class="awardPic clearfix">
                                <el-card class="box-card">
                                    <div class="textTitle">一卡通消费
                                        <p class="num">
                                            本月消费<span> {{expenditure}} </span>元，余额<span> {{jyye}} </span>元，充值<span> {{recharge}} </span>元
                                        </p>
                                    </div>
                                    <div v-if="bookEchartsFlag" class="nodataPicAC_small" style="height:360px">
                                        <img src="../../../assets/empty.jpg"/>
                                    </div>
                                    <div v-else class="clearfix">
                                        <div class="width50">
                                            <div class="RechargeEcharts" id="Recharge"></div>
                                        </div>
                                        <div class="width50">
                                            <div class="consumeEcharts" id="Consume"></div>
                                        </div>
                                    </div>

                                </el-card>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>

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
      StraightFlag:true,
      btnStudntFlag:true,
      personSoreFlag:true,
      awardEchartsFlag:true,
      bookEchartsFlag:true,
      bookEchartsFlag:true
    }
  },
  created () {},
  mounted () {
    // this.searchInfo()//查询
    this.SchoolNumberFn()
  },
  methods: {
    //   查询
    SchoolNumberFn () {
      let self = this
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/individualPortrait/web/getStuDefault',
        {},
        (res) => {
          if (res.success) {
            if (res.obj) {
              self.checkPermissions = false
              self.SchoolNumber = res.obj.xh
              self.baseInfoFn()
            } else {
              self.checkPermissions = true
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
    //   查询
    searchInfo () {
      let self = this
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/checkPermissions',
        { searchName: self.filterText },
        (res) => {
          if (res.success) {
            if (Boolean(res.obj) === true) {
              self.checkPermissions = false
              self.SchoolNumber = self.filterText
              self.downFn()
            } else {
              self.checkPermissions = true
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
      self.baseInfoFn() // 基本信息
      self.StraightFn() // 我与学霸差距
      self.TopFiveFn() // 班级前五名
      self.lastFiveFn() // 班级后五名
      self.scoreInfoFn() // 成绩信息
      self.personSoreFn() // 个人历史成绩
      self.StuckUpFn() // 奖励困补
      self.LoanDetailsFn()
      self.bookEchartsFn() // 图书借阅
      self.OneCardfn() // 一卡通
    },
    //   基本信息
    baseInfoFn () {
      let self = this
      let newData = {
        id: 12,
        key: [self.SchoolNumber]
      }
      // alert(111)
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/individualPortrait/web/getJbxx',
        newData,
        (res) => {
          if (res.success) {
            self.baseInfo = []
            self.baseInfo = res.obj[0]
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },
    // 我与学霸的差距
    StraightFn () {
      let self = this
      let newData = {
        id: 36,
        param: [self.SchoolNumber]
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getYxbcj',
        newData,
        (res) => {
          if (res.success) {
            if(res.obj.legend.length>0){
               self.StraightFlag=false
                  let xList = res.obj.dataxList
                  let yList = res.obj.datayList
                  let legend = res.obj.legend
                  let series = [
                    {
                      type: 'radar',
                      data: yList
                    }
                  ]
                  let maxData = yList[0].value
                  let polar = {
                    indicator: [
                      { text: '成绩', max: maxData[0] },
                      { text: '借书量', max: maxData[1] },
                      { text: '图书馆进出次数', max: maxData[2] },
                      { text: '早餐次数', max: maxData[3] },
                      { text: '早起次数', max: maxData[4] }
                    ]
                  }
                  self.$ChartUtil.drawChartNoXY(
                    'Straight',
                    '',
                    legend,
                    self.$ChartUt.HORIZONTAL,
                    series,
                    xList,
                    { polar: polar },
                    self
                  )
            }else{
              // self.StraightFlag=true

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
    // 班级前五名
    TopFiveFn () {
      let self = this
      let newData = {
        id: 15,
        para: [
          self.SchoolNumber,
          self.SchoolNumber,
          self.SchoolNumber,
          '2018',
          '1',
          '0',
          '5'
        ]
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getListData',
        newData,
        (res) => {
          if (res.success) {
            if(res.obj.length>0){
                self.btnStudntFlag=false
            }else{
               self.btnStudntFlag=true
            }
            self.TopFiveLists = []
            self.TopFiveLists = res.obj
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },
    // 班级前五名
    lastFiveFn () {
      let self = this
      let newData = {
        id: 14,
        para: [
          self.SchoolNumber,
          self.SchoolNumber,
          self.SchoolNumber,
          '2018',
          '1',
          '0',
          '5'
        ]
      }

      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getListData',
        newData,
        (res) => {
          if (res.success) {
            self.lastFiveLists = []
            self.lastFiveLists = res.obj
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
        id: 20,
        para: [self.SchoolNumber, '2017', '1']
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getListData',
        newData,
        (res) => {
          if (res.success) {
            self.scoreInfo = []
            self.scoreInfo = res.obj
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },

    // 个人历史成绩
    personSoreFn () {
      let self = this
      let newData = {
        id: 22,
        param: [self.SchoolNumber]
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getHistoryGrcj',
        newData,
        (res) => {
          if (res.success) {
            if(res.obj.dataxList.length>0){
                self.personSoreFlag=false
                let xList = res.obj.dataxList
                let series = res.obj.datayList
                series.filter(item => {
                  item.type = 'line'
                  let { value } = item
                  item.data = value
                  return true
                })
                let legend = res.obj.legend
                let legends = self.$ChartUt.CENTER_TOP
                self.$ChartUtil.drawChart(
                  'personSore',
                  '',
                  legend,
                  self.$ChartUt.HORIZONTAL,
                  series,
                  xList,
                  false,
                  { customattrs: { xrotate: 0 }, legend: legends },
                  self
                )
            }else{
             self.personSoreFlag=true
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

    // 奖励困补及贷款
    StuckUpFn () {
      let self = this
      let newData = {
        id: 25,
        param: [self.SchoolNumber]
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getBarLists',
        newData,
        (res) => {
          if (res.success) {
            if(res.obj.legent.length>0){
                self.awardEchartsFlag=false
                let xList = res.obj.dataxList
                let series = res.obj.datayList
                series.filter(item => {
                  item.type = 'bar'
                  let { value } = item
                  item.data = value
                  item.stack = '总量'
                  item.barWidth = 32
                  return true
                })
                let legend = res.obj.legend
                self.$ChartUtil.drawChart(
                  'StuckUp',
                  '',
                  legend,
                  self.$ChartUt.CENTER_TOP,
                  series,
                  xList,
                  false,
                  { customattrs: { xrotate: 0 } },
                  self
                )
            }else{
              self.awardEchartsFlag=true
            }
          
            //   StuckUp
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },

    // 贷款明细
    LoanDetailsFn () {
      let self = this
      let newData = {
        id: 30,
        para: [self.SchoolNumber]
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getListData',
        newData,
        (res) => {
          if (res.success) {
            self.LoanDetails = []
            self.LoanDetails = res.obj
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },

    bookEchartsFn () {
      let self = this
      let newData = {
        id: 32,
        param: [self.SchoolNumber]
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getTsjy',
        newData,
        (res) => {
          if (res.success) {
            if(res.dataxList.length>0){
                self.bookEchartsFlag=false
                let xList = res.obj.dataxList
                let meteData = res.obj.datayList
                let mapSeries = {}
                mapSeries.type = 'bar'

                mapSeries.data = meteData.map(item => {
                  let { value } = item
                  let [dataItem] = value
                  return dataItem
                })

                //   let legend = res.obj.legend
                self.$ChartUtil.drawChartNoLegend(
                  'bookRead',
                  '',
                  [mapSeries],
                  xList,
                  true,
                  {},
                  self
                )
            }else{
               self.bookEchartsFlag=true
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
    // 一卡通
    OneCardfn () {
      let self = this
      let data = {
        id: 0,
        param: [self.SchoolNumber]
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/portrait/web/getGrjy',
        data,
        (res) => {
          if (res.success) {
            //  个人消费轻卡un个
            if(res.data.jyye){
              self.bookEchartsFlag=false
              self.expenditure = res.data.expenditure
              self.jyye = res.data.jyye.jyye
              self.recharge = res.data.recharge

              let rechargeList = res.obj.rechargeList
              let legR = rechargeList.dataxList
              let dataR = rechargeList.datayList
              self.Recharge(legR, dataR)

              let ConsumeList = res.obj.expenditureList
              let legEx = ConsumeList.dataxList
              let dataEx = ConsumeList.datayList
              self.Consume(legEx, dataEx)
            }else{
              self.expenditure =0
              self.jyye =0
              self.recharge =0
              self.bookEchartsFlag=true
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
    // 充值
    Recharge (leg, data) {
      var option = {
        title: {
          text: '充值',
          x: '48%',
          y: '55%',
          textAlign: 'center',
          textStyle: {
            fontSize: 25,
            fontStyle: 'normal',
            fontWeight: 'normal',
            color: '#666'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          itemGap: 10,
          // orient: 'vertical',
          // right: 0,
          top: '15%',
          data: leg
        },
        color: ['#70ad47', '#ffc000', '#ed7d31'],
        series: [
          {
            name: name,
            type: 'pie',
            radius: ['35%', '55%'],
            center: ['50%', '60%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true
              },
              emphasis: {
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '12',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 5,
                length2: 3
              }
            },
            data: data
          }
        ]
      }
      var myChart = this.$echarts.init(
        document.getElementsByClassName('RechargeEcharts')[0]
      )
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    // 消费
    Consume (leg, data) {
      var option = {
        title: {
          text: '消费',
          x: '48%',
          y: '55%',
          textAlign: 'center',
          textStyle: {
            fontSize: 25,
            fontStyle: 'normal',
            fontWeight: 'normal',
            color: '#666'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          itemGap: 10,
          // orient: 'vertical',
          // right: 0,
          top: '15%',
          data: leg
        },
        color: ['#70ad47', '#ffc000', '#ed7d31'],
        series: [
          {
            name: name,
            type: 'pie',
            radius: ['35%', '55%'],
            center: ['50%', '60%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true
              },
              emphasis: {
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '12',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 5,
                length2: 3
              }
            },
            data: data
          }
        ]
      }
      var myChart = this.$echarts.init(
        document.getElementsByClassName('consumeEcharts')[0]
      )
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
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

</style>
