<template id="lessonContent">
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
      <!-- 个体画像的页面 -->

         <div class="infoBox infoBoxA  marginBto24">
            <el-card class="box-card" :data="baseInfo">
                <el-row :gutter="20" >
                        <el-col :span="6">
                            <div class="infoLeft">
                                <img src="../../../assets/kechenghuaxiang.png" />

                                <p class="leason">计算机网络基础 </p>
                                <!-- <p class="num">学号 {{baseInfo.zgh}}</p> -->
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="infoList">
                                <ul class="clearfix">
                                    <li><span>课程类型：</span>必修课</li>
                                    <li><span>考试方式：</span>笔试</li>
                                    <li><span>课程性质：</span>专业核心课程</li>
                                </ul>
                                <ul class="clearfix">
                                    <li><span>总学时： </span>40</li>
                                    <li><span>是否核心课程：</span>是</li>
                                    <li><span>学分：</span>4</li>
                                    </ul>
                                    <ul class="clearfix">
                                    <li><span>授课专业年级：</span>一年级</li>
                                    <li><span>任课老师：</span>高佳佳</li>
                                    <li><span>职称：</span>中级</li>
                                    </ul>
                                    <ul class="clearfix">
                                        <li><span>授课地点：</span> 一号教学楼A405</li>
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
                             <div class="textTitleNposi">历届课程成绩分布</div>
                             <div class="leasonEcharts"></div>
                         </el-card>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="studntTable">
                         <el-card class="box-card">
                             <div class="textTitle">历届课程不及格率</div>
                             <div class="passEcharts"></div>
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
                             <div class="speardEcharts"></div>
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
                                            <p class="num">54</p>
                                            <p><i class="iconfont">&#xe680;</i></p>
                                            <p>不合格人数（个）</p>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="xqItem xqItemA">
                                            <p class="num">3.98</p>
                                            <p><i class="iconfont">&#xe680;</i></p>
                                            <p>不合格率（%）</p>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="xqItem xqItemB">
                                            <p class="num">0.02</p>
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

        <div class="score ">
             <el-card class="box-card">
                <div class="textTitle">2017届课程成绩具体明细</div>
               <div class="portraitTable">
                  <!-- <el-table :data="scoreInfoTableData"  style="width: 100%">
                       <el-table-column  prop="target_name" label="班级" > </el-table-column>
                        <el-table-column  prop="list"  label="上课人数" ></el-table-column>
                        <el-table-column prop="score"  label="有成绩人数"> </el-table-column>
                        <el-table-column prop="classNum"  label="平均成绩"> </el-table-column>
                        <el-table-column prop="classNum2"  label=">=90分"> </el-table-column>
                        <el-table-column prop="classNum3"  label="专业平均分"> </el-table-column>
                        <el-table-column prop="classNum4"  label="是否重修"> </el-table-column>
                    </el-table> -->

                    <!-- <el-pagination background  layout="prev, pager, next"  :total="totalScore" v-show="totalScore" style="margin-top: 10px"  @current-change = "getCurrentPageScore">
                    </el-pagination> -->

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
                            <tr>
                                <td>计算机网络基础1</td>
                                <td>54</td>
                                <td>54</td>
                                <td>70.83</td>
                                <td>3</td>
                                <td>5.6%</td>
                                <td>10</td>
                                <td>18.5%</td>
                                <td>15</td>
                                <td>27.8%</td>
                                <td>21</td>
                                <td>38.9%</td>
                                <td>5</td>
                                <td>9.3%</td>
                            </tr>
                          <tr>
                                <td>计算机网络基础2</td>
                                <td>53</td>
                                <td>53</td>
                                <td>74.54</td>
                                <td>7</td>
                                <td>13.2%</td>
                                <td>12</td>
                                <td>22.6%</td>
                                <td>17</td>
                                <td>32.1%</td>
                                <td>14</td>
                                <td>26.4%</td>
                                <td>3</td>
                                <td>5.7%</td>
                            </tr>
                           <tr>
                                <td>合计</td>
                                <td>107</td>
                                <td>107</td>
                                <td>72.97</td>
                                <td>10</td>
                                <td>9.3%</td>
                                <td>22</td>
                                <td>20.6%</td>
                                <td>32</td>
                                <td>29.9%</td>
                               <td>35</td>
                                <td>32.7%</td>
                                <td>8</td>
                                <td>7.5%</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </el-card>
        </div>

 </div>

</template>
<script>
export default {
  data () {
    return {
      radioA: '学生',
      filterText: '', // 过滤词
      items: [], // 角色切换
      baseInfo: [],
      totalLoan: 0,
      btnStudntLists: [],
      btnStudntListAs: [],
      scoreTableData: [
        {
          target_name: '铁道工程技术',
          list: 78,
          score: 3,
          classNum: 12,
          classNum2: 120,
          classNum3: 80,
          classNum4: '否'
        },
        {
          target_name: '高速铁道技术',
          list: 78,
          score: 3,
          classNum: 12,
          classNum2: 160,
          classNum3: 79,
          classNum4: '否'
        },
        {
          target_name: '建筑工程技术',
          list: 86,
          score: 3,
          classNum: 3,
          classNum2: 12,
          classNum3: 79,
          classNum4: '否'
        },
        {
          target_name: '装饰工程技术',
          list: 76,
          score: 2,
          classNum: 12,
          classNum2: 120,
          classNum3: 80,
          classNum4: '否'
        }
      ],
      totalScore: 0,
      loanTableData: [
        {
          target_name: '01',
          time: '助学贷款',
          result_type: '贷款项目',
          classNum: '初始贷款金额',
          classNum2: '初始贷款日期',
          classNum3: 300
        },
        {
          target_name: '01',
          time: '助学贷款',
          result_type: '贷款项目',
          classNum: '初始贷款金额',
          classNum2: '初始贷款日期',
          classNum3: 300
        }
      ],
      scoreInfoTableData: []
    }
  },
  created () {},
  mounted () {
    this.leasonEchartsFn()
    this.passEcharfsFn()
    this.speardEchartsFn()
  },
  methods: {

    //   基本信息
    baseInfoFn () {
      let self = this
      self.$ajax(
        'post',
        self.HOST + '/tr/portrait/web/getPersonInfo',
        {},
        (res) => {
          if (res.success) {
            self.baseInfo = res.data
          } else {
            self.$message({
              message: res.msg,
              type: 'error'
            })
          }
        }
      )
    },
    leasonEchartsFn (leg, data) {
      var option = {
        title: {},
        tooltip: {
          trigger: 'axis'
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
        legend: {
          x: 'right',
          data: ['2013届', '2014届', '2015届', '2016届', '2017届']
        },
        toolbox: {
          show: true,
          feature: {}
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['优秀', '良好', '中等', '及格', '不及格'],
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
            axisLine: {
              lineStyle: {
                color: '#777'
              }
            }
          }
        ],
        series: [
          {
            name: '2013届',
            type: 'bar',
            data: [500, 590, 300, 232, 356]
          },
          {
            name: '2014届',
            type: 'bar',
            data: [606, 509, 350, 364, 487]
          },
          {
            name: '2015届',
            type: 'bar',
            data: [400, 439, 250, 364, 389]
          },
          {
            name: '2016届',
            type: 'bar',
            data: [226, 339, 550, 664, 289]
          },
          {
            name: '2017届',
            type: 'bar',
            data: [326, 339, 350, 264, 489]
          }
        ]
      }

      var myChart = this.$echarts.init(
        document.getElementsByClassName('leasonEcharts')[0]
      )
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },

    // t图书消费情况
    //
    searchInfo () {
      //   请求数据
    },
    getCurrentPageScore () {},

    passEcharfsFn (leg, data) {
      var option = {
        color: ['#70ad47'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['2013届', '2014届', '2015届', '2016届', '2017届'],
            axisTick: {
              alignWithLabel: true
            },
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
              show: true,
              interval: 'auto',
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
            name: '',
            type: 'bar',
            barWidth: '42px',
            data: [10.5, 13, 11, 8, 7.5]
          }
        ]
      }

      var myChart = this.$echarts.init(
        document.getElementsByClassName('passEcharts')[0]
      )
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    speardEchartsFn (leg, data) {
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          x: 'center',
          y: 'bottom',
          data: ['>=90分', '80-90分', '70-80分', '60-70分', '<60分']
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
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 235, name: '>=90分' },
              { value: 400, name: '80-90分' },
              { value: 534, name: '70-80分' },
              { value: 135, name: '60-70分' },
              { value: 54, name: '<60分' }
            ]
          }
        ]
      }

      var myChart = this.$echarts.init(
        document.getElementsByClassName('speardEcharts')[0]
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
.mainContent1 .textTitleNposi {
  color: #37474f;
  font-size: 16px;
  line-height: 24px;
  /* position: absolute;
    left: 20px;
    top: 20px;
    width: 100% */
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
.speardEcharts {
  height: 360px;
}
.passEcharts {
  height: 384px;
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
</style>
