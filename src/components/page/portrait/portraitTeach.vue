<template id="teachContent">
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

          <div class="infoBox marginBto24">
            <el-card class="box-card">
                <el-row :gutter="20" >
                        <el-col :span="6">
                            <div class="infoLeft">
                                <div class="pic"><img src="../../../assets/jiaoshihuaxiang.png" /></div>
                                <p class="name">李可 </p>
                                <p class="num">工号 201615851452</p>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <!-- <div v-for="(infoList, index) in infoLists" :key="index">
                                <div v-for="(dataItem,index1) in infoList">
                                    <div class="item">  </div>
                                </div>
                            </div> -->
                            <div class="infoList">
                                <ul class="clearfix">
                                    <li><span>职称：</span> 副高级</li>
                                    <li><span>学位：</span>学士</li>
                                    <li><span>政治面貌：</span>群众</li>
                                </ul>
                                <ul class="clearfix">
                                    <li><span>籍贯： </span>河南省洛阳市</li>
                                    <li><span>学历：</span>本科生</li>
                                    <li><span>民族：</span>汉</li>
                                 </ul>
                                 <ul class="clearfix">
                                    <li><span>状态： </span>在职</li>
                                    <li><span>任职时间： </span>20090202-至今</li>
                                    <li><span>出生日期：</span>1975-08-11</li>
                                 </ul>
                                 <ul class="clearfix">
                                    <li><span>编制：</span>正式</li>
                                    <li><span>工作年限： </span>9</li>
                                    <li><span>身份证号：</span> 411***********152x</li>
                                 </ul>
                                <ul class="clearfix">
                                    <li><span>所在部门：</span>信息技术类</li>
                                 </ul>
                            </div>
                        </el-col>
                </el-row>
            </el-card>
         </div>

        <div class="showInfo">
            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="showInfoList">
                          <el-row :gutter="20">
                            <el-col :span="8">
                                <div class="showInfoItem1">
                                 <el-card class="box-card">
                                     <p class="num">3</p>
                                     <p class="name">课程数量(个)</p>
                                 </el-card>
                                </div>
                            </el-col>
                             <el-col :span="8">
                                 <div class="showInfoItem2">
                                  <el-card class="box-card">
                                     <p class="num">90</p>
                                    <p class="name">学生数(个)</p>
                                 </el-card>
                                 </div>
                            </el-col>
                              <el-col :span="8">
                                   <div class="showInfoItem3">
                                  <el-card class="box-card">
                                     <p class="num">3</p>
                                    <p class="name">班级数(个)</p>
                                 </el-card>
                                  </div>
                            </el-col>
                              <el-col :span="8">
                                   <div class="showInfoItem4">
                                 <el-card class="box-card">
                                     <p class="num">208</p>
                                     <p class="name">课时量(个)</p>
                                 </el-card>
                                 </div>
                            </el-col>
                             <el-col :span="8">
                                    <div class="showInfoItem5">
                                  <el-card class="box-card">
                                     <p class="num">9</p>
                                    <p class="name">周课时(个)</p>
                                 </el-card>
                                 </div>
                            </el-col>
                              <el-col :span="8">
                                <div class="showInfoItem6">
                                  <el-card class="box-card">
                                     <p class="num">16</p>
                                    <p class="name">课堂活动数(个)</p>
                                 </el-card>
                                   </div>
                            </el-col>
                                 <el-col :span="8">
                                        <div class="showInfoItem7">
                                  <el-card class="box-card">
                                     <p class="num">99.55</p>
                                    <p class="name">历来考试通过率(%)</p>
                                 </el-card>
                                 </div>
                            </el-col>
                              <el-col :span="16">
                                     <div class="showInfoItem8">
                                  <el-card class="box-card">
                                     <p class="num">90.83</p>
                                    <p class="name">签到率（%）处于中等水平</p>
                                 </el-card>
                                 </div>
                            </el-col>
                          </el-row >
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="showInfoPic">
                        <div class="titleName">综合评价</div>
                         <el-card class="box-card">
                             <div class="textTitle">本年度能力</div>
                             <div class="yearCapacity"></div>
                         </el-card>
                    </div>
                </el-col>
          </el-row>
        </div>

    <div class="sorePicBox marginBto24">
            <el-row :gutter="20">
                <el-col :span="12">
                   <div class="showInfoPic">
                         <el-card class="box-card">
                             <div class="textTitle">得分</div>
                             <div class="soreTeachPicEcharts"></div>
                         </el-card>
                    </div>
                </el-col>
                <el-col :span="12">
               <div class="soreTable">
                    <el-card class="box-card">
                        <!-- <el-table :data="teachScoreTableData"  style="width: 100%"  key="101">
                          <el-table-column  prop="name" label="类别"  align="center"> </el-table-column>
                            <el-table-column  prop="score"  label="教职工得分"  align="center"></el-table-column>
                            <el-table-column prop="scoreA"  label="同部门教职工得分"  align="center"> </el-table-column>
                        </el-table> -->
                        <table class="special_table" width="100%">
                          <thead>
                            <tr>
                            <th align="left">类别</th>
                            <th align="center">教职工得分</th>
                            <th align="center">同部门教职工得分</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item, index) in teachScoreTableData" :key="index">
                            <td>{{item.name}}</td>
                            <td align="center">{{item.score}}</td>
                            <td align="center">{{item.scoreA}}</td>
                            </tr>
                          </tbody>
                        </table>
                        <el-pagination background  layout="prev, pager, next"  :total="totalScore" v-show="totalScore" style="margin-top: 10px"  @current-change = "getCurrentPageScore">
                        </el-pagination>
                    </el-card>
                </div>
                </el-col>
          </el-row>
        </div>

        <div class="teachBox  marginBto24">
            <div class=""><span class="marginR15 titleName">教学 </span>
                 <el-select v-model="teachSelect" filterable placeholder="请选择" style="margin-bottom:15px">
                    <el-option
                    v-for="item in teachSelectoptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
             <el-row :gutter="20">
                <el-col :span="12">
                    <div class="coursePic">
                        <el-card class="box-card">
                            <div class="textTitle">授课满意度</div>
                            <div class="teachDegreeEcharts"></div>
                        </el-card>
                    </div>
                    <div class="showInfoList">
                         <el-row :gutter="20">
                           <el-col :span="8">
                                    <div class="showInfoItem3">
                                  <el-card class="box-card">
                                     <p class="num">90.5</p>
                                    <p class="name">本学期满意度</p>
                                 </el-card>
                                 </div>
                            </el-col>
                              <el-col :span="8">
                                <div class="showInfoItem2">
                                  <el-card class="box-card">
                                     <p class="num">90</p>
                                    <p class="name">上学期满意度</p>
                                 </el-card>
                                   </div>
                            </el-col>
                                 <el-col :span="8">
                                        <div class="showInfoItem7">
                                  <el-card class="box-card">
                                     <p class="num">9</p>
                                    <p class="name">排名趋势</p>
                                 </el-card>
                                 </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="teachTOP">
                         <el-card class="box-card">
                            <div class="textTitle">授课满意度月度TOP5</div>
                            <div class="topList">
                                <div class="topListItem clearfix ">
                                    <span class="number">1</span>
                                    <span class="topName">王文静</span>
                                    <span class="month">11月</span>
                                </div>
                                 <div class="topListItem clearfix ">
                                    <span class="number">2</span>
                                    <span class="topName">李奎</span>
                                    <span class="month">10月</span>
                                </div>
                                 <div class="topListItem clearfix ">
                                    <span class="number">3</span>
                                    <span class="topName">王小红</span>
                                    <span class="month">9月</span>
                                </div>
                                 <div class="topListItem clearfix ">
                                    <span class="number">4</span>
                                    <span class="topName">张白</span>
                                    <span class="month">8月</span>
                                </div>
                                  <div class="topListItem clearfix ">
                                    <span class="number">5</span>
                                    <span class="topName">李彦</span>
                                    <span class="month">7月</span>
                                </div>
                            </div>
                        </el-card>
                    </div>
                </el-col>
                 <el-col :span="12">
                      <div class="teachPic teachPicCard">
                         <el-card class="box-card">
                             <div class="textTitle">教学工作量</div>
                             <div class="teachWorkEcharts"></div>
                         </el-card>
                    </div>
                    <div class="teachPic teachPicCardA">
                         <el-card class="box-card">
                             <div class="textTitle">学期教学工作量</div>
                             <div class="WorkEcharts"></div>
                         </el-card>
                    </div>
                 </el-col>
              </el-row>
        </div>

       <div class="Loan marginBto24">
             <el-card class="box-card">
                <div class="textTitle">个人教学能力评价情况</div>
                <div class="portraitTable">
                  <el-table :data="teachLoanTableData"  style="width: 100%">
                       <el-table-column  prop="target_name" label="指标"  align="left"> </el-table-column>
                        <el-table-column  prop="time"  label="个人指标"  align="center"></el-table-column>
                        <el-table-column  label="相比去年"  align="center">
                            <template slot-scope="scope">
                                    <span
                                    class="span_state"
                                    :class="scope.row.styleName"
                                    >{{scope.row.result_type}}</span>
                                </template>
                         </el-table-column>
                        <el-table-column prop="num"  label="全校该等级及以上教师人数"  align="center"> </el-table-column>

                    </el-table>

                    <!-- <el-pagination background  layout="prev, pager, next"  :total="totalLoan" v-show="totalLoan" style="margin-top: 10px"  @current-change = "getCurrentPageLoan">
                    </el-pagination> -->
                </div>
            </el-card>
        </div>

         <div class="sorePicBox marginBto24">
            <el-row :gutter="20">
                <el-col :span="12">
                      <div class="showPicBox showPicBoxA showPicBoxNBorder showPicBoxNoPadd ">
                            <!-- <el-card  class="box-card"> -->
                           <el-row >
                                    <el-col :span="8">
                                            <div class="xqItem xqItemA boxShow">
                                                <p class="num">85</p>
                                                <p><i class="iconfont">&#xe680;</i></p>
                                                <p>科研总分</p>
                                            </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="xqItem boxShow">
                                            <p class="num">100</p>
                                            <p><i class="iconfont">&#xe680;</i></p>
                                            <p>标准分</p>
                                        </div>
                                    </el-col>
                                    <el-col :span="8">
                                        <div class="xqItem xqItemB boxShow">
                                            <p class="num">87</p>
                                            <p><i class="iconfont">&#xe680;</i></p>
                                            <p>专业大类平均分</p>
                                        </div>
                                    </el-col>
                                 </el-row>
                            <!-- </el-card> -->

                            <div class="schoolContent">
                                    <el-row :gutter="20">
                                    <el-col :span="12">
                                         <!-- <el-card  class="box-card"> -->
                                        <div class="schoolBox boxShow">
                                            <p class="title">
                                               <span class="round"> <i class="iconfont">&#xe627;</i></span>
                                                专业大类排名</p>
                                            <p class="number">32</p>
                                            <p class="text">相比上年度提高3名</p>
                                        </div>
                                         <!-- </el-card> -->
                                        </el-col>
                                        <el-col :span="12">
                                             <!-- <el-card  class="box-card"> -->
                                            <div class="schoolBox schoolBoxA boxShow">
                                                <p class="title">
                                                     <span class="round"> <i class="iconfont">&#xe627;</i></span>全校排名</p>
                                                <p class="number">232</p>
                                                <p class="text">相比上年度提高17名</p>
                                            </div>
                                             <!-- </el-card> -->
                                        </el-col>

                                </el-row>
                            </div>

                      </div>
                </el-col>
                <el-col :span="12">
                   <div class="showInfoPic">
                         <el-card class="box-card">
                             <div class="textTitle">科研能力对比</div>
                             <div class="scientEcharts"></div>
                         </el-card>
                    </div>
                </el-col>
          </el-row>
        </div>

        <div class="showCard marginBto24">
             <el-card class="box-card">
               <ul class="clearfix">
                    <li>
                        <p class="name">鉴定成果数</p>
                         <p class="number"><span>3</span>相比上年度：-33%</p>
                    </li>
                     <li>
                        <p class="name">成果获奖数</p>
                         <p class="number"><span>2</span>相比上年度：持平</p>
                    </li>
                     <li>
                         <p class="name">科研项目数</p>
                         <p class="number"><span>5</span>相比上年度：-20%</p>
                    </li>
                     <li>
                         <p class="name">科研论文数</p>
                         <p class="number"><span>8</span>相比上年度：12.5%</p>
                    </li>
                     <li>
                        <p class="name">专利数</p>
                         <p class="number"><span>0</span>相比上年度：持平</p>
                    </li>
                     <li>
                        <p class="name">著作数</p>
                         <p class="number"><span>1</span>相比上年度：持平</p>
                    </li>
                     <li>
                        <p class="name">软件著作权数</p>
                         <p class="number"><span>0</span>相比上年度：持平</p>
                    </li>
                     <li>
                        <p class="name">美术作品数</p>
                         <p class="number"><span>0</span>相比上年度：持平</p>
                    </li>
                     <li>
                        <p class="name">音乐作品数</p>
                         <p class="number"><span>0</span>相比上年度：持平</p>
                    </li>
                </ul>
            </el-card>
        </div>

         <!-- <div class="salaryPic">
             <div class="titleName">薪资</div>
                <el-card class="box-card">
                    <div class="salaryEcharts"></div>
                </el-card>
        </div> -->

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
      loanTableData: [],
      teachScoreTableData: [
        {
          name: '考勤情况',
          score: 6.88,
          scoreA: 8.49
        }, {
          name: '课堂活跃度',
          score: 4.03,
          scoreA: 5.42
        }, {
          name: '学习活跃度',
          score: 5.04,
          scoreA: 2.74
        }, {
          name: '教学评价',
          score: 5.11,
          scoreA: 5.57
        }, {
          name: '成绩评价',
          score: 2.85,
          scoreA: 4.25
        }, {
          name: '课程建设',
          score: 1.45,
          scoreA: 2.01
        }, {
          name: '学生掌握程度',
          score: 3.04,
          scoreA: 5.28
        }, {
          name: '教师课后辅导',
          score: 1.74,
          scoreA: 3.04
        }, {
          name: '科研及创新能力',
          score: 0.02,
          scoreA: 0.27
        }
      ],
      teachSelect: [],
      teachSelectoptions: [
        {
          value: 1,
          label: '2016-2017学年第一学期'
        }
        // {
        //   value: 2,
        //   label: '2016-2017学年第二学期'
        // },
        // {
        //   value: 3,
        //   label: '2015-2016学年第一学期'
        // },
        // {
        //   value: 4,
        //   label: '2015-2016学年第二学期'
        // },
        // {
        //   value: 5,
        //   label: '2014-2015学年第一学期'
        // },
        // {
        //   value: 6,
        //   label: '2014-2015学年第二学期'
        // }
      ],
      teachLoanTableData: [

      ],
      resultTypeObj: {
        '上升': 'style_three',
        '下降': 'style_one'
      }
    }
  },
  created () {

  },
  mounted () {
    this.yearCapacityOptionsFn()
    this.sorePicOptionsFn()
    this.teachDegreeEcharts()
    this.teachWorkEchartsfn()
    this.WorkEchartsFn()
    this.teachLoanTableDataFn()
    this.scientEchartsOptionsFn()
    this.salaryOptionFn()
  },
  methods: {
    searchInfo: function () {
      this.getZiZhi(this.deptId, 30, this.currentP, this.filterText)
    },
    // 图表学习成绩
    yearCapacityOptionsFn (leg, data, index) {
      var option = {
        title: {
          // text: '基础雷达图'
        },
        tooltip: {},
        grid: {
          left: '6%',
          right: '6%',
          bottom: '8%'
          // containLabel: true
        },
        legend: {
          left: 'right',
          data: ['自己', '同部门', '全体教师']
        },
        color: ['#70ad47', '#ed7d31', '#ffc000', '#4472c4', '#a5a5a5', '#dd6969', '#00a6a6'],
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
            { name: '教学能力', max: 5},
            { name: '科研能力', max: 5},
            { name: '学生管理与服务能力', max: 5},
            { name: '综合成长能力', max: 5}
          ]
        },
        series: [{
          name: '',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [4.1, 3.6, 2.7, 3.9],
              name: '自己',
              lineStyle: {
                color: '#70ad47'
              }
            },
            {
              value: [3.8, 3.3, 3.1, 3.5],
              name: '同部门',
              lineStyle: {
                color: '#ed7d31'
              }
            },
            {
              value: [3.6, 3.3, 2.5, 3.0],
              name: '全体教师',
              lineStyle: {
                color: '#ffc000'
              }
            }
          ]
        }]
      }
      var myChart = this.$echarts.init(document.getElementsByClassName('yearCapacity')[0])
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    // 图表学习成绩
    sorePicOptionsFn (leg, data, index) {
      var option = {
        title: {
          // text: '基础雷达图'
        },
        tooltip: {},
        legend: {
          left: 'right',
          data: ['教职工', '同部门教师']
        },
        color: ['#70ad47', '#ed7d31', '#ffc000', '#4472c4', '#a5a5a5', '#dd6969', '#00a6a6'],
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
          // grid: { // 控制图的大小，调整下面这些值就可以，
          //     x: 15,
          //     x2: 100,
          //     y2: 150// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
          // },
          // calculable : true,
          indicator: [
            { name: '考勤情况', max: 10},
            { name: '课堂活跃度', max: 10},
            { name: '学习活跃度', max: 10},
            { name: '教学评价', max: 10},
            { name: '成绩评价', max: 10},
            { name: '课程建设', max: 10},
            { name: '学生掌握程度', max: 10},
            { name: '教师课后辅导', max: 10},
            { name: '科研及创新能力', max: 10}
          ]
        },
        series: [{
          name: '',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [8.49, 5.42, 2.74, 5.57, 4.25, 2.01, 5.28, 3.04, 0.02],
              name: '教职工',
              lineStyle: {
                color: '#70ad47'
              }
            },
            {
              value: [6.88, 4.03, 5.04, 5.11, 2.85, 1.45, 3.04, 1.74, 0.27],
              name: '同部门教师',
              lineStyle: {
                color: '#ed7d31'
              }
            }

          ]
        }]
      }
      var myChart = this.$echarts.init(document.getElementsByClassName('soreTeachPicEcharts')[0])
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    coursePicOptionsFn (leg, data, index) {
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['2015', '2016', '2017']
        },
        toolbox: {
          show: true,
          feature: {
            // mark : {show: true},
            // dataView : {show: true, readOnly: false},
            // magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            // restore : {show: true},
            // saveAsImage : {show: true}
          }
        },
        calculable: true,
        yAxis: [
          {
            type: 'value'
          }
        ],
        xAxis: [
          {
            type: 'category',
            data: ['贷款', '勤工俭学', '助学金', '奖学金', '困难补助', '竞赛奖金', '劳务费']
          }
        ],
        series: [
          {
            name: '2015',
            type: 'bar',
            stack: '总量',
            itemStyle: { normal: {label: {show: true, position: 'insideRight'}}},
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            name: '2016',
            type: 'bar',
            stack: '总量',
            itemStyle: { normal: {label: {show: true, position: 'insideRight'}}},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '2017',
            type: 'bar',
            stack: '总量',
            itemStyle: { normal: {label: {show: true, position: 'insideRight'}}},
            data: [220, 182, 191, 234, 290, 330, 310]
          }

        ]
      }
      var myChart = this.$echarts.init(document.getElementsByClassName('awardEcharts')[0])
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },

    teachEchartsPicOptionsFn (leg, data, index) {
      var option = {
        title: {
          text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      var myChart = this.$echarts.init(document.getElementsByClassName('teachEcharts')[0])
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    teachDegreeEcharts (leg, data, index) {
      var option = {
        title: {
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: '20',
          top: '40',
          data: ['满意率', '中等率', '较差率']
        },
        color: ['#70ad47', '#ffc000', '#ed7d31'],
        series: [
          {
            name: '',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 90.5, name: '满意率'},
              {value: 6.5, name: '中等率'},
              {value: 3, name: '较差率'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0)'
              }
            }
          }
        ]
      }
      var myChart = this.$echarts.init(document.getElementsByClassName('teachDegreeEcharts')[0])
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    teachWorkEchartsfn (leg, data, index) {
      var labelTop1 = {
        normal: {
          color: '#ed7d31',
          label: {
            show: true,

            position: 'bottom',
            formatter: '{b}',
            textStyle: {
              baseline: 'bottom'
            }
          },
          labelLine: {
            show: false
          }
        }
      }
      var labelTop = {
        normal: {
          color: '#70ad47',
          label: {
            show: true,

            position: 'bottom',
            formatter: '{b}',
            textStyle: {
              baseline: 'bottom'
            }
          },
          labelLine: {
            show: false
          }
        }
      }
      var labelFromatter = {
        normal: {
          label: {
            formatter: function (params) {
              return 100 - params.value + '%'
            },
            textStyle: {
              baseline: 'top'
            }
          }
        }
      }
      var labelBottom = {
        normal: {
          color: '#ccc',
          label: {
            show: true,
            position: 'center'
          },
          labelLine: {
            show: false
          }
        },
        emphasis: {
          color: 'rgba(0,0,0,0)'
        }
      }
      var radius = [40, 55]
      var option = {
        legend: {
          x: 'right',
          y: 'top',
          data: [
            '已完成课时', '完成率'
          ]
        },
        title: {

        },
        toolbox: {

        },
        series: [
          {
            type: 'pie',
            center: ['30%', '50%'],
            radius: radius,
            x: '0%', // for funnel
            itemStyle: 300,
            data: [
              {name: 'other', value: 46, itemStyle: labelBottom},
              {name: '已完成课时', value: 54, itemStyle: labelTop1}
            ]
          },
          {
            type: 'pie',
            center: ['70%', '50%'],
            radius: radius,
            x: '20%', // for funnel
            itemStyle: 180,
            data: [
              {name: 'other', value: 56, itemStyle: labelBottom},
              {name: '完成率', value: 44, itemStyle: labelTop}
            ]
          }

        ]
      }

      var myChart = this.$echarts.init(document.getElementsByClassName('teachWorkEcharts')[0])
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    WorkEchartsFn (leg, data, index) {
      var option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {

        },
        toolbox: {
          show: true,
          feature: {

          }
        },
        calculable: true,
        color: ['#70ad47'],
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['第一周', '第二周', '第三周', '第四周', '第五周', '第六周'],
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
            name: '',
            type: 'line',
            stack: '总量',
            data: [160, 240, 230, 134, 90, 230, 210],

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
      var myChart = this.$echarts.init(document.getElementsByClassName('WorkEcharts')[0])
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    teachLoanTableDataFn () {
      let newData = [{
        target_name: '专业建设',
        time: 'A',
        result_type: '上升',
        num: '12'
      }, {
        target_name: '课程建设',
        time: 'A',
        result_type: '上升',
        num: '21'
      }, {
        target_name: '教材建设',
        time: 'B',
        result_type: '下降',
        num: '30'
      }, {
        target_name: '教学工作获奖',
        time: 'B',
        result_type: '下降',
        num: '16'
      }, {
        target_name: '学科竞赛',
        time: 'A',
        result_type: '上升',
        num: '23'
      }
      ]
      for (let item of newData) {
        item.styleName = this.resultTypeObj[item.result_type]
        this.teachLoanTableData.push(item)
      }
    },
    scientEchartsOptionsFn (leg, data, index) {
      var option = {
        title: {
          // text: '基础雷达图'
        },
        tooltip: {},
        legend: {
          left: 'right',
          data: ['同部门', '全体教师']
        },
        color: ['#70ad47', '#ed7d31', '#ffc000', '#4472c4', '#a5a5a5', '#dd6969', '#00a6a6'],
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
            { name: '科研项目', max: 130},
            { name: '科研论文', max: 250},
            { name: '学术著作', max: 300},
            { name: '专利', max: 10}
          ]
        },
        series: [{
          name: '',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [60, 100, 150, 2],
              name: '同部门',
              lineStyle: {
                color: '#70ad47'
              }
            },
            {
              value: [100, 240, 260, 8],
              name: '全体教师',
              lineStyle: {
                color: '#ed7d31'
              }
            }

          ]
        }]
      }
      var myChart = this.$echarts.init(document.getElementsByClassName('scientEcharts')[0])
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    salaryOptionFn (leg, data, index) {
      var option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {

        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          show: true,
          feature: {

          }
        },
        calculable: true,
        color: ['#70ad47'],
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['2017年1月', '2017年2月', '2017年3月', '2017年4月', '2017年5月', '2017年6月', '2017年7月', '2017年8月', '2017年9月', '2017年10月', '2017年11月', '2017年12月'],
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
            name: '',
            type: 'line',
            stack: '总量',
            data: [5120, 4832, 5001, 5134, 6090, 5230, 4910, 8300, 5300, 5101, 4820, 5201],
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
      var myChart = this.$echarts.init(document.getElementsByClassName('salaryEcharts')[0])
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    getCurrentPageScore () {

    },
    getCurrentPageLoan () {

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
  padding:0 1.64%;
}
.marginBto24{
    margin-bottom: 24px;
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
     height: 38px;
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

.marbottom24{
    margin-bottom: 24px;
}
.portraitTable{
    margin-top: 40px
}
.mainContent1 .box-card{
    position: relative;
    min-height: 60px;
    margin-bottom: 0
}
.mainContent1  .textTitle{
     color: #37474f;
    font-size: 16px;
    line-height: 24px;
    position: absolute;
    left: 20px;
    top: 20px;
    width: 100%
 }

.infoBox .infoLeft,
.infoBox .infoList{
     padding: 40px 0;
}
.infoBox .infoList{
     padding-right:28px
}
.infoLeft {
    text-align: center
}
.infoLeft .pic{
    height: 110px;
    margin-bottom: 15px;
}
.infoLeft .pic img{
   display: inline-block;
   height: 100%
}
.infoLeft .name{
    font-size: 20px;
    line-height: 40px;
    color: #444;
}
.infoLeft .num{
    font-size: 14px;
    line-height: 25px;
    color: #999;
}
.infoList ul:nth-child(2n-1){
    background-color: #f7f8f9
}
.infoList li{
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
 .infoList li span{
  display: inline-block;
  padding-right: 5px;
 }

.showInfoList .num{
    font-size: 30px;
    line-height: 52px;
    text-align: center;
    color: #fff
}
.showInfoList .name{
    text-align: center;
    font-size: 12px;
    line-height: 24px;
    white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
    color: #fff
}
.showInfoList .box-card{
    margin-bottom: 20px
}
.showInfoItem1 .box-card{
background-color: #ffc000;
}
.showInfoItem2 .box-card .num,
.showInfoItem4 .box-card .num{
color: #70ad47
}
.showInfoItem2 .box-card .name,
.showInfoItem4 .box-card .name{
color: #999
}
.showInfoItem3 .box-card{
background-color: #70ad47;
}
.showInfoItem5 .box-card{
background-color: #a6a6a6;
}
.showInfoItem6 .box-card{
    background-color: #4472c4;
    color: #4472c4
}
.showInfoItem7 .box-card{
    background-color: #ed7d31;
}
.showInfoItem8 .box-card{
    background-color: #5b9bd5;
}
.mainContent1 .titleName{
    line-height: 18px;
    font-size: 16px;
    color: #37474f;
    padding-left: 10px;
    border-left: 5px solid #70ad47;
    margin-bottom: 15px;
}
.topList{
    padding-top: 40px
}
.topListItem {
    margin-bottom: 8px;
}
.topListItem .number{
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
.topListItem .topName{
    margin-left:18px;
    float:left;
    width: 70%;
    display: block;
    line-height: 32px;
    color: #37474f;
    padding-left: 24px;
    font-size: 14px;
    background-color: #f5f8fa

}
.topListItem .month{
    float: right;
    padding-right: 25px;
    line-height: 32px;
    color: #76838f;
    font-size: 12px;
    vertical-align: middle;
}
.yearCapacity{
    height: 342px;
}
.teachDegreeEcharts{
    height: 317px;
}
.soreTeachPicEcharts{
    height: 480px;
}
.marginR15{
    margin-right: 16px;
}
.showInfoList{
    margin-top: 24px
}
.teachPicCard{
    height: 359px;
}
 .teachWorkEcharts{
    height: 317px;
}
.teachPicCardA .WorkEcharts{
    height: 378px;
}
.scientEcharts{
    height: 334px;
}
.teachPicCard{
    margin-bottom: 24px;
}
.style_one {
  background: #ffc000;
}

.style_three {
  background: #70ad47;
}

.span_state {
  color: #fff;
  display: inline-block;
  height: 22px;
  line-height: 22px;
  line-height: 22px;
  border-radius: 11px;
  padding: 0 10px;
  font-size: 12px;
}
.showPicBox .xqItem{
    /* padding-top: 35px; */
    height: 172px;
    text-align: center;
    border-right: 1px solid #e4eaec;
    background-color: #fff
}
.showPicBox .xqItem p{
    font-size: 14px;
    color:#a3afb7;
    line-height: 24px;
}
.showPicBox .xqItem p .iconfont{
    font-size: 23px;
    color: #c6d9c3;
    line-height: 50px;
}
.showPicBox .xqItem .num{
    padding-top: 35px;
    line-height: 38px;
    text-align: center;
    font-size: 30px;
    color: #526069
}
.showPicBox .xqItemA{
    background-color: #70ad47
}
.showPicBox .xqItemA .num,
.showPicBox .xqItemA p{
   color: #fff
}
.showPicBox .xqItemB {
    border-right: none;
}

.showPicBoxNoPadd .boxShow{
  position: relative;
  box-shadow: none
}
.showPicBoxNoPadd .boxShow:hover{
  z-index: 2;
  /* -moz-box-shadow:4px 10px 20px #BDBDBD;
   -webkit-box-shadow:4px 10px 14px #BDBDBD;
    box-shadow:4px 10px 14px #BDBDBD; */
   -webkit-box-shadow: 0 5px 30px rgba(0,0,0,0.1);
  box-shadow: 0 5px 30px rgba(0,0,0,0.1);
  -webkit-transform: translate3d(0,-2px,0);
  transform: translate3d(0,-2px,0)
}
.showPicBoxA .el-card__body{
    padding: 0
}
.schoolBox{
    padding: 27px 10px 27px 25px;
    background-color:#ee8239
}
.schoolBox .title{
    font-size: 12px;
    color: #fff;
    line-height: 48px;
}
.schoolBox .number{
    font-size:30px;
    color:#fff;
    line-height: 50px;
    padding-left: 40px;
}
.schoolBox .text{
    line-height: 32px;
    color: #fff;
     padding-left: 40px;
}
.schoolBoxA{
    background-color:#5b9bd5
}

.schoolBox .round{
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center;
    border-radius: 50%;
    background-color: #f6a670;
     /* margin-right: 20px */
}
.schoolBox .iconfont{
   font-size: 20px;
   line-height: 40px;

}
.schoolBoxA .round{
     background-color:#89b8e2

}
.schoolContent{
    padding-top: 20px
}
.salaryEcharts{
    height: 380px;
}
.showCard .el-card__body{
    padding: 0
}
.showCard li{
     float: left;
     width: 19.8%;
     height: 130px;
     text-align: left;
     border-right: 1px solid #e4eaec;
     border-bottom: 1px solid #e4eaec
}
.showCard li p{
     padding: 0 5%;
     padding-left: 15%;
     /* text-align: center */
}
.showCard li:nth-child(5n){
       border-right:none;
}
.showCard li .name{
    font-size: 13px;
    line-height: 22px;
    padding-top: 34px;
    color: #76838f
}
.showCard li span{
    font-size: 30px;
    padding-right: 10px;
    color: #70ad47
}
.showCard li .number{
    font-size: 12px;
    color: #a3afb7
}
.showCard li:nth-child(2) span{
    color: #ee8239
}
.showCard li:nth-child(3) span{
    color: #ffc000
}
.showCard li:nth-child(4) span{
    color: #4472c4
}
.showCard li:nth-child(5) span{
    color: #dd6969
}
.showCard li:nth-child(6) span{
    color: #5b9bd5
}
.showCard li:nth-child(7) span{
    color: #00a6a6
}
.showCard li:nth-child(8) span{
    color: #6c6fbf
}
.showCard li:nth-child(9) span{
    color: #ffb980
}
.soreTable .el-card{
    height: 520px;

}
.soreTable  .el-table,.soreTable .el-table th ,
.portraitTable  .el-table,.portraitTable .el-table th{
    text-align: center
}
.soreTable  .el-table .cell,
.portraitTable .el-table .cell{
    line-height: 32px;
}
.showPicBoxNBorder .box-card{
margin-bottom: 0
}
/* .showPicBoxNoPadd .el-card__body{
  padding: 0px
} */
#teachContent .box-card{
margin-bottom: 0
}
.mainContentA  .schoolBoxA{
padding: 27px 10px 27px 25px;
}

</style>
