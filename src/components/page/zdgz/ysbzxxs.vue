<template>
  <div class="mainContent_school">
    <div class="expandBox marginBtom24 marginTop24">
      <div class="titleTop_2 clearfix">
        <div class="titleTop">
          疑似不在校预警
        </div>
        <el-date-picker v-model="date_ysbzxyj" type="date" placeholder="选择日期" :editable="false" size="small" :clearable="false" @change="timeChange_1">
        </el-date-picker>
      </div>
      <el-card class="box-card">
        <div class="schoolShowGroup clearfix cjs_school_new" style="margin-bottom:10px">
          <div class="box_title">
            {{mydateFormat.dateCodeYmd(date_ysbzxyj)}} 疑似不在校 {{value_ysbzx}} 人次
          </div>
          <div class="table_box">
            <el-table :data="tableData3" style="width: 100%">
              <el-table-column prop="dept_name" label="组织机构"  align="left">
              </el-table-column>
              <el-table-column prop="num" label="在校生" width="150" align="center">
              </el-table-column>
              <el-table-column label="疑似不在校" align="center">
                <el-table-column prop="num1" label="人数" width="120" align="center" sortable>
                </el-table-column>
                <el-table-column prop="per1" label="占比" width="120" align="center" sortable>
                </el-table-column>
              </el-table-column>
              <el-table-column label="连续3天不在校" align="center">
                <el-table-column prop="num2" label="人数" width="120" align="center" sortable>
                </el-table-column>
                <el-table-column prop="per2" label="占比" width="120" align="center" sortable>
                </el-table-column>
              </el-table-column>
              <el-table-column label="连续7天不在校" align="center">
                <el-table-column prop="num3" label="人数" width="120" align="center" sortable>
                </el-table-column>
                <el-table-column prop="per3" label="占比" width="120" align="center" sortable>
                </el-table-column>
              </el-table-column>
              <el-table-column label="连续10天不再校" align="center">
                <el-table-column prop="num4" label="人数" width="120" align="center" sortable>
                </el-table-column>
                <el-table-column prop="per4" label="占比" width="120" align="center" sortable>
                </el-table-column>
              </el-table-column>
              <el-table-column label="导出" width="150" align="center">
                <template slot-scope="scope">
                  <el-button>
                    <i class="iconfont">&#xe63a;</i>
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-card>
    </div>
    <!-- 疑似不在校分析 -->
    <div class="expandBox marginBtom24 marginTop24">
      <div class="titleTop_2 clearfix">
        <div class="titleTop">
          疑似不在校分析
        </div>
        <el-select v-model="value_ysbzxfx" placeholder="请选择" size="small" @change="change_1">
          <el-option v-for="item in ysbzxfx_options" :key="item.id" :label="item.label" :value="item.id">
          </el-option>
        </el-select>
      </div>
      <el-card class="box-card">
        <div class="schoolShowGroup clearfix cjs_school_new" style="margin-bottom:10px">
          <div id="cjs_chart_ysbzxfx" class="expandEcharts"></div>
        </div>
      </el-card>
    </div>
    <!-- 疑似不在校总时间分析 -->
    <div class="expandBox marginBtom24 marginTop24">
      <el-card class="box-card">
        <div class="schoolShowGroup clearfix cjs_school_new" style="margin-bottom:10px">
          <div id="cjs_chart_ysbzxzsjfx" class="expandEcharts"></div>
        </div>
      </el-card>
    </div>
    <!-- 疑似不在校持续时间分析 -->
    <div class="expandBox marginBtom24 marginTop24">
      <el-card class="box-card">
        <div class="schoolShowGroup clearfix cjs_school_new" style="margin-bottom:10px">
          <div id="cjs_chart_ysbzxcxsjfx" class="expandEcharts"></div>
        </div>
      </el-card>
    </div>
    <!-- 间断性不在校次数分析 -->
    <div class="expandBox marginBtom24 marginTop24">
      <el-card class="box-card">
        <div class="schoolShowGroup clearfix cjs_school_new" style="margin-bottom:10px">
          <div id="cjs_chart_jdxbzxcsfx" class="expandEcharts"></div>
        </div>
      </el-card>
    </div>
    <div class="expandBox marginBtom24 marginTop24">
      <div class="titleTop_2 clearfix">
        <div class="titleTop">
          不在校分析
        </div>
      </div>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card class="box-card">
            <div class="schoolShowGroup clearfix cjs_school_new" style="margin-bottom:10px">
              <div id="cjs_chart_01" class="expandEcharts"></div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card">
            <div class="schoolShowGroup clearfix cjs_school_new" style="margin-bottom:10px">
              <div id="cjs_chart_02" class="expandEcharts"></div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card">
            <div class="schoolShowGroup clearfix cjs_school_new" style="margin-bottom:10px">
              <div id="cjs_chart_03" class="expandEcharts"></div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      // 疑似不在校预警时间
      date_ysbzxyj: this.mydateFormat.dateCodeYmd(new Date()),
      value_ysbzx: "0",
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      // 疑似不在校分析
      value_ysbzxfx: 2,
      ysbzxfx_options: [
        {
          id: 1,
          label: "2017-2018第一学期"
        },
        {
          id: 2,
          label: "2017-2018第二学期"
        }
      ]
    };
  },
  mounted() {
    // 疑似不在校预警
    this.getYsbzxyj()
    // 疑似不在校分析
    this.getYsbzxfx(2);
    // 疑似不在校总时间分析
    this.getYsbzxzsjfx();
    // 疑似不在校持续时间分析
    this.getYsbzxcxsjfx();
    // 疑似不在校次数分析
    this.getJdxbzxcsfx();
    this.getChart_1()
    this.getChart_2()
    this.getChart_3()
  },
  methods: {
    timeChange_1 () {
      this.getYsbzxyj()
    },
    // 获取疑似不在校预警
    getYsbzxyj () {
      // /tr/suspect/web/getStuSuspect?queryDate=
      let data = {
        queryDate: this.mydateFormat.dateCodeYmd(this.date_ysbzxyj)
      }
      this.$ajaxGet('/tr/suspect/web/getStuSuspect', data, (res) => {
        if (res.success) {
          this.value_ysbzx = res.data.num
          this.tableData3 = res.obj
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    change_1(n) {
      this.getYsbzxfx(n);
    },
    // 疑似不在校分析
    getYsbzxfx(n) {
      let arr = [
        [10, 50, 41, 7, 42, 20, 22, 11, 43, 7, 16],
        [41, 18, 46, 22, 31, 17, 14, 7, 48, 36, 15]
      ];
      let series = [
        {
          data: arr[n - 1],
          type: "bar"
        }
      ];
      let xAxis = [
        "人文系",
        "信息工程系",
        "农林与食品工程系",
        "医疗卫生系",
        "外语系",
        "机电工程汽车系",
        "航空工程系",
        "艺术系",
        "规划建筑工程系",
        "财贸经济系",
        "软件学院"
      ];
      this.$ChartUtil.drawChart(
        "cjs_chart_ysbzxfx",
        "各学院疑似不在校归分析",
        [],
        "",
        series,
        xAxis,
        true,
        {
          yAxis: [
            {
              type: "value",
              name: "（天/人）"
            }
          ],
          grid: {
            y2: 100
          }
        },
        this
      );
    },
    // 疑似不在校总时间分析
    getYsbzxzsjfx() {
      let series = [
        {
          data: [2698, 2687, 2484, 2306, 1717, 1153, 515, 362, 342, 225],
          type: "line"
        }
      ];
      let xAxis = [
        "15-30天",
        "30-45天",
        "45-60天",
        "60-75天",
        "75-90天",
        "90-105天",
        "105-120天",
        "120-135天",
        "150-165天",
        "150天以上"
      ];
      this.$ChartUtil.drawChart(
        "cjs_chart_ysbzxzsjfx",
        "疑似不在校总时间分析",
        [],
        "",
        series,
        xAxis,
        false,
        {
          yAxis: [
            {
              type: "value",
              name: "（人）"
            }
          ]
        },
        this
      );
    },
    // 疑似不在校持续时间分析
    getYsbzxcxsjfx() {
      let series = [
        {
          data: [2563, 2356, 2178, 2029, 1949, 1628, 1023, 691, 552, 493],
          type: "line"
        }
      ];
      let xAxis = [
        "10-20天",
        "20-30天",
        "30-40天",
        "40-50天",
        "50-60天",
        "60-70天",
        "80-90天",
        "90-100天",
        "100-110天",
        "110天以上"
      ];
      this.$ChartUtil.drawChart(
        "cjs_chart_ysbzxcxsjfx",
        "疑似不在校持续时间分析",
        [],
        "",
        series,
        xAxis,
        false,
        {
          yAxis: [
            {
              type: "value",
              name: "（人）"
            }
          ]
        },
        this
      );
    },
    // 间断性不在校次数分析
    getJdxbzxcsfx() {
      let series = [
        {
          data: [2931, 2021, 2013, 1885, 1673, 1118, 1099, 962, 324, 194, 30],
          type: "line"
        }
      ];
      let xAxis = [
        "1次",
        "2次",
        "3次",
        "4次",
        "5次",
        "6次",
        "7次",
        "8次",
        "9次",
        "10次",
        "10次以上"
      ];
      this.$ChartUtil.drawChart(
        "cjs_chart_jdxbzxcsfx",
        "间断性不在校次数分析",
        [],
        "",
        series,
        xAxis,
        false,
        {
          yAxis: [
            {
              type: "value",
              name: "（人）"
            }
          ]
        },
        this
      );
    },
    // 所有不在校分析
    getChart_1 () {
      let series = [
        {
          data: [40, 25, 43, 20],
          type: "bar"
        }
      ];
      let xAxis = [
        "大一",
        "大二",
        "大三",
        "大四"
      ];
      this.showChart({
        series: series,
        xAxis: xAxis,
        dom: 'cjs_chart_01'
      })
    },
    getChart_2 () {
      let series = [
        {
          data: [30, 25],
          type: "bar"
        }
      ];
      let xAxis = [
        "男",
        "女"
      ];
      this.showChart({
        series: series,
        xAxis: xAxis,
        dom: 'cjs_chart_02'
      })
    },
    getChart_3 () {
      let series = [
        {
          data: [40, 15, 23, 30, 28],
          type: "bar"
        }
      ];
      let xAxis = [
        "党员",
        "预备党员",
        "团员",
        "群众",
        "其他"
      ];
      this.showChart({
        series: series,
        xAxis: xAxis,
        dom: 'cjs_chart_03'
      })
    },
    showChart (options) {
      let {series, xAxis, dom } = options
      this.$ChartUtil.drawChart(
        dom,
        "",
        [],
        "",
        series,
        xAxis,
        false,
        {
          yAxis: [
            {
              type: "value",
              name: "（天/人）"
            }
          ],
          grid: {
            // y2: 100
          }
        },
        this
      );
    },
  }
};
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
.marginTop24 {
  margin-top: 24px;
}
.marginBtom24 {
  margin-bottom: 24px;
}
.mainContent_school {
  background-color: #f1f4f5;
  padding: 0 1.64%;
}
.mainContent_school .titleTop {
  line-height: 18px;
  padding-top: 0;
  font-size: 18px;
  color: #37474f;
  padding-left: 10px;
  border-left: 5px solid #70ad47;
  margin-bottom: 24px;
}
.mainContent_school .box-card {
  position: relative;
}
.mainContent_school .textTitle {
  color: #37474f;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 15px;
}
.captionTitle {
  padding-left: 15px;
  font-size: 16px;
  color: #76838f;
  line-height: 58px;
  margin-bottom: 10px;
  height: 58px;
  border-bottom: 1px solid #e4eaec;
}
.mainContent_school .box-card .caption {
  padding-left: 15px;
  font-size: 14px;
  color: #76838f;
  line-height: 24px;
  margin-bottom: 10px;
}
.mainContent_school .box-card .caption span {
  color: #70ad47;
}
.mainContent_school .box-card .captionA span {
  margin-right: 15px;
}
.mainContent_school .box-card .caption .down {
  color: #ed7d31;
  padding-left: 10px;
}
.schoolShow {
  margin-top: 24px;
  float: left;
  width: 24%;
  margin-right: 1.3%;
}
.schoolShow .box-card {
  margin-bottom: 0;
}
.list_card .last {
  margin-right: 0;
}
.schoolShow .countBoxL,
.countBoxR {
  vertical-align: middle;
  display: inline-block;
  height: 70px;
  padding-bottom: 14px;
  padding-top: 14px;
}
.schoolShow .countBoxL {
  width: 30%;
  text-align: center;
}
.schoolShowA .countBoxL {
  width: 26%;
  text-align: center;
}
.schoolShow .countBoxL .iconfont {
  font-size: 32px;
  color: #fff;
  line-height: 62px;
}
.schoolShow .countBoxL .iconfont {
  font-size: 48px;
  line-height: 72px;
}
.schoolShow .countBoxL .iconColor1 {
  color: #70ad47;
}
.schoolShow .countBoxL .iconColor2 {
  color: #ffc000;
}
.schoolShow .countBoxL .iconColor3 {
  color: #62a8ea;
}
.schoolShow .countBoxL .iconColor4 {
  color: #ed7d31;
}
.schoolShow .countBoxL .iconColor5 {
  color: #a5a5a5;
}
.schoolShow .countBoxL .iconColorA {
  color: #dd6969;
}
.schoolShow .countBoxL .iconColorB {
  color: #f1cdcd;
}
.schoolShow .countBoxL .iconColor5 {
  color: #a5a5a5;
}
.schoolShow .countBoxR {
  width: 60%;
}
.schoolShowA .countBoxR {
  width: 70%;
}
.schoolShow p,
.schoolShow .text {
  text-align: left;
  font-size: 14px;
  color: #a3afb7;
  line-height: 24px;
  /* white-space: nowrap; */
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
}
.schoolShow p.num span {
  font-size: 30px;
  color: #526069;
  line-height: 43px;
}
.schoolGroup .box-card {
  /* height: 529px; */
}
.schoolGroup .acreageEcharts,
.schoolGroup .fundsEcharts {
  height: 400px;
}
.resourceBox .el-card__body {
  padding: 0;
}
.resourceBox .caption {
  font-size: 16px;
  line-height: 58px;
  color: #37474f;
  padding-right: 24px;
  border-bottom: 1px solid #e4eaec;
}

.resourceBox .item {
  float: left;
  width: 24.9%;
  height: 105px;
  padding-top: 32px;
  border-right: 1px solid #e4eaec;
}
.resourceBox .borderNone {
  border-right: none;
}
.resourceBox .resName {
  padding-left: 38px;
  line-height: 24px;
  font-size: 13px;
  color: #76838f;
  padding-bottom: 14px;
}
.resourceBox .resNum em {
  font-size: 30px;
  font-style: normal;
  line-height: 28px;
}
.resourceBox .resNum {
  padding-left: 38px;
  font-size: 14px;
}
.resourceBox .first {
  padding-right: 10px;
}
.color1 {
  color: #70ad47;
}
.color2 {
  color: #ffc000;
}
.color3 {
  color: #62a8ea;
}
.color4 {
  color: #ed7d31;
}
.schoolShowGroup {
  text-align: center;
}
.expandBox .schoolShow {
  float: none;
  display: inline-block;
  margin-right: 24px;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  width: 25%;
}
.expandBox .schoolShowA {
  width: 30%;
}
.expandEcharts,
.RecruitStudentsEcharts,
.SituationEcharts,
.graduatioEcharts {
  height: 336px;
}
.schoolTerm_List .schoolShow,
.CollegeInfo .schoolShow,
.courseInfo .schoolShow,
.CourseSituation .schoolShow {
  width: 100%;
  margin-top: 0;
  margin-bottom: 24px;
}
.teachTOPA .box-card {
  height: 400px;
}
.teachTOPA .topListItem {
  margin-bottom: 8px;
}
.teachTOPA .listTop {
  padding-top: 10px;
}
.teachTOPA .topListItem .number {
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
.teachTOPA .topListItem .topName {
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
.teachTOPA .topListItem .month {
  float: right;
  padding-right: 25px;
  line-height: 32px;
  color: #76838f;
  font-size: 12px;
  vertical-align: middle;
}
.situationGroup .ratioEcharts,
.situationGroup .teachSituation {
  height: 360px;
}
.peopleGroup .peopleNum {
  height: 360px;
}
.teachSturdentRaio {
  height: 360px;
}
.averageEcharts {
  height: 360px;
}
.courseInfo .schoolShowInfo .box-card {
  background-color: #70ad47;
}
.courseInfo .schoolShowInfo p,
.courseInfo .schoolShowInfo .text,
.courseInfo .schoolShowInfo p.num span {
  color: #fff;
}
.schoolShowInfo .countBoxL .iconfont {
  font-size: 36px;
}
.studentAndTeach {
  height: 263px;
}
.bookNumEcharts {
  height: 360px;
}
.teachMoney {
  height: 360px;
}
.FiveMoney {
  height: 360px;
}
.deviceEcharts,
.fundsCompareEcharts,
.deviceEchartsScale,
.studentScale {
  height: 360px;
}

.bookGroup .xqItem {
  /* padding-top: 35px; */
  height: 172px;
  text-align: center;
  border-right: 1px solid #e4eaec;
}
.bookGroup .xqItem p {
  font-size: 14px;
  color: #a3afb7;
  line-height: 24px;
}
.bookGroup .xqItem p .iconfont {
  font-size: 23px;
  color: #c6d9c3;
  line-height: 50px;
}
.bookGroup .xqItem .num {
  padding-top: 35px;
  line-height: 38px;
  text-align: center;
  font-size: 30px;
  color: #526069;
}
.bookGroup .item_book {
  width: 45%;
  float: left;
}
.bookGroup .item_bookA {
  float: right;
}
.bookGroup .xqItem {
  width: 49%;
  float: left;
  border-top: 1px solid #e4eaec;
  margin-top: 14px;
}
.book_topTitle {
  font-size: 16px;
  line-height: 55px;
  text-align: center;
  color: #fff;
  background-color: #70ad47;
}
.book_topTitleA {
  background-color: #ed7d31;
}
.bookGroup .borderNone {
  border-right: none;
}
.borderTop {
  border-top: 1px solid #e4eaec;
}
.bookGroup .xqItem .num {
  color: #70ad47;
}
.bookGroup .item_bookA .num {
  color: #ed7d31;
}
.pieEcharts {
  height: 360px;
}
.selectYear {
  position: absolute;
  right: 7%;
  top: 48px;
  z-index: 99;
}
.chart_show_div {
  width: 100%;
  height: 100%;
}
.width_3 .schoolShow {
  width: 32%;
  margin-right: 2%;
}
.width_3 .schoolShow.last {
  margin-right: 0;
}
.width_2 .schoolShow {
  width: 49%;
  margin-right: 2%;
}
.width_2 .schoolShow.last {
  margin-right: 0;
}
.titleTop_2 .titleTop {
  float: left;
  margin-top: 6px;
  margin-right: 20px;
}
.box_title {
  text-align: left;
}
</style>
