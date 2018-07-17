<template id="majorContent">
    <div class="mainContent1 mainContentA">

         <div class="filterBox marginBto24">
            <el-card class="box-card">
                <el-row :gutter="20" >
                        <el-col :span="10">
                            <el-input class="zgInput" size="small"  placeholder="输入关键字进行过滤" clearable  v-model="filterText"></el-input>
                        </el-col>
                        <el-col :span="4">
                            <el-button type="info" class="reverseBtn" size="small"  @click="searchInfo">搜索</el-button>
                        </el-col>
                </el-row>
            </el-card>
         </div>

          <div class="infoBox infoBoxA marginBto24">
            <el-card class="box-card">
                <el-row :gutter="20" >
                        <el-col :span="6">
                            <div class="infoLeft">
                                <div class="pic"><img src="../../../assets/zhuanyehuaxiang.png" /></div>
                               <p class="leason">计算机应用</p>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="infoList">
                                <ul class="clearfix">
                                    <li><span>学制：</span> 3年</li>
                                    <li><span>教职工人数： </span> 50</li>
                                    <li><span> 已建课程标准数：</span> 55</li>
                                </ul>
                                <ul class="clearfix">
                                    <li><span>学科： </span>工农建设</li>
                                    <li><span>获奖项目总数：</span>5</li>
                                    <li><span>校内实训数：</span>6</li>
                                 </ul>
                                 <ul class="clearfix">
                                    <li><span>招生方式：  </span>普通招生</li>
                                    <li><span>就业率： </span>98%</li>
                                    <li><span>专业对口率：</span> 95%</li>
                                 </ul>
                                 <ul class="clearfix">
                                    <li><span>专业带头人：</span>李素华</li>
                                    <li><span>专业荣誉： </span>省重点专业</li>
                                    <li><span>已建课程标准数：</span> 10%</li>
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
                            <div class="textTitle">授课满意度月度TOP10</div>
                            <div class="topList">
                                <div class="topListItem clearfix ">
                                    <span class="number">1</span>
                                    <span class="topName">计算机应用</span>
                                    <span class="month">100分</span>
                                </div>
                                 <div class="topListItem clearfix ">
                                    <span class="number">2</span>
                                    <span class="topName">电子商务</span>
                                    <span class="month">98分</span>
                                </div>
                                 <div class="topListItem clearfix ">
                                    <span class="number">3</span>
                                    <span class="topName">计算机平面设计</span>
                                    <span class="month">96分</span>
                                </div>
                                 <div class="topListItem clearfix ">
                                    <span class="number">4</span>
                                    <span class="topName">计算机动漫与游戏制作</span>
                                    <span class="month">94分</span>
                                </div>
                                  <div class="topListItem clearfix ">
                                    <span class="number">5</span>
                                    <span class="topName">城市轨道交通运营管理</span>
                                    <span class="month">93分</span>
                                </div>
                                 <div class="topListItem clearfix ">
                                    <span class="number">6</span>
                                    <span class="topName">计算机网络技术</span>
                                    <span class="month">89分</span>
                                </div>
                                 <div class="topListItem clearfix ">
                                    <span class="number">7</span>
                                    <span class="topName">运动训练</span>
                                    <span class="month">87分</span>
                                </div>
                                 <div class="topListItem clearfix ">
                                    <span class="number">8</span>
                                    <span class="topName">汽车运用与维修</span>
                                    <span class="month">86分</span>
                                </div>
                                 <div class="topListItem clearfix ">
                                    <span class="number">9</span>
                                    <span class="topName">机电技术应用</span>
                                    <span class="month">85分</span>
                                </div>
                                  <div class="topListItem clearfix ">
                                    <span class="number">10</span>
                                    <span class="topName">汽车车身修复</span>
                                    <span class="month">80分</span>
                                </div>
                            </div>
                        </el-card>
                    </div>
                </el-col>
                 <el-col :span="12">
                <div class="normEchartsPic">
                         <el-card class="box-card">
                             <div class="textTitle">各项指标图示</div>
                             <div class="normEcharts"></div>
                         </el-card>
                    </div>
               </el-col>
            </el-row>
        </div>

          <div class="majorBox marginBto24">
             <el-row :gutter="20">
                <el-col :span="12">
                    <el-card class="box-card">
                        <div class="textTitle">专业转入申请人数及申请率</div>
                        <div class="majorEchart majorEcharts1"></div>
                    </el-card>
               </el-col>
               <el-col :span="12">
                     <el-card class="box-card">
                             <div class="textTitle">专业转出申请人数及申请率</div>
                             <div class="majorEchart majorEcharts2"></div>
                         </el-card>
               </el-col>
            </el-row>
        </div>

         <div class="majorBox marginBto24">
             <el-row :gutter="20">
                <el-col :span="12">
                    <el-card class="box-card">
                        <div class="textTitle">专业实际转入人数及申请率</div>
                        <div class="majorEchart majorEcharts3"></div>
                    </el-card>
               </el-col>
               <el-col :span="12">
                     <el-card class="box-card">
                             <div class="textTitle">专业实际转出人数及申请率</div>
                             <div class="majorEchart majorEcharts4"></div>
                         </el-card>
               </el-col>
            </el-row>
        </div>
    </div>

</template>
<script>
export default {
  data () {
    return {
      filterText: '', // 过滤词
      items: [], // 角色切换
      deptId: 1, // 用户ID
      totalLoan: 0,
      totalScore: 0,
      loanTableData: []
    }
  },
  created () {},
  mounted () {
    this.normEchartsOptionsFn()
    this.majorEcharts1Fn()
    this.majorEcharts2Fn()
    this.majorEcharts3Fn()
    this.majorEcharts4Fn()
  },
  methods: {
    searchInfo: function () {
      this.getZiZhi(this.deptId, 30, this.currentP, this.filterText)
    },
    // 图表学习成绩
    normEchartsOptionsFn (leg, data) {
      var option = {
        title: {
          // text: '基础雷达图'
        },
        tooltip: {},
        legend: {
          bottom: 'bottom',
          left: 'right',
          data: ['本专业', '工农建设类专业平均分']
        },
        color: [
          '#70ad47',
          '#ed7d31',
          '#ffc000',
          '#4472c4',
          '#a5a5a5',
          '#dd6969',
          '#00a6a6'
        ],
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#c7c7c7',
              backgroundColor: '#fff',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: '人才培养', max: 100 },
            { name: '资源建设', max: 100 },
            { name: '社会服务', max: 100 },
            { name: '交流合作', max: 100 },
            { name: '专业介绍', max: 100 }
          ]
        },
        series: [
          {
            name: '',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
              {
                value: [85, 80, 83, 86, 95],
                name: '本专业',
                lineStyle: {
                  color: '#70ad47'
                }
              },
              {
                value: [75, 70, 75, 76, 85],
                name: '工农建设类专业平均分',
                lineStyle: {
                  color: '#ed7d31'
                }
              }
            ]
          }
        ]
      }
      var myChart = this.$echarts.init(
        document.getElementsByClassName('normEcharts')[0]
      )
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    majorEcharts1Fn (leg, data) {
      var option = {
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          show: true,
          feature: {}
        },
        calculable: true,
        legend: {
          x: 'right',
          data: ['数量', '转入率']
        },
        xAxis: [
          {
            type: 'category',
            data: ['2013年', '2014年', '2015年', '2016年', '2017年'],
            // 坐标轴颜色
            axisLine: {
              lineStyle: {
                color: '#777'
              }
            }
          }
        ],
        yAxis: [
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
        ],
        series: [
          {
            name: '数量',
            type: 'bar',
            color: '#70ad47',
            barWidth: 27, // 柱图宽度
            data: [75, 82, 70, 80, 65]
          },
          {
            name: '转入率',
            type: 'line',
            color: '#ec7626',
            yAxisIndex: 1,
            data: [1.1, 2.1, 2.4, 2.0, 1.8],
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
      }
      var myChart = this.$echarts.init(
        document.getElementsByClassName('majorEcharts1')[0]
      )
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    majorEcharts2Fn (leg, data) {
      var option = {
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          show: true,
          feature: {}
        },
        calculable: true,
        legend: {
          x: 'right',
          data: ['数量', '转入率']
        },
        xAxis: [
          {
            type: 'category',
            data: ['2013年', '2014年', '2015年', '2016年', '2017年'],
            axisLine: {
              lineStyle: {
                color: '#777'
              }
            }
          }
        ],
        yAxis: [
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
        ],
        series: [
          {
            name: '数量',
            type: 'bar',
            color: '#70ad47',
            barWidth: 27, // 柱图宽度
            data: [75, 82, 70, 80, 65]
          },
          {
            name: '转入率',
            type: 'line',
            color: '#ec7626',
            yAxisIndex: 1,
            data: [0.8, 1.1, 1.2, 1.6, 0.8],
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
      }
      var myChart = this.$echarts.init(
        document.getElementsByClassName('majorEcharts2')[0]
      )
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    majorEcharts3Fn (leg, data) {
      var option = {
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          show: true,
          feature: {}
        },
        calculable: true,
        legend: {
          x: 'right',
          data: ['数量', '转入率']
        },
        xAxis: [
          {
            type: 'category',
            data: ['2013年', '2014年', '2015年', '2016年', '2017年'],
            axisLine: {
              lineStyle: {
                color: '#777'
              }
            }
          }
        ],
        yAxis: [
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
        ],
        series: [
          {
            name: '数量',
            type: 'bar',
            color: '#70ad47',
            barWidth: 27, // 柱图宽度
            data: [10, 13, 8, 16, 8]
          },
          {
            name: '转入率',
            type: 'line',
            color: '#ec7626',
            yAxisIndex: 1,
            data: [0.8, 0.6, 0.9, 0.7, 0.8],
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
      }
      var myChart = this.$echarts.init(
        document.getElementsByClassName('majorEcharts3')[0]
      )
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    majorEcharts4Fn (leg, data) {
      var option = {
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          show: true,
          feature: {}
        },
        grid: {
          left: '3%', // 图表距边框的距离
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        calculable: true,
        legend: {
          x: 'right',
          data: ['数量', '转入率']
        },
        xAxis: [
          {
            type: 'category',
            data: ['2013年', '2014年', '2015年', '2016年', '2017年'],
            // 坐标轴颜色
            axisLine: {
              lineStyle: {
                color: '#777'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value}'
            },
            // 坐标轴颜色
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
            // 坐标轴颜色
            axisLine: {
              lineStyle: {
                color: '#777'
              }
            }
          }
        ],
        series: [
          {
            name: '数量',
            type: 'bar',
            color: '#70ad47',
            barWidth: 27, // 柱图宽度
            data: [4, 8, 9, 4, 6]
          },
          {
            name: '转入率',
            type: 'line',
            lineWidth: '4',
            color: '#ec7626',
            yAxisIndex: 1,
            data: [0.2, 0.6, 0.65, 0.45, 0.25],
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
      }
      var myChart = this.$echarts.init(
        document.getElementsByClassName('majorEcharts4')[0]
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
  margin-bottom: 0;
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
#majorContent .box-card {
  margin-bottom: 0;
}
</style>
