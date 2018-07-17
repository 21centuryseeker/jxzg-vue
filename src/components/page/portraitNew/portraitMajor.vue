<template>
    <div class="mainContent1 mainContentA mainContentAA">
      <div class="filterBox marginBto24" v-if="flagUser">
            <el-card class="box-card">
                <el-row :gutter="20" >
                        <el-col :span="10">
                            <el-input class="zgInput" size="small"  placeholder="请输入专业名称或者专业代码进行搜索" clearable  v-model.trim="filterText"></el-input>
                        </el-col>
                        <el-col :span="4">
                            <el-button type="info" class="reverseBtn" size="small"  @click="searchInfo">搜索</el-button>
                        </el-col>
                </el-row>
            </el-card>
         </div>
         <div v-if="checkMagor" class="nodataPicAN">
              <img src="../../../assets/empty.jpg"/>
          </div>

        <div v-else>
              <div class="infoBox infoBoxA marginBto24">
                <el-card class="box-card">
                    <el-row :gutter="20" >
                            <el-col :span="6">
                                <div class="infoLeft">
                                    <div class="pic"><img src="../../../assets/zhuanyehuaxiang.png" /></div>
                                  <p class="leason">{{baseInfo.name}}</p>
                                </div>
                            </el-col>
                            <el-col :span="18">
                                <div class="infoList">
                                    <ul class="clearfix">
                                        <li><span>学制：</span>{{baseInfo.xz}}年</li>
                                        <li><span>教职工人数： </span>{{baseInfo.jzgrs}}</li>
                                        <li><span> 已建课程标准数：</span> {{baseInfo.yjkcbzs}}</li>
                                    </ul>
                                    <ul class="clearfix">
                                        <li><span>学科： </span>{{baseInfo.xk}}</li>
                                        <li><span>获奖项目总数：</span>{{baseInfo.hjxmzs}}</li>
                                        <li><span>校内实训数：</span>{{baseInfo.xnsxs}}</li>
                                    </ul>
                                    <ul class="clearfix">
                                        <li><span>招生方式：  </span>{{baseInfo.zsfs}}</li>
                                        <li><span>就业率： </span>{{baseInfo.jyl}}%</li>
                                        <li><span>专业对口率：</span> {{baseInfo.zydkl}}%</li>
                                    </ul>
                                    <ul class="clearfix">
                                        <li><span>专业带头人：</span>{{baseInfo.zydtr}}</li>
                                        <li><span>专业荣誉： </span>{{baseInfo.zyry}}</li>
                                        <li><span>已建课程标准数：</span> {{baseInfo.yjkcwbs}}%</li>
                                    </ul>
                                </div>
                            </el-col>
                    </el-row>
                </el-card>
            </div>

            <div class="marginBto24">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <div class="teachTOP">
                            <el-card class="box-card">
                                <div class="textTitle">授课满意度月度TOP5</div>
                                <div class="topList">
                                    <template v-for="(item,index) in LectureTop">
                                        <div class="topListItem clearfix" :key="index">
                                            <span class="number">{{item.id}}</span>
                                            <span class="topName">{{item.name}}</span>
                                            <span class="month">{{item.zydf}}分</span>
                                        </div>
                                    </template>
                                </div>
                            </el-card>
                        </div>
                    </el-col>
                    <el-col :span="12">
                    <div class="normEchartsPic">
                            <el-card class="box-card">
                                <div class="textTitle">各项指标图示</div>
                                <div class="normEcharts" id="normBox"></div>
                            </el-card>
                        </div>
                  </el-col>
                </el-row>
            </div>

              <div class="majorBox marginBto24">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-card class="box-card">
                            <div class="textTitleA">专业转入申请人数及申请率</div>
                            <div class="majorEchart majorEcharts1" id="majorBox1"></div>
                        </el-card>
                  </el-col>
                  <el-col :span="12">
                        <el-card class="box-card">
                                <div class="textTitleA">专业转出申请人数及申请率</div>
                                <div class="majorEchart majorEcharts2" id="majorBox2"></div>
                            </el-card>
                  </el-col>
                </el-row>
            </div>

            <div class="majorBox marginBto24">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-card class="box-card">
                            <div class="textTitleA">专业实际转入人数及申请率</div>
                            <div class="majorEchart majorEcharts3" id="majorBox3"></div>
                        </el-card>
                  </el-col>
                  <el-col :span="12">
                        <el-card class="box-card">
                                <div class="textTitleA">专业实际转出人数及申请率</div>
                                <div class="majorEchart majorEcharts4" id="majorBox4"></div>
                            </el-card>
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
      baseInfo: [], // 个人信息
      LectureTop: [], // 授课满意度
      sgrOptions: [],
      paraId: '', // 默认id
      checkUserId: '',
      filterText: '',
      checkMagor: true,
      flagUser: 0// 身份,如果是教师,则为0,校级以上为1
    }
  },
  created () {},
  mounted () {
    this.checkUserLevelFn()
    this.checkUserChange()
  },
  methods: {
    // /tr/Portrait/web/checkUserLevel
    checkUserLevelFn () {
      let self = this
      self.$ajax(
        'post',
        self.HOST + '/tr/Portrait/web/checkUserLevel',
        {},
        (res) => {
          if (res.success) {
            self.flagUser = res.obj.flag
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },
    searchInfo () {
      let newdata = {
        searchKey: this.filterText
      }
      this.ajaxMajorFn(newdata)
    },
    // 获取默认专业
    checkUserChange () {
      let newdata = {}
      this.ajaxMajorFn(newdata)
    },
    ajaxMajorFn (newdata) {
      let self = this
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/searchZY',
        newdata,
        (res) => {
          if (res.success) {
            if (Boolean(res.obj) === true) {
              self.checkMagor = false
              self.paraId = res.obj.id
               self.dataFn()
            }else {
              self.checkMagor = true
            }
          } else {
            self.checkMagor = true
            self.$message({
              type: 'error',
              message: res.msg
            })
          }
        }
      )
    },
    dataFn () {
      let self = this
      self.baseInfoFn()
      self.LectureTopFn()
      self.normEchartsOptionsFn()
      self.majorBox1Fn()
      self.majorBox2Fn()
      self.majorBox3Fn()
      self.majorBox4Fn()
    },

    //   基本信息
    baseInfoFn () {
      let self = this
      let newData = {
        id: 31,
        para: [self.paraId]
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getListData',
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
    // 授课满意度
    LectureTopFn () {
      let self = this
      let newData = {
        id: 33,
        para: [self.paraId]
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getListData',
        newData,
        (res) => {
          if (res.success) {
            self.LectureTop = []
            self.LectureTop = res.obj
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },

    // 各项指标图示
    normEchartsOptionsFn () {
      let self = this
      let newData = {
        id: 34,
        para: [self.paraId]
      }
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getRadarData',
        newData,
        (res) => {
          if (res.success) {
            let sData = res.obj.data
            let legend = res.obj.length
            let series = [
              {
                type: 'radar',
                data: sData
              }
            ]
            let polar = {
              indicator: [
                { name: '人才培养', max: 5 },
                { name: '资源建设', max: 5 },
                { name: '社会服务', max: 5 },
                { name: '交流合作', max: 5 },
                { name: '专业介绍', max: 5 }
              ]
            }
            self.$ChartUtil.drawChartNoXY(
              'normBox',
              '',
              legend,
              self.$ChartUt.VERTICAL,
              series,
              [],
              { polar: polar },
              self
            )
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },

    chartFn (newData, id) {
      let self = this
      self.$ajaxMore(
        'post',
        self.HOST + '/tr/Portrait/web/getMixedData',
        newData,
        (res) => {
          if (res.success) {
            let lengthData = res.obj.length
            let xData = res.obj.xdata
            let seriesC = res.obj.cylinder
            let seriesL = res.obj.line
            let series = [
              {
                name: lengthData[0],
                type: 'bar',
                color: '#70ad47',
                barWidth: 27, // 柱图宽度
                data: seriesC
              },
              {
                name: lengthData[1],
                type: 'line',
                color: '#ec7626',
                yAxisIndex: 1,
                data: seriesL,
                itemStyle: {
                  normal: {
                    lineStyle: {
                      width: 4,
                      type: 'solid' // 'dotted'虚线 'solid'实线
                    }
                  }
                }
              }
            ]

            let yAxis = [
              {
                type: 'value',
                axisLabel: {
                  formatter: '{value}'
                },
                axisLine: {
                  lineStyle: {
                    color: '#777'
                  }
                }
              },
              {
                type: 'value',
                axisLabel: {
                  formatter: '{value} %'
                },
                axisLine: {
                  lineStyle: {
                    color: '#777'
                  }
                }
              }
            ]
            self.$ChartUtil.drawChart(
              id,
              '',
              lengthData,
              '',
              series,
              xData,
              false,
              {
                legend: { data: lengthData },
                yAxis: yAxis,
                customattrs: { xrotate: 0 }
              },
              self
            )
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },
    majorBox1Fn () {
      let self = this
      let newData = {
        id: 26,
        para: [self.paraId]
      }
      self.chartFn(newData, 'majorBox1')
    },

    majorBox2Fn () {
      let self = this
      let newData = {
        id: 27,
        para: [self.paraId]
      }
      self.chartFn(newData, 'majorBox2')
    },

    majorBox3Fn () {
      let self = this
      let newData = {
        id: 28,
        para: [self.paraId]
      }
      self.chartFn(newData, 'majorBox3')
    },

    majorBox4Fn () {
      let self = this
      let newData = {
        id: 29,
        para: [self.paraId]
      }
      self.chartFn(newData, 'majorBox4')
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
.tab-control {
  width: 100%;
  font-size: 14px;
  color: #76838f;
  background-color: #fff;
  border-bottom: 1px solid #e4eaec;
  margin-bottom: 26px;
}
.tab-control .tab-control-item div {
  line-height: 38px;
  height: 38px;
  float: left;
  padding: 0 25px;
  background-color: #fff;
  border-right: 1px solid #fff;
  cursor: pointer;
}
.tab-control .tab-control-item .active {
  position: relative;
  top: 1px;
  height: 39px;
  background-color: #f1f4f5;
  border-right: 1px solid #e4eaec;
  border-bottom: 1px solid #f1f4f5;
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
.marbottom24 {
  margin-bottom: 24px;
}
.portraitTable {
  margin-top: 40px;
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
.mainContent1 .textTitleA {
  color: #37474f;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 10px
}
.mainContent1 .titleName {
  line-height: 18px;
  font-size: 16px;
  color: #37474f;
  padding-left: 10px;
  border-left: 5px solid #70ad47;
  margin-bottom: 15px;
}
.topList {
  padding-top: 40px;
}
.topListItem {
  margin-bottom: 8px;
}
.topListItem .number {
  float: left;
  margin-top: 4px;
  width: 24px;
  height: 24px;
  line-height: 24px;
  background-color: #70ad47;
  text-align: center;
  font-size: 14px;
  color: #fff;
  border-radius: 50%;
  vertical-align: middle;
}
.topListItem .topName {
  margin-left: 18px;
  float: left;
  width: 70%;
  display: block;
  line-height: 32px;
  color: #37474f;
  padding-left: 24px;
  font-size: 14px;
  background-color: #f5f8fa;
}
.topListItem .month {
  float: right;
  padding-right: 25px;
  line-height: 32px;
  color: #76838f;
  font-size: 12px;
  vertical-align: middle;
}
.infoBoxA .infoLeft,
.infoBoxA .infoList {
  padding: 20px 0;
}
.normEcharts {
  height: 440px;
}
.majorBox .majorEchart {
  height: 360px;
}
.teachTOP .box-card {
  height: 480px;
}
.mainContentAA .nodataPicAN {
  background-color: #fff;
  height: 600px;
  text-align: center;
}
.mainContentAA .nodataPicAN img {
  display: inline-block;
  margin: auto;
  margin-top: 100px
}
</style>
