<template id="mainPortrain">
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

       <div class="infoBox marginBto24">
            <el-card class="box-card" :data="baseInfo">
                <el-row :gutter="20" >
                        <el-col :span="6">
                            <div class="infoLeft">
                                <img src="../../../assets/xueshenghuaxiang.png" />

                                <p class="name">张树楠
                                    <!-- {{baseInfo.xm}}  -->
                                    </p>
                                <p class="num">学号 20170210125
                                    <!-- {{baseInfo.zgh}} -->
                                    </p>
                            </div>
                        </el-col>
                        <el-col :span="18">
                            <div class="infoList">
                                <ul class="clearfix">
                                    <li><span>培养层次：</span>中职
                                    <!-- {{baseInfo.xldmmc}} -->
                                    </li>
                                    <li><span>学制：</span>3年
                                    <!-- {{baseInfo.xz}} -->
                                    </li>
                                    <li><span>政治面貌：</span>团员
                                    <!-- {{baseInfo.zzmmdmmc}} -->
                                    </li>
                                </ul>
                                <ul class="clearfix">
                                    <li><span>学籍状态： </span>在籍
                                    <!-- {{baseInfo.xjzt}} -->
                                    </li>
                                    <li><span>学生状态：</span>在校
                                    <!-- {{baseInfo.xsztmc}} -->
                                    </li>
                                    <li><span>民族：</span>汉
                                    <!-- {{baseInfo.mzdmmc}} -->
                                    </li>
                                    </ul>
                                    <ul class="clearfix">
                                    <li><span>学习方式：</span>全日制
                                    <!-- {{baseInfo.xxfsdmmc}} -->
                                    </li>
                                    <li><span>学习形式：</span>中等职业教育
                                    <!-- {{baseInfo.xxxsdmmc}} -->
                                    </li>
                                    <li><span>出生日期：</span>1998-10-06
                                    <!-- {{baseInfo.csrq}} -->
                                    </li>
                                    </ul>
                                    <ul class="clearfix">
                                    <li><span>就读年级：</span>一年级
                                    <!-- {{baseInfo.jdnj}} -->
                                    </li>
                                    <li><span>专业大类： </span>信息技术类
                                    <!-- {{baseInfo.yxdmmc}} -->
                                    </li>
                                    <li><span>身份证号：</span>411******21
                                    <!-- {{baseInfo.sfzh}} -->
                                    </li>
                                    </ul>
                                <ul class="clearfix">
                                    <li><span>专业：</span>计算机平面设计
                                    <!-- {{baseInfo.zgh}} -->
                                    </li>
                                    <li><span>班级：</span>计算机平面设计 17-02
                                    <!-- {{baseInfo.zydmmc}} -->
                                    </li>
                                    <li><span>籍贯：</span>河南省开封市
                                    <!-- {{baseInfo.jgdmmc}} -->
                                    </li>
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
                             <div class="textTitle">我与学霸的差距</div>
                             <div class="contentEcharts"></div>
                         </el-card>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="studntTable">
                         <el-card class="box-card">
                             <div class="btnStudntGroup clearfix">
                                 <div class="btnStudntList">
                                     <div class="btn">班级成绩前五名</div>
                                     <!-- <div v-for="(btnStudntList, index) in btnStudntLists" :key="index">
                                         <div class="list">{{btnStudntList.name}}</div>
                                     </div> -->
                                     <div class="list">
                                         <span>1</span>
                                          <span>廖思旺</span>
                                    </div>
                                    <div class="list">
                                         <span>2</span>
                                          <span>蒋与甜</span>
                                    </div>
                                      <div class="list">
                                         <span>3</span>
                                          <span>陈小芳</span>
                                    </div>
                                    <div class="list">
                                         <span>4</span>
                                          <span>朱明杰</span>
                                    </div>
                                    <div class="list">
                                         <span>5</span>
                                          <span>姚力</span>
                                    </div>
                                 </div>
                                  <div class="btnStudntList btnStudntListA">
                                       <div class="btn">班级成绩后五名</div>
                                        <!-- <div v-for="(btnStudntListA, index) in btnStudntListAs" :key="index">
                                          <div class="list">{{btnStudntListA.name}}</div>
                                       </div> -->
                                        <div class="list">
                                         <span>49</span>
                                          <span>王得林</span>
                                        </div>
                                        <div class="list">
                                            <span>48</span>
                                            <span>张翰林</span>
                                        </div>
                                        <div class="list">
                                            <span>47</span>
                                            <span>温鑫</span>
                                        </div>
                                        <div class="list">
                                            <span>46</span>
                                            <span>罗金</span>
                                        </div>
                                        <div class="list">
                                            <span>45</span>
                                            <span>何明科</span>
                                        </div>

                                  </div>
                             </div>
                         </el-card>
                    </div>
                </el-col>
          </el-row>
        </div>

        <div class="score marginBto24">
             <el-card class="box-card">
                <div class="textTitle">成绩信息</div>
               <div class="portraitTable">
                  <!-- <el-table :data="scoreTableData" class="tableFlex"  style="width: 100%">
                       <el-table-column  prop="target_name" label="科目" align="center"> </el-table-column>
                        <el-table-column  prop="list"  label="课程成绩" align="center"></el-table-column>
                        <el-table-column prop="score"  label="学分" align="center"> </el-table-column>
                        <el-table-column prop="classNum"  label="班级排名" align="center"> </el-table-column>
                        <el-table-column prop="classNum2"  label="专业排名" align="center"> </el-table-column>
                        <el-table-column prop="classNum3"  label="专业平均分" align="center"> </el-table-column>
                        <el-table-column prop="classNum4"  label="是否重修" align="center"> </el-table-column>
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
                            <td>{{item.target_name}}</td>
                            <td align="center">{{item.list}}</td>
                            <td align="center">{{item.score}}</td>
                            <td align="center">{{item.classNum}}</td>
                            <td align="center">{{item.classNum2}}</td>
                            <td align="center">{{item.classNum3}}</td>
                            <td align="center">{{item.classNum4}}</td>
                            </tr>
                          </tbody>
                        </table>
                    <!-- <el-pagination background  layout="prev, pager, next"  :total="totalScore" v-show="totalScore" style="margin-top: 10px"  @current-change = "getCurrentPageScore">
                    </el-pagination> -->
                </div>
            </el-card>
        </div>

         <div class="picGroup marginBto24">
            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="personPic">
                         <el-card class="box-card">
                             <div class="textTitle">个人历史成绩分析</div>
                             <div class="personEcharts"></div>
                         </el-card>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="awardPic">
                         <el-card class="box-card">
                             <div class="textTitle">奖励困补及贷款统计</div>
                             <div class="awardEcharts"></div>
                         </el-card>
                    </div>
                </el-col>
          </el-row>
        </div>

       <div class="Loan marginBto24">
             <el-card class="box-card">
                <div class="textTitle">贷款明细</div>
                <div class="portraitTable">
                  <!-- <el-table :data="loanTableData" class="tableFlex" style="width: 100%">
                       <el-table-column  prop="target_name" label="序号" align="center"> </el-table-column>
                        <el-table-column  prop="time"  label="贷款类别" align="center"></el-table-column>
                        <el-table-column prop="result_type"  label="贷款项目" align="center"> </el-table-column>
                        <el-table-column prop="classNum"  label="初始贷款金额" align="center"> </el-table-column>
                        <el-table-column prop="classNum2"  label="初始借贷日期" align="center"> </el-table-column>
                        <el-table-column prop="classNum3"  label="金额" align="center"> </el-table-column>
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
                            <tr v-for="(item, index) in loanTableData" :key="index">
                            <td align="center">{{item.target_name}}</td>
                            <td align="center">{{item.time}}</td>
                            <td align="center">{{item.result_type}}</td>
                            <td align="center">{{item.classNum}}</td>
                            <td align="center">{{item.classNum2}}</td>
                            <td align="center">{{item.classNum3}}</td>
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
                                <div class="bookEcharts"></div>
                            </el-card>
                    </div>
                </el-col>
                <el-col :span="16">
                    <div class="awardPic clearfix">
                            <el-card class="box-card">
                                <div class="textTitle">一卡通消费
                                    <p class="num">
                                        本月消费<span>90</span>元，余额<span>10</span>元，充值<span>100</span>元
                                    </p>
                                </div>
                                <div class="clearfix">
                                    <div class="width50">
                                        <div class="RechargeEcharts"></div>
                                    </div>
                                    <div class="width50">
                                        <div class="consumeEcharts"></div>
                                    </div>
                                </div>

                            </el-card>
                    </div>
                </el-col>
            </el-row>
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
          target_name: '计算机应用',
          list: 78,
          score: 3,
          classNum: 12,
          classNum2: 120,
          classNum3: 80,
          classNum4: '否'
        },
        {
          target_name: '电子商务',
          list: 80,
          score: 2,
          classNum: 21,
          classNum2: 160,
          classNum3: 79,
          classNum4: '否'
        },
        {
          target_name: '计算机平面设计',
          list: 86,
          score: 3,
          classNum: 3,
          classNum2: 32,
          classNum3: 80,
          classNum4: '否'
        },
        {
          target_name: '计算机动漫与游戏制作',
          list: 76,
          score: 2,
          classNum: 12,
          classNum2: 36,
          classNum3: 80,
          classNum4: '否'
        }
      ],
      totalScore: 0,
      loanTableData: [
        {
          target_name: '01',
          time: '助学贷款',
          result_type: '缴纳学费',
          classNum: '6000元',
          classNum2: '2017年9月',
          classNum3: '3000元'
        },
        {
          target_name: '02',
          time: '助学贷款',
          result_type: '缴纳学费',
          classNum: '8000元',
          classNum2: '2017年9月',
          classNum3: '2000元'
        }
      ]
    }
  },
  created () {},
  mounted () {
    //   this.baseInfoFn();
    this.baseInfoFn()
    this.RechargeEchartsFn()
    this.studentOptionsFn()
    this.personPicOptionsFn()
    this.awardPicOptionsFn()
    this.RechargeOptionsFn()
    this.consumeOptionsFn()
    this.bookPicOptionsFn()
  },
  methods: {
    //    身份切换
    //   基本信息
    baseInfoFn () {
      //    let self = this;
      //    self.$ajax('post', self.HOST + '/tr/portrait/web/getPersonInfo',{}, (res) => {
      //         if (res.success) {
      //             self.baseInfo=res.data;
      //         } else {
      //           self.$message({
      //             message: res.msg,
      //             type: 'error'
      //             })
      //         }
      //     })
    },
    // t图书消费情况
    //
    RechargeEchartsFn: function () {
      // let self = this;
      // let data={
      //     pageNumber : 1,
      //     pageSize : 10
      // }
      // self.$ajax('post', self.HOST + '/tr/portrait/web/getGrjy',data, (res) => {
      //         if (res.success) {
      //          console.log(res)
      //          let leg=[];
      //          let data=[];
      //          self.RechargeOptionsFn(leg,data)
      //         } else {
      //         self.$message({
      //             message: res.msg,
      //             type: 'error'
      //             })
      //         }
      //     })
    },
    searchInfo: function () {
      //   请求数据
    },
    // 图表学习成绩
    studentOptionsFn (leg, data, index) {
      var option = {
        tooltip: {},
        legend: {
          x: 'right',
          y: 'top',
          data: ['学霸', '在校学生']
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
            { name: '成绩', max: 98 },
            { name: '借书量', max: 87 },
            { name: '图书馆进出次数', max: 76 },
            { name: '早餐次数', max: 65 },
            { name: '早起次数', max: 54 }
          ]
        },
        series: [
          {
            // name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
              {
                value: [98, 87, 76, 65, 54],
                name: '学霸',
                lineStyle: {
                  color: '#70ad47'
                }
              },
              {
                value: [87, 76, 65, 54, 43],
                name: '在校学生',
                lineStyle: {
                  color: '#ed7d31'
                }
              }
            ]
          }
        ]
      }

      var myChart = this.$echarts.init(
        document.getElementsByClassName('contentEcharts')[0]
      )
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    personPicOptionsFn (leg, data, index) {
      var option = {
        title: {
          // text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          x: 'right',
          y: 'top',
          data: ['个人平均成绩', '专业平均成绩']
        },
        grid: {
          left: '6%',
          right: '6%',
          bottom: '8%'
          // containLabel: true
        },
        toolbox: {
          feature: {
            // saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [
            '一年级上学期',
            '一年级下学期',
            '二年级上学期',
            '二年级上学期',
            '三年级上学期',
            '三年级下学期'
          ],
          axisLine: {
            lineStyle: {
              color: '#777'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#777'
            }
          }
        },
        series: [
          {
            name: '个人平均成绩',
            type: 'line',
            // stack: '总量',
            color: '#70ad47',
            data: [70, 55, 86, 48, 70, 80],
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 4,
                  type: 'solid' // 'dotted'虚线 'solid'实线
                }
              }
            }
          },
          {
            name: '专业平均成绩',
            type: 'line',
            color: '#ed7d31',
            // stack: '总量',
            data: [80, 77, 68, 80, 84, 79],
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
        document.getElementsByClassName('personEcharts')[0]
      )
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    awardPicOptionsFn (leg, data, index) {
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '6%',
          right: '6%',
          bottom: '8%'
          // containLabel: true
        },
        legend: {
          right: 0,
          data: ['2015', '2016', '2017']
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
        calculable: true,
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
        xAxis: [
          {
            type: 'category',
            data: [
              '贷款',
              '勤工俭学',
              '助学金',
              '奖学金',
              '困难补助',
              '竞赛奖金',
              '劳务费'
            ],
            axisLine: {
              lineStyle: {
                color: '#777'
              }
            }
          }
        ],
        series: [
          {
            name: '2015',
            type: 'bar',
            stack: '总量',
            barWidth: 32, // 柱图宽度
            itemStyle: {
              normal: { label: { show: true, position: 'insideRight' } }
            },
            data: [3200, 3020, 3001, 3340, 3900, 3300, 3200]
          },
          {
            name: '2016',
            type: 'bar',
            stack: '总量',
            barWidth: 32, // 柱图宽度
            itemStyle: {
              normal: { label: { show: true, position: 'insideRight' } }
            },
            data: [1200, 1320, 1010, 1340, 900, 2300, 2100]
          },
          {
            name: '2017',
            type: 'bar',
            stack: '总量',
            barWidth: 32, // 柱图宽度
            itemStyle: {
              normal: { label: { show: true, position: 'insideRight' } }
            },
            data: [2200, 1820, 1910, 2340, 2900, 3300, 3100]
          }
        ]
      }
      var myChart = this.$echarts.init(
        document.getElementsByClassName('awardEcharts')[0]
      )
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    bookPicOptionsFn (leg, data, index) {
      var option = {
        color: ['#3398DB'],
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
            data: [
              '一年级上学期',
              '一年级下学期',
              '二年级上学期',
              '二年级上学期',
              '三年级上学期',
              '三年级下学期'
            ],
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
            color: '#70ad47',
            barWidth: '60%',
            data: [45, 65, 46, 48, 18, 52]
          }
        ]
      }
      var myChart = this.$echarts.init(
        document.getElementsByClassName('bookEcharts')[0]
      )
      myChart.setOption(option)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    RechargeOptionsFn (leg, data) {
      var option = {
        title: {
          text: '充值',
          x: '52%',
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
          data: ['1月', '2月', '3月']
        },
        color: ['#70ad47', '#ffc000', '#ed7d31'],
        series: [
          {
            name: name,
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['55%', '60%'],
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
                length: 10,
                length2: 10
              }
            },
            data: [
              {
                name: '1月',
                value: '20'
              },
              {
                name: '2月',
                value: '50'
              },
              {
                name: '3月',
                value: '30'
              }
            ]
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
    consumeOptionsFn (leg, data, index) {
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
          data: ['1月', '2月', '3月']
        },
        color: ['#70ad47', '#ffc000', '#ed7d31'],
        series: [
          {
            name: name,
            type: 'pie',
            radius: ['50%', '70%'],
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
                length: 10,
                length2: 10
              }
            },
            data: [
              {
                name: '1月',
                value: '15'
              },
              {
                name: '2月',
                value: '45'
              },
              {
                name: '3月',
                value: '30'
              }
            ]
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
    },
    getCurrentPageScore () {},
    getCurrentPageLoan () {}
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
.mainContentA .portraitTable {
  margin-top: 40px;
}
.mainContentA .portraitTable .el-table {
  height: auto;
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
  margin-top: 0;
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
  padding-bottom: 30px;
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
#mainPortrain .score .el-table {
  height: 246px;
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
  width: 80%;
  display: inline-block;
  text-align: center;
}
#mainPortrain .box-card {
  margin-bottom: 0;
}
</style>
