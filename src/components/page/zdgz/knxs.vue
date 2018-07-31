<template>
  <div class="mainContent_school">
    <!-- 馆藏图书资料 -->
    <div class="list_card marginBtom24 clearfix width_3">
      <div class="schoolShow">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor1">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">困难学生总数</p>
            <p class="num">
              <span>{{list_xs.value1}}</span> 人
            </p>
          </div>
        </el-card>
      </div>
      <div class="schoolShow">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor2">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">特别贫困</p>
            <p class="num">
              <span>{{list_xs.value2}}</span> 人
            </p>
          </div>
        </el-card>
      </div>
      <div class="schoolShow last">
        <el-card class="box-card clearfix">
          <div class="countBoxL">
            <i class="iconfont iconColor3">&#xe644;</i>
          </div>
          <div class="countBoxR">
            <p class="text">一般贫困</p>
            <p class="num">
              <span>{{list_xs.value3}}</span> 人
            </p>
          </div>
        </el-card>
      </div>
    </div>
    <!--  -->
    <div class="schoolCont marginBtom24">
      <div class="schoolGroup marginBto24">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="acreagePic">
              <el-card class="box-card">
                <div class="acreageEcharts" id="cjs_chart_01"></div>
              </el-card>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="fundsPic">
              <el-card class="box-card">
                <div class="fundsEcharts" id="cjas_chart_02"></div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--  -->
    <div class="expandBox marginBtom24">
      <el-card class="box-card">
        <div class="expandEcharts" id="cjs_chart_03"></div>
      </el-card>
    </div>
    <!--  -->
    <div class="expandBox marginBtom24">
      <el-card class="box-card">
        <div class="expandEcharts" id="cjs_chart_04" style="height: 500px;"></div>
      </el-card>
    </div>
    <!--  -->
    <div class="expandBox marginBtom24">
      <el-card class="box-card">
        <div class="expandEcharts" id="cjs_chart_05" style="height: 500px;"></div>
      </el-card>
    </div>
    <!--  -->
    <div class="expandBox marginBtom24">
      <el-card class="box-card">
        <div class="expandEcharts" id="cjs_chart_06"></div>
      </el-card>
    </div>
    <!--  -->
    <div class="expandBox marginBtom24">
      <el-card class="box-card">
        <div class="expandEcharts" id="cjs_chart_07"></div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list_xs: {
        value1: 250,
        value2: 100,
        value3: 150
      }
    };
  },
  mounted() {
    this.getGnjpksrs();
    this.showPie({
      dom: "cjas_chart_02",
      title: "困难生男女生占比",
      series: [
        {
          type: "pie",
          name: "男女占比",
          radius: "60%",
          data: [
            {
              value: 62,
              name: "男"
            },
            {
              value: 18,
              name: "女"
            }
          ]
        }
      ]
    });
    // 历年各学院困难生人数
    this.getLngxyknsrs();
    // 奖学金
    this.getJxj();
    // 困难生历年获助学金变化
    this.getJxj2()
    this.getKnslnhqzxdkbh()
    this.getKnslnhqzxdkbh_2()
  },
  methods: {
    // 获取各年级贫困生人数
    getGnjpksrs() {
      let series = [
        {
          type: "bar",
          data: [100, 50, 80]
        }
      ];
      let xAxis = ["一年级", "二年级", "三年级"];
      this.showLine({
        series: series,
        dom: "cjs_chart_01",
        title: "各年级贫困生人数",
        xAxis: xAxis
      });
    },
    getLngxyknsrs() {
      let arr = [
        [100, 57, 86, 90, 74, 50, 1, 99, 68, 33, 64],
        [9, 81, 54, 34, 86, 79, 51, 1, 55, 41, 60],
        [1, 14, 84, 13, 55, 55, 16, 83, 62, 70, 21],
        [84, 24, 30, 2, 87, 30, 55, 34, 56, 63, 69],
        [67, 69, 22, 9, 22, 27, 36, 9, 16, 65, 43],
        [12, 76, 47, 38, 22, 10, 21, 85, 69, 33, 12]
      ];
      let nArr = ["2017年", "2016年", "2015年", "2014年", "2013年", "2012年"];
      let series = [];
      for (let i = 0; i < nArr.length; i++) {
        series.push({
          type: "bar",
          stack: 1,
          name: nArr[i],
          data: arr[i]
        });
      }
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
      this.showLine({
        series: series,
        dom: "cjs_chart_03",
        title: "历年各学院困难生人数",
        xAxis: xAxis,
        legend: nArr
      });
    },
    getJxj() {
      let arr = [
        [142, 475, 5, 6],
        [381, 85, 7, 128],
        [468, 29, 2, 20],
        [322, 424, 6, 138],
        [9, 148, 2, 194],
        [338, 118, 3, 66],
        [289, 100, 9, 110],
        [80, 99, 9, 160],
        [80, 417, 7, 1],
        [51, 168, 2, 52]
      ];
      let nArr = ["2017年", "2016年", "2015年", "2014年", "2013年", "2012年", '2011年', '2010年', '2009年', '2008年'];
      let series = [];
      let xAxis = [
        "国家奖学金",
        "国家励志奖学金",
        "学科优秀奖和科技创新奖",
        "优秀学生综合奖学金"
      ];
      for (let i = 0; i < xAxis.length; i++) {
        let mArr = []
        for (let item of arr) {
          mArr.push(item[i])
        }
        series.push({
          type: "bar",
          stack: 1,
          name: xAxis[i],
          data: mArr.reverse()
        });
      }
      this.showLine({
        series: series,
        dom: "cjs_chart_04",
        title: "困难生历年获奖学金变化",
        xAxis: nArr.reverse(),
        legend: xAxis
      });
    },
    // 困难生历年获助学金变化
    getJxj2() {
      let arr = [
        [2640, 419, 1709],
        [1418, 1453, 990],
        [3011, 1388, 1405],
        [1525, 2988, 75],
        [551, 2644, 3446],
        [426, 3470, 2683],
        [1041, 123, 2383],
        [2837, 3596, 3162],
        [1736, 2911, 24],
        [3750, 2791, 2219],
      ];
      let nArr = ["2017年", "2016年", "2015年", "2014年", "2013年", "2012年", '2011年', '2010年', '2009年', '2008年'];
      let series = [];
      let xAxis = [
        "国家助学金一等",
        "国家助学金二等",
        "国家助学金三等"
      ];
      for (let i = 0; i < xAxis.length; i++) {
        let mArr = []
        for (let item of arr) {
          mArr.push(item[i])
        }
        series.push({
          type: "bar",
          stack: 1,
          name: xAxis[i],
          data: mArr.reverse()
        });
      }
      this.showLine({
        series: series,
        dom: "cjs_chart_05",
        title: "困难生历年获奖学金变化",
        xAxis: nArr.reverse(),
        legend: xAxis
      });
    },
    // 困难生历年获助学贷款变化
    getKnslnhqzxdkbh() {
      let arr = [
        [17, 57, 62, 96, 105, 80],
        [77, 172, 197, 188, 170, 192]
      ];
      let nArr = ["国家助学贷款", "生源地信用贷款"];
      let series = [];
      for (let i = 0; i < nArr.length; i++) {
        series.push({
          type: "bar",
          stack: 1,
          name: nArr[i],
          data: arr[i].reverse()
        });
      }
      let xAxis = [
        "2017年",
        "2016年",
        "2015年",
        "2014年",
        "2013年",
        "2012年"
      ];
      this.showLine({
        series: series,
        dom: "cjs_chart_06",
        title: "困难生历年获助学贷款变化",
        xAxis: xAxis.reverse(),
        legend: nArr
      });
    },
    // 困难生历年获学费减免变化
    getKnslnhqzxdkbh_2() {
      let arr = [
        [12, 92, 73, 159, 83, 124],
        [16, 99, 39, 137, 95, 187],
        [27, 41, 64, 12, 143, 18]
      ];
      let nArr = ["减", "免", '缓'];
      let series = [];
      for (let i = 0; i < nArr.length; i++) {
        series.push({
          type: "bar",
          stack: 1,
          name: nArr[nArr.length -1 -i],
          data: arr[i].reverse()
        });
      }
      let xAxis = [
        "2017年",
        "2016年",
        "2015年",
        "2014年",
        "2013年",
        "2012年"
      ];
      this.showLine({
        series: series,
        dom: "cjs_chart_07",
        title: "困难生历年获助学贷款变化",
        xAxis: xAxis,
        legend: nArr
      });
    },
    showLine(option) {
      let { series, dom, title = "", legend = [], xAxis } = option;
      this.$ChartUtil.drawChart(
        dom,
        title,
        legend,
        "",
        series,
        xAxis,
        false,
        {
          legend: {
            data: legend,
            top: 40
          },
          yAxis: [
            {
              type: "value",
              name: "（人）"
            }
          ],
          grid: {
            x: 60,
            x2: 90,
            y: 90,
            y2: 80
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            },
            textAlign: "left",
            textStyle: {
              textAlign: "left"
            }
          },
          customattrs: { xrotate: -30 }
        },
        this
      );
    },
    showPie(option) {
      let { dom, title, series } = option;
      this.$ChartUtil.drawChartNoXY(
        dom,
        title,
        [],
        this.$ChartUt.VERTICAL,
        series,
        [],
        {},
        this
      );
    }
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
</style>
